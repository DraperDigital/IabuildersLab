import { Josefin_Sans } from 'next/font/google';
import { Check, X, ArrowRight, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const josefin = Josefin_Sans({ subsets: ['latin'] });

export default function SocialContentPage() {
  return (
    <div className={`min-h-screen bg-black text-white selection:bg-[#FF00A8] selection:text-white ${josefin.className}`}>

      {/* Navbar Placeholder */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            SOCIAL<span className="text-[#0026FF]">CONVERSION</span>PACK
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#problema" className="text-sm font-medium hover:text-[#A6FF2E] transition-colors">Problema</a>
            <a href="#solucion" className="text-sm font-medium hover:text-[#A6FF2E] transition-colors">Solución</a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-[#A6FF2E] transition-colors">Proceso</a>
            <a href="#planes" className="bg-[#0026FF] hover:bg-[#0026FF]/80 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,38,255,0.4)]">
              Ver Planes
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
            Contenido que convierte
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8">
            Contenido visual que<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0026FF] via-[#5D7CFF] to-white drop-shadow-[0_0_15px_rgba(0,38,255,0.5)]">
              convierte atención
            </span>
            <br />en acciones reales.
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Historias y carruseles listos para publicar, diseñados para provocar <span className="text-white font-medium">mensajes, comentarios y clics</span> — sin que tengas que pensar qué subir.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#planes" className="group relative px-8 py-4 bg-[#FF00A8] rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,168,0.5)]">
              <span className="relative z-10 flex items-center gap-2">
                Quiero probar el Pack Inicio <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a href="#monthly" className="px-8 py-4 rounded-full border-2 border-white/20 hover:border-white hover:bg-white/5 font-bold text-lg transition-all">
              Ver el plan mensual
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
              ¿Te suena <span className="text-[#A6FF2E]">familiar?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Publicas cuando puedes, no cuando deberías",
                "Tu contenido no se ve profesional",
                "Pasas demasiado tiempo en Canva",
                "Tienes un buen producto, pero tus redes no generan acción"
              ].map((item, i) => (
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
                El problema no es que no publiques.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-white">
                El problema es que <span className="text-[#0026FF] underline decoration-[#0026FF] underline-offset-8">publicas sin intención clara</span>.
              </p>
              <div className="mt-8 inline-block px-6 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold">
                Resultado: visibilidad sin resultados.
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
              No hacemos <span className="text-gray-400 line-through decoration-[#FF00A8] decoration-4">"diseños bonitos"</span>.
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-[#0026FF]">
              Hacemos contenido con intención comercial.
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: MessageCircle, text: "Escribirte por DM" },
              { icon: Check, text: "Mostrar interés real" },
              { icon: ArrowRight, text: "Visitar tu perfil" },
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:bg-[#0026FF] hover:text-white transition-all duration-300">
                <item.icon className="w-10 h-10 mb-6 text-[#0026FF] group-hover:text-white transition-colors" />
                <p className="text-2xl font-bold">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xl font-medium uppercase tracking-widest text-gray-500">
            Contenido claro, constante y enfocado en acción.
          </p>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-20 bg-black text-white relative border-t border-white/10 overflow-hidden">
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
              Posts Cuadrados (1:1)
            </h3>
            <div className="hidden md:flex gap-2">
              {/* Visual indicators for scrolling */}
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-50"><ArrowRight className="rotate-180 w-5 h-5" /></div>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"><ArrowRight className="w-5 h-5" /></div>
            </div>
          </div>

          {/* Square Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4].map((i) => (
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
              Historias Verticales (9:16)
            </h3>
          </div>

          {/* Vertical Carousel */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="min-w-[200px] md:min-w-[280px] aspect-[9/16] bg-[#111] rounded-[2rem] border border-white/10 relative group overflow-hidden snap-center">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-xl">
                  STORY {i}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF00A8]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <p className="font-bold translate-y-4 group-hover:translate-y-0 transition-transform">Retención de usuario</p>
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
            Proceso <span className="text-[#A6FF2E]">simple</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Brief rápido", desc: "Nos dices qué vendes y qué acción quieres provocar. (5-10 min)" },
              { title: "Producción IA + Humano", desc: "Copy, estructura y visual alineados a tu negocio." },
              { title: "Entrega 72h", desc: "Contenido listo para publicar. Sin esperas eternas." },
              { title: "1 ronda ajustes", desc: "Ajustes sobre claridad y mensaje." }
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
              Todo es 100% asíncrono. Sin llamadas.
            </span>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 border-y border-white/10 bg-[#050505]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Qué entregamos
            </h2>
            <div className="space-y-6">
              {[
                "Historias (IG, FB, WhatsApp)",
                "Carruseles (IG, FB)",
                "Promociones y ofertas",
                "Beneficios claros",
                "Llamados a la acción",
                "Testimonios simples"
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

      {/* PLANS */}
      <section id="planes" className="py-32 bg-black">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Planes de <span className="text-[#FF00A8]">Conversión</span></h2>

          <div className="inline-block px-6 py-2 rounded-full border border-[#FF00A8] bg-[#FF00A8]/10 text-[#FF00A8] font-bold tracking-widest uppercase mb-16 animate-pulse">
            🚀 Lanzamiento por tiempo limitado
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* PLAN DE ENTRADA */}
            <div className="p-8 rounded-[2.5rem] bg-[#111] border border-white/10 hover:border-white/30 transition-all text-left">
              <div className="mb-6">
                <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">Pack Inicio</span>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="text-4xl font-bold text-white">$50 <span className="text-lg font-normal text-gray-500">USD</span></h3>
                  <span className="text-xl text-gray-600 line-through decoration-red-500 decoration-2">$89</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Pago único</p>
              </div>

              <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                <li className="flex items-center gap-3"><Check className="text-white w-5 h-5" /> 6 Historias</li>
                <li className="flex items-center gap-3"><Check className="text-white w-5 h-5" /> 2 Carruseles</li>
                <li className="flex items-center gap-3"><Check className="text-white w-5 h-5" /> Entrega única</li>
                <li className="flex items-center gap-3 text-[#FF00A8] font-bold"><Check className="text-[#FF00A8] w-5 h-5" /> BONUS: 10 fotos producto</li>
                <li className="flex items-center gap-3 text-gray-500"><X className="w-5 h-5" /> Sin revisiones extras</li>
              </ul>

              <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full h-14 font-bold text-lg">
                Probar Pack Inicio
              </Button>
            </div>

            {/* PLAN PRINCIPAL */}
            <div className="relative p-10 rounded-[2.5rem] bg-[#000] border-2 border-[#0026FF] shadow-[0_0_50px_rgba(0,38,255,0.15)] transform md:scale-105 z-10 text-left">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0026FF] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-white border-4 border-black">
                Recomendado
              </div>

              <div className="mb-6">
                <span className="text-sm font-bold tracking-widest text-[#0026FF] uppercase">Plan Mensual</span>
                <div className="flex items-baseline gap-3 mt-2">
                  <h3 className="text-5xl font-bold text-white">$100 <span className="text-lg font-normal text-gray-500">USD</span></h3>
                  <span className="text-2xl text-gray-600 line-through decoration-red-500 decoration-2">$149</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">facturado mensualmente</p>
              </div>

              <ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
                <li className="flex items-center gap-3"><Check className="text-[#0026FF] w-5 h-5" /> 12 Historias</li>
                <li className="flex items-center gap-3"><Check className="text-[#0026FF] w-5 h-5" /> 4 Carruseles</li>
                <li className="flex items-center gap-3"><Check className="text-[#0026FF] w-5 h-5" /> Adaptación IG / FB / WA</li>
                <li className="flex items-center gap-3"><Check className="text-[#0026FF] w-5 h-5" /> Entrega semanal</li>
                <li className="flex items-center gap-3 text-[#FF00A8] font-bold"><Check className="text-[#FF00A8] w-5 h-5" /> BONUS: 10 fotos producto</li>
                <li className="flex items-center gap-3"><Check className="text-[#0026FF] w-5 h-5" /> 1 ronda de ajustes</li>
              </ul>

              <Button className="w-full bg-[#0026FF] hover:bg-[#0026FF]/90 text-white rounded-full h-14 font-bold text-lg shadow-[0_0_20px_rgba(0,38,255,0.4)] hover:shadow-[0_0_30px_rgba(0,38,255,0.6)] transition-all">
                Quiero este plan
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* FILTER SECTION (WHAT WE DON'T DO) */}
      <section className="py-20 bg-[#050505]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-12 text-gray-300">Qué NO hacemos (Para evitar malentendidos)</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["No hacemos branding completo", "No gestionamos redes", "No prometemos seguidores", "No trabajamos sin límites"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-gray-500">
                <X className="w-4 h-4 text-red-500" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER / FINAL CTA */}
      <section className="py-32 bg-black relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0026FF]/20 to-transparent opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Si vendes por redes sociales,<br />
            <span className="text-[#FF00A8]">necesitas esto.</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
            <Button className="h-16 px-10 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-transform">
              Solicita Pack Inicio
            </Button>
            <Button className="h-16 px-10 rounded-full bg-transparent border-2 border-[#0026FF] text-[#0026FF] hover:bg-[#0026FF] hover:text-white font-bold text-xl transition-all">
              Hablar con alguien
            </Button>
          </div>

          <p className="mt-16 text-gray-600 text-sm">
            © 2024 Social Conversion Pack. Inspired by Bolteam.
          </p>
        </div>
      </section>

    </div>
  );
}
