'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ManufacturingProcess() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Premium Wheat Selection',
      titleHi: 'गेहूं चयन',
      description: 'We source the finest durum wheat from certified organic farms across India. Each batch is tested for protein content, moisture levels, and purity.',
      icon: '🌾'
    },
    {
      number: '02',
      title: 'Stone Grinding',
      titleHi: 'पीसाई',
      description: 'Traditional stone mills preserve the wheat\'s natural nutrients and golden color. Slow grinding prevents heat buildup and maintains quality.',
      icon: '⚙️'
    },
    {
      number: '03',
      title: 'Bronze Extrusion',
      titleHi: 'आकार देना',
      description: 'Bronze dies create a rough, porous surface that holds sauce perfectly. This traditional method is the hallmark of premium pasta.',
      icon: '🔧'
    },
    {
      number: '04',
      title: 'Slow Drying - 48 Hours',
      titleHi: 'सुखाना',
      description: 'Low-temperature drying for 48 hours preserves the wheat\'s flavor and ensures optimal texture. No shortcuts, no compromises.',
      icon: '⏰'
    },
    {
      number: '05',
      title: 'Quality Testing',
      titleHi: 'गुणवत्ता जांच',
      description: 'Every batch undergoes rigorous testing for texture, cooking time, and nutritional content before packaging.',
      icon: '✓'
    },
    {
      number: '06',
      title: 'Packaging',
      titleHi: 'पैकेजिंग',
      description: 'Sealed in food-grade materials to lock in freshness. From our factory to your kitchen with care.',
      icon: '📦'
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 md:py-32 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
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
            className="inline-block mb-4 px-6 py-2 rounded-full"
            style={{
              background: 'rgba(244, 185, 61, 0.2)',
              border: '1px solid rgba(244, 185, 61, 0.4)'
            }}
          >
            <span className="text-sm font-medium tracking-wider" style={{ color: '#F4B93D' }}>
              HOW WE MAKE IT
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-6xl font-serif mb-6"
            style={{ color: '#FFFFFF', lineHeight: 1.2 }}
          >
            From wheat to wonder,
            <br />
            <span style={{ color: '#F4B93D' }}>every step matters</span>
          </h2>

          <p 
            className="text-lg md:text-xl font-light max-w-2xl mx-auto"
            style={{ color: '#CCCCCC', lineHeight: 1.6 }}
          >
            Our manufacturing process combines ancestral wisdom with modern precision
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
              className="relative group"
            >
              <div 
                className="p-8 h-full rounded-sm transition-all duration-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Step number */}
                <div 
                  className="text-7xl font-light mb-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ color: '#F4B93D', lineHeight: 1 }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>

                {/* Hindi title */}
                <div 
                  className="text-sm mb-2 font-light"
                  style={{ color: '#F4B93D' }}
                >
                  {step.titleHi}
                </div>

                {/* English title */}
                <h3 
                  className="text-xl font-semibold mb-4 tracking-wide"
                  style={{ color: '#FFFFFF' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#CCCCCC' }}
                >
                  {step.description}
                </p>

                {/* Hover accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 rounded-full"
                  style={{ 
                    background: 'linear-gradient(90deg, #E31E24, #F4B93D)',
                    width: '0%'
                  }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '48', label: 'Hours Drying', unit: 'hrs' },
            { value: '100', label: 'Quality Checks', unit: '%' },
            { value: '35+', label: 'Years Experience', unit: 'yrs' },
            { value: '12', label: 'Pasta Varieties', unit: 'types' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
              className="text-center"
            >
              <div 
                className="text-4xl md:text-5xl font-light mb-2"
                style={{ 
                  background: 'linear-gradient(135deg, #E31E24, #F4B93D)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm tracking-wider uppercase"
                style={{ color: '#999' }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #F4B93D 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />
    </section>
  );
}