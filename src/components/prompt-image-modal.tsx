"use client";

import { useState } from "react";
import { Maximize2, Eye, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface PromptImageModalProps {
    imageUrl: string;
    altText?: string;
    title?: string;
    carouselImages?: string[];
}

export function PromptImageModal({
    imageUrl,
    altText = "Resultado del Prompt",
    title = "Resultado Visual",
    carouselImages = []
}: PromptImageModalProps) {
    // Collect all images, prioritizing carouselImages if provided
    const allImages = carouselImages && carouselImages.length > 0 
        ? Array.from(new Set([imageUrl, ...carouselImages].filter(Boolean)))
        : (imageUrl ? [imageUrl] : []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const hasMultiple = allImages.length > 1;
    const currentImage = allImages[currentIndex] || imageUrl;

    const handlePrev = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    const handleNext = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    if (!currentImage) {
        return (
            <div className="mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-video flex items-center justify-center">
                <p className="text-slate-500 text-sm">Sin imagen de vista previa</p>
            </div>
        );
    }

    return (
        <div className="mb-10">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                {/* Main Preview Container */}
                <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 relative group">
                    {/* Main Image */}
                    <div className="aspect-video relative overflow-hidden bg-slate-950 flex items-center justify-center">
                        <img
                            src={currentImage}
                            alt={`${altText} - Toma ${currentIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                        />
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

                        {/* Top Badge: Carousel Indicator */}
                        {hasMultiple && (
                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                <span className="px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-purple-500/40 text-purple-200 font-mono text-xs font-semibold shadow-lg flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                                    Toma {currentIndex + 1} de {allImages.length}
                                </span>
                                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-semibold">
                                    Pack Carrusel Redes
                                </span>
                            </div>
                        )}

                        {/* Left / Right Carousel Controls */}
                        {hasMultiple && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-purple-600 text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                                    title="Toma anterior"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-slate-950/80 hover:bg-purple-600 text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
                                    title="Siguiente toma"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </>
                        )}

                        {/* "Ver Imagen" Action Button Overlay */}
                        <div className="absolute bottom-4 right-4 z-20">
                            <DialogTrigger asChild>
                                <button className="px-4 py-2.5 bg-slate-900/90 hover:bg-purple-600 text-white font-semibold text-xs md:text-sm rounded-xl border border-purple-500/40 shadow-xl backdrop-blur-md transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-purple-500/25 cursor-pointer">
                                    <Eye className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors" />
                                    <span>Ver en Alta Calidad</span>
                                    <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-white ml-0.5" />
                                </button>
                            </DialogTrigger>
                        </div>
                    </div>
                </div>

                {/* Thumbnails Navigation Row */}
                {hasMultiple && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-2 px-1">
                            <p className="text-xs text-purple-300 font-medium">
                                Variaciones del Carrusel ({allImages.length} tomas relacionadas):
                            </p>
                            <span className="text-[11px] text-slate-500 font-mono">
                                Haz clic en cualquier toma para explorar
                            </span>
                        </div>
                        <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-slate-700">
                            {allImages.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`relative rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                                        currentIndex === idx
                                            ? "border-purple-500 ring-2 ring-purple-500/40 scale-105 shadow-lg shadow-purple-500/20"
                                            : "border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600"
                                    }`}
                                    style={{ width: "72px", height: "50px" }}
                                    title={`Ver toma ${idx + 1}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 right-0 px-1 py-0.5 bg-slate-950/80 text-[9px] font-mono text-white rounded-tl">
                                        #{idx + 1}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Popup Modal Content */}
                <DialogContent className="max-w-5xl bg-slate-950/95 border-purple-500/30 text-white p-4 md:p-6 shadow-2xl backdrop-blur-2xl overflow-hidden rounded-2xl">
                    <DialogHeader className="flex flex-row items-center justify-between pb-3 border-b border-slate-800">
                        <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
                            <Eye className="w-5 h-5 text-purple-400" />
                            {title} {hasMultiple && `(Toma ${currentIndex + 1} de ${allImages.length})`}
                        </DialogTitle>

                        <div className="flex items-center gap-2">
                            <a
                                href={currentImage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-colors"
                            >
                                <span>Abrir resolución original</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </DialogHeader>

                    {/* Full-resolution Image View with Controls */}
                    <div className="relative mt-4 flex items-center justify-center bg-slate-900/60 rounded-xl border border-slate-800 p-2 max-h-[75vh] overflow-hidden group">
                        <img
                            src={currentImage}
                            alt={`${altText} - Toma ${currentIndex + 1}`}
                            className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
                        />

                        {hasMultiple && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/80 hover:bg-purple-600 text-white flex items-center justify-center border border-white/20 shadow-xl transition-all"
                                    title="Anterior"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/80 hover:bg-purple-600 text-white flex items-center justify-center border border-white/20 shadow-xl transition-all"
                                    title="Siguiente"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
