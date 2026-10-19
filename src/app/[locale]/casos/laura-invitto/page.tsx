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
        absolute: "Distinción total · Campaña de un producto digital 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa de Invitto hecha 100% con IA, con la modelo virtual Laura y pantallas reales sin letras inventadas. Cómo anunciar un producto que vive en una pantalla.",
    openGraph: {
        title: "Distinción total · Campaña de un producto digital 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa de Invitto hecha 100% con IA, con la modelo virtual Laura y pantallas reales sin letras inventadas. Cómo anunciar un producto que vive en una pantalla.",
        images: [
            {
                url: "/casos/laura-invitto/piezas/01-portada-enviar.png",
                width: 896,
                height: 1200,
                alt: "Distinción total · Laura × Invitto — Portada · Enviar",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/laura-invitto/piezas/01-portada-enviar.png",
        caption: "Portada · Enviar",
        alt: "Portada de la campaña Distinción total: Laura en su departamento por la mañana enviando su invitación de boda desde el celular",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/02-la-pantalla.png",
        caption: "La pantalla",
        alt: "Detalle de la pantalla del celular mostrando la invitación digital de boda de Invitto con captura real completa y legible",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/03-llego.png",
        caption: "Llegó",
        alt: "Invitada emocionada al abrir la invitación digital de Invitto en su celular",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/04-el-panel.png",
        caption: "El panel",
        alt: "Panel de confirmaciones y gestión de invitados de Invitto en pantalla",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/05-bodegon-la-lista.png",
        caption: "Bodegón · La lista",
        alt: "Bodegón editorial con la lista digital de invitados de Invitto sobre la mesa en la mañana previa a la boda",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/06-la-entrada.png",
        caption: "La entrada",
        alt: "Entrada fluida de los invitados en la hacienda mexicana mostrando su pase digital con código QR de Invitto",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/07-check-in.png",
        caption: "Check-in",
        alt: "Recepción y check-in sin filas en la entrada de la boda usando Invitto",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/08-laura-tranquila.png",
        caption: "Laura, tranquila",
        alt: "Laura vestida de novia disfrutando su boda en el patio de la hacienda sin un celular en la mano",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/laura-invitto/piezas/09-cierre-distincion-total.png",
        caption: "Cierre · Distinción total",
        alt: "Cierre de la campaña Distinción total en el patio iluminado de la hacienda al final de la celebración",
        width: 896,
        height: 1200,
    },
];

const TECH_SPECS = [
    {
        step: "Concepto",
        action: "El slogan de la marca como idea central",
        tool: "Ninguna, criterio",
    },
    {
        step: "La modelo",
        action: "Ficha escrita mirando su hoja de cara",
        tool: "Nano Banana Pro",
    },
    {
        step: "Pantallas",
        action: "Capturas reales con datos ficticios, limpias y completas",
        tool: "Ninguna, criterio",
    },
    {
        step: "Espacios",
        action: "Departamento y hacienda, vacíos y en 3:4",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelo, espacio, luz y pantallas reales en una imagen",
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
        <div className="border-l-4 border-[#DF3B94] bg-[#FDF8FB] p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#DF3B94]/25 shadow-[0_15px_35px_rgba(223,59,148,0.07)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#1B1A1C]/90 leading-relaxed font-normal">
                {children}
            </p>
        </div>
    );
}

export default function LauraInvittoCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#1B1A1C] flex flex-col font-sans selection:bg-[#DF3B94]/20 overflow-x-hidden">
            {/* Header sobre barra oscura sutil para mantener legibilidad de navegación global */}
            <div className="bg-[#1B1A1C] text-white">
                <PublicHeader />
            </div>

            <main className="flex-1">
                {/* 1. Hero Section: El texto va sobre la pared clara de la izquierda, sin tapar a Laura */}
                <section className="relative w-full bg-[#F8F5F2] border-b border-[#1B1A1C]/12 overflow-hidden text-[#1B1A1C]">
                    {/* Full-bleed background image del departamento con pared clara a la izquierda */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/laura-invitto/proceso/espacio-e1-departamento.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-left-top scale-105 opacity-80"
                        />
                        {/* Velo luminoso con ligero blur sobre la pared clara de la izquierda donde va el texto */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-white/94 via-white/82 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/85 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/65 to-transparent" />
                    </div>

                    {/* Sutileza cálida rosa y oro */}
                    <div className="pointer-events-none absolute top-1/4 left-1/4 w-[550px] h-[400px] bg-[#DF3B94]/8 rounded-full blur-[150px] z-[1]" />
                    <div className="pointer-events-none absolute bottom-10 right-1/3 w-[400px] h-[300px] bg-[#F5B837]/12 rounded-full blur-[130px] z-[1]" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                            {/* Texto sobre la pared clara de la izquierda sin tapar a Laura */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DF3B94]/12 border border-[#DF3B94]/35 text-[#B82373] text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-[#F5B837]" />
                                    <span>Campaña 010 · Caso de estudio · Producto digital</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#1B1A1C] leading-[1.02]">
                                    Distinción total
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#DF3B94]">
                                    Laura × Invitto
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#1B1A1C]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                                    Una campaña completa para un producto que no se puede tocar, hecha 100% con inteligencia artificial. Nueve piezas, una modelo que no existe, pantallas reales y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: piezas/01-portada-enviar.png completa en 3:4 */}
                            <div className="lg:col-span-5 relative z-10 mt-2 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(27,26,28,0.18)] border-2 border-white bg-[#F8F5F2]">
                                    <Image
                                        src="/casos/laura-invitto/piezas/01-portada-enviar.png"
                                        alt="Laura sentada en el sillón de su departamento por la mañana enviando las invitaciones digitales de su boda desde el celular"
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
                                "Producto: Invitto",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: campaña de marca propia",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-white border border-[#DF3B94]/25 backdrop-blur-xl text-xs sm:text-sm text-[#1B1A1C] font-mono font-medium text-center flex items-center justify-center shadow-md"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#1B1A1C]/10 bg-[#FAF7F9]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1A1C]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#DF3B94] to-[#F5B837] rounded-full" />
                            </div>
                            <div className="lg:col-span-8 space-y-8">
                                <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques rosas va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                                <MethodBlock>
                                    Los bloques con borde izquierdo rosa explican el método y la regla de cada etapa del proceso.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute -left-40 top-1/3 w-96 h-96 bg-[#DF3B94]/8 rounded-full blur-[130px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="max-w-3xl mb-10">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block mb-3">
                                El concepto
                            </span>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1A1C] leading-[1.08]">
                                &ldquo;Tu evento merece distinción total.&rdquo;
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5">
                                <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal">
                                    El miedo de quien organiza una boda es que lo digital &ldquo;se vea barato&rdquo;. La campaña demuestra lo contrario siguiendo a Laura, una novia, desde la mañana en que manda su invitación hasta el final de su boda. No se vende una app: se vende lo que provoca. La invitada que se emociona al abrirla, la entrada sin filas, la novia que disfruta su fiesta sin un celular en la mano.
                                </p>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Aquí la frase ya existía: es el slogan de la marca.
                                </MethodBlock>
                                <MethodBlock title="La regla del producto digital">
                                    Las pantallas aparecen de frente solo en tres piezas. En las demás están de lado, apagadas o del lado de quien las mira. El producto se cuenta por lo que hace sentir, no por sus botones.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La modelo */}
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10 bg-[#FAF7F9]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block">
                                    Paso 1
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1A1C]">
                                    Paso 1 · La modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal pt-2">
                                    Laura no existe. Es la quinta modelo de la serie y la creé para ser la cara de Invitto. Su identidad se fija con una ficha escrita mirando su hoja de cara: el chongo bajo castaño rojizo, la raya en medio y unas arracadas doradas que lleva en todas las fotos.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Un detalle fijo, como las arracadas, ayuda a que la IA la reconozca en cada pieza. La única cara clara de toda la campaña es la de Laura: invitados de espaldas o desenfocados.
                                </MethodBlock>
                            </div>
                        </div>

                        {/* Imagen horizontal: proceso/laura-hoja-cara.png */}
                        <figure className="flex flex-col max-w-4xl mx-auto">
                            <div className="relative w-full overflow-hidden rounded-2xl border border-[#1B1A1C]/15 bg-white shadow-[0_18px_45px_rgba(27,26,28,0.08)]">
                                <Image
                                    src="/casos/laura-invitto/proceso/laura-hoja-cara.png"
                                    alt="Hoja de cara de la modelo virtual Laura con nueve ángulos y una sola identidad"
                                    width={1024}
                                    height={572}
                                    sizes="(max-width: 1024px) 100vw, 896px"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1A1C]/80 font-mono">
                                Hoja de cara: nueve ángulos, una sola identidad.
                            </figcaption>
                        </figure>

                        {/* Llamado pequeño al lead magnet */}
                        <div className="rounded-2xl border border-[#DF3B94]/35 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                            <p className="text-base sm:text-lg text-[#1B1A1C] font-medium leading-relaxed">
                                La guía gratuita explica cómo crear la ficha y la hoja de cara de tu personaje. Comenta{" "}
                                <span className="font-mono font-bold text-[#DF3B94] px-2 py-0.5 rounded bg-[#DF3B94]/12 border border-[#DF3B94]/35">
                                    DISTINCION
                                </span>{" "}
                                en el reel de la campaña y te llega por mensaje.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Las pantallas, el verdadero reto */}
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block">
                                Paso 2
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1A1C]">
                                Paso 2 · Las pantallas, el verdadero reto
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal pt-2">
                                Lo que más le cuesta a la IA es escribir texto en una pantalla. Si le pides &ldquo;un celular con una invitación de boda&rdquo;, inventa letras y botones. La solución fue darle capturas reales de Invitto, con datos de ejemplo, y pedirle que las pusiera tal cual en la pantalla.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/laura-invitto/proceso/pantalla-v1-cortada.png",
                                    caption: "Primera versión: la captura venía recortada y la IA la copió mocha.",
                                    alt: "Primera versión descartada donde la captura venía recortada de un lado y la pantalla mostró el nombre incompleto",
                                },
                                {
                                    src: "/casos/laura-invitto/piezas/02-la-pantalla.png",
                                    caption: "Versión final: la captura completa, con margen en las orillas.",
                                    alt: "Versión final con la captura real completa de Invitto y margen limpio en las orillas de la pantalla",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#1B1A1C]/15 bg-white shadow-[0_18px_45px_rgba(27,26,28,0.08)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1A1C]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <MethodBlock title="Regla 1 · La IA copia la referencia, errores incluidos">
                                La primera captura estaba recortada de un lado sin que lo notara. La IA copió exactamente eso: &ldquo;ISABEL &amp; RODRIG…&rdquo;. Se corrigió la referencia, no el prompt: captura completa, con la proporción de una pantalla de celular y margen en las cuatro orillas.
                            </MethodBlock>
                            <MethodBlock title="Regla 2 · Nada de datos reales">
                                Las primeras capturas tenían nombres de invitados y códigos QR de un evento. Para una campaña pública se usan eventos de prueba con nombres ficticios: nunca datos de clientes.
                            </MethodBlock>
                            <MethodBlock title="Regla 3 · Limpia la captura">
                                Se recortó la barra de estado del celular (hora, batería, notificaciones) y la barra del editor. La IA copia todo lo que ve en la referencia.
                            </MethodBlock>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10 bg-[#FAF7F9]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block">
                                Paso 3
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1A1C]">
                                Paso 3 · Los espacios
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal pt-2">
                                Dos espacios, generados vacíos y en 3:4: el departamento de Laura en la mañana y el patio de una hacienda mexicana preparado para la boda.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                {
                                    src: "/casos/laura-invitto/proceso/espacio-e1-departamento.png",
                                    alt: "Espacio vacío E1: el departamento luminoso de Laura por la mañana",
                                },
                                {
                                    src: "/casos/laura-invitto/proceso/espacio-e2-hacienda.png",
                                    alt: "Espacio vacío E2: el patio de una hacienda mexicana preparado para la boda",
                                },
                            ].map((img) => (
                                <div
                                    key={img.src}
                                    className="relative w-full overflow-hidden rounded-2xl border border-[#1B1A1C]/15 bg-white shadow-[0_18px_45px_rgba(27,26,28,0.08)]"
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
                                    En uno de los departamentos descartados había un sobre de papel en la mesa: una invitación impresa en una campaña de invitaciones digitales. Un objeto chico puede contar lo contrario de lo que vendes.
                                </MethodBlock>
                            </div>
                            <div className="lg:col-span-5">
                                <figure className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#1B1A1C]/15 bg-white shadow-[0_18px_45px_rgba(27,26,28,0.08)]">
                                        <Image
                                            src="/casos/laura-invitto/proceso/e1-descartado-sobre-de-papel.png"
                                            alt="Espacio descartado del departamento donde apareció un sobre de papel sobre la mesa"
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 1024px) 100vw, 40vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1A1C]/80 font-mono">
                                        Descartado: el sobre de papel.
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block">
                                    Paso 4
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1A1C]">
                                    Paso 4 · La integración
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal pt-2">
                                    Aquí se juntan la modelo, los espacios y las pantallas reales. Se revisó letra por letra lo que salía en cada pantalla.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock title="Lo que se descartó">
                                    Un pase QR donde el botón decía &ldquo;COMPARTIR NA&rdquo; en vez de &ldquo;COMPARTIR WA&rdquo;. Una invitación con letras inventadas debajo de los nombres. Cuando la pantalla no sale perfecta, es mejor que no se lea a que se lea mal.
                                </MethodBlock>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                            {[
                                {
                                    src: "/casos/laura-invitto/proceso/entrada-descartada-compartir-na.png",
                                    caption: "Descartada: una letra cambiada.",
                                    alt: "Versión descartada de la entrada donde el botón del pase QR decía COMPARTIR NA en lugar de COMPARTIR WA",
                                },
                                {
                                    src: "/casos/laura-invitto/proceso/llego-descartada-letras-inventadas.png",
                                    caption: "Descartada: texto inventado.",
                                    alt: "Versión descartada donde aparecieron letras inventadas debajo de los nombres en la invitación",
                                },
                            ].map((item) => (
                                <figure key={item.src} className="flex flex-col">
                                    <div className="relative w-full overflow-hidden rounded-2xl border border-[#1B1A1C]/15 bg-white shadow-[0_18px_45px_rgba(27,26,28,0.08)]">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            width={896}
                                            height={1200}
                                            sizes="(max-width: 640px) 100vw, 45vw"
                                            className="w-full h-auto object-contain"
                                        />
                                    </div>
                                    <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1A1C]/80 font-mono">
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10 bg-[#FAF7F9]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-5 space-y-4">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block">
                                    Paso 5
                                </span>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1A1C]">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal pt-2">
                                    En una producción normal, las pantallas se ponen después en Photoshop, a mano. Aquí no se abrió ningún programa: la IA puso la captura real en la pantalla desde la generación.
                                </p>
                            </div>
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Dos bloques de color fijos, uno de mañana y uno de boda, se pegan al final de cada prompt. Y una edición lista por si una pantalla sale mal: &ldquo;reemplaza solo el contenido de la pantalla por la captura adjunta, siguiendo su ángulo&rdquo;.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <div className="space-y-3">
                                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block">
                                    El resultado
                                </span>
                                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1A1C]">
                                    Nueve piezas
                                </h2>
                            </div>

                            {/* Cifras en fila */}
                            <div className="flex flex-wrap gap-2.5 sm:gap-3">
                                {[
                                    "9 piezas finales",
                                    "1 modelo virtual",
                                    "3 pantallas reales",
                                    "0 programas de edición",
                                ].map((stat) => (
                                    <span
                                        key={stat}
                                        className="px-4 py-2 rounded-full bg-[#FAF7F9] border border-[#DF3B94]/35 text-xs sm:text-sm font-mono font-medium text-[#1B1A1C] shadow-sm"
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
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10 bg-[#FAF7F9]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-10">
                        <div className="space-y-3">
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DF3B94] font-bold block">
                                Síntesis del flujo
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1B1A1C]">
                                Ficha técnica
                            </h2>
                        </div>

                        <div className="rounded-2xl border border-[#1B1A1C]/15 bg-white overflow-hidden shadow-[0_18px_45px_rgba(27,26,28,0.06)]">
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-b border-[#1B1A1C]/15 bg-[#DF3B94]/10 hover:bg-[#DF3B94]/10">
                                        <TableHead className="text-[#DF3B94] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Paso
                                        </TableHead>
                                        <TableHead className="text-[#DF3B94] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Qué se hace
                                        </TableHead>
                                        <TableHead className="text-[#DF3B94] font-mono font-bold uppercase text-xs tracking-wider py-4 px-4 sm:px-6">
                                            Herramienta
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {TECH_SPECS.map((row) => (
                                        <TableRow
                                            key={row.step}
                                            className="border-b border-[#1B1A1C]/10 hover:bg-[#DF3B94]/[0.04]"
                                        >
                                            <TableCell className="font-mono font-bold text-[#1B1A1C] py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.step}
                                            </TableCell>
                                            <TableCell className="text-[#1B1A1C]/85 py-4 px-4 sm:px-6 whitespace-normal">
                                                {row.action}
                                            </TableCell>
                                            <TableCell className="font-mono font-medium text-[#DF3B94] py-4 px-4 sm:px-6 whitespace-normal">
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
                <section className="py-20 sm:py-28 border-b border-[#1B1A1C]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute right-1/4 bottom-0 w-[500px] h-[350px] bg-[#DF3B94]/10 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1A1C] leading-[1.08]">
                                Ahora hazlo con tu producto
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1B1A1C]/85 leading-relaxed font-normal">
                                Si tu producto vive en una pantalla, también se puede anunciar con fotos de campaña. El mismo método: personajes que no cambian de cara y pantallas reales, sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-white border border-[#1B1A1C]/15 text-[#1B1A1C] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B1A1C]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#DF3B94] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#1B1A1C]/80 leading-relaxed font-normal">
                                        La ficha de identidad y la hoja de cara para tu personaje.
                                    </p>
                                </div>
                                <div
                                    role="note"
                                    className="w-full py-3.5 px-4 rounded-xl bg-[#FAF7F9] border border-[#DF3B94]/25 text-center text-sm sm:text-base font-mono font-semibold text-[#1B1A1C] select-all"
                                >
                                    Comenta DISTINCION en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-white border border-[#1B1A1C]/20 text-[#1B1A1C] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B1A1C]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1B1A1C] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#1B1A1C]/80 leading-relaxed font-normal">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#1B1A1C] hover:bg-[#1B1A1C]/90 text-white font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#DF3B94] via-[#C22B7D] to-[#991D60] border-2 border-[#F5B837] text-white rounded-2xl flex flex-col justify-between gap-8 shadow-[0_20px_55px_rgba(223,59,148,0.3)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#F5B837] font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-white/95 leading-relaxed font-normal">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan, Tatiana, Larisa y Laura.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#F5B837] hover:bg-[#eab02d] text-[#1B1A1C] font-bold text-base shadow-lg"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        {/* Enlaces pequeños a los nueve casos anteriores + Conoce Invitto */}
                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/vallehalla-hidromiel"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 008: Ilan y Tatiana × Vallehalla Hidromiel</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-bottega"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#DF3B94] hover:text-[#1B1A1C] underline underline-offset-4 decoration-[#DF3B94]/50 transition-colors"
                            >
                                <span>Campaña 009: Larisa × Bottega Veneta</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <a
                                href="https://invitto.com.mx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DF3B94]/12 border border-[#DF3B94]/40 text-sm sm:text-base font-mono font-semibold text-[#1B1A1C] hover:bg-[#DF3B94]/20 transition-colors shadow-sm"
                            >
                                <span>Conoce Invitto</span>
                                <ExternalLink className="w-4 h-4 text-[#DF3B94]" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#F5F1F4]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#1B1A1C]/65 leading-relaxed text-center">
                            Invitto es una marca de invitaciones digitales y gestión de eventos (invitto.com.mx). Los nombres que aparecen en las pantallas son ficticios. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
