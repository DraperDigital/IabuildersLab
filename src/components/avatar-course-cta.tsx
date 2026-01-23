"use client";

import { Link } from "@/i18n/routing";
import { Sparkles, ArrowRight } from "lucide-react";

export function AvatarCourseCTA() {
    return (
        <div className="mb-8 relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />

            {/* Main Container */}
            <div className="relative p-6 bg-slate-900 border border-purple-500/30 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl" />

                <div className="flex items-center gap-5 relative z-10">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Sparkles className="w-6 h-6 text-white animate-[pulse_3s_ease-in-out_infinite]" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white leading-tight">
                            ¿Quieres aprender a aplicar este prompt a tu propio Avatar?
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Descubre el curso paso a paso para crear avatares consistentes y profesionales.
                        </p>
                    </div>
                </div>

                <Link href="/courses/avatar-masterclass" className="relative z-10 w-full md:w-auto">
                    <button className="w-full md:w-auto px-6 py-3 bg-white text-purple-950 font-bold rounded-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap">
                        Ver Curso de Implementación
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                </Link>
            </div>
        </div>
    );
}
