import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function AppAssetsPage() {
    const t = await getTranslations('AppAssets');

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">{t('title')}</h1>
                <p className="text-muted-foreground">{t('subtitle')}</p>
            </div>

            <div className="flex items-center justify-center min-h-[400px]">
                <Card className="max-w-md text-center p-8">
                    <CardHeader>
                        <div className="mx-auto rounded-full bg-muted p-4 w-fit mb-4">
                            <FileText className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <CardTitle>{t('comingSoon')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            {t('comingSoonDesc')}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
