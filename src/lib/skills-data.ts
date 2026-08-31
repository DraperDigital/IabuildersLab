import { ContentItem } from "@/types/content";

export const SKILLS_DATA: ContentItem[] = [
    {
        id: "skill-lp-performance-analyzer",
        type: "system",
        title: "/lp-performance-analyzer — Auditoría de Conversión en Landing Pages",
        slug: "skill-lp-performance-analyzer",
        summary: "Skill ejecutable para Claude Code y Antigravity AGY CLI. Inspecciona la estructura, hooks visuales y puntos de fricción en Landing Pages para incrementar el porcentaje de conversión.",
        category: "Skills & CLI",
        system_type: "Claude / AGY Skill",
        process_state: "Estudio",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `---
name: lp-performance-analyzer
description: Analiza la estructura de una Landing Page, identifica puntos de fuga de conversión y genera recomendaciones de reordenación de bloques basados en datos de comportamiento.
---

# /lp-performance-analyzer

Cuando invoques este comando, Claude ejecutará una auditoría de CRO (Conversion Rate Optimization) de 7 puntos sobre el archivo o URL especificado.

## Instrucciones de Ejecución
1. Pasa el archivo de la landing page (\`page.tsx\`, \`index.html\`) o la URL.
2. Analiza los 7 pilares:
   - Hook de Cabecera (Headline + Subheadline)
   - Prueba Social Primitiva (Logos + Testimonios arriba del pliegue)
   - Mecanismo Único de Solución
   - Apilamiento de Beneficios vs Características
   - Reducción de Riesgo (Garantía)
   - Llamadas a la Acción (CTAs primarios y secundarios)
   - Fricción de Carga / Complejidad Visual

## Salida Esperada
- Calificación global de conversión (0/100).
- Los 3 mayores puntos de fuga de ventas detectados.
- Código listo para copiar/reordenar en tu proyecto.`,
        body_markdown: `
# /lp-performance-analyzer — Skill para Claude Code & Antigravity AGY CLI

Skill ejecutable de auditoría de conversiones e inspección de UI/UX en Landing Pages directamente en tu terminal.

---

## 💻 Instalación Rápida en Terminal (AGY / Claude Code)

Crea el archivo \`~/.claude/skills/lp-performance-analyzer.md\` o \`.agents/skills/lp-performance-analyzer.md\` en tu repositorio e incluye el siguiente código:

\`\`\`markdown
---
name: lp-performance-analyzer
description: Analiza la estructura de una Landing Page, identifica puntos de fuga de conversión y genera recomendaciones de reordenación de bloques basados en datos de comportamiento.
---

# /lp-performance-analyzer

Cuando invoques este comando, Claude ejecutará una auditoría de CRO (Conversion Rate Optimization) de 7 puntos sobre el archivo o URL especificado.

## Instrucciones de Ejecución
1. Pasa el archivo de la landing page (\`page.tsx\`, \`index.html\`) o la URL.
2. Analiza los 7 pilares:
   - Hook de Cabecera (Headline + Subheadline)
   - Prueba Social Primitiva (Logos + Testimonios arriba del pliegue)
   - Mecanismo Único de Solución
   - Apilamiento de Beneficios vs Características
   - Reducción de Riesgo (Garantía)
   - Llamadas a la Acción (CTAs primarios y secundarios)
   - Fricción de Carga / Complejidad Visual

## Salida Esperada
- Calificación global de conversión (0/100).
- Los 3 mayores puntos de fuga de ventas detectados.
- Código listo para copiar/reordenar en tu proyecto.
\`\`\`
`,
        tags: ["Claude Code", "AGY CLI", "Skills", "CRO", "Landing Page"] as any
    },
    {
        id: "skill-email-deliverability-toolkit",
        type: "system",
        title: "/email-deliverability-toolkit — Diagnóstico de Salud de Dominio & Spam",
        slug: "skill-email-deliverability-toolkit",
        summary: "Skill de terminal para auditar configuraciones DNS (SPF, DKIM, DMARC), analizar palabras gatillo de spam en copys fríos y garantizar la entrada a la bandeja de entrada primaria.",
        category: "Skills & CLI",
        system_type: "Claude / AGY Skill",
        process_state: "Estudio",
        level: "intermediate",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `---
name: email-deliverability-toolkit
description: Inspecciona textos de correo electrónico y registros DNS para evitar caer en la carpeta de spam en campañas de prospectación fría B2B.
---

# /email-deliverability-toolkit

## Instrucciones
1. Pasa el borrador de tu email frío o la configuración de tu dominio de envío.
2. Escanea palabras gatillo de spam (spam trigger words como "gratis", "ganar dinero", "garantizado").
3. Verifica la proporción de enlaces vs texto.
4. Genera una versión limpia de alta entregabilidad óptima para Gmail y Outlook Enterprise.`,
        body_markdown: `
# /email-deliverability-toolkit — Skill para Claude Code & Antigravity AGY CLI

Skill de análisis de salud de dominio, SPF/DKIM y prevención de spam en correos fríos B2B.

---

## 💻 Instalación Rápida en Terminal

Guarda este archivo en \`~/.claude/skills/email-deliverability-toolkit.md\`:

\`\`\`markdown
---
name: email-deliverability-toolkit
description: Inspecciona textos de correo electrónico y registros DNS para evitar caer en la carpeta de spam en campañas de prospectación fría B2B.
---

# /email-deliverability-toolkit

## Instrucciones
1. Pasa el borrador de tu email frío o la configuración de tu dominio de envío.
2. Escanea palabras gatillo de spam (spam trigger words como "gratis", "ganar dinero", "garantizado").
3. Verifica la proporción de enlaces vs texto.
4. Genera una versión limpia de alta entregabilidad óptima para Gmail y Outlook Enterprise.
\`\`\`
`,
        tags: ["Claude Code", "AGY CLI", "Skills", "Cold Email", "Spam"] as any
    },
    {
        id: "skill-code-architecture-auditor",
        type: "system",
        title: "/code-architecture-auditor — Auditoría de Código Next.js & Supabase",
        slug: "skill-code-architecture-auditor",
        summary: "Skill avanzada de ingeniería de software. Escanea repositorios Next.js App Router y Supabase para detectar fugas de seguridad en RLS, fallos de tipado TypeScript e ineficiencias de rendimiento.",
        category: "Skills & CLI",
        system_type: "Claude / AGY Skill",
        process_state: "Estudio",
        level: "advanced",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `---
name: code-architecture-auditor
description: Audita proyectos Next.js 14+ y Supabase en búsqueda de vulnerabilidades en Server Actions, políticas RLS faltantes e ineficiencias en Client Router Cache.
---

# /code-architecture-auditor

## Flujo de Trabajo
1. Analiza los archivos \`src/actions/*\`, \`src/app/*\` y \`supabase/migrations/*\`.
2. Verifica que todas las funciones exportadas de archivos con 'use server' sean \`async\`.
3. Comprueba que las tablas de Supabase tengan Row Level Security (RLS) habilitado.
4. Genera el informe de parches críticos y los comandos de corrección para la terminal.`,
        body_markdown: `
# /code-architecture-auditor — Skill para Claude Code & Antigravity AGY CLI

Skill de auditoría de arquitectura, parches de seguridad y refactorización en proyectos web de producción.

---

## 💻 Instalación Rápida en Terminal

Guarda este archivo en \`~/.claude/skills/code-architecture-auditor.md\`:

\`\`\`markdown
---
name: code-architecture-auditor
description: Audita proyectos Next.js 14+ y Supabase en búsqueda de vulnerabilidades en Server Actions, políticas RLS faltantes e ineficiencias en Client Router Cache.
---

# /code-architecture-auditor

## Flujo de Trabajo
1. Analiza los archivos \`src/actions/*\`, \`src/app/*\` y \`supabase/migrations/*\`.
2. Verifica que todas las funciones exportadas de archivos con 'use server' sean \`async\`.
3. Comprueba que las tablas de Supabase tengan Row Level Security (RLS) habilitado.
4. Genera el informe de parches críticos y los comandos de corrección para la terminal.
\`\`\`
`,
        tags: ["Claude Code", "AGY CLI", "Skills", "Next.js", "Supabase"] as any
    },
    {
        id: "skill-copywriting-draper-engine",
        type: "system",
        title: "/copywriting-draper-engine — Generador de Copywriting D.R.A.P.E.R.",
        slug: "skill-copywriting-draper-engine",
        summary: "Skill de generación de textos comerciales de alta conversión directamente desde la línea de comandos bajo la metodología D.R.A.P.E.R.",
        category: "Skills & CLI",
        system_type: "Claude / AGY Skill",
        process_state: "Estudio",
        level: "intermediate",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `---
name: copywriting-draper-engine
description: Transforma notas sueltas de producto en copys publicitarios y textos de ventas estructurados bajo la metodología D.R.A.P.E.R.
---

# /copywriting-draper-engine

## Instrucciones
1. Pasa la descripción cruda de tu producto o servicio.
2. Aplica la estructura D.R.A.P.E.R. (Diagnosticar, Rediseñar, Arquitectar, Programar, Encender, Refinar).
3. Devuelve 3 variaciones de titulares y el cuerpo del anuncio listo para campañas comerciales.`,
        body_markdown: `
# /copywriting-draper-engine — Skill para Claude Code & Antigravity AGY CLI

Skill de generación de copys de alta conversión directamente en la terminal.

---

## 💻 Instalación Rápida en Terminal

Guarda este archivo en \`~/.claude/skills/copywriting-draper-engine.md\`:

\`\`\`markdown
---
name: copywriting-draper-engine
description: Transforma notas sueltas de producto en copys publicitarios y textos de ventas estructurados bajo la metodología D.R.A.P.E.R.
---

# /copywriting-draper-engine

## Instrucciones
1. Pasa la descripción cruda de tu producto o servicio.
2. Aplica la estructura D.R.A.P.E.R. (Diagnosticar, Rediseñar, Arquitectar, Programar, Encender, Refinar).
3. Devuelve 3 variaciones de titulares y el cuerpo del anuncio listo para campañas comerciales.
\`\`\`
`,
        tags: ["Claude Code", "AGY CLI", "Skills", "Copywriting", "DRAPER"] as any
    },
    {
        id: "skill-video-silence-trimmer",
        type: "system",
        title: "/video-silence-trimmer — Recorte Automático de Silencios en Video",
        slug: "skill-video-silence-trimmer",
        summary: "Skill de automatización de edicion de video en terminal con FFMPEG. Detecta y elimina pausas y silencios en tomas en bruto para maximizar la retención.",
        category: "Skills & CLI",
        system_type: "Claude / AGY Skill",
        process_state: "Estudio",
        level: "beginner",
        is_published: true,
        is_featured: false,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `---
name: video-silence-trimmer
description: Genera comandos FFMPEG para recortar silencios y pausas de archivos de video raw.
---

# /video-silence-trimmer

## Instrucciones
1. Proporciona la ruta del video en bruto.
2. La skill detecta niveles de audio por debajo de -30dB por más de 0.4s.
3. Genera y ejecuta la línea de comando FFMPEG para exportar la toma recortada lista para edición final.`,
        body_markdown: `
# /video-silence-trimmer — Skill para Claude Code & Antigravity AGY CLI

Skill de automatización para creadores de video e ingenieros multimedia.

---

## 💻 Instalación Rápida en Terminal

Guarda este archivo en \`~/.claude/skills/video-silence-trimmer.md\`:

\`\`\`markdown
---
name: video-silence-trimmer
description: Genera comandos FFMPEG para recortar silencios y pausas de archivos de video raw.
---

# /video-silence-trimmer

## Instrucciones
1. Proporciona la ruta del video en bruto.
2. La skill detecta niveles de audio por debajo de -30dB por más de 0.4s.
3. Genera y ejecuta la línea de comando FFMPEG para exportar la toma recortada lista para edición final.
\`\`\`
`,
        tags: ["Claude Code", "AGY CLI", "Skills", "Video", "FFMPEG"] as any
    },
    {
        id: "skill-web-as-a-service-studio",
        type: "system",
        title: "/crear-web-como-servicio — SOP: Web-as-a-Service Studio (Agencia Autónoma)",
        slug: "skill-web-as-a-service-studio",
        summary: "Sistema integral para construir, equipar con IA y desplegar sitios web premium para clientes B2B (clínicas, restaurantes, firmas legales). Permite crear activos digitales de alto valor percibido integrando asistentes conversacionales y calculadoras interactivas en Hostinger.",
        category: "Skills & CLI",
        system_type: "Claude / AGY Skill",
        process_state: "Estudio",
        level: "advanced",
        is_published: true,
        is_featured: true,
        paywall_level: "access",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        prompt_text: `---
name: crear-web-como-servicio
description: Build premium client websites to SELL to businesses on Hostinger, guided end to end. (a) CONNECT the Hostinger account. (b) BUILD an agency-grade static website (HTML/CSS/vanilla JS, no build) for any business niche - solar installers, clinics, restaurants, law firms, gyms - that looks like a $30.000 project. (c) IMAGES - free stock (Openverse) or bespoke AI images via an OpenAI key. (d) AI FEATURES - add a Gemini support chat assistant, a document/photo reader (e.g. read an electricity bill), interactive calculators and lead capture, on the free Gemini tier with a secret-safe server proxy. (e) PUBLISH to Hostinger and connect a domain to sell it. Use whenever the user wants a web for a client or business, a web to sell as a service, an agency landing, to add an AI assistant or calculator to a site, or to fill a site with images. Triggers include crea una web para un cliente, una web para vender, una landing de agencia, anade un asistente de IA, una calculadora, rellena la web con imagenes.
---

# Web-as-a-Service Studio · v1 — connect · build · images · AI · publish

Five **independent capabilities** for building **premium websites you sell to businesses**. This is the "$38.000 web" play: create a studio-grade site for a niche (solar installers, clinics, restaurants, law firms…), make it feel expensive, add real AI features most agencies can't, and sell it. Same studio logic as the sibling skills — read which door the person walked through, do that, verify it, stop.

- 🔌 **Connect** the Hostinger account to Claude.
- 🎨 **Build** an agency-grade static site for a business niche (wow factor).
- 🖼️ **Images** — free stock (Openverse) or bespoke AI (OpenAI gpt-image key).
- 🧠 **AI features** — Gemini support chat, document/photo reader, interactive calculators, lead capture, on the free tier with a secret-safe proxy.
- 🚀 **Publish** to Hostinger and connect a domain to sell it.

---

## THE GOLDEN RULE: do only what was asked, then stop

- *"conéctame Hostinger"* → only connect and verify.
- *"hazme una web para una empresa de X"* → only build it (placeholders for images unless asked). Don't add AI, don't deploy.
- *"rellénala con imágenes"* → only images (stock, or AI if they gave a key).
- *"añádele un asistente de IA / una calculadora"* → only the AI feature.
- *"publícala / ponle el dominio"* → only publish.`,
        body_markdown: `# SOP: Web-as-a-Service Studio (Agencia Autónoma)

**Ubicación en Plataforma:** Pestaña "Sistemas" > Agentes de Desarrollo  
**Descripción:** Sistema integral para construir, equipar con IA y desplegar sitios web premium para clientes B2B (clínicas, restaurantes, firmas legales). Permite crear activos digitales de alto valor percibido integrando asistentes conversacionales y calculadoras interactivas, utilizando un servidor proxy PHP seguro en Hostinger.

---

## 🚀 Fases de Ejecución D.R.A.P.E.R.™ (Para el Operador)

### 1. Diagnosticar (Estrategia y Nicho)
Identifica el nicho del cliente final y la "funcionalidad ancla" que justificará el precio de venta (ej. una calculadora de ahorro solar o un asistente de reservas para un restaurante).

### 2. Rediseñar (Instalación de la Skill)
Crea una nueva carpeta en tu entorno local (ej. \`~/.claude/skills/waas-studio\`) y guarda el código exacto proporcionado al final de este documento en un archivo llamado \`SKILL.md\`.

### 3. Arquitectar & Programar (El Bucle de Ejecución Estricta)
Esta skill opera bajo la regla de "Hacer y Detenerse". Las capacidades no se encadenan por reflejo. Ejecuta estos comandos en tu terminal paso a paso según lo necesites:

- **Conectar:** \`Conéctame Hostinger.\`
- **Construir Base:** \`Hazme una web para una empresa de [NICHO].\`
- **Activos Visuales:** \`Rellénala con imágenes.\` *(Puedes añadir tu API key de OpenAI para imágenes a medida).*
- **Añadir Valor (IA):** \`Añade un asistente de IA / una calculadora que lea documentos.\`

### 4. Encender (Despliegue)
Una vez que las fases anteriores estén completas, ejecuta la publicación:
- **Comando:** \`Publícala y ponle mi dominio.\`

### 5. Refinar (Verificación)
Solicita al agente que audite el trabajo final: *Verifica que el sitio esté listo y el chat responda.* La skill probará el chat de soporte, validará la captura de leads y asegurará que no haya errores de consola en vivo.

---

## 💻 Código Fuente: SKILL.md
*Copia este bloque exacto, sin modificar una sola coma, y guárdalo como \`SKILL.md\` en tu directorio de habilidades de Claude (\`~/.claude/skills/crear-web-como-servicio/SKILL.md\` o \`.agents/skills/crear-web-como-servicio/SKILL.md\`).*

\`\`\`markdown
---
name: crear-web-como-servicio
description: Build premium client websites to SELL to businesses on Hostinger, guided end to end. (a) CONNECT the Hostinger account. (b) BUILD an agency-grade static website (HTML/CSS/vanilla JS, no build) for any business niche - solar installers, clinics, restaurants, law firms, gyms - that looks like a $30.000 project. (c) IMAGES - free stock (Openverse) or bespoke AI images via an OpenAI key. (d) AI FEATURES - add a Gemini support chat assistant, a document/photo reader (e.g. read an electricity bill), interactive calculators and lead capture, on the free Gemini tier with a secret-safe server proxy. (e) PUBLISH to Hostinger and connect a domain to sell it. Use whenever the user wants a web for a client or business, a web to sell as a service, an agency landing, to add an AI assistant or calculator to a site, or to fill a site with images. Triggers include crea una web para un cliente, una web para vender, una landing de agencia, anade un asistente de IA, una calculadora, rellena la web con imagenes.
---

# Web-as-a-Service Studio · v1 — connect · build · images · AI · publish

Five **independent capabilities** for building **premium websites you sell to
businesses**. This is the "$38.000 web" play: create a studio-grade site for a
niche (solar installers, clinics, restaurants, law firms…), make it feel
expensive, add real AI features most agencies can't, and sell it. Same studio
logic as the sibling skills — read which door the person walked through, do
that, verify it, stop.

- 🔌 **Connect** the Hostinger account to Claude.
- 🎨 **Build** an agency-grade static site for a business niche (wow factor).
- 🖼️ **Images** — free stock (Openverse) or bespoke AI (OpenAI gpt-image key).
- 🧠 **AI features** — Gemini support chat, document/photo reader, interactive
  calculators, lead capture, on the free tier with a secret-safe proxy.
- 🚀 **Publish** to Hostinger and connect a domain to sell it.

**What makes this different from the other skills:** the site is for a CLIENT,
not the owner. The value is *agency-grade craft + AI features that justify the
price*. The reference is the solar-panels site: a premium landing + an AI
assistant + an interactive savings calculator that reads the customer's
electricity bill with AI. This skill reproduces that playbook for any niche.

It inherits the full build + image engine (archetypes, effects, gotchas,
Openverse stock, OpenAI gpt-image, deploy) and adds the **AI-features layer**
(\`reference/14-ai-features.md\`) on top.

---

## THE GOLDEN RULE: do only what was asked, then stop

- *"conéctame Hostinger"* → only connect and verify.
- *"hazme una web para una empresa de X"* → only build it (placeholders for
  images unless asked). Don't add AI, don't deploy.
- *"rellénala con imágenes"* → only images (stock, or AI if they gave a key).
- *"añádele un asistente de IA / una calculadora"* → only the AI feature.
- *"publícala / ponle el dominio"* → only publish.

At the end offer **one** sentence naming the next step. Never chain by reflex.
Read the state each time: connected? project exists? has images? has AI? live?

---

## Route the request → capability

| What they say / the situation | Capability | Primary ref |
|---|---|---|
| "conéctame Hostinger", "vincula mi hosting" | 🔌 **Connect** | \`12-hostinger-connect.md\` |
| "hazme una web para [empresa/nicho]", no project yet | 🎨 **Build** | \`02-archetypes.md\` + \`06\` + \`01\` + \`15-selling-the-web.md\` |
| A project exists and "cambia…/ añade sección/ otro color" | ✏️ **Edit** | existing files + invariants |
| "rellénala con imágenes", "fotos de stock", "genera imágenes con IA" | 🖼️ **Images** | \`05-image-and-asset-pipeline.md\` + \`11-ai-image-generation.md\` |
| "añade un asistente de IA / un chat", "una calculadora", "que lea la factura/el documento", "captura de leads" | 🧠 **AI features** | \`14-ai-features.md\` |
| "publícala / súbela / ponle mi dominio" | 🚀 **Publish** | \`13-hostinger-deploy.md\` |
| "¿qué nicho vendo?", "¿a quién se la vendo?" | 🎯 **Sell** | \`15-selling-the-web.md\` |
| "¿está lista?", "se ve rota/vieja", "el chat no responde" | ✅ **Verify** | \`08\`, \`10\`, \`07\`, \`14\` §Verify |

Capabilities compose when the user asks for the whole thing ("conéctame y
súbeme una web para una clínica con asistente de IA e imágenes" → 🔌 → 🎨 → 🖼️
→ 🧠 → 🚀). Compose because they asked, never by reflex.

---

## The build sequence (a sellable site)

1. **Pick the niche and the pitch.** What business is this for? The niche
   decides the archetype, the copy and — crucially — which AI feature makes it
   sellable (\`15-selling-the-web.md\`). A solar installer wants a bill-reading
   savings calculator; a clinic wants an appointment assistant; a restaurant
   wants a reservation/AI-menu helper.
2. **Build the premium site** with ONE archetype (\`02-archetypes.md\`, honor the
   diversity rules \`06\`), agency-grade, per \`01-stack-and-conventions.md\` and
   the invariants. Ship it with tasteful placeholders and real, specific copy —
   never lorem ipsum, never invented client testimonials presented as real
   (mark demo content as demo).
3. **Images** (\`05\` + \`11\`): stock by default (free), OpenAI gpt-image if the
   user provides a key and wants bespoke. Everything ends as WebP.
4. **AI features** (\`14-ai-features.md\`): the differentiator. Add the Gemini
   support chat and/or the document reader + interactive calculator + lead
   capture, on the free tier, with the secret-safe PHP proxy, rate limiting and
   \`setup.php\` for the key. This is what makes the site worth thousands.
5. **Publish** (\`13\`) and, to sell it, connect the plan's free domain so the
   demo has a real, professional URL (\`15\`).

Each step is independent — run only what's asked.

---

## Always-on invariants

**Communication:** the user is **non-technical**. Zero jargon — never say
"proxy", "endpoint", "API", "MCP", "deploy". Say "el asistente", "la clave de la
IA", "los archivos del diseño", "publicar la web". Run every command yourself;
the only manual steps are browser clicks (Hostinger login, pasting an API key
into \`setup.php\`). Announce before acting, celebrate milestones (✅), never show
a raw error, verify before claiming.

**Web quality invariants** (inherited, full detail in \`04-critical-gotchas.md\`):
classic \`<script defer>\` + IIFE + \`window.__BRAND__\`; \`.htaccess\` in every root +
\`?v=YYYYMMDD\`; native scroll by default; reduced-motion gates only intrusive
effects (Windows ships it ON — \`07\`); all images WebP; hardcode content in HTML
(JS enriches); \`safe()\` around inits; IntersectionObserver threshold ≤ 0.05 +
timeout; splash double safety net; content first, animation second; robustness >
spectacle; **one archetype, never two**; verify before claiming.

**AI-feature invariants** (full detail in \`14-ai-features.md\`):
1. **The AI key lives ONLY on the server.** Never in HTML/JS. The browser talks
   to a same-domain PHP proxy; the key sits outside \`public_html\` or in a \`.php\`
   that's never served as text. Grep the deploy before publishing.
2. **Free Gemini tier by default**, with per-IP and a global daily cap that
   protects the quota (the proven pattern). Say plainly that a client with real
   traffic should move to a paid key, and that the free tier trains on submitted
   content — so a feature handling personal data (bills, documents) belongs on a
   paid key before real customers use it.
3. **Never invent what the AI extracts.** A missing field is "—", not a guess.
   The AI reads real documents; editorial/marketing copy stays separate.
4. **Graceful fallback always.** If the key isn't set or the AI fails, the
   feature degrades to a human message or a manual form — never a dead UI.
5. **Lead capture is honest.** If the site collects emails/phones, say what
   happens with them and store them where only the owner can read them
   (\`lead.php\` pattern, protected \`datos/\`).

**Selling invariants** (\`15-selling-the-web.md\`): demo content is clearly demo;
never fabricate a real business's reviews, certifications or claims; the $38.000
figure is Clutch's average, cited honestly, not a promise of earnings.

If an invariant and a flourish conflict, the invariant wins.

---

## Environment

- 🔌 Connect needs **Node.js 24+** (\`scripts/diagnostico.*\`).
- 🎨 Build needs **Python 3** (helpers, WebP, local preview). Degrades
  gracefully without it (\`09\`).
- 🖼️ AI images need **Node 18+** and the user's **OpenAI key** (\`11\`).
- 🧠 AI features run on the **PHP of the Hostinger plan itself** (no VPS): the
  proxy is plain PHP + cURL against Gemini's free tier. Needs a **Gemini API
  key** the owner gets free from Google AI Studio, pasted once via \`setup.php\`.
- Install what's missing yourself; only ask the user to install something if
  every automatic path failed.
\`\`\`
`,
        tags: ["Claude Code", "AGY CLI", "Skills", "WaaS", "Agencia IA", "Hostinger"] as any
    }
];
