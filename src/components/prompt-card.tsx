import { Link } from "@/i18n/routing";
import { ContentItem } from "@/types/content";
import { Badge } from "@/components/ui/badge";
import { Lock, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

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

    if (prompt.id.startsWith('sop-')) {
        return (
            <Card className="group h-full flex flex-col transition-all hover:scale-105 border-purple-500/30 hover:border-purple-500/60 glass-effect overflow-hidden relative bg-slate-900 min-h-[260px]">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-300"></div>

                <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                        <div className="flex gap-2">
                            <Badge variant="outline" className={`${levelColors[prompt.level as keyof typeof levelColors || 'beginner']} border font-semibold text-xs`}>
                                {common(prompt.level || 'beginner')}
                            </Badge>
                            {prompt.category && (
                                <Badge variant="outline" className="bg-slate-950/50 backdrop-blur-md border-white/20 text-white text-xs uppercase tracking-wider">
                                    {prompt.category}
                                </Badge>
                            )}
                        </div>
                        {prompt.is_featured && (
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-600 text-white border-2 border-purple-400">
                                Featured
                            </span>
                        )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-300 transition-colors mt-2">{prompt.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 relative z-10">
                    <p className="text-sm text-muted-foreground line-clamp-3">{prompt.summary}</p>
                </CardContent>
                <CardFooter className="relative z-10 mt-auto">
                    <Link href={`/prompts/${prompt.slug}`} className="w-full">
                        <Button className="w-full tech-gradient group-hover:glow-effect transition-all cursor-pointer font-semibold">
                            Leer Sistema
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        );
    }

    return (
        <Link href={`/prompts/${prompt.slug}`} className="group relative block w-full overflow-hidden rounded-xl bg-slate-900 border border-purple-500/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50">
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2 max-w-[70%]">
                    <Badge variant="outline" className="bg-slate-950/50 backdrop-blur-md border-white/20 text-white text-xs uppercase tracking-wider">
                        {prompt.category || "AI"}
                    </Badge>
                    {prompt.system_type && (
                        <Badge variant="outline" className="bg-blue-600/50 backdrop-blur-md border-blue-400/30 text-white text-xs uppercase tracking-wider">
                            {prompt.system_type}
                        </Badge>
                    )}
                    {prompt.process_state && (
                        <Badge variant="outline" className="bg-emerald-600/50 backdrop-blur-md border-emerald-400/30 text-white text-xs uppercase tracking-wider">
                            BTDI: {prompt.process_state}
                        </Badge>
                    )}
                </div>

                {/* Access Badge */}
                <div className="absolute top-3 right-3">
                    {isLocked ? (
                        <Badge className="bg-amber-500/90 text-slate-950 font-bold border-none gap-1">
                            <Lock className="w-3 h-3" /> PRO
                        </Badge>
                    ) : (
                        <Badge className="bg-emerald-500/90 text-slate-950 font-bold border-none">
                            FREE
                        </Badge>
                    )}
                </div>
            </div>

            {/* Content Info (Overlay at bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-tight group-hover:text-purple-300 transition-colors">
                    {prompt.title}
                </h3>
            </div>
        </Link>
    );
}
