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
        absolute: "Ninguna es igual · Campaña de tequila de lujo 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa de Clase Azul Reposado hecha 100% con IA, con la misma modelo virtual de la campaña de Advanced Night Repair. El método paso a paso y las reglas que salieron de cinco campañas.",
    openGraph: {
        title: "Ninguna es igual · Campaña de tequila de lujo 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa de Clase Azul Reposado hecha 100% con IA, con la misma modelo virtual de la campaña de Advanced Night Repair. El método paso a paso y las reglas que salieron de cinco campañas.",
        images: [
            {
                url: "/casos/tatiana-clase-azul/piezas/01-portada-una-sola.png",
                width: 896,
                height: 1200,
                alt: "Ninguna es igual · Tatiana × Clase Azul Reposado — Portada · Una sola",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/tatiana-clase-azul/piezas/01-portada-una-sola.png",
        caption: "Portada · Una sola",
        alt: "Portada de la campaña Ninguna es igual: Tatiana en vestido blanco en el patio mexicano frente al muro azul cobalto llevando el decantador de Clase Azul Reposado",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/02-packshot-el-muro.png",
        caption: "Packshot · El muro",
        alt: "Packshot del decantador artesanal de Clase Azul Reposado frente al muro azul cobalto a la luz dorada de la tarde",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/03-la-pincelada.png",
        caption: "La pincelada",
        alt: "Acercamiento al pintado artesanal azul cobalto y medallón de plata del decantador de Clase Azul Reposado con su cintura y base de campana",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/04-pecas.png",
        caption: "Pecas",
        alt: "Retrato de cerca de Tatiana mostrando las pecas en su piel bajo las sombras en forma de rombos proyectadas por la celosía de madera",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/05-el-servicio.png",
        caption: "El servicio",
        alt: "Detalle sirviendo Clase Azul Reposado en una copa de cristal liso sobre la mesa de piedra volcánica",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/06-bodegon-agave.png",
        caption: "Bodegón · Agave",
        alt: "Bodegón del decantador de Clase Azul Reposado junto al agave en maceta de piedra en el patio",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/07-la-sobremesa.png",
        caption: "La sobremesa",
        alt: "Tatiana con vestido de escote alto en la sobremesa nocturna iluminada por velas junto al decantador y la copa de cristal liso",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/08-al-fondo.png",
        caption: "Al fondo",
        alt: "Composición con el decantador de Clase Azul Reposado en primer plano y Tatiana al fondo en la casa mexicana contemporánea",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/tatiana-clase-azul/piezas/09-cierre-la-ultima-copa.png",
        caption: "Cierre · La última copa",
        alt: "Cierre de la campaña: la mesa larga de piedra volcánica vacía con las velas consumidas y la última copa de tequila",
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
        action: "La misma ficha y la misma hoja de cara de la campaña anterior",
        tool: "Nano Banana Pro",
    },
    {
        step: "Referencias",
        action: "Fotos del decantador, curadas y recortadas",
        tool: "Ninguna, criterio",
    },
    {
        step: "Espacios",
        action: "Patio de día y sobremesa de noche, vacíos y en 3:4",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelo, espacio, luz y decantador real en una imagen",
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
        <div className="border-l-4 border-[#1F3FA6] bg-white/85 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#1F3FA6]/25 shadow-[0_15px_35px_rgba(31,63,166,0.07)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#1F3FA6] font-bold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#1A1814]/90 leading-relaxed font-normal">
                {children}
            </p>
        </div>
    );
}

export default function TatianaClaseAzulCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#F5F0E6] text-[#1A1814] flex flex-col font-sans selection:bg-[#1F3FA6]/20 overflow-x-hidden">
            {/* Header sobre barra oscura sutil para mantener legibilidad de navegación global */}
            <div className="bg-[#121829] text-white">
                <PublicHeader />
            </div>

            <main className="flex-1">
                {/* 1. Hero Section: El texto va sobre el muro azul cobalto de la izquierda, sin tapar a Tatiana ni el decantador */}
                <section className="relative w-full bg-[#13296B] border-b border-[#1A1814]/15 overflow-hidden text-[#F5F0E6]">
                    {/* Full-bleed background image (patio con muro azul cobalto a la izquierda) */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/tatiana-clase-azul/proceso/espacio-e1-patio.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-left scale-105 opacity-75"
                        />
                        {/* Muro azul cobalto a la izquierda con ligero blur para lectura impecable */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-[#10235E]/92 via-[#1F3FA6]/75 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0E1D4D]/90 via-[#0E1D4D]/40 to-transparent" />
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                            {/* Columna izquierda sobre el muro azul cobalto */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F0E6]/15 border border-[#F5F0E6]/40 text-[#F5F0E6] text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-lg">
                                    <span>Campaña 005 · Caso de estudio</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#F5F0E6] leading-[1.02] drop-shadow-[0_4px_24px_rgba(10,18,48,0.65)]">
                                    Ninguna es igual
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#DCE6FF] drop-shadow-[0_2px_12px_rgba(10,18,48,0.6)]">
                                    Tatiana × Clase Azul Reposado
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#F5F0E6]/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-[0_2px_10px_rgba(10,18,48,0.65)]">
                                    Una campaña de tequila de lujo completa, hecha 100% con inteligencia artificial. Nueve piezas, una modelo que no existe, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: piezas/01-portada-una-sola.png completa 3:4 sin tapar a Tatiana ni el decantador */}
                            <div className="lg:col-span-5 relative z-10 mt-2 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(10,18,48,0.75)] border-2 border-[#F5F0E6]/30 bg-[#13296B]">
                                    <Image
                                        src="/casos/tatiana-clase-azul/piezas/01-portada-una-sola.png"
                                        alt="Tatiana en el patio mexicano frente al muro azul cobalto sosteniendo del cuello el decantador de Clase Azul Reposado"
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
                                "Producto: Clase Azul Reposado",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: proyecto conceptual",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-[#F5F0E6]/95 border border-[#1F3FA6]/30 backdrop-blur-xl text-xs sm:text-sm text-[#1A1814] font-mono font-medium text-center flex items-center justify-center shadow-lg"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#1A1814]/10 bg-[#ECE5D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#1F3FA6] rounded-full" />
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-lg sm:text-xl lg:text-2xl text-[#1A1814]/85 leading-relaxed font-normal">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques azules va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#1A1814]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#1F3FA6]/8 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 lg:space-y-16 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                El concepto
                            </h2>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1814] leading-[1.08] border-l-4 border-[#1F3FA6] pl-6 sm:pl-8 py-2 max-w-5xl">
                                Lo que se hace a mano no se repite.
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            <div className="lg:col-span-6">
                                <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                    Cada decantador de Clase Azul se moldea y se pinta a mano, uno por uno. No hay dos iguales. La campaña sigue un día en una casa mexicana contemporánea: la tarde en el patio, con el muro cobalto y el sol bajo, y la noche en la sobremesa, a la luz de las velas. Tatiana no presenta el tequila; vive la tarde y la noche, y el decantador está ahí.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase decide qué se queda: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>

                                <MethodBlock title="La regla del lujo">
                                    El lujo se percibe, no se muestra. Tatiana nunca le presenta el decantador a la cámara: lo lleva del cuello, lo sirve o lo deja en la mesa. La última pieza ni siquiera tiene personas: la mesa vacía, las velas consumidas y una copa.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La modelo */}
                <section className="py-20 sm:py-28 border-b border-[#1A1814]/10 bg-[#ECE5D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                    Paso 1 · La modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                    Tatiana no existe. Es la misma modelo de la campaña de Advanced Night Repair, con la misma ficha de identidad y la misma hoja de cara. Sus rasgos únicos son las pecas en la cara y el pecho, la raya en medio y los labios gruesos. En esta campaña las pecas se volvieron una pieza propia.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    En una campaña de alcohol, la modelo cambia de registro: elegante, tranquila, con la compostura de una adulta, nunca en tono sensual. La ficha pide un escote discreto, pero lo que dice la ficha del cuerpo pesa más. En la sobremesa salió un escote pronunciado y hubo que regenerarla describiendo el vestido por lo que se tiene que ver: "escote alto y recto que cubre el pecho".
                                </MethodBlock>
                                <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-[#1F3FA6]/30 text-sm sm:text-base text-[#1A1814]/90 shadow-md">
                                    La guía gratuita explica cómo crear la ficha y la hoja de cara de tu personaje. Comenta AMANO en el reel de la campaña y te llega por mensaje.
                                </div>
                            </div>
                        </div>

                        {/* Comparación */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#1A1814]/15 bg-[#E4DDD0] shadow-[0_20px_45px_rgba(26,24,20,0.12)]">
                                    <Image
                                        src="/casos/tatiana-clase-azul/proceso/sobremesa-v1-escote-y-copa-tallada.png"
                                        alt="Primera versión de la pieza La sobremesa con escote pronunciado y una copa tallada distinta"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1A1814]/75 font-mono">
                                    Primera versión: escote pronunciado y otra copa.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#1F3FA6]/70 bg-[#E4DDD0] shadow-[0_25px_55px_rgba(31,63,166,0.18)]">
                                    <Image
                                        src="/casos/tatiana-clase-azul/piezas/07-la-sobremesa.png"
                                        alt="Versión final de la pieza La sobremesa con vestido de escote alto y la misma copa de cristal liso de toda la campaña"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1A1814] font-mono font-medium">
                                    Versión final: escote alto y la misma copa de toda la campaña.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Las referencias del producto */}
                <section className="py-20 sm:py-28 border-b border-[#1A1814]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                    Paso 2 · Las referencias del producto
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                    Antes de generar, junté cinco fotos del decantador y me quedé con tres: de frente, servido y en la mano. De la foto de frente saqué dos acercamientos, el pintado y el tapón de plata, para que la IA los viera de cerca.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    La IA copia todo lo que le adjuntas. Descarté la foto con la caja, porque la IA copiaría la caja y sus letras, y una foto de grupo que traía etiquetas de otra empresa pegadas. La foto en mano la recorté para que no salieran los otros decantadores de la marca.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#1A1814]/10 bg-[#ECE5D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                Paso 3 · Los espacios
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                Dos espacios, generados vacíos y en 3:4: el patio de una casa mexicana contemporánea a la hora dorada, con un muro cobalto, una alberca angosta y un agave en maceta de piedra; y la misma casa de noche, con una mesa larga de piedra volcánica, velas en candeleros de barro negro y una celosía de madera.
                            </p>
                        </div>

                        {/* Galería de 2 espacios */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#1A1814]/15 bg-[#E4DDD0] shadow-[0_20px_45px_rgba(26,24,20,0.12)]">
                                <Image
                                    src="/casos/tatiana-clase-azul/proceso/espacio-e1-patio.png"
                                    alt="Espacio vacío 1: patio de casa mexicana contemporánea a la hora dorada con muro azul cobalto, alberca angosta y agave en maceta de piedra"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#1A1814]/15 bg-[#E4DDD0] shadow-[0_20px_45px_rgba(26,24,20,0.12)]">
                                <Image
                                    src="/casos/tatiana-clase-azul/proceso/espacio-e2-sobremesa.png"
                                    alt="Espacio vacío 2: comedor nocturno con mesa larga de piedra volcánica, velas en candeleros de barro negro y celosía de madera"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Bloque Cómo se hace + imagen e2-v1-caballito-colado.png */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    Lo que nombras, aparece. El bloque de color de noche decía "tequila ámbar", y en la mesa vacía apareció un caballito de tequila que nadie pidió. Se quitó con una edición. La regla: no nombres en el prompt lo que no quieres en la foto, ni siquiera dentro del bloque de color.
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#1A1814]/15 bg-[#E4DDD0] shadow-[0_20px_45px_rgba(26,24,20,0.12)]">
                                    <Image
                                        src="/casos/tatiana-clase-azul/proceso/e2-v1-caballito-colado.png"
                                        alt="Primera versión del espacio de sobremesa con un caballito de tequila en la mesa vacía por mencionar tequila ámbar en el bloque de color"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1A1814]/75 font-mono text-center">
                                    Primera versión: el caballito que se coló por una palabra.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#1A1814]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                Paso 4 · La integración
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                Aquí se juntan la modelo, el espacio, la luz y el decantador real. El decantador es la parte difícil: es una pieza artesanal, con una forma de reloj de arena, un medallón de plata y un pintado que cualquier fan reconoce. Tres reglas hicieron la diferencia.
                            </p>
                        </div>

                        {/* Comparación de la pincelada */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#1A1814]/15 bg-[#E4DDD0] shadow-[0_20px_45px_rgba(26,24,20,0.12)]">
                                    <Image
                                        src="/casos/tatiana-clase-azul/proceso/pincelada-v1-forma-de-gota.png"
                                        alt="Primera versión de la pieza La pincelada donde el decantador salió con forma de gota sin cintura ni base de campana"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1A1814]/75 font-mono">
                                    Primera versión: el decantador salió con forma de gota.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#1F3FA6]/70 bg-[#E4DDD0] shadow-[0_25px_55px_rgba(31,63,166,0.18)]">
                                    <Image
                                        src="/casos/tatiana-clase-azul/piezas/03-la-pincelada.png"
                                        alt="Versión final de la pieza La pincelada mostrando la cintura y la base de campana del decantador real de Clase Azul"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1A1814] font-mono font-medium">
                                    Versión final: la cintura y la base de campana del decantador real.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Regla 1 y Regla 2 */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            <MethodBlock title="Regla 1 · El detalle que nota el fan">
                                En los acercamientos, la IA tiende a inventar la forma. En la pincelada, el decantador salió como un florero de gota, sin cintura ni base de campana. Una edición no cambia formas: se regeneró adjuntando la foto de frente solo para la forma y describiendo el encuadre por lo que se tenía que ver.
                            </MethodBlock>
                            <MethodBlock title="Regla 2 · La luz sale de algo">
                                La luz tiene que venir de una fuente que se vea. En la pieza de las pecas, la sombra en forma de rombos tiene sentido porque la celosía de madera aparece en la foto.
                            </MethodBlock>
                        </div>

                        {/* Regla 3 + imagen servicio-descartado-dos-tapones.png */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7">
                                <MethodBlock title="Regla 3 · Revisa toda la foto, no solo lo importante">
                                    En una versión del servicio salieron dos tapones de plata sobre la mesa. El decantador estaba perfecto, pero un objeto repetido delata a la IA. Se descartó.
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#1A1814]/15 bg-[#E4DDD0] shadow-[0_20px_45px_rgba(26,24,20,0.12)]">
                                    <Image
                                        src="/casos/tatiana-clase-azul/proceso/servicio-descartado-dos-tapones.png"
                                        alt="Versión descartada del servicio con dos tapones de plata sobre la mesa"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1A1814]/75 font-mono text-center">
                                    Descartada: dos tapones en la mesa.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Texto final de Paso 4 */}
                        <div className="max-w-4xl">
                            <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                Entre piezas se cuida la continuidad: el mismo vestido blanco en la tarde, la misma copa de cristal liso en la noche. Por eso la copa del cierre se adjuntó como referencia para el servicio y la sobremesa.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#1A1814]/10 bg-[#ECE5D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                    En una producción normal, la IA entrega material en bruto y el acabado se hace en Photoshop. Aquí no se abrió ningún programa. El color se escribe dentro del prompt y las correcciones se piden con lenguaje normal sobre la misma imagen.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Esta campaña lleva dos bloques de color fijos, uno de día y uno de noche, que se pegan al final de cada prompt igual que la ficha fija la cara. En toda la campaña hubo una sola edición: quitar el caballito del espacio de noche. Lo que no se arregla con una edición, como una forma o un vestido, se regenera.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-32 border-b border-[#1A1814]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#1F3FA6]/8 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1A1814]">
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
                                        className="px-4 py-3 rounded-xl bg-white border border-[#1F3FA6]/35 text-xs sm:text-sm font-mono font-medium text-[#1A1814] text-center shadow-sm"
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
                <section className="py-20 sm:py-28 border-b border-[#1A1814]/10 bg-[#ECE5D7]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1814]">
                                    Ficha técnica
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#1F3FA6] rounded-full" />
                            </div>

                            <div className="lg:col-span-8 rounded-2xl border border-[#1A1814]/15 bg-white overflow-hidden shadow-[0_15px_40px_rgba(26,24,20,0.08)]">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-[#1A1814]/15 hover:bg-transparent bg-[#F5F0E6]/60">
                                            <TableHead className="text-[#1F3FA6] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Paso
                                            </TableHead>
                                            <TableHead className="text-[#1F3FA6] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Qué se hace
                                            </TableHead>
                                            <TableHead className="text-[#1F3FA6] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Herramienta
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {TECH_SPECS.map((row) => (
                                            <TableRow
                                                key={row.step}
                                                className="border-[#1A1814]/10 hover:bg-[#F5F0E6]/50"
                                            >
                                                <TableCell className="font-semibold text-[#1A1814] text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.step}
                                                </TableCell>
                                                <TableCell className="text-[#1A1814]/85 text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.action}
                                                </TableCell>
                                                <TableCell className="text-[#1F3FA6] font-mono font-medium text-xs sm:text-sm py-4 px-4 sm:px-6 whitespace-normal align-top">
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
                <section className="py-20 sm:py-32 border-b border-[#1A1814]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1F3FA6]/10 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1A1814]">
                                Ahora hazlo con tu personaje
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1A1814]/85 leading-relaxed font-normal">
                                Todo lo que ves aquí sale de un método: personajes que no cambian de cara, en cualquier escena, con cualquier producto, campaña tras campaña. Sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-white border-[#1A1814]/15 text-[#1A1814] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1814]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1A1814] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#1A1814]/80 leading-relaxed font-normal">
                                        La ficha de identidad y la hoja de cara para tu personaje.
                                    </p>
                                </div>
                                <div className="w-full py-3.5 px-4 rounded-xl bg-[#F5F0E6] border border-[#1A1814]/20 text-center text-xs sm:text-sm font-mono font-medium text-[#1A1814]">
                                    Comenta AMANO en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-white border-[#1A1814]/20 text-[#1A1814] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1A1814]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1A1814] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#1A1814]/80 leading-relaxed font-normal">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#1A1814] text-[#F5F0E6] hover:bg-[#1A1814]/90 font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#1A358B] via-[#152B70] to-[#102054] border-2 border-[#1F3FA6] text-[#F5F0E6] rounded-2xl flex flex-col justify-between gap-8 shadow-[0_20px_55px_rgba(31,63,166,0.3)] relative">
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
                                    className="w-full h-14 rounded-xl bg-[#F5F0E6] hover:bg-white text-[#1F3FA6] font-bold text-base shadow-lg"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#1F3FA6] hover:text-[#1A1814] underline underline-offset-4 decoration-[#1F3FA6]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#1F3FA6] hover:text-[#1A1814] underline underline-offset-4 decoration-[#1F3FA6]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1F3FA6]/10 border border-[#1F3FA6]/40 text-sm sm:text-base font-mono font-medium text-[#1A1814] hover:bg-[#1F3FA6]/20 transition-colors shadow-sm"
                            >
                                <span className="px-2.5 py-0.5 rounded-full bg-[#1F3FA6] text-[#F5F0E6] text-xs font-bold uppercase tracking-wider">
                                    La otra campaña de Tatiana
                                </span>
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4 text-[#1F3FA6]" />
                            </Link>

                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#1F3FA6] hover:text-[#1A1814] underline underline-offset-4 decoration-[#1F3FA6]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#1F3FA6] hover:text-[#1A1814] underline underline-offset-4 decoration-[#1F3FA6]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Bulgari Serpenti Tubogas</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/larisa-technogym"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#1F3FA6] hover:text-[#1A1814] underline underline-offset-4 decoration-[#1F3FA6]/50 transition-colors"
                            >
                                <span>Campaña 007: Larisa × Technogym</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#E5DEC9]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#1A1814]/65 leading-relaxed text-center">
                            Proyecto conceptual y no comercial. IA Builders Lab no tiene afiliación, patrocinio ni relación comercial con Clase Azul. Las marcas y productos citados pertenecen a sus dueños y se mencionan solo con fines ilustrativos. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial. Contenido para mayores de edad. Evita el exceso.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
