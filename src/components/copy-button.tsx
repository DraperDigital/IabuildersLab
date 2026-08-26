"use client"

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
    text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-3 right-3 px-3 py-1.5 bg-purple-600/90 hover:bg-purple-500 text-white rounded-md text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md cursor-pointer flex items-center gap-1.5"
        >
            {copied ? (
                <>
                    <Check className="w-3.5 h-3.5 text-green-300 animate-in fade-in zoom-in duration-200" />
                    <span>¡Copiado!</span>
                </>
            ) : (
                <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                </>
            )}
        </button>
    );
}
