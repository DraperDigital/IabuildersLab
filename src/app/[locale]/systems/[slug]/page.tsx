import { getSystemBySlug } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { DownloadButton } from "@/components/download-button";
import { CopyButton } from "@/components/copy-button";
import { PublicHeader } from "@/components/public-header";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const levelTranslations: Record<string, string> = {
    beginner: "Principiante",
    intermediate: "Intermedio",
    advanced: "Avanzado"
};

const categoryTranslations: Record<string, string> = {
    "Market Research": "Investigación de Mercado",
    "CRM & Operations": "CRM y Operaciones",
    "Paid Ads": "Anuncios de Pago",
    "Content Creation": "Creación de Contenido",
    "Tools": "Herramientas",
    "Development Web / UI": "Desarrollo Web / UI",
    "Research & Content Creation": "Investigación / Creación de Contenido",
    "Infrastructure & Local Environment": "Infraestructura / Entorno Local",
    "Infrastructure & Growth Automation": "Infraestructura / Growth Automation",
    "Market Research & Content": "Investigación de Mercado / Contenido",
    "Paid Ads & Acquisition": "Automatización de Pauta / Adquisición"
};

const markdownComponents = {
    h1: ({ children }: any) => <h1 className="text-3xl font-extrabold text-white mb-6 border-b border-purple-500/20 pb-3">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-purple-300 mt-10 mb-4 pb-1 border-b border-purple-500/10 flex items-center gap-2">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-white mt-8 mb-3 text-purple-100">{children}</h3>,
    p: ({ children }: any) => <p className="text-purple-100/90 leading-relaxed mb-4 text-base">{children}</p>,
    ul: ({ children }: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-purple-200">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-purple-200">{children}</ol>,
    li: ({ children }: any) => <li className="text-purple-100/90 leading-relaxed">{children}</li>,
    strong: ({ children }: any) => <strong className="text-purple-300 font-semibold">{children}</strong>,
    hr: () => <hr className="my-8 border-purple-500/10" />,
    code: ({ className, children, ...props }: any) => {
        const isBlock = className?.includes("language-") || String(children).includes("\n");
        return isBlock ? (
            <div className="relative my-6 group">
                <pre className="bg-slate-950/80 border border-purple-500/30 rounded-xl p-5 overflow-x-auto text-purple-200 font-mono text-sm leading-relaxed shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                    <code>{children}</code>
                </pre>
                <CopyButton text={String(children).trim()} />
            </div>
        ) : (
            <code className="bg-slate-950 text-purple-300 px-1.5 py-0.5 rounded font-mono text-sm border border-purple-500/20" {...props}>
                {children}
            </code>
        );
    }
};

export default async function SystemDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const system = await getSystemBySlug(slug);

    if (!system) {
        notFound();
    }

    // Temporalmente desactivado para permitir acceso sin login/suscripción
    const isLocked = false; 

    const levelColors: Record<string, string> = {
        beginner: "bg-emerald-600 text-white border-emerald-400",
        intermediate: "bg-amber-600 text-white border-amber-400",
        advanced: "bg-rose-600 text-white border-rose-400"
    };

    const translatedLevel = levelTranslations[system.level || 'beginner'] || system.level;
    const translatedCategory = categoryTranslations[system.category || ''] || system.category;

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 relative overflow-hidden">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none"></div>

            <PublicHeader />

            <main className="container mx-auto py-10 px-4 max-w-6xl relative z-10">
                {/* Back Link */}
                <div className="mb-6">
                    <Link href="/systems" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Volver a Sistemas
                    </Link>
                </div>

                {/* Header Section */}
                <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-purple-600 text-white font-semibold">{translatedCategory}</Badge>
                        <Badge variant="outline" className={`${levelColors[system.level || 'beginner']} border font-semibold text-xs`}>
                            {translatedLevel}
                        </Badge>
                        {isLocked && (
                            <Badge className="bg-rose-600 text-white flex items-center gap-1 font-semibold">
                                <Lock className="w-3 h-3" /> Plan {system.paywall_level}
                            </Badge>
                        )}
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-white">
                        {system.title}
                    </h1>
                    <p className="text-xl text-purple-200 leading-relaxed">
                        {system.summary}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {isLocked ? (
                            <div className="border-2 border-purple-500/50 rounded-xl p-10 bg-slate-900/50 backdrop-blur-sm text-center space-y-6 glass-effect">
                                <div className="w-20 h-20 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                                    <Lock className="w-10 h-10 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-3">Este sistema está bloqueado</h3>
                                    <p className="text-purple-200 text-lg max-w-md mx-auto">
                                        Desbloquea este sistema de investigación y más de 50 otros con un plan de espacio de trabajo.
                                    </p>
                                </div>
                                <Button size="lg" asChild className="tech-gradient glow-effect font-semibold px-8">
                                    <Link href="/pricing">Obtener Acceso</Link>
                                </Button>
                                <p className="text-sm text-purple-300">
                                    ¿Ya eres miembro? <Link href="/login" className="underline hover:text-white transition-colors">Iniciar Sesión</Link>
                                </p>
                            </div>
                        ) : (
                            <div className="prose prose-lg prose-invert max-w-none">
                                <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-purple-50">
                                    <ReactMarkdown components={markdownComponents}>{system.body_markdown || ''}</ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="border-2 border-purple-500/30 rounded-xl p-6 bg-slate-900/50 backdrop-blur-sm glass-effect sticky top-24">
                            <h3 className="font-bold text-lg mb-4 text-white">Detalles del Sistema</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between py-3 border-b border-purple-500/20">
                                    <span className="text-purple-300">Nivel</span>
                                    <span className="font-semibold capitalize text-white">{translatedLevel}</span>
                                </li>
                                <li className="flex justify-between py-3 border-b border-purple-500/20">
                                    <span className="text-purple-300">Categoría</span>
                                    <span className="font-semibold text-white">{translatedCategory}</span>
                                </li>
                                <li className="flex justify-between py-3">
                                    <span className="text-purple-300 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        Actualizado
                                    </span>
                                    <span className="font-semibold text-white">
                                        {new Date(system.updated_at).toLocaleDateString()}
                                    </span>
                                </li>
                            </ul>

                            {!isLocked && (
                                <div className="mt-6">
                                    <DownloadButton 
                                        title={system.title} 
                                        content={system.body_markdown || ''} 
                                        label="Descargar Recursos" 
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
