'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { Lobster } from 'next/font/google';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster',
});

export default function PilatoLoader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [isDone, setIsDone] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const textStrokeRef = useRef<SVGTextElement>(null);
  const textFillRef = useRef<SVGTextElement>(null);

  // 🔒 Prevent GSAP from running again during exit
  const hasAnimated = useRef(false);

  const logoPath = `
    M 48 128
    C 48 78 118 52 178 72
    C 220 86 262 60 292 74
    C 310 84 310 116 292 132
    C 262 154 220 178 178 160
    C 118 136 48 176 48 128
    Z
  `;

  useLayoutEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const outlineLen = outlineRef.current?.getTotalLength() || 1000;
      const textLen = 420;

      // Initial states
      gsap.set(outlineRef.current, {
        strokeDasharray: outlineLen,
        strokeDashoffset: outlineLen,
      });

      gsap.set(fillRef.current, {
        scale: 0.94,
        opacity: 0,
        transformOrigin: 'center center',
      });

      gsap.set(textStrokeRef.current, {
        strokeDasharray: textLen,
        strokeDashoffset: textLen,
      });

      gsap.set(textFillRef.current, {
        opacity: 0,
      });

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        onComplete: () => {
          setTimeout(() => {
            setIsDone(true);
            onComplete?.();
          }, 700);
        },
      });

      tl
        // Gold border draw
        .to(outlineRef.current, {
          strokeDashoffset: 0,
          duration: 2,
        })

        // Red fill bloom
        .to(
          fillRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out',
          },
          '-=1'
        )

        // Pilato handwritten draw
        .to(
          textStrokeRef.current,
          {
            strokeDashoffset: 0,
            duration: 1.4,
            ease: 'power1.inOut',
          },
          '-=0.6'
        )

        // Solid text reveal
        .to(
          textFillRef.current,
          {
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
          },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.kill();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          ref={containerRef}
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#FDFCF8] ${lobster.variable}`}
          exit={{
            y: '-100%',
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle paper texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

          {/* Logo Canvas */}
          <div className="relative w-[360px] h-[220px] flex items-center justify-center">
            <svg
              viewBox="0 0 340 220"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-xl"
            >
              {/* Red Fill */}
              <path
                ref={fillRef}
                d={logoPath}
                fill="#C41E3A"
                style={{
                  filter:
                    'drop-shadow(0 6px 10px rgba(196,30,58,0.25))',
                }}
              />

              {/* Text Stroke */}
              <text
                ref={textStrokeRef}
                x="50%"
                y="52%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="none"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fontFamily="var(--font-lobster), cursive"
                fontSize="52"
                letterSpacing="0.06em"
                className="select-none"
              >
                Pilato
              </text>

              {/* Text Fill */}
              <text
                ref={textFillRef}
                x="50%"
                y="52%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontFamily="var(--font-lobster), cursive"
                fontSize="52"
                letterSpacing="0.06em"
                className="select-none"
                style={{
                  filter:
                    'drop-shadow(0px 2px 4px rgba(0,0,0,0.15))',
                }}
              >
                Pilato
              </text>

              {/* Gold Border */}
              <path
                ref={outlineRef}
                d={logoPath}
                fill="none"
                stroke="#D4AF37"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
