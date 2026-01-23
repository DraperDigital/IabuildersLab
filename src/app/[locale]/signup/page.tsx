import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { ArrowLeft, Sparkles } from "lucide-react";
import { signup } from "@/actions/auth";
import { redirect } from "next/navigation";

interface SignUpPageProps {
    searchParams: Promise<{
        plan?: string;
    }>;
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
    const params = await searchParams;
    const planKey = params.plan || '';
    const isSocial = planKey.startsWith('social-');
    const t = await getTranslations('SignUp');

    async function handleSignup(formData: FormData) {
        'use server'
        const plan = formData.get('plan') as string;
        const result = await signup(formData);
        if (result?.error) {
            console.error(result.error);
        } else {
            const redirectUrl = `/login?message=Check email to confirm account${plan ? `&plan=${plan}` : ''}`;
            redirect(redirectUrl);
        }
    }

    return (
        <div className={`flex min-h-screen flex-col ${isSocial
            ? 'bg-black text-white'
            : 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950'}`}>

            {/* Background Effects */}
            {isSocial ? (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0026FF] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF00A8] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
                </div>
            ) : (
                <div className="absolute inset-0 grid-pattern opacity-20"></div>
            )}

            <header className={`relative z-40 border-b ${isSocial ? 'border-white/10' : 'border-purple-500/20'} glass-effect`}>
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between py-4">
                        <Link href={isSocial ? "/landing" : "/"} className={`font-bold text-xl flex items-center gap-2 transition-colors ${isSocial ? 'text-white hover:text-[#0026FF]' : 'text-white hover:text-purple-300'
                            }`}>
                            <ArrowLeft className="h-5 w-5" />
                            {isSocial ? (
                                <div className="text-xl font-bold tracking-tighter">
                                    SOCIAL<span className="text-[#0026FF]">CONVERSION</span>PACK
                                </div>
                            ) : (
                                <>
                                    <Sparkles className="h-6 w-6 text-purple-400" />
                                    IA Builders Lab
                                </>
                            )}
                        </Link>
                    </div>
                </div>
            </header>

            <div className="relative z-10 flex flex-1 items-center justify-center px-4 py-12">
                <Card className={`w-full max-w-md glass-effect border-purple-500/30 transition-all duration-500 ${isSocial
                    ? 'border-[#0026FF]/40 bg-black/40 shadow-[0_0_30px_rgba(0,38,255,0.1)]'
                    : 'border-purple-500/30'
                    }`}>
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-white">
                            {isSocial ? 'Únete al Pack' : t('title')}
                        </CardTitle>
                        <CardDescription className={isSocial ? 'text-gray-400' : 'text-purple-300'}>
                            {isSocial ? 'Crea tu cuenta para empezar' : t('subtitle')}
                        </CardDescription>
                    </CardHeader>
                    <form action={handleSignup}>
                        <CardContent className="space-y-4">
                            <input type="hidden" name="plan" value={planKey} />
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-purple-200">{t('email')}</label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                    className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-purple-400/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm font-medium text-purple-200">{t('password')}</label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="bg-slate-900/50 border-purple-500/30 text-white placeholder:text-purple-400/50"
                                />
                            </div>
                            <Button className={`w-full font-bold h-12 rounded-xl transition-all ${isSocial
                                ? 'bg-[#0026FF] hover:bg-[#0026FF]/90 text-white shadow-[0_0_20px_rgba(0,38,255,0.4)]'
                                : 'tech-gradient glow-effect'
                                }`} type="submit">
                                {isSocial ? 'Registrarme ahora' : t('submit')}
                            </Button>
                        </CardContent>
                    </form>
                    <CardFooter>
                        <div className={`text-sm w-full text-center ${isSocial ? 'text-gray-500' : 'text-purple-300'}`}>
                            {t('hasAccount')}{' '}
                            <Link href={`/login${planKey ? `?plan=${planKey}` : ''}`} className={`underline ${isSocial ? 'text-[#0026FF] hover:text-[#0026FF]/80' : 'text-purple-400 hover:text-purple-300'
                                }`}>
                                {t('login')}
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
