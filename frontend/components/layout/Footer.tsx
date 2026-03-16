'use client';

import Link from 'next/link';
import {
  Phone, Mail, MapPin, Zap, Facebook, Instagram, Twitter, Clock, Shield, Star,
} from 'lucide-react';

const services = [
  'Septic Tank Pumping',
  'Septic Inspections',
  'New Installations',
  'Septic Repairs',
  'Drain Field Services',
  'Emergency Services',
  'Aerobic Systems',
  'Grease Trap Cleaning',
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Contact Us', href: '/contact' },
];

const serviceAreas = [
  'Austin, TX', 'Round Rock, TX', 'Cedar Park, TX', 'Georgetown, TX',
  'Pflugerville, TX', 'Leander, TX', 'Kyle, TX', 'Buda, TX',
];

export function Footer() {
  return (
    <footer className="bg-[#06121E] text-white/80 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #1E7A45 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0B2545 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Emergency CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#BE2026]/15 border border-[#BE2026]/30 flex items-center justify-center">
                <Phone className="w-7 h-7 text-[#BE2026]" />
              </div>
              <div>
                <div className="text-white text-sm uppercase tracking-widest font-bold">
                  24/7 Emergency Service
                </div>
                <div className="text-white/60 text-sm">We&apos;re always here when you need us most</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:+15551234567"
                className="px-8 py-3.5 rounded-xl bg-[#BE2026] text-white hover:bg-[#A0181F] transition-colors shadow-lg shadow-red-900/30 font-bold"
              >
                (555) 123-4567
              </a>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors font-semibold"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E7A45] to-[#25A55F] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="text-white text-base font-extrabold">SEPTIC MASTERS</div>
                <div className="text-[#25A55F] text-xs tracking-widest uppercase font-medium">Pro Services</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted partner for professional septic tank services. Licensed, insured, and
              serving Central Texas for over 15 years.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/70 text-sm">4.9/5 · 500+ Reviews</span>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Twitter, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#1E7A45] transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-[#25A55F] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A45]/50 group-hover:bg-[#25A55F] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-[#25A55F] transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A45]/50 group-hover:bg-[#25A55F] transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6 font-bold">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+15551234567" className="flex gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-[#1E7A45]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E7A45] transition-colors">
                    <Phone className="w-4 h-4 text-[#25A55F]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">Call Us</div>
                    <div className="text-white/80 text-sm font-medium">(555) 123-4567</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@septicmasters.com" className="flex gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-[#1E7A45]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1E7A45] transition-colors">
                    <Mail className="w-4 h-4 text-[#25A55F]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">Email</div>
                    <div className="text-white/80 text-sm font-medium">info@septicmasters.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1E7A45]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#25A55F]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">Address</div>
                    <div className="text-white/80 text-sm font-medium">Austin, TX &amp; Surrounding Areas</div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1E7A45]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#25A55F]" />
                  </div>
                  <div>
                    <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">Hours</div>
                    <div className="text-white/80 text-sm font-medium">Mon–Sat: 7am–7pm</div>
                    <div className="text-[#BE2026] text-xs font-semibold">24/7 Emergency Available</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            {[
              { Icon: Shield, text: 'Licensed & Insured' },
              { Icon: Star, text: 'BBB A+ Rated' },
              { Icon: Shield, text: 'EPA Certified' },
            ].map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <Icon className="w-4 h-4 text-[#25A55F]" />
                <span className="text-white/70 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Septic Masters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
