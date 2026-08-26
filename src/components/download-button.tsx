"use client"

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
    title: string;
    content: string;
    label: string;
}

export function DownloadButton({ title, content, label }: DownloadButtonProps) {
    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([content], { type: 'text/markdown;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        const safeTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        element.download = `${safeTitle}-blueprint.md`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <Button 
            onClick={handleDownload}
            className="w-full tech-gradient glow-effect gap-2 font-semibold"
        >
            <Download className="w-4 h-4" />
            {label}
        </Button>
    );
}
