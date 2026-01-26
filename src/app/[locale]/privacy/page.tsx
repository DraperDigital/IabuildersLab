import { PublicHeader } from "@/components/public-header";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Privacy' });

    return {
        title: t('title'),
    };
}

export default async function PrivacyPolicyPage() {
    const t = await getTranslations('Privacy');

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
            <PublicHeader />
            <main className="relative z-10 container mx-auto py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">{t('title')}</h1>

                    <div className="prose prose-invert prose-purple max-w-none text-slate-300">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('introTitle')}</h2>
                            <p className="mb-4">{t('introText')}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('collectTitle')}</h2>
                            <p className="mb-4">{t('collectText')}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('useTitle')}</h2>
                            <p className="mb-4">{t('useText')}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('contactTitle')}</h2>
                            <p>{t('contactText')}</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
