"use client";

import { FileCode, FileSpreadsheet, FileText, Image as ImageIcon, Video, CheckCircle2, Layers, Sparkles, Compass } from "lucide-react";

interface ModuleData {
    number: string;
    title: string;
    tagline: string;
    objective: string;
    deliverable: {
        title: string;
        description: string;
        icon: any;
        formatBadge: string;
    };
    keySteps: string[];
}

const MODULES: ModuleData[] = [
    {
        number: "01",
        title: "Diagnóstico y Arquitectura de Negocio",
        tagline: "Fundamentos reales antes de diseñar",
        objective: "Validar que tu idea de negocio tiene fundamentos sólidos — propuesta de valor, cliente ideal y modelo económico — antes de invertir un solo peso más en diseño de marca o generación de contenido.",
        deliverable: {
            title: "Diagnóstico BMA Completo",
            description: "Documento maestro con los 8 módulos del framework estratégico (oferta, pricing, canales de adquisición, operación y números clave).",
            icon: Compass,
            formatBadge: "Documento Estratégico BMA"
        },
        keySteps: [
            "Claridad de la propuesta de valor sin clichés",
            "Mapeo de rentabilidad y modelo de monetización",
            "Definición exacta del cliente que sí paga"
        ]
    },
    {
        number: "02",
        title: "Sistema de Marca (ARCH)",
        tagline: "Identidad gobernable, no un logo suelto",
        objective: "Convertir el diagnóstico de negocio en una identidad de marca completa, consistente y gobernable — no un logo decorativo en PNG, sino un sistema con reglas claras.",
        deliverable: {
            title: "design-system.md (Archivo Fuente de Marca)",
            description: "El archivo fuente de tu marca (Brand Core, voz y tono, lineamientos de gobernanza y matriz de mensajería por canal) listo para alimentar prompts e interfaces.",
            icon: FileCode,
            formatBadge: "design-system.md"
        },
        keySteps: [
            "Brand Core y principios innegociables de marca",
            "Guía de voz, tono y vocabulario no genérico",
            "Matriz de gobernanza y mensajes por canal"
        ]
    },
    {
        number: "03",
        title: "Máquina de Contenido Estratégico",
        tagline: "Sistema editorial con pilares y arco narrativo",
        objective: "Dejar de publicar cuando se te ocurre por ansiedad y pasar a un sistema editorial predecible con pilares y arco narrativo — que además jamás suene a texto generado por IA estándar.",
        deliverable: {
            title: "Calendario Editorial de 1 Mes Completo",
            description: "Estrategia de contenidos en Word (arcos narrativos, ganchos y ángulos de venta) + Matriz de publicación en Excel/Sheets.",
            icon: FileSpreadsheet,
            formatBadge: "Word (Estrategia) + Excel (Calendario)"
        },
        keySteps: [
            "Estructura de pilares de atracción, autoridad y conversión",
            "Arcos narrativos que preparan la venta sin parecer spam",
            "Ganchos y estructuras persuasivas anti-cliché"
        ]
    },
    {
        number: "04",
        title: "Producción Visual y de Video con IA",
        tagline: "Imágenes y video con consistencia de marca",
        objective: "Convertir ese calendario en piezas multimedia reales de alta calidad — imagen y video cinematográfico — manteniendo coherencia estética y de marca en cada una.",
        deliverable: {
            title: "Mood Board Visual + Imagen Maestra + Clip Animado",
            description: "Mood board de lenguaje visual, al menos 1 imagen de marca dirigida con metodología profesional completa y 1 clip de video animado de alto impacto.",
            icon: Video,
            formatBadge: "Moodboard + Prompt Maestro + Clip Animado"
        },
        keySteps: [
            "Dirección de arte asistida por IA sin rostros de cera ni deformidades",
            "Variante para productos físicos, marcas personales o SaaS / interfaces",
            "Animación de planos cinematográficos a partir de imagen estática"
        ]
    }
];

export function VslCurriculum() {
    return (
        <section id="curriculum" className="py-24 relative overflow-hidden bg-slate-950">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                
                {/* Header Badge & Title */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Layers className="w-3.5 h-3.5" />
                        Currículum de Implementación
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                        4 módulos. 4 entregables reales.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            No videos que ves y olvidas.
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed">
                        Al terminar los 4 módulos no tienes apuntes guardados en una carpeta de Google Drive.
                        <span className="text-white font-medium"> Tienes tu sistema de marca operando en tu negocio.</span>
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="space-y-6">
                    {MODULES.map((mod) => {
                        const Icon = mod.deliverable.icon;
                        return (
                            <div 
                                key={mod.number}
                                className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                    
                                    {/* Left: Module info & objective */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                                                MÓDULO {mod.number}
                                            </span>
                                            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                                                {mod.tagline}
                                            </span>
                                        </div>

                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                                            {mod.title}
                                        </h3>

                                        <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-5">
                                            <strong className="text-white font-medium">Objetivo: </strong>
                                            {mod.objective}
                                        </p>

                                        {/* Key steps */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400 pt-2 border-t border-white/5">
                                            {mod.keySteps.map((step, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                                                    <span className="truncate">{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Deliverable Card (The "Te Llevas" Real Outcome) */}
                                    <div className="lg:w-80 shrink-0">
                                        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4 relative overflow-hidden">
                                            <div className="flex items-center justify-between gap-2 mb-2">
                                                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                                                    <Sparkles className="w-3 h-3" />
                                                    Te Llevas (Entregable Real):
                                                </span>
                                                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                                                    {mod.deliverable.formatBadge}
                                                </span>
                                            </div>

                                            <div className="flex items-start gap-3 mt-3">
                                                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                                                    <Icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-white mb-1">
                                                        {mod.deliverable.title}
                                                    </h4>
                                                    <p className="text-xs text-slate-300 font-light leading-snug">
                                                        {mod.deliverable.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Callout banner */}
                <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-blue-500/30 text-center">
                    <p className="text-base sm:text-lg font-medium text-white">
                        ⚡ Cada módulo está diseñado con un propósito práctico: <span className="text-blue-300">crear el activo digital</span> de tu negocio en ese momento, no acumular teoría.
                    </p>
                </div>

            </div>
        </section>
    );
}
