import { getSystemBySlug } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, ArrowLeft, Download, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function SystemDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const system = await getSystemBySlug(slug);

    if (!system) {
        notFound();
    }

    const isLocked = system.paywall_level !== "free_preview";

    const levelColors: Record<string, string> = {
        beginner: "bg-emerald-600 text-white border-emerald-400",
        intermediate: "bg-amber-600 text-white border-amber-400",
        advanced: "bg-rose-600 text-white border-rose-400"
    };

    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950">
            {/* Header */}
            <header className="border-b border-purple-500/20 backdrop-blur-sm bg-slate-950/50 sticky top-0 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center">
                        <Link href="/systems" className="flex items-center text-sm text-purple-200 hover:text-white transition-colors gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Systems
                        </Link>
                    </div>
                </div>
            </header>

            <main className="container mx-auto py-10 px-4 max-w-6xl">
                {/* Header Section */}
                <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-2 flex-wrap">
                        <Badge className="bg-purple-600 text-white font-semibold">{system.category}</Badge>
                        <Badge variant="outline" className={`${levelColors[system.level || 'beginner']} border font-semibold text-xs`}>
                            {system.level || 'beginner'}
                        </Badge>
                        {isLocked && (
                            <Badge className="bg-rose-600 text-white flex items-center gap-1 font-semibold">
                                <Lock className="w-3 h-3" /> {system.paywall_level} Plan
                            </Badge>
                        )}
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-white">
                        {system.title}
                    </h1>
                    <p className="text-xl text-purple-200 leading-relaxed">
                        {system.summary}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {isLocked ? (
                            <div className="border-2 border-purple-500/50 rounded-xl p-10 bg-slate-900/50 backdrop-blur-sm text-center space-y-6 glass-effect">
                                <div className="w-20 h-20 bg-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                                    <Lock className="w-10 h-10 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-3">This System is Locked</h3>
                                    <p className="text-purple-200 text-lg max-w-md mx-auto">
                                        Unlock this research system and 50+ others with a workspace plan.
                                    </p>
                                </div>
                                <Button size="lg" asChild className="tech-gradient glow-effect font-semibold px-8">
                                    <Link href="/pricing">Get Access</Link>
                                </Button>
                                <p className="text-sm text-purple-300">
                                    Already a member? <Link href="/login" className="underline hover:text-white transition-colors">Log in</Link>
                                </p>
                            </div>
                        ) : (
                            <div className="prose prose-lg prose-invert max-w-none">
                                <div className="bg-slate-900/30 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-purple-50">
                                    <ReactMarkdown>{system.body_markdown || ''}</ReactMarkdown>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="border-2 border-purple-500/30 rounded-xl p-6 bg-slate-900/50 backdrop-blur-sm glass-effect sticky top-24">
                            <h3 className="font-bold text-lg mb-4 text-white">System Details</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between py-3 border-b border-purple-500/20">
                                    <span className="text-purple-300">Level</span>
                                    <span className="font-semibold capitalize text-white">{system.level || 'beginner'}</span>
                                </li>
                                <li className="flex justify-between py-3 border-b border-purple-500/20">
                                    <span className="text-purple-300">Category</span>
                                    <span className="font-semibold text-white">{system.category}</span>
                                </li>
                                <li className="flex justify-between py-3">
                                    <span className="text-purple-300 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        Updated
                                    </span>
                                    <span className="font-semibold text-white">
                                        {new Date(system.updated_at).toLocaleDateString()}
                                    </span>
                                </li>
                            </ul>

                            {!isLocked && (
                                <div className="mt-6">
                                    <Button className="w-full tech-gradient glow-effect gap-2 font-semibold">
                                        <Download className="w-4 h-4" />
                                        Download Assets
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
