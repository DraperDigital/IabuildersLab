"use client"

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentItem } from "@/types/content";
import { useTranslations } from "next-intl";
import { PaywallModal } from "@/components/paywall-modal";

interface SystemCardProps {
    system: ContentItem;
}

export function SystemCard({ system }: SystemCardProps) {
    const [showPaywall, setShowPaywall] = useState(false);
    // Temporalmente desactivado para permitir acceso sin login/suscripción
    const isLocked = false; // Original: system.paywall_level !== "free_preview";
    const t = useTranslations('Systems');
    const common = useTranslations('Common');

    const levelColors = {
        beginner: "bg-emerald-600 text-white border-emerald-400",
        intermediate: "bg-amber-600 text-white border-amber-400",
        advanced: "bg-rose-600 text-white border-rose-400"
    };

    const getLinkPath = () => {
        return `/${system.type}s/${system.slug}`;
    };

    const getButtonText = () => {
        if (isLocked) {
            return 'unlockSystem';
        }
        return 'readSystem';
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        if (isLocked) {
            e.preventDefault();
            setShowPaywall(true);
        }
    };

    return (
        <>
            <Card className="group h-full flex flex-col transition-all hover:scale-105 border-purple-500/30 hover:border-purple-500/60 glass-effect overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-blue-500/10 transition-all duration-300"></div>

                <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className={`${levelColors[system.level || 'beginner']} border font-semibold text-xs`}>
                            {common(system.level || 'beginner')}
                        </Badge>
                        {system.is_featured && (
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-600 text-white border-2 border-purple-400">
                                Featured
                            </span>
                        )}
                    </div>
                    <CardTitle className="text-lg group-hover:text-purple-300 transition-colors">{system.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 relative z-10">
                    <p className="text-sm text-muted-foreground">{system.summary}</p>
                </CardContent>
                <CardFooter className="relative z-10">
                    {isLocked ? (
                        <Button
                            onClick={handleButtonClick}
                            className="w-full tech-gradient group-hover:glow-effect transition-all"
                        >
                            {t(getButtonText())}
                        </Button>
                    ) : (
                        <Link href={getLinkPath()} className="w-full">
                            <Button className="w-full tech-gradient group-hover:glow-effect transition-all">
                                {t(getButtonText())}
                            </Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>

            <PaywallModal
                open={showPaywall}
                onOpenChange={setShowPaywall}
                contentType="system"
            />
        </>
    );
}
