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
        absolute: "Después del sol · Campaña de skincare 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa del serum Advanced Night Repair hecha 100% con IA, con una modelo virtual que no cambia de cara. El método paso a paso y las reglas que salieron de los errores.",
    openGraph: {
        title: "Después del sol · Campaña de skincare 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa del serum Advanced Night Repair hecha 100% con IA, con una modelo virtual que no cambia de cara. El método paso a paso y las reglas que salieron de los errores.",
        images: [
            {
                url: "/casos/tatiana-anr/piezas/01-portada-despues-del-sol.png",
                width: 896,
                height: 1200,
                alt: "Después del sol · Tatiana × Advanced Night Repair — Portada · Después del sol",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/tatiana-anr/piezas/01-portada-despues-del-sol.png",
        caption: "Portada · Después del sol",
        alt: "Portada de la campaña Después del sol: Tatiana en la suite de resort de noche sosteniendo el frasco de Advanced Night Repair",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/02-packshot-travertino.png",
        caption: "Packshot · Travertino",
        alt: "Packshot del frasco de Estée Lauder Advanced Night Repair sobre piedra de travertino con luz cálida de noche",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/03-la-gota.png",
        caption: "La gota",
        alt: "Detalle macro del gotero de cristal del serum Advanced Night Repair con una gota dorada pálida",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/04-la-piel.png",
        caption: "La piel",
        alt: "Primer plano del rostro y piel con pecas de Tatiana iluminada con luz cálida de lámpara nocturna",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/05-bodegon-lino.png",
        caption: "Bodegón · Lino",
        alt: "Bodegón del frasco de Advanced Night Repair reposando sobre lino marfil con sombras suaves",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/06-el-ritual.png",
        caption: "El ritual",
        alt: "Tatiana en el baño de travertino durante su ritual nocturno de skincare con luz cálida desde atrás",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/07-contraluz.png",
        caption: "Contraluz",
        alt: "Retrato a contraluz de Tatiana de perfil con borde dorado en la nuca y la oreja y la cara en penumbra suave",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/08-dormida.png",
        caption: "Dormida",
        alt: "Tatiana dormida entre sábanas de lino marfil en la suite de resort de noche",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-anr/piezas/09-cierre-ya-amanecio.png",
        caption: "Cierre · Ya amaneció",
        alt: "Cierre de la campaña al amanecer con el frasco de Advanced Night Repair y la luz de la mañana entrando en la suite",
        width: 896,
        height: 1200,
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
        step: "Referencias",
        action: "Fotos oficiales del frasco, filtradas",
        tool: "Ninguna, criterio",
    },
    {
        step: "Espacios",
        action: "Suite de noche y baño de travertino, vacíos",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelo, espacio, luz y frasco real en una imagen",
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
        <div className="border-l-4 border-[#D39A4E] bg-[#13141C]/90 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#D39A4E]/25 shadow-[0_15px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#D39A4E] font-semibold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#F5F0E6]/90 leading-relaxed font-light">
                {children}
            </p>
        </div>
    );
}

export default function TatianaAnrCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#0B0D14] text-[#F5F0E6] flex flex-col font-sans selection:bg-[#D39A4E]/35 overflow-x-hidden">
            <PublicHeader />

            <main className="flex-1">
                {/* 1. Hero Section */}
                <section className="relative w-full bg-[#0B0D14] border-b border-[#F5F0E6]/10 overflow-hidden">
                    {/* Full-bleed background image (object-cover) across the entire Hero */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/tatiana-anr/piezas/02-packshot-travertino.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center scale-105 opacity-50"
                        />
                        {/* Blur ligero en el lado izquierdo donde va el texto para que se entienda con claridad */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-[#0B0D14]/80 via-[#0B0D14]/55 to-transparent" />
                        {/* Vignette superior e inferior */}
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B0D14] via-[#0B0D14]/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0D14] via-[#0B0D14]/70 to-transparent" />
                    </div>

                    {/* Ambient Amber Glow */}
                    <div className="pointer-events-none absolute top-1/4 left-1/4 w-[650px] h-[450px] bg-[#D39A4E]/15 rounded-full blur-[160px] z-[1]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                            {/* Columna izquierda en desktop / Espacio oscuro superior en móvil */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D39A4E]/20 border border-[#D39A4E]/50 text-[#F5F0E6] text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(211,154,78,0.25)]">
                                    <span>Campaña 003 · Caso de estudio</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F5F0E6] leading-[1.02] drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">
                                    Después del sol
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#D39A4E] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                                    Tatiana × Advanced Night Repair
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F5F0E6]/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                                    Una campaña de skincare de lujo completa, hecha 100% con inteligencia artificial. Nueve piezas, una modelo que no existe, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: piezas/01-portada-despues-del-sol.png */}
                            <div className="lg:col-span-5 relative z-10 -mt-4 sm:-mt-8 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-[#F5F0E6]/15 bg-[#0B0D14]">
                                    <Image
                                        src="/casos/tatiana-anr/piezas/01-portada-despues-del-sol.png"
                                        alt="Tatiana en la suite del resort de noche sosteniendo el frasco ámbar de Estée Lauder Advanced Night Repair"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                        className="object-contain object-bottom"
                                    />
                                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B0D14]/80 to-transparent" />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0B0D14]/80 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Ficha en una fila a todo el ancho (max-w-7xl) */}
                        <div className="relative z-20 mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                            {[
                                "Producto: Estée Lauder Advanced Night Repair",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: proyecto conceptual",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-[#111420]/85 border border-[#D39A4E]/25 backdrop-blur-xl text-xs sm:text-sm text-[#F5F0E6]/95 font-mono text-center flex items-center justify-center shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#F5F0E6]/10 bg-[#0E111A]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#D39A4E] rounded-full" />
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-lg sm:text-xl lg:text-2xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques ámbar va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D39A4E]/8 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 lg:space-y-16 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                El concepto
                            </h2>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F0E6] leading-[1.08] border-l-4 border-[#D39A4E] pl-6 sm:pl-8 py-2 max-w-5xl">
                                El sol lo hace de día. Lo demás pasa de noche.
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            <div className="lg:col-span-6 space-y-8">
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Tatiana es el personaje del sol: resort, playa, piel dorada. El Advanced Night Repair es un serum de noche, que trabaja mientras duermes. La campaña cuenta lo que pasa cuando ella se mete del sol: el ritual en la suite del resort, la noche y el amanecer. Paleta cerrada: azul medianoche, el ámbar del frasco, luz de lámpara, lino marfil y su piel con pecas.
                                </p>

                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase decide qué se queda: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>

                                <MethodBlock title="La regla del lujo">
                                    El lujo se percibe, no se muestra. Tatiana nunca le presenta el frasco a la cámara. Una versión de la portada salió con ella mostrándolo a la altura del pecho y la descarté: parecía anuncio de catálogo.
                                </MethodBlock>
                            </div>

                            <figure className="lg:col-span-6 flex flex-col">
                                <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0B0D14] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                                    <Image
                                        src="/casos/tatiana-anr/proceso/portada-descartada-lo-muestra-a-camara.png"
                                        alt="Versión descartada de la portada con Tatiana mostrando el frasco de Advanced Night Repair a la altura del pecho hacia la cámara"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 512px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6]/75 font-mono text-center">
                                    Descartada: mostrar el frasco a cámara rompe el tono de lujo.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La modelo */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0E111A]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Paso 1 · La modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Tatiana no existe. Es una de las modelos virtuales de la serie, con su identidad fijada en texto con el método REALISMO Blueprint: una ficha escrita que se pega igual en cada prompt y una hoja de cara como referencia. Sus rasgos únicos son las pecas en la cara y el pecho, la raya en medio y los labios gruesos.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    Para una marca externa, la modelo cambia de registro: poses y expresiones editoriales, tranquilas, sin gesto coqueto. La identidad no cambia; cambia el tono.
                                </MethodBlock>
                                <div className="p-5 sm:p-6 rounded-2xl bg-[#13141C] border border-[#D39A4E]/25 text-sm sm:text-base text-[#F5F0E6]/90 shadow-lg">
                                    La guía gratuita explica cómo crear la ficha y la hoja de cara de tu personaje. Comenta TATIANA en el reel de la campaña y te llega por mensaje.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Las referencias del producto */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Paso 2 · Las referencias del producto
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Antes de generar, junté fotos oficiales del frasco: de frente, en mano, el gotero con una gota y la textura del serum. De once fotos me quedé con seis.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Se descarta cualquier referencia que confunda a la IA: una foto del frasco viejo, con otra etiqueta y otra forma; una con texto encima, porque la IA copia las letras; y una de baja resolución. La IA mezcla todo lo que le enseñas.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0E111A]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Paso 3 · Los espacios
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                    Dos espacios, generados vacíos: una suite de resort de noche, con la luna sobre el mar, y un baño de travertino con una sola lámpara. Sin modelo y sin frasco, para que la luz sea la misma en todas las piezas.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Los espacios se generan con la proporción elegida en el selector de la herramienta (3:4), no escrita en el prompt. Si el espacio sale horizontal, todo lo que se hace con él también sale horizontal.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0B0D14] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/tatiana-anr/proceso/espacio-e1-suite.png"
                                    alt="Espacio vacío 1: suite de resort de noche con la luna sobre el mar"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0B0D14] shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
                                <Image
                                    src="/casos/tatiana-anr/proceso/espacio-e2-bano.png"
                                    alt="Espacio vacío 2: baño de travertino con una sola lámpara encendida"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                Paso 4 · La integración
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F5F0E6]/85 leading-relaxed font-light">
                                Aquí se juntan la modelo, el espacio, la luz y el frasco real. El packshot salió perfecto a la primera; el resto enseñó cinco reglas.
                            </p>
                        </div>

                        {/* Comparación 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0B0D14] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/tatiana-anr/proceso/lino-v1-dos-goteros.png"
                                        alt="Primer intento del bodegón en lino donde la IA dejó un gotero puesto en el frasco y agregó otro suelto"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6]/75 font-mono">
                                    Primer intento: la IA dejó un gotero puesto y agregó otro suelto.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#D39A4E]/60 bg-[#0B0D14] shadow-[0_25px_65px_rgba(211,154,78,0.18)]">
                                    <Image
                                        src="/casos/tatiana-anr/piezas/05-bodegon-lino.png"
                                        alt="Versión final del bodegón en lino con un solo gotero tras quitar el duplicado con una edición"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6] font-mono">
                                    Versión final: un solo gotero, quitado con una edición.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Comparación 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#F5F0E6]/15 bg-[#0B0D14] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                    <Image
                                        src="/casos/tatiana-anr/proceso/ritual-v1-etiqueta-deforme.png"
                                        alt="Primer intento de la pieza El ritual con el frasco chico a la vista y la etiqueta deforme"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6]/75 font-mono">
                                    Frasco chico a la vista: la etiqueta sale deforme.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#D39A4E]/60 bg-[#0B0D14] shadow-[0_25px_65px_rgba(211,154,78,0.18)]">
                                    <Image
                                        src="/casos/tatiana-anr/piezas/06-el-ritual.png"
                                        alt="Versión final de la pieza El ritual generada sin frasco y con la luz cálida desde atrás"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#F5F0E6] font-mono">
                                    Versión final: generada sin frasco y con la luz desde atrás.
                                </figcaption>
                            </figure>
                        </div>

                        {/* 5 Reglas */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            <MethodBlock title="Regla 1 · La etiqueta">
                                La etiqueta se lee cuando el frasco es grande en la foto. Cuando es chico, la IA inventa letras. Si tiene que ir chico, que lo tape la mano o la sombra.
                            </MethodBlock>
                            <MethodBlock title="Regla 2 · Quitar sí, mover no">
                                Una edición quita un objeto sin problema, como el gotero de más. Pero pedirle que esconda algo detrás de una toalla o que lo meta en la sombra no funciona: lo deja igual.
                            </MethodBlock>
                            <MethodBlock title="Regla 3 · Lo que nombras, aparece">
                                Si no quieres algo en la foto, no lo menciones en el prompt, ni siquiera en el bloque de color. Mientras el prompt decía "el ámbar del frasco brillando", el frasco volvía a aparecer.
                            </MethodBlock>
                            <MethodBlock title="Regla 4 · La luz viene de la lámpara">
                                Si la lámpara está detrás de la modelo, su cara no puede estar iluminada de frente. La luz se describe desde donde está la fuente: borde dorado en la nuca y la oreja, la cara en penumbra suave.
                            </MethodBlock>
                            <div className="lg:col-span-2">
                                <MethodBlock title="Regla 5 · Quien usa el producto sabe">
                                    En la portada, Tatiana carga el frasco con el gotero hacia abajo. Yo quería corregirlo; una usuaria real del serum me dijo que así lo carga todos los días, sin pensarlo. Se quedó así: es justo lo que hace que el gesto se vea real.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0E111A]">
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
                                    Un bloque de color fijo se pega al final de cada prompt, igual que la ficha fija la cara. Las correcciones se hacen en una sola edición por pieza, como máximo dos, porque editar sobre lo editado desgasta la cara. Y el producto se cuida: el serum real es dorado pálido; una versión más cálida lo volvió naranja y se descartó.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-32 border-b border-[#F5F0E6]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#D39A4E]/10 rounded-full blur-[160px]" />
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
                                        className="px-4 py-3 rounded-xl bg-[#13141C] border border-[#D39A4E]/35 text-xs sm:text-sm font-mono text-[#F5F0E6] text-center shadow-lg"
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
                <section className="py-20 sm:py-28 border-b border-[#F5F0E6]/10 bg-[#0E111A]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F5F0E6]">
                                    Ficha técnica
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#D39A4E] rounded-full" />
                            </div>

                            <div className="lg:col-span-8 rounded-2xl border border-[#F5F0E6]/15 bg-[#111420] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-[#F5F0E6]/15 hover:bg-transparent">
                                            <TableHead className="text-[#D39A4E] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Paso
                                            </TableHead>
                                            <TableHead className="text-[#D39A4E] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Qué se hace
                                            </TableHead>
                                            <TableHead className="text-[#D39A4E] font-mono text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
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
                    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D39A4E]/12 rounded-full blur-[160px]" />
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
                            <Card className="p-7 sm:p-9 bg-[#111420]/90 border-[#F5F0E6]/15 text-[#F5F0E6] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
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
                                    Comenta TATIANA en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-[#111420]/90 border-[#F5F0E6]/20 text-[#F5F0E6] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
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
                                    className="w-full h-14 rounded-xl bg-[#F5F0E6] text-[#0B0D14] hover:bg-[#F5F0E6]/90 font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#261D13] via-[#15151E] to-[#0E111A] border-2 border-[#D39A4E] text-[#F5F0E6] rounded-2xl flex flex-col justify-between gap-8 shadow-[0_0_55px_rgba(211,154,78,0.25)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F5F0E6]">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F5F0E6] font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-[#F5F0E6]/90 leading-relaxed font-light">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan y Tatiana.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#D39A4E] hover:bg-[#c0893e] text-[#0B0D14] font-bold text-base shadow-lg shadow-[#D39A4E]/30"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#D39A4E] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#D39A4E]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#D39A4E] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#D39A4E]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#D39A4E] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#D39A4E]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#D39A4E]/15 border border-[#D39A4E]/50 text-sm sm:text-base font-mono text-[#F5F0E6] hover:bg-[#D39A4E]/25 transition-colors shadow-[0_0_20px_rgba(211,154,78,0.2)]"
                            >
                                <span className="px-2.5 py-0.5 rounded-full bg-[#D39A4E] text-[#0B0D14] text-xs font-bold uppercase tracking-wider">
                                    La otra campaña de Tatiana
                                </span>
                                <span>Campaña 005: Tatiana × Clase Azul Reposado</span>
                                <ArrowRight className="w-4 h-4 text-[#D39A4E]" />
                            </Link>
                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#D39A4E] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#D39A4E]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#D39A4E] hover:text-[#F5F0E6] underline underline-offset-4 decoration-[#D39A4E]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#08090E]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#F5F0E6]/50 leading-relaxed text-center">
                            Proyecto conceptual y no comercial. IA Builders Lab no tiene afiliación, patrocinio ni relación comercial con Estée Lauder. Las marcas y productos citados pertenecen a sus dueños y se mencionan solo con fines ilustrativos. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
