import { getPublicSystems } from "@/lib/mock-data";
import { SystemCard } from "@/components/system-card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default async function AppSystemsPage() {
    const systems = await getPublicSystems();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Systems Library</h1>
                <p className="text-muted-foreground">Your complete collection of AI systems.</p>
            </div>

            <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search systems..." className="pl-8" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {systems.map((system) => (
                    <SystemCard key={system.id} system={system} />
                ))}
            </div>
        </div>
    );
}
