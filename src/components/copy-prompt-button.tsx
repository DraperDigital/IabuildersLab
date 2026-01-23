"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

interface CopyPromptButtonProps {
    promptText: string;
}

export function CopyPromptButton({ promptText }: CopyPromptButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(promptText);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Button
            size="sm"
            variant="outline"
            className="gap-2 border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-200"
            onClick={handleCopy}
        >
            {isCopied ? (
                <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span className="text-emerald-500">Copied!</span>
                </>
            ) : (
                <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy JSON</span>
                </>
            )}
        </Button>
    );
}
