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
                            className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl border border-[#F5F2EB]/10 bg-[#0A0B0C] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A46A] cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-[#C9A46A]/60 transition-all duration-500"
                        >
                            <Image
                                src={piece.src}
                                alt={piece.alt}
                                width={piece.width}
                                height={piece.height}
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                                <span className="w-9 h-9 rounded-full bg-[#0A0B0C]/80 border border-[#F5F2EB]/20 backdrop-blur-md flex items-center justify-center text-[#F5F2EB]">
                                    <Maximize2 className="w-4 h-4" />
                                </span>
                            </div>
                        </button>
                        <figcaption className="mt-3 flex items-center justify-between text-xs sm:text-sm text-[#F5F2EB]/80 font-mono tracking-wide px-0.5">
                            <span>{piece.caption}</span>
                            <span className="text-[11px] text-[#C9A46A] opacity-85">
                                0{idx + 1}
                            </span>
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
                <DialogContent className="max-w-5xl bg-[#0D0E10]/95 border-[#C9A46A]/40 text-[#F5F2EB] p-4 sm:p-6 shadow-2xl backdrop-blur-2xl rounded-2xl">
                    <DialogHeader className="pb-2 border-b border-[#F5F2EB]/10">
                        <DialogTitle className="text-base sm:text-lg font-medium text-[#F5F2EB] font-mono">
                            {currentPiece?.caption}
                        </DialogTitle>
                    </DialogHeader>

                    {currentPiece && (
                        <div className="relative flex items-center justify-center bg-[#070809] rounded-xl overflow-hidden py-2">
                            <Image
                                src={currentPiece.src}
                                alt={currentPiece.alt}
                                width={currentPiece.width}
                                height={currentPiece.height}
                                sizes="(max-width: 1024px) 90vw, 900px"
                                className="max-h-[78vh] w-auto h-auto object-contain rounded-lg"
                            />

                            <button
                                type="button"
                                onClick={handlePrev}
                                aria-label="Pieza anterior"
                                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0D0E10]/85 hover:bg-[#C9A46A] hover:text-[#0A0B0C] text-[#F5F2EB] flex items-center justify-center border border-[#F5F2EB]/20 shadow-xl transition-colors cursor-pointer"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                type="button"
                                onClick={handleNext}
                                aria-label="Siguiente pieza"
                                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0D0E10]/85 hover:bg-[#C9A46A] hover:text-[#0A0B0C] text-[#F5F2EB] flex items-center justify-center border border-[#F5F2EB]/20 shadow-xl transition-colors cursor-pointer"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}
