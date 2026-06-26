import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { BookOpen, Terminal, Workflow, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function AppDashboardPage() {
    const t = await getTranslations('AppDashboard');

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold">{t('welcome')}</h1>
                <p className="text-muted-foreground">{t('subtitle')}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('systems')}</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">78</div>
                        <p className="text-xs text-muted-foreground">{t('unlockedContent')}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('prompts')}</CardTitle>
                        <Terminal className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">124</div>
                        <p className="text-xs text-muted-foreground">{t('availableTemplates')}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('automations')}</CardTitle>
                        <Workflow className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <p className="text-xs text-muted-foreground">{t('readyBlueprints')}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('favorites')}</CardTitle>
                        <Star className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">{t('savedItems')}</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{t('recentActivity')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                                <BookOpen className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">{t('aiResearchSystem')}</p>
                                <p className="text-xs text-muted-foreground">{t('viewedHoursAgo', { count: 2 })}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                                <Terminal className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">{t('seoGenerator')}</p>
                                <p className="text-xs text-muted-foreground">{t('savedYesterday')}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('quickActions')}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Link href="/app/systems">
                            <Button variant="outline" className="w-full justify-start">
                                <BookOpen className="mr-2 h-4 w-4" />
                                {t('browseSystems')}
                            </Button>
                        </Link>
                        <Link href="/app/prompts">
                            <Button variant="outline" className="w-full justify-start">
                                <Terminal className="mr-2 h-4 w-4" />
                                {t('explorePrompts')}
                            </Button>
                        </Link>
                        <Link href="/app/automations">
                            <Button variant="outline" className="w-full justify-start">
                                <Workflow className="mr-2 h-4 w-4" />
                                {t('viewAutomations')}
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
