import { ContentForm } from "@/components/content-form"
import { getContent } from "@/actions/content-actions"

interface EditContentPageProps {
    params: {
        id: string
    }
}

export default async function EditContentPage({ params }: EditContentPageProps) {
    let content = null;
    try {
        const result = await getContent(params.id);
        if (result.error) {
            return <div>Error loading content: {result.error}</div>;
        }
        content = result.data;
    } catch (err) {
        console.error("Failed to get content:", err);
        return <div>Error loading content.</div>;
    }

    if (!content) {
        return <div>Content not found</div>;
    }

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Edit Content</h1>
                <p className="text-muted-foreground">
                    Update system, prompt, or automation details.
                </p>
            </div>
            <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                <ContentForm initialData={content} />
            </div>
        </div>
    )
}

