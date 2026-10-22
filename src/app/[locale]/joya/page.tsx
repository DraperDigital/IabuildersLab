import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowDown, ArrowRight, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { JOYA_PROMPTS, getAllJoyaPromptsFormatted } from "@/lib/joya-prompts-data";
import { JoyaCopyAllButton, JoyaPromptCard } from "@/components/joya/joya-interactive";

export const metadata: Metadata = {
  title: "8 prompts para fotos de joyería de lujo con IA · IA Builders Lab",
  description:
    "Prompts completos para fotografiar joyería con IA usando la foto real de la pieza. Estudio, macro, lujo oscuro, flotante y más.",
  openGraph: {
    title: "8 prompts para fotos de joyería de lujo con IA · IA Builders Lab",
    description:
      "Prompts completos para fotografiar joyería con IA usando la foto real de la pieza. Estudio, macro, lujo oscuro, flotante y más.",
    images: [
      {
        url: "/joya/02-estudio.jpg",
        width: 896,
        height: 1200,
        alt: "Fotografía de estudio de alta joyería con inteligencia artificial",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JoyaDeliveryPage() {
  const allPromptsText = getAllJoyaPromptsFormatted();

  return (
    <div
      className="font-joya-sans min-h-screen bg-[#0a0908] text-[#f2ede3] flex flex-col selection:bg-[#d4b46a] selection:text-[#0a0908] overflow-x-hidden"
    >
      <PublicHeader />

      <main className="flex-1 w-full">
        {/* =========================================================================
            4.1 HERO
        ========================================================================= */}
        <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[rgba(242,237,227,0.1)] overflow-hidden">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#d4b46a]/10 rounded-full blur-[140px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Copy column */}
              <div className="lg:col-span-7 flex flex-col items-start gap-5">
                {/* Monospace Green-Dot Brand Signature */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14110e] border border-[rgba(242,237,227,0.16)] font-joya-mono text-xs text-[#e8e1d3] tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
                  <span>iabuilders.lab / joya</span>
                </div>

                {/* Hero Title */}
                <h1 className="font-joya-serif font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-[#f2ede3] leading-[1.08]">
                  8 prompts para fotos de joyería de lujo
                </h1>

                {/* Hero Subtitle */}
                <p className="text-lg sm:text-xl text-[#e8e1d3] font-normal leading-relaxed max-w-xl">
                  Con la foto real de la pieza. Sin que la IA invente otra.
                </p>

                {/* Action button */}
                <div className="pt-2">
                  <a
                    href="#prompts"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#d4b46a] text-[#0a0908] font-bold text-sm tracking-wide transition-all duration-200 hover:bg-[#e6cf96] active:scale-[0.98] shadow-[0_4px_25px_rgba(212,180,106,0.3)]"
                  >
                    <span>Ver los prompts</span>
                    <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* Cover Image column */}
              <div className="lg:col-span-5 w-full flex justify-center">
                <div className="relative w-full max-w-[360px] aspect-[3/4] rounded-[18px] overflow-hidden border border-[rgba(242,237,227,0.16)] bg-[#14110e] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                  <Image
                    src="/joya/00-portada-flotante.jpg"
                    alt="Joya de alta gama con esmeraldas y diamantes amarillos flotando sobre pedestal de mármol negro con pétalos dorados"
                    fill
                    priority
                    sizes="(max-width: 768px) 340px, 420px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-[#0a0908]/85 backdrop-blur-md border border-[rgba(242,237,227,0.14)] flex items-center justify-between">
                    <span className="text-[11px] font-joya-mono text-[#b0a690] uppercase tracking-wider">
                      Método REALISMO
                    </span>
                    <span className="text-xs font-joya-mono text-[#d4b46a] font-bold">
                      Pieza 100% fiel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4.2 LA REGLA (EL ERROR)
        ========================================================================= */}
        <section className="py-14 sm:py-20 border-b border-[rgba(242,237,227,0.1)] bg-[#0c0b09]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
              <span className="inline-block text-xs font-joya-mono uppercase tracking-[0.2em] text-[#d4b46a] font-bold mb-3">
                El problema de la mayoría
              </span>
              <h2 className="font-joya-serif font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#f2ede3] leading-snug">
                La IA te inventa otra joya
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#e8e1d3] leading-relaxed">
                Si el prompt no lleva la foto de la pieza, la IA diseña una nueva. Se ve de lujo, pero tu cliente no la puede comprar. Estos 8 prompts parten de una regla: adjuntas la foto real de la pieza y le prohíbes a la IA rediseñarla.
              </p>
            </div>

            {/* Side-by-Side Comparison (Stacked on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Left / Top: Generico */}
              <div className="rounded-[18px] bg-[rgba(20,17,14,0.9)] border border-[rgba(242,237,227,0.14)] p-4 sm:p-5 flex flex-col gap-4 shadow-[0_8px_25px_rgba(0,0,0,0.5)]">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-[rgba(242,237,227,0.1)] bg-[#14110e]">
                  <Image
                    src="/joya/01-generico.jpg"
                    alt="Anillo de diamantes generado con prompt genérico sin imagen de referencia"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-[11px] font-joya-mono font-bold uppercase tracking-wider text-red-300">
                    Prompt genérico
                  </div>
                </div>
                <div className="px-1">
                  <p className="text-sm font-medium text-[#e8e1d3]">
                    Una joya bonita… que no vendes.
                  </p>
                  <p className="text-xs text-[#b0a690] mt-1 font-light">
                    La IA inventa proporciones, gemas y cortes que no existen en tu catálogo.
                  </p>
                </div>
              </div>

              {/* Right / Bottom: Con pieza real */}
              <div className="rounded-[18px] bg-[rgba(20,17,14,0.9)] border border-[#d4b46a]/40 p-4 sm:p-5 flex flex-col gap-4 shadow-[0_8px_30px_rgba(212,180,106,0.12)]">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border border-[#d4b46a]/30 bg-[#14110e]">
                  <Image
                    src="/joya/02-estudio.jpg"
                    alt="Collar de joyería fina con esmeraldas y diamantes amarillos sobre piedra volcánica negra en estudio"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#d4b46a] text-[#0a0908] text-[11px] font-joya-mono font-bold uppercase tracking-wider shadow-sm">
                    Con la pieza real
                  </div>
                </div>
                <div className="px-1">
                  <p className="text-sm font-semibold text-[#f2ede3]">
                    La misma joya. Otra escena.
                  </p>
                  <p className="text-xs text-[#b0a690] mt-1 font-light">
                    Conservando exactamente el engaste, piedras, acabados y proporciones originales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4.3 CÓMO USARLOS (4 PASOS NUMERADOS)
        ========================================================================= */}
        <section className="py-14 sm:py-20 border-b border-[rgba(242,237,227,0.1)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <span className="inline-block text-xs font-joya-mono uppercase tracking-[0.2em] text-[#d4b46a] font-bold mb-3">
                Protocolo paso a paso
              </span>
              <h2 className="font-joya-serif font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#f2ede3]">
                Cómo usarlos
              </h2>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Step 1 */}
              <div className="rounded-[18px] bg-[rgba(20,17,14,0.9)] border border-[rgba(242,237,227,0.14)] p-5 sm:p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d4b46a]/15 border border-[#d4b46a]/40 text-[#d4b46a] font-joya-mono font-bold text-sm flex items-center justify-center">
                  1
                </div>
                <p className="text-sm sm:text-base text-[#f2ede3] leading-relaxed">
                  <strong className="text-[#d4b46a] font-semibold">Abre tu generador de imagen.</strong> Los probamos en Nano Banana Pro.
                </p>
              </div>

              {/* Step 2 */}
              <div className="rounded-[18px] bg-[rgba(20,17,14,0.9)] border border-[rgba(242,237,227,0.14)] p-5 sm:p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d4b46a]/15 border border-[#d4b46a]/40 text-[#d4b46a] font-joya-mono font-bold text-sm flex items-center justify-center">
                  2
                </div>
                <p className="text-sm sm:text-base text-[#f2ede3] leading-relaxed">
                  <strong className="text-[#d4b46a] font-semibold">Adjunta la foto real de la pieza como imagen 1.</strong> Fondo limpio, bien enfocada, de frente. Si tienes otra de lado, adjúntala como imagen 2.
                </p>
              </div>

              {/* Step 3 */}
              <div className="rounded-[18px] bg-[rgba(20,17,14,0.9)] border border-[rgba(242,237,227,0.14)] p-5 sm:p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d4b46a]/15 border border-[#d4b46a]/40 text-[#d4b46a] font-joya-mono font-bold text-sm flex items-center justify-center">
                  3
                </div>
                <p className="text-sm sm:text-base text-[#f2ede3] leading-relaxed">
                  <strong className="text-[#d4b46a] font-semibold">Copia y pega el prompt completo sin cambiarle nada.</strong>
                </p>
              </div>

              {/* Step 4 */}
              <div className="rounded-[18px] bg-[rgba(20,17,14,0.9)] border border-[rgba(242,237,227,0.14)] p-5 sm:p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d4b46a]/15 border border-[#d4b46a]/40 text-[#d4b46a] font-joya-mono font-bold text-sm flex items-center justify-center">
                  4
                </div>
                <p className="text-sm sm:text-base text-[#f2ede3] leading-relaxed">
                  <strong className="text-[#d4b46a] font-semibold">Pide la imagen en 4:5.</strong> Si la joya sale cambiada (piedras de más, otro metal, una pieza de menos), descarta esa imagen. Esa es la regla del método.
                </p>
              </div>
            </div>

            {/* Note below */}
            <div className="mt-8 p-4 sm:p-5 rounded-xl bg-[#14110e] border border-[#d4b46a]/25 text-center">
              <p className="text-xs sm:text-sm text-[#e8e1d3] italic font-normal">
                &ldquo;Usa la misma pieza en las 8 escenas. Así ves que el método cambia la escena, no la joya.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4.4 LOS 8 PROMPTS
        ========================================================================= */}
        <section id="prompts" className="py-16 sm:py-24 scroll-mt-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header with Copy All Button */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-[rgba(242,237,227,0.12)]">
              <div>
                <span className="inline-block text-xs font-joya-mono uppercase tracking-[0.2em] text-[#d4b46a] font-bold mb-2">
                  Colección completa
                </span>
                <h2 className="font-joya-serif font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#f2ede3]">
                  Los 8 prompts
                </h2>
                <p className="text-xs sm:text-sm text-[#b0a690] mt-1.5 font-light">
                  Listos para copiar. Mantenidos en inglés para máxima fidelidad con el motor de IA.
                </p>
              </div>

              {/* Master Copy All Button */}
              <div className="self-start sm:self-auto">
                <JoyaCopyAllButton fullText={allPromptsText} />
              </div>
            </div>

            {/* 8 Cards List */}
            <div className="mt-10 flex flex-col gap-8 sm:gap-10">
              {JOYA_PROMPTS.map((item, index) => (
                <JoyaPromptCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            4.5 SIGUIENTE PASO (CTA)
        ========================================================================= */}
        <section className="py-16 sm:py-24 border-t border-[rgba(242,237,227,0.12)] bg-[#0c0b09] relative overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#d4b46a]/10 rounded-full blur-[140px]" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-6">
            <span className="inline-block text-xs font-joya-mono uppercase tracking-[0.2em] text-[#d4b46a] font-bold">
              El método completo
            </span>

            <h2 className="font-joya-serif font-black text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#f2ede3] leading-snug">
              Esto fue con una joya. Imagina con un personaje.
            </h2>

            <p className="text-sm sm:text-base text-[#e8e1d3] leading-relaxed max-w-2xl font-light">
              Los 8 prompts salen del método REALISMO: 8 decisiones que tomas antes de escribir el prompt. Es lo que hace que la pieza, o tu personaje, no cambie de una imagen a otra.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              {/* Primary button */}
              <Link
                href="/realismo-blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#d4b46a] text-[#0a0908] font-bold text-sm tracking-wide transition-all duration-200 hover:bg-[#e6cf96] active:scale-[0.98] shadow-[0_4px_25px_rgba(212,180,106,0.3)]"
              >
                <span>Conoce la guía REALISMO</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              {/* Secondary button */}
              <Link
                href="/prompts"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-[#f2ede3] hover:text-[#d4b46a] transition-colors"
              >
                <span>Explora el Vault gratis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
