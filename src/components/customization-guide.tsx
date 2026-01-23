"use client";

import { Sparkles, HelpCircle, ChevronRight, Lock, ImagePlus, UserCircle, Box } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CustomizationGuideProps {
    guide?: string;
    referenceImageGuide?: string;
    isLocked?: boolean;
    type?: 'portrait' | 'product';
}

export function CustomizationGuide({ guide, referenceImageGuide, isLocked, type = 'portrait' }: CustomizationGuideProps) {
    if (!guide && !referenceImageGuide) return null;

    return (
        <section id="customization-guide" className="mt-16 scroll-mt-24">
            <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <Sparkles className="h-5 w-5" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Guía de Personalización</h2>
                    <p className="text-slate-400 text-sm">Aprende a adaptar este prompt a tus necesidades específicas</p>
                </div>
                <Badge className="ml-auto bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30">
                    PREMIUM
                </Badge>
            </div>

            {/* General Customization Tips */}
            {guide && (
                <div className={cn(
                    "relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm mb-8",
                    isLocked && "min-h-[250px]"
                )}>
                    {/* Decorative background flare */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className={cn(
                        "p-8 relative z-10",
                        isLocked && "blur-md pointer-events-none select-none"
                    )}>
                        <div className="prose prose-invert max-w-none">
                            <div className="grid gap-6">
                                {guide.split('\n\n').map((item, index) => {
                                    if (item.startsWith('#')) {
                                        return (
                                            <h3 key={index} className="text-xl font-semibold text-purple-200 mt-4 first:mt-0 flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                                                {item.replace('#', '').trim()}
                                            </h3>
                                        );
                                    }
                                    if (item.startsWith('*')) {
                                        return (
                                            <ul key={index} className="space-y-3">
                                                {item.split('\n').map((li, i) => (
                                                    <li key={i} className="flex gap-3 text-slate-300 text-sm">
                                                        <ChevronRight className="h-4 w-4 text-purple-500 shrink-0 mt-1" />
                                                        <span>{li.replace('*', '').trim()}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        );
                                    }
                                    return (
                                        <p key={index} className="text-slate-300 leading-relaxed italic border-l-2 border-slate-800 pl-4 py-1 text-sm">
                                            {item}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {isLocked && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/40 backdrop-blur-sm p-8 text-center border-t border-slate-800/50">
                            <Lock className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Contenido Exclusivo Premium</h3>
                            <p className="text-slate-400 text-sm max-w-xs mb-6">
                                Accede a guías detalladas para dominar este prompt.
                            </p>
                            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-semibold transition-all">
                                Mejorar a Premium
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* Reference Image / Face-Swap Guide */}
            {referenceImageGuide && (
                <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm p-8 group">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300">
                            {type === 'portrait' ? <UserCircle className="h-5 w-5" /> : <Box className="h-5 w-5" />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">
                                {type === 'portrait' ? "Guía de Face-Swap / Referencia" : "Guía de Referencia de Producto"}
                            </h3>
                            <p className="text-purple-300/70 text-sm">Usa tu propia imagen como base para obtener resultados exactos</p>
                        </div>
                        <ImagePlus className="ml-auto h-6 w-6 text-purple-500/50 transition-transform group-hover:scale-110" />
                    </div>

                    <div className={cn(
                        "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                        isLocked && "blur-md pointer-events-none select-none"
                    )}>
                        {referenceImageGuide.split('\n\n').map((item, index) => (
                            <div key={index} className="flex gap-4 p-5 rounded-xl bg-slate-950/40 border border-slate-800/50 shadow-inner hover:border-purple-500/30 transition-colors">
                                <div className="h-7 w-7 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xs font-bold text-purple-400 shrink-0">
                                    {index + 1}
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {isLocked && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm p-8 text-center">
                            <Lock className="h-8 w-8 text-purple-400 mb-4" />
                            <h3 className="text-white font-bold">Guía de Referencia Bloqueada</h3>
                            <p className="text-slate-400 text-sm mt-2">Disponible solo para usuarios Premium</p>
                        </div>
                    )}
                </div>
            )}

            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-slate-900/30 border border-slate-800/50">
                <HelpCircle className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-slate-300 font-medium lowercase">Tip:</span> Para mejores resultados con referencias de rostro, asegúrate de que la iluminación de tu foto sea similar a la del prompt (ej: si el prompt es B&W, usa una referencia B&W).
                </p>
            </div>
        </section>
    );
}
