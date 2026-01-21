'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const hindiRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const pastaRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], ['0%', '20%']);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Set initial states
    gsap.set([headlineRef.current, sublineRef.current, hindiRef.current, ctaRef.current], { 
      opacity: 0,
      y: 80
    });
    
    gsap.set(pastaRefs.current, {
      scale: 0,
      opacity: 0,
      rotation: -90
    });

    // Entrance sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.6,
      delay: 0.2
    })
    .to(hindiRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
    }, '-=1')
    .to(sublineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.8')
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    }, '-=0.6')
    .to(pastaRefs.current, {
      scale: 1,
      opacity: 0.08,
      rotation: 0,
      duration: 1.5,
      stagger: {
        each: 0.12,
        from: 'random'
      }
    }, '-=1.4');

    // Continuous float animation
    pastaRefs.current.forEach((pasta, i) => {
      if (!pasta) return;
      gsap.to(pasta, {
        y: `${Math.random() > 0.5 ? '+' : '-'}=${20 + Math.random() * 15}`,
        x: `${Math.random() > 0.5 ? '+' : '-'}=${10 + Math.random() * 10}`,
        rotation: `${Math.random() > 0.5 ? '+' : '-'}=${10 + Math.random() * 5}`,
        duration: 4 + Math.random() * 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.15
      });
    });

  }, { scope: containerRef });

  const pastaShapes = [
    { emoji: '🌾', x: '8%', y: '15%' },
    { emoji: '🍝', x: '92%', y: '12%' },
    { emoji: '🌾', x: '12%', y: '75%' },
    { emoji: '🍝', x: '88%', y: '70%' },
    { emoji: '🌾', x: '20%', y: '35%' },
    { emoji: '🍝', x: '78%', y: '40%' },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDF8F0 0%, #FFFFFF 40%, #F5E6D3 100%)'
      }}
    >
      {/* Animated background shapes */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {pastaShapes.map((shape, index) => (
          <div
            key={index}
            ref={(el) => { pastaRefs.current[index] = el; }}
            className="absolute text-7xl md:text-8xl select-none"
            style={{
              left: shape.x,
              top: shape.y,
              filter: 'blur(0.5px)',
              willChange: 'transform'
            }}
          >
            {shape.emoji}
          </div>
        ))}

        {/* Subtle radial gradient overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle at 25% 20%, #F4B93D 0%, transparent 60%), radial-gradient(circle at 75% 80%, #E31E24 0%, transparent 60%)'
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div 
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center px-6 max-w-7xl"
      >
        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif mb-8 leading-[0.92] tracking-tight"
          style={{ 
            color: '#2A2A2A',
            fontWeight: 400
          }}
        >
          Manufactured Slowly.
          <br />
          <span 
            className="italic font-light"
            style={{
              background: 'linear-gradient(120deg, #E31E24 0%, #F4B93D 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Crafted Perfectly.
          </span>
        </h1>

        {/* Hindi motto */}
        <div
          ref={hindiRef}
          className="mb-6 text-2xl md:text-3xl font-light tracking-wide"
          style={{ color: '#E31E24' }}
        >
          स्वाद <span style={{ color: '#2A2A2A' }}>bhi</span> सेहत <span style={{ color: '#2A2A2A' }}>bhi</span>
        </div>

        {/* Subline */}
        <p
          ref={sublineRef}
          className="text-lg sm:text-xl md:text-2xl mb-12 tracking-wide font-light max-w-3xl mx-auto"
          style={{ color: '#6B6B6B', lineHeight: 1.6 }}
        >
          Premium dry pasta from India's finest durum wheat
          <br className="hidden sm:block" />
          Bronze-extruded & slow-dried for 48 hours
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button 
            className="px-10 py-5 text-base font-medium tracking-[0.15em] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5"
            style={{
              background: '#E31E24',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#C41A1F';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#E31E24';
            }}
          >
            OUR PASTA RANGE
          </button>

          <button 
            className="px-10 py-5 text-base font-medium tracking-[0.15em] transition-all duration-300 transform hover:-translate-y-0.5"
            style={{
              background: 'transparent',
              color: '#2A2A2A',
              border: '2px solid #F4B93D',
              borderRadius: '2px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F4B93D';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            OUR PROCESS
          </button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs tracking-[0.25em] uppercase" style={{ color: '#999' }}>
            Discover More
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={24} style={{ color: '#F4B93D' }} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)'
        }}
      />
    </section>
  );
}