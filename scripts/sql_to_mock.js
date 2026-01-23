
const fs = require('fs');
const path = require('path');

const originalSql = fs.readFileSync(path.join(__dirname, '../imported_prompts.sql'), 'utf8');

// Regex to capture INSERT VALUES
// VALUES (
//   'prompt',
//   'Case 100: ...',
//   'nano-banana-case-100',
//   ...
// )
const regex = /VALUES \(\s*'prompt',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'((?:[^']|'')*)',\s*'Generative AI',\s*'intermediate',\s*true,\s*false,\s*'free_preview',/g;

let matches;
const prompts = [];
const nanoTag = { id: "t-nano", name: "Nano Banana", slug: "nano-banana" };

const imageMap = {
    "Code Style Business Card": "/images/cases/code-style-card.jpg"
};

const titleTranslationMap = {
    "Creative Ad with Real Object and Hand-Drawn Doodle": "Anuncio Creativo: Objeto Real y Doodle",
    "Black and White Portrait Art": "Retrato Artístico en Blanco y Negro",
    "Blurred Silhouette Behind Frosted Glass": "Silueta Borrosa tras Vidrio Esmerilado",
    "Cute and Cozy Knitted Doll": "Muñeca de Tejido Acogedora",
    "Custom Anime Figure": "Figura de Anime Personalizada",
    "Code Style Business Card": "Tarjeta de Presentación Estilo Código",
    "Flat Sticker Design": "Diseño de Sticker Plano",
    "Q-version Emoji Sticker Pack Creation": "Pack de Stickers Emojis Versión Q",
    "Famous Painting Character Cereal Ad": "Anuncio de Cereal: Personaje de Arte",
    "Minimalist 3D Illustration": "Ilustración 3D Minimalista",
    "Funko Pop Figure Creation": "Creación de Figura Funko Pop",
    "Titanic Pose Parody": "Parodia de Pose Titanic",
    "Xiaohongshu Cover Image": "Portada Estilo Xiaohongshu",
    "Chibi Character Sticker Pack": "Pack de Stickers Chibi",
    "Action Figure and Real Person in the Same Frame": "Figura de Acción y Persona Real",
    "Country Diorama in a Toy Box": "Diorama de País en Caja de Juguetes",
    "Pixar 3D Style": "Estilo 3D de Pixar",
    "Retro CRT Computer Boot Screen": "Pantalla de Arranque Retro CRT",
    "Anime-style Badge": "Insignia Estilo Anime",
    "Satirical Poster Generation": "Generación de Póster Satírico",
    "One Piece Themed Figure Creation": "Figura Temática de One Piece",
    "Photo to 3D Q-version Style": "Foto a Estilo 3D Versión Q",
    "3D Couple Jewelry Box Figurine": "Figura 3D de Pareja en Joyero",
    "PS2 Game Cover (GTA x Shrek)": "Portada de Juego PS2 (GTA x Shrek)",
    "Satirical Cartoon Generation": "Generación de Caricatura Satírica",
    "Minimalist Futurist Poster": "Póster Futurista Minimalista",
    "Lego Collectible Figure": "Figura Coleccionable de Lego",
    "Personalized Room Design": "Diseño de Habitación Personalizada",
    "Character Stepping Through Portal": "Personaje Cruzando un Portal",
    "Ghibli Style": "Estilo Ghibli",
    "3D Chibi Chinese Wedding Scene": "Escena de Boda China 3D Chibi",
    "Retro Style Promotional Poster": "Póster Promocional Estilo Retro",
    "3D Polaroid Breakout Effect": "Efecto 3D Saliendo de Polaroid",
    "3D Chibi Proposal Scene": "Escena de Propuesta 3D Chibi",
    "Cyberpunk City": "Ciudad Cyberpunk",
    "Fantasy Landscape": "Paisaje de Fantasía",
    "Neon Portrait": "Retrato Neón",
    "Abstract Oil Painting": "Pintura al Óleo Abstracta",
    "Isometric Room": "Habitación Isométrica"
};

while ((matches = regex.exec(originalSql)) !== null) {
    const rawTitle = matches[1].replace(/^Case \d+: /, '');
    const title = titleTranslationMap[rawTitle] || rawTitle;
    const slug = matches[2];
    let summary = matches[3].replace(/''/g, "'"); // unescape SQL single quotes
    summary = summary.replace(/Created by .*\. Imported from Awesome Nano Banana\.(\r\n|\n|\r)?/g, '').trim();
    let body = matches[4].replace(/\\n/g, '\n').replace(/''/g, "'");
    body = body.replace(/Created by .*\. Imported from Awesome Nano Banana\.(\r\n|\n|\r)?/g, '').trim();

    const id = slug.replace('nano-banana-case-', 'nano-');

    const promptObj = {
        id: id,
        type: "prompt",
        title: title,
        slug: slug,
        summary: summary,
        body_markdown: body,
        prompt_text: body, // For mock simplicity using body as prompt text
        category: "Generative AI",
        level: "intermediate",
        // featured_image_url: imageMap[rawTitle] || null, // Removed to avoid null
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [nanoTag]
    };

    if (imageMap[rawTitle]) {
        promptObj.featured_image_url = imageMap[rawTitle];
    }

    prompts.push(promptObj);
}

const content = `export const EXTRA_MOCK_PROMPTS = ${JSON.stringify(prompts, null, 4)};`;
const outputPath = path.join(__dirname, '../src/lib/extra-mock-prompts.ts');

fs.writeFileSync(outputPath, content, 'utf8');
console.log(`Successfully wrote ${prompts.length} prompts to ${outputPath}`);
