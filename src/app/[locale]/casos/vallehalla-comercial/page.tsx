import type { Metadata } from "next";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, ExternalLink } from "lucide-react";
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
        absolute: "Destápalo con los tuyos · Campaña comercial de hidromiel 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña comercial de Vallehalla Hidromiel hecha 100% con IA. Cómo quitar el tono sepia, mostrar el producto a cámara y lograr que la etiqueta se lea bien con el truco del zoom.",
    openGraph: {
        title: "Destápalo con los tuyos · Campaña comercial de hidromiel 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña comercial de Vallehalla Hidromiel hecha 100% con IA. Cómo quitar el tono sepia, mostrar el producto a cámara y lograr que la etiqueta se lea bien con el truco del zoom.",
        images: [
            {
                url: "/casos/vallehalla-comercial/piezas/01-portada-destapalo-con-los-tuyos.png",
                width: 896,
                height: 1200,
                alt: "Destápalo con los tuyos · Ilan y Tatiana × Vallehalla Hidromiel — Portada · Destápalo con los tuyos",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/vallehalla-comercial/piezas/01-portada-destapalo-con-los-tuyos.png",
        caption: "Portada · Destápalo con los tuyos",
        alt: "Portada de la campaña comercial Destápalo con los tuyos: Ilan de camisa blanca y Tatiana de vestido azul cobalto sonriendo a cámara con la botella de Vallehalla Hidromiel en un rooftop con cielo azul",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/02-packshot-frio.png",
        caption: "Packshot · Frío",
        alt: "Packshot comercial de la botella fría de Vallehalla Hidromiel en el rooftop a plena luz de día con su etiqueta dorada legible",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/03-destapando.png",
        caption: "Destapando",
        alt: "Destapando una botella fría de Vallehalla Hidromiel en el rooftop con amigos bajo el cielo azul",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/04-servido.png",
        caption: "Servido",
        alt: "Vallehalla Hidromiel recién servido en vaso en la mesa del rooftop a la luz del día",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/05-ilan-anfitrion.png",
        caption: "Ilan, el anfitrión",
        alt: "Ilan con camisa de lino blanca sonriendo a cámara y mostrando la botella de Vallehalla Hidromiel en el rooftop",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/06-el-grupo.png",
        caption: "El grupo",
        alt: "Grupo de amigos con ropa blanca y azul compartiendo Vallehalla Hidromiel en los sillones blancos del rooftop",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/07-tatiana-a-camara.png",
        caption: "Tatiana a cámara",
        alt: "Tatiana con vestido azul cobalto sonriendo a cámara con Vallehalla Hidromiel en el rooftop",
        width: 768,
        height: 1024,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/08-historia-9x16.png",
        caption: "Historia 9:16",
        alt: "Pieza vertical en formato historia 9:16 de Vallehalla Hidromiel con espacio limpio superior para texto comercial",
        width: 768,
        height: 1376,
    },
    {
        src: "/casos/vallehalla-comercial/piezas/09-cierre-hasta-la-proxima.png",
        caption: "Cierre · Hasta la próxima",
        alt: "Cierre de la campaña comercial en el rooftop en hora azul con los foquitos encendidos y Vallehalla Hidromiel en la mesa",
        width: 896,
        height: 1200,
    },
];

const TECH_SPECS = [
    {
        step: "Concepto",
        action: "Idea en una frase y las 5 reglas del modo comercial",
        tool: "Ninguna, criterio",
    },
    {
        step: "Color",
        action: "Bloque neutro y paleta que contrasta con el producto",
        tool: "Ninguna, criterio",
    },
    {
        step: "Modelos",
        action: "Las mismas fichas y hojas de Ilan y Tatiana",
        tool: "Nano Banana Pro",
    },
    {
        step: "Espacio",
        action: "Un rooftop vacío para día y noche",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelos, espacio y botella real en una imagen",
        tool: "Nano Banana Pro",
    },
    {
        step: "Etiqueta",
        action: "Edición con el nombre entre comillas y truco del zoom",
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
        <div className="border-l-4 border-[#2350D8] bg-[#F5F8FF] p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#2350D8]/25 shadow-[0_15px_35px_rgba(35,80,216,0.07)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#14213D]/90 leading-relaxed font-normal">
                {children}
            </p>
        </div>
    );
}

export default function VallehallaComercialCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#14213D] flex flex-col font-sans selection:bg-[#2350D8]/20 overflow-x-hidden">
            {/* Header sobre barra azul marino para mantener legibilidad de navegación global */}
            <div className="bg-[#14213D] text-white">
                <PublicHeader />
            </div>

            <main className="flex-1">
                {/* 1. Hero Section: El texto va sobre el cielo azul de arriba, sin tapar a Ilan, a Tatiana ni la botella */}
                <section className="relative w-full bg-[#EEF3FC] border-b border-[#14213D]/12 overflow-hidden text-[#14213D]">
                    {/* Full-bleed background image del cielo azul del rooftop */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/vallehalla-comercial/proceso/espacio-e1-rooftop.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-top scale-105 opacity-80"
                        />
                        {/* Velo luminoso con ligero blur sobre el cielo azul de arriba/izquierda donde va el texto */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-white/94 via-[#F4F8FF]/84 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/85 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/65 to-transparent" />
                    </div>

                    {/* Sutileza azul cobalto y Dorado Vallehalla */}
                    <div className="pointer-events-none absolute top-1/4 left-1/4 w-[550px] h-[400px] bg-[#2350D8]/10 rounded-full blur-[150px] z-[1]" />
                    <div className="pointer-events-none absolute bottom-10 right-1/3 w-[380px] h-[280px] bg-[#EDAE08]/12 rounded-full blur-[130px] z-[1]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                            {/* Texto sobre el cielo azul de arriba, sin tapar a Ilan, a Tatiana ni la botella */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6 lg:pt-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2350D8]/12 border border-[#2350D8]/35 text-[#2350D8] text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#EDAE08]" />
                                    <span>Campaña 011 · Caso de estudio · Modo comercial</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#14213D] leading-[1.02]">
                                    Destápalo con los tuyos
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#2350D8]">
                                    Ilan y Tatiana × Vallehalla Hidromiel
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#14213D]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                                    La misma marca del caso de lujo, ahora en modo comercial: un rooftop, amigos, cielo azul y la botella a cámara. Nueve piezas listas para feed e historias, hechas 100% con inteligencia artificial y sin abrir ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: piezas/01-portada-destapalo-con-los-tuyos.png completa en 3:4 */}
                            <div className="lg:col-span-5 relative z-10 mt-2 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(20,33,61,0.2)] border-2 border-white bg-[#EEF3FC]">
                                    <Image
                                        src="/casos/vallehalla-comercial/piezas/01-portada-destapalo-con-los-tuyos.png"
                                        alt="Ilan de camisa blanca y Tatiana de vestido azul cobalto sonriendo a cámara y mostrando la botella de Vallehalla Hidromiel en un rooftop soleado"
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
                                "Producto: Vallehalla Hidromiel",
                                "Piezas finales: 9",
                                "Formatos: feed 3:4 e historia 9:16",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: campaña comercial de marca propia",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-white border border-[#2350D8]/25 backdrop-blur-xl text-xs sm:text-sm text-[#14213D] font-mono font-medium text-center flex items-center justify-center shadow-md"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#14213D]/10 bg-[#F7F9FC]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#14213D]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#2350D8] to-[#EDAE08] rounded-full" />
                            </div>
                            <div className="lg:col-span-8 space-y-8">
                                <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques azules va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                                <MethodBlock>
                                    Los bloques con borde izquierdo azul cobalto explican el método y la regla de cada etapa del proceso.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 bg-[#2350D8]/8 rounded-full blur-[130px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="max-w-4xl mb-10">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block mb-3">
                                El concepto
                            </span>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14213D] leading-[1.08]">
                                &ldquo;Lujo es que te miren. Comercial es que te inviten.&rdquo;
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5">
                                <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal">
                                    En &ldquo;La mesa larga&rdquo; nadie le presentaba la botella a la cámara: se servía, se brindaba, y la foto se sentía como espiar una cena. Aquí es al revés. Es una tarde en un rooftop con amigos, la gente sonríe a cámara, la botella se enseña de frente y cada foto deja espacio limpio para poner un texto o un precio encima.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock title="Las 5 reglas del modo comercial">
                                    1. La botella se muestra a cámara, con la etiqueta de frente. 2. Las personas miran a cámara y sonríen. 3. Cada pieza deja un espacio vacío para texto, y el prompt dice dónde. 4. Luz de día y color neutro, sin filtro. 5. Formatos de redes: 3:4 para feed y 9:16 para historias.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · El problema del sepia */}
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10 bg-[#F7F9FC]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block">
                                Paso 1
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14213D]">
                                Paso 1 · El problema del sepia
                            </h2>
                            <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal pt-2">
                                Las primeras imágenes salieron todas amarillentas, como foto vieja. No era la herramienta. Era el prompt: el bloque de color decía &ldquo;golden hour&rdquo;, &ldquo;warm&rdquo;, &ldquo;amber&rdquo;; la ropa era terracota y beige; los cojines, mostaza; y el producto, dorado. Cuando todo en la foto es cálido, la IA lo lleva todo al mismo tono.
                            </p>
                        </div>

                        {/* Comparación 1: Espacio sepia vs neutro */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/vallehalla-comercial/proceso/sepia-espacio.png",
                                    caption: "Antes: todo cálido, todo sepia.",
                                    alt: "Primera versión del espacio en el rooftop con tono sepia y amarillento por exceso de elementos cálidos en el prompt",
                                },
                                {
                                    src: "/casos/vallehalla-comercial/proceso/espacio-e1-rooftop.png",
                                    caption: "Después: luz de día, color neutro.",
                                    alt: "Espacio del rooftop corregido con luz de día neutra, sillones blancos y cojines de rayas azul marino",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        {/* Comparación 2: Portada sepia vs blanco y cobalto */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/vallehalla-comercial/proceso/sepia-portada.png",
                                    caption: "La portada con la paleta cálida.",
                                    alt: "Versión descartada de la portada con ropa cálida y tono sepia donde la botella dorada se pierde",
                                },
                                {
                                    src: "/casos/vallehalla-comercial/piezas/01-portada-destapalo-con-los-tuyos.png",
                                    caption: "Camisa blanca, vestido cobalto: el dorado de la botella resalta.",
                                    alt: "Portada final con camisa blanca, vestido azul cobalto y cielo azul haciendo resaltar el dorado de la botella de Vallehalla Hidromiel",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <MethodBlock title="Regla · El color se escribe neutro y la paleta contrasta">
                                El bloque de color pide balance de blancos de luz de día, colores reales, blancos limpios y dice &ldquo;sin sepia, sin filtro vintage&rdquo;. Y la ropa y el set van en colores que contrastan con el producto: si el producto es dorado, la escena es blanca y azul. Para arreglar una foto vieja basta una edición: &ldquo;neutraliza el color a luz de día y quita el tono naranja, sin cambiar nada más&rdquo;.
                            </MethodBlock>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Los modelos */}
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block">
                                    Paso 2
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14213D]">
                                    Paso 2 · Los modelos
                                </h2>
                                <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal pt-2">
                                    Ilan y Tatiana repiten de la campaña de lujo, pero aquí no posan para una cena de otoño: llegan a una reunión de amigos. Él de camisa de lino blanca y chinos azul marino; ella con un vestido azul cobalto.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Las mismas fichas y hojas de identidad de siempre, adjuntas antes que la botella y el espacio. En la portada, la primera versión hizo a Ilan más delgado y con más pelo. No se corrige con una edición, porque una edición no cambia la complexión: se vuelve a generar adjuntando primero sus hojas.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/vallehalla-comercial/proceso/portada-v1-etiqueta-ilegible.png",
                                    caption: "Primera versión: Ilan no se parece y la etiqueta no se lee.",
                                    alt: "Primera versión descartada de la portada donde Ilan salió más delgado y con más pelo y la etiqueta no se leía",
                                },
                                {
                                    src: "/casos/vallehalla-comercial/piezas/01-portada-destapalo-con-los-tuyos.png",
                                    caption: "Versión final.",
                                    alt: "Versión final de la portada con las identidades exactas de Ilan y Tatiana y la etiqueta de Vallehalla legible",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-[#2350D8]/35 bg-[#F5F8FF] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                            <p className="text-base sm:text-lg text-[#14213D] font-medium leading-relaxed">
                                La guía gratuita explica cómo crear la ficha y las hojas de tu personaje. Comenta{" "}
                                <span className="font-mono font-bold text-[#2350D8] px-2 py-0.5 rounded bg-[#2350D8]/12 border border-[#2350D8]/35">
                                    HIDROMIEL
                                </span>{" "}
                                en el reel de la campaña y te llega por mensaje.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · El espacio */}
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10 bg-[#F7F9FC]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-6 space-y-8">
                                <div className="space-y-4">
                                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block">
                                        Paso 3
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14213D]">
                                        Paso 3 · El espacio
                                    </h2>
                                    <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal pt-2">
                                        Un solo espacio para toda la campaña: un rooftop con barandal de vidrio, sillones blancos con cojines de rayas azul marino, olivos en macetas de barro y foquitos colgados. Se generó vacío, sin personas ni botellas, y se usó en las nueve piezas, de día y de noche.
                                    </p>
                                </div>

                                <MethodBlock>
                                    Lo que nombras, aparece: el prompt del espacio no menciona la botella ni a nadie. Si lo nombras, la IA lo pone. Y la noche no es otro espacio: es el mismo rooftop con otro bloque de color, el de hora azul.
                                </MethodBlock>
                            </div>

                            <div className="lg:col-span-6">
                                <figure className="flex flex-col max-w-lg mx-auto">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                        <Image
                                            src="/casos/vallehalla-comercial/proceso/espacio-e1-rooftop.png"
                                            alt="Espacio vacío del rooftop con sillones blancos, cojines de rayas azul marino, olivos en macetas de barro y foquitos colgados"
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 1024px) 100vw, 512px"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                        El espacio, vacío. Todas las piezas pasan por aquí.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block">
                                    Paso 4
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14213D]">
                                    Paso 4 · La integración
                                </h2>
                                <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal pt-2">
                                    Aquí se juntan los modelos, el espacio y la botella real. En modo comercial la regla de oro es la misma de siempre: revisar toda la foto, no solo la etiqueta.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock title="Lo que se descartó">
                                    Una historia con la mejor etiqueta de la campaña, pero con una invitada tomando vino tinto: en un anuncio de hidromiel no puede salir otra bebida. Y una foto de grupo con playeras negras y grises que rompían la paleta blanca y azul.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                    <Image
                                        src="/casos/vallehalla-comercial/proceso/historia-descartada-copa-de-vino.png"
                                        alt="Historia 9:16 descartada porque una invitada al fondo sostenía una copa de vino tinto"
                                        width={768}
                                        height={1376}
                                        sizes="(max-width: 640px) 100vw, 45vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                    La bebida equivocada.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                    <Image
                                        src="/casos/vallehalla-comercial/proceso/grupo-descartado-playeras-oscuras.png"
                                        alt="Foto de grupo descartada donde los invitados llevaban playeras negras y grises fuera de la paleta blanca y azul"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 45vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                    Fuera de la paleta.
                                </figcaption>
                            </figure>
                        </div>

                        <div className="max-w-4xl">
                            <MethodBlock title="Alcohol con responsabilidad">
                                Personas que se ven claramente adultas, nada de exceso, vasos con poco y siempre en grupo. Es una marca real que se vende a mayores de edad, y la campaña lo respeta.
                            </MethodBlock>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · La etiqueta y el truco del zoom */}
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10 bg-[#F7F9FC]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7 space-y-8">
                                <div className="space-y-4">
                                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block">
                                        Paso 5
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14213D]">
                                        Paso 5 · La etiqueta y el truco del zoom
                                    </h2>
                                    <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal pt-2">
                                        El nombre de la marca tiene que leerse bien. En las fotos donde la botella sale chica, la IA escribía &ldquo;VALLHALL&rdquo;, &ldquo;VALLEHALA&rdquo; o &ldquo;VALLEFIALA&rdquo; aunque le adjuntara la etiqueta real. La razón: cuando la botella es chica, su nombre se vuelve letra chica, y la letra chica es justo lo que ninguna IA escribe bien.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <MethodBlock title="Regla 1 · Lo grande entre comillas">
                                        La primera edición no escribía el nombre en el prompt y la IA copiaba la etiqueta &ldquo;a ojo&rdquo;. Ahora el prompt dice exactamente qué debe leerse: &ldquo;VALLEHALLA&rdquo; y debajo &ldquo;HIDROMIEL&rdquo;, letra por letra.
                                    </MethodBlock>
                                    <MethodBlock title="Regla 2 · Si es chico, agrándalo">
                                        Se recorta solo la zona de la botella y se amplía hasta que ocupa casi todo el cuadro. Ahí la IA edita la etiqueta con letra grande y la escribe bien. Después ese recorte se devuelve a la foto original con los bordes difuminados. La etiqueta la sigue haciendo la IA; lo único que cambia es el tamaño al que trabaja.
                                    </MethodBlock>
                                </div>
                            </div>

                            <div className="lg:col-span-5">
                                <figure className="flex flex-col max-w-sm mx-auto">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                        <Image
                                            src="/casos/vallehalla-comercial/proceso/cierre-etiqueta-vallefiala.png"
                                            alt="Pieza descartada donde la botella pequeña tenía escrito VALLEFIALA en la etiqueta"
                                            width={768}
                                            height={1376}
                                            sizes="(max-width: 1024px) 100vw, 384px"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                        Botella chica, letras inventadas.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        {/* Secuencia de 3 + resultado de vuelta en la foto */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-start">
                            {[
                                {
                                    src: "/casos/vallehalla-comercial/proceso/packshot-etiqueta-sin-zoom.png",
                                    caption: 'Editada a tamaño normal: "VALLHALL".',
                                    alt: "Packshot editado a tamaño normal donde la etiqueta decía VALLHALL sin la A final",
                                    width: 896,
                                    height: 1200,
                                },
                                {
                                    src: "/casos/vallehalla-comercial/proceso/zoom-packshot-antes.png",
                                    caption: "El recorte ampliado.",
                                    alt: "Recorte cuadrado ampliado de la zona de la botella para editar la etiqueta a mayor tamaño",
                                    width: 1200,
                                    height: 1200,
                                },
                                {
                                    src: "/casos/vallehalla-comercial/proceso/zoom-packshot-despues.png",
                                    caption: "Editada en grande: se lee bien.",
                                    alt: "Recorte ampliado después de la edición donde VALLEHALLA HIDROMIEL se lee con claridad",
                                    width: 896,
                                    height: 1200,
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#14213D]/15 bg-white shadow-[0_18px_45px_rgba(20,33,61,0.08)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={item.width}
                                            height={item.height}
                                            sizes="(max-width: 640px) 100vw, 33vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <figure className="flex flex-col max-w-md mx-auto pt-2">
                            <div className="relative w-full overflow-hidden rounded-2xl border-2 border-[#2350D8]/35 bg-white shadow-[0_20px_50px_rgba(35,80,216,0.12)]">
                                <Image
                                    src="/casos/vallehalla-comercial/piezas/02-packshot-frio.png"
                                    alt="Packshot final con el recorte integrado de vuelta en la foto original y la etiqueta de Vallehalla Hidromiel nítida"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 448px"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <figcaption className="mt-3 text-xs sm:text-sm text-[#14213D] font-mono font-semibold text-center">
                                De vuelta en la foto.
                            </figcaption>
                        </figure>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block">
                                    El resultado
                                </span>
                                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14213D]">
                                    Nueve piezas
                                </h2>
                            </div>

                            {/* Cifras en fila */}
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {[
                                    "9 piezas finales",
                                    "2 modelos virtuales",
                                    "1 espacio",
                                    "0 programas de edición",
                                ].map((stat) => (
                                    <span
                                        key={stat}
                                        className="px-4 py-2 rounded-full bg-[#F5F8FF] border border-[#2350D8]/35 text-xs sm:text-sm font-mono font-medium text-[#14213D] shadow-sm"
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
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10 bg-[#F7F9FC]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-10">
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#2350D8] font-bold block">
                                Síntesis del flujo
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#14213D]">
                                Ficha técnica
                            </h2>
                        </div>

                        <div className="rounded-2xl border border-[#14213D]/15 bg-white overflow-hidden shadow-[0_18px_45px_rgba(20,33,61,0.06)]">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b border-[#14213D]/15 bg-[#2350D8]/10 hover:bg-[#2350D8]/10">
                                        <TableHead className="text-[#2350D8] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Paso
                                        </TableHead>
                                        <TableHead className="text-[#2350D8] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Qué se hace
                                        </TableHead>
                                        <TableHead className="text-[#2350D8] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Herramienta
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {TECH_SPECS.map((row) => (
                                        <TableRow
                                            key={row.step}
                                            className="border-b border-[#14213D]/10 hover:bg-[#2350D8]/[0.04]"
                                        >
                                            <TableCell className="font-mono font-bold text-[#14213D] py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.step}
                                            </TableCell>
                                            <TableCell className="text-[#14213D]/85 py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.action}
                                            </TableCell>
                                            <TableCell className="font-mono font-medium text-[#2350D8] py-4 px-4 sm:px-6 whitespace-normal">
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
                <section className="py-20 sm:py-28 border-b border-[#14213D]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute right-1/4 bottom-0 w-[500px] h-[350px] bg-[#2350D8]/10 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14213D] leading-[1.08]">
                                Ahora hazlo con tu marca
                            </h2>
                            <p className="text-lg sm:text-xl text-[#14213D]/85 leading-relaxed font-normal">
                                No todas las marcas son de lujo, y no todos los anuncios tienen que serlo. El mismo método sirve para el anuncio de todos los días: personajes que no cambian de cara, tu producto igual al de verdad y fotos listas para poner tu texto encima.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-white border border-[#14213D]/15 text-[#14213D] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#14213D]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#2350D8] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#14213D]/80 leading-relaxed font-normal">
                                        La ficha de identidad y las hojas de referencia para tu personaje.
                                    </p>
                                </div>
                                <div
                                    role="note"
                                    className="w-full py-3.5 px-4 rounded-xl bg-[#F5F8FF] border border-[#2350D8]/25 text-center text-sm sm:text-base font-mono font-semibold text-[#14213D] select-all"
                                >
                                    Comenta HIDROMIEL en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-white border border-[#14213D]/20 text-[#14213D] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#14213D]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#14213D] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#14213D]/80 leading-relaxed font-normal">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#14213D] hover:bg-[#14213D]/90 text-white font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#2350D8] via-[#1B3FB0] to-[#14213D] border-2 border-[#EDAE08] text-white rounded-2xl flex flex-col justify-between gap-8 shadow-[0_20px_55px_rgba(35,80,216,0.3)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#EDAE08] font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-white/95 leading-relaxed font-normal">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan, Tatiana, Larisa y Laura.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#EDAE08] hover:bg-[#d89e06] text-[#14213D] font-bold text-base shadow-lg"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        {/* Enlaces pequeños a los casos anteriores (001 a 010), con el caso de lujo destacado + Conoce Vallehalla */}
                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/vallehalla-hidromiel"
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#14213D] border border-[#EDAE08] text-sm sm:text-base font-mono font-medium text-white hover:bg-[#14213D]/90 transition-colors shadow-md"
                            >
                                <span className="px-2.5 py-0.5 rounded-full bg-[#EDAE08] text-[#14213D] text-xs font-bold uppercase tracking-wider">
                                    Campaña 008
                                </span>
                                <span>Ve la versión de lujo: La mesa larga</span>
                                <ArrowRight className="w-4 h-4 text-[#EDAE08]" />
                            </Link>

                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-bottega"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 009: Larisa × Bottega Veneta</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/laura-invitto"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#2350D8] hover:text-[#14213D] underline underline-offset-4 decoration-[#2350D8]/50 transition-colors"
                            >
                                <span>Campaña 010: Laura × Invitto</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <a
                                href="https://vallehalla.com.mx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2350D8]/10 border border-[#2350D8]/40 text-sm sm:text-base font-mono font-semibold text-[#14213D] hover:bg-[#2350D8]/20 transition-colors shadow-sm"
                            >
                                <span>Conoce Vallehalla</span>
                                <ExternalLink className="w-4 h-4 text-[#2350D8]" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#EFF3F9]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#14213D]/65 leading-relaxed text-center">
                            Vallehalla Hidromiel es una marca de Valle de Santiago, Guanajuato. Las personas de las imágenes no existen: son personajes generados con inteligencia artificial. Contenido para mayores de 18 años. El abuso en el consumo de este producto puede ser nocivo para la salud.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
