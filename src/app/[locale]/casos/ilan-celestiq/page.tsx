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
        absolute: "El encargo · Campaña de auto de ultra lujo 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa del Cadillac Celestiq hecha 100% con IA, con el mismo modelo virtual de la campaña del Tesla Roadster. El método paso a paso y las reglas que salieron de cuatro campañas.",
    openGraph: {
        title: "El encargo · Campaña de auto de ultra lujo 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa del Cadillac Celestiq hecha 100% con IA, con el mismo modelo virtual de la campaña del Tesla Roadster. El método paso a paso y las reglas que salieron de cuatro campañas.",
        images: [
            {
                url: "/casos/ilan-celestiq/piezas/01-portada-el-encargo.jpg",
                width: 896,
                height: 1200,
                alt: "El encargo · Ilan × Cadillac Celestiq — Portada · El encargo",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/ilan-celestiq/piezas/01-portada-el-encargo.jpg",
        caption: "Portada · El encargo",
        alt: "Portada de la campaña El encargo: Ilan descubriendo el frente del Cadillac Celestiq en un taller de diseño de concreto con claraboya",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/02-packshot-la-entrada.jpg",
        caption: "Packshot · La entrada",
        alt: "Packshot del Cadillac Celestiq azul estacionado en una entrada privada de noche con lluvia fina sobre piedra mojada",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/03-las-muestras.jpg",
        caption: "Las muestras",
        alt: "Ilan en el taller de diseño eligiendo muestras de materiales y piel azul para su Cadillac Celestiq a la medida",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/04-el-techo.jpg",
        caption: "El techo",
        alt: "Vista interior hacia el techo de cristal inteligente del Cadillac Celestiq",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/05-el-emblema.jpg",
        caption: "El emblema",
        alt: "Detalle macro del emblema monocromo iluminado del Cadillac Celestiq en la parrilla frontal",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/06-al-volante.jpg",
        caption: "Al volante",
        alt: "Ilan al volante del Cadillac Celestiq manejando de noche con la pantalla de lado a lado encendida",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/07-la-llegada.jpg",
        caption: "La llegada",
        alt: "Ilan llegando de noche en el Cadillac Celestiq azul bajo la lluvia fina con el techo a la altura del pecho",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/08-el-retrato.jpg",
        caption: "El retrato",
        alt: "Retrato editorial de Ilan con canas en las sienes y gris en la barbilla en penumbra nocturna",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/ilan-celestiq/piezas/09-cierre-entregado.jpg",
        caption: "Cierre · Entregado",
        alt: "Cierre de la campaña: el taller de concreto vacío bajo la claraboya con solo la funda doblada en el piso",
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
        step: "El modelo",
        action: "La misma ficha y las mismas hojas del Roadster, corregidas",
        tool: "Nano Banana Pro",
    },
    {
        step: "Referencias",
        action: "Fotos oficiales del auto, un solo color",
        tool: "Ninguna, criterio",
    },
    {
        step: "Espacios",
        action: "Taller de diseño y entrada privada, vacíos y en 3:4",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelo, espacio, luz y auto real en una imagen",
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
        <div className="border-l-4 border-[#A9BDF2] bg-[#111520]/90 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#A9BDF2]/25 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#A9BDF2] font-semibold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
                {children}
            </p>
        </div>
    );
}

export default function IlanCelestiqCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#0A0C12] text-white flex flex-col font-sans selection:bg-[#A9BDF2]/35 overflow-x-hidden">
            <PublicHeader />

            <main className="flex-1">
                {/* 1. Hero Section */}
                <section className="relative w-full bg-[#0A0C12] border-b border-white/10 overflow-hidden">
                    {/* Full-bleed background image (object-cover) across the entire Hero */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/ilan-celestiq/piezas/02-packshot-la-entrada.jpg"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center scale-105 opacity-50"
                        />
                        {/* Blur ligero en el lado izquierdo donde va el texto para que se entienda con claridad */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-[#0A0C12]/80 via-[#0A0C12]/55 to-transparent" />
                        {/* Vignette superior e inferior */}
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0A0C12] via-[#0A0C12]/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0C12] via-[#0A0C12]/70 to-transparent" />
                    </div>

                    {/* Ambient Silver-Blue Glow */}
                    <div className="pointer-events-none absolute top-1/4 left-1/4 w-[650px] h-[450px] bg-[#A9BDF2]/15 rounded-full blur-[160px] z-[1]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                            {/* Columna izquierda en desktop / Espacio superior en móvil */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A9BDF2]/20 border border-[#A9BDF2]/50 text-white text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(169,189,242,0.25)]">
                                    <span>Campaña 004 · Caso de estudio</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.02] drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">
                                    El encargo
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#A9BDF2] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                                    Ilan × Cadillac Celestiq
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                                    Una campaña de auto de ultra lujo completa, hecha 100% con inteligencia artificial. Nueve piezas, un modelo que no existe, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: piezas/01-portada-el-encargo.jpg */}
                            <div className="lg:col-span-5 relative z-10 -mt-4 sm:-mt-8 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-white/15 bg-[#0A0C12]">
                                    <Image
                                        src="/casos/ilan-celestiq/piezas/01-portada-el-encargo.jpg"
                                        alt="Ilan descubriendo el Cadillac Celestiq bajo la claraboya del taller de diseño de concreto"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                        className="object-contain object-bottom"
                                    />
                                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0A0C12]/70 to-transparent" />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0A0C12]/80 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Ficha en una fila a todo el ancho (max-w-7xl) */}
                        <div className="relative z-20 mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                            {[
                                "Producto: Cadillac Celestiq",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: proyecto conceptual",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-[#10141F]/85 border border-[#A9BDF2]/25 backdrop-blur-xl text-xs sm:text-sm text-white/95 font-mono text-center flex items-center justify-center shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-white/10 bg-[#0D1018]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#A9BDF2] rounded-full" />
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-lg sm:text-xl lg:text-2xl text-white/85 leading-relaxed font-light">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques azules va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#A9BDF2]/8 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 lg:space-y-16 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                El concepto
                            </h2>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] border-l-4 border-[#A9BDF2] pl-6 sm:pl-8 py-2 max-w-5xl">
                                Hay cosas que no se compran. Se encargan.
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            <div className="lg:col-span-6">
                                <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
                                    El Celestiq no se compra en una agencia: se arma a mano y cada uno se encarga a la medida, junto con los diseñadores de la marca. Ese es el ultra lujo de verdad: elegir y esperar. La campaña cuenta el encargo de Ilan, del taller de diseño a su primera noche en la ciudad. Es el lado B de la campaña del Roadster: aquella era llegar antes que el tiempo; esta es el lujo de que el tiempo se detenga.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase decide qué se queda: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>

                                <MethodBlock title="La regla del lujo">
                                    El lujo se percibe, no se muestra. Ilan nunca posa junto al auto: lo descubre, lo maneja, llega en él. La última pieza ni siquiera tiene auto, solo la funda doblada en el piso del taller.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · El modelo */}
                <section className="py-20 sm:py-28 border-b border-white/10 bg-[#0D1018]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                    Paso 1 · El modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
                                    Ilan no existe. Es el mismo personaje de la campaña del Roadster, con la misma ficha de identidad y las mismas hojas de cara y cuerpo. Que tenga la misma cara en dos campañas distintas es justo lo que el método promete.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    La ficha se corrige con lo que enseñan las campañas anteriores. Las canas se describen exactamente dónde van, para que la IA no lo envejezca. Y el cuerpo se describe por lo que se tiene que ver ("el suéter estirado en el pecho"), no por un dato ("90 kg"); aun así, la portada necesitó una edición con la hoja de cuerpo.
                                </MethodBlock>
                                <div className="p-5 sm:p-6 rounded-2xl bg-[#111520] border border-[#A9BDF2]/25 text-sm sm:text-base text-white/90 shadow-lg">
                                    La guía gratuita explica cómo crear la ficha y las hojas de tu personaje. Comenta ENCARGO en el reel de la campaña y te llega por mensaje.
                                </div>
                            </div>
                        </div>

                        {/* Galería de 2: hojas de cara y cuerpo */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/ilan-celestiq/proceso/ilan-hoja-cara.webp"
                                        alt="Hoja de cara de Ilan con diez ángulos faciales consistentes, la misma referencia de la campaña anterior"
                                        width={1376}
                                        height={768}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-white/75 font-mono">
                                    Hoja de cara: la misma referencia de la campaña anterior.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/ilan-celestiq/proceso/ilan-hoja-cuerpo.webp"
                                        alt="Hoja de cuerpo completo de Ilan mostrando complexión cuadrada y atlética"
                                        width={1200}
                                        height={896}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-white/75 font-mono">
                                    Hoja de cuerpo: complexión cuadrada y atlética.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Comparación de la portada */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/ilan-celestiq/proceso/portada-v1-cuerpo-delgado.jpg"
                                        alt="Primera versión de la portada donde la complexión corporal de Ilan salió normal y más delgada"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-white/75 font-mono">
                                    Primera versión: la complexión salió normal.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#A9BDF2]/60 bg-[#0A0C12] shadow-[0_25px_65px_rgba(169,189,242,0.18)]">
                                    <Image
                                        src="/casos/ilan-celestiq/piezas/01-portada-el-encargo.jpg"
                                        alt="Versión final de la portada tras una edición con la hoja de cuerpo mostrando complexión cuadrada y atlética"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-white font-mono">
                                    Versión final: una edición con la hoja de cuerpo.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Las referencias del producto */}
                <section className="py-20 sm:py-28 border-b border-white/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                    Paso 2 · Las referencias del producto
                                </h2>
                                <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
                                    Antes de generar, junté veinte fotos oficiales del Celestiq y me quedé con nueve: exterior desde varios ángulos, el frente con las luces encendidas, el tablero, el volante y la cabina trasera.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Cada Celestiq se hace a la medida, y en las fotos oficiales aparece en azul, rojo y naranja. Si mezclas colores en las referencias, la IA los combina. Elegí el azul, que dominaba las fotos, y lo volví parte de la historia: en la pieza de las muestras, Ilan elige esa misma piel azul.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-white/10 bg-[#0D1018]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                Paso 3 · Los espacios
                            </h2>
                            <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
                                Dos espacios, generados vacíos: un taller de diseño de concreto con claraboya y una entrada privada de noche, con lluvia fina sobre piedra mojada.
                            </p>
                        </div>

                        {/* Galería de 2 espacios finales (3:4) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/ilan-celestiq/proceso/espacio-e1-taller.png"
                                    alt="Espacio vacío 1 en formato vertical 3:4: taller de diseño de concreto con claraboya"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/ilan-celestiq/proceso/espacio-e2-entrada.png"
                                    alt="Espacio vacío 2 en formato vertical 3:4: entrada privada de noche con lluvia fina sobre piedra mojada"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Bloque Cómo se hace + galería pequeña de espacios horizontales descartados */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Los primeros espacios salieron horizontales y se rehicieron. La IA copia el formato de la imagen que le adjuntas: si el espacio es horizontal, todas las piezas salen horizontales. La proporción (3:4) se elige en el selector de la herramienta antes de generar; escribirla en el prompt no basta.
                                </MethodBlock>
                            </div>

                            <figure className="lg:col-span-6 flex flex-col">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="relative w-full rounded-xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-lg">
                                        <Image
                                            src="/casos/ilan-celestiq/proceso/espacio-horizontal-descartado-taller-a.png"
                                            alt="Espacio descartado en formato horizontal: taller de diseño de concreto"
                                            width={1200}
                                            height={896}
                                            sizes="(max-width: 640px) 100vw, 25vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <div className="relative w-full rounded-xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-lg">
                                        <Image
                                            src="/casos/ilan-celestiq/proceso/espacio-horizontal-descartado-entrada-b.png"
                                            alt="Espacio descartado en formato horizontal: entrada privada de noche"
                                            width={1200}
                                            height={896}
                                            sizes="(max-width: 640px) 100vw, 25vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-white/75 font-mono text-center">
                                    Descartados: buenos, pero horizontales.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-white/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                Paso 4 · La integración
                            </h2>
                            <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
                                Aquí se juntan el modelo, el espacio, la luz y el auto real. Después de tres campañas, casi todas las piezas salieron a la primera. Dos reglas hicieron la diferencia.
                            </p>
                        </div>

                        {/* Comparación del emblema */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0A0C12] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/ilan-celestiq/proceso/emblema-v1-escudo-de-colores.jpg"
                                        alt="Primera versión de la pieza El emblema con el escudo clásico de Cadillac de colores"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-white/75 font-mono">
                                    Primera versión: el escudo clásico de colores.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#A9BDF2]/60 bg-[#0A0C12] shadow-[0_25px_65px_rgba(169,189,242,0.18)]">
                                    <Image
                                        src="/casos/ilan-celestiq/piezas/05-el-emblema.jpg"
                                        alt="Versión final de la pieza El emblema con el escudo monocromo iluminado del Cadillac Celestiq real"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-white font-mono">
                                    Versión final: el escudo monocromo del Celestiq real.
                                </figcaption>
                            </figure>
                        </div>

                        {/* 3 Reglas */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            <MethodBlock title="Regla 1 · Lo que nombras, aparece">
                                El bloque de color decía "el azul del auto". En las piezas donde no debía salir el auto (las muestras, el retrato, el taller vacío) esa frase se quitó, para no invitarlo a la foto.
                            </MethodBlock>
                            <MethodBlock title="Regla 2 · El detalle que nota el fan">
                                La IA dibujó el escudo de Cadillac de colores, la versión clásica. El Celestiq lo lleva monocromo. Cambiar un color sí se corrige con una edición; pero hay que conocer el producto para notarlo.
                            </MethodBlock>
                            <MethodBlock title="Regla 3 · La escala">
                                Cuando la persona y el auto comparten foto, la escala tiene que ser real. En la llegada el auto entró casi completo, y funciona porque el techo le llega a Ilan a la altura del pecho, como en la realidad.
                            </MethodBlock>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-white/10 bg-[#0D1018]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
                                    En una producción normal, la IA entrega material en bruto y el acabado se hace en Photoshop. Aquí no se abrió ningún programa. El color se escribe dentro del prompt y las correcciones se piden con lenguaje normal sobre la misma imagen.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Un bloque de color fijo se pega al final de cada prompt, igual que la ficha fija la cara. Las correcciones se hacen en una sola edición por pieza, como máximo dos. En esta campaña bastaron dos ediciones en total: el cuerpo de la portada y el color del escudo.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-32 border-b border-white/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#A9BDF2]/10 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
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
                                        className="px-4 py-3 rounded-xl bg-[#111520] border border-[#A9BDF2]/35 text-xs sm:text-sm font-mono text-white text-center shadow-lg"
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
                <section className="py-20 sm:py-28 border-b border-white/10 bg-[#0D1018]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                    Ficha técnica
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#A9BDF2] rounded-full" />
                            </div>

                            <div className="lg:col-span-8 rounded-2xl border border-white/15 bg-[#10141F] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-white/15 hover:bg-transparent">
                                            <TableHead className="text-[#A9BDF2] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Paso
                                            </TableHead>
                                            <TableHead className="text-[#A9BDF2] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Qué se hace
                                            </TableHead>
                                            <TableHead className="text-[#A9BDF2] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Herramienta
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {TECH_SPECS.map((row) => (
                                            <TableRow
                                                key={row.step}
                                                className="border-white/10 hover:bg-white/5"
                                            >
                                                <TableCell className="font-semibold text-white text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.step}
                                                </TableCell>
                                                <TableCell className="text-white/85 text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.action}
                                                </TableCell>
                                                <TableCell className="text-white/80 font-mono text-xs sm:text-sm py-4 px-4 sm:px-6 whitespace-normal align-top">
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
                <section className="py-20 sm:py-32 border-b border-white/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A9BDF2]/12 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                                Ahora hazlo con tu personaje
                            </h2>
                            <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-light">
                                Todo lo que ves aquí sale de un método: personajes que no cambian de cara, en cualquier escena, con cualquier producto, campaña tras campaña. Sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-[#10141F]/90 border-white/15 text-white rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-white/80 leading-relaxed font-light">
                                        La ficha de identidad y las hojas de referencia para tu personaje.
                                    </p>
                                </div>
                                <div className="w-full py-3.5 px-4 rounded-xl bg-white/5 border border-white/20 text-center text-xs sm:text-sm font-mono text-white/90">
                                    Comenta ENCARGO en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-[#10141F]/90 border-white/20 text-white rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-white/80 leading-relaxed font-light">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-white text-[#0A0C12] hover:bg-white/90 font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#1A233A] via-[#121828] to-[#0D1018] border-2 border-[#A9BDF2] text-white rounded-2xl flex flex-col justify-between gap-8 shadow-[0_0_55px_rgba(169,189,242,0.25)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-white/90 leading-relaxed font-light">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan y Tatiana.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#A9BDF2] hover:bg-[#93abea] text-[#0A0C12] font-bold text-base shadow-lg shadow-[#A9BDF2]/30"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#A9BDF2] hover:text-white underline underline-offset-4 decoration-[#A9BDF2]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#A9BDF2]/15 border border-[#A9BDF2]/50 text-sm sm:text-base font-mono text-white hover:bg-[#A9BDF2]/25 transition-colors shadow-[0_0_20px_rgba(169,189,242,0.2)]"
                            >
                                <span className="px-2 py-0.5 rounded-full bg-[#A9BDF2] text-[#0A0C12] text-xs font-bold uppercase tracking-wider">
                                    El lado A de Ilan
                                </span>
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4 text-[#A9BDF2]" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#A9BDF2] hover:text-white underline underline-offset-4 decoration-[#A9BDF2]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#A9BDF2] hover:text-white underline underline-offset-4 decoration-[#A9BDF2]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul Reposado</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#A9BDF2] hover:text-white underline underline-offset-4 decoration-[#A9BDF2]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#A9BDF2] hover:text-white underline underline-offset-4 decoration-[#A9BDF2]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#07080C]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-white/50 leading-relaxed text-center">
                            Proyecto conceptual y no comercial. IA Builders Lab no tiene afiliación, patrocinio ni relación comercial con Cadillac ni con General Motors. Las marcas y productos citados pertenecen a sus dueños y se mencionan solo con fines ilustrativos. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
