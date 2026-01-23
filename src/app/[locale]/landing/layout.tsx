import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Social Conversion Pack - Contenido que Convierte',
    description: 'Aumenta tu facturación con historias y carruseles estratégicos diseñados para convertir atención en acciones reales.',
    openGraph: {
        title: 'Social Conversion Pack',
        description: 'Contenido visual que convierte atención en acciones reales.',
        images: [
            {
                url: '/og-social.png', // Reemplazar con imagen real cuando esté disponible
                width: 1200,
                height: 630,
                alt: 'Social Conversion Pack Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Social Conversion Pack',
        description: 'Contenido visual que convierte atención en acciones reales.',
        images: ['/og-social.png'],
    },
};

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
