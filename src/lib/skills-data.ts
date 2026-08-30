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
    }
];
