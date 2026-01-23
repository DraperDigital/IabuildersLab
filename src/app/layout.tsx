import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iabuildersvault.com'), // Replace with actual domain
  title: {
    default: 'IA Builders Vault',
    template: '%s | IA Builders Vault',
  },
  description: 'The ultimate repository of AI systems, prompts, and automations for builders.',
  openGraph: {
    title: 'IA Builders Vault',
    description: 'The ultimate repository of AI systems, prompts, and automations for builders.',
    url: 'https://iabuildersvault.com',
    siteName: 'IA Builders Vault',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA Builders Vault',
    description: 'The ultimate repository of AI systems, prompts, and automations for builders.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
