"use client";

import { Card } from "@/components/ui/card";
import { Info, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function ReaisempGuide() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="mt-8 mb-8 border rounded-xl border-purple-500/20 bg-slate-900/40 overflow-hidden">
            <div className="p-5 bg-slate-900/60 border-b border-purple-500/10">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="p-2.5 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 shrink-0 mt-0.5">
                            <Info className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xl font-bold text-white tracking-tight">Guía Maestra REALISMO</h3>
                                <span className="px-2 py-0.5 text-[10px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full">Metodología de 8 dimensiones</span>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl font-light">
                                Cada prompt de este vault sigue esta metodología de 8 dimensiones — no es prueba y error, es un sistema reproducible. Define quién aparece <strong>(R)</strong>, dónde está <strong>(E)</strong>, qué hace <strong>(A)</strong>, cómo está iluminado <strong>(I)</strong>, qué transmite <strong>(S)</strong>, qué lenguaje visual usa <strong>(E)</strong>, cómo lo ve la cámara <strong>(M)</strong> y cuál es su acabado final <strong>(P)</strong>.
                            </p>
                            <p className="text-purple-300/90 text-xs font-medium">
                                El JSON de abajo es exactamente esa estructura aplicada a este resultado.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 text-xs font-medium transition-colors shrink-0"
                    >
                        <span>{isOpen ? "Ocultar desglose" : "Ver desglose"}</span>
                        {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-in slide-in-from-top-2 duration-300">
                    {FRAMEWORK_EXPLANATION.map((def) => (
                        <Card key={def.letter} className="bg-slate-900/40 border-slate-800 hover:border-purple-500/30 transition-all duration-300 group overflow-hidden relative">
                            {/* Header */}
                            <div className="p-3 border-b border-slate-800/50 bg-slate-900/30 flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-mono border shadow-[0_0_15px_-5px_currentColor] ${def.colorClass}`}>
                                    {def.letter}
                                </div>
                                <div>
                                    <h4 className="text-slate-200 font-semibold text-xs">{def.title}</h4>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-3">
                                <p className="text-slate-400 text-[10px] leading-relaxed">
                                    {def.description}
                                </p>
                            </div>

                            {/* Decorative gradient blob */}
                            <div className={`absolute -bottom-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-5 group-hover:opacity-15 transition-opacity ${def.colorClass.replace('text-', 'bg-').split(' ')[0]}`} />
                        </Card>
                    ))}
                </div>
            )}
        </section>
    );
}

const FRAMEWORK_EXPLANATION = [
    {
        letter: "R",
        title: "Render (Avatar)",
        description: "Define el sujeto principal: rasgos físicos, vestimenta, expresión, edad, y detalles anatómicos específicos. Es el núcleo de la imagen.",
        colorClass: "text-rose-400 border-rose-500/20 bg-rose-500/10"
    },
    {
        letter: "E",
        title: "Entorno",
        description: "Establece el escenario y contexto espacial. Fondo, ubicación geográfica, elementos arquitectónicos o naturales que rodean al sujeto.",
        colorClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
    },
    {
        letter: "A",
        title: "Acción",
        description: "Describe lo que está sucediendo. Pose, movimiento corporal, gestos de las manos y dirección de la mirada.",
        colorClass: "text-amber-400 border-amber-500/20 bg-amber-500/10"
    },
    {
        letter: "I",
        title: "Iluminación",
        description: "La clave del realismo. Tipo de luz (natural, estudio), dirección, temperatura, sombras y fuentes de luz específicas.",
        colorClass: "text-yellow-300 border-yellow-400/20 bg-yellow-400/10"
    },
    {
        letter: "S",
        title: "Sensación",
        description: "El 'mood' o atmósfera emocional. ¿Qué debe sentir el espectador? Misterio, alegría, melancolía, terror, paz.",
        colorClass: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10"
    },
    {
        letter: "E",
        title: "Estilo Visual",
        description: "El lenguaje artístico. Fotografía analógica, render 3D, pintura al óleo, cyberpunk, minimalista, etc.",
        colorClass: "text-pink-400 border-pink-500/20 bg-pink-500/10"
    },
    {
        letter: "M",
        title: "Composición",
        description: "Aspectos técnicos de la cámara. Tipo de plano (primer plano, general), ángulo, lente y encuadre.",
        colorClass: "text-violet-400 border-violet-500/20 bg-violet-500/10"
    },
    {
        letter: "P",
        title: "Postproducción",
        description: "Toques finales. Color grading, filtros, efectos de grano, aberración cromática o nitidez.",
        colorClass: "text-blue-400 border-blue-500/20 bg-blue-500/10"
    }
];
