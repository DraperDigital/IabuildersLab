import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ChevronLeft, ChevronRight, Copy, Check, MessageSquare } from "lucide-react";
import { ContentItem } from "@/types/content";
import { PromptSidebar } from "@/components/prompt-sidebar";
import { PromptDisplay } from "@/components/prompt-display";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TextPromptViewProps {
    prompt: ContentItem;
    prevPrompt: ContentItem | null;
    nextPrompt: ContentItem | null;
    categories: string[];
    tags: any[];
    isLocked: boolean;
}

export function TextPromptView({ prompt, prevPrompt, nextPrompt, categories, tags, isLocked }: TextPromptViewProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column: Content */}
            <div className="flex-1 lg:max-w-4xl">
                {/* Navigation */}
                <div className="flex items-center justify-between mb-8">
                    <Link href="/prompts" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Library
                    </Link>

                    <div className="flex items-center gap-3">
                        {prevPrompt && (
                            <Link
                                href={`/prompts/${prevPrompt.slug}`}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 transition-all text-slate-400 hover:text-purple-400 group"
                                title={`Anterior: ${prevPrompt.title}`}
                            >
                                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                            </Link>
                        )}
                        {nextPrompt && (
                            <Link
                                href={`/prompts/${nextPrompt.slug}`}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 transition-all text-slate-400 hover:text-purple-400 group"
                                title={`Siguiente: ${nextPrompt.title}`}
                            >
                                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="border-blue-500/50 text-blue-300">
                            {prompt.category || "General"}
                        </Badge>
                        <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                            Copy Prompt
                        </Badge>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {prompt.title}
                    </h1>
                    <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                        {prompt.summary}
                    </p>
                </div>

                {/* Featured Image (if available) - Added for simple text prompts that have images */}
                {prompt.featured_image_url && (
                    <div className="mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-video relative group">
                        <div className="relative w-full h-full">
                            <Image
                                src={prompt.featured_image_url}
                                alt={prompt.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1200px) 100vw, 1200px"
                                priority
                            />
                        </div>
                    </div>
                )}

                {/* The Prompt Box (Main Feature) */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <MessageSquare className="h-6 w-6 text-purple-400" />
                        The Prompt
                    </h2>
                    <PromptDisplay
                        promptText={prompt.prompt_text || ""}
                        isLocked={isLocked}
                        hideAspectRatio={true}
                    />
                </div>

                {/* Body Content / Context (if different from prompt) */}
                {prompt.body_markdown && prompt.body_markdown !== prompt.prompt_text && (
                    <div className="prose prose-invert max-w-none mb-12 p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                        <h3 className="text-xl font-semibold text-white mb-4">Context & Instructions</h3>
                        <div className="text-slate-300 whitespace-pre-wrap leading-relaxed">
                            {prompt.body_markdown}
                        </div>
                    </div>
                )}

                {/* Footer Navigation */}
                <div className="mt-12 pt-8 border-t border-slate-800/50 flex items-center justify-between">
                    <div>
                        {prevPrompt && (
                            <Link href={`/prompts/${prevPrompt.slug}`} className="group">
                                <div className="text-xs text-slate-500 mb-1 group-hover:text-slate-400 transition-colors">Previous</div>
                                <div className="flex items-center gap-2 text-slate-300 group-hover:text-purple-400 transition-colors">
                                    <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                    <span className="font-medium truncate max-w-[200px]">{prevPrompt.title}</span>
                                </div>
                            </Link>
                        )}
                    </div>
                    <div className="text-right">
                        {nextPrompt && (
                            <Link href={`/prompts/${nextPrompt.slug}`} className="group">
                                <div className="text-xs text-slate-500 mb-1 group-hover:text-slate-400 transition-colors text-right">Next</div>
                                <div className="flex items-center gap-2 text-slate-300 group-hover:text-purple-400 transition-colors justify-end">
                                    <span className="font-medium truncate max-w-[200px]">{nextPrompt.title}</span>
                                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Column: Sidebar */}
            <aside className="w-full lg:w-80 shrink-0">
                <PromptSidebar categories={categories} tags={tags} />
            </aside>
        </div>
    );
}
