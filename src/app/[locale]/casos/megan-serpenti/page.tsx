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
        absolute: "Se sostiene sola · Campaña de relojería de lujo 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa del Bulgari Serpenti Tubogas hecha 100% con IA, con la misma modelo virtual de la primera campaña de la serie. El método paso a paso y las reglas que salieron de seis campañas.",
    openGraph: {
        title: "Se sostiene sola · Campaña de relojería de lujo 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa del Bulgari Serpenti Tubogas hecha 100% con IA, con la misma modelo virtual de la primera campaña de la serie. El método paso a paso y las reglas que salieron de seis campañas.",
        images: [
            {
                url: "/casos/megan-serpenti/piezas/01-portada-se-sostiene-sola.png",
                width: 896,
                height: 1200,
                alt: "Se sostiene sola · Megan × Bulgari Serpenti Tubogas — Portada · Se sostiene sola",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/megan-serpenti/piezas/01-portada-se-sostiene-sola.png",
        caption: "Portada · Se sostiene sola",
        alt: "Portada de la campaña Se sostiene sola: Megan sentada en la ventana de piedra de un palazzo romano con el reloj Bulgari Serpenti Tubogas de dos vueltas en la muñeca izquierda",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/02-packshot-la-espiral.png",
        caption: "Packshot · La espiral",
        alt: "Packshot del reloj Bulgari Serpenti Tubogas de oro amarillo y carátula blanca con exactamente dos vueltas en la muñeca de Megan",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/03-sin-soldadura.png",
        caption: "Sin soldadura",
        alt: "Detalle escultórico del brazalete en espiral del reloj Bulgari Serpenti Tubogas sosteniéndose solo sobre piedra romana",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/04-el-gesto.png",
        caption: "El gesto",
        alt: "Megan acomodándose el pelo pelirrojo con la mano izquierda mostrando el reloj Bulgari Serpenti Tubogas y su vestido verde esmeralda de cuello alto",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/05-bodegon-roma.png",
        caption: "Bodegón · Roma",
        alt: "Bodegón arquitectónico del reloj Bulgari Serpenti Tubogas sobre mármol y travertino romano con luz cálida de tarde",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/06-la-escalera.png",
        caption: "La escalera",
        alt: "Megan bajando la escalera de piedra del palazzo romano con el reloj Serpenti Tubogas en la muñeca izquierda",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/07-la-terraza.png",
        caption: "La terraza",
        alt: "Megan en la terraza sobre los techos de Roma al anochecer con el vestido verde esmeralda y el reloj Serpenti Tubogas",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/08-la-sombra.png",
        caption: "La sombra",
        alt: "Detalle de la mano izquierda de Megan con el reloj Serpenti Tubogas rozando el muro ocre donde nace su sombra bajo la luz de la persiana",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/megan-serpenti/piezas/09-cierre-la-hora.png",
        caption: "Cierre · La hora",
        alt: "Cierre de la campaña: el reloj Bulgari Serpenti Tubogas solo en el asiento de piedra de la ventana frente a las luces nocturnas de Roma",
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
        action: "La misma ficha y la misma hoja de cara de la campaña 001",
        tool: "Nano Banana Pro",
    },
    {
        step: "Referencias",
        action: "Doce fotos del reloj, cuatro de una sola versión",
        tool: "Ninguna, criterio",
    },
    {
        step: "Espacios",
        action: "Palazzo de día y terraza al anochecer, vacíos y en 3:4",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelo, espacio, luz y reloj real en una imagen",
        tool: "Nano Banana Pro",
    },
    {
        step: "Correcciones",
        action: "Color en el prompt, una edición y regeneraciones",
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
        <div className="border-l-4 border-[#C9A24A] bg-[#121D18]/90 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#C9A24A]/25 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#C9A24A] font-semibold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#F3ECE2]/90 leading-relaxed font-light">
                {children}
            </p>
        </div>
    );
}

export default function MeganSerpentiCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#0C1411] text-[#F3ECE2] flex flex-col font-sans selection:bg-[#C9A24A]/35 overflow-x-hidden">
            <PublicHeader />

            <main className="flex-1">
                {/* 1. Hero Section: El texto va sobre el muro ocre de la derecha, sin tapar a Megan ni su mano con el reloj */}
                <section className="relative w-full bg-[#0C1411] border-b border-[#F3ECE2]/10 overflow-hidden">
                    {/* Full-bleed background image del muro ocre del palazzo */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/megan-serpenti/proceso/espacio-e1-palazzo.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-right scale-105 opacity-60"
                        />
                        {/* Blur ligero sobre el muro ocre de la derecha donde va el texto */}
                        <div className="absolute inset-y-0 right-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-l from-[#1C160E]/85 via-[#141510]/65 to-transparent" />
                        {/* Vignette superior e inferior */}
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0C1411] via-[#0C1411]/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0C1411] via-[#0C1411]/70 to-transparent" />
                    </div>

                    {/* Ambient Gold Glow */}
                    <div className="pointer-events-none absolute top-1/4 right-1/4 w-[650px] h-[450px] bg-[#C9A24A]/15 rounded-full blur-[160px] z-[1]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                            {/* Texto sobre el muro ocre de la derecha en desktop (arriba en móvil) */}
                            <div className="lg:col-span-7 lg:order-2 relative z-20 text-center lg:text-left lg:pl-4">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A24A]/20 border border-[#C9A24A]/50 text-[#F3ECE2] text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(201,162,74,0.25)]">
                                    <span>Campaña 006 · Caso de estudio</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F3ECE2] leading-[1.02] drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">
                                    Se sostiene sola
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#C9A24A] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                                    Megan × Bulgari Serpenti Tubogas
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F3ECE2]/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                                    Una campaña de alta relojería completa, hecha 100% con inteligencia artificial. Nueve piezas, una modelo que no existe, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal a la izquierda en desktop: piezas/01-portada-se-sostiene-sola.png */}
                            <div className="lg:col-span-5 lg:order-1 relative z-10 -mt-2 sm:-mt-6 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-[#F3ECE2]/20 bg-[#0C1411]">
                                    <Image
                                        src="/casos/megan-serpenti/piezas/01-portada-se-sostiene-sola.png"
                                        alt="Megan sentada en la ventana de piedra de un palazzo romano con el reloj Bulgari Serpenti Tubogas en la muñeca izquierda"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                        className="object-contain object-bottom"
                                    />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0C1411]/75 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Ficha en una fila a todo el ancho (max-w-7xl) */}
                        <div className="relative z-20 mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                            {[
                                "Producto: Serpenti Tubogas",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: proyecto conceptual",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-[#111C17]/85 border border-[#C9A24A]/30 backdrop-blur-xl text-xs sm:text-sm text-[#F3ECE2]/95 font-mono text-center flex items-center justify-center shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#F3ECE2]/10 bg-[#0F1915]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#C9A24A] rounded-full" />
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-lg sm:text-xl lg:text-2xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques dorados va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#F3ECE2]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C9A24A]/8 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 lg:space-y-16 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                El concepto
                            </h2>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3ECE2] leading-[1.08] border-l-4 border-[#C9A24A] pl-6 sm:pl-8 py-2 max-w-5xl">
                                Se sostiene sola.
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            <div className="lg:col-span-6">
                                <p className="text-lg sm:text-xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                    El brazalete Tubogas se hace enrollando tiras de oro sin una sola soldadura: la espiral se sostiene por su propia tensión. Megan es igual. La campaña sigue una tarde suya en un palazzo de Roma, la ciudad de Bulgari, hasta que la ciudad enciende sus luces. No hay nadie más en ninguna foto, y no hace falta.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase decide qué se queda: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>

                                <MethodBlock title="La regla del lujo">
                                    El lujo se percibe, no se muestra. Megan nunca le presenta el reloj a la cámara: lo trae puesto mientras se sienta, se acomoda el pelo, baja una escalera o roza un muro. La última pieza no tiene a nadie: el reloj se queda solo en la ventana.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La modelo */}
                <section className="py-20 sm:py-28 border-b border-[#F3ECE2]/10 bg-[#0F1915]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                    Paso 1 · La modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                    Megan no existe. Fue la protagonista de la primera campaña de la serie y vuelve cinco campañas después con la misma ficha de identidad y la misma hoja de cara. Su rasgo único son las pecas densas en el puente de la nariz.
                                </p>
                                <MethodBlock>
                                    La guía de Megan no permite poses insinuantes. Una versión de El gesto salió con la seda del vestido marcando el busto y se descartó, aunque la cara y el reloj estaban perfectos. El vestido de toda la campaña es sin mangas, para que la muñeca siempre se vea, y de cuello alto.
                                </MethodBlock>
                                <div className="p-5 sm:p-6 rounded-2xl bg-[#121D18] border border-[#C9A24A]/25 text-sm sm:text-base text-[#F3ECE2]/90 shadow-lg">
                                    La guía gratuita explica cómo crear la ficha y la hoja de cara de tu personaje. Comenta ESPIRAL en el reel de la campaña y te llega por mensaje.
                                </div>
                            </div>

                            <figure className="lg:col-span-6 flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/megan-serpenti/proceso/hoja-de-cara-megan.jpg"
                                        alt="Hoja de cara de Megan con la referencia oficial de identidad usada desde la campaña 001"
                                        width={1200}
                                        height={896}
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono">
                                    Hoja de cara: la misma referencia de la campaña 001.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Comparación de El gesto */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/megan-serpenti/proceso/gesto-descartado-transparencia.png"
                                        alt="Versión descartada de El gesto donde la seda del vestido marcaba de más"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono">
                                    Descartada: la seda marcaba de más.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C9A24A]/60 bg-[#0C1411] shadow-[0_25px_65px_rgba(201,162,74,0.18)]">
                                    <Image
                                        src="/casos/megan-serpenti/piezas/04-el-gesto.png"
                                        alt="Versión final de la pieza El gesto con vestido verde esmeralda sin mangas y de cuello alto"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2] font-mono">
                                    Versión final.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Las referencias del producto */}
                <section className="py-20 sm:py-28 border-b border-[#F3ECE2]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                    Paso 2 · Las referencias del producto
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                    Junté doce fotos del Serpenti Tubogas y me quedé con cuatro: de frente, en la muñeca, de lado y de tres cuartos. Todas de la misma versión: oro amarillo, carátula blanca y dos vueltas.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    La IA mezcla todo lo que le enseñas. Descarté las fotos de oro rosa, para no combinar dos oros; las que enseñaban el fondo grabado de la caja, porque la IA copia las letras; una de acero con oro y tres vueltas; una de una sola vuelta, y una que parecía réplica, con la caja y el brazalete de distinto oro. La foto en la muñeca la recorté para que no saliera la cara de la otra modelo.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#F3ECE2]/10 bg-[#0F1915]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                Paso 3 · Los espacios
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                Dos espacios, generados vacíos y en 3:4: un salón de un palazzo romano con muros ocre, piso de mármol y una ventana con asiento de piedra, y una terraza sobre los techos de Roma al anochecer.
                            </p>
                        </div>

                        {/* Galería de 2 espacios finales */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/megan-serpenti/proceso/espacio-e1-palazzo.png"
                                    alt="Espacio vacío 1: salón de palazzo romano con muros ocre, piso de mármol y ventana con asiento de piedra"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/megan-serpenti/proceso/espacio-e2-terraza.png"
                                    alt="Espacio vacío 2: terraza sobre los techos de Roma al anochecer"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Bloque Cómo se hace + galería pequeña de espacios descartados */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    En los dos espacios descartados había muebles dorados: una mesa con patas de latón y unas sillas de jardín doradas. Nadie los pidió y le iban a robar brillo al reloj. Si el producto es de oro, en la escena no debe competir otro dorado.
                                </MethodBlock>
                            </div>

                            <figure className="lg:col-span-6 flex flex-col">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative w-full rounded-xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-lg">
                                        <Image
                                            src="/casos/megan-serpenti/proceso/espacio-e1-descartado-mesa-dorada.png"
                                            alt="Espacio descartado del palazzo con una mesa de patas de latón dorado"
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 50vw, 25vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative w-full rounded-xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-lg">
                                        <Image
                                            src="/casos/megan-serpenti/proceso/espacio-e2-descartado-sillas-doradas.png"
                                            alt="Espacio descartado de la terraza con sillas de jardín doradas"
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 50vw, 25vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono text-center">
                                    Descartados: el dorado compite con el reloj.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#F3ECE2]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                Paso 4 · La integración
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                Aquí se juntan la modelo, el espacio, la luz y el reloj real. Un reloj es la prueba más difícil de la serie: es chico, tiene una forma muy precisa y cualquier fan nota si algo no cuadra. Cuatro reglas hicieron la diferencia.
                            </p>
                        </div>

                        {/* Comparación del packshot */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/megan-serpenti/proceso/packshot-descartado-vuelta-y-media.png"
                                        alt="Versión descartada del packshot donde el reloj Serpenti Tubogas daba solo vuelta y media"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono">
                                    Descartada: vuelta y media.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C9A24A]/60 bg-[#0C1411] shadow-[0_25px_65px_rgba(201,162,74,0.18)]">
                                    <Image
                                        src="/casos/megan-serpenti/piezas/02-packshot-la-espiral.png"
                                        alt="Versión final del packshot con dos vueltas exactas como el reloj Bulgari Serpenti Tubogas real"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2] font-mono">
                                    Versión final: dos vueltas, como el real.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Regla 1 */}
                        <div>
                            <MethodBlock title="Regla 1 · Cuenta las vueltas">
                                El Serpenti Tubogas de esta versión da exactamente dos vueltas a la muñeca. La IA tiende a cambiarlo: una, vuelta y media, tres. La ficha dice "exactamente dos vueltas" en cada prompt y cada pieza se revisa contando.
                            </MethodBlock>
                        </div>

                        {/* Regla 2 + imagen escalera-descartada-reloj-en-la-derecha.png */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7">
                                <MethodBlock title="Regla 2 · La muñeca correcta">
                                    El reloj va en la muñeca izquierda en toda la campaña. En una versión de la escalera, Megan se agarraba del barandal con la otra mano y el reloj quedó en la derecha. Se descartó.
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/megan-serpenti/proceso/escalera-descartada-reloj-en-la-derecha.png"
                                        alt="Versión descartada de La escalera con el reloj puesto en la muñeca derecha equivocada"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono text-center">
                                    Descartada: el reloj en la muñeca equivocada.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Regla 3 + imagen soldadura-v1-manga-y-mano.png */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7">
                                <MethodBlock title="Regla 3 · Lo que no dices, la IA lo inventa">
                                    La pieza Sin soldadura era el reloj solo. La primera vez salió puesto en un brazo, con una manga que el vestido no tiene y hasta con una espiral flotando. Hubo que escribirlo: "nadie lo lleva puesto".
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/megan-serpenti/proceso/soldadura-v1-manga-y-mano.png"
                                        alt="Primera versión de Sin soldadura donde la IA puso un brazo con manga que nadie pidió"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono text-center">
                                    Primera versión: nadie pidió el brazo.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Regla 4 */}
                        <div>
                            <MethodBlock title="Regla 4 · La sombra nace de algo">
                                La sombra de una mano levantada al aire salió con otra pose, como si fuera de otra persona. La solución fue un gesto real: Megan roza el muro con la punta de los dedos, y la sombra nace justo ahí, con la misma pose. Igual que la luz: la persiana se ve en la foto, así que se entiende de dónde viene.
                            </MethodBlock>
                        </div>

                        {/* Comparación de La sombra */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/megan-serpenti/proceso/sombra-v1-brazo-levantado.png"
                                        alt="Primera versión de La sombra con el brazo levantado al aire y una sombra que no correspondía a esa mano"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono">
                                    Primera versión: la sombra no era de esa mano.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C9A24A]/60 bg-[#0C1411] shadow-[0_25px_65px_rgba(201,162,74,0.18)]">
                                    <Image
                                        src="/casos/megan-serpenti/piezas/08-la-sombra.png"
                                        alt="Versión final de La sombra donde Megan roza el muro ocre y la sombra nace exactamente de sus dedos"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2] font-mono">
                                    Versión final: la sombra nace de los dedos.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#F3ECE2]/10 bg-[#0F1915]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                    En una producción normal, la IA entrega material en bruto y el acabado se hace en Photoshop. Aquí no se abrió ningún programa. El color se escribe dentro del prompt y las correcciones se piden con lenguaje normal sobre la misma imagen.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Dos bloques de color fijos, uno de tarde y uno de anochecer, se pegan al final de cada prompt igual que la ficha fija la cara. En toda la campaña hubo una sola edición: en la terraza, el vestido negro pasó a verde esmeralda, para que la tarde y la noche fueran una sola historia con el mismo vestido. Un cambio de color sí se arregla con una edición; una forma o una pose, no.
                                </MethodBlock>
                            </div>
                        </div>

                        {/* Comparación de La terraza */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#F3ECE2]/15 bg-[#0C1411] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/megan-serpenti/proceso/terraza-v1-vestido-negro.png"
                                        alt="Versión de La terraza antes de la edición con vestido negro"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2]/75 font-mono">
                                    Antes de la edición.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C9A24A]/60 bg-[#0C1411] shadow-[0_25px_65px_rgba(201,162,74,0.18)]">
                                    <Image
                                        src="/casos/megan-serpenti/piezas/07-la-terraza.png"
                                        alt="Versión final de La terraza después de la edición con el mismo vestido verde esmeralda de toda la tarde"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F3ECE2] font-mono">
                                    Después: el mismo vestido de toda la tarde.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-32 border-b border-[#F3ECE2]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#C9A24A]/10 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F3ECE2]">
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
                                        className="px-4 py-3 rounded-xl bg-[#121D18] border border-[#C9A24A]/35 text-xs sm:text-sm font-mono text-[#F3ECE2] text-center shadow-lg"
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
                <section className="py-20 sm:py-28 border-b border-[#F3ECE2]/10 bg-[#0F1915]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F3ECE2]">
                                    Ficha técnica
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#C9A24A] rounded-full" />
                            </div>

                            <div className="lg:col-span-8 rounded-2xl border border-[#F3ECE2]/15 bg-[#111C17] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-[#F3ECE2]/15 hover:bg-transparent">
                                            <TableHead className="text-[#C9A24A] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Paso
                                            </TableHead>
                                            <TableHead className="text-[#C9A24A] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Qué se hace
                                            </TableHead>
                                            <TableHead className="text-[#C9A24A] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Herramienta
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {TECH_SPECS.map((row) => (
                                            <TableRow
                                                key={row.step}
                                                className="border-[#F3ECE2]/10 hover:bg-[#F3ECE2]/5"
                                            >
                                                <TableCell className="font-semibold text-[#F3ECE2] text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.step}
                                                </TableCell>
                                                <TableCell className="text-[#F3ECE2]/85 text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.action}
                                                </TableCell>
                                                <TableCell className="text-[#F3ECE2]/80 font-mono text-xs sm:text-sm py-4 px-4 sm:px-6 whitespace-normal align-top">
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
                <section className="py-20 sm:py-32 border-b border-[#F3ECE2]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C9A24A]/12 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F3ECE2]">
                                Ahora hazlo con tu personaje
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F3ECE2]/85 leading-relaxed font-light">
                                Todo lo que ves aquí sale de un método: personajes que no cambian de cara, en cualquier escena, con cualquier producto, campaña tras campaña. Sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-[#111C17]/90 border-[#F3ECE2]/15 text-[#F3ECE2] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F3ECE2]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F3ECE2] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#F3ECE2]/80 leading-relaxed font-light">
                                        La ficha de identidad y la hoja de cara para tu personaje.
                                    </p>
                                </div>
                                <div className="w-full py-3.5 px-4 rounded-xl bg-[#F3ECE2]/5 border border-[#F3ECE2]/20 text-center text-xs sm:text-sm font-mono text-[#F3ECE2]/90">
                                    Comenta ESPIRAL en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-[#111C17]/90 border-[#F3ECE2]/20 text-[#F3ECE2] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F3ECE2]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F3ECE2] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#F3ECE2]/80 leading-relaxed font-light">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#F3ECE2] text-[#0C1411] hover:bg-[#F3ECE2]/90 font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#252212] via-[#131D16] to-[#0F1915] border-2 border-[#C9A24A] text-[#F3ECE2] rounded-2xl flex flex-col justify-between gap-8 shadow-[0_0_55px_rgba(201,162,74,0.25)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F3ECE2]">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F3ECE2] font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-[#F3ECE2]/90 leading-relaxed font-light">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan y Tatiana.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#C9A24A] hover:bg-[#b8903b] text-[#0C1411] font-bold text-base shadow-lg shadow-[#C9A24A]/30"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#C9A24A]/15 border border-[#C9A24A]/50 text-sm sm:text-base font-mono text-[#F3ECE2] hover:bg-[#C9A24A]/25 transition-colors shadow-[0_0_20px_rgba(201,162,74,0.2)]"
                            >
                                <span className="px-2.5 py-0.5 rounded-full bg-[#C9A24A] text-[#0C1411] text-xs font-bold uppercase tracking-wider">
                                    La primera campaña de Megan
                                </span>
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4 text-[#C9A24A]" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#C9A24A] hover:text-[#F3ECE2] underline underline-offset-4 decoration-[#C9A24A]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#C9A24A] hover:text-[#F3ECE2] underline underline-offset-4 decoration-[#C9A24A]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#C9A24A] hover:text-[#F3ECE2] underline underline-offset-4 decoration-[#C9A24A]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#C9A24A] hover:text-[#F3ECE2] underline underline-offset-4 decoration-[#C9A24A]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#C9A24A] hover:text-[#F3ECE2] underline underline-offset-4 decoration-[#C9A24A]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#080E0B]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#F3ECE2]/50 leading-relaxed text-center">
                            Proyecto conceptual y no comercial. IA Builders Lab no tiene afiliación, patrocinio ni relación comercial con Bulgari ni con LVMH. Las marcas y productos citados pertenecen a sus dueños y se mencionan solo con fines ilustrativos. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
