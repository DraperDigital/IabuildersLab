export const EXTRA_MOCK_PROMPTS = [
    {
        id: "lifestyle-9",
        type: "prompt",
        title: "Luxury Bedtime iPhone Selfie — Phone Glow + Warm Lamp Glass-Skin Mood",
        slug: "luxury-bedtime-selfie",
        summary: "Ultra-realistic 8K luxury bedtime iPhone selfie portrait con atmósfera cozy editorial.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar estructura facial, peinado, tono de piel y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato bedtime selfie estilo modelo off-duty en ambiente de lujo.
- **Edad aparente:** Early 30s aesthetic
- **Cabello:**
  - Color: Dark chocolate
  - Estilo: Loose voluminous waves, natural bedside texture
- **Expresión:** Soft sleepy expression with slight smile.
- **Detalle piel:**
  - Glass-skin: Visible pores + moisturizer sheen natural
  - Realismo: Skin texture altamente definida sin smoothing artificial
- **Outfit:**
  - Top: Champagne silk pajama camisole
  - Detalle: Lace trim + thin straps elegante
- **Accesorio:**
  - Sleep mask: Matching satin sleep mask pushed onto forehead
- **Calidad:** Ultra-realistic 8K iPhone-style lifestyle portrait rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Luxury bedroom minimalista.
- **Elementos:**
  - High thread count cream bedding
  - Fluffy down pillows
  - Warm dim bedside lamp in background
- **Atmósfera:** Cozy, intimate, high-end bedtime lifestyle.

## A: Acción / Postura
- **Pose:** Lying in bed taking a candid iPhone selfie.
- **Detalle:** Head resting naturally in pillows, off-duty relaxed posture.
- **Expresión:** Sleepy softness + subtle smile.
- **Ojos:** Phone screen reflection visible in the eyes.

## I: Iluminación
- **Tipo:** Mixed lighting for organic blending (cool phone glow + warm lamp).
- **Fuentes:**
  - Phone screen softbox: Cool soft light centered on face, simulating iPhone screen glow
  - Bedside lamp: Warm dim ambient lamp light in background for contrast
- **Efecto:**
  - Glass-skin highlight on cheeks and forehead
  - Soft cinematic contrast cool vs warm
  - Natural seamless blending with bedroom mood

## S: Sensación / Atmósfera
- **Mood:** Intimate, cozy, luxurious, sleepy elegance.
- **Tono:** High-fashion model off-duty bedtime selfie vibe.

## E: Estilo Visual
- **Estilo general:** Ultra-photorealistic cinematic iPhone candid portrait.
- **Detalles:**
  - Cream luxury bedding textures
  - Silk camisole sheen + lace detail
  - Phone glow reflection in eyes
  - Warm lamp bokeh background
- **Acabado:** Organic blending, natural smartphone realism with editorial polish.
- **Calidad:** Ultra-realistic 8K high-detail bedtime lifestyle aesthetic.

## M: Composición / Cámara
- **Camera Style:** iPhone 15 Pro Max selfie look
- **Plano:** Close-up to medium close framing in bed.
- **Ángulo:** Natural handheld selfie perspective.
- **Enfoque:** Sharp focus en rostro y ojos, background softly blurred.
- **Profundidad de campo:** Shallow DOF para vibe premium.

## P: Postproducción
- **Color grading:** Cool facial glow + warm bedside lamp contrast, cinematic soft tones.
- **Contraste:** Suave-moderado, sin HDR exagerado.
- **Nitidez:** Alta definición en piel, seda, ojos y bedding texture.
- **Acabado final:** Ultra-realistic 8K luxury bedtime iPhone selfie portrait con atmósfera cozy editorial.
`,
        prompt_text: JSON.stringify({
            "title": "Luxury Bedtime iPhone Selfie — Phone Glow + Warm Lamp Glass-Skin Mood",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Preservar estructura facial, peinado, tono de piel y expresión exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Retrato bedtime selfie estilo modelo off-duty en ambiente de lujo.",
                    "edad_aparente": "Early 30s aesthetic",
                    "cabello": {
                        "color": "Dark chocolate",
                        "estilo": "Loose voluminous waves, natural bedside texture"
                    },
                    "expresion": "Soft sleepy expression with slight smile.",
                    "detalle_piel": {
                        "glass_skin": "Visible pores + moisturizer sheen natural",
                        "realismo": "Skin texture altamente definida sin smoothing artificial"
                    },
                    "outfit": {
                        "top": "Champagne silk pajama camisole",
                        "detalle": "Lace trim + thin straps elegante"
                    },
                    "accesorio": {
                        "sleep_mask": "Matching satin sleep mask pushed onto forehead"
                    },
                    "calidad": "Ultra-realistic 8K iPhone-style lifestyle portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "ubicacion": "Luxury bedroom minimalista.",
                    "elementos": [
                        "High thread count cream bedding",
                        "Fluffy down pillows",
                        "Warm dim bedside lamp in background"
                    ],
                    "atmósfera": "Cozy, intimate, high-end bedtime lifestyle."
                },
                "A_Accion_Postura": {
                    "pose": "Lying in bed taking a candid iPhone selfie.",
                    "detalle": "Head resting naturally in pillows, off-duty relaxed posture.",
                    "expresion": "Sleepy softness + subtle smile.",
                    "ojos": "Phone screen reflection visible in the eyes."
                },
                "I_Iluminacion": {
                    "tipo": "Mixed lighting for organic blending (cool phone glow + warm lamp).",
                    "fuentes": {
                        "phone_screen_softbox": "Cool soft light centered on face, simulating iPhone screen glow",
                        "bedside_lamp": "Warm dim ambient lamp light in background for contrast"
                    },
                    "efecto": [
                        "Glass-skin highlight on cheeks and forehead",
                        "Soft cinematic contrast cool vs warm",
                        "Natural seamless blending with bedroom mood"
                    ]
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Intimate, cozy, luxurious, sleepy elegance.",
                    "tono": "High-fashion model off-duty bedtime selfie vibe."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Ultra-photorealistic cinematic iPhone candid portrait.",
                    "detalles": [
                        "Cream luxury bedding textures",
                        "Silk camisole sheen + lace detail",
                        "Phone glow reflection in eyes",
                        "Warm lamp bokeh background"
                    ],
                    "acabado": "Organic blending, natural smartphone realism with editorial polish.",
                    "calidad": "Ultra-realistic 8K high-detail bedtime lifestyle aesthetic."
                },
                "M_Composicion_Camara": {
                    "camera_style": "iPhone 15 Pro Max selfie look",
                    "plano": "Close-up to medium close framing in bed.",
                    "angulo": "Natural handheld selfie perspective.",
                    "enfoque": "Sharp focus en rostro y ojos, background softly blurred.",
                    "profundidad_de_campo": "Shallow DOF para vibe premium."
                },
                "P_Postproduccion": {
                    "color_grading": "Cool facial glow + warm bedside lamp contrast, cinematic soft tones.",
                    "contraste": "Suave-moderado, sin HDR exagerado.",
                    "nitidez": "Alta definición en piel, seda, ojos y bedding texture.",
                    "acabado_final": "Ultra-realistic 8K luxury bedtime iPhone selfie portrait con atmósfera cozy editorial."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/luxury-bedtime-selfie.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-selfie", name: "Selfie", slug: "selfie" },
            { id: "t-luxury", name: "Luxury", slug: "luxury" }
        ]
    },
    {
        id: "lifestyle-8",
        type: "prompt",
        title: "Playful Golden Hour Wind Selfie — Tongue-Out Candid Close-Up",
        slug: "playful-golden-hour-selfie",
        summary: "Ultra-realistic 8K golden-hour candid wind selfie con mood espontáneo y cinematográfico.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar estructura facial, tono de piel, peinado, expresión y rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar el rostro bajo ninguna circunstancia.
- **Sujeto:** Joven mujer capturada en un selfie dinámico y espontáneo.
- **Cabello:**
  - Color: Light brown
  - Estilo: Largo, liso, con mechones sueltos
  - Detalle: Cabello moviéndose con el viento, strands catching the light
- **Expresión:** Playful, candid, head slightly tilted, sticking tongue out.
- **Detalle piel:** Textura natural realista, énfasis en skin detail y eye clarity.
- **Calidad:** Ultra-realistic 8K cinematic selfie portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Outdoor golden hour setting con fondo suave desenfocado.
- **Background:** Sunlit soft-focus environment, cálido y natural.
- **Atmósfera:** Ligera, veraniega, espontánea, auténtica.

## A: Acción / Postura
- **Pose:** Close-up selfie angle dinámico.
- **Detalle:**
  - Head: Head slightly tilted
  - Expresión: Tongue-out playful candid moment
- **Lenguaje corporal:** Espontáneo, youthful, divertido.

## I: Iluminación
- **Tipo:** Warm natural golden hour lighting.
- **Características:**
  - Soft flattering illumination sobre el rostro
  - Sombras suaves unificadas con el ambiente
  - Highlights cálidos sobre mechones de cabello
- **Efecto:** Cinematic glow natural con integración orgánica.

## S: Sensación / Atmósfera
- **Mood:** Playful, candid, warm, youthful.
- **Tono:** Golden-hour lifestyle selfie con energía espontánea.

## E: Estilo Visual
- **Estilo general:** Photorealistic cinematic outdoor selfie portrait.
- **Detalles:**
  - Cabello al viento con luz cálida
  - Textura de piel ultra definida
  - Bokeh suave de fondo
  - Natural candid expression
- **Acabado:** Organic blending, seamless high-fashion lifestyle realism.
- **Calidad:** Ultra-realistic 8K con estética natural premium.

## M: Composición / Cámara
- **Plano:** Dynamic close-up selfie framing.
- **Ángulo:** Selfie perspective con ligera inclinación natural.
- **Enfoque:** Sharp focus en ojos y rostro; background completamente suave.
- **Profundidad de campo:** Shallow DOF cinematográfico.

## P: Postproducción
- **Color grading:** Warm golden tones naturales, sin saturación excesiva.
- **Contraste:** Suave-moderado para mantener look auténtico.
- **Nitidez:** Alta definición en piel, cabello y ojos.
- **Acabado final:** Ultra-realistic 8K golden-hour candid wind selfie con mood espontáneo y cinematográfico.
`,
        prompt_text: JSON.stringify({
            "title": "Playful Golden Hour Wind Selfie — Tongue-Out Candid Close-Up",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Preservar estructura facial, tono de piel, peinado, expresión y rasgos físicos exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar el rostro bajo ninguna circunstancia.",
                    "sujeto": "Joven mujer capturada en un selfie dinámico y espontáneo.",
                    "cabello": {
                        "color": "Light brown",
                        "estilo": "Largo, liso, con mechones sueltos",
                        "detalle": "Cabello moviéndose con el viento, strands catching the light"
                    },
                    "expresion": "Playful, candid, head slightly tilted, sticking tongue out.",
                    "detalle_piel": "Textura natural realista, énfasis en skin detail y eye clarity.",
                    "calidad": "Ultra-realistic 8K cinematic selfie portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "escena": "Outdoor golden hour setting con fondo suave desenfocado.",
                    "background": "Sunlit soft-focus environment, cálido y natural.",
                    "atmósfera": "Ligera, veraniega, espontánea, auténtica."
                },
                "A_Accion_Postura": {
                    "pose": "Close-up selfie angle dinámico.",
                    "detalle": {
                        "head": "Head slightly tilted",
                        "expresion": "Tongue-out playful candid moment"
                    },
                    "lenguaje_corporal": "Espontáneo, youthful, divertido."
                },
                "I_Iluminacion": {
                    "tipo": "Warm natural golden hour lighting.",
                    "caracteristicas": [
                        "Soft flattering illumination sobre el rostro",
                        "Sombras suaves unificadas con el ambiente",
                        "Highlights cálidos sobre mechones de cabello"
                    ],
                    "efecto": "Cinematic glow natural con integración orgánica."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Playful, candid, warm, youthful.",
                    "tono": "Golden-hour lifestyle selfie con energía espontánea."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Photorealistic cinematic outdoor selfie portrait.",
                    "detalles": [
                        "Cabello al viento con luz cálida",
                        "Textura de piel ultra definida",
                        "Bokeh suave de fondo",
                        "Natural candid expression"
                    ],
                    "acabado": "Organic blending, seamless high-fashion lifestyle realism.",
                    "calidad": "Ultra-realistic 8K con estética natural premium."
                },
                "M_Composicion_Camara": {
                    "plano": "Dynamic close-up selfie framing.",
                    "angulo": "Selfie perspective con ligera inclinación natural.",
                    "enfoque": "Sharp focus en ojos y rostro; background completamente suave.",
                    "profundidad_de_campo": "Shallow DOF cinematográfico."
                },
                "P_Postproduccion": {
                    "color_grading": "Warm golden tones naturales, sin saturación excesiva.",
                    "contraste": "Suave-moderado para mantener look auténtico.",
                    "nitidez": "Alta definición en piel, cabello y ojos.",
                    "acabado_final": "Ultra-realistic 8K golden-hour candid wind selfie con mood espontáneo y cinematográfico."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "beginner",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/playful-golden-hour-selfie.jpg",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-selfie", name: "Selfie", slug: "selfie" },
            { id: "t-goldenhour", name: "Golden Hour", slug: "golden-hour" }
        ]
    },
    {
        id: "fantasy-2",
        type: "prompt",
        title: "Pink Glow Ball Immersion Portrait — Magenta Saturated Editorial Fantasy",
        slug: "pink-glow-ball-immersion",
        summary: "Ultra-realistic 8K pink immersion fashion portrait con atmósfera juguetona surreal.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos.
- **Preservación total:** No cambiar ni editar el rostro bajo ninguna circunstancia.
- **Sujeto:** Persona sumergida entre esferas translúcidas rosas con estética fashion surreal.
- **Expresión:** Confident and composed, mirada editorial directa.
- **Detalle facial:**
  - Piel: Smooth natural skin con pecas visibles en nariz y mejillas
  - Cejas: Bold eyebrows definidas
  - Ojos: Winged eyeliner + pink glitter eyeshadow
  - Labios: Hot pink lipstick vibrante
  - Makeup: Subtle enhancements manteniendo naturalidad
- **Cabello:**
  - Estilo: Soft waves elegantes
  - Instrucción: Preservar textura y tono exactos de la referencia
- **Calidad:** Ultra-realistic 8K editorial surreal portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Submerged environment lleno de bolas translúcidas luminosas.
- **Paleta:** Baby pink, fuchsia pink, hot pink, magenta, blush pink, rose pink, cotton candy pink.
- **Atmósfera:** Playful, vivid, saturated, surreal fashion backdrop.

## A: Acción / Postura
- **Pose:** Cuerpo colocado diagonalmente a través del frame.
  - Head: Tilted ligeramente hacia un lado
  - Left arm: Brazo izquierdo doblado hacia arriba, mano cerca de la cabeza
  - Right arm: Brazo derecho extendido hacia cámara sosteniendo una esfera rosa
- **Lenguaje corporal:** Composición dinámica pero elegante, editorial controlada.

## I: Iluminación
- **Tipo:** Bright evenly distributed lighting.
- **Características:**
  - Iluminación uniforme high-key
  - Glow intenso en bolas translúcidas
  - Sin sombras duras
- **Efecto:** Ambiente vívido, colorido, juguetón, altamente saturado.

## S: Sensación / Atmósfera
- **Mood:** Playful, dreamy, confident, vibrant.
- **Tono:** Surreal fashion portrait con energía pop y estética editorial.

## E: Estilo Visual
- **Estilo general:** Photorealistic saturated surreal fashion portrait.
- **Detalles:**
  - Bolas translúcidas glowing en múltiples tonos rosa
  - Makeup pink glitter editorial
  - Textura realista en piel y pecas
- **Acabado:** High-fashion pop surreal aesthetic, magazine-ready.
- **Calidad:** Ultra-realistic 8K con color vibrante y detalle extremo.

## M: Composición / Cámara
- **Composición:** Simétrica, rostro perfectamente centrado como punto focal.
- **Plano:** Close-up a medium close framing dentro del mar de esferas rosas.
- **Enfoque:** Sharp focus en ojos expresivos y rostro; fondo lleno de bokeh glossy spheres.
- **Ángulo:** Neutral frontal con ligera diagonal corporal para dinamismo.

## P: Postproducción
- **Color grading:** Pink-magenta saturated palette intensa y alegre.
- **Contraste:** Moderado-clean para look pop editorial.
- **Nitidez:** Alta definición en piel, pecas, labios y textura translúcida de esferas.
- **Acabado final:** Ultra-realistic 8K pink immersion fashion portrait con atmósfera juguetona surreal.
`,
        prompt_text: JSON.stringify({
            "title": "Pink Glow Ball Immersion Portrait — Magenta Saturated Editorial Fantasy",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos.",
                    "preservacion_total": "No cambiar ni editar el rostro bajo ninguna circunstancia.",
                    "sujeto": "Persona sumergida entre esferas translúcidas rosas con estética fashion surreal.",
                    "expresion": "Confident and composed, mirada editorial directa.",
                    "detalle_facial": {
                        "piel": "Smooth natural skin con pecas visibles en nariz y mejillas",
                        "cejas": "Bold eyebrows definidas",
                        "ojos": "Winged eyeliner + pink glitter eyeshadow",
                        "labios": "Hot pink lipstick vibrante",
                        "makeup": "Subtle enhancements manteniendo naturalidad"
                    },
                    "cabello": {
                        "estilo": "Soft waves elegantes",
                        "instruccion": "Preservar textura y tono exactos de la referencia"
                    },
                    "calidad": "Ultra-realistic 8K editorial surreal portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "escena": "Submerged environment lleno de bolas translúcidas luminosas.",
                    "paleta": [
                        "baby pink",
                        "fuchsia pink",
                        "hot pink",
                        "magenta",
                        "blush pink",
                        "rose pink",
                        "cotton candy pink"
                    ],
                    "atmósfera": "Playful, vivid, saturated, surreal fashion backdrop."
                },
                "A_Accion_Postura": {
                    "pose": "Cuerpo colocado diagonalmente a través del frame.",
                    "detalle_pose": {
                        "head": "Head tilted ligeramente hacia un lado",
                        "left_arm": "Brazo izquierdo doblado hacia arriba, mano cerca de la cabeza",
                        "right_arm": "Brazo derecho extendido hacia cámara sosteniendo una esfera rosa"
                    },
                    "lenguaje_corporal": "Composición dinámica pero elegante, editorial controlada."
                },
                "I_Iluminacion": {
                    "tipo": "Bright evenly distributed lighting.",
                    "caracteristicas": [
                        "Iluminación uniforme high-key",
                        "Glow intenso en bolas translúcidas",
                        "Sin sombras duras"
                    ],
                    "efecto": "Ambiente vívido, colorido, juguetón, altamente saturado."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Playful, dreamy, confident, vibrant.",
                    "tono": "Surreal fashion portrait con energía pop y estética editorial."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Photorealistic saturated surreal fashion portrait.",
                    "detalles": [
                        "Bolas translúcidas glowing en múltiples tonos rosa",
                        "Makeup pink glitter editorial",
                        "Textura realista en piel y pecas"
                    ],
                    "acabado": "High-fashion pop surreal aesthetic, magazine-ready.",
                    "calidad": "Ultra-realistic 8K con color vibrante y detalle extremo."
                },
                "M_Composicion_Camara": {
                    "composicion": "Simétrica, rostro perfectamente centrado como punto focal.",
                    "plano": "Close-up a medium close framing dentro del mar de esferas rosas.",
                    "enfoque": "Sharp focus en ojos expresivos y rostro; fondo lleno de bokeh glossy spheres.",
                    "angulo": "Neutral frontal con ligera diagonal corporal para dinamismo."
                },
                "P_Postproduccion": {
                    "color_grading": "Pink-magenta saturated palette intensa y alegre.",
                    "contraste": "Moderado-clean para look pop editorial.",
                    "nitidez": "Alta definición en piel, pecas, labios y textura translúcida de esferas.",
                    "acabado_final": "Ultra-realistic 8K pink immersion fashion portrait con atmósfera juguetona surreal."
                }
            }
        }, null, 2),
        category: "Fantasy",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/pink-glow-ball-immersion.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fantasy", name: "Fantasy", slug: "fantasy" },
            { id: "t-pop", name: "Pop Art", slug: "pop-art" },
            { id: "t-vibrant", name: "Vibrant", slug: "vibrant" }
        ]
    },
    {
        id: "editorial-10",
        type: "prompt",
        title: "Cyberpunk Noir 3-Frame Portrait Sequence — Green Neon Street Aesthetic",
        slug: "cyberpunk-noir-sequence",
        summary: "Ultra-realistic 8K cyberpunk noir triptych sequence con identidad preservada y estilo neon dark.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona en una secuencia editorial cyberpunk noir urbana.
- **Expresión base:** Introspectiva, intensa, underground mood.
- **Calidad:** Ultra-realistic 8K cinematic multi-frame portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Urban street cyberpunk environment nocturno con estética underground hip-hop.
- **Background:** Neon-lit streets con LEDs verdes y blur de movimiento.
- **Atmósfera:** Dark, grainy, moody, raw handheld street noir.

## A: Acción / Postura
- **Estructura:** Secuencia en tres frames verticales (Top / Middle / Bottom).
  - **Frame 1 (Top):** Close-up, Hoodie + Stüssy beanie + silver glasses, Introspective gaze, Green neon glow + motion blur streaks.
  - **Frame 2 (Middle):** Low-angle medium shot, Sporty windbreaker + headband + sunglasses, Rebellious gesture flipping the middle finger, Neon LEDs verdes intensos.
  - **Frame 3 (Bottom):** Side-profile close-up, Bucket hat + round goggles, Cigarette with glowing ember, Rostro medio oculto en sombras noir.

## I: Iluminación
- **Tipo:** Green neon dominant lighting con noir contrast.
- **Características:**
  - Glow verde intenso como color principal
  - High ISO gritty realism
  - Sombras profundas con slices de luz cinematográfica
- **Efecto:** Cyberpunk underground editorial mood.

## S: Sensación / Atmósfera
- **Mood:** Rebelde, oscuro, introspectivo, callejero.
- **Tono:** Hip-hop underground + noir cyberpunk cinematic sequence.

## E: Estilo Visual
- **Estilo general:** Dark cyberpunk noir portrait sequence, gritty street fashion editorial.
- **Detalles:**
  - Film grain heavy
  - Motion blur neon streaks
  - Raw handheld camera feel
  - Shallow depth of field
- **Acabado:** Moody, high-contrast, underground aesthetic.
- **Calidad:** Ultra-realistic 8K con texturas crudas y cinematográficas.

## M: Composición / Cámara
- **Layout:** Three-frame vertical sequence (top/middle/bottom).
- **Enfoque:** Sharp facial identity preserved in all frames.
- **Lentes:** Close-ups + medium shot con DOF shallow.
- **Encuadre:** Cada frame variado pero coherente en estética neon noir.

## P: Postproducción
- **Color grading:** Dominante verde neón + negros profundos noir.
- **Contraste:** Alto para estética underground.
- **Textura:** Grano fuerte + high ISO film look.
- **Acabado final:** Ultra-realistic 8K cyberpunk noir triptych sequence con identidad preservada.
`,
        prompt_text: JSON.stringify({
            "title": "Cyberpunk Noir 3-Frame Portrait Sequence — Green Neon Street Aesthetic",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Persona en una secuencia editorial cyberpunk noir urbana.",
                    "expresion_base": "Introspectiva, intensa, underground mood.",
                    "calidad": "Ultra-realistic 8K cinematic multi-frame portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "escena": "Urban street cyberpunk environment nocturno con estética underground hip-hop.",
                    "background": "Neon-lit streets con LEDs verdes y blur de movimiento.",
                    "atmósfera": "Dark, grainy, moody, raw handheld street noir."
                },
                "A_Accion_Postura": {
                    "estructura": "Secuencia en tres frames verticales (Top / Middle / Bottom).",
                    "frame_1_top": {
                        "shot": "Close-up",
                        "outfit": "Hoodie + Stüssy beanie + silver glasses",
                        "expresion": "Introspective gaze",
                        "efecto": "Green neon glow + motion blur streaks"
                    },
                    "frame_2_middle": {
                        "shot": "Low-angle medium shot",
                        "outfit": "Sporty windbreaker + headband + sunglasses",
                        "gesto": "Rebellious gesture flipping the middle finger",
                        "background": "Neon LEDs verdes intensos"
                    },
                    "frame_3_bottom": {
                        "shot": "Side-profile close-up",
                        "outfit": "Bucket hat + round goggles",
                        "accion": "Cigarette with glowing ember (opcional: safe version sin humo)",
                        "luz": "Rostro medio oculto en sombras noir"
                    }
                },
                "I_Iluminacion": {
                    "tipo": "Green neon dominant lighting con noir contrast.",
                    "caracteristicas": [
                        "Glow verde intenso como color principal",
                        "High ISO gritty realism",
                        "Sombras profundas con slices de luz cinematográfica"
                    ],
                    "efecto": "Cyberpunk underground editorial mood."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Rebelde, oscuro, introspectivo, callejero.",
                    "tono": "Hip-hop underground + noir cyberpunk cinematic sequence."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Dark cyberpunk noir portrait sequence, gritty street fashion editorial.",
                    "detalles": [
                        "Film grain heavy",
                        "Motion blur neon streaks",
                        "Raw handheld camera feel",
                        "Shallow depth of field"
                    ],
                    "acabado": "Moody, high-contrast, underground aesthetic.",
                    "calidad": "Ultra-realistic 8K con texturas crudas y cinematográficas."
                },
                "M_Composicion_Camara": {
                    "layout": "Three-frame vertical sequence (top/middle/bottom).",
                    "enfoque": "Sharp facial identity preserved in all frames.",
                    "lentes": "Close-ups + medium shot con DOF shallow.",
                    "encuadre": "Cada frame variado pero coherente en estética neon noir."
                },
                "P_Postproduccion": {
                    "color_grading": "Dominante verde neón + negros profundos noir.",
                    "contraste": "Alto para estética underground.",
                    "textura": "Grano fuerte + high ISO film look.",
                    "acabado_final": "Ultra-realistic 8K cyberpunk noir triptych sequence con identidad preservada."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "expert",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/cyberpunk-noir-sequence.jpg",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-cyberpunk", name: "Cyberpunk", slug: "cyberpunk" },
            { id: "t-noir", name: "Noir", slug: "noir" }
        ]
    },
    {
        id: "lifestyle-7",
        type: "prompt",
        title: "Overhead Cozy Sofa Portrait — Morning Sunbeam Basement Scene",
        slug: "overhead-cozy-sofa",
        summary: "Ultra-realistic 8K overhead sofa portrait con atmósfera tranquila y cinematográfica.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rostro, peinado, tono de piel y todos los rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona recostada en un ambiente cozy e íntimo, retrato lifestyle cinematográfico.
- **Expresión:** Sleepy gaze, calmada, relajada.
- **Vestimenta:**
  - Outfit: Comfortable sweater casual
- **Accesorios:**
  - Headphones: Audífonos puestos mientras descansa
- **Detalle piel:** Textura natural realista en piel, cabello y ropa.
- **Calidad:** Ultra-realistic 8K overhead lifestyle portrait rendering con detalle extremo.

## E: Entorno
- **Ubicación:** Basement corner cozy con silla tipo sofá.
- **Props narrativos:**
  - Open magazine sobre el regazo
  - Libros apilados al lado del sujeto
- **Atmósfera:** Interior cálido, íntimo, silencioso, morning calm.

## A: Acción / Postura
- **Pose:** Acostado/a en la silla sofá, brazos detrás de la cabeza.
- **Lenguaje corporal:** Relajación total, momento de descanso.
- **Detalle:** Revista abierta en el regazo, libros acompañando la escena.

## I: Iluminación
- **Tipo:** Morning cinematic sunbeam.
- **Fuente:** Rayo de sol entrando desde una ventana en el techo.
- **Características:**
  - Soft natural shadows sobre piel y ropa
  - Iluminación cálida de mañana
  - Contraste suave cinematográfico
- **Efecto:** Texturas realistas resaltadas con luz natural delicada.

## S: Sensación / Atmósfera
- **Mood:** Cozy, sleepy, introspectivo, tranquilo.
- **Tono:** Cinematic morning calm con vibe hogareña.

## E: Estilo Visual
- **Estilo general:** Overhead cinematic lifestyle photography ultra realista.
- **Detalles:**
  - Textura de piel y cabello realista
  - Tela del sweater definida
  - Props cotidianos (magazine + books)
  - Sunbeam cinematográfico suave
- **Acabado:** Natural, cálido, sin sobreprocesado.
- **Calidad:** Ultra-realistic 8K con detalle premium en entorno y sujeto.

## M: Composición / Cámara
- **Aspect Ratio:** 4:5
- **Ángulo:** Overhead top-down cinematic shot.
- **Plano:** Full-body recostado en chair-sofa, composición íntima.
- **Encuadre:** Sujeto centrado con props alrededor para storytelling visual.
- **Enfoque:** Sharp focus en rostro y cuerpo; fondo suave pero detallado.

## P: Postproducción
- **Color grading:** Warm morning tones con mood cinematográfico suave.
- **Contraste:** Moderado-natural para mantener autenticidad cozy.
- **Nitidez:** Alta definición en piel, textiles, magazine y libros.
- **Acabado final:** Ultra-realistic 8K overhead sofa portrait con atmósfera tranquila y cinematográfica.
`,
        prompt_text: JSON.stringify({
            "title": "Overhead Cozy Sofa Portrait — Morning Sunbeam Basement Scene",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener rostro, peinado, tono de piel y todos los rasgos físicos exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Persona recostada en un ambiente cozy e íntimo, retrato lifestyle cinematográfico.",
                    "expresion": "Sleepy gaze, calmada, relajada.",
                    "vestimenta": {
                        "outfit": "Comfortable sweater casual"
                    },
                    "accesorios": {
                        "headphones": "Audífonos puestos mientras descansa"
                    },
                    "detalle_piel": "Textura natural realista en piel, cabello y ropa.",
                    "calidad": "Ultra-realistic 8K overhead lifestyle portrait rendering con detalle extremo."
                },
                "E_Entorno": {
                    "ubicacion": "Basement corner cozy con silla tipo sofá.",
                    "props_narrativos": [
                        "Open magazine sobre el regazo",
                        "Libros apilados al lado del sujeto"
                    ],
                    "atmósfera": "Interior cálido, íntimo, silencioso, morning calm."
                },
                "A_Accion_Postura": {
                    "pose": "Acostado/a en la silla sofá, brazos detrás de la cabeza.",
                    "lenguaje_corporal": "Relajación total, momento de descanso.",
                    "detalle": "Revista abierta en el regazo, libros acompañando la escena."
                },
                "I_Iluminacion": {
                    "tipo": "Morning cinematic sunbeam.",
                    "fuente": "Rayo de sol entrando desde una ventana en el techo.",
                    "caracteristicas": [
                        "Soft natural shadows sobre piel y ropa",
                        "Iluminación cálida de mañana",
                        "Contraste suave cinematográfico"
                    ],
                    "efecto": "Texturas realistas resaltadas con luz natural delicada."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cozy, sleepy, introspectivo, tranquilo.",
                    "tono": "Cinematic morning calm con vibe hogareña."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Overhead cinematic lifestyle photography ultra realista.",
                    "detalles": [
                        "Textura de piel y cabello realista",
                        "Tela del sweater definida",
                        "Props cotidianos (magazine + books)",
                        "Sunbeam cinematográfico suave"
                    ],
                    "acabado": "Natural, cálido, sin sobreprocesado.",
                    "calidad": "Ultra-realistic 8K con detalle premium en entorno y sujeto."
                },
                "M_Composicion_Camara": {
                    "aspect_ratio": "4:5",
                    "angulo": "Overhead top-down cinematic shot.",
                    "plano": "Full-body recostado en chair-sofa, composición íntima.",
                    "encuadre": "Sujeto centrado con props alrededor para storytelling visual.",
                    "enfoque": "Sharp focus en rostro y cuerpo; fondo suave pero detallado."
                },
                "P_Postproduccion": {
                    "color_grading": "Warm morning tones con mood cinematográfico suave.",
                    "contraste": "Moderado-natural para mantener autenticidad cozy.",
                    "nitidez": "Alta definición en piel, textiles, magazine y libros.",
                    "acabado_final": "Ultra-realistic 8K overhead sofa portrait con atmósfera tranquila y cinematográfica."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/overhead-cozy-sofa.jpg",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-home", name: "Home", slug: "home" },
            { id: "t-cozy", name: "Cozy", slug: "cozy" }
        ]
    },
    {
        id: "fashion-3",
        type: "prompt",
        title: "Fragile Tape Couture Portrait — Yellow Avant-Garde Editorial Concept",
        slug: "fragile-tape-couture",
        summary: "Ultra-realistic 8K fragile tape couture portrait con estética editorial conceptual premium.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión, tipo corporal y todos los rasgos físicos exactamente idénticos.
- **Preservación total:** No cambiar ni editar ningún aspecto físico bajo ninguna circunstancia.
- **Sujeto:** Persona glamorosa en sesión editorial conceptual de alta moda.
- **Piel:** Soft dewy glow natural bajo luz profesional.
- **Outfit:**
  - Concepto: Avant-garde couture hecho completamente de cinta amarilla con texto 'FRAGILE'
  - Top: Structured strapless top formado con caution tape
  - Bottom: High-waisted shorts estilo modern sando set
- **Estilo:** Fashion magazine conceptual, chic y moderno.
- **Calidad:** Ultra-realistic 8K high-fashion portrait rendering con detalle extremo.

## E: Entorno
- **Fondo:** Minimalist pastel studio wall limpio, sin objetos adicionales.
- **Escena:** Set editorial conceptual con paleta suave para resaltar el amarillo vibrante.
- **Elemento artístico:**
  - Foreground: Una tira diagonal de 'FRAGILE' tape cruzando el primer plano como composición visual.

## A: Acción / Postura
- **Pose:** De pie, fuerte y statuesque, postura alta y elegante.
- **Posición:** Apoyada suavemente contra una pared pastel limpia.
- **Brazos:** Relajados a los lados.
- **Expresión:** Mirada sutilmente segura, calmada, self-assured editorial.

## I: Iluminación
- **Tipo:** Soft studio lighting editorial-grade, flattering y profesional.
- **Características:**
  - Sombras suaves cinematográficas
  - Glow natural en piel
  - Textura definida en cinta amarilla
- **Efecto:** Look high-fashion limpio y conceptual.

## S: Sensación / Atmósfera
- **Mood:** Confident, avant-garde, chic, editorial.
- **Tono:** Conceptual fashion portrait con presencia moderna y artística.

## E: Estilo Visual
- **Estilo general:** Photorealistic fashion magazine editorial con couture surreal.
- **Detalles:**
  - Cinta FRAGILE como material de outfit estructurado
  - Foreground diagonal tape stripe para composición artística
  - Fondo pastel minimalista como contraste suave
- **Acabado:** High-fashion conceptual, Vogue-level modern styling.
- **Calidad:** Ultra-realistic 8K ultra-high detail editorial aesthetic.

## M: Composición / Cámara
- **Plano:** Full-body o three-quarter fashion portrait mostrando outfit completo.
- **Ángulo:** Eye-level neutral para postura statuesque.
- **Encuadre:** Sujeto centrado con foreground diagonal tape como elemento dinámico.
- **Enfoque:** Sharp focus en rostro y outfit; background limpio con depth suave.

## P: Postproducción
- **Color grading:** Pastel minimal background + amarillo brillante dominante.
- **Contraste:** Moderado-clean para look fashion magazine.
- **Nitidez:** Alta definición en piel, cinta, textura y contornos faciales.
- **Acabado final:** Ultra-realistic 8K fragile tape couture portrait con estética editorial conceptual premium.
`,
        prompt_text: JSON.stringify({
            "title": "Fragile Tape Couture Portrait — Yellow Avant-Garde Editorial Concept",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión, tipo corporal y todos los rasgos físicos exactamente idénticos.",
                    "preservacion_total": "No cambiar ni editar ningún aspecto físico bajo ninguna circunstancia.",
                    "sujeto": "Persona glamorosa en sesión editorial conceptual de alta moda.",
                    "piel": "Soft dewy glow natural bajo luz profesional.",
                    "outfit": {
                        "concepto": "Avant-garde couture hecho completamente de cinta amarilla con texto 'FRAGILE'",
                        "top": "Structured strapless top formado con caution tape",
                        "bottom": "High-waisted shorts estilo modern sando set"
                    },
                    "estilo": "Fashion magazine conceptual, chic y moderno.",
                    "calidad": "Ultra-realistic 8K high-fashion portrait rendering con detalle extremo."
                },
                "E_Entorno": {
                    "fondo": "Minimalist pastel studio wall limpio, sin objetos adicionales.",
                    "escena": "Set editorial conceptual con paleta suave para resaltar el amarillo vibrante.",
                    "elemento_artistico": {
                        "foreground": "Una tira diagonal de 'FRAGILE' tape cruzando el primer plano como composición visual"
                    }
                },
                "A_Accion_Postura": {
                    "pose": "De pie, fuerte y statuesque, postura alta y elegante.",
                    "posicion": "Apoyada suavemente contra una pared pastel limpia.",
                    "brazos": "Relajados a los lados.",
                    "expresion": "Mirada sutilmente segura, calmada, self-assured editorial."
                },
                "I_Iluminacion": {
                    "tipo": "Soft studio lighting editorial-grade, flattering y profesional.",
                    "caracteristicas": [
                        "Sombras suaves cinematográficas",
                        "Glow natural en piel",
                        "Textura definida en cinta amarilla"
                    ],
                    "efecto": "Look high-fashion limpio y conceptual."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Confident, avant-garde, chic, editorial.",
                    "tono": "Conceptual fashion portrait con presencia moderna y artística."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Photorealistic fashion magazine editorial con couture surreal.",
                    "detalles": [
                        "Cinta FRAGILE como material de outfit estructurado",
                        "Foreground diagonal tape stripe para composición artística",
                        "Fondo pastel minimalista como contraste suave"
                    ],
                    "acabado": "High-fashion conceptual, Vogue-level modern styling.",
                    "calidad": "Ultra-realistic 8K ultra-high detail editorial aesthetic."
                },
                "M_Composicion_Camara": {
                    "plano": "Full-body o three-quarter fashion portrait mostrando outfit completo.",
                    "angulo": "Eye-level neutral para postura statuesque.",
                    "encuadre": "Sujeto centrado con foreground diagonal tape como elemento dinámico.",
                    "enfoque": "Sharp focus en rostro y outfit; background limpio con depth suave."
                },
                "P_Postproduccion": {
                    "color_grading": "Pastel minimal background + amarillo brillante dominante.",
                    "contraste": "Moderado-clean para look fashion magazine.",
                    "nitidez": "Alta definición en piel, cinta, textura y contornos faciales.",
                    "acabado_final": "Ultra-realistic 8K fragile tape couture portrait con estética editorial conceptual premium."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/fragile-tape-couture.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fashion", name: "Fashion", slug: "fashion" },
            { id: "t-concept", name: "Concept", slug: "concept" },
            { id: "t-avantgarde", name: "Avant-Garde", slug: "avant-garde" }
        ]
    },
    {
        id: "editorial-9",
        type: "prompt",
        title: "Dual Split-Light Profile Portrait — Gold Top Light + Neon Blue Jaw Glow",
        slug: "dual-split-light-portrait",
        summary: "Ultra-realistic 8K split-light profile portrait con mood etéreo editorial y contraste gold/blue.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.
- **Preservación total:** No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Detalle facial:**
  - Naturalidad: Preservar todos los detalles naturales: arrugas, microexpresiones, textura real de piel.
  - Realismo: Skin textured para realismo máximo, sin smoothing artificial.
- **Sujeto:** Retrato de perfil contemplativo, high-fashion y etéreo.
- **Expresión:** Pensativa, mirando hacia arriba y alejándose de la cámara.
- **Calidad:** Ultra-realistic 8K close-up portrait rendering con fidelidad absoluta.

## E: Entorno
- **Fondo:** Dark minimalist background sin elementos distractores.
- **Escena:** Estudio editorial moody con atmósfera etérea.
- **Objetivo:** Aislar el rostro como punto emocional central.

## A: Acción / Postura
- **Pose:** Profile close-up, rostro ligeramente inclinado hacia arriba.
- **Mirada:** Ojos dirigidos upward y away del lente.
- **Lenguaje corporal:** Quietud introspectiva, elegancia escultórica.

## I: Iluminación
- **Tipo:** Dramatic split-lighting dual-tone cinematográfico.
- **Esquema:**
  - Gold light: Vibrant glowing gold light iluminando la parte superior del rostro.
  - Neon blue light: Cool neon blue glow suave en mandíbula y cuello.
- **Efecto:**
  - Contraste fuerte cálido vs frío
  - Contornos faciales esculpidos con precisión
  - Mood high-fashion nocturno

## S: Sensación / Atmósfera
- **Mood:** Moody, ethereal, contemplativo.
- **Tono:** High-fashion editorial con aura misteriosa y elegante.

## E: Estilo Visual
- **Estilo general:** Photorealistic cinematic studio portrait con iluminación dual.
- **Detalles:**
  - Glow dorado intenso arriba
  - Neón azul frío en mandíbula
  - Textura realista de piel y detalle ocular
- **Acabado:** Editorial premium, moderno, elegante, surreal-light.
- **Calidad:** Ultra-realistic 8K con estética Vogue-level.

## M: Composición / Cámara
- **Plano:** Close-up profile portrait.
- **Enfoque:** Sharp focus extremo en el ojo como ancla emocional.
- **Profundidad de campo:** Shallow DOF cinematográfico, fondo completamente suave.
- **Encuadre:** Perfil dominante con espacio negativo oscuro alrededor.

## P: Postproducción
- **Color grading:** Dual-tone gold + neon blue con contraste cinematográfico limpio.
- **Nitidez:** Máxima definición en ojo, piel, contornos faciales.
- **Contraste:** High-fashion dramatic, deep blacks controlados.
- **Acabado final:** Ultra-realistic 8K split-light profile portrait con mood etéreo editorial.
`,
        prompt_text: JSON.stringify({
            "title": "Dual Split-Light Profile Portrait — Gold Top Light + Neon Blue Jaw Glow",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.",
                    "preservacion_total": "No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
                    "detalle_facial": {
                        "naturalidad": "Preservar todos los detalles naturales: arrugas, microexpresiones, textura real de piel.",
                        "realismo": "Skin textured para realismo máximo, sin smoothing artificial."
                    },
                    "sujeto": "Retrato de perfil contemplativo, high-fashion y etéreo.",
                    "expresion": "Pensativa, mirando hacia arriba y alejándose de la cámara.",
                    "calidad": "Ultra-realistic 8K close-up portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "fondo": "Dark minimalist background sin elementos distractores.",
                    "escena": "Estudio editorial moody con atmósfera etérea.",
                    "objetivo": "Aislar el rostro como punto emocional central."
                },
                "A_Accion_Postura": {
                    "pose": "Profile close-up, rostro ligeramente inclinado hacia arriba.",
                    "mirada": "Ojos dirigidos upward y away del lente.",
                    "lenguaje_corporal": "Quietud introspectiva, elegancia escultórica."
                },
                "I_Iluminacion": {
                    "tipo": "Dramatic split-lighting dual-tone cinematográfico.",
                    "esquema": {
                        "gold_light": "Vibrant glowing gold light iluminando la parte superior del rostro.",
                        "neon_blue_light": "Cool neon blue glow suave en mandíbula y cuello."
                    },
                    "efecto": [
                        "Contraste fuerte cálido vs frío",
                        "Contornos faciales esculpidos con precisión",
                        "Mood high-fashion nocturno"
                    ]
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Moody, ethereal, contemplativo.",
                    "tono": "High-fashion editorial con aura misteriosa y elegante."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Photorealistic cinematic studio portrait con iluminación dual.",
                    "detalles": [
                        "Glow dorado intenso arriba",
                        "Neón azul frío en mandíbula",
                        "Textura realista de piel y detalle ocular"
                    ],
                    "acabado": "Editorial premium, moderno, elegante, surreal-light.",
                    "calidad": "Ultra-realistic 8K con estética Vogue-level."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up profile portrait.",
                    "enfoque": "Sharp focus extremo en el ojo como ancla emocional.",
                    "profundidad_de_campo": "Shallow DOF cinematográfico, fondo completamente suave.",
                    "encuadre": "Perfil dominante con espacio negativo oscuro alrededor."
                },
                "P_Postproduccion": {
                    "color_grading": "Dual-tone gold + neon blue con contraste cinematográfico limpio.",
                    "nitidez": "Máxima definición en ojo, piel, contornos faciales.",
                    "contraste": "High-fashion dramatic, deep blacks controlados.",
                    "acabado_final": "Ultra-realistic 8K split-light profile portrait con mood etéreo editorial."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/dual-split-light-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-lighting", name: "Lighting", slug: "lighting" },
            { id: "t-creative", name: "Creative", slug: "creative" }
        ]
    },
    {
        id: "fantasy-1",
        type: "prompt",
        title: "Cloud Fantasy Ethereal Portrait — Soft Blue Purple Heavenly Mood",
        slug: "cloud-fantasy-portrait",
        summary: "Ultra-realistic 8K cloud fantasy portrait con mood celestial sereno y fidelidad absoluta.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, color, longitud, textura, tono de piel, tipo corporal, tattoos y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Fidelidad absoluta:**
  - Rostro 100% idéntico
  - Cabello idéntico en color, longitud, textura y estilo
  - Expresión idéntica
  - Tatuajes preservados exactamente
  - Proporciones corporales sin cambios
- **Sujeto:** Retrato etéreo y celestial, identidad completamente bloqueada.
- **Cabello lock:**
  - Instrucción: Cabello debe coincidir exactamente con la referencia.
  - Detalle: Ondulado largo con sutiles braids enmarcando el rostro (solo si existen en referencia).
- **Accesorios:**
  - Necklace: Delicado collar dorado
  - Bracelet: Pulsera dorada elegante
- **Styling safe:** Tasteful fantasy portrait, no explicit nudity, shoulders softly obscured by clouds.
- **Calidad:** Ultra-realistic 8K fantasy editorial portrait rendering con detalle extremo.

## E: Entorno
- **Escena:** Cama whimsical de nubes fluffy blancas y púrpura claro.
- **Elementos:**
  - Soft cloud texture envolviendo parcialmente al sujeto
  - Celestial dreamy atmosphere
- **Fondo:** Smooth gradient background en tonos azul suave y púrpura pastel.
- **Objetivo:** Crear sensación heavenly y otherworldly elegante.

## A: Acción / Postura
- **Pose:** Emergiendo suavemente desde las nubes, composición íntima.
- **Mirada:** Mirando hacia arriba y ligeramente de lado.
- **Expresión:** Serena, contemplativa, calmada.
- **Lenguaje corporal:** Quietud celestial, fragilidad elegante.

## I: Iluminación
- **Tipo:** Soft diffused studio lighting.
- **Características:**
  - Luz envolvente sin sombras duras
  - Highlights suaves sobre piel y cabello
  - Glow natural sobre nubes
- **Efecto:** Resalta rasgos faciales con naturalidad y pureza.

## S: Sensación / Atmósfera
- **Mood:** Heavenly, dreamy, serene, otherworldly.
- **Tono:** Fantasy editorial con calma emocional y poesía visual.

## E: Estilo Visual
- **Estilo general:** Magical realism fantasy portrait con estética editorial elegante.
- **Detalles:**
  - Textura fluffy ultra realista en nubes
  - Degradados pastel suaves en background
  - Joyas doradas delicadas como acentos premium
- **Paleta:** Blanco + lila claro + azul pastel + dorado suave.
- **Calidad:** Ultra-realistic 8K con acabado celestial de lujo.

## M: Composición / Cámara
- **Plano:** Close-up a medium close portrait emergiendo de clouds.
- **Encuadre:** Rostro dominante centrado, nubes enmarcando hombros.
- **Enfoque:** Tack-sharp en ojos y piel; nubes suaves con depth controlado.
- **Profundidad de campo:** Shallow DOF cinematográfico dreamy.

## P: Postproducción
- **Color grading:** Pastel heavenly tones con glow suave.
- **Contraste:** Bajo-moderado para mantener delicadeza etérea.
- **Nitidez:** Alta definición en rostro, cabello y tattoos preservados.
- **Acabado final:** Ultra-realistic 8K cloud fantasy portrait con mood celestial sereno y fidelidad absoluta.
`,
        prompt_text: JSON.stringify({
            "title": "Cloud Fantasy Ethereal Portrait — Soft Blue Purple Heavenly Mood",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, color, longitud, textura, tono de piel, tipo corporal, tattoos y expresión exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "fidelidad_absoluta": [
                        "Rostro 100% idéntico",
                        "Cabello idéntico en color, longitud, textura y estilo",
                        "Expresión idéntica",
                        "Tatuajes preservados exactamente",
                        "Proporciones corporales sin cambios"
                    ],
                    "sujeto": "Retrato etéreo y celestial, identidad completamente bloqueada.",
                    "cabello_lock": {
                        "instruccion": "Cabello debe coincidir exactamente con la referencia.",
                        "detalle": "Ondulado largo con sutiles braids enmarcando el rostro (solo si existen en referencia)."
                    },
                    "accesorios": {
                        "necklace": "Delicado collar dorado",
                        "bracelet": "Pulsera dorada elegante"
                    },
                    "styling_safe": "Tasteful fantasy portrait, no explicit nudity, shoulders softly obscured by clouds.",
                    "calidad": "Ultra-realistic 8K fantasy editorial portrait rendering con detalle extremo."
                },
                "E_Entorno": {
                    "escena": "Cama whimsical de nubes fluffy blancas y púrpura claro.",
                    "elementos": [
                        "Soft cloud texture envolviendo parcialmente al sujeto",
                        "Celestial dreamy atmosphere"
                    ],
                    "fondo": "Smooth gradient background en tonos azul suave y púrpura pastel.",
                    "objetivo": "Crear sensación heavenly y otherworldly elegante."
                },
                "A_Accion_Postura": {
                    "pose": "Emergiendo suavemente desde las nubes, composición íntima.",
                    "mirada": "Mirando hacia arriba y ligeramente de lado.",
                    "expresion": "Serena, contemplativa, calmada.",
                    "lenguaje_corporal": "Quietud celestial, fragilidad elegante."
                },
                "I_Iluminacion": {
                    "tipo": "Soft diffused studio lighting.",
                    "caracteristicas": [
                        "Luz envolvente sin sombras duras",
                        "Highlights suaves sobre piel y cabello",
                        "Glow natural sobre nubes"
                    ],
                    "efecto": "Resalta rasgos faciales con naturalidad y pureza."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Heavenly, dreamy, serene, otherworldly.",
                    "tono": "Fantasy editorial con calma emocional y poesía visual."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Magical realism fantasy portrait con estética editorial elegante.",
                    "detalles": [
                        "Textura fluffy ultra realista en nubes",
                        "Degradados pastel suaves en background",
                        "Joyas doradas delicadas como acentos premium"
                    ],
                    "paleta": "Blanco + lila claro + azul pastel + dorado suave.",
                    "calidad": "Ultra-realistic 8K con acabado celestial de lujo."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up a medium close portrait emergiendo de clouds.",
                    "encuadre": "Rostro dominante centrado, nubes enmarcando hombros.",
                    "enfoque": "Tack-sharp en ojos y piel; nubes suaves con depth controlado.",
                    "profundidad_de_campo": "Shallow DOF cinematográfico dreamy."
                },
                "P_Postproduccion": {
                    "color_grading": "Pastel heavenly tones con glow suave.",
                    "contraste": "Bajo-moderado para mantener delicadeza etérea.",
                    "nitidez": "Alta definición en rostro, cabello y tattoos preservados.",
                    "acabado_final": "Ultra-realistic 8K cloud fantasy portrait con mood celestial sereno y fidelidad absoluta."
                }
            }
        }, null, 2),
        category: "Fantasy",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/cloud-fantasy-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fantasy", name: "Fantasy", slug: "fantasy" },
            { id: "t-ethereal", name: "Ethereal", slug: "ethereal" },
            { id: "t-pastel", name: "Pastel", slug: "pastel" }
        ]
    },
    {
        id: "fashion-2",
        type: "prompt",
        title: "Violet Monochrome Diva Portrait — Lavender Fur Y2K Glam Editorial",
        slug: "violet-monochrome-diva",
        summary: "Ultra-realistic 8K violet diva portrait con estética editorial glam de lujo.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rostro, cabello, tono de piel y todos los rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún aspecto físico bajo ninguna circunstancia.
- **Fidelidad reforzada:**
  - No cambiar el rostro
  - No cambiar el tono de piel
  - No cambiar la estructura facial
  - No cambiar ningún rasgo corporal
- **Cabello lock:**
  - Instrucción: Usar el cabello exactamente como en la referencia.
  - Restricción: No cambiar color, longitud, textura ni estilo bajo ninguna circunstancia.
- **Sujeto:** Mujer glamorosa estilo diva editorial.
- **Makeup:**
  - Ojos: Shimmering lavender eyeshadow
  - Delineado: Bold winged eyeliner
  - Labios: Glossy peach lips
  - Piel: Luminous dewy skin con acabado beauty premium
- **Accesorios:**
  - Aretes: Oversized silver hoop earrings
  - Uñas: Long decorated nails con metallic rings
- **Vestimenta:**
  - Outfit: Lavender faux fur coat lujoso drapeado sobre los hombros
  - Armonía: Monochrome harmony con el fondo violeta
- **Calidad:** Ultra-realistic 8K beauty fashion portrait rendering con detalle extremo.

## E: Entorno
- **Fondo:** Bold violet solid background, limpio y saturado.
- **Escena:** Estudio minimalista sin props adicionales.
- **Objetivo:** Enfatizar estética monochrome glam y presencia editorial.

## A: Acción / Postura
- **Pose:** Postura glamorosa, elegante, con presencia de portada.
- **Expresión:** Segura, confiada, diva moderna.
- **Lenguaje corporal:** Calma poderosa, estilo editorial sofisticado.

## I: Iluminación
- **Tipo:** Clean studio lighting estilo beauty editorial.
- **Características:**
  - Iluminación uniforme resaltando maquillaje
  - Highlights suaves sobre piel dewy
  - Textura definida en fur coat y accesorios
- **Efecto:** Glow premium tipo portada de revista.

## S: Sensación / Atmósfera
- **Mood:** Elegante, confiada, stylish, luxury diva.
- **Tono:** Editorial magazine cover aesthetic con vibra Y2K glam.

## E: Estilo Visual
- **Estilo general:** High-fashion beauty editorial portrait con acabado glossy.
- **Styling Vibes:**
  - Y2K glam
  - Modern diva
  - Monochrome fashion luxury
  - Cover-ready magazine aesthetic
- **Detalles:**
  - Background violeta saturado
  - Lavender fur coat luxe
  - Makeup shimmer ultra definido
  - Accesorios silver bold
- **Calidad:** Ultra-realistic 8K Vogue-level beauty portrait.

## M: Composición / Cámara
- **Plano:** Close-up beauty portrait tipo portada.
- **Ángulo:** Eye-level directo para impacto editorial.
- **Encuadre:** Rostro y hombros dominantes, fur coat enmarcando composición.
- **Enfoque:** Tack-sharp en ojos, labios glossy, piel dewy y accesorios.

## P: Postproducción
- **Color grading:** Monochrome violet-lavender luxury palette con gloss refinado.
- **Nitidez:** Alta definición en piel, maquillaje, uñas y textura del fur.
- **Contraste:** Moderado-clean para look beauty magazine.
- **Acabado final:** Ultra-realistic 8K violet diva portrait con estética editorial glam de lujo.
`,
        prompt_text: JSON.stringify({
            "title": "Violet Monochrome Diva Portrait — Lavender Fur Y2K Glam Editorial",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener rostro, cabello, tono de piel y todos los rasgos físicos exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún aspecto físico bajo ninguna circunstancia.",
                    "fidelidad_reforzada": [
                        "No cambiar el rostro",
                        "No cambiar el tono de piel",
                        "No cambiar la estructura facial",
                        "No cambiar ningún rasgo corporal"
                    ],
                    "cabello_lock": {
                        "instruccion": "Usar el cabello exactamente como en la referencia.",
                        "restriccion": "No cambiar color, longitud, textura ni estilo bajo ninguna circunstancia."
                    },
                    "sujeto": "Mujer glamorosa estilo diva editorial.",
                    "makeup": {
                        "ojos": "Shimmering lavender eyeshadow",
                        "delineado": "Bold winged eyeliner",
                        "labios": "Glossy peach lips",
                        "piel": "Luminous dewy skin con acabado beauty premium"
                    },
                    "accesorios": {
                        "aretes": "Oversized silver hoop earrings",
                        "uñas": "Long decorated nails con metallic rings"
                    },
                    "vestimenta": {
                        "outfit": "Lavender faux fur coat lujoso drapeado sobre los hombros",
                        "armonía": "Monochrome harmony con el fondo violeta"
                    },
                    "calidad": "Ultra-realistic 8K beauty fashion portrait rendering con detalle extremo."
                },
                "E_Entorno": {
                    "fondo": "Bold violet solid background, limpio y saturado.",
                    "escena": "Estudio minimalista sin props adicionales.",
                    "objetivo": "Enfatizar estética monochrome glam y presencia editorial."
                },
                "A_Accion_Postura": {
                    "pose": "Postura glamorosa, elegante, con presencia de portada.",
                    "expresion": "Segura, confiada, diva moderna.",
                    "lenguaje_corporal": "Calma poderosa, estilo editorial sofisticado."
                },
                "I_Iluminacion": {
                    "tipo": "Clean studio lighting estilo beauty editorial.",
                    "caracteristicas": [
                        "Iluminación uniforme resaltando maquillaje",
                        "Highlights suaves sobre piel dewy",
                        "Textura definida en fur coat y accesorios"
                    ],
                    "efecto": "Glow premium tipo portada de revista."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Elegante, confiada, stylish, luxury diva.",
                    "tono": "Editorial magazine cover aesthetic con vibra Y2K glam."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "High-fashion beauty editorial portrait con acabado glossy.",
                    "styling_vibes": [
                        "Y2K glam",
                        "Modern diva",
                        "Monochrome fashion luxury",
                        "Cover-ready magazine aesthetic"
                    ],
                    "detalles": [
                        "Background violeta saturado",
                        "Lavender fur coat luxe",
                        "Makeup shimmer ultra definido",
                        "Accesorios silver bold"
                    ],
                    "calidad": "Ultra-realistic 8K Vogue-level beauty portrait."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up beauty portrait tipo portada.",
                    "angulo": "Eye-level directo para impacto editorial.",
                    "encuadre": "Rostro y hombros dominantes, fur coat enmarcando composición.",
                    "enfoque": "Tack-sharp en ojos, labios glossy, piel dewy y accesorios."
                },
                "P_Postproduccion": {
                    "color_grading": "Monochrome violet-lavender luxury palette con gloss refinado.",
                    "nitidez": "Alta definición en piel, maquillaje, uñas y textura del fur.",
                    "contraste": "Moderado-clean para look beauty magazine.",
                    "acabado_final": "Ultra-realistic 8K violet diva portrait con estética editorial glam de lujo."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/violet-monochrome-diva.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fashion", name: "Fashion", slug: "fashion" },
            { id: "t-studio", name: "Studio", slug: "studio" },
            { id: "t-beauty", name: "Beauty", slug: "beauty" }
        ]
    },
    {
        id: "fashion-1",
        type: "prompt",
        title: "Modern Chair Studio Portrait — Black Coat + Denim Shorts Editorial",
        slug: "modern-chair-studio-portrait",
        summary: "Ultra-realistic 8K modern studio chair portrait con estética fashion minimal premium.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.
- **Preservación total:** No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.
- **Sujeto:** Mujer en retrato de estudio high-fashion editorial.
- **Vestimenta:**
  - Outerwear: Abrigo negro elegante
  - Bottom: Shorts de mezclilla (denim shorts)
- **Detalle piel:** Textura realista natural, sin filtros artificiales.
- **Cabello:** Conservar exactamente el hairstyle original de la referencia.
- **Calidad:** Ultra-realistic 8K studio fashion portrait rendering con máxima fidelidad.

## E: Entorno
- **Escena:** Estudio minimalista moderno con líneas limpias.
- **Fondo:** Neutral studio background sin props adicionales.
- **Paleta:** Colores neutros suaves para resaltar al sujeto y la ropa.

## A: Acción / Postura
- **Pose:** Sentada sobre una silla moderna única.
- **Lenguaje corporal:** Natural, elegante, enfatizando postura y poise.
- **Actitud:** Sofisticada, calmada, editorial.

## I: Iluminación
- **Tipo:** Soft diffused high-key studio lighting.
- **Características:**
  - Sombras suaves cinematográficas
  - Luz envolvente que esculpe rostro y cuerpo sutilmente
- **Efecto:** Look limpio y profesional sin dramatismo excesivo.

## S: Sensación / Atmósfera
- **Mood:** Sleek, moderno, elegante, editorial.
- **Tono:** High-fashion minimal studio portrait con estética atemporal.

## E: Estilo Visual
- **Estilo general:** Fotografía editorial moderna de alta moda.
- **Detalles:**
  - Texturas realistas en abrigo y denim
  - Piel y cabello con detalle extremo
  - Composición dinámica pero limpia
- **Acabado:** Professional studio fashion aesthetic, sleek and modern.
- **Calidad:** Ultra-realistic 8K con acabado premium Vogue-style.

## M: Composición / Cámara
- **Plano:** Plano medio a tres cuartos mostrando silla y outfit completo.
- **Ángulo:** Eye-level neutral con composición editorial dinámica.
- **Encuadre:** Sujeto centrado o ligeramente desplazado para tensión visual moderna.
- **Enfoque:** Tack-sharp focus en rostro, ropa y postura; fondo suave y limpio.

## P: Postproducción
- **Color grading:** Neutro cálido y elegante, sin saturación agresiva.
- **Contraste:** Suave-moderado para un look high-key editorial.
- **Nitidez:** Alta definición en piel, tela, cabello y bordes del chair design.
- **Acabado final:** Ultra-realistic 8K modern studio chair portrait con estética fashion minimal premium.
`,
        prompt_text: JSON.stringify({
            "title": "Modern Chair Studio Portrait — Black Coat + Denim Shorts Editorial",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.",
                    "preservacion_total": "No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.",
                    "sujeto": "Mujer en retrato de estudio high-fashion editorial.",
                    "vestimenta": {
                        "outerwear": "Abrigo negro elegante",
                        "bottom": "Shorts de mezclilla (denim shorts)"
                    },
                    "detalle_piel": "Textura realista natural, sin filtros artificiales.",
                    "cabello": "Conservar exactamente el hairstyle original de la referencia.",
                    "calidad": "Ultra-realistic 8K studio fashion portrait rendering con máxima fidelidad."
                },
                "E_Entorno": {
                    "escena": "Estudio minimalista moderno con líneas limpias.",
                    "fondo": "Neutral studio background sin props adicionales.",
                    "paleta": "Colores neutros suaves para resaltar al sujeto y la ropa."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada sobre una silla moderna única.",
                    "lenguaje_corporal": "Natural, elegante, enfatizando postura y poise.",
                    "actitud": "Sofisticada, calmada, editorial."
                },
                "I_Iluminacion": {
                    "tipo": "Soft diffused high-key studio lighting.",
                    "caracteristicas": [
                        "Sombras suaves cinematográficas",
                        "Luz envolvente que esculpe rostro y cuerpo sutilmente"
                    ],
                    "efecto": "Look limpio y profesional sin dramatismo excesivo."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Sleek, moderno, elegante, editorial.",
                    "tono": "High-fashion minimal studio portrait con estética atemporal."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía editorial moderna de alta moda.",
                    "detalles": [
                        "Texturas realistas en abrigo y denim",
                        "Piel y cabello con detalle extremo",
                        "Composición dinámica pero limpia"
                    ],
                    "acabado": "Professional studio fashion aesthetic, sleek and modern.",
                    "calidad": "Ultra-realistic 8K con acabado premium Vogue-style."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a tres cuartos mostrando silla y outfit completo.",
                    "angulo": "Eye-level neutral con composición editorial dinámica.",
                    "encuadre": "Sujeto centrado o ligeramente desplazado para tensión visual moderna.",
                    "enfoque": "Tack-sharp focus en rostro, ropa y postura; fondo suave y limpio."
                },
                "P_Postproduccion": {
                    "color_grading": "Neutro cálido y elegante, sin saturación agresiva.",
                    "contraste": "Suave-moderado para un look high-key editorial.",
                    "nitidez": "Alta definición en piel, tela, cabello y bordes del chair design.",
                    "acabado_final": "Ultra-realistic 8K modern studio chair portrait con estética fashion minimal premium."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/modern-chair-studio-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fashion", name: "Fashion", slug: "fashion" },
            { id: "t-studio", name: "Studio", slug: "studio" },
            { id: "t-minimal", name: "Minimal", slug: "minimal" }
        ]
    },
    {
        id: "lifestyle-6",
        type: "prompt",
        title: "Tropical Juice Selfie Portrait — Playful Summer Fashion + Fluffy Dog",
        slug: "tropical-juice-selfie",
        summary: "Ultra-realistic 8K tropical juice selfie portrait con mood veraniego playful.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos. Identidad bloqueada.
- **Preservación total:** No alterar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Joven mujer de cabello largo rojizo liso, estilo natural suelto.
- **Vestimenta:**
  - Top: Black brasiere editorial (summer fashion minimal look)
- **Expresión:** Casual, relajada, ligeramente juguetona.
- **Makeup:** Natural soft makeup, resaltando piel clara sin exageración.
- **Detalle facial:** Textura realista de piel con fidelidad absoluta.
- **Calidad:** Ultra-realistic 8K photorealistic lifestyle portrait rendering.

## E: Entorno
- **Escena:** Exterior tropical tipo vacaciones de verano.
- **Background:**
  - Estructuras de pabellón de madera
  - Árboles verdes frondosos
  - Vista parcial de palmera
  - Cielo azul brillante
- **Atmósfera:** Relaxed summer vacation vibe, cálido y alegre.

## A: Acción / Postura
- **Pose:** Selfie desde un ángulo frontal ligeramente bajo.
- **Acción principal:**
  - Objeto: Vaso plástico grande de jugo de naranja fresco
  - Detalle: Popote/pajilla rosa
  - Interacción: Acercándolo a los labios como si fuera a beber
- **Elemento secundario:**
  - Animal: Perro blanco fluffy al lado del sujeto
  - Expresión: Boca abierta, lengua afuera, alegre y vivaz
- **Lenguaje corporal:** Espontáneo, lifestyle, cute y natural.

## I: Iluminación
- **Tipo:** Luz natural diurna suave.
- **Características:** Warm gentle daylight con sombras ligeras.
- **Efecto:** Resalta piel, cabello y ambiente tropical sin dureza.

## S: Sensación / Atmósfera
- **Mood:** Playful, relajado, veraniego, alegre.
- **Tono:** Cinematic summer fashion selfie con ternura por el perro.

## E: Estilo Visual
- **Estilo general:** Ultra photorealistic cinematic lifestyle fashion portrait.
- **Detalles:**
  - Textura realista en piel y cabello
  - Juguito naranja vibrante con pajilla rosa
  - Perro fluffy con expresión alegre
  - Naturaleza tropical en background
- **Paleta:** Azules del cielo + verdes tropicales + naranja brillante + neutros elegantes.
- **Calidad:** Ultra-realistic 8K high-detail summer editorial aesthetic.

## M: Composición / Cámara
- **Aspect Ratio:** 9:16 vertical
- **Plano:** Upper-body selfie framing con rostro dominante.
- **Ángulo:** Slightly low front angle para vibe espontánea.
- **Enfoque:** Sharp focus en rostro, vaso y perro; fondo tropical suavemente desenfocado.

## P: Postproducción
- **Color grading:** Natural warm summer tones con look cinematográfico suave.
- **Contraste:** Moderado, sin sobreprocesado.
- **Nitidez:** Alta definición en rostro, cabello, bebida y textura del perro.
- **Acabado final:** Ultra-realistic 8K tropical juice selfie portrait con mood veraniego playful.
`,
        prompt_text: JSON.stringify({
            "title": "Tropical Juice Selfie Portrait — Playful Summer Fashion + Fluffy Dog",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado y tono de piel exactamente idénticos. Identidad bloqueada.",
                    "preservacion_total": "No alterar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Joven mujer de cabello largo rojizo liso, estilo natural suelto.",
                    "vestimenta": {
                        "top": "Black brasiere editorial (summer fashion minimal look)"
                    },
                    "expresion": "Casual, relajada, ligeramente juguetona.",
                    "makeup": "Natural soft makeup, resaltando piel clara sin exageración.",
                    "detalle_facial": "Textura realista de piel con fidelidad absoluta.",
                    "calidad": "Ultra-realistic 8K photorealistic lifestyle portrait rendering."
                },
                "E_Entorno": {
                    "escena": "Exterior tropical tipo vacaciones de verano.",
                    "background": [
                        "Estructuras de pabellón de madera",
                        "Árboles verdes frondosos",
                        "Vista parcial de palmera",
                        "Cielo azul brillante"
                    ],
                    "atmósfera": "Relaxed summer vacation vibe, cálido y alegre."
                },
                "A_Accion_Postura": {
                    "pose": "Selfie desde un ángulo frontal ligeramente bajo.",
                    "accion_principal": {
                        "objeto": "Vaso plástico grande de jugo de naranja fresco",
                        "detalle": "Popote/pajilla rosa",
                        "interaccion": "Acercándolo a los labios como si fuera a beber"
                    },
                    "elemento_secundario": {
                        "animal": "Perro blanco fluffy al lado del sujeto",
                        "expresion": "Boca abierta, lengua afuera, alegre y vivaz"
                    },
                    "lenguaje_corporal": "Espontáneo, lifestyle, cute y natural."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural diurna suave.",
                    "caracteristicas": "Warm gentle daylight con sombras ligeras.",
                    "efecto": "Resalta piel, cabello y ambiente tropical sin dureza."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Playful, relajado, veraniego, alegre.",
                    "tono": "Cinematic summer fashion selfie con ternura por el perro."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Ultra photorealistic cinematic lifestyle fashion portrait.",
                    "detalles": [
                        "Textura realista en piel y cabello",
                        "Juguito naranja vibrante con pajilla rosa",
                        "Perro fluffy con expresión alegre",
                        "Naturaleza tropical en background"
                    ],
                    "paleta": "Azules del cielo + verdes tropicales + naranja brillante + neutros elegantes.",
                    "calidad": "Ultra-realistic 8K high-detail summer editorial aesthetic."
                },
                "M_Composicion_Camara": {
                    "aspect_ratio": "9:16 vertical",
                    "plano": "Upper-body selfie framing con rostro dominante.",
                    "angulo": "Slightly low front angle para vibe espontánea.",
                    "enfoque": "Sharp focus en rostro, vaso y perro; fondo tropical suavemente desenfocado."
                },
                "P_Postproduccion": {
                    "color_grading": "Natural warm summer tones con look cinematográfico suave.",
                    "contraste": "Moderado, sin sobreprocesado.",
                    "nitidez": "Alta definición en rostro, cabello, bebida y textura del perro.",
                    "acabado_final": "Ultra-realistic 8K tropical juice selfie portrait con mood veraniego playful."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/tropical-juice-selfie.jpg",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-summer", name: "Summer", slug: "summer" },
            { id: "t-selfie", name: "Selfie", slug: "selfie" }
        ]
    },
    {
        id: "lifestyle-5",
        type: "prompt",
        title: "Night Pool Polaroid Portrait — Wet Hair Cinematic Film Mood",
        slug: "night-pool-polaroid-portrait",
        summary: "Ultra-realistic 8K authentic night pool Polaroid portrait con mood íntimo y delicado.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.
- **Preservación total:** No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato íntimo estilo Polaroid en piscina nocturna.
- **Detalle facial:**
  - Piel: Textura natural con pecas sutiles visibles
  - Labios: Glossy lips delicados
  - Cabello: Mojado, con gotas de agua reflejando la luz
- **Vestimenta:**
  - Outfit: Black bikini editorial (swimwear minimal)
  - Contexto: Parcialmente sumergida en el agua
- **Calidad:** Ultra-realistic 8K cinematic film portrait rendering con detalle extremo en piel y gotas.

## E: Entorno
- **Escena:** Piscina local durante la noche.
- **Atmósfera:** Dreamy, nostálgica, íntima, cinematográfica.
- **Agua:** Superficie oscura con reflejos suaves, sujeto parcialmente inmerso.

## A: Acción / Postura
- **Pose:** Postura tranquila dentro del agua, enfoque total en rostro y emoción.
- **Lenguaje corporal:** Serena, contemplativa, momento suspendido en el tiempo.
- **Detalle:** Gotas de agua en rostro y cabello glisten naturalmente.

## I: Iluminación
- **Tipo:** Soft cinematic lighting nocturna.
- **Características:**
  - Highlights suaves sobre gotas de agua
  - Sombras delicadas sin dureza
  - Mood íntimo tipo película analógica
- **Efecto:** Resalta textura de piel y atmósfera nostálgica.

## S: Sensación / Atmósfera
- **Mood:** Nostálgico, delicado, auténtico, dreamy.
- **Tono:** Polaroid night-swim cinematic moment.

## E: Estilo Visual
- **Estilo general:** Polaroid-style authentic analog film portrait.
- **Paleta:** Muted brown tones con color grading cálido tenue.
- **Texturas:**
  - Subtle film grain
  - Agua realista
  - Piel húmeda con brillo natural
- **Acabado:** Zero over-processing, look auténtico y suave.
- **Calidad:** Ultra-realistic 8K con estética film nostalgia.

## M: Composición / Cámara
- **Formato:** Aspect ratio 3:6 (vertical Polaroid framing).
- **Lente:** 85mm lens look
- **Apertura:** f/1.4 para detalle facial sharp + fondo suave
- **Plano:** Close-up a medium close portrait emergiendo del agua.
- **Enfoque:** Tack-sharp en ojos y rostro, agua suavemente desenfocada.

## P: Postproducción
- **Film look:** Analog Polaroid grain, nostalgic softness.
- **Color grading:** Muted brown cinematic tones.
- **Contraste:** Suave, evitando over-sharpening o HDR.
- **Acabado final:** Ultra-realistic 8K authentic night pool Polaroid portrait con mood íntimo y delicado.
`,
        prompt_text: JSON.stringify({
            "title": "Night Pool Polaroid Portrait — Wet Hair Cinematic Film Mood",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos a la referencia.",
                    "preservacion_total": "No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Retrato íntimo estilo Polaroid en piscina nocturna.",
                    "detalle_facial": {
                        "piel": "Textura natural con pecas sutiles visibles",
                        "labios": "Glossy lips delicados",
                        "cabello": "Mojado, con gotas de agua reflejando la luz"
                    },
                    "vestimenta": {
                        "outfit": "Black bikini editorial (swimwear minimal)",
                        "contexto": "Parcialmente sumergida en el agua"
                    },
                    "calidad": "Ultra-realistic 8K cinematic film portrait rendering con detalle extremo en piel y gotas."
                },
                "E_Entorno": {
                    "escena": "Piscina local durante la noche.",
                    "atmósfera": "Dreamy, nostálgica, íntima, cinematográfica.",
                    "agua": "Superficie oscura con reflejos suaves, sujeto parcialmente inmerso."
                },
                "A_Accion_Postura": {
                    "pose": "Postura tranquila dentro del agua, enfoque total en rostro y emoción.",
                    "lenguaje_corporal": "Serena, contemplativa, momento suspendido en el tiempo.",
                    "detalle": "Gotas de agua en rostro y cabello glisten naturalmente."
                },
                "I_Iluminacion": {
                    "tipo": "Soft cinematic lighting nocturna.",
                    "caracteristicas": [
                        "Highlights suaves sobre gotas de agua",
                        "Sombras delicadas sin dureza",
                        "Mood íntimo tipo película analógica"
                    ],
                    "efecto": "Resalta textura de piel y atmósfera nostálgica."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Nostálgico, delicado, auténtico, dreamy.",
                    "tono": "Polaroid night-swim cinematic moment."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Polaroid-style authentic analog film portrait.",
                    "paleta": "Muted brown tones con color grading cálido tenue.",
                    "texturas": [
                        "Subtle film grain",
                        "Agua realista",
                        "Piel húmeda con brillo natural"
                    ],
                    "acabado": "Zero over-processing, look auténtico y suave.",
                    "calidad": "Ultra-realistic 8K con estética film nostalgia."
                },
                "M_Composicion_Camara": {
                    "formato": "Aspect ratio 3:6 (vertical Polaroid framing).",
                    "lente": "85mm lens look",
                    "apertura": "f/1.4 para detalle facial sharp + fondo suave",
                    "plano": "Close-up a medium close portrait emergiendo del agua.",
                    "enfoque": "Tack-sharp en ojos y rostro, agua suavemente desenfocada."
                },
                "P_Postproduccion": {
                    "film_look": "Analog Polaroid grain, nostalgic softness.",
                    "color_grading": "Muted brown cinematic tones.",
                    "contraste": "Suave, evitando over-sharpening o HDR.",
                    "acabado_final": "Ultra-realistic 8K authentic night pool Polaroid portrait con mood íntimo y delicado."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/night-pool-polaroid-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-film", name: "Film", slug: "film" },
            { id: "t-polaroid", name: "Polaroid", slug: "polaroid" }
        ]
    },
    {
        id: "editorial-8",
        type: "prompt",
        title: "Butterfly Couture Surreal Portrait — High-Fashion Magical Realism",
        slug: "butterfly-couture-portrait",
        summary: "Ultra-realistic 8K surreal butterfly couture portrait con emoción editorial atemporal.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.
- **Preservación total:** No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.
- **Sujeto:** Mujer de presencia impactante vestida en alta costura surrealista.
- **Detalle piel:** Piel porcelana con textura realista natural, macro-detail.
- **Vestimenta:**
  - Outfit: Avant-garde couture gown cubierta con cientos de mariposas rosas delicadas
  - Detalle: Cada ala brilla como encaje frágil, estética etérea y elegante
- **Elemento fantástico:** Una cascada de mariposas luminosas emerge desde la parte posterior de su cabeza.
- **Calidad:** Ultra-realistic 8K hyper-detailed high-fashion portrait rendering.

## E: Entorno
- **Fondo:** Negro profundo, velvety black sin elementos distractores.
- **Escena:** Espacio vacío tipo estudio oscuro para amplificar contraste y fantasía.
- **Objetivo:** Resaltar la luminosidad de piel, mariposas y couture.

## A: Acción / Postura
- **Pose:** Postura dramática, cuello arqueado con elegancia escultórica.
- **Detalle:** Cabeza inclinada hacia atrás, labios ligeramente entreabiertos en emoción intensa.
- **Lenguaje corporal:** Transcendencia emocional, fragilidad y poder en equilibrio.

## I: Iluminación
- **Tipo:** Cinematic moody lighting con sombras painterly.
- **Características:**
  - Sombras profundas que esculpen el rostro
  - Highlights suaves sobre piel y alas de mariposa
  - Contraste alto con fondo negro
- **Efecto:** Look editorial de fantasía con textura ultra definida.

## S: Sensación / Atmósfera
- **Mood:** Otherworldly, encantador, emocionalmente intenso.
- **Tono:** High-fashion fantasy con profundidad poética y misterio.

## E: Estilo Visual
- **Estilo general:** Magical realism meets couture editorial photography.
- **Detalles:**
  - Mariposas rosas como encaje vivo
  - Couture etérea envolviendo al sujeto
  - Fondo negro amplificando luminosidad
- **Acabado:** Timeless, surreal, Vogue-level fantasy portrait.
- **Calidad:** Ultra-realistic 8K con detalle extremo en alas, tela y piel.

## M: Composición / Cámara
- **Plano:** Close-up a medium close-up para revelar macro detalles.
- **Enfoque:** Tack-sharp en rostro, piel y textura de mariposas.
- **Encuadre:** Sujeto dominante centrado, mariposas ascendiendo hacia espacio negativo superior.
- **Profundidad de campo:** Shallow DOF cinematográfico con aislamiento elegante.

## P: Postproducción
- **Color grading:** Contraste fuerte negro + rosa suave luminoso.
- **Nitidez:** Máxima definición en piel, alas y couture shimmer.
- **Contraste:** High-fashion dramatic, deep shadows limpias.
- **Acabado final:** Ultra-realistic 8K surreal butterfly couture portrait con emoción editorial atemporal.
`,
        prompt_text: JSON.stringify({
            "title": "Butterfly Couture Surreal Portrait — High-Fashion Magical Realism",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener rasgos faciales, peinado, tono de piel y expresión exactamente idénticos. No alterar ni embellecer el rostro.",
                    "preservacion_total": "No modificar cara, proporciones, textura de piel ni expresión bajo ninguna circunstancia.",
                    "sujeto": "Mujer de presencia impactante vestida en alta costura surrealista.",
                    "detalle_piel": "Piel porcelana con textura realista natural, macro-detail.",
                    "vestimenta": {
                        "outfit": "Avant-garde couture gown cubierta con cientos de mariposas rosas delicadas",
                        "detalle": "Cada ala brilla como encaje frágil, estética etérea y elegante"
                    },
                    "elemento_fantastico": "Una cascada de mariposas luminosas emerge desde la parte posterior de su cabeza.",
                    "calidad": "Ultra-realistic 8K hyper-detailed high-fashion portrait rendering."
                },
                "E_Entorno": {
                    "fondo": "Negro profundo, velvety black sin elementos distractores.",
                    "escena": "Espacio vacío tipo estudio oscuro para amplificar contraste y fantasía.",
                    "objetivo": "Resaltar la luminosidad de piel, mariposas y couture."
                },
                "A_Accion_Postura": {
                    "pose": "Postura dramática, cuello arqueado con elegancia escultórica.",
                    "detalle": "Cabeza inclinada hacia atrás, labios ligeramente entreabiertos en emoción intensa.",
                    "lenguaje_corporal": "Transcendencia emocional, fragilidad y poder en equilibrio."
                },
                "I_Iluminacion": {
                    "tipo": "Cinematic moody lighting con sombras painterly.",
                    "caracteristicas": [
                        "Sombras profundas que esculpen el rostro",
                        "Highlights suaves sobre piel y alas de mariposa",
                        "Contraste alto con fondo negro"
                    ],
                    "efecto": "Look editorial de fantasía con textura ultra definida."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Otherworldly, encantador, emocionalmente intenso.",
                    "tono": "High-fashion fantasy con profundidad poética y misterio."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Magical realism meets couture editorial photography.",
                    "detalles": [
                        "Mariposas rosas como encaje vivo",
                        "Couture etérea envolviendo al sujeto",
                        "Fondo negro amplificando luminosidad"
                    ],
                    "acabado": "Timeless, surreal, Vogue-level fantasy portrait.",
                    "calidad": "Ultra-realistic 8K con detalle extremo en alas, tela y piel."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up a medium close-up para revelar macro detalles.",
                    "enfoque": "Tack-sharp en rostro, piel y textura de mariposas.",
                    "encuadre": "Sujeto dominante centrado, mariposas ascendiendo hacia espacio negativo superior.",
                    "profundidad_de_campo": "Shallow DOF cinematográfico con aislamiento elegante."
                },
                "P_Postproduccion": {
                    "color_grading": "Contraste fuerte negro + rosa suave luminoso.",
                    "nitidez": "Máxima definición en piel, alas y couture shimmer.",
                    "contraste": "High-fashion dramatic, deep shadows limpias.",
                    "acabado_final": "Ultra-realistic 8K surreal butterfly couture portrait con emoción editorial atemporal."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/butterfly-couture-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-surreal", name: "Surreal", slug: "surreal" },
            { id: "t-fantasy", name: "Fantasy", slug: "fantasy" }
        ]
    },
    {
        id: "lifestyle-4",
        type: "prompt",
        title: "Pastel Cyber Gamergirl Portrait — Neon Cozy Keyboard Scene",
        slug: "pastel-cyber-gamergirl",
        summary: "Ultra-realistic 8K pastel cyber gamergirl portrait con mood cálido, íntimo y editorial.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la foto subida como identidad principal. Mantener estructura facial, tono de piel, peinado y expresión exactamente idénticos a la referencia.
- **Preservación total:** No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Chica de cabello largo con dos ponytails, estética cute editorial.
- **Expresión:** Brillante, adorable, ligeramente juguetona, mirada directa a cámara.
- **Cabello:**
  - Estilo: Dos coletas (twin ponytails)
  - Detalle: Cabello largo con acabado suave y realista
- **Vestimenta:**
  - Top: Crochet top colorido
  - Sleeves: Mangas tejidas a juego con textura multi-knit visible
- **Detalle material:** Texturas textiles hiperrealistas en crochet y capas tejidas.
- **Calidad:** Ultra-realistic 8K lifestyle editorial portrait rendering.

## E: Entorno
- **Escena:** Habitación acogedora con estética pastel cyberpunk.
- **Decoración:**
  - Luces neón suaves en púrpura y rosa pastel
  - Posters decorativos
  - Fairy lights y detalles elegantes
  - Decoraciones fluffy y lujosas
- **Atmósfera:** Warm, vintage, dreamy, gamergirl vibe con sutil soledad latente.
- **Props principales:**
  - Objeto: Teclado mecánico pastel pink
  - Acabado: Plástico glossy con reflejos suaves

## A: Acción / Postura
- **Pose:** Recostada suavemente sobre el teclado mecánico.
- **Detalle:** Cabeza apoyada gentilmente sobre la manga tejida.
- **Mirada:** Directa hacia cámara, conexión íntima y cercana.
- **Lenguaje corporal:** Relajado, cute, cozy, ligeramente nostálgico.

## I: Iluminación
- **Tipo:** Neon soft glow lighting en tonos pastel.
- **Fuentes:**
  - Luces púrpura suaves
  - Luces rosa pastel cálidas
  - Iluminación ambiental tenue distribuida por la habitación
- **Efecto:** Highlights delicados sobre piel, tejido crochet y superficie glossy del teclado.

## S: Sensación / Atmósfera
- **Mood:** Dreamy, cozy, cute, ligeramente melancólico.
- **Tono:** Pastel cyberpunk editorial con calidez emocional.

## E: Estilo Visual
- **Estilo general:** Creative dreamy editorial photography, pastel cyberpunk gamergirl aesthetic.
- **Detalles:**
  - Textura crochet ultra definida
  - Glow neón suave envolvente
  - Decoración fluffy y lujosa
  - Teclado glossy como prop central
- **Acabado:** Smooth, premium, soft cyber-vintage mood.
- **Calidad:** Ultra-realistic 8K con detalle extremo en piel, tela y luces.

## M: Composición / Cámara
- **Plano:** Plano medio íntimo con sujeto + teclado visible en foreground.
- **Ángulo:** Eye-level cercano, sensación de habitación personal.
- **Encuadre:** Sujeto dominante con luces neón como marco ambiental.
- **Enfoque:** Sharp focus en rostro y expresión; fondo suave con bokeh neón pastel.

## P: Postproducción
- **Color grading:** Paleta pastel cyberpunk con glow cálido y dreamy softness.
- **Contraste:** Suave, sin dureza, ambiente nostálgico.
- **Nitidez:** Alta definición en rostro, tejido crochet y teclado glossy.
- **Acabado final:** Ultra-realistic 8K pastel cyber gamergirl portrait con mood cálido, íntimo y editorial.
`,
        prompt_text: JSON.stringify({
            "title": "Pastel Cyber Gamergirl Portrait — Neon Cozy Keyboard Scene",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la foto subida como identidad principal. Mantener estructura facial, tono de piel, peinado y expresión exactamente idénticos a la referencia.",
                    "preservacion_total": "No cambiar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Chica de cabello largo con dos ponytails, estética cute editorial.",
                    "expresion": "Brillante, adorable, ligeramente juguetona, mirada directa a cámara.",
                    "cabello": {
                        "estilo": "Dos coletas (twin ponytails)",
                        "detalle": "Cabello largo con acabado suave y realista"
                    },
                    "vestimenta": {
                        "top": "Crochet top colorido",
                        "sleeves": "Mangas tejidas a juego con textura multi-knit visible"
                    },
                    "detalle_material": "Texturas textiles hiperrealistas en crochet y capas tejidas.",
                    "calidad": "Ultra-realistic 8K lifestyle editorial portrait rendering."
                },
                "E_Entorno": {
                    "escena": "Habitación acogedora con estética pastel cyberpunk.",
                    "decoracion": [
                        "Luces neón suaves en púrpura y rosa pastel",
                        "Posters decorativos",
                        "Fairy lights y detalles elegantes",
                        "Decoraciones fluffy y lujosas"
                    ],
                    "atmósfera": "Warm, vintage, dreamy, gamergirl vibe con sutil soledad latente.",
                    "props_principales": {
                        "objeto": "Teclado mecánico pastel pink",
                        "acabado": "Plástico glossy con reflejos suaves"
                    }
                },
                "A_Accion_Postura": {
                    "pose": "Recostada suavemente sobre el teclado mecánico.",
                    "detalle": "Cabeza apoyada gentilmente sobre la manga tejida.",
                    "mirada": "Directa hacia cámara, conexión íntima y cercana.",
                    "lenguaje_corporal": "Relajado, cute, cozy, ligeramente nostálgico."
                },
                "I_Iluminacion": {
                    "tipo": "Neon soft glow lighting en tonos pastel.",
                    "fuentes": [
                        "Luces púrpura suaves",
                        "Luces rosa pastel cálidas",
                        "Iluminación ambiental tenue distribuida por la habitación"
                    ],
                    "efecto": "Highlights delicados sobre piel, tejido crochet y superficie glossy del teclado."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Dreamy, cozy, cute, ligeramente melancólico.",
                    "tono": "Pastel cyberpunk editorial con calidez emocional."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Creative dreamy editorial photography, pastel cyberpunk gamergirl aesthetic.",
                    "detalles": [
                        "Textura crochet ultra definida",
                        "Glow neón suave envolvente",
                        "Decoración fluffy y lujosa",
                        "Teclado glossy como prop central"
                    ],
                    "acabado": "Smooth, premium, soft cyber-vintage mood.",
                    "calidad": "Ultra-realistic 8K con detalle extremo en piel, tela y luces."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio íntimo con sujeto + teclado visible en foreground.",
                    "angulo": "Eye-level cercano, sensación de habitación personal.",
                    "encuadre": "Sujeto dominante con luces neón como marco ambiental.",
                    "enfoque": "Sharp focus en rostro y expresión; fondo suave con bokeh neón pastel."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta pastel cyberpunk con glow cálido y dreamy softness.",
                    "contraste": "Suave, sin dureza, ambiente nostálgico.",
                    "nitidez": "Alta definición en rostro, tejido crochet y teclado glossy.",
                    "acabado_final": "Ultra-realistic 8K pastel cyber gamergirl portrait con mood cálido, íntimo y editorial."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/pastel-cyber-gamergirl.jpg",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-cyberpunk", name: "Cyberpunk", slug: "cyberpunk" },
            { id: "t-pastel", name: "Pastel", slug: "pastel" }
        ]
    },
    {
        id: "editorial-7",
        type: "prompt",
        title: "Black Cinematic Poster — Neon Sign 'YOUR NAME HERE'",
        slug: "black-cinematic-neon-poster",
        summary: "Ultra-realistic 8K striking black poster portrait con neón personalizado.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la foto subida como identidad principal. Mantener estructura facial, forma corporal, silueta, peinado, tono de piel y textura exactamente idénticos a la referencia.
- **Preservación total:** No alterar ni editar ningún rasgo físico de la persona.
- **Sujeto:** Persona centrada en el frame, presencia fuerte y confiada.
- **Postura:** De pie, segura, dominante, estilo póster editorial.
- **Detalle piel:** Textura realista natural con máxima fidelidad.
- **Calidad:** Ultra-realistic 8K cinematic poster portrait rendering.

## E: Entorno
- **Fondo:** Negro profundo absoluto, sin elementos distractores.
- **Escena:** Estética minimalista tipo póster cinematográfico.
- **Atmósfera:** Bold, intensa, high-contrast, visualmente impactante.

## A: Acción / Postura
- **Pose:** Standing confidently, centered composition.
- **Acción:** Sujeto sostiene en la mano izquierda un letrero neón flotante.
- **Prop principal:**
  - Objeto: Neon white floating sign
  - Texto: "Megan"
  - Estilo tipografía: Cursiva artística elegante
  - Función: Foco principal de la composición

## I: Iluminación
- **Tipo:** Iluminación dramática cinematográfica de alto contraste.
- **Características:**
  - Deep shadows limpias
  - Highlights marcados en contornos faciales y ropa
  - Glow fuerte proveniente del neón blanco
- **Efecto:** Énfasis en textura, profundidad y presencia escultórica.

## S: Sensación / Atmósfera
- **Mood:** Intenso, cinematográfico, striking y cautivador.
- **Tono:** Poster editorial de alto impacto visual.

## E: Estilo Visual
- **Estilo general:** Large-format ultra-realistic cinematic editorial poster.
- **Detalles:**
  - Negro profundo + iluminación dramática
  - Neón blanco como elemento gráfico dominante
  - Textura hiperrealista en piel y silueta
- **Calidad:** Ultra-realistic 8K con acabado premium tipo movie poster.

## M: Composición / Cámara
- **Layout:** Composición centrada tipo póster.
- **Plano:** Full-body o tres cuartos según diseño de cartel.
- **Enfoque:** Sharp focus en rostro y neón; fondo negro limpio.
- **Jerarquía visual:** Sujeto + letrero neón como anclas principales.

## P: Postproducción
- **Color grading:** Contraste extremo con negro profundo y glow blanco intenso.
- **Nitidez:** Alta nitidez en rostro, textura corporal y lettering neón.
- **Efecto final:** Poster cinematic hyper-real con profundidad editorial.
- **Acabado final:** Ultra-realistic 8K striking black poster portrait con neón personalizado.
`,
        prompt_text: JSON.stringify({
            "title": "Black Cinematic Poster — Neon Sign 'YOUR NAME HERE'",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la foto subida como identidad principal. Mantener estructura facial, forma corporal, silueta, peinado, tono de piel y textura exactamente idénticos a la referencia.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico de la persona.",
                    "sujeto": "Persona centrada en el frame, presencia fuerte y confiada.",
                    "postura": "De pie, segura, dominante, estilo póster editorial.",
                    "detalle_piel": "Textura realista natural con máxima fidelidad.",
                    "calidad": "Ultra-realistic 8K cinematic poster portrait rendering."
                },
                "E_Entorno": {
                    "fondo": "Negro profundo absoluto, sin elementos distractores.",
                    "escena": "Estética minimalista tipo póster cinematográfico.",
                    "atmósfera": "Bold, intensa, high-contrast, visualmente impactante."
                },
                "A_Accion_Postura": {
                    "pose": "Standing confidently, centered composition.",
                    "accion": "Sujeto sostiene en la mano izquierda un letrero neón flotante.",
                    "prop_principal": {
                        "objeto": "Neon white floating sign",
                        "texto": "Megan",
                        "estilo_tipografia": "Cursiva artística elegante",
                        "funcion": "Foco principal de la composición"
                    }
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación dramática cinematográfica de alto contraste.",
                    "caracteristicas": [
                        "Deep shadows limpias",
                        "Highlights marcados en contornos faciales y ropa",
                        "Glow fuerte proveniente del neón blanco"
                    ],
                    "efecto": "Énfasis en textura, profundidad y presencia escultórica."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Intenso, cinematográfico, striking y cautivador.",
                    "tono": "Poster editorial de alto impacto visual."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Large-format ultra-realistic cinematic editorial poster.",
                    "detalles": [
                        "Negro profundo + iluminación dramática",
                        "Neón blanco como elemento gráfico dominante",
                        "Textura hiperrealista en piel y silueta"
                    ],
                    "calidad": "Ultra-realistic 8K con acabado premium tipo movie poster."
                },
                "M_Composicion_Camara": {
                    "layout": "Composición centrada tipo póster.",
                    "plano": "Full-body o tres cuartos según diseño de cartel.",
                    "enfoque": "Sharp focus en rostro y neón; fondo negro limpio.",
                    "jerarquia_visual": "Sujeto + letrero neón como anclas principales."
                },
                "P_Postproduccion": {
                    "color_grading": "Contraste extremo con negro profundo y glow blanco intenso.",
                    "nitidez": "Alta nitidez en rostro, textura corporal y lettering neón.",
                    "efecto_final": "Poster cinematic hyper-real con profundidad editorial.",
                    "acabado_final": "Ultra-realistic 8K striking black poster portrait con neón personalizado."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/black-cinematic-neon-poster.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-dark", name: "Dark", slug: "dark" },
            { id: "t-neon", name: "Neon", slug: "neon" }
        ]
    },
    {
        id: "urban-1",
        type: "prompt",
        title: "Subway Motion Blur Portrait — Still Subject, Yellow Train Streak",
        slug: "subway-motion-blur-portrait",
        summary: "Ultra-realistic 8K cinematic subway portrait con energía urbana y emoción contenida.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona de presencia elegante y segura en un retrato urbano cinematográfico.
- **Vestimenta:**
  - Outfit: Abrigo largo negro elegante
  - Estilo: Minimalista, sofisticado, timeless
- **Expresión:** Mirada directa y confiada hacia la cámara, ancla emocional fuerte.
- **Detalle piel:** Textura realista natural, enfoque nítido en rostro.
- **Calidad:** Ultra-realistic 8K cinematic portrait rendering con máxima fidelidad facial.

## E: Entorno
- **Ubicación:** Andén subterráneo de metro con atmósfera íntima y tenue.
- **Fondo:**
  - Elemento dinámico: Tren amarillo vibrante pasando rápidamente detrás del sujeto.
  - Efecto: Streak de motion blur brillante que contrasta con el sujeto inmóvil.
- **Arquitectura:** Techo arqueado con azulejos iluminados suavemente por luces de estación.

## A: Acción / Postura
- **Pose:** El sujeto permanece perfectamente quieto en medio del movimiento urbano.
- **Lenguaje corporal:** Calma absoluta, elegancia contenida.
- **Contraste visual:** Sujeto congelado vs energía del tren en movimiento.

## I: Iluminación
- **Tipo:** Iluminación cálida y atmosférica de estación subterránea.
- **Características:** Soft glows sobre el rostro y reflejos en el techo arqueado.
- **Técnica:**
  - Slow shutter: Velocidad de obturación lenta para motion blur del tren.
  - Freeze subject: Rostro y cuerpo del sujeto completamente nítidos.
- **Efecto:** Mood urbano dramático con contraste entre quietud y velocidad.

## S: Sensación / Atmósfera
- **Mood:** Íntimo, cinematográfico, urbano, misterioso.
- **Tono:** Momento fugaz de calma en medio de la energía de la ciudad.

## E: Estilo Visual
- **Estilo general:** Fotografía hiperrealista cinematográfica tipo editorial urbano.
- **Detalles:**
  - Motion blur dinámico del tren amarillo
  - Rostro tack-sharp como punto emocional central
  - Textura real en abrigo negro y entorno subterráneo
- **Calidad:** Ultra-realistic 8K con estética film-like premium.

## M: Composición / Cámara
- **Plano:** Plano medio centrado en el sujeto de pie en el andén.
- **Encuadre:** Sujeto como ancla central, tren como streak horizontal detrás.
- **Enfoque:** Nitidez extrema en ojos y rostro, fondo dinámico desenfocado por movimiento.
- **Perspectiva:** Cinemática y profunda, con arquitectura del metro aportando contexto.

## P: Postproducción
- **Color grading:** Tonos cálidos atmosféricos con contraste fuerte entre negro y amarillo.
- **Contraste:** Medio-alto para dramatismo editorial.
- **Nitidez:** Máxima nitidez en rostro y abrigo; blur limpio en el tren.
- **Acabado final:** Ultra-realistic 8K cinematic subway portrait con energía urbana y emoción contenida.
`,
        prompt_text: JSON.stringify({
            "title": "Subway Motion Blur Portrait — Still Subject, Yellow Train Streak",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
                    "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Persona de presencia elegante y segura en un retrato urbano cinematográfico.",
                    "vestimenta": {
                        "outfit": "Abrigo largo negro elegante",
                        "estilo": "Minimalista, sofisticado, timeless"
                    },
                    "expresion": "Mirada directa y confiada hacia la cámara, ancla emocional fuerte.",
                    "detalle_piel": "Textura realista natural, enfoque nítido en rostro.",
                    "calidad": "Ultra-realistic 8K cinematic portrait rendering con máxima fidelidad facial."
                },
                "E_Entorno": {
                    "ubicacion": "Andén subterráneo de metro con atmósfera íntima y tenue.",
                    "fondo": {
                        "elemento_dinamico": "Tren amarillo vibrante pasando rápidamente detrás del sujeto",
                        "efecto": "Streak de motion blur brillante que contrasta con el sujeto inmóvil"
                    },
                    "arquitectura": "Techo arqueado con azulejos iluminados suavemente por luces de estación."
                },
                "A_Accion_Postura": {
                    "pose": "El sujeto permanece perfectamente quieto en medio del movimiento urbano.",
                    "lenguaje_corporal": "Calma absoluta, elegancia contenida.",
                    "contraste_visual": "Sujeto congelado vs energía del tren en movimiento."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación cálida y atmosférica de estación subterránea.",
                    "caracteristicas": "Soft glows sobre el rostro y reflejos en el techo arqueado.",
                    "tecnica": {
                        "slow_shutter": "Velocidad de obturación lenta para motion blur del tren",
                        "freeze_subject": "Rostro y cuerpo del sujeto completamente nítidos"
                    },
                    "efecto": "Mood urbano dramático con contraste entre quietud y velocidad."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Íntimo, cinematográfico, urbano, misterioso.",
                    "tono": "Momento fugaz de calma en medio de la energía de la ciudad."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía hiperrealista cinematográfica tipo editorial urbano.",
                    "detalles": [
                        "Motion blur dinámico del tren amarillo",
                        "Rostro tack-sharp como punto emocional central",
                        "Textura real en abrigo negro y entorno subterráneo"
                    ],
                    "calidad": "Ultra-realistic 8K con estética film-like premium."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio centrado en el sujeto de pie en el andén.",
                    "encuadre": "Sujeto como ancla central, tren como streak horizontal detrás.",
                    "enfoque": "Nitidez extrema en ojos y rostro, fondo dinámico desenfocado por movimiento.",
                    "perspectiva": "Cinemática y profunda, con arquitectura del metro aportando contexto."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos atmosféricos con contraste fuerte entre negro y amarillo.",
                    "contraste": "Medio-alto para dramatismo editorial.",
                    "nitidez": "Máxima nitidez en rostro y abrigo; blur limpio en el tren.",
                    "acabado_final": "Ultra-realistic 8K cinematic subway portrait con energía urbana y emoción contenida."
                }
            }
        }, null, 2),
        category: "Photography",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/subway-motion-blur-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-urban", name: "Urban", slug: "urban" },
            { id: "t-cinematic", name: "Cinematic", slug: "cinematic" },
            { id: "t-long-exposure", name: "Long Exposure", slug: "long-exposure" }
        ]
    },
    {
        id: "editorial-6",
        type: "prompt",
        title: "Futuristic Editorial — Metallic Pink Shapes + Typography 'MEGAN'",
        slug: "futuristic-editorial-megan",
        summary: "Ultra-realistic 8K futuristic fashion editorial portrait con tipografía integrada.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona estilizada en un retrato fashion futurista.
- **Vestimenta:**
  - Top: Sudadera negra minimalista
  - Bottom: Falda plisada pastel roja
  - Footwear: Botas blancas altas hasta la rodilla
- **Detalle piel:** Textura realista natural con enfoque editorial premium.
- **Calidad:** Ultra-realistic 8K hyper-detailed fashion portrait rendering.

## E: Entorno
- **Fondo:** Estudio con tonos rosa apagado (muted pink studio backdrop).
- **Escena:** Minimalista, futurista y editorial, sin props físicos adicionales.
- **Elementos extra:**
  - Formas 3D líquidas metálicas color rosa brillante envolviendo al sujeto.
  - Tipografía gigante minimalista en el fondo.

## A: Acción / Postura
- **Pose:** Sentado elegantemente con postura relajada.
- **Detalle:** Cabeza ligeramente inclinada hacia arriba, gesto editorial suave.
- **Lenguaje corporal:** Calma, sofisticación, presencia futurista.

## I: Iluminación
- **Tipo:** Soft cinematic glow de estudio.
- **Características:** Luz envolvente que resalta piel y textura de telas.
- **Efecto:** Highlights suaves sobre formas metálicas líquidas y botas blancas.

## S: Sensación / Atmósfera
- **Mood:** Editorial futurista, sofisticado, elegante.
- **Tono:** Fashion-forward con vibra surreal moderna.

## E: Estilo Visual
- **Estilo general:** Fashion editorial × futurismo con elementos 3D glossy.
- **Detalles:**
  - Texturas textiles nítidas
  - Formas metálicas líquidas rosa envolventes
  - Background rosa suave y limpio
- **Tipografía:**
  - Texto: "MEGAN"
  - Estilo: Bold modern typography grande atravesando el fondo
  - Función: Elemento gráfico minimalista de portada editorial
- **Calidad:** Ultra-realistic 8K high-detail Vogue-style futuristic aesthetic.

## M: Composición / Cámara
- **Plano:** Plano medio a tres cuartos mostrando outfit completo sentado.
- **Ángulo:** Eye-level ligeramente estilizado hacia arriba.
- **Encuadre:** Sujeto centrado con formas 3D y tipografía integradas detrás.
- **Profundidad de campo:** Shallow DOF suave para look premium.

## P: Postproducción
- **Color grading:** Paleta rosa pastel + negros elegantes + highlights metálicos.
- **Nitidez:** Alta definición en rostro, botas, pliegues de falda y objetos glossy.
- **Contraste:** Medio cinematográfico con glow suave.
- **Acabado final:** Ultra-realistic 8K futuristic fashion editorial portrait con tipografía integrada.
`,
        prompt_text: JSON.stringify({
            "title": "Futuristic Editorial — Metallic Pink Shapes + Typography 'MEGAN'",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
                    "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Persona estilizada en un retrato fashion futurista.",
                    "vestimenta": {
                        "top": "Sudadera negra minimalista",
                        "bottom": "Falda plisada pastel roja",
                        "footwear": "Botas blancas altas hasta la rodilla"
                    },
                    "detalle_piel": "Textura realista natural con enfoque editorial premium.",
                    "calidad": "Ultra-realistic 8K hyper-detailed fashion portrait rendering."
                },
                "E_Entorno": {
                    "fondo": "Estudio con tonos rosa apagado (muted pink studio backdrop).",
                    "escena": "Minimalista, futurista y editorial, sin props físicos adicionales.",
                    "elementos_extra": [
                        "Formas 3D líquidas metálicas color rosa brillante envolviendo al sujeto",
                        "Tipografía gigante minimalista en el fondo"
                    ]
                },
                "A_Accion_Postura": {
                    "pose": "Sentado elegantemente con postura relajada.",
                    "detalle": "Cabeza ligeramente inclinada hacia arriba, gesto editorial suave.",
                    "lenguaje_corporal": "Calma, sofisticación, presencia futurista."
                },
                "I_Iluminacion": {
                    "tipo": "Soft cinematic glow de estudio.",
                    "caracteristicas": "Luz envolvente que resalta piel y textura de telas.",
                    "efecto": "Highlights suaves sobre formas metálicas líquidas y botas blancas."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Editorial futurista, sofisticado, elegante.",
                    "tono": "Fashion-forward con vibra surreal moderna."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fashion editorial × futurismo con elementos 3D glossy.",
                    "detalles": [
                        "Texturas textiles nítidas",
                        "Formas metálicas líquidas rosa envolventes",
                        "Background rosa suave y limpio"
                    ],
                    "tipografia": {
                        "texto": "MEGAN",
                        "estilo": "Bold modern typography grande atravesando el fondo",
                        "funcion": "Elemento gráfico minimalista de portada editorial"
                    },
                    "calidad": "Ultra-realistic 8K high-detail Vogue-style futuristic aesthetic."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a tres cuartos mostrando outfit completo sentado.",
                    "angulo": "Eye-level ligeramente estilizado hacia arriba.",
                    "encuadre": "Sujeto centrado con formas 3D y tipografía integradas detrás.",
                    "profundidad_de_campo": "Shallow DOF suave para look premium."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta rosa pastel + negros elegantes + highlights metálicos.",
                    "nitidez": "Alta definición en rostro, botas, pliegues de falda y objetos glossy.",
                    "contraste": "Medio cinematográfico con glow suave.",
                    "acabado_final": "Ultra-realistic 8K futuristic fashion editorial portrait con tipografía integrada."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/futuristic-editorial-megan.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-futuristic", name: "Futuristic", slug: "futuristic" },
            { id: "t-pink", name: "Pink", slug: "pink" }
        ]
    },
    {
        id: "editorial-5",
        type: "prompt",
        title: "Crimson Dominance Portrait — Low Angle Cinematic Editorial",
        slug: "crimson-dominance-portrait",
        summary: "Ultra-realistic 8K crimson editorial portrait con presencia escultórica.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato de presencia dominante y escultórica.
- **Vestuario:** Wardrobe oscuro y elegante que contraste con el fondo rojo.
- **Detalle piel:** Piel luminosa con textura natural realista.
- **Calidad:** Ultra-realistic 8K portrait rendering con máxima fidelidad facial.

## E: Entorno
- **Fondo:** Crimson red profundo, saturado e intenso.
- **Escena:** Estudio editorial minimalista sin props ni elementos extra.
- **Objetivo:** Crear contraste visual fuerte entre sujeto y fondo.

## A: Acción / Postura
- **Pose:** Postura firme y calmada, presencia dominante.
- **Mirada:** Directa o ligeramente hacia abajo, reforzando autoridad.
- **Lenguaje corporal:** Elegancia escultórica, actitud editorial.

## I: Iluminación
- **Tipo:** Stark cinematic lighting con contraste intenso.
- **Características:** Sombras profundas, highlights marcados sobre rostro y cuello.
- **Efecto:** Esculpe mandíbula y cuello, enfatizando elegancia dramática.

## S: Sensación / Atmósfera
- **Mood:** Dominante, elegante, misterioso.
- **Tono:** Editorial cinematográfico de alto impacto visual.

## E: Estilo Visual
- **Estilo general:** Retrato editorial hiperrealista con estética bold y contrastada.
- **Detalle:** High-detail fashion portrait, sombras limpias, fondo rojo saturado.
- **Calidad:** Ultra-realistic 8K con acabado premium Vogue-style.

## M: Composición / Cámara
- **Formato:** Vertical 1080×1920 (9:16).
- **Ángulo:** Slightly low upward-facing angle para dramatizar mandíbula y cuello.
- **Plano:** Close-up o plano medio corto centrado en rostro y estructura.
- **Encuadre:** Composición limpia, sujeto dominante sobre fondo rojo.

## P: Postproducción
- **Color grading:** Rojos intensos con contraste cinematográfico fuerte.
- **Nitidez:** Extrema nitidez en rostro, piel y contornos faciales.
- **Contraste:** Alto, con deep shadows controladas.
- **Acabado final:** Ultra-realistic 8K crimson editorial portrait con presencia escultórica.
`,
        prompt_text: JSON.stringify({
            "title": "Crimson Dominance Portrait — Low Angle Cinematic Editorial",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
                    "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Retrato de presencia dominante y escultórica.",
                    "vestuario": "Wardrobe oscuro y elegante que contraste con el fondo rojo.",
                    "detalle_piel": "Piel luminosa con textura natural realista.",
                    "calidad": "Ultra-realistic 8K portrait rendering con máxima fidelidad facial."
                },
                "E_Entorno": {
                    "fondo": "Crimson red profundo, saturado e intenso.",
                    "escena": "Estudio editorial minimalista sin props ni elementos extra.",
                    "objetivo": "Crear contraste visual fuerte entre sujeto y fondo."
                },
                "A_Accion_Postura": {
                    "pose": "Postura firme y calmada, presencia dominante.",
                    "mirada": "Directa o ligeramente hacia abajo, reforzando autoridad.",
                    "lenguaje_corporal": "Elegancia escultórica, actitud editorial."
                },
                "I_Iluminacion": {
                    "tipo": "Stark cinematic lighting con contraste intenso.",
                    "caracteristicas": "Sombras profundas, highlights marcados sobre rostro y cuello.",
                    "efecto": "Esculpe mandíbula y cuello, enfatizando elegancia dramática."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Dominante, elegante, misterioso.",
                    "tono": "Editorial cinematográfico de alto impacto visual."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato editorial hiperrealista con estética bold y contrastada.",
                    "detalle": "High-detail fashion portrait, sombras limpias, fondo rojo saturado.",
                    "calidad": "Ultra-realistic 8K con acabado premium Vogue-style."
                },
                "M_Composicion_Camara": {
                    "formato": "Vertical 1080×1920 (9:16).",
                    "angulo": "Slightly low upward-facing angle para dramatizar mandíbula y cuello.",
                    "plano": "Close-up o plano medio corto centrado en rostro y estructura.",
                    "encuadre": "Composición limpia, sujeto dominante sobre fondo rojo."
                },
                "P_Postproduccion": {
                    "color_grading": "Rojos intensos con contraste cinematográfico fuerte.",
                    "nitidez": "Extrema nitidez en rostro, piel y contornos faciales.",
                    "contraste": "Alto, con deep shadows controladas.",
                    "acabado_final": "Ultra-realistic 8K crimson editorial portrait con presencia escultórica."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/crimson-dominance-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-red", name: "Crimson", slug: "crimson" },
            { id: "t-moody", name: "Moody", slug: "moody" }
        ]
    },
    {
        id: "lifestyle-2",
        type: "prompt",
        title: "Snowy Mountain Swimsuit — Bold Winter Contrast",
        slug: "snowy-mountain-swimsuit",
        summary: "High-contrast winter luxury portrait: olive bikini in snow with fur hat.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Mantener rasgos faciales originales, maquillaje high-fashion impecable.
- **Cabello:** Castaño oscuro, largo y ondulado, parcialmente extendido sobre la nieve.
- **Vestimenta:**
  - Bikini Top: Verde oliva, corte minimalista, tela mate.
  - Bikini Bottom: Verde oliva, ajuste high-fashion.
  - Accesorio: Gorro Ushanka de piel blanca oversized y lujosa.
- **Piel:** Textura ultra-detallada, tono uniforme.

## E: Entorno
- **Ubicación:** Resort de montaña de lujo nevado.
- **Superficie:** Nieve pura suave con impresiones sutiles y montículos naturales.
- **Atmósfera:** Lujo invernal, contraste estacional audaz.

## A: Acción / Postura
- **Pose:** Recostada relajada en la nieve, una pierna extendida hacia la cámara para profundidad.
- **Expresión:** Calma, confiada, mirada sutilmente seductora y directa.
- **Estilo:** Actitud de influencer high-end.

## I: Iluminación
- **Tipo:** Luz natural difusa de día nublado.
- **Calidad:** Suave, sin sombras duras, favorecedora para piel y texturas.

## S: Sensación / Atmósfera
- **Mood:** Audaz, confiado, "Cold styling, hot look".
- **Contraste:** Frío del entorno vs. calidez del sujeto.

## E: Estilo Visual
- **Estética:** Retrato modo smartphone high-end, editorial de influencer.
- **Texturas:** Contraste entre piel suave, tela mate del bikini y fibras del gorro de piel.
- **Calidad:** Photorealistic 8K, enfoque ultra-nítido.

## M: Composición / Cámara
- **Ángulo:** Top-down (vista desde arriba) mirando directamente al sujeto.
- **Encuadre:** Cuerpo completo con distorsión de perspectiva por la pierna extendida.
- **Aspect Ratio:** Vertical 4:5.

## P: Postproducción
- **Nitidez:** Máxima definición en texturas de nieve y piel.
- **Color:** Paleta dominada por blanco nieve y verde oliva.
`,
        prompt_text: JSON.stringify({
            "title": "Snowy Mountain Swimsuit — Bold Winter Contrast",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Mantener rasgos faciales originales, maquillaje high-fashion impecable.",
                    "cabello": "Castaño oscuro, largo y ondulado, parcialmente extendido sobre la nieve.",
                    "vestimenta": {
                        "bikini": "Set verde oliva minimalista, tela mate.",
                        "accesorio": "Gorro Ushanka de piel blanca oversized."
                    },
                    "piel": "Textura ultra-detallada, tono uniforme."
                },
                "E_Entorno": {
                    "ubicacion": "Resort de montaña de lujo nevado.",
                    "superficie": "Nieve pura suave con impresiones sutiles.",
                    "atmosfera": "Lujo invernal, contraste estacional audaz."
                },
                "A_Accion_Postura": {
                    "pose": "Recostada relajada, pierna extendida hacia cámara (foreshortening).",
                    "expresion": "Calma, confiada, mirada sutilmente seductora.",
                    "estilo": "Influencer high-end aesthetic."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural difusa de día nublado.",
                    "calidad": "Suave y envolvente."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Audaz, confiado, contraste frío/calor.",
                    "vibe": "High fashion editorial winter."
                },
                "E_visual_EstiloVisual": {
                    "estetica": "Retrato smartphone high-end.",
                    "texturas": "Piel suave vs Nieve vs Piel sintética del gorro.",
                    "calidad": "Photorealistic 8K."
                },
                "M_Composicion_Camara": {
                    "angulo": "Top-down, vista superior directa.",
                    "encuadre": "Cuerpo completo con profundidad.",
                    "aspecto": "4:5 Vertical."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/snowy-mountain-swimsuit.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-winter", name: "Winter", slug: "winter" },
            { id: "t-fashion", name: "Fashion", slug: "fashion" }
        ]
    },
    {
        id: "lifestyle-1",
        type: "prompt",
        title: "Denim Backpack Garden Portrait — Pink Roses Sunny Daylight",
        slug: "denim-backpack-garden-portrait",
        summary: "Ultra-realistic 8K outdoor floral portrait con luz soleada y atmósfera fresca.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Ángulo sujeto:** Visto desde atrás y ligeramente de lado, pero con el rostro visible mirando hacia arriba hacia la cámara.
- **Expresión:** Natural, suave, contemplativa.
- **Vestimenta:**
  - Jacket: Chaqueta denim azul loose-fit
  - Accesorio: Mochila clara (off-white o cream) sobre un solo hombro
- **Detalle piel:** Textura de piel realista, preservada al 100%.
- **Calidad:** Ultra-realistic 8K portrait rendering con máxima fidelidad en rostro, cabello y textiles.

## E: Entorno
- **Escena:** Exterior rodeado de naturaleza exuberante.
- **Fondo:**
  - Follaje verde intenso
  - Racimos abundantes de rosas rosas brillantes en plena floración
- **Atmósfera:** Jardín vibrante, fresco, lleno de vida y color.

## A: Acción / Postura
- **Pose:** Sujeto de espaldas con giro parcial hacia la cámara.
- **Mirada:** Mirando hacia arriba en dirección al lente.
- **Lenguaje corporal:** Casual, lifestyle auténtico, momento natural.

## I: Iluminación
- **Tipo:** Luz natural brillante de día soleado.
- **Características:** Iluminación limpia y cálida con highlights suaves.
- **Efecto:** Resalta denim, piel, flores y colores vibrantes.

## S: Sensación / Atmósfera
- **Mood:** Optimista, fresco, sereno, natural.
- **Tono:** Lifestyle cinematográfico con energía floral suave.

## E: Estilo Visual
- **Estilo general:** Retrato hiperrealista cinematográfico exterior.
- **Texturas:**
  - Denim detallado
  - Rosas rosas con pétalos definidos
  - Vegetación verde con profundidad natural
- **Paleta:** Verde intenso + rosa brillante + neutros suaves en mochila.
- **Calidad:** Ultra-realistic 8K con acabado premium natural.

## M: Composición / Cámara
- **Plano:** Plano medio mostrando espalda, mochila y rostro girado hacia cámara.
- **Ángulo:** Ligeramente elevado, reforzando la mirada upward.
- **Encuadre:** Sujeto centrado, flores actuando como marco natural.
- **Enfoque:** Sharp focus en rostro y jacket, fondo suavemente desenfocado.

## P: Postproducción
- **Color grading:** Vibrante natural con contraste cinematográfico suave.
- **Nitidez:** Alta definición en piel, denim y pétalos.
- **Acabado final:** Ultra-realistic 8K outdoor floral portrait con luz soleada y atmósfera fresca.
`,
        prompt_text: JSON.stringify({
            "title": "Denim Backpack Garden Portrait — Pink Roses Sunny Daylight",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
                    "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "angulo_sujeto": "Visto desde atrás y ligeramente de lado, pero con el rostro visible mirando hacia arriba hacia la cámara.",
                    "expresion": "Natural, suave, contemplativa.",
                    "vestimenta": {
                        "jacket": "Chaqueta denim azul loose-fit",
                        "accesorio": "Mochila clara (off-white o cream) sobre un solo hombro"
                    },
                    "detalle_piel": "Textura de piel realista, preservada al 100%.",
                    "calidad": "Ultra-realistic 8K portrait rendering con máxima fidelidad en rostro, cabello y textiles."
                },
                "E_Entorno": {
                    "escena": "Exterior rodeado de naturaleza exuberante.",
                    "fondo": [
                        "Follaje verde intenso",
                        "Racimos abundantes de rosas rosas brillantes en plena floración"
                    ],
                    "atmósfera": "Jardín vibrante, fresco, lleno de vida y color."
                },
                "A_Accion_Postura": {
                    "pose": "Sujeto de espaldas con giro parcial hacia la cámara.",
                    "mirada": "Mirando hacia arriba en dirección al lente.",
                    "lenguaje_corporal": "Casual, lifestyle auténtico, momento natural."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural brillante de día soleado.",
                    "caracteristicas": "Iluminación limpia y cálida con highlights suaves.",
                    "efecto": "Resalta denim, piel, flores y colores vibrantes."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Optimista, fresco, sereno, natural.",
                    "tono": "Lifestyle cinematográfico con energía floral suave."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato hiperrealista cinematográfico exterior.",
                    "texturas": [
                        "Denim detallado",
                        "Rosas rosas con pétalos definidos",
                        "Vegetación verde con profundidad natural"
                    ],
                    "paleta": "Verde intenso + rosa brillante + neutros suaves en mochila.",
                    "calidad": "Ultra-realistic 8K con acabado premium natural."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio mostrando espalda, mochila y rostro girado hacia cámara.",
                    "angulo": "Ligeramente elevado, reforzando la mirada upward.",
                    "encuadre": "Sujeto centrado, flores actuando como marco natural.",
                    "enfoque": "Sharp focus en rostro y jacket, fondo suavemente desenfocado."
                },
                "P_Postproduccion": {
                    "color_grading": "Vibrante natural con contraste cinematográfico suave.",
                    "nitidez": "Alta definición en piel, denim y pétalos.",
                    "acabado_final": "Ultra-realistic 8K outdoor floral portrait con luz soleada y atmósfera fresca."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/denim-backpack-garden-portrait.jpg",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" },
            { id: "t-floral", name: "Floral", slug: "floral" },
            { id: "t-outdoor", name: "Outdoor", slug: "outdoor" }
        ]
    },
    {
        id: "editorial-4",
        type: "prompt",
        title: "Denim Rose Wall Portrait — Golden Circle Shadow Mood",
        slug: "denim-rose-wall-portrait",
        summary: "Ultra-realistic 8K moody wall portrait con rosa blanca y sombra dorada misteriosa.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.
- **Preservación total:** No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Expresión:** Gloomy, seria, ligeramente triste e introspectiva.
- **Vestimenta:**
  - Jacket: Chaqueta de mezclilla (denim jacket)
  - Bottom: Falda larga denim tipo cargo
- **Prop principal:**
  - Objeto: Una sola rosa blanca
  - Interacción: Sostenida con ambas manos al frente, gesto delicado y simbólico
- **Calidad:** Ultra-realistic 8K portrait rendering con textura extrema en piel, denim y flor.

## E: Entorno
- **Escena:** Persona sentada contra una pared lisa, fondo completamente limpio.
- **Fondo:** Minimalista, sin elementos adicionales.
- **Elemento luz:** Círculo de luz solar dorada proyectado en la pared detrás del sujeto.

## A: Acción / Postura
- **Pose:** Sentado contra la pared, mirando hacia el frente.
- **Lenguaje corporal:** Quietud emocional, vulnerabilidad contenida.
- **Acción:** Sosteniendo la rosa blanca como foco narrativo.

## I: Iluminación
- **Tipo:** Iluminación cinematográfica dramática con luz cálida direccional.
- **Fuente:** Haz circular de sunlight dorado creando contraste fuerte.
- **Efecto clave:** Sombra marcada del rostro proyectada claramente en la pared.
- **Sombras:** Deep shadows limpias y definidas para atmósfera misteriosa.

## S: Sensación / Atmósfera
- **Mood:** Moody, misterioso, melancólico.
- **Tono:** Cinemático, simbólico, íntimo y emocional.

## E: Estilo Visual
- **Estilo general:** Retrato editorial cinematográfico minimalista con dramatismo de luz.
- **Texturas:**
  - Denim altamente detallado
  - Rosa blanca delicada
  - Sombra fuerte proyectada en pared
- **Paleta:** Azules denim + blanco puro + dorado cálido en luz de fondo.
- **Calidad:** Ultra-realistic 8K con mood oscuro premium.

## M: Composición / Cámara
- **Formato:** Vertical 9:16
- **Plano:** Plano medio mostrando postura completa sentada + rosa visible.
- **Encuadre:** Sujeto centrado con círculo de luz como elemento compositivo detrás.
- **Enfoque:** Sharp focus en rostro, manos y flor; fondo limpio con sombra definida.

## P: Postproducción
- **Color grading:** Contraste cinematográfico con dorados cálidos y tonos fríos en denim.
- **Nitidez:** Alta definición en piel, tela y pétalos.
- **Contraste:** Alto para enfatizar sombras y dramatismo.
- **Acabado final:** Ultra-realistic 8K moody wall portrait con rosa blanca y sombra dorada misteriosa.
`,
        prompt_text: JSON.stringify({
            "title": "Denim Rose Wall Portrait — Golden Circle Shadow Mood",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.",
                    "preservacion_total": "No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "expresion": "Gloomy, seria, ligeramente triste e introspectiva.",
                    "vestimenta": {
                        "jacket": "Chaqueta de mezclilla (denim jacket)",
                        "bottom": "Falda larga denim tipo cargo"
                    },
                    "prop_principal": {
                        "objeto": "Una sola rosa blanca",
                        "interaccion": "Sostenida con ambas manos al frente, gesto delicado y simbólico"
                    },
                    "calidad": "Ultra-realistic 8K portrait rendering con textura extrema en piel, denim y flor."
                },
                "E_Entorno": {
                    "escena": "Persona sentada contra una pared lisa, fondo completamente limpio.",
                    "fondo": "Minimalista, sin elementos adicionales.",
                    "elemento_luz": "Círculo de luz solar dorada proyectado en la pared detrás del sujeto."
                },
                "A_Accion_Postura": {
                    "pose": "Sentado contra la pared, mirando hacia el frente.",
                    "lenguaje_corporal": "Quietud emocional, vulnerabilidad contenida.",
                    "accion": "Sosteniendo la rosa blanca como foco narrativo."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación cinematográfica dramática con luz cálida direccional.",
                    "fuente": "Haz circular de sunlight dorado creando contraste fuerte.",
                    "efecto_clave": "Sombra marcada del rostro proyectada claramente en la pared.",
                    "sombras": "Deep shadows limpias y definidas para atmósfera misteriosa."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Moody, misterioso, melancólico.",
                    "tono": "Cinemático, simbólico, íntimo y emocional."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato editorial cinematográfico minimalista con dramatismo de luz.",
                    "texturas": [
                        "Denim altamente detallado",
                        "Rosa blanca delicada",
                        "Sombra fuerte proyectada en pared"
                    ],
                    "paleta": "Azules denim + blanco puro + dorado cálido en luz de fondo.",
                    "calidad": "Ultra-realistic 8K con mood oscuro premium."
                },
                "M_Composicion_Camara": {
                    "formato": "Vertical 9:16",
                    "plano": "Plano medio mostrando postura completa sentada + rosa visible.",
                    "encuadre": "Sujeto centrado con círculo de luz como elemento compositivo detrás.",
                    "enfoque": "Sharp focus en rostro, manos y flor; fondo limpio con sombra definida."
                },
                "P_Postproduccion": {
                    "color_grading": "Contraste cinematográfico con dorados cálidos y tonos fríos en denim.",
                    "nitidez": "Alta definición en piel, tela y pétalos.",
                    "contraste": "Alto para enfatizar sombras y dramatismo.",
                    "acabado_final": "Ultra-realistic 8K moody wall portrait con rosa blanca y sombra dorada misteriosa."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/denim-rose-wall-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-moody", name: "Moody", slug: "moody" },
            { id: "t-shadow", name: "Shadow", slug: "shadow" }
        ]
    },
    {
        id: "editorial-3",
        type: "prompt",
        title: "Minimalist Black & White Chair Portrait — Raw Timeless Mood",
        slug: "minimalist-bw-chair-portrait",
        summary: "Ultra-realistic 8K timeless monochrome portrait con vibra editorial minimal.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.
- **Preservación total:** No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona con presencia calmada, estilo natural y sin adornos.
- **Cabello:** Corto, oscuro, enmarcando el rostro de manera orgánica.
- **Expresión:** Serena, introspectiva, casi pensativa.
- **Vestimenta:**
  - Top: Camiseta negra sleeveless simple
  - Jeans: Denim loose-fit casual
  - Pies: Descalzo, look raw y auténtico
- **Calidad:** Ultra-realistic 8K black-and-white portrait rendering con detalle extremo.

## E: Entorno
- **Escena:** Estudio minimalista con fondo completamente liso.
- **Props:** Silla simple moderna sin elementos adicionales.
- **Atmósfera:** Espacio limpio diseñado para enfatizar al sujeto.

## A: Acción / Postura
- **Pose:** Sentado en una silla minimalista en postura relajada.
- **Detalle:** Pies descalzos recogidos, una pierna cruzada suavemente sobre la otra.
- **Mirada:** Directa hacia cámara, conexión íntima.
- **Lenguaje corporal:** Natural, effortless, sin pose exagerada.

## I: Iluminación
- **Tipo:** Luz de estudio suave y envolvente.
- **Características:** Sombras delicadas, iluminación uniforme que resalta contornos faciales.
- **Efecto:** Mood íntimo, sin dramatismo extremo.

## S: Sensación / Atmósfera
- **Mood:** Raw, moderno, íntimo, atemporal.
- **Tono:** Understated elegance, effortless timeless portrait.

## E: Estilo Visual
- **Estilo general:** Retrato editorial minimalista en blanco y negro.
- **Acabado:** Unembellished, auténtico, con textura real de piel.
- **Paleta:** Monocromática con contraste suave.
- **Calidad:** Ultra-realistic 8K fine-art fashion portrait.

## M: Composición / Cámara
- **Plano:** Plano medio mostrando postura completa sobre la silla.
- **Ángulo:** Eye-level neutral, moderno y directo.
- **Enfoque:** Nitidez en rostro y expresión, fondo limpio suavemente desenfocado.

## P: Postproducción
- **Conversión:** Blanco y negro con separación tonal fina.
- **Contraste:** Suave pero definido, deep blacks controlados.
- **Textura:** Grano cinematográfico sutil opcional para mood analógico.
- **Acabado final:** Ultra-realistic 8K timeless monochrome portrait con vibra editorial minimal.
`,
        prompt_text: JSON.stringify({
            "title": "Minimalist Black & White Chair Portrait — Raw Timeless Mood",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos.",
                    "preservacion_total": "No cambiar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Persona con presencia calmada, estilo natural y sin adornos.",
                    "cabello": "Corto, oscuro, enmarcando el rostro de manera orgánica.",
                    "expresion": "Serena, introspectiva, casi pensativa.",
                    "vestimenta": {
                        "top": "Camiseta negra sleeveless simple",
                        "jeans": "Denim loose-fit casual",
                        "pies": "Descalzo, look raw y auténtico"
                    },
                    "calidad": "Ultra-realistic 8K black-and-white portrait rendering con detalle extremo."
                },
                "E_Entorno": {
                    "escena": "Estudio minimalista con fondo completamente liso.",
                    "props": "Silla simple moderna sin elementos adicionales.",
                    "atmósfera": "Espacio limpio diseñado para enfatizar al sujeto."
                },
                "A_Accion_Postura": {
                    "pose": "Sentado en una silla minimalista en postura relajada.",
                    "detalle": "Pies descalzos recogidos, una pierna cruzada suavemente sobre la otra.",
                    "mirada": "Directa hacia cámara, conexión íntima.",
                    "lenguaje_corporal": "Natural, effortless, sin pose exagerada."
                },
                "I_Iluminacion": {
                    "tipo": "Luz de estudio suave y envolvente.",
                    "caracteristicas": "Sombras delicadas, iluminación uniforme que resalta contornos faciales.",
                    "efecto": "Mood íntimo, sin dramatismo extremo."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Raw, moderno, íntimo, atemporal.",
                    "tono": "Understated elegance, effortless timeless portrait."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato editorial minimalista en blanco y negro.",
                    "acabado": "Unembellished, auténtico, con textura real de piel.",
                    "paleta": "Monocromática con contraste suave.",
                    "calidad": "Ultra-realistic 8K fine-art fashion portrait."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio mostrando postura completa sobre la silla.",
                    "angulo": "Eye-level neutral, moderno y directo.",
                    "enfoque": "Nitidez en rostro y expresión, fondo limpio suavemente desenfocado."
                },
                "P_Postproduccion": {
                    "conversion": "Blanco y negro con separación tonal fina.",
                    "contraste": "Suave pero definido, deep blacks controlados.",
                    "textura": "Grano cinematográfico sutil opcional para mood analógico.",
                    "acabado_final": "Ultra-realistic 8K timeless monochrome portrait con vibra editorial minimal."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/minimalist-bw-chair-portrait.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-bw", name: "Black & White", slug: "black-white" },
            { id: "t-minimal", name: "Minimal", slug: "minimal" }
        ]
    },
    {
        id: "editorial-2",
        type: "prompt",
        title: "Orange Rim-Light Editorial — Shadowed Vogue Studio Portrait",
        slug: "orange-rim-light-editorial-vogue",
        summary: "Ultra-realistic 8K Vogue-style orange glow studio portrait con misterio y elegancia.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.
- **Preservación total:** No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Persona estilizada con presencia editorial de alta moda.
- **Vestimenta:**
  - Outfit: Ensemble de diseñador minimalista y high-end
  - Jacket: Chaqueta slim-fit de corte afilado con acabado mate
  - Detalle: Sin camisa debajo
  - Cuello: Turtleneck chic complementario
- **Detalle piel:** Textura realista natural sin suavizado artificial.
- **Calidad:** Ultra-realistic 8K editorial portrait con claridad extrema.

## E: Entorno
- **Escena:** Estudio indoor cutting-edge, minimalista y moderno.
- **Fondo:** Seamless background completamente naranja, iluminado desde luces ocultas.
- **Props:** Sin objetos visibles, entorno limpio tipo Vogue studio.

## A: Acción / Postura
- **Pose:** Postura firme y sofisticada, estilo editorial high-fashion.
- **Expresión:** Calma, elegante, dominante.
- **Detalle visual:** El rostro parcialmente cubierto por sombra suave, revelando solo parte de la expresión.

## I: Iluminación
- **Tipo:** Iluminación editorial cinematográfica con rim light.
- **Fuentes:**
  - Glow naranja intenso del fondo
  - Rim lighting lateral que define el perfil
  - Sombras profundas limpias cubriendo parcialmente el rostro
- **Efecto:** Contornos esculpidos, atmósfera moderna y dramática.

## S: Sensación / Atmósfera
- **Mood:** Cool, editorial, misterioso, sofisticado.
- **Tono:** Vogue-style luxury minimalism con tensión visual.

## E: Estilo Visual
- **Estilo general:** Fotografía editorial hiperrealista de alta moda.
- **Acabado:** Gradientes cinematográficos, sombras profundas, aura moderna.
- **Paleta:** Naranja intenso + tonos oscuros mate para contraste elegante.
- **Calidad:** Ultra-realistic 8K con estética premium.

## M: Composición / Cámara
- **Lente:** 85mm portrait lens effect
- **Profundidad de campo:** Shallow DOF con fondo suave y sujeto dominante.
- **Plano:** Plano medio a close-up editorial.
- **Ángulo:** Eye-level con composición limpia centrada.
- **Enfoque:** Sharp focus en rostro visible, perfil iluminado y textura del jacket.

## P: Postproducción
- **Color grading:** Naranja cinematográfico intenso con contraste editorial frío.
- **Contraste:** Alto, con deep shadows limpias.
- **Nitidez:** UHD clarity extrema en piel, tela mate y rim light.
- **Acabado final:** Ultra-realistic 8K Vogue-style orange glow studio portrait con misterio y elegancia.
`,
        prompt_text: JSON.stringify({
            "title": "Orange Rim-Light Editorial — Shadowed Vogue Studio Portrait",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen subida como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y tipo de cuerpo exactamente idénticos a la referencia.",
                    "preservacion_total": "No modificar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Persona estilizada con presencia editorial de alta moda.",
                    "vestimenta": {
                        "outfit": "Ensemble de diseñador minimalista y high-end",
                        "jacket": "Chaqueta slim-fit de corte afilado con acabado mate",
                        "detalle": "Sin camisa debajo",
                        "cuello": "Turtleneck chic complementario"
                    },
                    "detalle_piel": "Textura realista natural sin suavizado artificial.",
                    "calidad": "Ultra-realistic 8K editorial portrait con claridad extrema."
                },
                "E_Entorno": {
                    "escena": "Estudio indoor cutting-edge, minimalista y moderno.",
                    "fondo": "Seamless background completamente naranja, iluminado desde luces ocultas.",
                    "props": "Sin objetos visibles, entorno limpio tipo Vogue studio."
                },
                "A_Accion_Postura": {
                    "pose": "Postura firme y sofisticada, estilo editorial high-fashion.",
                    "expresion": "Calma, elegante, dominante.",
                    "detalle_visual": "El rostro parcialmente cubierto por sombra suave, revelando solo parte de la expresión."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación editorial cinematográfica con rim light.",
                    "fuentes": [
                        "Glow naranja intenso del fondo",
                        "Rim lighting lateral que define el perfil",
                        "Sombras profundas limpias cubriendo parcialmente el rostro"
                    ],
                    "efecto": "Contornos esculpidos, atmósfera moderna y dramática."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cool, editorial, misterioso, sofisticado.",
                    "tono": "Vogue-style luxury minimalism con tensión visual."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía editorial hiperrealista de alta moda.",
                    "acabado": "Gradientes cinematográficos, sombras profundas, aura moderna.",
                    "paleta": "Naranja intenso + tonos oscuros mate para contraste elegante.",
                    "calidad": "Ultra-realistic 8K con estética premium."
                },
                "M_Composicion_Camara": {
                    "lente": "85mm portrait lens effect",
                    "profundidad_de_campo": "Shallow DOF con fondo suave y sujeto dominante.",
                    "plano": "Plano medio a close-up editorial.",
                    "angulo": "Eye-level con composición limpia centrada.",
                    "enfoque": "Sharp focus en rostro visible, perfil iluminado y textura del jacket."
                },
                "P_Postproduccion": {
                    "color_grading": "Naranja cinematográfico intenso con contraste editorial frío.",
                    "contraste": "Alto, con deep shadows limpias.",
                    "nitidez": "UHD clarity extrema en piel, tela mate y rim light.",
                    "acabado_final": "Ultra-realistic 8K Vogue-style orange glow studio portrait con misterio y elegancia."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/orange-rim-light-editorial.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fashion", name: "Fashion", slug: "fashion" },
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-studio", name: "Studio", slug: "studio" }
        ]
    },
    {
        id: "editorial-1",
        type: "prompt",
        title: "Elevator Neon Editorial — Black Suit Mysterious Portrait",
        slug: "elevator-neon-editorial-black-suit",
        summary: "Ultra-realistic 8K neon elevator fashion portrait con mood misterioso.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** El sujeto debe ser exactamente idéntico a la imagen de referencia: rostro, cabello, tono de piel, tipo de cuerpo y todos los rasgos físicos sin ninguna modificación.
- **Preservación total:** No alterar cara, proporciones, peinado ni características corporales.
- **Vestimenta:**
  - Outfit: Total black look
  - Blazer: Oversized blazer negro
  - Pantalones: Pantalones largos negros
  - Accesorios: Sunglasses oscuros, Vaso de café take-away en la mano
- **Detalle piel:** Textura realista natural, sin suavizado artificial.
- **Calidad:** Ultra-realistic 8K portrait rendering con máxima fidelidad.

## E: Entorno
- **Ubicación:** Elevador moderno con paredes metálicas reflectantes.
- **Materiales:** Metal pulido con reflejos visibles y highlights suaves.
- **Escena:** Interior cerrado, minimalista, urbano, elegante.

## A: Acción / Postura
- **Pose:** Postura relajada y editorial, actitud cool y dominante.
- **Lenguaje corporal:** Elegante, edgy, misterioso.
- **Acción:** Sosteniendo el vaso de café como detalle lifestyle sofisticado.

## I: Iluminación
- **Tipo:** Luz neón tenue desde el techo del elevador.
- **Características:** Sombras sutiles con highlights reflejados en paredes metálicas.
- **Efecto:** Contraste suave que crea atmósfera cinematográfica moderna.

## S: Sensación / Atmósfera
- **Mood:** Elegante, edgy, misterioso.
- **Tono:** Fashion editorial urbano con sensación nocturna futurista.

## E: Estilo Visual
- **Estilo general:** Retrato editorial de alta moda en escenario urbano minimalista.
- **Acabado:** Cinemático, moderno, sleek.
- **Detalle:** Texturas metálicas + outfit negro + estética de lujo oscuro.
- **Calidad:** Ultra-realistic 8K con enfoque premium.

## M: Composición / Cámara
- **Plano:** Plano medio o retrato de cuerpo parcial dentro del elevador.
- **Ángulo:** Eye-level para presencia dominante.
- **Encuadre:** Sujeto centrado, reflejos metálicos aportan profundidad.
- **Enfoque:** Sharp focus en rostro, gafas y vaso de café.

## P: Postproducción
- **Color grading:** Tonos fríos con contraste elegante tipo editorial.
- **Contraste:** Medio-alto para resaltar metal y outfit negro.
- **Nitidez:** Alta definición en piel, tela y reflejos.
- **Acabado final:** Ultra-realistic 8K neon elevator fashion portrait con mood misterioso.
`,
        prompt_text: JSON.stringify({
            "title": "Elevator Neon Editorial — Black Suit Mysterious Portrait",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "El sujeto debe ser exactamente idéntico a la imagen de referencia: rostro, cabello, tono de piel, tipo de cuerpo y todos los rasgos físicos sin ninguna modificación.",
                    "preservacion_total": "No alterar cara, proporciones, peinado ni características corporales.",
                    "vestimenta": {
                        "outfit": "Total black look",
                        "blazer": "Oversized blazer negro",
                        "pantalones": "Pantalones largos negros",
                        "accesorios": [
                            "Sunglasses oscuros",
                            "Vaso de café take-away en la mano"
                        ]
                    },
                    "detalle_piel": "Textura realista natural, sin suavizado artificial.",
                    "calidad": "Ultra-realistic 8K portrait rendering con máxima fidelidad."
                },
                "E_Entorno": {
                    "ubicacion": "Elevador moderno con paredes metálicas reflectantes.",
                    "materiales": "Metal pulido con reflejos visibles y highlights suaves.",
                    "escena": "Interior cerrado, minimalista, urbano, elegante."
                },
                "A_Accion_Postura": {
                    "pose": "Postura relajada y editorial, actitud cool y dominante.",
                    "lenguaje_corporal": "Elegante, edgy, misterioso.",
                    "accion": "Sosteniendo el vaso de café como detalle lifestyle sofisticado."
                },
                "I_Iluminacion": {
                    "tipo": "Luz neón tenue desde el techo del elevador.",
                    "caracteristicas": "Sombras sutiles con highlights reflejados en paredes metálicas.",
                    "efecto": "Contraste suave que crea atmósfera cinematográfica moderna."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Elegante, edgy, misterioso.",
                    "tono": "Fashion editorial urbano con sensación nocturna futurista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato editorial de alta moda en escenario urbano minimalista.",
                    "acabado": "Cinemático, moderno, sleek.",
                    "detalle": "Texturas metálicas + outfit negro + estética de lujo oscuro.",
                    "calidad": "Ultra-realistic 8K con enfoque premium."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio o retrato de cuerpo parcial dentro del elevador.",
                    "angulo": "Eye-level para presencia dominante.",
                    "encuadre": "Sujeto centrado, reflejos metálicos aportan profundidad.",
                    "enfoque": "Sharp focus en rostro, gafas y vaso de café."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos fríos con contraste elegante tipo editorial.",
                    "contraste": "Medio-alto para resaltar metal y outfit negro.",
                    "nitidez": "Alta definición en piel, tela y reflejos.",
                    "acabado_final": "Ultra-realistic 8K neon elevator fashion portrait con mood misterioso."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/elevator-neon-editorial.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fashion", name: "Fashion", slug: "fashion" },
            { id: "t-neon", name: "Neon", slug: "neon" },
            { id: "t-editorial", name: "Editorial", slug: "editorial" }
        ]
    },
    {
        id: "surreal-1",
        type: "prompt",
        title: "Floating Jump Above Mirror Water — Surreal Freedom Portrait",
        slug: "floating-jump-mirror-water-surreal",
        summary: "Ultra-realistic 8K floating surreal cinematic portrait con sensación de libertad.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** La persona debe ser exactamente idéntica a la imagen de referencia: rostro, cabello, tono de piel y todos los rasgos físicos sin ninguna alteración.
- **Preservación total:** No cambiar cara, peinado, proporciones ni características corporales.
- **Vestimenta:**
  - Pantalones blancos
  - Camisa blanca abierta, estilo ligero y limpio
- **Detalle piel:** Textura natural y realista, sin embellecimiento artificial.
- **Calidad:** Ultra-realistic 8K portrait rendering con fidelidad absoluta.

## E: Entorno
- **Escena:** Superficie de agua completamente calma y reflectante, actuando como espejo.
- **Efecto espejo:** El agua refleja el cuerpo completo, el cielo y las nubes.
- **Fondo:** Cielo abierto infinito lleno de nubes blancas esponjosas.
- **Atmósfera:** Surreal, mágica, onírica, sensación de libertad.

## A: Acción / Postura
- **Acción:** El sujeto está saltando elegantemente sobre el agua, como si flotara.
- **Pose:** Movimiento grácil y liviano, sensación de ingravidez.
- **Pies:** Descalzo, tocando suavemente el agua con los dedos.
- **Detalle interacción:** Ondas circulares (ripples) se expanden desde el contacto con el agua.

## I: Iluminación
- **Tipo:** Luz natural brillante de día.
- **Características:** Claridad alta, iluminación cinematográfica limpia.
- **Efecto:** Resalta contornos corporales y pureza del entorno reflejado.

## S: Sensación / Atmósfera
- **Mood:** Libertad, ligereza, espiritualidad visual.
- **Tono:** Dreamy cinematic surrealism con calma absoluta.

## E: Estilo Visual
- **Estilo general:** Fotografía hiperrealista cinematográfica surreal.
- **Texturas:**
  - Agua espejo ultra limpia
  - Reflejo perfecto cuerpo+cielo
  - Ondas suaves circulares
  - Nubes definidas y luminosas
- **Calidad:** Ultra-realistic 8K, sharp clarity, magical realism.

## M: Composición / Cámara
- **Plano:** Cuerpo completo mostrando salto y reflejo completo.
- **Encuadre:** Sujeto centrado con simetría entre cielo y espejo de agua.
- **Profundidad:** Espacio infinito horizontal con horizonte mínimo o inexistente.

## P: Postproducción
- **Color grading:** Tonos blancos y azules suaves, look limpio celestial.
- **Contraste:** Suave pero con alta claridad en reflejos.
- **Nitidez:** Máxima nitidez en rostro, ropa blanca, ondas y nubes.
- **Acabado final:** Ultra-realistic 8K floating surreal cinematic portrait con sensación de libertad.
`,
        prompt_text: JSON.stringify({
            "title": "Floating Jump Above Mirror Water — Surreal Freedom Portrait",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "La persona debe ser exactamente idéntica a la imagen de referencia: rostro, cabello, tono de piel y todos los rasgos físicos sin ninguna alteración.",
                    "preservacion_total": "No cambiar cara, peinado, proporciones ni características corporales.",
                    "vestimenta": {
                        "pantalon": "Pantalones blancos",
                        "camisa": "Camisa blanca abierta, estilo ligero y limpio"
                    },
                    "detalle_piel": "Textura natural y realista, sin embellecimiento artificial.",
                    "calidad": "Ultra-realistic 8K portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "escena": "Superficie de agua completamente calma y reflectante, actuando como espejo.",
                    "efecto_espejo": "El agua refleja el cuerpo completo, el cielo y las nubes.",
                    "fondo": "Cielo abierto infinito lleno de nubes blancas esponjosas.",
                    "atmósfera": "Surreal, mágica, onírica, sensación de libertad."
                },
                "A_Accion_Postura": {
                    "accion": "El sujeto está saltando elegantemente sobre el agua, como si flotara.",
                    "pose": "Movimiento grácil y liviano, sensación de ingravidez.",
                    "pies": "Descalzo, tocando suavemente el agua con los dedos.",
                    "detalle_interaccion": "Ondas circulares (ripples) se expanden desde el contacto con el agua."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural brillante de día.",
                    "caracteristicas": "Claridad alta, iluminación cinematográfica limpia.",
                    "efecto": "Resalta contornos corporales y pureza del entorno reflejado."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Libertad, ligereza, espiritualidad visual.",
                    "tono": "Dreamy cinematic surrealism con calma absoluta."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía hiperrealista cinematográfica surreal.",
                    "texturas": [
                        "Agua espejo ultra limpia",
                        "Reflejo perfecto cuerpo+cielo",
                        "Ondas suaves circulares",
                        "Nubes definidas y luminosas"
                    ],
                    "calidad": "Ultra-realistic 8K, sharp clarity, magical realism."
                },
                "M_Composicion_Camara": {
                    "plano": "Cuerpo completo mostrando salto y reflejo completo.",
                    "encuadre": "Sujeto centrado con simetría entre cielo y espejo de agua.",
                    "profundidad": "Espacio infinito horizontal con horizonte mínimo o inexistente."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos blancos y azules suaves, look limpio celestial.",
                    "contraste": "Suave pero con alta claridad en reflejos.",
                    "nitidez": "Máxima nitidez en rostro, ropa blanca, ondas y nubes.",
                    "acabado_final": "Ultra-realistic 8K floating surreal cinematic portrait con sensación de libertad."
                }
            }
        }, null, 2),
        category: "Surreal",
        level: "advanced",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/floating-jump-mirror-water-surreal.png",
        paywall_level: "pro",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-surreal", name: "Surreal", slug: "surreal" },
            { id: "t-freedom", name: "Freedom", slug: "freedom" },
            { id: "t-mirror", name: "Mirror Water", slug: "mirror-water" }
        ]
    },

    {
        "id": "nano-91",
        "type": "prompt",
        "title": "Google Maps to Ancient Treasure Map",
        "slug": "nano-banana-case-91",
        "summary": "",
        "body_markdown": "Transform the image to an ancient treasure map drawn on aged parchment. The map includes detailed elements like sailing ships on the ocean, old ports or castles on the coastline, a dotted path leading to a large 'X' marking the treasure spot, mountains, palm trees, and a decorative compass rose. The overall style is reminiscent of old pirate adventure films.",
        "prompt_text": "Transform the image to an ancient treasure map drawn on aged parchment. The map includes detailed elements like sailing ships on the ocean, old ports or castles on the coastline, a dotted path leading to a large 'X' marking the treasure spot, mountains, palm trees, and a decorative compass rose. The overall style is reminiscent of old pirate adventure films.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/ancient-treasure-map.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-90",
        "type": "prompt",
        "title": "Branded Mechanical Keycaps",
        "slug": "nano-banana-case-90",
        "summary": "",
        "body_markdown": "ultra-realistic 3D render of four mechanical keyboard keycaps in a tight 2x2 grid, all keys touching. View from an isometric angle. One key is transparent with the word “{just}” printed in {white}. The other three colors are: {black, purple, and white}. One key features the {Github} logo. The other two say \"{fork}\" and \"{it}\". Realistic plastic texture, rounded sculpted keycaps, soft shadows, clean light-gray background.",
        "prompt_text": "ultra-realistic 3D render of four mechanical keyboard keycaps in a tight 2x2 grid, all keys touching. View from an isometric angle. One key is transparent with the word “{just}” printed in {white}. The other three colors are: {black, purple, and white}. One key features the {Github} logo. The other two say \"{fork}\" and \"{it}\". Realistic plastic texture, rounded sculpted keycaps, soft shadows, clean light-gray background.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/github-fork-it-keys.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-89",
        "type": "prompt",
        "title": "Chrome Emoji Pin",
        "slug": "nano-banana-case-89",
        "summary": "",
        "body_markdown": "highly detailed 3D render of a single metallic {👍} emoji pin attached to a vertical product card, ultra-glossy chrome finish, smooth rounded 3D icon, stylized futuristic design, soft reflections, clean shadows, paper card has a die-cut euro hole at the top center, bold title “{Awesome}” above the pin, fun tagline “{Smash that ⭐ if you like it!}” below, soft gray background, soft studio lighting, minimal aesthetic",
        "prompt_text": "highly detailed 3D render of a single metallic {👍} emoji pin attached to a vertical product card, ultra-glossy chrome finish, smooth rounded 3D icon, stylized futuristic design, soft reflections, clean shadows, paper card has a die-cut euro hole at the top center, bold title “{Awesome}” above the pin, fun tagline “{Smash that ⭐ if you like it!}” below, soft gray background, soft studio lighting, minimal aesthetic",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/chrome-emoji-pin.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-87",
        "type": "prompt",
        "title": "Integrating Word Meaning into Letters",
        "slug": "nano-banana-case-87",
        "summary": "",
        "body_markdown": "Integrate the meaning of the word into the letters, cleverly blending graphics and letters.\nWord: {beautify}\nAdd a brief explanation of the word below.",
        "prompt_text": "Integrate the meaning of the word into the letters, cleverly blending graphics and letters.\nWord: {beautify}\nAdd a brief explanation of the word below.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/beautify-text-design.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-86",
        "type": "prompt",
        "title": "Double Exposure Epic Poster — Aragorn & Middle Earth",
        "slug": "nano-banana-case-86",
        "summary": "Composición artística de doble exposición centrada en la silueta de Aragorn.",
        "body_markdown": `
# Double Exposure Epic Poster — Aragorn & Middle Earth

*   **R (Render):** Composición artística de doble exposición centrada en la silueta de Aragorn, hijo de Arathorn. Forma base: Silueta humana definida y reconocible. Nivel realismo: Ilustración conceptual de alto detalle con acabado cinematográfico.
*   **E (Entorno):** Fondo monocromático de alto contraste. Mundo interno: Paisajes de la Tierra Media durante primavera vibrante (bosques de pinos, picos montañosos, senderos, caballo solitario).
*   **A (Acción):** Presentación: La silueta de Aragorn se presenta de perfil o frontal como figura central. Dinámica visual: Los paisajes emergen y se expanden a través del contorno. Narrativa: Sensación de viaje, soledad heroica y destino.
*   **I (Iluminación):** Iluminación conceptual integrada. Paisajes bañados por luz solar cálida dentro de la silueta, contrastando con el fondo oscuro.
*   **S (Sensación):** Épica, introspección, grandeza y melancolía. Tono: Heroico, poético, narrativo.
*   **E (Estilo):** Doble exposición artística estilo Midjourney. Técnica: Fusión, superposición y blending de capas. Color: Esquema vibrante interior vs monocromo exterior. Líneas: Trazos nítidos y deliberados.
*   **M (Composición):** Composición tipo póster. Ángulo frontal o ligeramente lateral. Encuadre: Figura central dominante con amplio espacio negativo.
*   **P (Post):** Alto contraste, negros profundos. Detalle general 1.45, fondo 1.4. Acabado: Masterpiece cinematográfico de doble exposición.
`,
        "prompt_text": JSON.stringify({
            "title": "Double Exposure Epic Poster — Aragorn & Middle Earth",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Composición artística de doble exposición centrada en la silueta de Aragorn, hijo de Arathorn.",
                    "forma_base": "Silueta humana definida y reconocible, utilizada como contenedor visual.",
                    "nivel_realismo": "Ilustración conceptual de alto detalle con acabado cinematográfico."
                },
                "E_Entorno": {
                    "fondo": "Fondo monocromático de alto contraste.",
                    "mundo_interno": "Paisajes de la Tierra Media durante primavera vibrante.",
                    "elementos_clave": "Bosques de pinos iluminados por el sol, picos montañosos, senderos y un caballo solitario avanzando."
                },
                "A_Accion_Presentacion": {
                    "presentacion": "La silueta de Aragorn se presenta de perfil o frontal como figura central.",
                    "dinamica_visual": "Los paisajes emergen y se expanden a través del contorno de la silueta.",
                    "narrativa": "Sensación de viaje, soledad heroica y destino."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación conceptual integrada.",
                    "caracteristicas": "Paisajes bañados por luz solar cálida dentro de la silueta, contrastando con el fondo oscuro."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Épica, introspección, grandeza y melancolía.",
                    "tono": "Heroico, poético, narrativo."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Doble exposición artística estilo Midjourney.",
                    "tecnica": "Fusión, superposición y blending de capas.",
                    "color": {
                        "interior_silueta": "Esquema de color completo y vibrante.",
                        "exterior": "Monocromo de alto contraste."
                    },
                    "lineas": "Trazos nítidos y deliberados que definen cada contorno con precisión emocional."
                },
                "M_Composicion_Camara": {
                    "plano": "Composición tipo póster.",
                    "angulo": "Vista frontal o ligeramente lateral de la silueta.",
                    "encuadre": "Figura central dominante con amplio espacio negativo alrededor."
                },
                "P_Postproduccion": {
                    "detalle": {
                        "nivel_general": 1.45,
                        "fondo": 1.4
                    },
                    "contraste": "Alto, con negros profundos y colores saturados internos.",
                    "acabado": "Masterpiece cinematográfico de doble exposición, limpio y refinado."
                }
            }
        }),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/double-exposure-aragorn.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-84",
        "type": "prompt",
        "title": "Chibi Silicone Wrist Rest — Panda Design",
        "slug": "nano-banana-case-84",
        "summary": "Reposamuñecas de silicona estilo chibi inspirado en el emoji de panda.",
        "body_markdown": `
# Chibi Silicone Wrist Rest — Panda Design

*   **R (Render):** Reposamuñecas de silicona estilo chibi inspirado en el emoji de panda. Forma: Redondeada, suave y adorable. Personificación: Diseño antropomórfico con expresión viva y brazos extendidos (gesto de abrazo). Estructura interna: Relleno de espuma de rebote lento.
*   **E (Entorno):** Reposando sobre un escritorio limpio. Fondo: Blanco sólido. Contexto: Escena minimalista tipo fotografía de producto.
*   **A (Acción):** Presentación: Posición de uso, listo para apoyar la muñeca. Interacción simulada: Brazos abiertos sugiriendo confort. Uso: Accesorio ergonómico para oficina.
*   **I (Iluminación):** Iluminación suave de estudio. Características: Luz difusa que resalta el volumen y evita sombras duras. Objetivo: Mostrar textura de silicona.
*   **S (Sensación):** Confort, ternura, cercanía. Tono: Cute, relajante, amigable.
*   **E (Estilo):** Producto chibi estilo cartoon. Materiales: Silicona suave mate grado alimenticio, espuma interior. Paleta: Blanco, negro y acentos suaves. Detalle: Texturas visibles de silicona.
*   **M (Composición):** Plano medio de producto. Ángulo: Vista frontal o superior (45°). Encuadre: Objeto centrado con espacio negativo.
*   **P (Post):** Colores limpios y naturales. Contraste bajo a medio. Acabado: Alta definición, nitidez para destacar textura.
`,
        "prompt_text": JSON.stringify({
            "title": "Chibi Silicone Wrist Rest — Panda Design",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Reposamuñecas de silicona estilo chibi inspirado en el emoji de panda.",
                    "forma": "Redondeada, suave y adorable, con proporciones cartoon.",
                    "personificacion": "Diseño antropomórfico con expresión viva y brazos extendidos como si abrazara la muñeca del usuario.",
                    "estructura_interna": "Relleno de espuma de rebote lento."
                },
                "E_Entorno": {
                    "superficie": "Reposando sobre un escritorio limpio.",
                    "fondo": "Fondo blanco sólido.",
                    "contexto": "Escena minimalista tipo fotografía de producto."
                },
                "A_Accion_Presentacion": {
                    "presentacion": "El objeto se muestra en posición de uso, listo para apoyar la muñeca.",
                    "interaccion_simulada": "Brazos abiertos sugiriendo un gesto de abrazo y confort.",
                    "uso": "Accesorio ergonómico para oficina."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación suave de estudio.",
                    "caracteristicas": "Luz difusa que resalta el volumen y evita sombras duras.",
                    "objetivo": "Mostrar claramente la textura de la silicona."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Confort, ternura, cercanía.",
                    "tono": "Cute, relajante, amigable."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Producto chibi estilo cartoon.",
                    "materiales": {
                        "exterior": "Silicona suave de grado alimenticio con acabado mate y amigable con la piel.",
                        "interior": "Espuma de rebote lento."
                    },
                    "paleta_color": "Esquema clásico del panda (blanco, negro y acentos suaves).",
                    "detalle": "Texturas visibles de silicona enfatizando comodidad."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio de producto.",
                    "angulo": "Vista frontal o ángulo superior a 45 grados.",
                    "encuadre": "Objeto centrado con espacio negativo alrededor."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores limpios y naturales.",
                    "contraste": "Bajo a medio.",
                    "acabado": "Fotografía de producto en alta definición, clara y atractiva para e-commerce.",
                    "enfoque": "Alta nitidez para destacar textura y suavidad."
                }
            }
        }),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/chibi-panda-wrist-rest.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-83",
        "type": "prompt",
        "title": "Advanced Anatomical Visualization — Highlighted Area",
        "slug": "nano-banana-case-83",
        "summary": "Ilustración digital del sujeto representado mediante líneas luminosas que delinean su anatomía.",
        "body_markdown": `
# Advanced Anatomical Visualization — Highlighted Area

*   **R (Render):** Ilustración digital del sujeto representado mediante líneas luminosas que delinean su anatomía. Sujeto: [SUBJECT]. Representación: Estructura anatómica definida por líneas azules limpias y brillantes. Nivel realismo: Visualización conceptual avanzada, no fotorrealista.
*   **E (Entorno):** Fondo oscuro uniforme. Función: Maximizar el contraste y resaltar la forma. Contexto: Escena técnica y minimalista.
*   **A (Acción):** Presentación: Sujeto estático, posición clara y legible. Enfoque: Observación y análisis visual. Punto clave: Zona destacada como área de interés.
*   **I (Iluminación):** Iluminación generada por las líneas. Características: Líneas azules brillantes vs fondo oscuro. Énfasis: Zona [PART] con resplandor rojo intenso.
*   **S (Sensación):** Claridad, precisión, enfoque. Tono: Educativo, científico, futurista.
*   **E (Estilo):** Visualización anatómica avanzada. Inspiración: Imagen médica y escaneo tecnológico. Colores: Azul luminoso (estructura) + Rojo brillante (zona destacada). Líneas: Trazos precisos y definidos.
*   **M (Composición):** Plano medio o general. Ángulo: Frontal o perspectiva ligera. Encuadre: Sujeto centrado ocupando el foco.
*   **P (Post):** Alto contraste, alta nitidez en contornos. Acabado: Estética pulida tipo imaging científico. Efectos: Brillo suave (glow).
`,
        "prompt_text": JSON.stringify({
            "title": "Advanced Anatomical Visualization — Highlighted Area",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Ilustración digital del sujeto representado mediante líneas luminosas que delinean su anatomía.",
                    "sujeto": "[SUBJECT]",
                    "representacion": "Estructura anatómica definida por líneas azules limpias y brillantes.",
                    "nivel_realismo": "Visualización conceptual avanzada, no fotorrealista."
                },
                "E_Entorno": {
                    "fondo": "Fondo oscuro uniforme.",
                    "funcion": "Maximizar el contraste y resaltar la forma del sujeto.",
                    "contexto": "Escena técnica y minimalista."
                },
                "A_Accion_Presentacion": {
                    "presentacion": "El sujeto se muestra estático, en posición clara y legible.",
                    "enfoque": "Diseño orientado a observación y análisis visual.",
                    "punto_clave": "Una zona específica del cuerpo destacada como área de interés."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación generada por las propias líneas luminosas.",
                    "caracteristicas": "Líneas azules brillantes contrastando con el fondo oscuro.",
                    "enfasis": "Zona [PART] iluminada con un resplandor rojo intenso."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Claridad, precisión, enfoque.",
                    "tono": "Educativo, científico, futurista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Visualización anatómica avanzada.",
                    "inspiracion": "Técnicas de imagen médica y escaneo tecnológico.",
                    "colores": {
                        "estructura_principal": "Azul luminoso limpio.",
                        "zona_destacada": "Rojo brillante para indicar importancia."
                    },
                    "lineas": "Trazos precisos, limpios y bien definidos."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio o general del sujeto completo.",
                    "angulo": "Vista frontal o ligeramente en perspectiva.",
                    "encuadre": "Composición centrada con el sujeto ocupando el foco visual."
                },
                "P_Postproduccion": {
                    "contraste": "Alto.",
                    "nitidez": "Alta definición en líneas y contornos.",
                    "acabado": "Estética pulida tipo imaging científico avanzado.",
                    "efectos": "Brillo suave (glow) en líneas y área destacada."
                }
            }
        }),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/glowing-lines-anatomy.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-80",
        "type": "prompt",
        "title": "Tarjeta de Presentación Estilo Código",
        "slug": "nano-banana-case-80",
        "summary": "",
        "body_markdown": "A close-up shot of a hand holding a business card designed to look like a JSON file opened in VS Code. The card shows code formatted in realistic syntax-highlighted JSON code. The window includes typical toolbar icons and a title bar labeled Business Card.json, styled exactly like the interface of VS Code. Background is slightly blurred, keeping the focus on the card.\nThe card displays the following code formatted in JSON:\n{\n\"name\": \"Jamez Bondos\",\n\"title\": \"Your Title\",\n\"email\": \"your@email.com\",\n\"link\": \"yourwebsite\"\n}",
        "prompt_text": "A close-up shot of a hand holding a business card designed to look like a JSON file opened in VS Code. The card shows code formatted in realistic syntax-highlighted JSON code. The window includes typical toolbar icons and a title bar labeled Business Card.json, styled exactly like the interface of VS Code. Background is slightly blurred, keeping the focus on the card.\nThe card displays the following code formatted in JSON:\n{\n\"name\": \"Jamez Bondos\",\n\"title\": \"Your Title\",\n\"email\": \"your@email.com\",\n\"link\": \"yourwebsite\"\n}",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ],
        "featured_image_url": "/images/cases/code-style-card.jpg"
    },
    {
        "id": "nano-79",
        "type": "prompt",
        "title": "LEGO Cityscape — Shanghai Bund & Pudong Skyline",
        "slug": "nano-banana-case-79",
        "summary": "Escena urbana altamente detallada recreada completamente en estilo LEGO.",
        "body_markdown": `
# LEGO Cityscape — Shanghai Bund & Pudong Skyline

*   **R (Render):** Escena urbana altamente detallada recreada completamente en estilo LEGO. Estilo de construcción: Bloques LEGO con geometría modular y colores vivos. Escala: Paisaje urbano amplio con arquitectura histórica y moderna.
*   **E (Entorno):** Ubicación: Shanghai, área del Bund y skyline de Pudong. Ambientación: Ciudad vibrante y moderna recreada como diorama LEGO. Elementos clave: Edificios históricos del Bund en primer plano y skyline de Lujiazui (Oriental Pearl Tower, Shanghai Tower, etc.) en el fondo.
*   **A (Acción):** Dinámica: Escena urbana activa y viva. Elementos humanos: Minifiguras LEGO caminando, tomando fotos y haciendo turismo. Tráfico: Autos LEGO clásicos estacionados y circulando. Actividad acuática: Ferris y barcos turísticos LEGO navegando el río.
*   **I (Iluminación):** Iluminación diurna brillante. Características: Luz uniforme que realza los colores LEGO sin sombras dramáticas.
*   **S (Sensación):** Energía, modernidad, vitalidad urbana. Tono: Alegre, dinámico, optimista.
*   **E (Estilo):** Diorama urbano estilo LEGO altamente detallado. Arquitectura: Bund (histórico, neoclásico) vs Pudong (rascacielos modernos). Materiales: Plásticos LEGO con acabados limpios y colores saturados. Cielo: Azul brillante LEGO con nubes de bloques.
*   **M (Composición):** Plano general amplio del paisaje urbano. Ángulo ligeramente elevado. Encuadre: Composición panorámica equilibrada entre Bund, río y skyline.
*   **P (Post):** Colores saturados y brillantes, fieles al estilo LEGO. Contraste medio. Acabado: Look limpio, nítido y altamente detallado, estilo maqueta coleccionable.
`,
        "prompt_text": JSON.stringify({
            "title": "LEGO Cityscape — Shanghai Bund & Pudong Skyline",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Escena urbana altamente detallada recreada completamente en estilo LEGO.",
                    "estilo_construccion": "Bloques LEGO con geometría modular y colores vivos.",
                    "escala": "Paisaje urbano amplio con arquitectura histórica y moderna."
                },
                "E_Entorno": {
                    "ubicacion": "Shanghai, área del Bund y skyline de Pudong.",
                    "ambientacion": "Ciudad vibrante y moderna recreada como diorama LEGO.",
                    "elementos_clave": {
                        "primer_plano": "Edificios históricos del Bund en estilos occidental y neoclásico.",
                        "fondo": "Río Huangpu y skyline de Lujiazui."
                    }
                },
                "A_Accion_Presentacion": {
                    "dinamica": "Escena urbana activa y viva.",
                    "elementos_humanos": "Minifiguras LEGO caminando, tomando fotos y haciendo turismo.",
                    "trafico": "Autos LEGO clásicos estacionados y circulando por la calle.",
                    "actividad_acuatica": "Ferris y barcos turísticos LEGO navegando el río."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación diurna brillante.",
                    "caracteristicas": "Luz uniforme que realza los colores LEGO sin sombras dramáticas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Energía, modernidad, vitalidad urbana.",
                    "tono": "Alegre, dinámico, optimista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Diorama urbano estilo LEGO altamente detallado.",
                    "arquitectura": {
                        "bund": "Edificios históricos con torres de reloj, cúpulas y columnatas.",
                        "pudong": "Rascacielos modernos LEGO incluyendo Oriental Pearl Tower, Shanghai Tower, Jin Mao Tower y Shanghai World Financial Center."
                    },
                    "materiales": "Plásticos LEGO con acabados limpios y colores saturados.",
                    "cielo": "Azul brillante LEGO con nubes blancas construidas en bloques."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano general amplio del paisaje urbano.",
                    "angulo": "Ángulo ligeramente elevado.",
                    "encuadre": "Composición panorámica equilibrada entre Bund, río y skyline."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores saturados y brillantes, fieles al estilo LEGO.",
                    "contraste": "Medio.",
                    "acabado": "Look limpio, nítido y altamente detallado, estilo maqueta coleccionable."
                }
            }
        }),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/lego-shanghai-bund.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-78",
        "type": "prompt",
        "title": "Glass Retexturing",
        "slug": "nano-banana-case-78",
        "summary": "",
        "body_markdown": "retexture the image attached based on the json below:\n\n{\n\"style\": \"photorealistic\",\n\"material\": \"glass\",\n\"background\": \"plain white\",\n\"object_position\": \"centered\",\n\"lighting\": \"soft, diffused studio lighting\",\n\"camera_angle\": \"eye-level, straight-on\",\n\"resolution\": \"high\",\n\"aspect_ratio\": \"2:3\",\n\"details\": {\n\"reflections\": true,\n\"shadows\": false,\n\"transparency\": true\n}\n}",
        "prompt_text": "retexture the image attached based on the json below:\n\n{\n\"style\": \"photorealistic\",\n\"material\": \"glass\",\n\"background\": \"plain white\",\n\"object_position\": \"centered\",\n\"lighting\": \"soft, diffused studio lighting\",\n\"camera_angle\": \"eye-level, straight-on\",\n\"resolution\": \"high\",\n\"aspect_ratio\": \"2:3\",\n\"details\": {\n\"reflections\": true,\n\"shadows\": false,\n\"transparency\": true\n}\n}",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/silver-crochet-dog.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-77",
        "type": "prompt",
        "title": "Crystal Ball World — Chang’e Flying to the Moon",
        "slug": "nano-banana-case-77",
        "summary": "Esfera de cristal delicada que contiene un mundo tridimensional en miniatura.",
        "body_markdown": `
# Crystal Ball World — Chang’e Flying to the Moon

*   **R (Render):** Esfera de cristal delicada que contiene un mundo tridimensional en miniatura. Bola de cristal transparente con superficie pulida y refractiva. Escena 3D detallada inspirada en el mito de Chang’e volando hacia la Luna. Objeto exterior fotorrealista con mundo interno estilizado.
*   **E (Entorno):** Mesa cálida y suavemente iluminada junto a una ventana. Fondo desenfocado y brumoso con tonos cálidos. Luz solar atravesando la esfera y el ambiente circundante.
*   **A (Acción):** La bola de cristal descansa tranquilamente como objeto central. Escena narrativa congelada en un momento poético. Personajes chibi interactuando emocionalmente dentro del mundo en miniatura.
*   **I (Iluminación):** Iluminación natural cálida. La luz del sol se refracta a través del cristal creando destellos dorados. Iluminación suave que baña el entorno con un resplandor reconfortante.
*   **S (Sensación):** Ensueño, calma, ternura, maravilla. Poético, mágico, reconfortante.
*   **E (Estilo):** Escena híbrida de realismo mágico. Mundo 3D en estilo chibi adorable y detallado. Elementos de fantasía de Asia Oriental. Texturas: Superficie clara con refracción y reflejos suaves; Materiales suaves, colores ricos y detalles intrincados.
*   **M (Composición):** Primer plano a plano medio del objeto. Ángulo frontal ligeramente elevado. Composición centrada con la bola de cristal como foco absoluto, fondo desenfocado.
*   **P (Post):** Paleta cálida dorada con acentos suaves y etéreos. Contraste suave a medio. Look de realismo mágico cinematográfico, lujoso pero elegante. Brillos luminosos sutiles, partículas de luz, atmósfera viva.
`,
        "prompt_text": JSON.stringify({
            "title": "Crystal Ball World — Chang’e Flying to the Moon",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Esfera de cristal delicada que contiene un mundo tridimensional en miniatura.",
                    "estructura": "Bola de cristal transparente con superficie pulida y refractiva.",
                    "contenido_interno": "Escena 3D detallada inspirada en el mito de Chang’e volando hacia la Luna.",
                    "nivel_realismo": "Objeto exterior fotorrealista con mundo interno estilizado."
                },
                "E_Entorno": {
                    "ubicacion": "Mesa cálida y suavemente iluminada junto a una ventana.",
                    "ambientacion_externa": "Fondo desenfocado y brumoso con tonos cálidos.",
                    "elementos_clave": "Luz solar atravesando la esfera y el ambiente circundante."
                },
                "A_Accion_Presentacion": {
                    "presentacion": "La bola de cristal descansa tranquilamente como objeto central.",
                    "dinamica_interna": "Escena narrativa congelada en un momento poético.",
                    "interaccion": "Personajes chibi interactuando emocionalmente dentro del mundo en miniatura."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación natural cálida.",
                    "caracteristicas": "La luz del sol se refracta a través del cristal creando destellos dorados.",
                    "efecto": "Iluminación suave que baña el entorno con un resplandor reconfortante."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Ensueño, calma, ternura, maravilla.",
                    "tono": "Poético, mágico, reconfortante."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Escena híbrida de realismo mágico.",
                    "estilo_interno": "Mundo 3D en estilo chibi adorable y detallado.",
                    "influencia_cultural": "Elementos de fantasía de Asia Oriental.",
                    "texturas": {
                        "cristal": "Superficie clara con refracción y reflejos suaves.",
                        "interior": "Materiales suaves, colores ricos y detalles intrincados."
                    }
                },
                "M_Composicion_Camara": {
                    "plano": "Primer plano a plano medio del objeto.",
                    "angulo": "Ángulo frontal ligeramente elevado.",
                    "encuadre": "Composición centrada con la bola de cristal como foco absoluto, fondo desenfocado."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta cálida dorada con acentos suaves y etéreos.",
                    "contraste": "Suave a medio.",
                    "acabado": "Look de realismo mágico cinematográfico, lujoso pero elegante.",
                    "efectos": "Brillos luminosos sutiles, partículas de luz, atmósfera viva."
                }
            }
        }),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/crystal-ball-moon.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },


    {
        "id": "nano-74",
        "type": "prompt",
        "title": "Creative Logo Shaped Bookshelf",
        "slug": "nano-banana-case-74",
        "summary": "",
        "body_markdown": "Create a photograph of a modern bookshelf inspired by the shape of [LOGO]. The bookshelf features flowing, interconnected curves forming multiple sections of varying sizes. It is made of sleek matte black metal with wooden shelves inside the loops. Soft, warm LED lighting outlines the inner curves. The bookshelf is mounted on a neutral-toned wall and holds a mix of colorful books, small plants, and minimalistic art pieces. The overall vibe is creative, elegant, and slightly futuristic",
        "prompt_text": "Create a photograph of a modern bookshelf inspired by the shape of [LOGO]. The bookshelf features flowing, interconnected curves forming multiple sections of varying sizes. It is made of sleek matte black metal with wooden shelves inside the loops. Soft, warm LED lighting outlines the inner curves. The bookshelf is mounted on a neutral-toned wall and holds a mix of colorful books, small plants, and minimalistic art pieces. The overall vibe is creative, elegant, and slightly futuristic",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-72",
        "type": "prompt",
        "title": "Gold Pendant Necklace",
        "slug": "nano-banana-case-72",
        "summary": "",
        "body_markdown": "A photorealistic close-up of a gold pendant necklace held by female hand. The pendant features a bas-relief engraving of [image /emoji]. The pendant hangs from a polished gold chain. The background is softly blurred with neutral beige tones, and natural lighting, realistic skin tones, Product photography, 16:9 aspect ratio.",
        "prompt_text": "A photorealistic close-up of a gold pendant necklace held by female hand. The pendant features a bas-relief engraving of [image /emoji]. The pendant hangs from a polished gold chain. The background is softly blurred with neutral beige tones, and natural lighting, realistic skin tones, Product photography, 16:9 aspect ratio.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-71",
        "type": "prompt",
        "title": "Miniature Cyberpunk Tilt-Shift Landscape",
        "slug": "nano-banana-case-71",
        "summary": "",
        "body_markdown": "A highly detailed miniature [Cyberpunk] landscape viewed from above, using a tilt-shift lens effect. The scene is filled with toy-like elements, all rendered in high-resolution CG. Dramatic lighting creates a cinematic atmosphere, with vivid colors and strong contrast, emphasizing depth of field and a realistic micro-perspective, making the viewer feel as if overlooking a toy world. The image contains many visual jokes and details worth repeated viewing.",
        "prompt_text": "A highly detailed miniature [Cyberpunk] landscape viewed from above, using a tilt-shift lens effect. The scene is filled with toy-like elements, all rendered in high-resolution CG. Dramatic lighting creates a cinematic atmosphere, with vivid colors and strong contrast, emphasizing depth of field and a realistic micro-perspective, making the viewer feel as if overlooking a toy world. The image contains many visual jokes and details worth repeated viewing.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-70",
        "type": "prompt",
        "title": "Original Pokemon Creation",
        "slug": "nano-banana-case-70",
        "summary": "",
        "body_markdown": "Create an original creature inspired by this object (photo provided). The creature should look like it belongs in a fantasy monster-catching universe, with a cute or cool design influenced by retro Japanese RPG monster art. The image must include:\n– A full-body view of the creature, inspired by the shape, materials or purpose of the object.\n– A small orb or capsule (similar an a pokeball) at its feet, designed with patterns and colors matching the object’s look — not a standard Pokéball, but a custom design.\n– An invented name for the creature, displayed next to or below it. – Its elemental type (e.g., Fire, Water, Metal, Nature, Electric…), based on the object’s core properties. The illustration should look like it comes from a fantasy creature encyclopedia, with clean lines, soft shadows, and an expressive, character-driven design.",
        "prompt_text": "Create an original creature inspired by this object (photo provided). The creature should look like it belongs in a fantasy monster-catching universe, with a cute or cool design influenced by retro Japanese RPG monster art. The image must include:\n– A full-body view of the creature, inspired by the shape, materials or purpose of the object.\n– A small orb or capsule (similar an a pokeball) at its feet, designed with patterns and colors matching the object’s look — not a standard Pokéball, but a custom design.\n– An invented name for the creature, displayed next to or below it. – Its elemental type (e.g., Fire, Water, Metal, Nature, Electric…), based on the object’s core properties. The illustration should look like it comes from a fantasy creature encyclopedia, with clean lines, soft shadows, and an expressive, character-driven design.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-69",
        "type": "prompt",
        "title": "Silhouette Art",
        "slug": "nano-banana-case-69",
        "summary": "",
        "body_markdown": "The silhouette of a basic outline of a [PROMPT]. The background is bright yellow, and the silhouette is solid black.",
        "prompt_text": "The silhouette of a basic outline of a [PROMPT]. The background is bright yellow, and the silhouette is solid black.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-67",
        "type": "prompt",
        "title": "Ultra-realistic 3D Game",
        "slug": "nano-banana-case-67",
        "summary": "",
        "body_markdown": "Ultra-realistic 3D rendered image that replicates the character design of Natasha from Command & Conquer: Red Alert 3 in 2008, following the original model exactly. The scene is set in a dim and cluttered bedroom from the year 2008. The character is sitting on the carpet, facing an old-fashioned television that is playing Command & Conquer: Red Alert 3 and a game console controller.\nThe entire room is filled with a nostalgic atmosphere of the year 2008: snack packaging bags, soda cans, posters, and tangled wires are everywhere. Natasha Volkova is captured in the moment of turning her head, looking back at the camera over her shoulder. There is an innocent smile on her iconic ethereally beautiful face. Her upper body is slightly twisted, with a natural dynamic, as if she is reacting to being startled by the flash.\nThe flash slightly overexposes her face and clothes, making her silhouette stand out more prominently in the dimly lit room. The whole photo appears raw and natural. The strong contrast between light and dark casts deep shadows behind her. The image is full of tactile feel, with a simulated texture that resembles an authentic film snapshot from 2008.",
        "prompt_text": "Ultra-realistic 3D rendered image that replicates the character design of Natasha from Command & Conquer: Red Alert 3 in 2008, following the original model exactly. The scene is set in a dim and cluttered bedroom from the year 2008. The character is sitting on the carpet, facing an old-fashioned television that is playing Command & Conquer: Red Alert 3 and a game console controller.\nThe entire room is filled with a nostalgic atmosphere of the year 2008: snack packaging bags, soda cans, posters, and tangled wires are everywhere. Natasha Volkova is captured in the moment of turning her head, looking back at the camera over her shoulder. There is an innocent smile on her iconic ethereally beautiful face. Her upper body is slightly twisted, with a natural dynamic, as if she is reacting to being startled by the flash.\nThe flash slightly overexposes her face and clothes, making her silhouette stand out more prominently in the dimly lit room. The whole photo appears raw and natural. The strong contrast between light and dark casts deep shadows behind her. The image is full of tactile feel, with a simulated texture that resembles an authentic film snapshot from 2008.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-66",
        "type": "prompt",
        "title": "Creative Silk Universe",
        "slug": "nano-banana-case-66",
        "summary": "",
        "body_markdown": "Transform the {❄️} into a soft 3D object with a silk texture. The entire surface of the object is wrapped in smooth and flowing silk fabric, featuring surreal wrinkle details, soft highlights, and shadows. The object gently floats in the center of a clean light gray background, creating a light and elegant atmosphere. The overall style is surreal, tactile, and modern, conveying a sense of comfort and refined playfulness. Studio lighting, high-resolution rendering.",
        "prompt_text": "Transform the {❄️} into a soft 3D object with a silk texture. The entire surface of the object is wrapped in smooth and flowing silk fabric, featuring surreal wrinkle details, soft highlights, and shadows. The object gently floats in the center of a clean light gray background, creating a light and elegant atmosphere. The overall style is surreal, tactile, and modern, conveying a sense of comfort and refined playfulness. Studio lighting, high-resolution rendering.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-65",
        "type": "prompt",
        "title": "Surreal Underwater Scene Popsicle",
        "slug": "nano-banana-case-65",
        "summary": "",
        "body_markdown": "Tilt POV shot of a hand holding a surreal popsicle with a transparent blue exterior, revealing an underwater scene inside: a tiny scuba diver with tiny fish floating with bubbles, ocean waves crashing, and a green popsicle stick running through the center. The popsicle is melting slightly, with a wooden stick at the bottom, hand is holding it by the wooden stick, soft focus new york street background, premium product photography",
        "prompt_text": "Tilt POV shot of a hand holding a surreal popsicle with a transparent blue exterior, revealing an underwater scene inside: a tiny scuba diver with tiny fish floating with bubbles, ocean waves crashing, and a green popsicle stick running through the center. The popsicle is melting slightly, with a wooden stick at the bottom, hand is holding it by the wooden stick, soft focus new york street background, premium product photography",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-64",
        "type": "prompt",
        "title": "Steampunk Mechanical Fish",
        "slug": "nano-banana-case-64",
        "featured_image_url": "/images/prompts/nano-64-fish.jpg",
        "summary": "",
        "body_markdown": "A steampunk-style mechanical fish with a brass body and clearly visible gear mechanisms when in motion.\nIts mechanical teeth can be slightly seen, neatly arranged and closed, with both upper and lower teeth visible. Each tooth is triangular in shape and made of diamond material.\nThe tail fin has a metal wire mesh structure, while other fins are made of semi-transparent amber-colored glass with some subtle bubbles inside.\nThe eyes are multi-faceted rubies, with clearly visible reflective shine.\nThe fish has \"f-is-h\" text clearly visible on its body, with all lowercase letters and careful attention to the hyphen placement.\nThe image is square, showing the entire fish in the center of the frame, with its head pointing to the right. There is adequate white space around the fish, with more space on the left and right sides. The background has subtle steampunk-style gear patterns.\nThe entire fish looks very cool. This is a high-definition image with extremely rich details and unique texture and aesthetics. The image should not be too dark.",
        "prompt_text": "A steampunk-style mechanical fish with a brass body and clearly visible gear mechanisms when in motion.\nIts mechanical teeth can be slightly seen, neatly arranged and closed, with both upper and lower teeth visible. Each tooth is triangular in shape and made of diamond material.\nThe tail fin has a metal wire mesh structure, while other fins are made of semi-transparent amber-colored glass with some subtle bubbles inside.\nThe eyes are multi-faceted rubies, with clearly visible reflective shine.\nThe fish has \"f-is-h\" text clearly visible on its body, with all lowercase letters and careful attention to the hyphen placement.\nThe image is square, showing the entire fish in the center of the frame, with its head pointing to the right. There is adequate white space around the fish, with more space on the left and right sides. The background has subtle steampunk-style gear patterns.\nThe entire fish looks very cool. This is a high-definition image with extremely rich details and unique texture and aesthetics. The image should not be too dark.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-63",
        "type": "prompt",
        "title": "Emoji Cream Popsicle",
        "slug": "nano-banana-case-63",
        "summary": "",
        "body_markdown": "Generate an image: Transform the [🍓] into a creamy ice cream bar, with cream flowing in curved swirls on top, making it look delicious and tempting. The ice cream is floating at a 45-degree angle in mid-air, rendered in a cute chibi-style 3D aesthetic, set against a solid color background with a unified color palette.",
        "prompt_text": "Generate an image: Transform the [🍓] into a creamy ice cream bar, with cream flowing in curved swirls on top, making it look delicious and tempting. The ice cream is floating at a 45-degree angle in mid-air, rendered in a cute chibi-style 3D aesthetic, set against a solid color background with a unified color palette.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-62",
        "type": "prompt",
        "title": "Kawaii Enamel Pin",
        "slug": "nano-banana-case-62",
        "summary": "",
        "body_markdown": "Turn the subject in the attached image into a kawaii enamel pin. Use glossy metal outlines and vibrant enamel fill. No extra added features. Square mockup format. White background.",
        "prompt_text": "Turn the subject in the attached image into a kawaii enamel pin. Use glossy metal outlines and vibrant enamel fill. No extra added features. Square mockup format. White background.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-61",
        "type": "prompt",
        "title": "Fake Tweet Screenshot (Einstein)",
        "slug": "nano-banana-case-61",
        "summary": "",
        "body_markdown": "a hyper realistic twitter post by Albert Einstein right after finishing the theory of relativity. include a selfie where you can clearly see scribbled equations and a chalkboard in the background. have it visible that the post was liked by Nikola Tesla",
        "prompt_text": "a hyper realistic twitter post by Albert Einstein right after finishing the theory of relativity. include a selfie where you can clearly see scribbled equations and a chalkboard in the background. have it visible that the post was liked by Nikola Tesla",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-60",
        "type": "prompt",
        "title": "Emoji Tufted Rug",
        "slug": "nano-banana-case-60",
        "summary": "",
        "body_markdown": "Create an image of a colorful, hand-tufted rug in the shape of 🦖 emoji, placed on a simple floor background. The rug has a bold, playful design with soft, fluffy texture and thick yarn details. Shot from above, in natural daylight, with a slightly quirky, DIY aesthetic. Vibrant colors, cartoonish outlines, and tactile, cozy material—similar to handmade tufted art rugs.",
        "prompt_text": "Create an image of a colorful, hand-tufted rug in the shape of 🦖 emoji, placed on a simple floor background. The rug has a bold, playful design with soft, fluffy texture and thick yarn details. Shot from above, in natural daylight, with a slightly quirky, DIY aesthetic. Vibrant colors, cartoonish outlines, and tactile, cozy material—similar to handmade tufted art rugs.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-58",
        "type": "prompt",
        "title": "Cloud Art",
        "slug": "nano-banana-case-58",
        "summary": "",
        "body_markdown": "Generate image: A photograph captures a daytime scene with a [SUBJECT/OBJECT] formed by scattered clouds in the sky, positioned above a [LOCATION]",
        "prompt_text": "Generate image: A photograph captures a daytime scene with a [SUBJECT/OBJECT] formed by scattered clouds in the sky, positioned above a [LOCATION]",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-57",
        "type": "prompt",
        "title": "Pixel Art Burger — 8-Bit Icon",
        "slug": "nano-banana-case-57",
        "summary": "Icono de hamburguesa pixel art estilo 8-bit clásico.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Icono pixel art 8-bit de hamburguesa. Lineart negro grueso, colores planos vibrantes.
*   **E (Entorno):** Fondo blanco puro minimalista.
*   **A (Acción):** Objeto estático centrado.
*   **I (Iluminación):** Plana, sin sombras complejas (estilo sprite).
*   **S (Sensación):** Retro, nostálgico, arcade, apetitoso.
*   **E (Estilo):** Pixel art clásico, estética de videojuego retro.
*   **M (Composición):** Icono cuadrado centrado.
*   **P (Post):** Upscaling nítido (nearest neighbor) para mantener bordes duros.
        `,
        "prompt_text": JSON.stringify({
            "title": "Pixel Art Burger — 8-Bit Icon",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Icono pixel art de una hamburguesa clásica con queso.",
                    "estilo_pixel": "8-bit o 16-bit, píxeles visibles y definidos.",
                    "detalles_objeto": "Pan dorado con semillas de sésamo, carne marrón, queso amarillo derretido, lechuga verde y tomate rojo.",
                    "contornos": "Borde negro de 1 pixel de grosor (outline) para definición clara."
                },
                "E_Entorno": {
                    "fondo": "Blanco puro (#FFFFFF).",
                    "contexto": "Sprite aislado tipo asset de videojuego o icono de UI."
                },
                "A_Accion_Presentacion": {
                    "presentacion": "Vista frontal o ligeramente isométrica.",
                    "estado": "Estático, listo para ser consumido (metafóricamente)."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación plana (flat shading) o sombreado básico de píxeles.",
                    "caracteristicas": "Colores sólidos sin degradados suaves."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Divertido, retro, arcade.",
                    "estetica": "Nostalgia de videojuegos clásicos."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Pixel Art genuino.",
                    "paleta_colores": "Colores saturados y limitados (paleta retro)."
                },
                "M_Composicion_Camara": {
                    "encuadre": "Centrado perfecto con espacio negativo alrededor.",
                    "ratio": "Cuadrado (1:1)."
                },
                "P_Postproduccion": {
                    "nitidez": "Bordes duros (no anti-aliasing)."
                }
            }
        }, null, 2),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/pixel-art-burger.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-56",
        "type": "prompt",
        "title": "Miniature 3D Building",
        "slug": "nano-banana-case-56",
        "summary": "",
        "body_markdown": "3D chibi-style miniature design of a whimsical Starbucks café, shaped like an oversized takeaway coffee cup complete with a lid and straw. The building has two floors, with large glass windows that clearly reveal a cozy and refined interior: wooden furniture, warm lighting, and busy baristas at work. On the street, cute little figurines are strolling or sitting, surrounded by benches, street lamps, and potted plants, creating a charming corner of the city. The overall aesthetic follows a detailed and realistic miniature cityscape style, with soft lighting that evokes a relaxing afternoon atmosphere.",
        "prompt_text": "3D chibi-style miniature design of a whimsical Starbucks café, shaped like an oversized takeaway coffee cup complete with a lid and straw. The building has two floors, with large glass windows that clearly reveal a cozy and refined interior: wooden furniture, warm lighting, and busy baristas at work. On the street, cute little figurines are strolling or sitting, surrounded by benches, street lamps, and potted plants, creating a charming corner of the city. The overall aesthetic follows a detailed and realistic miniature cityscape style, with soft lighting that evokes a relaxing afternoon atmosphere.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-55",
        "type": "prompt",
        "title": "Cute Plant Planter",
        "slug": "nano-banana-case-55",
        "summary": "",
        "body_markdown": "A high-quality photo of a cute ceramic [object/animal]-shaped planter with a glossy finish, filled with a variety of vibrant succulents and greenery including a spiky Haworthia, a rosette-shaped Echeveria, and delicate white flowers. The planter has a friendly face and sits on a soft, neutral background with diffused natural lighting, showcasing fine textures and color contrast in a clean, minimalistic composition",
        "prompt_text": "A high-quality photo of a cute ceramic [object/animal]-shaped planter with a glossy finish, filled with a variety of vibrant succulents and greenery including a spiky Haworthia, a rosette-shaped Echeveria, and delicate white flowers. The planter has a friendly face and sits on a soft, neutral background with diffused natural lighting, showcasing fine textures and color contrast in a clean, minimalistic composition",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-54",
        "type": "prompt",
        "title": "Selfie casual nocturna ultra ordinaria — Snapshot accidental",
        "slug": "nano-banana-case-54",
        "summary": "Selfie nocturna casual y accidental en Hong Kong.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Dos hombres adultos (Eason Chan, Nicholas Tse). Identidad casual, sin glam.
*   **E (Entorno):** Noche, HK Convention Centre. Luces urbanas desenfocadas.
*   **A (Acción):** Selfie accidental. Ángulo incómodo.
*   **I (Iluminación):** Desigual smartphone. Flash o luz inconsistente.
*   **S (Sensación):** Cotidiano, sin dramatismo. Imperfecto y realista.
*   **E (Estilo):** Selfie iPhone ordinaria. Motion blur, composición desordenada.
*   **M (Composición):** Messy framing. Ángulo torcido. Smartphone depth of field.
*   **P (Post):** Colores crudos. Contraste bajo. Acabado auténtico accidental.
        `,
        "prompt_text": JSON.stringify({
            "title": "Selfie casual nocturna ultra ordinaria — Snapshot accidental",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujetos": "Dos hombres adultos (Eason Chan y Nicholas Tse) presentes en la selfie.",
                    "identidad": "Rasgos reconocibles preservados, pero capturados de forma casual y sin intención estética.",
                    "expresion": "Natural, espontánea, sin pose marcada.",
                    "detalle": "No hay énfasis glam; apariencia cotidiana y normal."
                },
                "E_Entorno": {
                    "ubicacion": "Noche junto al Hong Kong Convention and Exhibition Centre, Victoria Harbour, Hong Kong.",
                    "fondo": "Luces urbanas nocturnas desenfocadas, ambiente real de calle.",
                    "contexto": "Escena turística casual sin composición cuidada."
                },
                "A_Accion_Postura": {
                    "accion": "Selfie tomada de forma accidental o improvisada.",
                    "pose": "Ángulo incómodo, encuadre torpe, sin intención fotográfica.",
                    "lenguaje_corporal": "Momento espontáneo como snapshot de bolsillo."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación desigual típica de smartphone.",
                    "caracteristicas": "Exposición irregular con leves zonas sobreexpuestas por luces artificiales o faroles.",
                    "efecto": "Flash o luz ambiental nocturna inconsistente."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Completamente cotidiano, sin dramatismo.",
                    "tono": "Foto casual, imperfecta, realista, accidental."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Selfie iPhone extremadamente ordinaria.",
                    "imperfecciones": [
                        "Motion blur ligero",
                        "Composición desordenada",
                        "Ángulo awkward",
                        "Estética plain y sin intención artística"
                    ],
                    "calidad": "Snapshot realista, no editorial, no cinematográfico."
                },
                "M_Composicion_Camara": {
                    "encuadre": "Messy framing, sin sujeto central claro.",
                    "angulo": "Torcido, espontáneo, como al sacar el móvil del bolsillo.",
                    "profundidad_de_campo": "Smartphone natural, fondo borroso por movimiento."
                },
                "P_Postproduccion": {
                    "color_grading": "Ninguno o mínimo: colores crudos de teléfono.",
                    "contraste": "Bajo, típico de captura casual.",
                    "efectos": "Nada estilizado, acabado auténtico y accidental.",
                    "acabado_final": "Selfie nocturna común y sin composición intencional."
                }
            }
        }, null, 2),
        "category": "Photography",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/hong-kong-night-selfie.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-53",
        "type": "prompt",
        "title": "Emoji Inflatable Cushion",
        "slug": "nano-banana-case-53",
        "summary": "",
        "body_markdown": "Create a high-resolution 3D render of [🥹] designed as an inflatable, puffy object. The shape should appear soft, rounded, and air-filled — like a plush balloon or blow-up toy. Use a smooth, matte texture with subtle fabric creases and stitching to emphasize the inflatable look. The form should be slightly irregular and squishy, with gentle shadows and soft lighting that highlight volume and realism. Place it on a clean, minimal background (light gray or pale blue), and maintain a playful, sculptural aesthetic.",
        "prompt_text": "Create a high-resolution 3D render of [🥹] designed as an inflatable, puffy object. The shape should appear soft, rounded, and air-filled — like a plush balloon or blow-up toy. Use a smooth, matte texture with subtle fabric creases and stitching to emphasize the inflatable look. The form should be slightly irregular and squishy, with gentle shadows and soft lighting that highlight volume and realism. Place it on a clean, minimal background (light gray or pale blue), and maintain a playful, sculptural aesthetic.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-52",
        "type": "prompt",
        "title": "Paper Craft Style Emoji Icon",
        "slug": "nano-banana-case-52",
        "featured_image_url": "/images/prompts/nano-52-papercraft.jpg",
        "summary": "",
        "body_markdown": "A paper craft-style \"🔥\" floating on a pure white background. The emoji is handcrafted from colorful cut paper with visible textures, creases, and layered shapes. It casts a soft drop shadow beneath, giving a sense of lightness and depth. The design is minimal, playful, and clean — centered in the frame with lots of negative space. Use soft studio lighting to highlight the paper texture and edges.",
        "prompt_text": "A paper craft-style \"🔥\" floating on a pure white background. The emoji is handcrafted from colorful cut paper with visible textures, creases, and layered shapes. It casts a soft drop shadow beneath, giving a sense of lightness and depth. The design is minimal, playful, and clean — centered in the frame with lots of negative space. Use soft studio lighting to highlight the paper texture and edges.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-51",
        "type": "prompt",
        "title": "Passport Entry Stamp — Welcome to Guanajuato",
        "slug": "nano-banana-case-51",
        "summary": "Sello de pasaporte realista 'Welcome to Guanajuato' con silueta arquitectónica.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Sello de tinta azul en papel de pasaporte texturizado.
*   **E (Entorno):** Página de pasaporte con patrones de seguridad sutiles.
*   **A (Acción):** Sellado manual en ángulo ligero (imperfecto).
*   **I (Iluminación):** Plana, escáner o fotografía macro suave.
*   **S (Sensación):** Oficial, viaje, llegada, auténtico.
*   **E (Estilo):** Fotorrealismo macro de documento oficial.
*   **M (Composición):** Sello ovalado/ornamental centrado. Texto 'One-way' legible.
*   **P (Post):** Textura de papel, absorción de tinta, smudges ligeros.
        `,
        "prompt_text": JSON.stringify({
            "title": "Passport Entry Stamp — Welcome to Guanajuato",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Sello de entrada en pasaporte realista para Guanajuato, México.",
                    "detalles_sello": {
                        "texto_principal": "WELCOME TO GUANAJUATO",
                        "texto_secundario": "ARRIVAL",
                        "fecha": "15 APR 2025",
                        "diseño": "Forma ovalada con bordes decorativos ornamentales.",
                        "icono": "Silueta sutil de la Basílica de Guanajuato o arquitectura colonial al fondo."
                    },
                    "tinta": {
                        "color": "Azul profundo o violeta de seguridad.",
                        "comportamiento": "Ligeros borrones (smudges) y absorción irregular en el papel."
                    }
                },
                "E_Entorno": {
                    "superficie": "Papel de pasaporte auténtico con fibras visibles y textura mate.",
                    "fondo": "Patrones de seguridad (guilloche) tenues en el fondo de la página."
                },
                "A_Accion_Presentacion": {
                    "estado": "Estático, recién estampado.",
                    "angulo": "Ligeramente inclinado/rotado para simular estampado manual humano."
                },
                "I_Iluminacion": {
                    "tipo": "Luz difusa y uniforme (tipo escáner o luz natural suave).",
                    "sombras": "Mínimas, solo para resaltar la textura del papel."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Oficial, viaje internacional, descubrimiento.",
                    "estetica": "Documental realista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía macro o escaneo de alta resolución.",
                    "nivel_de_detalle": "Micro-detalles en la tinta y fibras del papel."
                },
                "M_Composicion_Camara": {
                    "encuadre": "Close-up centrado en el sello.",
                    "enfoque": "Nítido en todo el sello."
                },
                "P_Postproduccion": {
                    "efectos": "Simulación de imperfecciones de tinta y textura de papel para máximo realismo."
                }
            }
        }, null, 2),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/passport-entry-stamp.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-50",
        "type": "prompt",
        "title": "Trading Card Burst Scene — Lara Croft Archaeological Adventure",
        "slug": "nano-banana-case-50",
        "summary": "Ilustración de trading card donde Lara Croft rompe el marco hacia el exterior.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Lara Croft saltando/balanceándose. Ruptura marco carta.
*   **E (Entorno):** Dentro: Ruinas selváticas. Fuera: Escombros, fragmentos carta.
*   **A (Acción):** Movimiento agresivo hacia adelante. Pop-out 3D.
*   **I (Iluminación):** Aventurera, dinámica. Contrastes fuertes.
*   **S (Sensación):** Épica, peligro, energía explosiva.
*   **E (Estilo):** Trading card illustration ultra-realista. Dimensional rupture.
*   **M (Composición):** Carta coleccionable, personaje saliendo marco. Título visible.
*   **P (Post):** Cracks energéticos, distorsión, partículas, motion blur.
        `,
        "prompt_text": JSON.stringify({
            "title": "Trading Card Burst Scene — Lara Croft Archaeological Adventure",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Ilustración ultra-fotorrealista estilo cinematográfico de una carta coleccionable donde Lara Croft rompe el marco hacia el exterior.",
                    "elemento_central": {
                        "personaje": "Lara Croft",
                        "accion": "Saltando o balanceándose con cuerda, irrumpiendo fuera del plano de la carta",
                        "outfit": "Aventurera icónica, posible uso de pistolas duales"
                    },
                    "efecto_dimensional": "Ruptura visible del borde de la carta con grietas energéticas, distorsión espacial y fragmentos expulsados"
                },
                "E_Entorno": {
                    "dentro_de_la_carta": {
                        "escena": "Ruinas selváticas densas o tumba antigua llena de trampas",
                        "elementos": ["Piedra antigua", "Vegetación", "Ambiente arqueológico peligroso"]
                    },
                    "fuera_de_la_carta": {
                        "elementos_expulsados": [
                            "Fragmentos de la carta",
                            "Polvo y escombros",
                            "Vides volando",
                            "Monedas antiguas rotas",
                            "Casquillos usados"
                        ]
                    }
                },
                "A_Accion_Presentacion": {
                    "dinamica": "Movimiento agresivo hacia adelante, con profundidad extrema tipo 3D pop-out.",
                    "impacto": "El borde tallado en piedra se rompe por la energía y el disparo.",
                    "muzzle_flash": "Destellos de disparo ayudan a fracturar el marco y expulsar partículas"
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación aventurera y dinámica cinematográfica.",
                    "caracteristicas": "Contrastes fuertes, highlights sobre Lara, sombras dramáticas en ruinas.",
                    "efecto": "Énfasis en agilidad, peligro y acción"
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Aventura épica, peligro arqueológico, energía explosiva.",
                    "tono": "Heroico, intenso, cinematic action card"
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Trading card illustration ultra-realista con efecto dimensional ruptured frame.",
                    "texturas": {
                        "marco": "Borde tallado en piedra antigua agrietada",
                        "fragmentos": "Polvo, piedra, energía, distorsión",
                        "fondo": "Selva o tumba con atmósfera arqueológica"
                    },
                    "detalles": "Alta definición en debris, grietas energéticas, motion depth"
                },
                "M_Composicion_Camara": {
                    "layout": "Carta coleccionable con personaje saliendo del marco hacia la cámara.",
                    "profundidad": "Perspectiva extrema tipo pop-out 3D",
                    "texto_visible": {
                        "titulo": "Archaeological Adventure",
                        "nombre": "Lara Croft",
                        "icono": "Artefacto estilizado junto al nombre"
                    },
                    "encuadre": "Carta parcialmente destruida pero texto aún legible"
                },
                "P_Postproduccion": {
                    "efectos": [
                        "Cracks energéticos",
                        "Distorsión espacial",
                        "Partículas y polvo volumétrico",
                        "Motion blur sutil en debris"
                    ],
                    "acabado": "Ultra-cinematic, alto rango dinámico, acción épica tipo póster",
                    "nitidez": "Máxima nitidez en personaje y borde fracturado"
                }
            }
        }, null, 2),
        "category": "3D Design",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/trading-card-lara-croft.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-49",
        "type": "prompt",
        "title": "Portada editorial — Mujer en qipao rosa con mariposas",
        "slug": "nano-banana-case-49",
        "summary": "Portada de revista fashion editorial con mujer en qipao y mariposas.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Mujer hermosa, estética fashion. Qipao rosa, encaje blanco. Mariposas.
*   **E (Entorno):** Fondo gris minimalista. Estudio limpio.
*   **A (Acción):** Pose refinada, mano sosteniendo mariposas delicadamente.
*   **I (Iluminación):** Estudio suave y envolvente. Sombras sutiles.
*   **S (Sensación):** Elegancia, delicadeza, fantasía suave.
*   **E (Estilo):** Fotografía editorial hiperrealista. Alta moda.
*   **M (Composición):** Portada centrada. Texto "FASHION DESIGN" superior.
*   **P (Post):** Paleta suave elegante. Alta nitidez en detalles.
        `,
        "prompt_text": JSON.stringify({
            "title": "Portada editorial — Mujer en qipao rosa con mariposas",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer hermosa con estética elegante tipo fashion magazine.",
                    "vestimenta": {
                        "outfit": "Qipao rosa tradicional y estilizado.",
                        "cuello": "Cuello blanco de encaje delicado."
                    },
                    "accesorios": {
                        "cabeza": "Accesorios florales finos y blossoms coloridos tejidos en el cabello."
                    },
                    "detalle_manos": "Una mano sostiene suavemente varias mariposas grandes.",
                    "detalle_piel": "Textura de piel realista con acabado editorial de alta definición."
                },
                "E_Entorno": {
                    "fondo": "Gris claro minimalista.",
                    "escena": "Estudio limpio sin elementos distractores.",
                    "objetivo": "Destacar completamente al sujeto como portada."
                },
                "A_Accion_Postura": {
                    "pose": "Postura suave y refinada, estilo portada de moda.",
                    "gesto": "Mano levantada delicadamente sosteniendo mariposas.",
                    "actitud": "Elegante, serena, fashion-forward."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación de estudio suave y envolvente.",
                    "caracteristicas": "Luz clara que resalta textura del qipao, flores y mariposas.",
                    "sombras": "Sutiles, sin dureza, look editorial."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Elegancia, delicadeza, fantasía suave.",
                    "tono": "Fashion magazine cover con estética refinada."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía editorial hiperrealista de alta moda.",
                    "calidad": "Alta definición, detalle en tela, accesorios y mariposas.",
                    "componente_texto": "Diseño tipo portada contemporánea."
                },
                "M_Composicion_Camara": {
                    "plano": "Retrato centrado estilo portada.",
                    "encuadre": "Sujeto dominante en el frame con espacio superior para tipografía.",
                    "texto_superior": "FASHION DESIGN"
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta suave y elegante con contraste moderado.",
                    "nitidez": "Alta nitidez en rostro, flores, encaje y mariposas.",
                    "acabado_final": "Portada limpia, premium, lista para revista."
                }
            }
        }, null, 2),
        "category": "Fashion",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/fashion-design-cover.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-47",
        "type": "prompt",
        "title": "ESC Keycap Miniature Diorama",
        "slug": "nano-banana-case-47",
        "featured_image_url": "/images/prompts/nano-47-keycap.jpg",
        "summary": "",
        "body_markdown": "A hyper-realistic isometric 3D render of a miniature computer setup inside a translucent mechanical keyboard keycap, specifically placed on the ESC key of a real matte-finished mechanical keyboard. Inside the keycap, a tiny figure sits in a modern ergonomic chair, wearing a cozy textured hoodie, working at a glowing ultra-realistic computer screen. The environment is packed with lifelike miniature tech accessories: real-material desk lamps, monitors with reflections, tiny speaker grills, tangled cables, and ceramic mugs. The base of the scene is made of soil, rocks, and moss, with photorealistic textures and imperfections. The lighting inside the cap mimics natural morning sun, casting soft shadows and warm tones, while the outside has cold ambient reflections from the surrounding keyboard. The word “ESC” is subtly etched onto the top of the translucent keycap with a faint frosted glass effect — just barely visible depending on the angle. The surrounding keyboard keys like F1, Q, Shift, and CTRL are crisp, textured, and photorealistically lit. Shot as if taken with a high-end mobile phone camera, with shallow depth of field, perfect white balance, and cinematic detail.",
        "prompt_text": "A hyper-realistic isometric 3D render of a miniature computer setup inside a translucent mechanical keyboard keycap, specifically placed on the ESC key of a real matte-finished mechanical keyboard. Inside the keycap, a tiny figure sits in a modern ergonomic chair, wearing a cozy textured hoodie, working at a glowing ultra-realistic computer screen. The environment is packed with lifelike miniature tech accessories: real-material desk lamps, monitors with reflections, tiny speaker grills, tangled cables, and ceramic mugs. The base of the scene is made of soil, rocks, and moss, with photorealistic textures and imperfections. The lighting inside the cap mimics natural morning sun, casting soft shadows and warm tones, while the outside has cold ambient reflections from the surrounding keyboard. The word “ESC” is subtly etched onto the top of the translucent keycap with a faint frosted glass effect — just barely visible depending on the angle. The surrounding keyboard keys like F1, Q, Shift, and CTRL are crisp, textured, and photorealistically lit. Shot as if taken with a high-end mobile phone camera, with shallow depth of field, perfect white balance, and cinematic detail.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-45",
        "type": "prompt",
        "title": "3D Chibi-style University Anthropomorphic Mascot",
        "slug": "nano-banana-case-45",
        "featured_image_url": "/images/prompts/nano-45-mascot.jpg",
        "summary": "",
        "body_markdown": "Create a personified 3D chibi-style anime girl character representing {Northwestern Polytechnical University}, embodying the school’s distinctive strengths in {aeronautics, astronautics, and marine engineering}.",
        "prompt_text": "Create a personified 3D chibi-style anime girl character representing {Northwestern Polytechnical University}, embodying the school’s distinctive strengths in {aeronautics, astronautics, and marine engineering}.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-44",
        "type": "prompt",
        "title": "RPG Collectible Character Card — Programmer",
        "slug": "nano-banana-case-44",
        "summary": "Tarjeta digital coleccionable estilo RPG con un personaje 3D cartoon.",
        "body_markdown": `
# RPG Collectible Character Card — Programmer

*   **R (Render):** Tarjeta digital coleccionable estilo RPG con un personaje 3D cartoon. Personaje Arquetipo: Programador. Estilo: Personaje 3D cartoon con rasgos expresivos y personalidad viva. Apariencia: De pie, postura segura, sosteniendo herramientas o símbolos relacionados con la programación. Coherencia: El personaje representa claramente la profesión a nivel visual y simbólico.
*   **E (Entorno):** Fondo temático acorde a la profesión de programador. Ambientación: Elementos visuales relacionados con tecnología, código o interfaces abstractas. Contexto: Diseño limpio que no distrae del personaje ni de los stats.
*   **A (Acción):** Postura confiada y heroica típica de tarjetas RPG. Lenguaje corporal: Actitud segura, preparada y competente. Presentación: El personaje se muestra como figura central dentro de la tarjeta.
*   **I (Iluminación):** Iluminación suave y uniforme. Características: Luz equilibrada que resalta el volumen 3D y la personalidad del personaje, sin sombras duras.
*   **S (Sensación):** Competencia, creatividad, confianza. Tono: Divertido, inspirador, profesional.
*   **E (Estilo):** Tarjeta RPG coleccionable en estilo 3D cartoon. Interfaz: Barras de habilidades y estadísticas visibles (ej. Creatividad +10, UI/UX +8). Marco: Bordes limpios y definidos, similares a una caja o figura coleccionable. Paleta de color: Colores con highlights cálidos y tonos asociados a la profesión.
*   **M (Composición):** Plano medio del personaje dentro de la tarjeta. Ángulo frontal. Encuadre: Composición vertical tipo carta coleccionable.
*   **P (Post):** Colores vivos pero balanceados. Contraste medio. Acabado: Aspecto pulido, limpio y listo para colección digital. Elementos de texto: Banner superior (Título) y placa inferior (Nombre).
`,
        "prompt_text": JSON.stringify({
            "title": "RPG Collectible Character Card — Programmer",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Tarjeta digital coleccionable estilo RPG con un personaje 3D cartoon.",
                    "personaje": {
                        "arquetipo": "Programador",
                        "estilo": "Personaje 3D cartoon con rasgos expresivos y personalidad viva.",
                        "apariencia": "De pie, postura segura, sosteniendo herramientas o símbolos relacionados con la programación."
                    },
                    "coherencia": "El personaje representa claramente la profesión a nivel visual y simbólico."
                },
                "E_Entorno": {
                    "fondo": "Fondo temático acorde a la profesión de programador.",
                    "ambientacion": "Elementos visuales relacionados con tecnología, código o interfaces abstractas.",
                    "contexto": "Diseño limpio que no distrae del personaje ni de los stats."
                },
                "A_Accion_Presentacion": {
                    "pose": "Postura confiada y heroica típica de tarjetas RPG.",
                    "lenguaje_corporal": "Actitud segura, preparada y competente.",
                    "presentacion": "El personaje se muestra como figura central dentro de la tarjeta."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación suave y uniforme.",
                    "caracteristicas": "Luz equilibrada que resalta el volumen 3D y la personalidad del personaje, sin sombras duras."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Competencia, creatividad, confianza.",
                    "tono": "Divertido, inspirador, profesional."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Tarjeta RPG coleccionable en estilo 3D cartoon.",
                    "interfaz": {
                        "elementos_UI": "Barras de habilidades y estadísticas visibles.",
                        "ejemplos_stats": [
                            "Creatividad +10",
                            "UI/UX +8"
                        ]
                    },
                    "marco": "Bordes limpios y definidos, similares a una caja o figura coleccionable.",
                    "paleta_color": "Colores con highlights cálidos y tonos asociados a la profesión."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio del personaje dentro de la tarjeta.",
                    "angulo": "Ángulo frontal.",
                    "encuadre": "Composición vertical tipo carta coleccionable."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores vivos pero balanceados.",
                    "contraste": "Medio.",
                    "acabado": "Aspecto pulido, limpio y listo para colección digital.",
                    "elementos_texto": {
                        "banner_superior": "Título de la tarjeta",
                        "placa_inferior": "Nombre del personaje"
                    }
                }
            }
        }),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/rpg-programmer-card.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.815Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },


    {
        "id": "nano-41",
        "type": "prompt",
        "title": "Miniature Three-dimensional Scene Presentation",
        "slug": "nano-banana-case-41",
        "summary": "",
        "body_markdown": "Miniature three-dimensional scene presentation using tilt-shift photography techniques, depicting a chibi-style version of the scene {Sun Wukong’s Three Battles with the White Bone Demon}",
        "prompt_text": "Miniature three-dimensional scene presentation using tilt-shift photography techniques, depicting a chibi-style version of the scene {Sun Wukong’s Three Battles with the White Bone Demon}",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/nano-41-matrix-chibi.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.815Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-39",
        "type": "prompt",
        "title": "Fantasy Cartoon Illustration",
        "slug": "nano-banana-case-39",
        "summary": "",
        "body_markdown": "A cartoon-style character with a smiling computer monitor as its head, wearing gloves and boots, happily jumping through a glowing, blue, circular portal in a lush, fantasy forest landscape. The forest is detailed with large trees, mushrooms, flowers, a serene river, floating islands, and an atmospheric starry night sky with multiple moons. Bright, vibrant colors with soft lighting, fantasy illustration style.",
        "prompt_text": "A cartoon-style character with a smiling computer monitor as its head, wearing gloves and boots, happily jumping through a glowing, blue, circular portal in a lush, fantasy forest landscape. The forest is detailed with large trees, mushrooms, flowers, a serene river, floating islands, and an atmospheric starry night sky with multiple moons. Bright, vibrant colors with soft lighting, fantasy illustration style.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/fantasy-monitor-head.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-37",
        "type": "prompt",
        "title": "Pastel Power 3D ADS",
        "slug": "nano-banana-case-37",
        "summary": "",
        "body_markdown": "a soft 3D cartoon-style sculpture of [brand product], made of smooth clay-like textures and vibrant pastel colors, placed in a minimalist isometric scene that complements the product’s nature, clean composition, gentle lighting, subtle shadows, with the product’s logo and a 3-word slogan displayed clearly below",
        "prompt_text": "a soft 3D cartoon-style sculpture of [brand product], made of smooth clay-like textures and vibrant pastel colors, placed in a minimalist isometric scene that complements the product’s nature, clean composition, gentle lighting, subtle shadows, with the product’s logo and a 3-word slogan displayed clearly below",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/pastel-power-3d-coke.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-36",
        "type": "prompt",
        "title": "Minimalist 3D Illustration (Markdown Format)",
        "slug": "nano-banana-case-36",
        "summary": "",
        "body_markdown": "Draw a Toilet\n\n## 🎨 Art Style: Minimalist 3D Illustration\n\n### 🟢 Shape Language\n- Rounded edges and smooth, soft forms using simplified geometric shapes.\n\n### 🎨 Colors\n- **Primary palette:** soft beige, light gray, warm orange.\n- **Accent color:** warm orange for focal elements.\n- **Shading:** gentle gradients and smooth transitions, avoiding harsh shadows and highlights.\n\n### 💡 Lighting\n- **Type:** soft, diffuse lighting.\n- **Light source direction:** from above, slightly to the right.\n- **Shadow style:** subtle and diffused, without sharp or high-contrast shadows.\n\n### 🧱 Materials\n- **Surface texture:** matte and smooth with subtle light variation.\n- **Reflectivity:** low to none, avoiding noticeable gloss.\n\n### 🖼️ Composition\n- **Object presentation:** a single, centered object with generous negative space around it.\n- **Perspective:** slight tilt to suggest depth, but no strong depth-of-field effects.\n- **Background:** flat color, low saturation, harmonious with the subject and non-distracting.\n\n### ✒️ Typography\n- **Font style:** minimalist sans-serif.\n- **Text placement:** bottom left corner, small and unobtrusive.\n- **Font color:** gray, low contrast with the background.\n\n### 🖥️ Rendering Style\n- **Technique:** 3D rendering in a simplified low-poly style.\n- **Detail level:** medium — focus on shape and color, avoiding complex textures or fine details.\n\n## 🎯 Style Goal\n> Create a clean and aesthetically pleasing visual that emphasizes simplicity, approachability, and modernity.",
        "prompt_text": "Draw a Toilet\n\n## 🎨 Art Style: Minimalist 3D Illustration\n\n### 🟢 Shape Language\n- Rounded edges and smooth, soft forms using simplified geometric shapes.\n\n### 🎨 Colors\n- **Primary palette:** soft beige, light gray, warm orange.\n- **Accent color:** warm orange for focal elements.\n- **Shading:** gentle gradients and smooth transitions, avoiding harsh shadows and highlights.\n\n### 💡 Lighting\n- **Type:** soft, diffuse lighting.\n- **Light source direction:** from above, slightly to the right.\n- **Shadow style:** subtle and diffused, without sharp or high-contrast shadows.\n\n### 🧱 Materials\n- **Surface texture:** matte and smooth with subtle light variation.\n- **Reflectivity:** low to none, avoiding noticeable gloss.\n\n### 🖼️ Composition\n- **Object presentation:** a single, centered object with generous negative space around it.\n- **Perspective:** slight tilt to suggest depth, but no strong depth-of-field effects.\n- **Background:** flat color, low saturation, harmonious with the subject and non-distracting.\n\n### ✒️ Typography\n- **Font style:** minimalist sans-serif.\n- **Text placement:** bottom left corner, small and unobtrusive.\n- **Font color:** gray, low contrast with the background.\n\n### 🖥️ Rendering Style\n- **Technique:** 3D rendering in a simplified low-poly style.\n- **Detail level:** medium — focus on shape and color, avoiding complex textures or fine details.\n\n## 🎯 Style Goal\n> Create a clean and aesthetically pleasing visual that emphasizes simplicity, approachability, and modernity.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/minimalist-3d-toilet.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-33",
        "type": "prompt",
        "title": "Chibi 3D Family Wedding Portrait — Framed Scene",
        "slug": "nano-banana-case-33",
        "summary": "Retrato familiar de boda en estilo Chibi 3D dentro de un marco.",
        "body_markdown": "\n# Framework REALISMO\n\n*   **R (Render):** Personajes chibi 3D, cabezas grandes, expresiones suaves.\n*   **E (Entorno):** Escenario fotográfico realista con arco floral.\n*   **A (Acción):** Familia posando armoniosamente.\n*   **I (Iluminación):** Suave y uniforme.\n*   **S (Sensación):** Ternura, celebración.\n*   **E (Estilo):** Híbrido: personajes estilizados + entorno realista.\n*   **M (Composición):** Plano medio centrado en marco.\n*   **P (Post):** Colores vivos, acabado pulido.\n        ",
        "prompt_text": JSON.stringify({
            "title": "Chibi 3D Family Wedding Portrait — Framed Scene",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Transformar a las personas de la foto original en versiones chibi 3D, manteniendo identidad reconocible de cada integrante (padre, madre e hijo) a través de rasgos simplificados.",
                    "estilo_personajes": "Chibi 3D con cabezas grandes, cuerpos pequeños, proporciones adorables y expresiones suaves.",
                    "vestuario": {
                        "padre": "Traje formal occidental de boda.",
                        "madre": "Vestido de novia elegante.",
                        "hijo": "Niña florista sosteniendo un ramo."
                    },
                    "coherencia": "Cada personaje conserva su rol familiar y relación visual."
                },
                "E_Entorno": {
                    "fondo": "Escenario fotográfico realista.",
                    "ambientacion": "Arco floral colorido detrás de la familia.",
                    "marco": "Toda la escena está contenida dentro de un marco de foto visible."
                },
                "A_Accion_Postura": {
                    "pose": "Familia posando junta de forma armoniosa.",
                    "lenguaje_corporal": "Posturas relajadas y afectuosas.",
                    "accion": "La niña sostiene un ramo de flores como flower girl."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación suave y uniforme.",
                    "caracteristicas": "Luz equilibrada que favorece tanto a los personajes chibi como al entorno realista."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Ternura, celebración, alegría familiar.",
                    "tono": "Encantador, cálido, festivo."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Personajes en estilo chibi 3D contrastando con entorno fotorealista.",
                    "texturas": {
                        "personajes": "Superficies suaves tipo juguete/figura 3D.",
                        "entorno": "Texturas realistas en flores, fondo y marco."
                    },
                    "nivel_realismo": "Híbrido: personajes estilizados + entorno realista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a plano general.",
                    "angulo": "Ángulo frontal.",
                    "encuadre": "Composición centrada dentro de un marco de foto visible."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores vivos y alegres.",
                    "contraste": "Medio.",
                    "acabado": "Aspecto limpio, pulido y decorativo.",
                    "presentacion_final": "Escena completa presentada como una fotografía enmarcada."
                }
            },
            "final_prompt": "Chibi 3D family wedding portrait, western wedding attire, father in suit, mother in wedding gown, flower girl with bouquet. Realistic floral arch background, inside a photo frame. 3D cute stylized characters, photorealistic environment. Vibrant colors, soft lighting, 8K. --ar 3:4"
        }, null, 2),
        "category": "Creative",
        "level": "intermediate",
        "featured_image_url": "/images/prompts/chibi-family-wedding.png",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-32",
        "type": "prompt",
        "title": "3D Papercraft Pop-up Book",
        "slug": "nano-banana-case-32",
        "summary": "",
        "body_markdown": "Multi-layered foldable paper sculpture pop-up book, placed on a desk, with a clean background highlighting the main subject. The book presents a 3D flip-book style, with a 2:3 vertical aspect ratio. The open pages display the scene of [Nezha Demon Child version battling Ao Bing]. All elements are finely foldable and assembled, showcasing a realistic and delicate texture of folded paper. The composition uniformly adopts a frontal perspective, with an overall dreamy and beautiful visual style, vibrant and gorgeous colors, full of a fantastical and lively story atmosphere.",
        "prompt_text": "Multi-layered foldable paper sculpture pop-up book, placed on a desk, with a clean background highlighting the main subject. The book presents a 3D flip-book style, with a 2:3 vertical aspect ratio. The open pages display the scene of [Nezha Demon Child version battling Ao Bing]. All elements are finely foldable and assembled, showcasing a realistic and delicate texture of folded paper. The composition uniformly adopts a frontal perspective, with an overall dreamy and beautiful visual style, vibrant and gorgeous colors, full of a fantastical and lively story atmosphere.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/3d-papercraft-popup-book.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-30",
        "type": "prompt",
        "title": "Floating Moscow — Surreal Aerial Cityscape",
        "slug": "nano-banana-case-30",
        "summary": "Ciudad de Moscú representada de forma surrealista con islas flotantes.",
        "body_markdown": `
# Floating Moscow — Surreal Aerial Cityscape

*   **R (Render):** Ciudad de Moscú representada de forma surrealista, fragmentada en islas flotantes suspendidas en el cielo. Arquitectura urbana a gran escala. Fotorrealista con elemento fantástico.
*   **E (Entorno):** Cielo abierto a gran altura. Espacio aéreo surrealista sin horizonte terrestre visible. Islas flotantes separadas, masas de tierra suspendidas.
*   **A (Acción):** Las islas flotan libremente en el aire. Sensación de suspensión y quietud, sin movimiento agresivo. Composición estable y equilibrada entre las islas.
*   **I (Iluminación):** Iluminación natural tipo daylight. Luz uniforme que ilumina la arquitectura y las islas desde un ángulo alto, sin sombras extremas.
*   **S (Sensación):** Asombro, surrealismo, contemplación. Onírico, majestuoso, silencioso.
*   **E (Estilo):** Fotografía surrealista. Estética de fotografía tomada con lente de 35 mm. Arquitectura detallada, superficies naturales de las islas visibles. Alto nivel de detalle.
*   **M (Composición):** Plano general amplio. Vista aérea o ligeramente elevada. Lente de 35 mm. Encuadre abierto que permite apreciar múltiples islas flotantes.
*   **P (Post):** Colores naturales con ligero énfasis cinematográfico. Contraste medio. Look fotográfico limpio, surrealista y cinematográfico.
`,
        "prompt_text": JSON.stringify({
            "title": "Floating Moscow — Surreal Aerial Cityscape",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Ciudad de Moscú representada de forma surrealista, fragmentada en islas flotantes suspendidas en el cielo.",
                    "escala": "Arquitectura urbana a gran escala.",
                    "nivel_realismo": "Fotorrealista con elemento fantástico."
                },
                "E_Entorno": {
                    "fondo": "Cielo abierto a gran altura.",
                    "ambientacion": "Espacio aéreo surrealista sin horizonte terrestre visible.",
                    "elementos_clave": "Islas flotantes separadas, masas de tierra suspendidas."
                },
                "A_Accion_Presentacion": {
                    "presentacion": "Las islas flotan libremente en el aire.",
                    "dinamica": "Sensación de suspensión y quietud, sin movimiento agresivo.",
                    "orientacion": "Composición estable y equilibrada entre las islas."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación natural tipo daylight.",
                    "caracteristicas": "Luz uniforme que ilumina la arquitectura y las islas desde un ángulo alto, sin sombras extremas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Asombro, surrealismo, contemplación.",
                    "tono": "Onírico, majestuoso, silencioso."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía surrealista.",
                    "referencia_fotografica": "Est estética de fotografía tomada con lente de 35 mm.",
                    "texturas": "Arquitectura detallada, superficies naturales de las islas visibles.",
                    "nivel_detalle": "Alto, con integración realista de elementos fantásticos."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano general amplio.",
                    "angulo": "Vista aérea o ligeramente elevada.",
                    "lente": "35 mm",
                    "encuadre": "Composición abierta que permite apreciar múltiples islas flotantes."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores naturales con ligero énfasis cinematográfico.",
                    "contraste": "Medio.",
                    "acabado": "Look fotográfico limpio, surrealista y cinematográfico."
                }
            }
        }),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/floating-moscow.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-29",
        "type": "prompt",
        "title": "OOTD Character Card — Fashion Designer",
        "slug": "nano-banana-case-29",
        "summary": "Avatar 3D estilo Q / chibi renderizado con calidad C4D, presentado como tarjeta editorial OOTD.",
        "body_markdown": `
# OOTD Character Card — Fashion Designer

*   **R (Render):** Avatar 3D estilo Q / chibi renderizado con calidad C4D, presentado como tarjeta editorial OOTD.
*   **E (Entorno):** Color sólido que complementa la paleta del personaje, Sin gradientes ni texturas.
*   **A (Acción):** Pose natural y segura, acorde a un diseñador de moda. El personaje actúa como modelo de su propio outfit.
*   **I (Iluminación):** Iluminación suave y uniforme estilo estudio.
*   **S (Sensación):** Creatividad, estilo, autoexpresión. Moderno, fashion-forward, cool.
*   **E (Estilo):** Q-style 3D chibi con acabado C4D.
*   **M (Composición):** Formato Vertical 9:16. Tarjeta editorial con personaje y breakdown de items.
*   **P (Post):** Colores limpios y coordinados, Look editorial fashion.
`,
        "prompt_text": JSON.stringify({
            "title": "OOTD Character Card — Fashion Designer",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Avatar 3D estilo Q / chibi renderizado con calidad C4D, presentado como tarjeta editorial OOTD.",
                    "personaje": {
                        "origen": "Basado en la persona de la foto",
                        "identidad": "Mantener rasgos faciales originales y pose base",
                        "estilizacion": "Proporciones chibi con piernas largas y cuerpo estilizado",
                        "profesion": "Fashion Designer"
                    }
                },
                "E_Entorno": {
                    "fondo": "Color sólido que complementa la paleta del personaje",
                    "restricciones": "Sin gradientes ni texturas",
                    "contexto": "Escena limpia tipo fashion layout / lookbook digital"
                },
                "A_Accion_Presentacion": {
                    "pose": "Pose natural y segura, acorde a un diseñador de moda",
                    "actitud": "Creativa, confiada y estilosa",
                    "interaccion": "El personaje actúa como modelo de su propio outfit"
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación suave y uniforme estilo estudio",
                    "caracteristicas": "Luz suave y balanceada que resalta materiales, telas y silueta sin sombras duras"
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Creatividad, estilo, autoexpresión",
                    "tono": "Moderno, fashion-forward, cool"
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Q-style 3D chibi con acabado C4D",
                    "outfit": {
                        "descripcion": "Outfit of the day inspirado en la profesión de diseñador de moda",
                        "prendas": [
                            "Ropa de diseñador trendy",
                            "Zapatos estilizados"
                        ],
                        "accesorios": [
                            "Gafas",
                            "Sketchbook o tablet",
                            "Accesorios fashion complementarios"
                        ]
                    },
                    "detalle": "Alta definición en telas, accesorios y proporciones chibi"
                },
                "M_Composicion_Camara": {
                    "formato": "Vertical 9:16",
                    "layout": {
                        "texto_superior": "OOTD",
                        "lado_izquierdo": "Personaje chibi a cuerpo completo con outfit completo",
                        "lado_derecho": "Desglose visual de prendas y accesorios colocados por separado"
                    },
                    "encuadre": "Composición balanceada tipo tarjeta editorial"
                },
                "P_Postproduccion": {
                    "color_grading": "Colores limpios y coordinados",
                    "contraste": "Medio",
                    "acabado": "Look editorial fashion listo para social media o branding",
                    "nitidez": "Alta, optimizada para formato móvil"
                }
            }
        }, null, 2),
        "featured_image_url": "/images/prompts/ootd-fashion-designer.png",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-28",
        "type": "prompt",
        "title": "Diseño de Sticker Plano",
        "slug": "nano-banana-case-28",
        "featured_image_url": "/images/prompts/nano-28-sticker.jpg",
        "summary": "",
        "body_markdown": "Turn this photo into a chibi-style sticker illustration in a minimalist flat design.\n– Keep the character’s recognizable features\n– Use a cute, simplified aesthetic\n– The sticker should have a thick white border\n– The character should break out of the circular frame, adding a playful touch\n– The circular base should be a solid flat color (no 3D or gradients)\n– Background should be transparent\nThe overall style should be clean, modern, and visually appealing for use as a fun Q-version sticker.",
        "prompt_text": "Turn this photo into a chibi-style sticker illustration in a minimalist flat design.\n– Keep the character’s recognizable features\n– Use a cute, simplified aesthetic\n– The sticker should have a thick white border\n– The character should break out of the circular frame, adding a playful touch\n– The circular base should be a solid flat color (no 3D or gradients)\n– Background should be transparent\nThe overall style should be clean, modern, and visually appealing for use as a fun Q-version sticker.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-27",
        "type": "prompt",
        "title": "Pack de Stickers Emojis Versión Q",
        "slug": "nano-banana-case-27",
        "summary": "",
        "body_markdown": "Create a brand-new set of chibi-style stickers featuring the user as the main character, with six unique poses:\n1.\tMaking a playful peace sign with both hands and winking.\n2.\tTearful eyes and slightly trembling lips, showing a cute crying expression.\n3.\tArms wide open in a warm, enthusiastic hug pose.\n4.\tLying on their side asleep, resting on a tiny pillow with a sweet smile.\n5.\tPointing forward with confidence, surrounded by shining visual effects.\n6.\tBlowing a kiss, with heart symbols floating around.\nMaintain the chibi aesthetic:\n– Exaggerated, expressive big eyes\n– Soft facial lines\n– Playful, short black hairstyle\n– A white outfit with a bold neckline design\nBackground: Vibrant red with star or colorful confetti elements for decoration. Leave some clean white space around each sticker.\nAspect ratio: 9:16",
        "prompt_text": "Create a brand-new set of chibi-style stickers featuring the user as the main character, with six unique poses:\n1.\tMaking a playful peace sign with both hands and winking.\n2.\tTearful eyes and slightly trembling lips, showing a cute crying expression.\n3.\tArms wide open in a warm, enthusiastic hug pose.\n4.\tLying on their side asleep, resting on a tiny pillow with a sweet smile.\n5.\tPointing forward with confidence, surrounded by shining visual effects.\n6.\tBlowing a kiss, with heart symbols floating around.\nMaintain the chibi aesthetic:\n– Exaggerated, expressive big eyes\n– Soft facial lines\n– Playful, short black hairstyle\n– A white outfit with a bold neckline design\nBackground: Vibrant red with star or colorful confetti elements for decoration. Leave some clean white space around each sticker.\nAspect ratio: 9:16",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-26",
        "type": "prompt",
        "title": "Anuncio de Cereal: Personaje de Arte",
        "slug": "nano-banana-case-26",
        "summary": "",
        "body_markdown": "“Master Oats”: Based on the visual features of the person in the uploaded photo, generate a custom oatmeal mix that reflects their personality traits — for example, using vegetables, fruits, yogurt, whole grains, etc.\n\nDesign a unique cereal box and package aesthetic that aligns with this tailored mix.\n\nThen, create an advertising cover featuring the person as the mascot on the cereal box. The character should retain their recognizable features but be transformed into a cute chibi-style 3D figure with a C4D-quality rendering.\n\nThe oatmeal and packaging should be presented in a setting that matches the mood — such as a minimalist kitchen, a sleek supermarket display, or a clean design counter.\n\nThe process includes:\n– Character analysis and oat mix pairing\n– Cereal box concept and design\n– Display environment selection\n– Final image with mascot figure, packaging, and styled scene composition\n\nAll visuals should be balanced, modern, and appealing, reflecting a premium and fun oat brand identity.",
        "prompt_text": "“Master Oats”: Based on the visual features of the person in the uploaded photo, generate a custom oatmeal mix that reflects their personality traits — for example, using vegetables, fruits, yogurt, whole grains, etc.\n\nDesign a unique cereal box and package aesthetic that aligns with this tailored mix.\n\nThen, create an advertising cover featuring the person as the mascot on the cereal box. The character should retain their recognizable features but be transformed into a cute chibi-style 3D figure with a C4D-quality rendering.\n\nThe oatmeal and packaging should be presented in a setting that matches the mood — such as a minimalist kitchen, a sleek supermarket display, or a clean design counter.\n\nThe process includes:\n– Character analysis and oat mix pairing\n– Cereal box concept and design\n– Display environment selection\n– Final image with mascot figure, packaging, and styled scene composition\n\nAll visuals should be balanced, modern, and appealing, reflecting a premium and fun oat brand identity.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "nano-24",
        "type": "prompt",
        "title": "Collectible Figure Box — JAMES BOND",
        "slug": "nano-banana-case-24",
        "summary": "Figura coleccionable estilo Funko Pop presentada dentro de su caja y también fuera del empaque.",
        "body_markdown": `
# Collectible Figure Box — JAMES BOND

*   **R (Render):** Figura coleccionable estilo Funko Pop presentada dentro de su caja y también fuera del empaque. Caja tipo Funko Pop, Vista Isométrica.
*   **E (Entorno):** Entorno limpio tipo exhibición de producto, Escena neutral.
*   **A (Acción):** La caja se muestra cerrada en vista isométrica junto a la figura fuera del empaque.
*   **I (Iluminación):** Iluminación de estudio realista.
*   **S (Sensación):** Elegancia, exclusividad, nostalgia.
*   **E (Estilo):** Producto coleccionable 3D con estética Funko Pop.
*   **M (Composición):** Plano medio de producto, Vista isométrica.
*   **P (Post):** Colores equilibrados y realistas.
`,
        "prompt_text": JSON.stringify({
            "title": "Collectible Figure Box — JAMES BOND",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Figura coleccionable estilo Funko Pop presentada dentro de su caja y también fuera del empaque.",
                    "empaque": {
                        "tipo": "Caja tipo Funko Pop",
                        "vista": "Isométrica",
                        "titulo": "JAMES BOND"
                    },
                    "figura": {
                        "estilo": "Chibi 3D",
                        "origen": "Basada en la persona de la foto",
                        "identidad": "Conservar rasgos faciales reconocibles del sujeto",
                        "proporciones": "Cabeza grande, cuerpo pequeño, estilo coleccionable"
                    }
                },
                "E_Entorno": {
                    "fondo": "Entorno limpio tipo exhibición de producto",
                    "ambientacion": "Escena neutral que resalta el empaque y la figura",
                    "contexto": "Display de producto premium"
                },
                "A_Accion_Presentacion": {
                    "presentacion": "La caja se muestra cerrada en vista isométrica junto a la figura fuera del empaque.",
                    "posicion_figura": "Figura colocada de pie junto a la caja.",
                    "interaccion": "Relación clara entre empaque y producto real."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación de estudio realista",
                    "caracteristicas": "Luz suave y controlada que resalta volúmenes, texturas y materiales.",
                    "objetivo": "Transmitir calidad de producto físico."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Elegancia, exclusividad, nostalgia.",
                    "tono": "Premium, icónico, coleccionable."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Producto coleccionable 3D con estética Funko Pop.",
                    "detalle_figura": {
                        "ropa": "Traje formal estilo James Bond",
                        "accesorios": [
                            "Pistola",
                            "Reloj de pulsera",
                            "Elementos icónicos del personaje"
                        ]
                    },
                    "texturas": {
                        "figura": "Material plástico con acabado detallado y limpio.",
                        "empaque": "Cartón impreso con gráficos nítidos."
                    }
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio de producto.",
                    "angulo": "Vista isométrica.",
                    "encuadre": "Caja y figura centradas como protagonistas del encuadre."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores equilibrados y realistas.",
                    "contraste": "Medio.",
                    "acabado": "Render de producto de alta calidad, listo para catálogo o e-commerce.",
                    "detalle_extra": "Alta definición en materiales, bordes y accesorios."
                }
            }
        }, null, 2),
        "featured_image_url": "/images/prompts/james-bond-funko.png",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-23",
        "type": "prompt",
        "title": "\"Titanic\" Pose Parody",
        "slug": "nano-banana-case-23",
        "summary": "",
        "body_markdown": "Transform the person in the attached image into a cute chibi-style 3D character.\nScene: On the pointed bow of a luxurious cruise ship.\nThe man stands behind the woman at the bow, holding her waist with both hands. The woman is wearing a dress, arms spread wide, facing the wind, with a joyful and liberated expression on her face—just like the iconic scene from Titanic.\nThe sky is painted in warm sunset tones, and the vast ocean stretches beneath the ship.\nOnly the characters should be in chibi 3D style; the rest of the environment should be realistic.",
        "prompt_text": "Transform the person in the attached image into a cute chibi-style 3D character.\nScene: On the pointed bow of a luxurious cruise ship.\nThe man stands behind the woman at the bow, holding her waist with both hands. The woman is wearing a dress, arms spread wide, facing the wind, with a joyful and liberated expression on her face—just like the iconic scene from Titanic.\nThe sky is painted in warm sunset tones, and the vast ocean stretches beneath the ship.\nOnly the characters should be in chibi 3D style; the rest of the environment should be realistic.",
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": "2026-01-23T05:34:12.816Z",
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },


    {
        "id": "nano-20",
        "type": "prompt",
        "title": "Desk Scene Contrast — Anime Figure + Real Person Pose Match",
        "slug": "nano-banana-case-20",
        "summary": "Escena casual de contraste entre figura anime y persona real.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Figura anime vs Persona Real. Figura estilo Jackie Chan completamente equipada. Persona real imitando pose exacta.
*   **E (Entorno):** Escritorio cotidiano, interior casual, foto de móvil.
*   **A (Acción):** Poses paralelas exageradas y dinámicas. Interacción visual divertida.
*   **I (Iluminación):** Ambiental cálida, imperfecta, sombras suaves (smartphone style).
*   **S (Sensación):** Cálido, divertido, auténtico.
*   **E (Estilo):** Snapshot casual true-to-life. Contraste escala juguete vs humana.
*   **M (Composición):** Plano medio balanceado.
*   **P (Post):** Color grading natural y cálido.
        `,
        "prompt_text": JSON.stringify({
            "title": "Desk Scene Contrast — Anime Figure + Real Person Pose Match",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Escena casual tipo móvil donde una figura anime coleccionable aparece sobre un escritorio junto a una persona real replicando su pose.",
                    "figura": {
                        "tipo": "Figura estilo anime (inspirada en Jackie Chan)",
                        "pose": "Exagerada, cool y dinámica",
                        "detalle": "Completamente equipada como figura de acción"
                    },
                    "persona_real": {
                        "presencia": "Aparece en el mismo encuadre",
                        "accion": "Imita la pose exacta de la figura para contraste visual",
                        "efecto": "Relación divertida entre miniatura y humano"
                    }
                },
                "E_Entorno": {
                    "escena": "Escritorio cotidiano en un ambiente real",
                    "fondo": "Interior casual sin look de estudio",
                    "contexto": "Fotografía espontánea como snapshot de móvil"
                },
                "A_Accion_Presentacion": {
                    "dinamica": "Figura y persona ejecutan poses paralelas en el mismo frame",
                    "interaccion": "Contraste visual divertido entre toy scale y escala humana",
                    "composicion": "Natural y armoniosa, sin parecer montada artificialmente"
                },
                "I_Iluminacion": {
                    "tipo": "Luz ambiental cotidiana tipo smartphone",
                    "caracteristicas": "Iluminación cálida, imperfecta, realista",
                    "sombras": "Suaves e irregulares como en una escena doméstica"
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cálido, vibrante, divertido, auténtico",
                    "tono": "Everyday life + playful visual contrast"
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía casual de móvil con estética true-to-life",
                    "detalle": {
                        "figura": "Look anime coleccionable con pose exagerada",
                        "persona": "Realismo natural, postura similar",
                        "contraste": "Toy vs real person en un mismo momento"
                    },
                    "acabado": "Harmonioso y orgánico, no editorial"
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio mostrando escritorio, figura y persona",
                    "angulo": "Smartphone casual ligeramente imperfecto",
                    "encuadre": "Balanceado para que ambos sujetos sean visibles"
                },
                "P_Postproduccion": {
                    "color_grading": "Natural y cálido, sin filtros agresivos",
                    "nitidez": "Detalle suficiente en figura y persona, estilo snapshot real",
                    "acabado_final": "Escena auténtica y encantadora con contraste juguetón"
                }
            }
        }, null, 2),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/desk-scene-contrast.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-19",
        "type": "prompt",
        "title": "Mexico in a Box — Miniature Diorama",
        "slug": "nano-banana-case-19",
        "summary": "Diorama realista de México dentro de una caja de cartón.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Diorama 3D-printed dentro de caja de cartón. Textura matte con layer lines visibles, estilo juguete táctil.
*   **E (Entorno):** Interior de caja de cartón beige, manos humanas sosteniendo la tapa.
*   **A (Acción):** Vista top-down revelando el paisaje miniatura.
*   **I (Iluminación):** Cálida y cinematográfica, resaltando texturas y sombras realistas.
*   **S (Sensación):** Mágico, encantador, realismo miniatura.
*   **E (Estilo):** Fotografía ultra-realista de maqueta física estilo juguete.
*   **M (Composición):** Paisaje de México con landmarks (pirámides, edificios coloniales), vegetación y multitudes. Texto "MÉXICO" en letras plásticas de colores en la tapa.
*   **P (Post):** Enfoque nítido en el diorama, profundidad de campo natural.
        `,
        "prompt_text": JSON.stringify({
            "title": "Mexico in a Box — Miniature Diorama",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "tipo_objeto": "Diorama impreso en 3D dentro de una caja de cartón.",
                    "materiales": {
                        "terreno": "Textura mate con líneas de impresión visibles (layer lines) para efecto táctil de juguete.",
                        "letras": "Plástico brillante de colores vivos (raised plastic letters).",
                        "caja": "Cartón corrugado beige realista."
                    },
                    "contenido": "Paisaje miniatura de México: pirámides, edificios coloniales, ríos, vegetación y multitudes de figuras humanas diminutas."
                },
                "E_Entorno": {
                    "contenedor": "Caja de cartón beige estándar sostenida por manos humanas reales.",
                    "texto_tapa": "Frase 'MÉXICO' en el interior de la tapa, cada letra de un color brillante diferente."
                },
                "A_Accion_Presentacion": {
                    "accion": "Manos abriendo la caja para revelar el mundo mágico interior.",
                    "perspectiva": "Top-down shot (vista cenital) clara y detallada."
                },
                "I_Iluminacion": {
                    "tipo": "Cinematográfica cálida (Golden Hour).",
                    "efecto": "Sombras suaves que dan volumen a las miniaturas y realismo a la escena."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Encantador, nostálgico, mágico.",
                    "estetica": "Toy-like realism, artesanía digital de alta calidad."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía ultra-realista de objeto físico (tilt-shift feel sin desenfoque excesivo).",
                    "colores": "Vibrantes y geográficamente apropiados (tonos tierra, verdes vivos, arquitectura colorida)."
                },
                "M_Composicion_Camara": {
                    "encuadre": "Centrado en el contenido de la caja.",
                    "enfoque": "Nitidez total en el diorama, ligero desenfoque en las manos/fondo."
                },
                "P_Postproduccion": {
                    "acabado": "Aspecto físico tangible, no render digital liso."
                }
            }
        }, null, 2),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/mexico-box-diorama.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },






    {
        "id": "nano-9",
        "type": "prompt",
        "title": "Poster futurista minimalista — Metaball Coca-Cola Bottle",
        "slug": "nano-banana-case-9",
        "summary": "Poster minimalista futurista de una botella de Coca-Cola estilo metaball.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Metaball fluido 3D, botella Coca-Cola. Vidrio esmerilado, rojo a blanco.
*   **E (Entorno):** Fondo gris ultra claro. Galería futurista minimalista.
*   **A (Acción):** Objeto centrado. Fluido sobre texto con transparencia.
*   **I (Iluminación):** Softbox alto. Sombras suaves coloreadas. Halo sutil.
*   **S (Sensación):** Futurista, limpio, premium. Minimalismo elegante.
*   **E (Estilo):** Poster minimalista futurista. Efecto vidrio esmerilado.
*   **M (Composición):** Vertical 3:4 4K. Espacio negativo generoso.
*   **P (Post):** HDR alto. Nitidez extrema. Blur gaussiano en letras cubiertas.
        `,
        "prompt_text": JSON.stringify({
            "title": "Poster futurista minimalista — Metaball Coca-Cola Bottle",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Objeto central: metaball fluido 3D con forma completa de botella clásica de Coca-Cola.",
                    "material": "Vidrio esmerilado (frosted glass) con ruido granulado delicado.",
                    "gradiente_color": {
                        "inicio": "Coca-Cola Red (#E41C23)",
                        "fin": "Pearl White (#FFFFFF)",
                        "apariencia": "Transición sedosa tipo vidrio líquido."
                    },
                    "nivel_detalle": "Render ultra limpio, futurista, alta definición."
                },
                "E_Entorno": {
                    "fondo": "Gris frío ultra claro (#f4f4f4).",
                    "escena": "Poster de exhibición minimalista con espacio negativo amplio.",
                    "contexto": "Diseño de galería futurista, sin objetos adicionales."
                },
                "A_Accion_Presentacion": {
                    "presentacion": "Objeto centrado, dominante en el póster.",
                    "interaccion_visual": "El fluido se superpone parcialmente al texto, creando efecto de transparencia esmerilada."
                },
                "I_Iluminacion": {
                    "tipo": "Softbox alto, luz suave de estudio.",
                    "caracteristicas": "Sombras largas, suaves y ligeramente coloreadas.",
                    "efectos": "Halo sutil alrededor del objeto, iluminación premium de exhibición."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Futurista, limpio, premium.",
                    "tono": "Minimalismo elegante con sensación de lujo moderno."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Poster minimalista futurista con objeto 3D de vidrio líquido.",
                    "tipografia": {
                        "titulo_principal": {
                            "texto": "Coca-Cola",
                            "estilo": "Logo clásico rojo centrado",
                            "efecto": "Parcialmente cubierto por el vidrio con blur gaussiano suave en letras ocultas."
                        },
                        "subtitulo": {
                            "texto": "TASTE THE FEELING",
                            "fuente": "Sans-serif moderna, bold, all-caps",
                            "color": "Negro puro",
                            "efecto": "También parcialmente superpuesto y difuminado en las zonas cubiertas."
                        }
                    },
                    "efecto_vidrio": "Las letras detrás del frosted glass aparecen suavemente borrosas."
                },
                "M_Composicion_Camara": {
                    "formato": "Vertical 3:4 en resolución 4K.",
                    "encuadre": "Composición centrada, balanceada, con whitespace generoso.",
                    "enfoque": "Sharp focus general con sensación HDR."
                },
                "P_Postproduccion": {
                    "dynamic_range": "HDR alto, rango dinámico elevado.",
                    "nitidez": "Extrema nitidez en tipografía no cubierta y bordes del objeto.",
                    "blur": "Gaussian blur suave aplicado solo en letras detrás del vidrio.",
                    "acabado_final": "Poster limpio, premium, listo para exposición contemporánea."
                }
            }
        }, null, 2),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/metaball-coca-cola.jpg",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },
    {
        "id": "nano-8",
        "type": "prompt",
        "title": "LEGO Collectible Glass Cube — Avatar + Companion Animal Diorama",
        "slug": "nano-banana-case-8",
        "summary": "Mini escena coleccionable LEGO en cubo de vidrio premium.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Mini escena coleccionable LEGO. Avatar personalizado + animal compañero.
*   **E (Entorno):** Cubo de vidrio transparente minimalista, base negra mate con acentos plateados.
*   **A (Acción):** Avatar y animal posando juntos, presencia simbólica y calmada.
*   **I (Iluminación):** Refinada, luz de estudio suave, highlights elegantes en vidrio.
*   **S (Sensación):** Curado, artístico, elegante, minimalista, museográfico.
*   **E (Estilo):** Diorama LEGO realista, acabado premium de materiales.
*   **M (Composición):** Vertical, cubo centrado, espacio negativo limpio.
*   **P (Post):** Paleta coordinada, contraste suave, nitidez alta en grabados y texturas.
        `,
        "prompt_text": JSON.stringify({
            "title": "LEGO Collectible Glass Cube — Avatar + Companion Animal Diorama",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Mini escena coleccionable estilo LEGO minifigure basada en la foto del usuario, dentro de un cubo de vidrio premium.",
                    "avatar": {
                        "estilo": "LEGO minifigure clásico",
                        "origen": "Basado en la foto cargada",
                        "identidad": "Mantener rasgos reconocibles adaptados a estética LEGO",
                        "escala": "Miniatura tipo diorama"
                    },
                    "animal_companion": {
                        "concepto": "Criatura diseñada según la personalidad percibida del usuario",
                        "tipo": "Puede ser real, surreal o fantástica",
                        "paleta": "Los colores del animal deben armonizar con los colores dominantes del avatar",
                        "nombre": "Debe asignarse un nombre elegante para placa"
                    }
                },
                "E_Entorno": {
                    "estructura": "Cubo transparente de vidrio como vitrina principal",
                    "interior": "Diseño minimalista, limpio, tipo galería",
                    "base": {
                        "material": "Negro mate",
                        "detalles": "Acentos plateados modernos"
                    },
                    "fondo_exterior": "Gradiente suave de oscuro a claro acorde al tema cromático"
                },
                "A_Accion_Presentacion": {
                    "staging": "El avatar LEGO está acompañado por el animal a su lado dentro del cubo",
                    "interaccion": "Compañero simbólico, presencia calmada y curada",
                    "display": "Presentación como obra de museo / collectible de lujo"
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación refinada estilo producto premium",
                    "caracteristicas": "Luz suave, controlada, con highlights elegantes sobre vidrio y figuras",
                    "efecto": "Look de galería de colección de alta gama"
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Curado, artístico, elegante, minimalista",
                    "tono": "High-end collectible artwork con esencia museográfica"
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Diorama LEGO dentro de vitrina moderna",
                    "materiales": {
                        "cubo": "Vidrio transparente limpio",
                        "figuras": "Acabado plástico LEGO realista",
                        "base": "Negro mate con grabado fino"
                    },
                    "tipografia": {
                        "placa_nombre": "Serif refinado con el nombre del animal",
                        "clasificacion": "Texto biológico grabado estilo museo de historia natural"
                    },
                    "detalle": "Meticuloso, artesanal, premium"
                },
                "M_Composicion_Camara": {
                    "formato": "Vertical (orientación tipo collectible showcase)",
                    "encuadre": "Cubo centrado con balance perfecto y espacio negativo limpio",
                    "layout": "Avatar + animal claramente visibles, placa legible en la base"
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta elegante coordinada con el animal y el avatar",
                    "contraste": "Suave, premium",
                    "acabado_final": "Imagen lista como pieza de arte coleccionable curada",
                    "nitidez": "Alta definición en grabados, vidrio, figura y detalles miniatura"
                }
            }
        }, null, 2),
        "category": "Generative AI",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/lego-collectible-glass-cube.png",
        "paywall_level": "free_preview",
        "created_at": "2026-01-23T05:34:12.816Z",
        "updated_at": new Date().toISOString(),
        "tags": [
            {
                "id": "t-nano",
                "name": "Nano Banana",
                "slug": "nano-banana"
            }
        ]
    },

    {
        "id": "ext-pg-454-1",
        "type": "prompt",
        "title": "Retrato sofisticado — Mujer en traje navy con presencia elegante",
        "slug": "elegance-redefined-confidence",
        "summary": "Retrato editorial sofisticado de mujer en traje navy.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Mujer elegante, traje navy entallado. Textura piel realista.
*   **E (Entorno):** Ambiente sereno, cálido y refinado.
*   **A (Postura):** Firme, centrada, mirada segura. Actitud de liderazgo.
*   **I (Iluminación):** Suave, cálida, envolvente. Sombras sutiles.
*   **S (Sensación):** Confianza, poder tranquilo, sofisticación.
*   **E (Estilo):** Retrato editorial cinematográfico high-end.
*   **M (Composición):** Plano medio/retrato. Eye-level, centrado.
*   **P (Post):** Tonos cálidos, contraste suave, nitidez alta.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato sofisticado — Mujer en traje navy con presencia elegante",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer elegante y poised con apariencia sofisticada.",
                    "vestimenta": {
                        "outfit": "Traje entallado color navy (azul marino).",
                        "estilo": "Formal, profesional, de alta elegancia."
                    },
                    "expresion": "Mirada seria e intensa, transmitiendo seguridad.",
                    "detalle_piel": "Textura realista y natural, acabado editorial."
                },
                "E_Entorno": {
                    "escena": "Ambiente sereno con surroundings cálidos y refinados.",
                    "fondo": "Contexto suave que complementa la elegancia del sujeto.",
                    "objetivo": "Resaltar la figura y su narrativa de poder."
                },
                "A_Accion_Postura": {
                    "pose": "Postura firme, centrada y segura.",
                    "lenguaje_corporal": "Elegancia contenida, actitud de liderazgo.",
                    "mirada": "Directa o ligeramente desviada con intención narrativa."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación suave y cálida.",
                    "caracteristicas": "Luz envolvente que define el traje y los contornos faciales.",
                    "sombras": "Sutiles, contribuyendo a una atmósfera premium."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Confianza, poder tranquilo, sofisticación.",
                    "tono": "Narrativa elegante y profesional con fuerza interior."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato editorial cinematográfico de alta gama.",
                    "acabado": "Elegante, limpio, moderno.",
                    "detalle": "Énfasis en texturas del traje y presencia del sujeto."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio o retrato profesional.",
                    "angulo": "Eye-level neutral para autoridad y cercanía.",
                    "encuadre": "Composición centrada y balanceada."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos balanceados con contraste suave.",
                    "nitidez": "Alta nitidez en rostro y traje.",
                    "acabado_final": "Retrato contemporáneo que transmite elegancia y poder."
                }
            }
        }, null, 2),
        "category": "Portrait",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/elegance-redefined-confidence.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }]
    },
    {
        "id": "ext-pg-454-2",
        "type": "prompt",
        "title": "Retrato chiaroscuro — Belleza rubia platino con couture floral",
        "slug": "whispers-elegance-floral-dreamscape",
        "summary": "Retrato editorial chiaroscuro de belleza rubia con couture floral.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Belleza rubia platino impactante. Couture floral delicada. Piel ultra-realista.
*   **E (Entorno):** Fondo oscuro minimalista, pétalos flotando.
*   **A (Postura):** Serena, delicada. Mirada emocional y sensible.
*   **I (Iluminación):** Chiaroscuro dramático, contraste fuerte, luz direccional.
*   **S (Sensación):** Delicado, emocional, etéreo, poético.
*   **E (Estilo):** Retrato editorial cinematográfico de alta costura.
*   **M (Composición):** Close-up/Plano medio. Centrado con elementos flotantes.
*   **P (Post):** Tonos cinematográficos, contraste suave en piel, nitidez 8K.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato chiaroscuro — Belleza rubia platino con couture floral",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer de belleza impactante con cabello rubio platino.",
                    "identidad_visual": "Rostro elegante y emocional, estética de alta costura.",
                    "vestimenta": {
                        "outfit": "Couture floral delicada, diseño artístico y refinado."
                    },
                    "detalle_piel": "Textura de piel natural, ultra-realista.",
                    "calidad": "Ultra-realistic 8K portrait rendering con fidelidad extrema."
                },
                "E_Entorno": {
                    "fondo": "Minimalista y oscuro, diseñado para enfatizar el claroscuro.",
                    "elementos": "Pétalos flotando suavemente alrededor del sujeto.",
                    "escena": "Ambiente de estudio artístico con atmósfera emocional."
                },
                "A_Accion_Postura": {
                    "pose": "Postura serena, delicada, estilo editorial de alta moda.",
                    "expresion": "Emoción suave y contemplativa, mirada cargada de sensibilidad.",
                    "dinamica": "Pétalos suspendidos agregan movimiento poético."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación dramática estilo chiaroscuro.",
                    "caracteristicas": "Contraste fuerte entre luces suaves y sombras profundas.",
                    "efecto": "Rostro esculpido por luz direccional, atmósfera cinematográfica."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Delicado, emocional, etéreo.",
                    "tono": "Alta moda poética con tensión visual suave."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato editorial cinematográfico de alta costura.",
                    "detalle": "Couture floral, pétalos flotantes, atmósfera oscura elegante.",
                    "calidad": "Ultra-realismo 8K con acabados premium tipo revista."
                },
                "M_Composicion_Camara": {
                    "plano": "Retrato close-up a plano medio editorial.",
                    "angulo": "Eye-level ligeramente estilizado.",
                    "encuadre": "Sujeto centrado con espacio para elementos flotantes."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cinematográficos con contraste suave en piel.",
                    "nitidez": "Alta definición en rostro, flores, pétalos y tela.",
                    "acabado_final": "Ultra-realistic 8K fashion portrait con mood chiaroscuro refinado."
                }
            }
        }, null, 2),
        "category": "Portrait",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/whispers-elegance-floral-dreamscape.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }]
    },
    {
        "id": "ext-pg-454-3",
        "type": "prompt",
        "title": "Elegance in the Snow: A Portrait of Winter Wonder",
        "slug": "elegance-snow-winter-wonder",
        "summary": "Girl with an umbrella in a snowy landscape with penguins.",
        "body_markdown": "Amidst a serene snowy landscape, a girl stands poised with an umbrella, radiating confidence. Penguins wander nearby, enhancing the enchanting, tranquil vibe of this winter scene.",
        "prompt_text": "Amidst a serene snowy landscape, a girl stands poised with an umbrella, radiating confidence. Penguins wander nearby, enhancing the enchanting, tranquil vibe of this winter scene.",
        "category": "Portrait",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "https://files.promptgather.io/7552015b7eecfde57b726cf9ac37a947_thumb_1762912195432.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }]
    },
    {
        "id": "ext-pg-454-4",
        "type": "prompt",
        "title": "Sunlit Serenity: A Moment in Time",
        "slug": "sunlit-serenity-moment-in-time",
        "summary": "Golden morning light on a calm expression.",
        "body_markdown": "Golden morning light spills through window blinds, softly illuminating her calm expression. This cinematic portrait captures the beauty of tranquility, with delicate shadows enhancing her thoughtful gaze.",
        "prompt_text": "Golden morning light spills through window blinds, softly illuminating her calm expression. This cinematic portrait captures the beauty of tranquility, with delicate shadows enhancing her thoughtful gaze.",
        "category": "Portrait",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "https://files.promptgather.io/463f7e65b390a238afc692740dad2f9b_thumb_1762912192697.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }]
    },
    {
        "id": "neon-noir-digital-rebellion",
        "type": "prompt",
        "title": "Neon Noir Portrait — Digital Rebellion",
        "slug": "urban-shadows-hackers-realm",
        "summary": "Retrato cyberpunk neo-noir con estética de rebelión digital.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Figura femenina intensa, piel húmeda, expresión determinada.
*   **E (Entorno):** Ciudad nocturna con neón, calles mojadas, arquitectura futurista.
*   **A (Acción):** Postura firme y desafiante, mirada directa sostenida.
*   **I (Iluminación):** Neón nocturno urbano, reflejos de colores saturados en la lluvia.
*   **S (Sensación):** Rebelión, misterio, subversión digital.
*   **E (Estilo):** Neon-noir cyberpunk, texturas mojadas fotorrealistas.
*   **M (Composición):** Plano medio centrado, profundidad urbana.
*   **P (Post):** Paleta fría con acentos neón ácidos, contraste alto, look rebelde.
        `,
        "prompt_text": JSON.stringify({
            "title": "Neon Noir Portrait — Digital Rebellion",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Figura femenina con rasgos definidos y expresivos, piel realista con reflejos húmedos por la lluvia.",
                    "expresion": "Intensa y determinada, mirada firme cargada de propósito.",
                    "coherencia": "Identidad facial consistente, proporciones realistas, presencia fuerte."
                },
                "E_Entorno": {
                    "fondo": "Ciudad nocturna empapada de luces neón.",
                    "ambientacion": "Entorno urbano futurista con estética cyberpunk.",
                    "elementos_clave": "Calles mojadas, reflejos de neón, arquitectura densa."
                },
                "A_Accion_Postura": {
                    "pose": "De pie, ligeramente adelantada en el encuadre.",
                    "lenguaje_corporal": "Postura firme, actitud desafiante y rebelde.",
                    "mirada": "Directa a cámara o ligeramente lateral, manteniendo tensión narrativa."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación nocturna urbana.",
                    "caracteristicas": "Luces neón de colores intensos reflejadas en la lluvia, contrastes marcados y brillos húmedos."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Misterio, rebelión, determinación.",
                    "tono": "Neo-noir, cyberpunk, subversivo."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato cinematográfico cyberpunk.",
                    "texturas": "Superficies mojadas, piel húmeda, neón difuso.",
                    "nivel_realismo": "Fotorrealista con estética futurista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro o ligeramente bajo.",
                    "encuadre": "Composición centrada con profundidad urbana al fondo."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta fría con acentos neón saturados (azules, magentas, verdes).",
                    "contraste": "Alto.",
                    "acabado": "Look cinematográfico oscuro con atmósfera rebelde y digital."
                }
            },
            "final_prompt": "Cinematic cyberpunk neon-noir portrait of a rebellious woman with wet skin, intense determined expression. Night city background drenched in neon rain, wet streets. High contrast colorful neon lighting reflections. Photorealistic 8K, cold palette with acid green and magenta accents, digital rebellion atmosphere. --ar 16:9"
        }, null, 2),
        "category": "Cyberpunk",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/neon-noir-rebellion.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cyb", "name": "Cyberpunk", "slug": "cyberpunk" }]
    },
    {
        "id": "cinematic-subway-longing-reflection",
        "type": "prompt",
        "title": "Cinematic Subway Portrait — Longing and Reflection",
        "slug": "shadows-longing-subway-story",
        "summary": "Retrato cinematográfico en el metro, cargado de anhelo y reflexión.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Hombre adulto, rasgos definidos, mirada profunda y pensativa.
*   **E (Entorno):** Estación de metro subterránea, eco visual, luces artificiales.
*   **A (Acción):** Sosteniendo un papel arrugado (promesa rota), postura contenida.
*   **I (Iluminación):** Luces duras del metro, sombras marcadas.
*   **S (Sensación):** Soledad, anhelo, anticipación pesada.
*   **E (Estilo):** Retrato narrativo urbano, fotorrealista emocional.
*   **M (Composición):** Plano medio, ángulo neutro, espacio negativo.
*   **P (Post):** Paleta fría desaturada, acentos verdosos, look cinematográfico.
        `,
        "prompt_text": JSON.stringify({
            "title": "Cinematic Subway Portrait — Longing and Reflection",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Hombre adulto con rasgos definidos y naturales, piel realista con textura visible.",
                    "expresion": "Cargada de anticipación y reflexión, mirada profunda y pensativa.",
                    "vestuario": "Gabardina (trench coat) oscura, clásica y atemporal.",
                    "coherencia": "Identidad facial consistente, proporciones realistas, sin exageración estilística."
                },
                "E_Entorno": {
                    "fondo": "Estación de metro subterránea.",
                    "ambientacion": "Espacio urbano cerrado con eco, sensación de vacío y tránsito constante.",
                    "elementos_clave": "Arquitectura del metro, túneles, luces artificiales."
                },
                "A_Accion_Postura": {
                    "pose": "De pie o ligeramente inclinado, cuerpo contenido.",
                    "lenguaje_corporal": "Postura tensa pero controlada, reflejo de espera y duda.",
                    "accion": "Sosteniendo un papel arrugado como símbolo de una promesa rota.",
                    "mirada": "Dirigida hacia abajo o hacia el vacío, fuera de cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación artificial urbana.",
                    "caracteristicas": "Luces duras del metro creando sombras marcadas y contrastes dramáticos."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Soledad, anhelo, anticipación pesada.",
                    "tono": "Melancólico, introspectivo, cinematográfico."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato cinematográfico urbano narrativo.",
                    "texturas": "Superficies frías del metro, tela del abrigo con detalle visible.",
                    "nivel_realismo": "Fotorrealista con carga emocional."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro o ligeramente bajo.",
                    "encuadre": "Composición que deja espacio negativo para enfatizar soledad."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta fría y desaturada con acentos amarillos o verdosos del metro.",
                    "contraste": "Medio-alto.",
                    "acabado": "Look cinematográfico urbano con énfasis narrativo."
                }
            },
            "final_prompt": "Cinematic urban portrait of a middle-aged man in a dark trench coat, deep pensive expression, holding a crumpled paper. Underground subway station background with tunnels and artificial lights. High contrast harsh artificial lighting. Photorealistic 8K, cold desaturated palette with greenish accents, melancholic atmosphere. --ar 16:9"
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/subway-longing.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }]
    },
    {
        "id": "poetic-sunset-solitude-in-thought",
        "type": "prompt",
        "title": "Golden Hour",
        "slug": "golden-hour",
        "summary": "Retrato poético al atardecer, soledad en pensamiento.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Mujer joven, rasgos naturales, textura de piel realista, mirada introspectiva.
*   **E (Entorno):** Exterior al atardecer, luz cálida en el horizonte.
*   **A (Acción):** Postura relajada y quieta, mirada fuera de cámara, pausa en el tiempo.
*   **I (Iluminación):** Luz natural de sunset, sombras suaves que danzan en el rostro.
*   **S (Sensación):** Soledad, melancolía suave, intimidad emocional.
*   **E (Estilo):** Lifestyle cinematográfico, fotorrealista con sensibilidad artística.
*   **M (Composición):** Primer plano íntimo, composición centrada.
*   **P (Post):** Tonos dorados cálidos, contraste suave, look delicado.
        `,
        "prompt_text": JSON.stringify({
            "title": "Poetic Sunset Portrait — Solitude in Thought",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Mujer joven con rasgos suaves y naturales, piel realista con textura visible.",
                    "expresion": "Pensativa, introspectiva, mirada cargada de emoción contenida.",
                    "coherencia": "Identidad facial consistente, proporciones realistas, sin estilización excesiva."
                },
                "E_Entorno": {
                    "fondo": "Entorno exterior al atardecer.",
                    "ambientacion": "Escenario tranquilo y silencioso que acompaña el momento introspectivo.",
                    "elementos_clave": "Luz cálida del sol bajo en el horizonte."
                },
                "A_Accion_Postura": {
                    "pose": "Postura relajada, cuerpo quieto.",
                    "lenguaje_corporal": "Quietud contemplativa, sensación de pausa en el tiempo.",
                    "mirada": "Dirigida ligeramente fuera de cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación natural de sunset.",
                    "caracteristicas": "Luz cálida lateral creando sombras suaves que danzan sobre el rostro."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Soledad, reflexión, melancolía suave.",
                    "tono": "Poético, íntimo, emocional."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato cinematográfico lifestyle.",
                    "texturas": "Piel natural, transiciones suaves de luz y sombra.",
                    "nivel_realismo": "Fotorrealista con sensibilidad artística."
                },
                "M_Composicion_Camara": {
                    "plano": "Primer plano o plano medio.",
                    "angulo": "Ángulo neutro.",
                    "encuadre": "Composición íntima centrada en el rostro."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos dorados con sombras suaves.",
                    "contraste": "Suave.",
                    "acabado": "Look cinematográfico delicado y emocional."
                }
            },
            "final_prompt": "Cinematic lifestyle portrait of a young woman with soft natural features, pensive and introspective expression. Outdoor sunset setting with warm low horizon light. Natural sunset lighting creating dancing soft shadows on face. Photorealistic 8K, golden warm tones, soft contrast, delicate emotional atmosphere. --ar 16:9"
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/golden-hour.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }]
    },
    {
        "id": "power-portrait-teal-smoke-authority",
        "type": "prompt",
        "title": "Power Portrait — Teal Smoke Authority",
        "slug": "teal-smoke-authority-power",
        "summary": "Retrato de poder cinematográfico con humo teal y estética editorial.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Figura femenina elegante, rasgos definidos, expresión de confianza silenciosa.
*   **E (Entorno):** Espacio minimalista oscuro, humo en movimiento creando profundidad.
*   **A (Acción):** Postura firme y erguida, control total del espacio.
*   **I (Iluminación):** Luz cinematográfica suave, halo teal difuso a través de la neblina.
*   **S (Sensación):** Confianza, autoridad, misterio elegante.
*   **E (Estilo):** Retrato de poder editorial, fotorrealista, texturas de traje definidas.
*   **M (Composición):** Plano medio a tres cuartos, ángulo bajo de autoridad, formato 16:9.
*   **P (Post):** Paleta oscura con acentos teal, look sofisticado y limpio.
        `,
        "prompt_text": JSON.stringify({
            "title": "Power Portrait — Teal Smoke Authority (16:9)",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Figura femenina con rasgos definidos y elegantes, estructura facial equilibrada, piel realista con acabado editorial pulido.",
                    "expresion": "Segura y dominante, confianza silenciosa.",
                    "vestuario": "Traje negro a medida con líneas limpias y corte impecable.",
                    "coherencia": "Identidad visual consistente, proporciones realistas."
                },
                "E_Entorno": {
                    "fondo": "Espacio oscuro envuelto en humo en movimiento.",
                    "ambientacion": "Escenario minimalista y abstracto que enfatiza liderazgo.",
                    "elementos_clave": "Neblina/smoke creando capas de profundidad."
                },
                "A_Accion_Postura": {
                    "pose": "De pie, postura firme y erguida.",
                    "lenguaje_corporal": "Control total del espacio.",
                    "mirada": "Directa al frente, presencia autoritaria."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación cinematográfica suave.",
                    "caracteristicas": "Luz teal difusa atravesando el humo, halo envolvente con sombras controladas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Confianza, autoridad, misterio.",
                    "tono": "Elegante, poderoso, cinematográfico."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato cinematográfico de poder con estética editorial.",
                    "texturas": "Tela del traje bien definida; humo etéreo.",
                    "nivel_realismo": "Fotorrealista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a tres cuartos.",
                    "angulo": "Ligeramente bajo para reforzar autoridad.",
                    "encuadre": "Formato horizontal 16:9, sujeto dominante centrado con espacio negativo lateral."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta oscura con acentos teal suaves.",
                    "contraste": "Medio.",
                    "acabado": "Look limpio y sofisticado con atmósfera envolvente.",
                    "branding_conceptual": "La presencia visual comunica la esencia de liderazgo asociada a Grok Imagine."
                }
            },
            "final_prompt": "Cinematic power portrait of an elegant woman in a tailored black suit, confident and dominant expression. Dark minimalist background with swirling teal smoke and mist. Soft diffuse cinematic lighting, teal halo effect. Photorealistic 8K, editorial aesthetic, high contrast, sophisticated atmosphere. --ar 16:9"
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": true,
        "featured_image_url": "/images/prompts/teal-smoke-authority.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cinematic", "name": "Cinematic", "slug": "cinematic" }]
    },
    {
        "id": "ext-pg-454-12",
        "type": "prompt",
        "title": "Cyberpunk Cinematic Portrait — The Choice",
        "slug": "shadows-authority-cyberpunk-portrait",
        "summary": "Retrato cinematográfico de alta autoridad en una realidad simulada.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Mujer adulta, rostro exacto de la usuaria, expresión enigmática y autoritaria, gafas de sol redondas.
*   **E (Entorno):** Habitación oscura minimalista, cascadas de código digital verde descendiendo por las paredes.
*   **A (Acción):** Sentada en sillón ornamentado, manos extendidas hacia adelante (gesto de decisión), mirada firme.
*   **I (Iluminación):** Dramática cinematográfica, reflejos verdes del código digital, sombras profundas.
*   **S (Sensación):** Tensión, misterio, autoridad absoluta.
*   **E (Estilo):** Hyper-realista cyberpunk, gabardina oscura sobre traje estructurado.
*   **M (Composición):** Plano medio/tres cuartos, ángulo frontal bajo para enfatizar autoridad.
*   **P (Post):** Paleta oscura con acentos verdes intensos, contraste alto, look 8K de alto impacto.
        `,
        "prompt_text": JSON.stringify({
            "title": "Cyberpunk Cinematic Portrait — The Choice",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Mujer adulta utilizando el rostro exacto de la usuaria, preservando perfectamente sus rasgos faciales, proporciones, textura de piel, expresiones naturales y peinado original.",
                    "expresion": "Enigmática, compuesta y autoritaria.",
                    "accesorios": "Gafas de sol redondas distintivas.",
                    "coherencia": "Identidad facial fija y consistente, sin alteraciones ni estilización no deseada."
                },
                "E_Entorno": {
                    "fondo": "Habitación oscura y minimalista con estética casi estéril.",
                    "elementos_clave": "Cascadas de código digital verde descendiendo por las paredes o proyectadas en el espacio.",
                    "ambientacion": "Entorno que evoca una realidad simulada de inspiración cyberpunk."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada en un sillón oscuro, grande y ornamentado.",
                    "lenguaje_corporal": "Postura intencional y poderosa, control total del espacio.",
                    "accion": "Ambas manos extendidas hacia adelante, gesto simbólico de decisión.",
                    "mirada": "Firme y dominante, dirigida hacia el espectador."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación dramática cinematográfica.",
                    "caracteristicas": "Luz direccional que crea sombras profundas, resaltando el rostro y la expresión, con reflejos verdes provenientes del código digital."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Tensión, misterio, autoridad.",
                    "tono": "Cinematográfico, cyberpunk, serio y poderoso."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato cinematográfico hyper-realista con estética cyberpunk.",
                    "vestuario": "Gabardina oscura sobre un traje estructurado y elegante.",
                    "texturas": "Materiales realistas en ropa, piel y mobiliario.",
                    "nivel_realismo": "Ultra-realista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a plano tres cuartos.",
                    "angulo": "Ángulo frontal ligeramente bajo para enfatizar autoridad.",
                    "encuadre": "Formato vertical 3:4, sujeto dominante en el centro del encuadre."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta oscura con acentos verdes intensos.",
                    "contraste": "Alto, con negros profundos.",
                    "acabado": "Look cinematográfico de alto impacto.",
                    "calidad": {
                        "resolucion": "Ultra-realistic 8K",
                        "estilo": "Cyberpunk cinematic",
                        "iluminacion": "Dramatic shadowed"
                    }
                }
            },
            "final_prompt": "Cyberpunk Cinematic Portrait, Adult woman with highly detailed facial features [exact identity], wearing distinctive round sunglasses, enigmatic and authoritative expression. Sitting in a large ornate dark armchair, both hands extended forward in a symbolic gesture of choice. Background is a dark minimalist room with cascading green digital code on walls. Dramatic cinematic lighting with green highlights, deep shadows. Ultra-realistic 8K, dark trench coat, high contrast, Matrix-inspired simulation aesthetic. --ar 3:4"
        }, null, 2),
        "category": "Cyberpunk",
        "level": "advanced",
        "is_published": true,
        "is_featured": true,
        "featured_image_url": "/images/prompts/cyberpunk-the-choice.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cyb", "name": "Cyberpunk", "slug": "cyberpunk" }]
    },
    {
        "id": "duality-existence-geisha-contrast",
        "type": "prompt",
        "title": "Conceptual Juxtaposition Portrait — Geisha Between Worlds",
        "slug": "geisha-dual-existence-conceptual",
        "summary": "Retrato conceptual que divide el mundo de una geisha entre lo urbano y lo natural.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Figura de geisha simbólica, rasgos delicados, expresión serena y contemplativa.
*   **E (Entorno):** Composición dividida: Lado urbano (arquitectura moderna rígida) vs Lado natural (vegetación exuberante).
*   **A (Acción):** Postura estática centrada, equilibrio meditativo entre dos realidades.
*   **I (Iluminación):** Luz fría estructurada (urbano) vs Luz cálida vibrante (natural).
*   **S (Sensación):** Dualidad, tensión poética entre progreso y naturaleza.
*   **E (Estilo):** Arte conceptual, semi-realista, fuerte narrativa visual.
*   **M (Composición):** Plano medio frontal, composición simétrica que enfatiza la división.
*   **P (Post):** Color grading contrastado, estilo editorial simbólico, contraste alto.
        `,
        "prompt_text": JSON.stringify({
            "title": "Conceptual Juxtaposition Portrait — Geisha Between Worlds",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Figura femenina inspirada en una geisha, con rasgos delicados y expresión serena, identidad tratada de forma simbólica y artística más que literal.",
                    "expresion": "Calma, introspectiva, contemplativa.",
                    "coherencia": "El rostro permanece reconocible y equilibrado a pesar de la división visual conceptual."
                },
                "E_Entorno": {
                    "fondo": "Composición dividida en dos mundos contrastantes.",
                    "lado_urbano": "Estructuras geométricas, arquitectura moderna, formas rígidas y urbanas.",
                    "lado_natural": "Vegetación exuberante, colores vivos, naturaleza orgánica y salvaje.",
                    "ambientacion": "Contraste visual entre modernidad y naturaleza."
                },
                "A_Accion_Postura": {
                    "pose": "Postura estática y centrada, símbolo de equilibrio entre dos realidades.",
                    "lenguaje_corporal": "Quietud deliberada, presencia meditativa.",
                    "mirada": "Neutral o suavemente dirigida al frente, reforzando la dualidad."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación conceptual diferenciada por zonas.",
                    "caracteristicas": "Luz fría y estructurada en el lado urbano, luz cálida y vibrante en el lado natural."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Dualidad, reflexión, tensión entre progreso y naturaleza.",
                    "tono": "Poético, simbólico, contemplativo."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Arte conceptual con narrativa visual fuerte.",
                    "tecnicas": "Juxtaposición visual, división simbólica del retrato.",
                    "texturas": "Contraste entre superficies geométricas duras y elementos orgánicos vivos.",
                    "nivel_realismo": "Semi-realista conceptual."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio o primer plano.",
                    "angulo": "Ángulo frontal.",
                    "encuadre": "Composición simétrica que enfatiza la división entre ambos mundos."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta contrastante entre tonos fríos urbanos y colores saturados naturales.",
                    "contraste": "Alto entre ambas mitades.",
                    "acabado": "Estilo artístico editorial con fuerte carga simbólica."
                }
            },
            "final_prompt": "Conceptual juxtaposition portrait of a symbolic geisha figure, delicate features, serene expression. The scene is perfectly split vertically: left side features cold blue rigid modern urban architecture, right side features warm vibrant organic exuberant jungle vegetation. Symmetrical composition, centered subject. Conceptual art style, high contrast between cold and warm lighting, 8K resolution, symbolic editorial aesthetic. --ar 16:9"
        }, null, 2),
        "category": "Conceptual",
        "level": "advanced",
        "is_published": true,
        "is_featured": true,
        "featured_image_url": "/images/prompts/geisha-dual-existence.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-conceptual", "name": "Conceptual", "slug": "conceptual" }]
    },
    {
        "id": "melodies-shadows-creative-vibes",
        "type": "prompt",
        "title": "Cinematic Music Studio Portrait — Creative Focus",
        "slug": "music-studio-creative-focus",
        "summary": "Retrato cinematográfico de una artista en su estudio, capturando la esencia de la creación musical.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Artista femenina, rasgos naturales y expresivos, profundamente concentrada.
*   **E (Entorno):** Estudio musical en penumbra, guitarras y controladores MIDI de fondo.
*   **A (Acción):** Interactuando con el equipo, postura inmersiva y enfocada.
*   **I (Iluminación):** Luz mínima direccional, creando sombras profundas y atmósfera íntima.
*   **S (Sensación):** Pasión, introspección, proceso creativo auténtico.
*   **E (Estilo):** Fotorrealista, estilo lifestyle cinematográfico.
*   **M (Composición):** Plano medio, composición equilibrada entre artista e instrumentos.
*   **P (Post):** Tonos cálidos y oscuros, acabado analógico, contraste medio-alto.
        `,
        "prompt_text": JSON.stringify({
            "title": "Cinematic Music Studio Portrait — Creative Focus",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Artista femenina con rasgos naturales y expresivos, piel realista, identidad clara y auténtica.",
                    "expresion": "Concentrada, inspirada, profundamente conectada con el sonido.",
                    "coherencia": "Rasgos consistentes, apariencia realista sin estilización excesiva."
                },
                "E_Entorno": {
                    "fondo": "Estudio musical en penumbra.",
                    "elementos_clave": "Guitarras visibles, controladores MIDI y equipo musical rodeando a la artista.",
                    "ambientacion": "Espacio creativo íntimo y funcional, cargado de potencial sonoro."
                },
                "A_Accion_Postura": {
                    "pose": "De pie o sentada frente al equipo musical.",
                    "lenguaje_corporal": "Postura enfocada, inmersa en el proceso creativo.",
                    "accion": "Interactuando o preparándose para usar guitarras y controladores MIDI.",
                    "mirada": "Dirigida hacia los instrumentos o ligeramente hacia abajo, en concentración."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación mínima y direccional.",
                    "caracteristicas": "Un único punto de luz que revela parcialmente el rostro y los instrumentos, dejando el resto del espacio en sombra."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Creatividad, pasión, introspección.",
                    "tono": "Íntimo, artístico, inspirador."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato cinematográfico lifestyle en entorno musical.",
                    "texturas": "Materiales reales de instrumentos, superficies mates y metálicas.",
                    "nivel_realismo": "Fotorrealista."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro o ligeramente lateral.",
                    "encuadre": "Composición que integra a la artista y los instrumentos sin saturar la escena."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos oscuros y cálidos con acentos suaves.",
                    "contraste": "Medio-alto, enfatizando luces y sombras.",
                    "acabado": "Look cinematográfico íntimo con sensación analógica."
                }
            },
            "final_prompt": "Cinematic lifestyle portrait of a female music artist, natural and expressive features, deeply focused and connected to sound. Setting is a dim music studio with visible guitars and MIDI controllers in the background. Minimal directional lighting casting soft shadows. Photorealistic 8K, warm analog color grading, intimate creative atmosphere. --ar 16:9"
        }, null, 2),
        "category": "Creative",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/music-studio-creative.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-music", "name": "Music", "slug": "music" }]
    },
    {
        "id": "chill-elegance-winter-embrace",
        "type": "prompt",
        "title": "Winter Tranquility Portrait — Snowfall Elegance",
        "slug": "winter-snowfall-elegance",
        "summary": "Retrato invernal que captura la elegancia y la paz de la nieve al caer.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Figura femenina elegante, traje de piel lujoso, expresión serena y calmada.
*   **E (Entorno):** Exterior invernal, caída de nieve suave, atmósfera silenciosa.
*   **A (Acción):** Postura erguida y relajada, presencia serena ante la cámara.
*   **I (Iluminación):** Luz natural difusa de invierno, envolvente y suave.
*   **S (Sensación):** Paz, quietud, elegancia fría y poética.
*   **E (Estilo):** Fotorrealista con toque artístico, retrato cinematográfico.
*   **M (Composición):** Plano medio centrado, los copos de nieve envuelven al sujeto.
*   **P (Post):** Paleta fría (blancos y grises azulados), contraste suave, look etéreo.
        `,
        "prompt_text": JSON.stringify({
            "title": "Winter Tranquility Portrait — Snowfall Elegance",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Figura femenina con rasgos serenos y elegantes, piel natural con tonos fríos suaves, identidad visual calmada y armónica.",
                    "expresion": "Tranquila, contemplativa, con una sensación de quietud interior.",
                    "vestuario": "Abrigo de piel lujoso que envuelve la figura con presencia y sofisticación.",
                    "coherencia": "Proporciones realistas y apariencia refinada, sin exageración."
                },
                "E_Entorno": {
                    "fondo": "Escenario exterior invernal con caída de nieve.",
                    "ambientacion": "Paisaje frío y silencioso que refuerza la sensación de calma.",
                    "elementos_clave": "Copos de nieve visibles flotando alrededor del sujeto."
                },
                "A_Accion_Postura": {
                    "pose": "Postura erguida y relajada.",
                    "lenguaje_corporal": "Calma absoluta, presencia serena.",
                    "mirada": "Suave, dirigida al frente o ligeramente fuera de cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación natural difusa de invierno.",
                    "caracteristicas": "Luz suave y envolvente que resalta la textura del abrigo y los copos de nieve."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Paz, quietud, elegancia fría.",
                    "tono": "Poético, invernal, contemplativo."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato cinematográfico de invierno.",
                    "texturas": "Detalle visible en la piel, el abrigo de piel y los copos de nieve.",
                    "nivel_realismo": "Fotorrealista con toque artístico."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ángulo neutro.",
                    "encuadre": "Composición centrada con nieve envolviendo al sujeto."
                },
                "P_Postproduccion": {
                    "color_grading": "Paleta fría con blancos suaves y grises azulados.",
                    "contraste": "Suave.",
                    "acabado": "Look limpio y etéreo que refuerza la tranquilidad invernal."
                }
            },
            "final_prompt": "Cinematic winter portrait of an elegant woman in a luxurious fur coat, serene and contemplative expression. Natural soft cold skin tones. Falling snow in a quiet winter landscape background. Diffuse natural winter lighting. Photorealistic 8K, cold color palette with soft whites and blueish grays, ethereal atmosphere. --ar 16:9"
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/winter-tranquility.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-winter", "name": "Winter", "slug": "winter" }]
    },
    {
        "id": "fashion-fullbody-macbook-pro",
        "type": "prompt",
        "title": "Retrato Fashion de Cuerpo Completo con MacBook Pro - Femenino",
        "slug": "fashion-fullbody-macbook-pro",
        "summary": "Retrato fashion de cuerpo completo con MacBook Pro, estilo editorial minimalista.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Rostro natural con maquillaje suave, expresión neutra profesional. Cabello rojo suelto.
*   **E (Entorno):** Fondo neutro apagado estilo marketing, ambientación minimalista.
*   **A (Acción):** De pie manipulando un MacBook Pro, gestualidad natural y profesional.
*   **I (Iluminación):** Studio soft light, sombras mínimas.
*   **S (Sensación):** Productividad, modernidad, tono marketing clean.
*   **E (Estilo):** Editorial minimalista, paleta neutra elegante.
*   **M (Composicion):** Full body, ángulo neutral, modelo centrada.
*   **P (Post):** Tonos suaves, claridad alta.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato Fashion de Cuerpo Completo con MacBook Pro - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rostro natural con maquillaje suave.",
                    "expresion": "Neutra profesional.",
                    "cabello": "Rojo, suelto.",
                    "coherencia": "Medidas corporales exactas según prompt original."
                },
                "E_Entorno": {
                    "fondo": "Neutro apagado estilo marketing.",
                    "ambientacion": "Minimalista."
                },
                "A_Accion_Postura": {
                    "pose": "De pie manipulando un MacBook Pro.",
                    "gestualidad": "Natural y profesional."
                },
                "I_Iluminacion": {
                    "tipo": "Studio soft light.",
                    "caracteristicas": "Sombras mínimas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Productividad, modernidad.",
                    "tono": "Marketing clean."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Editorial minimalista.",
                    "color": "Paleta neutra elegante."
                },
                "M_Composicion_Camara": {
                    "plano": "Full body.",
                    "angulo": "Neutral.",
                    "encuadre": "Modelo centrada."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos suaves.",
                    "claridad": "Alta."
                }
            }
        }, null, 2),
        "category": "Fashion",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/fashion-macbook-pro.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-fashion", "name": "Fashion", "slug": "fashion" }, { "id": "t-tech", "name": "Tech", "slug": "tech" }]
    },
    {
        "id": "couture-couple-bw",
        "type": "prompt",
        "title": "Retrato B&W de Pareja de Alta Costura (Espalda con Espalda) - Femenino",
        "slug": "couture-couple-bw",
        "summary": "Retrato B&W de pareja de alta costura, espalda con espalda, estilo editorial.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Expresión intensa y elegante, seria, editorial. Cabello con ondas largas estilizadas. Estilo con blazer negro y crop top.
*   **E (Entorno):** Telón gris claro minimalista, ambientación moda de estudio en B&W.
*   **A (Acción):** Espalda con espalda junto al hombre, mirada directa intensa a cámara.
*   **I (Iluminación):** Luz controlada suave, contraste elegante B&W.
*   **S (Sensación):** Fuerza, elegancia, sofisticación, tono editorial clásico.
*   **E (Estilo):** Monocromo elegante, blancos puros, negros profundos, textura alta definición fashion.
*   **M (Composición):** Mitad de cuerpo, altura de ojos, ambos sujetos centrados y simétricos.
*   **P (Post):** B&W de alto contraste, claridad alta y precisa.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato B&W de Pareja de Alta Costura (Espalda con Espalda) - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Expresión intensa y elegante.",
                    "expresion": "Seria, editorial.",
                    "cabello": "Ondas largas estilizadas.",
                    "estilo": "Blazer negro con crop top."
                },
                "E_Entorno": {
                    "fondo": "Telón gris claro minimalista.",
                    "ambientacion": "Moda de estudio en B&W."
                },
                "A_Accion_Postura": {
                    "pose": "Espalda con espalda junto al hombre.",
                    "mirada": "Directa intensa a cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Luz controlada suave.",
                    "caracteristicas": "Contraste elegante B&W."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Fuerza, elegancia, sofisticación.",
                    "tono": "Editorial clásico."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Monocromo elegante.",
                    "color": "Blancos puros, negros profundos.",
                    "textura": "Alta definición fashion."
                },
                "M_Composicion_Camara": {
                    "plano": "Mitad de cuerpo.",
                    "angulo": "Altura de ojos.",
                    "encuadre": "Ambos sujetos centrados y simétricos."
                },
                "P_Postproduccion": {
                    "color_grading": "B&W de alto contraste.",
                    "claridad": "Alta y precisa."
                }
            }
        }, null, 2),
        "category": "Fashion",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/couture-couple-bw.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-fashion", "name": "Fashion", "slug": "fashion" }, { "id": "t-bw", "name": "B&W", "slug": "black-white" }]
    },
    {
        "id": "intimate-couple-modern",
        "type": "prompt",
        "title": "Retrato Íntimo de Pareja en Sala Moderna - Femenino",
        "slug": "intimate-couple-modern",
        "summary": "Retrato íntimo de pareja en sala moderna, cálido y elegante.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Perfil delicado, mirada suave, expresión cálida y afectuosa. Cabello largo con ondas suaves. Top y falda negros.
*   **E (Entorno):** Sala moderna desenfocada con tonos beige, ambientación elegante y cálida.
*   **A (Acción):** De pie al lado del hombre, mano en su cintura. Mirada hacia cámara.
*   **I (Iluminación):** Luz difusa desde la izquierda, sombras delicadas y cálidas.
*   **S (Sensación):** Conexión emocional, tono retrato cálido editorial.
*   **E (Estilo):** Lifestyle cálido y moderno, paleta beige, negro, marrón suave.
*   **M (Composición):** Plano medio, ángulo altura de ojos.
*   **P (Post):** Color grading cálido elegante, claridad alta y suave.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato Íntimo de Pareja en Sala Moderna - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Perfil delicado, mirada suave.",
                    "expresion": "Cálida, afectuosa.",
                    "cabello": "Largo con ondas suaves.",
                    "indumentaria": "Top y falda negros."
                },
                "E_Entorno": {
                    "fondo": "Sala moderna desenfocada con tonos beige.",
                    "ambientacion": "Elegante y cálida."
                },
                "A_Accion_Postura": {
                    "pose": "De pie al lado del hombre, mano en su cintura.",
                    "mirada": "Hacia cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Luz difusa desde la izquierda.",
                    "caracteristicas": "Sombras delicadas y cálidas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Conexión emocional.",
                    "tono": "Retrato cálido editorial."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Lifestyle cálido y moderno.",
                    "color": "Paleta cálida: beige, negro, marrón suave."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio.",
                    "angulo": "Altura de ojos."
                },
                "P_Postproduccion": {
                    "color_grading": "Cálido elegante.",
                    "claridad": "Alta y suave."
                }
            }
        }, null, 2),
        "category": "Lifestyle",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/intimate-couple-modern.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-lifestyle", "name": "Lifestyle", "slug": "lifestyle" }]
    },
    {
        "id": "christmas-gift-neon",
        "type": "prompt",
        "title": "Retrato Navideño con Caja de Regalo y Letrero Neón - Femenino",
        "slug": "christmas-gift-neon",
        "summary": "Retrato navideño alegre con caja de regalo gigante y letrero neón.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Sonrisa amplia, maquillaje navideño suave. Cabello rubio largo, suelto. Minivestido rojo brillante.
*   **E (Entorno):** Árboles navideños con luces cálidas. Letrero 'Merry Christmas' en neón blanco.
*   **A (Acción):** Sentada dentro de una caja roja gigante. Manos abiertas, postura alegre.
*   **I (Iluminación):** Luz cálida festiva, bokeh navideño brillante.
*   **S (Sensación):** Alegría festiva, tono comercial navideño.
*   **E (Estilo):** Fotografía publicitaria navideña, rojos, verdes, dorados, brillo suave y cálido.
*   **M (Composición):** Medium shot, ligero picado desde arriba.
*   **P (Post):** Calidez navideña, claridad alta, bokeh expandido.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato Navideño con Caja de Regalo y Letrero Neón - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Sonrisa amplia, maquillaje navideño suave.",
                    "cabello": "Rubio largo, suelto.",
                    "indumentaria": "Minivestido rojo brillante."
                },
                "E_Entorno": {
                    "fondo": "Árboles navideños con luces cálidas.",
                    "elementos": "Letrero 'Merry Christmas' en neón blanco."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada dentro de una caja roja gigante.",
                    "gestualidad": "Manos abiertas, postura alegre."
                },
                "I_Iluminacion": {
                    "tipo": "Luz cálida festiva.",
                    "caracteristicas": "Bokeh navideño brillante."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Alegría festiva.",
                    "tono": "Comercial navideño."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía publicitaria navideña.",
                    "color": "Rojos, verdes, dorados.",
                    "textura": "Brillo suave y cálido."
                },
                "M_Composicion_Camara": {
                    "plano": "Medium shot.",
                    "angulo": "Ligero picado desde arriba."
                },
                "P_Postproduccion": {
                    "color_grading": "Calidez navideña.",
                    "claridad": "Alta.",
                    "efectos": "Bokeh expandido."
                }
            }
        }, null, 2),
        "category": "Holiday",
        "level": "beginner",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/christmas-gift-neon.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-holiday", "name": "Holiday", "slug": "holiday" }, { "id": "t-neon", "name": "Neon", "slug": "neon" }]
    },
    {
        "id": "christmas-intimate-warm",
        "type": "prompt",
        "title": "Retrato Íntimo y Cálido Navideño - Femenino",
        "slug": "christmas-intimate-warm",
        "summary": "Retrato navideño íntimo y cálido con iluminación tenue.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Mirada pensativa, maquillaje suave. Cabello rubio largo natural. Suéter rojo navideño.
*   **E (Entorno):** Árbol navideño oscuro con bokeh dorado. Ambientación cálida e íntima.
*   **A (Acción):** Manos cerca del rostro en gesto contemplativo. Mirada hacia arriba.
*   **I (Iluminación):** Luz cálida tenue, sombras suaves e íntimas.
*   **S (Sensación):** Nostalgia y calidez emocional, tono íntimo navideño.
*   **E (Estilo):** Retrato navideño tipo editorial, rojos profundos y dorados oscuros.
*   **M (Composición):** Medium close-up, ángulo neutral.
*   **P (Post):** Color grading cálido profundo, claridad moderada para efecto suave.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato Íntimo y Cálido Navideño - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Mirada pensativa, maquillaje suave.",
                    "cabello": "Rubio largo natural.",
                    "indumentaria": "Suéter rojo navideño."
                },
                "E_Entorno": {
                    "fondo": "Árbol navideño oscuro con bokeh dorado.",
                    "ambientacion": "Cálida e íntima."
                },
                "A_Accion_Postura": {
                    "pose": "Manos cerca del rostro en gesto contemplativo.",
                    "mirada": "Hacia arriba."
                },
                "I_Iluminacion": {
                    "tipo": "Luz cálida tenue.",
                    "caracteristicas": "Sombras suaves e íntimas."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Nostalgia y calidez emocional.",
                    "tono": "Íntimo navideño."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato navideño tipo editorial.",
                    "color": "Rojos profundos y dorados oscuros."
                },
                "M_Composicion_Camara": {
                    "plano": "Medium close-up.",
                    "angulo": "Neutral."
                },
                "P_Postproduccion": {
                    "color_grading": "Cálido profundo.",
                    "claridad": "Moderada para efecto suave."
                }
            }
        }, null, 2),
        "category": "Holiday",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/christmas-intimate-warm.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-holiday", "name": "Holiday", "slug": "holiday" }, { "id": "t-warm", "name": "Warm", "slug": "warm" }]
    },
    {
        "id": "gym-selfie-casual",
        "type": "prompt",
        "title": "Selfie Casual en Gimnasio con Estilo de Teléfono - Femenino",
        "slug": "gym-selfie-casual",
        "summary": "Selfie casual en gimnasio con estilo de teléfono, natural y espontáneo.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Natural, sin retoque. Cabello peinado casual, expresión espontánea. Outfit deportivo girly en negro y rosa.
*   **E (Entorno):** Gimnasio real, ligeramente desordenado. Ambientación casual auténtica.
*   **A (Acción):** Selfie frente al espejo, gestualidad teléfono en mano.
*   **I (Iluminación):** Luz natural suave, sin iluminación profesional.
*   **S (Sensación):** Naturalidad y espontaneidad, tono realista no profesional.
*   **E (Estilo):** Foto de móvil real, colores neutros sin estilización, textura suave típica de cámara de baja calidad.
*   **M (Composición):** Selfie close-up / medio, ángulo vertical espejo, encuadre centrado y casual.
*   **P (Post):** Edición mínima, contraste natural, nitidez moderada/baja.
        `,
        "prompt_text": JSON.stringify({
            "title": "Selfie Casual en Gimnasio con Estilo de Teléfono - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Natural, sin retoque.",
                    "cabello": "Peinado casual.",
                    "expresion": "Espontánea.",
                    "indumentaria": "Outfit deportivo girly en negro y rosa."
                },
                "E_Entorno": {
                    "fondo": "Gimnasio real, ligeramente desordenado.",
                    "ambientacion": "Casual auténtica."
                },
                "A_Accion_Postura": {
                    "pose": "Selfie frente al espejo.",
                    "gestualidad": "Teléfono en mano."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural suave.",
                    "caracteristicas": "Sin iluminación profesional."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Naturalidad y espontaneidad.",
                    "tono": "Realista no profesional."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Foto de móvil real.",
                    "color": "Neutros, sin estilización.",
                    "textura": "Suavidad típica de cámara de baja calidad."
                },
                "M_Composicion_Camara": {
                    "plano": "Selfie close-up / medio.",
                    "angulo": "Vertical espejo.",
                    "encuadre": "Centrado y casual."
                },
                "P_Postproduccion": {
                    "edicion": "Mínima.",
                    "contraste": "Natural.",
                    "nitidez": "Moderada/baja."
                }
            }
        }, null, 2),
        "category": "Lifestyle",
        "level": "beginner",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/gym-selfie-casual.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-lifestyle", "name": "Lifestyle", "slug": "lifestyle" }, { "id": "t-gym", "name": "Gym", "slug": "gym" }, { "id": "t-selfie", "name": "Selfie", "slug": "selfie" }]
    },
    {
        "id": "jennifers-body-style",
        "type": "prompt",
        "title": "Escena Estilo Jennifer’s Body en Sofá de Terciopelo - Femenino",
        "slug": "jennifers-body-style",
        "summary": "Escena estilo Jennifer's Body en sofá de terciopelo, rebelde y oscura.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Expresiva y traviesa, lengua afuera en pose divertida. Peinado suelto de fiesta. Baby tee corta y mini falda baja.
*   **E (Entorno):** Sala oscura con luces neón y velas. Ambientación oscura, mística y cinematográfica.
*   **A (Acción):** Sentada junto a otra chica en el sofá. Interacción divertida con el encendedor.
*   **I (Iluminación):** Luz de velas + neón, reflejos cálidos en rostros.
*   **S (Sensación):** Risa, energía rebelde, tono oscuro juvenil.
*   **E (Estilo):** Cine oscuro 50mm f/1.4 realista, neón rosa, amarillo cálido, alta nitidez nocturna.
*   **M (Composición):** Plano medio, altura de ojos, enfoque en rostros y llama.
*   **P (Post):** Color grading oscuro-neón vibrante, claridad alta, glow del fuego.
        `,
        "prompt_text": JSON.stringify({
            "title": "Escena Estilo Jennifer’s Body en Sofá de Terciopelo - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Expresiva y traviesa.",
                    "cabello": "Peinado suelto de fiesta.",
                    "indumentaria": "Baby tee corta y mini falda baja.",
                    "expresion": "Lengua afuera en pose divertida."
                },
                "E_Entorno": {
                    "fondo": "Sala oscura con luces neón y velas.",
                    "ambientacion": "Oscura, mística y cinematográfica."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada junto a otra chica en el sofá.",
                    "gestualidad": "Interacción divertida con el encendedor."
                },
                "I_Iluminacion": {
                    "tipo": "Luz de velas + neón.",
                    "caracteristicas": "Reflejos cálidos en rostros."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Risa, energía rebelde.",
                    "tono": "Oscuro juvenil."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Cine oscuro 50mm f/1.4 realista.",
                    "color": "Neón rosa, amarillo cálido.",
                    "textura": "Alta nitidez nocturna."
                },
                "M_Composicion_Camara": {
                    "plano": "Medio.",
                    "angulo": "Altura de ojos.",
                    "enfoque": "Rostros y llama."
                },
                "P_Postproduccion": {
                    "color_grading": "Oscuro-neón vibrante.",
                    "claridad": "Alta.",
                    "efectos": "Glow del fuego."
                }
            }
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/jennifers-body-style.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cinematic", "name": "Cinematic", "slug": "cinematic" }, { "id": "t-neon", "name": "Neon", "slug": "neon" }]
    },
    {
        "id": "neon-horror-drive-thru",
        "type": "prompt",
        "title": "Selfie en Auto Rosa con Estética Neon Horror - Femenino",
        "slug": "neon-horror-drive-thru",
        "summary": "Selfie casual en un drive-thru de terror con estética neón vibrante.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Risa espontánea, expresión alegre. Cabello suelto natural. Cropped hoodie y mini falda.
*   **E (Entorno):** Drive-thru de terror con neón multicolor. Michael Myers al fondo.
*   **A (Acción):** Selfie frontal inclinada, sosteniendo una papa frita.
*   **I (Iluminación):** Neón exterior filtrado, reflejos multicolores.
*   **S (Sensación):** Juego, humor, vibra Gen Z.
*   **E (Estilo):** Realismo iPhone nocturno, colores rosa, azul, púrpura.
*   **M (Composición):** Selfie close-up, ángulo ligeramente alto.
*   **P (Post):** Neón saturado, ruido ligero.
        `,
        "prompt_text": JSON.stringify({
            "title": "Selfie en Auto Rosa con Estética Neon Horror - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Risa espontánea, expresión alegre.",
                    "cabello": "Suelto, natural.",
                    "indumentaria": "Cropped hoodie y mini falda casual."
                },
                "E_Entorno": {
                    "fondo": "Drive-thru de terror con neón multicolor.",
                    "elementos": "Michael Myers sosteniendo malteada."
                },
                "A_Accion_Postura": {
                    "pose": "Selfie frontal inclinada.",
                    "gestualidad": "Sosteniendo una papa frita y diciendo 'cheese'."
                },
                "I_Iluminacion": {
                    "tipo": "Neón exterior filtrado al auto.",
                    "caracteristicas": "Reflejos multicolores."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Juego, humor, vibra Gen Z.",
                    "tono": "Casual con toque slasher cómico."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Realismo estilo iPhone nocturno.",
                    "color": "Rosa, azul, púrpura."
                },
                "M_Composicion_Camara": {
                    "plano": "Selfie close-up.",
                    "angulo": "Ligeramente alto.",
                    "encuadre": "Casual y espontáneo."
                },
                "P_Postproduccion": {
                    "color_grading": "Neón saturado.",
                    "claridad": "Media acorde a móvil.",
                    "ruido": "Ligero."
                }
            }
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/neon-horror-drive-thru.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cinematic", "name": "Cinematic", "slug": "cinematic" }, { "id": "t-neon", "name": "Neon", "slug": "neon" }, { "id": "t-horror", "name": "Horror", "slug": "horror" }]
    },
    {
        "id": "gritty-bathroom-freddy",
        "type": "prompt",
        "title": "Selfie Gritty en Baño de Gasolinera 90s con Freddy Krueger - Femenino",
        "slug": "gritty-bathroom-freddy",
        "summary": "Selfie gritty en baño de gasolinera estilo 90s con Freddy Krueger.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Expresión despreocupada haciendo burbuja de chicle. Top rojo halter, mini falda y medias de red.
*   **E (Entorno):** Baño sucio estilo 90s, azulejos viejos. Freddy Krueger en puerta del cubículo.
*   **A (Acción):** Frente al espejo, formando burbuja de chicle.
*   **I (Iluminación):** Fluorescente parpadeante, sombras duras y tonos verdosos.
*   **S (Sensación):** Tensión mezclada con humor irreverente, gritty horror 90s.
*   **E (Estilo):** Calidad baja y ruda, desaturado y sucio, ruido marcado.
*   **M (Composición):** Selfie en espejo, frontal.
*   **P (Post):** Tonos verdes fríos, claridad baja, ruido alto.
        `,
        "prompt_text": JSON.stringify({
            "title": "Selfie Gritty en Baño de Gasolinera 90s con Freddy Krueger - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Expresión despreocupada haciendo burbuja de chicle.",
                    "cabello": "Despeinado casual.",
                    "indumentaria": "Top rojo halter, mini falda y medias de red."
                },
                "E_Entorno": {
                    "fondo": "Baño sucio estilo 90s, azulejos viejos.",
                    "elementos": "Freddy Krueger en puerta del cubículo."
                },
                "A_Accion_Postura": {
                    "pose": "Frente al espejo.",
                    "gestualidad": "Formando burbuja de chicle."
                },
                "I_Iluminacion": {
                    "tipo": "Fluorescente parpadeante.",
                    "caracteristicas": "Sombras duras y tonos verdosos."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Tensión mezclada con humor irreverente.",
                    "tono": "Gritty horror 90s."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Calidad baja y ruda.",
                    "color": "Desaturado y sucio.",
                    "textura": "Ruido marcado."
                },
                "M_Composicion_Camara": {
                    "plano": "Selfie en espejo.",
                    "angulo": "Frontal.",
                    "encuadre": "Ajustado al centro."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos verdes fríos.",
                    "claridad": "Baja.",
                    "ruido": "Alto."
                }
            }
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/gritty-bathroom-freddy.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cinematic", "name": "Cinematic", "slug": "cinematic" }, { "id": "t-horror", "name": "Horror", "slug": "horror" }, { "id": "t-90s", "name": "90s", "slug": "90s" }]
    },
    {
        "id": "night-parking-jason",
        "type": "prompt",
        "title": "Selfie Nocturna en Estacionamiento con Jason Voorhees - Femenino",
        "slug": "night-parking-jason",
        "summary": "Selfie nocturna casual en estacionamiento con Jason Voorhees.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Expresión natural relajada. Cabello rubio liso largo. Hoodie negro corto, mini falda roja, calcetas altas.
*   **E (Entorno):** Estacionamiento con luces y trick-or-treaters. Jason sosteniendo calabaza pequeña.
*   **A (Acción):** Selfie elevada ligeramente, posición casual de noche.
*   **I (Iluminación):** Luz ambiental nocturna de estacionamiento, sombras suaves, colores urbanos.
*   **S (Sensación):** Casualidad nocturna, Halloween urbano realista.
*   **E (Estilo):** Estética iPhone nocturna, colores fríos con acentos cálidos.
*   **M (Composición):** Selfie medio, ángulo ligeramente alto, encuadre desenfadado.
*   **P (Post):** Color grading urban night, claridad media-baja, ruido moderado.
        `,
        "prompt_text": JSON.stringify({
            "title": "Selfie Nocturna en Estacionamiento con Jason Voorhees - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Expresión natural relajada.",
                    "cabello": "Rubio liso largo.",
                    "indumentaria": "Hoodie negro corto, mini falda roja, calcetas altas."
                },
                "E_Entorno": {
                    "fondo": "Estacionamiento con luces y trick-or-treaters.",
                    "elementos": "Jason sosteniendo calabaza pequeña."
                },
                "A_Accion_Postura": {
                    "pose": "Selfie elevada ligeramente.",
                    "gestualidad": "Posición casual de noche."
                },
                "I_Iluminacion": {
                    "tipo": "Luz ambiental nocturna de estacionamiento.",
                    "caracteristicas": "Sombras suaves, colores urbanos."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Casualidad nocturna.",
                    "tono": "Halloween urbano realista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Estética iPhone nocturna.",
                    "color": "Colores fríos con acentos cálidos."
                },
                "M_Composicion_Camara": {
                    "plano": "Selfie medio.",
                    "angulo": "Ligeramente alto.",
                    "encuadre": "Desenfadado."
                },
                "P_Postproduccion": {
                    "color_grading": "Urban night.",
                    "claridad": "Media-baja.",
                    "ruido": "Moderado."
                }
            }
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/night-parking-jason.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cinematic", "name": "Cinematic", "slug": "cinematic" }, { "id": "t-horror", "name": "Horror", "slug": "horror" }, { "id": "t-halloween", "name": "Halloween", "slug": "halloween" }]
    },
    {
        "id": "fashion-geometric-sweater",
        "type": "prompt",
        "title": "Fashion Editorial con Suéter Geométrico - Femenino",
        "slug": "fashion-geometric-sweater",
        "summary": "Editorial de moda con suéter geométrico y fondo naranja vibrante.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Rasgos femeninos definidos, expresión seria elegante. Melena larga o bob estilizado. Gafas redondas negro-dorado. Suéter geométrico con cuello naranja grueso.
*   **E (Entorno):** Fondo naranja sólido vibrante, ambientación moda editorial moderna.
*   **A (Acción):** Mirada hacia el lado con postura segura, cuello y hombros relajados.
*   **I (Iluminación):** Luz de estudio brillante, sombras suaves, piel muy definida.
*   **S (Sensación):** Confianza y estilo, moda futurista minimalista.
*   **E (Estilo):** High-fashion editorial, paleta vibrante naranja/azul/rojo, ropa con textura clara.
*   **M (Composición):** Retrato medio, ángulo altura de ojos.
*   **P (Post):** Saturación moderada y contrastes fuertes, claridad alta.
        `,
        "prompt_text": JSON.stringify({
            "title": "Fashion Editorial con Suéter Geométrico - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Rasgos femeninos definidos, expresión seria elegante.",
                    "cabello": "Melena larga o bob estilizado.",
                    "accesorios": "Gafas redondas negro-dorado.",
                    "indumentaria": "Suéter geométrico con cuello naranja grueso."
                },
                "E_Entorno": {
                    "fondo": "Naranja sólido vibrante.",
                    "ambientacion": "Moda editorial moderna."
                },
                "A_Accion_Postura": {
                    "pose": "Mirada hacia el lado con postura segura.",
                    "gestualidad": "Cuello y hombros relajados."
                },
                "I_Iluminacion": {
                    "tipo": "Luz de estudio brillante.",
                    "caracteristicas": "Sombras suaves, piel muy definida."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Confianza y estilo.",
                    "tono": "Moda futurista minimalista."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "High-fashion editorial.",
                    "color": "Paleta vibrante naranja/azul/rojo.",
                    "textura": "Ropa con textura clara."
                },
                "M_Composicion_Camara": {
                    "plano": "Retrato medio.",
                    "angulo": "Altura de ojos."
                },
                "P_Postproduccion": {
                    "color_grading": "Saturación moderada y contrastes fuertes.",
                    "claridad": "Alta."
                }
            }
        }, null, 2),
        "category": "Fashion",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/fashion-geometric-sweater.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-fashion", "name": "Fashion", "slug": "fashion" }, { "id": "t-editorial", "name": "Editorial", "slug": "editorial" }]
    },
    {
        "id": "fashion-christmas-sweater",
        "type": "prompt",
        "title": "Retrato Femenino con Suéter Navideño y Gafas Oscuras - Femenino",
        "slug": "fashion-christmas-sweater",
        "summary": "Editorial navideño de moda con suéter y gafas oscuras.",
        "body_markdown": `
# Framework REALISMO

*   **R (Render):** Expresión seria y elegante. Cabello rubio largo o castaño. Suéter navideño rojo/blanco/verde. Gafas oscuras redondas.
*   **E (Entorno):** Fondo rojo profundo con luces de navidad borrosas. Ambientación Studio Christmas editorial.
*   **A (Acción):** De pie mirando al lado, postura calmada.
*   **I (Iluminación):** Luz cálida suave, enfatiza textura del suéter.
*   **S (Sensación):** Elegancia festiva, editorial navideño serio.
*   **E (Estilo):** Alta moda navideña, rojos profundos y verdes suaves.
*   **M (Composición):** Medium shot, ángulo frontal leve.
*   **P (Post):** Color grading navideño cálido, claridad alta.
        `,
        "prompt_text": JSON.stringify({
            "title": "Retrato Femenino con Suéter Navideño y Gafas Oscuras - Femenino",
            "framework_REALISMO": {
                "R_Render_del_Avatar": {
                    "descripcion_facial": "Expresión seria y elegante.",
                    "cabello": "Rubio largo o castaño.",
                    "indumentaria": "Suéter navideño rojo/blanco/verde.",
                    "accesorios": "Gafas oscuras redondas."
                },
                "E_Entorno": {
                    "fondo": "Rojo profundo con luces de navidad borrosas.",
                    "ambientacion": "Studio Christmas editorial."
                },
                "A_Accion_Postura": {
                    "pose": "De pie mirando al lado.",
                    "gestualidad": "Postura calmada."
                },
                "I_Iluminacion": {
                    "tipo": "Luz cálida suave.",
                    "caracteristicas": "Enfatiza textura del suéter."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Elegancia festiva.",
                    "tono": "Editorial navideño serio."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Alta moda navideña.",
                    "color": "Rojos profundos y verdes suaves."
                },
                "M_Composicion_Camara": {
                    "plano": "Medium shot.",
                    "angulo": "Frontal leve."
                },
                "P_Postproduccion": {
                    "color_grading": "Navideño cálido.",
                    "claridad": "Alta."
                }
            }
        }, null, 2),
        "category": "Fashion",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/fashion-christmas-sweater.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-fashion", "name": "Fashion", "slug": "fashion" }, { "id": "t-holiday", "name": "Holiday", "slug": "holiday" }, { "id": "t-sunglasses", "name": "Sunglasses", "slug": "sunglasses" }]
    },
    {
        "id": "professional-studio-profile",
        "type": "prompt",
        "title": "Professional Studio Profile Photo — Business Casual Portrait",
        "slug": "professional-studio-profile",
        "summary": "Retrato profesional de estudio business casual.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Identidad y rasgos clave mantenidos. Sonrisa cálida, profesional. Piel natural. Cabello detallado.
*   **E (Entorno):** Fondo sólido neutro de estudio #141414.
*   **A (Acción):** Plano chest-up, espacio negativo superior. Postura abierta y accesible.
*   **I (Iluminación):** Studio soft light, envolvente y cálida. Catchlight sutil.
*   **S (Sensación):** Confianza, calidez profesional, cercanía.
*   **E (Estilo):** Retrato corporate high-end. Cardigan charcoal sobre blusa blanca.
*   **M (Composición):** Ángulo ligeramente alto. Lente 85mm f/1.8. Poca profundidad de campo.
*   **P (Post):** Detalle nítido. Color grading cinemático limpio.
        `,
        "prompt_text": JSON.stringify({
            "title": "Professional Studio Profile Photo — Business Casual Portrait",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Mantener exactamente la estructura facial, identidad y rasgos clave de la persona en la imagen de entrada.",
                    "expresion": "Sonrisa cálida, acogedora y profesional.",
                    "mirada": "Contacto visual directo a la cámara.",
                    "piel_y_detalle": "Textura de piel natural y realista, sin suavizado excesivo.",
                    "cabello": "Detalles visibles en hebras individuales, apariencia natural."
                },
                "E_Entorno": {
                    "fondo": "Fondo sólido neutro de estudio en color #141414.",
                    "escena": "Fotografía de estudio profesional, sin elementos distractores."
                },
                "A_Accion_Postura": {
                    "encuadre": "Plano desde el pecho hacia arriba (chest-up).",
                    "composicion": "Espacio negativo amplio sobre la cabeza, sin recortar el cabello.",
                    "postura": "Actitud abierta, accesible y confiable."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación de estudio suave, brillante y difusa.",
                    "caracteristicas": "Luz envolvente que ilumina el rostro con calidez.",
                    "detalle": "Catchlight sutil en los ojos.",
                    "sombras": "Sombras mínimas y suaves para un look airy."
                },
                "S_Sensacion_Atmosfera": {
                    "emocion": "Confianza, calidez profesional, cercanía.",
                    "tono": "Reliable, approachable, contemporary corporate portrait."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato profesional high-end estilo LinkedIn / corporate studio.",
                    "vestimenta": {
                        "outfit": "Cardigan business casual en charcoal sobre blusa blanca."
                    },
                    "calidad": "Alta resolución, acabado pulido y moderno."
                },
                "M_Composicion_Camara": {
                    "angulo": "Toma ligeramente desde un ángulo alto.",
                    "lente": "85mm f/1.8",
                    "profundidad_de_campo": "Muy poca profundidad, foco exquisito en los ojos.",
                    "bokeh": "Fondo suavemente desenfocado, bokeh elegante."
                },
                "P_Postproduccion": {
                    "nitidez": "Detalle nítido en tela, ojos, cabello y piel.",
                    "color_grading": "Cinemático limpio con calidez sutil y tonos balanceados.",
                    "acabado_final": "Imagen contemporánea, profesional y lista para perfil corporativo."
                }
            }
        }, null, 2),
        "category": "Professional",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/professional-studio-profile.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-professional", "name": "Professional", "slug": "professional" }, { "id": "t-portrait", "name": "Portrait", "slug": "portrait" }, { "id": "t-business", "name": "Business", "slug": "business" }]
    },
    {
        "id": "editorial-3x3-grid",
        "type": "prompt",
        "title": "Editorial 3x3 Grid — Intimate Minimalist Portrait Series",
        "slug": "editorial-3x3-grid",
        "summary": "Serie de retratos editoriales íntimos y minimalistas en formato grid 3x3.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Identidad 100% igual a referencia. Vestimenta minimalista (navy/marfil). Piel realista. Cabello natural expresivo.
*   **E (Entorno):** Estudio limpio minimalista beige suave. Sin distracciones.
*   **A (Acción):** Grid 3x3 con 9 tomas distintas (ojos, manos, perfiles, etc.). Ángulos tight headshots.
*   **I (Iluminación):** Gran luz difusa frontal-derecha. Reflector fill. Rim sutil. Sombras suaves.
*   **S (Sensación):** Íntimo, introspectivo, minimalista. Quietud emocional.
*   **E (Estilo):** Fotografía editorial minimalista high-end. Muted grade. Un panel B&W. Grano sutil.
*   **M (Composición):** Grid 3x3 alineado. Lentes 35mm/50mm/85mm. DOF delgada.
*   **P (Post):** Tonos apagados beige studio clean. Contraste suave. Grano cinemático.
        `,
        "prompt_text": JSON.stringify({
            "title": "Editorial 3x3 Grid — Intimate Minimalist Portrait Series",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "El personaje debe coincidir con la referencia al 100%, preservando rostro, estructura facial y rasgos clave.",
                    "vestimenta": {
                        "top": "Camisa ligera azul navy oscuro",
                        "bottom": "Pantalones marfil",
                        "detalle": "Descalzo para simplicidad cruda"
                    },
                    "detalle_piel": "Textura realista y natural, sin suavizado excesivo.",
                    "cabello": "Cabello con caída natural, usado como elemento expresivo en algunos encuadres."
                },
                "E_Entorno": {
                    "escena": "Estudio limpio minimalista en tono beige suave.",
                    "fondo": "Uniforme y sin objetos distractores.",
                    "props": "Tela o cortina usada sutilmente como marco editorial."
                },
                "A_Accion_Postura": {
                    "formato": "Grid editorial 3x3 con 9 tomas distintas.",
                    "paneles": {
                        "shot_1": "Extreme close-up de labios y pómulo, mano borrosa cubriendo parcialmente (85mm f/1.8).",
                        "shot_2": "Crop ajustado de ojos mirando al lente, reflejo de tira de luz visible (85mm f/2.0).",
                        "shot_3": "Retrato close en blanco y negro, mentón apoyado en el puño (50mm f/2.2).",
                        "shot_4": "Over-shoulder con cortina borrosa en primer plano enmarcando medio rostro (85mm f/2.0).",
                        "shot_5": "Muy frontal con manos superpuestas sobre el rostro, streak de luz cruzando ojos (50mm f/2.5).",
                        "shot_6": "Retrato angulado con cabello cayendo sobre los ojos, fondo soft-focus (85mm f/2.2).",
                        "shot_7": "Crop de manos tocando mandíbula, ojos fuera de encuadre (50mm f/3.2).",
                        "shot_8": "Half-body sentado de lado sobre cubo bajo, cabeza girada lejos, foreground borroso (35mm f/4.5).",
                        "shot_9": "Close-up intenso de perfil con gota tipo lágrima, slice de luz cinematográfica (85mm f/1.9)."
                    },
                    "variacion": "Ángulos mayormente tight headshots con ligeros high/low tilts manteniendo coherencia editorial."
                },
                "I_Iluminacion": {
                    "key_light": "Gran luz difusa principal desde frente-derecha.",
                    "fill": "Reflector plateado a la izquierda.",
                    "rim_light": "Rim sutil desde arriba para separación.",
                    "sombras": "Suaves, delicadas, con contraste tonal controlado."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Íntimo, introspectivo, minimalista.",
                    "tono": "Editorial character-led con delicadeza emocional y quietud."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía editorial minimalista de alto nivel.",
                    "acabado": "Muted grade profesional con contraste suave.",
                    "blanco_y_negro": "Un panel incluido como acento artístico.",
                    "textura": "Grano cinematográfico sutil."
                },
                "M_Composicion_Camara": {
                    "layout": "Grid 3x3 perfectamente alineado.",
                    "lentes": [
                        "35mm",
                        "50mm",
                        "85mm"
                    ],
                    "profundidad_de_campo": "DOF extremadamente delgada en close-ups clave.",
                    "captura": "RAW profesional, enfoque preciso en ojos y detalles faciales."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos apagados, beige studio clean, estética contemporánea.",
                    "contraste": "Suave y controlado.",
                    "grain": "Cinematic subtle grain añadido.",
                    "acabado_final": "Serie editorial coherente, emotiva y minimalista lista para revista."
                }
            }
        }, null, 2),
        "category": "Photography",
        "level": "advanced",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/editorial-3x3-grid.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-editorial", "name": "Editorial", "slug": "editorial" }, { "id": "t-grid", "name": "Grid", "slug": "grid" }, { "id": "t-portrait", "name": "Portrait", "slug": "portrait" }]
    },
    {
        "id": "early-2000s-paparazzi",
        "type": "prompt",
        "title": "Early 2000s Paparazzi Night Shot — Raw Flash Street Portrait",
        "slug": "early-2000s-paparazzi",
        "summary": "Retrato callejero nocturno estilo paparazzi de los 2000s con flash duro.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Identidad 100% fiel. Mirada fría, distante. Streetwear oversized neutro. Piel textura cruda.
*   **E (Entorno):** Calle urbana nocturna. Teléfono público. Fondo luces desenfocadas.
*   **A (Acción):** En teléfono público, girando hacia cámara. Mano cubriendo parcialmente. Defensivo.
*   **I (Iluminación):** Flash duro directo (paparazzi). Sombras duras.
*   **S (Sensación):** Raw, espontáneo, misterioso. Energía Y2K.
*   **E (Estilo):** Paparazzi 2000s. Lo-fi realista, grainy. Timestamp digital rojo.
*   **M (Composición):** Plano medio/close-up espontáneo. Ángulo snapshot inclinado.
*   **P (Post):** Tonos nocturnos, flash frío. Alto contraste. Grano digital.
        `,
        "prompt_text": JSON.stringify({
            "title": "Early 2000s Paparazzi Night Shot — Raw Flash Street Portrait",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Mantener el rostro 100% fiel a la imagen de referencia, sin alterar estructura facial ni rasgos clave.",
                    "expresion": "Mirada fría, distante, emocionalmente desconectada.",
                    "estilismo": {
                        "ropa": "Streetwear relajado: pantalones wide-leg y top oversized liso en tonos neutros.",
                        "accesorios": "Gafas negras simples."
                    },
                    "detalle_piel": "Textura realista y cruda, sin embellecimiento artificial."
                },
                "E_Entorno": {
                    "ubicacion": "Calle urbana nocturna.",
                    "elemento_clave": "Teléfono público, con el sujeto tocando el auricular.",
                    "fondo": "Luces de autos desenfocadas y ambiente urbano borroso."
                },
                "A_Accion_Postura": {
                    "accion": "El sujeto está en un teléfono público, girando hacia la cámara.",
                    "pose": "Una mano sobre el receptor del teléfono, cuerpo parcialmente rotado.",
                    "lenguaje_corporal": "Defensivo, distante, espontáneo tipo paparazzi."
                },
                "I_Iluminacion": {
                    "tipo": "Flash duro directo de cámara (paparazzi).",
                    "caracteristicas": "Iluminación agresiva, sombras duras, estética cruda nocturna.",
                    "efecto": "Alta intensidad en el rostro con caída rápida hacia el fondo."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Raw, espontáneo, misterioso, distante.",
                    "tono": "Energía paparazzi early 2000s, nocturna, urbana."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía paparazzi de principios de los 2000s.",
                    "calidad": "Lo-fi realista, ligeramente grainy, imperfecta.",
                    "detalle_temporal": "Incluye timestamp digital rojo clásico en la imagen."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio a close-up espontáneo.",
                    "angulo": "Captura frontal ligeramente inclinada como snapshot.",
                    "profundidad_de_campo": "Fondo desenfocado por movimiento y baja luz nocturna."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos nocturnos urbanos con flash frío/blanco.",
                    "contraste": "Alto por el flash.",
                    "textura": "Grano sutil tipo cámara digital antigua.",
                    "overlay": "Timestamp rojo digital estilo early 2000s.",
                    "acabado_final": "Auténtico paparazzi snapshot, crudo y nostálgico."
                }
            }
        }, null, 2),
        "category": "Photography",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/early-2000s-paparazzi.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-photography", "name": "Photography", "slug": "photography" }, { "id": "t-y2k", "name": "Y2K", "slug": "y2k" }, { "id": "t-paparazzi", "name": "Paparazzi", "slug": "paparazzi" }]
    },
    {
        "id": "gaming-cinema-scene",
        "type": "prompt",
        "title": "Escena de cine con personajes de videojuegos",
        "slug": "gaming-cinema-scene",
        "summary": "Escena cinematográfica hiperrealista en cine con personajes de videojuegos.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Identidad fiel. Expresión feliz/emocionada. Piel hiperrealista.
*   **E (Entorno):** Cine oscuro, luces bajas. Múltiples personajes de videojuegos (Mario, DK, Goku, Kratos).
*   **A (Acción):** Sentado/de pie reaccionando con alegría. Interacción natural con personajes.
*   **I (Iluminación):** Cinematográfica oscura. Luz de pantalla. Sombras suaves.
*   **S (Sensación):** Divertido, nostálgico, épico. Energía geek.
*   **E (Estilo):** Hiperrealista cinematográfico. Crossover gamer. Alta definición.
*   **M (Composición):** Plano medio. Eye-level. Fondo semidesenfocado.
*   **P (Post):** Dark cinematic, tonos cálidos, ligero glow.
        `,
        "prompt_text": JSON.stringify({
            "title": "Escena de cine con personajes de videojuegos",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "El hombre debe conservar exactamente el rostro y rasgos faciales de la foto proporcionada.",
                    "expresion": "Feliz, emocionado, disfrutando el momento.",
                    "detalle_piel": "Textura realista, estilo cinematográfico hiperrealista.",
                    "cabello_y_apariencia": "Mantener peinado y estructura original sin modificaciones."
                },
                "E_Entorno": {
                    "ubicacion": "Interior de un cine oscuro.",
                    "ambientacion": "Sala cinematográfica con luces bajas y atmósfera envolvente.",
                    "elementos_secundarios": "Presencia de múltiples personajes icónicos de videojuegos alrededor del sujeto."
                },
                "A_Accion_Postura": {
                    "accion": "El sujeto está sentado o de pie dentro del cine, reaccionando con alegría.",
                    "lenguaje_corporal": "Relajado y contento, como en una experiencia fanboy/fangame.",
                    "interaccion": "Los personajes (Mario, Donkey Kong, Goku, Kratos, etc.) llenan el espacio como parte de la escena."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación cinematográfica de cine oscuro.",
                    "caracteristicas": "Luz tenue proveniente de la pantalla o luces ambientales.",
                    "efecto": "Sombras suaves con reflejos en el rostro para dramatismo y calidez."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Divertido, nostálgico, emocionante.",
                    "tono": "Cinemático, fan-service épico, lleno de energía geek."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Shot hiperrealista cinematográfico.",
                    "detalle": "Alta definición en rostro y personajes secundarios.",
                    "composicion": "Escena rica en elementos visuales sin perder el foco en el sujeto principal.",
                    "universo": "Crossover visual de cultura gamer."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio del sujeto con entorno amplio visible.",
                    "angulo": "Eye-level estilo escena de película.",
                    "profundidad_de_campo": "Fondo parcialmente desenfocado pero personajes reconocibles."
                },
                "P_Postproduccion": {
                    "color_grading": "Cinemático oscuro con tonos cálidos y contrastes suaves.",
                    "efectos": "Ligero glow de pantalla, atmósfera envolvente.",
                    "acabado_final": "Escena épica y emocional lista como still de película."
                }
            }
        }, null, 2),
        "category": "Cinematic",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/gaming-cinema-scene.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-cinematic", "name": "Cinematic", "slug": "cinematic" }, { "id": "t-gaming", "name": "Gaming", "slug": "gaming" }, { "id": "t-fanart", "name": "FanArt", "slug": "fanart" }]
    },
    {
        "id": "mrbeast-halloween-thumbnail",
        "type": "prompt",
        "title": "Miniatura estilo MrBeast con tema Halloween y expresión de sorpresa",
        "slug": "mrbeast-halloween-thumbnail",
        "summary": "Miniatura de YouTube estilo MrBeast con temática de Halloween.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Identidad exacta. Sorpresa extrema estilo MrBeast. Rasgos exagerados limpios.
*   **E (Entorno):** Halloween. Calabazas brillantes, fantasmas, casa embrujada. Colores naranja/púrpura.
*   **A (Acción):** Rostro centrado mirando a cámara. Expresión viral abierta.
*   **I (Iluminación):** Iluminación intensa de thumbnail. Luz frontal brillante. Alto contraste.
*   **S (Sensación):** Divertido, spooky, energético. Sensacionalista.
*   **E (Estilo):** Miniatura ultra-realista 8K. Estética marketing viral.
*   **M (Composición):** Horizontal 16:9. Close-up centrado.
*   **P (Post):** Saturación alta, nitidez extrema. Glow ligero.
        `,
        "prompt_text": JSON.stringify({
            "title": "Miniatura estilo MrBeast con tema Halloween y expresión de sorpresa",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Mantener exactamente el mismo rostro y peinado masculino de la imagen de referencia.",
                    "expresion": "Sorpresa extrema, energía alta, mirada expresiva estilo YouTube thumbnail.",
                    "detalle_facial": "Rasgos exageradamente claros pero sin deformar identidad.",
                    "estilo": "Facialidad limpia, nítida, altamente reconocible."
                },
                "E_Entorno": {
                    "tema": "Halloween",
                    "elementos_fondo": [
                        "Calabazas brillantes",
                        "Fantasmas caricaturescos",
                        "Casa embrujada",
                        "Efectos spooky decorativos"
                    ],
                    "paleta": "Colores dominantes naranja y púrpura con alto contraste.",
                    "contexto": "Fondo dinámico pero subordinado al rostro."
                },
                "A_Accion_Postura": {
                    "pose": "Rostro centrado mirando directamente a cámara.",
                    "lenguaje_corporal": "Expresión abierta, dramática y exagerada típica de MrBeast.",
                    "actitud": "Entusiasta, impactante, viral."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación intensa de thumbnail estilo MrBeast.",
                    "caracteristicas": "Luz brillante frontal con sombras mínimas.",
                    "efecto": "Alto contraste para que el rostro resalte inmediatamente."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Divertido, spooky, energético.",
                    "tono": "Sensacionalista, entretenido, Halloween pop."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Miniatura YouTube ultra-realista estilo MrBeast.",
                    "calidad": "8K, hiperdefinición, colores saturados.",
                    "estetica": "Marketing viral, alto impacto visual.",
                    "detalles": "Elementos Halloween con look limpio y moderno."
                },
                "M_Composicion_Camara": {
                    "formato": "YouTube thumbnail horizontal 16:9.",
                    "encuadre": "Close-up del rostro ocupando gran parte del frame.",
                    "composicion": "Sujeto centrado con fondo temático dinámico."
                },
                "P_Postproduccion": {
                    "color_grading": "Saturación alta y contraste fuerte estilo thumbnail viral.",
                    "nitidez": "Extrema nitidez en ojos y expresión.",
                    "efectos": "Glow ligero, elementos Halloween resaltados.",
                    "acabado_final": "Thumbnail moderno, llamativo, listo para viralidad."
                }
            }
        }, null, 2),
        "category": "Marketing",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/mrbeast-halloween-thumbnail.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-marketing", "name": "Marketing", "slug": "marketing" }, { "id": "t-youtube", "name": "YouTube", "slug": "youtube" }, { "id": "t-halloween", "name": "Halloween", "slug": "halloween" }]
    },
    {
        "id": "nano-12",
        "type": "prompt",
        "title": "Romantic Collectible Box — Forever Together Chibi Keepsake",
        "slug": "nano-banana-case-12",
        "summary": "Figura coleccionable 3D estilo chibi de pareja en caja romántica.",
        "body_markdown": `
# Framework REALISMO (Object)

*   **R (Render):** Figura chibi 3D. Pareja romántica. Ojos expresivos. Ramo flores blancas.
*   **E (Entorno):** Caja joyero romántica. Ventana skyline pueblo chino. Nubes, pétalos.
*   **A (Acción):** Caja abierta. Pareja mirándose dulcemente. Energía enamorada.
*   **I (Iluminación):** Ambiental cálida suave. Glow delicado.
*   **S (Sensación):** Romántico, cálido, nostálgico, adorable. Keepsake de lujo.
*   **E (Estilo):** Collectible chibi 3D premium. Estética pastel. Detalles dorados.
*   **M (Composición):** Vertical 9:16. Plano medio producto. Caja foco central.
*   **P (Post):** Tonos cálidos pastel. Contraste bajo-medio. Nitidez decorativa.
        `,
        "prompt_text": JSON.stringify({
            "title": "Romantic Collectible Box — Forever Together Chibi Keepsake",
            "framework_REALISMO_Object": {
                "R_Render_del_Objeto": {
                    "descripcion_principal": "Figura coleccionable 3D estilo chibi basada en los sujetos de la foto, presentada dentro de una caja romántica tipo joyero portátil.",
                    "figuras": {
                        "estilo": "Chibi 3D adorable con ojos grandes y expresivos",
                        "identidad": "Mantener rasgos reconocibles de la pareja original",
                        "personajes": [
                            {
                                "rol": "Female subject",
                                "detalle": "Sostiene un pequeño ramo de flores blancas"
                            },
                            {
                                "rol": "Male partner",
                                "detalle": "A su lado, mirando con ternura"
                            }
                        ],
                        "expresion": "Sonrisas cálidas, mirada afectuosa, energía romántica"
                    },
                    "caja_presentacion": {
                        "tipo": "Box coleccionable estilo estuche de joyería",
                        "color": "Crema pastel con acentos dorados suaves",
                        "grabado_tapa": "Texto: 'FOREVER TOGETHER' con motivos de estrellas y corazones"
                    }
                },
                "E_Entorno": {
                    "interior_box_scene": {
                        "fondo": "Ventana redonda mostrando un skyline soleado de un pueblo tradicional chino",
                        "elementos": [
                            "Nubes flotando suavemente",
                            "Pétalos suspendidos en el aire"
                        ]
                    },
                    "ambientacion": "Mini escena romántica cálida dentro de la caja",
                    "color_scheme": "Paleta armoniosa, elegante y pastel"
                },
                "A_Accion_Presentacion": {
                    "presentacion": "Caja abierta revelando una escena romántica en miniatura",
                    "pose": "Los dos personajes chibi se miran dulcemente",
                    "interaccion": "Energía de pareja enamorada, momento de recuerdo"
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación ambiental cálida y suave",
                    "caracteristicas": "Luz difusa romántica dentro del estuche",
                    "efecto": "Glow delicado que refuerza el tono de lujo y ensueño"
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Romántico, cálido, nostálgico, adorable",
                    "tono": "Mini keepsake de lujo, sueño poético y afectuoso"
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Collectible chibi 3D premium con estética romántica pastel",
                    "materiales": {
                        "figuras": "Acabado suave tipo figura coleccionable",
                        "caja": "Textura elegante con detalles dorados delicados"
                    },
                    "detalles": "Alta definición en ojos brillantes, flores, grabados y decoraciones internas"
                },
                "M_Composicion_Camara": {
                    "formato": "Vertical 9:16",
                    "plano": "Plano medio de producto con caja abierta y escena interior visible",
                    "encuadre": "Caja como foco central, personajes claramente destacados"
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos pastel con acabado premium",
                    "contraste": "Bajo-medio para suavidad romántica",
                    "acabado_final": "Miniatura de lujo soñadora lista para merchandising o regalo digital",
                    "nitidez": "Alta definición en caja, personajes y detalles decorativos"
                }
            }
        }, null, 2),
        "category": "3D Design",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/romantic-collectible-box.png",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [{ "id": "t-imported", "name": "Imported", "slug": "imported" }, { "id": "t-3d", "name": "3D", "slug": "3d" }, { "id": "t-chibi", "name": "Chibi", "slug": "chibi" }, { "id": "t-romance", "name": "Romance", "slug": "romance" }]
    },
    {
        "id": "nano-flash-2000s",
        "type": "prompt",
        "title": "Early 2000s Flash Selfie — Cozy Sweater Floor Portrait",
        "slug": "early-2000s-flash-selfie",
        "summary": "Selfie cozy Y2K con flash duro, sweater tejido y ambiente hogareño.",
        "body_markdown": `
# Framework REALISMO (Human)

*   **R (Render):** Mujer joven, rubia, sweater chunky off-shoulder. Piel realista con flash.
*   **E (Entorno):** Sala cozy de noche, chimenea encendida, alfombra faux fur.
*   **A (Postura):** Selfie high-angle desde el piso. Piernas recogidas. Cámara digital visible.
*   **I (Iluminación):** Flash duro frontal (2000s style) + calidez de fuego de fondo.
*   **S (Sensación):** Íntimo, nostálgico, relajado, auténtico.
*   **E (Estilo):** Snapshot digital Y2K, influencers tempranos.
*   **M (Composición):** Vertical 4:5, encuadre cerrado high-angle.
*   **P (Post):** Contraste medio-alto, look digital vintage, glow cálido + flash frío.
        `,
        "prompt_text": JSON.stringify({
            "title": "Early 2000s Flash Selfie — Cozy Sweater Floor Portrait",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Preservar exactamente el rostro original (preserve_original = true).",
                    "sujeto": "Mujer joven (early–mid 20s) tomando una selfie desde un ángulo alto.",
                    "expresion": "Mirada suave y ligeramente alluring, cabeza inclinada sutilmente hacia la derecha.",
                    "cabello": {
                        "color": "Rubio",
                        "estilo": "Largo, voluminoso, ondas sueltas, raya lateral"
                    },
                    "maquillaje": {
                        "cejas": "Definidas",
                        "ojos": "Winged eyeliner",
                        "labios": "Gloss nude natural",
                        "piel": "Bronceado suave con textura realista"
                    },
                    "vestimenta": {
                        "outfit": "Vestido tipo sweater chunky cable-knit color crema",
                        "detalles": "Off-shoulder exponiendo hombros y clavícula, mangas oversized, tejido grueso visible"
                    },
                    "calidad": "Ultra-realistic 8K portrait rendering con detalle extremo en piel y textiles."
                },
                "E_Entorno": {
                    "escena": "Sala acogedora de noche, estilo lifestyle influencer.",
                    "elementos_visibles": [
                        "Chimenea con llamas naranjas intensas a la izquierda",
                        "Repisa blanca (mantelpiece)",
                        "Ventana oscura o puerta de vidrio",
                        "Sillón beige al fondo",
                        "Piso de madera oscura",
                        "Alfombra blanca tipo faux fur"
                    ],
                    "atmósfera": "Invierno íntimo, relajado, cozy evening vibe."
                },
                "A_Accion_Postura": {
                    "accion": "Selfie casual sentada en el piso.",
                    "pose": "Piernas recogidas hacia un lado, cuerpo ligeramente encorvado dentro del sweater.",
                    "dispositivo": "Cámara compacta digital o smartphone sostenido a brazo extendido con reflejo de flash visible.",
                    "lenguaje_corporal": "Íntimo, natural, espontáneo."
                },
                "I_Iluminacion": {
                    "tipo": "Estética digital early 2000s con flash duro.",
                    "fuentes": [
                        "Flash directo de cámara (harsh shadows)",
                        "Luz ambiental cálida proveniente del fuego"
                    ],
                    "efecto": "Contraste fuerte entre piel iluminada por flash y fondo cálido tenue."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cozy, íntimo, relajado, ligeramente seductor pero natural.",
                    "tono": "Lifestyle nostálgico con vibra Y2K digital snapshot."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Selfie hiperrealista tipo cámara digital 2000s.",
                    "textura": "On-camera flash, sombras duras, piel real, knit sweater detallado.",
                    "acabado": "Influencer realism con sensación auténtica, no editorial pulido.",
                    "calidad": "Ultra-realistic 8K con grano sutil de cámara antigua."
                },
                "M_Composicion_Camara": {
                    "angulo": "High-angle looking downward.",
                    "shot_type": "Close medium shot desde arriba, framing ligeramente off-center.",
                    "aspect_ratio": "Vertical 4:5",
                    "enfoque": "Nitidez en rostro, ojos y textura del sweater, fondo más suave."
                },
                "P_Postproduccion": {
                    "color_grading": "Mezcla de flash frío con glow cálido de chimenea.",
                    "contraste": "Medio-alto por estética snapshot digital.",
                    "detalles": "Preservar textura real de piel, flash reflection y sombras auténticas.",
                    "acabado_final": "Ultra-realistic 8K cozy Y2K harsh-flash selfie con vibra íntima."
                }
            }
        }, null, 2),
        "category": "Photography",
        "level": "intermediate",
        "is_published": true,
        "is_featured": false,
        "featured_image_url": "/images/prompts/early-2000s-flash-selfie.jpg",
        "paywall_level": "free_preview",
        "created_at": new Date().toISOString(),
        "updated_at": new Date().toISOString(),
        "tags": [
            { "id": "t-nano", "name": "Nano Banana", "slug": "nano-banana" },
            { "id": "t-y2k", "name": "Y2K", "slug": "y2k" },
            { "id": "t-flash", "name": "Flash Photography", "slug": "flash-photography" }
        ]
    },
    {
        id: "lifestyle-7",
        type: "prompt",
        title: "Cat-Ears Mirror Selfie — Pink Brocade Outfit + Playful Tongue Expression",
        slug: "cat-ears-mirror-selfie",
        summary: "Ultra-realistic 8K photorealistic mirror selfie con outfit rosa y cat ears.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Joven mujer en mirror selfie con estética cute-fashion.
- **Cabello:**
  - Color: Blonde
  - Estilo: Long wavy hair natural
- **Accesorio cabeza:** White fluffy cat ears headband
- **Outfit:**
  - Top: Pink brocade corset-style garment con lacing frontal y trim decorativo
  - Bottom: Pink gingham mini skirt con ruffles y lace blanca
  - Socks: White thigh-high socks con pink stripes
  - Choker: Pink collar choker con small silver bell
  - Jewelry: Stud earrings, Delicate gold bracelet
- **Expresión:** Playful, tongue slightly sticking out, gaze up-left.
- **Detalle piel:** Textura realista natural con skin detail definido.
- **Calidad:** Ultra-realistic 8K photorealistic mirror selfie rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Modern apartment interior flooded with daylight.
- **Background elements:**
  - Floor-to-ceiling windows with cityscape view
  - Grey wood plank flooring
  - Grey tiled wall section
  - Large brown teddy bear
  - White upholstered armchair
  - Wooden side table
- **Foreground detail:** Hanging green artificial ivy framing the scene.
- **Atmósfera:** Bright, playful, cozy lifestyle setting.

## A: Acción / Postura
- **Pose:** Standing mirror selfie holding a white iPhone in right hand.
- **Lenguaje corporal:** Cute, spontaneous, playful fashion pose.
- **Detalle:**
  - Head: Slight tilt with playful tongue expression
  - Gaze: Directed upward and to the left

## I: Iluminación
- **Tipo:** Bright natural daylight from large windows.
- **Características:**
  - Realistic daylight spread across skin and outfit
  - Soft cinematic shadows on interior surfaces
  - Organic blending with apartment lighting
- **Efecto:** Clean modern daylight selfie realism.

## S: Sensación / Atmósfera
- **Mood:** Playful, cute, bright, youthful.
- **Tono:** Mirror selfie lifestyle con cosplay-inspired fashion charm.

## E: Estilo Visual
- **Estilo general:** Ultra-photorealistic cinematic mirror selfie aesthetic.
- **Detalles:**
  - High-detail fabrics: brocade + gingham + lace trim
  - Natural daylight realism
  - Interior props enhancing cozy atmosphere
  - Cute overlay typography for social vibe
- **Acabado:** Photorealistic editorial lifestyle with playful character.
- **Calidad:** Ultra-realistic 8K high-detail mirror selfie rendering.

## M: Composición / Cámara
- **Plano:** Full-body to three-quarter mirror selfie framing.
- **Ángulo:** Mirror perspective natural handheld phone pose.
- **Encuadre:** Subject dominant with apartment props balanced around.
- **Enfoque:** Sharp focus on face, outfit textures, and phone; background softly clear but not distracting.
- **Aspect Ratio:** Vertical social media framing (9:16 implied).

## P: Postproducción
- **Color grading:** Soft warm-pink fashion palette with clean daylight tones.
- **Contraste:** Moderate-natural, avoiding overprocessing.
- **Nitidez:** Alta definición en rostro, textiles, lace trim y props.
- **Acabado final:** Ultra-realistic 8K cute cat-ears mirror selfie portrait con ambiente bright lifestyle.
`,
        prompt_text: JSON.stringify({
            "title": "Cat-Ears Mirror Selfie — Pink Brocade Outfit + Playful Tongue Expression",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel y expresión exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Joven mujer en mirror selfie con estética cute-fashion.",
                    "cabello": {
                        "color": "Blonde",
                        "estilo": "Long wavy hair natural"
                    },
                    "accesorio_cabeza": "White fluffy cat ears headband",
                    "outfit": {
                        "top": "Pink brocade corset-style garment con lacing frontal y trim decorativo",
                        "bottom": "Pink gingham mini skirt con ruffles y lace blanca",
                        "socks": "White thigh-high socks con pink stripes",
                        "choker": "Pink collar choker con small silver bell",
                        "jewelry": [
                            "Stud earrings",
                            "Delicate gold bracelet"
                        ]
                    },
                    "expresion": "Playful, tongue slightly sticking out, gaze up-left.",
                    "detalle_piel": "Textura realista natural con skin detail definido.",
                    "calidad": "Ultra-realistic 8K photorealistic mirror selfie rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "ubicacion": "Modern apartment interior flooded with daylight.",
                    "background_elements": [
                        "Floor-to-ceiling windows with cityscape view",
                        "Grey wood plank flooring",
                        "Grey tiled wall section",
                        "Large brown teddy bear",
                        "White upholstered armchair",
                        "Wooden side table"
                    ],
                    "foreground_detail": "Hanging green artificial ivy framing the scene",
                    "atmósfera": "Bright, playful, cozy lifestyle setting."
                },
                "A_Accion_Postura": {
                    "pose": "Standing mirror selfie holding a white iPhone in right hand.",
                    "lenguaje_corporal": "Cute, spontaneous, playful fashion pose.",
                    "detalle": {
                        "head": "Slight tilt with playful tongue expression",
                        "gaze": "Directed upward and to the left"
                    }
                },
                "I_Iluminacion": {
                    "tipo": "Bright natural daylight from large windows.",
                    "caracteristicas": [
                        "Realistic daylight spread across skin and outfit",
                        "Soft cinematic shadows on interior surfaces",
                        "Organic blending with apartment lighting"
                    ],
                    "efecto": "Clean modern daylight selfie realism."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Playful, cute, bright, youthful.",
                    "tono": "Mirror selfie lifestyle con cosplay-inspired fashion charm."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Ultra-photorealistic cinematic mirror selfie aesthetic.",
                    "detalles": [
                        "High-detail fabrics: brocade + gingham + lace trim",
                        "Natural daylight realism",
                        "Interior props enhancing cozy atmosphere",
                        "Cute overlay typography for social vibe"
                    ],
                    "acabado": "Photorealistic editorial lifestyle with playful character.",
                    "calidad": "Ultra-realistic 8K high-detail mirror selfie rendering."
                },
                "M_Composicion_Camara": {
                    "plano": "Full-body to three-quarter mirror selfie framing.",
                    "angulo": "Mirror perspective natural handheld phone pose.",
                    "encuadre": "Subject dominant with apartment props balanced around.",
                    "enfoque": "Sharp focus on face, outfit textures, and phone; background softly clear but not distracting.",
                    "aspect_ratio": "Vertical social media framing (9:16 implied)."
                },
                "P_Postproduccion": {
                    "color_grading": "Soft warm-pink fashion palette with clean daylight tones.",
                    "contraste": "Moderate-natural, avoiding overprocessing.",
                    "nitidez": "Alta definición en rostro, textiles, lace trim y props.",
                    "acabado_final": "Ultra-realistic 8K cute cat-ears mirror selfie portrait con ambiente bright lifestyle."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        featured_image_url: "/images/prompts/cat-ears-mirror-selfie.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-selfie", name: "Selfie", slug: "selfie" },
            { id: "t-cosplay", name: "Cosplay", slug: "cosplay" },
            { id: "t-cute", name: "Cute", slug: "cute" }
        ]
    },
    {
        id: "lifestyle-8",
        type: "prompt",
        title: "Gym Locker Room Mirror Selfie — Athletic Sportswear Editorial Realism",
        slug: "gym-locker-room-selfie",
        summary: "Ultra-realistic 8K gym lifestyle mirror selfie con sportswear gris y aesthetic fitness.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, proporciones corporales y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Mujer atlética joven en selfie de espejo estilo gym lifestyle.
- **Cabello:**
  - Color: Blonde con raíces ligeramente más oscuras
  - Estilo: Long straight hair con wispy curtain bangs
- **Detalle facial:** Preservar textura natural de piel y expresión original.
- **Tattoos:** Mantener tatuaje visible en antebrazo izquierdo exactamente igual.
- **Outfit:**
  - Top: Light heather grey ribbed sports bra con spaghetti straps y plunging neckline
  - Bottom: High-waisted tight leggings en light grey snakeskin / animal print
- **Accesorios:**
  - Nails: Burgundy nail polish
  - Rings: Multiple silver rings
  - Wristbands: Black and green wristbands
- **Calidad:** Ultra-realistic 8K photorealistic gym mirror selfie rendering con detalle extremo.

## E: Entorno
- **Ubicación:** Gym locker room / changing area interior.
- **Background elements:**
  - Metal coat rack con black puffer jacket
  - Gym bag con texto invertido 'FITNESS'
  - White textured plaster walls
  - Dark bench
  - Beige tiled flooring
- **Atmósfera:** Realista, cotidiana, lifestyle fitness aesthetic.

## A: Acción / Postura
- **Pose:** Standing mirror selfie con hip popped creando una silueta en S-curve.
- **Mano derecha:**
  - Acción: Sosteniendo white iPhone
  - Detalle: MagSafe ring + hanging grey lanyard
- **Mano izquierda:** Resting gently near midriff mostrando uñas, rings y wristbands.
- **Lenguaje corporal:** Athletic, confident, natural gym candid vibe.

## I: Iluminación
- **Tipo:** Soft indoor ambient lighting con diffused overhead quality.
- **Características:**
  - Sombras suaves naturales
  - Highlights orgánicos en cabello rubio
  - Blend realista con el ambiente del locker room
- **Efecto:** Cinematic gym realism sin harsh shadows.

## S: Sensación / Atmósfera
- **Mood:** Confident, sporty, candid lifestyle.
- **Tono:** Fitness editorial mirror selfie con autenticidad moderna.

## E: Estilo Visual
- **Estilo general:** Ultra-photorealistic cinematic gym lifestyle portrait.
- **Detalles:**
  - Textura ribbed sportswear definida
  - Animal-print leggings realistic fabric detail
  - Skin texture natural con enfoque editorial
  - Locker room props para realismo contextual
- **Acabado:** Modern athletic influencer-style realism con calidad premium.
- **Calidad:** Ultra-realistic 8K high-detail selfie aesthetic.

## M: Composición / Cámara
- **Plano:** Three-quarter to full-body mirror selfie framing.
- **Ángulo:** Natural mirror perspective con iPhone visible.
- **Encuadre:** Sujeto dominante centrado con background gym contextual balanceado.
- **Enfoque:** Sharp focus en rostro y outfit; background ligeramente softer pero legible.
- **Aspect Ratio:** Vertical social framing (9:16 implied).

## P: Postproducción
- **Color grading:** Neutral cool gym tones con acabado realista moderno.
- **Contraste:** Moderado-natural para autenticidad fitness.
- **Nitidez:** Alta definición en piel, cabello, leggings texture y accesorios.
- **Acabado final:** Ultra-realistic 8K gym locker mirror selfie con mood sporty editorial y fidelidad absoluta.
`,
        prompt_text: JSON.stringify({
            "title": "Gym Locker Room Mirror Selfie — Athletic Sportswear Editorial Realism",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Mantener estructura facial, peinado, tono de piel, proporciones corporales y expresión exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Mujer atlética joven en selfie de espejo estilo gym lifestyle.",
                    "cabello": {
                        "color": "Blonde con raíces ligeramente más oscuras",
                        "estilo": "Long straight hair con wispy curtain bangs"
                    },
                    "detalle_facial": "Preservar textura natural de piel y expresión original.",
                    "tattoos": "Mantener tatuaje visible en antebrazo izquierdo exactamente igual.",
                    "outfit": {
                        "top": "Light heather grey ribbed sports bra con spaghetti straps y plunging neckline",
                        "bottom": "High-waisted tight leggings en light grey snakeskin / animal print"
                    },
                    "accesorios": {
                        "nails": "Burgundy nail polish",
                        "rings": "Multiple silver rings",
                        "wristbands": "Black and green wristbands"
                    },
                    "calidad": "Ultra-realistic 8K photorealistic gym mirror selfie rendering con detalle extremo."
                },
                "E_Entorno": {
                    "ubicacion": "Gym locker room / changing area interior.",
                    "background_elements": [
                        "Metal coat rack con black puffer jacket",
                        "Gym bag con texto invertido 'FITNESS'",
                        "White textured plaster walls",
                        "Dark bench",
                        "Beige tiled flooring"
                    ],
                    "atmósfera": "Realista, cotidiana, lifestyle fitness aesthetic."
                },
                "A_Accion_Postura": {
                    "pose": "Standing mirror selfie con hip popped creando una silueta en S-curve.",
                    "mano_derecha": {
                        "accion": "Sosteniendo white iPhone",
                        "detalle": "MagSafe ring + hanging grey lanyard"
                    },
                    "mano_izquierda": "Resting gently near midriff mostrando uñas, rings y wristbands.",
                    "lenguaje_corporal": "Athletic, confident, natural gym candid vibe."
                },
                "I_Iluminacion": {
                    "tipo": "Soft indoor ambient lighting con diffused overhead quality.",
                    "caracteristicas": [
                        "Sombras suaves naturales",
                        "Highlights orgánicos en cabello rubio",
                        "Blend realista con el ambiente del locker room"
                    ],
                    "efecto": "Cinematic gym realism sin harsh shadows."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Confident, sporty, candid lifestyle.",
                    "tono": "Fitness editorial mirror selfie con autenticidad moderna."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Ultra-photorealistic cinematic gym lifestyle portrait.",
                    "detalles": [
                        "Textura ribbed sportswear definida",
                        "Animal-print leggings realistic fabric detail",
                        "Skin texture natural con enfoque editorial",
                        "Locker room props para realismo contextual"
                    ],
                    "acabado": "Modern athletic influencer-style realism con calidad premium.",
                    "calidad": "Ultra-realistic 8K high-detail selfie aesthetic."
                },
                "M_Composicion_Camara": {
                    "plano": "Three-quarter to full-body mirror selfie framing.",
                    "angulo": "Natural mirror perspective con iPhone visible.",
                    "encuadre": "Sujeto dominante centrado con background gym contextual balanceado.",
                    "enfoque": "Sharp focus en rostro y outfit; background ligeramente softer pero legible.",
                    "aspect_ratio": "Vertical social framing (9:16 implied)."
                },
                "P_Postproduccion": {
                    "color_grading": "Neutral cool gym tones con acabado realista moderno.",
                    "contraste": "Moderado-natural para autenticidad fitness.",
                    "nitidez": "Alta definición en piel, cabello, leggings texture y accesorios.",
                    "acabado_final": "Ultra-realistic 8K gym locker mirror selfie con mood sporty editorial y fidelidad absoluta."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        featured_image_url: "/images/prompts/gym-locker-room-selfie.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-selfie", name: "Selfie", slug: "selfie" },
            { id: "t-fitness", name: "Fitness", slug: "fitness" },
            { id: "t-gym", name: "Gym", slug: "gym" }
        ]
    },
    {
        id: "editorial-9",
        type: "prompt",
        title: "6-Frame Gen-Z VHS Collage — Pink Sunglasses + Camcorder REC Overlay",
        slug: "gen-z-vhs-collage",
        summary: "Ultra-realistic 8K Gen-Z camcorder collage portrait con estética editorial VHS futurista.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar rasgos faciales, identidad y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato editorial futurista dreamy con estética Gen-Z.
- **Accesorios:**
  - Sunglasses: Pink round-lens sunglasses
  - Earrings: Pearl earrings
- **Detalle piel:** Textura realista natural en rostro, sin smoothing artificial.
- **Calidad:** Ultra-realistic 8K fashion portrait rendering con fidelidad absoluta.

## E: Entorno
- **Fondo:** Neutral light gray studio background limpio.
- **Escena:** Estudio minimalista sin props físicos adicionales.
- **Atmósfera:** Dreamy, ethereal, futuristic Gen-Z vibe.

## A: Acción / Postura
- **Estructura:** Collage cinematográfico de seis retratos distintos.
- **Variaciones:**
  - Shots: Close-up portraits, Medium shots
  - Expresión: Fashion editorial calm, slightly ethereal
  - Movimiento: Slight motion blur en algunos frames para efecto dreamy
- **Lenguaje corporal:** Editorial moderno, suave y futurista.

## I: Iluminación
- **Tipo:** Clean studio lighting con sombras suaves.
- **Características:**
  - Iluminación uniforme profesional
  - Soft shadows controladas
  - Glow sutil para atmósfera etérea
- **Efecto:** Look fashion editorial limpio con acabado cinematográfico.

## S: Sensación / Atmósfera
- **Mood:** Gen-Z futuristic, dreamy, ethereal, retro-tech.
- **Tono:** Fashion collage con nostalgia VHS moderna.

## E: Estilo Visual
- **Estilo general:** Photorealistic editorial collage con textura VHS retro.
- **Detalles:**
  - Retro VHS grain and texture overlay
  - Digital camcorder interface en cada frame
  - Slight motion blur para dreamy softness
- **Overlay UI:**
  - Elementos: Battery icon, Red 'REC' text, Unique white timer values per frame
  - Función: Simular grabación camcorder estética Y2K futurista
- **Calidad:** Ultra-realistic 8K con acabado fashion + VHS dream.

## M: Composición / Cámara
- **Layout:** Six distinct portrait frames arranged as cinematic collage grid.
- **Encuadre:** Mix de close-up y medium shots para variedad editorial.
- **Enfoque:** Sharp focus en identidad facial en cada frame; blur solo como efecto estilístico leve.
- **Profundidad de campo:** Shallow DOF suave para look premium.

## P: Postproducción
- **Color grading:** Neutral studio tones con vibe retro-dream futurista.
- **Textura:** Subtle VHS grain + camcorder UI overlays.
- **Contraste:** Soft-moderate para mantener delicadeza etérea.
- **Nitidez:** Alta definición en rostro, gafas, perlas y detalles de recording UI.
- **Acabado final:** Ultra-realistic 8K Gen-Z camcorder collage portrait con estética editorial VHS futurista.
`,
        prompt_text: JSON.stringify({
            "title": "6-Frame Gen-Z VHS Collage — Pink Sunglasses + Camcorder REC Overlay",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Preservar rasgos faciales, identidad y expresión exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Retrato editorial futurista dreamy con estética Gen-Z.",
                    "accesorios": {
                        "sunglasses": "Pink round-lens sunglasses",
                        "earrings": "Pearl earrings"
                    },
                    "detalle_piel": "Textura realista natural en rostro, sin smoothing artificial.",
                    "calidad": "Ultra-realistic 8K fashion portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "fondo": "Neutral light gray studio background limpio.",
                    "escena": "Estudio minimalista sin props físicos adicionales.",
                    "atmósfera": "Dreamy, ethereal, futuristic Gen-Z vibe."
                },
                "A_Accion_Postura": {
                    "estructura": "Collage cinematográfico de seis retratos distintos.",
                    "variaciones": {
                        "shots": [
                            "Close-up portraits",
                            "Medium shots"
                        ],
                        "expresion": "Fashion editorial calm, slightly ethereal",
                        "movimiento": "Slight motion blur en algunos frames para efecto dreamy"
                    },
                    "lenguaje_corporal": "Editorial moderno, suave y futurista."
                },
                "I_Iluminacion": {
                    "tipo": "Clean studio lighting con sombras suaves.",
                    "caracteristicas": [
                        "Iluminación uniforme profesional",
                        "Soft shadows controladas",
                        "Glow sutil para atmósfera etérea"
                    ],
                    "efecto": "Look fashion editorial limpio con acabado cinematográfico."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Gen-Z futuristic, dreamy, ethereal, retro-tech.",
                    "tono": "Fashion collage con nostalgia VHS moderna."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Photorealistic editorial collage con textura VHS retro.",
                    "detalles": [
                        "Retro VHS grain and texture overlay",
                        "Digital camcorder interface en cada frame",
                        "Slight motion blur para dreamy softness"
                    ],
                    "overlay_UI": {
                        "elementos": [
                            "Battery icon",
                            "Red 'REC' text",
                            "Unique white timer values per frame"
                        ],
                        "funcion": "Simular grabación camcorder estética Y2K futurista"
                    },
                    "calidad": "Ultra-realistic 8K con acabado fashion + VHS dream."
                },
                "M_Composicion_Camara": {
                    "layout": "Six distinct portrait frames arranged as cinematic collage grid.",
                    "encuadre": "Mix de close-up y medium shots para variedad editorial.",
                    "enfoque": "Sharp focus en identidad facial en cada frame; blur solo como efecto estilístico leve.",
                    "profundidad_de_campo": "Shallow DOF suave para look premium."
                },
                "P_Postproduccion": {
                    "color_grading": "Neutral studio tones con vibe retro-dream futurista.",
                    "textura": "Subtle VHS grain + camcorder UI overlays.",
                    "contraste": "Soft-moderate para mantener delicadeza etérea.",
                    "nitidez": "Alta definición en rostro, gafas, perlas y detalles de recording UI.",
                    "acabado_final": "Ultra-realistic 8K Gen-Z camcorder collage portrait con estética editorial VHS futurista."
                }
            }
        }, null, 2),
        category: "Editorial",
        level: "advanced",
        is_published: true,
        is_featured: false,
        featured_image_url: "/images/prompts/gen-z-vhs-collage.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-collage", name: "Collage", slug: "collage" },
            { id: "t-vhs", name: "VHS", slug: "vhs" },
            { id: "t-editorial", name: "Editorial", slug: "editorial" }
        ]
    },
    {
        id: "fashion-2",
        type: "prompt",
        title: "Black-and-White Hoodie Editorial Portrait — Seated Introspective Studio Pose",
        slug: "bw-hoodie-portrait",
        summary: "Ultra-realistic 8K monochrome hoodie portrait con atmósfera introspectiva de estudio.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen de referencia como identidad principal. Preservar estructura facial, rasgos, tono de piel, peinado y expresión exactamente idénticos.
- **Preservación total:** No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato editorial en blanco y negro con pose contemplativa.
- **Outfit:**
  - Prenda: Oversized washed-fabric hoodie
  - Detalle: Textura realista, folds naturales y apariencia auténtica de tela lavada
- **Expresión:** Introspectiva, calmada, emocionalmente contenida.
- **Calidad:** Ultra-realistic 8K monochrome studio portrait rendering con fidelidad absoluta.

## E: Entorno
- **Fondo:** Clean seamless white studio backdrop.
- **Escena:** Minimalista, sin objetos ni props adicionales.
- **Objetivo:** Aislar al sujeto como foco emocional principal.

## A: Acción / Postura
- **Pose:** Sentada, inclinada hacia adelante con elbows on knees.
- **Manos:**
  - Posicion: Hands clasped
  - Detalle: One thumb gently touching the forehead
- **Lenguaje corporal:** Contemplativo, introspectivo, editorial fashion calm.

## I: Iluminación
- **Tipo:** Soft directional studio lighting.
- **Características:**
  - Luz suave pero con dirección definida
  - Sombras delicadas que esculpen el rostro
  - Iluminación premium high-end editorial
- **Efecto:** Contraste elegante en blanco y negro con mood íntimo.

## S: Sensación / Atmósfera
- **Mood:** Introspective, calm, timeless, editorial.
- **Tono:** High-end fashion portrait con emoción silenciosa.

## E: Estilo Visual
- **Estilo general:** Ultra-realistic black-and-white studio fashion editorial.
- **Detalles:**
  - Monochrome tonal separation rica
  - Textura auténtica en hoodie fabric
  - Sombras suaves direccionales en fondo blanco
- **Acabado:** Timeless, minimal, cinematic fashion portrait.
- **Calidad:** Ultra-realistic 8K con look fine-art editorial.

## M: Composición / Cámara
- **Plano:** Medium portrait framing, seated forward pose.
- **Ángulo:** Eye-level ligeramente cercano para intensidad emocional.
- **Encuadre:** Sujeto centrado, fondo blanco limpio como espacio negativo.
- **Enfoque:** Sharp focus en rostro y manos; hoodie folds claramente definidos.
- **Profundidad de campo:** Shallow DOF suave para acabado premium.

## P: Postproducción
- **Color grading:** Black-and-white conversion con contrastes finos y suaves midtones.
- **Nitidez:** Alta definición en piel, textura de tela y expresión facial.
- **Contraste:** Moderado-high editorial sin perder suavidad.
- **Acabado final:** Ultra-realistic 8K monochrome hoodie portrait con atmósfera introspectiva de estudio.
`,
        prompt_text: JSON.stringify({
            "title": "Black-and-White Hoodie Editorial Portrait — Seated Introspective Studio Pose",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen de referencia como identidad principal. Preservar estructura facial, rasgos, tono de piel, peinado y expresión exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Retrato editorial en blanco y negro con pose contemplativa.",
                    "outfit": {
                        "prenda": "Oversized washed-fabric hoodie",
                        "detalle": "Textura realista, folds naturales y apariencia auténtica de tela lavada"
                    },
                    "expresion": "Introspectiva, calmada, emocionalmente contenida.",
                    "calidad": "Ultra-realistic 8K monochrome studio portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "fondo": "Clean seamless white studio backdrop.",
                    "escena": "Minimalista, sin objetos ni props adicionales.",
                    "objetivo": "Aislar al sujeto como foco emocional principal."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada, inclinada hacia adelante con elbows on knees.",
                    "manos": {
                        "posicion": "Hands clasped",
                        "detalle": "One thumb gently touching the forehead"
                    },
                    "lenguaje_corporal": "Contemplativo, introspectivo, editorial fashion calm."
                },
                "I_Iluminacion": {
                    "tipo": "Soft directional studio lighting.",
                    "caracteristicas": [
                        "Luz suave pero con dirección definida",
                        "Sombras delicadas que esculpen el rostro",
                        "Iluminación premium high-end editorial"
                    ],
                    "efecto": "Contraste elegante en blanco y negro con mood íntimo."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Introspective, calm, timeless, editorial.",
                    "tono": "High-end fashion portrait con emoción silenciosa."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Ultra-realistic black-and-white studio fashion editorial.",
                    "detalles": [
                        "Monochrome tonal separation rica",
                        "Textura auténtica en hoodie fabric",
                        "Sombras suaves direccionales en fondo blanco"
                    ],
                    "acabado": "Timeless, minimal, cinematic fashion portrait.",
                    "calidad": "Ultra-realistic 8K con look fine-art editorial."
                },
                "M_Composicion_Camara": {
                    "plano": "Medium portrait framing, seated forward pose.",
                    "angulo": "Eye-level ligeramente cercano para intensidad emocional.",
                    "encuadre": "Sujeto centrado, fondo blanco limpio como espacio negativo.",
                    "enfoque": "Sharp focus en rostro y manos; hoodie folds claramente definidos.",
                    "profundidad_de_campo": "Shallow DOF suave para acabado premium."
                },
                "P_Postproduccion": {
                    "color_grading": "Black-and-white conversion con contrastes finos y suaves midtones.",
                    "nitidez": "Alta definición en piel, textura de tela y expresión facial.",
                    "contraste": "Moderado-high editorial sin perder suavidad.",
                    "acabado_final": "Ultra-realistic 8K monochrome hoodie portrait con atmósfera introspectiva de estudio."
                }
            }
        }, null, 2),
        category: "Fashion",
        level: "advanced",
        is_published: true,
        is_featured: false,
        featured_image_url: "/images/prompts/bw-hoodie-portrait.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-fashion", name: "Fashion", slug: "fashion" },
            { id: "t-bnw", name: "Black & White", slug: "black-white" },
            { id: "t-editorial", name: "Editorial", slug: "editorial" },
            { id: "t-studio", name: "Studio", slug: "studio" }
        ]
    },
    {
        id: "lifestyle-9",
        type: "prompt",
        title: "Poolside Fashion Editorial Portrait — Colorful Bikini + Butterfly Tattoo",
        slug: "poolside-fashion-portrait",
        summary: "Ultra-realistic 8K poolside fashion editorial portrait con atmósfera limpia y comercial.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar la imagen adjunta como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y rasgos físicos exactamente idénticos.
- **Preservación total:** No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.
- **Sujeto:** Retrato lifestyle editorial en ambiente de piscina.
- **Detalle corporal:** Proporciones naturales, look saludable y atlético, sin exageraciones anatómicas.
- **Tattoo:** Tiny butterfly tattoo visible en la espalda.
- **Outfit:**
  - Tipo: Colorful patterned bikini (high-fashion swimwear styling)
  - Descripción: Diseño moderno con colores vibrantes y ajuste elegante, estilo editorial.
- **Expresión:** Sonrisa natural, mood relajado y veraniego.
- **Calidad:** Ultra-realistic 8K swimwear fashion portrait rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Pool setting exterior con atmósfera luminosa.
- **Background:** Agua azul desenfocada y entorno minimalista veraniego.
- **Atmósfera:** Resort lifestyle, clean, bright, editorial.

## A: Acción / Postura
- **Pose:** Medium shot ligeramente inclinado (canted angle) para dinamismo visual.
- **Lenguaje corporal:** Relajado, confident, casual poolside vibe.

## I: Iluminación
- **Tipo:** Natural daylight pool lighting.
- **Características:**
  - Highlights suaves sobre piel y agua
  - Sombras naturales balanceadas
  - Look cinematográfico veraniego
- **Efecto:** Look cinematográfico veraniego.

## S: Sensación / Atmósfera
- **Mood:** Fresh, confident, summery, fashion editorial.
- **Tono:** Lifestyle resort aesthetic con elegancia moderna.

## E: Estilo Visual
- **Estilo general:** Photorealistic swimwear editorial portrait.
- **Detalles:**
  - Textura realista de piel
  - Colores vibrantes del bikini
  - Tatuaje mariposa como detalle distintivo
  - Pool bokeh background
- **Calidad:** Ultra-realistic 8K clean fashion photography look.

## M: Composición / Cámara
- **Plano:** Medium shot landscape framing.
- **Ángulo:** Slight canted angle para estética editorial.
- **Enfoque:** Sharp focus en rostro y tattoo detail; fondo suavemente desenfocado.
- **Profundidad de campo:** Shallow DOF cinematográfico.

## P: Postproducción
- **Color grading:** Warm summer tones con contraste suave.
- **Nitidez:** Alta definición en piel, bikini fabric y tattoo detail.
- **Acabado final:** Ultra-realistic 8K poolside fashion editorial portrait con atmósfera limpia y comercial.
`,
        prompt_text: JSON.stringify({
            "title": "Poolside Fashion Editorial Portrait — Colorful Bikini + Butterfly Tattoo",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar la imagen adjunta como identidad principal. Mantener estructura facial, peinado, tono de piel, expresión y rasgos físicos exactamente idénticos.",
                    "preservacion_total": "No alterar ni editar el rostro ni ningún rasgo físico bajo ninguna circunstancia.",
                    "sujeto": "Retrato lifestyle editorial en ambiente de piscina.",
                    "detalle_corporal": "Proporciones naturales, look saludable y atlético, sin exageraciones anatómicas.",
                    "tattoo": "Tiny butterfly tattoo visible en la espalda.",
                    "outfit": {
                        "tipo": "Colorful patterned bikini (high-fashion swimwear styling)",
                        "descripcion": "Diseño moderno con colores vibrantes y ajuste elegante, estilo editorial."
                    },
                    "expresion": "Sonrisa natural, mood relajado y veraniego.",
                    "calidad": "Ultra-realistic 8K swimwear fashion portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "ubicacion": "Pool setting exterior con atmósfera luminosa.",
                    "background": "Agua azul desenfocada y entorno minimalista veraniego.",
                    "atmósfera": "Resort lifestyle, clean, bright, editorial."
                },
                "A_Accion_Postura": {
                    "pose": "Medium shot ligeramente inclinado (canted angle) para dinamismo visual.",
                    "lenguaje_corporal": "Relajado, confident, casual poolside vibe."
                },
                "I_Iluminacion": {
                    "tipo": "Natural daylight pool lighting.",
                    "caracteristicas": [
                        "Highlights suaves sobre piel y agua",
                        "Sombras naturales balanceadas",
                        "Look cinematográfico veraniego"
                    ]
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Fresh, confident, summery, fashion editorial.",
                    "tono": "Lifestyle resort aesthetic con elegancia moderna."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Photorealistic swimwear editorial portrait.",
                    "detalles": [
                        "Textura realista de piel",
                        "Colores vibrantes del bikini",
                        "Tatuaje mariposa como detalle distintivo",
                        "Pool bokeh background"
                    ],
                    "calidad": "Ultra-realistic 8K clean fashion photography look."
                },
                "M_Composicion_Camara": {
                    "plano": "Medium shot landscape framing.",
                    "angulo": "Slight canted angle para estética editorial.",
                    "enfoque": "Sharp focus en rostro y tattoo detail; fondo suavemente desenfocado.",
                    "profundidad_de_campo": "Shallow DOF cinematográfico."
                },
                "P_Postproduccion": {
                    "color_grading": "Warm summer tones con contraste suave.",
                    "nitidez": "Alta definición en piel, bikini fabric y tattoo detail.",
                    "acabado_final": "Ultra-realistic 8K poolside fashion editorial portrait con atmósfera limpia y comercial."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        featured_image_url: "/images/prompts/poolside-fashion-portrait.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-summer", name: "Summer", slug: "summer" },
            { id: "t-swimwear", name: "Swimwear", slug: "swimwear" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ]
    },
    {
        id: "lifestyle-10",
        type: "prompt",
        title: "Intimate Dressing Chair Portrait — Kodak Film Camera + Warm Nostalgic 35mm Mood (8K)",
        slug: "intimate-dressing-chair",
        summary: "Ultra-realistic 8K intimate editorial portrait with warm nostalgic film atmosphere.",
        body_markdown: `
# Framework REALISMO

## R: Render del Avatar
- **Identidad:** Usar el modelo de referencia como identidad principal. Mantener ojos, contorno facial, cejas, nariz y boca 100% idénticos. No editar el rostro.
- **Preservación total:** No alterar ni modificar ningún rasgo facial o físico bajo ninguna circunstancia. Identidad bloqueada.
- **Sujeto:** Retrato íntimo lifestyle editorial en ambiente privado y cálido.
- **Pose base:** Full body sitting on a dressing chair, arms wrapped around knees.
- **Outfit:**
  - Top: Long white shirt oversize
  - Bottom: Shorts minimalistas
  - Socks: White lace long socks
- **Prop:**
  - Camera: Retro-style Kodak film camera held close to the face
- **Detalle piel:** Textura auténtica, natural, sin suavizado artificial.
- **Calidad:** Ultra-realistic 8K intimate portrait rendering con fidelidad absoluta.

## E: Entorno
- **Ubicación:** Interior cálido tipo dressing room o espacio privado.
- **Escena:** Lifestyle editorial con atmósfera íntima, tranquila y nostálgica.
- **Background:**
  - Golden brown gradient backdrop suave
  - No elementos distractores, ambiente minimalista
- **Atmósfera:** Private warm editorial moment, nostalgic film mood.

## A: Acción / Postura
- **Pose:** Sentado en una silla de vestidor con ambas rodillas recogidas.
- **Detalle:**
  - Ambos brazos rodeando las rodillas
  - Cámara Kodak sostenida cerca del rostro como gesto íntimo
- **Lenguaje corporal:** Warm, introspective, private, emotionally close.

## I: Iluminación
- **Tipo:** Warm ambient light with cinematic movie tone.
- **Características:**
  - Luz cálida envolvente
  - Sombras suaves delicadas
  - Highlights sutiles sobre piel y tela blanca
  - Atmosfera nostálgica tipo cine
- **Efecto:** Golden intimate lighting with soft warmth.

## S: Sensación / Atmósfera
- **Mood:** Nostalgic, warm, private, intimate editorial lifestyle.
- **Tono:** Soft emotional closeness with cinematic calm.

## E: Estilo Visual
- **Estilo general:** Hyper-realistic lifestyle portrait with 35mm film aesthetic.
- **Detalles:**
  - Soft focus cinematic intimacy
  - Delicate film grain texture
  - Golden brown nostalgic palette
  - Editorial warm private atmosphere
- **Acabado:** Analog-inspired movie lifestyle realism.
- **Calidad:** Ultra-realistic 8K with subtle 35mm grain finish.

## M: Composición / Cámara
- **Plano:** Full body portrait seated on dressing chair.
- **Ángulo:** Eye-level intimate framing, close enough to feel personal.
- **Encuadre:** Subject centered, arms and camera forming emotional focal triangle.
- **Profundidad de campo:** Soft shallow DOF with nostalgic softness.
- **Enfoque:** Sharpest focus on eyes and facial features, softer on background.

## P: Postproducción
- **Color grading:** Warm golden-brown movie-grade tones.
- **Contraste:** Soft low contrast for nostalgic intimacy.
- **Nitidez:** Ultra detail in facial texture, lace socks, Kodak camera surface.
- **Film efecto:** Delicate 35mm grain added for authenticity.
- **Acabado final:** Ultra-realistic 8K intimate editorial portrait with warm nostalgic film atmosphere and absolute face fidelity.
`,
        prompt_text: JSON.stringify({
            "title": "Intimate Dressing Chair Portrait — Kodak Film Camera + Warm Nostalgic 35mm Mood (8K)",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "identidad": "Usar el modelo de referencia como identidad principal. Mantener ojos, contorno facial, cejas, nariz y boca 100% idénticos. No editar el rostro.",
                    "preservacion_total": "No alterar ni modificar ningún rasgo facial o físico bajo ninguna circunstancia. Identidad bloqueada.",
                    "sujeto": "Retrato íntimo lifestyle editorial en ambiente privado y cálido.",
                    "pose_base": "Full body sitting on a dressing chair, arms wrapped around knees.",
                    "outfit": {
                        "top": "Long white shirt oversize",
                        "bottom": "Shorts minimalistas",
                        "socks": "White lace long socks"
                    },
                    "prop": {
                        "camera": "Retro-style Kodak film camera held close to the face"
                    },
                    "detalle_piel": "Textura auténtica, natural, sin suavizado artificial.",
                    "calidad": "Ultra-realistic 8K intimate portrait rendering con fidelidad absoluta."
                },
                "E_Entorno": {
                    "ubicacion": "Interior cálido tipo dressing room o espacio privado.",
                    "escena": "Lifestyle editorial con atmósfera íntima, tranquila y nostálgica.",
                    "background": [
                        "Golden brown gradient backdrop suave",
                        "No elementos distractores, ambiente minimalista"
                    ],
                    "atmósfera": "Private warm editorial moment, nostalgic film mood."
                },
                "A_Accion_Postura": {
                    "pose": "Sentado en una silla de vestidor con ambas rodillas recogidas.",
                    "detalle": [
                        "Ambos brazos rodeando las rodillas",
                        "Cámara Kodak sostenida cerca del rostro como gesto íntimo"
                    ],
                    "lenguaje_corporal": "Warm, introspective, private, emotionally close."
                },
                "I_Iluminacion": {
                    "tipo": "Warm ambient light with cinematic movie tone.",
                    "caracteristicas": [
                        "Luz cálida envolvente",
                        "Sombras suaves delicadas",
                        "Highlights sutiles sobre piel y tela blanca",
                        "Atmosfera nostálgica tipo cine"
                    ],
                    "efecto": "Golden intimate lighting with soft warmth."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Nostalgic, warm, private, intimate editorial lifestyle.",
                    "tono": "Soft emotional closeness with cinematic calm."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Hyper-realistic lifestyle portrait with 35mm film aesthetic.",
                    "detalles": [
                        "Soft focus cinematic intimacy",
                        "Delicate film grain texture",
                        "Golden brown nostalgic palette",
                        "Editorial warm private atmosphere"
                    ],
                    "acabado": "Analog-inspired movie lifestyle realism.",
                    "calidad": "Ultra-realistic 8K with subtle 35mm grain finish."
                },
                "M_Composicion_Camara": {
                    "plano": "Full body portrait seated on dressing chair.",
                    "angulo": "Eye-level intimate framing, close enough to feel personal.",
                    "encuadre": "Subject centered, arms and camera forming emotional focal triangle.",
                    "profundidad_de_campo": "Soft shallow DOF with nostalgic softness.",
                    "enfoque": "Sharpest focus on eyes and facial features, softer on background."
                },
                "P_Postproduccion": {
                    "color_grading": "Warm golden-brown movie-grade tones.",
                    "contraste": "Soft low contrast for nostalgic intimacy.",
                    "nitidez": "Ultra detail in facial texture, lace socks, Kodak camera surface.",
                    "film_effect": "Delicate 35mm grain added for authenticity.",
                    "acabado_final": "Ultra-realistic 8K intimate editorial portrait with warm nostalgic film atmosphere and absolute face fidelity."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        featured_image_url: "/images/prompts/intimate-dressing-chair.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-film", name: "Film Photography", slug: "film-photography" },
            { id: "t-intimate", name: "Intimate", slug: "intimate" },
            { id: "t-indoor", name: "Indoor", slug: "indoor" }
        ]
    },
    {
        id: "lifestyle-chrome-pink-supercar",
        type: "prompt",
        title: "Chrome Pink Supercar Selfie — Casual Instagram Main Character Mood",
        slug: "chrome-pink-supercar-selfie",
        summary: "Prompt ultra-realista que coloca a tu avatar posando junto a un BMW i8 en un llamativo color cromo rosa espejo con estilo streetwear de lujo.",
        body_markdown: `
# Framework REALISMO

*   **R(Render):** Mujer joven (early 20s), cabello rubio platino fluyendo bajo gorra negra. Estructura facial bonita, ojos enfocados en pantalla del móvil.
*   **E(Entorno):** Calle urbana moderna, edificios de cristal, pavimento adoquinado elegante.
*   **A(Acción):** Posando con un brazo levantado tomando una selfie a un ángulo alto, apoyada ligeramente sobre la puerta del conductor de un BMW i8.
*   **I(Iluminación):** Luz natural de día, reflejos en el cromo del vehículo.
*   **S(Sensación):** Flex casual de lujo, vibra main character e Instagram-perfect.
*   **E(Estilo):** Foto urbana candid de estilo de vida de alta definición.
*   **M(Composición):** Plano medio-completo vertical, ella en el centro con el vehículo cromo rosa como co-estrella.
*   **P(Post):** Paleta de colores súper contrastada y vibrante (Amarillo + Blanco + Rosa Cromo).
        `,
        prompt_text: JSON.stringify({
            "title": "Chrome Pink Supercar Selfie — Casual Instagram Main Character Mood",
            "framework_REALISMO": {
                "subject": {
                    "description": "Young woman taking selfie next to chrome pink BMW i8, casual main character energy",
                    "setting_rules": "street scene, luxury car, urban modern backdrop",
                    "age": "early 20s",
                    "expression": {
                        "eyes": "focused on phone screen, taking selfie, casual confidence",
                        "mouth": "relaxed, soft, natural",
                        "brows": "relaxed, effortless",
                        "overall": "unbothered, 'just casually next to a pink supercar' energy"
                    },
                    "hair": {
                        "color": "platinum blonde",
                        "style": "loose, flowing from under cap",
                        "details": "messy-pretty, some pieces falling forward, effortless waves",
                        "length": "medium-long, past shoulders"
                    },
                    "body": {
                        "frame": "petite, slim, toned",
                        "waist": "tiny, fully exposed midriff",
                        "legs": "toned, athletic, fully visible",
                        "stance": "casual lean against car, weight shifted"
                    },
                    "pose": {
                        "position": "standing next to driver door of car, leaning slightly against it",
                        "upper_body": {
                            "action": "one arm UP holding phone for selfie",
                            "phone_angle": "high, classic selfie position",
                            "other_arm": "relaxed at side"
                        },
                        "lower_body": {
                            "stance": "one leg straight, one slightly crossed or bent",
                            "weight": "casual lean, hip near car",
                            "energy": "relaxed but aware of angles"
                        },
                        "overall": "the 'caught me with this random supercar' pose that's definitely not random"
                    },
                    "clothing": {
                        "top": {
                            "type": "ultra cropped baby tee",
                            "color": "bright YELLOW, sunshine yellow",
                            "graphic": "small star or cute graphic on chest (or BANANA logo)",
                            "fit": {
                                "length": "EXTREME crop - ends just below chest, full stomach exposed",
                                "tightness": "fitted, hugging curves",
                                "sleeves": "short sleeves, casual"
                            },
                            "effect": "entire midriff visible from just under chest to shorts"
                        },
                        "bottom": {
                            "type": "ultra mini athletic shorts",
                            "color": "WHITE, clean bright white",
                            "fit": {
                                "style": "tight fitted athletic shorts",
                                "length": "very short, upper thigh",
                                "waist": "high-waisted, sits at natural waist",
                                "effect": "shows full leg length, hugs curves"
                            },
                            "material": "stretchy athletic fabric, smooth"
                        },
                        "shoes": {
                            "type": "white sneakers",
                            "style": "clean, casual, athletic vibe",
                            "effect": "completes sporty-cute look"
                        }
                    },
                    "face": {
                        "features": "pretty, big eyes, small nose, soft lips",
                        "makeup": "natural, minimal, fresh-faced",
                        "expression": "focused on selfie, casual pretty"
                    }
                },
                "accessories": {
                    "headwear": {
                        "type": "baseball cap",
                        "color": "BLACK",
                        "style": "worn forward, classic",
                        "logo": "small patch or logo visible",
                        "effect": "sporty edge, hair flowing from underneath"
                    },
                    "headphones": {
                        "type": "over-ear headphones",
                        "color": "WHITE",
                        "position": "around neck, not on ears",
                        "style": "chunky, modern, like Beats or similar",
                        "effect": "adds to casual 'just vibing' energy"
                    },
                    "device": {
                        "type": "iPhone",
                        "position": "held up high for selfie",
                        "case": "dark case visible"
                    }
                },
                "the_car": {
                    "make": "BMW i8",
                    "wrap": "CHROME PINK / rose gold mirror finish",
                    "effect": {
                        "reflection": "mirror chrome reflecting everything around",
                        "color": "pink/rose gold, flashy, attention-grabbing",
                        "energy": "luxury, flex, main character vehicle"
                    },
                    "position": "parked on street, she's standing next to driver side",
                    "wheels": "black rims with pink accents matching wrap",
                    "presence": "the car is a CO-STAR, not just background"
                },
                "environment": {
                    "location": "modern urban area, upscale shopping district or hotel entrance",
                    "ground": "cobblestone or nice pavement",
                    "backdrop": {
                        "buildings": "modern glass buildings, upscale retail",
                        "elements": "architectural feature visible (sculptural element)",
                        "other_cars": "normal cars parked nearby for contrast",
                        "vibe": "wealthy area, nice neighborhood"
                    },
                    "time": "daytime, good natural light",
                    "atmosphere": "urban luxury, casual wealth"
                },
                "photography": {
                    "style": "candid-looking but obviously posed, lifestyle shot",
                    "angle": "shot from front-side, capturing her full body + car",
                    "quality": "high quality, could be iPhone or camera",
                    "framing": "her centered, car visible behind/beside, environment context",
                    "lighting": "natural daylight, flattering"
                },
                "color_story": {
                    "her": {
                        "top": "bright YELLOW",
                        "shorts": "clean WHITE",
                        "cap": "BLACK",
                        "headphones": "WHITE",
                        "shoes": "WHITE",
                        "hair": "platinum BLONDE"
                    },
                    "car": "chrome PINK / rose gold",
                    "overall": "yellow + white + pink chrome = eye-catching, vibrant, instagram-perfect"
                },
                "the_vibe": {
                    "energy": "casual luxury, 'this is just my tuesday'",
                    "mood": "unbothered, main character, casual flex",
                    "contrast": "sporty casual outfit + absurd luxury car",
                    "story": "she either owns this car or saw it and had to take a pic - either way she belongs next to it",
                    "social_media": "this is THE instagram photo",
                    "caption_energy": "'running errands' or '🩷' or no caption needed"
                },
                "critical_elements": {
                    "outfit_combo": "yellow crop + white shorts = sporty cute, maximum skin",
                    "midriff": "fully exposed, tiny waist on display",
                    "cap_headphones": "the combo that says 'casual but styled'",
                    "car_color": "chrome pink/rose gold = the main prop",
                    "selfie_action": "caught in the act of taking the pic",
                    "energy": "effortless but everything is intentional"
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/chrome-pink-supercar-selfie.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-urban", name: "Urban", slug: "urban" },
            { id: "t-luxury", name: "Luxury", slug: "luxury" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Selfie con Supercar\nSustituye la descripción del avatar o la marca de la gorra si prefieres usar otra prenda. Ajusta el color del envoltorio del coche cambiando `CHROME PINK / rose gold` por otro tono (ej. `CHROME EMERALD GREEN`).",
        reference_image_guide: "Usa una foto donde tu sujeto esté mirando directamente a la cámara para mantener la mirada fija en el teléfono del selfie de manera coherente."
    },
    {
        id: "lifestyle-cozy-y2k-winter-selfie",
        type: "prompt",
        title: "REALISMO_Human — Cozy Y2K Winter Selfie",
        slug: "cozy-y2k-winter-selfie",
        summary: "Prompt ultra-realista de retrato lifestyle en plano picado con estética Y2K, flash de cámara retro y ambiente acogedor de noche invernal junto a la chimenea.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de piel clara bronceada, cabello rubio largo y voluminoso. Eyeliner alado y vestido sweater de punto crema oversized off-shoulder.
*   **E(Entorno):** Salón acogedor de noche invernal. Chimenea de gas con llamas naranjas, alfombra blanca mullida de pelo sintético y suelo de madera oscura.
*   **A(Acción / Postura):** Sentada en el suelo con piernas recogidas de lado, tomando una selfie con el brazo extendido desde arriba.
*   **I(Iluminación):** Flash frontal directo (sombras duras de cámara antigua) combinado con la luz cálida de la chimenea.
*   **S(Sensación / Atmósfera):** Cozy, íntimo, nostálgico, estética Y2K de influencer de noche de invierno.
*   **E(Estilo Visual):** Fotografía lifestyle ultra realista, estética de cámara digital clásica (principios de los 2000), ligeramente imperfecta.
*   **M(Composición / Cámara):** Plano medio picado (high-angle shot), encuadre casual y formato vertical 4:5.
*   **P(Postproducción):** Tonos cálidos y desaturados, nitidez natural de piel y tejido de punto sin filtros artificiales.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Cozy Y2K Winter Selfie",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven de piel clara bronceada, apariencia natural y fotográfica.",
                    "cabello": "Largo, rubio, voluminoso, con ondas sueltas y raya lateral.",
                    "rostro": "Ojos color avellana, cejas definidas, eyeliner ligeramente alado, labios nude glossy y contouring suave.",
                    "expresion": "Mirada suave y cautivadora, cabeza ligeramente inclinada hacia la derecha.",
                    "vestimenta": "Vestido sweater de punto grueso color crema, oversized, con cuello off-shoulder mostrando hombros y clavículas, mangas largas y textura de trenzado pronunciada."
                },
                "E_Entorno": {
                    "escena": "Salón acogedor con iluminación tenue durante una noche de invierno.",
                    "fondo": "Chimenea de gas con llamas naranjas intensas a la izquierda, repisa blanca, ventana o puerta de cristal oscura y sillón beige en la esquina superior derecha.",
                    "suelo": "Madera oscura parcialmente cubierta por una alfombra mullida de pelo sintético blanco."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada en el suelo con las piernas flexionadas y recogidas hacia un lado.",
                    "accion": "Selfie tomada con un brazo extendido hacia la cámara.",
                    "lenguaje_corporal": "Postura relajada, espontánea e íntima.",
                    "angulo": "Plano en picado pronunciado mirando hacia la modelo."
                },
                "I_Iluminacion": {
                    "tipo": "Flash directo de cámara combinado con luz ambiental cálida de la chimenea.",
                    "caracteristicas": "Flash frontal intenso con sombras marcadas detrás del sujeto y brillo cálido procedente del fuego.",
                    "sombras": "Sombras duras pero naturales, características de una fotografía digital antigua."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Acogedor, íntimo, relajado y ligeramente nostálgico.",
                    "tono": "Lifestyle de influencer con estética Y2K y vibra de noche invernal."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía lifestyle ultra realista con estética de cámara digital de principios de los 2000.",
                    "acabado": "Natural, espontáneo y ligeramente imperfecto.",
                    "paleta": "Neutros cálidos, crema, naranja del fuego y sombras marrón oscuro."
                },
                "M_Composicion_Camara": {
                    "plano": "Selfie en plano medio desde una perspectiva elevada.",
                    "angulo": "High-angle shot mirando hacia abajo.",
                    "encuadre": "Composición casual, ligeramente imperfecta, con la modelo como punto focal.",
                    "formato": "Vertical 4:5."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos y ligeramente desaturados con contraste propio de cámaras digitales antiguas.",
                    "nitidez": "Detalle natural de piel, cabello y tejido de punto, sin apariencia artificial.",
                    "acabado_final": "Realismo fotográfico, flash visible, estética Y2K auténtica y sensación de fotografía personal espontánea."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/cozy-y2k-winter-selfie.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-y2k", name: "Y2K", slug: "y2k" },
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Selfie Cozy Winter\nSustituye la descripción física del avatar (cabello, ojos, tono de piel) por la tuya. Ajusta la prenda (ej. cambia 'Vestido sweater de punto grueso color crema' por 'Polerón de lana negro') para renovar el outfit.",
        reference_image_guide: "Usa una foto donde tu rostro se vea de frente o ligeramente perfilado de modo que el flash retro resalte tu mirada."
    },
    {
        id: "lifestyle-electric-blue-mirror-selfie",
        type: "prompt",
        title: "REALISMO_Human — Mirror Selfie Azul Eléctrico",
        slug: "electric-blue-mirror-selfie",
        summary: "Prompt ultra-realista de mirror selfie de cuerpo completo en un entorno interior minimalista y luminoso, destacando el vestido azul eléctrico brillante.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer adulta sentada en el suelo frente a un gran espejo. Coleta rubia alta con mechones sueltos, vestido mini ajustado azul brillante y calcetines blancos altos de estilo deportivo.
*   **E(Entorno):** Habitación interior minimalista con paredes blancas, molduras decorativas y suelo de madera clara.
*   **A(Acción / Postura):** Sentada en el suelo, mano derecha sosteniendo el móvil con funda plateada y flash activo apuntando al espejo. Mano izquierda levantando ligeramente el cabello, mirada hacia el reflejo.
*   **I(Iluminación):** Iluminación interior brillante y flash directo del smartphone visible en el espejo con reflejos y destellos naturales.
*   **S(Sensación / Atmósfera):** Moderno, limpio, seguro y juvenil. Vibe de contenido espontáneo de redes sociales.
*   **E(Estilo Visual):** Fotografía mirror selfie de smartphone nítida y fotorrealista, textura natural de piel, vestido y madera.
*   **M(Composición / Cámara):** Composición frontal de cuerpo completo reflejada en el espejo, con la modelo centrada.
*   **P(Postproducción):** Tonos y colores limpios destacando el azul brillante y el fondo blanco con profundidad de campo natural.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Mirror Selfie Azul Eléctrico",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer adulta sentada en el suelo frente a un gran espejo, capturando una selfie de cuerpo completo.",
                    "cabello": "Rubio, recogido en una coleta alta con mechones sueltos enmarcando el rostro.",
                    "rostro": "Maquillaje glam, eyeliner winged y labios mate en tono mauve/rosa.",
                    "expresion": "Neutral, segura y natural.",
                    "vestimenta": "Vestido mini ajustado color azul brillante, combinado con calcetines blancos altos hasta media pantorrilla con detalle tipo swoosh negro."
                },
                "E_Entorno": {
                    "escena": "Habitación interior minimalista y luminosa.",
                    "fondo": "Paredes blancas con molduras decorativas y suelo de madera clara.",
                    "elementos": [
                        "Gran espejo de cuerpo completo apoyado en el suelo",
                        "Superficie limpia y minimalista",
                        "Detalles arquitectónicos blancos"
                    ]
                },
                "A_Accion_Postura": {
                    "pose": "Sentada en el suelo frente al espejo con las piernas posicionadas naturalmente.",
                    "accion": "La mano derecha sostiene el smartphone para realizar la selfie; la izquierda levanta el cabello o descansa cerca de la cabeza.",
                    "lenguaje_corporal": "Relajado, seguro y espontáneo.",
                    "mirada": "Dirigida hacia el reflejo del espejo."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación interior brillante combinada con flash directo del smartphone.",
                    "caracteristicas": "Flash visible en el espejo, creando reflejos naturales y pequeñas variaciones de exposición.",
                    "sombras": "Suaves, con sombras ligeramente marcadas alrededor del sujeto."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Moderno, limpio, juvenil y seguro.",
                    "tono": "Lifestyle de influencer con estética casual y espontánea."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía mirror selfie ultra realista.",
                    "acabado": "Natural, nítido y ligeramente imperfecto como contenido auténtico de redes sociales.",
                    "detalle": "Textura real de piel, cabello, tejido del vestido y madera."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano de cuerpo completo sentado.",
                    "angulo": "Perspectiva frontal mediante espejo.",
                    "encuadre": "Modelo centrada y completamente visible dentro del espejo.",
                    "dispositivo": "Smartphone con funda plateada/blanca y flash activo."
                },
                "P_Postproduccion": {
                    "color_grading": "Colores limpios y naturales, destacando el azul brillante del vestido y los tonos blancos del entorno.",
                    "nitidez": "Alta nitidez con profundidad de campo natural.",
                    "acabado_final": "Fotografía realista de smartphone, sin apariencia de render 3D ni piel artificial."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/electric-blue-mirror-selfie.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-mirror", name: "Mirror Selfie", slug: "mirror-selfie" },
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Mirror Selfie\nModifica el color del vestido cambiando 'color azul brillante' por tu tono preferido (ej. 'color verde oliva'). Puedes sustituir los calcetines deportivos altos por zapatos de tacón o tenis casuales para cambiar el estilo de vestir.",
        reference_image_guide: "Usa una foto de retrato clara donde la pose de tu cuerpo y manos sea similar para asegurar que el mapeo del rostro y los hombros encajen perfectamente en el espejo."
    },
    {
        id: "lifestyle-puppy-cuddle-selfie",
        type: "prompt",
        title: "REALISMO_Human — Selfie cariñosa con cachorro",
        slug: "puppy-cuddle-selfie",
        summary: "Prompt ultra-realista de primer plano vertical lifestyle capturando una selfie espontánea de tu avatar abrazando de manera cariñosa a un esponjoso cachorro goldendoodle.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de piel cálida bronceada, cabello largo rubio recogido en moño alto desenfadado, aros dorados finos y tank top acanalado negro.
*   **E(Entorno):** Dormitorio luminoso y ordenado. Paredes blancas, puerta panelada azul marino, cómoda blanca y ventana amplia.
*   **A(Acción / Postura):** Sostiene cariñosamente a un cachorro dorado contra el pecho con ambas manos, cabeza inclinada y mirando de frente a la cámara con sonrisa suave.
*   **I(Iluminación):** Luz natural lateral procedente de la ventana a la derecha, suave y difusa.
*   **S(Sensación / Atmósfera):** Cálida, afectuosa, feliz, natural y familiar.
*   **E(Estilo Visual):** Fotografía lifestyle candid ultra realista tipo selfie de smartphone (iPhone). Texturas de algodón y pelaje muy definidas.
*   **M(Composición / Cámara):** Primer plano vertical (4:5) con la modelo y el cachorro centrados, ángulo de cámara levemente picado y fondo desenfocado.
*   **P(Postproducción):** Tonos cálidos y naturales, saturación realista, nitidez alta en texturas y sin marcas de agua ni texto.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Selfie cariñosa con cachorro",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven adulta de piel cálida bronceada, apariencia natural y sonrisa suave.",
                    "cabello": "Recogido en un moño alto y desenfadado, con mechones sueltos enmarcando el rostro.",
                    "rostro": "Maquillaje natural, piel realista, sonrisa delicada y mirada directa a cámara.",
                    "vestimenta": "Tank top negro de tejido acanalado.",
                    "accesorios": "Pequeños aros dorados, collar fino dorado y dos anillos en la mano izquierda."
                },
                "E_Entorno": {
                    "escena": "Dormitorio luminoso y acogedor.",
                    "fondo": "Paredes blancas, puerta panelada azul marino a la izquierda, cómoda blanca con tiradores negros, cama blanca con almohadas y ventana con marco blanco a la derecha.",
                    "atmosfera": "Limpia, doméstica, cálida y natural, con muy poco desorden."
                },
                "A_Accion_Postura": {
                    "pose": "La mujer sostiene al cachorro cerca del pecho con ambas manos y mantiene la cabeza ligeramente inclinada.",
                    "accion": "Abraza al cachorro mientras mira y sonríe suavemente a la cámara.",
                    "acompanante": "Cachorro pequeño tipo Goldendoodle o mezcla de caniche, de pelaje dorado claro, rizado y esponjoso, mirando hacia delante.",
                    "lenguaje_corporal": "Cariñoso, relajado y espontáneo."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural diurna procedente de la ventana.",
                    "direccion": "Iluminación lateral desde la derecha.",
                    "caracteristicas": "Luz suave, difusa y favorecedora con reflejos delicados sobre piel, cabello y pelaje.",
                    "sombras": "Suaves y mínimas."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cálido, afectuoso, casual y feliz.",
                    "tono": "Lifestyle auténtico y espontáneo."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía lifestyle candid ultra realista.",
                    "acabado": "Aspecto natural de smartphone, sin apariencia de estudio.",
                    "texturas": "Pelaje rizado y suave, textura natural de piel y tejido de algodón del tank top.",
                    "paleta": "Tonos cálidos y naturales: beige, negro, blanco y dorado, con azul marino como acento."
                },
                "M_Composicion_Camara": {
                    "plano": "Primer plano vertical.",
                    "angulo": "Ligeramente elevado, mirando hacia abajo.",
                    "encuadre": "Mujer y cachorro centrados, ambos claramente visibles.",
                    "profundidad": "Profundidad de campo reducida con fondo ligeramente desenfocado.",
                    "camara": "Smartphone estilo iPhone con lente gran angular.",
                    "aspect_ratio": "4:5 vertical"
                },
                "P_Postproduccion": {
                    "color_grading": "Color cálido y natural, saturación realista y contraste moderado.",
                    "nitidez": "Enfoque preciso en rostro y cachorro, conservando textura auténtica.",
                    "acabado_final": "Fotografía espontánea de alta calidad con profundidad natural y sin texto visible.",
                    "negative_prompts": [
                        "blurry",
                        "dark",
                        "low quality",
                        "artificial lighting",
                        "sad expression",
                        "different clothing",
                        "different dog breed",
                        "deformed anatomy",
                        "extra limbs",
                        "plastic skin",
                        "cartoon",
                        "3d render",
                        "watermark",
                        "text"
                    ]
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/puppy-cuddle-selfie.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-puppy", name: "Puppy", slug: "puppy" },
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Selfie con Cachorro\nSustituye los rasgos faciales y de vestimenta del avatar por los tuyos. Si prefieres otra raza de perro, edita 'Goldendoodle' por el nombre de la raza que desees (ej. 'Pug' o 'Golden Retriever').",
        reference_image_guide: "Usa una foto donde tu expresión sea alegre y relajada, preferiblemente con la cabeza un poco inclinada para que coincida de forma natural con la pose de abrazo."
    },
    {
        id: "lifestyle-private-jet-luxury-travel",
        type: "prompt",
        title: "REALISMO_Human — Luxury Travel Private Jet",
        slug: "private-jet-luxury-travel",
        summary: "Prompt ultra-realista de retrato lifestyle en jet privado. El avatar posa relajado en asientos de cuero gris junto a la ventanilla con luz natural brillante.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de piel bronceada, cabello largo castaño con reflejos rubios ondulados, manicura degradada rosa y blanca, tank top blanco y pantalones negros.
*   **E(Entorno):** Cabina interior de jet privado de lujo. Asientos de cuero gris, paneles blancos, ventanilla con luz intensa y mochila de diseñador al lado.
*   **A(Acción / Postura):** Sentada de medio lado, la mano izquierda toca sutilmente el cabello y la mano derecha descansa en la rodilla. Joyería plateada fina y mochila visible.
*   **I(Iluminación):** Luz natural diurna difusa desde la derecha entrando por la ventanilla, ligera sobreexposición natural en el cristal de la ventana.
*   **S(Sensación / Atmósfera):** Relajado, casual, sofisticado y de alto standing.
*   **E(Estilo Visual):** Fotografía de viajes lifestyle candid ultra realista, grano fotográfico sutil y texturas de cuero, metal y algodón muy detalladas.
*   **M(Composición / Cámara):** Plano medio asimétrico (9:16 vertical), ángulo a la altura de los ojos (eye-level) con fondo suavemente desenfocado.
*   **P(Postproducción):** Colores neutros cálidos y naturales, contraste nítido y sin apariencia artificial de render 3D.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Luxury Travel Private Jet",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven adulta de apariencia natural, piel bronceada y presencia relajada.",
                    "cabello": "Largo, castaño con reflejos rubios, ondulado y cayendo naturalmente sobre los hombros.",
                    "rostro": "Cejas definidas, labios carnosos y mirada directa a cámara, expresión neutra y segura.",
                    "piel": "Complexión bronceada con textura natural y acabado realista.",
                    "manicura": "Uñas largas y puntiagudas con manicura degradada rosa y blanco."
                },
                "E_Entorno": {
                    "escena": "Interior de un jet privado de alta gama.",
                    "fondo": "Asientos de cuero gris, paneles interiores blancos, ventanilla del avión con luz intensa y detalles de cabina.",
                    "elementos": [
                        "Hebilla del cinturón de seguridad",
                        "Asiento opuesto desenfocado",
                        "Ventana del avión",
                        "Mochila de diseñador junto a la mujer"
                    ],
                    "atmosfera": "Exclusiva, limpia y sofisticada."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada en el asiento del avión con el cuerpo ligeramente orientado hacia la izquierda.",
                    "accion": "La mano izquierda toca el cabello cerca de la parte superior de la cabeza mientras la mano derecha descansa sobre la rodilla con los dedos relajados.",
                    "lenguaje_corporal": "Casual, relajado y seguro.",
                    "accesorios": "Collar de cadena plateada, varios brazaletes plateados, anillo dorado, pendientes de aro y mochila de diseñador"
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural diurna entrando por la ventanilla.",
                    "direccion": "Desde la derecha.",
                    "caracteristicas": "Luz suave y difusa con delicados reflejos sobre cabello, brazo, piel y superficies de cuero.",
                    "exposicion": "Correctamente expuesta con una ligera sobreexposición natural alrededor de la ventana.",
                    "sombras": "Suaves, creadas por el cuerpo y los asientos para aportar profundidad."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Relajado, casual y lujoso.",
                    "tono": "Momento cotidiano de viaje exclusivo, capturado de forma espontánea."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía lifestyle candid ultra realista.",
                    "acabado": "Natural, ligeramente cinematográfico, con grano fotográfico sutil.",
                    "texturas": "Piel y cabello naturales, cuero suave, tejido acanalado, joyería reflectante y cristal de la ventana.",
                    "paleta": "Blanco, negro, gris y marrón cálido con tonos beige naturales."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio ligeramente amplio.",
                    "angulo": "Eye-level.",
                    "encuadre": "Composición asimétrica, con la mujer y la ventana dominando el lado derecho.",
                    "foco": "Rostro y parte superior del cuerpo perfectamente enfocados.",
                    "profundidad_de_campo": "Reducida, con el interior del avión suavemente desenfocado.",
                    "aspect_ratio": "9:16 vertical",
                    "camara": "Smartphone premium o cámara DSLR.",
                    "optica": "35mm–50mm equivalente.",
                    "ajustes": "ISO 200, f/2.8, 1/250s."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos cálidos y neutros, ligeramente apagados y naturales.",
                    "contraste": "Contraste definido entre el top blanco, la ventana luminosa y los pantalones negros.",
                    "nitidez": "Alta nitidez en sujeto con fondo más suave.",
                    "acabado_final": "Fotografía de viaje de lujo auténtica, sin texto, gráficos ni apariencia de render 3D."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/private-jet-luxury-travel.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-travel", name: "Travel", slug: "travel" },
            { id: "t-luxury", name: "Luxury", slug: "luxury" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Viaje en Jet Privado\nReemplaza los rasgos de la modelo para ajustarlos a tu avatar. Modifica los accesorios del jet cambiando 'mochila de diseñador' por otra prenda o elemento (ej. 'una copa de champaña en la mesa lateral').",
        reference_image_guide: "Usa una foto donde tu rostro y hombros miren al frente con expresión relajada o segura para que coincida perfectamente con la perspectiva a nivel de ojos dentro de la cabina."
    },
    {
        id: "lifestyle-candid-flash-bedroom-night",
        type: "prompt",
        title: "REALISMO_Human — Candid Flash Bedroom Night",
        slug: "candid-flash-bedroom-night",
        summary: "Prompt ultra-realista de fotografía candid nocturna con flash directo de smartphone. El avatar posa sentada en la cama de su dormitorio recogiéndose el pelo.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven sentada en la cama, cabello rubio recogido con ambas manos, body negro de manga larga, jeans azul claro y collar con cruz pequeña.
*   **E(Entorno):** Dormitorio de noche. Cama grande con edredón beige, estructura de canopy metálica negra, ventana amplia con vistas a las luces de la ciudad y cortinas beige.
*   **A(Acción / Postura):** Torso orientado levemente a la izquierda, ambos brazos elevados para atar/ajustar el cabello, mirada contemplativa hacia la izquierda fuera de cámara.
*   **I(Iluminación):** Flash directo y frontal de smartphone con destello de alta intensidad, creando sombras nítidas detrás y reflejos brillantes en frente y piel.
*   **S(Sensación / Atmósfera):** Íntima, casual, cruda, doméstica y espontánea.
*   **E(Estilo Visual):** Fotografía de smartphone de noche (candid flash photography), grano fino y texturas reales de algodón, mezclilla y sábanas.
*   **M(Composición / Cámara):** Plano medio vertical (9:16), ángulo levemente contrapicado, sujeto centrado y profundidad de campo reducida con fondo de dormitorio suave.
*   **P(Postproducción):** Tonos y temperatura cálida del flash directo con saturación natural y contraste definido.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Candid Flash Bedroom Night",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven adulta sentada sobre la cama, capturada en un momento íntimo y espontáneo.",
                    "cabello": "Rubio, recogido hacia atrás mientras ajusta o ata el cabello con ambas manos.",
                    "rostro": "Piel clara y natural con reflejos intensos del flash, maquillaje mínimo.",
                    "expresion": "Neutral y ligeramente contemplativa, mirando hacia la izquierda.",
                    "vestimenta": {
                        "top": "Body negro de manga larga con escote scoop-neck.",
                        "bottom": "Jeans azul claro ligeramente desgastados."
                    },
                    "accesorios": "Pequeño collar dorado con cruz y pendientes de aro discretos."
                },
                "E_Entorno": {
                    "escena": "Dormitorio durante la noche.",
                    "fondo": "Cama grande con edredón y almohadas beige, estructura metálica tipo canopy, ventana amplia con cortinas beige y luces de la ciudad visibles en el exterior.",
                    "elementos": [
                        "Radiador debajo de la ventana",
                        "Planta en maceta en una esquina",
                        "Estructura metálica de cuatro postes"
                    ],
                    "atmosfera": "Íntima, doméstica y ligeramente nocturna."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada sobre la cama con el torso ligeramente orientado hacia la izquierda.",
                    "accion": "Ambos brazos elevados mientras las manos recogen y ajustan el cabello hacia atrás.",
                    "lenguaje_corporal": "Relajado, natural y ligeramente posado.",
                    "mirada": "Dirigida hacia la izquierda, fuera de cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Flash directo de smartphone.",
                    "direccion": "Frontal.",
                    "intensidad": "Alta.",
                    "caracteristicas": "Flash intenso con highlights marcados sobre frente, piel y parte superior del torso.",
                    "sombras": "Sombras nítidas y definidas proyectadas detrás del sujeto.",
                    "ambiente": "Ligero spill del flash mezclado con iluminación ambiental tenue del dormitorio."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Casual, relajado, íntimo y ligeramente contemplativo.",
                    "tono": "Instantánea nocturna cruda y auténtica de redes sociales."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía candid de smartphone con estética de flash directo.",
                    "acabado": "Raw, espontáneo y realista, evitando apariencia editorial excesivamente pulida.",
                    "texturas": "Textura natural de piel, denim, tejido del body y ropa de cama.",
                    "paleta": "Negro, azul grisáceo, beige cálido, blanco y pequeños acentos dorados."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Ligeramente contrapicado.",
                    "encuadre": "Sujeto centrado con el rostro situado en el tercio superior.",
                    "profundidad_de_campo": "Reducida, con el fondo ligeramente desenfocado.",
                    "camara": "Smartphone con flash activado.",
                    "optica": "Gran angular moderado sin distorsión evidente.",
                    "velocidad": "Rápida, congelando el movimiento.",
                    "aspect_ratio": "9:16 vertical"
                },
                "P_Postproduccion": {
                    "color_grading": "Tonalidad cálida producida por el flash, saturación media y contraste natural.",
                    "nitidez": "Enfoque nítido sobre la mujer y textura realista de piel.",
                    "acabado_final": "Fotografía nocturna auténtica, sin texto, otras personas, luz diurna, maquillaje pesado, ropa estampada ni distorsión extrema de gran angular."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/candid-flash-bedroom-night.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-night", name: "Night Photography", slug: "night-photography" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Flash Nocturno en Dormitorio\nModifica el top de manga larga negro por otro color (ej. 'blanco' o 'rojo oscuro') para jugar con el contraste del flash. Puedes adaptar el fondo de la ventana para reflejar otra localización de fondo en la ciudad.",
        reference_image_guide: "Usa una foto tomada con flash frontal directo a tu avatar, preferiblemente levantando los brazos para simular la pose de atarse el pelo de manera fluida."
    },
    {
        id: "lifestyle-candid-porch-night",
        type: "prompt",
        title: "REALISMO_Human — Candid Porch Night",
        slug: "candid-porch-night",
        summary: "Prompt ultra-realista de fotografía candid nocturna en balcón o porche residencial. El avatar posa sentada con sudadera negra con el texto WANGHAF y gorra negra hacia atrás.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Persona rubia sentada de forma relajada, cabello largo saliendo bajo gorra de béisbol negra hacia atrás, sudadera con capucha negra con el texto WANGHAF y pantalones grises.
*   **E(Entorno):** Porche residencial de noche. Ventana con persianas, barandilla de madera blanca, macetas con plantas verdes, silla y mesa de metal blanca con un vaso de papel.
*   **A(Acción / Postura):** Sentada en la silla metálica, mirando ligeramente hacia arriba de forma expectante, mientras otra persona (parcialmente visible) acerca un cigarrillo a su boca.
*   **I(Iluminación):** Flash directo de cámara con fuerte intensidad frontal y caída de iluminación rápida hacia el fondo oscuro del porche.
*   **S(Sensación / Atmósfera):** Relajada, casual, íntima, de instantánea entre amigos.
*   **E(Estilo Visual):** Fotografía de estilo de vida candid nocturna con flash, grano analógico sutil y texturas de algodón, madera y hojas verdes muy naturales.
*   **M(Composición / Cámara):** Plano medio vertical (9:16), perspectiva a nivel de los ojos (eye-level) con enfoque nítido sobre el sujeto principal.
*   **P(Postproducción):** Contraste fuerte producido por el flash directo, colores y tonos nocturnos naturales. Texto WANGHAF perfectamente legible en la sudadera.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Candid Porch Night",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Persona joven adulta sentada de forma relajada en un porche residencial durante la noche.",
                    "cabello": "Largo y rubio, parcialmente oculto bajo una gorra.",
                    "headwear": "Gorra de béisbol negra colocada hacia atrás.",
                    "vestimenta": {
                        "top": "Sudadera negra con el texto WANGHAF claramente visible en la parte frontal.",
                        "bottom": "Pantalones deportivos grises."
                    },
                    "expresion": "Boca ligeramente abierta, expresión neutral y expectante.",
                    "mirada": "Ligeramente elevada hacia la persona que está frente a ella."
                },
                "E_Entorno": {
                    "escena": "Porche o balcón residencial exterior durante la noche.",
                    "fondo": "Ventana con persianas, barandilla del porche y vegetación doméstica.",
                    "elementos": [
                        "Silla metálica blanca",
                        "Mesa pequeña metálica blanca",
                        "Vaso de papel sobre la mesa",
                        "Plantas en macetas",
                        "Ventana con persianas",
                        "Barandilla del porche"
                    ],
                    "atmosfera": "Casual, cotidiana y espontánea."
                },
                "A_Accion_Postura": {
                    "pose": "Persona sentada en una silla metálica blanca.",
                    "accion": "Otra persona, visible únicamente parcialmente, acerca un cigarrillo hacia la boca de la persona sentada.",
                    "lenguaje_corporal": "Relajado y natural, como una instantánea espontánea entre amigos.",
                    "interaccion": "La persona sentada mira ligeramente hacia arriba en dirección a quien ofrece el cigarrillo."
                },
                "I_Iluminacion": {
                    "tipo": "Flash directo de cámara.",
                    "fuente": "Flash frontal con poca luz ambiental.",
                    "direccion": "Frontal.",
                    "caracteristicas": "Iluminación intensa sobre el sujeto y objetos cercanos, con caída rápida de luz hacia el fondo.",
                    "sombras": "Sombras definidas y naturales proyectadas detrás de los objetos."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Casual, candid and ligeramente nocturno.",
                    "tono": "Fotografía espontánea de redes sociales, sin apariencia de sesión profesional."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía lifestyle candid con flash directo.",
                    "acabado": "Raw, espontáneo, ligeramente imperfecto y ultra realista.",
                    "texturas": "Tela de la sudadera, algodón del pantalón, metal pintado, plantas y superficies exteriores.",
                    "paleta": "Negro, gris, blanco y tonos verdes oscuros con iluminación cálida del flash."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio.",
                    "angulo": "Eye-level.",
                    "encuadre": "Sujeto principal centrado, con parte de la segunda persona entrando naturalmente en el encuadre.",
                    "orientacion": "Vertical.",
                    "aspect_ratio": "9:16 vertical",
                    "profundidad_de_campo": "Moderada, manteniendo al sujeto nítido y el fondo ligeramente suave."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos nocturnos naturales con contraste producido por el flash.",
                    "nitidez": "Alta nitidez en rostro, ropa y objetos cercanos.",
                    "texto": "Mantener exactamente el texto WANGHAF en la parte frontal de la sudadera, perfectamente legible y sin caracteres adicionales.",
                    "acabado_final": "Fotografía nocturna auténtica, sin estética de estudio, sin texto adicional ni apariencia de render."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/candid-porch-night.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-outdoor", name: "Outdoor", slug: "outdoor" },
            { id: "t-night", name: "Night Photography", slug: "night-photography" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Balcón Nocturno\nEdita el texto frontal 'WANGHAF' por la palabra que quieras en tu sudadera. Puedes modificar el color del pantalón deportivo gris a otro tono o sustituir la gorra por el pelo libre.",
        reference_image_guide: "Usa una foto donde tu rostro esté perfilado de tres cuartos mirando ligeramente hacia arriba para encajar bien con la dirección de la mirada."
    },
    {
        id: "lifestyle-paris-night-seine",
        type: "prompt",
        title: "REALISMO_Human — Paris Night Portrait by the Seine",
        slug: "paris-night-seine",
        summary: "Prompt ultra-realista de retrato nocturno de viaje en París junto al río Sena. El avatar posa elegante con blazer negro frente a la Torre Eiffel iluminada.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven rubia, cabello largo y ondulado cayendo sobre los hombros, blazer negro con escote en V pronunciado, collar dorado y pendientes de aro.
*   **E(Entorno):** Orilla del río Sena en París durante la noche. Torre Eiffel iluminada en tonos dorados al fondo, agua reflejando las luces doradas, barandilla metálica en primer plano.
*   **A(Acción / Postura):** De pie, apoyada ligeramente sobre la barandilla de metal con una mano relajada. Postura elegante, mirada pensativa dirigida hacia arriba y a la izquierda.
*   **I(Iluminación):** Mezcla de luz ambiental nocturna (dorada artificial de la Torre Eiffel) y flash directo frontal para iluminar a la mujer. Contraste alto con fondo y cielo oscuro.
*   **S(Sensación / Atmósfera):** Romántica, glamurosa, cinematográfica y serena.
*   **E(Estilo Visual):** Retrato nocturno de viaje ultra realista con texturas definidas en cabello, blazer negro y metal de la barandilla.
*   **M(Composición / Cámara):** Plano medio vertical (9:16) con composición asimétrica (ella a la derecha, la Torre Eiffel dominando la parte izquierda), ángulo a nivel de ojos y fondo desenfocado.
*   **P(Postproducción):** Tonos dorados cálidos y negros profundos con alta definición en el sujeto principal sin filtros de estudio exagerados.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Paris Night Portrait by the Seine",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven adulta de cabello rubio largo y ondulado, capturada en un retrato nocturno elegante y contemplativo.",
                    "cabello": "Largo, rubio y ondulado, cayendo naturalmente sobre los hombros.",
                    "rostro": "Piel con textura natural, expresión serena y mirada pensativa.",
                    "expresion": "Pensive, calm and slightly melancholic.",
                    "vestimenta": "Blazer negro elegante con escote profundo en V.",
                    "accesorios": "Collar dorado y pendientes de aro."
                },
                "E_Entorno": {
                    "escena": "Orilla del río Sena en París durante la noche.",
                    "fondo": "Torre Eiffel iluminada en tonos dorados, agua del Sena reflejando las luces, embarcaciones desenfocadas y luces urbanas lejanas.",
                    "elementos": [
                        "Barandilla metálica en primer plano",
                        "Barcos sobre el Sena",
                        "Puente distante",
                        "Luces de la ciudad",
                        "Cielo nocturno oscuro con ligeros rastros luminosos"
                    ],
                    "atmosfera": "Glamurosa, romántica, serena y cinematográfica."
                },
                "A_Accion_Postura": {
                    "pose": "De pie, apoyándose ligeramente sobre la barandilla.",
                    "accion": "Una mano descansa parcialmente sobre la barandilla mientras mantiene una postura relajada.",
                    "lenguaje_corporal": "Elegante, contenida y contemplativa.",
                    "mirada": "Dirigida hacia arriba y hacia la izquierda, alejándose de la cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Combinación de iluminación ambiental nocturna y flash directo.",
                    "fuente_principal": "Iluminación dorada artificial de la Torre Eiffel.",
                    "fuente_secundaria": "Flash directo de cámara.",
                    "caracteristicas": "El flash ilumina claramente a la mujer mientras las luces doradas de París y sus reflejos permanecen visibles en el fondo.",
                    "sombras": "Suaves sobre rostro y ropa, con zonas oscuras profundas en el entorno.",
                    "contraste": "Alto contraste entre sujeto iluminado, cielo nocturno y reflejos dorados."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Glamuroso, pensativo, sereno y nocturno.",
                    "tono": "Retrato de viaje sofisticado con estética de influencer y sensación cinematográfica."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía nocturna de retrato y travel photography ultra realista.",
                    "acabado": "Realista, elegante y ligeramente dramático.",
                    "texturas": "Cabello fluido, piel natural, metal de la barandilla, agua reflectante y estructura iluminada de la Torre Eiffel.",
                    "paleta": "Dorado intenso, negro profundo, beige cálido, piel cálida y gris metálico."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio vertical.",
                    "angulo": "Eye-level.",
                    "encuadre": "La mujer ocupa la zona inferior centro-derecha mientras la Torre Eiffel domina el centro-superior izquierdo.",
                    "profundidad_de_campo": "Reducida, manteniendo sujeto y barandilla definidos con el fondo ligeramente desenfocado.",
                    "camara": "Smartphone premium.",
                    "optica": "Gran angular moderado, aproximadamente 26mm equivalente.",
                    "aspect_ratio": "9:16 vertical",
                    "ajustes": "Apertura aproximada f/1.8, velocidad suficiente para congelar el flash y sensibilidad moderadamente alta."
                },
                "P_Postproduccion": {
                    "color_grading": "Tonos dorados cálidos contrastados con negros profundos y cielo nocturno.",
                    "saturacion": "Rica pero natural.",
                    "nitidez": "Alta nitidez sobre la mujer y la barandilla, con suavidad progresiva en el fondo.",
                    "acabado_final": "Retrato nocturno realista y lujoso, sin multitudes, lluvia, luz diurna, ojos rojos, blanco y negro ni texto visible."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/paris-night-seine.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-travel", name: "Travel", slug: "travel" },
            { id: "t-night", name: "Night Photography", slug: "night-photography" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Retrato en París\nModifica el blazer negro por un vestido de cóctel elegante para cambiar la formalidad de la foto. Puedes cambiar la localización sustituyendo la Torre Eiffel por otro monumento famoso del mundo.",
        reference_image_guide: "Usa una foto donde tu rostro mire ligeramente de perfil hacia arriba para que encaje perfectamente con la pose contemplativa junto al río Sena."
    },
    {
        id: "lifestyle-urban-luxury-daylight",
        type: "prompt",
        title: "REALISMO_Human — Urban Luxury Daylight Portrait",
        slug: "urban-luxury-daylight",
        summary: "Prompt ultra-realista de retrato chic urbano con luz de día natural en plaza comercial elegante. El avatar posa sonriente sentada sobre un banco de mármol gris con bolso de diseñador.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de silueta curvilínea, cabello rubio castaño ondulado muy largo sobre el hombro, blusa wrap verde oliva, pantalón negro de tiro alto y manicura roja.
*   **E(Entorno):** Plaza exterior moderna con banco de mármol gris claro, boutique de lujo al fondo con vitrinas y transeúntes desenfocados.
*   **A(Acción / Postura):** Sentada de lado en el banco de mármol, cuerpo ligeramente inclinado hacia el frente, mirada directa y alegre a la cámara con una mano descansando en su hombro. Bolso negro con cadena dorada en el banco.
*   **I(Iluminación):** Luz natural diurna brillante, iluminación lateral y frontal suave y favorecedora sin sombras duras.
*   **S(Sensación / Atmósfera):** Elegante, alegre, glamurosa, urbana y lifestyle sofisticado.
*   **E(Estilo Visual):** Retrato urbano chic altamente realista con grano analógico sutil y definición clara de piel, cabello ondulado, mármol y cuero.
*   **M(Composición / Cámara):** Plano medio-largo vertical (4:5), ángulo ligeramente contrapicado, objetivo de retrato 50mm–85mm con apertura f/2.0–f/3.5 logrando un bokeh suave.
*   **P(Postproducción):** Tonos cálidos y luminosos con saturación realista y contraste moderado. Sin marcas de agua, textos ni imperfecciones 3D.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Urban Luxury Daylight Portrait",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven adulta de figura curvilínea, apariencia sofisticada y presencia natural.",
                    "cabello": "Muy largo, grueso y ondulado, cayendo sobre hombro y pecho.",
                    "rostro": "Piel clara, luminosa y saludable; cejas oscuras arqueadas, eyeliner negro, sombras neutras, pestañas largas y labios rosados con gloss.",
                    "expresion": "Sonrisa amplia, radiante y cautivadora.",
                    "vestimenta": {
                        "top": "Blusa verde oliva tipo wrap con escote V, mangas 3/4 ligeramente recogidas y tejido fluido.",
                        "bottom": "Pantalón negro de cintura alta, ajustado y con textura vertical sutil."
                    },
                    "accesorios": "Pendientes largos dorados, pulsera delicada con detalles verdes, reloj plateado con esfera blanca y manicura roja."
                },
                "E_Entorno": {
                    "escena": "Zona urbana exterior elegante durante un día soleado.",
                    "fondo": "Plaza o acera moderna con banco amplio de mármol gris claro y fachada de boutique de lujo detrás.",
                    "elementos": [
                        "Banco de mármol gris claro",
                        "Vitrinas de cristal",
                        "Estructuras metálicas y toldos",
                        "Columnas arquitectónicas",
                        "Personas pasando desenfocadas"
                    ],
                    "atmosfera": "Urban elegance, daytime glamour, sofisticación lifestyle."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada de lado sobre el banco, con el torso ligeramente inclinado hacia delante.",
                    "accion": "Una mano descansa suavemente sobre el hombro mientras mantiene una postura relajada.",
                    "lenguaje_corporal": "Elegante, segura y natural.",
                    "mirada": "Directa hacia la cámara.",
                    "prop": "Bolso negro de cuero con cadena dorada y medallón dorado decorativo apoyado sobre el banco junto a ella."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural diurna brillante.",
                    "direccion": "Lateral y ligeramente frontal.",
                    "caracteristicas": "Luz suave y favorecedora, posiblemente reflejada por superficies urbanas.",
                    "sombras": "Muy suaves, evitando sombras duras sobre rostro y cuerpo.",
                    "efecto": "Realza el brillo natural de la piel, cabello y colores de la ropa."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Elegante, alegre, sofisticado y seguro.",
                    "tono": "Retrato urbano premium con sensación espontánea y lifestyle."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato urbano chic y fotorealista.",
                    "acabado": "Limpio, natural y sofisticado, sin apariencia excesivamente retocada.",
                    "texturas": "Piel realista, cabello ondulado, tejido fluido, cuero, mármol y metal.",
                    "paleta": "Verde oliva, negro, gris mármol, dorado y tonos naturales de piel."
                },
                "M_Composicion_Camara": {
                    "plano": "Plano medio-largo.",
                    "angulo": "Ligeramente contrapicado.",
                    "encuadre": "Sujeto claramente separado del fondo urbano.",
                    "camara": "Cámara full-frame.",
                    "optica": "Objetivo de retrato 50mm–85mm.",
                    "apertura": "f/2.0–f/3.5.",
                    "profundidad_de_campo": "Bokeh suave, manteniendo rostro, ropa y accesorios nítidos.",
                    "aspect_ratio": "4:5 vertical"
                },
                "P_Postproduccion": {
                    "color_grading": "Color natural con tonos cálidos y luminosos.",
                    "contraste": "Moderado y elegante.",
                    "nitidez": "Alta definición en rostro y sujeto, fondo suavemente desenfocado.",
                    "acabado_final": "Fotografía editorial lifestyle realista, sin texto, sin deformaciones y sin apariencia de render 3D."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/urban-luxury-daylight.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-urban", name: "Urban", slug: "urban" },
            { id: "t-outdoor", name: "Outdoor", slug: "outdoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Retrato Urbano de Día\nModifica la blusa wrap verde oliva por otra prenda y color de tu elección (ej. 'camisa de lino blanca'). Puedes sustituir el bolso negro con cadena dorada por otro accesorio como unas gafas de sol.",
        reference_image_guide: "Usa una foto donde tu rostro tenga una sonrisa radiante y mire directamente a la cámara para asegurar una coherencia perfecta con la expresión alegre del prompt."
    },
    {
        id: "lifestyle-alpine-ski-selfie",
        type: "prompt",
        title: "REALISMO_Human — Alpine Ski Selfie",
        slug: "alpine-ski-selfie",
        summary: "Prompt ultra-realista de selfie de medio cuerpo durante un día de esquí en los Alpes. El avatar posa frente a un chalet tradicional con montañas nevadas de fondo.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de apariencia y cabello natural recogido en messy bun, chaqueta de esquí rosa y verde con pantalones a juego y gafas de nieve reflectantes.
*   **E(Entorno):** Exterior de un chalet alpino tradicional de madera con nieve fresca y montañas nevadas en el fondo.
*   **A(Acción / Postura):** Sosteniendo el smartphone con el brazo extendido para tomar una selfie casual, mirada directa al objetivo.
*   **I(Iluminación):** Luz natural diurna fría e intensa, típica de invierno, con reflejos sobre nieve y ropa técnica.
*   **S(Sensación / Atmósfera):** Aventura invernal, fresca, elegante y sofisticada.
*   **E(Estilo Visual):** Selfie smartphone ultra fotorealista, texturas de nieve, tela técnica y poros de piel muy definidos.
*   **M(Composición / Cámara):** Plano medio de selfie (9:16 vertical), ángulo sutilmente por encima de los ojos con profundidad de campo natural.
*   **P(Postproducción):** Tonos fríos y contrastes limpios, manteniendo alta nitidez en rostro y sin distorsión extrema.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Alpine Ski Selfie",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven adulta tomando un selfie casual durante un día de esquí.",
                    "face_identity": "Usar la imagen de referencia como identidad facial principal; preservar estructura, proporciones, textura de piel, lunares, marcas y rasgos distintivos.",
                    "cabello": "Mismo color que la referencia, recogido en un messy bun con mechones sueltos alrededor del rostro.",
                    "rostro": "Textura de piel auténtica, poros visibles y apariencia natural.",
                    "expresion": "Natural, relajada y espontánea.",
                    "mirada": "Directamente hacia la cámara.",
                    "vestimenta": {
                        "outfit": "Chaqueta de esquí rosa y verde con pantalones de esquí a juego.",
                        "estilo": "Moda alpina moderna y funcional."
                    },
                    "accesorios": "Gafas de nieve grandes y reflectantes, eyeliner negro."
                },
                "E_Entorno": {
                    "escena": "Exterior de un chalet alpino durante un día despejado de invierno.",
                    "fondo": "Casa de arquitectura tradicional de madera, terreno cubierto de nieve y montañas alpinas visibles al fondo.",
                    "elementos": [
                        "Nieve fresca en el suelo",
                        "Fachada de madera",
                        "Arquitectura tipo chalet",
                        "Montañas nevadas"
                    ],
                    "atmosfera": "Aventura invernal, fresca, natural y sofisticada."
                },
                "A_Accion_Postura": {
                    "pose": "Sosteniendo el smartphone con el brazo extendido para realizar un selfie.",
                    "accion": "Selfie casual estilo Instagram.",
                    "lenguaje_corporal": "Relajado y espontáneo.",
                    "mirada": "Directa al objetivo."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural diurna intensa.",
                    "calidad": "Luz fría, limpia y nítida característica de un día de invierno.",
                    "sombras": "Suaves pero definidas.",
                    "efecto": "Reflejos naturales sobre nieve, gafas y prendas técnicas."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Fresco, aventurero, casual y elegante.",
                    "tono": "Instagram lifestyle auténtico durante unas vacaciones de esquí."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Selfie smartphone ultra fotorealista.",
                    "acabado": "Natural, espontáneo y sin apariencia de render.",
                    "texturas": "Poros visibles, cabello natural, tejido técnico de la ropa y textura realista de la nieve.",
                    "color_grading": "Tonos fríos, limpios y naturales."
                },
                "M_Composicion_Camara": {
                    "plano": "Selfie de medio cuerpo.",
                    "angulo": "Ligeramente por encima del nivel de los ojos.",
                    "encuadre": "Composición casual, con el rostro como punto focal y el paisaje alpino claramente reconocible.",
                    "camara": "Cámara frontal de smartphone.",
                    "profundidad_de_campo": "Natural, sin desenfoque artificial excesivo.",
                    "aspect_ratio": "9:16 vertical"
                },
                "P_Postproduccion": {
                    "identidad": "Bloqueo estricto de identidad facial respecto a la referencia.",
                    "nitidez": "Alta nitidez en rostro, cabello, ropa y gafas.",
                    "detalle_piel": "Poros y textura natural visibles, sin efecto plástico.",
                    "ruido": "Mínimo pero conservando apariencia fotográfica auténtica.",
                    "acabado_final": "Ultra fotorealista, limpio y natural, sin texto, deformaciones, piel artificial ni elementos generados innecesarios."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/alpine-ski-selfie.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-sports", name: "Sports", slug: "sports" },
            { id: "t-outdoor", name: "Outdoor", slug: "outdoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Esquí Alpino\nModifica el color de la chaqueta rosa y verde por los colores de tu propia equipación. Puedes cambiar la expresión facial o sustituir las gafas reflectantes por unas gafas normales de esquí.",
        reference_image_guide: "Usa una foto donde mantengas tu peinado recogido en moño y los brazos extendidos para simular perfectamente el agarre a dos manos del smartphone al tomar la foto."
    },
    {
        id: "lifestyle-lazy-sunday-mirror-selfie",
        type: "prompt",
        title: "REALISMO_Human — Lazy Sunday Mirror Selfie",
        slug: "lazy-sunday-mirror-selfie",
        summary: "Prompt ultra-realista de mirror selfie de cuerpo completo reflejado en espejo dorado. El avatar posa sentada en el suelo del dormitorio con tank top acanalado blanco y shorts grises jaspeados.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de complexión atlética, cabello rubio platino recogido en messy low bun con mechones sueltos, tank top blanco cropped de algodón ribbed y shorts grises jaspeados, descalza.
*   **E(Entorno):** Dormitorio acogedor de mañana tranquila. Espejo de cuerpo completo con marco dorado, suelo de madera, cama sin hacer con sábanas grises y habitación ligeramente desordenada.
*   **A(Acción / Postura):** Sentada en el suelo de madera apoyando el torso hacia atrás en la mano izquierda, tomando un mirror selfie con el móvil en la mano derecha, mirada hacia la pantalla.
*   **I(Iluminación):** Luz natural lateral de ventana matutina suave y cálida, con un ligero resplandor dorado.
*   **S(Sensación / Atmósfera):** Cozy, íntimo, relajado, cotidiano, vibra de lazy Sunday y soft girl aesthetic.
*   **E(Estilo Visual):** Mirror selfie de smartphone realista e imperfecto, texturas de algodón, madera y ropa de cama muy naturales.
*   **M(Composición / Cámara):** Reflejo frontal de cuerpo completo en espejo, modelo centrada y dormitorio visible alrededor, formato vertical 4:5.
*   **P(Postproducción):** Tonos cremas, grises y dorados con alta definición en el sujeto principal sin filtros de estudio. Funda transparente con stickers visible en el iPhone.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Lazy Sunday Mirror Selfie",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer joven adulta de complexión delgada, atlética y tonificada.",
                    "cabello": "Rubio platino muy claro, recogido en un messy low bun con mechones sueltos enmarcando el rostro.",
                    "piel": "Clara y natural, con textura realista.",
                    "expresion": "Mirada suave hacia el teléfono, relajada, con una ligera sonrisa.",
                    "vestimenta": {
                        "top": "Tank top blanco de algodón ribbed, cropped, cuello alto tipo racer-back y ajuste ceñido.",
                        "bottom": "Shorts de algodón gris jaspeado, cortos, holgados y con cintura elástica.",
                        "pies": "Descalza."
                    },
                    "accesorio": "iPhone con funda transparente y stickers visibles."
                },
                "E_Entorno": {
                    "escena": "Dormitorio acogedor durante una mañana tranquila.",
                    "fondo": "Espejo de cuerpo completo con marco dorado, suelo de madera y paredes color crema.",
                    "elementos": [
                        "Cama sin hacer con ropa de cama gris",
                        "Ropa esparcida casualmente por el suelo",
                        "Habitación ligeramente desordenada",
                        "Detalles cotidianos de un espacio habitado"
                    ],
                    "atmosfera": "Íntima, acogedora, espontánea y auténtica, con energía de lazy Sunday."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada sobre el suelo de madera frente al espejo, apoyándose hacia atrás sobre la mano izquierda.",
                    "accion": "Tomando un mirror selfie con el smartphone.",
                    "piernas": "Pierna izquierda flexionada hacia arriba y pierna derecha doblada debajo del cuerpo.",
                    "lenguaje_corporal": "Relajado, cómodo y completamente natural.",
                    "mirada": "Hacia el teléfono, ligeramente hacia abajo."
                },
                "I_Iluminacion": {
                    "tipo": "Luz natural de mañana.",
                    "direccion": "Luz lateral procedente de una ventana.",
                    "calidad": "Suave y cálida, con un ligero resplandor dorado.",
                    "sombras": "Naturales y delicadas, conservando profundidad sin aspecto de iluminación de estudio."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cozy, íntimo, relajado y espontáneo.",
                    "tono": "Soft girl aesthetic, auténtico y cotidiano."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Mirror selfie candid de smartphone, hiperrealista.",
                    "acabado": "Natural, ligeramente imperfecto y propio de una fotografía personal.",
                    "texturas": "Piel realista, algodón ribbed, tejido de los shorts, madera y ropa de cama.",
                    "color_grading": "Tonos crema, gris, blanco y dorado cálido con contraste suave."
                },
                "M_Composicion_Camara": {
                    "plano": "Reflejo de cuerpo completo.",
                    "angulo": "Perspectiva de selfie frente al espejo.",
                    "encuadre": "La mujer ocupa la mayor parte del reflejo mientras el dormitorio permanece visible alrededor.",
                    "foco": "Sujeto nítido dentro del espejo.",
                    "camara": "Smartphone.",
                    "aspect_ratio": "4:5 vertical"
                },
                "P_Postproduccion": {
                    "nitidez": "Alta en sujeto, cabello, ropa y teléfono.",
                    "acabado_final": "Fotografía UGC hiperrealista y espontánea, conservando pequeñas imperfecciones del entorno, sin apariencia de estudio, piel plástica, render 3D, texto añadido ni elementos artificiales."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/lazy-sunday-mirror-selfie.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-mirror", name: "Mirror Selfie", slug: "mirror-selfie" },
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Selfie Dominical Relajado\nSustituye la descripción del pelo y ropa por la tuya. Puedes alterar la funda de stickers y el diseño de la cama de fondo modificando la descripción en los campos correspondientes de entorno.",
        reference_image_guide: "Usa una foto donde estés sentada en el suelo apoyándote hacia atrás de manera lateral para que el render conserve la inclinación corporal exacta."
    },
    {
        id: "lifestyle-vintage-slip-bathroom-vanity",
        type: "prompt",
        title: "REALISMO_Human — Vintage Slip Bathroom Vanity",
        slug: "vintage-slip-bathroom-vanity",
        summary: "Prompt ultra-realista de fotografía mirror selfie analógica de 35mm. El avatar posa sentada en el mostrador del baño vistiendo un vestido de seda vintage.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de figura esbelta, cabello recogido suelto y desordenado con mechones finos, vestido slip vintage de seda con bordes de encaje claro.
*   **E(Entorno):** Baño residencial compacto. Espejo de vanity con manchas de agua, mostrador desordenado con cosméticos, brochas y productos de aseo personal.
*   **A(Acción / Postura):** Sentada sobre el mostrador del baño, inclinándose hacia el espejo con piernas relajadas de lado, mirada dirigida al reflejo del espejo.
*   **I(Iluminación):** Flash frontal directo y duro con sombras marcadas y highlights especulares, combinado con luz de tungsteno ambiental tenue y cálida de fondo.
*   **S(Sensación / Atmósfera):** Cool, íntimo, crudo, privado y nocturno.
*   **E(Estilo Visual):** Fotografía mirror selfie con estética analógica de point-and-shoot de 35mm con grano visible y viñeteado natural.
*   **M(Composición / Cámara):** Plano thighs-up vertical (4:5) desde el reflejo del espejo a nivel de los ojos (eye-level), con objetos desenfocados en primer plano para aportar profundidad.
*   **P(Postproducción):** Negros ligeramente lavados, sombras verdosas y rojos saturados de forma moderada. Enfoque nítido pero suave característico de película vintage.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Vintage Slip Bathroom Vanity",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer adulta joven, principios de los 20, figura esbelta y apariencia natural.",
                    "cabello": "Recogido suelto y ligeramente desordenado, con mechones enmarcando el rostro.",
                    "rostro": "Piel realista con textura visible, sin retoque excesivo.",
                    "expresion": "Mirada distante y cool, labios ligeramente entreabiertos.",
                    "vestimenta": "Vestido slip vintage de seda con delicados bordes de encaje."
                },
                "E_Entorno": {
                    "escena": "Baño residencial compacto con azulejos y espejo sobre el vanity.",
                    "elementos": [
                        "Cosméticos",
                        "Brochas",
                        "Productos de baño",
                        "Mostrador ligeramente desordenado",
                        "Espejo con manchas de agua y pequeñas marcas"
                    ],
                    "atmosfera": "Momento privado, íntimo y nocturno, con imperfecciones cotidianas."
                },
                "A_Accion_Postura": {
                    "pose": "Sentada casualmente sobre el mostrador, inclinándose ligeramente hacia el espejo.",
                    "piernas": "Relajadas o cruzadas naturalmente.",
                    "lenguaje_corporal": "Relajado, espontáneo y sin apariencia de pose profesional.",
                    "mirada": "Dirigida al reflejo o hacia la cámara."
                },
                "I_Iluminacion": {
                    "tipo": "Flash directo de cámara combinado con tungsteno ambiental.",
                    "principal": "Flash frontal duro con sombras marcadas y highlights especulares.",
                    "ambiental": "Luz tungsteno tenue y cálida.",
                    "contraste": "Alto, con caída pronunciada de luz.",
                    "temperatura": "5500K flash + 3200K ambiente."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cool, íntimo, crudo y nocturno.",
                    "tono": "Snapshot privado capturado espontáneamente."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Mirror photograph con estética raw flash y emulación analógica.",
                    "acabado": "35mm vintage, grano visible, imperfecciones naturales y textura auténtica.",
                    "color_grading": "Negros ligeramente levantados, sombras verdosas y rojos moderadamente saturados."
                },
                "M_Composicion_Camara": {
                    "plano": "Thighs-up, sujeto sentado sobre el vanity.",
                    "angulo": "Eye-level hacia el reflejo.",
                    "encuadre": "Reflejo centrado con objetos del mostrador en primer plano para profundidad.",
                    "camara": "Point-and-shoot con estética 35mm.",
                    "optica": "35mm gran angular con ligera distorsión.",
                    "apertura": "f/5.6–f/8.",
                    "velocidad": "1/60s.",
                    "iso": 800,
                    "aspect_ratio": "4:5 vertical"
                },
                "P_Postproduccion": {
                    "nitidez": "Moderada con suavidad natural del flash.",
                    "grano": "Film grain auténtico.",
                    "vignette": "Caída natural del flash hacia los bordes.",
                    "acabado_final": "Fotografía hiperrealista y espontánea, sin iluminación de estudio, softbox, render 3D, ilustración, piel aerografiada, estética LED ni apariencia excesivamente pulida."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/vintage-slip-bathroom-vanity.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-mirror", name: "Mirror Selfie", slug: "mirror-selfie" },
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Retrato Vintage en Baño\nModifica el tipo de vestido o color del encaje de seda para renovar tu outfit. Puedes agregar o quitar elementos del mostrador del baño ajustando la descripción en los detalles del entorno.",
        reference_image_guide: "Usa una foto donde aparezcas sentada sobre un mostrador o mesa inclinándote levemente al espejo de modo que la pose sea consistente."
    },
    {
        id: "lifestyle-luxury-sofa-editorial",
        type: "prompt",
        title: "REALISMO_Human — Luxury Sofa Editorial",
        slug: "luxury-sofa-editorial",
        summary: "Prompt ultra-realista de retrato editorial cinematográfico. El avatar posa reclinada sobre un sofá beige con bodysuit blanco, abrigo voluminoso de pelo sintético y tacones nude.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer adulta, expresión calmada y seductora con media sonrisa natural, bodysuit blanco ajustado sin tirantes, medias marfil translúcidas, abrigo voluminoso de piel sintética sobre hombros y tacones nude.
*   **E(Entorno):** Interior moderno en tonos beige minimalistas. Sofá beige grande y elementos decorativos neutros y discretos.
*   **A(Acción / Postura):** Reclinada sobre el sofá, cuerpo girado de lado, una pierna flexionada y la otra extendida al frente. Mano izquierda colocada casualmente cerca de la cabeza y mano derecha relajada al lado.
*   **I(Iluminación):** Iluminación interior cálida y difusa con un halo dorado (warm golden undertone), highlights y resplandor suave sobre piel y prendas.
*   **S(Sensación / Atmósfera):** Elegancia, glamour discreto, confianza tranquila y lujo silencioso.
*   **E(Estilo Visual):** Retrato editorial de moda sofisticado y fotorealista, texturas de piel sintética, medias y cuero de tacones de alta credibilidad física.
*   **M(Composición / Cámara):** Retrato horizontal (aspecto 3.4:1) a nivel de ojos, composición equilibrada favoreciendo la silueta y profundidad de campo suave.
*   **P(Postproducción):** Tonos crema, beige y blanco contrastados, alta nitidez sin modificar la identidad facial del sujeto respecto a la referencia original.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Luxury Sofa Editorial",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer adulta cuya identidad facial debe mantenerse exactamente igual a la imagen de referencia.",
                    "rostro": "Preservar estructura facial, proporciones y rasgos originales; maquillaje suave con énfasis sutil en ojos y labios.",
                    "expresion": "Calmada y seductora, con media sonrisa natural.",
                    "piel": "Textura realista, proporciones naturales y detalles de piel visibles."
                },
                "E_Entorno": {
                    "escena": "Interior moderno en tonos beige con decoración minimalista.",
                    "fondo": "Sofá beige y elementos decorativos neutros y discretos.",
                    "atmosfera": "Lujo suave, elegante y cinematográfico."
                },
                "A_Accion_Postura": {
                    "pose": "Reclinada sobre un sofá beige, cuerpo ligeramente girado hacia un lado.",
                    "piernas": "Una pierna flexionada y la otra extendida hacia delante.",
                    "brazos": "Un brazo relajado junto al cuerpo y el otro colocado casualmente cerca de la cabeza.",
                    "lenguaje_corporal": "Relajado, seguro y sofisticado."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación interior cálida y difusa.",
                    "temperatura": "Warm golden undertone.",
                    "caracteristicas": "Mantener exactamente la dirección, intensidad, calidad y comportamiento de la luz presentes en la referencia.",
                    "efecto": "Glow suave y highlights naturales sobre piel, cabello, tejido y superficies."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Elegancia, glamour discreto y confianza tranquila.",
                    "tono": "Editorial cinematográfico de lujo suave."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato editorial sofisticado y fotorealista.",
                    "acabado": "Natural, elegante y cinematográfico, evitando apariencia artificial.",
                    "paleta": "Beige, crema, blanco y tonos cálidos neutros."
                },
                "M_Composicion_Camara": {
                    "plano": "Retrato horizontal mostrando cuerpo y entorno suficiente para contextualizar la pose.",
                    "encuadre": "Composición equilibrada, favoreciendo la silueta sin exageraciones.",
                    "aspect_ratio": "3.4:1",
                    "referencia": "Usar la imagen subida como referencia principal de identidad y composición."
                },
                "P_Postproduccion": {
                    "vestuario": "Bodysuit blanco ajustado sin tirantes, medias translúcidas color marfil, abrigo voluminoso de textura tipo piel sintética sobre los hombros y tacones nude.",
                    "accesorios": "Joyería mínima y manicura clara.",
                    "acabado_final": "Ultra realista, piel natural, tejidos físicamente creíbles y sin modificar la identidad facial.",
                    "restricciones": "No reemplazar el rostro, no alterar identidad, no cambiar la iluminación de referencia, no piel plástica, no anatomía deformada, no apariencia CGI."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/luxury-sofa-editorial.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-fashion", name: "Fashion", slug: "fashion" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Retrato en Sofá\nModifica el color del abrigo o bodysuit (ej. cambia 'Bodysuit blanco' por 'Bodysuit negro satinado'). Puedes adaptar la composición reclinada en el sofá ajustando los parámetros de pose.",
        reference_image_guide: "Usa una foto donde estés reclinada en un sofá para mantener la coherencia anatómica perfecta y la inclinación natural de la cabeza."
    },
    {
        id: "lifestyle-grunge-egirl-black-cat",
        type: "prompt",
        title: "REALISMO_Human — Grunge E-girl Black Cat",
        slug: "grunge-egirl-black-cat",
        summary: "Prompt de primer plano ultra-realista con estética soft-grunge/e-girl. El avatar posa para un selfie sosteniendo de forma cariñosa a un gato negro junto a su rostro.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven de estilo e-girl / soft-grunge, cabello rubio liso a los hombros con flequillo completo, pecas y rubor rosado, delineado de ojos winged negro, septum y collar plateado de daga alada con ojo.
*   **E(Entorno):** Interior doméstico sencillo con pared lisa de tono beige/crema.
*   **A(Acción / Postura):** De pie o sentada en primer plano de selfie, sosteniendo un gato negro mejilla con mejilla mientras apoya su mano suavemente sobre el pecho del gato.
*   **I(Iluminación):** Luz artificial tenue y cálida de lámpara ambiental, logrando sombras suaves pero definidas en el rostro y contraste de piel pálida con elementos oscuros.
*   **S(Sensación / Atmósfera):** Cozy, íntima, melancólica y alternativa.
*   **E(Estilo Visual):** Selfie de primer plano (close-up) de smartphone con texturas muy claras de pecas, cabello liso y pelo del gato.
*   **M(Composición / Cámara):** Formato vertical 4:5, encuadre cerrado sobre rostro y gato a nivel de ojos con fondo sutilmente difuminado.
*   **P(Postproducción):** Contraste medio-alto muy natural sin filtros robóticos ni piel plástica de render.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Grunge E-girl Black Cat",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer adulta joven, aproximadamente de 20 años, apariencia alternativa soft-grunge/e-girl.",
                    "cabello": "Rubio, hasta los hombros, liso y con flequillo completo cubriendo la frente.",
                    "rostro": "Piel clara y pálida con pecas visibles sobre nariz y mejillas, rubor rosado natural.",
                    "ojos": "Marrón intenso, delineado negro tipo winged eyeliner y máscara.",
                    "expresion": "Mirada suave y neutral directamente hacia la cámara.",
                    "vestimenta": "Tank top blanco acanalado sin mangas.",
                    "accesorios": "Cadena plateada con colgante de daga/espada alada y motivo de ojo; piercing septum circular y pequeño stud plateado en la nariz."
                },
                "E_Entorno": {
                    "escena": "Interior doméstico sencillo.",
                    "fondo": "Pared lisa beige o crema.",
                    "atmosfera": "Acogedora, íntima y ligeramente melancólica."
                },
                "A_Accion_Postura": {
                    "pose": "Selfie close-up, sosteniendo suavemente un gato negro junto al rostro.",
                    "interaccion": "El gato permanece mejilla con mejilla, mientras una mano sostiene delicadamente su pecho/cuello.",
                    "lenguaje_corporal": "Natural, cercano y relajado."
                },
                "I_Iluminacion": {
                    "tipo": "Luz artificial cálida y tenue.",
                    "fuente": "Lámpara ambiental.",
                    "caracteristicas": "Sombras suaves, highlights discretos y contraste marcado entre piel clara y elementos oscuros.",
                    "temperatura": "Cálida."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Soft grunge, íntimo, alternativo y cozy.",
                    "tono": "Selfie personal y espontáneo."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Retrato selfie fotorealista con estética soft-grunge/e-girl.",
                    "contraste": "Alto contraste entre piel pálida, cabello rubio y gato negro.",
                    "texturas": "Pecas, piel natural, cabello liso y pelaje suave del gato claramente definidos."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up selfie de rostro y gato.",
                    "angulo": "Frontal, ligeramente a nivel de los ojos.",
                    "foco": "Rostro y gato nítidos, fondo ligeramente desenfocado.",
                    "aspect_ratio": "4:5 vertical",
                    "camara": "Smartphone selfie aesthetic."
                },
                "P_Postproduccion": {
                    "nitidez": "Alta en rostro, ojos y pelaje.",
                    "color_grading": "Cálido, ligeramente contrastado, sin sobresaturación.",
                    "acabado_final": "Fotografía realista, natural y ligeramente imperfecta, sin piel plástica, CGI, ilustración, anatomía deformada, ojos artificiales ni apariencia excesivamente retocada."
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/grunge-egirl-black-cat.png",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-egirl", name: "E-Girl", slug: "e-girl" },
            { id: "t-pets", name: "Pets", slug: "pets" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Selfie con Gato\nModifica el color del gato (ej. cambia 'gato negro' por 'gato siamés'). Puedes retirar el flequillo o el piercing de septum editando las especificaciones del avatar.",
        reference_image_guide: "Usa una foto donde tu rostro y mejilla toquen el objeto o mascota de la toma original para mantener la coherencia espacial y de la mano sosteniendo el pelaje."
    },
    {
        id: "lifestyle-nyc-night-bridge",
        type: "prompt",
        title: "REALISMO_Human — NYC Night Bridge",
        slug: "nyc-night-bridge",
        summary: "Prompt de retrato nocturno ultra-realista frente al Manhattan Bridge y el skyline iluminado de Nueva York, con chaqueta oversized de cuero y brisa de río Sena.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Persona de cabello oscuro suelto y natural con mechones movidos por la brisa, chaqueta de cuero negro oversized y falda oscura. Identidad facial bloqueada.
*   **E(Entorno):** Orilla del río en Nueva York de noche junto a una barandilla metálica desgastada. Manhattan Bridge y skyline iluminado al fondo con luna creciente en cielo oscuro.
*   **A(Acción / Postura):** De pie junto a la barandilla con hombros orientados hacia la cámara, cabeza ligeramente inclinada hacia atrás y brisa moviendo cabello y ropa.
*   **I(Iluminación):** Luz nocturna natural de farolas de la ciudad y del puente, con reflejos dorados y azules fríos sobre el agua y chaqueta de cuero.
*   **S(Sensación / Atmósfera):** Contemplativa, elegante, urbana y cinematográfica.
*   **E(Estilo Visual):** Fotografía nocturna con estética de iPhone, texturas de metal desgastado, agua en movimiento y cuero muy detalladas.
*   **M(Composición / Cámara):** Retrato medio-largo vertical (9:16) con sujeto nítido a nivel de los ojos y fondo del puente perfectamente reconocible.
*   **P(Postproducción):** Contraste nocturno natural entre tonos cálidos y fríos, sin distorsión artificial y fidelidad total a la referencia.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — NYC Night Bridge",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Persona adulta basada estrictamente en la imagen de referencia.",
                    "identidad": "Preservar exactamente los rasgos faciales, proporciones, estructura del rostro y detalles únicos de la persona de referencia.",
                    "cabello": "Cabello oscuro, suelto y natural, con mechones movidos por la brisa y algunos cursando el rostro.",
                    "expresion": "Serena, segura y ligeramente contemplativa.",
                    "vestimenta": {
                        "top": "Chaqueta oversized de cuero negro.",
                        "details": "Mangas arrugadas, pliegues pesados y naturales, líneas de desgaste sutiles y reflejos irregulares de las luces nocturnas.",
                        "bottom": "Falda oscura con movimiento ligero provocado por el viento."
                    }
                },
                "E_Entorno": {
                    "escena": "Riverside nocturno en Nueva York junto a una barandilla frente al agua.",
                    "fondo": "Manhattan Bridge y skyline de Manhattan iluminado.",
                    "elementos": [
                        "Agua con pequeñas ondas",
                        "Reflejos blancos, dorados y azul frío",
                        "Edificios con ventanas iluminadas",
                        "Puente con cables iluminados",
                        "Barandilla metálica desgastada",
                        "Pequeñas marcas, arañazos y zonas de óxido",
                        "Luna creciente en cielo oscuro"
                    ],
                    "atmosfera": "Nocturna, urbana, cinematográfica y ligeramente brumosa."
                },
                "A_Accion_Postura": {
                    "pose": "De pie junto a la barandilla, postura relajada pero deliberadamente compuesta.",
                    "cuerpo": "Hombros ligeramente orientados hacia la cámara.",
                    "cabeza": "Inclinada suavemente hacia atrás.",
                    "movimiento": "Brisa ligera del río moviendo el cabello y el borde de la falda."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación nocturna ambiental natural de ciudad.",
                    "fuentes": [
                        "Farolas",
                        "Luces del Manhattan Bridge",
                        "Ventanas de edificios",
                        "Reflejos sobre el agua"
                    ],
                    "caracteristicas": "Highlights irregulares sobre el cuero, halos suaves alrededor de las luces y sombras profundas pero naturales.",
                    "temperatura": "Mezcla de tonos cálidos dorados y azules fríos."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Elegante, urbano, contemplativo y cinematográfico.",
                    "tono": "Retrato nocturno auténtico capturado espontáneamente frente al skyline."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Fotografía nocturna hiperrealista con estética auténtica de iPhone.",
                    "texturas": "Cuero con desgaste realista, metal rayado, agua en movimiento, ladrillo, vidrio y concreto.",
                    "ambiente": "Haze ligero sobre el río y pequeñas imperfecciones ópticas naturales.",
                    "acabado": "Sin apariencia de estudio ni CGI; realismo fotográfico de smartphone."
                },
                "M_Composicion_Camara": {
                    "plano": "Retrato medio a medio-largo.",
                    "angulo": "Eye-level ligeramente orientado hacia la figura.",
                    "encuadre": "Sujeto en primer plano con Manhattan Bridge y skyline claramente reconocibles detrás.",
                    "profundidad": "Sujeto nítido, skyline definido y agua con profundidad atmosférica natural.",
                    "aspect_ratio": "9:16 vertical",
                    "camara": "iPhone aesthetic, handheld, natural night photography."
                },
                "P_Postproduccion": {
                    "nitidez": "Alta en rostro, chaqueta y elementos cercanos.",
                    "color": "Contraste natural entre luces ámbar, blanco urbano y azul frío.",
                    "acabado_final": "Ultra fotorealista, con reflejos y movimiento naturales, preservando estrictamente la identidad facial de la referencia.",
                    "negative_prompt": [
                        "altered face",
                        "different identity",
                        "plastic skin",
                        "CGI",
                        "3D render",
                        "artificial skyline",
                        "overprocessed HDR",
                        "excessive blur",
                        "distorted anatomy",
                        "extra limbs",
                        "daylight",
                        "studio lighting",
                        "fake reflections"
                    ]
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/nyc-night-bridge.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-urban", name: "Urban", slug: "urban" },
            { id: "t-night", name: "Night Photography", slug: "night-photography" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Retrato en Puente de Nueva York\nModifica la chaqueta de cuero por otra prenda similar (ej. cambia 'Chaqueta oversized de cuero negro' por 'Gabardina clásica beige'). Puedes adaptar el skyline de fondo si deseas simular otra ciudad.",
        reference_image_guide: "Usa una foto donde tu rostro y cabello tengan movimiento sutil causado por brisa artificial o natural para coincidir con el dinamismo del prompt."
    },
    {
        id: "lifestyle-steamy-bathroom-selfie",
        type: "prompt",
        title: "REALISMO_Human — Steamy Bathroom Selfie",
        slug: "steamy-bathroom-selfie",
        summary: "Prompt ultra-realista de primer plano (close-up) selfie de smartphone dentro de un baño lleno de vapor. El avatar posa frente a espejo empañado con cabello mojado gris plateado y top de bikini blanco.",
        body_markdown: `
# Framework REALISMO_Human

*   **R(Render del Avatar):** Mujer joven, cabello gris plateado mojado y despeinado con mechones en la cara, mejillas sonrojadas, labios entreabiertos, top triangular de bikini blanco húmedo y collar dorado. Identidad facial bloqueada.
*   **E(Entorno):** Baño contemporáneo lleno de vapor. Ducha de vidrio con condensación y gotas de agua, espejo con salpicaduras y reflejos luminosos difusos de fondo.
*   **A(Acción / Postura):** De pie frente al espejo, un brazo elevado sobre la cabeza sosteniendo el móvil para tomar un selfie de primer plano. Gotas de agua visibles en cuello, hombros y torso.
*   **I(Iluminación):** Luz cinematográfica cálida-fría, con un halo dorado difuso cruzando el vapor del baño y sombras frías envolviendo la cabina de ducha.
*   **S(Sensación / Atmósfera):** Íntima, cinemática, sofisticada y de estética de fotograma de película de alta calidad.
*   **E(Estilo Visual):** Selfie de smartphone ultra cinematográfico y fotorealista, con definición extrema de piel húmeda, poros, gotas y cristales empañados.
*   **M(Composición / Cámara):** Plano close-up vertical (3:4), encuadre estrecho y centrado en rostro y hombros con bokeh suave de luces de fondo.
*   **P(Postproducción):** Contraste suave, colores ricos pero naturales (contraste Hollywood cálido/frío) y preservación estricta de rasgos faciales.
        `,
        prompt_text: JSON.stringify({
            "title": "REALISMO_Human — Steamy Bathroom Selfie",
            "framework_REALISMO_Human": {
                "R_Render_del_Avatar": {
                    "sujeto": "Mujer adulta joven basada estrictamente en la imagen de referencia.",
                    "identidad": "Preservar al 100% la estructura facial, proporciones, rasgos únicos, textura de piel y expresión de la referencia.",
                    "cabello": "Gris plateado, mojado, naturally despeinado, con mechones adheridos suavemente al rostro.",
                    "rostro": "Piel húmeda y realista, mejillas intensamente sonrojadas, labios ligeramente entreabiertos y mirada íntima hacia la cámara.",
                    "vestimenta": "Top triangular blanco de bikini, húmedo y ajustado, con reflejos naturales de humedad.",
                    "accesorios": "Delicado collar dorado con pequeño colgante."
                },
                "E_Entorno": {
                    "escena": "Baño contemporáneo lleno de vapor.",
                    "elementos": [
                        "Puerta de ducha de vidrio empañada",
                        "Condensación y gotas sobre el cristal",
                        "Espejo con pequeñas salpicaduras de agua",
                        "Reflejos luminosos desenfocados"
                    ],
                    "atmosfera": "Íntima, cinematográfica, cálida y envolvente."
                },
                "A_Accion_Postura": {
                    "pose": "De pie frente al espejo, tomando un selfie cercano.",
                    "brazos": "Un brazo elevado por encima de la cabeza.",
                    "lenguaje_corporal": "Relajado, elegante y natural.",
                    "mirada": "Directamente hacia la cámara del teléfono.",
                    "detalles": "Gotas de agua visibles sobre cuello, hombros y torso."
                },
                "I_Iluminacion": {
                    "tipo": "Iluminación cinematográfica cálida-fría.",
                    "fuente": "Luz dorada difusa atravesando el vapor.",
                    "caracteristicas": "Highlights cálidos sobre la piel y sombras frías envolviendo la ducha.",
                    "efecto": "Contraste Hollywood suave, profundidad atmosférica y reflejos naturales sobre humedad."
                },
                "S_Sensacion_Atmosfera": {
                    "mood": "Cinemático, íntimo, sofisticado y emocional.",
                    "tono": "Momento privado capturado con estética de película."
                },
                "E_visual_EstiloVisual": {
                    "estilo_general": "Selfie fotorealista ultra cinematográfico.",
                    "texturas": "Poros visibles, piel húmeda, gotas de agua, cabello mojado, condensación y cristal realistas.",
                    "profundidad": "Bokeh suave en las luces del fondo.",
                    "acabado": "Natural, inmersivo y de alta fidelidad."
                },
                "M_Composicion_Camara": {
                    "plano": "Close-up selfie, rostro y parte superior del torso.",
                    "angulo": "Perspectiva de smartphone a corta distancia.",
                    "encuadre": "Sujeto dominante en el encuadre, con el baño desenfocado alrededor.",
                    "aspect_ratio": "3:4 vertical",
                    "estilo_camara": "Smartphone selfie cinematográfico."
                },
                "P_Postproduccion": {
                    "realismo": "Fotorealismo extremo.",
                    "face_restore": true,
                    "face_reference_strength": 1.0,
                    "negative_prompt": [
                        "cartoon",
                        "painting",
                        "illustration",
                        "low quality",
                        "distortion",
                        "blurry",
                        "unnatural skin texture",
                        "dry skin",
                        "extra limbs",
                        "bad anatomy",
                        "flat lighting",
                        "CGI appearance",
                        "plastic skin"
                    ]
                }
            }
        }, null, 2),
        category: "Lifestyle",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        featured_image_url: "/images/prompts/steamy-bathroom-selfie.jpg",
        paywall_level: "free_preview",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        tags: [
            { id: "t-swimwear", name: "Swimwear", slug: "swimwear" },
            { id: "t-indoor", name: "Indoor", slug: "indoor" },
            { id: "t-lifestyle", name: "Lifestyle", slug: "lifestyle" }
        ],
        customization_guide: "# Personalización de Selfie en Baño Vaporoso\nModifica el color del bikini (ej. cambia 'bikini blanco' por 'bikini negro o rojo'). Puedes alterar el tono de cabello a otro color manteniendo el acabado húmedo.",
        reference_image_guide: "Usa una foto donde levantes un brazo por detrás de la cabeza y mantengas una expresión íntima para asegurar que la superposición anatómica sea totalmente fluida."
    }
];