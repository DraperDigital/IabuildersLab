'use client';

import { Josefin_Sans } from 'next/font/google';
import { CheckCircle2, MessageCircle, ArrowRight, Instagram, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";

const josefin = Josefin_Sans({ subsets: ['latin'] });

export default function ThankYouPage() {
    const WHATSAPP_NUMBER = "521234567890"; // Reemplaza con tu número real
    const message = "¡Hola! Acabo de adquirir el Social Conversion Pack y quiero empezar.";

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
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')}
                        className="w-full h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-[0_10px_30px_rgba(37,211,102,0.3)]"
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
