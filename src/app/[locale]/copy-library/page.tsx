import { listContent, getDistinctCategories } from "@/actions/content-actions";
import { getUsedTags } from "@/actions/tags";
import { TextPromptCard } from "@/components/text-prompt-card";
import { PromptSidebar as CatalogSidebar } from "@/components/prompt-sidebar";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Search } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { Badge } from "@/components/ui/badge";
import { Pagination } from "@/components/ui/pagination";

export default async function CopyLibraryPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedParams = await searchParams;
    const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
    const tag = typeof resolvedParams.tag === 'string' ? resolvedParams.tag : undefined;
    const search = typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined;

    const pageParam = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
    const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    const limit = 20; // List view can handle more items

    const [
        { data: prompts, totalPages },
        { data: categoriesData },
        { data: tagsData }
    ] = await Promise.all([
        listContent({
            type: 'text_prompt',
            status: 'published',
            category,
            tag,
            search,
            page,
            limit
        }),
        getDistinctCategories('text_prompt'),
        getUsedTags('text_prompt')
    ]);

    // As per architectural note, "Marketing" should be merged under "Negocio", we use the generic sidebar.
    const categories = categoriesData || [];
    const tags = tagsData || [];

    const t = await getTranslations('CopyLibrary');

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            {/* Ambient Background */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,50,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>

            <PublicHeader />

            <main className="relative z-10 container mx-auto py-12 px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Main Content (List) */}
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="mb-12">
                            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group">
                                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Link>

                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                        {t('title')}
                                    </h1>
                                    <p className="text-lg text-slate-400 max-w-2xl font-light">
                                        {t('subtitle')}
                                    </p>
                                </div>
                                <div className="hidden md:block">
                                    <Badge className="bg-purple-500/10 text-purple-300 border-purple-500/20 px-4 py-1.5 rounded-full">
                                        750+ Prompts Disponibles
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        {/* Prompts List Container */}
                        <div className="space-y-4">
                            {prompts.length > 0 ? (
                                prompts.map((prompt) => (
                                    <TextPromptCard key={prompt.id} prompt={prompt} />
                                ))
                            ) : (
                                <div className="py-20 text-center rounded-3xl bg-slate-900/20 border border-dashed border-slate-800">
                                    <div className="bg-slate-800/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Search className="h-8 w-8 text-slate-600" />
                                    </div>
                                    <h3 className="text-white font-medium text-lg">{t('noFound')}</h3>
                                    <p className="text-slate-500 mt-2">Intenta cambiar los filtros o el término de búsqueda.</p>
                                </div>
                            )}
                        </div>

                        <div className="mt-8">
                            <Pagination
                                currentPage={page}
                                totalPages={totalPages || 1}
                                baseUrl="/copy-library"
                                searchParams={resolvedParams as Record<string, string | undefined>}
                            />
                        </div>
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

// Helper function locally or import from lib
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
