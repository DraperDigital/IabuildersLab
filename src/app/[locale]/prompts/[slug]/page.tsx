import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, ArrowLeft, Copy, Check, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { MOCK_PROMPTS } from "@/lib/mock-data";
import { PromptSidebar } from "@/components/prompt-sidebar";
import { PublicHeader } from "@/components/public-header";
import { PromptDisplay } from "@/components/prompt-display";
import { FrameworkAnalysis } from "@/components/framework-analysis";
import { ReaisempGuide } from "@/components/reaisemp-guide";
import { AvatarCourseCTA } from "@/components/avatar-course-cta";
import { CustomizationGuide } from "@/components/customization-guide";
import { Sparkles } from "lucide-react";
import { getDistinctCategories } from "@/actions/content-actions";
import { getTags } from "@/actions/tags";
import { TextPromptView } from "@/components/text-prompt-view";

function isJsonString(str: string | undefined | null) {
    if (!str) return false;
    try {
        const json = JSON.parse(str);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}

interface PromptDetailPageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export default async function PromptDetailPage({ params }: PromptDetailPageProps) {
    const { slug } = await params;
    const categories = await getDistinctCategories();
    const tags = await getTags();

    const promptIndex = MOCK_PROMPTS.findIndex(p => p.slug === slug);
    const prompt = MOCK_PROMPTS[promptIndex];

    if (!prompt) {
        notFound();
    }

    const isImagePrompt = isJsonString(prompt.prompt_text);

    // Filter prompts to only include those of the same type (Image vs Text)
    const filteredPrompts = MOCK_PROMPTS.filter(p => isJsonString(p.prompt_text) === isImagePrompt);
    const filteredIndex = filteredPrompts.findIndex(p => p.slug === slug);

    const prevPrompt = filteredIndex > 0 ? filteredPrompts[filteredIndex - 1] : null;
    const nextPrompt = filteredIndex < filteredPrompts.length - 1 ? filteredPrompts[filteredIndex + 1] : null;

    // Mock Access Logic (To be replaced with real auth check later)
    // For now, let's assume 'access' (Free) logic is: You see it if you are here (simulating logged in for demo) 
    // BUT we will block 'pro' content.
    const isProContent = prompt.paywall_level === "pro" || prompt.paywall_level === "plus";
    // MOCK: Toggle this to test different user states. For now, we simulate a Free Tier user.
    const userTier: string = "free";
    const isLocked = isProContent && userTier !== "pro";

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: prompt.title,
        description: prompt.summary,
        image: prompt.featured_image_url ? `https://iabuildersvault.com${prompt.featured_image_url}` : undefined,
        genre: prompt.category,
        author: {
            '@type': 'Organization',
            name: 'IA Builders Vault'
        },
        datePublished: prompt.created_at,
        dateModified: prompt.updated_at,
    };



    return (
        <div className="flex min-h-screen flex-col bg-slate-950">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PublicHeader />

            <main className="container mx-auto py-12 px-4">
                {!isImagePrompt ? (
                    <TextPromptView
                        prompt={prompt}
                        prevPrompt={prevPrompt}
                        nextPrompt={nextPrompt}
                        categories={categories.data || []}
                        tags={tags.data || []}
                        isLocked={isLocked}
                    />
                ) : (
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Left Column: Visual & Content */}
                        <div className="flex-1 lg:max-w-4xl">
                            {/* Breadcrumb & Navigation */}
                            <div className="flex items-center justify-between mb-6">
                                <Link href="/prompts" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Library
                                </Link>

                                <div className="flex items-center gap-3">
                                    {prevPrompt && (
                                        <Link
                                            href={`/prompts/${prevPrompt.slug}`}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 transition-all text-slate-400 hover:text-purple-400 group"
                                            title={`Anterior: ${prevPrompt.title}`}
                                        >
                                            <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
                                        </Link>
                                    )}
                                    {nextPrompt && (
                                        <Link
                                            href={`/prompts/${nextPrompt.slug}`}
                                            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 transition-all text-slate-400 hover:text-purple-400 group"
                                            title={`Siguiente: ${nextPrompt.title}`}
                                        >
                                            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Title Block */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                                        {prompt.category}
                                    </Badge>
                                    {isProContent ? (
                                        <Badge className="bg-amber-500/10 text-amber-500 border border-amber-500/50"> Premium</Badge>
                                    ) : (
                                        <Badge className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/50">Free</Badge>
                                    )}
                                </div>
                                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                    {prompt.title}
                                </h1>
                                <p className="text-xl text-slate-300 leading-relaxed font-light mb-8">
                                    {prompt.summary}
                                </p>

                                {prompt.customization_guide && (
                                    <Link
                                        href="#customization-guide"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-purple-200 hover:bg-purple-500/10 transition-all font-medium group"
                                    >
                                        <Sparkles className="h-4 w-4 text-purple-400 group-hover:scale-110 transition-transform" />
                                        Explícame cómo personalizar este prompt
                                    </Link>
                                )}
                            </div>

                            {/* Main Visual (Result) */}
                            <div className="mb-10 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 aspect-video relative group">
                                {prompt.featured_image_url ? (
                                    <img
                                        src={prompt.featured_image_url}
                                        alt="Prompt Result"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-slate-900 border border-slate-800">
                                        <p className="text-slate-500">No Preview Image</p>
                                    </div>
                                )}

                                {/* Watermark/info */}

                            </div>



                            {/* Avatar Course CTA - Hidden for Nano Banana cases */}
                            {(!prompt.id.startsWith('nano-') && !prompt.id.startsWith('p-nano-')) && (
                                <>
                                    <AvatarCourseCTA />
                                    <ReaisempGuide />
                                </>
                            )}

                            {/* The Prompt Block with Aspect Ratio Selector */}
                            <PromptDisplay
                                promptText={prompt.prompt_text || "No prompt text provided."}
                                isLocked={isLocked}
                            />

                            {/* Analysis Component (Only appears if framework data exists) */}
                            <FrameworkAnalysis promptText={prompt.prompt_text || ""} />

                            {/* Customization Guide Section */}
                            {(prompt.customization_guide || prompt.reference_image_guide) && (
                                <CustomizationGuide
                                    guide={prompt.customization_guide}
                                    referenceImageGuide={prompt.reference_image_guide}
                                    isLocked={isLocked}
                                    type={prompt.category === 'Fashion' || prompt.category === 'Portrait' ? 'portrait' : 'product'}
                                />
                            )}

                            {/* Bottom Navigation */}
                            <div className="mt-12 pt-8 border-t border-slate-800/50 flex items-center justify-between">
                                <div>
                                    {prevPrompt && (
                                        <Link
                                            href={`/prompts/${prevPrompt.slug}`}
                                            className="group"
                                        >
                                            <div className="text-xs text-slate-500 mb-1 group-hover:text-slate-400 transition-colors">Anterior</div>
                                            <div className="flex items-center gap-2 text-slate-300 group-hover:text-purple-400 transition-colors">
                                                <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                                <span className="font-medium">{prevPrompt.title}</span>
                                            </div>
                                        </Link>
                                    )}
                                </div>
                                <div className="text-right">
                                    {nextPrompt && (
                                        <Link
                                            href={`/prompts/${nextPrompt.slug}`}
                                            className="group"
                                        >
                                            <div className="text-xs text-slate-500 mb-1 group-hover:text-slate-400 transition-colors text-right">Siguiente</div>
                                            <div className="flex items-center gap-2 text-slate-300 group-hover:text-purple-400 transition-colors justify-end">
                                                <span className="font-medium">{nextPrompt.title}</span>
                                                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            {/* Guide / Documentation */}


                        </div>

                        {/* Right Column: Sidebar */}
                        <aside className="w-full lg:w-80 shrink-0">
                            <PromptSidebar categories={categories.data || []} tags={tags.data || []} />
                        </aside>

                    </div>
                )}
            </main>
        </div>
    );
}
