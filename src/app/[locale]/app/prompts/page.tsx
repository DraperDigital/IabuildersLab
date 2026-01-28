import { getPublicPrompts } from "@/lib/mock-data";
import { SystemCard } from "@/components/system-card";
export default async function AppPromptsPage() {
    const prompts = await getPublicPrompts();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Prompts Library</h1>
                <p className="text-muted-foreground">Your complete collection of AI prompts.</p>
            </div>

            <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search prompts..." className="pl-8" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prompts.map((prompt) => (
                    <SystemCard key={prompt.id} system={prompt} />
                ))}
            </div>
        </div>
    );
}
