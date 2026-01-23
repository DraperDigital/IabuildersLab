"use client";

import { useState } from "react";
import { ContentItem } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check, MessageSquare, Search, FileText, Share2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface TextPromptCardProps {
    prompt: ContentItem;
}

export function TextPromptCard({ prompt }: TextPromptCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            await navigator.clipboard.writeText(prompt.body_markdown || prompt.title);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const getCategoryIcon = (category: string) => {
        switch (category?.toLowerCase()) {
            case 'marketing': return <Share2 className="w-3.5 h-3.5" />;
            case 'seo': return <Search className="w-3.5 h-3.5" />;
            case 'social media': return <MessageSquare className="w-3.5 h-3.5" />;
            default: return <FileText className="w-3.5 h-3.5" />;
        }
    };

    return (
        <Link
            href={`/prompts/${prompt.slug}`}
            className="group relative flex flex-col md:flex-row md:items-center justify-between p-5 rounded-xl bg-slate-900/50 border border-purple-500/10 hover:border-purple-500/30 hover:bg-slate-900 transition-all duration-300 gap-4"
        >
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="bg-purple-500/5 border-purple-500/20 text-purple-300 text-[10px] uppercase tracking-wider gap-1.5 py-0.5">
                        {getCategoryIcon(prompt.category || '')}
                        {prompt.category || "General"}
                    </Badge>
                    {prompt.paywall_level === "pro" && (
                        <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[10px] font-bold">
                            PRO
                        </Badge>
                    )}
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-1">
                    {prompt.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-1 mt-1 font-light">
                    {prompt.summary}
                </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
                <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                        "h-10 px-4 rounded-lg font-medium transition-all group/btn",
                        copied
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500 hover:text-white"
                    )}
                    onClick={handleCopy}
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4 mr-2" />
                            Copiado
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Quick Copy
                        </>
                    )}
                </Button>
            </div>

            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/2 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </Link>
    );
}
