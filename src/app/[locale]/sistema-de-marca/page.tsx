"use client";

import { useState } from "react";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Check, 
    X, 
    ShieldCheck, 
    Sparkles, 
    AlertCircle, 
    Layers, 
    Award, 
    Briefcase, 
    Building2, 
    Stethoscope, 
    Beer, 
    Compass, 
    ChevronRight,
    Lock,
    Users
} from "lucide-react";
import { VslPlayer } from "@/components/vsl/vsl-player";
import { VslCurriculum } from "@/components/vsl/vsl-curriculum";
import { VslBonuses } from "@/components/vsl/vsl-bonuses";
import { VslPricing } from "@/components/vsl/vsl-pricing";
import { VslFaq } from "@/components/vsl/vsl-faq";

export default function SistemaDeMarcaLandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30 font-sans antialiased overflow-x-hidden">
            
            {/* Top Navigation Bar */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
                    
                    {/* Brand / Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-0.5 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <span className="font-mono font-bold text-white text-base">IAB</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-white tracking-tight">IA Builders Lab</span>
                            <span className="text-[11px] text-blue-400 font-mono">Sistema de Marca Vendible</span>
                        </div>
                    </div>

                    {/* Nav Anchors */}
                    <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
                        <a href="#problema" className="hover:text-white transition-colors">El Fundamento</a>
                        <a href="#curriculum" className="hover:text-white transition-colors">4 Módulos</a>
                        <a href="#bonos" className="hover:text-white transition-colors">Bonos</a>
                        <a href="#planes" className="hover:text-white transition-colors">Planes</a>
                        <a href="#instructor" className="hover:text-white transition-colors">Quién Imparte</a>
                        <a href="#faq" className="hover:text-white transition-colors">Preguntas</a>
                    </nav>

                    {/* Action Button */}
                    <div className="flex items-center gap-3">
                        <a href="#planes">
                            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                                Unirme a la Comunidad →
                            </Button>
                        </a>
                    </div>

                </div>
            </header>

            {/* HERO SECTION (VSL CORE) */}
            <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden">
                {/* Antigravity Deep Spatial Background Lights */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />
                <div className="absolute top-80 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-5xl">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span>SISTEMA DE MARCA VENDIBLE · COMUNIDAD PRIVADA EN SKOOL</span>
                    </div>

                    {/* H1 Main Title */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                        De la idea a un negocio con marca propia —{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                            en 4 módulos, no en teoría.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                        El mismo sistema que usamos en <strong className="text-white font-semibold">IA Builders Lab</strong> para diagnosticar negocios, construir identidad de marca, producir contenido estratégico y generar imagen y video con IA —{" "}
                        <span className="text-blue-300 font-medium">aplicado a TU negocio</span> dentro de nuestra comunidad en Skool.
                    </p>

                    {/* THE VSL VIDEO PLAYER */}
                    <div className="mb-12">
                        <VslPlayer 
                            title="Cómo construir un Sistema de Marca Vendible en 4 módulos"
                            duration="14:40 min"
                        />
                    </div>

                    {/* Primary CTA Button */}
                    <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
                        <a href="#planes" className="w-full">
                            <Button 
                                size="lg" 
                                className="w-full h-14 sm:h-16 text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl shadow-[0_0_35px_rgba(59,130,246,0.4)] transition-all transform hover:scale-[1.02] cursor-pointer"
                            >
                                Unirme a la Comunidad en Skool →
                            </Button>
                        </a>

                        {/* Authority Under-Hero Banner */}
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed font-light text-center">
                            <p>
                                🎯 <strong>Creado por alguien que opera negocios reales</strong>, no solo vende cursos sobre ellos:{" "}
                                <span className="text-slate-200">13+ años organizando eventos, juez internacional de hidromiel, y dueño de marcas en operación como Vallehalla y Syntergia.</span>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* THE PROBLEM / DIAGNOSIS SECTION */}
            <section id="problema" className="py-24 bg-slate-900/40 border-y border-white/5 relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block py-1 px-3 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 font-semibold text-xs tracking-wider uppercase mb-4">
                            El Diagnóstico Real
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            Tu marca no tiene un problema de diseño.
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
                                Tiene un problema de fundamento.
                            </span>
                        </h2>
                    </div>

                    {/* 4 Pain Point Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        
                        <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-white mb-1">
                                    Propuesta de valor indistinguible
                                </h3>
                                <p className="text-sm text-slate-400 font-light leading-relaxed">
                                    Tu propuesta de valor suena exactamente igual a la de tus competidores — y en el fondo lo sabes cada vez que la explicas.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-white mb-1">
                                    Manuales de marca en PDF olvidados
                                </h3>
                                <p className="text-sm text-slate-400 font-light leading-relaxed">
                                    Contrataste una agencia, te entregaron un manual de marca en PDF de 40 páginas, y nadie en tu negocio lo volvió a abrir jamás.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-white mb-1">
                                    Contenido con IA genérico y artificial
                                </h3>
                                <p className="text-sm text-slate-400 font-light leading-relaxed">
                                    Intentas usar IA para generar contenido y todo se ve — y se nota a kilómetros — genérico, repetitivo y sin alma de marca.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 flex items-start gap-4">
                            <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold text-white mb-1">
                                    Publicaciones erráticas sin sistema
                                </h3>
                                <p className="text-sm text-slate-400 font-light leading-relaxed">
                                    Publicas cuando te acuerdas o por ansiedad de visibilidad, no porque tengas un sistema editorial predecible y estratégico.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* The Core Revelation: The Correct Order */}
                    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-blue-950/30 to-slate-950 border border-blue-500/30 text-center relative overflow-hidden">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-base sm:text-lg text-slate-300 font-light mb-6">
                                El problema no es que te falte disciplina ni creatividad. Es que nadie te enseñó el <strong className="text-white font-semibold">orden correcto</strong>:
                            </p>

                            {/* The 4-Step Chain */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-center">
                                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">Paso 1</span>
                                    <span className="text-sm font-bold text-white">Negocio</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-center">
                                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">Paso 2</span>
                                    <span className="text-sm font-bold text-white">Marca</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-center">
                                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">Paso 3</span>
                                    <span className="text-sm font-bold text-white">Contenido</span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-center">
                                    <span className="text-[10px] font-mono text-blue-300 uppercase tracking-widest block mb-1">Paso 4</span>
                                    <span className="text-sm font-bold text-white">Producción IA</span>
                                </div>
                            </div>

                            <p className="text-base sm:text-lg font-medium text-white">
                                Ese orden — completo, sin saltarse pasos — es exactamente el <span className="text-blue-400 font-bold">Sistema de Marca Vendible</span>.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* IA BUILDERS LAB PROOF & REAL BUSINESSES */}
            <section className="py-24 relative bg-slate-950">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                            <Briefcase className="w-3.5 h-3.5" />
                            Comprobado en el Campo
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                            El mismo sistema que usamos con negocios reales —{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                                ahora estructurado para que lo apliques tú.
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                            En IA Builders Lab usamos este proceso con clientes y marcas reales: desde un cirujano vascular construyendo su marca personal, hasta marcas de bebida artesanal y consultoras de turismo. Este programa no es la versión simplificada de ese proceso para principiantes. Es el proceso completo, documentado en 4 módulos, con un entregable real al final de cada uno.
                        </p>
                    </div>

                    {/* Real Client Case Badges */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
                                    <Stethoscope className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    Marca Personal Médica
                                </h3>
                                <p className="text-xs text-blue-300 font-medium mb-3">
                                    Cirujano Vascular de Alta Especialidad
                                </p>
                                <p className="text-xs text-slate-400 font-light leading-relaxed">
                                    Posicionamiento de autoridad médica, generación de contenido educativo sin tecnicismos excesivos y sistema de captación privada de pacientes.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                                Entregables BMA + ARCH aplicados
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-4">
                                    <Beer className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    Vallehalla & Bebidas Artesanales
                                </h3>
                                <p className="text-xs text-amber-300 font-medium mb-3">
                                    Marca de Hidromiel y Cerveza en Operación
                                </p>
                                <p className="text-xs text-slate-400 font-light leading-relaxed">
                                    Identidad visual premium con IA, narrativa de producto, packaging y calendario editorial de alto impacto para venta retail y eventos.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                                Sistema de Producción Visual IA
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-4">
                                    <Building2 className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    Syntergia & Consultoría B2B
                                </h3>
                                <p className="text-xs text-purple-300 font-medium mb-3">
                                    Sistemas Tecnológicos para Turismo
                                </p>
                                <p className="text-xs text-slate-400 font-light leading-relaxed">
                                    Arquitectura de propuesta de valor corporativa, automatización de prospección y gobernanza de marca a través de design-system.md.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-slate-500 font-mono">
                                Framework BMA + Gobernanza Digital
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 4 MODULES CURRICULUM */}
            <VslCurriculum />

            {/* EXCLUSIVE BONUSES (SKILLS + AUTOMATIONS) */}
            <VslBonuses />

            {/* PRICING (MEMBRESÍA SKOOL MENSUAL VS ANUAL) */}
            <VslPricing />

            {/* QUALIFICATION FILTER: IS THIS FOR YOU? */}
            <section className="py-24 bg-slate-950 border-t border-white/5 relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                    
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-4">
                            Filtro de Calificación
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                            ¿Es esto para ti?
                        </h2>
                        <p className="text-slate-400 text-sm sm:text-base font-light">
                            Queremos asegurarnos de que este programa sea exactamente lo que tu negocio necesita hoy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* FOR YOU */}
                        <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/10 p-8">
                            <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg mb-6">
                                <Check className="w-6 h-6 p-1 rounded-full bg-emerald-500/20 text-emerald-400" />
                                <span>Es para ti si:</span>
                            </div>
                            <div className="space-y-4 text-sm text-slate-300">
                                <div className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Tienes un negocio en marcha (o estás por lanzarlo) y quieres <strong>dejar de improvisar tu marca y tu contenido</strong>.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Buscas terminar con <strong>entregables reales y operativos</strong> (documento BMA, design-system.md, calendario mensual) en lugar de cuadernos con apuntes.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>Quieres incorporar IA en tu producción visual manteniendo una estética profesional consistente que no parezca generada al azar.</span>
                                </div>
                            </div>
                        </div>

                        {/* NOT FOR YOU */}
                        <div className="rounded-3xl border border-red-500/30 bg-red-950/10 p-8">
                            <div className="flex items-center gap-2 text-red-400 font-bold text-lg mb-6">
                                <X className="w-6 h-6 p-1 rounded-full bg-red-500/20 text-red-400" />
                                <span>No es para ti si:</span>
                            </div>
                            <div className="space-y-4 text-sm text-slate-300">
                                <div className="flex items-start gap-3">
                                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                    <span>Buscas <strong>teoría pasiva de marketing</strong> sin aplicarla a un negocio real en cada módulo.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                    <span>Esperas que alguien más haga todo el trabajo por ti sin que tú ejecutes ningún entregable práctico.</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                    <span>Crees que contratar un logo suelto o publicar una imagen bonita soluciona un problema de fundamentos comerciales.</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* INSTRUCTOR / CREATOR AUTHORITY */}
            <section id="instructor" className="py-24 bg-slate-900/50 border-t border-white/5 relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                    
                    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 sm:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center gap-8">
                        
                        {/* Instructor Avatar Badge */}
                        <div className="relative shrink-0 text-center">
                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-2xl shadow-blue-500/20">
                                <div className="w-full h-full rounded-[22px] bg-slate-950 flex flex-col items-center justify-center p-4">
                                    <Award className="w-12 h-12 text-blue-400 mb-2" />
                                    <span className="text-[11px] font-mono font-bold text-white tracking-widest">IABUILDERS</span>
                                    <span className="text-[10px] text-blue-400 font-mono">LAB</span>
                                </div>
                            </div>
                            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[11px] font-bold">
                                Operador Real
                            </span>
                        </div>

                        {/* Bio Copy */}
                        <div className="space-y-4 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold uppercase tracking-wider">
                                <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                                Quién te va a acompañar en esto
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Este sistema no nació en una pizarra teórica.
                            </h3>

                            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                                Nació de aplicarlo en negocios propios y de clientes reales dentro de <strong className="text-white">IA Builders Lab</strong>. La diferencia entre este programa y cualquier curso común es que está diseñado desde la trinchera operativa:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                                    <span><strong>13+ años</strong> organizando eventos culturales</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                                    <span><strong>Juez internacional</strong> de hidromiel reconocido</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                                    <span>Co-fundador de <strong>Syntergia</strong> (sistemas para turismo)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0" />
                                    <span>Co-propietario de <strong>Vallehalla</strong> (marca en operación)</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* GUARANTEE / RISK REVERSAL */}
            <section className="py-20 bg-slate-950 border-t border-white/5 relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
                    
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
                        <ShieldCheck className="w-8 h-8" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Garantía Condicionada a Entregables
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                        No creemos en garantías pasivas que premian la inacción. Confiamos plenamente en el método: si asistes a las sesiones, completas los ejercicios y entregas los 4 activos de tu marca, y sientes que el sistema no te entregó una arquitectura sólida y aplicable a tu negocio, te devolvemos el <strong className="text-white">100% de tu pago</strong>.
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                        <Check className="w-4 h-4" />
                        <span>Cero riesgo si te comprometes a ejecutar tus 4 entregables.</span>
                    </div>

                </div>
            </section>

            {/* FAQ ACCORDION */}
            <VslFaq />

            {/* FINAL CLOSING CTA SECTION */}
            <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-white/10 relative overflow-hidden text-center">
                {/* Glow ambient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/20 rounded-full blur-[140px] pointer-events-none" />

                <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
                    
                    <span className="inline-block py-1 px-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-semibold text-xs tracking-wider uppercase mb-6">
                        Da el paso definitivo
                    </span>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Deja de improvisar tu marca.
                    </h2>

                    <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-10">
                        Al final de esto no tienes una carpeta de apuntes.{" "}
                        <span className="text-white font-semibold block sm:inline">
                            Tienes un sistema de marca operando en tu negocio.
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                        <a href="#planes" className="w-full">
                            <Button 
                                size="lg" 
                                className="w-full h-14 sm:h-16 text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all transform hover:scale-[1.03] cursor-pointer"
                            >
                                Unirme a la Comunidad en Skool →
                            </Button>
                        </a>
                    </div>

                    <p className="text-xs text-slate-500 mt-6">
                        Acceso inmediato a Skool · Cancela en cualquier momento · Sin contratos forzosos
                    </p>

                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-8 bg-black border-t border-white/5 text-center text-xs text-slate-500">
                <div className="container mx-auto px-4">
                    <p>© {new Date().getFullYear()} IA Builders Lab. Todos los derechos reservados.</p>
                </div>
            </footer>

        </div>
    );
}
