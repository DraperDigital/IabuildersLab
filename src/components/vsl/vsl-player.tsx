"use client";

import { useState } from "react";
import { Play, Volume2, ShieldCheck, Sparkles, Clock, CheckCircle } from "lucide-react";

interface VslPlayerProps {
    videoUrl?: string; // YouTube, Vimeo or MP4 URL (optional)
    title?: string;
    duration?: string;
}

export function VslPlayer({
    videoUrl,
    title = "Cómo construir un Sistema de Marca Vendible en 4 módulos",
    duration = "14:40 min"
}: VslPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Extract YouTube ID if applicable
    const getYouTubeEmbedUrl = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url?.match(regExp);
        if (match && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0&modestbranding=1`;
        }
        return url;
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto group">
            {/* Ambient spatial glow behind video */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-purple-600/30 rounded-2xl md:rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

            {/* Main Video Frame */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl">
                
                {/* Top decorative browser/player bar */}
                <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                        <span className="ml-2 font-mono text-[11px] text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                            masterclass-sistema-marca.mp4
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                            <Clock className="w-3 h-3" /> {duration}
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                            <CheckCircle className="w-3 h-3" /> 1080p HD
                        </span>
                    </div>
                </div>

                {/* 16:9 Video Container */}
                <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
                    {isPlaying && videoUrl ? (
                        <iframe
                            src={getYouTubeEmbedUrl(videoUrl)}
                            title={title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        /* Cinematic Poster / Thumbnail State */
                        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-radial from-slate-900 via-slate-950 to-black">
                            
                            {/* Decorative background grid and graphics */}
                            <div 
                                className="absolute inset-0 opacity-20 pointer-events-none"
                                style={{
                                    backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                                    backgroundSize: "28px 28px"
                                }}
                            />

                            {/* Floating decorative elements */}
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] text-slate-300">
                                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                                <span>Presentación Oficial IA Builders Lab</span>
                            </div>

                            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md text-[11px] text-emerald-300">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>Metodología Comprobada en Negocios Reales</span>
                            </div>

                            {/* Center Content */}
                            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                                
                                {/* Pulse Play Button */}
                                <button
                                    onClick={() => {
                                        if (videoUrl) {
                                            setIsPlaying(true);
                                        } else {
                                            // Scroll to curriculum or show alert if no video url yet
                                            const el = document.getElementById("planes");
                                            if (el) el.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="relative group/btn mb-6 transition-transform transform hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
                                    aria-label="Reproducir video"
                                >
                                    <div className="absolute -inset-3 bg-blue-500 rounded-full blur-lg opacity-40 group-hover/btn:opacity-80 transition duration-500 animate-pulse" />
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 border border-white/30 flex items-center justify-center shadow-2xl text-white">
                                        <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
                                    </div>
                                </button>

                                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2">
                                    Haz clic para ver la presentación completa
                                </span>
                                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight mb-2 max-w-lg">
                                    {title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 max-w-md font-light">
                                    Descubre por qué tu marca no tiene un problema de diseño, sino de fundamento — y cómo corregirlo en 4 pasos.
                                </p>
                            </div>

                            {/* Bottom bar inside video preview */}
                            <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs text-slate-400">
                                <Volume2 className="w-4 h-4 text-slate-500" />
                                <span className="text-[11px]">Asegúrate de activar el audio</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
