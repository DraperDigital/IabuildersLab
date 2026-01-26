import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/actions/auth";

export async function PublicHeader() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    return (
        <header className="relative z-40 border-b border-purple-500/20 glass-effect">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between py-4">
                    <Link href="/" className="font-bold text-xl text-white flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-purple-400" />
                        IA Builders Lab
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link href="/systems" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            Systems
                        </Link>
                        <Link href="/prompts" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            Prompts
                        </Link>
                        <Link href="/copy-library" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            Copy Library
                        </Link>
                        <Link href="/automations" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            Automations
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            Pricing
                        </Link>

                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link href="/admin">
                                    <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20 gap-2">
                                        <Shield className="h-4 w-4" />
                                        Dashboard
                                    </Button>
                                </Link>
                                <form action={signOut}>
                                    <Button variant="ghost" size="icon" className="text-purple-200 hover:text-purple-100 hover:bg-purple-500/20">
                                        <LogOut className="h-4 w-4" />
                                    </Button>
                                </form>
                            </div>
                        ) : (
                            <Link href="/login">
                                <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                                    Login
                                </Button>
                            </Link>
                        )}
                    </nav>

                    {/* Mobile Navigation */}
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-purple-200 hover:bg-purple-500/20">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-slate-950 border-l border-purple-500/20 w-[300px] sm:w-[400px]">
                                <SheetHeader>
                                    <SheetTitle className="text-left flex items-center gap-2 text-white">
                                        <Sparkles className="h-5 w-5 text-purple-400" />
                                        Menu
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 mt-8">
                                    <nav className="flex flex-col gap-4">
                                        <Link href="/systems" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            Systems
                                        </Link>
                                        <Link href="/prompts" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            Prompts
                                        </Link>
                                        <Link href="/copy-library" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            Copy Library
                                        </Link>
                                        <Link href="/automations" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            Automations
                                        </Link>
                                        <Link href="/pricing" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            Pricing
                                        </Link>
                                    </nav>

                                    <div className="h-px bg-purple-500/20" />

                                    <div className="flex flex-col gap-4">
                                        {user ? (
                                            <>
                                                <Link href="/admin">
                                                    <Button variant="outline" className="w-full justify-start border-purple-500/50 text-purple-200 hover:bg-purple-500/20 gap-2">
                                                        <Shield className="h-4 w-4" />
                                                        Dashboard
                                                    </Button>
                                                </Link>
                                                <form action={signOut} className="w-full">
                                                    <Button variant="ghost" className="w-full justify-start text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 gap-2">
                                                        <LogOut className="h-4 w-4" />
                                                        Sign Out
                                                    </Button>
                                                </form>
                                            </>
                                        ) : (
                                            <Link href="/login">
                                                <Button variant="outline" className="w-full border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                                                    Login
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
