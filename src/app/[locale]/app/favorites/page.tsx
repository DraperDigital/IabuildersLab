import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function AppFavoritesPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Favorites</h1>
                <p className="text-muted-foreground">Your saved and bookmarked content.</p>
            </div>

            <div className="flex items-center justify-center min-h-[400px]">
                <Card className="max-w-md text-center p-8">
                    <CardHeader>
                        <div className="mx-auto rounded-full bg-muted p-4 w-fit mb-4">
                            <Star className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <CardTitle>No favorites yet</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            Start saving your favorite systems, prompts, and automations to access them quickly.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
