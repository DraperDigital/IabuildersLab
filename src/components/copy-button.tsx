"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface CopyButtonProps {
    text: string;
    label?: string;
    copiedLabel?: string;
    variant?: "default" | "outline" | "ghost" | "secondary";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    showToast?: boolean;
}

export function CopyButton({
    text,
    label = "Copiar",
    copiedLabel = "¡Copiado!",
    variant = "outline",
    size = "sm",
    className = "",
    showToast = true
}: CopyButtonProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!text) return;

        navigator.clipboard.writeText(text);
        setCopied(true);

        if (showToast) {
            toast.success("Prompt copiado al portapapeles");
        }

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <Button
            variant={variant}
            size={size}
            onClick={handleCopy}
            className={`transition-all cursor-pointer ${copied ? "border-emerald-500 text-emerald-400 bg-emerald-950/40" : ""} ${className}`}
        >
            {copied ? (
                <>
                    <Check className="h-3.5 w-3.5 mr-1.5 text-emerald-400" />
                    <span>{copiedLabel}</span>
                </>
            ) : (
                <>
                    <Copy className="h-3.5 w-3.5 mr-1.5 text-slate-300" />
                    <span>{label}</span>
                </>
            )}
        </Button>
    );
}
