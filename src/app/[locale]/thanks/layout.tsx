import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¡Gracias! - Social Conversion Pack',
    description: 'Gracias por adquirir el Social Conversion Pack. Estamos listos para empezar.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function ThanksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
