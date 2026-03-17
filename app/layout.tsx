import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Math Up | Les maths autrement',
  description: 'Plateforme educative de mathematiques adaptee au niveau de chaque eleve. Programme tunisien, IA integree, progression personnalisee.',
  metadataBase: new URL('https://math-up.ai'),
  openGraph: {
    title: 'Math Up | Les maths autrement',
    description: 'Plateforme éducative de mathématiques adaptée au niveau de chaque élève. Programme tunisien, IA intégrée, progression personnalisée.',
    url: 'https://math-up.ai',
    siteName: 'Math Up',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://i.ibb.co/LhHtYLwZ/icon.png',
        width: 800,
        height: 800,
        alt: 'Math Up',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Math Up | Les maths autrement',
    description: 'Plateforme éducative de mathématiques adaptée au niveau de chaque élève.',
    images: ['https://i.ibb.co/LhHtYLwZ/icon.png'],
  },
  other: {
    'facebook-domain-verification': 'esi4lh365l8kb6k779ly2p1gcfgzas',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
