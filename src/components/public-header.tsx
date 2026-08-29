import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Shield, LogOut, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/actions/auth";
import { getTranslations } from "next-intl/server";
import { LanguageSwitcher } from "@/components/language-switcher";

export async function PublicHeader() {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const t = await getTranslations('Header');

    return (
        <header className="relative z-40 border-b border-purple-500/20 glass-effect">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center">
                            <img src="/logo-horizontal.png" alt="IA Builders Lab" className="h-8 object-contain" />
                        </Link>
                        <div className="hidden xl:flex items-center gap-2 font-mono text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-purple-500/20">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>iabuilders.lab / v2.4</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-5 items-center">
                        <Link href="/systems" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            {t('systems')}
                        </Link>
                        <Link href="/prompts" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            {t('prompts')}
                        </Link>
                        <Link href="/copy-library" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            {t('copyLibrary')}
                        </Link>
                        <Link href="/automations" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            {t('automations')}
                        </Link>
                        <Link href="/pricing" className="text-sm font-medium text-purple-200 hover:text-purple-400 transition-colors">
                            {t('pricing')}
                        </Link>

                        <LanguageSwitcher />

                        {user ? (
                            <div className="flex items-center gap-3">
                                <Link href="/admin">
                                    <Button variant="outline" size="sm" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20 gap-2">
                                        <Shield className="h-4 w-4" />
                                        {t('dashboard')}
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
                                    {t('login')}
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
                                        <img src="/logo-square.png" alt="IA Builders" className="h-6 w-6 object-contain rounded-md" />
                                        {t('menu')}
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 mt-8">
                                    <nav className="flex flex-col gap-4">
                                        <Link href="/systems" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            {t('systems')}
                                        </Link>
                                        <Link href="/prompts" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            {t('prompts')}
                                        </Link>
                                        <Link href="/copy-library" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            {t('copyLibrary')}
                                        </Link>
                                        <Link href="/automations" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            {t('automations')}
                                        </Link>
                                        <Link href="/pricing" className="text-lg font-medium text-purple-200 hover:text-purple-400 transition-colors">
                                            {t('pricing')}
                                        </Link>
                                    </nav>

                                    <div className="h-px bg-purple-500/20" />

                                    <div className="flex flex-col gap-4">
                                        {user ? (
                                            <>
                                                <Link href="/admin">
                                                    <Button variant="outline" className="w-full justify-start border-purple-500/50 text-purple-200 hover:bg-purple-500/20 gap-2">
                                                        <Shield className="h-4 w-4" />
                                                        {t('dashboard')}
                                                    </Button>
                                                </Link>
                                                <form action={signOut} className="w-full">
                                                    <Button variant="ghost" className="w-full justify-start text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 gap-2">
                                                        <LogOut className="h-4 w-4" />
                                                        {t('signOut')}
                                                    </Button>
                                                </form>
                                            </>
                                        ) : (
                                            <Link href="/login">
                                                <Button variant="outline" className="w-full border-purple-500/50 text-purple-200 hover:bg-purple-500/20">
                                                    {t('login')}
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
