import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Math Up | Les maths autrement',
  description: 'Plateforme educative de mathematiques adaptee au niveau de chaque eleve. Programme tunisien, IA integree, progression personnalisee.',
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
