import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { Sparkles, Zap, Code2, Rocket, ArrowRight } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { AntigravityHero, AntigravityCard, IsometricShowcase } from "@/components/antigravity-effects";

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

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 overflow-hidden relative">
      {/* Background space depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,50,255,0.15),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

      {/* Floating Orbs (Glassmorphism Light Sources) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <IsometricShowcase />

      <PublicHeader />

      <main className="relative z-10 flex-1 container mx-auto px-4 pb-24">
        <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center text-center">
          
          <AntigravityHero>
            <div className="ag-fade-up mb-8 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
              <Zap className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-200 tracking-wide uppercase">{t('aiPowered')}</span>
            </div>

            <h1 className="ag-fade-up text-5xl font-extrabold tracking-tight sm:text-7xl mb-8 bg-gradient-to-br from-white via-purple-100 to-indigo-300 bg-clip-text text-transparent max-w-4xl leading-tight">
              {t('title')}
            </h1>

            <p className="ag-fade-up text-xl text-slate-300 max-w-2xl mb-12 font-light leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="ag-fade-up flex gap-4 flex-wrap justify-center mb-20">
              <Link href="/pricing">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-6 text-lg rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300 hover:-translate-y-1">
                  <Rocket className="mr-2 h-5 w-5" />
                  {t('getAccess')}
                </Button>
              </Link>
              <Link href="/systems">
                <Button size="lg" variant="outline" className="border-purple-500/30 text-purple-200 bg-purple-950/20 backdrop-blur-sm hover:bg-purple-900/40 px-8 py-6 text-lg rounded-2xl transition-all duration-300 hover:-translate-y-1">
                  <Code2 className="mr-2 h-5 w-5" />
                  {t('browseSystems')}
                </Button>
              </Link>
            </div>

            {/* Feature cards with 3D Mouse Tracking */}
            <div className="ag-fade-up grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
              <AntigravityCard className="p-8 text-left group">
                <div className="rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 w-14 h-14 flex items-center justify-center mb-6 border border-purple-500/20 shadow-inner">
                  <Code2 className="h-7 w-7 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('systemsTitle')}</h3>
                <p className="text-slate-400 leading-relaxed">{t('systemsDesc')}</p>
                <div className="mt-6 flex items-center text-purple-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Explorar <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </AntigravityCard>

              <AntigravityCard className="p-8 text-left group">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 w-14 h-14 flex items-center justify-center mb-6 border border-blue-500/20 shadow-inner">
                  <Sparkles className="h-7 w-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('promptsTitle')}</h3>
                <p className="text-slate-400 leading-relaxed">{t('promptsDesc')}</p>
                <div className="mt-6 flex items-center text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Explorar <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </AntigravityCard>

              <AntigravityCard className="p-8 text-left group">
                <div className="rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/5 w-14 h-14 flex items-center justify-center mb-6 border border-pink-500/20 shadow-inner">
                  <Zap className="h-7 w-7 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('automationsTitle')}</h3>
                <p className="text-slate-400 leading-relaxed">{t('automationsDesc')}</p>
                <div className="mt-6 flex items-center text-pink-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Explorar <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </AntigravityCard>
            </div>
          </AntigravityHero>

        </div>
      </main>
    </div>
  );
}
