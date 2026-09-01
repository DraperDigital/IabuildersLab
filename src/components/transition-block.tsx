"use client";

import { Compass } from "lucide-react";

interface TransitionBlockProps {
    dimensionsKey?: string;
    detailSpecific?: string;
    userTarget?: string;
}

export function TransitionBlock({
    dimensionsKey,
    detailSpecific,
    userTarget
}: TransitionBlockProps) {
    const hasDynamicData = Boolean(dimensionsKey && detailSpecific);

    return (
        <div className="my-6 p-4 md:p-5 bg-gradient-to-r from-slate-900/90 via-purple-950/20 to-slate-900/90 border border-purple-500/30 rounded-xl relative overflow-hidden shadow-lg">
            {/* Subtle glow background accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-start gap-3.5 relative z-10">
                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 shrink-0 mt-0.5">
                    <Compass className="w-4 h-4 text-purple-400" />
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                    {hasDynamicData ? (
                        <>
                            Este prompt funciona porque <strong className="text-purple-300 font-semibold">{dimensionsKey}</strong> fueron definidos para <span className="text-white font-medium">{detailSpecific}</span>. Adaptarlo a <span className="text-purple-200 font-medium">{userTarget || "tu situación equivalente"}</span> sin romper el resultado es exactamente lo que enseña el curso de implementación.
                        </>
                    ) : (
                        <>
                            Este resultado no es casualidad — sigue una estructura de 8 dimensiones definidas deliberadamente. Aprender a construir la tuya, para tu propio rostro o marca, es exactamente lo que enseña el curso de implementación.
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
