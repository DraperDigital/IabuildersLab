"use client";

import { Sparkles, Cpu, Bot, Share2, Clock, CheckCircle2, Gift, Zap } from "lucide-react";

interface BonusItem {
    tag: string;
    tagColor: "blue" | "emerald" | "amber";
    title: string;
    subtitle: string;
    description: string;
    value: string;
    icon: any;
    features: string[];
    isUnderConstruction?: boolean;
}

const BONUSES: BonusItem[] = [
    {
        tag: "ACCESO INMEDIATO",
        tagColor: "emerald",
        title: "Pack de Skills Oficiales para IA y Agentes",
        subtitle: "Instala la metodología en tus herramientas de IA",
        description: "Las mismas skills propietarias de IA Builders Lab listas para instalar en tus asistentes de IA. Entrena a ChatGPT, Claude o tus agentes para que piensen, redacten y ejecuten con la voz, reglas y gobernanza de tu marca.",
        value: "$197 USD",
        icon: Cpu,
        features: [
            "Skills pre-configuradas para Claude, ChatGPT y Cursor/Antigravity",
            "Inyección automática de tu archivo design-system.md en prompts",
            "Elimina el tono robótico o genérico de raíz"
        ]
    },
    {
        tag: "EN CONSTRUCCIÓN · ACCESO ANTICIPADO",
        tagColor: "amber",
        title: "Sistema Automatizado de Creación de Contenido con IA",
        subtitle: "De la idea a la pieza final en minutos",
        description: "Un pipeline automatizado que toma los pilares narrativos de tu calendario y genera en lote los borradores de carruseles, posts, hilos y guiones de video listos para revisión humana, sin bloquearte frente a la pantalla en blanco.",
        value: "$297 USD",
        icon: Bot,
        isUnderConstruction: true,
        features: [
            "Generador de ganchos y arcos narrativos anti-cliché",
            "Estructuración de carruseles e hilos de alto impacto",
            "Briefs visuales listos para alimentar generadores de imagen y video"
        ]
    },
    {
        tag: "INTEGRACIÓN LISTA",
        tagColor: "blue",
        title: "Automatización de Posteo y Distribución en Redes",
        subtitle: "Publica en automático desde una carpeta o Google Sheet",
        description: "La tubería técnica que conecta tu calendario editorial con tus perfiles de redes sociales. Dispara publicaciones programadas o instantáneas en Instagram, LinkedIn y X simplemente soltando el contenido en un archivo o Google Sheet.",
        value: "$247 USD",
        icon: Share2,
        features: [
            "Blueprint copiar-pegar para Make / n8n / Zapier",
            "Disparador automático desde Google Sheets o carpeta en la nube",
            "Cero suscripciones a costosas herramientas externas de calendarización"
        ]
    }
];

export function VslBonuses() {
    return (
        <section id="bonos" className="py-24 relative overflow-hidden bg-slate-950 border-t border-white/5">
            {/* Background lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Gift className="w-3.5 h-3.5" />
                        Stack de Valor Añadido
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Bonos Exclusivos incluidos al{" "}
                        <br className="hidden sm:inline" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            unirte a la Comunidad en Skool
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
                        No solo te llevas los 4 módulos del sistema de marca. Recibes el arsenal técnico para automatizar la ejecución y no depender de horas de trabajo manual.
                    </p>
                </div>

                {/* Bonuses Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {BONUSES.map((bonus, idx) => {
                        const Icon = bonus.icon;
                        const isAmber = bonus.tagColor === "amber";
                        const isEmerald = bonus.tagColor === "emerald";
                        const isBlue = bonus.tagColor === "blue";

                        return (
                            <div
                                key={idx}
                                className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.15)]"
                            >
                                <div>
                                    {/* Top Tag & Valuation */}
                                    <div className="flex items-center justify-between gap-2 mb-5">
                                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                                            isAmber 
                                                ? "bg-amber-500/10 text-amber-400 border-amber-500/30 animate-pulse" 
                                                : isEmerald 
                                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                                : "bg-blue-500/10 text-blue-400 border-blue-500/30"
                                        }`}>
                                            {bonus.tag}
                                        </span>

                                        <div className="text-right">
                                            <span className="text-[11px] text-slate-500 line-through block leading-none">
                                                {bonus.value}
                                            </span>
                                            <span className="text-[11px] font-bold text-emerald-400 font-mono">
                                                GRATIS
                                            </span>
                                        </div>
                                    </div>

                                    {/* Icon & Titles */}
                                    <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight leading-snug">
                                        {bonus.title}
                                    </h3>
                                    <p className="text-xs text-indigo-300 font-medium mb-3">
                                        {bonus.subtitle}
                                    </p>

                                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                                        {bonus.description}
                                    </p>

                                    {/* Feature Bullets */}
                                    <div className="space-y-2 pt-4 border-t border-white/5 text-xs text-slate-300">
                                        {bonus.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {bonus.isUnderConstruction && (
                                    <div className="mt-6 pt-3 border-t border-amber-500/20 flex items-center gap-2 text-[11px] text-amber-300">
                                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                        <span>Los miembros activos de Skool tendrán acceso prioritario sin costo adicional al liberarse.</span>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Total Value Summary Callout */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-blue-950/30 to-purple-950/40 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-400 shrink-0">
                            <Zap className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-base sm:text-lg font-bold text-white">
                                Más de $740 USD en herramientas y automatizaciones añadidas
                            </h4>
                            <p className="text-xs text-slate-400 font-light">
                                Todo incluido sin costo adicional dentro de tu membresía a la comunidad de Skool.
                            </p>
                        </div>
                    </div>

                    <a href="#planes" className="shrink-0">
                        <button className="px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors shadow-lg cursor-pointer">
                            Ver Planes de Membresía →
                        </button>
                    </a>
                </div>

            </div>
        </section>
    );
}
