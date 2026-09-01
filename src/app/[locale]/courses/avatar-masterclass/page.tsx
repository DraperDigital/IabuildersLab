

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Star, Users, Play, Zap, ShieldCheck, BookOpen, Clock, FileText } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { CourseFAQ } from "@/components/course-faq";
import { CreatorBio } from "@/components/creator-bio";

export default function AvatarMasterclassPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-purple-500/30">
            <PublicHeader />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <Zap className="w-4 h-4 fill-purple-300" />
                            Nuevo Workshop Intensivo 2025
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            Domina la Consistencia <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                                de tus Personajes IA
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 font-light">
                            Deja de generar "gente random". Aprende el framework <strong>REALISMO</strong> para crear avatares consistentes y entrenar modelos propios.
                        </p>

                        <div className="flex flex-col items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300 max-w-lg mx-auto">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                                <Link href="/checkout?plan=avatar-masterclass" className="w-full sm:w-auto">
                                    <Button size="lg" className="h-14 px-8 text-lg bg-white text-purple-950 hover:bg-slate-200 hover:scale-105 transition-all w-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                        Inscribirme Ahora - $9.99 USD
                                    </Button>
                                </Link>
                                <Link href="#curriculum" className="w-full sm:w-auto">
                                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 w-full">
                                        Ver Detalles
                                    </Button>
                                </Link>
                            </div>

                            {/* 1. Risk Reversal (Hero) */}
                            <div className="mt-2 flex items-center justify-center gap-2 text-slate-400 text-xs">
                                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Garantía de 7 días. Si el framework no te sirve, te devolvemos tu pago sin preguntas.</span>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center justify-center gap-8 text-slate-500 text-sm font-medium animate-in fade-in zoom-in duration-1000 delay-500 opacity-0 fill-mode-forwards" style={{ animationFillMode: 'forwards' }}>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                +1,200 Alumnos
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                4.9/5 Calificación
                            </div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                Garantía 7 días
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem/Solution Contrast */}
                <section className="py-24 bg-slate-900/50 border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    Lo que <span className="text-red-400">NO</span> enseñamos
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        "Hacks temporales que dejan de funcionar",
                                        "Parches mal hechos",
                                        "Postproducción correctiva interminable",
                                        "Trucos mágicos de control absoluto"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-red-200/80">
                                            <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                                            <p>{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl -z-10" />
                                <Card className="p-8 bg-slate-950 border-slate-800 shadow-2xl relative overflow-hidden group hover:border-purple-500/50 transition-colors duration-500">
                                    <div className="absolute top-0 right-0 p-4 bg-purple-600/20 rounded-bl-2xl text-purple-300 text-xs font-bold uppercase tracking-wider">
                                        Método IA Builders
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-6">Lo que <span className="text-emerald-400">SÍ</span> enseñamos</h3>

                                    <ul className="space-y-3 mb-8">
                                        {[
                                            "Estructura sólida",
                                            "Identidad definida",
                                            "Estabilidad en la generación",
                                            "Criterio estético y técnico",
                                            "Diagnóstico de errores",
                                            "Imagen → Video usable"
                                        ].map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                                <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                </div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                        <p className="text-purple-200 text-sm italic">
                                            "Esto lo convierte en: más corto, más claro y más honesto."
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-24 bg-slate-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-900/5" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <Badge variant="outline" className="mb-4 border-purple-500/30 text-purple-300">
                                Diagnóstico Visual
                            </Badge>
                            <h2 className="text-4xl font-bold text-white mb-4">Resultados Tangibles</h2>
                            <p className="text-slate-400 mb-8">
                                Misma identidad, infinitos contextos. Sin mutaciones, sin "alucinaciones".
                            </p>

                            <div className="flex flex-col items-center gap-4">
                                <span className="text-slate-500 text-sm font-medium">Más ejemplos reales diarios:</span>
                                <a
                                    href="https://www.instagram.com/megan.redhair?igsh=cm15NTR2eGk1OGU0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 transition-all text-sm font-medium group"
                                >
                                    <span className="p-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </span>
                                    @megan.redhair
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                            {[
                                {
                                    label: "Retrato Studio",
                                    image: "/images/courses/avatar-masterclass/gallery-1.jpg",
                                    alt: "Retrato de avatar con iluminación de estudio y fondo rojo"
                                },
                                {
                                    label: "Contexto Real",
                                    image: "/images/courses/avatar-masterclass/gallery-2.png",
                                    alt: "Avatar cuerpo completo en espejo reflejando realismo"
                                },
                                {
                                    label: "Exterior / Clima",
                                    image: "/images/courses/avatar-masterclass/gallery-3.jpg",
                                    alt: "Avatar en exterior con nieve y ropa de invierno"
                                },
                                {
                                    label: "Ángulos Difíciles",
                                    image: "/images/courses/avatar-masterclass/gallery-4.png",
                                    alt: "Selfie de avatar recostada mostrando perspectiva difícil"
                                },
                                {
                                    label: "Consistencia Corporal",
                                    image: "/images/courses/avatar-masterclass/gallery-5.png",
                                    alt: "Avatar cuerpo completo en estudio con traje"
                                },
                                {
                                    label: "Iluminación Cinemática",
                                    image: "/images/courses/avatar-masterclass/gallery-6.jpg",
                                    alt: "Avatar tras ventana con lluvia nocturna"
                                },
                                {
                                    label: "Retrato Natural",
                                    image: "/images/courses/avatar-masterclass/gallery-8.jpg",
                                    alt: "Retrato primer plano con sweater gris"
                                },
                                {
                                    label: "Macro Piel",
                                    image: "/images/courses/avatar-masterclass/gallery-9.jpg",
                                    alt: "Detalle extremo de piel y pecas"
                                }
                            ].map((item, i) => (
                                <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden relative group border border-white/5 bg-slate-900/50">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                        <span className="text-white/90 font-bold text-xs md:text-sm uppercase tracking-widest drop-shadow-lg bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">{item.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Video Gallery */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-3">
                                <Play className="w-6 h-6 text-purple-400 fill-purple-400" />
                                De Imagen a Video (VEO 3)
                            </h3>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Horizontal Videos */}
                                <div className="space-y-4">
                                    <div className="aspect-video bg-slate-800 rounded-xl relative overflow-hidden group border border-white/10 shadow-2xl">
                                        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-purple-500/80 group-hover:border-purple-400 transition-colors">
                                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <Badge className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/60">Cinemático 16:9</Badge>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm text-center">Transiciones de escena y movimiento de cámara</p>
                                </div>

                                {/* Vertical Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="aspect-[9/16] bg-slate-800 rounded-xl relative overflow-hidden group border border-white/10 shadow-xl">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-pink-500/80 group-hover:border-pink-400 transition-colors">
                                                <Play className="w-5 h-5 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <Badge className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/60">Social 9:16</Badge>
                                        </div>
                                    </div>
                                    <div className="aspect-[9/16] bg-slate-800 rounded-xl relative overflow-hidden group border border-white/10 shadow-xl">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-blue-500/80 group-hover:border-blue-400 transition-colors">
                                                <Play className="w-5 h-5 text-white fill-white ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <Badge className="bg-black/50 backdrop-blur border-white/10 text-white hover:bg-black/60">Lip Sync</Badge>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tools Section */}
                <section className="py-24 bg-slate-950 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h3 className="text-xl md:text-2xl text-purple-300 font-bold mb-12 uppercase tracking-widest opacity-80">Stack de Herramientas</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 group hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center justify-center gap-4">
                                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">⚡</span>
                                <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Nano Banana / Midjourney</span>
                            </div>

                            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 group hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col items-center justify-center gap-4">
                                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">🎥</span>
                                <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">Veo 3</span>
                            </div>

                            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 group hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center gap-4">
                                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">🎙️</span>
                                <span className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">ElevenLabs</span>
                            </div>

                            <div className="bg-slate-900/40 border border-white/5 p-8 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 group hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col items-center justify-center gap-4">
                                <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">🎬</span>
                                <span className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">HeyGen</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Creator Bio & Credibility Section */}
                <CreatorBio />

                {/* 2. Curriculum Section with Breakdown & Duration */}
                <section id="curriculum" className="py-24 relative bg-slate-950">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <Badge variant="outline" className="mb-4 border-purple-500/30 text-purple-300">
                                El Recorrido
                            </Badge>
                            <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">Lo que vamos a lograr</h2>
                            <p className="text-slate-400 text-base mb-6">Desde la teoría fundamental hasta flujos de trabajo de agencia.</p>
                            
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                                <BookOpen className="w-4 h-4" />
                                <span>4 módulos · ~2 horas de contenido · Acceso de por vida</span>
                            </div>
                        </div>

                        {/* 4 Cards Overview */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            {[
                                {
                                    title: "Construir Avatar Base",
                                    desc: "Define identidad visual con una estructura clara para que rostro y proporciones se mantengan estables desde el inicio.",
                                    icon: "🧱",
                                    duration: "~30 min"
                                },
                                {
                                    title: "Variar sin Romper",
                                    desc: "Cambia ropa, fondo, encuadre y contexto sin que el avatar mute ni pierda su reconocimiento.",
                                    icon: "🎭",
                                    duration: "~35 min"
                                },
                                {
                                    title: "Imagen → Video Usable",
                                    desc: "Pasa de imagen consistente a video en VEO3 entendiendo qué se hereda y qué ajustar sin redefinir el rostro.",
                                    icon: "🎥",
                                    duration: "~30 min"
                                },
                                {
                                    title: "Voz y Coherencia",
                                    desc: "Aplica voz consistente y lip sync limpio para tener un avatar listo para uso real en videos, no solo demos.",
                                    icon: "🎙️",
                                    duration: "~25 min"
                                }
                            ].map((mod, i) => (
                                <Card key={i} className="bg-slate-900/40 border-slate-800 hover:bg-slate-900/60 transition-all p-6 group flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{mod.icon}</div>
                                            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/50">{mod.duration}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">{mod.title}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed font-light">{mod.desc}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Detailed Modules Breakdown */}
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                                <FileText className="w-5 h-5 text-purple-400" />
                                Temario Detallado del Taller
                            </h3>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 1</span>
                                    <h4 className="text-base font-semibold text-white">Construcción del Avatar Base</h4>
                                    <ul className="text-xs text-slate-400 space-y-1.5 pt-1">
                                        <li className="flex items-center gap-2">▸ Semiótica visual del avatar y semillas de identidad</li>
                                        <li className="flex items-center gap-2">▸ Estructura del prompt inicial sin distorsión facial</li>
                                        <li className="flex items-center gap-2">▸ Matriz de rasgos físicos y retención anatómica</li>
                                    </ul>
                                </div>

                                <div className="space-y-2 p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 2</span>
                                    <h4 className="text-base font-semibold text-white">Variación Sin Mutación</h4>
                                    <ul className="text-xs text-slate-400 space-y-1.5 pt-1">
                                        <li className="flex items-center gap-2">▸ Matriz de vestuario, outfits y cambio de época</li>
                                        <li className="flex items-center gap-2">▸ Iluminación de estudio vs escenarios en exterior</li>
                                        <li className="flex items-center gap-2">▸ Enfoque y ángulos de cámara complejos (low-angle, macro)</li>
                                    </ul>
                                </div>

                                <div className="space-y-2 p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 3</span>
                                    <h4 className="text-base font-semibold text-white">De Imagen a Video Usable (VEO3)</h4>
                                    <ul className="text-xs text-slate-400 space-y-1.5 pt-1">
                                        <li className="flex items-center gap-2">▸ Herencia de vectores de movimiento desde la imagen estática</li>
                                        <li className="flex items-center gap-2">▸ Generación de clips cinemáticos 16:9 y vertical 9:16</li>
                                        <li className="flex items-center gap-2">▸ Prevención de mutación en secuencias de video</li>
                                    </ul>
                                </div>

                                <div className="space-y-2 p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
                                    <span className="text-xs font-mono font-bold text-purple-400">MÓDULO 4</span>
                                    <h4 className="text-base font-semibold text-white">Clonación de Voz & Lip Sync Pro</h4>
                                    <ul className="text-xs text-slate-400 space-y-1.5 pt-1">
                                        <li className="flex items-center gap-2">▸ Calibración vocal y tonos de voz en ElevenLabs</li>
                                        <li className="flex items-center gap-2">▸ Sincronización labial limpia y lip sync sin artefactos</li>
                                        <li className="flex items-center gap-2">▸ Exportación final y flujo de trabajo para redes sociales</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. FAQ / Manejo de Objeciones */}
                <CourseFAQ />

                {/* 6. Final CTA with Value Stacking & Risk Reversal */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-900/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="max-w-2xl mx-auto bg-slate-900/90 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.2)]">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                                ¿Listo para profesionalizar tus personajes?
                            </h2>
                            <p className="text-slate-400 mb-8 text-base font-light">
                                Todo lo que necesitas para dominar avatares consistentes e identidad visual de marca sin improvisar.
                            </p>

                            {/* Value Stack List */}
                            <div className="space-y-3 mb-8 text-left bg-slate-950/70 p-5 rounded-xl border border-purple-500/20">
                                <div className="flex items-center justify-between text-xs md:text-sm">
                                    <span className="text-slate-200 flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Workshop Intensivo: Avatares & Consistencia Visual
                                    </span>
                                    <span className="text-slate-500 line-through font-mono text-xs">$97 USD</span>
                                </div>
                                <div className="flex items-center justify-between text-xs md:text-sm">
                                    <span className="text-slate-200 flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Pack de Plantillas Metodología REALISMO (200+ Prompts)
                                    </span>
                                    <span className="text-slate-500 line-through font-mono text-xs">$47 USD</span>
                                </div>
                                <div className="flex items-center justify-between text-xs md:text-sm">
                                    <span className="text-slate-200 flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Guías de Personalización Imagen a Video (VEO3 + HeyGen)
                                    </span>
                                    <span className="text-slate-500 line-through font-mono text-xs">$37 USD</span>
                                </div>
                                <div className="flex items-center justify-between text-xs md:text-sm">
                                    <span className="text-slate-200 flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                        Acceso de Por Vida + Actualizaciones del Vault
                                    </span>
                                    <span className="text-slate-500 line-through font-mono text-xs">Incalculable</span>
                                </div>
                                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                                    <span className="text-purple-300 font-bold text-sm md:text-base">Precio Especial de Lanzamiento</span>
                                    <span className="text-2xl font-extrabold text-white">$9.99 USD</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Link href="/checkout?plan=avatar-masterclass" className="w-full">
                                    <Button size="lg" className="h-16 text-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold border-0 shadow-lg shadow-purple-900/30 w-full animate-pulse hover:animate-none">
                                        Acceder por solo $9.99 USD
                                    </Button>
                                </Link>

                                {/* 1. Risk Reversal (Bottom CTA) */}
                                <div className="mt-1 flex items-center justify-center gap-2 text-slate-400 text-xs">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Garantía de 7 días. Si el framework no te sirve, te devolvemos tu pago sin preguntas.</span>
                                </div>
                                <p className="text-slate-500 text-xs mt-1">Pago único • Acceso de por vida • Sin cargos recurrentes</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-slate-800/50 bg-slate-950 text-center text-slate-500 text-sm">
                <p>&copy; 2025 IA Builders Lab. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

