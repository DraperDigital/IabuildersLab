import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { Sparkles, Zap, Code2, Rocket } from "lucide-react";
import { PublicHeader } from "@/components/public-header";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Landing' });

  return {
    title: t('title'),
    description: t('subtitle'),
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
    },
  };
}

export default async function LandingPage() {
  const t = await getTranslations('Landing');
  const common = await getTranslations('Common');

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <PublicHeader />

      <main className="relative z-10 flex-1 container mx-auto px-4">
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 border border-purple-500/30">
            <Zap className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">AI-Powered Repository</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            {t('title')}
          </h1>

          <p className="text-xl text-purple-200 max-w-2xl mb-12 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex gap-4 flex-wrap justify-center mb-12">
            <Link href="/pricing">
              <Button size="lg" className="tech-gradient text-white font-semibold px-8 py-6 text-lg glow-effect hover:scale-105 transition-transform">
                <Rocket className="mr-2 h-5 w-5" />
                {t('getAccess')}
              </Button>
            </Link>
            <Link href="/systems">
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-200 hover:bg-purple-500/20 px-8 py-6 text-lg">
                <Code2 className="mr-2 h-5 w-5" />
                {t('browseSystems')}
              </Button>
            </Link>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full mt-12">
            <div className="glass-effect rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105">
              <div className="rounded-full bg-purple-500/20 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Code2 className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">78+ Systems</h3>
              <p className="text-sm text-purple-300">Production-ready AI workflows</p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105">
              <div className="rounded-full bg-blue-500/20 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">100+ Prompts</h3>
              <p className="text-sm text-purple-300">Battle-tested prompt templates</p>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-purple-500/30 hover:border-purple-500/60 transition-all hover:scale-105">
              <div className="rounded-full bg-pink-500/20 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">50+ Automations</h3>
              <p className="text-sm text-purple-300">Copy-paste workflow blueprints</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
