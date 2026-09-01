"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

const FAQS: FAQItem[] = [
    {
        question: "¿Necesito una suscripción de pago a Midjourney/Nano Banana para tomar el curso?",
        answer: "No es estrictamente necesario. Te enseñamos los principios universales de prompt engineering y parámetros de la metodología REALISMO que funcionan tanto en herramientas gratuitas como en plataformas avanzadas de generación."
    },
    {
        question: "¿Sirve si nunca he usado herramientas de IA generativa?",
        answer: "Sí, totalmente. El taller está diseñado desde cero con un enfoque práctico y estructurado. No necesitas conocimientos de programación ni experiencia previa con modelos generativos."
    },
    {
        question: "¿Funciona para otros nichos además de retratos (producto, marca, etc.)?",
        answer: "Absolutamente. Aunque el foco principal es la consistencia de avatares, la metodología de 8 dimensiones REALISMO se aplica a cualquier sujeto visual: avatares de marca, fotografía de producto e-commerce, arquitectura y campañas publicitarias."
    },
    {
        question: "¿Cuánto tiempo tengo acceso al contenido?",
        answer: "Tendrás acceso de por vida al taller completo, a todas las actualizaciones futuras que publiquemos y al material descargable."
    },
    {
        question: "¿Cómo recibo soporte si tengo dudas durante el curso?",
        answer: "Cuentas con soporte en la comunidad privada de IA Builders Lab donde nuestro equipo y otros creadores responden dudas específicas sobre tus implementaciones."
    }
];

export function CourseFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-12 space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Manejo de Objeciones
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Preguntas Frecuentes</h2>
                    <p className="text-slate-400 text-sm md:text-base">Todo lo que necesitas saber antes de inscribirte al workshop.</p>
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
