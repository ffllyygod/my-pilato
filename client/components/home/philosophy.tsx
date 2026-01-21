'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Leaf, Award } from 'lucide-react';

export default function Philosophy() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const values = [
    {
      icon: Heart,
      titleEn: 'Taste First',
      titleHi: 'स्वाद',
      description: 'Every strand carries the authentic flavor of premium durum wheat, bronze-cut to hold sauces perfectly.',
      color: '#E31E24'
    },
    {
      icon: Leaf,
      titleEn: 'Health Matters',
      titleHi: 'सेहत',
      description: 'Low glycemic index, high protein, and rich in dietary fiber. Pasta that nourishes as it delights.',
      color: '#4CAF50'
    },
    {
      icon: Award,
      titleEn: 'Excellence',
      titleHi: 'गुणवत्ता',
      description: 'Three generations of expertise meet modern technology in every batch we manufacture.',
      color: '#F4B93D'
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-6 py-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(227, 30, 36, 0.1), rgba(244, 185, 61, 0.1))',
              border: '1px solid rgba(227, 30, 36, 0.2)'
            }}
          >
            <span className="text-sm font-medium tracking-wider" style={{ color: '#E31E24' }}>
              OUR PHILOSOPHY
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-6xl font-serif mb-6"
            style={{ color: '#2A2A2A', lineHeight: 1.2 }}
          >
            Pasta is not just food,
            <br />
            <span style={{ color: '#E31E24' }}>it's a promise</span>
          </h2>

          <p 
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
            style={{ color: '#6B6B6B', lineHeight: 1.6 }}
          >
            Our motto <span className="font-medium" style={{ color: '#E31E24' }}>स्वाद bhi सेहत bhi</span> reflects our commitment 
            to creating pasta that satisfies both your palate and your wellbeing
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.titleEn}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + (index * 0.15) }}
              className="group relative"
            >
              <div className="relative p-8 h-full rounded-sm transition-all duration-500"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #F5E6D3',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-6 inline-flex p-4 rounded-sm"
                  style={{
                    background: `${value.color}15`,
                    color: value.color
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon size={32} strokeWidth={1.5} />
                </motion.div>

                {/* Hindi title */}
                <div 
                  className="text-3xl font-light mb-2"
                  style={{ color: value.color }}
                >
                  {value.titleHi}
                </div>

                {/* English title */}
                <h3 
                  className="text-xl font-semibold mb-4 tracking-wide"
                  style={{ color: '#2A2A2A' }}
                >
                  {value.titleEn}
                </h3>

                {/* Description */}
                <p 
                  className="leading-relaxed"
                  style={{ color: '#6B6B6B', fontSize: '15px' }}
                >
                  {value.description}
                </p>

                {/* Hover effect - bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: value.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-6 rounded-sm relative"
            style={{
              background: 'linear-gradient(135deg, #FDF8F0, #F5E6D3)',
              border: '1px solid #F4B93D20'
            }}
          >
            <p 
              className="text-lg md:text-xl italic font-light"
              style={{ color: '#2A2A2A' }}
            >
              "Time, temperature, and tradition—the three pillars of perfect pasta"
            </p>
            <div 
              className="mt-3 text-sm font-medium tracking-widest"
              style={{ color: '#E31E24' }}
            >
              — PILATO MANUFACTURING PRINCIPLE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div 
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #F4B93D, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />
    </section>
  );
}