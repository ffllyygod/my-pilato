'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Wheat, ChevronRight } from 'lucide-react';

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const products = [
    {
      name: 'Spaghetti Classico',
      nameHi: 'स्पेगेटी',
      type: 'Long Pasta',
      cookTime: 11,
      wheatType: '100% Durum',
      description: 'Traditional long pasta with perfect al dente texture. Bronze-cut for superior sauce adhesion.',
      emoji: '🍝',
      featured: true
    },
    {
      name: 'Penne Rigate',
      nameHi: 'पेन्ने',
      type: 'Tubular Pasta',
      cookTime: 12,
      wheatType: 'Organic Durum',
      description: 'Ridged tubes that capture chunky sauces beautifully. Versatile and family-friendly.',
      emoji: '🍝',
      featured: true
    },
    {
      name: 'Fusilli Lunghi',
      nameHi: 'फुसिल्ली',
      type: 'Spiral Pasta',
      cookTime: 14,
      wheatType: 'Stone-Ground',
      description: 'Long spirals perfect for thick sauces. Complex shape holds flavors in every twist.',
      emoji: '🍝',
      featured: false
    },
    {
      name: 'Farfalle',
      nameHi: 'फार्फल्ले',
      type: 'Shaped Pasta',
      cookTime: 10,
      wheatType: '100% Durum',
      description: 'Elegant butterfly shape adds visual appeal. Light and delicate for oil-based sauces.',
      emoji: '🦋',
      featured: false
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-24 md:py-32 px-6"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FDF8F0 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-6 py-2 rounded-full"
            style={{
              background: 'rgba(244, 185, 61, 0.15)',
              border: '1px solid rgba(244, 185, 61, 0.3)'
            }}
          >
            <span className="text-sm font-medium tracking-wider" style={{ color: '#F4B93D' }}>
              OUR PASTA RANGE
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-6xl font-serif mb-4"
            style={{ color: '#2A2A2A', lineHeight: 1.2 }}
          >
            Shapes that tell
            <br />
            <span style={{ color: '#E31E24' }}>a thousand stories</span>
          </h2>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative h-full p-8 rounded-sm overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #F5E6D3',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 12px 30px rgba(227, 30, 36, 0.12)'
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Featured badge */}
                {product.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wider"
                    style={{
                      background: '#E31E24',
                      color: '#FFFFFF'
                    }}
                  >
                    POPULAR
                  </motion.div>
                )}

                {/* Emoji icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  {product.emoji}
                </div>

                {/* Hindi name */}
                <div 
                  className="text-sm mb-1 font-light"
                  style={{ color: '#F4B93D' }}
                >
                  {product.nameHi}
                </div>

                {/* English name */}
                <h3 
                  className="text-2xl font-serif mb-2"
                  style={{ color: '#2A2A2A' }}
                >
                  {product.name}
                </h3>

                {/* Type */}
                <div 
                  className="text-xs font-medium tracking-wider mb-4 uppercase"
                  style={{ color: '#999' }}
                >
                  {product.type}
                </div>

                {/* Description */}
                <p 
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: '#6B6B6B' }}
                >
                  {product.description}
                </p>

                {/* Specs */}
                <div className="flex items-center gap-4 mb-6 text-xs" style={{ color: '#999' }}>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{product.cookTime} min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Wheat size={14} />
                    <span>{product.wheatType}</span>
                  </div>
                </div>

                {/* Learn more link */}
                <motion.div
                  className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                  style={{ color: '#E31E24' }}
                >
                  <span>Learn More</span>
                  <ChevronRight size={16} />
                </motion.div>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg, #E31E24, #F4B93D)' }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 text-sm font-medium tracking-wider transition-all duration-300"
            style={{
              background: '#E31E24',
              color: '#FFFFFF',
              borderRadius: '2px',
              boxShadow: '0 4px 15px rgba(227, 30, 36, 0.3)'
            }}
          >
            VIEW COMPLETE RANGE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}