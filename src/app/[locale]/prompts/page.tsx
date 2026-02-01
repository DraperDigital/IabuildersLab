import { listContent, getDistinctCategories } from "@/actions/content-actions";
import { getUsedTags } from "@/actions/tags";
import { PromptCard } from "@/components/prompt-card";
import { PromptSidebar } from "@/components/prompt-sidebar";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { Pagination } from "@/components/ui/pagination";

export default async function PromptsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedParams = await searchParams;
    const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
    const tag = typeof resolvedParams.tag === 'string' ? resolvedParams.tag : undefined;
    const search = typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined;
    const pageParam = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
    const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    const limit = 12;

    const [
        { data: prompts, totalPages },
        { data: categoriesData },
        { data: tagsData }
    ] = await Promise.all([
        listContent({
            type: 'prompt',
            status: 'published',
            category,
            tag,
            search,
            page,
            limit,

        }),
        getDistinctCategories('prompt'),
        getUsedTags('prompt')
    ]);

    const categories = categoriesData || [];
    const tags = tagsData || [];

    const t = await getTranslations('Prompts');

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

            <PublicHeader />

            <main className="relative z-10 container mx-auto py-12 px-4">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content (Gallery) */}
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="mb-8">
                            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <h1 className="text-4xl font-bold mb-4 text-white tracking-tight">
                                {t('title')}
                            </h1>
                            <p className="text-xl text-slate-400 max-w-2xl">
                                {t('subtitle')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {prompts.map((prompt) => (
                                <PromptCard key={prompt.id} prompt={prompt} />
                            ))}
                            {prompts.length === 0 && (
                                <div className="col-span-full py-12 text-center text-slate-500">
                                    No prompts found matching your criteria.
                                </div>
                            )}
                        </div>

                        <Pagination
                            currentPage={page}
                            totalPages={totalPages || 1}
                            baseUrl="/prompts"
                            searchParams={resolvedParams as Record<string, string | undefined>}
                        />
                    </div>

                    {/* Sidebar (Right Column) */}
                    <aside className="w-full lg:w-80 order-1 lg:order-2 shrink-0">
                        <PromptSidebar categories={categories} tags={tags} />
                    </aside>
                </div>
            </main>
        </div>
    );
}
