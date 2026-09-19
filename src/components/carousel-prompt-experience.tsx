"use client";

import { useState } from "react";
import { CarouselShot } from "@/types/content";
import { PromptImageModal } from "@/components/prompt-image-modal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
    Copy, 
    Check, 
    Sparkles, 
    Layers, 
    SlidersHorizontal, 
    Image as ImageIcon,
    FileText,
    Camera,
    Info,
    ChevronRight,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselPromptExperienceProps {
    shots: CarouselShot[];
    defaultImageUrl: string;
    title: string;
    summary?: string;
    masterPromptText?: string;
    isLocked?: boolean;
}

const ASPECT_RATIOS = [
    { label: "Original (4:5)", value: "4:5", description: "IG Feed", instruction: "--ar 4:5" },
    { label: "Stories / Reels", value: "9:16", description: "Vertical full", instruction: "--ar 9:16" },
    { label: "Cuadrado (1:1)", value: "1:1", description: "Square Post", instruction: "--ar 1:1" },
    { label: "Landscape (16:9)", value: "16:9", description: "YouTube / Web", instruction: "--ar 16:9" },
];

export function CarouselPromptExperience({
    shots,
    defaultImageUrl,
    title,
    summary,
    masterPromptText,
    isLocked = false,
}: CarouselPromptExperienceProps) {
    const [activeShotIndex, setActiveShotIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"single" | "all" | "framework">("single");
    const [copiedSingle, setCopiedSingle] = useState(false);
    const [copiedAll, setCopiedAll] = useState(false);
    const [copiedShotId, setCopiedShotId] = useState<number | null>(null);
    const [selectedRatio, setSelectedRatio] = useState(ASPECT_RATIOS[0]);

    const activeShot = shots[activeShotIndex] || shots[0];

    // Compute single prompt text with optional aspect ratio
    const getShotPromptWithRatio = (shot: CarouselShot) => {
        const base = shot.prompt.trim();
        // If the prompt already ends with an aspect ratio, replace or append
        const arMatch = base.match(/--ar\s+\d+:\d+/);
        if (arMatch) {
            return base.replace(/--ar\s+\d+:\d+/, selectedRatio.instruction);
        }
        return `${base} ${selectedRatio.instruction}`.trim();
    };

    const activePromptText = activeShot ? getShotPromptWithRatio(activeShot) : "";

    // Copy single active prompt
    const handleCopySingle = async () => {
        try {
            await navigator.clipboard.writeText(activePromptText);
            setCopiedSingle(true);
            setTimeout(() => setCopiedSingle(false), 2000);
        } catch (err) {
            console.error("Failed to copy shot:", err);
        }
    };

    // Copy a specific shot from the list
    const handleCopySpecificShot = async (shot: CarouselShot) => {
        try {
            await navigator.clipboard.writeText(getShotPromptWithRatio(shot));
            setCopiedShotId(shot.id);
            setTimeout(() => setCopiedShotId(null), 2000);
        } catch (err) {
            console.error("Failed to copy shot:", err);
        }
    };

    // Build and copy the entire pack
    const handleCopyAllPack = async () => {
        try {
            const packHeader = [
                `# Pack Carrusel (${shots.length} Tomas) — ${title}`,
                `💡 Recomendación de Consistencia: Utilizar la imagen de referencia como consistencia del avatar.`,
                `Formato: ${selectedRatio.label} (${selectedRatio.instruction})`,
                `--------------------------------------------------\n`
            ].join("\n");

            const packBody = shots.map((shot, idx) => {
                return [
                    `📸 TOMA ${idx + 1} de ${shots.length}: ${shot.title}`,
                    `Aspect Ratio: ${selectedRatio.value} | Consistencia: ${shot.reference_image_required ? "Requiere Imagen de Referencia" : "Libre"}`,
                    `Prompt:`,
                    getShotPromptWithRatio(shot),
                    `\n--------------------------------------------------\n`
                ].join("\n");
            }).join("\n");

            await navigator.clipboard.writeText(`${packHeader}\n${packBody}`);
            setCopiedAll(true);
            setTimeout(() => setCopiedAll(false), 2500);
        } catch (err) {
            console.error("Failed to copy pack:", err);
        }
    };

    return (
        <div className="space-y-8">
            {/* 1. Visual Carousel with modal support */}
            <PromptImageModal
                imageUrl={defaultImageUrl}
                altText={title}
                title={title}
                carouselImages={shots.map((s) => s.image_url)}
                activeIndex={activeShotIndex}
                onIndexChange={setActiveShotIndex}
            />

            {/* 2. Interactive Shots Ribbon Selector */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 md:p-5 backdrop-blur-md shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                        <Camera className="w-5 h-5 text-purple-400" />
                        <h3 className="text-base font-bold text-white">
                            Explorar Tomas del Carrusel ({shots.length} Slides)
                        </h3>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={handleCopyAllPack}
                            size="sm"
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/20 flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
                        >
                            {copiedAll ? (
                                <>
                                    <Check className="w-4 h-4 text-emerald-300" />
                                    <span>¡Pack Completo Copiado!</span>
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-4 h-4 text-purple-200" />
                                    <span>Copiar Pack Completo ({shots.length} Tomas)</span>
                                </>
                            )}
                        </Button>
                    </div>
                </div>

                {/* Horizontal Shot Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
                    {shots.map((shot, idx) => {
                        const isActive = activeShotIndex === idx;
                        return (
                            <button
                                key={shot.id}
                                onClick={() => {
                                    setActiveShotIndex(idx);
                                    if (viewMode === "framework") setViewMode("single");
                                }}
                                className={cn(
                                    "flex flex-col items-center p-2 rounded-xl border text-left transition-all duration-200 cursor-pointer group relative overflow-hidden",
                                    isActive
                                        ? "bg-purple-600/20 border-purple-500 ring-2 ring-purple-500/40 shadow-lg shadow-purple-500/20"
                                        : "bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/60"
                                )}
                            >
                                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-1.5 bg-slate-950 relative">
                                    <img
                                        src={shot.image_url}
                                        alt={shot.title}
                                        className={cn(
                                            "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                                            !isActive && "opacity-75 group-hover:opacity-100"
                                        )}
                                    />
                                    <span className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-slate-950/85 text-[10px] font-mono text-white font-bold">
                                        #{idx + 1}
                                    </span>
                                </div>
                                <span
                                    className={cn(
                                        "text-[11px] font-medium truncate w-full text-center",
                                        isActive ? "text-purple-200 font-semibold" : "text-slate-400 group-hover:text-slate-200"
                                    )}
                                    title={shot.title}
                                >
                                    Toma {idx + 1}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 3. View Mode Navigation & Aspect Ratio Selector */}
            <div className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4 md:p-6 backdrop-blur-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    {/* View Switcher Pills */}
                    <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 w-fit">
                        <button
                            onClick={() => setViewMode("single")}
                            className={cn(
                                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer",
                                viewMode === "single"
                                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                                    : "text-slate-400 hover:text-white"
                            )}
                        >
                            <Camera className="w-3.5 h-3.5" />
                            <span>Toma #{activeShotIndex + 1} (Activa)</span>
                        </button>
                        <button
                            onClick={() => setViewMode("all")}
                            className={cn(
                                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer",
                                viewMode === "all"
                                    ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                                    : "text-slate-400 hover:text-white"
                            )}
                        >
                            <Layers className="w-3.5 h-3.5" />
                            <span>Ver las {shots.length} Tomas</span>
                        </button>
                        {masterPromptText && (
                            <button
                                onClick={() => setViewMode("framework")}
                                className={cn(
                                    "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer",
                                    viewMode === "framework"
                                        ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                                        : "text-slate-400 hover:text-white"
                                )}
                            >
                                <FileText className="w-3.5 h-3.5" />
                                <span>Estructura REALISMO</span>
                            </button>
                        )}
                    </div>

                    {/* Aspect Ratio Selector */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                            Aspect Ratio:
                        </span>
                        <div className="flex items-center gap-1">
                            {ASPECT_RATIOS.map((ratio) => (
                                <button
                                    key={ratio.value}
                                    onClick={() => setSelectedRatio(ratio)}
                                    className={cn(
                                        "px-2.5 py-1 text-xs font-mono rounded-lg transition-all border cursor-pointer",
                                        selectedRatio.value === ratio.value
                                            ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm"
                                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white"
                                    )}
                                    title={ratio.description}
                                >
                                    {ratio.value}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* VIEW 1: SINGLE ACTIVE SHOT */}
                {viewMode === "single" && activeShot && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        {/* Header with Title & Metadata */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/70 border border-purple-500/20">
                            <div>
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/40 text-xs font-mono">
                                        Toma {activeShotIndex + 1} de {shots.length}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs border-indigo-500/30 text-indigo-300 font-mono">
                                        {selectedRatio.instruction}
                                    </Badge>
                                    {activeShot.reference_image_required && (
                                        <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-xs">
                                            ✓ Consistencia Avatar Activa
                                        </Badge>
                                    )}
                                </div>
                                <h4 className="text-base font-bold text-white">
                                    {activeShot.title}
                                </h4>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                                <Button
                                    onClick={handleCopySingle}
                                    className="bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs shadow-md shadow-purple-600/25 flex items-center gap-2 cursor-pointer"
                                >
                                    {copiedSingle ? (
                                        <>
                                            <Check className="w-4 h-4 text-emerald-300" />
                                            <span>¡Prompt Copiado!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4" />
                                            <span>Copiar Toma {activeShotIndex + 1}</span>
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Prompt Display Codeblock */}
                        <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-inner">
                            <div className="flex items-center justify-between bg-slate-900/70 px-4 py-2.5 border-b border-slate-800/80">
                                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                                    <span>Prompt Listo para Generar</span>
                                </div>
                                <span className="text-[11px] text-slate-500 font-mono">
                                    Midjourney • Gemini Imagen 3 • Flux
                                </span>
                            </div>

                            <div className="p-4 md:p-6 font-mono text-sm leading-relaxed text-slate-200 selection:bg-purple-500 selection:text-white whitespace-pre-wrap select-all">
                                {activePromptText}
                            </div>
                        </div>

                        {/* Quick Carousel Navigation under prompt */}
                        <div className="flex items-center justify-between pt-2">
                            <button
                                onClick={() => setActiveShotIndex((prev) => (prev === 0 ? shots.length - 1 : prev - 1))}
                                className="text-xs text-slate-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                                ← Ver Toma Anterior
                            </button>
                            <span className="text-xs text-slate-500 font-mono">
                                {activeShotIndex + 1} / {shots.length}
                            </span>
                            <button
                                onClick={() => setActiveShotIndex((prev) => (prev === shots.length - 1 ? 0 : prev + 1))}
                                className="text-xs text-slate-400 hover:text-purple-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                            >
                                Ver Siguiente Toma →
                            </button>
                        </div>
                    </div>
                )}

                {/* VIEW 2: ALL 9 SHOTS CASCADE */}
                {viewMode === "all" && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
                            <div>
                                <h4 className="text-sm font-bold text-purple-200">
                                    Pack Carrusel Completo ({shots.length} Tomas Secuenciales)
                                </h4>
                                <p className="text-xs text-slate-400 mt-0.5">
                                    Puedes copiar cada toma de forma independiente o copiar el pack completo para tu flujo de trabajo.
                                </p>
                            </div>
                            <Button
                                onClick={handleCopyAllPack}
                                size="sm"
                                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-2 cursor-pointer shrink-0"
                            >
                                {copiedAll ? (
                                    <>
                                        <Check className="w-4 h-4 text-emerald-300" />
                                        <span>¡Todo el Pack Copiado!</span>
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="w-4 h-4" />
                                        <span>Copiar las {shots.length} Tomas en 1 Clic</span>
                                    </>
                                )}
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {shots.map((shot, idx) => {
                                const isCopied = copiedShotId === shot.id;
                                const formattedPrompt = getShotPromptWithRatio(shot);
                                return (
                                    <div
                                        key={shot.id}
                                        className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-purple-500/40 transition-all group"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-9 rounded-md overflow-hidden bg-slate-900 shrink-0 border border-slate-800">
                                                    <img
                                                        src={shot.image_url}
                                                        alt={shot.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs font-mono font-bold text-purple-400">
                                                            Slide #{idx + 1}
                                                        </span>
                                                        <span className="text-xs text-slate-500">•</span>
                                                        <span className="text-xs font-semibold text-white">
                                                            {shot.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => {
                                                        setActiveShotIndex(idx);
                                                        setViewMode("single");
                                                    }}
                                                    className="text-xs text-slate-400 hover:text-purple-300 transition-colors px-2 py-1 cursor-pointer"
                                                >
                                                    Ver en Grande
                                                </button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => handleCopySpecificShot(shot)}
                                                    className="border-purple-500/30 text-purple-300 hover:bg-purple-600 hover:text-white text-xs h-8 flex items-center gap-1.5 cursor-pointer"
                                                >
                                                    {isCopied ? (
                                                        <>
                                                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                            <span>Copiado</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Copy className="w-3.5 h-3.5" />
                                                            <span>Copiar Slide {idx + 1}</span>
                                                        </>
                                                    )}
                                                </Button>
                                            </div>
                                        </div>

                                        <p className="font-mono text-xs text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800/60 leading-relaxed whitespace-pre-wrap select-all">
                                            {formattedPrompt}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* VIEW 3: MASTER FRAMEWORK REALISMO */}
                {viewMode === "framework" && masterPromptText && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <h4 className="text-sm font-bold text-white">
                                        Estructura Arquitectónica REALISMO™ (JSON)
                                    </h4>
                                    <p className="text-xs text-slate-400">
                                        Definición dimensional completa del avatar, iluminación, entornos y estilo.
                                    </p>
                                </div>
                                <Button
                                    size="sm"
                                    onClick={async () => {
                                        await navigator.clipboard.writeText(masterPromptText);
                                        setCopiedSingle(true);
                                        setTimeout(() => setCopiedSingle(false), 2000);
                                    }}
                                    className="bg-slate-800 hover:bg-slate-700 text-white text-xs"
                                >
                                    {copiedSingle ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span className="ml-1.5">Copiar JSON</span>
                                </Button>
                            </div>
                            <pre className="font-mono text-xs text-purple-200/90 bg-slate-900/80 p-4 rounded-lg overflow-x-auto border border-slate-800/80 max-h-96">
                                {masterPromptText}
                            </pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
