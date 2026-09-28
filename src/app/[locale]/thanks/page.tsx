'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Josefin_Sans } from 'next/font/google';
import { CheckCircle2, MessageCircle, ArrowRight, Instagram, Sparkles, Download, BookOpen, Video, Zap, ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const josefin = Josefin_Sans({ subsets: ['latin'] });

export default function ThankYouPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#07070d] flex items-center justify-center text-white">
                <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
            </div>
        }>
            <ThankYouContent />
        </Suspense>
    );
}

function ThankYouContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type') || '';
    
    const WHATSAPP_NUMBER = "5215500000000"; // Reemplaza con tu número real
    const defaultMessage = "¡Hola! Acabo de adquirir el Social Conversion Pack y quiero empezar.";

    // 1. Flow: Lead Magnet REALISMO (Free Phase 01 downloaded)
    if (type === 'lead-realismo') {
        return (
            <div className="min-h-screen bg-[#07070d] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                <div className="max-w-2xl w-full relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 mb-6 relative shadow-lg shadow-purple-500/20">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Sparkles className="w-3.5 h-3.5" />
                        Registro Confirmado
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">
                        ¡Tu Fase 01 está lista!
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto font-light">
                        Hemos enviado el diagnóstico y la <strong>Fase 01: Foto oficial y ficha de identidad</strong> a tu correo. También puedes descargarla directamente aquí:
                    </p>

                    <div className="mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/downloads/REALISMO-Blueprint-Fase-01.pdf"
                            download="REALISMO-Blueprint-Fase-01.pdf"
                            className="w-full sm:w-auto"
                        >
                            <Button className="w-full sm:w-auto h-13 px-8 rounded-xl bg-slate-900 border border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-950/40 text-sm font-bold flex items-center justify-center gap-2">
                                <Download className="w-4 h-4" />
                                Descargar Fase 01 (PDF Gratuito)
                            </Button>
                        </a>
                    </div>

                    {/* Section 9: Upsell to Full Guide ($9.99 USD) */}
                    <div className="bg-gradient-to-b from-purple-950/40 via-slate-900/90 to-slate-950 border border-purple-500/40 rounded-3xl p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">
                                OFERTA ESPECIAL
                            </span>
                            <span className="text-emerald-400 font-bold text-sm">9.99 USD <span className="text-xs font-normal text-slate-400">(≈ $190 MXN)</span></span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            ¿Quieres el método completo de 4 fases?
                        </h2>
                        
                        <p className="text-slate-300 text-sm mb-6 font-light leading-relaxed">
                            No te quedes a medias. La <strong>Guía completa REALISMO Blueprint (PDF de 23 páginas)</strong> incluye las 4 fases: las 3 hojas de referencia, los roles y cápsula de ropa, el prompt maestro de 8 letras con el caso Megan y el checklist antes de animar en video.
                        </p>

                        <div className="space-y-2 mb-6 text-xs text-slate-300">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>PDF completo de 23 páginas + plantillas listas para copiar</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Garantía de satisfacción de 7 días (devolución del 100%)</span>
                            </div>
                        </div>

                        <Link href="/checkout?plan=realismo-guia" className="block w-full">
                            <Button className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 cursor-pointer">
                                <span>Obtener la Guía Completa — $9.99 USD</span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/courses/avatar-masterclass" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                            ← Volver a la página principal de REALISMO Blueprint
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // 2. Flow: REALISMO Guide Purchase -> Upsell to Bundle for $15.01 USD
    if (type === 'realismo-guia') {
        return (
            <div className="min-h-screen bg-[#07070d] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-2xl w-full relative z-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 mb-6 relative shadow-lg shadow-emerald-500/20">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 tracking-tight">
                        ¡Gracias por tu compra!
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed max-w-xl mx-auto font-light">
                        Tu acceso a la <strong>Guía completa REALISMO Blueprint (PDF de 23 páginas)</strong> ha sido confirmado y enviado a tu correo.
                    </p>

                    {/* Section 9: Upsell to Bundle paying only the difference ($15.01 USD) */}
                    <div className="bg-gradient-to-b from-purple-950/40 via-slate-900/90 to-slate-950 border border-purple-500/40 rounded-3xl p-6 sm:p-8 text-left shadow-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-purple-500/20 text-purple-300">
                                UPGRADE EXCLUSIVO
                            </span>
                            <span className="text-emerald-400 font-bold text-sm">Solo $15.01 USD de diferencia</span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                            ¿Quieres verme hacerlo paso a paso?
                        </h2>
                        
                        <p className="text-slate-300 text-sm mb-6 font-light leading-relaxed">
                            Súmale la masterclass grabada (50 a 60 min), los prompts del caso Megan y las skills para Claude pagando solo la diferencia del Bundle.
                        </p>

                        <div className="space-y-2 mb-6 text-xs text-slate-300">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Masterclass grabada en video (50 a 60 min) con el proceso completo en pantalla</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Pack de prompts del caso Megan (casting, 3 hojas y escenas)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Skills para Claude del método + versión en prompts universales</span>
                            </div>
                        </div>

                        <Link href="/checkout?plan=realismo-bundle-upgrade" className="block w-full">
                            <Button className="w-full h-14 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-purple-900/40 flex items-center justify-center gap-2 cursor-pointer">
                                <span>Sumar la Masterclass y Prompts — $15.01 USD</span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/courses/avatar-masterclass" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
                            ← Volver a REALISMO Blueprint
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Default flow (Social Conversion Pack / general thank-you)
    return (
        <div className={`min-h-screen bg-black text-white selection:bg-[#FF00A8] selection:text-white flex flex-col items-center justify-center p-6 relative overflow-hidden ${josefin.className}`}>

            {/* Background Effects */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0026FF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#FF00A8] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-2xl w-full relative z-10 text-center">
                {/* Success Icon */}
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#0026FF] to-[#FF00A8] mb-8 relative">
                    <div className="absolute inset-0 rounded-full bg-white opacity-20 animate-ping"></div>
                    <CheckCircle2 className="w-12 h-12 text-white relative z-10" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    ¡Gracias por <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0026FF] to-[#FF00A8]">
                        dar el paso!
                    </span>
                </h1>

                <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                    Tu camino hacia una facturación más alta a través de contenido estratégico comienza aquí. Hemos recibido tu solicitud con éxito.
                </p>

                {/* Primary Action Card */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 mb-10 border-[#0026FF]/30 shadow-[0_0_40px_rgba(0,38,255,0.1)]">
                    <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                        <Sparkles className="w-6 h-6 text-[#A6FF2E]" />
                        ¿Qué sigue ahora?
                    </h2>
                    <p className="text-gray-300 mb-8">
                        Para agilizar la entrega de tus activos, haz clic abajo para hablarnos por WhatsApp. Te pediremos unos detalles mínimos para empezar a diseñar.
                    </p>

                    <Button
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultMessage)}`, '_blank')}
                        className="w-full h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(37,211,102,0.3)] cursor-pointer"
                    >
                        <MessageCircle className="w-6 h-6" />
                        Hablar por WhatsApp
                    </Button>
                </div>

                {/* Secondary Actions */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Link href="/landing" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors py-2">
                        Volver a la web
                    </Link>
                    <span className="hidden md:block text-gray-700">|</span>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-gray-400 hover:text-[#FF00A8] transition-colors py-2">
                        <Instagram className="w-5 h-5" />
                        Síguenos para tips
                    </a>
                </div>
            </div>

            {/* Bottom Branding */}
            <div className="absolute bottom-10 left-0 right-0 text-center opacity-30">
                <div className="text-sm font-bold tracking-tighter">
                    SOCIAL<span className="text-[#0026FF]">CONVERSION</span>PACK
                </div>
            </div>
        </div>
    );
}
