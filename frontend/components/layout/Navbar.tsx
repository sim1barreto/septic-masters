'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? 'bg-[#0B2545]/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E7A45] to-[#25A55F] flex items-center justify-center shadow-lg shadow-green-900/30 group-hover:shadow-green-500/30 transition-shadow">
                <Zap className="w-5 h-5 text-white fill-white" />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#BE2026] border-2 border-[#0B2545]" />
              </div>
              <div>
                <div className="text-white text-lg tracking-tight leading-none font-extrabold">
                  SEPTIC MASTERS
                </div>
                <div className="text-[#25A55F] text-xs tracking-widest uppercase font-medium">
                  Pro Septic Services
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-lg text-sm transition-all duration-200 font-medium ${
                    isActive(link.href)
                      ? 'text-white bg-white/10'
                      : 'text-white/75 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0.5 left-4 right-4 h-0.5 bg-[#25A55F] rounded-full"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 text-[#25A55F]" />
                (555) 123-4567
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-[#BE2026] hover:bg-[#A0181F] text-white text-sm shadow-lg shadow-red-900/30 hover:scale-105 transition-all duration-200 font-bold"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-white/10 overflow-hidden bg-[#0B2545]/95 backdrop-blur-md"
            >
              <div className="px-4 pt-4 pb-6 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm transition-all font-medium ${
                        isActive(link.href)
                          ? 'bg-white/15 text-white'
                          : 'text-white/75 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-3">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 text-white font-semibold"
                  >
                    <Phone className="w-4 h-4 text-[#25A55F]" />
                    (555) 123-4567
                  </a>
                  <Link
                    href="/contact"
                    className="block text-center py-3 rounded-xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors font-bold"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Sticky Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex">
          <a
            href="tel:+15551234567"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#1E7A45] text-white font-bold"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#BE2026] text-white font-bold"
          >
            <Zap className="w-5 h-5" />
            Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
