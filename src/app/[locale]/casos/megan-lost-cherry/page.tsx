import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { PublicHeader } from "@/components/public-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { GalleryLightbox, type GalleryPiece } from "./gallery-lightbox";

export const metadata: Metadata = {
    title: {
        absolute: "Forbidden, Chosen · Campaña de perfume 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña de perfume completa hecha 100% con IA, con una modelo virtual que no cambia de cara. El método paso a paso.",
    openGraph: {
        title: "Forbidden, Chosen · Campaña de perfume 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña de perfume completa hecha 100% con IA, con una modelo virtual que no cambia de cara. El método paso a paso.",
        images: [
            {
                url: "/casos/megan-lost-cherry/piezas/01-portada-la-cereza.webp",
                width: 896,
                height: 1200,
                alt: "Forbidden, Chosen · Megan × Lost Cherry — Portada · La cereza",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/megan-lost-cherry/piezas/01-portada-la-cereza.webp",
        caption: "Portada · La cereza",
        alt: "Portada de la campaña Forbidden, Chosen: Megan sosteniendo una cereza negra junto al frasco de Lost Cherry sobre mármol negro",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/02-pecas.png",
        caption: "Pecas",
        alt: "Primer plano del rostro de Megan mostrando la textura de piel y pecas densas en el puente de la nariz",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/03-bodegon-piedra.png",
        caption: "Bodegón · Piedra",
        alt: "Bodegón del perfume Lost Cherry sobre piedra oscura con cerezas negras y luz dramática",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/04-elegir.png",
        caption: "Elegir",
        alt: "Megan en escena editorial eligiendo una cereza junto al perfume Lost Cherry",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/05-bodegon-terciopelo.jpg",
        caption: "Bodegón · Terciopelo",
        alt: "Bodegón del frasco Lost Cherry sobre terciopelo rojo cereza y sombras profundas",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/06-la-mirada.png",
        caption: "La mirada",
        alt: "Megan con mirada directa a cámara junto al frasco de Lost Cherry con etiqueta legible",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/07-contraluz.png",
        caption: "Contraluz",
        alt: "Retrato a contraluz de Megan en el universo de laca negra y rojo cereza",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/08-bodegon-labial.jpg",
        caption: "Bodegón · Labial",
        alt: "Bodegón editorial con el frasco de Lost Cherry y acentos en rojo cereza sobre superficie oscura",
    },
    {
        src: "/casos/megan-lost-cherry/piezas/09-cierre-ella-ya-se-fue.webp",
        caption: "Cierre · Ella ya se fue",
        alt: "Escena de cierre de la campaña con el frasco de Lost Cherry y rastro sobre la mesa después de que Megan se fue",
    },
];

const TECH_SPECS = [
    {
        step: "Concepto",
        action: "Idea en una frase, paleta y reglas",
        tool: "Ninguna, criterio",
    },
    {
        step: "La modelo",
        action: "Ficha de identidad y hoja de cara",
        tool: "Nano Banana Pro",
    },
    {
        step: "Moodboard",
        action: "Ambiente, luz y texturas sin producto",
        tool: "Midjourney",
    },
    {
        step: "Espacios",
        action: "Sala lacada y mesa de mármol, vacías",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Cara, espacio, luz y frasco real en una imagen",
        tool: "Nano Banana Pro",
    },
    {
        step: "Correcciones",
        action: "Color en el prompt y ediciones con lenguaje normal",
        tool: "Nano Banana Pro",
    },
];

function MethodBlock({
    title = "Cómo se hace",
    children,
}: {
    title?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="border-l-4 border-[#B3122E] bg-[#140A0D]/90 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#B3122E]/25 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#E03E5A] font-semibold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#F5F0E6]/90 leading-relaxed font-light">
                {children}
            </p>
        </div>
    );
}

export default function MeganLostCherryCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#070506] text-[#F5F0E6] flex flex-col font-sans selection:bg-[#B3122E]/40 overflow-x-hidden">
            <PublicHeader />

            <main className="flex-1">
                {/* 1. Hero Section (Full-Width Editorial Hero) */}
                <section className="relative w-full bg-[#050705] border-b border-[#F5F0E6]/10 overflow-hidden">
                    {/* Full-bleed background image (object-cover) across the entire Hero */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/megan-lost-cherry/piezas/05-bodegon-terciopelo.jpg"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center scale-105 opacity-60"
                        />
                        {/* Blur ligero en el lado izquierdo donde va el texto para que se entienda con claridad */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-[#060405]/70 via-[#090506]/45 to-transparent" />
                        {/* Vignette superior e inferior */}
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#050705] via-[#050705]/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050705] via-[#050705]/70 to-transparent" />
                    </div>

                    {/* Ambient Cherry Glow */}
                    <div className="pointer-events-none absolute top-1/4 left-1/4 w-[650px] h-[450px] bg-[#B3122E]/20 rounded-full blur-[160px] z-[1]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                            {/* Columna izquierda en desktop / Espacio oscuro superior en móvil */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B3122E]/30 border border-[#B3122E]/50 text-[#F5F0E6] text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(179,18,46,0.35)]">
                                    <span>Campaña 001 · Caso de estudio</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F5F0E6] leading-[1.02] drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">
                                    Forbidden, Chosen
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#F25C78] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                                    Megan × Lost Cherry
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F5F0E6]/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                                    Una campaña de perfume completa, hecha 100% con inteligencia artificial. Nueve piezas, una modelo que no existe, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: proceso/hero-portada-abierta.png */}
                            <div className="lg:col-span-5 relative z-10 -mt-10 sm:-mt-16 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-[#F5F0E6]/15 bg-[#050705]">
                                    <Image
                                        src="/casos/megan-lost-cherry/proceso/hero-portada-abierta.png"
                                        alt="Megan sentada frente a una mesa de mármol negro con el frasco de Lost Cherry y cerezas negras"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                        className="object-contain object-bottom"
                                    />
                                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050705] to-transparent" />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#050705]/80 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Ficha en una fila a todo el ancho (max-w-7xl) */}
                        <div className="relative z-20 mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                            {[
                                "Producto: Lost Cherry EDP",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramientas: Nano Banana Pro y Midjourney",
                                "Naturaleza: proyecto conceptual",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-[#120A0D]/80 border border-[#F5F0E6]/15 backdrop-blur-xl text-xs sm:text-sm text-[#F5F0E6]/95 font-mono text-center flex items-center justify-center shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#F5F0E6]/10 bg-[#0A0708]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#B3122E] rounded-full" />
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-lg sm:text-xl lg:text-2xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Esta campaña se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques rojos va el método: qué herramienta se usó y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#B3122E]/8 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 lg:space-y-16 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                El concepto
                            </h2>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E6] leading-[1.08] border-l-4 border-[#B3122E] pl-6 sm:pl-8 py-2 max-w-5xl">
                                Lo prohibido no se esconde: se elige a plena luz.
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            <div className="lg:col-span-7 space-y-8">
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Lost Cherry se presenta como un viaje a lo que antes estaba prohibido: cereza negra, almendra amarga, rosa. Megan es pelirroja, con pecas y una mirada directa. El rojo ya estaba en ella, así que no hubo que forzarlo. Un solo universo: una modelo, un frasco, dos espacios. Paleta cerrada: negro laca, rojo cereza, cobre y piel.
                                </p>

                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase filtra todo: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>

                                <MethodBlock title="La regla del lujo">
                                    El lujo se percibe, no se muestra. En toda la serie nadie le presenta el frasco a la cámara: lo sostiene, lo reclama o lo deja. Probé una versión con Megan mostrando el producto y la saqué, porque parecía anuncio de catálogo.
                                </MethodBlock>
                            </div>

                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative aspect-[896/1200] w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0A0808] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/megan-lost-cherry/proceso/integracion-frasco-presentado-descartado.png"
                                        alt="Prueba descartada de Megan presentando el frasco de perfume directamente hacia la cámara"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 480px"
                                        className="object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6]/75 font-mono">
                                    Descartada: mostrar el frasco a cámara rompe el tono de lujo.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La modelo */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0A0708]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Paso 1 · La modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Megan no existe. Es un personaje que creé hace tiempo y que rescaté con el método REALISMO Blueprint: una foto oficial, una ficha de identidad escrita y una hoja de cara que se usa como única referencia en cada imagen. Es lo que mantiene la misma cara en las nueve piezas.
                                </p>
                                <MethodBlock>
                                    La ficha describe su cara con datos concretos (edad aparente, forma de ojos, pecas, color y raya del pelo) y se pega idéntica en cada prompt. El rasgo único de Megan son las pecas más densas en el puente de la nariz: si no aparecen, la imagen se repite.
                                </MethodBlock>
                                <div className="p-5 sm:p-6 rounded-2xl bg-[#120C0E] border border-[#F5F0E6]/15 text-sm sm:text-base text-[#F5F0E6]/90 shadow-lg">
                                    La guía gratuita explica cómo crear la ficha y la hoja de cara. Comenta MEGAN en el reel de la campaña y te llega por mensaje.
                                </div>
                            </div>

                            <figure className="lg:col-span-7 flex flex-col">
                                <div className="relative aspect-[1376/768] w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0A0808] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/megan-lost-cherry/proceso/hoja-de-cara-megan.jpg"
                                        alt="Hoja de cara de Megan con múltiples ángulos faciales consistentes para referencia de identidad"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 760px"
                                        className="object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6]/75 font-mono">
                                    Hoja de cara: la única referencia de identidad de toda la campaña.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · El moodboard */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Paso 2 · El moodboard
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Antes de meter producto o modelo, busqué el ambiente: terciopelo, laca negra, luz dura y sombras. De aquí no sale ninguna pieza final; sale el mundo.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    El moodboard se hace en Midjourney y nunca lleva el producto real. Si el prompt menciona "perfume", la IA inventa un frasco; por eso se pide explícitamente que no aparezca ninguno.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    src: "/casos/megan-lost-cherry/proceso/moodboard-collage.jpg",
                                    alt: "Moodboard de texturas, sombras y atmósfera en rojo cereza y negro laca",
                                },
                                {
                                    src: "/casos/megan-lost-cherry/proceso/moodboard-sillon-humo.jpg",
                                    alt: "Moodboard de sillón de terciopelo con humo y luz dura",
                                },
                                {
                                    src: "/casos/megan-lost-cherry/proceso/moodboard-texturas.jpg",
                                    alt: "Moodboard de materiales: terciopelo oscuro, reflejos cálidos y cerezas",
                                },
                            ].map((item) => (
                                <div
                                    key={item.src}
                                    className="relative aspect-[896/1200] w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0A0808] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 33vw"
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0A0708]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Paso 3 · Los espacios
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Del moodboard salieron dos espacios: una sala de laca negra con un sillón de terciopelo, y una mesa de mármol negro con cerezas. Se generan vacíos para que la luz sea la misma en cada pieza.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Los espacios se desarrollan en Nano Banana Pro, limpios y en formato final. Trabajar el espacio sin personaje te deja un escenario que puedes reutilizar.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                            <div className="relative aspect-[896/1200] w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0A0808] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/megan-lost-cherry/proceso/espacio-a-sala-lacada.jpg"
                                    alt="Espacio vacío A: sala de laca negra con sillón de terciopelo rojo e iluminación dramática"
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative aspect-[896/1200] w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0A0808] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/megan-lost-cherry/proceso/espacio-b-marmol-cerezas.jpg"
                                    alt="Espacio vacío B: mesa de mármol negro con cerezas oscuras y luz dura de estudio"
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                Paso 4 · La integración
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                Aquí se junta todo: la cara de Megan, el espacio, la luz y el frasco real. Fue lo más difícil, y de ahí salieron las dos reglas más útiles de toda la campaña.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                            <figure className="flex flex-col">
                                <div className="relative aspect-[896/1200] w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0A0808] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/megan-lost-cherry/proceso/integracion-primer-intento.jpg"
                                        alt="Primer intento de integración con pose de catálogo y texto de la etiqueta deformado"
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6]/75 font-mono">
                                    Primer intento: pose de catálogo y etiqueta deformada.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative aspect-[896/1200] w-full rounded-2xl overflow-hidden border-2 border-[#B3122E]/60 bg-[#0A0808] shadow-[0_25px_65px_rgba(179,18,46,0.2)]">
                                    <Image
                                        src="/casos/megan-lost-cherry/piezas/06-la-mirada.png"
                                        alt="Versión final de integración: Megan con mirada tensa y frasco de Lost Cherry con etiqueta legible"
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6] font-mono">
                                    Versión final: más tensión y etiqueta legible.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
                            <MethodBlock title="Regla 1 · La etiqueta">
                                La etiqueta sale legible cuando el frasco es grande en la imagen, aunque esté inclinado. Cuando es chico o compite con una cara, la IA inventa letras. Si el frasco tiene que ser chico, que lo tape la mano o la sombra.
                            </MethodBlock>
                            <MethodBlock title="Regla 2 · El tamaño">
                                El tamaño del producto se controla con el encuadre, no pidiendo que sea grande. Si pides el frasco grande en una foto abierta, la IA lo infla hasta parecer un mueble. Se pone de su tamaño real, con una referencia al lado (un guante, unas cerezas), y se acerca la cámara.
                            </MethodBlock>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0A0708]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    En una producción normal, la IA entrega material en bruto y el acabado se hace en Photoshop. Aquí no se abrió ningún programa. El color se escribe dentro del prompt y las correcciones se piden con lenguaje normal sobre la misma imagen.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Un bloque de color fijo se pega al final de cada prompt, igual que la ficha fija la cara. Las correcciones se hacen en una sola edición por pieza, como máximo dos, porque editar sobre lo editado desgasta la cara.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-32 border-b border-[#F5F0E6]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#B3122E]/10 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E6]">
                                Nueve piezas
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
                                {[
                                    "9 piezas finales",
                                    "1 modelo virtual",
                                    "0 cámaras",
                                    "0 programas de edición",
                                ].map((stat) => (
                                    <div
                                        key={stat}
                                        className="px-4 py-3 rounded-xl bg-[#120C0E] border border-[#B3122E]/35 text-xs sm:text-sm font-mono text-[#F5F0E6] text-center shadow-lg"
                                    >
                                        {stat}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <GalleryLightbox pieces={FINAL_PIECES} />
                    </div>
                </section>

                {/* 10. Ficha técnica */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0A0708]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Ficha técnica
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#B3122E] rounded-full" />
                            </div>

                            <div className="lg:col-span-8 rounded-2xl border border-[#F5F0E6]/15 bg-[#100A0C] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-[#F5F0E6]/15 hover:bg-transparent">
                                            <TableHead className="text-[#E03E5A] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Paso
                                            </TableHead>
                                            <TableHead className="text-[#E03E5A] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Qué se hace
                                            </TableHead>
                                            <TableHead className="text-[#E03E5A] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Herramienta
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {TECH_SPECS.map((row) => (
                                            <TableRow
                                                key={row.step}
                                                className="border-[#F5F0E6]/10 hover:bg-[#F5F0E6]/5"
                                            >
                                                <TableCell className="font-semibold text-[#F5F0E6] text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.step}
                                                </TableCell>
                                                <TableCell className="text-[#F5F0E6]/85 text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.action}
                                                </TableCell>
                                                <TableCell className="text-[#F5F0E6]/80 font-mono text-xs sm:text-sm py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.tool}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 11. Llamado final */}
                <section className="py-20 sm:py-32 border-b border-[#F5F0E6]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#B3122E]/12 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F0E6]">
                                Ahora hazlo con tu personaje
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                Todo lo que ves aquí sale de un método: personajes que no cambian de cara, en cualquier escena, con cualquier producto. Sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-[#100A0C]/90 border-[#F5F0E6]/15 text-[#F5F0E6] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F0E6]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F0E6] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#F5F0E6]/80 leading-relaxed font-light">
                                        La ficha de identidad y la hoja de cara para tu personaje.
                                    </p>
                                </div>
                                <div className="w-full py-3.5 px-4 rounded-xl bg-[#F5F0E6]/5 border border-[#F5F0E6]/20 text-center text-xs sm:text-sm font-mono text-[#F5F0E6]/90">
                                    Comenta MEGAN en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-[#100A0C]/90 border-[#F5F0E6]/20 text-[#F5F0E6] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F0E6]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F0E6] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#F5F0E6]/80 leading-relaxed font-light">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#F5F0E6] text-[#080607] hover:bg-[#F5F0E6]/90 font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#2A0911] via-[#16090D] to-[#0D0709] border-2 border-[#B3122E] text-[#F5F0E6] rounded-2xl flex flex-col justify-between gap-8 shadow-[0_0_55px_rgba(179,18,46,0.3)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F0E6]">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F0E6] font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-[#F5F0E6]/90 leading-relaxed font-light">
                                        Guía + masterclass grabada + skills + prompts + el caso completo de Megan.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#B3122E] hover:bg-[#960F26] text-[#F5F0E6] font-bold text-base shadow-lg shadow-[#B3122E]/40"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#E03E5A] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#E03E5A]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#E03E5A] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#E03E5A]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#E03E5A] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#E03E5A]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#E03E5A] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#E03E5A]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul Reposado</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#B3122E]/20 border border-[#E03E5A]/50 text-sm sm:text-base font-mono text-[#F5F0E6] hover:bg-[#B3122E]/30 transition-colors shadow-[0_0_20px_rgba(179,18,46,0.25)]"
                            >
                                <span className="px-2.5 py-0.5 rounded-full bg-[#B3122E] text-[#F5F0E6] text-xs font-bold uppercase tracking-wider">
                                    La segunda campaña de Megan
                                </span>
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4 text-[#E03E5A]" />
                            </Link>
                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#E03E5A] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#E03E5A]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#050405]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#F5F0E6]/50 leading-relaxed text-center">
                            Proyecto conceptual y no comercial. IA Builders Lab no tiene afiliación, patrocinio ni relación comercial con Tom Ford. Las marcas y productos citados pertenecen a sus dueños y se mencionan solo con fines ilustrativos. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
