import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles, CameraOff, Layers } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { CASE_STUDIES } from "@/lib/case-studies-data";

export const metadata: Metadata = {
    title: {
        absolute: "Casos de Estudio · Campañas 100% IA con el método REALISMO | IA Builders Lab",
    },
    description:
        "Explora las 11 campañas completas creadas 100% con inteligencia artificial: modelos virtuales con identidad fija, productos reales sin deformaciones y cero programas de edición.",
};

export default function CaseStudiesIndexPage() {
    return (
        <div className="min-h-screen bg-[#090A0F] text-[#F5F2EB] flex flex-col font-sans overflow-x-hidden">
            <PublicHeader />

            <main className="flex-1">
                {/* Hero Header */}
                <section className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-1/4 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[150px]" />
                    <div className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-500/10 rounded-full blur-[140px]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="max-w-3xl space-y-5">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-200 text-xs sm:text-sm font-mono uppercase tracking-[0.2em]">
                                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                                <span>Método REALISMO · Serie documental</span>
                            </div>

                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04]">
                                Casos de estudio
                            </h1>

                            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
                                Once campañas completas —de lujo, producto digital y modo comercial— hechas 100% con inteligencia artificial. Cinco modelos virtuales que conservan su identidad campaña tras campaña, productos reales y ningún programa de edición.
                            </p>

                            <div className="pt-2 flex flex-wrap gap-3 text-xs sm:text-sm font-mono text-slate-300">
                                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
                                    <Layers className="w-4 h-4 text-purple-400" />
                                    11 campañas publicadas · 99 piezas finales
                                </span>
                                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10">
                                    <CameraOff className="w-4 h-4 text-amber-400" />
                                    0 cámaras · 0 Photoshop
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Grid de las 11 campañas */}
                <section className="py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {CASE_STUDIES.map((study) => (
                                <Link
                                    key={study.slug}
                                    href={study.href}
                                    className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/12 bg-[#11131C] hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                >
                                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                                        <Image
                                            src={study.coverImage}
                                            alt={`${study.title} — ${study.subtitle}`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#11131C] via-[#11131C]/20 to-transparent" />

                                        {/* Badge superior */}
                                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                                            <span className="px-3 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md text-xs font-mono font-bold text-white">
                                                Campaña {study.number}
                                            </span>
                                            <span className="px-3 py-1 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-[11px] font-mono text-slate-200">
                                                {study.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                                        <div className="space-y-2">
                                            <p
                                                className="text-xs font-mono uppercase tracking-wider font-semibold"
                                                style={{ color: study.accentColor }}
                                            >
                                                {study.subtitle}
                                            </p>
                                            <h2 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                                                {study.title}
                                            </h2>
                                            <p className="text-sm text-slate-300/85 leading-relaxed font-light">
                                                {study.description}
                                            </p>
                                        </div>

                                        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-purple-300 group-hover:text-white transition-colors">
                                            <span>Ver caso de estudio paso a paso</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
