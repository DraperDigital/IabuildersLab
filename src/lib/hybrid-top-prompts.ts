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
    },
    {
        id: "prompt-red-editorial-glitter-portrait",
        type: "prompt",
        title: "Chiaroscuro Red Editorial: Iridescent Glitter Eyes Portrait",
        slug: "chiaroscuro-red-editorial-glitter-portrait",
        summary: "Retrato editorial de estudio de alto contraste chiaroscuro en monocromo sobre fondo rojo carmesí saturado con maquillaje de glitter iridiscente multicolor alrededor de los ojos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/red-editorial-glitter-portrait.png",
        prompt_text: `Cinematic high-contrast editorial head-and-shoulders 3/4 portrait of an intense woman, 60-70% chiaroscuro deep shadow on face, monochrome skin and black structured jacket, vivid saturated solid red background, strong red rim light outlining hair, full-color iridescent multicolor glitter makeup surrounding both eyes, sharp focus on illuminated eye, shot on Hasselblad H6D-100c 85mm lens --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Chiaroscuro Red Editorial: Iridescent Glitter Eyes Portrait

Prompt de estudio editorial de alta moda con iluminación chiaroscuro dramática, contraste selectivo entre piel monocromática, fondo rojo carmesí saturado y glitter iridiscente multicolor en los ojos.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Cinematic high-contrast editorial head-and-shoulders 3/4 portrait of an intense woman, 60-70% chiaroscuro deep shadow on face, monochrome skin and black structured jacket, vivid saturated solid red background, strong red rim light outlining hair, full-color iridescent multicolor glitter makeup surrounding both eyes, sharp focus on illuminated eye, shot on Hasselblad H6D-100c 85mm lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura JSON para Modelos de Generación Avanzada (DALL-E 3 / API / Structured Generation)

\`\`\`json
{
  "subject": {
    "description": "Woman from reference, exact facial identity, proportions and structure preserved.",
    "expression": "intense controlled gaze toward camera",
    "face": {
      "preserve_original": true,
      "makeup": "heavy multicolor iridescent glitter surrounding both eyes"
    }
  },
  "clothing": {
    "top": {
      "type": "minimal structured elegant attire",
      "color": "black",
      "details": "refined silhouette"
    }
  },
  "photography": {
    "camera_style": "cinematic high-contrast editorial portrait",
    "angle": "3/4 angle",
    "shot_type": "head-and-shoulders",
    "aspect_ratio": "4:5 vertical",
    "texture": "ultra high resolution, sharp focus on illuminated eye"
  },
  "background": {
    "setting": "seamless studio",
    "wall_color": "solid saturated red",
    "atmosphere": "moody, dramatic"
  },
  "lighting": {
    "type": "hard chiaroscuro key light",
    "direction": "45-degree side angle",
    "shadows": "60–70% of face in detailed shadow",
    "rim_light": "strong red backlight outlining hair and shoulders without illuminating face"
  },
  "color_treatment": "high-contrast monochrome skin and clothing while preserving red background, red rim light and full-color iridescent glitter"
}
\`\`\`
`,
        tags: ["Midjourney", "Editorial", "Retratos", "Chiaroscuro", "Moda"] as any
    },
    {
        id: "prompt-vertical-red-laser-portrait",
        type: "prompt",
        title: "Cybernetic Noir: Vertical Red Laser Line Editorial Portrait",
        slug: "cybernetic-noir-vertical-red-laser-portrait",
        summary: "Retrato editorial de alta precisión cibernética sobre fondo azul profundo con rayo láser rojo vertical cruzando un ojo, iluminación direccional y contraste de tono frío vs cálido.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/vertical-red-laser-portrait.jpg",
        prompt_text: `Cinematic professional studio tight head-and-shoulders portrait of a calm intense woman in a matte black high-neck turtleneck, thin vibrant saturated vertical red laser beam slicing across her eye with realistic skin reflections, deep blue seamless backdrop fading to black, cool rim lighting on hair and shoulders, directional front key light, razor-sharp facial details, shot on Sony A7R V 85mm f/1.4 lens --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Cybernetic Noir: Vertical Red Laser Line Editorial Portrait

Prompt editorial cinemático estilo Cyberpunk / Sci-Fi elegante con proyección de rayo láser rojo vertical de precisión cruzando el rostro y textura hiperdetallada de piel.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Cinematic professional studio tight head-and-shoulders portrait of a calm intense woman in a matte black high-neck turtleneck, thin vibrant saturated vertical red laser beam slicing across her eye with realistic skin reflections, deep blue seamless backdrop fading to black, cool rim lighting on hair and shoulders, directional front key light, razor-sharp facial details, shot on Sony A7R V 85mm f/1.4 lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura JSON para Modelos de Generación Avanzada (DALL-E 3 / API / Structured Generation)

\`\`\`json
{
  "subject": {
    "description": "Woman from reference, exact facial identity, proportions and structure preserved.",
    "expression": "calm, intense, controlled gaze toward camera",
    "face": { "preserve_original": true, "makeup": "minimal editorial" }
  },
  "clothing": {
    "top": {
      "type": "minimal structured high-neck garment",
      "color": "matte black",
      "details": "clean silhouette"
    }
  },
  "photography": {
    "camera_style": "cinematic professional studio portrait",
    "angle": "slightly low-angle head-and-shoulders",
    "shot_type": "tight portrait",
    "aspect_ratio": "4:5 vertical",
    "texture": "ultra high resolution, razor-sharp facial detail"
  },
  "background": {
    "setting": "dark moody studio",
    "wall_color": "deep blue fading toward black",
    "atmosphere": "dramatic cinematic"
  },
  "lighting": {
    "type": "directional cinematic lighting",
    "direction": "slightly above front",
    "shadows": "deep but detailed beneath jaw and across one side",
    "rim_light": "strong cool backlight outlining hair and shoulders"
  },
  "prop": {
    "type": "laser",
    "details": "thin saturated red vertical beam crossing one eye, subtle glow and realistic red reflection on nearby skin"
  }
}
\`\`\`
`,
        tags: ["Midjourney", "Editorial", "Sci-Fi", "Laser", "Retratos"] as any
    },
    {
        id: "prompt-pop-art-sticker-bomb-portrait",
        type: "prompt",
        title: "Pop-Art Avant-Garde: Vintage Sticker Bomb Beauty Portrait",
        slug: "pop-art-avant-garde-sticker-bomb-portrait",
        summary: "Retrato editorial de alta moda con intervención avant-garde estilo 'sticker-bomb' facial. Collage denso de pegatinas vintage, bandas de rock y logos pop siguiendo la curvatura de la piel sobre fondo neutro de estudio.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/pop-art-sticker-bomb-portrait.jpg",
        prompt_text: `High-end editorial beauty centered head-and-shoulders portrait of a woman in a matte black high-neck turtleneck, face covered in a dense layered collage of colorful vintage brand stickers, rock band logos, typography and mini pop-art graphics conforming smoothly to facial features with realistic adhesive texture and tiny paper shadows, natural editorial makeup visible around eyes, soft off-white seamless studio backdrop, gentle front studio lighting, subtle film grain, shot on Hasselblad H6D-100c 100mm lens --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Pop-Art Avant-Garde: Vintage Sticker Bomb Beauty Portrait

Prompt editorial vanguardista de moda urbana y Pop-Art con textura ultra-realista de calcomanías/pegatinas vintage adheridas al rostro respetando relieve facial y sombra de papel.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
High-end editorial beauty centered head-and-shoulders portrait of a woman in a matte black high-neck turtleneck, face covered in a dense layered collage of colorful vintage brand stickers, rock band logos, typography and mini pop-art graphics conforming smoothly to facial features with realistic adhesive texture and tiny paper shadows, natural editorial makeup visible around eyes, soft off-white seamless studio backdrop, gentle front studio lighting, subtle film grain, shot on Hasselblad H6D-100c 100mm lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura JSON para Modelos de Generación Avanzada (DALL-E 3 / API / Structured Generation)

\`\`\`json
{
  "subject": {
    "description": "Woman from reference, exact facial identity, structure and proportions preserved.",
    "expression": "strong fashion presence, slightly lifted chin, mouth slightly open",
    "face": { "preserve_original": true, "makeup": "natural editorial" }
  },
  "clothing": {
    "top": {
      "type": "structured high-neck garment",
      "color": "matte black",
      "details": "minimal clean silhouette"
    }
  },
  "accessories": {
    "prop": {
      "type": "colorful sticker collage",
      "details": "dense layered vintage logos, typography, symbols and mini illustrations covering most of face; stickers follow facial curvature with realistic adhesive texture, edge lift and tiny shadows; eyes remain visible and lips partially visible"
    }
  },
  "photography": {
    "camera_style": "high-end editorial beauty photography",
    "angle": "frontal eye-level",
    "shot_type": "centered head-and-shoulders",
    "aspect_ratio": "4:5 vertical",
    "texture": "sharp photorealism, subtle film grain, cinematic texture"
  },
  "background": {
    "setting": "minimal studio",
    "wall_color": "soft off-white or pale gray",
    "atmosphere": "artistic fashion magazine"
  },
  "lighting": {
    "type": "soft directional studio light",
    "direction": "front",
    "quality": "gentle contrast, natural highlights",
    "shadows": "subtle under jaw and cheekbones"
  }
}
\`\`\`
`,
        tags: ["Midjourney", "Editorial", "Pop-Art", "Stickers", "Moda"] as any
    },
    {
        id: "prompt-streetwear-bouquet-editorial-portrait",
        type: "prompt",
        title: "Edgy Streetwear: Saturated Blue & Floral Bouquet Portrait",
        slug: "edgy-streetwear-bouquet-editorial-portrait",
        summary: "Retrato editorial contemporáneo de ángulo bajo con estética urbana streetwear. Sujeto en camiseta negra sin mangas con gráfico rojo, cadenas de plata y gran ramo de gerberas rojas y flores azules sobre fondo azul saturado.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/streetwear-bouquet-editorial-portrait.jpg",
        prompt_text: `Contemporary high-contrast editorial low-angle medium portrait of a confident woman holding a vibrant large floral bouquet of red gerberas, white carnations and light blue flowers in front of her chest, wearing an oversized black sleeveless t-shirt with a distressed red rectangular graphic, heavy silver chain with circular pendant, chunky silver rings and studded strap, deep saturated solid blue backdrop, hard directional natural lighting with crisp contrast, shot on Hasselblad H6D-100c 85mm lens --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Edgy Streetwear: Saturated Blue & Floral Bouquet Portrait

Prompt editorial contemporáneo de alta moda urbana con encuadre de ángulo bajo, contraste marcado de accesorios de joyería plateada, gráficos rojos y un ramo botánico vibrante.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Contemporary high-contrast editorial low-angle medium portrait of a confident woman holding a vibrant large floral bouquet of red gerberas, white carnations and light blue flowers in front of her chest, wearing an oversized black sleeveless t-shirt with a distressed red rectangular graphic, heavy silver chain with circular pendant, chunky silver rings and studded strap, deep saturated solid blue backdrop, hard directional natural lighting with crisp contrast, shot on Hasselblad H6D-100c 85mm lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura JSON para Modelos de Generación Avanzada (DALL-E 3 / API / Structured Generation)

\`\`\`json
{
  "subject": {
    "description": "Woman from reference, exact facial identity and proportions preserved, holding a large vibrant bouquet firmly in front of her chest.",
    "expression": "confident neutral expression, chin slightly raised, looking slightly downward toward camera",
    "face": { "preserve_original": true, "makeup": "natural editorial" }
  },
  "clothing": {
    "top": { "type": "oversized sleeveless t-shirt", "color": "black", "details": "distressed rectangular red graphic across chest" },
    "accessories": "heavy silver chain, large circular pendant, chunky silver rings, metallic bracelet or watch, black studded strap"
  },
  "photography": {
    "camera_style": "high-contrast contemporary editorial fashion photography",
    "angle": "low-angle perspective",
    "shot_type": "centered medium portrait",
    "aspect_ratio": "4:5 vertical",
    "texture": "ultra-detailed, sharp focus, photorealistic"
  },
  "background": {
    "setting": "clean studio backdrop",
    "wall_color": "deep saturated blue",
    "atmosphere": "bold, edgy, contemporary"
  },
  "lighting": {
    "type": "hard directional natural-style light",
    "direction": "upper side",
    "quality": "crisp contrast, strong highlights"
  },
  "prop": "red gerberas, white carnations and light blue flowers in a natural organic bouquet"
}
\`\`\`
`,
        tags: ["Midjourney", "Editorial", "Streetwear", "Retratos", "Flores"] as any
    },
    {
        id: "prompt-botanical-fine-art-portrait",
        type: "prompt",
        title: "Fine Art Organic: Introspective Botanical Overlay Portrait",
        slug: "fine-art-introspective-botanical-portrait",
        summary: "Retrato fotográfico de bellas artes en primer plano con estética analógica orgánica. Capas de ramas retorcidas y flores silvestres (mostaza, violeta, blanco) cruzando el rostro sobre fondo crema cálido.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/botanical-fine-art-portrait.jpg",
        prompt_text: `Fine art analog close-up frontal portrait of a quiet introspective woman, wild organic botanical arrangement with mustard yellow flowers, muted purple blossoms and thin twisted branches framing and delicately crossing her face, authentic skin texture with subtle freckles, warm cream-beige matte backdrop with soft natural window light glow, painterly realism and subtle film grain, shot on Pentax 67 105mm f/2.4 lens --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Fine Art Organic: Introspective Botanical Overlay Portrait

Prompt fotográfico de bellas artes estilo analógico de medio formato con iluminación natural de ventana, profundidad de campo orgánica y composición botánica envolvente.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Fine art analog close-up frontal portrait of a quiet introspective woman, wild organic botanical arrangement with mustard yellow flowers, muted purple blossoms and thin twisted branches framing and delicately crossing her face, authentic skin texture with subtle freckles, warm cream-beige matte backdrop with soft natural window light glow, painterly realism and subtle film grain, shot on Pentax 67 105mm f/2.4 lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura JSON para Modelos de Generación Avanzada (DALL-E 3 / API / Structured Generation)

\`\`\`json
{
  "subject": {
    "description": "Close-up frontal portrait of the woman from the reference image, using the reference only for facial identity and proportions.",
    "expression": "quiet, introspective, natural gaze",
    "face": { "preserve_original": true, "makeup": "soft natural makeup, authentic skin texture" }
  },
  "accessories": {
    "prop": {
      "type": "wild botanical arrangement",
      "details": "mustard yellow flowers, muted purple blossoms, soft white petals, natural green leaves and thin twisted branches crossing the face"
    }
  },
  "photography": {
    "camera_style": "fine art analog portrait photography",
    "angle": "frontal eye-level",
    "shot_type": "close-up with layered botanical foreground",
    "aspect_ratio": "4:5 vertical",
    "texture": "natural film grain, painterly realism, soft organic depth separation"
  },
  "background": {
    "setting": "warm neutral fine-art backdrop",
    "wall_color": "cream-beige matte",
    "atmosphere": "quiet, organic, introspective"
  },
  "lighting": {
    "type": "soft directional window light",
    "direction": "slightly from the side",
    "quality": "warm late-afternoon glow with gentle falloff"
  }
}
\`\`\`
`,
        tags: ["Midjourney", "Fine Art", "Botanical", "Retratos", "Analógico"] as any
    },
    {
        id: "prompt-purple-indigo-studio-relighting-portrait",
        type: "prompt",
        title: "Studio Relighting: Deep Purple Indigo Chiaroscuro Portrait",
        slug: "purple-indigo-studio-relighting-portrait",
        summary: "Retrato de estudio de alto nivel enfocado en relighting preciso de 2 luces. Luz principal direccional desde la derecha, sombra tridimensional izquierda y luz de borde azulada sobre fondo púrpura-índigo profundo.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/purple-indigo-studio-relighting-portrait.jpg",
        prompt_text: `High-end studio close-up frontal portrait of a calm confident woman, strong directional key light from camera right sculpting cheekbone and jawline, deep light-to-shadow contrast on camera-left, subtle cool rim light outlining shadow-side jaw, solid deep purple-indigo studio backdrop, realistic skin texture with visible natural pores and freckles, no artificial smoothing, shot on Hasselblad H6D-100c 85mm lens --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Studio Relighting: Deep Purple Indigo Chiaroscuro Portrait

Prompt de estudio profesional diseñado para dominar esquemas de iluminación de 2 luces (*Two-light studio setup*), contraste tridimensional de pómulo y textura de piel fotorrealista sin suavizado artificial.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
High-end studio close-up frontal portrait of a calm confident woman, strong directional key light from camera right sculpting cheekbone and jawline, deep light-to-shadow contrast on camera-left, subtle cool rim light outlining shadow-side jaw, solid deep purple-indigo studio backdrop, realistic skin texture with visible natural pores and freckles, no artificial smoothing, shot on Hasselblad H6D-100c 85mm lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura JSON para Modelos de Generación Avanzada (DALL-E 3 / API / Structured Generation)

\`\`\`json
{
  "subject": {
    "description": "Close-up frontal portrait of the woman from the reference image, preserving her exact facial identity, proportions and natural skin texture.",
    "expression": "calm, confident, natural gaze directly toward camera",
    "face": {
      "preserve_original": true,
      "makeup": "natural, refined, no excessive smoothing"
    }
  },
  "photography": {
    "camera_style": "high-end studio portrait photography with realistic skin rendering",
    "angle": "frontal eye-level",
    "shot_type": "tight close-up, face and upper shoulders",
    "aspect_ratio": "4:5 vertical",
    "texture": "ultra high resolution, natural pores, subtle realistic grain, sculpted dimensional contrast"
  },
  "lighting": {
    "setup": "two-light studio relighting",
    "key_light": "strong directional light from camera right, illuminating cheekbone, jawline and neck",
    "shadow_side": "camera-left side visibly darker with defined light-to-shadow separation",
    "rim_light": "subtle secondary edge light outlining the shadow-side jaw and shoulder",
    "quality": "high contrast, defined shadow edge, controlled highlights, no flat illumination"
  },
  "background": {
    "setting": "professional studio backdrop",
    "wall_color": "solid deep purple-indigo",
    "atmosphere": "dramatic, sophisticated, dimensional"
  }
}
\`\`\`
`,
        tags: ["Midjourney", "Editorial", "Relighting", "Retratos", "Estudio"] as any
    }
];
