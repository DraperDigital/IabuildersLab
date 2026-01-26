import { Link } from "@/i18n/routing";
import { Sparkles, Facebook, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

export function SiteFooter() {
    const t = useTranslations('Footer');

    return (
        <footer className="border-t border-purple-500/20 bg-slate-950 relative z-40">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="font-bold text-xl text-white flex items-center gap-2 mb-4">
                            <Sparkles className="h-6 w-6 text-purple-400" />
                            IA Builders Lab
                        </Link>
                        <p className="text-sm text-purple-200/80 leading-relaxed">
                            Empowering creators with AI-driven workflows, prompts, and systems for the next generation of builders.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">{t('platform')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/systems" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('systems')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/prompts" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('prompts')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/automations" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('automations')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('pricing')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">{t('resources')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/copy-library" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('copyLibrary')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('blog')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('docs')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">{t('legal')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-sm text-purple-200/80 hover:text-purple-400 transition-colors">
                                    {t('terms')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-purple-200/60">
                        © {new Date().getFullYear()} IA Builders Lab. {t('rights')}
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="https://www.facebook.com/profile.php?id=61586839284137" target="_blank" rel="noopener noreferrer" className="text-purple-200/60 hover:text-purple-400 transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://www.instagram.com/iabuilderslab/" target="_blank" rel="noopener noreferrer" className="text-purple-200/60 hover:text-purple-400 transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
