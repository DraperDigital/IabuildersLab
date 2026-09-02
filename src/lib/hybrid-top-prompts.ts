import { ContentItem } from "@/types/content";

export const HYBRID_TOP_PROMPTS: ContentItem[] = [
    {
        id: "sys-irresistible-offer-architect",
        type: "system",
        title: "SOP: Arquitectura de Ofertas Irresistibles y Bonos Apilables",
        slug: "sop-arquitectura-ofertas-irresistibles",
        summary: "Marco estratégico D.R.A.P.E.R. para transformar servicios y productos commodities en ofertas irresistibles de alto valor percibido con garantía, bonos estratégicos y estructura de precios.",
        category: "Páginas de Ventas",
        system_type: "copywriting",
        process_state: "build",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `Actúa como un Copywriter y Arquitecto de Ofertas Senior especializado en ofertas de alto valor (High-Ticket Offers).
Tu objetivo es rediseñar una propuesta de valor commodity y transformarla en una "Oferta Irresistible" aplicando la Metodología D.R.A.P.E.R.

DATOS DE ENTRADA:
- Producto / Servicio: [INSERTAR PRODUCTO O SERVICIO]
- Cliente Ideal (ICP): [INSERTAR CLIENTE IDEAL]
- Precio Actual: [INSERTAR PRECIO]
- Principal Dolor del Cliente: [INSERTAR DOLOR PRINCIPAL]

ESTRUCTURA DE SALIDA REQUERIDA:

1. DIAGNÓSTICO DEL VALOR PERCIBIDO
- Define la Ecuación del Valor: (Resultado Soñado x Probabilidad Percibida de Éxito) / (Tiempo de Espera x Esfuerzo y Sacrificio).
- Identifica 3 fricciones clave que frenan al cliente antes de comprar.

2. REDISEÑO DE LA PROMESA MAESTRA (THE BIG PROMISE)
- Escribe 3 titulares disruptivos con la fórmula: "[Resultado Deseado] en [Tiempo] sin [Mayor Miedo/Dolor]".

3. APILAMIENTO DE BONOS ESTRATÉGICOS (BONUS STACK)
- Diseña 3 bonos de alto valor percibido que resuelvan el "siguiente problema" del cliente al usar el producto principal.
- Asigna un valor monetario ficticio razonable a cada bono.

4. INGENIERÍA DE GARANTÍAS Y REDUCCIÓN DE RIESGO
- Crea 2 opciones de garantías éticas (Garantía condicional basada en resultados vs Garantía incondicional de satisfacción).

5. LLAMADA A LA ACCIÓN Y DISPARADORES DE URGENCIA ÉTICA
- Redacta la sección de cierre de la oferta con un resumen del valor total ($ Total Value vs $ Real Price).`,
        body_markdown: `
# SOP: Arquitectura de Ofertas Irresistibles y Bonos Apilables

Marco estratégico para transformar productos commodities en ofertas irresistibles de alto valor percibido con garantía de inversión, bonos estratégicos y estructura de precios.

---

## 🛠️ Prompt Maestro de Ejecución

\`\`\`text
Actúa como un Copywriter y Arquitecto de Ofertas Senior especializado en ofertas de alto valor (High-Ticket Offers).
Tu objetivo es rediseñar una propuesta de valor commodity y transformarla en una "Oferta Irresistible" aplicando la Metodología D.R.A.P.E.R.

DATOS DE ENTRADA:
- Producto / Servicio: [INSERTAR PRODUCTO O SERVICIO]
- Cliente Ideal (ICP): [INSERTAR CLIENTE IDEAL]
- Precio Actual: [INSERTAR PRECIO]
- Principal Dolor del Cliente: [INSERTAR DOLOR PRINCIPAL]

ESTRUCTURA DE SALIDA REQUERIDA:

1. DIAGNÓSTICO DEL VALOR PERCIBIDO
- Define la Ecuación del Valor: (Resultado Soñado x Probabilidad Percibida de Éxito) / (Tiempo de Espera x Esfuerzo y Sacrificio).
- Identifica 3 fricciones clave que frenan al cliente antes de comprar.

2. REDISEÑO DE LA PROMESA MAESTRA (THE BIG PROMISE)
- Escribe 3 titulares disruptivos con la fórmula: "[Resultado Deseado] en [Tiempo] sin [Mayor Miedo/Dolor]".

3. APILAMIENTO DE BONOS ESTRATÉGICOS (BONUS STACK)
- Diseña 3 bonos de alto valor percibido que resuelvan el "siguiente problema" del cliente al usar el producto principal.
- Asigna un valor monetario ficticio razonable a cada bono.

4. INGENIERÍA DE GARANTÍAS Y REDUCCIÓN DE RIESGO
- Crea 2 opciones de garantías éticas (Garantía condicional basada en resultados vs Garantía incondicional de satisfacción).

5. LLAMADA A LA ACCIÓN Y DISPARADORES DE URGENCIA ÉTICA
- Redacta la sección de cierre de la oferta con un resumen del valor total ($ Total Value vs $ Real Price).
\`\`\`
`,
        tags: ["Copywriting", "Ofertas", "Ventas", "High Ticket"] as any
    },
    {
        id: "sys-vsl-script-engine",
        type: "system",
        title: "SOP: Guion para VSL de Alta Conversión (Video Sales Letter)",
        slug: "sop-guion-vsl-alta-conversion",
        summary: "Estructura paso a paso de 5 bloques para guiones VSL de 10 a 15 minutos: Hook de atención, historia de origen, mecanismo único, prueba social y oferta irresistible.",
        category: "Ventas y Calificación",
        system_type: "sales",
        process_state: "build",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `Actúa como un Guionista de VSL (Video Sales Letter) de respuesta directa que ha generado millones de dólares en ventas digitales.
Escribe la estructura completa y el guion narrativo para un VSL de 10 minutos enfocado en vender [PRODUCTO/SERVICIO].

PARÁMETROS DEL PROYECTO:
- Producto/Servicio: [INSERTAR PRODUCTO/SERVICIO]
- Audiencia Objetivo: [INSERTAR AUDIENCIA]
- Mecanismo Único de Solución: [INSERTAR MECANISMO ÚNICO O METODOLOGÍA]

BLOQUES DEL GUION (PALABRA POR PALABRA):
1. EL HOOK DE IMPACTO (Primeros 60 segundos): Retén la atención cuestionando un mito de la industria.
2. LA HISTORIA DE ORIGEN Y EL PUNTO DE QUIEBRE (Minuto 1 a 4): Transición emocional del dolor al descubrimiento.
3. REVELACIÓN DEL MECANISMO ÚNICO (Minuto 4 a 7): Explica por qué los métodos tradicionales fallan y por qué tu sistema es matemáticamente superior.
4. PRESENTACIÓN DEL PRODUCTO Y PRUEBA SOCIAL (Minuto 7 a 10): Muestra testimonios y desglose de módulos/beneficios.
5. LA LLAMADA A LA ACCIÓN FINAL (Minuto 10 a 12): Establece un ultimátum claro entre continuar igual o tomar acción hoy.`,
        body_markdown: `
# SOP: Guion para VSL de Alta Conversión (Video Sales Letter)

Estructura paso a paso de 5 bloques para guiones VSL de 10 a 15 minutos: Hook de atención, historia de origen, mecanismo único, prueba social y oferta irresistible.

---

## 🛠️ Prompt Maestro de Ejecución

\`\`\`text
Actúa como un Guionista de VSL (Video Sales Letter) de respuesta directa que ha generado millones de dólares en ventas digitales.
Escribe la estructura completa y el guion narrativo para un VSL de 10 minutos enfocado en vender [PRODUCTO/SERVICIO].

PARÁMETROS DEL PROYECTO:
- Producto/Servicio: [INSERTAR PRODUCTO/SERVICIO]
- Audiencia Objetivo: [INSERTAR AUDIENCIA]
- Mecanismo Único de Solución: [INSERTAR MECANISMO ÚNICO O METODOLOGÍA]

BLOQUES DEL GUION (PALABRA POR PALABRA):
1. EL HOOK DE IMPACTO (Primeros 60 segundos): Retén la atención cuestionando un mito de la industria.
2. LA HISTORIA DE ORIGEN Y EL PUNTO DE QUIEBRE (Minuto 1 a 4): Transición emocional del dolor al descubrimiento.
3. REVELACIÓN DEL MECANISMO ÚNICO (Minuto 4 a 7): Explica por qué los métodos tradicionales fallan y por qué tu sistema es matemáticamente superior.
4. PRESENTACIÓN DEL PRODUCTO Y PRUEBA SOCIAL (Minuto 7 a 10): Muestra testimonios y desglose de módulos/beneficios.
5. LA LLAMADA A LA ACCIÓN FINAL (Minuto 10 a 12): Establece un ultimátum claro entre continuar igual o tomar acción hoy.
\`\`\`
`,
        tags: ["VSL", "Guiones", "Video Marketing", "Ventas"] as any
    },
    {
        id: "sys-high-ticket-cold-email",
        type: "system",
        title: "SOP: Secuencia de Prospección Fría B2B por Email (Cold Outreach)",
        slug: "sop-secuencia-prospeccion-fria-b2b",
        summary: "Secuencia de 4 correos fríos para tomadores de decisiones (CEOs, CMOs, Directors) centrada en personalizar puntos de dolor, aportar valor sin vender y agendar llamadas.",
        category: "Marketing & Content",
        system_type: "outreach",
        process_state: "build",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `Escribe una secuencia de 4 correos de prospección fría B2B dirigidos a [CARGO DEL DECISOR, EJ: DIRECTOR DE MARKETING] en la industria de [INDUSTRIA].

REGLAS DE COPYWRITING:
- Cero lenguaje vendedor ni "espero que estés bien".
- Máximo 75-100 palabras por correo.
- Formato de texto plano profesional.

SECUENCIA DE CORREOS:
1. EMAIL 1 (El Hook de Observación): Menciona una observación específica del negocio del prospecto y sugiere un diagnóstico corto.
2. EMAIL 2 (El Caso de Estudio de 3 Oraciones): Muestra cómo ayudaste a un cliente similar a lograr [RESULTADO] en [TIEMPO].
3. EMAIL 3 (Aporte de Valor Gratuito): Entrega un recurso sin pedir nada a cambio (ej: "Grabé un video de 2 minutos analizando X").
4. EMAIL 4 (El Breakup Email): Cierre cordial avisando que no volverás a insistir si no es el momento adecuado.`,
        body_markdown: `
# SOP: Secuencia de Prospección Fría B2B por Email (Cold Outreach)

Secuencia de 4 correos fríos para tomadores de decisiones (CEOs, CMOs, Directors) centrada en personalizar puntos de dolor, aportar valor sin vender y agendar llamadas.

---

## 🛠️ Prompt Maestro de Ejecución

\`\`\`text
Escribe una secuencia de 4 correos de prospección fría B2B dirigidos a [CARGO DEL DECISOR, EJ: DIRECTOR DE MARKETING] en la industria de [INDUSTRIA].

REGLAS DE COPYWRITING:
- Cero lenguaje vendedor ni "espero que estés bien".
- Máximo 75-100 palabras por correo.
- Formato de texto plano profesional.

SECUENCIA DE CORREOS:
1. EMAIL 1 (El Hook de Observación): Menciona una observación específica del negocio del prospecto y sugiere un diagnóstico corto.
2. EMAIL 2 (El Caso de Estudio de 3 Oraciones): Muestra cómo ayudaste a un cliente similar a lograr [RESULTADO] en [TIEMPO].
3. EMAIL 3 (Aporte de Valor Gratuito): Entrega un recurso sin pedir nada a cambio (ej: "Grabé un video de 2 minutos analizando X").
4. EMAIL 4 (El Breakup Email): Cierre cordial avisando que no volverás a insistir si no es el momento adecuado.
\`\`\`
`,
        tags: ["Cold Email", "B2B", "Outreach", "Prospección"] as any
    },
    {
        id: "sys-meta-ads-copywriter",
        type: "system",
        title: "SOP: Matriz de Copywriting para Meta Ads (Hooks, Angles & Copy)",
        slug: "sop-matriz-copywriting-meta-ads",
        summary: "Generador de 5 ángulos de anuncios publicitarios (Historia, Contradicción, Estadísticas, Transformación, Pregunta Provocadora) con variaciones de titulares y descripciones.",
        category: "Marketing & Content",
        system_type: "ads",
        process_state: "build",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `Actúa como un Media Buyer y Copywriter experto en Meta Ads (Facebook e Instagram Ads).
Genera una matriz de 5 textos publicitarios para anunciar [PRODUCTO/SERVICIO].

CADA ÁNGULO DEBE INCLUIR:
1. ÁNGULO 1: La Contradicción ("Por qué todo lo que te dijeron sobre [TEMA] es mentira").
2. ÁNGULO 2: La Historia Personal ("El día que estubimos a punto de quebrar por...").
3. ÁNGULO 3: El Dato Duro / Estadística ("El 84% de las empresas cometen este error...").
4. ÁNGULO 4: El Caso de Éxito Directo ("Cómo [CLIENTE] logró [RESULTADO] en [TIEMPO]").
5. ÁNGULO 5: La Pregunta Provocadora ("¿Sigues haciendo [MÉTODO VIEJO] en pleno 2026?").

PARA CADA ÁNGULO ENTREGA:
- Primary Text (Texto principal de 3 párrafos).
- Headline (Titular corto y llamativo de menos de 5 palabras).
- Description (Línea de soporte debajo del titular).`,
        body_markdown: `
# SOP: Matriz de Copywriting para Meta Ads (Hooks, Angles & Copy)

Generador de 5 ángulos de anuncios publicitarios (Historia, Contradicción, Estadísticas, Transformación, Pregunta Provocadora) con variaciones de titulares y descripciones.

---

## 🛠️ Prompt Maestro de Ejecución

\`\`\`text
Actúa como un Media Buyer y Copywriter experto en Meta Ads (Facebook e Instagram Ads).
Genera una matriz de 5 textos publicitarios para anunciar [PRODUCTO/SERVICIO].

CADA ÁNGULO DEBE INCLUIR:
1. ÁNGULO 1: La Contradicción ("Por qué todo lo que te dijeron sobre [TEMA] es mentira").
2. ÁNGULO 2: La Historia Personal ("El día que estuvimos a punto de quebrar por...").
3. ÁNGULO 3: El Dato Duro / Estadística ("El 84% de las empresas cometen este error...").
4. ÁNGULO 4: El Caso de Éxito Directo ("Cómo [CLIENTE] logró [RESULTADO] en [TIEMPO]").
5. ÁNGULO 5: La Pregunta Provocadora ("¿Sigues haciendo [MÉTODO VIEJO] en pleno 2026?").

PARA CADA ÁNGULO ENTREGA:
- Primary Text (Texto principal de 3 párrafos).
- Headline (Titular corto y llamativo de menos de 5 palabras).
- Description (Línea de soporte debajo del titular).
\`\`\`
`,
        tags: ["Meta Ads", "Facebook Ads", "Copywriting", "Anuncios"] as any
    },
    {
        id: "sys-webinar-close-script",
        type: "system",
        title: "SOP: Estructura de Cierre de Ventas para Webinars & Masterclasses",
        slug: "sop-estructura-cierre-webinars",
        summary: "Guion de transición de la fase educativa a la fase de venta en directo, manejo de objeciones en vivo, disparadores de urgencia y escasez ética.",
        category: "Operaciones y Cierre",
        system_type: "closing",
        process_state: "build",
        level: "advanced",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `Genera la sección de cierre de ventas (The Pitch & Close) para una Masterclass o Webinar en vivo sobre [TEMA DEL WEBINAR].

ESTRUCTURA DE TRANSICIÓN:
1. PERMISO PARA VENDER: Redacta la frase exacta de transición ("Hemos cubierto el contenido educativo... ¿me dan permiso de tomar 10 minutos para mostrarles cómo implementar esto conmigo?").
2. RECAPITULACIÓN DEL SISTEMA: Resume los 3 pilares enseñados en la clase.
3. PRESENTACIÓN DEL PROGRAMA / OFERTA: Desglose de módulos y acompañamiento.
4. MANEJO DE OBJECIONES EN VIVO:
   - Objeción de Tiempo ("No tengo tiempo para esto").
   - Objeción de Dinero ("No puedo gastar ahora").
   - Objeción de Confianza ("¿Funcionará para mi nicho específico?").
5. LLAMADA A LA ACCIÓN CON URGENCIA ÉTICA: Temporizador de bonos para los primeros 10 compradores.`,
        body_markdown: `
# SOP: Estructura de Cierre de Ventas para Webinars & Masterclasses

Guion de transición de la fase educativa a la fase de venta en directo, manejo de objeciones en vivo, disparadores de urgencia y escasez ética.

---

## 🛠️ Prompt Maestro de Ejecución

\`\`\`text
Genera la sección de cierre de ventas (The Pitch & Close) para una Masterclass o Webinar en vivo sobre [TEMA DEL WEBINAR].

ESTRUCTURA DE TRANSICIÓN:
1. PERMISO PARA VENDER: Redacta la frase exacta de transición ("Hemos cubierto el contenido educativo... ¿me dan permiso de tomar 10 minutos para mostrarles cómo implementar esto conmigo?").
2. RECAPITULACIÓN DEL SISTEMA: Resume los 3 pilares enseñados en la clase.
3. PRESENTACIÓN DEL PROGRAMA / OFERTA: Desglose de módulos y acompañamiento.
4. MANEJO DE OBJECIONES EN VIVO:
   - Objeción de Tiempo ("No tengo tiempo para esto").
   - Objeción de Dinero ("No puedo gastar ahora").
   - Objeción de Confianza ("¿Funcionará para mi nicho específico?").
5. LLAMADA A LA ACCIÓN CON URGENCIA ÉTICA: Temporizador de bonos para los primeros 10 compradores.
\`\`\`
`,
        tags: ["Webinars", "Cierre de Ventas", "Masterclass", "Pitches"] as any
    },
    {
        id: "prompt-luxury-perfume-product",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Cinematic Dark Elegance Perfume Bottle",
        slug: "luxury-perfume-dark-elegance",
        summary: "Fotografía de estudio comercial de alta gama para perfumería de lujo con iluminación chiaroscuro, reflejos sobre obsidiana y gotas de agua en cristal cristalino.",
        category: "Fotografía de Producto",
        system_type: "Midjourney v6 / REALISMO",
        featured_image_url: "/images/prompts/luxury-perfume-dark-elegance.jpg",
        process_state: "Estudio",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        transition_dimensions: "R, I y M",
        transition_detail: "este producto, la refracción en cristal y la iluminación chiaroscuro",
        transition_user_target: "tu propio catálogo de productos o marca",
        prompt_text: `{
  "render": "Botella de perfume de lujo fabricada en cristal, con acabado premium, superficie cristalina altamente detallada y físicamente realista. La botella es el sujeto principal y protagonista absoluto de la imagen.",
  "entorno": "Estudio comercial de lujo. La botella está colocada sobre una mesa de piedra obsidiana negra, pulida y altamente reflectante. La superficie permite observar un reflejo definido de la botella.",
  "accion": "Botella erguida y estable sobre la superficie de obsidiana. Pequeñas gotas de agua adheridas naturalmente a la superficie del cristal.",
  "lenguaje_visual": "Fotografía comercial de producto de alta gama, campaña de perfumería de lujo, estética cinematográfica, sofisticada y premium, con realismo fotográfico de producto.",
  "iluminacion": "Iluminación dramática tipo chiaroscuro. Destellos y filtraciones de luz suaves en tonos púrpura y dorado generan reflejos controlados sobre el cristal, las gotas de agua y la superficie de obsidiana. Contraste marcado entre luces y sombras.",
  "sensacion": "Lujo, exclusividad, sofisticación, misterio y sensualidad. Atmósfera cinematográfica y elegante.",
  "composicion": "Formato vertical 4:5. Fotografía de producto con la botella como punto focal absoluto. Profundidad de campo cinematográfica, manteniendo el producto definido mientras el entorno pierde nitidez progresivamente. Sensación de captura realizada con una cámara de formato medio Hasselblad H6D-100c.",
  "optimizacion_final": "Resolución ultra alta, máxima nitidez y detalle en el cristal, gotas de agua y reflejos. Transparencias y refracciones físicamente creíbles. Alto rango dinámico, negros profundos, tonos púrpura y dorado sofisticados, contraste cinematográfico y acabado fotográfico RAW profesional."
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Cinematic Dark Elegance Perfume Bottle

Prompt de fotografía comercial de lujo estructurado bajo el framework de 8 dimensiones **R.E.A.L.I.S.M.O.**

---

## 🎨 Especificación R.E.A.L.I.S.M.O.

- **R — Render / Avatar:** Botella de perfume de lujo fabricada en cristal, protagonista principal del encuadre. Superficie de vidrio cristalino con acabado premium y detalles de alta precisión.
- **E — Entorno:** Estudio comercial de lujo. La botella está colocada sobre una mesa de piedra obsidiana negra altamente reflectante. Superficie con reflejo visible y pequeñas gotas de agua sobre el cristal.
- **A — Acción / Postura:** La botella permanece erguida y centrada sobre la superficie. Las gotas de agua se adhieren naturalmente al vidrio. No hay interacción humana.
- **L — Lenguaje Visual:** Fotografía comercial de producto de alta gama, estética de campaña de perfumería de lujo, cinematográfica y sofisticada. Realismo fotográfico de producto.
- **I — Iluminación:** Iluminación dramática tipo chiaroscuro. Fuentes de luz suaves en tonos púrpura y dorado generan destellos y reflejos controlados sobre el cristal y la superficie de obsidiana. Contraste marcado entre luces y sombras.
- **S — Sensación / Atmósfera:** Lujo, sofisticación, exclusividad y misterio. Atmósfera cinematográfica, elegante y sensual.
- **M — Composición / Cámara:** Fotografía de producto en formato vertical 4:5. Botella como punto focal absoluto. Profundidad de campo cinematográfica, con el sujeto perfectamente definido y el entorno progresivamente desenfocado. Apariencia de captura de alta gama con cámara de formato medio, equivalente al lenguaje visual de una Hasselblad H6D-100c.
- **O — Optimización final:** Resolución ultra alta, máxima nitidez en el producto, reflejos y transparencias físicamente creíbles, detalle preciso en el cristal y las gotas de agua, contraste cinematográfico, acabado fotográfico RAW y color grading sofisticado en púrpuras, dorados y negros.

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON)

\`\`\`json
{
  "render": "Botella de perfume de lujo fabricada en cristal, con acabado premium, superficie cristalina altamente detallada y físicamente realista. La botella es el sujeto principal y protagonista absoluto de la imagen.",
  "entorno": "Estudio comercial de lujo. La botella está colocada sobre una mesa de piedra obsidiana negra, pulida y altamente reflectante. La superficie permite observar un reflejo definido de la botella.",
  "accion": "Botella erguida y estable sobre la superficie de obsidiana. Pequeñas gotas de agua adheridas naturalmente a la superficie del cristal.",
  "lenguaje_visual": "Fotografía comercial de producto de alta gama, campaña de perfumería de lujo, estética cinematográfica, sofisticada y premium, con realismo fotográfico de producto.",
  "iluminacion": "Iluminación dramática tipo chiaroscuro. Destellos y filtraciones de luz suaves en tonos púrpura y dorado generan reflejos controlados sobre el cristal, las gotas de agua y la superficie de obsidiana. Contraste marcado entre luces y sombras.",
  "sensacion": "Lujo, exclusividad, sofisticación, misterio y sensualidad. Atmósfera cinematográfica y elegante.",
  "composicion": "Formato vertical 4:5. Fotografía de producto con la botella como punto focal absoluto. Profundidad de campo cinematográfica, manteniendo el producto definido mientras el entorno pierde nitidez progresivamente. Sensación de captura realizada con una cámara de formato medio Hasselblad H6D-100c.",
  "optimizacion_final": "Resolución ultra alta, máxima nitidez y detalle en el cristal, gotas de agua y reflejos. Transparencias y refracciones físicamente creíbles. Alto rango dinámico, negros profundos, tonos púrpura y dorado sofisticados, contraste cinematográfico y acabado fotográfico RAW profesional."
}
\`\`\`
`,
        tags: ["Midjourney", "Fotografía", "Producto", "Lujo"] as any
    },
    {
        id: "prompt-executive-cyberpunk-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: High-End Founder Editorial Portrait",
        slug: "high-end-founder-editorial-portrait",
        summary: "Retrato fotográfico editorial para fundador de empresa tecnológica estilo portada Forbes con iluminación Rembrandt y profundidad de campo de 85mm a f/1.4.",
        category: "Retratos & Branding",
        system_type: "Flux 1.1 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        transition_dimensions: "R, I y M",
        transition_detail: "este rostro, esta iluminación dual y este encuadre editorial",
        transition_user_target: "tu propio rostro o identidad de marca",
        featured_image_url: "/images/cases/power-suit-portrait.jpg",
        prompt_text: `{
  "render": "Fundador de una empresa tecnológica, apariencia segura y profesional, vestido con un traje oscuro de corte impecable y estética contemporánea. Piel con textura natural y detalles faciales nítidos.",
  "entorno": "Estudio fotográfico profesional de alta gama, minimalista y limpio, diseñado para un retrato editorial corporativo.",
  "accion": "Postura segura y natural de fundador ejecutivo, proyectando autoridad y confianza. Mirada dirigida hacia la cámara.",
  "lenguaje_visual": "Retrato editorial de revista de negocios, fotografía corporativa de alta gama, estética de portada de Forbes, sofisticada, moderna y aspiracional.",
  "iluminacion": "Iluminación de estudio de alta gama con luz lateral suave tipo Rembrandt. Contraluz sutil en tonos púrpura para separar al sujeto del fondo. Iluminación controlada, con definición precisa en rostro y traje.",
  "sensacion": "Confianza, liderazgo, autoridad, innovación, sofisticación y éxito empresarial.",
  "composicion": "Retrato editorial vertical en formato 4:5. Encuadre de retrato de revista, con el sujeto como punto focal principal. Apariencia de lente 85mm a f/1.4, con profundidad de campo reducida y separación natural entre sujeto y fondo.",
  "optimizacion_final": "Detalles nítidos y definidos, textura natural de la piel, acabado fotográfico de alta gama, contraste refinado, separación limpia del sujeto y estética profesional de portada editorial."
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: High-End Founder Editorial Portrait

Retrato fotográfico editorial para branding personal ejecutivo, fundadores y perfiles profesionales estructurado bajo el framework de 8 dimensiones **R.E.A.L.I.S.M.O.**

---

## 🎨 Especificación R.E.A.L.I.S.M.O.

- **R — Render / Avatar:** Fundador de una empresa tecnológica, apariencia segura y profesional, vestido con un traje oscuro de corte impecable y estética contemporánea. Piel con textura natural y detalles faciales nítidos.
- **E — Entorno:** Estudio fotográfico profesional de alta gama, minimalista y limpio, diseñado para un retrato editorial corporativo.
- **A — Acción / Postura:** Postura segura y natural de fundador ejecutivo, proyectando autoridad y confianza. Mirada dirigida hacia la cámara.
- **L — Lenguaje Visual:** Retrato editorial de revista de negocios, fotografía corporativa de alta gama, estética de portada de Forbes, sofisticada, moderna y aspiracional.
- **I — Iluminación:** Iluminación de estudio de alta gama con luz lateral suave tipo Rembrandt. Contraluz sutil en tonos púrpura para separar al sujeto del fondo. Iluminación controlada, con definición precisa en rostro y traje.
- **S — Sensación / Atmósfera:** Confianza, liderazgo, autoridad, innovación, sofisticación y éxito empresarial.
- **M — Composición / Cámara:** Retrato editorial vertical en formato 4:5. Encuadre de retrato de revista, con el sujeto como punto focal principal. Apariencia de lente 85mm a f/1.4, con profundidad de campo reducida y separación natural entre sujeto y fondo.
- **O — Optimización final:** Detalles nítidos y definidos, textura natural de la piel, acabado fotográfico de alta gama, contraste refinado, separación limpia del sujeto y estética profesional de portada editorial.

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON)

\`\`\`json
{
  "render": "Fundador de una empresa tecnológica, apariencia segura y profesional, vestido con un traje oscuro de corte impecable y estética contemporánea. Piel con textura natural y detalles faciales nítidos.",
  "entorno": "Estudio fotográfico profesional de alta gama, minimalista y limpio, diseñado para un retrato editorial corporativo.",
  "accion": "Postura segura y natural de fundador ejecutivo, proyectando autoridad y confianza. Mirada dirigida hacia la cámara.",
  "lenguaje_visual": "Retrato editorial de revista de negocios, fotografía corporativa de alta gama, estética de portada de Forbes, sofisticada, moderna y aspiracional.",
  "iluminacion": "Iluminación de estudio de alta gama con luz lateral suave tipo Rembrandt. Contraluz sutil en tonos púrpura para separar al sujeto del fondo. Iluminación controlada, con definición precisa en rostro y traje.",
  "sensacion": "Confianza, liderazgo, autoridad, innovación, sofisticación y éxito empresarial.",
  "composicion": "Retrato editorial vertical en formato 4:5. Encuadre de retrato de revista, con el sujeto como punto focal principal. Apariencia de lente 85mm a f/1.4, con profundidad de campo reducida y separación natural entre sujeto y fondo.",
  "optimizacion_final": "Detalles nítidos y definidos, textura natural de la piel, acabado fotográfico de alta gama, contraste refinado, separación limpia del sujeto y estética profesional de portada editorial."
}
\`\`\`
`,
        tags: ["Retratos", "Branding", "Midjourney", "Ejecutivos"] as any
    },
    {
        id: "prompt-3d-glassmorphism-dashboard",
        type: "prompt",
        title: "Isometric Floating 3D Dark Mode AI Analytics Dashboard",
        slug: "isometric-3d-dark-mode-analytics-dashboard",
        summary: "Render 3D en perspectiva isométrica de un panel analítico flotante en modo oscuro con paneles de cristal esmerilado (glassmorphism), gráficos de neón violeta y cian.",
        category: "Diseño UI/UX 3D",
        system_type: "Midjourney v6",
        process_state: "3D Render",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/cases/code-style-card.jpg",
        prompt_text: `3D isometric render of a modern AI SaaS analytics dashboard UI floating in dark space, frosted glassmorphism cards, glowing violet and cyan neon charts, smooth rounded corners, Octane Render, 8k resolution, minimalist tech aesthetic --ar 4:5 --v 6.1`,
        body_markdown: `
# Isometric Floating 3D Dark Mode AI Analytics Dashboard

Prompt para generar mockups UI/UX 3D y gráficos futuristas para landing pages y sitios de tecnología.

---

## 🎨 Prompt Maestro

\`\`\`text
3D isometric render of a modern AI SaaS analytics dashboard UI floating in dark space, frosted glassmorphism cards, glowing violet and cyan neon charts, smooth rounded corners, Octane Render, 8k resolution, minimalist tech aesthetic --ar 4:5 --v 6.1
\`\`\`
`,
        tags: ["UI/UX", "3D", "Glassmorphism", "SaaS"] as any
    },
    {
        id: "prompt-minimalist-tech-keyboard",
        type: "prompt",
        title: "Minimalist Matte Black Mechanical Keyboard Studio Close-up",
        slug: "minimalist-matte-black-mechanical-keyboard",
        summary: "Fotografía macro de teclado mecánico negro mate con iluminación LED sutil violeta, textura suave al tacto y composición minimalista estilo Apple.",
        category: "Minimalismo Tech",
        system_type: "Flux 1.1",
        process_state: "Estudio",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/cases/anime-figure-desk.jpg",
        prompt_text: `Minimalist studio macro photography of a matte black custom mechanical keyboard, subtle purple RGB backlight glowing between keycaps, dark slate desk surface, clean arrangement, shot on Sony A7IV 90mm macro lens --ar 4:5 --v 6.1`,
        body_markdown: `
# Minimalist Matte Black Mechanical Keyboard Studio Close-up

Prompt macro de fotografía de hardware minimalista para fondos de pantalla y contenido de tecnología.

---

## 🎨 Prompt Maestro

\`\`\`text
Minimalist studio macro photography of a matte black custom mechanical keyboard, subtle purple RGB backlight glowing between keycaps, dark slate desk surface, clean arrangement, shot on Sony A7IV 90mm macro lens --ar 4:5 --v 6.1
\`\`\`
`,
        tags: ["Fotografía", "Tech", "Minimalista", "Hardware"] as any
    },
    {
        id: "prompt-futuristic-ai-server-room",
        type: "prompt",
        title: "Next-Gen Quantum AI Server Infrastructure Core",
        slug: "next-gen-quantum-ai-server-core",
        summary: "Escena fotográfica fotorrealista de sala de servidores cuánticos enfriados por líquido, luz cibernética azul y violeta, perspectiva de túnel profundo.",
        category: "Cyberpunk & Sci-Fi",
        system_type: "Midjourney v6",
        process_state: "Sci-Fi",
        level: "advanced",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/cases/cyberpunk-fashion.jpg",
        prompt_text: `Photorealistic wide angle shot of a futuristic liquid-cooled quantum AI supercomputer server hall, glowing neon purple and deep blue fiber optic cables, reflection on polished dark floor, vanishing point perspective, volumetric haze, 8k --ar 4:5 --v 6.1`,
        body_markdown: `
# Next-Gen Quantum AI Server Infrastructure Core

Prompt cinemático para ilustrar infraestructura de servidores, Inteligencia Artificial y computación cuántica.

---

## 🎨 Prompt Maestro

\`\`\`text
Photorealistic wide angle shot of a futuristic liquid-cooled quantum AI supercomputer server hall, glowing neon purple and deep blue fiber optic cables, reflection on polished dark floor, vanishing point perspective, volumetric haze, 8k --ar 4:5 --v 6.1
\`\`\`
`,
        tags: ["Cyberpunk", "AI Infrastructure", "Servers", "Sci-Fi"] as any
    },
    {
        id: "prompt-reaisemp-edgy-streetwear-bouquet",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Edgy Streetwear & Blue Studio Floral Portrait",
        slug: "metodologia-reaisemp-edgy-streetwear-blue-studio-bouquet",
        summary: "Prompt estructurado bajo el framework R.E.A.L.I.S.M.O. Retrato editorial contemporáneo con sujeto pelirrojo, estética streetwear, cadenas de plata y ramo de gerberas rojas sobre estudio azul saturado.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-edgy-streetwear-bouquet.png",
        prompt_text: `{
  "REALISMO": {
    "R": "Use uploaded portrait only as exact facial identity reference; preserve facial structure, proportions and natural skin texture.",
    "E": "Young adult woman, confident neutral expression, chin slightly raised, looking slightly downward toward camera.",
    "A": "Holding a large vibrant bouquet firmly against her chest.",
    "I": "Oversized sleeveless black tee, distressed rectangular red chest graphic, heavy silver chain, circular pendant, chunky rings, metallic bracelet/watch, black studded strap.",
    "S": "Centered medium portrait against a solid deep saturated blue studio backdrop.",
    "E2": "Hard directional light from upper side, crisp highlights on face and flowers, pronounced chin shadow, strong contrast.",
    "M": "Edgy contemporary fashion editorial, saturated red/blue/black palette, ultra-photorealistic."
  },
  "photography": {
    "camera": "professional editorial camera, 50mm portrait look",
    "aspect_ratio": "4:5",
    "focus": "sharp face and flowers, realistic microtexture",
    "finish": "high-resolution fashion photography, no artificial skin smoothing"
  },
  "prop": "organic bouquet of red gerberas, white carnations and light blue flowers"
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Edgy Streetwear & Blue Studio Floral Portrait

Prompt de alta precisión fotográfica utilizando la estructura sintáctica **R.E.A.L.I.S.M.O.** (Reference, Expression, Action, Identity/Outfit, Setting, Exposure/Lighting, Mood/Style).

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered medium portrait of a young adult woman with long red hair and natural freckles, confident neutral expression, chin slightly raised looking slightly downward toward camera, holding a large organic bouquet of red gerberas, white carnations and light blue flowers firmly against her chest, wearing an oversized sleeveless black tee with a distressed rectangular red chest graphic, heavy silver chain with circular pendant, chunky rings and metallic watch, solid deep saturated blue studio backdrop, hard directional lighting from upper side with crisp highlights and pronounced chin shadow, edgy contemporary fashion editorial aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REALISMO": {
    "R": "Use uploaded portrait only as exact facial identity reference; preserve facial structure, proportions and natural skin texture.",
    "E": "Young adult woman, confident neutral expression, chin slightly raised, looking slightly downward toward camera.",
    "A": "Holding a large vibrant bouquet firmly against her chest.",
    "I": "Oversized sleeveless black tee, distressed rectangular red chest graphic, heavy silver chain, circular pendant, chunky rings, metallic bracelet/watch, black studded strap.",
    "S": "Centered medium portrait against a solid deep saturated blue studio backdrop.",
    "E2": "Hard directional light from upper side, crisp highlights on face and flowers, pronounced chin shadow, strong contrast.",
    "M": "Edgy contemporary fashion editorial, saturated red/blue/black palette, ultra-photorealistic."
  },
  "photography": {
    "camera": "professional editorial camera, 50mm portrait look",
    "aspect_ratio": "4:5",
    "focus": "sharp face and flowers, realistic microtexture",
    "finish": "high-resolution fashion photography, no artificial skin smoothing"
  },
  "prop": "organic bouquet of red gerberas, white carnations and light blue flowers"
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Streetwear", "Retratos"] as any
    },
    {
        id: "prompt-reaisemp-vintage-sticker-bomb-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Pop-Art Vintage Sticker Bomb Portrait",
        slug: "metodologia-reaisemp-pop-art-vintage-sticker-bomb-portrait",
        summary: "Prompt de alto impacto visual bajo la metodología R.E.A.L.I.S.M.O. Retrato editorial avant-garde con pegatinas vintage (Coca-Cola, Starbucks, Gulf) cubriendo el rostro con textura de adhesivo hiperrealista.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vintage-sticker-bomb-portrait.png",
        prompt_text: `{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve all facial proportions and features.",
    "E": "Young adult woman, centered head-and-shoulders portrait, chin slightly lifted, mouth slightly open, strong fashion presence.",
    "A": "Facing camera directly with relaxed, controlled expression.",
    "I": "Structured matte-black high-neck garment.",
    "S": "Minimal smooth off-white/pale-gray studio backdrop.",
    "E2": "Soft directional beauty light from front, subtle jaw and cheekbone shadows, natural skin highlights, gentle dimensional contrast.",
    "M": "Dense curated colorful sticker collage covering most of the face while retaining recognizable facial structure; vintage logos, typography, symbols and mini illustrations follow facial curvature with realistic edges, overlap and adhesive shadows. Eyes remain visible and lips partly visible."
  },
  "photography": {
    "camera": "high-end editorial portrait",
    "aspect_ratio": "4:5",
    "focus": "sharp facial and sticker texture",
    "finish": "slight desaturation, subtle film grain, photorealistic magazine aesthetic"
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Pop-Art Vintage Sticker Bomb Portrait

Prompt de alta resolución artística estructurado con la sintaxis **R.E.A.L.I.S.M.O.** para recrear intervenciones de moda avant-garde con collage facial de pegatinas vintage.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered head-and-shoulders portrait of a young adult woman with long red hair and natural freckles, chin slightly lifted with mouth slightly open, wearing a structured matte-black high-neck turtleneck, face covered in a dense curated collage of colorful vintage brand stickers, logos and typography following facial curvature with realistic paper overlap and adhesive shadows, eyes and lips remaining visible, smooth off-white studio background, soft directional front beauty lighting, slight desaturation, subtle film grain, editorial fashion magazine aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve all facial proportions and features.",
    "E": "Young adult woman, centered head-and-shoulders portrait, chin slightly lifted, mouth slightly open, strong fashion presence.",
    "A": "Facing camera directly with relaxed, controlled expression.",
    "I": "Structured matte-black high-neck garment.",
    "S": "Minimal smooth off-white/pale-gray studio backdrop.",
    "E2": "Soft directional beauty light from front, subtle jaw and cheekbone shadows, natural skin highlights, gentle dimensional contrast.",
    "M": "Dense curated colorful sticker collage covering most of the face while retaining recognizable facial structure; vintage logos, typography, symbols and mini illustrations follow facial curvature with realistic edges, overlap and adhesive shadows. Eyes remain visible and lips partly visible."
  },
  "photography": {
    "camera": "high-end editorial portrait",
    "aspect_ratio": "4:5",
    "focus": "sharp facial and sticker texture",
    "finish": "slight desaturation, subtle film grain, photorealistic magazine aesthetic"
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Pop-Art", "Stickers"] as any
    },
    {
        id: "prompt-reaisemp-vertical-red-laser-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Cybernetic Vertical Red Laser Line Portrait",
        slug: "metodologia-reaisemp-cybernetic-vertical-red-laser-portrait",
        summary: "Prompt cinemático bajo sintaxis R.E.A.L.I.S.M.O. Retrato editorial cibernético con línea láser roja vertical cruzando el ojo y brillo realista sobre la piel.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vertical-red-laser-portrait.png",
        prompt_text: `{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve identity, proportions and natural skin texture.",
    "E": "Young adult woman with calm, intense, controlled expression.",
    "A": "Looking directly toward camera.",
    "I": "Minimal structured matte-black high-neck garment.",
    "S": "Dark blue studio background fading naturally toward near-black.",
    "E2": "Directional key light slightly above front, minimal fill, defined highlights on forehead, nose and cheekbone, deep detailed shadows under jaw; strong cool rim light outlining hair and shoulders.",
    "M": "Thin saturated red laser line crossing one eye with subtle glow and realistic red reflection on nearby skin; cinematic, mysterious, high-contrast editorial realism."
  },
  "photography": {
    "camera": "cinematic portrait camera, 50mm look",
    "aspect_ratio": "4:5",
    "focus": "razor-sharp visible eye and skin detail",
    "finish": "ultra-realistic studio photography"
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Cybernetic Vertical Red Laser Line Portrait

Prompt cinemático estructurado con la arquitectura **R.E.A.L.I.S.M.O.** para proyección de rayo láser rojo de precisión con luz direccional y contraste de tono frío vs cálido.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered portrait of a young adult woman with long red hair and freckles, calm intense expression looking directly toward camera, wearing a minimal structured matte-black high-neck garment, thin saturated red laser line crossing one eye with subtle glow and realistic red reflection on skin, dark blue studio background fading toward near-black, directional key light slightly above front with cool rim light outlining hair and shoulders, 50mm cinematic portrait look --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve identity, proportions and natural skin texture.",
    "E": "Young adult woman with calm, intense, controlled expression.",
    "A": "Looking directly toward camera.",
    "I": "Minimal structured matte-black high-neck garment.",
    "S": "Dark blue studio background fading naturally toward near-black.",
    "E2": "Directional key light slightly above front, minimal fill, defined highlights on forehead, nose and cheekbone, deep detailed shadows under jaw; strong cool rim light outlining hair and shoulders.",
    "M": "Thin saturated red laser line crossing one eye with subtle glow and realistic red reflection on nearby skin; cinematic, mysterious, high-contrast editorial realism."
  },
  "photography": {
    "camera": "cinematic portrait camera, 50mm look",
    "aspect_ratio": "4:5",
    "focus": "razor-sharp visible eye and skin detail",
    "finish": "ultra-realistic studio photography"
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Sci-Fi", "Laser"] as any
    },
    {
        id: "prompt-reaisemp-white-cobra-macro-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Primal Intimacy White Cobra Macro Portrait",
        slug: "metodologia-reaisemp-primal-intimacy-white-cobra-macro-portrait",
        summary: "Prompt macro de ultra-precisión bajo la metodología R.E.A.L.I.S.M.O. Sujeto femenino sereno con cobra blanca albina enroscada en el cuello, capucha expandida y escamas marfil en detalle fotográfico de 100mm f/2.8.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-white-cobra-macro.jpg",
        prompt_text: `{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve facial structure, proportions, pores and unique details.",
    "E": "Young adult woman with calm, fearless, controlled expression and intense direct gaze.",
    "A": "Holding completely still while a white cobra coils around her neck and crosses partially over her face.",
    "I": "Minimal visible styling; natural skin and hair remain secondary to the face and reptile.",
    "S": "Extreme macro portrait against seamless dark charcoal background.",
    "E2": "Soft directional macro light from one side, sculpting facial structure and individual ivory scales; deep but detailed shadows and controlled specular highlights.",
    "M": "Cobra hood partially expanded beside face, head elevated near nose and lips, subtle forked tongue, glossy black eyes. One human eye remains razor sharp while the other is partly obscured. Extreme tactile realism."
  },
  "photography": {
    "camera": "100mm macro lens, f/2.8 aesthetic",
    "aspect_ratio": "4:5 vertical",
    "focus": "visible eye and cobra head",
    "finish": "ultra-realistic fine-art macro photography, HDR, natural skin pores and individual scales"
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Primal Intimacy White Cobra Macro Portrait

Prompt hiperrealista de macrofotografía de bellas artes estructurado bajo la sintaxis **R.E.A.L.I.S.M.O.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Extreme macro portrait of a young adult woman with calm fearless expression, holding completely still with a white albino cobra coiled around her neck and crossing partially over her face, cobra hood partially expanded near nose and lips, forked tongue visible, glossy black eyes, seamless dark charcoal background, soft directional side macro lighting sculpting pores and individual scales, 100mm macro f/2.8 aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve facial structure, proportions, pores and unique details.",
    "E": "Young adult woman with calm, fearless, controlled expression and intense direct gaze.",
    "A": "Holding completely still while a white cobra coils around her neck and crosses partially over her face.",
    "I": "Minimal visible styling; natural skin and hair remain secondary to the face and reptile.",
    "S": "Extreme macro portrait against seamless dark charcoal background.",
    "E2": "Soft directional macro light from one side, sculpting facial structure and individual ivory scales; deep but detailed shadows and controlled specular highlights.",
    "M": "Cobra hood partially expanded beside face, head elevated near nose and lips, subtle forked tongue, glossy black eyes. One human eye remains razor sharp while the other is partly obscured. Extreme tactile realism."
  },
  "photography": {
    "camera": "100mm macro lens, f/2.8 aesthetic",
    "aspect_ratio": "4:5 vertical",
    "focus": "visible eye and cobra head",
    "finish": "ultra-realistic fine-art macro photography, HDR, natural skin pores and individual scales"
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Fine Art", "Macro", "Naturaleza"] as any
    },
    {
        id: "prompt-reaisemp-red-glitter-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Chiaroscuro Red & Iridescent Glitter Portrait",
        slug: "metodologia-reaisemp-chiaroscuro-red-iridescent-glitter-portrait",
        summary: "Prompt de estudio editorial chiaroscuro bajo la estructura R.E.A.L.I.S.M.O. Piel y vestimenta en monocromo de alto contraste con fondo rojo saturado y glitter iridiscente multicolor en los ojos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-red-glitter-portrait.png",
        prompt_text: `{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve full facial structure and proportions.",
    "E": "Young adult woman, 3/4 head-and-shoulders portrait, intense controlled gaze toward camera.",
    "A": "Face turned slightly away from light while eyes return toward camera.",
    "I": "Minimal elegant structured black attire.",
    "S": "Solid saturated red seamless studio background.",
    "E2": "Hard 45-degree directional key light, narrow beam, minimal fill; 60–70% of face remains in detailed shadow. Strong red rim light outlines hair and shoulders without lighting the face.",
    "M": "Skin and visible body rendered in dramatic black and white while background and rim remain red. Heavy multicolor iridescent glitter surrounds eyes with chunky reflective particles, preserving full-color sparkle."
  },
  "photography": {
    "camera": "high-end cinematic editorial camera",
    "aspect_ratio": "4:5",
    "focus": "illuminated eye and glitter particles",
    "finish": "moody chiaroscuro, ultra-detailed photorealism"
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Chiaroscuro Red & Iridescent Glitter Portrait

Prompt editorial de contraste dramático de color selectivo basado en el marco **R.E.A.L.I.S.M.O.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Cinematic 3/4 editorial portrait of an intense woman, monochrome black and white skin rendering, solid saturated red studio backdrop, strong red rim light on hair and shoulders, heavy full-color iridescent multicolor glitter surrounding both eyes, hard 45-degree key light leaving 60-70% of face in detailed chiaroscuro shadow, moody high-end fashion editorial --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REALISMO": {
    "R": "Use uploaded portrait as exact facial identity reference; preserve full facial structure and proportions.",
    "E": "Young adult woman, 3/4 head-and-shoulders portrait, intense controlled gaze toward camera.",
    "A": "Face turned slightly away from light while eyes return toward camera.",
    "I": "Minimal elegant structured black attire.",
    "S": "Solid saturated red seamless studio background.",
    "E2": "Hard 45-degree directional key light, narrow beam, minimal fill; 60–70% of face remains in detailed shadow. Strong red rim light outlines hair and shoulders without lighting the face.",
    "M": "Skin and visible body rendered in dramatic black and white while background and rim remain red. Heavy multicolor iridescent glitter surrounds eyes with chunky reflective particles, preserving full-color sparkle."
  },
  "photography": {
    "camera": "high-end cinematic editorial camera",
    "aspect_ratio": "4:5",
    "focus": "illuminated eye and glitter particles",
    "finish": "moody chiaroscuro, ultra-detailed photorealism"
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Chiaroscuro", "Moda"] as any
    },
    {
        id: "prompt-reaisemp-vogue-bridal-white-horse",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Vogue Pearl Veil & White Horse Editorial",
        slug: "metodologia-reaisemp-vogue-pearl-veil-white-horse-editorial",
        summary: "Prompt de alta costura nupcial inspirado en Vogue bajo sintaxis R.E.A.L.I.S.M.O. Novia con velo transparente de perlas cabeza a cabeza con un caballo blanco de ojos dorados y reflejos de nubes.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vogue-bridal-white-horse.jpg",
        prompt_text: `{
  "REALISMO": {
    "R": "Use uploaded portrait as facial identity reference where applicable; preserve natural facial proportions and texture.",
    "E": "Adult blonde bride with serene, intimate expression.",
    "A": "Standing very close to a white horse, creating an intimate eye-to-eye composition.",
    "I": "Pristine ivory bridal styling with soft pearl veil covering half the face.",
    "S": "Minimal pristine ivory environment with polished white stone floor and seamless pale background.",
    "E2": "Soft diffused cinematic light, gentle shadows, controlled highlights across veil, skin and horse.",
    "M": "The horse's golden eye sits beside the bride's visible eye, reflecting white clouds. Luxurious Vogue-style editorial realism, clean ivory/cream palette."
  },
  "photography": {
    "camera": "85mm fashion portrait lens",
    "aspect_ratio": "4:5 vertical",
    "focus": "eyes, veil texture and horse eye",
    "finish": "deep cinematic sharpness, ultra-realistic skin and hair"
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Vogue Pearl Veil & White Horse Editorial

Prompt editorial nupcial de gran lujo y elegancia pura, estructurado minuciosamente con el estándar **R.E.A.L.I.S.M.O.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Vogue style intimate close-up editorial portrait of an adult blonde bride with serene expression resting head-to-head beside a white horse, sheer pearl veil covering half her face, golden horse eye reflecting white clouds, minimal ivory background with white stone floor, soft diffused cinematic lighting, 85mm fashion lens aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REALISMO": {
    "R": "Use uploaded portrait as facial identity reference where applicable; preserve natural facial proportions and texture.",
    "E": "Adult blonde bride with serene, intimate expression.",
    "A": "Standing very close to a white horse, creating an intimate eye-to-eye composition.",
    "I": "Pristine ivory bridal styling with soft pearl veil covering half the face.",
    "S": "Minimal pristine ivory environment with polished white stone floor and seamless pale background.",
    "E2": "Soft diffused cinematic light, gentle shadows, controlled highlights across veil, skin and horse.",
    "M": "The horse's golden eye sits beside the bride's visible eye, reflecting white clouds. Luxurious Vogue-style editorial realism, clean ivory/cream palette."
  },
  "photography": {
    "camera": "85mm fashion portrait lens",
    "aspect_ratio": "4:5 vertical",
    "focus": "eyes, veil texture and horse eye",
    "finish": "deep cinematic sharpness, ultra-realistic skin and hair"
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Vogue", "Nupcial"] as any
    },
    {
        id: "prompt-reaisemp-cinematic-red-laser-noir",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Cinematográfico Noir con Láser Rojo",
        slug: "metodologia-reaisemp-retrato-cinematografico-noir-laser-rojo",
        summary: "Prompt cinemático estructurado en español bajo el marco R.E.A.L.I.S.M.O. Retrato de cabeza y hombros con iluminación de alto contraste, línea láser roja vertical atravesando el ojo y fondo azul profundo.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-laser-noir-portrait.jpg",
        prompt_text: `{
  "title": "Retrato Cinematográfico Noir con Láser Rojo",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado como referencia facial exacta.",
      "identidad": "Preservar completamente la identidad, rasgos faciales y proporciones del sujeto.",
      "encuadre_corporal": "Retrato de cabeza y hombros.",
      "piel": "Textura natural de piel, conservando detalle y realismo fotográfico.",
      "vestuario": "Prenda minimalista de cuello alto o estructura definida, completamente negra y de acabado mate."
    },
    "E_Entorno": {
      "fondo": "Estudio oscuro con degradado de azul profundo hacia negro casi absoluto.",
      "atmósfera": "Fondo limpio, oscuro y minimalista, con una separación visual clara entre el sujeto y el fondo."
    },
    "A_Accion_Postura": {
      "pose": "Retrato de cabeza y hombros con postura firme y controlada.",
      "orientacion": "Sujeto ligeramente inclinado hacia la cámara desde una perspectiva inferior.",
      "mirada": "Mirada dirigida ligeramente hacia abajo, hacia la cámara.",
      "expresion": "Seria, contenida y segura."
    },
    "I_Iluminacion": {
      "luz_principal": "Luz direccional proveniente ligeramente desde arriba y al frente.",
      "caracteristicas": "Iluminación de alto contraste con highlights definidos sobre la frente, puente de la nariz, pómulos y labios.",
      "relleno": "Luz de relleno mínima para conservar sombras profundas y dramáticas.",
      "sombras": "Sombras marcadas debajo de la mandíbula y sobre uno de los lados del rostro.",
      "rim_light": "Fuerte contraluz fría delineando el cabello y los hombros, creando una separación nítida respecto al fondo.",
      "laser": "Una línea láser roja, vertical, delgada y nítida atraviesa uno de los ojos. Rojo saturado con un glow sutil y un ligero reflejo rojizo sobre la piel cercana."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Intensa, misteriosa, segura y cinematográfica.",
      "tono": "Noir contemporáneo, sofisticado y ligeramente futurista."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía cinematográfica de estudio, oscura y sofisticada.",
      "realismo": "Fotorealismo de alta fidelidad con textura natural de piel y detalles faciales precisos."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano de cabeza y hombros.",
      "angulo": "Low-angle, cámara situada ligeramente por debajo del rostro.",
      "enfoque": "Enfoque extremadamente nítido sobre el rostro y los ojos."
    },
    "P_Postproduccion": {
      "color_grading": "Grading cinematográfico de alto contraste con azul oscuro y negros profundos.",
      "acento_cromatico": "Rojo intenso reservado para el láser y su reflejo sobre la piel."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Cinematográfico Noir con Láser Rojo

Framework completo estructurado en español bajo la metodología **R.E.A.L.I.S.M.O.** (Render del Avatar, Entorno, Acción/Postura, Iluminación, Sensación/Atmósfera, Estilo Visual, Composición/Cámara, Postproducción).

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Cinematic tight head-and-shoulders low-angle portrait of a serious controlled woman wearing a matte black turtleneck, thin saturated vertical red laser line slicing across one eye with subtle glow and skin reflection, deep blue seamless backdrop fading to near-black, hard directional top key light, crisp highlights, deep chin shadows, cool rim light on hair and shoulders, 50mm editorial camera look --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Cinematográfico Noir con Láser Rojo",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado como referencia facial exacta.",
      "identidad": "Preservar completamente la identidad, rasgos faciales y proporciones del sujeto.",
      "encuadre_corporal": "Retrato de cabeza y hombros.",
      "piel": "Textura natural de piel, conservando detalle y realismo fotográfico.",
      "vestuario": "Prenda minimalista de cuello alto o estructura definida, completamente negra y de acabado mate."
    },
    "E_Entorno": {
      "fondo": "Estudio oscuro con degradado de azul profundo hacia negro casi absoluto.",
      "atmósfera": "Fondo limpio, oscuro y minimalista, con una separación visual clara entre el sujeto y el fondo."
    },
    "A_Accion_Postura": {
      "pose": "Retrato de cabeza y hombros con postura firme y controlada.",
      "orientacion": "Sujeto ligeramente inclinado hacia la cámara desde una perspectiva inferior.",
      "mirada": "Mirada dirigida ligeramente hacia abajo, hacia la cámara.",
      "expresion": "Seria, contenida y segura."
    },
    "I_Iluminacion": {
      "luz_principal": "Luz direccional proveniente ligeramente desde arriba y al frente.",
      "caracteristicas": "Iluminación de alto contraste con highlights definidos sobre la frente, puente de la nariz, pómulos y labios.",
      "relleno": "Luz de relleno mínima para conservar sombras profundas y dramáticas.",
      "sombras": "Sombras marcadas debajo de la mandíbula y sobre uno de los lados del rostro.",
      "rim_light": "Fuerte contraluz fría delineando el cabello y los hombros, creando una separación nítida respecto al fondo.",
      "laser": "Una línea láser roja, vertical, delgada y nítida atraviesa uno de los ojos. Rojo saturado con un glow sutil y un ligero reflejo rojizo sobre la piel cercana."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Intensa, misteriosa, segura y cinematográfica.",
      "tono": "Noir contemporáneo, sofisticado y ligeramente futurista."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía cinematográfica de estudio, oscura y sofisticada.",
      "realismo": "Fotorealismo de alta fidelidad con textura natural de piel y detalles faciales precisos."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano de cabeza y hombros.",
      "angulo": "Low-angle, cámara situada ligeramente por debajo del rostro.",
      "enfoque": "Enfoque extremadamente nítido sobre el rostro y los ojos."
    },
    "P_Postproduccion": {
      "color_grading": "Grading cinematográfico de alto contraste con azul oscuro y negros profundos.",
      "acento_cromatico": "Rojo intenso reservado para el láser y su reflejo sobre la piel."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Noir", "Laser"] as any
    },
    {
        id: "prompt-reaisemp-purple-studio-relighting",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato de Estudio con Iluminación Esculpida Púrpura",
        slug: "metodologia-reaisemp-retrato-estudio-iluminacion-esculpida-purpura",
        summary: "Prompt de relighting profesional de estudio estructurado en español bajo R.E.A.L.I.S.M.O. Fondo púrpura índigo mate con iluminación direccional que esculpe pómulos y línea mandibular sin suavizado artificial.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-purple-studio-relighting.jpg",
        prompt_text: `{
  "title": "Retrato de Estudio con Iluminación Esculpida Púrpura",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar la imagen proporcionada únicamente como referencia de identidad facial y proporciones.",
      "identidad": "Preservar completamente la identidad y estructura facial del sujeto.",
      "restricciones_referencia": "Ignorar por completo la dirección e intensidad de iluminación de la imagen original.",
      "piel": "Conservar la textura natural de la piel sin suavizado artificial."
    },
    "E_Entorno": {
      "fondo": "Fondo sólido en tono púrpura índigo profundo.",
      "color": "Púrpura índigo altamente saturado.",
      "acabado": "Superficie mate, uniforme y sin variaciones de tono."
    },
    "A_Accion_Postura": {
      "pose": "Postura de retrato de estudio, estable y natural.",
      "orientacion": "Rostro orientado hacia la cámara."
    },
    "I_Iluminacion": {
      "fuente_principal": "Fuente de luz principal a la derecha de la cámara, iluminando intensamente el pómulo y mandíbula derechos.",
      "lado_en_sombra": "El lado izquierdo permanece visiblemente más oscuro con separación clara de sombras.",
      "rim_light": "Rim light delgado en el borde mandibular del lado en sombra."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Seguridad, intensidad y sofisticación.",
      "tono": "Dramático, preciso y contemporáneo."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía profesional de estudio con iluminación cinematográfica esculpida.",
      "realismo": "Fotorealismo de alta fidelidad."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de estudio centrado.",
      "angulo": "Ángulo neutro a la altura de los ojos."
    },
    "P_Postproduccion": {
      "color_grading": "Tratamiento cromático limpio con fondo púrpura índigo saturado.",
      "nitidez": "Alta nitidez en rasgos faciales y textura de piel."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato de Estudio con Iluminación Esculpida Púrpura

Especificación completa en español de Reiluminación (*Studio Relighting*) utilizando el marco **R.E.A.L.I.S.M.O.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered high-end studio portrait of a confident woman on a solid matte deep purple indigo backdrop, strong directional key light from camera right sculpting cheekbone and jawline, dark shadow-side on camera left with subtle cool rim light on jaw edge, realistic skin texture with visible natural pores and freckles, no digital smoothing, 85mm lens aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato de Estudio con Iluminación Esculpida Púrpura",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar la imagen proporcionada únicamente como referencia de identidad facial y proporciones.",
      "identidad": "Preservar completamente la identidad y estructura facial del sujeto.",
      "restricciones_referencia": "Ignorar por completo la dirección e intensidad de iluminación de la imagen original.",
      "piel": "Conservar la textura natural de la piel sin suavizado artificial."
    },
    "E_Entorno": {
      "fondo": "Fondo sólido en tono púrpura índigo profundo.",
      "color": "Púrpura índigo altamente saturado.",
      "acabado": "Superficie mate, uniforme y sin variaciones de tono."
    },
    "A_Accion_Postura": {
      "pose": "Postura de retrato de estudio, estable y natural.",
      "orientacion": "Rostro orientado hacia la cámara."
    },
    "I_Iluminacion": {
      "fuente_principal": "Fuente de luz principal a la derecha de la cámara, iluminando intensamente el pómulo y mandíbula derechos.",
      "lado_en_sombra": "El lado izquierdo permanece visiblemente más oscuro con separación clara de sombras.",
      "rim_light": "Rim light delgado en el borde mandibular del lado en sombra."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Seguridad, intensidad y sofisticación.",
      "tono": "Dramático, preciso y contemporáneo."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía profesional de estudio con iluminación cinematográfica esculpida.",
      "realismo": "Fotorealismo de alta fidelidad."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de estudio centrado.",
      "angulo": "Ángulo neutro a la altura de los ojos."
    },
    "P_Postproduccion": {
      "color_grading": "Tratamiento cromático limpio con fondo púrpura índigo saturado.",
      "nitidez": "Alta nitidez en rasgos faciales y textura de piel."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Relighting", "Estudio"] as any
    },
    {
        id: "prompt-reaisemp-botanical-fine-art",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Botánico de Bellas Artes",
        slug: "metodologia-reaisemp-retrato-botanico-bellas-artes",
        summary: "Prompt botánico de bellas artes estructurado en español bajo R.E.A.L.I.S.M.O. Composición analógica orgánica con ramas, flores mostaza y violeta sobre fondo crema-beige.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-botanical-fine-art.png",
        prompt_text: `{
  "title": "Retrato Botánico de Bellas Artes",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado únicamente como referencia de identidad facial.",
      "identidad": "Preservar completamente la estructura facial, rasgos distintivos y proporciones del sujeto.",
      "piel": "Conservar textura natural de piel sin suavizado artificial."
    },
    "E_Entorno": {
      "fondo": "Fondo neutro cálido en tono crema-beige mate.",
      "tratamiento": "Tono uniforme, sin degradado y sin colores dominantes."
    },
    "A_Accion_Postura": {
      "pose": "Retrato frontal en primer plano.",
      "encuadre_organico": "Ramas, tallos y follaje atraviesan parcialmente el rostro generando capas orgánicas en primer plano."
    },
    "I_Iluminacion": {
      "tipo": "Luz lateral suave y direccional cálida de ventana de tarde."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Introspectiva, tranquila y contemplativa.",
      "tono": "Orgánico, silencioso y artístico."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Retrato botánico de bellas artes con lenguaje fotográfico analógico.",
      "vegetacion": "Flores amarillo mostaza, moradas apagadas y pétalos blancos suaves con ramas retorcidas."
    },
    "M_Composicion_Camara": {
      "plano": "Primerísimo primer plano frontal.",
      "enfoque": "Rostro enfocado mientras vegetación cercana permanece suavemente fuera de foco."
    },
    "P_Postproduccion": {
      "paleta": "Paleta terrosa y apagada con verdes desaturados y grano analógico natural."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Botánico de Bellas Artes

Framework completo estructurado en español bajo el estándar **R.E.A.L.I.S.M.O.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Fine art botanical close-up frontal portrait of a quiet introspective woman, wild organic botanical arrangement with mustard yellow flowers, muted purple blossoms and thin twisted branches framing her face, authentic skin texture with freckles, warm cream-beige matte backdrop, soft side window lighting glow, painterly realism, analog film grain --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Botánico de Bellas Artes",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado únicamente como referencia de identidad facial.",
      "identidad": "Preservar completamente la estructura facial, rasgos distintivos y proporciones del sujeto.",
      "piel": "Conservar textura natural de piel sin suavizado artificial."
    },
    "E_Entorno": {
      "fondo": "Fondo neutro cálido en tono crema-beige mate.",
      "tratamiento": "Tono uniforme, sin degradado y sin colores dominantes."
    },
    "A_Accion_Postura": {
      "pose": "Retrato frontal en primer plano.",
      "encuadre_organico": "Ramas, tallos y follaje atraviesan parcialmente el rostro generando capas orgánicas en primer plano."
    },
    "I_Iluminacion": {
      "tipo": "Luz lateral suave y direccional cálida de ventana de tarde."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Introspectiva, tranquila y contemplativa.",
      "tono": "Orgánico, silencioso y artístico."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Retrato botánico de bellas artes con lenguaje fotográfico analógico.",
      "vegetacion": "Flores amarillo mostaza, moradas apagadas y pétalos blancos suaves con ramas retorcidas."
    },
    "M_Composicion_Camara": {
      "plano": "Primerísimo primer plano frontal.",
      "enfoque": "Rostro enfocado mientras vegetación cercana permanece suavemente fuera de foco."
    },
    "P_Postproduccion": {
      "paleta": "Paleta terrosa y apagada con verdes desaturados y grano analógico natural."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Fine Art", "Botanical", "Analógico"] as any
    },
    {
        id: "prompt-reaisemp-sticker-collage-editorial",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Editorial con Collage de Stickers",
        slug: "metodologia-reaisemp-retrato-editorial-collage-stickers",
        summary: "Prompt avant-garde en español estructurado con R.E.A.L.I.S.M.O. Retrato editorial centrado con stickers vintage (Coca-Cola, Starbucks, Gulf) amoldados sobre la geometría facial.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-sticker-collage-editorial.png",
        prompt_text: `{
  "title": "Retrato Editorial con Collage de Stickers",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado como referencia facial exacta.",
      "identidad": "Preservar completamente la identidad y estructura facial.",
      "vestuario": "Prenda negra estructurada de cuello alto en material mate."
    },
    "E_Entorno": {
      "fondo": "Fondo neutro claro, blanco roto a gris pálido."
    },
    "A_Accion_Postura": {
      "pose": "Retrato centrado de cabeza y hombros.",
      "stickers": "Composición densa de stickers vintage amoldados a la curvatura facial."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación de estudio suave direccional estilo beauty."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Seguridad, sofisticación y actitud editorial."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial con intervención gráfica analógica y textura realista."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano frontal centrado."
    },
    "P_Postproduccion": {
      "color_grading": "Ligera desaturación general y grano cinematográfico sutil."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Editorial con Collage de Stickers

Framework completo en español para retratos Pop-Art de intervención gráfica analógica.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered editorial head-and-shoulders portrait of a confident woman in a black matte turtleneck, face covered in a dense layered collage of colorful vintage stickers and logos conforming smoothly to facial geometry, eyes and lips visible, pale gray studio backdrop, soft front beauty lighting, subtle film grain --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Editorial con Collage de Stickers",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado como referencia facial exacta.",
      "identidad": "Preservar completamente la identidad y estructura facial.",
      "vestuario": "Prenda negra estructurada de cuello alto en material mate."
    },
    "E_Entorno": {
      "fondo": "Fondo neutro claro, blanco roto a gris pálido."
    },
    "A_Accion_Postura": {
      "pose": "Retrato centrado de cabeza y hombros.",
      "stickers": "Composición densa de stickers vintage amoldados a la curvatura facial."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación de estudio suave direccional estilo beauty."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Seguridad, sofisticación y actitud editorial."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial con intervención gráfica analógica y textura realista."
    },
    "M_Composicion_Camara": {
      "plano": "Primer plano frontal centrado."
    },
    "P_Postproduccion": {
      "color_grading": "Ligera desaturación general y grano cinematográfico sutil."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Pop-Art", "Stickers"] as any
    },
    {
        id: "prompt-reaisemp-chiaroscuro-glitter-red",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Editorial de Claroscuro con Glitter Iridiscente",
        slug: "metodologia-reaisemp-retrato-editorial-claroscuro-glitter-iridiscente",
        summary: "Prompt de alto impacto chiaroscuro en español bajo R.E.A.L.I.S.M.O. Piel monocromática en blanco y negro sobre fondo rojo carmesí con glitter multicolor iridiscente en los ojos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-chiaroscuro-glitter-red.png",
        prompt_text: `{
  "title": "Retrato Editorial de Claroscuro con Glitter Iridiscente",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado únicamente como referencia facial exacta.",
      "maquillaje": "Glitter iridiscente multicolor aplicado intensamente alrededor de los ojos con cobertura tipo máscara."
    },
    "E_Entorno": {
      "fondo": "Backdrop rojo sólido y altamente saturado."
    },
    "A_Accion_Postura": {
      "pose": "Retrato tres cuartos con rostro girado alejado de la luz principal."
    },
    "I_Iluminacion": {
      "luz_principal": "Key light dura a 45 grados dejando 60-70% en sombra chiaroscuro y rim light rojo en cabello."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misteriosa, intensa y sofisticada de alta moda."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial cinematográfica de alto contraste con color selectivo."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato 3/4 enfocado en el ojo iluminado."
    },
    "P_Postproduccion": {
      "tratamiento": "Piel en blanco y negro mientras fondo, rim y glitter permanecen en color pleno."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Editorial de Claroscuro con Glitter Iridiscente

Framework completo en español para claroscuro dramático con color selectivo.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
3/4 chiaroscuro editorial portrait of an intense woman, monochrome skin rendering, solid saturated red studio backdrop, strong red rim light on hair, full-color iridescent multicolor glitter makeup around eyes, hard 45-degree key light leaving 60-70% of face in shadow --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Editorial de Claroscuro con Glitter Iridiscente",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "referencia_facial": "Usar el retrato proporcionado únicamente como referencia facial exacta.",
      "maquillaje": "Glitter iridiscente multicolor aplicado intensamente alrededor de los ojos con cobertura tipo máscara."
    },
    "E_Entorno": {
      "fondo": "Backdrop rojo sólido y altamente saturado."
    },
    "A_Accion_Postura": {
      "pose": "Retrato tres cuartos con rostro girado alejado de la luz principal."
    },
    "I_Iluminacion": {
      "luz_principal": "Key light dura a 45 grados dejando 60-70% en sombra chiaroscuro y rim light rojo en cabello."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misteriosa, intensa y sofisticada de alta moda."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial cinematográfica de alto contraste con color selectivo."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato 3/4 enfocado en el ojo iluminado."
    },
    "P_Postproduccion": {
      "tratamiento": "Piel en blanco y negro mientras fondo, rim y glitter permanecen en color pleno."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Chiaroscuro", "Moda"] as any
    },
    {
        id: "prompt-reaisemp-vogue-bride-white-horse",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Editorial de Novia con Caballo Blanco",
        slug: "metodologia-reaisemp-retrato-editorial-novia-caballo-blanco",
        summary: "Prompt nupcial estilo Vogue estructurado en español bajo R.E.A.L.I.S.M.O. Novia con velo transparente decorado con perlas cabeza a cabeza con caballo blanco de ojo dorado con reflejo de nubes.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vogue-bride-white-horse.jpg",
        prompt_text: `{
  "title": "Retrato Editorial de Novia con Caballo Blanco",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Novia rubia sofisticada con velo de perlas cubriendo medio rostro y caballo blanco con ojo dorado que refleja nubes."
    },
    "E_Entorno": {
      "fondo": "Fondo blanco prístino con piso de piedra pulida en tono marfil-crema."
    },
    "A_Accion_Postura": {
      "pose": "Composición íntima cabeza con cabeza entre la novia y el caballo."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación envolvente suave y difusa."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Íntima, etérea, elegante y romántica."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial Vogue de alta costura e hiperrealismo fotográfico."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato 85mm con enfoque en ojos de la novia y del caballo."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta prístina blanca, marfil, beige y crema."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Editorial de Novia con Caballo Blanco

Framework completo en español para retratos nupciales estilo Vogue Haute Couture.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Vogue magazine style close-up portrait of an elegant bride in ivory gown with pearl veil beside a white horse, golden horse eye reflecting white sky clouds, polished white stone floor, minimal pale ivory environment, soft diffused lighting, 85mm lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Editorial de Novia con Caballo Blanco",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Novia rubia sofisticada con velo de perlas cubriendo medio rostro y caballo blanco con ojo dorado que refleja nubes."
    },
    "E_Entorno": {
      "fondo": "Fondo blanco prístino con piso de piedra pulida en tono marfil-crema."
    },
    "A_Accion_Postura": {
      "pose": "Composición íntima cabeza con cabeza entre la novia y el caballo."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación envolvente suave y difusa."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Íntima, etérea, elegante y romántica."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial Vogue de alta costura e hiperrealismo fotográfico."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato 85mm con enfoque en ojos de la novia y del caballo."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta prístina blanca, marfil, beige y crema."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Vogue", "Nupcial"] as any
    },
    {
        id: "prompt-reaisemp-cobra-macro-es",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Macro de Bellas Artes con Cobra Blanca",
        slug: "metodologia-reaisemp-retrato-macro-bellas-artes-cobra-blanca",
        summary: "Prompt macro hiperrealista estructurado en español bajo R.E.A.L.I.S.M.O. Sujeto femenino con piel natural y pecas, cobra blanca albina enroscada en el cuello y escamas marfil sobre fondo carbón.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-cobra-macro-es.jpg",
        prompt_text: `{
  "title": "Retrato Macro de Bellas Artes con Cobra Blanca",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer con identidad facial definida y apariencia completamente fotorealista.",
      "piel": "Textura hiperrealista con poros visibles, micropecas y vello facial fino.",
      "cobra": "Cobra blanca enrollada firmemente alrededor del cuello y clavícula."
    },
    "E_Entorno": {
      "fondo": "Fondo neutro carbón oscuro seamless."
    },
    "A_Accion_Postura": {
      "pose": "Extreme close-up macro con capucha parcialmente expandida cerca de la boca."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación macro de estudio lateral dramática."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Intimidad, tensión y desafío primal."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía macro hiperrealista de bellas artes."
    },
    "M_Composicion_Camara": {
      "plano": "Extreme close-up 100mm macro f/2.8."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos ivory, perla, crema y carbón oscuro."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Macro de Bellas Artes con Cobra Blanca

Framework completo en español para macrofotografía de bellas artes e hiperrealismo reptiliano.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Extreme macro fine-art portrait of a calm fearless woman with natural skin texture and freckles, a white albino cobra coiled around her neck with hood expanded near her nose and lips, visible tiny tongue, glossy black eyes, dark charcoal backdrop, soft side macro lighting, 100mm macro f/2.8 --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Macro de Bellas Artes con Cobra Blanca",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer con identidad facial definida y apariencia completamente fotorealista.",
      "piel": "Textura hiperrealista con poros visibles, micropecas y vello facial fino.",
      "cobra": "Cobra blanca enrollada firmemente alrededor del cuello y clavícula."
    },
    "E_Entorno": {
      "fondo": "Fondo neutro carbón oscuro seamless."
    },
    "A_Accion_Postura": {
      "pose": "Extreme close-up macro con capucha parcialmente expandida cerca de la boca."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación macro de estudio lateral dramática."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Intimidad, tensión y desafío primal."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía macro hiperrealista de bellas artes."
    },
    "M_Composicion_Camara": {
      "plano": "Extreme close-up 100mm macro f/2.8."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos ivory, perla, crema y carbón oscuro."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Fine Art", "Macro", "Naturaleza"] as any
    },
    {
        id: "prompt-reaisemp-rattlesnake-gothic",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Gótico de Mujer y Serpiente de Cascabel",
        slug: "metodologia-reaisemp-retrato-gotico-mujer-serpiente-cascabel",
        summary: "Prompt gótico de oscuro romanticismo estructurado en español bajo R.E.A.L.I.S.M.O. Mujer de piel pálida y ojos verdes con serpiente de cascabel de escamas carbón y bronce enrollada en la mejilla.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-rattlesnake-gothic.png",
        prompt_text: `{
  "title": "Retrato Gótico de Mujer y Serpiente de Cascabel",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer adulta de apariencia etérea, piel pálida y ojos verdes intensos.",
      "serpiente": "Serpiente de cascabel enrollada alrededor de mejilla y sien en tonos carbón y bronce."
    },
    "E_Entorno": {
      "fondo": "Espacio casi negro con niebla atmosférica sutil."
    },
    "A_Accion_Postura": {
      "pose": "Retrato íntimo con la cabeza de la serpiente cubriendo parcialmente el rostro."
    },
    "I_Iluminacion": {
      "tipo": "Claroscuro dramático con única fuente direccional que ilumina medio rostro."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misterio, vulnerabilidad, tentación y estética gótica."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía fine art gótica contemporánea de alto contraste."
    },
    "M_Composicion_Camara": {
      "plano": "Primerísimo primer plano centrado en rostro y serpiente."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta desaturada de tonos pálidos, carbón y bronce frío."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Gótico de Mujer y Serpiente de Cascabel

Framework gótico cinematográfico de claroscuro y romanticismo oscuro.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Dark romantic fine-art close-up portrait of a pale woman with green eyes and freckles, a rattlesnake coiled around her cheek with its triangular head near her eye, charcoal and bronze scales, atmospheric haze on black background, dramatic single key light chiaroscuro --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Gótico de Mujer y Serpiente de Cascabel",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer adulta de apariencia etérea, piel pálida y ojos verdes intensos.",
      "serpiente": "Serpiente de cascabel enrollada alrededor de mejilla y sien en tonos carbón y bronce."
    },
    "E_Entorno": {
      "fondo": "Espacio casi negro con niebla atmosférica sutil."
    },
    "A_Accion_Postura": {
      "pose": "Retrato íntimo con la cabeza de la serpiente cubriendo parcialmente el rostro."
    },
    "I_Iluminacion": {
      "tipo": "Claroscuro dramático con única fuente direccional que ilumina medio rostro."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Misterio, vulnerabilidad, tentación y estética gótica."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía fine art gótica contemporánea de alto contraste."
    },
    "M_Composicion_Camara": {
      "plano": "Primerísimo primer plano centrado en rostro y serpiente."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta desaturada de tonos pálidos, carbón y bronce frío."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Gótico", "Fine Art", "Naturaleza"] as any
    },
    {
        id: "prompt-reaisemp-streetwear-low-angle",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Streetwear Urbano con Perspectiva Low-Angle",
        slug: "metodologia-reaisemp-streetwear-urbano-perspectiva-low-angle",
        summary: "Prompt editorial de moda urbana estructurado en español bajo R.E.A.L.I.S.M.O. Perspectiva extrema de ángulo bajo con el sneaker del primer plano exagerado sobre cruce peatonal de rascacielos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-streetwear-low-angle.jpg",
        prompt_text: `{
  "title": "Streetwear Urbano con Perspectiva Low-Angle",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "vestuario": "Pantalones cargo verde oliva, sneakers blancos y camiseta cropped."
    },
    "E_Entorno": {
      "escenario": "Intersección urbana moderna con rascacielos y cielo azul despejado."
    },
    "A_Accion_Postura": {
      "pose": "Caminando con decisión, pie avanzando hacia la cámara en primer plano."
    },
    "I_Iluminacion": {
      "tipo": "Luz solar directa limpia de día."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Poderosa, urbana y energética."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de moda urbana contemporánea."
    },
    "M_Composicion_Camara": {
      "plano": "Plano completo extreme low-angle con gran angular."
    },
    "P_Postproduccion": {
      "color_grading": "Color vibrante y natural 8K."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Streetwear Urbano con Perspectiva Low-Angle

Framework completo en español para campañas streetwear con distorsión gran angular dinámica.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Full-body extreme low-angle ground-level fashion editorial of a confident woman in olive cargo pants and white sneakers walking across a city intersection, front sneaker stepping towards camera exaggerated in wide-angle perspective, tall glass skyscrapers and clear blue sky, bright natural daylight --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Streetwear Urbano con Perspectiva Low-Angle",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "vestuario": "Pantalones cargo verde oliva, sneakers blancos y camiseta cropped."
    },
    "E_Entorno": {
      "escenario": "Intersección urbana moderna con rascacielos y cielo azul despejado."
    },
    "A_Accion_Postura": {
      "pose": "Caminando con decisión, pie avanzando hacia la cámara en primer plano."
    },
    "I_Iluminacion": {
      "tipo": "Luz solar directa limpia de día."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Poderosa, urbana y energética."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de moda urbana contemporánea."
    },
    "M_Composicion_Camara": {
      "plano": "Plano completo extreme low-angle con gran angular."
    },
    "P_Postproduccion": {
      "color_grading": "Color vibrante y natural 8K."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Streetwear", "Urbano", "Low-Angle"] as any
    },
    {
        id: "prompt-reaisemp-y2k-porsche-orbit",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Y2K Fashion con Porsche y Perspectiva Drone Orbit",
        slug: "metodologia-reaisemp-y2k-fashion-porsche-drone-orbit",
        summary: "Prompt de moda retro-futurista Y2K estructurado en español bajo R.E.A.L.I.S.M.O. Modelo recostada sobre el capó de un Porsche rojo vintage con perspectiva gran angular elevada estilo drone orbit.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-y2k-porsche-orbit.jpg",
        prompt_text: `{
  "title": "Y2K Fashion con Porsche y Perspectiva Drone Orbit",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "vestuario": "Crop top negro, pantalones de cuero ultrabajo, gafas plateadas shield y mini buns."
    },
    "E_Entorno": {
      "escenario": "Porsche rojo vintage con reflejos cálidos y fondo urbano."
    },
    "A_Accion_Postura": {
      "pose": "Recostada en el capó extendiendo una mano al objetivo con actitud provocadora."
    },
    "I_Iluminacion": {
      "tipo": "Luz cálida de atardecer con reflejos sobre la pintura automotriz."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Audaz, Y2K y viral."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía Y2K hiperrealista con aberración cromática ligera y ligero light leak."
    },
    "M_Composicion_Camara": {
      "plano": "Perspectiva elevada gran angular con distorsión fisheye y motion blur circular."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos de atardecer y tratamiento digital Y2K."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Y2K Fashion con Porsche y Perspectiva Drone Orbit

Framework editorial de estética principios de los 2000 con efecto de cámara en movimiento fisheye.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Y2K fashion wide fisheye drone orbit shot of a stylish woman with mini hair buns and shield sunglasses lying on the hood of a glossy red vintage Porsche, reaching towards camera, leather pants, chain belt, sunset warm directional side light, circular motion blur in urban background --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Y2K Fashion con Porsche y Perspectiva Drone Orbit",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "vestuario": "Crop top negro, pantalones de cuero ultrabajo, gafas plateadas shield y mini buns."
    },
    "E_Entorno": {
      "escenario": "Porsche rojo vintage con reflejos cálidos y fondo urbano."
    },
    "A_Accion_Postura": {
      "pose": "Recostada en el capó extendiendo una mano al objetivo con actitud provocadora."
    },
    "I_Iluminacion": {
      "tipo": "Luz cálida de atardecer con reflejos sobre la pintura automotriz."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Audaz, Y2K y viral."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía Y2K hiperrealista con aberración cromática ligera y ligero light leak."
    },
    "M_Composicion_Camara": {
      "plano": "Perspectiva elevada gran angular con distorsión fisheye y motion blur circular."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos cálidos de atardecer y tratamiento digital Y2K."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Y2K", "Porsche", "Retro"] as any
    },
    {
        id: "prompt-reaisemp-colossal-worms-eye",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Retrato Colosal desde Perspectiva Worm's-Eye",
        slug: "metodologia-reaisemp-retrato-colosal-perspectiva-worms-eye",
        summary: "Prompt de surrealismo urbano de escala estructurado en español bajo R.E.A.L.I.S.M.O. Figura femenina gigantesca sentada en la cornisa de un edificio sobre rascacielos con encuadre de ojo de gusano.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-colossal-worms-eye.jpg",
        prompt_text: `{
  "title": "Retrato Colosal desde Perspectiva Worm's-Eye",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "vestuario": "Chaqueta deportiva roja, leggings negros y sneakers plataforma blancos con suela roja."
    },
    "E_Entorno": {
      "escenario": "Cornisa de edificio frente a rascacielos curvos y cielo despejado."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en el borde percibiéndose gigantesca frente a la ciudad."
    },
    "I_Iluminacion": {
      "tipo": "Luz urbana diurna de alto contraste."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Monumental, surrealista y poderosa."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía urbana hiperrealista con distorsión perspectival."
    },
    "M_Composicion_Camara": {
      "plano": "Worm's-eye view gran angular con distorsión de barril."
    },
    "P_Postproduccion": {
      "color_grading": "Tratamiento urbano nítido en 8K."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Retrato Colosal desde Perspectiva Worm's-Eye

Framework surrealista de escala monumental urbana.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Colossal scale surrealism extreme low-angle worm's-eye view of a giant woman in a red track jacket and platform sneakers sitting on the edge of a brick building overlooking towering curved skyscrapers, clear blue sky, fisheye barrel distortion, sharp architectural focus --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Colosal desde Perspectiva Worm's-Eye",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "vestuario": "Chaqueta deportiva roja, leggings negros y sneakers plataforma blancos con suela roja."
    },
    "E_Entorno": {
      "escenario": "Cornisa de edificio frente a rascacielos curvos y cielo despejado."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en el borde percibiéndose gigantesca frente a la ciudad."
    },
    "I_Iluminacion": {
      "tipo": "Luz urbana diurna de alto contraste."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Monumental, surrealista y poderosa."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía urbana hiperrealista con distorsión perspectival."
    },
    "M_Composicion_Camara": {
      "plano": "Worm's-eye view gran angular con distorsión de barril."
    },
    "P_Postproduccion": {
      "color_grading": "Tratamiento urbano nítido en 8K."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Surrealismo", "Urbano", "Worms-Eye"] as any
    },
    {
        id: "prompt-reaisemp-jewelry-golden-sand-emerald",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería de Lujo — Escultura de Arena Dorada",
        slug: "metodologia-reaisemp-editorial-joyeria-lujo-escultura-arena-dorada",
        summary: "Prompt de alta joyería estructurado en español bajo R.E.A.L.I.S.M.O. Busto femenino escultórico emergiendo de arena dorada con collar de diamantes y esmeralda esmeralda verde profunda.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-jewelry-golden-sand-emerald.png",
        prompt_text: `{
  "title": "Editorial de Joyería de Lujo — Escultura de Arena Dorada",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Busto femenino emergiendo de superficie de arena dorada.",
      "material": "Piel con textura mate granulada de arena fina.",
      "joyeria": "Collar de diamantes con gema verde de corte esmeralda y aretes a juego."
    },
    "E_Entorno": {
      "escenario": "Superficie de arena dorada monocromática en tonos arena y marrón cálido."
    },
    "A_Accion_Postura": {
      "pose": "Busto en perfil lateral elegante con ojos cerrados."
    },
    "I_Iluminacion": {
      "tipo": "Luz cinematográfica escultórica con refracción realista en la esmeralda."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Calma, elegancia, lujo silencioso y belleza atemporal."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de joyería de lujo y fotografía museum-grade fine art."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de busto anamórfico 85mm f/2.8."
    },
    "P_Postproduccion": {
      "color_grading": "Gradación monocromática cálida con acento verde en la esmeralda."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería de Lujo — Escultura de Arena Dorada

Framework completo en español para fotografía escultórica de alta joyería y gemas preciosas.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Luxury jewelry editorial anamorphic 85mm shot of a fine golden sand sculpture female bust emerging from sand, low bun hairstyle, closed eyes, wearing a high-end diamond necklace with a large emerald-cut deep green emerald pendant and matching emerald earrings, golden warm monochrome palette, soft directional lighting, museum fine art photography --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Editorial de Joyería de Lujo — Escultura de Arena Dorada",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Busto femenino emergiendo de superficie de arena dorada.",
      "material": "Piel con textura mate granulada de arena fina.",
      "joyeria": "Collar de diamantes con gema verde de corte esmeralda y aretes a juego."
    },
    "E_Entorno": {
      "escenario": "Superficie de arena dorada monocromática en tonos arena y marrón cálido."
    },
    "A_Accion_Postura": {
      "pose": "Busto en perfil lateral elegante con ojos cerrados."
    },
    "I_Iluminacion": {
      "tipo": "Luz cinematográfica escultórica con refracción realista en la esmeralda."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Calma, elegancia, lujo silencioso y belleza atemporal."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de joyería de lujo y fotografía museum-grade fine art."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de busto anamórfico 85mm f/2.8."
    },
    "P_Postproduccion": {
      "color_grading": "Gradación monocromática cálida con acento verde en la esmeralda."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Joyería", "Escultura", "Lujo"] as any
    },
    {
        id: "prompt-reaisemp-jewelry-sand-relief-emerald",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería — Relieve de Arena Dorada y Esmeraldas",
        slug: "metodologia-reaisemp-editorial-joyeria-relieve-arena-dorada-esmeraldas",
        summary: "Prompt de relieve escultórico bajo R.E.A.L.I.S.M.O. Silueta de perfil tallada en arena dorada con collar de diamantes, gotas de esmeraldas y ramita decorativa en el cabello.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-jewelry-sand-relief-emerald.png",
        prompt_text: `{
  "title": "Editorial de Joyería — Relieve de Arena Dorada y Esmeraldas",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Relieve femenino en perfil tallado en arena dorada.",
      "joyeria": "Collar de diamantes con múltiples esmeraldas en gota y aretes a juego colocados al lado."
    },
    "E_Entorno": {
      "fondo": "Fondo de arena dorada monocromática texturizada."
    },
    "A_Accion_Postura": {
      "pose": "Perfil lateral suave con ramita artística sobre el cabello."
    },
    "I_Iluminacion": {
      "tipo": "Luz direccional suave que resalta contornos del relieve y facetas de gemas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Serenidad, lujo fine art y contemplación."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de alta joyería con estética de relieve escultórico."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de perfil 85mm anamórfico."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromático dorado cálido con esmeraldas vibrantes."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería — Relieve de Arena Dorada y Esmeraldas

Framework completo en español para relieves de arena y alta joyería de esmeraldas.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Luxury fine art jewelry editorial top-down perspective of a female profile relief carved into warm golden sand, closed eyes, diamond necklace with multiple teardrop emerald pendants and matching emerald earrings beside relief, small twig resting on head, golden monochrome palette, anamorphic 85mm --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Editorial de Joyería — Relieve de Arena Dorada y Esmeraldas",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Relieve femenino en perfil tallado en arena dorada.",
      "joyeria": "Collar de diamantes con múltiples esmeraldas en gota y aretes a juego colocados al lado."
    },
    "E_Entorno": {
      "fondo": "Fondo de arena dorada monocromática texturizada."
    },
    "A_Accion_Postura": {
      "pose": "Perfil lateral suave con ramita artística sobre el cabello."
    },
    "I_Iluminacion": {
      "tipo": "Luz direccional suave que resalta contornos del relieve y facetas de gemas."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Serenidad, lujo fine art y contemplación."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de alta joyería con estética de relieve escultórico."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de perfil 85mm anamórfico."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromático dorado cálido con esmeraldas vibrantes."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Joyería", "Esmeraldas", "Escultura"] as any
    },
    {
        id: "prompt-reaisemp-jewelry-terracotta-ruby",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería — Relieve Terracota y Rubíes",
        slug: "metodologia-reaisemp-editorial-joyeria-relieve-terracota-rubies",
        summary: "Prompt escultórico terracota bajo R.E.A.L.I.S.M.O. Relieve femenino en arena rojo tierra con collar de diamantes y rubíes ovales de rojo profundo.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-jewelry-terracotta-ruby.jpg",
        prompt_text: `{
  "title": "Editorial de Joyería — Relieve Terracota y Rubíes",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Perfil femenino en relieve tallado sobre arena terracota.",
      "joyeria": "Collar de diamantes con rubíes ovalados y aretes colgantes a juego."
    },
    "E_Entorno": {
      "fondo": "Superficie de arena terracota monocromática en rojo tierra."
    },
    "A_Accion_Postura": {
      "pose": "Perfil lateral escultórico con ojos cerrados."
    },
    "I_Iluminacion": {
      "tipo": "Luz direccional suave que proyecta sombras dentro del relieve."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Lujo, sensualidad contenida y tierra."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de joyería de alta gama y escultura terracota."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de perfil 85mm anamórfico f/2.8."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromático terracota rojo tierra con profundidad en rubíes."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería — Relieve Terracota y Rubíes

Framework completo en español para escultura terracota y gemas de rubí de lujo.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Fine art luxury jewelry editorial profile relief carved into terracotta red sand, diamond necklace with multiple oval ruby pendants, matching ruby dangling earrings, warm red earth monochrome backdrop, soft top-left key light, ARRI Alexa anamorphic 85mm f/2.8 --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Editorial de Joyería — Relieve Terracota y Rubíes",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Perfil femenino en relieve tallado sobre arena terracota.",
      "joyeria": "Collar de diamantes con rubíes ovalados y aretes colgantes a juego."
    },
    "E_Entorno": {
      "fondo": "Superficie de arena terracota monocromática en rojo tierra."
    },
    "A_Accion_Postura": {
      "pose": "Perfil lateral escultórico con ojos cerrados."
    },
    "I_Iluminacion": {
      "tipo": "Luz direccional suave que proyecta sombras dentro del relieve."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Lujo, sensualidad contenida y tierra."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de joyería de alta gama y escultura terracota."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de perfil 85mm anamórfico f/2.8."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromático terracota rojo tierra con profundidad en rubíes."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Joyería", "Rubíes", "Terracota"] as any
    },
    {
        id: "prompt-reaisemp-jewelry-ivory-sapphire",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería — Escultura Ivory y Zafiro Azul",
        slug: "metodologia-reaisemp-editorial-joyeria-escultura-ivory-zafiro-azul",
        summary: "Prompt de joyería costera estilo escultura clásica bajo R.E.A.L.I.S.M.O. Relieve femenino ivory-beige con concha marina en el moño, collar de diamantes y zafiro azul marino profundo.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-jewelry-ivory-sapphire.png",
        prompt_text: `{
  "title": "Editorial de Joyería — Escultura Ivory y Zafiro Azul",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Perfil femenino sereno esculpido sobre arena ivory-beige.",
      "detalle_organico": "Concha marina pequeña colocada en el moño.",
      "joyeria": "Collar de diamantes con gran zafiro azul navy en forma de lágrima y aretes a juego."
    },
    "E_Entorno": {
      "fondo": "Superficie arenosa monocromática ivory-beige."
    },
    "A_Accion_Postura": {
      "pose": "Perfil lateral atemporal con ojos cerrados."
    },
    "I_Iluminacion": {
      "tipo": "Luz difusa que resalta profundidad azul y facetas del zafiro."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Lujo silencioso, serenidad y belleza costera."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de lujo inspirado en escultura clásica."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de perfil 85mm anamórfico."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromático ivory-beige con acento azul zafiro."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Editorial de Joyería — Escultura Ivory y Zafiro Azul

Framework completo en español para escultura clásica en arena ivory y zafiro azul navy.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Classical sculpture fine art jewelry editorial profile relief carved into ivory-beige sand, small seashell tucked into low hair bun, diamond necklace with a large teardrop deep navy sapphire pendant, matching sapphire earrings beside relief, soft diffused lighting, ARRI Alexa anamorphic 85mm --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Editorial de Joyería — Escultura Ivory y Zafiro Azul",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Perfil femenino sereno esculpido sobre arena ivory-beige.",
      "detalle_organico": "Concha marina pequeña colocada en el moño.",
      "joyeria": "Collar de diamantes con gran zafiro azul navy en forma de lágrima y aretes a juego."
    },
    "E_Entorno": {
      "fondo": "Superficie arenosa monocromática ivory-beige."
    },
    "A_Accion_Postura": {
      "pose": "Perfil lateral atemporal con ojos cerrados."
    },
    "I_Iluminacion": {
      "tipo": "Luz difusa que resalta profundidad azul y facetas del zafiro."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Lujo silencioso, serenidad y belleza costera."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de lujo inspirado en escultura clásica."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato de perfil 85mm anamórfico."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromático ivory-beige con acento azul zafiro."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Joyería", "Zafiro", "Lujo"] as any
    },
    {
        id: "prompt-reaisemp-newspaper-room-pink-jacket-man",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Editorial Avant-Garde — Hombre en Habitación de Periódicos",
        slug: "metodologia-reaisemp-editorial-avant-garde-hombre-habitacion-periodicos",
        summary: "Prompt conceptual avant-garde estructurado en español bajo R.E.A.L.I.S.M.O. Hombre con chaqueta baby pink, gafas futuristas y botas de combate sentado con piernas cruzadas en una habitación 360° forrada de periódicos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-newspaper-room-pink-jacket-man.png",
        prompt_text: `{
  "title": "Editorial Avant-Garde — Hombre en Habitación de Periódicos",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Hombre joven con apariencia masculina natural y fotorealista.",
      "vestuario": "Chaqueta baby pink con cierre, pantalones grises, botas negras de combate y gafas futuristas."
    },
    "E_Entorno": {
      "escenario": "Habitación pequeña y rectangular completamente revestida de periódicos en blanco y negro (paredes, suelo y techo)."
    },
    "A_Accion_Postura": {
      "pose": "Sentado con piernas cruzadas ajustando las gafas de sol con actitud intensa."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación dramática de estudio controlada con alto contraste."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Confianza, intensidad, urbano y avant-garde."
    },
    "E_visual_EstiloVisual": {
      "estilo": "High-fashion editorial contemporáneo y arte conceptual."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio-amplio frontal simétrico."
    },
    "P_Postproduccion": {
      "color_grading": "Entorno monocromático con la chaqueta baby pink como ruptura cromática principal."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Editorial Avant-Garde — Hombre en Habitación de Periódicos

Framework completo en español para fotografía de moda avant-garde en instalaciones de arte conceptual.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Avant-garde fashion editorial medium shot of a young man with light beard and futuristic black sunglasses sitting cross-legged inside a rectangular room completely covered in black and white newspaper pages, wearing an open baby pink zip jacket, gray pants, black combat boots, silver chain necklace, symmetrical eye-level camera view, controlled studio lighting --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Editorial Avant-Garde — Hombre en Habitación de Periódicos",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Hombre joven con apariencia masculina natural y fotorealista.",
      "vestuario": "Chaqueta baby pink con cierre, pantalones grises, botas negras de combate y gafas futuristas."
    },
    "E_Entorno": {
      "escenario": "Habitación pequeña y rectangular completamente revestida de periódicos en blanco y negro (paredes, suelo y techo)."
    },
    "A_Accion_Postura": {
      "pose": "Sentado con piernas cruzadas ajustando las gafas de sol con actitud intensa."
    },
    "I_Iluminacion": {
      "tipo": "Iluminación dramática de estudio controlada con alto contraste."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Confianza, intensidad, urbano y avant-garde."
    },
    "E_visual_EstiloVisual": {
      "estilo": "High-fashion editorial contemporáneo y arte conceptual."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio-amplio frontal simétrico."
    },
    "P_Postproduccion": {
      "color_grading": "Entorno monocromático con la chaqueta baby pink como ruptura cromática principal."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Avant-Garde", "Editorial", "Conceptual"] as any
    },
    {
        id: "prompt-reaisemp-newspaper-room-shocked-woman",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Editorial Conceptual — Shock en Habitación de Periódicos",
        slug: "metodologia-reaisemp-editorial-conceptual-shock-habitacion-periodicos",
        summary: "Prompt de moda surrealista estructurado en español bajo R.E.A.L.I.S.M.O. Mujer con blazer de ajedrez blanco y negro, pantalones verde oscuro y gafas geométricas en pose de sorpresa sosteniendo su rostro dentro de habitación de periódicos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-newspaper-room-shocked-woman.png",
        prompt_text: `{
  "title": "Editorial Conceptual — Shock en Habitación de Periódicos",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven con expresión dramática de sorpresa y boca abierta.",
      "vestuario": "Chaqueta de patrón cuadriculado ajedrez, pantalones verde oscuro, sneakers grises y gafas geométricas."
    },
    "E_Entorno": {
      "escenario": "Habitación rectangular revestida en 360° con periódicos en blanco y negro."
    },
    "A_Accion_Postura": {
      "pose": "Sentada cruzada sujetando suavemente las mejillas con ambas manos mirando a cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz suave direccional uniforme para destacar rostro y patrón de ajedrez."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Teatralidad, sorpresa, surrealismo juguetón."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial de moda conceptual contemporánea."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio-amplio frontal centrado."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromo con verde oscuro, gris y negro bien definidos."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Editorial Conceptual — Shock en Habitación de Periódicos

Framework completo en español para fotografía editorial teatral y surrealismo conceptual.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Conceptual fashion editorial of a woman with open mouth shocked expression holding her face with both hands, wearing a black and white checkered blazer, dark green pants, gray sneakers and geometric sunglasses, sitting cross-legged in a room entirely wallpapered with newspaper, symmetrical eye-level perspective --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Editorial Conceptual — Shock en Habitación de Periódicos",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven con expresión dramática de sorpresa y boca abierta.",
      "vestuario": "Chaqueta de patrón cuadriculado ajedrez, pantalones verde oscuro, sneakers grises y gafas geométricas."
    },
    "E_Entorno": {
      "escenario": "Habitación rectangular revestida en 360° con periódicos en blanco y negro."
    },
    "A_Accion_Postura": {
      "pose": "Sentada cruzada sujetando suavemente las mejillas con ambas manos mirando a cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz suave direccional uniforme para destacar rostro y patrón de ajedrez."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Teatralidad, sorpresa, surrealismo juguetón."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial de moda conceptual contemporánea."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio-amplio frontal centrado."
    },
    "P_Postproduccion": {
      "color_grading": "Monocromo con verde oscuro, gris y negro bien definidos."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Conceptual", "Surrealismo", "Editorial"] as any
    },
    {
        id: "prompt-reaisemp-newspaper-room-dark-green-lounge",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Editorial Conceptual — Dark Green Fashion en Habitación de Periódicos",
        slug: "metodologia-reaisemp-editorial-conceptual-dark-green-fashion-habitacion-periodicos",
        summary: "Prompt de alta moda minimalista en español bajo R.E.A.L.I.S.M.O. Modelo relajada en una silla giratoria lounge beige con blusa verde oscuro y falda corta blanca dentro de una habitación de periódico 4:5.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-newspaper-room-dark-green-lounge.jpg",
        prompt_text: `{
  "title": "Editorial Conceptual — Dark Green Fashion en Habitación de Periódicos",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven de apariencia sofisticada y relajada.",
      "vestuario": "Blusa verde oscuro, falda corta blanca, calcetines blancos, sneakers high-top beige y gafas oversized."
    },
    "E_Entorno": {
      "escenario": "Habitación minimalista tipo caja revestida de periódicos con silla lounge giratoria beige."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en la silla giratoria con pierna cruzada y brazo detrás de la cabeza."
    },
    "I_Iluminacion": {
      "tipo": "Luz de estudio suave y difusa uniforme."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Confianza, relajación y alta moda sofisticada."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial de moda contemporánea minimalista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio-amplio vertical 4:5 frontal."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta base monocromática/beige con verde oscuro como acento principal."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Editorial Conceptual — Dark Green Fashion en Habitación de Periódicos

Framework completo en español para campañas de moda conceptual contemporánea.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Fashion editorial vertical 4:5 portrait of a confident woman with oversized sunglasses sitting relaxed in a beige swivel lounge chair, dark green silk blouse, white mini skirt, high-top beige sneakers, surrounded by 360-degree newspaper-lined room walls and floor, soft studio lighting --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Editorial Conceptual — Dark Green Fashion en Habitación de Periódicos",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer joven de apariencia sofisticada y relajada.",
      "vestuario": "Blusa verde oscuro, falda corta blanca, calcetines blancos, sneakers high-top beige y gafas oversized."
    },
    "E_Entorno": {
      "escenario": "Habitación minimalista tipo caja revestida de periódicos con silla lounge giratoria beige."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en la silla giratoria con pierna cruzada y brazo detrás de la cabeza."
    },
    "I_Iluminacion": {
      "tipo": "Luz de estudio suave y difusa uniforme."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Confianza, relajación y alta moda sofisticada."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía editorial de moda contemporánea minimalista."
    },
    "M_Composicion_Camara": {
      "plano": "Plano medio-amplio vertical 4:5 frontal."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta base monocromática/beige con verde oscuro como acento principal."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Editorial", "Moda", "Conceptual"] as any
    },
    {
        id: "prompt-reaisemp-holographic-social-profile",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Holographic Social Profile — Instagram Interface",
        slug: "metodologia-reaisemp-holographic-social-profile-instagram-interface",
        summary: "Prompt de arte digital e interfaz futurista bajo R.E.A.L.I.S.M.O. Mano humana sosteniendo una tarjeta holográfica semitransparente con perfil de Instagram flotante en luz azul y magenta.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-holographic-social-profile.png",
        prompt_text: `{
  "title": "Holographic Social Profile — Instagram Interface",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mano humana sosteniendo tarjeta holográfica semitransparente.",
      "ui": "Estructura y perfil de Instagram flotante hiperrealista."
    },
    "E_Entorno": {
      "escenario": "Estudio minimalista de alta tecnología con luces azul y magenta."
    },
    "A_Accion_Postura": {
      "pose": "Tarjeta inclinada revelando profundidad y refracción sobre la piel."
    },
    "I_Iluminacion": {
      "tipo": "Luz holográfica propia emitiendo glow sobre la mano."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Innovación, tecnología de lujo y futuro digital."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Digital art hiperrealista glassmorphism."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up macro 85mm f/1.8."
    },
    "P_Postproduccion": {
      "color_grading": "Azul y magenta cinematográfico."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Holographic Social Profile — Instagram Interface

Framework completo en español para interfaces UI holográficas y tecnología de lujo.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Luxury tech digital art macro shot of a human hand holding a glowing glassmorphism transparent holographic social media profile interface card, volumetric blue and magenta neon studio glow, realistic skin texture, 85mm macro lens f/1.8 --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Holographic Social Profile — Instagram Interface",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mano humana sosteniendo tarjeta holográfica semitransparente.",
      "ui": "Estructura y perfil de Instagram flotante hiperrealista."
    },
    "E_Entorno": {
      "escenario": "Estudio minimalista de alta tecnología con luces azul y magenta."
    },
    "A_Accion_Postura": {
      "pose": "Tarjeta inclinada revelando profundidad y refracción sobre la piel."
    },
    "I_Iluminacion": {
      "tipo": "Luz holográfica propia emitiendo glow sobre la mano."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Innovación, tecnología de lujo y futuro digital."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Digital art hiperrealista glassmorphism."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up macro 85mm f/1.8."
    },
    "P_Postproduccion": {
      "color_grading": "Azul y magenta cinematográfico."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Futurista", "Holograma", "UI"] as any
    },
    {
        id: "prompt-reaisemp-hand-drawn-doodle-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Hand-Drawn Doodle Portrait — Red & Yellow Pen",
        slug: "metodologia-reaisemp-hand-drawn-doodle-portrait-red-yellow-pen",
        summary: "Prompt de ilustración analógica en cuaderno bajo R.E.A.L.I.S.M.O. Retrato masculino ilustrado con trazos de tinta roja y amarilla rodeado de doodles y anotaciones manuscritas.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-hand-drawn-doodle-portrait.jpg",
        prompt_text: `{
  "title": "Hand-Drawn Doodle Portrait — Red & Yellow Pen",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Retrato masculino ilustrado respetando la identidad del sujeto."
    },
    "E_Entorno": {
      "escenario": "Hoja de libreta blanca con textura de papel y doodles circundantes."
    },
    "A_Accion_Postura": {
      "pose": "Retrato frontal rodeado de flechas y textos manuscritos."
    },
    "I_Iluminacion": {
      "tipo": "Simulada por densidad de trazos y achurados de tinta."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Creatividad, espontaneidad y arte personal."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Hand-drawn doodle art con tinta roja y amarilla."
    },
    "M_Composicion_Camara": {
      "plano": "Vista directa superior de página de libreta."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta dominada por tinta roja y amarilla sobre papel blanco."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Hand-Drawn Doodle Portrait — Red & Yellow Pen

Framework completo en español para retratos ilustrados estilo cuaderno de bocetos.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Hand-drawn doodle art illustration of a man's portrait on spiral notebook paper page, red and yellow ballpoint pen ink strokes, handwritten annotations, arrows and sketch symbols framing face, authentic paper texture --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Hand-Drawn Doodle Portrait — Red & Yellow Pen",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Retrato masculino ilustrado respetando la identidad del sujeto."
    },
    "E_Entorno": {
      "escenario": "Hoja de libreta blanca con textura de papel y doodles circundantes."
    },
    "A_Accion_Postura": {
      "pose": "Retrato frontal rodeado de flechas y textos manuscritos."
    },
    "I_Iluminacion": {
      "tipo": "Simulada por densidad de trazos y achurados de tinta."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Creatividad, espontaneidad y arte personal."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Hand-drawn doodle art con tinta roja y amarilla."
    },
    "M_Composicion_Camara": {
      "plano": "Vista directa superior de página de libreta."
    },
    "P_Postproduccion": {
      "color_grading": "Paleta dominada por tinta roja y amarilla sobre papel blanco."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Ilustración", "Doodle", "Arte"] as any
    },
    {
        id: "prompt-reaisemp-moody-brown-knit-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: Moody Aesthetic Portrait — Brown Knit & Tropical Foliage",
        slug: "metodologia-reaisemp-moody-aesthetic-portrait-brown-knit-tropical-foliage",
        summary: "Prompt de fotografía íntima vintage en español bajo R.E.A.L.I.S.M.O. Retrato en esquina oscura con sweater de punto marrón, café para llevar y follaje tropical natural.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-moody-brown-knit-portrait.png",
        prompt_text: `{
  "title": "Moody Aesthetic Portrait — Brown Knit & Tropical Foliage",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer en sweater de punto marrón grueso con vaso de café y anillos."
    },
    "E_Entorno": {
      "escenario": "Esquina oscura de habitación con plantas de follaje tropical."
    },
    "A_Accion_Postura": {
      "pose": "Retrato espontáneo con vaso cerca del rostro y mirada a cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz lateral cálida de atardecer con penumbra al fondo."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Intimidad, melancolía y calma dark aesthetic."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía vintage cinematográfica sepia."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up asimétrico con profundidad de campo reducida."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos sepia oscuros, marrones y grano sutil."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: Moody Aesthetic Portrait — Brown Knit & Tropical Foliage

Framework vintage para retratos íntimos cinematográficos.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Moody vintage cinematic portrait of a young woman in dark brown cable-knit sweater holding a takeaway coffee cup near her face, dark indoor room corner flanked by large tropical leaves, warm directional window light, dark sepia tones, shallow depth of field --ar 16:9 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "Moody Aesthetic Portrait — Brown Knit & Tropical Foliage",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer en sweater de punto marrón grueso con vaso de café y anillos."
    },
    "E_Entorno": {
      "escenario": "Esquina oscura de habitación con plantas de follaje tropical."
    },
    "A_Accion_Postura": {
      "pose": "Retrato espontáneo con vaso cerca del rostro y mirada a cámara."
    },
    "I_Iluminacion": {
      "tipo": "Luz lateral cálida de atardecer con penumbra al fondo."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Intimidad, melancolía y calma dark aesthetic."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía vintage cinematográfica sepia."
    },
    "M_Composicion_Camara": {
      "plano": "Close-up asimétrico con profundidad de campo reducida."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos sepia oscuros, marrones y grano sutil."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Moody", "Vintage", "Retrato"] as any
    },
    {
        id: "prompt-reaisemp-white-couture-sunlit-courtyard",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: White Couture — Sunlit Stone Courtyard",
        slug: "metodologia-reaisemp-white-couture-sunlit-stone-courtyard",
        summary: "Prompt de alta costura nupcial estructurado en español bajo R.E.A.L.I.S.M.O. Modelo luciendo vestido couture blanco con pétalos 3D en patio soleado de piedra minimalista.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-white-couture-sunlit-courtyard.png",
        prompt_text: `{
  "title": "White Couture — Sunlit Stone Courtyard",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer en vestido de alta costura blanco con pétalos 3D sobredimensionados y pedrería."
    },
    "E_Entorno": {
      "escenario": "Patio de piedra neutra bañado por sol cálido."
    },
    "A_Accion_Postura": {
      "pose": "De pie con postura relajada y elegante."
    },
    "I_Iluminacion": {
      "tipo": "Luz solar directa cálida con sombras dimensionales."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Majestuosidad, elegancia atemporal y serenidad."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de alta moda y arquitectura."
    },
    "M_Composicion_Camara": {
      "plano": "Plano completo vertical 9:16 85mm."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos neutros cálidos, beige y reflejos dorados."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: White Couture — Sunlit Stone Courtyard

Framework de moda de lujo en arquitectura minimalista.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
High-fashion couture full-body editorial portrait of a woman in an ornate white gown with oversized 3D petal appliques and intricate beadwork, standing in a sunlit minimal stone courtyard with tall walls, warm golden sunlight, 85mm lens f/2.5 --ar 9:16 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "White Couture — Sunlit Stone Courtyard",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer en vestido de alta costura blanco con pétalos 3D sobredimensionados y pedrería."
    },
    "E_Entorno": {
      "escenario": "Patio de piedra neutra bañado por sol cálido."
    },
    "A_Accion_Postura": {
      "pose": "De pie con postura relajada y elegante."
    },
    "I_Iluminacion": {
      "tipo": "Luz solar directa cálida con sombras dimensionales."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Majestuosidad, elegancia atemporal y serenidad."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Editorial de alta moda y arquitectura."
    },
    "M_Composicion_Camara": {
      "plano": "Plano completo vertical 9:16 85mm."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos neutros cálidos, beige y reflejos dorados."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Couture", "Moda", "Alta Costura"] as any
    },
    {
        id: "prompt-reaisemp-1930s-hollywood-vintage-portrait",
        type: "prompt",
        title: "Metodología R.E.A.L.I.S.M.O.: 1930s Hollywood Portrait — Vintage Era Editorial",
        slug: "metodologia-reaisemp-1930s-hollywood-portrait-vintage-era-editorial",
        summary: "Prompt de glamour clásico de Hollywood bajo R.E.A.L.I.S.M.O. Elegante retrato con peinado Marcel wave, estola de piel, collar de perlas y vestido de satén en salón Art Deco.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REALISMO",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-1930s-hollywood-vintage-portrait.png",
        prompt_text: `{
  "title": "1930s Hollywood Portrait — Vintage Era Editorial",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer con peinado Marcel wave de los años 30, vestido de satén plateado, estola de piel y perlas."
    },
    "E_Entorno": {
      "escenario": "Salón de baile Art Deco de lujo con candelabros dorados."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en sofá vintage con mano en el mentón."
    },
    "I_Iluminacion": {
      "tipo": "Luz de estudio años 30 envolvente y dramática."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Glamour clásico de Hollywood, sofisticación y nostalgia."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía cinematográfica vintage años 30."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato vertical 9:16 50mm."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos de película fotográfica vintage con grano fino."
    }
  }
}`,
        body_markdown: `
# Metodología R.E.A.L.I.S.M.O.: 1930s Hollywood Portrait — Vintage Era Editorial

Framework completo en español para glamour clásico de cine de los años 30.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
1930s classic Hollywood glamour vintage portrait of an elegant woman with Marcel wave hairstyle wearing a silver metallic satin gown, fur stole and pearl necklace, seated in an opulent Art Deco ballroom, warm golden chandelier lighting, 50mm film photography look --ar 9:16 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.L.I.S.M.O. Completa (JSON en Español)

\`\`\`json
{
  "title": "1930s Hollywood Portrait — Vintage Era Editorial",
  "framework_REALISMO": {
    "R_Render_del_Avatar": {
      "sujeto": "Mujer con peinado Marcel wave de los años 30, vestido de satén plateado, estola de piel y perlas."
    },
    "E_Entorno": {
      "escenario": "Salón de baile Art Deco de lujo con candelabros dorados."
    },
    "A_Accion_Postura": {
      "pose": "Sentada en sofá vintage con mano en el mentón."
    },
    "I_Iluminacion": {
      "tipo": "Luz de estudio años 30 envolvente y dramática."
    },
    "S_Sensacion_Atmosfera": {
      "emocion": "Glamour clásico de Hollywood, sofisticación y nostalgia."
    },
    "E_visual_EstiloVisual": {
      "estilo": "Fotografía cinematográfica vintage años 30."
    },
    "M_Composicion_Camara": {
      "plano": "Retrato vertical 9:16 50mm."
    },
    "P_Postproduccion": {
      "color_grading": "Tonos de película fotográfica vintage con grano fino."
    }
  }
}
\`\`\`
`,
        tags: ["REALISMO", "Midjourney", "Hollywood", "Vintage", "Años 30"] as any
    }
];
