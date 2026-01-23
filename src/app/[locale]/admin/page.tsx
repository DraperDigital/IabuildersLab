import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDashboardMetrics, getRecentContent } from "@/actions/dashboard";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Users, CreditCard, Activity } from "lucide-react";
import { DashboardMetrics, ContentItem } from "@/types/content";

export default async function AdminDashboard() {
    let metrics: DashboardMetrics | null = null;
    let recentContent: any[] = [];

    try {
        const [metricsRes, contentRes] = await Promise.all([
            getDashboardMetrics(),
            getRecentContent(5)
        ]);

        metrics = metricsRes.data || null;
        recentContent = contentRes.data || [];

        if (metricsRes.error) console.error("Metrics error:", metricsRes.error);
        if (contentRes.error) console.error("Content error:", contentRes.error);
    } catch (err) {
        console.error("Dashboard data fetch failed:", err);
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>

            {/* Metrics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Content</CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metrics?.total_content || 0}</div>
                        <p className="text-xs text-muted-foreground">
                            {metrics?.published_content || 0} published
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metrics?.total_users || 0}</div>
                        <p className="text-xs text-muted-foreground">
                            REGISTERED PROFILES
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metrics?.total_subscribers || 0}</div>
                        <p className="text-xs text-muted-foreground">
                            Active paid plans
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Items</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{metrics?.content_by_type?.system || 0}</div>
                        <p className="text-xs text-muted-foreground">
                            Core systems
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Content */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Recent Content</h2>
                    <Button variant="ghost" asChild>
                        <Link href="/admin/content">
                            View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Updated</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentContent?.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4} className="text-center py-4 text-muted-foreground">
                                        No recent content found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                recentContent?.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">
                                            <Link href={`/admin/content/${item.id}`} className="hover:underline">
                                                {item.title}
                                            </Link>
                                        </TableCell>
                                        <TableCell className="capitalize">{item.type}</TableCell>
                                        <TableCell>
                                            <Badge variant={item.status === 'published' ? 'default' : 'secondary'}>
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {new Date(item.updated_at).toLocaleDateString()}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
