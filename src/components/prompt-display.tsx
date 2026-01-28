"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Lock, Copy, Check, Info } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface PromptDisplayProps {
    promptText: string;
    isLocked: boolean;
    hideAspectRatio?: boolean;
}

const ASPECT_RATIOS = [
    { label: "Original", value: "", description: "Default size", instruction: "" },
    { label: "Instagram (Square)", value: "1:1", description: "Posts", instruction: "--ar 1:1" },
    { label: "Portrait (Stories)", value: "9:16", description: "Reels/TikTok", instruction: "--ar 9:16" },
    { label: "Landscape (Web)", value: "16:9", description: "Youtube/Hero", instruction: "--ar 16:9" },
    { label: "Portrait (Feed)", value: "4:5", description: "IG Feed", instruction: "--ar 4:5" },
];

export function PromptDisplay({ promptText, isLocked, hideAspectRatio = false }: PromptDisplayProps) {
    const [selectedRatio, setSelectedRatio] = useState(ASPECT_RATIOS[0]);
    const [copied, setCopied] = useState(false);

    // If promptText is JSON, try to extract the actual prompt
    let displayedText = promptText;
    try {
        const parsed = JSON.parse(promptText);
        displayedText = parsed.final_prompt || parsed.prompt_text || promptText;
    } catch (e) {
        // Not JSON, use as is
    }

    // Calculate the final text to display/copy
    // If aspect ratio is hidden, ignore the instruction even if selected (though default is empty)
    const finalText = (!hideAspectRatio && selectedRatio.instruction)
        ? `${displayedText} ${selectedRatio.instruction}`
        : displayedText;

    const handleCopy = async () => {
        if (isLocked) return;
        try {
            await navigator.clipboard.writeText(finalText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
                    The Prompt
                </h2>
            </div>

            {/* Aspect Ratio Selector */}
            {!hideAspectRatio && (
                <div className="mb-6 bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                    <p className="text-sm text-slate-400 mb-3 flex items-center gap-2">
                        <span className="bg-indigo-500/20 text-indigo-300 p-1 rounded-full"><Info size={14} /></span>
                        Selecciona el formato para adaptar el prompt a tu plataforma objetivo:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {ASPECT_RATIOS.map((ratio) => (
                            <button
                                key={ratio.value || "default"}
                                onClick={() => setSelectedRatio(ratio)}
                                className={cn(
                                    "px-3 py-1.5 text-xs font-medium rounded-lg transition-all border",
                                    selectedRatio.value === ratio.value
                                        ? "bg-purple-500/20 border-purple-500 text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                                        : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white"
                                )}
                                title={ratio.description}
                            >
                                <span className="block mb-0.5">{ratio.label}</span>
                                {ratio.value && <span className="text-[10px] opacity-60 block font-mono">{ratio.instruction}</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <div className="relative group">
                {isLocked ? (
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                        <Lock className="h-10 w-10 text-amber-500 mx-auto mb-4 relative z-10" />
                        <h3 className="text-white font-bold text-lg relative z-10 mb-2">Implementación completa dentro de IA Builders Lab</h3>
                        <p className="text-slate-400 text-sm max-w-sm mx-auto mb-6 relative z-10">
                            Este es un sistema de nivel profesional. Actualiza tu plan para acceder al prompt completo y la guía de implementación detallada.
                        </p>
                        <Link href="/pricing" className="relative z-10 block">
                            <Button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold">
                                Unirse a IA Builders Lab
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="bg-slate-900 border border-indigo-500/30 rounded-xl p-0 relative overflow-hidden">
                        {/* Header of the code block with Copy button */}
                        <div className="flex items-center justify-between bg-slate-800/50 px-4 py-2 border-b border-indigo-500/20">
                            <div className="text-xs text-indigo-300/70 font-mono flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                                {!hideAspectRatio ? (
                                    <>
                                        {selectedRatio.description}
                                        {selectedRatio.instruction && <span className="opacity-50">({selectedRatio.instruction})</span>}
                                    </>
                                ) : (
                                    <span>Raw Text</span>
                                )}
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-8 text-xs text-indigo-300 hover:text-white hover:bg-indigo-500/20"
                                onClick={handleCopy}
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-3.5 w-3.5 mr-1.5" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-3.5 w-3.5 mr-1.5" />
                                        Copy Prompt
                                    </>
                                )}
                            </Button>
                        </div>

                        <div className="p-6">
                            <code className="text-indigo-200 font-mono text-sm leading-relaxed block break-words whitespace-pre-wrap">
                                {finalText}
                            </code>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
