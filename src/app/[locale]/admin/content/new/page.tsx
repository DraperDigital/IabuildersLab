import { ContentForm } from "@/components/content-form"

export default function NewContentPage() {
    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold">Create New Content</h1>
                <p className="text-muted-foreground">
                    Add a new system, prompt, or automation.
                </p>
            </div>
            <div className="p-6 border rounded-lg bg-card text-card-foreground shadow-sm">
                <ContentForm />
            </div>
        </div>
    )
}
