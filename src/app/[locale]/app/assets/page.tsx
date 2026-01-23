import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function AppAssetsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Assets & Resources</h1>
                <p className="text-muted-foreground">Downloadable templates, guides, and resources.</p>
            </div>

            <div className="flex items-center justify-center min-h-[400px]">
                <Card className="max-w-md text-center p-8">
                    <CardHeader>
                        <div className="mx-auto rounded-full bg-muted p-4 w-fit mb-4">
                            <FileText className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <CardTitle>Coming Soon</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            We're preparing exclusive templates, cheat sheets, and resource packs for you.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
