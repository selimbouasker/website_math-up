import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
      <head>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1233311415661290');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1233311415661290&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
