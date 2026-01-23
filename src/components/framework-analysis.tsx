"use client";

import { Card } from "@/components/ui/card";
import { Info, Lightbulb } from "lucide-react";

interface FrameworkAnalysisProps {
    promptText: string;
}

export function FrameworkAnalysis({ promptText }: FrameworkAnalysisProps) {
    let frameworkData = null;

    try {
        const parsed = JSON.parse(promptText);
        frameworkData = parsed.framework_REAISEMP;
    } catch (e) {
        // Not valid JSON or missing framework data
        return null;
    }

    if (!frameworkData) return null;

    return (
        <section className="mt-12 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-500/20">
                    <Lightbulb className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Análisis de Framework</h3>
                    <p className="text-slate-400 text-sm">Desglose estratégico de este prompt usando la metodología REAISEMP</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {FRAMEWORK_DEFINITIONS.map((def) => {
                    const data = frameworkData[def.key];
                    if (!data) return null;

                    return (
                        <Card key={def.key} className="bg-slate-900/50 border-slate-800 hover:border-indigo-500/30 transition-all duration-300 group overflow-hidden relative">
                            {/* Header */}
                            <div className="p-4 border-b border-slate-800/50 bg-slate-900/30">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold font-mono border shadow-[0_0_15px_-5px_currentColor] ${def.colorClass}`}>
                                        {def.letter}
                                    </div>
                                    <div>
                                        <h4 className="text-slate-200 font-semibold text-sm">{def.title}</h4>
                                        <p className="text-slate-600 text-[10px] uppercase tracking-wider font-medium">Concepto</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <div className="space-y-3">
                                    {Object.entries(data).map(([key, value]) => (
                                        <div key={key}>
                                            <p className="text-slate-500 text-xs mb-1 capitalize border-b border-slate-800/50 pb-1 inline-block border-dashed hover:text-slate-400 transition-colors cursor-help" title={`Propiedad específica del framework`}>
                                                {key.replace(/_/g, ' ')}
                                            </p>
                                            <p className="text-slate-300 text-sm leading-relaxed font-light">
                                                {String(value)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative gradient blob */}
                            <div className={`absolute -bottom-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity ${def.colorClass.replace('text-', 'bg-').split(' ')[0]}`} />
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}

const FRAMEWORK_DEFINITIONS = [
    {
        key: "R_Render_del_Avatar",
        letter: "R",
        title: "Render",
        colorClass: "text-rose-400 border-rose-500/20 bg-rose-500/10"
    },
    {
        key: "E_Entorno",
        letter: "E",
        title: "Entorno",
        colorClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
    },
    {
        key: "A_Accion_Postura",
        letter: "A",
        title: "Acción",
        colorClass: "text-amber-400 border-amber-500/20 bg-amber-500/10"
    },
    {
        key: "I_Iluminacion",
        letter: "I",
        title: "Iluminación",
        colorClass: "text-yellow-300 border-yellow-400/20 bg-yellow-400/10"
    },
    {
        key: "S_Sensacion_Atmosfera",
        letter: "S",
        title: "Sensación",
        colorClass: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
    },
    {
        key: "E_visual_EstiloVisual",
        letter: "E",
        title: "Estilo",
        colorClass: "text-pink-400 border-pink-500/20 bg-pink-500/10"
    },
    {
        key: "M_Composicion_Camara",
        letter: "M",
        title: "Composición",
        colorClass: "text-violet-400 border-violet-500/20 bg-violet-500/10"
    },
    {
        key: "P_Postproduccion",
        letter: "P",
        title: "Postproducción",
        colorClass: "text-blue-400 border-blue-500/20 bg-blue-500/10"
    }
];
