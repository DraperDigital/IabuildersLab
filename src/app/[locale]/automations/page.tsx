import { listContent } from "@/actions/content-actions";
import { SystemCard } from "@/components/system-card";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/public-header";

export default async function AutomationsPage() {
    const { data: automations } = await listContent({ type: 'automation', status: 'published' });
    const t = await getTranslations('Automations');

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-20"></div>

            <PublicHeader />

            <main className="relative z-10 container mx-auto py-12 px-4">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors mb-6">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {automations.map((automation) => (
                        <SystemCard key={automation.id} system={automation} />
                    ))}
                </div>
            </main>
        </div>
    );
}
