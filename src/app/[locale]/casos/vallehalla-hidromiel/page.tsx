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
        absolute: "La mesa larga · Campaña de hidromiel 100% IA con una marca real | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa de Vallehalla Hidromiel hecha 100% con IA, con dos modelos virtuales en la misma foto y la etiqueta real sin letras inventadas. El método paso a paso.",
    openGraph: {
        title: "La mesa larga · Campaña de hidromiel 100% IA con una marca real | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa de Vallehalla Hidromiel hecha 100% con IA, con dos modelos virtuales en la misma foto y la etiqueta real sin letras inventadas. El método paso a paso.",
        images: [
            {
                url: "/casos/vallehalla-hidromiel/piezas/01-portada-la-mesa-larga.png",
                width: 896,
                height: 1200,
                alt: "La mesa larga · Ilan y Tatiana × Vallehalla Hidromiel — Portada · La mesa larga",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/vallehalla-hidromiel/piezas/01-portada-la-mesa-larga.png",
        caption: "Portada · La mesa larga",
        alt: "Portada de la campaña La mesa larga: Ilan sirviendo una botella real de Vallehalla Hidromiel en la copa de Tatiana en una mesa larga de madera iluminada con velas dentro de una casona de piedra",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/02-packshot-la-bebida-de-los-dioses.png",
        caption: "Packshot · La bebida de los dioses",
        alt: "Packshot de la botella real de Vallehalla Hidromiel con su etiqueta dorada legible sobre mesa de madera rústica a la luz de las velas",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/03-el-panal.png",
        caption: "El panal",
        alt: "Bodegón de Vallehalla Hidromiel junto a un panal de miel natural y pan artesanal en la mesa larga de madera",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/04-el-brindis.png",
        caption: "El brindis",
        alt: "Brindis con copas de cata de Vallehalla Hidromiel en la cena de otoño iluminada con velas",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/05-bodegon-la-bodega.png",
        caption: "Bodegón · La bodega",
        alt: "Bodegón de botellas de Vallehalla Hidromiel en la bodega abovedada de piedra con barricas de madera y luz cálida de farol",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/06-ilan-en-la-bodega.png",
        caption: "Ilan en la bodega",
        alt: "Ilan escogiendo una botella de Vallehalla Hidromiel en la bodega abovedada de piedra junto a las barricas",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/07-tatiana.png",
        caption: "Tatiana",
        alt: "Retrato de Tatiana en la cena de otoño sosteniendo una copa de cata con Vallehalla Hidromiel a la luz de las velas",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/08-la-sobremesa.png",
        caption: "La sobremesa",
        alt: "Ilan y Tatiana conversando durante la sobremesa en la mesa larga de madera con Vallehalla Hidromiel y velas encendidas",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/vallehalla-hidromiel/piezas/09-cierre-entre-los-tuyos.png",
        caption: "Cierre · Entre los tuyos",
        alt: "Cierre de la campaña: la mesa de madera después de la cena con la corcholata en la mesa y las copas con un último trago de Vallehalla Hidromiel",
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
        step: "Etiqueta",
        action: "Fotos reales, archivo original y proporción escrita",
        tool: "Ninguna, criterio",
    },
    {
        step: "Modelos",
        action: "Las mismas fichas y hojas de Ilan y Tatiana",
        tool: "Nano Banana Pro",
    },
    {
        step: "Espacios",
        action: "Salón de velas y bodega, vacíos y en 3:4",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelos, espacio, luz y botella real en una imagen",
        tool: "Nano Banana Pro",
    },
    {
        step: "Correcciones",
        action: "Color en el prompt, ediciones y regeneraciones",
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
        <div className="border-l-4 border-[#EDAE08] bg-[#1A1610]/95 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#EDAE08]/25 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#EDAE08] font-semibold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#F2ECE0]/90 leading-relaxed font-light">
                {children}
            </p>
        </div>
    );
}

export default function VallehallaHidromielCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#12100C] text-[#F2ECE0] flex flex-col font-sans selection:bg-[#EDAE08]/35 overflow-x-hidden">
            <PublicHeader />

            <main className="flex-1">
                {/* 1. Hero Section: El texto va sobre el muro de piedra de arriba a la derecha, sin tapar a Ilan, a Tatiana ni la botella */}
                <section className="relative w-full bg-[#12100C] border-b border-[#F2ECE0]/10 overflow-hidden">
                    {/* Full-bleed background del muro de piedra del salón */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/vallehalla-hidromiel/proceso/espacio-e1-mesa-larga.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-top scale-105 opacity-60"
                        />
                        {/* Blur ligero sobre el muro de piedra de la derecha donde va el texto */}
                        <div className="absolute inset-y-0 right-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-l from-[#12100C]/90 via-[#12100C]/70 to-transparent" />
                        {/* Vignette superior e inferior */}
                        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#12100C] via-[#12100C]/45 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#12100C] via-[#12100C]/75 to-transparent" />
                    </div>

                    {/* Ambient Vallehalla Gold Glow */}
                    <div className="pointer-events-none absolute top-1/4 right-1/4 w-[650px] h-[450px] bg-[#EDAE08]/12 rounded-full blur-[160px] z-[1]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                            {/* Texto sobre el muro de piedra de arriba a la derecha en desktop (arriba en móvil) */}
                            <div className="lg:col-span-7 lg:order-2 relative z-20 text-center lg:text-left lg:pl-4 lg:pt-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDAE08]/15 border border-[#EDAE08]/50 text-[#F2ECE0] text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-[0_0_25px_rgba(237,174,8,0.2)]">
                                    <span>Campaña 008 · Caso de estudio · Marca real</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F2ECE0] leading-[1.02] drop-shadow-[0_4px_28px_rgba(0,0,0,0.95)]">
                                    La mesa larga
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#EDAE08] drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
                                    Ilan y Tatiana × Vallehalla Hidromiel
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F2ECE0]/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                                    Una campaña completa para un hidromiel artesanal real, hecha 100% con inteligencia artificial. Nueve piezas, dos modelos que no existen, una botella que sí, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal a la izquierda en desktop sin tapar a Ilan, a Tatiana ni la botella: piezas/01-portada-la-mesa-larga.png */}
                            <div className="lg:col-span-5 lg:order-1 relative z-10 -mt-2 sm:-mt-6 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-[#F2ECE0]/20 bg-[#12100C]">
                                    <Image
                                        src="/casos/vallehalla-hidromiel/piezas/01-portada-la-mesa-larga.png"
                                        alt="Ilan sirviendo una botella real de Vallehalla Hidromiel en la copa de Tatiana en una mesa larga de madera iluminada con velas dentro de una casona de piedra"
                                        fill
                                        priority
                                        sizes="(max-width: 1024px) 100vw, 560px"
                                        className="object-contain object-bottom"
                                    />
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#12100C]/75 to-transparent" />
                                </div>
                            </div>
                        </div>

                        {/* Ficha en una fila a todo el ancho (max-w-7xl) */}
                        <div className="relative z-20 mt-6 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 w-full">
                            {[
                                "Producto: Vallehalla Hidromiel",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: campaña de marca propia",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-[#1A1610]/90 border border-[#EDAE08]/30 backdrop-blur-xl text-xs sm:text-sm text-[#F2ECE0]/95 font-mono text-center flex items-center justify-center shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#F2ECE0]/10 bg-[#16130E]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F2ECE0]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#EDAE08] rounded-full" />
                            </div>
                            <div className="lg:col-span-8 space-y-8">
                                <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques dorados va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                                <MethodBlock>
                                    Los bloques con borde izquierdo dorado explican el método y la regla de cada etapa del proceso.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 bg-[#EDAE08]/10 rounded-full blur-[130px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="max-w-3xl mb-10">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block mb-3">
                                El concepto
                            </span>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2ECE0] leading-[1.08]">
                                &ldquo;La bebida de los dioses se sirve entre los tuyos.&rdquo;
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5">
                                <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light">
                                    El hidromiel es la bebida fermentada más antigua del mundo: miel, agua y tiempo. Vallehalla lo hace a mano en Valle de Santiago, Guanajuato. La campaña es una cena de otoño en una casona de piedra: una mesa larga, velas, pan, un panal y el hidromiel al centro. Lo vikingo está en el material, la madera, la piedra y el hierro, nunca en el disfraz.
                                </p>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase decide qué se queda: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>
                                <MethodBlock title="La regla del lujo">
                                    Nadie presenta la botella a la cámara: se sirve, se brinda, se escoge en la bodega. La última pieza no tiene a nadie: la corcholata en la mesa y las copas con un último trago. La noche ya se fue.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La etiqueta, el verdadero reto */}
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10 bg-[#16130E]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block">
                                    Paso 1
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2ECE0]">
                                    Paso 1 · La etiqueta, el verdadero reto
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light pt-2">
                                    Cuando la marca es tuya, la etiqueta tiene que salir bien. Antes de esta campaña, las imágenes de Vallehalla hechas con IA salían con letras inventadas: &ldquo;Miel de Albeja&rdquo;, &ldquo;La bebida de los Diosis&rdquo;, &ldquo;232 ML&rdquo;. El problema no era la herramienta; eran las referencias.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <figure className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#F2ECE0]/15 bg-[#12100C] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                        <Image
                                            src="/casos/vallehalla-hidromiel/proceso/referencia-generada-con-ia-letras-inventadas.png"
                                            alt="Imagen anterior generada con IA usada como referencia donde aparecen letras inventadas en la etiqueta"
                                            width={1280}
                                            height={716}
                                            sizes="(max-width: 1024px) 100vw, 58vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#F2ECE0]/80 font-mono">
                                        Antes: una imagen generada con IA usada como referencia. Cada copia suma errores.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            <MethodBlock title="Regla 1 · Solo fotos reales">
                                Usar una imagen generada como referencia es sacar copia de una copia: los errores se heredan y se multiplican. Para esta campaña se usaron solo fotos reales de la botella y el archivo original de la etiqueta.
                            </MethodBlock>
                            <MethodBlock title="Regla 2 · La IA copia la forma de lo que le adjuntas">
                                La etiqueta plana es un rectángulo horizontal. La primera vez que se adjuntó para generar, la IA hizo la etiqueta así de ancha y estiró la botella hasta volverla chata y gigante. Desde entonces la etiqueta plana no se adjunta para generar: solo fotos de la botella real, y la ficha describe la proporción (cuatro veces más alta que ancha, el cuello es el 40% de la altura).
                            </MethodBlock>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/vallehalla-hidromiel/proceso/packshot-v1-botella-chata.png",
                                    caption: "Con la etiqueta plana adjunta: botella chata y gigante.",
                                    alt: "Primera versión descartada del packshot con la etiqueta plana adjunta donde la botella salió chata y gigante",
                                },
                                {
                                    src: "/casos/vallehalla-hidromiel/piezas/02-packshot-la-bebida-de-los-dioses.png",
                                    caption: "Solo con fotos reales y la proporción escrita.",
                                    alt: "Packshot final de Vallehalla Hidromiel generado solo con fotos reales de la botella y la proporción escrita",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#F2ECE0]/15 bg-[#12100C] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#F2ECE0]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
                            <div className="lg:col-span-5">
                                <MethodBlock title="Regla 3 · Lo grande entre comillas, lo chico nunca">
                                    &ldquo;VALLEHALLA&rdquo;, &ldquo;HIDROMIEL&rdquo; y &ldquo;LA BEBIDA DE LOS DIOSES&rdquo; se escriben tal cual en el prompt. La letra chica (ingredientes, contenido, leyendas) no se escribe: ninguna IA la saca bien a ese tamaño, así que se esconde con el encuadre o con desenfoque.
                                </MethodBlock>
                            </div>
                            <div className="lg:col-span-7">
                                <figure className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#F2ECE0]/15 bg-[#12100C] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                        <Image
                                            src="/casos/vallehalla-hidromiel/proceso/etiqueta-completa-del-pdf.jpg"
                                            alt="Archivo original completo de la etiqueta de Vallehalla Hidromiel exportado del PDF"
                                            width={2400}
                                            height={1200}
                                            sizes="(max-width: 1024px) 100vw, 58vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#F2ECE0]/80 font-mono">
                                        El archivo real de la etiqueta. Se recortó solo el frente: los costados traen lote, código y leyendas que la IA metería al frente.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Los modelos */}
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block">
                                    Paso 2
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2ECE0]">
                                    Paso 2 · Los modelos
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light pt-2">
                                    Ilan y Tatiana ya habían protagonizado sus propias campañas. Aquí comparten mesa por primera vez: dos identidades fijas en la misma foto.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Con dos personas, la IA reparte la atención entre muchas referencias y las identidades se debilitan. El orden de lo que se adjunta importa: primero las hojas de él, luego la de ella, después la botella y al final el espacio. Y el cuerpo de Ilan se describe por lo que se ve (&ldquo;el suéter estirado en los hombros y el pecho, más grande que todos en la mesa&rdquo;), no por un número.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/vallehalla-hidromiel/proceso/portada-v1-ilan-delgado.png",
                                    caption: "Primera versión: Ilan salió delgado y los invitados con cara.",
                                    alt: "Primera versión descartada de la portada donde Ilan salió delgado y los invitados tenían rostros visibles",
                                },
                                {
                                    src: "/casos/vallehalla-hidromiel/piezas/01-portada-la-mesa-larga.png",
                                    caption: "Versión final.",
                                    alt: "Versión final de la portada con Ilan corpulento sirviendo Vallehalla Hidromiel a Tatiana",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#F2ECE0]/15 bg-[#16130E] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#F2ECE0]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-[#EDAE08]/40 bg-gradient-to-r from-[#EDAE08]/15 via-[#1A1610] to-[#16130E] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_10px_35px_rgba(237,174,8,0.12)]">
                            <p className="text-base sm:text-lg text-[#F2ECE0] font-medium leading-relaxed">
                                La guía gratuita explica cómo crear la ficha y las hojas de tu personaje. Comenta{" "}
                                <span className="font-mono font-bold text-[#EDAE08] px-2 py-0.5 rounded bg-[#EDAE08]/15 border border-[#EDAE08]/40">
                                    HIDROMIEL
                                </span>{" "}
                                en el reel de la campaña y te llega por mensaje.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10 bg-[#16130E]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block">
                                Paso 3
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2ECE0]">
                                Paso 3 · Los espacios
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light pt-2">
                                Dos espacios, generados vacíos y en 3:4: un salón de piedra con una mesa larga de madera vieja, iluminado solo con velas, y una bodega abovedada con barricas y un farol.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                {
                                    src: "/casos/vallehalla-hidromiel/proceso/espacio-e1-mesa-larga.png",
                                    alt: "Espacio vacío E1: salón de piedra con mesa larga de madera vieja iluminado solo con velas",
                                },
                                {
                                    src: "/casos/vallehalla-hidromiel/proceso/espacio-e2-bodega.png",
                                    alt: "Espacio vacío E2: bodega abovedada de piedra con barricas de madera y un farol encendido",
                                },
                            ].map((img) => (
                                <div
                                    key={img.src}
                                    className="relative w-full overflow-hidden rounded-2xl border border-[#F2ECE0]/15 bg-[#12100C] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
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
                                <MethodBlock>
                                    La luz del espacio tiene que cuadrar con la escena. En el salón descartado el techo se veía iluminado como de día, y esa noche de velas no iba a ser creíble con personas abajo.
                                </MethodBlock>
                            </div>
                            <div className="lg:col-span-5">
                                <figure className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#F2ECE0]/15 bg-[#12100C] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                        <Image
                                            src="/casos/vallehalla-hidromiel/proceso/e1-descartado-techo-de-dia.png"
                                            alt="Espacio descartado donde el techo de vigas se veía iluminado con luz de día en una cena de noche"
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#F2ECE0]/80 font-mono">
                                        Descartado: luz de día en una cena de noche.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block">
                                    Paso 4
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2ECE0]">
                                    Paso 4 · La integración
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light pt-2">
                                    Aquí se juntan los modelos, el espacio, la luz y la botella real. La regla de oro de esta campaña: revisar toda la foto, no solo la etiqueta.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock title="Lo que se descartó">
                                    Una segunda botella acostada junto al panal (se lee como exceso). Copas de vino en vez de copas de cata. Cuatro botellas y una fuera de la caja en la bodega. Cada una estaba bien generada, pero contaba otra historia.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                            {[
                                {
                                    src: "/casos/vallehalla-hidromiel/proceso/panal-descartado-botella-acostada.png",
                                    caption: "Una botella de más.",
                                    alt: "Imagen descartada del panal con una segunda botella acostada en la mesa",
                                },
                                {
                                    src: "/casos/vallehalla-hidromiel/proceso/brindis-descartado-copa-de-vino.png",
                                    caption: "La copa equivocada.",
                                    alt: "Imagen descartada del brindis con copas de vino grandes en lugar de copas de cata",
                                },
                                {
                                    src: "/casos/vallehalla-hidromiel/proceso/bodega-descartada-cuatro-botellas.png",
                                    caption: "Una botella fuera de lugar.",
                                    alt: "Imagen descartada de la bodega con cuatro botellas y una fuera de la caja de madera",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#F2ECE0]/15 bg-[#16130E] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 33vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#F2ECE0]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="max-w-4xl">
                            <MethodBlock title="Alcohol con responsabilidad">
                                Personas que se ven claramente adultas, nada de exceso, copas con poco y siempre en mesa compartida. Es una marca real que se vende a mayores de edad, y la campaña lo respeta.
                            </MethodBlock>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10 bg-[#16130E]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block">
                                    Paso 5
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2ECE0]">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light pt-2">
                                    En una producción normal, la IA entrega material en bruto y el acabado se hace en Photoshop. Aquí no se abrió ningún programa. El color se escribe dentro del prompt y lo que falla se corrige con lenguaje normal o se vuelve a generar.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Dos bloques de color fijos, uno de velas y uno de bodega. Y una edición lista por si la etiqueta sale chueca: &ldquo;reemplaza solo la etiqueta por la del archivo, siguiendo la curva de la botella&rdquo;. Funciona porque la botella ya tiene su forma: la edición solo cambia el papel.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block">
                                    El resultado
                                </span>
                                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2ECE0]">
                                    Nueve piezas
                                </h2>
                            </div>

                            {/* Cifras en fila */}
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {[
                                    "9 piezas finales",
                                    "2 modelos virtuales",
                                    "1 botella real",
                                    "0 programas de edición",
                                ].map((stat) => (
                                    <span
                                        key={stat}
                                        className="px-4 py-2 rounded-full bg-[#1A1610] border border-[#EDAE08]/35 text-xs sm:text-sm font-mono text-[#F2ECE0]"
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
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10 bg-[#16130E]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-10">
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#EDAE08] block">
                                Síntesis del flujo
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2ECE0]">
                                Ficha técnica
                            </h2>
                        </div>

                        <div className="rounded-2xl border border-[#F2ECE0]/15 bg-[#12100C] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b border-[#F2ECE0]/15 bg-[#1A1610] hover:bg-[#1A1610]">
                                        <TableHead className="text-[#EDAE08] font-mono uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Paso
                                        </TableHead>
                                        <TableHead className="text-[#EDAE08] font-mono uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Qué se hace
                                        </TableHead>
                                        <TableHead className="text-[#EDAE08] font-mono uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Herramienta
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {TECH_SPECS.map((row) => (
                                        <TableRow
                                            key={row.step}
                                            className="border-b border-[#F2ECE0]/10 hover:bg-[#F2ECE0]/[0.03]"
                                        >
                                            <TableCell className="font-mono font-semibold text-[#F2ECE0] py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.step}
                                            </TableCell>
                                            <TableCell className="text-[#F2ECE0]/85 py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.action}
                                            </TableCell>
                                            <TableCell className="font-mono text-[#EDAE08] py-4 px-4 sm:px-6 whitespace-normal">
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
                <section className="py-20 sm:py-28 border-b border-[#F2ECE0]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute right-1/4 bottom-0 w-[550px] h-[400px] bg-[#EDAE08]/12 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2ECE0] leading-[1.08]">
                                Ahora hazlo con tu marca
                            </h2>
                            <p className="text-lg sm:text-xl text-[#F2ECE0]/85 leading-relaxed font-light">
                                Esta campaña es de una marca real con una etiqueta real. El mismo método sirve para tu producto: personajes que no cambian de cara y un producto que sale igual al de verdad, sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-[#16130E] border border-[#F2ECE0]/15 text-[#F2ECE0] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F2ECE0]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#EDAE08] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#F2ECE0]/80 leading-relaxed font-light">
                                        La ficha de identidad y las hojas de referencia para tu personaje.
                                    </p>
                                </div>
                                <div
                                    role="note"
                                    className="w-full py-3.5 px-4 rounded-xl bg-[#F2ECE0]/10 border border-[#F2ECE0]/20 text-center text-sm sm:text-base font-mono text-[#F2ECE0] select-all"
                                >
                                    Comenta HIDROMIEL en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-[#16130E] border border-[#F2ECE0]/20 text-[#F2ECE0] rounded-2xl flex flex-col justify-between gap-8 shadow-xl">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F2ECE0]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F2ECE0] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#F2ECE0]/80 leading-relaxed font-light">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#F2ECE0] hover:bg-white text-[#12100C] font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#2A200D] via-[#1B160D] to-[#12100C] border-2 border-[#EDAE08] text-[#F2ECE0] rounded-2xl flex flex-col justify-between gap-8 shadow-[0_0_55px_rgba(237,174,8,0.22)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#F2ECE0]">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#EDAE08] font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-[#F2ECE0]/90 leading-relaxed font-light">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan, Tatiana y Larisa.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#EDAE08] hover:bg-[#d89e06] text-[#12100C] font-bold text-base shadow-lg shadow-[#EDAE08]/30"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        {/* Siete enlaces a los casos anteriores (001 a 007) + Conoce Vallehalla */}
                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#EDAE08] hover:text-[#F2ECE0] underline underline-offset-4 decoration-[#EDAE08]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#EDAE08] hover:text-[#F2ECE0] underline underline-offset-4 decoration-[#EDAE08]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#EDAE08] hover:text-[#F2ECE0] underline underline-offset-4 decoration-[#EDAE08]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#EDAE08] hover:text-[#F2ECE0] underline underline-offset-4 decoration-[#EDAE08]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#EDAE08] hover:text-[#F2ECE0] underline underline-offset-4 decoration-[#EDAE08]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#EDAE08] hover:text-[#F2ECE0] underline underline-offset-4 decoration-[#EDAE08]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono text-[#EDAE08] hover:text-[#F2ECE0] underline underline-offset-4 decoration-[#EDAE08]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <a
                                href="https://vallehalla.com.mx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDAE08]/15 border border-[#EDAE08]/50 text-sm sm:text-base font-mono text-[#F2ECE0] hover:bg-[#EDAE08]/25 transition-colors shadow-[0_0_20px_rgba(237,174,8,0.18)]"
                            >
                                <span>Conoce Vallehalla</span>
                                <ExternalLink className="w-4 h-4 text-[#EDAE08]" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#0D0B08]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#F2ECE0]/55 leading-relaxed text-center">
                            Vallehalla Hidromiel es una marca de Valle de Santiago, Guanajuato. Las personas de las imágenes no existen: son personajes generados con inteligencia artificial. Contenido para mayores de 18 años. El abuso en el consumo de este producto puede ser nocivo para la salud.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
