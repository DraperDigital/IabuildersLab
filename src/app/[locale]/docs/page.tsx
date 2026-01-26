import { PublicHeader } from "@/components/public-header";
import { Link } from "@/i18n/routing";
import { Book, Code, GraduationCap, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Docs' });

    return {
        title: t('title'),
    };
}

export default async function DocsPage() {
    const t = await getTranslations('Docs');

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
            <PublicHeader />
            <main className="relative z-10 container mx-auto py-12 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            {t('subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link href="/docs/getting-started" className="group">
                            <div className="h-full p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:bg-slate-900/80">
                                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Zap className="h-6 w-6 text-purple-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t('gettingStartedTitle')}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t('gettingStartedDesc')}
                                </p>
                            </div>
                        </Link>

                        <Link href="/docs/systems" className="group">
                            <div className="h-full p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:bg-slate-900/80">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Code className="h-6 w-6 text-blue-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t('systemsTitle')}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t('systemsDesc')}
                                </p>
                            </div>
                        </Link>

                        <Link href="/docs/prompts" className="group">
                            <div className="h-full p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:bg-slate-900/80">
                                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Book className="h-6 w-6 text-pink-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t('promptsTitle')}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t('promptsDesc')}
                                </p>
                            </div>
                        </Link>

                        <Link href="/docs/api" className="group">
                            <div className="h-full p-8 rounded-2xl bg-slate-900/50 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:bg-slate-900/80">
                                <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <GraduationCap className="h-6 w-6 text-amber-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">{t('tutorialsTitle')}</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {t('tutorialsDesc')}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
