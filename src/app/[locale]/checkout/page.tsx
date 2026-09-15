import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowLeft, CreditCard, Sparkles, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CheckoutPageProps {
    searchParams: Promise<{
        plan?: string;
    }>;
}

const planDetails: Record<string, {
    name: string;
    price: string;
    period: string;
    features: string[];
    trial: boolean;
}> = {
    access: {
        name: "Access",
        price: "$29",
        period: "mes",
        trial: true,
        features: [
            "Acceso total a 78+ Sistemas Operativos de IA",
            "50+ Automatizaciones listas para desplegar",
            "Curso Completo: Metodología R.E.A.L.I.S.M.O.™",
            "Biblioteca de ejecución: Directivas y copy de conversión",
            "Workshops mensuales de actualización en vivo",
            "Comunidad privada en Discord"
        ]
    },
    plus: {
        name: "Plus",
        price: "$79",
        period: "mes",
        trial: false,
        features: [
            "Todo lo incluido en Access",
            "Llamadas grupales de calibración y feedback en vivo",
            "Revisión mensual de tus flujos e implementaciones",
            "Sistemas avanzados multi-agente y blueprints de escala",
            "Hasta 3 asientos de equipo incluidos"
        ]
    },
    pro: {
        name: "Pro",
        price: "$199",
        period: "mes",
        trial: false,
        features: [
            "Todo lo incluido en Plus",
            "Licencia White-Label para entrega a clientes",
            "Desarrollo de sistemas y flujos a medida",
            "Gerente de cuenta y canal privado de soporte 1-a-1",
            "Asientos de equipo ilimitados"
        ]
    },
    'social-inicio': {
        name: "Social Pack Activación",
        price: "$49",
        period: "one-time",
        trial: false,
        features: [
            "4 Historias (IG/FB/WA)",
            "1 Carrusel estratégico",
            "Entrega única",
            "Formato IG (reutilizable)",
            "Optimizado para conversión"
        ]
    },
    'social-mensual': {
        name: "Social Plan Mensual",
        price: "$149",
        period: "month",
        trial: false,
        features: [
            "12 Historias mensuales",
            "4 Carruseles mensuales",
            "Adaptación IG / FB / WA",
            "Entrega semanal",
            "1 ronda de ajustes",
            "Base de Mensaje incluida"
        ]
    }
};

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
    const params = await searchParams;
    const planKey = params.plan || 'access';
    const plan = planDetails[planKey] || planDetails.access;
    const isSocial = planKey.startsWith('social-');

    return (
        <div className={`flex min-h-screen flex-col ${isSocial
            ? 'bg-black text-white'
            : 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950'}`}>

            {/* Background Effects */}
            {isSocial ? (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0026FF] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF00A8] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
                </div>
            ) : (
                <div className="absolute inset-0 grid-pattern opacity-20"></div>
            )}

            <header className={`relative z-40 border-b ${isSocial ? 'border-white/10' : 'border-purple-500/20'} glass-effect`}>
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between py-4">
                        <Link href={isSocial ? "/landing" : "/pricing"} className={`font-bold text-lg flex items-center gap-2 transition-colors ${isSocial ? 'text-white hover:text-[#0026FF]' : 'text-white hover:text-purple-300'
                            }`}>
                            <ArrowLeft className="h-5 w-5" />
                            {isSocial ? 'Volver a la Landing' : 'Volver a Planes'}
                        </Link>
                        {isSocial && (
                            <div className="hidden md:block text-xl font-bold tracking-tighter">
                                SOCIAL<span className="text-[#0026FF]">CONVERSION</span>PACK
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main className="relative z-10 container mx-auto py-16 px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 border mb-4 ${isSocial
                        ? 'bg-[#0026FF]/10 border-[#0026FF]/30'
                        : 'bg-purple-500/10 border-purple-500/30'
                        }`}>
                        <Zap className={`h-4 w-4 ${isSocial ? 'text-[#0026FF]' : 'text-purple-400'}`} />
                        <span className={`text-sm font-medium ${isSocial ? 'text-[#0026FF]' : 'text-purple-300'}`}>
                            Pago Seguro SSL
                        </span>
                    </div>

                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isSocial ? 'text-white' : 'bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent'
                        }`}>
                        {isSocial ? 'Finaliza tu pedido' : 'Finaliza tu Suscripción'}
                    </h1>
                    <p className={isSocial ? 'text-gray-400' : 'text-purple-200'}>
                        {isSocial ? 'Estás a un paso de transformar tu presencia en redes.' : "Estás a un paso de acceder a la infraestructura y metodología completa."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Plan Summary */}
                    <Card className={`glass-effect transition-all duration-500 ${isSocial
                        ? 'border-[#0026FF]/40 bg-black/40 hover:border-[#0026FF] shadow-[0_0_30px_rgba(0,38,255,0.1)]'
                        : 'border-purple-500/30'
                        }`}>
                        <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                                <CardTitle className="text-white">{plan.name}</CardTitle>
                                {plan.trial && (
                                    <Badge className="bg-purple-500/30 text-purple-300 border border-purple-500/50">
                                        14 Días de Prueba Gratis
                                    </Badge>
                                )}
                            </div>
                            <CardDescription className={isSocial ? 'text-gray-400' : 'text-purple-300'}>
                                {isSocial ? 'Resumen de tu selección' : 'Plan seleccionado'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-baseline gap-2 text-white">
                                <span className={`font-bold ${isSocial ? 'text-5xl' : 'text-4xl'}`}>{plan.price}</span>
                                <span className={isSocial ? 'text-gray-500' : 'text-purple-300'}>
                                    {plan.period === 'one-time' ? ' único' : `/${plan.period}`}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <p className={`font-semibold text-sm ${isSocial ? 'text-white' : 'text-white'}`}>
                                    {isSocial ? 'Beneficios incluidos:' : "Lo que incluye tu acceso:"}
                                </p>
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-2">
                                        <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${isSocial ? 'text-[#0026FF]' : 'text-purple-400'}`} />
                                        <span className={`text-sm ${isSocial ? 'text-gray-300' : 'text-purple-200'}`}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Checkout Form */}
                    <Card className={`glass-effect transition-all duration-500 ${isSocial
                        ? 'border-[#FF00A8]/40 bg-black/40 hover:border-[#FF00A8] shadow-[0_0_30px_rgba(255,0,168,0.1)]'
                        : 'border-purple-500/30'
                        }`}>
                        <CardHeader>
                            <CardTitle className="text-white">
                                {isSocial ? 'Crea tu cuenta' : 'Crea tu Cuenta'}
                            </CardTitle>
                            <CardDescription className={isSocial ? 'text-gray-400' : 'text-purple-300'}>
                                {isSocial ? 'Para acceder a tu pack de contenido' : 'Ingresa tu correo para comenzar'}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className={`p-4 border rounded-lg ${isSocial ? 'border-white/10 bg-white/5' : 'border-purple-500/30 bg-purple-500/5'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`rounded-full p-2 ${isSocial ? 'bg-[#FF00A8]/10' : 'bg-purple-500/20'}`}>
                                            <CreditCard className={`h-5 w-5 ${isSocial ? 'text-[#FF00A8]' : 'text-purple-400'}`} />
                                        </div>
                                        <div>
                                            <p className="font-medium text-sm text-white">
                                                {isSocial ? 'Pago 100% seguro' : (plan.trial ? 'Sin cobro inmediato' : 'Pago 100% seguro')}
                                            </p>
                                            <p className={`text-xs ${isSocial ? 'text-gray-500' : 'text-purple-300'}`}>
                                                {isSocial ? 'Plataforma encriptada' : (plan.trial ? "Comienza tus 14 días de prueba gratis" : "Activación inmediata tras registrarte")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {[
                                        isSocial ? 'Acceso inmediato a los entregables' : 'Acceso instantáneo a todo el contenido',
                                        isSocial ? 'Garantía de satisfacción 7 días' : 'Cancela cuando quieras en 1 clic',
                                        isSocial ? 'Soporte prioritario via Discord' : '14 días de garantía incondicional'
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <Check className={`h-4 w-4 ${isSocial ? 'text-[#A6FF2E]' : 'text-green-400'}`} />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href={`/signup?plan=${planKey}`} className="w-full">
                                <Button size="lg" className={`w-full font-bold text-lg rounded-xl h-14 ${isSocial
                                    ? 'bg-[#0026FF] hover:bg-[#0026FF]/90 text-white shadow-[0_0_20px_rgba(0,38,255,0.4)]'
                                    : 'tech-gradient glow-effect'
                                    }`}>
                                    {isSocial ? 'Completar Registro' : (plan.trial ? "Iniciar Prueba Gratis" : "Continuar con el Registro")}
                                </Button>
                            </Link>

                            <p className="text-xs text-center text-gray-500">
                                {isSocial
                                    ? 'Al continuar, aceptas nuestros Términos y Condiciones.'
                                    : 'Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.'}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 text-center">
                    <p className={`text-sm mb-4 ${isSocial ? 'text-gray-500' : 'text-purple-300'}`}>
                        {isSocial
                            ? 'Únete a marcas y emprendedores que ya están convirtiendo con nuestro contenido'
                            : 'Utilizado por más de 2,500 creadores y constructores en todo el mundo'}
                    </p>
                    <div className="flex justify-center gap-8 text-xs text-gray-500">
                        {[
                            isSocial ? 'Pago Encriptado' : 'Pago Seguro SSL',
                            isSocial ? 'Todas las Tarjetas' : 'Todas las Tarjetas Aceptadas',
                            isSocial ? 'Garantía de Devolución' : 'Garantía de Satisfacción'
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Check className={`h-4 w-4 ${isSocial ? 'text-[#A6FF2E]' : 'text-green-400'}`} />
                                {badge}
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
