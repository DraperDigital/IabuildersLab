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
        absolute: "Andiamo · Campaña de moda de lujo 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa de la Andiamo de Bottega Veneta hecha 100% con IA, con la modelo virtual Larisa. El método paso a paso y las reglas que salieron de nueve campañas.",
    openGraph: {
        title: "Andiamo · Campaña de moda de lujo 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa de la Andiamo de Bottega Veneta hecha 100% con IA, con la modelo virtual Larisa. El método paso a paso y las reglas que salieron de nueve campañas.",
        images: [
            {
                url: "/casos/larisa-bottega/piezas/01-portada-vamonos.png",
                width: 896,
                height: 1200,
                alt: "Andiamo · Larisa × Bottega Veneta — Portada · Vámonos",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/larisa-bottega/piezas/01-portada-vamonos.png",
        caption: "Portada · Vámonos",
        alt: "Portada de la campaña Andiamo: Larisa caminando por el andén de una estación de pueblo italiano por la mañana con conjunto de lino crema y la bolsa Andiamo de gamuza verde olivo al hombro",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/02-packshot-el-tejido.png",
        caption: "Packshot · El tejido",
        alt: "Packshot de la bolsa Andiamo de Bottega Veneta en gamuza verde olivo mostrando el tejido intrecciato y el broche dorado en forma de ocho",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/03-a-mano.png",
        caption: "A mano",
        alt: "Detalle cercano de la mano de Larisa sosteniendo el asa superior de la bolsa Andiamo de gamuza verde olivo",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/04-la-ventana.png",
        caption: "La ventana",
        alt: "Larisa sentada junto a la ventana del tren con la bolsa Andiamo de gamuza verde olivo y su broche dorado en forma de ocho sobre el regazo",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/05-bodegon-lo-que-llevas.png",
        caption: "Bodegón · Lo que llevas",
        alt: "Bodegón de viaje con la bolsa Andiamo de Bottega Veneta en gamuza verde olivo bajo la luz cálida de la tarde",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/06-llegada.png",
        caption: "Llegada",
        alt: "Larisa llegando a la costa italiana con su conjunto de lino claro y la bolsa Andiamo verde olivo al hombro",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/07-la-terraza.png",
        caption: "La terraza",
        alt: "Larisa en una terraza encalada frente al mar por la tarde acompañada de la bolsa Andiamo en gamuza verde olivo",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/08-el-nudo.png",
        caption: "El nudo",
        alt: "Primer plano del broche metálico dorado en forma de ocho sobre el cordón trenzado y el tejido de gamuza verde olivo de la bolsa Andiamo",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-bottega/piezas/09-cierre-ya-se-fue.png",
        caption: "Cierre · Ya se fue",
        alt: "Cierre de la campaña: la bolsa Andiamo de Bottega Veneta sola sobre una silla en la terraza encalada frente al mar al atardecer",
        width: 896,
        height: 1200,
    },
];

const TECH_SPECS = [
    {
        step: "Concepto",
        action: "Idea en una frase, dos espacios y reglas",
        tool: "Ninguna, criterio",
    },
    {
        step: "La modelo",
        action: "La misma ficha y las mismas hojas de su campaña anterior",
        tool: "Nano Banana Pro",
    },
    {
        step: "Referencias",
        action: "Once fotos, cuatro de una sola versión",
        tool: "Ninguna, criterio",
    },
    {
        step: "Espacios",
        action: "Estación y terraza junto al mar, vacíos y en 3:4",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelo, espacio, luz y bolsa real en una imagen",
        tool: "Nano Banana Pro",
    },
    {
        step: "Correcciones",
        action: "Color en el prompt y regeneraciones",
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
        <div className="border-l-4 border-[#5E6B3A] bg-white/85 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#5E6B3A]/25 shadow-[0_15px_35px_rgba(94,107,58,0.08)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#1C1D18]/90 leading-relaxed font-normal">
                {children}
            </p>
        </div>
    );
}

export default function LarisaBottegaCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#F4F0E7] text-[#1C1D18] flex flex-col font-sans selection:bg-[#5E6B3A]/20 overflow-x-hidden">
            {/* Header sobre barra oscura sutil para mantener legibilidad de navegación global */}
            <div className="bg-[#1C1D18] text-white">
                <PublicHeader />
            </div>

            <main className="flex-1">
                {/* 1. Hero Section: El texto va sobre el cielo claro de arriba a la izquierda, sin tapar a Larisa ni la bolsa */}
                <section className="relative w-full bg-[#ECE6D8] border-b border-[#1C1D18]/15 overflow-hidden text-[#1C1D18]">
                    {/* Full-bleed background image de la estación por la mañana con cielo claro arriba a la izquierda */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/larisa-bottega/proceso/espacio-e1-estacion.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-left-top scale-105 opacity-75"
                        />
                        {/* Velo luminoso con ligero blur sobre el cielo claro a la izquierda donde va el texto */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-[#F4F0E7]/94 via-[#F4F0E7]/82 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F4F0E7]/80 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F4F0E7] via-[#F4F0E7]/65 to-transparent" />
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                            {/* Texto sobre el cielo claro de arriba a la izquierda sin tapar a Larisa ni la bolsa */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6 lg:pt-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5E6B3A]/15 border border-[#5E6B3A]/40 text-[#48532B] text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-sm">
                                    <span>Campaña 009 · Caso de estudio</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#1C1D18] leading-[1.02]">
                                    Andiamo
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#5E6B3A]">
                                    Larisa × Bottega Veneta
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#1C1D18]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                                    Una campaña de moda de lujo completa, hecha 100% con inteligencia artificial. Nueve piezas, una modelo que no existe, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: piezas/01-portada-vamonos.png completa en 3:4 */}
                            <div className="lg:col-span-5 relative z-10 mt-2 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(28,29,24,0.22)] border-2 border-white/85 bg-[#ECE6D8]">
                                    <Image
                                        src="/casos/larisa-bottega/piezas/01-portada-vamonos.png"
                                        alt="Larisa caminando en el andén de una estación italiana por la mañana con conjunto de lino crema y la bolsa Andiamo de Bottega Veneta en gamuza verde olivo"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                        className="object-contain object-bottom"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Ficha en una fila a todo el ancho (max-w-7xl) */}
                        <div className="relative z-20 mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                            {[
                                "Producto: Andiamo de Bottega Veneta",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: proyecto conceptual",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-white/95 border border-[#5E6B3A]/30 backdrop-blur-xl text-xs sm:text-sm text-[#1C1D18] font-mono font-medium text-center flex items-center justify-center shadow-md"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#1C1D18]/10 bg-[#EAE4D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1D18]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#5E6B3A] rounded-full" />
                            </div>
                            <div className="lg:col-span-8 space-y-8">
                                <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques verdes va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                                <MethodBlock>
                                    Los bloques con borde izquierdo verde olivo explican el método y la regla de cada etapa del proceso.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 bg-[#5E6B3A]/10 rounded-full blur-[130px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="max-w-3xl mb-10">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block mb-3">
                                El concepto
                            </span>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1D18] leading-[1.08]">
                                &ldquo;Andiamo. Vámonos.&rdquo;
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5">
                                <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal">
                                    &ldquo;Andiamo&rdquo; quiere decir &ldquo;vámonos&rdquo; en italiano. La campaña es un viaje de un día: el tren de la mañana en una estación de pueblo, la llegada al mar y la tarde en una terraza encalada. La bolsa la acompaña todo el día. No lleva logo: el tejido a mano es la marca.
                                </p>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase decide qué se queda: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>
                                <MethodBlock title="La regla del lujo">
                                    El lujo se percibe, no se muestra. Larisa nunca le presenta la bolsa a la cámara: la lleva al hombro, la tiene en el regazo, la deja en el muro. La última pieza no tiene a nadie: la bolsa en una silla al atardecer. Ella ya se fue a ver el mar.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La modelo */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10 bg-[#EAE4D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block">
                                    Paso 1
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1D18]">
                                    Paso 1 · La modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal pt-2">
                                    Larisa no existe. Es la misma modelo de la campaña de Technogym, con la misma ficha y las mismas hojas. Del gimnasio a la moda: si la identidad aguanta un cambio de registro tan grande, el método funciona.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Para moda, la ropa se elige para que el producto mande: lino opaco en crema y arena, cortes amplios, nada ajustado. El verde de la bolsa es lo único con color en cada foto.
                                </MethodBlock>
                            </div>
                        </div>

                        {/* Imagen horizontal: proceso/larisa-hoja-cara.jpg */}
                        <figure className="flex flex-col max-w-4xl mx-auto">
                            <div className="relative w-full overflow-hidden rounded-2xl border border-[#1C1D18]/15 bg-white shadow-[0_18px_45px_rgba(28,29,24,0.1)]">
                                <Image
                                    src="/casos/larisa-bottega/proceso/larisa-hoja-cara.jpg"
                                    alt="Hoja de cara de la modelo virtual Larisa usada como referencia de identidad en sus campañas"
                                    width={1376}
                                    height={768}
                                    sizes="(max-width: 1024px) 100vw, 896px"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <figcaption className="mt-3 text-xs sm:text-sm text-[#1C1D18]/80 font-mono">
                                Hoja de cara: la misma referencia de su campaña anterior.
                            </figcaption>
                        </figure>

                        {/* Llamado pequeño al lead magnet */}
                        <div className="rounded-2xl border border-[#5E6B3A]/35 bg-white/90 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                            <p className="text-base sm:text-lg text-[#1C1D18] font-medium leading-relaxed">
                                La guía gratuita explica cómo crear la ficha y las hojas de tu personaje. Comenta{" "}
                                <span className="font-mono font-bold text-[#5E6B3A] px-2 py-0.5 rounded bg-[#5E6B3A]/15 border border-[#5E6B3A]/35">
                                    ANDIAMO
                                </span>{" "}
                                en el reel de la campaña y te llega por mensaje.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Las referencias del producto */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7 space-y-8">
                                <div className="space-y-4">
                                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block">
                                        Paso 2
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1D18]">
                                        Paso 2 · Las referencias del producto
                                    </h2>
                                    <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal pt-2">
                                        Juntamos once fotos de la Andiamo y nos quedamos con cuatro: de frente, de tres cuartos, el tejido con el broche y la bolsa abierta. Todas de una sola versión: gamuza verde olivo con broche dorado.
                                    </p>
                                </div>

                                <MethodBlock>
                                    Entre las fotos había tres versiones distintas de la misma bolsa: gamuza, piel lisa y piel con broche plateado. A simple vista parecen iguales, pero la IA mezcla todo lo que le enseñas. Se eligió una sola. Y la ficha se corrigió viendo las fotos de cerca: el nudo no va en una solapa, es un broche en forma de ocho sobre un cordón trenzado entre dos arillos.
                                </MethodBlock>
                            </div>

                            <div className="lg:col-span-5">
                                <figure className="flex flex-col max-w-md mx-auto">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#1C1D18]/15 bg-white shadow-[0_18px_45px_rgba(28,29,24,0.1)]">
                                        <Image
                                            src="/casos/larisa-bottega/proceso/referencia-descartada-otra-version-nudo-plateado.jpg"
                                            alt="Referencia descartada de otra versión de la bolsa Andiamo en piel lisa con broche plateado"
                                            width={1800}
                                            height={2475}
                                            sizes="(max-width: 1024px) 100vw, 420px"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#1C1D18]/80 font-mono">
                                        Descartada: la misma bolsa en piel lisa con broche plateado.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10 bg-[#EAE4D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block">
                                Paso 3
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1D18]">
                                Paso 3 · Los espacios
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal pt-2">
                                Dos espacios, generados vacíos y en 3:4: el andén de una estación de pueblo italiano por la mañana y una terraza encalada sobre el mar por la tarde.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                {
                                    src: "/casos/larisa-bottega/proceso/espacio-e1-estacion.png",
                                    alt: "Espacio vacío E1: andén de una estación de pueblo italiano por la mañana",
                                },
                                {
                                    src: "/casos/larisa-bottega/proceso/espacio-e2-terraza.png",
                                    alt: "Espacio vacío E2: terraza encalada sobre el mar por la tarde",
                                },
                            ].map((img) => (
                                <div
                                    key={img.src}
                                    className="relative w-full overflow-hidden rounded-2xl border border-[#1C1D18]/15 bg-white shadow-[0_18px_45px_rgba(28,29,24,0.1)]"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
                            <div className="lg:col-span-7">
                                <MethodBlock title="Lo que nombras, aparece">
                                    El bloque de color decía &ldquo;el verde olivo de la bolsa&rdquo;. En los cuatro primeros espacios apareció una bolsa verde que nadie pidió. Se quitó la palabra del prompt de los espacios y se volvieron a generar vacíos.
                                </MethodBlock>
                            </div>
                            <div className="lg:col-span-5">
                                <figure className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#1C1D18]/15 bg-white shadow-[0_18px_45px_rgba(28,29,24,0.1)]">
                                        <Image
                                            src="/casos/larisa-bottega/proceso/espacio-v1-bolsa-colada.png"
                                            alt="Primera versión descartada del espacio donde apareció una bolsa verde en la banca porque el prompt la mencionaba"
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#1C1D18]/80 font-mono">
                                        Primera versión: la bolsa se coló por una palabra.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block">
                                Paso 4
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1D18]">
                                Paso 4 · La integración
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal pt-2">
                                Aquí se juntan la modelo, el espacio, la luz y la bolsa real. La bolsa salió fiel desde el primer packshot. Lo que más se cuidó fue el broche.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/larisa-bottega/proceso/ventana-descartada-nudo-de-mono.png",
                                    caption: "Descartada: el broche se volvió un moño.",
                                    alt: "Versión descartada de la escena en la ventana del tren donde el broche metálico se deformó en un moño",
                                },
                                {
                                    src: "/casos/larisa-bottega/piezas/04-la-ventana.png",
                                    caption: "Versión final: el broche en forma de ocho.",
                                    alt: "Versión final de la escena en la ventana del tren con el broche dorado en forma de ocho de la Andiamo",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#1C1D18]/15 bg-white shadow-[0_18px_45px_rgba(28,29,24,0.1)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#1C1D18]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="max-w-4xl">
                            <MethodBlock title="Regla 1 · El detalle que nota el fan">
                                El broche en forma de ocho es lo que hace reconocible a la Andiamo. En varias versiones la IA lo convirtió en un moño o en un nudo enredado. Cada pieza se revisó con la foto de cerca del broche al lado.
                            </MethodBlock>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
                            <div className="lg:col-span-7">
                                <MethodBlock title="Regla 2 · Que no se repitan">
                                    El bodegón y el cierre son la misma terraza. Una versión del bodegón salió con el mismo encuadre que el cierre y se descartó: nueve piezas tienen que contar nueve momentos.
                                </MethodBlock>
                            </div>
                            <div className="lg:col-span-5">
                                <figure className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#1C1D18]/15 bg-white shadow-[0_18px_45px_rgba(28,29,24,0.1)]">
                                        <Image
                                            src="/casos/larisa-bottega/proceso/bodegon-descartado-igual-al-cierre.png"
                                            alt="Versión descartada del bodegón en la terraza con encuadre casi idéntico a la pieza de cierre"
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#1C1D18]/80 font-mono">
                                        Descartada: casi igual al cierre.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10 bg-[#EAE4D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block">
                                    Paso 5
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1D18]">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal pt-2">
                                    En una producción normal, la IA entrega material en bruto y el acabado se hace en Photoshop. Aquí no se abrió ningún programa. El color se escribe dentro del prompt y lo que falla se corrige con lenguaje normal o se vuelve a generar.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Dos bloques de color fijos, uno de mañana y uno de tarde, se pegan al final de cada prompt igual que la ficha fija la cara. Piden grano de película y negros levantados para que la foto se sienta analógica desde la generación.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block">
                                    El resultado
                                </span>
                                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1D18]">
                                    Nueve piezas
                                </h2>
                            </div>

                            {/* Cifras en fila */}
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {[
                                    "9 piezas finales",
                                    "1 modelo virtual",
                                    "0 cámaras",
                                    "0 programas de edición",
                                ].map((stat) => (
                                    <span
                                        key={stat}
                                        className="px-4 py-2 rounded-full bg-white border border-[#5E6B3A]/35 text-xs sm:text-sm font-mono font-medium text-[#1C1D18] shadow-sm"
                                    >
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <GalleryLightbox pieces={FINAL_PIECES} />
                    </div>
                </section>

                {/* 10. Ficha técnica */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10 bg-[#EAE4D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-10">
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#5E6B3A] font-bold block">
                                Síntesis del flujo
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1D18]">
                                Ficha técnica
                            </h2>
                        </div>

                        <div className="rounded-2xl border border-[#1C1D18]/15 bg-white overflow-hidden shadow-[0_18px_45px_rgba(28,29,24,0.08)]">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b border-[#1C1D18]/15 bg-[#5E6B3A]/10 hover:bg-[#5E6B3A]/10">
                                        <TableHead className="text-[#5E6B3A] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Paso
                                        </TableHead>
                                        <TableHead className="text-[#5E6B3A] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Qué se hace
                                        </TableHead>
                                        <TableHead className="text-[#5E6B3A] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Herramienta
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {TECH_SPECS.map((row) => (
                                        <TableRow
                                            key={row.step}
                                            className="border-b border-[#1C1D18]/10 hover:bg-[#5E6B3A]/[0.04]"
                                        >
                                            <TableCell className="font-mono font-bold text-[#1C1D18] py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.step}
                                            </TableCell>
                                            <TableCell className="text-[#1C1D18]/85 py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.action}
                                            </TableCell>
                                            <TableCell className="font-mono font-medium text-[#5E6B3A] py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.tool}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </section>

                {/* 11. Llamado final */}
                <section className="py-20 sm:py-28 border-b border-[#1C1D18]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute right-1/4 bottom-0 w-[500px] h-[350px] bg-[#5E6B3A]/10 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1D18] leading-[1.08]">
                                Ahora hazlo con tu personaje
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1C1D18]/85 leading-relaxed font-normal">
                                Todo lo que ves aquí sale de un método: personajes que no cambian de cara, en cualquier escena, con cualquier producto, campaña tras campaña. Sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-white border border-[#1C1D18]/15 text-[#1C1D18] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1D18]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#5E6B3A] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#1C1D18]/80 leading-relaxed font-normal">
                                        La ficha de identidad y las hojas de referencia para tu personaje.
                                    </p>
                                </div>
                                <div
                                    role="note"
                                    className="w-full py-3.5 px-4 rounded-xl bg-[#F4F0E7] border border-[#1C1D18]/20 text-center text-sm sm:text-base font-mono font-semibold text-[#1C1D18] select-all"
                                >
                                    Comenta ANDIAMO en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-white border border-[#1C1D18]/20 text-[#1C1D18] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1C1D18]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1C1D18] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#1C1D18]/80 leading-relaxed font-normal">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#1C1D18] hover:bg-[#1C1D18]/90 text-[#F4F0E7] font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#5E6B3A] via-[#4D582F] to-[#3B4423] border-2 border-[#5E6B3A] text-[#F4F0E7] rounded-2xl flex flex-col justify-between gap-8 shadow-[0_20px_55px_rgba(94,107,58,0.3)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F4F0E7]">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F4F0E7] font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-[#F4F0E7]/90 leading-relaxed font-normal">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan, Tatiana y Larisa.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#F4F0E7] hover:bg-white text-[#3B4423] font-bold text-base shadow-lg"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        {/* Enlaces pequeños a los ocho casos anteriores, con el de Technogym destacado con "La otra campaña de Larisa" */}
                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#5E6B3A] hover:text-[#1C1D18] underline underline-offset-4 decoration-[#5E6B3A]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#5E6B3A] hover:text-[#1C1D18] underline underline-offset-4 decoration-[#5E6B3A]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#5E6B3A] hover:text-[#1C1D18] underline underline-offset-4 decoration-[#5E6B3A]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#5E6B3A] hover:text-[#1C1D18] underline underline-offset-4 decoration-[#5E6B3A]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#5E6B3A] hover:text-[#1C1D18] underline underline-offset-4 decoration-[#5E6B3A]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#5E6B3A] hover:text-[#1C1D18] underline underline-offset-4 decoration-[#5E6B3A]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#5E6B3A]/15 border border-[#5E6B3A]/50 text-sm sm:text-base font-mono font-medium text-[#1C1D18] hover:bg-[#5E6B3A]/25 transition-colors shadow-sm"
                            >
                                <span className="px-2.5 py-0.5 rounded-full bg-[#5E6B3A] text-[#F4F0E7] text-xs font-bold uppercase tracking-wider">
                                    La otra campaña de Larisa
                                </span>
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4 text-[#5E6B3A]" />
                            </Link>

                            <Link
                                href="/casos/vallehalla-hidromiel"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#5E6B3A] hover:text-[#1C1D18] underline underline-offset-4 decoration-[#5E6B3A]/50 transition-colors"
                            >
                                <span>Campaña 008: Ilan y Tatiana × Vallehalla Hidromiel</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#E3DDD0]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#1C1D18]/65 leading-relaxed text-center">
                            Proyecto conceptual y no comercial. IA Builders Lab no tiene afiliación, patrocinio ni relación comercial con Bottega Veneta ni con Kering. Las marcas y productos citados pertenecen a sus dueños y se mencionan solo con fines ilustrativos. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
