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
        title: "Cinematic Dark Elegance: Luxury Glass Perfume Bottle",
        slug: "luxury-perfume-dark-elegance",
        summary: "Fotografía de estudio de alta gama para perfumería y cosmética de lujo con iluminación dramática chiaroscuro, reflejos de agua en cristal obsidian y sombras suaves.",
        category: "Fotografía de Producto",
        system_type: "Midjourney v6",
        featured_image_url: "/images/cases/focal-earring.jpg",
        process_state: "Estudio",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `Commercial studio photography of a luxury crystal perfume bottle on a reflective black obsidian stone table, dramatic chiaroscuro lighting, soft purple and gold light leaks, water droplets on glass, cinematic depth of field, 8k resolution, shot on Hasselblad H6D-100c --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Cinematic Dark Elegance: Luxury Glass Perfume Bottle

Prompt de fotografía comercial de lujo para marcas de perfumería, cosmética o productos premium.

---

## 🎨 Prompt Maestro

\`\`\`text
Commercial studio photography of a luxury crystal perfume bottle on a reflective black obsidian stone table, dramatic chiaroscuro lighting, soft purple and gold light leaks, water droplets on glass, cinematic depth of field, 8k resolution, shot on Hasselblad H6D-100c --ar 4:5 --style raw --v 6.1
\`\`\`
`,
        tags: ["Midjourney", "Fotografía", "Producto", "Lujo"] as any
    },
    {
        id: "prompt-executive-cyberpunk-portrait",
        type: "prompt",
        title: "High-End Founder Editorial Portrait (85mm Lens)",
        slug: "high-end-founder-editorial-portrait",
        summary: "Retrato fotográfico de fundador/ejecutivo estilo revista Forbes, iluminación Rembrandt, profundidad de campo shallow f/1.4, tonos dorados y azabache.",
        category: "Retratos & Branding",
        system_type: "Flux 1.1",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/cases/power-suit-portrait.jpg",
        prompt_text: `Editorial magazine portrait of a confident tech founder in a sleek dark tailored suit, high-end studio lighting, soft Rembrandt side light, subtle purple backlighting, shot on 85mm f/1.4 lens, crisp details, natural skin texture, Forbes magazine cover style --ar 4:5 --v 6.1`,
        body_markdown: `
# High-End Founder Editorial Portrait (85mm Lens)

Retrato fotográfico editorial para branding personal ejecutivo, fundadores y perfiles profesionales de alto impacto.

---

## 🎨 Prompt Maestro

\`\`\`text
Editorial magazine portrait of a confident tech founder in a sleek dark tailored suit, high-end studio lighting, soft Rembrandt side light, subtle purple backlighting, shot on 85mm f/1.4 lens, crisp details, natural skin texture, Forbes magazine cover style --ar 4:5 --v 6.1
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
    }
];
