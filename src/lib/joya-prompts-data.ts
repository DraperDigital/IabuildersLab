export interface JoyaPromptControl {
  label: string;
  value: string;
}

export interface JoyaPromptItem {
  id: string;
  number: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  controls: JoyaPromptControl[];
  prompt: string;
  extraNote?: string;
}

export const JOYA_PROMPTS: JoyaPromptItem[] = [
  {
    id: "01",
    number: "PROMPT 01",
    title: "Estudio de lujo",
    image: "/joya/02-estudio.jpg",
    alt: "Collar de alta joyería con esmeraldas y diamantes amarillos sobre piedra volcánica negra en estudio",
    description: "Sobre piedra volcánica, con reflejo controlado y el metal bien definido.",
    controls: [
      { label: "Luz", value: "Softbox 45° + contraluz" },
      { label: "Superficie", value: "Piedra volcánica" },
      { label: "Lente", value: "100 mm macro" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

Premium studio product photograph of that exact piece resting on a slab of raw black volcanic stone with a rough, matte texture, placed on a glossy black acrylic floor that mirrors a soft, clean reflection of the piece. Background is a deep charcoal studio sweep fading to near-black, with one out-of-focus warm brass curve in the far background for depth.

Lighting: one large softbox as key light from the upper right at 45 degrees, a narrow strip light from behind on the left creating a thin rim along the metal edge, black flags on both sides so the metal shows defined dark lines between highlights. Small, controlled specular sparkles on the stones, no blown-out glare. Real contact shadow where the piece touches the stone.

Mood: quiet, expensive, confident. Camera: 100mm macro lens, slightly low three-quarter angle, the piece placed on the right third of the frame, the left 45% of the frame dark and uncluttered for text overlay. Shallow depth of field, focus on the main stone.

Finish: high-end jewelry advertising photography, neutral-warm color grade, deep blacks with detail, crisp metal texture, very fine grain, no text, no watermark, no logos. Aspect ratio 4:5.`,
  },
  {
    id: "02",
    number: "PROMPT 02",
    title: "Macro detalle",
    image: "/joya/03-macro.jpg",
    alt: "Macro detalle en primer plano de piedras preciosas facetadas y engastes de oro",
    description: "Facetas, garras y textura del metal. El detalle que justifica el precio.",
    controls: [
      { label: "Luz", value: "Dura a 30°" },
      { label: "Enfoque", value: "Apilado en las facetas" },
      { label: "Lente", value: "Macro 2:1" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

Extreme macro close-up photograph of that exact piece, framed tight on its main stone and setting so the cut facets, prongs, metal grain, tiny polishing marks and any milgrain or pavé detail are clearly visible. The rest of the piece falls quickly out of focus into soft warm bokeh. Background is a dark warm brown-black blur.

Lighting: a small hard light from the top right at 30 degrees to make the facets sparkle with sharp pinpoint highlights, plus a soft fill from the left at low intensity so the metal keeps its form. Visible fire and light dispersion inside the stone, real micro-reflections on the metal, no plastic or CGI look.

Mood: precision, craftsmanship, value in the details. Camera: 100mm macro lens at 2:1 magnification, focus stacked on the front facets of the main stone, very shallow depth of field, the stone positioned in the right half of the frame, the left 40% of the frame dark and soft for text overlay.

Finish: luxury jewelry macro photography, warm gold color grade, high micro-contrast, tack-sharp facets, natural fine grain, no text, no watermark. Aspect ratio 4:5.`,
  },
  {
    id: "03",
    number: "PROMPT 03",
    title: "Elegancia romántica",
    image: "/joya/04-romantica.jpg",
    alt: "Pieza de joyería sobre seda champán con rosas y luz cálida de atardecer",
    description: "Seda, rosas y luz de tarde. Para regalos y compromisos.",
    controls: [
      { label: "Luz", value: "Ventana cálida 3500K" },
      { label: "Textura", value: "Seda + travertino" },
      { label: "Lente", value: "85 mm" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

Romantic still-life photograph of that exact piece resting on the edge of a cream travertine stone block, on top of softly draped champagne silk with natural folds and creases. A blush pink garden rose and small sprigs of white baby's breath sit out of focus behind it, two loose rose petals on the silk in the foreground.

Lighting: warm late-afternoon window light from the right at a low angle, golden temperature around 3500K, creating long soft shadows of the petals and a real contact shadow under the piece; gentle sheen moving across the silk folds; delicate sparkle on the stones.

Mood: tender, intimate, gift-worthy, like a proposal moment. Camera: 85mm lens, eye-level three-quarter view, piece on the right third, the left 45% of the frame filled with soft silk and shadow, uncluttered for text overlay. Shallow depth of field.

Finish: editorial luxury still life, warm peach and gold grade, soft contrast, creamy highlights, subtle film grain, no text, no watermark. Aspect ratio 4:5.`,
  },
  {
    id: "04",
    number: "PROMPT 04",
    title: "Lujo oscuro",
    image: "/joya/05-oscuro.jpg",
    alt: "Joya sobre espejo negro con iluminación puntual y reflejos nítidos",
    description: "Fondo negro, un solo foco y reflejo de espejo. Para piezas que imponen.",
    controls: [
      { label: "Luz", value: "Un foco a 60°" },
      { label: "Superficie", value: "Espejo negro" },
      { label: "Ángulo", value: "Bajo, a ras del reflejo" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

Dark luxury product photograph of that exact piece standing on a black mirror-polished surface that creates a full, slightly darker reflection beneath it, leaning against a matte black stone cube with fine texture. Background is pure deep black with two blurred warm gold light streaks curving in the far background.

Lighting: low-key setup, a single narrow spotlight from the upper right at 60 degrees hitting only the piece, a hairline rim light from behind to separate it from the black, everything else falling into deep shadow. Strong but controlled specular highlights on the metal, crisp sparkle on each stone, no haze.

Mood: bold, mysterious, exclusive. Camera: 100mm lens, low angle just above the surface so the reflection is visible, piece on the right half, the left 45% of the frame pure black for text overlay. Moderate depth of field, the full piece sharp.

Finish: high-contrast luxury advertising, rich blacks, warm gold highlights, clean reflections, very fine grain, no text, no watermark. Aspect ratio 4:5.`,
  },
  {
    id: "05",
    number: "PROMPT 05",
    title: "Joya de palacio",
    image: "/joya/06-palacio.jpg",
    alt: "Pieza de alta joyería sobre terciopelo y mármol con salón clásico iluminado al fondo",
    description: "Mármol, terciopelo y salón barroco. Herencia sin decir una palabra.",
    controls: [
      { label: "Luz", value: "Hora dorada lateral" },
      { label: "Escena", value: "Salón barroco" },
      { label: "Soporte", value: "Según el tipo de pieza" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

Regal editorial photograph of that exact piece displayed on a beige velvet jewelry stand (bust if it is a necklace, ring cone or cushion if it is a ring, bracelet T-bar if it is a bracelet) placed on a white Carrara marble pedestal with a gold-trimmed edge. Behind it, an out-of-focus baroque palace hall with marble columns, arches, a lit crystal chandelier and a classical marble bust; a deep burgundy velvet drape with gold embroidery falls across the lower left corner.

Lighting: warm golden hour light entering from tall windows on the right, soft haze in the hall, key light grazing the piece from the right at 45 degrees, a warm bounce from the marble lighting it from below. Glints of the chandelier reflected in the metal.

Mood: heritage, royalty, timeless status. Camera: 70mm lens, eye level, piece slightly right of center, the left 40% of the frame occupied by the dark drape and shadowed columns, calm enough for text overlay. Shallow depth of field.

Finish: luxury heritage campaign, warm ivory and gold grade with burgundy accents, soft contrast, fine grain, no text, no watermark. Aspect ratio 4:5.`,
  },
  {
    id: "06",
    number: "PROMPT 06",
    title: "Joya flotante",
    image: "/joya/07-flotante.jpg",
    alt: "Joya de lujo suspendida en el aire con pétalos de seda y destellos dorados",
    description: "Suspendida entre pétalos y partículas. Movimiento sin hacer video.",
    controls: [
      { label: "Luz", value: "Cenital + contraluz" },
      { label: "El truco", value: "Sombra en el pedestal" },
      { label: "Lente", value: "85 mm, ángulo bajo" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

Levitating product photograph of that exact piece floating in mid-air, tilted at a dynamic angle about 15 cm above a round black marble pedestal with gold veins. Around it, a few cream silk petals and thin gold satin ribbons drift frozen in motion, plus fine warm dust particles catching the light. Dark warm-black background with soft golden bokeh.

Lighting: a warm spotlight from directly above and slightly behind creating a halo and visible light beams through the particles, a soft key from the front right to reveal the stones, a faint soft shadow of the piece on the pedestal so it reads as truly floating. Starburst sparkle on the main stone, small and controlled.

Mood: magical, weightless, aspirational. Camera: 85mm lens, slightly low angle, piece on the right half of the frame, the left 40% of the frame dark with only soft bokeh for text overlay. Shallow depth of field, piece fully sharp, petals in the foreground blurred.

Finish: cinematic luxury advertising, warm amber and gold grade, deep blacks, gentle bloom on highlights, fine grain, no text, no watermark. Aspect ratio 4:5.`,
  },
  {
    id: "07",
    number: "PROMPT 07",
    title: "Joya y naturaleza",
    image: "/joya/08-naturaleza.jpg",
    alt: "Pieza fina sobre roca húmeda en arroyo cristalino con flores blancas de jazmín",
    description: "Piedra mojada, agua y rocío. Fresca y orgánica, nada de estudio.",
    controls: [
      { label: "Luz", value: "Sol filtrado a contraluz" },
      { label: "Escena", value: "Arroyo + jazmín" },
      { label: "Lente", value: "100 mm, a ras del agua" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

Natural outdoor product photograph of that exact piece resting on a wet, moss-flecked river stone in a shallow clear stream, small ripples of water flowing around the stone. Glossy green leaves with water droplets and two white jasmine flowers frame the scene from the right edge; background is a soft, dark green forest blur.

Lighting: warm low sunlight filtering through the foliage from the back left, creating backlit leaves, sparkling highlights on the water surface and droplets, and a warm key on the piece from the left side. Real wet reflections on the stone, a natural contact shadow under the piece.

Mood: fresh, organic, pure, timeless. Camera: 100mm macro lens, low angle close to the water line, piece on the right half of the frame, the left 40% of the frame darker green blur and water for text overlay. Shallow depth of field.

Finish: natural luxury editorial, warm greens and golds, crisp water detail, gentle contrast, fine grain, no text, no watermark. Aspect ratio 4:5.`,
  },
  {
    id: "08",
    number: "PROMPT 08",
    title: "Campaña de moda",
    image: "/joya/09-moda.jpg",
    alt: "Modelo femenina luciendo pieza de joyería fina en sesión editorial de moda",
    description: "Puesta en una modelo, enfocada y visible. Con piel real, no de plástico.",
    controls: [
      { label: "Luz", value: "Key 45° + brillo a la pieza" },
      { label: "Piel", value: "Poros visibles" },
      { label: "Lente", value: "85 mm, del pecho arriba" },
    ],
    prompt: `Reference images attached in this order: image 1 is the real jewelry piece (product reference). Reproduce the piece exactly as in image 1: same design, same metal color and finish, same number, shape and cut of stones, same setting, same proportions and any engraving. Do not redesign it, do not add or remove stones, do not change the metal tone.

High-end fashion campaign photograph of a woman in her early 30s wearing that exact piece, worn naturally where it belongs (on her finger, neck, wrist or ear), clearly visible and in focus. She has dark hair in a loose low updo with a few strands falling, natural skin texture with visible pores, soft warm makeup, an off-the-shoulder black velvet dress. She leans on a black marble table, chin resting lightly on her hand, calm direct gaze to camera.

Environment: an out-of-focus luxurious interior with warm gold mirror frames and soft lamp light; a blurred white flower arrangement in the foreground corner.

Lighting: soft warm key from the right at 45 degrees, gentle fill from the left, a subtle rim on her hair; the piece receives its own small highlight so the stones sparkle without glare.

Mood: confident, elegant, effortless. Camera: 85mm lens, medium close-up from chest up, eye level, model on the right two thirds, the left 35% of the frame dark and soft for text overlay. Shallow depth of field.

Finish: luxury fashion editorial, warm skin tones, rich blacks, soft contrast, fine film grain, no text, no watermark. Aspect ratio 4:5.`,
    extraNote:
      "¿Usas una modelo IA propia? Adjunta su hoja de cara como imagen 2 y cambia la descripción de la modelo por la de su ficha.",
  },
];

export function getAllJoyaPromptsFormatted(): string {
  return JOYA_PROMPTS.map(
    (item) => `### ${item.number} · ${item.title}\n\n${item.prompt}`
  ).join("\n\n---\n\n");
}
