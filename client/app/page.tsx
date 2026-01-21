"use client"

import Hero from '@/components/home/hero';
import Philosophy from '@/components/home/philosophy';
import ProductShowcase from '@/components/home/product-showcase';
import ManufacturingProcess from '@/components/home/manufacturing-process';
import QualityHealth from '@/components/home/quality-health';
import Navigation from '@/components/home/nav';
import Footer from '@/components/home/footer';
import PilatoPreloader from '@/components/home/preloader';
import { useState } from 'react';
import { motion } from 'framer-motion';


export default function HomePage() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <PilatoPreloader onComplete={() => setLoading(false)} />
      {!loading && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Philosophy />
        <ProductShowcase />
        <ManufacturingProcess />
        <QualityHealth />
      </main>
      <Footer />
        </motion.div>
      )}
    </>
  );
}

// export const metadata = {
//   title: 'Pilato - Premium Indian Pasta Manufacturer | स्वाद bhi सेहत bhi',
//   description: 'India\'s leading pasta manufacturer combining taste and health. Bronze-extruded, slow-dried premium pasta made from finest durum wheat. Manufacturing excellence since 1989.',
//   keywords: [
//     'pasta manufacturer india',
//     'premium pasta',
//     'dry pasta',
//     'bronze extrusion',
//     'durum wheat pasta',
//     'pilato pasta',
//     'indian pasta brand',
//     'healthy pasta',
//     'wholesale pasta',
//     'pasta manufacturing',
//     'taste bhi health bhi',
//     'swad bhi sehat bhi'
//   ],
//   openGraph: {
//     title: 'Pilato - स्वाद bhi सेहत bhi',
//     description: 'Premium pasta manufacturing with Indian innovation',
//     type: 'website',
//   },
// };