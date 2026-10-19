export interface CaseStudyItem {
    number: string;
    slug: string;
    href: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    coverImage: string;
    accentColor: string;
    bgColor: string;
    isRealBrand?: boolean;
}

export const CASE_STUDIES: CaseStudyItem[] = [
    {
        number: "001",
        slug: "megan-lost-cherry",
        href: "/casos/megan-lost-cherry",
        title: "No es inocente",
        subtitle: "Megan × Lost Cherry",
        category: "Alta perfumería",
        description:
            "Campaña de perfume de lujo hecha 100% con IA: nueve piezas, una modelo virtual pelirroja que conserva sus pecas en cada encuadre y cero cámaras.",
        coverImage: "/casos/megan-lost-cherry/piezas/01-portada-la-cereza.webp",
        accentColor: "#E03E5A",
        bgColor: "#0B0708",
    },
    {
        number: "002",
        slug: "ilan-roadster",
        href: "/casos/ilan-roadster",
        title: "Ya se fue",
        subtitle: "Ilan × Tesla Roadster",
        category: "Automotriz de lujo",
        description:
            "Campaña de auto de lujo en el desierto al amanecer con el modelo virtual Ilan y el nuevo Tesla Roadster: nueve piezas en formatos 4:5, 16:9 y 1:1.",
        coverImage: "/casos/ilan-roadster/piezas/01-portada-la-puerta.png",
        accentColor: "#C9A46A",
        bgColor: "#0A0B0C",
    },
    {
        number: "003",
        slug: "tatiana-anr",
        href: "/casos/tatiana-anr",
        title: "Después del sol",
        subtitle: "Tatiana × Advanced Night Repair",
        category: "Skincare de lujo",
        description:
            "El ritual nocturno de verano con la modelo virtual Tatiana y el serum Advanced Night Repair: piel real con pecas y texto legible en el frasco.",
        coverImage: "/casos/tatiana-anr/piezas/01-portada-despues-del-sol.png",
        accentColor: "#D39A4E",
        bgColor: "#0B0D14",
    },
    {
        number: "004",
        slug: "ilan-celestiq",
        href: "/casos/ilan-celestiq",
        title: "El encargo",
        subtitle: "Ilan × Cadillac Celestiq",
        category: "Ultra lujo automotriz",
        description:
            "Segunda campaña de Ilan: el mismo modelo virtual, con la misma cara, en una noche de lluvia en la ciudad junto a un auto hecho por encargo.",
        coverImage: "/casos/ilan-celestiq/piezas/01-portada-el-encargo.jpg",
        accentColor: "#A9BDF2",
        bgColor: "#0A0C12",
    },
    {
        number: "005",
        slug: "tatiana-clase-azul",
        href: "/casos/tatiana-clase-azul",
        title: "Ninguna es igual",
        subtitle: "Tatiana × Clase Azul Reposado",
        category: "Tequila de lujo",
        description:
            "Segunda campaña de Tatiana: una tarde en una hacienda de Jalisco donde las pecas de la modelo riman con la cerámica pintada a mano.",
        coverImage: "/casos/tatiana-clase-azul/piezas/01-portada-una-sola.png",
        accentColor: "#1F3FA6",
        bgColor: "#F5F0E6",
    },
    {
        number: "006",
        slug: "megan-serpenti",
        href: "/casos/megan-serpenti",
        title: "Se sostiene sola",
        subtitle: "Megan × Bulgari Serpenti Tubogas",
        category: "Alta relojería",
        description:
            "Cinco campañas después de la primera, Megan vuelve a un palazzo romano con la misma hoja de cara y el reloj de dos vueltas en espiral.",
        coverImage: "/casos/megan-serpenti/piezas/01-portada-se-sostiene-sola.png",
        accentColor: "#C9A24A",
        bgColor: "#0C1411",
    },
    {
        number: "007",
        slug: "larisa-technogym",
        href: "/casos/larisa-technogym",
        title: "La disciplina también es diseño",
        subtitle: "Larisa × Technogym Kinesis Personal",
        category: "Bienestar de lujo",
        description:
            "El debut de Larisa en una casa frente al lago de Como a las seis de la mañana con el aparato diseñado por Antonio Citterio.",
        coverImage: "/casos/larisa-technogym/piezas/01-portada-disciplina.png",
        accentColor: "#A86A3D",
        bgColor: "#EEEDEA",
    },
    {
        number: "008",
        slug: "vallehalla-hidromiel",
        href: "/casos/vallehalla-hidromiel",
        title: "La mesa larga",
        subtitle: "Ilan y Tatiana × Vallehalla Hidromiel",
        category: "Marca real · Lujo",
        description:
            "Primera campaña con dos modelos virtuales en la misma foto y una botella artesanal real con su etiqueta sin letras inventadas.",
        coverImage: "/casos/vallehalla-hidromiel/piezas/01-portada-la-mesa-larga.png",
        accentColor: "#EDAE08",
        bgColor: "#12100C",
        isRealBrand: true,
    },
    {
        number: "009",
        slug: "larisa-bottega",
        href: "/casos/larisa-bottega",
        title: "Andiamo",
        subtitle: "Larisa × Bottega Veneta",
        category: "Moda de lujo",
        description:
            "Del gimnasio a la moda: Larisa en un viaje en tren hacia la costa italiana acompañada por la bolsa Andiamo en gamuza verde olivo.",
        coverImage: "/casos/larisa-bottega/piezas/01-portada-vamonos.png",
        accentColor: "#5E6B3A",
        bgColor: "#F4F0E7",
    },
    {
        number: "010",
        slug: "laura-invitto",
        href: "/casos/laura-invitto",
        title: "Distinción total",
        subtitle: "Laura × Invitto",
        category: "Producto digital · Marca real",
        description:
            "El debut de Laura demostrando cómo anunciar una plataforma digital de bodas con pantallas reales y legibles sin abrir Photoshop.",
        coverImage: "/casos/laura-invitto/piezas/01-portada-enviar.png",
        accentColor: "#DF3B94",
        bgColor: "#FFFFFF",
        isRealBrand: true,
    },
    {
        number: "011",
        slug: "vallehalla-comercial",
        href: "/casos/vallehalla-comercial",
        title: "Destápalo con los tuyos",
        subtitle: "Ilan y Tatiana × Vallehalla Hidromiel",
        category: "Modo comercial · Marca real",
        description:
            "La misma marca del caso de lujo, ahora en modo comercial: un rooftop, cielo azul, la botella a cámara y el truco del zoom para la etiqueta.",
        coverImage: "/casos/vallehalla-comercial/piezas/01-portada-destapalo-con-los-tuyos.png",
        accentColor: "#2350D8",
        bgColor: "#FFFFFF",
        isRealBrand: true,
    },
];
