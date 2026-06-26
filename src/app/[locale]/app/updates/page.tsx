import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getTranslations } from "next-intl/server";

const MOCK_UPDATES = [
    {
        id: "1",
        title: "Nuevo Sistema de Ventas con IA Añadido",
        description: "Conoce nuestro último sistema para automatizar flujos de trabajo de ventas con agentes de IA.",
        date: "2024-05-15",
        type: "new"
    },
    {
        id: "2",
        title: "Biblioteca de Prompts Actualizada",
        description: "Más de 30 nuevos prompts añadidos para creación de contenido y SEO.",
        date: "2024-05-12",
        type: "update"
    },
    {
        id: "3",
        title: "Blueprint de Automatización: Integración con CRM",
        description: "Nuevo blueprint de Make.com para sincronizar datos de clientes entre herramientas.",
        date: "2024-05-10",
        type: "new"
    }
];

export default async function AppUpdatesPage() {
    const t = await getTranslations('AppUpdates');

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">{t('title')}</h1>
                <p className="text-muted-foreground">{t('subtitle')}</p>
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
                                    {t(update.type as any)}
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
