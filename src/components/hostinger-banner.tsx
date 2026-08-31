"use client";

import { ArrowRight, Server } from "lucide-react";

interface HostingerBannerProps {
    title?: string;
    description?: string;
    referralUrl?: string;
    couponText?: string;
    className?: string;
}

export function HostingerBanner({
    title = "Contrata tu hosting antes de usar ninguna skill o automatización",
    description = "El plan recomendado te permite alojar hasta 50 webs y aplicaciones de IA e incluye un dominio gratis.",
    referralUrl = "https://www.hostinger.com/mx?REFERRALCODE=1JOSE0514",
    couponText = "Aprovecha hasta un 20% de descuento automático en tu primer plan mediante nuestro enlace oficial.",
    className = ""
}: HostingerBannerProps) {
    return (
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 border border-purple-400/30 p-6 md:p-8 text-white shadow-2xl ${className}`}>
            {/* Background Light Leaks / Glow Effect */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1 space-y-3">
                    {/* Brand / Logo Header */}
                    <div className="flex items-center gap-2 text-purple-200 font-semibold tracking-wide text-sm">
                        <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                            <Server className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-bold text-white tracking-tight text-base">Hostinger</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                        {title}
                    </h3>

                    {/* Subtext */}
                    <p className="text-purple-100/90 text-sm md:text-base leading-relaxed max-w-2xl font-light">
                        {description} {couponText && <span className="font-normal text-white">{couponText}</span>}
                    </p>
                </div>

                {/* CTA Action Button */}
                <div className="shrink-0 w-full md:w-auto">
                    <a
                        href={referralUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-purple-950 font-bold text-sm hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl group"
                    >
                        <span>Ver planes y precios</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    );
}
