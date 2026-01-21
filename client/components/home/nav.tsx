'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import favicon from '@/app/favicon.ico'
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Pasta', href: '#products' },
    { name: 'Manufacturing', href: '#process' },
    { name: 'Quality', href: '#quality' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.95)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled 
            ? '0 4px 20px rgba(0, 0, 0, 0.08)' 
            : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* <div 
                className="relative w-12 h-12 rounded-sm overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #E31E24 0%, #F4B93D 100%)'
                }}
              > */}
                <Image src={favicon} alt="logo" />
              {/* </div> */}
              <div className="hidden sm:block">
                <div 
                  className="text-2xl font-serif tracking-wider"
                  style={{ 
                    color: '#2A2A2A',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}
                >
                  PILATO
                </div>
                <div 
                  className="text-xs tracking-widest"
                  style={{ 
                    color: '#E31E24',
                    marginTop: '-4px',
                    fontWeight: 500
                  }}
                >
                  PASTA EXCELLENCE
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-300 group"
                  style={{ color: '#2A2A2A' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: '#E31E24' }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              
              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 transition-colors duration-300 hidden sm:block"
                style={{ color: '#2A2A2A' }}
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{
                      background: '#E31E24',
                      color: '#FFFFFF'
                    }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.button>

              {/* User Account */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 transition-colors duration-300 hidden sm:block"
                style={{ color: '#2A2A2A' }}
              >
                <User size={22} />
              </motion.button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 transition-colors duration-300"
                style={{ color: '#2A2A2A' }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-80 z-50 lg:hidden"
              style={{
                background: '#FFFFFF',
                boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="p-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mb-8 p-2"
                  style={{ color: '#2A2A2A' }}
                >
                  <X size={24} />
                </button>

                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-lg font-medium tracking-wide transition-colors duration-300"
                      style={{ color: '#2A2A2A' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="mt-12 pt-6 border-t flex gap-4" style={{ borderColor: '#F5E6D3' }}>
                  <button
                    className="flex-1 py-3 text-sm font-medium tracking-wide"
                    style={{
                      background: '#E31E24',
                      color: '#FFFFFF',
                      borderRadius: '2px'
                    }}
                  >
                    Shop Now
                  </button>
                  <button
                    className="p-3"
                    style={{
                      border: '2px solid #F4B93D',
                      borderRadius: '2px',
                      color: '#2A2A2A'
                    }}
                  >
                    <User size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}