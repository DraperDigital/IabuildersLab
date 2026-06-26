import { listContent } from "@/actions/content-actions";
import { getTags } from "@/actions/tags";
import { SystemCard } from "@/components/system-card";
import { ContentFilters } from "@/components/app/content-filters";
import { getTranslations } from "next-intl/server";

interface AppPromptsPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function AppPromptsPage(props: AppPromptsPageProps) {
    const searchParams = await props.searchParams;
    const search = typeof searchParams.search === 'string' ? searchParams.search : undefined;
    const tag = typeof searchParams.tag === 'string' ? searchParams.tag : undefined;

    // Fetch data in parallel
    const [promptsResult, tagsResult] = await Promise.all([
        listContent({
            type: 'prompt',
            status: 'published',
            search,
            tag
        }),
        getTags()
    ]);

    const prompts = promptsResult.data || [];
    const tags = tagsResult.data || [];
    const t = await getTranslations('Prompts');

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">{t('libraryTitle')}</h1>
                <p className="text-muted-foreground">{t('librarySubtitle')}</p>
            </div>

            <ContentFilters tags={tags} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prompts.length > 0 ? (
                    prompts.map((prompt) => (
                        <SystemCard key={prompt.id} system={prompt} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        {t('noFound')}
                    </div>
                )}
            </div>
        </div>
    );
}
