"use client";

import { useState } from "react";
import { Maximize2, Eye, ExternalLink, X } from "lucide-react";
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
}

export function PromptImageModal({
    imageUrl,
    altText = "Resultado del Prompt",
    title = "Resultado Visual"
}: PromptImageModalProps) {
    const [isOpen, setIsOpen] = useState(false);

    if (!imageUrl) {
        return (
            <div className="mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-video flex items-center justify-center">
                <p className="text-slate-500 text-sm">Sin imagen de vista previa</p>
            </div>
        );
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {/* Trigger Container */}
            <div className="mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 relative group cursor-pointer">
                {/* Main Preview Image */}
                <div className="aspect-video relative overflow-hidden bg-slate-950">
                    <img
                        src={imageUrl}
                        alt={altText}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* "Ver Imagen" Action Button Overlay */}
                <div className="absolute bottom-4 right-4 z-20">
                    <DialogTrigger asChild>
                        <button className="px-4 py-2.5 bg-slate-900/90 hover:bg-purple-600 text-white font-semibold text-xs md:text-sm rounded-xl border border-purple-500/40 shadow-xl backdrop-blur-md transition-all duration-300 flex items-center gap-2 group-hover:scale-105 group-hover:shadow-purple-500/25">
                            <Eye className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors" />
                            <span>Ver Imagen</span>
                            <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-white ml-0.5" />
                        </button>
                    </DialogTrigger>
                </div>

                {/* Clickable Overlay Trigger */}
                <DialogTrigger asChild>
                    <div className="absolute inset-0 z-10" title="Ver imagen en tamaño completo" />
                </DialogTrigger>
            </div>

            {/* Popup Modal Content */}
            <DialogContent className="max-w-4xl bg-slate-950/95 border-purple-500/30 text-white p-4 md:p-6 shadow-2xl backdrop-blur-2xl overflow-hidden rounded-2xl">
                <DialogHeader className="flex flex-row items-center justify-between pb-3 border-b border-slate-800">
                    <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
                        <Eye className="w-5 h-5 text-purple-400" />
                        {title}
                    </DialogTitle>

                    <div className="flex items-center gap-2">
                        <a
                            href={imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-colors"
                        >
                            <span>Abrir original</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </DialogHeader>

                {/* Full-resolution Image View */}
                <div className="relative mt-4 flex items-center justify-center bg-slate-900/60 rounded-xl border border-slate-800 p-2 max-h-[80vh] overflow-auto">
                    <img
                        src={imageUrl}
                        alt={altText}
                        className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
