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
        id: "prompt-reaisemp-edgy-streetwear-bouquet",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Edgy Streetwear & Blue Studio Floral Portrait",
        slug: "metodologia-reaisemp-edgy-streetwear-blue-studio-bouquet",
        summary: "Prompt estructurado bajo el framework R.E.A.I.S.E.M.P. Retrato editorial contemporáneo con sujeto pelirrojo, estética streetwear, cadenas de plata y ramo de gerberas rojas sobre estudio azul saturado.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-edgy-streetwear-bouquet.png",
        prompt_text: `Centered medium portrait of a young adult woman with long red hair and natural freckles, confident neutral expression, chin slightly raised looking slightly downward toward camera, holding a large organic bouquet of red gerberas, white carnations and light blue flowers firmly against her chest, wearing an oversized sleeveless black tee with a distressed rectangular red chest graphic, heavy silver chain with circular pendant, chunky rings and metallic watch, solid deep saturated blue studio backdrop, hard directional lighting from upper side with crisp highlights and pronounced chin shadow, edgy contemporary fashion editorial aesthetic --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Edgy Streetwear & Blue Studio Floral Portrait

Prompt de alta precisión fotográfica utilizando la estructura sintáctica **R.E.A.I.S.E.M.P.** (Reference, Expression, Action, Identity/Outfit, Setting, Exposure/Lighting, Mood/Style).

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered medium portrait of a young adult woman with long red hair and natural freckles, confident neutral expression, chin slightly raised looking slightly downward toward camera, holding a large organic bouquet of red gerberas, white carnations and light blue flowers firmly against her chest, wearing an oversized sleeveless black tee with a distressed rectangular red chest graphic, heavy silver chain with circular pendant, chunky rings and metallic watch, solid deep saturated blue studio backdrop, hard directional lighting from upper side with crisp highlights and pronounced chin shadow, edgy contemporary fashion editorial aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Streetwear", "Retratos"] as any
    },
    {
        id: "prompt-reaisemp-vintage-sticker-bomb-portrait",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Pop-Art Vintage Sticker Bomb Portrait",
        slug: "metodologia-reaisemp-pop-art-vintage-sticker-bomb-portrait",
        summary: "Prompt de alto impacto visual bajo la metodología R.E.A.I.S.E.M.P. Retrato editorial avant-garde con pegatinas vintage (Coca-Cola, Starbucks, Gulf) cubriendo el rostro con textura de adhesivo hiperrealista.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vintage-sticker-bomb-portrait.png",
        prompt_text: `Centered head-and-shoulders portrait of a young adult woman with long red hair and natural freckles, chin slightly lifted with mouth slightly open, wearing a structured matte-black high-neck turtleneck, face covered in a dense curated collage of colorful vintage brand stickers, logos and typography following facial curvature with realistic paper overlap and adhesive shadows, eyes and lips remaining visible, smooth off-white studio background, soft directional front beauty lighting, slight desaturation, subtle film grain, editorial fashion magazine aesthetic --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Pop-Art Vintage Sticker Bomb Portrait

Prompt de alta resolución artística estructurado con la sintaxis **R.E.A.I.S.E.M.P.** para recrear intervenciones de moda avant-garde con collage facial de pegatinas vintage.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered head-and-shoulders portrait of a young adult woman with long red hair and natural freckles, chin slightly lifted with mouth slightly open, wearing a structured matte-black high-neck turtleneck, face covered in a dense curated collage of colorful vintage brand stickers, logos and typography following facial curvature with realistic paper overlap and adhesive shadows, eyes and lips remaining visible, smooth off-white studio background, soft directional front beauty lighting, slight desaturation, subtle film grain, editorial fashion magazine aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Pop-Art", "Stickers"] as any
    },
    {
        id: "prompt-reaisemp-vertical-red-laser-portrait",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Cybernetic Vertical Red Laser Line Portrait",
        slug: "metodologia-reaisemp-cybernetic-vertical-red-laser-portrait",
        summary: "Prompt cinemático bajo sintaxis R.E.A.I.S.E.M.P. Retrato editorial cibernético con línea láser roja vertical cruzando el ojo y brillo realista sobre la piel.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vertical-red-laser-portrait.png",
        prompt_text: `Centered portrait of a young adult woman with long red hair and freckles, calm intense expression looking directly toward camera, wearing a minimal structured matte-black high-neck garment, thin saturated red laser line crossing one eye with subtle glow and realistic red reflection on skin, dark blue studio background fading toward near-black, directional key light slightly above front with cool rim light outlining hair and shoulders, 50mm cinematic portrait look --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Cybernetic Vertical Red Laser Line Portrait

Prompt cinemático estructurado con la arquitectura **R.E.A.I.S.E.M.P.** para proyección de rayo láser rojo de precisión con luz direccional y contraste de tono frío vs cálido.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered portrait of a young adult woman with long red hair and freckles, calm intense expression looking directly toward camera, wearing a minimal structured matte-black high-neck garment, thin saturated red laser line crossing one eye with subtle glow and realistic red reflection on skin, dark blue studio background fading toward near-black, directional key light slightly above front with cool rim light outlining hair and shoulders, 50mm cinematic portrait look --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Sci-Fi", "Laser"] as any
    },
    {
        id: "prompt-reaisemp-white-cobra-macro-portrait",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Primal Intimacy White Cobra Macro Portrait",
        slug: "metodologia-reaisemp-primal-intimacy-white-cobra-macro-portrait",
        summary: "Prompt macro de ultra-precisión bajo la metodología R.E.A.I.S.E.M.P. Sujeto femenino sereno con cobra blanca albina enroscada en el cuello, capucha expandida y escamas marfil en detalle fotográfico de 100mm f/2.8.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-white-cobra-macro.jpg",
        prompt_text: `Extreme macro portrait of a young adult woman with calm fearless expression, holding completely still with a white albino cobra coiled around her neck and crossing partially over her face, cobra hood partially expanded near nose and lips, forked tongue visible, glossy black eyes, seamless dark charcoal background, soft directional side macro lighting sculpting pores and individual scales, 100mm macro f/2.8 aesthetic --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Primal Intimacy White Cobra Macro Portrait

Prompt hiperrealista de macrofotografía de bellas artes estructurado bajo la sintaxis **R.E.A.I.S.E.M.P.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Extreme macro portrait of a young adult woman with calm fearless expression, holding completely still with a white albino cobra coiled around her neck and crossing partially over her face, cobra hood partially expanded near nose and lips, forked tongue visible, glossy black eyes, seamless dark charcoal background, soft directional side macro lighting sculpting pores and individual scales, 100mm macro f/2.8 aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Fine Art", "Macro", "Naturaleza"] as any
    },
    {
        id: "prompt-reaisemp-red-glitter-portrait",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Chiaroscuro Red & Iridescent Glitter Portrait",
        slug: "metodologia-reaisemp-chiaroscuro-red-iridescent-glitter-portrait",
        summary: "Prompt de estudio editorial chiaroscuro bajo la estructura R.E.A.I.S.E.M.P. Piel y vestimenta en monocromo de alto contraste con fondo rojo saturado y glitter iridiscente multicolor en los ojos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-red-glitter-portrait.png",
        prompt_text: `Cinematic 3/4 editorial portrait of an intense woman, monochrome black and white skin rendering, solid saturated red studio backdrop, strong red rim light on hair and shoulders, heavy full-color iridescent multicolor glitter surrounding both eyes, hard 45-degree key light leaving 60-70% of face in detailed chiaroscuro shadow, moody high-end fashion editorial --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Chiaroscuro Red & Iridescent Glitter Portrait

Prompt editorial de contraste dramático de color selectivo basado en el marco **R.E.A.I.S.E.M.P.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Cinematic 3/4 editorial portrait of an intense woman, monochrome black and white skin rendering, solid saturated red studio backdrop, strong red rim light on hair and shoulders, heavy full-color iridescent multicolor glitter surrounding both eyes, hard 45-degree key light leaving 60-70% of face in detailed chiaroscuro shadow, moody high-end fashion editorial --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Chiaroscuro", "Moda"] as any
    },
    {
        id: "prompt-reaisemp-vogue-bridal-white-horse",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Vogue Pearl Veil & White Horse Editorial",
        slug: "metodologia-reaisemp-vogue-pearl-veil-white-horse-editorial",
        summary: "Prompt de alta costura nupcial inspirado en Vogue bajo sintaxis R.E.A.I.S.E.M.P. Novia con velo transparente de perlas cabeza a cabeza con un caballo blanco de ojos dorados y reflejos de nubes.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vogue-bridal-white-horse.jpg",
        prompt_text: `Vogue style intimate close-up editorial portrait of an adult blonde bride with serene expression resting head-to-head beside a white horse, sheer pearl veil covering half her face, golden horse eye reflecting white clouds, minimal ivory background with white stone floor, soft diffused cinematic lighting, 85mm fashion lens aesthetic --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Vogue Pearl Veil & White Horse Editorial

Prompt editorial nupcial de gran lujo y elegancia pura, estructurado minuciosamente con el estándar **R.E.A.I.S.E.M.P.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Vogue style intimate close-up editorial portrait of an adult blonde bride with serene expression resting head-to-head beside a white horse, sheer pearl veil covering half her face, golden horse eye reflecting white clouds, minimal ivory background with white stone floor, soft diffused cinematic lighting, 85mm fashion lens aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. (JSON para Modelos Avanzados & LLM Prompters)

\`\`\`json
{
  "REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Vogue", "Nupcial"] as any
    },
    {
        id: "prompt-reaisemp-cinematic-red-laser-noir",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Retrato Cinematográfico Noir con Láser Rojo",
        slug: "metodologia-reaisemp-retrato-cinematografico-noir-laser-rojo",
        summary: "Prompt cinemático estructurado en español bajo el marco R.E.A.I.S.E.M.P. Retrato de cabeza y hombros con iluminación de alto contraste, línea láser roja vertical atravesando el ojo y fondo azul profundo.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-laser-noir-portrait.jpg",
        prompt_text: `Cinematic tight head-and-shoulders low-angle portrait of a serious controlled woman wearing a matte black turtleneck, thin saturated vertical red laser line slicing across one eye with subtle glow and skin reflection, deep blue seamless studio backdrop fading to near-black, hard directional top key light, crisp highlights, deep chin shadows, cool rim light on hair and shoulders, 50mm editorial camera look --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Retrato Cinematográfico Noir con Láser Rojo

Framework completo estructurado en español bajo la metodología **R.E.A.I.S.E.M.P.** (Render del Avatar, Entorno, Acción/Postura, Iluminación, Sensación/Atmósfera, Estilo Visual, Composición/Cámara, Postproducción).

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Cinematic tight head-and-shoulders low-angle portrait of a serious controlled woman wearing a matte black turtleneck, thin saturated vertical red laser line slicing across one eye with subtle glow and skin reflection, deep blue seamless backdrop fading to near-black, hard directional top key light, crisp highlights, deep chin shadows, cool rim light on hair and shoulders, 50mm editorial camera look --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Cinematográfico Noir con Láser Rojo",
  "framework_REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Noir", "Laser"] as any
    },
    {
        id: "prompt-reaisemp-purple-studio-relighting",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Retrato de Estudio con Iluminación Esculpida Púrpura",
        slug: "metodologia-reaisemp-retrato-estudio-iluminacion-esculpida-purpura",
        summary: "Prompt de relighting profesional de estudio estructurado en español bajo R.E.A.I.S.E.M.P. Fondo púrpura índigo mate con iluminación direccional que esculpe pómulos y línea mandibular sin suavizado artificial.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-purple-studio-relighting.jpg",
        prompt_text: `Centered high-end studio portrait of a confident woman on a solid matte deep purple indigo backdrop, strong directional key light from camera right sculpting cheekbone and jawline, dark shadow-side on camera left with subtle cool rim light on jaw edge, realistic skin texture with visible natural pores and freckles, no digital smoothing, 85mm lens aesthetic --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Retrato de Estudio con Iluminación Esculpida Púrpura

Especificación completa en español de Reiluminación (*Studio Relighting*) utilizando el marco **R.E.A.I.S.E.M.P.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered high-end studio portrait of a confident woman on a solid matte deep purple indigo backdrop, strong directional key light from camera right sculpting cheekbone and jawline, dark shadow-side on camera left with subtle cool rim light on jaw edge, realistic skin texture with visible natural pores and freckles, no digital smoothing, 85mm lens aesthetic --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato de Estudio con Iluminación Esculpida Púrpura",
  "framework_REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Relighting", "Estudio"] as any
    },
    {
        id: "prompt-reaisemp-botanical-fine-art",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Retrato Botánico de Bellas Artes",
        slug: "metodologia-reaisemp-retrato-botanico-bellas-artes",
        summary: "Prompt botánico de bellas artes estructurado en español bajo R.E.A.I.S.E.M.P. Composición analógica orgánica con ramas, flores mostaza y violeta sobre fondo crema-beige.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-botanical-fine-art.png",
        prompt_text: `Fine art botanical close-up frontal portrait of a quiet introspective woman, wild organic botanical arrangement with mustard yellow flowers, muted purple blossoms and thin twisted branches framing her face, authentic skin texture with freckles, warm cream-beige matte backdrop, soft side window lighting glow, painterly realism, analog film grain --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Retrato Botánico de Bellas Artes

Framework completo estructurado en español bajo el estándar **R.E.A.I.S.E.M.P.**.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Fine art botanical close-up frontal portrait of a quiet introspective woman, wild organic botanical arrangement with mustard yellow flowers, muted purple blossoms and thin twisted branches framing her face, authentic skin texture with freckles, warm cream-beige matte backdrop, soft side window lighting glow, painterly realism, analog film grain --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Botánico de Bellas Artes",
  "framework_REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Fine Art", "Botanical", "Analógico"] as any
    },
    {
        id: "prompt-reaisemp-sticker-collage-editorial",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Retrato Editorial con Collage de Stickers",
        slug: "metodologia-reaisemp-retrato-editorial-collage-stickers",
        summary: "Prompt avant-garde en español estructurado con R.E.A.I.S.E.M.P. Retrato editorial centrado con stickers vintage (Coca-Cola, Starbucks, Gulf) amoldados sobre la geometría facial.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-sticker-collage-editorial.png",
        prompt_text: `Centered editorial head-and-shoulders portrait of a confident woman in a black matte turtleneck, face covered in a dense layered collage of colorful vintage stickers and logos conforming smoothly to facial geometry, eyes and lips visible, pale gray studio backdrop, soft front beauty lighting, subtle film grain --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Retrato Editorial con Collage de Stickers

Framework completo en español para retratos Pop-Art de intervención gráfica analógica.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Centered editorial head-and-shoulders portrait of a confident woman in a black matte turtleneck, face covered in a dense layered collage of colorful vintage stickers and logos conforming smoothly to facial geometry, eyes and lips visible, pale gray studio backdrop, soft front beauty lighting, subtle film grain --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Editorial con Collage de Stickers",
  "framework_REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Pop-Art", "Stickers"] as any
    },
    {
        id: "prompt-reaisemp-chiaroscuro-glitter-red",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Retrato Editorial de Claroscuro con Glitter Iridiscente",
        slug: "metodologia-reaisemp-retrato-editorial-claroscuro-glitter-iridiscente",
        summary: "Prompt de alto impacto chiaroscuro en español bajo R.E.A.I.S.E.M.P. Piel monocromática en blanco y negro sobre fondo rojo carmesí con glitter multicolor iridiscente en los ojos.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-chiaroscuro-glitter-red.png",
        prompt_text: `3/4 chiaroscuro editorial portrait of an intense woman, monochrome skin rendering, solid saturated red studio backdrop, strong red rim light on hair, full-color iridescent multicolor glitter makeup around eyes, hard 45-degree key light leaving 60-70% of face in shadow --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Retrato Editorial de Claroscuro con Glitter Iridiscente

Framework completo en español para claroscuro dramático con color selectivo.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
3/4 chiaroscuro editorial portrait of an intense woman, monochrome skin rendering, solid saturated red studio backdrop, strong red rim light on hair, full-color iridescent multicolor glitter makeup around eyes, hard 45-degree key light leaving 60-70% of face in shadow --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Editorial de Claroscuro con Glitter Iridiscente",
  "framework_REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Chiaroscuro", "Moda"] as any
    },
    {
        id: "prompt-reaisemp-vogue-bride-white-horse",
        type: "prompt",
        title: "Metodología R.E.A.I.S.E.M.P.: Retrato Editorial de Novia con Caballo Blanco",
        slug: "metodologia-reaisemp-retrato-editorial-novia-caballo-blanco",
        summary: "Prompt nupcial estilo Vogue estructurado en español bajo R.E.A.I.S.E.M.P. Novia con velo transparente decorado con perlas cabeza a cabeza con caballo blanco de ojo dorado con reflejo de nubes.",
        category: "Retratos & Branding",
        system_type: "Midjourney v6 / REAISEMP",
        process_state: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        featured_image_url: "/images/prompts/reaisemp-vogue-bride-white-horse.jpg",
        prompt_text: `Vogue magazine style close-up portrait of an elegant bride in ivory gown with pearl veil beside a white horse, golden horse eye reflecting white sky clouds, polished white stone floor, minimal pale ivory environment, soft diffused lighting, 85mm lens --ar 4:5 --style raw --v 6.1`,
        body_markdown: `
# Metodología R.E.A.I.S.E.M.P.: Retrato Editorial de Novia con Caballo Blanco

Framework completo en español para retratos nupciales estilo Vogue Haute Couture.

---

## 🎨 Prompt Maestro (Texto Directo / Midjourney / Flux)

\`\`\`text
Vogue magazine style close-up portrait of an elegant bride in ivory gown with pearl veil beside a white horse, golden horse eye reflecting white sky clouds, polished white stone floor, minimal pale ivory environment, soft diffused lighting, 85mm lens --ar 4:5 --style raw --v 6.1
\`\`\`

---

## ⚙️ Estructura R.E.A.I.S.E.M.P. Completa (JSON en Español)

\`\`\`json
{
  "title": "Retrato Editorial de Novia con Caballo Blanco",
  "framework_REAISEMP": {
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
        tags: ["REAISEMP", "Midjourney", "Editorial", "Vogue", "Nupcial"] as any
    }
];
