'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Zap, Heart, Leaf } from 'lucide-react';

export default function QualityHealth() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Shield,
      title: 'Premium Quality',
      titleHi: 'उच्च गुणवत्ता',
      description: 'Bronze-cut surface retains more nutrients and creates perfect texture',
      stat: '100%',
      statLabel: 'Pure Durum'
    },
    {
      icon: Zap,
      title: 'High Protein',
      titleHi: 'प्रोटीन भरपूर',
      description: '13g protein per 100g serving - fuel for your active lifestyle',
      stat: '13g',
      statLabel: 'Protein/100g'
    },
    {
      icon: Heart,
      title: 'Heart Healthy',
      titleHi: 'हृदय के लिए',
      description: 'Low glycemic index helps maintain steady energy and blood sugar',
      stat: 'Low GI',
      statLabel: 'Glycemic Index'
    },
    {
      icon: Leaf,
      title: 'Natural Ingredients',
      titleHi: 'प्राकृतिक',
      description: 'No preservatives, no artificial colors - just wheat and water',
      stat: '2',
      statLabel: 'Ingredients Only'
    },
  ];

  const certifications = [
    { name: 'ISO 22000', description: 'Food Safety' },
    { name: 'FSSAI', description: 'Approved' },
    { name: 'Organic', description: 'Certified' },
    { name: 'Halal', description: 'Certified' },
  ];

  return (
    <section
      ref={sectionRef}
      id="quality"
      className="py-24 md:py-32 px-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FDF8F0 0%, #FFFFFF 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        
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
              background: 'rgba(76, 175, 80, 0.1)',
              border: '1px solid rgba(76, 175, 80, 0.3)'
            }}
          >
            <span className="text-sm font-medium tracking-wider" style={{ color: '#4CAF50' }}>
              QUALITY & HEALTH
            </span>
          </motion.div>

          <h2 
            className="text-4xl md:text-6xl font-serif mb-6"
            style={{ color: '#2A2A2A', lineHeight: 1.2 }}
          >
            <span style={{ color: '#E31E24' }}>स्वाद</span> bhi{' '}
            <span style={{ color: '#4CAF50' }}>सेहत</span> bhi
          </h2>

          <p 
            className="text-lg md:text-xl font-light max-w-3xl mx-auto"
            style={{ color: '#6B6B6B', lineHeight: 1.6 }}
          >
            Our pasta delivers exceptional taste without compromising on health.
            <br className="hidden md:block" />
            Every serving is packed with nutrition your body needs.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + (index * 0.1) }}
            >
              <div 
                className="p-8 h-full rounded-sm transition-all duration-500 group"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #F5E6D3',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04)'
                }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-6 inline-flex p-4 rounded-sm"
                  style={{
                    background: 'rgba(76, 175, 80, 0.1)',
                    color: '#4CAF50'
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon size={28} strokeWidth={1.5} />
                </motion.div>

                {/* Hindi title */}
                <div 
                  className="text-lg mb-1 font-light"
                  style={{ color: '#E31E24' }}
                >
                  {benefit.titleHi}
                </div>

                {/* English title */}
                <h3 
                  className="text-xl font-semibold mb-3"
                  style={{ color: '#2A2A2A' }}
                >
                  {benefit.title}
                </h3>

                {/* Stat */}
                <div className="mb-3">
                  <div 
                    className="text-3xl font-light"
                    style={{ color: '#4CAF50' }}
                  >
                    {benefit.stat}
                  </div>
                  <div 
                    className="text-xs tracking-wider uppercase"
                    style={{ color: '#999' }}
                  >
                    {benefit.statLabel}
                  </div>
                </div>

                {/* Description */}
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: '#6B6B6B' }}
                >
                  {benefit.description}
                </p>

                {/* Hover line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: '#4CAF50' }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 
            className="text-2xl font-serif mb-8"
            style={{ color: '#2A2A2A' }}
          >
            Certified Excellence
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="px-8 py-6 rounded-sm"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #F4B93D',
                  boxShadow: '0 4px 15px rgba(244, 185, 61, 0.1)'
                }}
              >
                <div 
                  className="text-2xl font-semibold mb-1"
                  style={{ color: '#E31E24' }}
                >
                  {cert.name}
                </div>
                <div 
                  className="text-sm tracking-wider uppercase"
                  style={{ color: '#999' }}
                >
                  {cert.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nutritional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 text-sm font-medium tracking-wider transition-all duration-300"
            style={{
              background: '#4CAF50',
              color: '#FFFFFF',
              borderRadius: '2px',
              boxShadow: '0 4px 15px rgba(76, 175, 80, 0.3)'
            }}
          >
            VIEW COMPLETE NUTRITIONAL INFO
          </motion.button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #4CAF50, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
    </section>
  );
}