"use client";

import { Award, ShieldCheck, Sparkles } from "lucide-react";

export function CreatorBio() {
    return (
        <section className="py-20 bg-slate-900/40 border-y border-slate-800/60 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-purple-950/30 border border-purple-500/20 rounded-2xl p-8 md:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8">
                    
                    {/* Creator Avatar / Image */}
                    <div className="relative shrink-0">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-1 shadow-xl shadow-purple-500/20">
                            <div className="w-full h-full rounded-[14px] bg-slate-950 overflow-hidden flex items-center justify-center relative">
                                <img
                                    src="/images/prompts/reaisemp-edgy-streetwear-bouquet.png"
                                    alt="IA Builders Lab Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 p-2 bg-purple-600 text-white rounded-xl shadow-lg border border-purple-400">
                            <Award className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Bio Copy */}
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                            <Sparkles className="w-3.5 h-3.5" />
                            Quién Imparte el Workshop
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Equipo de Arquitectura & Prompt Engineering — IA Builders Lab
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                            Hemos creado, documentado y probado más de <strong>200 sistemas y prompts metodológicos</strong> para agencias, marcas de e-commerce y creadores de contenido en todo habla hispana. Nuestro enfoque elimina la improvisación y entrega frameworks visuales estables y reproducibles de nivel profesional.
                        </p>

                        <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-medium text-slate-400">
                            <span className="flex items-center gap-1.5 text-purple-300">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" /> +200 Prompts Metodológicos
                            </span>
                            <span className="flex items-center gap-1.5 text-purple-300">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Metodología REALISMO
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
