import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Sparkles, Shield, LogOut } from "lucide-react";
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
                    <nav className="flex gap-6 items-center">
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
                </div>
            </div>
        </header>
    );
}
