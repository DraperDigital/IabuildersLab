import { listContent, getDistinctCategories } from "@/actions/content-actions";
import { getTags } from "@/actions/tags";
import { TextPromptCard } from "@/components/text-prompt-card";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { Badge } from "@/components/ui/badge";

export default async function CopyLibraryPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const resolvedParams = await searchParams;
    const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : undefined;
    const search = typeof resolvedParams.search === 'string' ? resolvedParams.search : undefined;

    const [
        { data: prompts },
        { data: categoriesData }
    ] = await Promise.all([
        listContent({
            type: 'prompt',
            status: 'published',
            category,
            search,
            limit: 100 // Load more for list view
        }),
        getDistinctCategories()
    ]);

    // Define relevant categories for Copy Library if not provided by DB yet
    const copyCategories = categoriesData?.length > 0
        ? categoriesData
        : ['Marketing', 'SEO', 'Social Media', 'Email', 'Ventas', 'Copywriting'];

    const t = await getTranslations('CopyLibrary');

    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            {/* Ambient Background */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,50,255,0.05)_0%,transparent_50%)] pointer-events-none"></div>

            <PublicHeader />

            <main className="relative z-10 container mx-auto py-12 px-4 max-w-5xl">
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

                        {/* Stats Badge */}
                        <div className="hidden md:block">
                            <Badge className="bg-purple-500/10 text-purple-300 border-purple-500/20 px-4 py-1.5 rounded-full">
                                750+ Prompts Disponibles
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Filters & Search Header */}
                <div className="sticky top-20 z-30 mb-8 p-2 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-white/5 shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Search Input Mockup (Functional logic pending real search bar component) */}
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder={t('searchPlaceholder')}
                                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all"
                            />
                        </div>

                        {/* Category Quick Filters */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
                            <Filter className="h-4 w-4 text-slate-500 shrink-0 ml-2" />
                            <Link href="/copy-library">
                                <Badge
                                    variant={!category ? "default" : "outline"}
                                    className={cn(
                                        "whitespace-nowrap cursor-pointer",
                                        !category ? "bg-purple-600 hover:bg-purple-500" : "border-slate-800 text-slate-400 hover:border-purple-500/50"
                                    )}
                                >
                                    {t('allCategories')}
                                </Badge>
                            </Link>
                            {copyCategories.map((cat) => (
                                <Link key={cat} href={`/copy-library?category=${cat.toLowerCase()}`}>
                                    <Badge
                                        variant={category?.toLowerCase() === cat.toLowerCase() ? "default" : "outline"}
                                        className={cn(
                                            "whitespace-nowrap cursor-pointer px-3 py-1",
                                            category?.toLowerCase() === cat.toLowerCase()
                                                ? "bg-purple-600 hover:bg-purple-500"
                                                : "border-slate-800 text-slate-400 hover:border-purple-500/50"
                                        )}
                                    >
                                        {cat}
                                    </Badge>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Prompts List Container */}
                <div className="space-y-3">
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

                {/* Footer Info */}
                <div className="mt-12 text-center">
                    <p className="text-slate-600 text-sm">
                        ¿Tienes un prompt que te gustaría compartir? <Link href="/contact" className="text-purple-400 hover:underline">Contáctanos</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}

// Helper function locally or import from lib
function cn(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}
