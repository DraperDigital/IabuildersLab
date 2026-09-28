"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
    question: string;
    answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
    {
        question: "¿Cómo accedo al contenido y a la comunidad de Skool?",
        answer: "Tan pronto completas tu inscripción, recibes acceso inmediato a nuestro grupo privado en Skool. Desde la plataforma o la app móvil de Skool tendrás acceso al Classroom con los 4 módulos en video, todas las plantillas descargables, el calendario de llamadas en vivo y el espacio de comunidad para resolver dudas."
    },
    {
        question: "¿Puedo cancelar mi membresía mensual en cualquier momento?",
        answer: "Sí, sin ninguna complicación. No hay contratos ni plazos forzosos. Puedes cancelar tu suscripción en cualquier momento con un solo clic desde la configuración de tu cuenta en Skool."
    },
    {
        question: "¿Necesito saber de diseño o de Inteligencia Artificial?",
        answer: "No. El método está estructurado para que cualquier fundador o creador empiece desde cero en ambos aspectos. Te damos los frameworks exactos, los prompts dirigidos y las plantillas para que no tengas que ser diseñador ni programador para obtener resultados profesionales."
    },
    {
        question: "¿Sirve si mi negocio es 100% digital, de servicios o un SaaS?",
        answer: "Sí, totalmente. El Módulo 4 incluye una variante específica orientada a mockups de interfaz digital, capturas de plataformas y piezas conceptuales de software, en lugar de fotografía de producto físico o e-commerce tradicional."
    },
    {
        question: "¿Y si todavía no tengo un negocio facturando, sino solo una idea?",
        answer: "El Módulo 1 (Diagnóstico y Arquitectura de Negocio) existe exactamente para esa situación: valida, afina o corrige tu propuesta antes de que gastes tiempo o dinero diseñando una marca sobre cimientos que no monetizan."
    },
    {
        question: "¿Cómo funcionan las sesiones en vivo y qué pasa si no puedo asistir?",
        answer: "Las llamadas semanales de revisión y feedback se transmiten en vivo dentro del calendario de Skool y quedan grabadas inmediatamente en la pestaña Classroom. Además, puedes publicar tus entregables en la comunidad en cualquier momento para recibir retroalimentación directa."
    }
];

export function VslFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
                
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Resolvemos tus dudas
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                        Preguntas Frecuentes
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base font-light">
                        Todo lo que necesitas saber sobre la membresía y el Sistema de Marca Vendible.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md overflow-hidden transition-all duration-200 hover:border-white/20"
                            >
                                <button
                                    onClick={() => toggle(idx)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                                >
                                    <span className="text-base sm:text-lg font-semibold text-white">
                                        {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-blue-400 shrink-0 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>

                                {isOpen && (
                                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 font-light leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                                        {item.answer}
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
