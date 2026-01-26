import { PublicHeader } from "@/components/public-header";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'Terms' });

    return {
        title: t('title'),
    };
}

export default async function TermsPage() {
    const t = await getTranslations('Terms');

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>
            <PublicHeader />
            <main className="relative z-10 container mx-auto py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-white tracking-tight">{t('title')}</h1>

                    <div className="prose prose-invert prose-purple max-w-none text-slate-300">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('agreementTitle')}</h2>
                            <p className="mb-4">{t('agreementText')}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('ipTitle')}</h2>
                            <p className="mb-4">{t('ipText')}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('userRepTitle')}</h2>
                            <p className="mb-4">{t('userRepText')}</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">{t('prohibitedTitle')}</h2>
                            <p className="mb-4">{t('prohibitedText')}</p>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
