import { Link } from "@/i18n/routing";
import { ContentItem } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Lock, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { isSopItem } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";

interface PromptCardProps {
    prompt: ContentItem;
}

export function PromptCard({ prompt }: PromptCardProps) {
    const isLocked = prompt.paywall_level === "pro" || prompt.paywall_level === "plus";
    const isFree = prompt.paywall_level === "access" || prompt.paywall_level === "free_preview";
    const common = useTranslations('Common');

    const levelColors = {
        beginner: "bg-emerald-600 text-white border-emerald-400",
        intermediate: "bg-amber-600 text-white border-amber-400",
        advanced: "bg-rose-600 text-white border-rose-400"
    };

    const promptCopyText = prompt.prompt_text || prompt.body_markdown || prompt.summary || prompt.title;

    if (isSopItem(prompt)) {
        const isSystemSop = prompt.id.startsWith('sop-') || prompt.title.toLowerCase().startsWith('sop:');
        return (
            <Card className="group h-full flex flex-col transition-all hover:scale-[1.02] border-purple-500/30 hover:border-purple-500/60 glass-effect overflow-hidden relative bg-slate-900 min-h-[280px]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-300"></div>

                <CardHeader className="relative z-10 pb-2">
                    <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                        <div className="flex gap-2 items-center">
                            <Badge variant="outline" className={`${levelColors[prompt.level as keyof typeof levelColors || 'beginner']} border font-semibold text-xs`}>
                                {common(prompt.level || 'beginner')}
                            </Badge>
                            {prompt.category && (
                                <Badge variant="outline" className="bg-slate-950/50 backdrop-blur-md border-white/20 text-white text-xs uppercase tracking-wider font-mono">
                                    {prompt.category}
                                </Badge>
                            )}
                        </div>
                        {prompt.is_featured && (
                            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-600 text-white border border-purple-400 uppercase tracking-wider font-mono">
                                Featured
                            </span>
                        )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-300 transition-colors mt-2">{prompt.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 relative z-10 pb-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{prompt.summary}</p>
                </CardContent>
                <CardFooter className="relative z-10 mt-auto pt-0 flex gap-2">
                    <Link href={`/prompts/${prompt.slug}`} className="flex-1">
                        <Button className="w-full tech-gradient group-hover:glow-effect transition-all cursor-pointer font-semibold text-xs">
                            {isSystemSop ? "Leer Sistema" : "Leer Prompt"}
                        </Button>
                    </Link>
                    <CopyButton
                        text={promptCopyText}
                        variant="secondary"
                        size="sm"
                        className="border-purple-500/30 bg-slate-950/80 hover:bg-purple-500/20 text-purple-200"
                    />
                </CardFooter>
            </Card>
        );
    }

    return (
        <div className="group relative block w-full overflow-hidden rounded-xl bg-slate-900 border border-purple-500/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50">
            <Link href={`/prompts/${prompt.slug}`}>
                {/* Image Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                    {prompt.featured_image_url ? (
                        <Image
                            src={prompt.featured_image_url}
                            alt={prompt.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-600">
                            <ImageIcon className="h-12 w-12" />
                        </div>
                    )}

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2 max-w-[65%] z-10">
                        <Badge variant="outline" className="bg-slate-950/80 backdrop-blur-md border-white/20 text-white text-[10px] uppercase tracking-wider font-mono">
                            {prompt.category || "AI"}
                        </Badge>
                        {prompt.system_type && (
                            <Badge variant="outline" className="bg-blue-600/60 backdrop-blur-md border-blue-400/30 text-white text-[10px] uppercase tracking-wider font-mono">
                                {prompt.system_type}
                            </Badge>
                        )}
                    </div>

                    {/* Access Badge */}
                    <div className="absolute top-3 right-3 z-10 flex gap-1.5 items-center">
                        {isLocked ? (
                            <Badge className="bg-amber-500/90 text-slate-950 font-bold border-none gap-1 text-[10px]">
                                <Lock className="w-3 h-3" /> PRO
                            </Badge>
                        ) : (
                            <Badge className="bg-emerald-500/90 text-slate-950 font-bold border-none text-[10px]">
                                FREE
                            </Badge>
                        )}
                    </div>

                    {/* Content Info (Overlay at bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight group-hover:text-purple-300 transition-colors">
                            {prompt.title}
                        </h3>
                        <div className="pt-1">
                            <CopyButton
                                text={promptCopyText}
                                variant="secondary"
                                size="sm"
                                className="w-full bg-slate-950/80 hover:bg-purple-600/80 border-purple-500/40 text-white text-xs backdrop-blur-md"
                            />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
