"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Mail } from "lucide-react";

interface FAQItem {
    question: string;
    answer: React.ReactNode;
}

const FAQS: FAQItem[] = [
    {
        question: "¿Necesito pagar Midjourney o Nano Banana?",
        answer: "No. El método funciona con cualquier generador que acepte imagen de referencia; casi todos tienen prueba gratis o créditos diarios."
    },
    {
        question: "¿Sirve si nunca he usado IA generativa?",
        answer: "Sí. La guía va paso a paso desde la foto oficial; si nunca has generado una imagen, empieza por el casting de la Fase 01."
    },
    {
        question: "¿Funciona para producto o marca?",
        answer: "El método está hecho para personajes. Los principios (una sola fuente, referencia fija, variar solo lo necesario) sirven para producto, pero los ejemplos y plantillas son de personajes."
    },
    {
        question: "¿Cuánto tiempo tengo acceso?",
        answer: "De por vida, con las actualizaciones de la guía incluidas."
    },
    {
        question: "¿Cómo recibo soporte?",
        answer: (
            <div className="space-y-2">
                <p>Cuentas con soporte directo del equipo de IA Builders Lab por correo y WhatsApp:</p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                        href="https://wa.me/5215500000000?text=Hola%2C%20tengo%20una%20duda%20sobre%20la%20gu%C3%ADa%20REALISMO%20Blueprint"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 hover:text-white hover:bg-emerald-500/20 text-xs font-medium transition-all"
                    >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                        Hablar por WhatsApp
                    </a>
                    <a
                        href="mailto:soporte@iabuilderslab.com.mx"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-500/20 text-xs font-medium transition-all"
                    >
                        <Mail className="w-3.5 h-3.5 text-purple-400" />
                        soporte@iabuilderslab.com.mx
                    </a>
                </div>
            </div>
        )
    },
    {
        question: "¿Qué diferencia hay entre la guía y el bundle?",
        answer: "La guía es el método completo en PDF (23 páginas + plantillas listas para copiar). El bundle agrega la masterclass grabada de 50 a 60 minutos con el proceso en pantalla, el pack de prompts del caso Megan, las skills para Claude y los ejemplos en alta resolución."
    },
    {
        question: "¿Necesito entrenar un LoRA?",
        answer: "No. Es opcional; sin LoRA el método funciona con tus hojas de referencia."
    }
];

export function CourseFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden" id="faq">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Preguntas Frecuentes
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Resolvemos tus dudas</h2>
                    <p className="text-slate-400 text-sm md:text-base">Respuestas transparentes sobre la guía y el bundle de REALISMO Blueprint.</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border border-slate-800 rounded-xl bg-slate-900/60 overflow-hidden transition-all duration-200 hover:border-purple-500/30"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full p-5 text-left font-semibold text-white flex items-center justify-between gap-4 text-base md:text-lg focus:outline-none"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-5 pb-5 pt-1 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/50 bg-slate-900/30">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
