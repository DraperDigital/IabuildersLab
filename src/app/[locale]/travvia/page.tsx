"use client"

import { Button } from "@/components/ui/button";
import {
    CheckCircle2,
    XCircle,
    MessageSquare,
    FileText,
    Bell,
    TrendingUp,
    Users,
    Clock,
    Zap,
    Target,
    ArrowRight,
    Sparkles,
    Award,
    CircleSlash
} from "lucide-react";

export default function TraveliaLandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
                </div>

                <div className="relative container mx-auto px-4 py-20 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">Acceso anticipado disponible</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                            Convierte más cotizaciones en reservas sin perder leads en WhatsApp
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl md:text-2xl mb-6 text-blue-100 leading-relaxed max-w-3xl mx-auto">
                            Travelia es el sistema operativo de ventas para agencias de viajes. Centraliza oportunidades, crea cotizaciones rápidas y hace seguimiento automático hasta cerrar la venta.
                        </p>

                        {/* Supporting line */}
                        <p className="text-lg md:text-xl mb-10 text-white/90 font-medium max-w-2xl mx-auto">
                            No es un CRM. No es marketing automation. Es el sistema donde tu agencia vende viajes.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                            >
                                <TrendingUp className="mr-2 h-5 w-5" />
                                Quiero vender más viajes
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg backdrop-blur-sm"
                            >
                                <Target className="mr-2 h-5 w-5" />
                                Ver cómo funciona
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Wave separator */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="#f8fafc" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-slate-900">
                            El problema real de las agencias de viajes
                        </h2>
                        <p className="text-xl text-slate-600 text-center mb-12">
                            Estos problemas se repiten todos los días:
                        </p>

                        {/* Pain Points Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">Leads llegan por WhatsApp y se pierden</h3>
                                        <p className="text-slate-700">Entre conversaciones personales y grupos, los mensajes de clientes se pierden o se responden tarde.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                                        <Clock className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">Cotizar toma demasiado tiempo</h3>
                                        <p className="text-slate-700">Armar una cotización profesional puede tomar horas. El cliente ya se fue con otra agencia.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-yellow-100 p-3 rounded-full flex-shrink-0">
                                        <Bell className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">El seguimiento depende de la memoria del agente</h3>
                                        <p className="text-slate-700">Sin un sistema, depende del agente acordarse de quién sigue pendiente y cuándo escribir.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border-2 border-red-200 shadow-lg hover:shadow-xl transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                                        <XCircle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">Muchos clientes dejan de responder</h3>
                                        <p className="text-slate-700">Entre el primer contacto y la cotización pasan días. El cliente ya no contesta.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow md:col-span-2">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                                        <TrendingUp className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">Se pierden ventas que ya estaban avanzadas</h3>
                                        <p className="text-slate-700">El cliente estaba interesado, recibió cotización, pero nadie hizo seguimiento y la venta se perdió.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Strong Statement */}
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 md:p-12 rounded-2xl text-center shadow-2xl">
                            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
                                El problema no es la falta de clientes.<br />
                                <span className="text-teal-400">Es la falta de un sistema de ventas.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Micro-Core Solution Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                                Travelia hace solo tres cosas<br />
                                <span className="text-blue-600">(y por eso funciona)</span>
                            </h2>
                        </div>

                        {/* Three Core Functions */}
                        <div className="space-y-8 mb-12">
                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500">
                                <div className="flex items-start gap-6">
                                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <span className="text-white text-2xl font-bold">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Centraliza oportunidades de viaje</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            Cada mensaje de WhatsApp se convierte en una oportunidad de venta clara, con contexto, estado y toda la información visible en un solo lugar.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-teal-500">
                                <div className="flex items-start gap-6">
                                    <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <span className="text-white text-2xl font-bold">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Permite cotizar viajes más rápido</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            Cotizaciones profesionales con versiones, itinerarios detallados y precios claros. Creadas en minutos, no en horas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                                <div className="flex items-start gap-6">
                                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <span className="text-white text-2xl font-bold">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 text-slate-900">Hace seguimiento automático hasta que el cliente decide</h3>
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            No más perseguir clientes, no más olvidar seguimientos, no más depender de la memoria humana. El sistema lo hace por ti.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Closing Statement */}
                        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
                            <p className="text-2xl font-bold text-slate-900">
                                Eso es todo lo que una agencia necesita para cerrar más reservas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works - Single Flow */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-slate-900">
                            Un sistema. Un flujo. Un objetivo.
                        </h2>
                        <p className="text-xl text-slate-600 text-center mb-16">
                            Cerrar más reservas.
                        </p>

                        {/* Flow Steps */}
                        <div className="space-y-6">
                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                    1
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Llega un mensaje por WhatsApp</h3>
                                    <p className="text-slate-700">Un cliente pregunta por un viaje.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                    2
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border-l-4 border-teal-500">
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Se crea una oportunidad de viaje</h3>
                                    <p className="text-slate-700">Travelia captura el contexto: quién es, qué quiere, cuándo viaja, presupuesto.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                    3
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Generas y envías una cotización</h3>
                                    <p className="text-slate-700">Profesional, clara, con versiones. En minutos, no en horas.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                    4
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-l-4 border-orange-500">
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Travelia hace seguimiento automático</h3>
                                    <p className="text-slate-700">El sistema recuerda, pregunta, mantiene el interés vivo.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                                    5
                                </div>
                                <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-500">
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">Cierras la venta o aprendes por qué no se cerró</h3>
                                    <p className="text-slate-700">Más reservas cerradas. Y cuando no cierras, sabes exactamente por qué.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Travelia Is NOT */}
            <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-slate-900">
                            Qué NO es Travelia
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <CircleSlash className="w-8 h-8 text-slate-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">NO es un CRM genérico</h3>
                                        <p className="text-slate-600">No está diseñado para cualquier industria. Solo para agencias de viajes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <CircleSlash className="w-8 h-8 text-slate-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">NO es marketing automation</h3>
                                        <p className="text-slate-600">No envía newsletters ni campañas masivas. Es para cerrar ventas uno a uno.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <CircleSlash className="w-8 h-8 text-slate-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">NO es un chatbot que vende solo</h3>
                                        <p className="text-slate-600">No reemplaza al agente. Lo hace más eficiente.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border-2 border-slate-300 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <CircleSlash className="w-8 h-8 text-slate-600 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-2 text-slate-900">NO es un motor de reservas o GDS</h3>
                                        <p className="text-slate-600">No busca vuelos ni hoteles. Organiza el proceso de venta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Positioning Statement */}
                        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-10 rounded-2xl text-center shadow-2xl">
                            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
                                Travelia existe entre el lead y la reserva.
                            </p>
                            <p className="text-xl text-blue-100">
                                Justo donde hoy se pierden las ventas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who It's For Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-900">
                            ¿Travelia es para ti?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* For */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-green-500 p-3 rounded-xl">
                                        <CheckCircle2 className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Travelia ES para ti si:</h3>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">Eres una <strong>agencia pequeña o mediana</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">Tu equipo tiene <strong>entre 1 y 5 agentes</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">Vendes <strong>viajes personalizados</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">Tus ventas vienen por <strong>WhatsApp</strong></span>
                                    </li>
                                </ul>
                            </div>

                            {/* Not For */}
                            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-200">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-red-500 p-3 rounded-xl">
                                        <XCircle className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Travelia NO es para ti si:</h3>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">Eres una <strong>aerolínea</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">Trabajas en <strong>grandes corporativos</strong></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-lg">Eres una <strong>OTA tipo Booking</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Early Access / Founders Offer Section */}
            <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-300 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/30">
                            <Award className="w-5 h-5" />
                            <span className="text-sm font-semibold">Oferta exclusiva</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Acceso anticipado para agencias fundadoras
                        </h2>

                        <p className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed">
                            Únete al grupo exclusivo de agencias que están ayudando a construir Travelia desde el inicio.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                                <Zap className="w-10 h-10 mb-4 mx-auto text-yellow-300" />
                                <h3 className="font-bold text-xl mb-2">Acceso al MVP</h3>
                                <p className="text-blue-100">Empieza a usar Travelia antes que nadie.</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                                <TrendingUp className="w-10 h-10 mb-4 mx-auto text-green-300" />
                                <h3 className="font-bold text-xl mb-2">Precio de fundador</h3>
                                <p className="text-blue-100">Tarifa preferencial que nunca aumentará.</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                                <Target className="w-10 h-10 mb-4 mx-auto text-purple-300" />
                                <h3 className="font-bold text-xl mb-2">Influencia directa en el producto</h3>
                                <p className="text-blue-100">Tus opiniones moldean Travelia.</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all">
                                <Users className="w-10 h-10 mb-4 mx-auto text-teal-300" />
                                <h3 className="font-bold text-xl mb-2">Soporte cercano</h3>
                                <p className="text-blue-100">Acceso directo al equipo fundador.</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div>
                            <Button
                                size="lg"
                                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-7 text-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-110"
                            >
                                <Award className="mr-3 h-6 w-6" />
                                Quiero acceso anticipado
                                <ArrowRight className="ml-3 h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Vende más viajes<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
                                sin trabajar más horas.
                            </span>
                        </h2>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                            Únete a las agencias que están transformando su operación con Travelia.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold px-10 py-7 text-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
                            >
                                <Sparkles className="mr-3 h-6 w-6" />
                                Solicitar acceso anticipado
                                <ArrowRight className="ml-3 h-6 w-6" />
                            </Button>
                        </div>

                        <p className="text-sm text-slate-400">
                            ⚡ Sin permanencia · 💳 Sin tarjeta de crédito · 🚀 Implementación guiada
                        </p>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">
                        © 2025 Travelia · El sistema operativo de ventas para agencias de viajes
                    </p>
                </div>
            </footer>
        </div>
    );
}
