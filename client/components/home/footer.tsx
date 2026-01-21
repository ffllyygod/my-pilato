'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Pilato', href: '#about' },
      { name: 'Our Story', href: '#story' },
      { name: 'Manufacturing', href: '#process' },
      { name: 'Quality Standards', href: '#quality' },
      { name: 'Careers', href: '#careers' },
    ],
    products: [
      { name: 'All Pasta', href: '#products' },
      { name: 'Long Pasta', href: '#long' },
      { name: 'Short Pasta', href: '#short' },
      { name: 'Specialty Range', href: '#specialty' },
      { name: 'Bulk Orders', href: '#bulk' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQs', href: '#faq' },
      { name: 'Cooking Guide', href: '#guide' },
      { name: 'Nutritional Info', href: '#nutrition' },
      { name: 'Returns', href: '#returns' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'FSSAI License', href: '#fssai' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer 
      className="relative pt-20 pb-8 px-6"
      style={{
        background: 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div 
                className="text-3xl font-serif tracking-wider mb-2"
                style={{ color: '#FFFFFF' }}
              >
                PILATO
              </div>
              <div 
                className="text-xs tracking-widest mb-4"
                style={{ color: '#F4B93D' }}
              >
                PASTA EXCELLENCE
              </div>
              <div 
                className="text-lg font-light mb-4"
                style={{ color: '#E31E24' }}
              >
                स्वाद bhi सेहत bhi
              </div>
            </div>
            
            <p 
              className="text-sm mb-6 leading-relaxed"
              style={{ color: '#AAAAAA' }}
            >
              India's premier pasta manufacturer, combining traditional Italian techniques with modern innovation since 1989.
            </p>

            {/* Contact info */}
            <div className="space-y-3 text-sm" style={{ color: '#AAAAAA' }}>
              <div className="flex items-start gap-3">
                <MapPin size={16} style={{ color: '#F4B93D', marginTop: '2px', flexShrink: 0 }} />
                <span>Industrial Area, Phase 4, Jaipur, Rajasthan 302012, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: '#F4B93D', flexShrink: 0 }} />
                <a href="tel:+911412345678" className="hover:text-white transition-colors">
                  +91 141 234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: '#F4B93D', flexShrink: 0 }} />
                <a href="mailto:info@pilato.in" className="hover:text-white transition-colors">
                  info@pilato.in
                </a>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 
              className="text-sm font-semibold mb-4 tracking-wider uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#AAAAAA' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F4B93D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products links */}
          <div>
            <h4 
              className="text-sm font-semibold mb-4 tracking-wider uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Products
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#AAAAAA' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F4B93D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 
              className="text-sm font-semibold mb-4 tracking-wider uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#AAAAAA' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F4B93D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h4 
              className="text-sm font-semibold mb-4 tracking-wider uppercase"
              style={{ color: '#FFFFFF' }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: '#AAAAAA' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F4B93D'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#AAAAAA'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter section */}
        <div 
          className="py-8 mb-8"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 
              className="text-xl font-serif mb-3"
              style={{ color: '#FFFFFF' }}
            >
              Stay Updated with Pilato
            </h4>
            <p 
              className="text-sm mb-6"
              style={{ color: '#AAAAAA' }}
            >
              Subscribe to our newsletter for recipes, offers, and pasta wisdom
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-sm text-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  outline: 'none'
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-sm font-medium tracking-wider rounded-sm"
                style={{
                  background: '#E31E24',
                  color: '#FFFFFF'
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div 
            className="text-sm text-center md:text-left"
            style={{ color: '#777' }}
          >
            © {currentYear} Pilato Pasta Manufacturing. All rights reserved.
            <span className="mx-2">|</span>
            <span style={{ color: '#F4B93D' }}>Made with ❤️ in India</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-sm transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#AAAAAA'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(244, 185, 61, 0.2)';
                  e.currentTarget.style.color = '#F4B93D';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.color = '#AAAAAA';
                }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Certification badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <div 
            className="px-4 py-2 rounded-sm text-xs font-medium"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#AAAAAA',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            🏆 ISO 22000 Certified
          </div>
          <div 
            className="px-4 py-2 rounded-sm text-xs font-medium"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#AAAAAA',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            ✓ FSSAI Approved
          </div>
          <div 
            className="px-4 py-2 rounded-sm text-xs font-medium"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#AAAAAA',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            🌱 Organic Certified
          </div>
        </div>
      </div>

      {/* Top gradient decoration */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(90deg, #E31E24, #F4B93D, #E31E24)'
        }}
      />
    </footer>
  );
}