import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

// Font configurations
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pilato - Premium Italian Pasta Manufacturer',
  description: 'Leading Italian pasta manufacturer. Bronze-extruded dry pasta, slow-dried for 48 hours. Premium durum wheat from Emilia-Romagna.',
  keywords: ['pasta manufacturer', 'dry pasta', 'bronze extrusion', 'Italian pasta', 'wholesale pasta', 'durum wheat'],
  authors: [{ name: 'Pilato Pasta' }],
  openGraph: {
    title: 'Pilato - Premium Italian Pasta Manufacturer',
    description: 'Bronze-extruded dry pasta, slow-dried for 48 hours',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased bg-pilato-cream text-pilato-charcoal">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}