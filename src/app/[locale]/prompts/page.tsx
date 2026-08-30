import { listContent, getDistinctCategories } from "@/actions/content-actions";
import { getUsedTags } from "@/actions/tags";
import { PromptCard } from "@/components/prompt-card";
import { PromptSidebar } from "@/components/prompt-sidebar";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { Pagination } from "@/components/ui/pagination";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PromptsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedParams = await searchParams;
    const tab = typeof resolvedParams.tab === 'string' ? resolvedParams.tab : 'audiovisual';
    const isSopTab = tab === 'sop';
    const isSkillsTab = tab === 'skills';
    const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
    const tag = typeof resolvedParams.tag === 'string' ? resolvedParams.tag : undefined;
    const search = typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined;
    const pageParam = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
    const page = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
    const limit = 12;

    const [
        { data: prompts, totalPages },
        { data: allTabPrompts },
        { data: categoriesData },
        { data: tagsData }
    ] = await Promise.all([
        listContent({
            type: (isSopTab || isSkillsTab) ? 'all' : 'prompt',
            status: 'published',
            category,
            tag,
            search,
            page,
            limit,
            isSop: isSopTab,
            isSkill: isSkillsTab
        }),
        listContent({
            type: (isSopTab || isSkillsTab) ? 'all' : 'prompt',
            status: 'published',
            isSop: isSopTab,
            isSkill: isSkillsTab,
            limit: 1000
        }),
        getDistinctCategories('prompt'),
        getUsedTags('prompt')
    ]);

    // Filter categories dynamically based on tab
    const sopCategories = [
        "Market Research & Content",
        "CRM & Operations",
        "Paid Ads & Acquisition",
        "Content Creation",
        "Development Web / UI",
        "Research & Content Creation",
        "Ventas y Calificación",
        "Operaciones y Cierre",
        "Páginas de Ventas",
        "Marketing & Content",
        "Infrastructure & Local Environment",
        "Infrastructure & Growth Automation",
        "Infrastructure & Open Source",
        "Skills & CLI"
    ];
    const rawCategories = categoriesData || [];
    const categories = rawCategories.filter(cat => {
        if (isSkillsTab) return cat === "Skills & CLI";
        if (isSopTab) return sopCategories.includes(cat) && cat !== "Skills & CLI";
        return !sopCategories.includes(cat);
    });

    // Filter tags dynamically to show only those in use by current tab
    const activeTagSlugs = new Set(allTabPrompts.flatMap(p => p.tags?.map(t => t.slug) || []));
    const rawTags = tagsData || [];
    const tags = rawTags.filter(tagObj => activeTagSlugs.has(tagObj.slug));

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
                            <p className="text-xl text-slate-400 max-w-2xl mb-8">
                                {t('subtitle')}
                            </p>

                            {/* Tab Bar */}
                            <div className="flex border-b border-white/10 mb-8 gap-6 flex-wrap">
                                <Link
                                    href={{ pathname: '/prompts', query: { tab: 'audiovisual', search } }}
                                    prefetch={false}
                                    className={`pb-3 text-lg font-medium transition-colors relative cursor-pointer ${tab === 'audiovisual' ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                                >
                                    Prompts Audiovisuales
                                    {tab === 'audiovisual' && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500"></div>
                                    )}
                                </Link>
                                <Link
                                    href={{ pathname: '/prompts', query: { tab: 'sop', search } }}
                                    prefetch={false}
                                    className={`pb-3 text-lg font-medium transition-colors relative cursor-pointer ${isSopTab ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                                >
                                    Sistemas de Prompting (SOP)
                                    {isSopTab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500"></div>
                                    )}
                                </Link>
                                <Link
                                    href={{ pathname: '/prompts', query: { tab: 'skills', search } }}
                                    prefetch={false}
                                    className={`pb-3 text-lg font-medium transition-colors relative cursor-pointer ${isSkillsTab ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`}
                                >
                                    Skills CLI (Claude & AGY)
                                    {isSkillsTab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-400"></div>
                                    )}
                                </Link>
                            </div>
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
