import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, ArrowLeft } from "lucide-react";
import { MOCK_AUTOMATIONS } from "@/lib/mock-data";

interface AutomationDetailPageProps {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
}

export default async function AutomationDetailPage({ params }: AutomationDetailPageProps) {
    const { slug } = await params;
    const automation = MOCK_AUTOMATIONS.find(a => a.slug === slug);

    if (!automation) {
        notFound();
    }

    const isLocked = automation.paywall_level !== "free_preview";

    return (
        <div className="flex min-h-screen flex-col bg-background">
            <header className="container mx-auto z-40 bg-background px-4 border-b">
                <div className="flex h-16 items-center justify-between py-4">
                    <Link href="/" className="font-bold text-lg">IA Builders Lab</Link>
                    <Link href="/automations">
                        <Button variant="ghost" size="sm">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Automations
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto py-10 px-4 max-w-4xl">
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="capitalize">{automation.level}</Badge>
                        <Badge>{automation.category}</Badge>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight mb-4">{automation.title}</h1>
                    <p className="text-xl text-muted-foreground">{automation.summary}</p>
                </div>

                {isLocked ? (
                    <div className="rounded-lg border bg-muted/50 p-12 text-center">
                        <Lock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h2 className="text-2xl font-semibold mb-2">This automation is locked</h2>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Unlock this blueprint and 100+ others with a workspace plan.
                        </p>
                        <Link href="/pricing">
                            <Button size="lg">View Pricing</Button>
                        </Link>
                    </div>
                ) : (
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: (automation.body_markdown || '').replace(/\n/g, '<br />') }} />
                    </div>
                )}
            </main>
        </div>
    );
}
