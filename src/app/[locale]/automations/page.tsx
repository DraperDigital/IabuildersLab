import { listContent, getDistinctCategories } from "@/actions/content-actions";
import { getUsedTags } from "@/actions/tags";
import { SystemCard } from "@/components/system-card";
import { PromptSidebar as CatalogSidebar } from "@/components/prompt-sidebar";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { Pagination } from "@/components/ui/pagination";

export default async function AutomationsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedParams = await searchParams;
    const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
    const tag = typeof resolvedParams.tag === 'string' ? resolvedParams.tag : undefined;
    const search = typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined;

    const pageParam = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
    const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    const limit = 12;

    const [
        { data: automations, totalPages },
        { data: categoriesData },
        { data: tagsData }
    ] = await Promise.all([
        listContent({
            type: 'automation',
            status: 'published',
            category,
            tag,
            search,
            page,
            limit,
        }),
        getDistinctCategories('automation'),
        getUsedTags('automation')
    ]);

    const categories = categoriesData || [];
    const tags = tagsData || [];
    const t = await getTranslations('Automations');

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>

            <PublicHeader />

            <main className="relative z-10 container mx-auto py-12 px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Main Content (Gallery) */}
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="mb-8">
                            <Link href="/" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors mb-6">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                                {t('title')}
                            </h1>
                            <p className="text-xl text-purple-200 max-w-3xl mb-4">
                                {t('subtitle')}
                            </p>

                            {/* Frontera escrita (Architectural Note Change #6) */}
                            <div className="bg-purple-900/30 border border-purple-500/30 p-4 rounded-lg backdrop-blur-sm">
                                <p className="text-sm text-purple-100">
                                    <strong className="text-white">¿Qué es una Automatización?</strong> Un flujo técnico listo para copiar y pegar en herramientas como Zapier, Make o n8n. Si buscas blueprints estratégicos o modelos de negocio, visita <Link href="/systems" className="underline hover:text-white">Sistemas</Link>.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {automations.map((automation) => (
                                <SystemCard key={automation.id} system={automation} />
                            ))}
                            {automations.length === 0 && (
                                <div className="col-span-full py-12 text-center text-purple-300/50">
                                    No automations found matching your criteria.
                                </div>
                            )}
                        </div>

                        <Pagination
                            currentPage={page}
                            totalPages={totalPages || 1}
                            baseUrl="/automations"
                            searchParams={resolvedParams as Record<string, string | undefined>}
                        />
                    </div>

                    {/* Sidebar (Right Column) */}
                    <aside className="w-full lg:w-80 order-1 lg:order-2 shrink-0">
                        <CatalogSidebar categories={categories} tags={tags} />
                    </aside>
                </div>
            </main>
        </div>
    );
}
