import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const MOCK_UPDATES = [
    {
        id: "1",
        title: "New AI Sales System Added",
        description: "Check out our latest system for automating sales workflows with AI agents.",
        date: "2024-05-15",
        type: "new"
    },
    {
        id: "2",
        title: "Prompt Library Updated",
        description: "30+ new prompts added for content creation and SEO.",
        date: "2024-05-12",
        type: "update"
    },
    {
        id: "3",
        title: "Automation Blueprint: CRM Integration",
        description: "New Make.com blueprint for syncing customer data across tools.",
        date: "2024-05-10",
        type: "new"
    }
];

export default function AppUpdatesPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Updates & Announcements</h1>
                <p className="text-muted-foreground">Stay up to date with new content and features.</p>
            </div>

            <div className="space-y-4">
                {MOCK_UPDATES.map((update) => (
                    <Card key={update.id}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="rounded-full bg-primary/10 p-2">
                                        <Bell className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{update.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">{update.date}</p>
                                    </div>
                                </div>
                                <Badge variant={update.type === "new" ? "default" : "secondary"}>
                                    {update.type}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{update.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
