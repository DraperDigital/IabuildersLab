'use client';

import { Josefin_Sans } from 'next/font/google';
import { Check, X, ArrowRight, Instagram, Facebook, MessageCircle, FileDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useRef } from 'react';
import { useRouter } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export default function SocialContentPage() {
  const postScrollRef = useRef<HTMLDivElement>(null);
  const storyScrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const t = useTranslations('SocialPack');

  const handleAction = (planKey: string) => {
    if (planKey === 'consulta') {
      const WHATSAPP_NUMBER = "521234567890"; // Reemplaza con tu número real
      const message = `Hola! Quiero una consulta personalizada sobre Social Conversion Pack.`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
      return;
    }
    router.push(`/checkout?plan=${planKey}`);
  };

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      ref.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-[#FF00A8] selection:text-white ${josefin.className}`}>

      {/* Navbar Placeholder */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="relative h-12 w-48 md:w-64">
            <Image
              src="/social-logo-horizontal.png"
              alt="Social Conversion Pack"
              fill
              className="object-contain filter brightness-110"
              priority
            />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#planes" className="bg-[#0026FF] hover:bg-[#0026FF]/80 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,38,255,0.4)]">
              {t('Hero.ctaPrimary')}
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0026FF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-2 px-4 rounded-full border border-[#FF00A8]/50 bg-[#FF00A8]/10 text-[#FF00A8] font-bold text-sm tracking-widest mb-8 uppercase">
            {t('Hero.badge')}
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8">
            {t('Hero.title1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0026FF] via-[#5D7CFF] to-white drop-shadow-[0_0_15px_rgba(0,38,255,0.5)]">
              {t('Hero.title2')}
            </span>
            <br />{t('Hero.title3')}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            {t('Hero.subtitle')}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#planes" className="group relative px-8 py-4 bg-[#FF00A8] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,168,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                {t('Hero.ctaSecondary')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#planes" className="px-8 py-4 rounded-full border-2 border-white/20 hover:border-white hover:bg-white/5 font-bold text-lg transition-all">
              {t('Hero.ctaPrimary')}
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 max-w-lg mx-auto">
            <p className="text-2xl font-bold italic text-white/90">
              "Tú vendes. Nosotros estructuramos tu contenido."
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problema" className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">
              {t('Problem.title')} <span className="text-[#A6FF2E]">{t('Problem.titleAccent')}</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {(t.raw('Problem.bullets') as string[]).map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-[#111] border border-white/10 hover:border-[#FF00A8]/50 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-[#FF00A8]/20 flex items-center justify-center mb-6 text-[#FF00A8]">
                    <X className="w-6 h-6" />
                  </div>
                  <p className="text-xl font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center p-12 rounded-[3rem] bg-gradient-to-b from-[#111] to-black border border-white/10">
              <p className="text-2xl md:text-3xl font-light mb-4">
                {t('Problem.conclusion1')}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-white">
                {t('Problem.conclusion2')}
              </p>
              <div className="mt-8 inline-block px-6 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold">
                {t('Problem.result')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solucion" className="py-32 bg-white text-black relative rounded-t-[4rem] -mt-12 z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('Solution.title1')} <span className="text-gray-400 line-through decoration-[#FF00A8] decoration-4">{t('Solution.titleStrike')}</span>.
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0026FF]">
              {t('Solution.title2')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: MessageCircle, text: t('Solution.dms') },
              { icon: Check, text: t('Solution.comments') },
              { icon: ArrowRight, text: t('Solution.profile') },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:bg-[#0026FF] hover:text-white transition-all duration-300">
                <item.icon className="w-10 h-10 mb-6 text-[#0026FF] group-hover:text-white transition-colors" />
                <p className="text-2xl font-bold">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-medium uppercase tracking-widest text-gray-500">
            {t('Solution.footer')}
          </p>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="solucion" className="py-20 bg-black text-white relative border-t border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Nuestro <span className="text-[#0026FF]">Portafolio</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Diseños estratégicos adaptados a cada formato.
            </p>
          </div>
        </div>

        {/* SQUARE POSTS (1:1) */}
        <div className="container mx-auto px-6 mb-24">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FF00A8] flex items-center justify-center text-xs">IG</span>
              Posts (1:1)
            </h3>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll(postScrollRef, 'left')}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="rotate-180 w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(postScrollRef, 'right')}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Square Carousel */}
          <div ref={postScrollRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="min-w-[280px] md:min-w-[400px] aspect-square bg-[#111] rounded-[2rem] border border-white/10 relative group overflow-hidden snap-center">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-2xl">
                  POST {i}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0026FF]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <p className="font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform">Campaña de Venta</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VERTICAL STORIES (9:16) */}
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#A6FF2E] text-black flex items-center justify-center text-xs">ST</span>
              Stories (9:16)
            </h3>
            <div className="hidden md:flex gap-2">
              <button
                onClick={() => scroll(storyScrollRef, 'left')}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="rotate-180 w-5 h-5" />
              </button>
              <button
                onClick={() => scroll(storyScrollRef, 'right')}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Vertical Carousel */}
          <div ref={storyScrollRef} className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide px-4 md:px-0">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="min-w-[260px] md:min-w-[320px] aspect-[9/16] bg-[#111] rounded-[2.5rem] border border-white/10 relative group overflow-hidden snap-center group">
                <Image
                  src={`/examples/story-${i}.jpg`}
                  alt={`Portfolio Story ${i}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[#A6FF2E] font-bold text-sm tracking-widest uppercase mb-2">Example 0{i}</p>
                    <p className="font-bold text-2xl text-white">Conversión Vertical</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-32 bg-black text-white relative z-0 -mt-12 pt-44">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
            {t('Process.title')} <span className="text-[#A6FF2E]">{t('Process.titleAccent')}</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: t('Process.step1.title'), desc: t('Process.step1.desc') },
              { title: t('Process.step2.title'), desc: t('Process.step2.desc') },
              { title: t('Process.step3.title'), desc: t('Process.step3.desc') },
              { title: t('Process.step4.title'), desc: t('Process.step4.desc') }
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-3xl bg-[#111] border border-white/10">
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#0026FF] flex items-center justify-center font-bold text-xl border-4 border-black">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <span className="px-6 py-2 rounded-full border border-[#A6FF2E] text-[#A6FF2E] font-medium">
              {t('Process.note')}
            </span>
          </div>
        </div>
      </section>

      {/* MESSAGE BASE SECTION */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto rounded-[3rem] p-12 bg-white/5 border border-white/10 backdrop-blur-xl relative">
            <div className="absolute top-0 right-0 p-8">
              <span className="px-4 py-1.5 rounded-full border border-[#0026FF] text-[#0026FF] text-xs font-bold uppercase tracking-widest bg-[#0026FF]/10">
                {t('MessageBase.subtitle')}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  {t('MessageBase.title')}
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  {t('MessageBase.text')}
                </p>
                <div className="relative h-24 w-24">
                  <Image
                    src="/social-logo-square.png"
                    alt="Social Conversion Pack icon"
                    fill
                    className="object-contain opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {(t.raw('MessageBase.bullets') as string[]).map((bullet: string, i: number) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#0026FF]/30 transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#0026FF]/20 flex items-center justify-center text-[#0026FF]">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-medium text-gray-200">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 border-y border-white/10 bg-[#050505]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              {t('Process.titleAccent')}
            </h2>
            <div className="space-y-6">
              {[
                "Stories (IG, FB, WhatsApp)",
                "Carousels (IG, FB)",
                "Promotions & Offers",
                "Key Benefits",
                "Calls to Action",
                "Social Proof"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#A6FF2E]/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#A6FF2E]" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-[3rem] bg-[#111] border border-white/10 p-8 flex items-center justify-center overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0026FF]/20 to-transparent opacity-50"></div>

            {/* CSS Phone Mockup */}
            <div className="relative z-10 w-[240px] h-[480px] bg-black rounded-[2.5rem] border-[8px] border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-20"></div>

              {/* Screen Content */}
              <div className="w-full h-full bg-gray-900 flex flex-col pt-10 px-4 relative">
                {/* Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                  <div className="flex-1 h-3 bg-gray-700 rounded-full w-24"></div>
                </div>

                {/* Image / Story Placeholder */}
                <div className="w-full aspect-[9/16] bg-gradient-to-tr from-[#FF00A8] to-[#0026FF] rounded-xl flex items-center justify-center text-white font-bold p-4 text-center">
                  <p className="text-sm">Tu contenido<br />optimizada para<br />móvil</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-4">
                  <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                  <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                </div>
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute top-10 right-10 bg-[#A6FF2E] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-12">
              9:16 Stories
            </div>
            <div className="absolute bottom-20 left-10 bg-[#FF00A8] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg -rotate-12">
              1:1 Posts
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG DOWNLOAD SECTION */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FF00A8]/5 opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl relative group hover:border-[#FF00A8]/50 transition-all duration-500">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0026FF] to-[#FF00A8] rounded-[3.1rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0026FF] to-[#FF00A8] mb-8 shadow-[0_0_30px_rgba(0,38,255,0.4)]">
                <FileDown className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                {t('Hero.title2')}? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0026FF] to-[#FF00A8]">
                  {t('Process.title')} PDF
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                {t('Solution.footer')}
              </p>

              <Button
                onClick={() => window.open('/not-found', '_blank')}
                className="h-16 px-12 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-all shadow-[0_10px_40px_rgba(255,255,255,0.2)] flex items-center gap-3 mx-auto"
              >
                {t('Hero.ctaPrimary')} PDF
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="planes" className="py-32 bg-black">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">{t('Plans.title')} <span className="text-[#FF00A8]">{t('Plans.titleAccent')}</span></h2>

          <div className="inline-block px-6 py-2 rounded-full border border-[#FF00A8] bg-[#FF00A8]/10 text-[#FF00A8] font-bold tracking-widest uppercase mb-16 animate-pulse">
            {t('Plans.badge')}
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* PLAN DE ENTRADA */}
            <div className="p-8 rounded-[2.5rem] bg-[#111] border border-white/10 hover:border-white/30 transition-all text-left">
              <div className="mb-6">
                <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">{t('Plans.activation.name')}</span>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="text-4xl font-bold text-white">${t('Plans.activation.price')} <span className="text-lg font-normal text-gray-500">USD</span></h3>
                </div>
                <p className="text-gray-400 text-sm mt-1">{t('Plans.activation.period')}</p>
              </div>

              <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                {(t.raw('Plans.activation.features') as string[]).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-white w-5 h-5" /> {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleAction('social-inicio')}
                className="w-full bg-white text-black hover:bg-gray-200 rounded-full h-14 font-bold text-lg"
              >
                {t('Plans.activation.cta')}
              </Button>
            </div>

            {/* PLAN PRINCIPAL */}
            <div className="relative p-10 rounded-[2.5rem] bg-[#000] border-2 border-[#0026FF] shadow-[0_0_50px_rgba(0,38,255,0.15)] transform md:scale-105 z-10 text-left">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0026FF] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-white border-4 border-black">
                {t('Plans.monthly.recommended')}
              </div>

              <div className="mb-6">
                <span className="text-sm font-bold tracking-widest text-[#0026FF] uppercase">{t('Plans.monthly.name')}</span>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="text-5xl font-bold text-white">${t('Plans.monthly.price')} <span className="text-lg font-normal text-gray-500">USD</span></h3>
                </div>
                <p className="text-gray-400 text-sm mt-1">{t('Plans.monthly.period')}</p>
              </div>

              <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                {(t.raw('Plans.monthly.features') as string[]).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-[#0026FF] w-5 h-5" /> {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleAction('social-mensual')}
                className="w-full bg-[#0026FF] hover:bg-[#0026FF]/90 text-white rounded-full h-14 font-bold text-lg shadow-[0_0_20px_rgba(0,38,255,0.4)] hover:shadow-[0_0_30px_rgba(0,38,255,0.6)] transition-all"
              >
                {t('Plans.monthly.cta')}
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER SECTION (WHAT WE DON'T DO) */}
      <section id="faq" className="py-20 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-300">{t('NotDoing.title')}</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {(t.raw('NotDoing.bullets') as string[]).map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500">
                <X className="w-4 h-4 text-red-500" /> {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600 italic">{t('NotDoing.footer')}</p>
        </div>
      </section>

      {/* FOOTER / FINAL CTA */}
      <section className="py-32 bg-black relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0026FF]/20 to-transparent opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">
            {t('FinalCTA.title')}
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
            <a
              href="#planes"
              className="h-16 px-10 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-transform flex items-center justify-center"
            >
              {t('FinalCTA.ctaPrimary')}
            </a>
            <a
              href="#planes"
              className="h-16 px-10 rounded-full bg-transparent border-2 border-[#0026FF] text-[#0026FF] hover:bg-[#0026FF] hover:text-white font-bold text-xl transition-all flex items-center justify-center"
            >
              {t('FinalCTA.ctaSecondary')}
            </a>
          </div>
          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="relative h-12 w-48 opacity-50 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/social-logo-horizontal.png"
                alt="Social Conversion Pack"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm">
              {t('FinalCTA.footer')}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
