import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
    Check, 
    Play, 
    Zap, 
    ShieldCheck, 
    BookOpen, 
    FileText, 
    Lock, 
    Unlock, 
    ArrowRight, 
    AlertTriangle, 
    CheckCircle2, 
    XCircle, 
    Sparkles, 
    Sliders, 
    Camera, 
    Layers, 
    MessageCircle,
    Download
} from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { CourseFAQ } from "@/components/course-faq";
import { CreatorBio } from "@/components/creator-bio";
import { LeadMagnetForm } from "@/components/lead-magnet-form";

export const metadata: Metadata = {
    title: "Personajes IA que no cambian de cara · REALISMO Blueprint | IA Builders Lab",
    description: "Método de 4 fases para crear o rescatar un personaje IA con la misma cara en cada foto y video. Guía 9.99 USD, bundle 25 USD.",
    openGraph: {
        title: "Personajes IA que no cambian de cara · REALISMO Blueprint",
        description: "La misma cara en cada foto y video. Con cualquier herramienta. Método de 4 fases para crear o rescatar tu personaje IA.",
        images: [
            {
                url: "/images/courses/avatar-masterclass/megan-hero-presentation.png",
                width: 1200,
                height: 630,
                alt: "REALISMO Blueprint - Consistencia de Personajes IA con Megan"
            }
        ]
    }
};

export default function AvatarMasterclassPage() {
    return (
        <div className="min-h-screen bg-[#07070d] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30">
            <PublicHeader />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-white/5">
                    {/* 1. Megan Hero Photo (Base Layer z-0) */}
                    <div className="absolute top-0 right-0 w-full sm:w-[58%] lg:w-[50%] h-[50%] pointer-events-none select-none z-0 overflow-hidden">
                        <img
                            src="/images/courses/avatar-masterclass/megan-hero-presentation.png"
                            alt="Megan - REALISMO Blueprint Hero"
                            className="w-full h-full object-cover object-[center_top] scale-x-[-1] opacity-75 sm:opacity-85 filter contrast-105"
                        />
                        {/* Soft, natural gradient blending (no harsh dark cuts on the left) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#07070d] via-[#07070d]/30 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07070d] via-[#07070d]/20 to-transparent" />
                        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#07070d] to-transparent" />
                    </div>

                    {/* 2. Blueprint Grid Layer ON TOP of the image (z-[1]) */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-[1]" />

                    {/* 3. Ambient Purple & Indigo Atmospheric Glows (z-[2]) */}
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none z-[2]" />
                    <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-[2]" />

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Hero Content on the Left */}
                        <div className="max-w-2xl lg:max-w-2xl text-left mb-16 pt-2 sm:pt-4">
                                
                                {/* Pill Top Badge */}
                                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-200 text-xs md:text-sm font-semibold tracking-wide uppercase mb-6 shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-md">
                                    <Sparkles className="w-4 h-4 text-purple-300" />
                                    <span>REALISMO Blueprint · Método de Consistencia</span>
                                </div>

                                {/* Headline */}
                                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.08] drop-shadow-md">
                                    Personajes IA que <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
                                        no cambian de cara
                                    </span>
                                </h1>

                                {/* Slide Sub-highlight Pill */}
                                <div className="inline-block px-3.5 py-1.5 rounded-lg bg-purple-950/70 border border-purple-500/30 text-purple-200 text-sm font-medium mb-4 backdrop-blur-md">
                                    La misma cara en cada foto y video. Con cualquier herramienta.
                                </div>

                                {/* Subtitle */}
                                <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light mb-6 max-w-xl">
                                    Un método de 4 fases para crear —o rescatar— tu personaje IA y dejar de generar &quot;gente random&quot;.
                                </p>

                                {/* Presentation Pills */}
                                <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-slate-400 font-mono">
                                    <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-purple-300 backdrop-blur-sm">4 fases</span>
                                    <span>•</span>
                                    <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-purple-300 backdrop-blur-sm">Caso real</span>
                                    <span>•</span>
                                    <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-purple-300 backdrop-blur-sm">Plantillas</span>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                                    <a href="#precios" className="w-full sm:w-auto">
                                        <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white hover:scale-[1.02] transition-all w-full font-bold shadow-[0_0_25px_rgba(168,85,247,0.35)] cursor-pointer">
                                            Quiero la guía — 9.99 USD <span className="text-xs font-normal opacity-85 ml-1">(≈ $190 MXN)</span>
                                        </Button>
                                    </a>
                                    <a href="#lead-magnet" className="w-full sm:w-auto">
                                        <Button size="lg" variant="outline" className="h-14 px-6 text-sm border-purple-500/30 bg-purple-500/10 text-purple-200 hover:text-white hover:bg-purple-900/40 w-full cursor-pointer backdrop-blur-md">
                                            Descarga gratis la Fase 01
                                        </Button>
                                    </a>
                                </div>

                                {/* Real Indicators Only */}
                                <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-medium">
                                    <div className="flex items-center gap-1.5">
                                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>Garantía 7 días</span>
                                    </div>
                                    <span className="text-slate-700 hidden sm:inline">•</span>
                                    <div className="flex items-center gap-1.5">
                                        <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                                        <span>Pago único</span>
                                    </div>
                                    <span className="text-slate-700 hidden sm:inline">•</span>
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                                        <span>Acceso de por vida</span>
                                    </div>
                                    <span className="text-slate-700 hidden sm:inline">•</span>
                                    <a
                                        href="https://www.instagram.com/megan.redhair?igsh=cm15NTR2eGk1OGU0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors underline decoration-purple-500/40 underline-offset-4"
                                    >
                                        <span>@megan.redhair</span>
                                    </a>
                                </div>

                            </div>

                        {/* Megan 3x3 Proof Grid (Above the fold visual anchor) */}
                        <div className="mt-14 max-w-4xl mx-auto">
                            <div className="bg-slate-900/60 border border-purple-500/30 rounded-2xl p-4 sm:p-6 shadow-2xl relative backdrop-blur-xl">
                                
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10 text-xs">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                        <span className="font-mono uppercase tracking-wider text-purple-200 font-semibold">
                                            9 escenas · la misma cara
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[11px]">
                                        <span>Megan es un personaje creado con IA · @megan.redhair</span>
                                    </div>
                                </div>

                                {/* 3x3 Grid */}
                                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                    {[
                                        { img: "/images/courses/avatar-masterclass/gallery-1.jpg", tag: "Frente neutral" },
                                        { img: "/images/courses/avatar-masterclass/megan-juice-dog.jpg", tag: "Playa y mascota" },
                                        { img: "/images/courses/avatar-masterclass/megan-snow-angel.jpg", tag: "Nieve / Exteriores" },
                                        { img: "/images/courses/avatar-masterclass/megan-art-gallery.jpg", tag: "Galería de arte (B&N)" },
                                        { img: "/images/courses/avatar-masterclass/megan-gym-mirror.jpg", tag: "Fitness / Espejo" },
                                        { img: "/images/courses/avatar-masterclass/megan-hotel-lobby.jpg", tag: "Lobby de hotel" },
                                        { img: "/images/courses/avatar-masterclass/megan-oversized-sweater.jpg", tag: "Casual suéter" },
                                        { img: "/images/courses/avatar-masterclass/megan-resultado-terracota.png", tag: "Retrato terracota" },
                                        { img: "/images/courses/avatar-masterclass/gallery-9.jpg", tag: "Macro piel y pecas" }
                                    ].map((shot, idx) => (
                                        <div 
                                            key={idx} 
                                            className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden border border-white/10 bg-slate-950 group hover:border-purple-400/60 transition-all duration-300"
                                        >
                                            <img
                                                src={shot.img}
                                                alt={`Toma de consistencia ${idx + 1} de Megan`}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="eager"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
                                                <span className="text-[10px] text-purple-200 font-mono font-medium drop-shadow">
                                                    {shot.tag}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 pt-3 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 text-center sm:text-left">
                                    <span className="font-light">
                                        Congela los rasgos faciales clave; varía ropa, fondos, iluminación y encuadres con solidez.
                                    </span>
                                    <span className="text-purple-300 font-mono font-medium">9 tomas · 1 sola cara fija</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* 2. Lead Magnet Section (Nuevo) */}
                <section id="lead-magnet" className="py-20 bg-gradient-to-b from-[#07070d] via-purple-950/20 to-[#07070d] relative overflow-hidden border-b border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl relative z-10">
                        <div className="bg-slate-900/80 border border-purple-500/30 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden backdrop-blur-xl">
                            
                            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="text-center max-w-2xl mx-auto mb-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
                                    <Download className="w-3.5 h-3.5" />
                                    Guía Gratuita · Fase 01
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                                    Empieza gratis: diagnóstico + Fase 01
                                </h2>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                    Descubre los 4 errores que le cambian la cara a tu personaje y aprende a redactar su <strong>ficha de identidad</strong> para que tu personaje tenga una base fija.
                                </p>
                            </div>

                            <div className="max-w-xl mx-auto">
                                <LeadMagnetForm />
                            </div>

                        </div>
                    </div>
                </section>

                {/* 3. The Problem Section */}
                <section className="py-24 bg-[#07070d] relative overflow-hidden border-b border-white/5">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-semibold uppercase tracking-wider">
                                <AlertTriangle className="w-3.5 h-3.5" />
                                El Problema
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                ¿Por qué tu personaje cambia de cara?
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg">
                                La IA no tiene memoria de identidad por defecto. Si cometes cualquiera de estos 4 errores, cada generación te arrojará a un desconocido.
                            </p>
                        </div>

                        {/* 4 Problem Cards */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-12">
                            {[
                                {
                                    num: "01",
                                    title: "Lo describes cada vez",
                                    desc: "Escribir la descripción en cada prompt no fija una cara: el texto no tiene memoria y cada generación inventa a alguien nuevo, aunque copies y pegues las mismas palabras.",
                                    example: 'Ejemplo: "mujer rubia, 25 años, ojos azules" te da cinco personas distintas en cinco intentos.'
                                },
                                {
                                    num: "02",
                                    title: "Mezclas fuentes",
                                    desc: "Si combinas la foto de una persona con la ficha descriptiva de tu personaje, la IA intenta promediar ambas referencias y genera a alguien que no se parece a ninguno.",
                                    example: "Ejemplo: subes una foto real y le pegas la descripción de tu personaje."
                                },
                                {
                                    num: "03",
                                    title: "Le pides cosas contradictorias",
                                    desc: "Cuando tu imagen de referencia tiene pecas marcadas y en el prompt le pides \"piel perfecta\", el modelo se bloquea: improvisa piel de plástico y borra los rasgos que le daban identidad.",
                                    example: 'Ejemplo: piel con textura natural + "sin imperfecciones, porcelana".'
                                },
                                {
                                    num: "04",
                                    title: "Editas sobre lo editado",
                                    desc: "Cada vez que corriges una imagen ya generada con inpainting o prompts secundarios, se pierde un porcentaje del rostro original. A la quinta corrección consecutiva, ya es otra persona.",
                                    example: "Ejemplo: cambias fondo, luego ropa, luego pose... siempre sobre la última versión."
                                }
                            ].map((card, i) => (
                                <div 
                                    key={i} 
                                    className="p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-red-500/20 hover:border-red-500/40 transition-colors flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-red-500/10 text-red-300 border border-red-500/20">
                                                ERROR {card.num}
                                            </span>
                                            <XCircle className="w-5 h-5 text-red-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-4 font-light">
                                            {card.desc}
                                        </p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-400 italic">
                                        {card.example}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Closing diagnostic callout */}
                        <div className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-slate-900 to-indigo-900/30 border border-purple-500/30 shadow-xl">
                            <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                                ¿Cuántos de estos errores cometes?
                            </h4>
                            <p className="text-purple-200 text-sm font-medium">
                                Si te pasan 2 o más, este método de 4 fases está diseñado exactamente para ti.
                            </p>
                        </div>

                    </div>
                </section>

                {/* 4. The Method Section */}
                <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5" id="metodo">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                                <Sliders className="w-3.5 h-3.5" />
                                El Método
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                4 fases. Congela la cara, varía el resto.
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg">
                                Cada fase produce un entregable fijo que desbloquea y estabiliza la siguiente.
                            </p>
                        </div>

                        {/* Method Split: Congela la cara vs Varía el resto */}
                        <div className="grid md:grid-cols-2 gap-8 mb-10">
                            
                            {/* Block 1: CONGELA LA CARA */}
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-purple-950/30 to-slate-950 border border-purple-500/30 space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                                            <Lock className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">CONGELA LA CARA</h3>
                                            <span className="text-xs text-purple-300 font-mono">Se hacen una sola vez</span>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="border-purple-500/40 text-purple-200 text-[10px]">
                                        Identidad Fija
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    {/* Fase 01 */}
                                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">01</span>
                                            <h4 className="text-base font-bold text-white">Foto oficial + ficha</h4>
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                                            <strong>Sales con:</strong> Tu foto oficial (rescate o casting desde cero) y la ficha de identidad completa (cara y personalidad).
                                        </p>
                                    </div>

                                    {/* Fase 02 */}
                                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">02</span>
                                            <h4 className="text-base font-bold text-white">Hojas de referencia</h4>
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                                            <strong>Sales con:</strong> 3 hojas de referencia en orden: cara (3×3), cuerpo y expresiones, validadas con la prueba de fuego.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Block 2: VARÍA EL RESTO */}
                            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-indigo-950/30 to-slate-950 border border-indigo-500/30 space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-indigo-500/20">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
                                            <Unlock className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">VARÍA EL RESTO</h3>
                                            <span className="text-xs text-indigo-300 font-mono">Cada vez que creas contenido</span>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="border-indigo-500/40 text-indigo-200 text-[10px]">
                                        Producción Infinita
                                    </Badge>
                                </div>

                                <div className="space-y-4">
                                    {/* Fase 03 */}
                                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">03</span>
                                            <h4 className="text-base font-bold text-white">Roles y cápsula</h4>
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                                            <strong>Sales con:</strong> 3 a 5 roles definidos (trabajo, gym, día a día) y armario cápsula de 8–12 prendas sin diluir la marca.
                                        </p>
                                    </div>

                                    {/* Fase 04 */}
                                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">04</span>
                                            <h4 className="text-base font-bold text-white">Prompt maestro REALISMO</h4>
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed font-light">
                                            <strong>Sales con:</strong> Fotos y videos de la misma cara usando las 8 letras del framework traducidas a lenguaje natural.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Note under the table */}
                        <div className="text-center text-xs sm:text-sm text-slate-400 mb-16 font-light">
                            <span className="text-purple-300 font-medium">Regla operativa:</span> &quot;Las fases 1 y 2 se hacen una sola vez. La 3 y la 4, cada vez que creas contenido.&quot;
                        </div>

                        {/* Contrast Box: NO enseñamos vs SÍ enseñamos */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                    Lo que <span className="text-red-400">NO</span> enseñamos
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        "Hacks temporales que dejan de funcionar con la próxima actualización",
                                        "Parches mal hechos de inpainting interminable",
                                        "Postproducción correctiva que consume horas por cada imagen",
                                        "Promesas de control absoluto sin bases técnicas"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-3 p-3.5 rounded-xl bg-red-500/5 border border-red-500/15 text-red-200/90 text-sm">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                                    Lo que <span className="text-emerald-400">SÍ</span> enseñamos
                                </h3>
                                <div className="space-y-3">
                                    {[
                                        "Estructura sólida de identidad fija desde el primer prompt",
                                        "Ficha de identidad precisa (vago vs utilizable)",
                                        "Estabilidad en la generación en cualquier ángulo o iluminación",
                                        "Criterio estético y técnico para evaluar cada salida",
                                        "Diagnóstico de errores antes de renderizar",
                                        "Paso seguro de imagen estática a video usable"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-slate-200 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                                            </div>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Vago vs. Utilizable Comparison Table */}
                <section className="py-20 bg-[#07070d] border-b border-white/5">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="mb-3 border-purple-500/30 text-purple-300">
                                Fase 01 · La Ficha de Identidad
                            </Badge>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                Vago vs. Utilizable
                            </h3>
                            <p className="text-slate-400 text-sm">
                                La prueba: si tu descripción le queda a dos personas distintas, sigue siendo vaga.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-300 uppercase font-mono text-[11px]">
                                    <tr>
                                        <th className="py-3.5 px-4 font-semibold">Atributo</th>
                                        <th className="py-3.5 px-4 font-semibold text-red-300">✕ Vago (No sirve)</th>
                                        <th className="py-3.5 px-4 font-semibold text-emerald-300">✓ Utilizable</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                                    <tr className="hover:bg-slate-800/20 transition-colors">
                                        <td className="py-4 px-4 font-mono font-bold text-purple-300">Rasgos</td>
                                        <td className="py-4 px-4 text-red-300/80 font-light">&quot;ojos bonitos&quot;</td>
                                        <td className="py-4 px-4 text-emerald-300 font-medium">Ojos azul grisáceo, almendrados</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-md">
                            <p className="text-slate-300 text-sm font-light text-center sm:text-left">
                                La tabla completa y la prueba para saber si tu ficha sirve, en la guía gratuita.
                            </p>
                            <a href="#lead-magnet" className="shrink-0 w-full sm:w-auto">
                                <Button size="sm" className="w-full sm:w-auto bg-purple-600 hover:bg-purple-500 text-white font-semibold px-5 py-2 rounded-xl cursor-pointer">
                                    Descargar guía gratuita
                                </Button>
                            </a>
                        </div>
                    </div>
                </section>

                {/* 5. Megan Real Case Section */}
                <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5" id="caso-megan">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                            <Badge variant="outline" className="mb-2 border-purple-500/30 text-purple-300">
                                Caso Real: Megan
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Existía antes del método. Así la rescatamos.
                            </h2>
                            <p className="text-slate-300 text-base md:text-lg font-light">
                                Misma identidad en cada contexto.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                                <a
                                    href="https://www.instagram.com/megan.redhair?igsh=cm15NTR2eGk1OGU0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all text-sm font-medium"
                                >
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    @megan.redhair
                                </a>
                                <span className="text-xs text-slate-400 font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                                    Megan es un personaje creado con IA.
                                </span>
                            </div>
                        </div>

                        {/* Visual Sequence 1 -> 2 -> 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                            <div className="p-4 rounded-2xl bg-slate-900/40 border border-purple-500/20 text-center space-y-3">
                                <span className="text-xs font-mono font-bold text-purple-300">PASO 1</span>
                                <h4 className="text-sm font-semibold text-white">Foto Oficial (Guía Oficial)</h4>
                                <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
                                    <img 
                                        src="/images/courses/avatar-masterclass/gallery-1.jpg" 
                                        alt="Foto oficial de Megan (playera negra, fondo rojo)" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <p className="text-xs text-slate-400">Playera negra, sonriendo, fondo rojo. La referencia madre que nunca se cambia.</p>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-900/40 border border-purple-500/20 text-center space-y-3">
                                <span className="text-xs font-mono font-bold text-purple-300">PASO 2</span>
                                <h4 className="text-sm font-semibold text-white">Hoja de Cara (9 Tomas Reales)</h4>
                                <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center">
                                    <img 
                                        src="/images/courses/avatar-masterclass/megan-hoja-cara-9tomas.png" 
                                        alt="Hoja de cara real de Megan con fondo gris y 9 tomas" 
                                        className="w-full h-full object-contain bg-[#1c1c1e]" 
                                    />
                                </div>
                                <p className="text-xs text-slate-400">Fondo gris, 9 tomas para fijar la geometría facial en todos los ángulos.</p>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-900/40 border border-purple-500/20 text-center space-y-3">
                                <span className="text-xs font-mono font-bold text-purple-300">PASO 3</span>
                                <h4 className="text-sm font-semibold text-white">Retrato Terracota</h4>
                                <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
                                    <img 
                                        src="/images/courses/avatar-masterclass/megan-resultado-terracota.png" 
                                        alt="Retrato terracota oficial de Megan" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                                <p className="text-xs text-slate-400">Resultado final de la guía: misma identidad aplicada en cualquier nuevo estilo.</p>
                            </div>
                        </div>

                        {/* Professional Context Gallery (Clean & Consistent) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            {[
                                {
                                    label: "Playa & Mascota",
                                    image: "/images/courses/avatar-masterclass/megan-juice-dog.jpg",
                                    alt: "Megan en la playa con smoothie y perro"
                                },
                                {
                                    label: "Nieve & Clima",
                                    image: "/images/courses/avatar-masterclass/megan-snow-angel.jpg",
                                    alt: "Megan en la nieve con traje de esquí"
                                },
                                {
                                    label: "Galería & Movimiento",
                                    image: "/images/courses/avatar-masterclass/megan-art-gallery.jpg",
                                    alt: "Megan en galería de arte en blanco y negro con movimiento"
                                },
                                {
                                    label: "Fitness & Espejo",
                                    image: "/images/courses/avatar-masterclass/megan-gym-mirror.jpg",
                                    alt: "Megan en el gimnasio selfie frente al espejo"
                                },
                                {
                                    label: "Lobby de Hotel",
                                    image: "/images/courses/avatar-masterclass/megan-hotel-lobby.jpg",
                                    alt: "Megan en el lobby de un hotel con luz natural"
                                },
                                {
                                    label: "Casual & Suéter",
                                    image: "/images/courses/avatar-masterclass/megan-oversized-sweater.jpg",
                                    alt: "Megan sonriendo con suéter oversized"
                                },
                                {
                                    label: "Retrato Terracota",
                                    image: "/images/courses/avatar-masterclass/megan-resultado-terracota.png",
                                    alt: "Retrato editorial terracota de Megan"
                                },
                                {
                                    label: "Macro Piel & Pecas",
                                    image: "/images/courses/avatar-masterclass/gallery-9.jpg",
                                    alt: "Detalle extremo de piel y pecas de Megan"
                                }
                            ].map((item, i) => (
                                <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden relative group border border-white/5 bg-slate-900/50">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                        <span className="text-white/90 font-bold text-xs uppercase tracking-widest drop-shadow-lg bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* 6. What's Included & Curriculum (Nuevo temario sin jerga) */}
                <section className="py-24 bg-[#07070d] relative overflow-hidden border-b border-white/5" id="incluye">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                            <Badge variant="outline" className="mb-2 border-purple-500/30 text-purple-300">
                                Contenido Detallado
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Qué incluye cada opción
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg">
                                Transparencia total sobre lo que recibes con la guía completa y con el bundle.
                            </p>
                        </div>

                        {/* 2-Option Feature Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            
                            {/* Guía Completa */}
                            <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-6">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white">Guía completa</h3>
                                        <Badge className="bg-purple-500/10 text-purple-300 border border-purple-500/30">
                                            PDF · 23 páginas
                                        </Badge>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-6">
                                        El método completo por escrito, con plantillas listas para copiar y diagnóstico paso a paso.
                                    </p>

                                    <ul className="space-y-3 text-sm text-slate-300">
                                        {[
                                            "Diagnóstico: los 4 errores que cambian la cara.",
                                            "Fase 01: foto oficial (rescate o casting desde cero), ficha de la cara, vago vs utilizable, ficha de personalidad.",
                                            "Fase 02: las 3 hojas de referencia en orden y la prueba de fuego.",
                                            "Fase 03: roles y cápsula de ropa (8-12 prendas).",
                                            "Fase 04: prompt maestro REALISMO (8 letras) con el caso completo de Megan.",
                                            "El video hereda la imagen + checklist de calidad antes de animar.",
                                            "Herramientas vigentes 2026 (imagen, video y voz) y LoRA opcional.",
                                            "Marco ético y plantillas listas para copiar y pegar."
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-slate-800">
                                    <span className="text-xs text-slate-400 font-mono">Entrega digital instantánea en PDF</span>
                                </div>
                            </div>

                            {/* Bundle */}
                            <div className="p-8 rounded-2xl bg-gradient-to-b from-purple-950/40 via-slate-900/60 to-slate-950 border border-purple-500/40 flex flex-col justify-between space-y-6 relative shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white">Bundle Completo</h3>
                                        <Badge className="bg-purple-600 text-white font-bold">
                                            Recomendado
                                        </Badge>
                                    </div>
                                    <p className="text-slate-300 text-sm mb-6">
                                        Todo lo de la guía más la masterclass grabada en pantalla, el pack de prompts y las skills para Claude.
                                    </p>

                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2.5 font-semibold text-purple-200">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span>Todo lo incluido en la Guía completa (PDF de 23 páginas).</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Masterclass grabada (50 a 60 min):</strong> el proceso completo en pantalla con Megan de principio a fin.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Pack de prompts del caso Megan:</strong> casting, las 3 hojas de referencia y escenas completas.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Skills para Claude del método:</strong> con versión en prompts sueltos para usar con cualquier herramienta.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Ejemplos en alta resolución:</strong> hojas de Megan sin compresión y archivos listos para inspeccionar.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-purple-500/20 flex items-center justify-between text-xs text-purple-300">
                                    <span>Acceso inmediato a la grabación y recursos</span>
                                    <span className="font-mono">50–60 min</span>
                                </div>
                            </div>

                        </div>

                        {/* Temario Desglosado de la Masterclass (Sin jerga técnica) */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                                <FileText className="w-5 h-5 text-purple-400" />
                                Temario de la Masterclass (Bundle)
                            </h3>
                            <p className="text-xs text-slate-400 mb-6">
                                Proceso directo y práctico, sin jerga innecesaria:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 1</span>
                                    <h4 className="text-sm font-semibold text-white">Avatar base</h4>
                                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                                        Foto oficial, ficha y hoja de cara: la identidad fija desde el inicio para que el rostro nunca cambie.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 2</span>
                                    <h4 className="text-sm font-semibold text-white">Variar sin romper</h4>
                                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                                        Roles, cápsula y prompt maestro: cambiar ropa, fondo y encuadre sin perder la cara de tu personaje.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 3</span>
                                    <h4 className="text-sm font-semibold text-white">Imagen → video</h4>
                                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                                        Animar desde una imagen aprobada: qué se hereda y cómo evitar que la cara cambie cuadro a cuadro.
                                    </p>
                                </div>

                                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl space-y-1.5">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 4</span>
                                    <h4 className="text-sm font-semibold text-white">Voz y coherencia</h4>
                                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                                        Una sola voz fija y lip-sync limpio para usar el personaje en videos reales y redes sociales.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 7. Precios Section (Reemplaza tabla anterior) */}
                <section className="py-24 bg-gradient-to-b from-[#07070d] via-purple-950/15 to-[#07070d] relative overflow-hidden" id="precios">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                                <Zap className="w-3.5 h-3.5" />
                                Precios Honestos
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                                Invierte en consistencia real
                            </h2>
                            <p className="text-slate-400 text-base md:text-lg">
                                Elige cómo quieres implementar el método.
                            </p>
                        </div>

                        {/* 2 Pricing Cards */}
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10 items-stretch">
                            
                            {/* Card 1: Guía Completa */}
                            <Card className="p-8 bg-slate-900/60 border-slate-800 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all">
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Guía completa</h3>
                                        <p className="text-slate-400 text-xs mt-1">
                                            Aprende leyendo y ejecuta a tu propio ritmo.
                                        </p>
                                    </div>

                                    <div className="py-2">
                                        <div className="flex items-baseline gap-2 text-white">
                                            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">9.99</span>
                                            <span className="text-slate-400 font-mono text-sm">USD</span>
                                            <span className="text-xs text-slate-500 ml-1">(≈ $190 MXN)</span>
                                        </div>
                                        <span className="text-xs text-emerald-400 font-medium">Pago único · Acceso de por vida</span>
                                    </div>

                                    <div className="pt-4 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300">
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                            <span>PDF completo de 23 páginas con la metodología</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                            <span>Plantillas de ficha de identidad y prompt maestro</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                            <span>Checklist de calidad antes de animar en video</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                                            <span>Actualizaciones futuras del documento incluidas</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link href="/checkout?plan=realismo-guia" className="w-full block">
                                        <Button size="lg" variant="outline" className="w-full h-14 border-purple-500/40 text-purple-200 hover:text-white hover:bg-purple-900/30 font-bold text-base cursor-pointer">
                                            Comprar la guía — 9.99 USD
                                        </Button>
                                    </Link>
                                </div>
                            </Card>

                            {/* Card 2: Bundle (Recomendado) */}
                            <Card className="p-8 bg-gradient-to-b from-purple-950/40 via-slate-900/80 to-slate-950 border-purple-500/50 rounded-2xl flex flex-col justify-between space-y-6 relative shadow-[0_0_50px_rgba(168,85,247,0.2)] hover:border-purple-400 transition-all">
                                
                                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg">
                                    Recomendado
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Bundle</h3>
                                        <p className="text-purple-200 text-xs mt-1">
                                            Mira el proceso en pantalla, copia los prompts y acelera.
                                        </p>
                                    </div>

                                    <div className="py-2">
                                        <div className="flex items-baseline gap-2 text-white">
                                            <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-200">
                                                25
                                            </span>
                                            <span className="text-slate-400 font-mono text-sm">USD</span>
                                            <span className="text-xs text-slate-400 ml-1">(≈ $470 MXN)</span>
                                        </div>
                                        <span className="text-xs text-emerald-400 font-medium">Pago único · Acceso de por vida</span>
                                    </div>

                                    <div className="pt-4 border-t border-purple-500/30 space-y-2.5 text-xs text-slate-200">
                                        <div className="flex items-start gap-2 font-semibold text-purple-200">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span>Guía completa en PDF (23 páginas) + plantillas</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Masterclass grabada de 50 a 60 min:</strong> proceso en pantalla</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Pack de prompts del caso Megan:</strong> hojas y escenas</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Skills para Claude:</strong> con versión en prompts universales</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Archivos de Megan en alta resolución:</strong> hojas sin compresión</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Link href="/checkout?plan=realismo-bundle" className="w-full block">
                                        <Button size="lg" className="w-full h-14 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-lg shadow-purple-900/40 cursor-pointer">
                                            Quiero el bundle — 25 USD
                                        </Button>
                                    </Link>
                                </div>
                            </Card>

                        </div>

                        {/* Risk Reversal Guarantee */}
                        <div className="max-w-2xl mx-auto text-center space-y-2 p-5 rounded-xl bg-slate-900/40 border border-white/5">
                            <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-semibold">
                                <ShieldCheck className="w-5 h-5 shrink-0" />
                                <span>Garantía de 7 días: si el método no te sirve, te devolvemos tu pago sin preguntas.</span>
                            </div>
                            <p className="text-slate-500 text-xs">
                                Pago único · Acceso de por vida · Los montos en pesos mexicanos son aproximados al tipo de cambio.
                            </p>
                        </div>

                    </div>
                </section>

                {/* 8. Stack de Herramientas (Actualizado a Septiembre 2026) */}
                <section className="py-20 bg-slate-950 border-b border-white/5 relative overflow-hidden" id="herramientas">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        
                        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                                Stack de Herramientas
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                                ¿Con qué herramientas funciona?
                            </h3>
                            <p className="text-slate-400 text-xs sm:text-sm">
                                Vigente a septiembre 2026. El método funciona con cualquier herramienta que acepte imagen de referencia.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            
                            {/* Imagen */}
                            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
                                <div className="text-xs font-mono font-bold text-purple-400 uppercase">01 · Imagen</div>
                                <h4 className="text-base font-bold text-white">Generación & Edición</h4>
                                <ul className="text-xs text-slate-300 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                        <span><strong>Nano Banana Pro:</strong> la más fuerte en retención de identidad.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                        <span><strong>GPT Image 2:</strong> excelente para prompts largos y casting.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                        <span><strong>FLUX.2:</strong> fotorrealismo extremo y textura de piel.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Video */}
                            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
                                <div className="text-xs font-mono font-bold text-indigo-400 uppercase">02 · Video</div>
                                <h4 className="text-base font-bold text-white">Animación & Dinámicas</h4>
                                <ul className="text-xs text-slate-300 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                        <span><strong>Kling 3.0:</strong> movimiento coherente de planos medios.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                        <span><strong>Seedance 2.5:</strong> gran fidelidad de texturas.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                        <span><strong>Veo 3.1:</strong> encuadres cinemáticos y estabilidad.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Voz & Lip-Sync */}
                            <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 space-y-3">
                                <div className="text-xs font-mono font-bold text-pink-400 uppercase">03 · Voz</div>
                                <h4 className="text-base font-bold text-white">Audio & Sincronía</h4>
                                <ul className="text-xs text-slate-300 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                                        <span><strong>ElevenLabs:</strong> diseño de una voz fija para tu personaje.</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                                        <span><strong>HeyGen o Hedra:</strong> lip-sync limpio y gesticulación.</span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400 max-w-2xl mx-auto">
                            <span className="text-slate-300 font-semibold">¿Y Midjourney?</span> Es muy estética, pero en consistencia de cara queda por debajo de estas herramientas.
                        </div>

                    </div>
                </section>

                {/* 10. Creator Bio */}
                <CreatorBio />

                {/* 11. FAQ */}
                <CourseFAQ />

                {/* Final Call to Action */}
                <section className="py-20 bg-gradient-to-t from-purple-950/30 to-[#07070d] relative overflow-hidden border-t border-white/5">
                    <div className="container mx-auto px-4 max-w-3xl text-center relative z-10 space-y-6">
                        
                        <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-300 shadow-lg shadow-purple-500/20">
                            <Lock className="w-6 h-6" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Congela la cara. Varía el resto.
                        </h2>

                        <p className="text-slate-300 text-sm md:text-base font-light max-w-xl mx-auto">
                            Empieza hoy con la guía completa (9.99 USD) o súmale la masterclass grabada con el bundle (25 USD).
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                            <a href="#precios" className="w-full sm:w-auto">
                                <Button size="lg" className="h-14 px-8 text-base bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-purple-900/40 w-full cursor-pointer">
                                    Ver opciones de compra
                                </Button>
                            </a>
                            <a
                                href="https://wa.me/5215500000000?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20REALISMO%20Blueprint"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <Button size="lg" variant="outline" className="h-14 px-6 text-sm border-emerald-500/30 bg-emerald-500/5 text-emerald-300 hover:bg-emerald-500/10 w-full flex items-center justify-center gap-2 cursor-pointer">
                                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                                    Preguntar por WhatsApp
                                </Button>
                            </a>
                        </div>

                        <div className="pt-4 flex items-center justify-center gap-2 text-slate-500 text-xs">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>Garantía de satisfacción de 7 días · Sin preguntas</span>
                        </div>

                    </div>
                </section>

                <div className="py-6 text-center text-slate-600 text-[11px] border-t border-white/5 bg-[#050508]">
                    Megan es un personaje creado con IA utilizado como caso de estudio metodológico.
                </div>

            </main>
        </div>
    );
}
