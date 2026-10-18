"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export interface GalleryPiece {
    src: string;
    caption: string;
    alt: string;
    width: number;
    height: number;
}

interface GalleryLightboxProps {
    pieces: GalleryPiece[];
}

export function GalleryLightbox({ pieces }: GalleryLightboxProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const isOpen = selectedIndex !== null;
    const currentPiece = selectedIndex !== null ? pieces[selectedIndex] : null;

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex(selectedIndex === 0 ? pieces.length - 1 : selectedIndex - 1);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex(selectedIndex === pieces.length - 1 ? 0 : selectedIndex + 1);
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
                {pieces.map((piece, idx) => (
                    <figure key={piece.src} className="group flex flex-col">
                        <button
                            type="button"
                            onClick={() => setSelectedIndex(idx)}
                            className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#1B1C1E]/15 bg-[#E3E1DC] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A86A3D] cursor-pointer shadow-[0_20px_45px_rgba(27,28,30,0.12)] hover:border-[#A86A3D]/70 transition-all duration-500"
                        >
                            <Image
                                src={piece.src}
                                alt={piece.alt}
                                width={piece.width}
                                height={piece.height}
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 sm:p-4">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#EEEDEA]/95 border border-[#A86A3D]/40 text-[#A86A3D] backdrop-blur-md shadow-md">
                                    <Maximize2 className="w-4 h-4" />
                                </span>
                            </div>
                        </button>
                        <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/85 font-mono tracking-wide">
                            <span className="text-[#A86A3D] font-bold mr-1.5">
                                {String(idx + 1).padStart(2, "0")}.
                            </span>
                            {piece.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>

            <Dialog
                open={isOpen}
                onOpenChange={(open) => {
                    if (!open) setSelectedIndex(null);
                }}
            >
                <DialogContent className="max-w-5xl bg-[#EEEDEA]/98 border-[#1B1C1E]/15 text-[#1B1C1E] p-3 sm:p-6 backdrop-blur-2xl shadow-2xl">
                    <DialogHeader className="sr-only">
                        <DialogTitle>
                            {currentPiece?.caption ?? "Vista previa de pieza"}
                        </DialogTitle>
                    </DialogHeader>

                    {currentPiece && (
                        <div className="flex flex-col items-center">
                            <div className="relative w-full h-[72vh] max-h-[820px] flex items-center justify-center">
                                <Image
                                    src={currentPiece.src}
                                    alt={currentPiece.alt}
                                    fill
                                    sizes="95vw"
                                    className="object-contain"
                                />

                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    aria-label="Pieza anterior"
                                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EEEDEA]/90 border border-[#1B1C1E]/20 text-[#1B1C1E] flex items-center justify-center hover:bg-[#A86A3D] hover:text-white hover:border-[#A86A3D] transition-colors cursor-pointer shadow-lg"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <button
                                    type="button"
                                    onClick={handleNext}
                                    aria-label="Siguiente pieza"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#EEEDEA]/90 border border-[#1B1C1E]/20 text-[#1B1C1E] flex items-center justify-center hover:bg-[#A86A3D] hover:text-white hover:border-[#A86A3D] transition-colors cursor-pointer shadow-lg"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-sm sm:text-base font-mono text-[#1B1C1E]">
                                    <span className="text-[#A86A3D] font-bold mr-2">
                                        {String((selectedIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                                        {String(pieces.length).padStart(2, "0")}
                                    </span>
                                    {currentPiece.caption}
                                </p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
