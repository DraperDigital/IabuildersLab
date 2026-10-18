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
        absolute: "La disciplina también es diseño · Campaña de bienestar de lujo 100% IA | IA Builders Lab",
    },
    description:
        "Caso de estudio: una campaña completa del Technogym Kinesis Personal hecha 100% con IA, con el debut de la modelo virtual Larisa. El método paso a paso y las reglas que salieron de siete campañas.",
    openGraph: {
        title: "La disciplina también es diseño · Campaña de bienestar de lujo 100% IA | IA Builders Lab",
        description:
            "Caso de estudio: una campaña completa del Technogym Kinesis Personal hecha 100% con IA, con el debut de la modelo virtual Larisa. El método paso a paso y las reglas que salieron de siete campañas.",
        images: [
            {
                url: "/casos/larisa-technogym/piezas/01-portada-disciplina.png",
                width: 896,
                height: 1200,
                alt: "La disciplina también es diseño · Larisa × Technogym Kinesis Personal — Portada · Disciplina",
            },
        ],
    },
};

const FINAL_PIECES: GalleryPiece[] = [
    {
        src: "/casos/larisa-technogym/piezas/01-portada-disciplina.png",
        caption: "Portada · Disciplina",
        alt: "Portada de la campaña La disciplina también es diseño: Larisa entrenando con los cables del Technogym Kinesis Personal en piel coñac y barras de roble frente al ventanal del lago de Como",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/02-packshot-la-pieza.png",
        caption: "Packshot · La pieza",
        alt: "Packshot arquitectónico del Technogym Kinesis Personal de piel coñac y barras de roble montado plano en el muro blanco del cuarto de entrenamiento",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/03-el-agarre.png",
        caption: "El agarre",
        alt: "Detalle de la mano de Larisa sosteniendo la manija de acrílico transparente y el cable metálico del Technogym Kinesis Personal",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/04-concentracion.png",
        caption: "Concentración",
        alt: "Retrato de cerca de Larisa en plena concentración durante su entrenamiento matutino con conjunto gris opaco de manga larga",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/05-bodegon-despues.png",
        caption: "Bodegón · Después",
        alt: "Bodegón del cuarto de entrenamiento con la banca de madera y piel coñac y los accesorios de entrenamiento después de la sesión",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/06-las-barras.png",
        caption: "Las barras",
        alt: "Detalle de las barras de roble, las poleas de acero pulido y el panel de piel coñac del Technogym Kinesis Personal",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/07-el-lago.png",
        caption: "El lago",
        alt: "Larisa en la terraza de piedra frente al lago de Como al amanecer con su conjunto gris opaco de playera larga",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/08-el-remo.png",
        caption: "El remo",
        alt: "Larisa realizando el ejercicio de remo frente al Technogym Kinesis Personal con los cables tensos desde las poleas hasta las manijas",
        width: 896,
        height: 1200,
    },
    {
        src: "/casos/larisa-technogym/piezas/09-cierre-manana-otra-vez.png",
        caption: "Cierre · Mañana otra vez",
        alt: "Cierre de la campaña: el cuarto vacío con la toalla doblada en la banca y las manijas del Technogym Kinesis Personal en su lugar",
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
        action: "Ficha escrita mirando sus hojas de cara y cuerpo",
        tool: "Nano Banana Pro",
    },
    {
        step: "Referencias",
        action: "Diez fotos del aparato, cinco de un solo color",
        tool: "Ninguna, criterio",
    },
    {
        step: "Espacios",
        action: "Cuarto de entrenamiento y terraza al lago, vacíos y en 3:4",
        tool: "Nano Banana Pro",
    },
    {
        step: "Integración",
        action: "Modelo, espacio, luz y aparato real en una imagen",
        tool: "Nano Banana Pro",
    },
    {
        step: "Correcciones",
        action: "Color en el prompt y regeneraciones, sin ediciones",
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
        <div className="border-l-4 border-[#A86A3D] bg-white/85 p-6 sm:p-8 rounded-r-2xl border-y border-r border-[#A86A3D]/25 shadow-[0_15px_35px_rgba(168,106,61,0.08)] backdrop-blur-md">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#A86A3D] font-bold mb-3">
                {title}
            </p>
            <p className="text-base sm:text-lg text-[#1B1C1E]/90 leading-relaxed font-normal">
                {children}
            </p>
        </div>
    );
}

export default function LarisaTechnogymCaseStudyPage() {
    return (
        <div className="min-h-screen bg-[#EEEDEA] text-[#1B1C1E] flex flex-col font-sans selection:bg-[#A86A3D]/20 overflow-x-hidden">
            {/* Header sobre barra oscura sutil para mantener legibilidad de navegación global */}
            <div className="bg-[#1B1C1E] text-white">
                <PublicHeader />
            </div>

            <main className="flex-1">
                {/* 1. Hero Section: El texto va sobre el muro blanco de arriba/izquierda, sin tapar a Larisa ni el aparato */}
                <section className="relative w-full bg-[#E5E4E0] border-b border-[#1B1C1E]/15 overflow-hidden text-[#1B1C1E]">
                    {/* Full-bleed background image del cuarto con muro blanco */}
                    <div className="pointer-events-none absolute inset-0 z-0">
                        <Image
                            src="/casos/larisa-technogym/proceso/espacio-e1-cuarto.png"
                            alt=""
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center scale-105 opacity-75"
                        />
                        {/* Velo luminoso con ligero blur sobre el muro blanco para lectura impecable */}
                        <div className="absolute inset-y-0 left-0 w-full lg:w-[66%] backdrop-blur-[3px] bg-gradient-to-r from-[#F4F3F0]/92 via-[#EEEDEA]/80 to-transparent" />
                        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F4F3F0]/80 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#EEEDEA] via-[#EEEDEA]/60 to-transparent" />
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-8 sm:pt-12 lg:pt-10 pb-10 lg:pb-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                            {/* Texto sobre el muro blanco sin tapar a Larisa ni el aparato */}
                            <div className="lg:col-span-7 relative z-20 text-center lg:text-left lg:pr-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A86A3D]/15 border border-[#A86A3D]/40 text-[#8B532B] text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md shadow-sm">
                                    <span>Campaña 007 · Caso de estudio</span>
                                </div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-tight text-[#1B1C1E] leading-[1.02]">
                                    La disciplina también es diseño
                                </h1>

                                <p className="mt-3 sm:mt-4 text-xl sm:text-3xl lg:text-4xl font-light tracking-wide text-[#A86A3D]">
                                    Larisa × Technogym Kinesis Personal
                                </p>

                                <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#1B1C1E]/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                                    Una campaña de bienestar de lujo completa, hecha 100% con inteligencia artificial. Nueve piezas, una modelo que no existe, cero cámaras y ningún programa de edición.
                                </p>
                            </div>

                            {/* Imagen Hero principal: piezas/01-portada-disciplina.png completa en 3:4 */}
                            <div className="lg:col-span-5 relative z-10 mt-2 lg:mt-0">
                                <div className="relative aspect-[896/1200] w-full max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(27,28,30,0.22)] border-2 border-white/80 bg-[#E5E4E0]">
                                    <Image
                                        src="/casos/larisa-technogym/piezas/01-portada-disciplina.png"
                                        alt="Larisa entrenando frente al Technogym Kinesis Personal de piel coñac y barras de roble en un cuarto luminoso junto al lago"
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
                                "Producto: Kinesis Personal",
                                "Piezas finales: 9",
                                "Equipo: 1 persona",
                                "Herramienta: Nano Banana Pro",
                                "Naturaleza: proyecto conceptual",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="px-4 py-3.5 rounded-xl bg-white/95 border border-[#A86A3D]/30 backdrop-blur-xl text-xs sm:text-sm text-[#1B1C1E] font-mono font-medium text-center flex items-center justify-center shadow-md"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Cómo leer esta página */}
                <section className="py-16 sm:py-24 border-b border-[#1B1C1E]/10 bg-[#E5E3DE]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                    Cómo leer esta página
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#A86A3D] rounded-full" />
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-lg sm:text-xl lg:text-2xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                    Igual que en las campañas anteriores, esta página se cuenta dos veces a la vez. En texto normal va la historia: de dónde salió la idea y por qué cada foto es como es. En los bloques coñac va el método: qué se hizo y qué regla aprendí en cada paso. Puedes leer los dos hilos o quedarte con uno.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. El concepto */}
                <section className="py-20 sm:py-28 border-b border-[#1B1C1E]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#A86A3D]/8 rounded-full blur-[150px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 lg:space-y-16 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                El concepto
                            </h2>
                            <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1C1E] leading-[1.08] border-l-4 border-[#A86A3D] pl-6 sm:pl-8 py-2 max-w-5xl">
                                La disciplina también es diseño.
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                            <div className="lg:col-span-6">
                                <p className="text-lg sm:text-xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                    El Kinesis Personal no parece un aparato de gimnasio: es un panel de piel y roble que Antonio Citterio diseñó para vivir en una casa como un mueble. La campaña sigue una mañana de Larisa en una villa del lago de Como: entrena temprano, sin público, en un cuarto que parece arquitectura. El lujo no es el aparato; es el ritual.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    El concepto se escribe antes del primer prompt y cabe en una frase. Esa frase decide qué se queda: si una imagen no la sostiene, se descarta aunque esté bien generada.
                                </MethodBlock>

                                <MethodBlock title="La regla del lujo">
                                    El lujo se percibe, no se muestra. Larisa nunca posa con el aparato: lo usa. La última pieza no tiene a nadie: la toalla en la banca y las manijas en su lugar. Mañana, otra vez.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Paso 1 · La modelo */}
                <section className="py-20 sm:py-28 border-b border-[#1B1C1E]/10 bg-[#E5E3DE]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                    Paso 1 · La modelo
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                    Larisa no existe. Es la cuarta modelo de la serie y esta es su primera campaña. Su identidad se fija igual que las demás: una ficha escrita que se pega idéntica en cada prompt, una hoja de cara y una hoja de cuerpo.
                                </p>
                            </div>

                            <div className="lg:col-span-6 space-y-6">
                                <MethodBlock>
                                    La primera ficha la escribí de memoria y estaba mal: decía rizos y ojos ámbar. Al ver sus hojas la reescribí con lo que de verdad se ve. La ficha se escribe mirando las hojas, nunca de memoria. Y para una marca externa el tono es atlético y editorial: conjunto gris opaco, playera larga y nada de poses. Una versión del lago salió con la playera corta y se descartó.
                                </MethodBlock>
                                <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-[#A86A3D]/30 text-sm sm:text-base text-[#1B1C1E]/90 shadow-md">
                                    La guía gratuita explica cómo crear la ficha y las hojas de tu personaje. Comenta DISCIPLINA en el reel de la campaña y te llega por mensaje.
                                </div>
                            </div>
                        </div>

                        {/* Galería de 2: hojas horizontales de Larisa */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/larisa-hoja-cara.jpg"
                                        alt="Hoja de cara de Larisa mostrando nueve ángulos faciales con una sola identidad consistente"
                                        width={1376}
                                        height={768}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono">
                                    Hoja de cara: nueve ángulos, una sola identidad.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/larisa-hoja-cuerpo.jpg"
                                        alt="Hoja de cuerpo de Larisa mostrando las proporciones atléticas que se respetan en cada pieza"
                                        width={1376}
                                        height={768}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono">
                                    Hoja de cuerpo: las proporciones que se respetan en cada pieza.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Comparación de El lago */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/lago-descartado-playera-corta.png"
                                        alt="Versión descartada de El lago donde Larisa lleva una playera corta que cambia el tono editorial"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono">
                                    Descartada: la playera corta cambia el tono.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#A86A3D]/70 bg-[#DFDDD7] shadow-[0_25px_55px_rgba(168,106,61,0.18)]">
                                    <Image
                                        src="/casos/larisa-technogym/piezas/07-el-lago.png"
                                        alt="Versión final de la pieza El lago con conjunto gris opaco de playera larga"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E] font-mono font-medium">
                                    Versión final.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 5. Paso 2 · Las referencias del producto */}
                <section className="py-20 sm:py-28 border-b border-[#1B1C1E]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7 space-y-6">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                    Paso 2 · Las referencias del producto
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                    Junté diez fotos del Kinesis Personal y me quedé con cinco: de frente, en uso, de lado, las poleas de cerca y montado en una casa. Todas en piel coñac.
                                </p>
                                <MethodBlock>
                                    El Kinesis existe en piel café oscuro y en coñac. Si mezclas los dos en las referencias, la IA inventa un tercer color, así que me quedé con uno solo. La foto en uso trae a un modelo hombre: se adjunta solo para enseñar cómo corren los cables, y el prompt le dice a la IA que lo ignore. Al recortar las poleas descubrí que las manijas son de acrílico transparente, no de metal. Mirar las referencias de cerca cambia la ficha.
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/referencia-descartada-otro-color.png"
                                        alt="Referencia descartada del Technogym Kinesis Personal en piel café oscuro en lugar de piel coñac"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono text-center">
                                    Descartada: el mismo aparato en otro color de piel.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 6. Paso 3 · Los espacios */}
                <section className="py-20 sm:py-28 border-b border-[#1B1C1E]/10 bg-[#E5E3DE]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                Paso 3 · Los espacios
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                Dos espacios, generados vacíos y en 3:4: un cuarto de entrenamiento de piedra gris y yeso blanco con un ventanal al lago, y una terraza de piedra sobre el agua al amanecer.
                            </p>
                        </div>

                        {/* Galería de 2 espacios */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                <Image
                                    src="/casos/larisa-technogym/proceso/espacio-e1-cuarto.png"
                                    alt="Espacio vacío 1: cuarto de entrenamiento de piedra gris y yeso blanco con ventanal al lago de Como"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            <div className="relative w-full rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                <Image
                                    src="/casos/larisa-technogym/proceso/espacio-e2-terraza.png"
                                    alt="Espacio vacío 2: terraza de piedra sobre el agua del lago de Como al amanecer"
                                    width={896}
                                    height={1200}
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Bloque Cómo se hace + imagen e1-descartado-banca-contra-la-pared.png */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
                            <div className="lg:col-span-7">
                                <MethodBlock>
                                    El espacio se aprueba pensando en lo que va a entrar después. En el cuarto descartado, la banca quedó pegada a la pared donde iba el aparato y no había lugar para entrenar. Y como la piel del Kinesis es coñac, igual que la piel de Larisa, los muros se dejaron blancos y grises para que ninguno de los dos se pierda.
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/e1-descartado-banca-contra-la-pared.png"
                                        alt="Espacio descartado donde la banca quedó pegada contra la pared donde debía instalarse el aparato"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono text-center">
                                    Descartado: la banca ocupa la pared del aparato.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 7. Paso 4 · La integración */}
                <section className="py-20 sm:py-28 border-b border-[#1B1C1E]/10">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-14">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                Paso 4 · La integración
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                Aquí se juntan la modelo, el espacio, la luz y el aparato real. El Kinesis tiene cables, poleas y diez barras de roble: piezas finas que la IA tiende a duplicar o dejar flotando. Tres reglas hicieron la diferencia.
                            </p>
                        </div>

                        {/* Comparación de la portada */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 items-start">
                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/portada-descartada-kinesis-girado.png"
                                        alt="Versión descartada de la portada donde el aparato Kinesis Personal quedó suelto y girado en el cuarto"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono">
                                    Descartada: el aparato quedó suelto y girado.
                                </figcaption>
                            </figure>

                            <figure className="flex flex-col">
                                <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#A86A3D]/70 bg-[#DFDDD7] shadow-[0_25px_55px_rgba(168,106,61,0.18)]">
                                    <Image
                                        src="/casos/larisa-technogym/piezas/01-portada-disciplina.png"
                                        alt="Versión final de la portada con el Technogym Kinesis Personal montado plano contra la pared"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E] font-mono font-medium">
                                    Versión final: montado plano en la pared.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Regla 1 + imagen remo-descartado-cable-al-zapato.png */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7">
                                <MethodBlock title="Regla 1 · Cada cable tiene origen y destino">
                                    Cada cable sale de una polea y llega a una manija. En una versión del remo, un cable bajaba del techo y otro parecía amarrado al tenis. En otra del agarre, el cable atravesaba la manija de lado a lado. Si un cable no tiene origen y destino, la foto se descarta.
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/remo-descartado-cable-al-zapato.png"
                                        alt="Versión descartada de El remo donde un cable termina en el tenis de la modelo"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono text-center">
                                    Descartada: el cable termina en el tenis.
                                </figcaption>
                            </figure>
                        </div>

                        {/* Regla 2 */}
                        <div>
                            <MethodBlock title="Regla 2 · La IA copia la escena de la referencia">
                                La foto de lado era de un showroom, con el aparato parado como exhibición. La IA copió esa pose y en la portada lo puso girado en medio del cuarto. Se corrigió con una frase en la ficha: montado plano contra la pared y paralelo a ella.
                            </MethodBlock>
                        </div>

                        {/* Regla 3 + imagen concentracion-descartada-sin-mangas.png */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7">
                                <MethodBlock title="Regla 3 · Lo mismo en todas">
                                    La continuidad se cuida pieza por pieza: el mismo conjunto de manga larga, la misma banca pegada al muro, los mismos tapetes de corcho. En Concentración, una versión salió con playera sin mangas; la cara estaba perfecta, pero rompía la serie.
                                </MethodBlock>
                            </div>
                            <figure className="lg:col-span-5 flex flex-col">
                                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-[#1B1C1E]/15 bg-[#DFDDD7] shadow-[0_20px_45px_rgba(27,28,30,0.12)]">
                                    <Image
                                        src="/casos/larisa-technogym/proceso/concentracion-descartada-sin-mangas.png"
                                        alt="Versión descartada de Concentración donde Larisa aparece con playera sin mangas rompiendo la continuidad"
                                        width={896}
                                        height={1200}
                                        sizes="(max-width: 1024px) 100vw, 448px"
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                                <figcaption className="mt-3 text-xs sm:text-sm text-[#1B1C1E]/75 font-mono text-center">
                                    Descartada: otra ropa.
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* 8. Paso 5 · Sin programas */}
                <section className="py-20 sm:py-28 border-b border-[#1B1C1E]/10 bg-[#E5E3DE]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-6 space-y-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                    Paso 5 · Sin programas
                                </h2>
                                <p className="text-lg sm:text-xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                    En una producción normal, la IA entrega material en bruto y el acabado se hace en Photoshop. Aquí no se abrió ningún programa. El color se escribe dentro del prompt y las correcciones se piden con lenguaje normal sobre la misma imagen.
                                </p>
                            </div>
                            <div className="lg:col-span-6">
                                <MethodBlock>
                                    Dos bloques de color fijos, uno de mañana y uno de amanecer, se pegan al final de cada prompt igual que la ficha fija la cara. En esta campaña no hubo ni una edición: todo lo que falló era de forma (un aparato girado, un cable de más, otra ropa), y eso no se arregla editando; se vuelve a generar.
                                </MethodBlock>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. El resultado */}
                <section className="py-20 sm:py-32 border-b border-[#1B1C1E]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#A86A3D]/8 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1B1C1E]">
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
                                        className="px-4 py-3 rounded-xl bg-white border border-[#A86A3D]/35 text-xs sm:text-sm font-mono font-medium text-[#1B1C1E] text-center shadow-sm"
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
                <section className="py-20 sm:py-28 border-b border-[#1B1C1E]/10 bg-[#E5E3DE]">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            <div className="lg:col-span-4">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1B1C1E]">
                                    Ficha técnica
                                </h2>
                                <div className="mt-4 h-1 w-16 bg-[#A86A3D] rounded-full" />
                            </div>

                            <div className="lg:col-span-8 rounded-2xl border border-[#1B1C1E]/15 bg-white overflow-hidden shadow-[0_15px_40px_rgba(27,28,30,0.08)]">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-[#1B1C1E]/15 hover:bg-transparent bg-[#EEEDEA]/60">
                                            <TableHead className="text-[#A86A3D] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Paso
                                            </TableHead>
                                            <TableHead className="text-[#A86A3D] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Qué se hace
                                            </TableHead>
                                            <TableHead className="text-[#A86A3D] font-mono font-bold text-xs sm:text-sm uppercase tracking-wider py-4 px-4 sm:px-6 whitespace-normal">
                                                Herramienta
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {TECH_SPECS.map((row) => (
                                            <TableRow
                                                key={row.step}
                                                className="border-[#1B1C1E]/10 hover:bg-[#EEEDEA]/50"
                                            >
                                                <TableCell className="font-semibold text-[#1B1C1E] text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.step}
                                                </TableCell>
                                                <TableCell className="text-[#1B1C1E]/85 text-xs sm:text-base py-4 px-4 sm:px-6 whitespace-normal align-top">
                                                    {row.action}
                                                </TableCell>
                                                <TableCell className="text-[#A86A3D] font-mono font-medium text-xs sm:text-sm py-4 px-4 sm:px-6 whitespace-normal align-top">
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
                <section className="py-20 sm:py-32 border-b border-[#1B1C1E]/10 relative overflow-hidden">
                    <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A86A3D]/10 rounded-full blur-[160px]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 space-y-12 relative z-10">
                        <div className="max-w-3xl space-y-4">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#1B1C1E]">
                                Ahora hazlo con tu personaje
                            </h2>
                            <p className="text-lg sm:text-xl text-[#1B1C1E]/85 leading-relaxed font-normal">
                                Todo lo que ves aquí sale de un método: personajes que no cambian de cara, en cualquier escena, con cualquier producto, campaña tras campaña. Sin saber Photoshop y sin abrir ningún programa.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                            {/* Tarjeta 1: Guía gratuita */}
                            <Card className="p-7 sm:p-9 bg-white border-[#1B1C1E]/15 text-[#1B1C1E] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B1C1E]">
                                        Guía gratuita
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1B1C1E] font-mono">
                                        Gratis
                                    </div>
                                    <p className="text-base text-[#1B1C1E]/80 leading-relaxed font-normal">
                                        La ficha de identidad y las hojas de referencia para tu personaje.
                                    </p>
                                </div>
                                <div className="w-full py-3.5 px-4 rounded-xl bg-[#EEEDEA] border border-[#1B1C1E]/20 text-center text-xs sm:text-sm font-mono font-medium text-[#1B1C1E]">
                                    Comenta DISCIPLINA en el reel
                                </div>
                            </Card>

                            {/* Tarjeta 2: REALISMO Blueprint · Guía completa */}
                            <Card className="p-7 sm:p-9 bg-white border-[#1B1C1E]/20 text-[#1B1C1E] rounded-2xl flex flex-col justify-between gap-8 shadow-lg">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1B1C1E]">
                                        REALISMO Blueprint · Guía completa
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1B1C1E] font-mono">
                                        9.99 USD
                                    </div>
                                    <p className="text-base text-[#1B1C1E]/80 leading-relaxed font-normal">
                                        Las 4 fases del método para que tu personaje no cambie de cara.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#1B1C1E] text-white hover:bg-[#1B1C1E]/90 font-bold text-base"
                                >
                                    <a href="{{URL_GUIA}}">Comprar la guía</a>
                                </Button>
                            </Card>

                            {/* Tarjeta 3: Bundle (Destacada) */}
                            <Card className="p-7 sm:p-9 bg-gradient-to-b from-[#332215] via-[#231B15] to-[#1B1C1E] border-2 border-[#A86A3D] text-white rounded-2xl flex flex-col justify-between gap-8 shadow-[0_20px_55px_rgba(168,106,61,0.28)] relative">
                                <div className="space-y-4">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                                        Bundle
                                    </h3>
                                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                                        25 USD
                                    </div>
                                    <p className="text-base text-white/90 leading-relaxed font-light">
                                        Guía + masterclass grabada + skills + prompts + los casos completos de Megan, Ilan, Tatiana y Larisa.
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    size="lg"
                                    className="w-full h-14 rounded-xl bg-[#A86A3D] hover:bg-[#935a31] text-white font-bold text-base shadow-lg"
                                >
                                    <a href="{{URL_BUNDLE}}">Quiero el bundle</a>
                                </Button>
                            </Card>
                        </div>

                        <div className="pt-4 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 text-center">
                            <Link
                                href="/casos/megan-lost-cherry"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#A86A3D] hover:text-[#1B1C1E] underline underline-offset-4 decoration-[#A86A3D]/50 transition-colors"
                            >
                                <span>Campaña 001: Megan × Lost Cherry</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-roadster"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#A86A3D] hover:text-[#1B1C1E] underline underline-offset-4 decoration-[#A86A3D]/50 transition-colors"
                            >
                                <span>Campaña 002: Ilan × Tesla Roadster</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-anr"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#A86A3D] hover:text-[#1B1C1E] underline underline-offset-4 decoration-[#A86A3D]/50 transition-colors"
                            >
                                <span>Campaña 003: Tatiana × Advanced Night Repair</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/ilan-celestiq"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#A86A3D] hover:text-[#1B1C1E] underline underline-offset-4 decoration-[#A86A3D]/50 transition-colors"
                            >
                                <span>Campaña 004: Ilan × Cadillac Celestiq</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/tatiana-clase-azul"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#A86A3D] hover:text-[#1B1C1E] underline underline-offset-4 decoration-[#A86A3D]/50 transition-colors"
                            >
                                <span>Campaña 005: Tatiana × Clase Azul</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/casos/megan-serpenti"
                                className="inline-flex items-center gap-2 text-sm sm:text-base font-mono font-medium text-[#A86A3D] hover:text-[#1B1C1E] underline underline-offset-4 decoration-[#A86A3D]/50 transition-colors"
                            >
                                <span>Campaña 006: Megan × Serpenti</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 12. Aviso legal (pie de página) */}
                <section className="py-12 bg-[#DFDDD7]">
                    <div className="mx-auto max-w-5xl px-4 sm:px-6">
                        <p className="text-xs sm:text-sm text-[#1B1C1E]/65 leading-relaxed text-center">
                            Proyecto conceptual y no comercial. IA Builders Lab no tiene afiliación, patrocinio ni relación comercial con Technogym ni con Antonio Citterio. Las marcas y productos citados pertenecen a sus dueños y se mencionan solo con fines ilustrativos. La persona de las imágenes no existe: es un personaje generado con inteligencia artificial.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
