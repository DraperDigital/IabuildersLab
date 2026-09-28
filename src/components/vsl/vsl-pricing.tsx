"use client";

import { Check, X, Sparkles, ArrowRight, ShieldCheck, Flame, Users, Calendar, Crown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VslPricingProps {
    monthlyPrice?: string;
    monthlyOriginalPrice?: string;
    annualPrice?: string;
    annualOriginalPrice?: string;
    skoolMonthlyUrl?: string;
    skoolAnnualUrl?: string;
}

export function VslPricing({
    monthlyPrice = "$47",
    monthlyOriginalPrice = "$97",
    annualPrice = "$397",
    annualOriginalPrice = "$564",
    skoolMonthlyUrl = "#", // Reemplazar con tu enlace de Skool
    skoolAnnualUrl = "#"   // Reemplazar con tu enlace de Skool
}: VslPricingProps) {
    const handleJoin = (type: "monthly" | "annual") => {
        const targetUrl = type === "monthly" ? skoolMonthlyUrl : skoolAnnualUrl;
        if (targetUrl && targetUrl !== "#") {
            window.open(targetUrl, "_blank");
        } else {
            alert("¡Próximamente abriremos acceso en Skool! Configura tu enlace en el componente.");
        }
    };

    return (
        <section id="planes" className="py-24 relative overflow-hidden bg-slate-900/50 border-t border-white/5">
            {/* Ambient spatial glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-4">
                        Membresía Skool · Cancela Cuando Quieras
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Únete a la Comunidad Privada.
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            Acompañamiento, sistema y networking real.
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-slate-400 font-light">
                        No compras un curso grabado para ver solo en tu casa. Entras a un entorno vivo en <strong className="text-white font-medium">Skool</strong> con lecciones, plantillas, llamadas en vivo semanales y revisión directa de tu negocio.
                    </p>
                </div>

                {/* 2-Tier Pricing Cards: Mensual vs Anual */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    
                    {/* PLAN 1: MENSUAL */}
                    <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 p-8 flex flex-col justify-between backdrop-blur-xl transition-all hover:border-white/20">
                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                                    Flexibilidad Total
                                </span>
                                <span className="text-xs text-slate-400">Cancela cuando quieras</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1">
                                Membresía Mensual
                            </h3>
                            <p className="text-xs text-blue-300 font-medium mb-6">
                                Acceso Completo a la Comunidad en Skool
                            </p>

                            {/* Price */}
                            <div className="mb-6 pb-6 border-b border-white/10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl sm:text-5xl font-extrabold text-white">{monthlyPrice}</span>
                                    <span className="text-slate-500 text-sm font-medium line-through">{monthlyOriginalPrice}</span>
                                    <span className="text-slate-400 text-xs font-light">USD / al mes</span>
                                </div>
                                <p className="text-xs text-slate-400 mt-2 font-light">
                                    Ideal para probar el sistema, construir tu marca y avanzar a tu ritmo con apoyo continuo.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-8 text-sm">
                                <div className="flex items-start gap-3 text-slate-200">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Classroom de Skool:</strong> Acceso a los 4 módulos del Sistema de Marca</span>
                                </div>
                                <div className="flex items-start gap-3 text-slate-200">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Plantillas oficiales:</strong> BMA, design-system.md y calendario</span>
                                </div>
                                <div className="flex items-start gap-3 text-slate-200">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Llamadas semanales en vivo:</strong> Q&A y calibración en Skool</span>
                                </div>
                                
                                {/* BONUSES */}
                                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 space-y-2 text-xs">
                                    <div className="font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                                        <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                                        <span>3 Bonos Exclusivos Incluidos:</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-slate-300">
                                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                                        <span><strong>Pack de Skills para IA:</strong> Asistentes con la voz y reglas de tu marca</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-slate-300">
                                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                                        <span><strong>Auto-Posteo en Redes:</strong> Publica desde Google Sheets o carpeta</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-amber-300">
                                        <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                        <span><strong>Auto-Creación de Contenido:</strong> Acceso anticipado al liberarse</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 text-slate-400 text-xs pt-1">
                                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                                    <span>Sin contratos ni plazos forzosos. Cancela en 1 clic cuando quieras.</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div>
                            <Button 
                                onClick={() => handleJoin("monthly")}
                                size="lg" 
                                variant="outline"
                                className="w-full h-12 text-sm font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white rounded-xl cursor-pointer"
                            >
                                Unirme al Mes ({monthlyPrice} USD/mes)
                            </Button>
                            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                                <span>Acceso instantáneo a la plataforma de Skool</span>
                            </div>
                        </div>
                    </div>

                    {/* PLAN 2: ANUAL (BEST VALUE) */}
                    <div className="relative rounded-3xl border-2 border-blue-500/50 bg-gradient-to-b from-blue-950/40 via-slate-950 to-slate-950 p-8 flex flex-col justify-between backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                        
                        {/* Highlight Badge */}
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            Ahorra 30% · 2 Meses Gratis
                        </div>

                        <div>
                            <div className="flex items-center justify-between gap-2 mb-4 mt-2">
                                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    Pase Anual Completo
                                </span>
                                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                                    <Crown className="w-3.5 h-3.5 fill-amber-400" />
                                    <span>Mejor Inversión</span>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-1">
                                Membresía Anual
                            </h3>
                            <p className="text-xs text-blue-300 font-medium mb-6">
                                12 Meses de Acompañamiento, Recursos y Mentoría
                            </p>

                            {/* Price */}
                            <div className="mb-6 pb-6 border-b border-white/10">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl sm:text-5xl font-extrabold text-white">{annualPrice}</span>
                                    <span className="text-slate-500 text-sm font-medium line-through">{annualOriginalPrice}</span>
                                    <span className="text-slate-400 text-xs font-light">USD / al año</span>
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Equivalente a solo ~$33 USD/mes (te ahorras 2 meses enteros)</span>
                                </div>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-8 text-sm">
                                <div className="flex items-start gap-3 text-white font-medium">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Todo lo de la Membresía Mensual</strong> garantizado por 1 año</span>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Los 3 Bonos Técnicos Incluidos:</strong> Skills IA + Auto-Posteo + Auto-Creación</span>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Revisión prioritaria de tus entregables</strong> por el equipo de IA Builders Lab</span>
                                </div>
                                <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200">
                                    <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-white block">SESIÓN DE CALIBRACIÓN INICIAL:</strong>
                                        <span>Diagnóstico 1 a 1 de tu negocio para trazar tu plan de acción</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-slate-200">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Acceso a todas las nuevas masterclasses y prompts</strong> del año</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div>
                            <Button 
                                onClick={() => handleJoin("annual")}
                                size="lg" 
                                className="w-full h-14 text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all transform hover:scale-[1.02] cursor-pointer"
                            >
                                Entrar con el Plan Anual ({annualPrice} USD) <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Garantía de satisfacción y soporte prioritario dentro de Skool</span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
