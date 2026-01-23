import { ContentItem } from "@/types/content";
import { EXTRA_MOCK_PROMPTS } from "./extra-mock-prompts";

export const MOCK_SYSTEMS: ContentItem[] = [];

export async function getPublicSystems() {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_SYSTEMS;
}

export async function getSystemBySlug(slug: string) {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_SYSTEMS.find(s => s.slug === slug) || null;
}

export const MOCK_PROMPTS: ContentItem[] = [
    {
        id: "fb-1",
        type: "prompt",
        title: "Identificación de la audiencia a la que se dirige",
        slug: "identificacion-audiencia-objetivo-facebook",
        summary: "Ensayo sobre la importancia de identificar la audiencia en marketing online.",
        body_markdown: "Escribe un ensayo que describa la importancia de identificar la audiencia a la que se dirige en una estrategia de marketing en línea. Incluye consejos prácticos sobre cómo identificar la audiencia adecuada y cómo adaptar la estrategia de marketing para llegar a esa audiencia.",
        prompt_text: "Escribe un ensayo que describa la importancia de identificar la audiencia a la que se dirige en una estrategia de marketing en línea. Incluye consejos prácticos sobre cómo identificar la audiencia adecuada y cómo adaptar la estrategia de marketing para llegar a esa audiencia.",
        category: "Marketing de Facebook",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-facebook", name: "Facebook", slug: "facebook" }]
    },
    {
        id: "fb-2",
        type: "prompt",
        title: "Creación de buyer personas para comprender mejor a la audiencia",
        slug: "creacion-buyer-personas-marketing",
        summary: "Guía detallada sobre cómo crear buyer personas para negocios en línea.",
        body_markdown: "Escribe una guía detallada sobre cómo crear buyer personas para comprender mejor a la audiencia de un negocio en línea. Incluye los diferentes elementos que deben incluirse en una buyer persona, cómo utilizar la información obtenida y cómo adaptar la estrategia de marketing en función de los datos.",
        prompt_text: "Escribe una guía detallada sobre cómo crear buyer personas para comprender mejor a la audiencia de un negocio en línea. Incluye los diferentes elementos que deben incluirse en una buyer persona, cómo utilizar la información obtenida y cómo adaptar la estrategia de marketing en función de los datos.",
        category: "Marketing de Facebook",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-facebook", name: "Facebook", slug: "facebook" }]
    },
    {
        id: "fb-3",
        type: "prompt",
        title: "Selección de opciones de segmentación adecuadas",
        slug: "segmentacion-adecuada-marketing-online",
        summary: "Artículo sobre cómo seleccionar opciones de segmentación para llegar a la audiencia deseada.",
        body_markdown: "Escribe un artículo que explique cómo seleccionar las opciones de segmentación adecuadas para llegar a la audiencia deseada en una estrategia de marketing en línea. Incluye consejos sobre cómo seleccionar las opciones de segmentación adecuadas, cómo utilizar las herramientas de segmentación disponibles y cómo adaptar la estrategia de marketing en función de los datos obtenidos.",
        prompt_text: "Escribe un artículo que explique cómo seleccionar las opciones de segmentación adecuadas para llegar a la audiencia deseada en una estrategia de marketing en línea. Incluye consejos sobre cómo seleccionar las opciones de segmentación adecuadas, cómo utilizar las herramientas de segmentación disponibles y cómo adaptar la estrategia de marketing en función de los datos obtenidos.",
        category: "Marketing de Facebook",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-facebook", name: "Facebook", slug: "facebook" }]
    },
    {
        id: "fb-4",
        type: "prompt",
        title: "Establecimiento de objetivos de marketing",
        slug: "establecimiento-objetivos-marketing-online",
        summary: "Guía práctica para definir objetivos realistas y medibles.",
        body_markdown: "Escribe una guía práctica que describa cómo establecer objetivos de marketing para un negocio en línea. Incluye consejos sobre cómo definir objetivos realistas y alcanzables, cómo medir el éxito de los objetivos y cómo adaptar la estrategia de marketing en función de los datos obtenidos.",
        prompt_text: "Escribe una guía práctica que describa cómo establecer objetivos de marketing para un negocio en línea. Incluye consejos sobre cómo definir objetivos realistas y alcanzables, cómo medir el éxito de los objetivos y cómo adaptar la estrategia de marketing en función de los datos obtenidos.",
        category: "Marketing de Facebook",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-facebook", name: "Facebook", slug: "facebook" }]
    },
    {
        id: "fb-5",
        type: "prompt",
        title: "Definición de una estrategia de contenido",
        slug: "estrategia-contenido-efectiva-facebook",
        summary: "Informe sobre cómo planificar y diseñar contenido para mejorar el marketing.",
        body_markdown: "Escribe un informe que describa cómo definir una estrategia de contenido efectiva para un negocio en línea. Incluye los diferentes tipos de contenido que se pueden utilizar, cómo identificar la audiencia adecuada, cómo planificar y diseñar el contenido y cómo utilizar el contenido para mejorar la estrategia de marketing.",
        prompt_text: "Escribe un informe que describa cómo definir una estrategia de contenido efectiva para un negocio en línea. Incluye los diferentes tipos de contenido que se pueden utilizar, cómo identificar la audiencia adecuada, cómo planificar y diseñar el contenido y cómo utilizar el contenido para mejorar la estrategia de marketing.",
        category: "Marketing de Facebook",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-facebook", name: "Facebook", slug: "facebook" }]
    },
    {
        id: "fb-6",
        type: "prompt",
        title: "Planificación de campañas publicitarias",
        slug: "planificacion-campanas-publicitarias-exitosas",
        summary: "Guía detallada sobre canales, mensajes y medición de éxito publicitario.",
        body_markdown: "Escribe una guía detallada sobre cómo planificar campañas publicitarias efectivas para un negocio en línea. Incluye los diferentes elementos clave de una campaña publicitaria, cómo seleccionar los canales adecuados, cómo diseñar el mensaje de la campaña y cómo medir el éxito de la campaña.",
        prompt_text: "Escribe una guía detallada sobre cómo planificar campañas publicitarias efectivas para un negocio en línea. Incluye los diferentes elementos clave de una campaña publicitaria, cómo seleccionar los canales adecuados, cómo diseñar el mensaje de la campaña y cómo medir el éxito de la campaña.",
        category: "Marketing de Facebook",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-facebook", name: "Facebook", slug: "facebook" }]
    },
    {
        id: "csv-1",
        type: "prompt",
        title: "Pie de foto para Instagram promocionando [tipo de producto]",
        slug: "pie-de-foto-instagram-promocion",
        summary: "Escribe un pie de foto de Instagram para un post promocional de [tipo de producto].",
        body_markdown: "Escribe un pie de foto de Instagram para un post promocional de [tipo de producto]. Utiliza un lenguaje amigable y humano que atraiga a [tipo de público]. Destaca las cualidades únicas de [tipo de producto], utiliza emojis de muestra y no suenes demasiado promocional.",
        prompt_text: "Escribe un pie de foto de Instagram para un post promocional de [tipo de producto]. Utiliza un lenguaje amigable y humano que atraiga a [tipo de público]. Destaca las cualidades únicas de [tipo de producto], utiliza emojis de muestra y no suenes demasiado promocional.",
        category: "Marketing y publicidad",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-2",
        type: "prompt",
        title: "Titular conciso y memorable para [tipo de producto/servicio]",
        slug: "titular-conciso-memorable",
        summary: "Escribe un titular conciso y memorable para [tipo de producto/servicio].",
        body_markdown: "Escribe un titular conciso y memorable para [tipo de producto/servicio].",
        prompt_text: "Escribe un titular conciso y memorable para [tipo de producto/servicio].",
        category: "Marketing y publicidad",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-3",
        type: "prompt",
        title: "Breve texto publicitario para aplicación combinada de redes sociales y finanzas",
        slug: "texto-publicitario-app-combinada",
        summary: "Texto publicitario directo al grano para una app multi-función.",
        body_markdown: "Escribe un breve texto publicitario para una aplicación que combina las funciones de aplicaciones como Instagram, WhatsApp, Venmo y Tik Tok en un solo lugar. Utiliza un lenguaje rápido y conciso, similar al de Apple, que atraiga a un público más joven. Ve directo al grano: no pierdas el tiempo.",
        prompt_text: "Escribe un breve texto publicitario para una aplicación que combina las funciones de aplicaciones como Instagram, WhatsApp, Venmo y Tik Tok en un solo lugar. Utiliza un lenguaje rápido y conciso, similar al de Apple, que atraiga a un público más joven. Ve directo al grano: no pierdas el tiempo.",
        category: "Marketing y publicidad",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-4",
        type: "prompt",
        title: "Asuntos de correo electrónico para venta flash de curso en línea de creación de contenidos de IA",
        slug: "asuntos-email-venta-flash-ia",
        summary: "10 líneas de asunto de correo electrónico para una venta flash del 50%.",
        body_markdown: "Escribe 10 líneas de asunto de correo electrónico para una venta flash del 50% de descuento en un curso online de creación de contenidos de IA. Ve directo al grano - no pierdas el tiempo.",
        prompt_text: "Escribe 10 líneas de asunto de correo electrónico para una venta flash del 50% de descuento en un curso online de creación de contenidos de IA. Ve directo al grano - no pierdas el tiempo.",
        category: "Marketing y publicidad",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-5",
        type: "prompt",
        title: "Anuncio publicitario para un restaurante vegano",
        slug: "anuncio-restaurante-vegano",
        summary: "Anuncio creativo y atractivo para un restaurante vegano.",
        body_markdown: "Escribe un anuncio publicitario para un restaurante vegano que resalte los beneficios de una dieta vegana y la calidad de los ingredientes utilizados. Utiliza un lenguaje creativo y atractivo que haga que los clientes potenciales se sientan atraídos por el restaurante y su oferta gastronómica.",
        prompt_text: "Escribe un anuncio publicitario para un restaurante vegano que resalte los beneficios de una dieta vegana y la calidad de los ingredientes utilizados. Utiliza un lenguaje creativo y atractivo que haga que los clientes potenciales se sientan atraídos por el restaurante y su oferta gastronómica.",
        category: "Marketing y publicidad",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-6",
        type: "prompt",
        title: "Líneas de asunto para promoción de marca de ropa",
        slug: "lineas-asunto-promocion-ropa",
        summary: "10 líneas de asunto de correo electrónico para una marca de moda.",
        body_markdown: "Escribe 10 líneas de asunto de correo electrónico para una promoción de una marca de ropa. Ve directo al grano, utiliza un lenguaje atractivo y no pierdas el tiempo.",
        prompt_text: "Escribe 10 líneas de asunto de correo electrónico para una promoción de una marca de ropa. Ve directo al grano, utiliza un lenguaje atractivo y no pierdas el tiempo.",
        category: "Marketing y publicidad",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-7",
        type: "prompt",
        title: "Reseña de producto [tipo de producto] desde la perspectiva de [tipo de cliente]",
        slug: "resena-producto-perspectiva-cliente",
        summary: "Reseña de producto con voz de Generación Z.",
        body_markdown: "Escribe una reseña de un producto [tipo de producto] desde la perspectiva de [tipo de cliente]. No suenes demasiado promocional. Escribe como un miembro de la Generación Z.",
        prompt_text: "Escribe una reseña de un producto [tipo de producto] desde la perspectiva de [tipo de cliente]. No suenes demasiado promocional. Escribe como un miembro de la Generación Z.",
        category: "Reseñas de productos",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-8",
        type: "prompt",
        title: "Descripción de tienda en línea de bolsa grande de palomitas de maíz veganas",
        slug: "descripcion-tienda-palomitas-veganas",
        summary: "Descripción de e-commerce rápida y concisa.",
        body_markdown: "Escribe la descripción de una tienda de comercio electrónico para un juego de mesa divertido y educativo para niños. Utiliza un lenguaje rápido y conciso que atraiga tanto a padres como a niños. Destaca su valor educativo y no suenes demasiado promocional.",
        prompt_text: "Escribe la descripción de una tienda de comercio electrónico para un juego de mesa divertido y educativo para niños. Utiliza un lenguaje rápido y conciso que atraiga tanto a padres como a niños. Destaca su valor educativo y no suenes demasiado promocional.",
        category: "Reseñas de productos",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    {
        id: "csv-9",
        type: "prompt",
        title: "Reseña de producto de belleza para adolescentes",
        slug: "resena-producto-belleza-adolescentes",
        summary: "Reseña de producto de belleza para piel sensible.",
        body_markdown: "Escribe una reseña de un producto de belleza desde la perspectiva de una adolescente con piel sensible. No suenes demasiado promocional y utiliza un lenguaje cercano y juvenil.",
        prompt_text: "Escribe una reseña de un producto de belleza desde la perspectiva de una adolescente con piel sensible. No suenes demasiado promocional y utiliza un lenguaje cercano y juvenil.",
        category: "Reseñas de productos",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-copy", name: "Copy", slug: "copy" }]
    },
    // Prompts from PromptGather.io
    {
        id: "pg-1",
        type: "prompt",
        title: "Y2K Glitchcore Fashion Cover — Minimalist Line Art",
        slug: "retro-futuristic-fashion-glitchcore",
        summary: "Portada de revista minimalista que fusiona estética Y2K con vibras glitchcore y exposición doble.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Rostro [SUBJECT] estilizado, identidad tratada gráficamente.
*   **E(Entorno):** Portada revista abstracta, escena doble exposición.
*   **A(Acción):** Retrato frontal estático, pose editorial impactante.
*   **I(Iluminación):** Estilizada no realista, colores neón difusos.
*   **S(Sensación):** Experimental, digital, nostalgia Y2K.
*   **E(Estilo):** Minimalist line art con glitch digital y risograph.
*   **M(Composición):** Primer plano vertical, tipografía dominante.
*   **P(Post):** Paleta negativo, acentos neón, contraste alto.
        `,
        prompt_text: JSON.stringify({
            "title": "Y2K Glitchcore Fashion Cover — Minimalist Line Art",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "[SUBJECT] con rasgos definidos y estilizados, identidad facial clara pero tratada de forma gráfica.",
                    "expresion": "Neutra o segura, pensada para portada editorial.",
                    "coherencia": "Rostro reconocible aunque parcialmente intervenido por efectos gráficos."
                },
                "E_Entorno": {
                    "fondo": "Composición abstracta tipo portada de revista de moda.",
                    "ambientacion": "Escena retrofuturista con capas gráficas superpuestas.",
                    "elementos_clave": "Escena doble exposición integrada al rostro."
                },
                "A_Accion_Postura": {
                    "pose": "Retrato frontal o tres cuartos, pose estática tipo cover editorial.",
                    "lenguaje_corporal": "Presencia fuerte y contenida, pensada para impacto visual.",
                    "mirada": "Dirigida a cámara o ligeramente fuera de eje."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación estilizada no realista.",
                    "caracteristicas": "[COLOR] y [COLOR] lighting con efecto neón difuso, luz gráfica y plana combinada con brillos suaves."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Experimental, digital, nostálgica.",
                    "tono": "Y2K, glitchcore, editorial futurista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Minimalist screen print line art combinado con estética Y2K.",
                    "tecnicas": "Doble exposición estilo risograph, color negativo, glitch digital.",
                    "texturas": "Grano gráfico, ruido digital, overlays de niebla neón.",
                    "nivel_realismo": "Estilizado artístico, no fotorrealista."
                },
                "M_Composicion_Camara": {
                    "plano": "Primer plano tipo portada de revista.",
                    "angulo": "Ángulo frontal.",
                    "encuadre": "Formato vertical, composición centrada con tipografía dominante."
                },
                "P_Postproduccion": {
                    "tipografia": "Bold typography estilo fashion magazine Y2K.",
                    "color_grading": "Paleta invertida tipo negativo con acentos neón.",
                    "contraste": "Alto.",
                    "acabado": "Look gráfico experimental con glitch visible y superposiciones."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        featured_image_url: "/images/prompts/retro-futuristic-fashion-glitchcore.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-fashion", name: "Fashion", slug: "fashion" }],
        customization_guide: "# Estética Y2K y Glitchcore\nSustituye [SUBJECT] por el personaje o modelo que desees. Ajusta los [COLOR] para cambiar la atmósfera de los neones.",
        reference_image_guide: "Usa una foto de retrato clara para que la doble exposición y los efectos de glitch se apliquen sobre tus rasgos."
    },
    {
        id: "pg-2",
        type: "prompt",
        title: "High-Fashion Editorial Portrait — Luxury Power Femininity",
        slug: "vogue-elegance-couture-glamour",
        summary: "Retrato editorial de lujo inspirado por Ana de Armas en un vestido de lentejuelas negro.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Mujer sofisticada (inspiración Ana de Armas), peinado sleek ponytail.
*   **E(Entorno):** Sofá de terciopelo borgoña profundo, interior lujoso.
*   **A(Acción):** Sentada, postura dominante femenina, bolso estruturado.
*   **I(Iluminación):** Cinematográfica de estudio, resalta joyas y lentejuelas.
*   **S(Sensación):** Poder, sensualidad elegante, sofisticación Vogue.
*   **E(Estilo):** Editorial de moda couture, ultra-realista.
*   **M(Composición):** Plano medio a tres cuartos, frontal ligeramente bajo.
*   **P(Post):** Color grading profundo (borgoña/dorado), nitidez 8K, depth of field reducida.
        `,
        prompt_text: JSON.stringify({
            "title": "High-Fashion Editorial Portrait — Luxury Power Femininity",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Mujer adulta con rasgos finos y sofisticados, estructura facial definida y elegante, piel realista con acabado pulido de editorial.",
                    "referencia_identidad": "Ana de Armas (o mujer con presencia y elegancia similares, si se usa como inspiración).",
                    "expresion": "Mirada audaz, segura y sin disculpas.",
                    "cabello": "Peinado sleek en high ponytail, perfectamente estilizado.",
                    "coherencia": "Proporciones realistas, identidad facial consistente, estética de alta costura."
                },
                "E_Entorno": {
                    "fondo": "Sofá de terciopelo color borgoña profundo.",
                    "ambientacion": "Espacio interior elegante y lujoso, enfoque editorial.",
                    "superficies": "Textura rica del terciopelo visible y protagonista."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada con piernas separadas de forma segura y dominante.",
                    "lenguaje_corporal": "Postura femenina poderosa, control total del espacio.",
                    "accion": "Sosteniendo un bolso de lujo estructurado con cadena dorada entre las manos.",
                    "mirada": "Directa a cámara, presencia fuerte y editorial."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación cinematográfica de estudio.",
                    "caracteristicas": "Luz controlada que resalta rostro, joyería y texturas del vestido, sombras suaves y profundas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Poder, lujo, sensualidad elegante.",
                    "tono": "Alta costura, Vogue editorial, sofisticación absoluta."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Editorial de moda de lujo con realismo cinematográfico.",
                    "vestuario": "Vestido couture negro de lentejuelas con escote pronunciado y cut-outs sutiles.",
                    "accesorios": "Aros de diamantes oversized, anillos de oro apilados, pulsera tennis de diamantes, collares de oro en capas, stilettos negros puntiagudos.",
                    "nivel_realismo": "Ultra-realista, estética Vogue."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a plano tres cuartos.",
                    "angulo": "Ángulo frontal ligeramente bajo para enfatizar poder.",
                    "encuadre": "Composición centrada con foco en rostro, joyería y accesorios."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos profundos y ricos, énfasis en borgoña, negro y dorados.",
                    "contraste": "Medio-alto.",
                    "acabado": "Look editorial premium con nitidez extrema y profundidad de campo reducida.",
                    "calidad": {
                        "resolucion": "8K ultra-detailed",
                        "enfoque": "Ultra-sharp en rostro, joyería y accesorios",
                        "profundidad_de_campo": "Shallow depth of field"
                    }
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        featured_image_url: "/images/prompts/vogue-elegance-couture-glamour.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-luxury", name: "Luxury", slug: "luxury" }],
        customization_guide: "# Editorial de Alta Costura\nCambia el color del sofá o los accesorios (oro/plata) para adaptar el prompt a tu estilo de marca.",
        reference_image_guide: "Sube una foto sentada en una pose de poder para que la IA capture tu identidad en este entorno de lujo."
    },
    {
        id: "pg-3",
        type: "prompt",
        title: "Luxury Beach Club Portrait — Sunlit Daybed",
        slug: "glamour-shore-celebrity-vibes",
        summary: "Fotografía de estilo de vida en la playa con una joven en un vestido blanco chic.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Mujer joven 20s, piel bronceada luminosa, glow saludable.
*   **E(Entorno):** Beach club de lujo, arena blanca, daybed.
*   **A(Acción):** Reclinada suavemente, postura elegante y effortless.
*   **I(Iluminación):** Natural suave de día, resalta brillo de piel.
*   **S(Sensación):** Calma, frescura, lujo relajado.
*   **E(Estilo):** Lifestyle ultra-realista veraniega.
*   **M(Composición):** Plano medio, composición limpia.
*   **P(Post):** Tonos cálidos, blancos limpios, acabado luminoso.
        `,
        prompt_text: JSON.stringify({
            "title": "Luxury Beach Club Portrait — Sunlit Daybed",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Mujer joven en sus 20s con piel bronceada y luminosa, rasgos equilibrados y naturales, textura de piel realista con glow saludable.",
                    "expresion": "Relajada, fresca, expresión serena y confiada.",
                    "cabello": "Cabello suelto con movimiento natural, estilo veraniego.",
                    "coherencia": "Identidad facial consistente, proporciones realistas, apariencia natural."
                },
                "E_Entorno": {
                    "fondo": "Beach club de lujo con arena blanca y camastros tipo daybed.",
                    "ambientacion": "Ambiente exclusivo, veraniego y sofisticado."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada o reclinada suavemente sobre el daybed.",
                    "lenguaje_corporal": "Postura relajada y elegante, actitud effortless.",
                    "mirada": "Dirigida hacia la cámara o ligeramente fuera de ella."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural suave de día.",
                    "caracteristicas": "Iluminación uniforme que resalta el brillo de la piel sin sombras duras."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Frescura, calma, lujo relajado.",
                    "tono": "Summer luxury, lifestyle, natural."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía lifestyle ultra-realista con estética veraniega.",
                    "vestuario": "Vestido mini blanco off-the-shoulder con encaje tipo eyelet.",
                    "texturas": "Tela ligera, detalles delicados, piel luminosa.",
                    "nivel_realismo": "Ultra-realista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro a la altura de los ojos.",
                    "encuadre": "Composición limpia con entorno visible sin distraer."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos claros y cálidos, blancos limpios y piel dorada.",
                    "contraste": "Suave.",
                    "acabado": "Look natural, luminoso y elegante."
                }
            }
        }, null, 2),
        category: "Portrait",
        level: "intermediate",
        featured_image_url: "/images/prompts/glamour-shore-celebrity-vibes.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-travel", name: "Travel", slug: "travel" }],
        customization_guide: "# Vacaciones de Lujo\nCambia el color del vestido o el tono de piel para personalizar tu avatar de vacaciones.",
        reference_image_guide: "Una foto tuya sonriendo bajo luz natural funcionará mejor para integrarte en este escenario soleado."
    },
    {
        id: "pg-4",
        type: "prompt",
        title: "Cinematic Lifestyle Portrait — Luxury Boss Girl",
        slug: "power-elegance-boss-girl",
        summary: "Retrato cinematográfico de una mujer poderosa en el asiento del conductor de un coche de lujo.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Rostro joven elegante, estructura facial definida.
*   **E(Entorno):** Interior de automóvil de lujo, cuero beige.
*   **A(Acción):** Sentada en el conductor, actitud dominante y relajada.
*   **I(Iluminación):** Natural suave, luz envolvente de ventanas.
*   **S(Sensación):** Poder, independencia, éxito aspiracional.
*   **E(Estilo):** Lifestyle cinematográfica ultra-realista.
*   **M(Composición):** Plano medio, composición limpia enfocada.
*   **P(Post):** Tonos cálidos/neutros, contraste suave tipo film.
        `,
        prompt_text: JSON.stringify({
            "title": "Cinematic Lifestyle Portrait — Luxury Boss Girl",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro joven adulto con rasgos occidentales equilibrados, estructura facial definida y elegante, piel realista con textura natural.",
                    "expresion": "Confiada, poderosa, seguridad tranquila.",
                    "cabello": "Peinado pulido and moderno, acorde a un estilo ejecutivo de lujo.",
                    "accesorios": "Gafas de sol oversized de diseño minimalista.",
                    "coherencia": "Identidad facial consistente, proporciones realistas, sin exageración."
                },
                "E_Entorno": {
                    "fondo": "Interior de automóvil de lujo de alta gama.",
                    "elementos_clave": "Asientos de cuero beige y acabados premium.",
                    "ambientacion": "Escenario lifestyle sofisticado, exclusivo y moderno."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada en el asiento del conductor.",
                    "lenguaje_corporal": "Postura relajada pero dominante, control total del espacio.",
                    "accion": "Sosteniendo un smartphone de manera natural.",
                    "mirada": "Dirigida ligeramente fuera de cámara, actitud segura."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación natural suave.",
                    "caracteristicas": "Luz envolvente que entra por las ventanas del vehículo, sombras suaves y bien controladas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Poder, independencia, éxito.",
                    "tono": "Luxury lifestyle, aspiracional, cinematográfico."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía lifestyle cinematográfica ultra-realista.",
                    "vestuario": "Outfit minimalista de lujo, líneas limpias y elegantes.",
                    "texturas": "Materiales premium visibles en ropa y automóvil.",
                    "nivel_realismo": "Ultra-realista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro desde el exterior o interior del vehículo.",
                    "encuadre": "Composición limpia enfocada en el sujeto y el interior del auto."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos y neutros con contraste suave tipo película.",
                    "contraste": "Bajo a medio.",
                    "acabado": "Look cinematográfico limpio con sensación de film lifestyle."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "advanced",
        featured_image_url: "/images/prompts/power-elegance-boss-girl.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-business", name: "Business", slug: "business" }],
        customization_guide: "# Marca Personal\nEste prompt es ideal para emprendedoras. Ajusta el color del interior del coche (negro/marrón) para variar el mood.",
        reference_image_guide: "Usa una foto tuya de perfil o tres cuartos para que las gafas de sol se ajusten correctamente a tu rostro."
    },
    {
        id: "pg-5",
        type: "prompt",
        title: "Composite Transformation Portrait — Photo to Embroidered Artwork",
        slug: "stitches-reality-embroidery-art",
        summary: "Efecto visual que transforma una foto real en una obra de arte bordada con textura realista.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Rostro masculino adulto, chaqueta colorida moderna.
*   **E(Entorno):** Paisaje de montaña nevada, contraste de colores.
*   **A(Acción):** Postura erguida frontal, presencia editorial.
*   **I(Iluminación):** Equilibrada, mantiene detalle en ambas texturas.
*   **S(Sensación):** Transformación artesanal, concepto creativo.
*   **E(Estilo):** Híbrido fotorrealismo e ilustración textil (bordado).
*   **M(Composición):** Plano medio, diseño editorial dividido.
*   **P(Post):** Colores vivos vs fondo frío, layout limpio de transición.
        `,
        prompt_text: JSON.stringify({
            "title": "Composite Transformation Portrait — Photo to Embroidered Artwork",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro masculino adulto con rasgos bien definidos, identidad clara y realista.",
                    "expresion": "Neutra y segura, expresión editorial contenida.",
                    "vestimenta": "Chaqueta colorida con diseño moderno y llamativo.",
                    "coherencia": "Rasgos faciales consistentes a lo largo de la transformación visual."
                },
                "E_Entorno": {
                    "fondo": "Paisaje de montaña nevada.",
                    "ambientacion": "Escenario natural frío que contrasta con la vestimenta colorida.",
                    "uso_editorial": "Fondo utilizado como elemento narrativo y estético."
                },
                "A_Accion_Postura": {
                    "pose": "Postura erguida, frontal o ligeramente en tres cuartos.",
                    "lenguaje_corporal": "Firme, calmado, con presencia editorial.",
                    "mirada": "Dirigida a cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación equilibrada y controlada.",
                    "caracteristicas": "Luz uniforme que mantiene detalle tanto en fotografía como en textura bordada."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Transformación, artesanía, contraste entre lo real y lo artístico.",
                    "tono": "Editorial, creativo, conceptual."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Imagen compuesta que transiciona de fotografía realista a arte bordado.",
                    "texturas": "Textura de bordado altamente detallada y visible.",
                    "nivel_realismo": "Híbrido: fotorrealismo + ilustración textil."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro.",
                    "encuadre": "Diseño editorial dividido que muestra claramente la transformación visual."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores vivos en la chaqueta contrastando con blancos fríos del fondo.",
                    "contraste": "Medio.",
                    "acabado": "Layout editorial limpio con transición clara entre fotografía y bordado."
                }
            }
        }, null, 2),
        category: "Creative",
        level: "advanced",
        featured_image_url: "/images/prompts/stitches-reality-embroidery-art.jpg",
        is_published: true,
        is_featured: true,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-art", name: "Art", slug: "art" }],
        customization_guide: "# De Foto a Arte\nSustituye la descripción del hombre por la tuya. Este prompt es excelente para avatares artísticos únicos.",
        reference_image_guide: "Sube tu foto de retrato (primer plano) para que la IA replique tus rasgos en el patrón de bordado."
    },
    {
        id: "pg-6",
        type: "prompt",
        title: "Cinematic Lifestyle Portrait — Dubai Waterfront Sunset",
        slug: "sunset-elegance-dubai-vistas",
        summary: "Captura de viaje de lujo con vistas al Burj Khalifa durante la hora dorada.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Rostro joven elegante, textura suave, tonos cálidos.
*   **E(Entorno):** Dubai Downtown, Burj Khalifa al fondo, barandilla.
*   **A(Acción):** De pie, apoyada en barandilla, mirada contemplativa.
*   **I(Iluminación):** Golden hour natural, luz cálida, reflejos ámbar.
*   **S(Sensación):** Calma, aspiracional, sofisticada.
*   **E(Estilo):** Lifestyle cinematográfica ultra-realista, Kodak Portra.
*   **M(Composición):** Plano medio, composición equilibrada.
*   **P(Post):** Color grading dorado/ámbar, contraste suave, grano fino.
        `,
        prompt_text: JSON.stringify({
            "title": "Cinematic Lifestyle Portrait — Dubai Waterfront Sunset",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro joven adulto con rasgos naturales y elegantes, piel realista con textura suave y tonos cálidos.",
                    "expresion": "Serena y contemplativa.",
                    "cabello": "Cabello natural, ligeramente movido por la brisa.",
                    "coherencia": "Identidad facial consistente, proporciones realistas, sin exageraciones."
                },
                "E_Entorno": {
                    "fondo": "Zona costera de Dubai Downtown junto a una barandilla frente al agua.",
                    "elementos_clave": "Burj Khalifa visible al fondo.",
                    "ambientacion": "Entorno urbano moderno y lujoso durante el atardecer."
                },
                "A_Accion_Postura": {
                    "pose": "De pie apoyada suavemente en la barandilla.",
                    "lenguaje_corporal": "Relajado, natural y elegante, estilo lifestyle.",
                    "mirada": "Dirigida hacia el horizonte y el Burj Khalifa, fuera de cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación natural de golden hour.",
                    "caracteristicas": "Luz cálida con reflejos ámbar y sombras suaves propias del atardecer."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Calma, aspiracional, serenidad.",
                    "tono": "Cinematográfico, lifestyle, sofisticado."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía lifestyle cinematográfica ultra-realista.",
                    "film_look": "Kodak Portra con tonos cálidos.",
                    "texturas": "Grano analógico sutil.",
                    "nivel_realismo": "Ultra-realista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro a la altura de los ojos.",
                    "encuadre": "Composición equilibrada con arquitectura icónica visible al fondo."
                },
                "P_Postproduccion": {
                    "color_grading": "Warm grading con predominio de tonos dorados y ámbar.",
                    "contraste": "Suave y natural.",
                    "acabado": "Look cinematográfico limpio con grano de película discreto."
                }
            }
        }, null, 2),
        category: "Travel",
        level: "intermediate",
        featured_image_url: "/images/prompts/sunset-elegance-dubai-vistas.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-travel", name: "Travel", slug: "travel" }],
        customization_guide: "# Viaje de Ensueño\nCambia el destino a cualquier otra ciudad icónica manteniendo la iluminación de atardecer cinematográfico.",
        reference_image_guide: "Sube una foto tuya de espaldas o de lado para que el 'body language' se vea natural en la composición."
    },
    {
        id: "pg-7",
        type: "prompt",
        title: "Street Fashion Portrait — Futuristic Industrial",
        slug: "urban-edge-futuristic-street-fashion",
        summary: "Retrato adolescente con estética industrial, ángulos dramáticos y neones azules.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Rostro moderno urbano, rasgos definidos.
*   **E(Entorno):** Fondo metálico oscuro, textura industrial.
*   **A(Acción):** Postura firme, ángulo bajo (low angle).
*   **I(Iluminación):** Industrial azul, luz direccional fría.
*   **S(Sensación):** Actitud urbana, modernidad, streetwear.
*   **E(Estilo):** Street fashion contemporáneo futurista.
*   **M(Composición):** Plano medio a cuerpo completo, centrado.
*   **P(Post):** Tonos azules industriales, contraste medio-alto.
        `,
        prompt_text: JSON.stringify({
            "title": "Street Fashion Portrait — Futuristic Industrial",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro moderno y urbano, rasgos definidos, piel natural sin retoques exagerados.",
                    "expresion": "Segura, relajada, actitud street.",
                    "cabello": "Estilo urbano contemporáneo, limpio pero con carácter.",
                    "coherencia": "Proporciones realistas, identidad consistente."
                },
                "E_Entorno": {
                    "fondo": "Fondo metálico oscuro con textura industrial.",
                    "ambientacion": "Escenario futurista industrial, estética urbana cruda."
                },
                "A_Accion_Postura": {
                    "pose": "Postura firme con ligera apertura de piernas.",
                    "lenguaje_corporal": "Actitud dominante y relajada típica del street fashion.",
                    "mirada": "Dirigida hacia la cámara desde un ángulo bajo."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación industrial azul.",
                    "caracteristicas": "Luz direccional fría con reflejos metálicos, sombras marcadas pero controladas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Actitud urbana, poder, modernidad.",
                    "tono": "Futurista, industrial, streetwear."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Street fashion contemporáneo con estética futurista.",
                    "texturas": "Ropa con telas gruesas, superficies metálicas visibles.",
                    "nivel_realismo": "Fotorrealismo."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a cuerpo completo.",
                    "angulo": "Ángulo bajo (low angle shot).",
                    "encuadre": "Centrado, enfatizando presencia y altura."
                },
                "P_Postproduccion": {
                    "color_grading": "Dominancia de tonos azules industriales.",
                    "contraste": "Medio-alto.",
                    "acabado": "Look urbano limpio con nitidez controlada."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "intermediate",
        featured_image_url: "/images/prompts/urban-edge-futuristic-street-fashion.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-urban", name: "Urban", slug: "urban" }],
        customization_guide: "# Estilo Cyberpunk\nCambia 'blue light' por 'magenta' o 'electric green' para un look aún más tecnológico.",
        reference_image_guide: "Para este prompt es vital una pose en cuclillas o agachada para aprovechar la perspectiva del ángulo bajo."
    },
    {
        id: "pg-8",
        type: "prompt",
        title: "Japanese Cosplay Portrait — Neon Night Street",
        slug: "maid-moonlight-cosplay-moment",
        summary: "Estilo cosplay japonés con traje de maid clásico frente a máquinas expendedoras retroiluminadas.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Rostro joven estilo japonés, twin tails y orejas de gato.
*   **E(Entorno):** Calle nocturna japonesa con máquinas expendedoras.
*   **A(Acción):** Postura erguida, actitud kawaii controlada.
*   **I(Iluminación):** Realista urbana, luz de máquinas expendedoras.
*   **S(Sensación):** Encanto nocturno, fantasía urbana vibrante.
*   **E(Estilo):** Cosplay japonés realista, fotorrealista.
*   **M(Composición):** Plano medio a americano, 16:9 horizontal.
*   **P(Post):** Colores nocturnos intensificados, acentos neón.
        `,
        prompt_text: JSON.stringify({
            "title": "Japanese Cosplay Portrait — Neon Night Street",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro joven adulto con rasgos delicados y estilo japonés, piel natural y limpia.",
                    "expresion": "Dulce y confiada, ligera sonrisa.",
                    "cabello": "Cabello largo en twin tails bien definidos.",
                    "accesorios": "Diadema con orejas de gato.",
                    "coherencia": "Identidad facial consistente, proporciones realistas."
                },
                "E_Entorno": {
                    "fondo": "Calle nocturna japonesa con máquinas expendedoras iluminadas.",
                    "ambientacion": "Entorno urbano nocturno, moderno y vibrante."
                },
                "A_Accion_Postura": {
                    "pose": "Postura erguida y natural, ligeramente girada hacia la cámara.",
                    "lenguaje_corporal": "Actitud kawaii controlada, elegante y relajada.",
                    "mirada": "Dirigida a cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación nocturna urbana realista.",
                    "caracteristicas": "Luz ambiental proveniente de máquinas expendedoras brillantes, reflejos suaves y neón sutil."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Encanto, fantasía urbana, energía nocturna.",
                    "tono": "Kawaii, moderno, vibrante."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Cosplay japonés realista.",
                    "vestuario": "Clásico traje de maid con acabados limpios y detallados.",
                    "nivel_realismo": "Fotorrealista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a plano americano.",
                    "angulo": "Ángulo neutro.",
                    "encuadre": "Horizontal 16:9, sujeto centrado con fondo visible."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores nocturnos intensificados con acentos neón.",
                    "contraste": "Medio.",
                    "acabado": "Nitidez equilibrada con iluminación realista."
                }
            }
        }, null, 2),
        category: "Alternative",
        level: "intermediate",
        featured_image_url: "/images/prompts/maid-moonlight-cosplay-moment.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-cosplay", name: "Cosplay", slug: "cosplay" }],
        customization_guide: "# Estética Anime Real\nCambia el traje de maid por un uniforme escolar o gótico para variar la temática manteniendo el fondo de neón.",
        reference_image_guide: "Funciona mejor con fotos de rostro 'doll-like' y expresiones suaves."
    },
    {
        id: "pg-9",
        type: "prompt",
        title: "Dreamlike Analog Portrait — Ethereal Bedroom",
        slug: "ethereal-dreamscape-kpop-portrait",
        summary: "Fotografía de película analógica con estética Petra Collins, colores pastel y destellos arcoíris.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Rostro joven adulto, piel natural con grano analógico.
*   **E(Entorno):** Habitación íntima minimalista.
*   **A(Acción):** Reclinada en la cama, mirada suave e introspectiva.
*   **I(Iluminación):** Ambiental pastel, luz difusa con arcoíris y bloom.
*   **S(Sensación):** Onírica, mágica, nostálgica.
*   **E(Estilo):** Fotografía analógica Petra Collins, fotorrealismo.
*   **M(Composición):** Plano medio, ángulo neutro íntimo.
*   **P(Post):** Tonos pastel cálidos/rosados, contraste bajo, soft focus.
        `,
        prompt_text: JSON.stringify({
            "title": "Dreamlike Analog Portrait — Ethereal Bedroom",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro joven adulto con rasgos suaves y delicados, piel natural con imperfecciones visibles propias de fotografía analógica.",
                    "expresion": "Serena, introspectiva, mirada relajada.",
                    "cabello": "Cabello suelto, ligeramente despeinado, apariencia natural.",
                    "coherencia": "Proporciones realistas, identidad intacta, sin retoque excesivo."
                },
                "E_Entorno": {
                    "fondo": "Habitación íntima y minimalista, cama como elemento central.",
                    "ambientacion": "Espacio personal, suave y acogedor, sin objetos dominantes."
                },
                "A_Accion_Postura": {
                    "pose": "Reclinada sobre la cama, postura relajada y natural.",
                    "lenguaje_corporal": "Calma, vulnerabilidad sutil, sensación de descanso.",
                    "mirada": "Suave, ligeramente perdida o dirigida fuera de cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación ambiental pastel.",
                    "caracteristicas": "Luz difusa con flares de arcoíris, bloom intenso y reflejos suaves."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Onírica, mágica, íntima.",
                    "tono": "Ethereal, nostálgico, delicado."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía analógica soñadora estilo Petra Collins.",
                    "texturas": "Grano visible de película, desenfoque suave, bloom pesado.",
                    "nivel_realismo": "Fotorrealismo analógico."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro a la altura de la cama.",
                    "encuadre": "Íntimo, ligeramente descentrado para sensación natural."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos pastel suaves con dominancia rosada y cálida.",
                    "contraste": "Bajo.",
                    "acabado": "Look analógico, soft focus, atmósfera difusa y soñadora."
                }
            }
        }, null, 2),
        category: "Portrait",
        level: "advanced",
        featured_image_url: "/images/prompts/ethereal-dreamscape-kpop-portrait.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-dreamy", name: "Dreamy", slug: "dreamy" }],
        customization_guide: "# Estética Soft/Indie\nEste prompt es ideal para fotos con un toque nostálgico. Ajusta la cantidad de 'grain' para un efecto más vintage.",
        reference_image_guide: "Sube una foto con luz suave y expresión relajada para que la IA la funda con los colores pastel."
    },

    // Existing Prompts
    // Prompts from User Request

    {
        id: "pg-10",
        type: "prompt",
        title: "Miniature Portrait — Smartphone Stage",
        slug: "miniature-portrait-smartphone-stage",
        summary: "Efecto de perspectiva forzada donde una modelo posa sobre la pantalla de un smartphone.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Modelo (inspiración Anne Hathaway), gafas de montura negra, pose juguetona.
*   **E(Entorno):** Pantalla de smartphone como escenario, fondo gris limpio.
*   **A(Acción):** Posando sobre la pantalla, perspectiva forzada extrema.
*   **I(Iluminación):** Luz interior suave, sombras de contacto realistas.
*   **S(Sensación):** Surrealismo, juego de escalas, ilusión 3D.
*   **E(Estilo):** Composición fotorrealista surrealista, hiperrealismo.
*   **M(Composición):** Vista de pájaro (top-down), profundidad de campo reducida.
*   **P(Post):** Efecto 3D de profundidad, nitidez extrema en la figura.
        `,
        prompt_text: JSON.stringify({
            "title": "Miniature Portrait — Smartphone Stage",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro estilizado (inspiración Anne Hathaway), maquillaje exquisito, gafas de montura negra.",
                    "expresion": "Cuchi, juguetona, alegre.",
                    "cabello": "Largo y castaño, aspecto natural.",
                    "coherencia": "Identidad reconocible a escala miniatura."
                },
                "E_Entorno": {
                    "fondo": "Fondo gris neutro y limpio.",
                    "superficie": "Pantalla de smartphone sostenida por una mano, tratada como un suelo oscuro/escenario.",
                    "ambientacion": "Composición de interiores minimalista."
                },
                "A_Accion_Postura": {
                    "pose": "Pose dinámica y juguetona (una pierna levantada, signo de v).",
                    "lenguaje_corporal": "Dinámico, divertido, interactuando con la 'superficie' del teléfono.",
                    "perspectiva": "Perspectiva forzada extrema para enfatizar la diferencia de tamaño."
                },
                "I_Iluminacion": {
                    "tipo": "Luz suave de interior.",
                    "caracteristicas": "Luz envolvente con sombras de contacto tenues sobre la pantalla negra."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Surrealismo, diversión, creatividad visual.",
                    "tono": "Innovador, lúdico, 3D Pop-out."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Composición fotorrealista surrealista.",
                    "nivel_realismo": "Hiperrealista.",
                    "texturas": "Contraste entre cristal del teléfono y ropa de alta costura street."
                },
                "M_Composicion_Camara": {
                    "plano": "Vista cenital / ojo de pájaro (top-down).",
                    "angulo": "Ángulo picado fuerte.",
                    "encuadre": "Enfoque en la miniatura y la mano que sostiene el dispositivo."
                },
                "P_Postproduccion": {
                    "efectos": "Efecto 3D de 'salir de la pantalla'.",
                    "contraste": "Medio.",
                    "acabado": "Nitidez extrema en el sujeto miniatura, profundidad de campo reducida en el fondo."
                }
            }
        }, null, 2),
        category: "Creative",
        level: "advanced",
        featured_image_url: "/images/prompts/miniature-portrait-smartphone-stage.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-creative", name: "Creative", slug: "creative" }],
        customization_guide: "# Efecto Miniatura\nSustituye 'Anne Hathaway' por cualquier otra celebridad o descripción de avatar. Asegúrate de mantener la descripción de la pantalla del smartphone para conservar el efecto de perspectiva.",
        reference_image_guide: "Usa una foto tuya de cuerpo completo en una pose divertida sobre un fondo neutro para facilitar la composición de la IA."
    },

    {
        id: "pg-11",
        type: "prompt",
        title: "3D Chibi Proposal — Enchanted Flower Arch",
        slug: "nano-banana-case-1",
        summary: "Estilo 3D Chibi/Pixar de una tierna propuesta de matrimonio en un jardín de rosas.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Personajes estilo Chibi 3D, estética Pixar, rostros expresivos y piel suave.
*   **E(Entorno):** Jardín de rosas encantado, arco floral circular (rosa, lila, blanco), bokeh suave.
*   **A(Acción):** Propuesta de matrimonio (él de rodillas, ella sorprendida con manos en mejillas).
*   **I(Iluminación):** Luz cálida de atardecer, resplandor suave, luz volumétrica.
*   **S(Sensación):** Romántica, tierna, mágica, estilo cuento de hadas.
*   **E(Estilo):** Render 3D de alta calidad, colores vibrantes y saturación equilibrada.
*   **M(Composición):** Plano general, composición centrada bajo el arco floral.
*   **P(Post):** Color grading cálido, efecto bloom sutil, alta resolución.
        `,
        prompt_text: JSON.stringify({
            "title": "3D Chibi Proposal — Enchanted Flower Arch",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "estilo": "3D Chibi / Pixar Animation style.",
                    "caracteristicas": "Personajes adorables, cabezas ligeramente más grandes, ojos expresivos.",
                    "vestimenta": "Él con camisa azul y pantalón oscuro, ella con vestido rosa pastel.",
                    "coherencia": "Estética consistente de película animada de alta gama."
                },
                "E_Entorno": {
                    "fondo": "Jardín de flores exuberante con pétalos en el suelo.",
                    "elementos_clave": "Arco de flores circular masivo y detallado, iluminación dorada al fondo.",
                    "ambientacion": "Bosque o jardín de fantasía romántica."
                },
                "A_Accion_Postura": {
                    "pose_masculina": "De rodillas, sosteniendo una caja con un anillo brillante.",
                    "pose_femenina": "De pie, expresión de asombro y felicidad, manos cubriendo parcialmente la boca.",
                    "interaccion": "Momento congelado de máxima emoción."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación de 'hora mágica' (sunset).",
                    "caracteristicas": "Luz de fondo suave (backlighting) creando un contorno brillante, sombras cálidas y suaves."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Amor puro, alegría, magia, ternura.",
                    "tono": "Vibrante, colorido, soñador."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Render digital 3D hiper-detallado.",
                    "texturas": "Telas suaves, pétalos delicados, cabello con volumen estilizado.",
                    "nivel_realismo": "Fantasía 3D fotorrealista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano general (Full shot).",
                    "angulo": "Ángulo frontal neutro.",
                    "encuadre": "Sujetos perfectamente enmarcados por el arco de flores."
                },
                "P_Postproduccion": {
                    "filtros": "Efectos de partículas de luz (dust motes) flotando, bloom intenso en el anillo.",
                    "contraste": "Medio.",
                    "acabado": "Imagen limpia, nítida y apta para impresión editorial de alta calidad."
                }
            }
        }, null, 2),
        category: "Creative",
        level: "beginner",
        featured_image_url: "/images/prompts/3d-chibi-proposal-enchanted-arch.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-chibi", name: "Chibi", slug: "chibi" }, { id: "t-romantic", name: "Romantic", slug: "romantic" }],
        customization_guide: "# Magia Chibi\nCambia los colores de la ropa o las flores para personalizar tu propia escena romántica. Este estilo es perfecto para tarjetas de felicitación.",
        reference_image_guide: "No necesitas subir foto de referencia para este estilo, pero si lo haces, la IA intentará 'chibificar' tus rasgos en los personajes."
    },
    {
        id: "pg-12",
        type: "prompt",
        title: "3D Chibi Out-of-Frame Portrait",
        slug: "nano-banana-case-2",
        summary: "Efecto creativo 'pop-out' donde una escena 3D Chibi sale de un marco de fotos sostenido por una mano.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Personajes estilo Chibi 3D, estética Pixar, rostros expresivos.
*   **E(Entorno):** Marco de foto Polaroid roto/rasgado sostenido por una mano, jardín de rosas al fondo.
*   **A(Acción):** Propuesta de matrimonio, efecto "pop-out" (personajes y flores salen del marco).
*   **I(Iluminación):** Luz cálida de atardecer, resplandor suave, bokeh profundo.
*   **S(Sensación):** Creativa, mágica, romántica, ruptura de la cuarta pared.
*   **E(Estilo):** Composición surrealista fotorrealista combinada con 3D.
*   **M(Composición):** Primer plano de la mano con el marco, profundidad de campo reducida.
*   **P(Post):** Color grading cálido, nitidez en el marco, desenfoque artístico en el fondo.
        `,
        prompt_text: JSON.stringify({
            "title": "3D Chibi Out-of-Frame Portrait",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "estilo": "3D Chibi / Pixar Animation style.",
                    "caracteristicas": "Personajes adorables, proporciones deformadas tiernas, ojos grandes.",
                    "coherencia": "Identidad consistente con el estilo 3D de alta gama."
                },
                "E_Entorno": {
                    "fondo": "Jardín de rosas desenfocado (bokeh).",
                    "superficie": "Marco de fotografía Polaroid blanco, envejecido o rasgado.",
                    "elementos_clave": "Mano humana real o hiperrealista sosteniendo el marco frente a la cámara."
                },
                "A_Accion_Postura": {
                    "escena_interna": "Propuesta de matrimonio Chibi (él arrodillado, ella bailando/saltando de alegría).",
                    "efecto_especial": "Los personajes y los pétalos de flores salen físicamente de los límites del marco de la foto (Out-of-Frame effect).",
                    "dinamica": "Movimiento fluido, pétalos volando por delante del marco."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación cinematográfica de atardecer.",
                    "caracteristicas": "Luz dorada cálida que integra el mundo real (mano) con el mundo 3D (personajes)."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Sorpresa, magia, amor creativo.",
                    "tono": "Innovador, soñador, visualmente impactante."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Surrealismo visual / 3D Pop-out.",
                    "nivel_realismo": "Híbrido fotorrealista (mano) y Pixar-style (escena).",
                    "texturas": "Papel del marco, piel de la mano, pétalos de rosa detallados."
                },
                "M_Composicion_Camara": {
                    "plano": "Primer plano (Close-up) de la mano y el marco.",
                    "angulo": "Ángulo frontal.",
                    "encuadre": "Composición centrada que resalta el efecto de profundidad."
                },
                "P_Postproduccion": {
                    "filtros": "Bloom suave, color grading cálido (ámbar/rosa), grano analógico sutil.",
                    "contraste": "Medio.",
                    "acabado": "Imagen limpia con gran impacto visual de profundidad."
                }
            }
        }, null, 2),
        category: "Creative",
        level: "advanced",
        featured_image_url: "/images/prompts/3d-chibi-out-of-frame-proposal.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-pg", name: "PromptGather", slug: "promptgather" }, { id: "t-chibi", name: "Chibi", slug: "chibi" }, { id: "t-creative", name: "Creative", slug: "creative" }],
        customization_guide: "# Efecto Pop-Out\nEste prompt es ideal para crear invitaciones de boda o anuncios especiales con un toque mágico. Cambia la escena dentro del marco para adaptarlo a cualquier otro evento.",
        reference_image_guide: "Si subes una foto tuya, la IA intentará poner un marco sobre ella y hacer que 'salgas' de la foto."
    },
    {
        id: "p28",
        type: "prompt",
        title: "Día de Muertos (Catrina)",
        slug: "dia-de-muertos-catrina",
        summary: "Retrato hiperrealista 8K de Catrina con maquillaje dorado y rojo.",
        body_markdown: `
# Framework REAISEMP

    *   ** R(Render):** Maquillaje Catrina dorado y rojo, rostro sereno.
*   ** E(Entorno):** Oscuro, místico, luces suaves.
*   ** A(Acción):** Primer plano, mirada firme.
*   ** I(Iluminación):** Suave cinematográfica.
*   ** S(Sensación):** Misticismo, solemnidad.
*   ** E(Estilo):** Hiperrealismo 8K, detalles finos.
*   ** M(Composición):** Close - up.
*   ** P(Post):** Tonos cálidos, dorados y carmesí.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Catrina Día de Muertos Hiperrealista - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro femenino base sin alterar, solo maquillaje aplicado.",
                    "expresion": "Serena y mística.",
                    "cabello": "Peinado suelto o recogido sutil.",
                    "maquillaje": "Catrina en tonos dorados y rojos."
                },
                "E_Entorno": {
                    "fondo": "Oscuro con luces suaves.",
                    "ambientacion": "Mística y tradicional mexicana."
                },
                "A_Accion_Postura": {
                    "pose": "Primer plano centrado.",
                    "mirada": "Firme hacia cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Luz suave cinematográfica.",
                    "caracteristicas": "Resalta detalles del maquillaje."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Misticismo, tradición, solemnidad.",
                    "tono": "Artístico ceremonial."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Hiperrealismo 8K.",
                    "color": "Rojos, dorados, negros.",
                    "textura": "Detalles extremadamente finos."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up.",
                    "angulo": "Neutral."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos, dorados y carmesí.",
                    "claridad": "Alta para maquillaje detallado."
                }
            }
        }, null, 2),
        category: "Creative",
        level: "advanced",
        featured_image_url: "/images/cases/catrina-portrait.jpg",
        is_published: true,
        is_featured: true,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        customization_guide: `# Cómo personalizar este prompt

Este prompt es ideal para retratos temáticos de alta fidelidad. Para adaptarlo a diferentes estilos o personajes, sigue estas instrucciones:

# Cambiar el Personaje
* Sustituye "Rostro femenino base" en R_Render_del_Avatar por el tipo de rostro que desees (ej: "Rostro masculino maduro", "Niño de rasgos suaves").
* Ajusta la "expresión" para cambiar el mood (ej: "Melancólica", "Orgullosa").

# Personalizar el Maquillaje
* Cambia los colores en "maquillaje" de "dorados y rojos" a "azules y plata" para un look gélido, o "neón" para un estilo cyberpunk.

# Ajustar el Entorno
* Si deseas un fondo festivo, cambia el E_Entorno a "Cementerio con miles de velas y flores de cempasúchil".`,
        reference_image_guide: `Adjunta tu foto de frente, con iluminación clara y sin sombras fuertes en el rostro. Asegúrate de que no haya cabello cubriendo los rasgos principales.

En tu generador preferido (Midjourney o InsightFace), carga tu foto como referencia visual de rostro.

Copia el prompt REAISEMP de este caso y añade el parámetro de referencia (comando --cref en MJ) para que la IA aplique el maquillaje de Catrina sobre tus propios rasgos.`
    },

    {
        id: "p29",
        type: "prompt",
        title: "Blanco y Negro con Silla Plegable",
        slug: "bw-silla-plegable-denim",
        summary: "Retrato minimalista B&W en silla plegable con outfit de denim.",
        body_markdown: `
# Framework REAISEMP

    *   ** R(Render):** Rostro relajado, outfit denim.
*   ** E(Entorno):** Estudio liso minimalista.
*   ** A(Acción):** Sentada en silla plegable, pierna cruzada.
*   ** I(Iluminación):** Suave direccional, sombras nítidas.
*   ** S(Sensación):** Minimalismo cool.
*   ** E(Estilo):** B & W elegante, grano suave.
*   ** M(Composición):** Plano medio.
*   ** P(Post):** B & W contrastado.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato B&W con Denim en Silla Plegable - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro relajado, mirada suave.",
                    "expresion": "Calmada, cool.",
                    "cabello": "Suelto, estilo natural.",
                    "indumentaria": "Chaqueta y jeans de mezclilla."
                },
                "E_Entorno": {
                    "fondo": "Estudio liso minimalista.",
                    "ambientacion": "Simple y moderno."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada con pierna cruzada en silla plegable.",
                    "gestualidad": "Mano en el respaldo."
                },
                "I_Iluminacion": {
                    "tipo": "Luz suave direccional.",
                    "caracteristicas": "Sombras nítidas y estilo cinematográfico."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Minimalismo cool.",
                    "tono": "Cinemático B&W."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Blanco y negro elegante.",
                    "textura": "Grano suave analógico."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio.",
                    "angulo": "Neutral."
                },
                "P_Postproduccion": {
                    "color_grading": "B&W contrastado.",
                    "grano": "Fino."
                }
            }
        }, null, 2),
        category: "Portrait",
        level: "intermediate",
        featured_image_url: "/images/cases/bw-chair-denim.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-bw", name: "B&W", slug: "black-white" }, { id: "t-denim", name: "Denim", slug: "denim" }],
        customization_guide: `# Adaptación de Escena y Vestuario

Este prompt evoca un estilo minimalista y urbano. Aquí te explicamos cómo llevarlo a otros contextos:

# Cambiar el Mobiliario
* Sustituye "silla plegable" por "sofá de cuero vintage" para un look más lujoso o "taburete industrial" para algo más moderno.

# Variaciones de Vestuario
* Cambia "outfit de denim" por "traje sastre oversize" o "vestido de seda" para variar el contraste de texturas en el blanco y negro.

# Control de Iluminación
* Si buscas sombras más dramáticas, cambia I_Iluminacion a "Luz dura lateral, estilo film noir".`,
        reference_image_guide: `Sube una foto tuya sentado en una posición similar a la de la silla(o cualquier silla que tengas en casa).No importa el fondo.

Usa esta imagen como 'Pose Reference' o 'Image Prompt' con un peso bajo(iw 0.5) para guiar la estructura pero permitir que la IA aplique la estética denim.

Copia el prompt y verás cómo tu pose se transforma en este retrato minimalista de alta gama.`
    },
    {
        id: "p30",
        type: "prompt",
        title: "Retrato Técnico Rembrandt B&W",
        slug: "retrato-tecnico-rembrandt-bw",
        summary: "Retrato introspectivo con iluminación Rembrandt clásica y piel natural.",
        body_markdown: `
# Framework REAISEMP

    *   ** R(Render):** Piel natural sin retocar, tela con lunares.
*   ** E(Entorno):** Habitación oscura, luz de ventana.
*   ** A(Acción):** Sentada, mirada directa intensa.
*   ** I(Iluminación):** Rembrandt clásico, triángulo de luz.
*   ** S(Sensación):** Profundidad emocional.
*   ** E(Estilo):** Hiperrealismo B & W.
*   ** M(Composición):** Medio vertical.
*   ** P(Post):** Curva suave en grises.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Técnico B&W con Iluminación Rembrandt - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro sin retocar, piel natural visible.",
                    "expresion": "Introspectiva e intensa.",
                    "cabello": "Suelto con mechones sueltos.",
                    "indumentaria": "Tela de lunares sobre los hombros."
                },
                "E_Entorno": {
                    "fondo": "Habitación oscura con leve luz de ventana.",
                    "ambientacion": "Íntima y cinematográfica."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada con hombros expuestos.",
                    "mirada": "Directa e intensa."
                },
                "I_Iluminacion": {
                    "tipo": "Rembrandt clásico con octabox.",
                    "caracteristicas": "Triángulo de luz bajo el ojo."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Profundidad emocional.",
                    "tono": "Cine monocromático."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Hiperrealismo B&W.",
                    "textura": "Piel natural sin retoque.",
                    "color": "Monocromo detallado."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio vertical.",
                    "angulo": "Neutral a altura de ojos."
                },
                "P_Postproduccion": {
                    "color_grading": "Curva suave en grises.",
                    "grano": "Fino clásico.",
                    "contraste": "Equilibrado."
                }
            }
        }, null, 2),
        category: "Portrait",
        level: "advanced",
        featured_image_url: "/images/cases/rembrandt-portrait.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-rem", name: "Rembrandt", slug: "rembrandt" }, { id: "t-bw", name: "B&W", slug: "black-white" }],
        customization_guide: `# El Sujeto
* Este prompt funciona excepcionalmente bien con objetos. Prueba con "Busto de escultura clásica" en lugar del personaje humano.`,
        reference_image_guide: `Para lograr el efecto Rembrandt en tu propio rostro, adjunta una foto con iluminación lateral (puedes usar la linterna de un móvil a un lado).

Usa el comando de referencia de personaje para que la IA detecte tus facciones y aplique el triángulo de luz característico.

Asegúrate de que la referencia sea en alta resolución para que las texturas de piel sean tan naturales como en el ejemplo.`
    },
    {
        id: "p31",
        type: "prompt",
        title: "Close-up Pendiente Focal",
        slug: "closeup-pendiente-focal",
        summary: "Fotografía editorial enfocada en joyería y detalles de lujo.",
        body_markdown: `
# Framework REAISEMP

*   **R(Render):** Piel bronceada, vestido negro, pendiente visible.
*   **E(Entorno):** Oscuro minimalista.
*   **A(Acción):** Oreja centrada, cabeza girada.
*   **I(Iluminación):** Haz puntual fuerte.
*   **S(Sensación):** Lujo, misterio.
*   **E(Estilo):** Fashion editorial.
*   **M(Composición):** Close-up extremo.
*   **P(Post):** Cinemático oscuro.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Close-up de Oreja Iluminada (Pendiente Focal) - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Solo parte del rostro visible, piel bronceada impecable.",
                    "expresion": "Neutra y elegante.",
                    "cabello": "Recogido para mostrar la oreja.",
                    "indumentaria": "Vestido negro de un solo hombro."
                },
                "E_Entorno": {
                    "fondo": "Oscuro minimalista.",
                    "ambientacion": "Editorial de lujo."
                },
                "A_Accion_Postura": {
                    "pose": "Oreja centrada en el encuadre.",
                    "gestualidad": "Cabeza ligeramente girada."
                },
                "I_Iluminacion": {
                    "tipo": "Haz puntual fuerte.",
                    "caracteristicas": "Enfocado solo en la oreja y pendiente."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Lujo, misterio.",
                    "tono": "Moderno minimalista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fashion editorial.",
                    "color": "Oscuros profundos con acentos metálicos."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up extremo.",
                    "angulo": "Neutral."
                },
                "P_Postproduccion": {
                    "color_grading": "Cinemático oscuro.",
                    "claridad": "Alta en zona focal."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        featured_image_url: "/images/cases/focal-earring.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-jewel", name: "Jewelry", slug: "jewelry" }, { id: "t-close", name: "Close-up", slug: "closeup" }],
        customization_guide: `# Modelado de Piel
* Ajusta R_Render para que coincida con tu marca: "Piel de porcelana", "Piel madura con carácter".`,
        reference_image_guide: `Toma una foto de tu producto (reloj, anillo, accesorio) con un fondo limpio.

Sube la imagen como referencia de estilo y estructura de producto.

Aplica el prompt detallado y ajusta los parámetros de visualización para que el brillo metálico de tu producto resalte bajo el haz puntual de luz.`
    },
    {
        id: "p32",
        type: "prompt",
        title: "Retrato de Poder en Traje Negro",
        slug: "retrato-poder-traje-negro",
        summary: "Retrato editorial empoderado con traje negro en ambiente minimalista.",
        body_markdown: `
# Framework REAISEMP

        *   ** R(Render):** Expresión confiada, traje negro, cabello brillante.
*   ** E(Entorno):** Negro profundo.
*   ** A(Acción):** Sentada, mano en mentón.
*   ** I(Iluminación):** Soft light controlada.
*   ** S(Sensación):** Poder, elegancia, autoridad.
*   ** E(Estilo):** Moda editorial alto nivel.
*   ** M(Composición):** Plano medio.
*   ** P(Post):** Tonos fríos, acentos cálidos.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato de Poder en Traje Negro (Estudio) - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Expresión confiada, mirada elegante.",
                    "cabello": "Largo, oscuro y brillante.",
                    "indumentaria": "Traje negro a medida."
                },
                "E_Entorno": {
                    "fondo": "Negro profundo.",
                    "ambientacion": "Minimalismo elegante."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada con piernas cruzadas.",
                    "gestualidad": "Mano en el mentón."
                },
                "I_Iluminacion": {
                    "tipo": "Soft light controlada.",
                    "caracteristicas": "Resalta el brillo del cabello y traje."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Poder, elegancia, autoridad.",
                    "tono": "Editorial empoderado."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Moda editorial de alto nivel.",
                    "color": "Negros y dorados sutiles."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio.",
                    "angulo": "Neutral."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos fríos con acentos cálidos.",
                    "claridad": "Alta."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "intermediate",
        featured_image_url: "/images/cases/power-suit-portrait.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-power", name: "Power", slug: "power" }, { id: "t-suit", name: "Suit", slug: "suit" }],
        customization_guide: `# Branding Personal y Autoridad

Este prompt proyecta poder. Úsalo para diferentes perfiles:

# Perfiles Corporativos
* Cambia "traje negro" por "blazer de lino" para un look tech-founder o "atuendo de yoga" para una marca de wellness con autoridad.

# Pose de Poder
* Ajusta A_Accion a "Brazos cruzados, mirada desafiante" para máxima fuerza, o "Mirando al horizonte, mano en barbilla" para un tono más visionario.

# Ajuste de Color
* Para marcas más dinámicas, cambia el P_Post a "Colores vibrantes saturados" o "Gradiente azul corporativo".`,
        reference_image_guide: `Sube una foto tuya con una expresión de confianza. La IA mantendrá tu identidad mientras aplica la iluminación y el estilo editorial del traje negro.`
    },
    {
        id: "p-nano-93",
        type: "prompt",
        title: "Retexturización de Vidrio Holográfico",
        slug: "nano-banana-case-93",
        summary: "Transforma cualquier objeto en una versión de vidrio con efectos iridiscentes y holográficos.",
        body_markdown: `
Retexturiza la imagen adjunta basándote en la siguiente estética JSON:

    \`\`\`json
{
  "style": "photorealistic 3D render",
  "material": "glass with transparent and iridescent effects",
  "surface_texture": "smooth, polished with subtle reflections and refractive effects",
  "lighting": {
    "type": "studio HDRI",
    "intensity": "high",
    "direction": "angled top-left key light and ambient fill",
    "accent_colors": ["blue", "green", "purple"],
    "reflections": true,
    "refractions": true,
    "dispersion_effects": true,
    "bloom": true
  },
  "color_scheme": {
    "primary": "transparent with iridescent blue, green, and purple hues",
    "secondary": "crystal-clear with subtle chromatic shifts",
    "highlights": "soft, glowing accents reflecting rainbow-like effects",
    "rim_light": "soft reflective light around edges"
  },
  "background": {
    "color": "black",
    "vignette": true,
    "texture": "none"
  },
  "post_processing": {
    "chromatic_aberration": true,
    "glow": true,
    "high_contrast": true,
    "sharp_details": true
  }
}
\`\`\`

**Características clave:**
*   Material de vidrio con efectos transparentes e iridiscentes
*   Iluminación de estudio HDRI de alta intensidad
*   Efectos de reflexión, refracción y dispersión
*   Esquema de color con tonos azules, verdes y púrpuras iridiscentes
*   Fondo negro con viñeta
*   Post-procesamiento con aberración cromática, brillo y alto contraste
        `,
        prompt_text: JSON.stringify({
            "title": "Glass Retexturing",
            "style": "photorealistic 3D render",
            "material": "glass with transparent and iridescent effects",
            "surface_texture": "smooth, polished with subtle reflections and refractive effects",
            "lighting": {
                "type": "studio HDRI",
                "intensity": "high",
                "direction": "angled top-left key light and ambient fill",
                "accent_colors": ["blue", "green", "purple"],
                "reflections": true,
                "refractions": true,
                "dispersion_effects": true,
                "bloom": true
            },
            "color_scheme": {
                "primary": "transparent with iridescent blue, green, and purple hues",
                "secondary": "crystal-clear with subtle chromatic shifts",
                "highlights": "soft, glowing accents reflecting rainbow-like effects",
                "rim_light": "soft reflective light around edges"
            },
            "background": {
                "color": "black",
                "vignette": true,
                "texture": "none"
            },
            "post_processing": {
                "chromatic_aberration": true,
                "glow": true,
                "high_contrast": true,
                "sharp_details": true
            }
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/jewelry-holographic.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }],
        customization_guide: `# Retexturización Creativa
Este sistema permite transformar cualquier objeto en vidrio. Cambia los "accent_colors" de ["blue", "green", "purple"] a tus colores de marca para una identidad visual única.`,
        reference_image_guide: `Adjunta la imagen del objeto que deseas retexturizar. El sistema Nano Banana respetará la forma original pero aplicará todas las propiedades físicas del vidrio holográfico.`
    },

    {
        id: "p-nano-96",
        type: "prompt",
        title: "Figura de Anime Personalizada",
        slug: "nano-banana-case-96",
        summary: "Genera una foto de figura estilo anime colocada en un escritorio desde una perspectiva casual.",
        body_markdown: `
Genera una foto de figura estilo anime colocada en un escritorio, presentada desde una perspectiva casual y cotidiana como si fuera tomada con un teléfono móvil.

**Características del modelo:**
*   **Basado en foto adjunta:** El modelo de la figura se basa en la foto del personaje adjunta, reproduciendo con precisión la postura completa del cuerpo, la expresión facial y el estilo de vestimenta de la persona en la foto.
*   **Renderizado completo:** Asegúrate de que toda la figura esté completamente renderizada.
*   **Diseño exquisito:** El diseño general es exquisito y detallado.
*   **Colores y texturas:** El cabello y la ropa presentan colores degradados naturales y suaves, con texturas finas.
*   **Estilo anime japonés:** El estilo se inclina hacia el anime japonés, rico en detalles, con texturas realistas y una apariencia hermosa.

**Ambiente:**
*   Colocada en un escritorio
*   Perspectiva casual como una foto tomada con teléfono móvil
*   Ambiente de oficina o escritorio realista
        `,
        prompt_text: JSON.stringify({
            "title": "Custom Anime Figure",
            "style": "Japanese anime, detailed, realistic textures",
            "subject": "Anime-style figure based on attached character photo",
            "requirements": {
                "posture": "Full body posture matching reference photo",
                "expression": "Facial expression matching reference",
                "clothing": "Clothing style matching reference",
                "rendering": "Entire figure fully rendered"
            },
            "design": {
                "quality": "Exquisite and detailed",
                "hair": "Natural, soft gradient colors with fine textures",
                "clothing": "Natural, soft gradient colors with fine textures",
                "appearance": "Beautiful, realistic textures"
            },
            "setting": {
                "location": "Desktop",
                "perspective": "Casual, everyday snapshot as if taken with mobile phone",
                "environment": "Office or desk setting"
            }
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/anime-figure-desk.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }],
        customization_guide: `# Crea tu propia Figura
Sustituye la descripción del personaje por la tuya. Puedes especificar "traje de samurái" o "ropa futurista" manteniendo el estilo de figura coleccionable.`,
        reference_image_guide: `Adjunta una foto de cuerpo completo de la persona que quieres convertir en figura. Asegúrate de que la ropa sea distintiva para que la IA la capture en el estilo anime.`
    },
    {
        id: "p-nano-95",
        type: "prompt",
        title: "Bobblehead Generator from Selfie",
        slug: "nano-banana-case-95",
        summary: "Convierte cualquier selfie en un divertido bobblehead coleccionable sobre una estantería.",
        body_markdown: `
Convierte esta foto en un bobblehead: agranda la cabeza ligeramente, mantén el rostro preciso y caricaturiza el cuerpo. [Colócalo en una estantería de libros].
        `,
        prompt_text: JSON.stringify({
            "title": "Bobblehead Generator from Selfie",
            "style": "Cartoon / Bobblehead",
            "subject": "Bobblehead based on photo",
            "requirements": {
                "head": "Enlarged slightly",
                "face": "Accurate to reference",
                "body": "Cartoonified",
                "setting": "Placed on a bookshelf"
            }
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/bobblehead.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }],
        customization_guide: `# Crea tu propio Bobblehead
Cambia el entorno de "estantería de libros" por "tablero de coche" o "oficina moderna". También puedes ajustar el nivel de "caricaturización" del cuerpo.`,
        reference_image_guide: `Sube una selfie clara con buena iluminación. La IA detectará tus rasgos faciales para mantener la precisión en la cabeza del bobblehead mientras transforma el resto en una figura coleccionable.`
    },
    {
        id: "p-nano-94",
        type: "prompt",
        title: "Selfie de Animales en Monumentos",
        slug: "nano-banana-case-94",
        summary: "Selfie grupal de tres animales con expresiones realistas frente a monumentos icónicos.",
        body_markdown: `
A close-up selfie of three [animal type] with different expressions in front of the iconic [landmark], taken at golden hour with cinematic lighting. 

**Características claves:**
*   **Posado:** Los animales están cerca de la cámara con sus cabezas tocándose, imitando un pose de selfie.
*   **Expresiones:** Muestra expresiones alegres, sorprendidas y tranquilas (ej: un perro sonriendo, un gato asombrado, un capibara relajado).
*   **Fondo:** Detalle arquitectónico completo del [landmark] suavemente iluminado.
*   **Estilo:** Fotográfico, estilo cartoon realista, alto detalle.
        `,
        prompt_text: JSON.stringify({
            "title": "Three Animals Selfie at Landmark",
            "style": "Photographic, Realistic Cartoon",
            "subject": "Three [animal type] taking a selfie",
            "requirements": {
                "expressions": "Joyful, surprised, and calm",
                "interaction": "Heads touching, mimicking selfie pose",
                "background": "Iconic [landmark] with architectural detail",
                "lighting": "Golden hour, cinematic"
            },
            "ratio": "1:1"
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/animals-selfie.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }],
        customization_guide: `# Personaliza tu Selfie Animal
Sustituye [animal type] por tus favoritos (ej: "golden retriever, tabby cat, and capybara"). Cambia [landmark] por cualquier lugar del mundo (ej: "Torre Eiffel", "Gran Muralla").`,
        reference_image_guide: `Este prompt no requiere imagen de referencia de rostro, pero puedes usar una foto de tu propia mascota para guiar el estilo de los animales usando pesos de imagen bajos.`
    },
    {
        id: "p-nano-100",
        type: "prompt",
        title: "Anuncio Creativo: Objeto Real y Doodle",
        slug: "nano-banana-case-100",
        summary: "Anuncio minimalista y creativo con un objeto real integrado en un doodle.",
        body_markdown: `
A minimalist and creative advertisement set on a clean white background.

*   **Concept:** A real [Real Object] is integrated into a hand-drawn black ink doodle, using loose, playful lines.
*   **Interaction:** The [Doodle Concept] interacts with the object in a clever, imaginative way.
*   **Text:** Include bold black [Ad Copy] text at the top or center.
*   **Branding:** Place the [Brand Logo] clearly at the bottom.
*   **Style:** The visual should be clean, fun, high-contrast, and conceptually smart.
        `,
        prompt_text: JSON.stringify({
            "title": "Creative Ad with Real Object and Hand-Drawn Doodle",
            "style": "Minimalist, Mixed Media",
            "elements": {
                "object": "[Real Object]",
                "doodle": "[Doodle Concept]",
                "copy": "[Ad Copy]",
                "logo": "[Brand Logo]"
            },
            "description": "A real object integrated into a hand-drawn black ink doodle on a clean white background."
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/creative-doodle.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }],
        customization_guide: `# Publicidad Ingeniosa
Sustituye [Real Object] por tu producto. Juega con el [Doodle Concept] para crear una interacción divertida (ej: una hamburguesa real que es el sol en un dibujo de playa).`,
        reference_image_guide: `Sube una foto de alta calidad de tu producto físico sobre un fondo neutro. La IA extraerá el objeto y lo integrará perfectamente con los trazos manuales.`
    },
    {
        id: "p-nano-99",
        type: "prompt",
        title: "Retrato Artístico en Blanco y Negro",
        slug: "nano-banana-case-99",
        summary: "Retrato artístico en blanco y negro de alta resolución estilo editorial.",
        body_markdown: `
A high-resolution black and white portrait artwork, in an editorial and fine art photography style.

*   **Atmosphere:** The background features a soft gradient, transitioning from mid-gray to almost pure white, creating a sense of depth and tranquility.
*   **Texture:** Fine film grain adds a tactile, analog-like softness to the image, reminiscent of classic black and white photography.
*   **Subject:** On the right side of the frame, a blurred yet striking face subtly emerges from the shadows, not in a traditional pose, but as if caught in a moment of thought or breath.
*   **Detail:** Only a part of his face is visible: perhaps an eye, a cheekbone, the contour of his lips, evoking a sense of mystery, intimacy, and elegance.
*   **Lighting:** A gentle, directional light, softly diffused, caresses the curve of his cheek or glints in his eye—this is the emotional core of the image.
*   **Composition:** The rest of the composition is dominated by ample negative space, intentionally kept simple, allowing the image to breathe. There are no texts, no logos in the image—only an interplay of light, shadow, and emotion.
        `,
        prompt_text: JSON.stringify({
            "title": "Black and White Portrait Art",
            "style": "Editorial, Fine Art Photography",
            "elements": {
                "background": "Soft gradient mid-gray to white",
                "texture": "Fine film grain",
                "lighting": "Gentle, directional, diffused",
                "composition": "Negative space, off-center subject"
            },
            "description": "Abstract yet deeply human black and white portrait, intimate and timeless."
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/bw-portrait.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }]
    },
    {
        id: "p-nano-98",
        type: "prompt",
        title: "Silueta Borrosa tras Vidrio Esmerilado",
        slug: "nano-banana-case-98",
        summary: "Fotografía en blanco y negro de una silueta borrosa tras una superficie esmerilada.",
        body_markdown: `
A black and white photograph shows the blurred silhouette of a [SUBJECT] behind a frosted or translucent surface.

*   **Contrast:** The [PART] is sharply defined and pressed against the surface, creating a stark contrast with the rest of the hazy, indistinct figure.
*   **Background:** The background is a soft gradient of gray tones, enhancing the mysterious and artistic atmosphere.
*   **Mood:** Mysterious, artistic, abstract.
        `,
        prompt_text: JSON.stringify({
            "title": "Blurred Silhouette Behind Frosted Glass",
            "style": "Abstract Photography, B&W",
            "elements": {
                "subject": "[SUBJECT]",
                "focus_point": "[PART] pressed against glass",
                "surface": "Frosted/Translucent",
                "background": "Soft gray gradient"
            },
            "description": "Blurred silhouette behind frosted glass with one sharp detail pressed against the surface."
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/blurred-silhouette.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }]
    },
    {
        id: "p-nano-97",
        type: "prompt",
        title: "Muñeca de Tejido Acogedora",
        slug: "nano-banana-case-97",
        summary: "Fotografía en primer plano de una muñeca de tejido hecha a mano sostenida con suavidad.",
        body_markdown: `
A close-up, professionally composed photograph showcasing a hand-crocheted yarn doll gently cradled by two hands.

*   **Subject:** The doll has a rounded shape, featuring the cute chibi image of the [upload image] character, with vivid contrasting colors and rich details.
*   **Interaction:** The hands holding the doll are natural and gentle, with clearly visible finger postures, and natural skin texture and light/shadow transitions, conveying a warm and realistic touch.
*   **Background:** The background is slightly blurred, depicting an indoor environment with a warm wooden tabletop and natural light streaming in from a window, creating a comfortable and intimate atmosphere.
*   **Mood:** The overall image conveys a sense of exquisite craftsmanship and cherished warmth.
        `,
        prompt_text: JSON.stringify({
            "title": "Cozy Hand-Crocheted Yarn Doll",
            "style": "Professional Product Photography, Cozy",
            "elements": {
                "subject": "Hand-crocheted yarn doll (chibi style)",
                "action": "Gently cradled by two hands",
                "lighting": "Natural window light",
                "background": "Blurred warm wooden tabletop",
                "atmosphere": "Comfortable, intimate, warm"
            },
            "description": "Close-up of a hand-crocheted doll held gently, highlighting craftsmanship and warmth."
        }, null, 2),
        category: "Generative AI",
        level: "intermediate",
        featured_image_url: "/images/cases/cozy-crochet-doll.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-nano", name: "Nano Banana", slug: "nano-banana" }]
    },

    // REAISEMP Framework - Women's Portraits
    {
        id: "p15",
        type: "prompt",
        title: "Retrato Cinematográfico Monocromático",
        slug: "retrato-cinematografico-monocromatico",
        summary: "Retrato en B&W hiperrealista 8K con iluminación Chiaroscuro dramática.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Modelo femenina, rasgos suaves, mirada profunda, piel natural con textura.
*   **E (Entorno):** Fondo negro aterciopelado, rayos difusos estilo acuático.
*   **A (Acción):** Medio movimiento, cabeza girada, mirada directa.
*   **I (Iluminación):** Chiaroscuro dramático, rayos diagonales.
*   **S (Sensación):** Misterio, elegancia introspectiva.
*   **E (Estilo):** B&W hiperrealista 8K, grano fino.
*   **M (Composición):** Primer plano, centrado dramático.
*   **P (Post):** Alto contraste, color grading monocromo.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Cinematográfico Monocromático (Chiaroscuro) - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Modelo femenina con rasgos suaves y expresivos, mirada profunda y piel con textura natural visible bajo la luz.",
                    "expresion": "Serena, introspectiva, emocional.",
                    "cabello": "Ligeramente elevado por movimiento, mechones flotando.",
                    "coherencia": "Proporciones realistas, rostro enfocado y nítido."
                },
                "E_Entorno": {
                    "fondo": "Negro aterciopelado con rayos difusos que imitan luz acuática.",
                    "ambientacion": "Cinemático en claroscuro."
                },
                "A_Accion_Postura": {
                    "pose": "Capturada en medio movimiento, cabeza girada sutilmente.",
                    "mirada": "Directa, emocionalmente cargada."
                },
                "I_Iluminacion": {
                    "tipo": "Luz dramática de claroscuro.",
                    "caracteristicas": "Rayos diagonales, fuertes contrastes B&W.",
                    "resultado": "Esculpido facial dramático."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Misterio, elegancia introspectiva.",
                    "tono": "Editorial analógico."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "B&W hiperrealista 8K.",
                    "textura": "Grano fino cinematográfico.",
                    "color": "Monocromo de alto contraste."
                },
                "M_Composicion_Camara": {
                    "plano": "Primer plano cinematográfico.",
                    "angulo": "Frontal con ligera diagonal.",
                    "encuadre": "Centrado dramático."
                },
                "P_Postproduccion": {
                    "color_grading": "Monocromo profundo.",
                    "contraste": "Alto.",
                    "grano": "Fino tipo película."
                }
            }
        }, null, 2),
        category: "Portrait",
        level: "advanced",
        featured_image_url: "/images/cases/monochromatic-portrait.jpg",
        is_published: true,
        is_featured: true,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-bw", name: "B&W", slug: "black-white" }, { id: "t-cine", name: "Cinematic", slug: "cinematic" }],
        customization_guide: `# Dominio del Claroscuro
Este estilo resalta las texturas. Si quieres un look más suave, cambia I_Iluminacion a "Luz suave de ventana".`,
        reference_image_guide: `Adjunta una foto con iluminación lateral. La IA potenciará el contraste y añadirá el grano cinematográfico manteniendo tu identidad.`
    },
    {
        id: "p16",
        type: "prompt",
        title: "Alta Costura Cyberpunk",
        slug: "alta-costura-cyberpunk",
        summary: "Estilo high-fashion futurista con iluminación dual neón (Amarillo/Azul).",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Rostro estilizado, mirada intensa, cabello bob minimalista.
*   **E (Entorno):** Fondo negro, ambiente cyberpunk limpio.
*   **A (Acción):** De espaldas con giro, mirada fuerte a cámara.
*   **I (Iluminación):** Dual Neón (Izquierda: Amarillo/Naranja, Derecha: Azul eléctrico).
*   **S (Sensación):** Futurismo, energía eléctrica.
*   **E (Estilo):** High-fashion, colores saturados.
*   **M (Composición):** Medio corto, silueta enfatizada.
        `,
        prompt_text: JSON.stringify({
            "title": "Alta Costura Cyberpunk con Iluminación Dual - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro femenino estilizado con mirada intensa y elegante.",
                    "expresion": "Confianza moderna.",
                    "cabello": "Corte bob claro minimalista.",
                    "coherencia": "Modelado editorial preciso."
                },
                "E_Entorno": {
                    "fondo": "Negro absoluto.",
                    "ambientacion": "Futurista cyberpunk limpio."
                },
                "A_Accion_Postura": {
                    "pose": "De espaldas con giro al hombro.",
                    "mirada": "Fuerte hacia cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Luz de neón dual.",
                    "caracteristicas": {
                        "lado_izquierdo": "Amarillo–naranja intenso.",
                        "lado_derecho": "Azul eléctrico."
                    }
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Futurismo, energía eléctrica.",
                    "tono": "Editorial de moda moderna."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "High-fashion cyberpunk.",
                    "color": "Vibrante, saturado.",
                    "textura": "Ultra definida."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio corto.",
                    "angulo": "Neutral frontal con giro.",
                    "encuadre": "Silueta enfatizada."
                },
                "P_Postproduccion": {
                    "color_grading": "Dual-tone extremo.",
                    "claridad": "Muy alta."
                }
            }
        }, null, 2),
        category: "Cyberpunk",
        level: "intermediate",
        featured_image_url: "/images/cases/cyberpunk-fashion.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-cyb", name: "Cyberpunk", slug: "cyberpunk" }, { id: "t-neon", name: "Neon", slug: "neon" }],
        customization_guide: `# Estética Futurista
Cambia los colores de neón en I_Iluminacion para adaptarlos a tu marca (ej: "Violeta y Cian"). Puedes cambiar el peinado en R_Render para un look más agresivo.`,
        reference_image_guide: `Usa una foto con iluminación fuerte desde un lado. La IA integrará los colores neón sobre tu rostro manteniendo la pose de giro al hombro.`
    },
    {
        id: "p17",
        type: "prompt",
        title: "Cottagecore en Césped",
        slug: "cottagecore-en-cesped",
        summary: "Retrato cenital relajado sobre césped, estilo romántico y natural.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Rostro suave, pecas, cabello extendido radialmente.
*   **E (Entorno):** Césped verde cuidado.
*   **A (Acción):** Recostada, vista cenital, relajada.
*   **I (Iluminación):** Luz natural suave, sin sombras duras.
*   **S (Sensación):** Calma, pureza, cottagecore.
*   **E (Estilo):** Editorial romántico, colores verdes apagados.
*   **M (Composición):** Top-down puro, rostro centrado.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Cottagecore sobre Césped (Ángulo Cenital) - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro femenino suave con maquillaje natural y pecas visibles.",
                    "expresion": "Serena y delicada.",
                    "cabello": "Extendido radialmente alrededor de la cabeza.",
                    "coherencia": "Proporciones naturales y armoniosas."
                },
                "E_Entorno": {
                    "fondo": "Césped verde cuidado y limpio.",
                    "ambientacion": "Cottagecore naturalista."
                },
                "A_Accion_Postura": {
                    "pose": "Recostada mirando hacia la cámara cenital.",
                    "gestualidad": "Relajada y estable."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural suave.",
                    "caracteristicas": "Sin sombras duras."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Calma, pureza, naturaleza.",
                    "tono": "Romántico suave."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía editorial cottagecore.",
                    "color": "Verdes apagados, tonos cálidos.",
                    "textura": "Suave y limpia."
                },
                "M_Composicion_Camara": {
                    "plano": "Cenital mid/close-up.",
                    "angulo": "Top-down puro.",
                    "encuadre": "Rostro centrado."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta suave vintage.",
                    "claridad": "Moderada."
                }
            }
        }, null, 2),
        category: "Portrait",
        level: "beginner",
        featured_image_url: "/images/cases/cottagecore-grass.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-cott", name: "Cottagecore", slug: "cottagecore" }, { id: "t-nat", name: "Natural", slug: "natural" }],
        customization_guide: `# Estilo Natural
Para un look más otoñal, cambia el E_Entorno a "Césped con hojas secas en tonos ocres". También puedes añadir "flores silvestres" alrededor del cabello en R_Render.`,
        reference_image_guide: `Adjunta una foto mirando hacia arriba (ángulo cenital). La IA colocará tu rostro en el centro del césped y extenderá tu cabello de forma artística.`
    },
    {
        id: "p18",
        type: "prompt",
        title: "Artístico Bajo Cascada",
        slug: "artistico-bajo-cascada",
        summary: "Retrato etéreo con agua y reflejos, paleta de azules fríos y rosa suave.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Rostro suave, cabello mojado, figura realista.
*   **E (Entorno):** Cascada difuminada, agua cristalina.
*   **A (Acción):** De pie bajo el agua, mirada contemplativa.
*   **I (Iluminación):** Natural filtrada, reflejos acuáticos.
*   **S (Sensación):** Serenidad, fuerza natural.
*   **E (Estilo):** Realismo artístico, gotas detalladas.
*   **M (Composición):** Plano 3/4, modelo centrada.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Artístico Bajo Cascada en Bikini Rosa - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro suave con expresión tranquila.",
                    "expresion": "Calma elegante.",
                    "cabello": "Mojado cayendo sobre los hombros.",
                    "coherencia": "Figura proporcionada y realista."
                },
                "E_Entorno": {
                    "fondo": "Cascada difuminada, agua cristalina.",
                    "ambientacion": "Natural etérea."
                },
                "A_Accion_Postura": {
                    "pose": "De pie bajo el agua parcialmente sumergida.",
                    "mirada": "Suave y contemplativa."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural filtrada.",
                    "caracteristicas": "Reflejos acuáticos brillantes."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Serenidad y fuerza natural.",
                    "tono": "Fantástico realista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Realismo artístico hiper detallado.",
                    "color": "Azules fríos y rosa suave.",
                    "textura": "Gotas de agua detalladas."
                },
                "M_Composicion_Camara": {
                    "plano": "3/4.",
                    "angulo": "Neutral cinematográfico.",
                    "encuadre": "Modelo centrada."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos fríos acuáticos.",
                    "claridad": "Alta."
                }
            }
        }, null, 2),
        category: "Artistic",
        level: "advanced",
        featured_image_url: "/images/cases/artistic-waterfall.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-art", name: "Artistic", slug: "artistic" }, { id: "t-water", name: "Water", slug: "water" }],
        customization_guide: `# Fantasía Acuática
Si prefieres un entorno más oscuro, cambia el E_Entorno a "Cueva mágica con cascada de neón" y ajusta los colores en E_visual a "Púrpuras y Turquesas".`,
        reference_image_guide: `Sube una foto tuya con el cabello suelto. La IA simulará el efecto de cabello mojado y las gotas de agua sobre tu piel.`
    },
    {
        id: "p19",
        type: "prompt",
        title: "Neon Noir Cabello Mojado",
        slug: "neon-noir-cabello-mojado",
        summary: "Close-up intenso con piel húmeda y contraste Teal-Orange.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Mirada intensa, piel húmeda brillante, cabello oscuro pegado.
*   **E (Entorno):** Degradado teal-esmeralda.
*   **A (Acción):** Mano en el cabello, tensión visual.
*   **I (Iluminación):** Dual dramática (Naranja vs Azul).
*   **S (Sensación):** Tensión, fuerza, misterio.
*   **E (Estilo):** Neon noir moderno, hyperrealista.
*   **M (Composición):** Close-up frontal riguroso.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Neon Noir con Cabello Mojado - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Mirada intensa, piel húmeda brillante.",
                    "expresion": "Poder y misterio.",
                    "cabello": "Oscuro, mojado, pegado al rostro.",
                    "coherencia": "Fotorrealismo editorial."
                },
                "E_Entorno": {
                    "fondo": "Degradado teal–esmeralda.",
                    "ambientacion": "Neon noir moderno."
                },
                "A_Accion_Postura": {
                    "pose": "Close-up con mano en el cabello.",
                    "mirada": "Directa intensa."
                },
                "I_Iluminacion": {
                    "tipo": "Luz dual dramática.",
                    "caracteristicas": {
                        "izquierda": "Naranja cálido.",
                        "derecha": "Azul frío."
                    }
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Tensión visual, fuerza interior.",
                    "tono": "Noir vibrante."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Moda nocturna hiperrealista.",
                    "color": "Contrastes duros teal-orange.",
                    "textura": "Piel húmeda definida."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up.",
                    "angulo": "Frontal.",
                    "encuadre": "Rostro centrado en tensión."
                },
                "P_Postproduccion": {
                    "color_grading": "Teal–orange.",
                    "claridad": "Extrema.",
                    "efectos": "Volumetric light suave."
                }
            }
        }, null, 2),
        category: "Noir",
        level: "intermediate",
        featured_image_url: "/images/cases/neon-noir-wet.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-noir", name: "Noir", slug: "noir" }, { id: "t-wet", name: "Wet Look", slug: "wet-look" }]
    },
    {
        id: "p20",
        type: "prompt",
        title: "Neon Noir Rubia Platino",
        slug: "neon-noir-rubia-platino",
        summary: "Elegancia futurista con iluminación split roja y azul.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Maquillaje rojo intenso, rubia platino, ondas.
*   **E (Entorno):** Negro total, neon noir.
*   **A (Acción):** Cabeza hacia atrás, ojos cerrados.
*   **I (Iluminación):** Split lighting (Rojo vs Azul).
*   **S (Sensación):** Dramatismo introspectivo.
*   **E (Estilo):** Hiperrealismo, colores saturados.
*   **M (Composición):** Medio corto, ángulo bajo.
*   **P (Post):** Grading dual rojo/azul.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Neon Noir Rubia Platino (Ojos Cerrados) - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro definido con maquillaje rojo intenso.",
                    "expresion": "Relajada y elegante.",
                    "cabello": "Rubio platino con ondas.",
                    "coherencia": "Look editorial realista."
                },
                "E_Entorno": {
                    "fondo": "Negro total.",
                    "ambientacion": "Neon noir intenso."
                },
                "A_Accion_Postura": {
                    "pose": "Cabeza inclinada hacia atrás.",
                    "mirada": "Ojos cerrados."
                },
                "I_Iluminacion": {
                    "tipo": "Split lighting neon.",
                    "caracteristicas": {
                        "rojo": "Lado izquierdo.",
                        "azul": "Lado derecho."
                    }
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Dramatismo introspectivo.",
                    "tono": "Elegante y futurista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Hiperrealismo neon noir.",
                    "color": "Rojo–azul saturado.",
                    "textura": "Piel suave, brillante."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio corto.",
                    "angulo": "Ligeramente bajo.",
                    "encuadre": "Rostro y cuello enfatizados."
                },
                "P_Postproduccion": {
                    "color_grading": "Dual rojo/azul.",
                    "claridad": "Muy alta."
                }
            }
        }, null, 2),
        category: "Noir",
        level: "intermediate",
        featured_image_url: "/images/cases/neon-noir-blonde.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-noir", name: "Noir", slug: "noir" }, { id: "t-blonde", name: "Blonde", slug: "blonde" }]
    },
    {
        id: "p21",
        type: "prompt",
        title: "Neon Halo Rojo",
        slug: "neon-halo-rojo",
        summary: "Retrato poderoso con backlight de neón rojo formando un halo.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Labios intensos, cabello con ondas rojizas.
*   **E (Entorno):** Oscuro, aro de neón rojo detrás.
*   **A (Acción):** Frontal, mirada directa.
*   **I (Iluminación):** Backlight de neón, efecto halo.
*   **S (Sensación):** Poder visual, cyber noir.
*   **E (Estilo):** Editorial, rojo dominante.
*   **M (Composición):** Primer plano, halo centrado.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato con Halo de Neón Rojo - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro femenino iluminado por luz roja, labios intensos.",
                    "expresion": "Confianza elegante.",
                    "cabello": "Ondas rojizas iluminadas por el halo."
                },
                "E_Entorno": {
                    "fondo": "Oscuro total.",
                    "elemento": "Aro de neón rojo detrás de la cabeza."
                },
                "A_Accion_Postura": {
                    "pose": "Head & shoulders frontal.",
                    "mirada": "Directa intensa."
                },
                "I_Iluminacion": {
                    "tipo": "Backlight de neón.",
                    "caracteristicas": "Halo perfecto alrededor del rostro."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Poder visual.",
                    "tono": "Cyber noir elegante."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Neon noir editorial.",
                    "color": "Rojo dominante.",
                    "textura": "Alta claridad."
                },
                "M_Composicion_Camara": {
                    "plano": "Primer plano.",
                    "angulo": "Neutral.",
                    "encuadre": "Halo centrado."
                },
                "P_Postproduccion": {
                    "color_grading": "Rojo saturado.",
                    "contraste": "Alto."
                }
            }
        }, null, 2),
        category: "Creative",
        level: "advanced",
        featured_image_url: "/images/cases/neon-halo-red.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-red", name: "Red", slug: "red" }, { id: "t-halo", name: "Halo", slug: "halo" }]
    },
    {
        id: "p22",
        type: "prompt",
        title: "Retro Glam Cabriolet",
        slug: "retro-glam-cabriolet",
        summary: "Editorial de moda estilo Vogue retro en un descapotable rojo.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Gafas redondas retro, actitud sofisticada.
*   **E (Entorno):** Horizonte marino, cabriolet escarlata.
*   **A (Acción):** Al volante, mirando al espectador.
*   **I (Iluminación):** Sol de mediodía, sombras duras.
*   **S (Sensación):** Lujo, libertad, verano.
*   **E (Estilo):** Retro glam ultra detallado.
*   **M (Composición):** Medium shot.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Retro-Glam en Cabriolet con Horizonte Marino - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Modelo con gafas redondas retro.",
                    "expresion": "Actitud glam sofisticada.",
                    "cabello": "Al viento."
                },
                "E_Entorno": {
                    "fondo": "Horizonte del océano.",
                    "elementos": "Cabriolet escarlata brillante."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada al volante mirando hacia el espectador.",
                    "gestualidad": "Casual glam."
                },
                "I_Iluminacion": {
                    "tipo": "Sol de mediodía.",
                    "caracteristicas": "Sombras contrastadas, reflejos brillantes."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Lujo retro, libertad.",
                    "tono": "Editorial tipo Vogue."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Moda retro glam ultra detallada.",
                    "color": "Rojos brillantes, tonos de playa."
                },
                "M_Composicion_Camara": {
                    "plano": "Medium shot.",
                    "angulo": "Neutral.",
                    "encuadre": "Modelo centrada en volante."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos brillantes y glossy.",
                    "claridad": "Alta."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "intermediate",
        featured_image_url: "/images/cases/retro-glam-cabriolet.jpg",
        is_published: true,
        is_featured: true,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-retro", name: "Retro", slug: "retro" }, { id: "t-fash", name: "Fashion", slug: "fashion" }]
    },
    {
        id: "p23",
        type: "prompt",
        title: "Novia Alta Costura",
        slug: "novia-alta-costura",
        summary: "Fotografía de boda ultra-realista y lujosa en una suite.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Maquillaje perfecto, velo largo.
*   **E (Entorno):** Suite nupcial difuminada.
*   **A (Acción):** De pie, serena.
*   **I (Iluminación):** Luz cálida premium.
*   **S (Sensación):** Romanticismo, lujo.
*   **E (Estilo):** Ultra-realismo 8K, texturas detalladas.
*   **M (Composición):** Full body.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato de Novia de Alta Costura en Suite Lujosa - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro elegante con maquillaje perfecto.",
                    "expresion": "Calma y elegancia.",
                    "cabello": "Peinado de novia con velo largo."
                },
                "E_Entorno": {
                    "fondo": "Suite nupcial difuminada.",
                    "ambientacion": "Romántica y sofisticada."
                },
                "A_Accion_Postura": {
                    "pose": "De pie mostrando el vestido.",
                    "mirada": "Serena hacia cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Luz cálida premium.",
                    "caracteristicas": "Texturas del vestido resaltadas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Romanticismo y lujo.",
                    "tono": "Editorial bridal."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Ultra-realismo 8K.",
                    "textura": "Encaje detallado, tul voluminoso."
                },
                "M_Composicion_Camara": {
                    "plano": "Full body.",
                    "angulo": "Neutral."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos de boda.",
                    "claridad": "Muy alta."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        featured_image_url: "/images/cases/high-fashion-bride.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-bride", name: "Bridal", slug: "bridal" }, { id: "t-lux", name: "Luxury", slug: "luxury" }]
    },
    // REAISEMP Framework - Women's Portraits (Part 2: 11-19)
    {
        id: "p24",
        type: "prompt",
        title: "Retrato Fotográfico en Arcade (Ghostface)",
        slug: "foto-amenazante-arcade-ghostface",
        summary: "Retrato con temática Ghostface en un arcade vibrante con luces neón rosa.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Joven con expresión lúdica pero seria, estilo urbano.
*   **E (Entorno):** Arcade colorido, cabina de peluches Ghostface, neón rosa.
*   **A (Acción):** Sentada en la máquina de peluches, teléfono rojo.
*   **I (Iluminación):** Neón rosa predominante.
*   **S (Sensación):** Tensión divertida, pop horror.
*   **E (Estilo):** Arcade aesthetic vibrante.
*   **M (Composición):** Plano medio, frontal bajo.
*   **P (Post):** Magenta-neón saturado.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato Fotográfico en Arcade con Temática Ghostface - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Joven con expresión seria pero intrigante, rasgos suaves, mirada dirigida a cámara.",
                    "expresion": "Seriedad lúdica, toque de tensión.",
                    "cabello": "Suelto, arreglado de manera casual.",
                    "coherencia": "Proporciones realistas y estilo urbano."
                },
                "E_Entorno": {
                    "fondo": "Arcade colorido con luces neón rosa, máquinas retro y ambientación vibrante.",
                    "elementos": "Cabina de peluches Ghostface; letrero neón 'Wanna Play?'."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada dentro de la máquina de peluches.",
                    "gestualidad": "Sosteniendo un teléfono rojo de los 90.",
                    "mirada": "Directa a la cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación de neón rosa predominante.",
                    "caracteristicas": "Reflejos en piel y sombras suaves de ambiente arcade."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Tensión divertida, vibra misteriosa.",
                    "tono": "Pop horror estilizado."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía vibrante tipo 'arcade aesthetic'.",
                    "color": "Magenta dominante con toques de azul.",
                    "textura": "Grano ligero de ambiente nocturno."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Frontal ligeramente bajo.",
                    "encuadre": "Modelo centrada dentro de la máquina."
                },
                "P_Postproduccion": {
                    "color_grading": "Magenta-neón saturado.",
                    "claridad": "Media-alta.",
                    "efectos": "Glow neón ligero."
                }
            }
        }, null, 2),
        category: "Creative",
        level: "intermediate",
        featured_image_url: "/images/cases/arcade-ghostface.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-arc", name: "Arcade", slug: "arcade" }, { id: "t-neon", name: "Neon", slug: "neon" }]
    },
    {
        id: "p25",
        type: "prompt",
        title: "Retrato de Pareja Elegante (Turtleneck)",
        slug: "retrato-pareja-elegante-turtleneck",
        summary: "Retrato de pareja en estudio, estilo elegante y minimalista.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Pareja con aspecto clásico, turtleneck negro.
*   **E (Entorno):** Estudio oscuro minimalista.
*   **A (Acción):** Brazos rodeando hombros, conexión afectuosa.
*   **I (Iluminación):** Luz suave enfocada.
*   **S (Sensación):** Conexión, calidez, elegancia.
*   **E (Estilo):** Editorial de estudio.
*   **M (Composición):** Medio corto, altura de ojos.
*   **P (Post):** Cálido suave cinematográfico.
        `,
        prompt_text: JSON.stringify({
            "title": "Retrato de Pareja Elegante en Estudio (Turtleneck) - Femenino",
            "framework_REAISEMP": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro suave, maquillaje natural, mirada calmada.",
                    "expresion": "Serena y afectuosa.",
                    "cabello": "Largo ondulado.",
                    "coherencia": "Aspecto clásico y elegante."
                },
                "E_Entorno": {
                    "fondo": "Estudio oscuro minimalista.",
                    "ambientacion": "Cinemática elegante."
                },
                "A_Accion_Postura": {
                    "pose": "De pie detrás del hombre, brazos rodeando sus hombros.",
                    "mirada": "Hacia cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Luz suave enfocada.",
                    "caracteristicas": "Sombras elegantes que separan del fondo."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Conexión, calidez, elegancia.",
                    "tono": "Retrato profesional elegante."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía editorial en estudio.",
                    "color": "Negros profundos, piel cálida.",
                    "textura": "Alta definición limpia."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio corto.",
                    "angulo": "Altura de ojos.",
                    "encuadre": "Pareja centrada en armonía."
                },
                "P_Postproduccion": {
                    "color_grading": "Cálido suave.",
                    "claridad": "Alta.",
                    "contraste": "Moderado para estilo cinematográfico."
                }
            }
        }, null, 2),
        category: "Portrait",
        level: "intermediate",
        featured_image_url: "/images/cases/elegant-couple-turtleneck.jpg",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-coup", name: "Couple", slug: "couple" }, { id: "t-elig", name: "Elegant", slug: "elegant" }]
    },
    {
        id: "p26",
        type: "prompt",
        title: "Pareja B&W Espalda con Espalda",
        slug: "pareja-bw-espalda-con-espalda",
        summary: "Retrato editorial de alta costura en blanco y negro, simétrico y fuerte.",
        body_markdown: `
# Framework REAISEMP

*   **R (Render):** Expresión intensa, blazer negro.
*   **E (Entorno):** Telón gris claro minimalista.
*   **A (Acción):** Espalda con espalda, mirada intensa.
*   **I (Iluminación):** Luz controlada, contraste B&W.
*   **S (Sensación):** Fuerza, sofisticación.
*   **E (Estilo):** Monocromo elegante fashion.
*   **M (Composición):** Mitad de cuerpo, simétrico.
*   **P (Post):** B&W alto contraste.
        `,
        prompt_text: JSON.stringify({
            "title": "Pareja B&W Espalda con Espalda",
            "framework": "REAISEMP"
        }, null, 2),
        category: "Portrait",
        level: "advanced",
        featured_image_url: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1000&auto=format&fit=crop",
        is_published: true,
        is_featured: false,
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [{ id: "t-life", name: "Lifestyle", slug: "lifestyle" }, { id: "t-warm", name: "Warm", slug: "warm" }]
    },
    ...EXTRA_MOCK_PROMPTS as ContentItem[],







];

export const MOCK_AUTOMATIONS: ContentItem[] = [];


export async function getPublicPrompts() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_PROMPTS;
}

export async function getPublicAutomations() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_AUTOMATIONS;
}

// Unified Mock Content with Tag Transformation
import { ContentItemWithTags } from "@/types/content";

const transformTags = (tags: any[] | undefined): any[] => {
    if (!tags) return [];
    return tags.map((tag: string | any, index: number) => {
        if (typeof tag === 'string') {
            return { id: `mock - tag - ${index}`, name: tag, slug: tag.toLowerCase().replace(/\s+/g, '-') };
        }
        return tag;
    });
};

const transformMockItem = (item: any): ContentItemWithTags => ({
    ...item,
    tags: transformTags(item.tags)
});

// Mutable store for mock content
export let ALL_MOCK_CONTENT: ContentItemWithTags[] = [
    ...MOCK_SYSTEMS.map(transformMockItem),
    ...MOCK_PROMPTS.map(transformMockItem),
    ...MOCK_AUTOMATIONS.map(transformMockItem)
];

export const updateMockItem = (id: string, updates: Partial<ContentItemWithTags>) => {
    ALL_MOCK_CONTENT = ALL_MOCK_CONTENT.map(item =>
        item.id === id ? { ...item, ...updates } : item
    );
};

export const addMockItem = (item: ContentItemWithTags) => {
    ALL_MOCK_CONTENT.push(item);
};

export const deleteMockItem = (id: string) => {
    ALL_MOCK_CONTENT = ALL_MOCK_CONTENT.filter(item => item.id !== id);
};

// Mutable store for tags
export let MOCK_TAGS = [
    { id: 't-port', name: 'Portrait', slug: 'portrait' },
    { id: 't-cine', name: 'Cinematic', slug: 'cinematic' },
    { id: 't-bw', name: 'B&W', slug: 'black-white' },
    { id: 't-cyb', name: 'Cyberpunk', slug: 'cyberpunk' },
    { id: 't-neon', name: 'Neon', slug: 'neon' }
];

export const addMockTag = (name: string, slug: string) => {
    const newTag = { id: `mock - tag - ${Date.now()}`, name, slug };
    MOCK_TAGS.push(newTag);
    return newTag;
};

export const updateMockTag = (id: string, name: string, slug: string) => {
    MOCK_TAGS = MOCK_TAGS.map(t => t.id === id ? { ...t, name, slug } : t);
    return MOCK_TAGS.find(t => t.id === id);
};

export const deleteMockTag = (id: string) => {
    MOCK_TAGS = MOCK_TAGS.filter(t => t.id !== id);
};

