import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

interface FooterProps {
  onNavigate: (view: string, serviceId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigate('home');
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      }
    }
  };

  return (
    <footer className="bg-[#111C2B] text-[#FFFEFA] border-t border-[#B49A68]/20 relative overflow-hidden">
      {/* Subtle background staff line texture */}
      <div className="absolute inset-0 bg-dark-staff-lines opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-20 sm:pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-10 sm:pb-16 border-b border-[#FFFEFA]/10">
          
          {/* Brand & Introduction (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-09-21_at_1.49.52_PM__1__06911302.jpeg"
                alt="pianoIP Logo"
                className="h-10 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold tracking-tight text-[#FFFEFA] leading-none">
                  Piano<span className="text-[#B49A68] font-semibold">IP</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#B49A68]/80 font-mono font-medium mt-1">
                  Intellectual Property
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111C2B] bg-[#B49A68] hover:bg-[#C9B488] rounded-md transition-colors min-h-[44px]"
              >
                <span>Request Counsel</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Navigation (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B49A68] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-1 sm:space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleScrollTo('hero')}
                  className="text-[#FFFEFA]/75 hover:text-[#B49A68] transition-colors py-1.5 sm:py-0 inline-flex items-center min-h-[40px] sm:min-h-0"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('about')}
                  className="text-[#FFFEFA]/75 hover:text-[#B49A68] transition-colors py-1.5 sm:py-0 inline-flex items-center min-h-[40px] sm:min-h-0"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('services')}
                  className="text-[#FFFEFA]/75 hover:text-[#B49A68] transition-colors py-1.5 sm:py-0 inline-flex items-center min-h-[40px] sm:min-h-0"
                >
                  All Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="text-[#FFFEFA]/75 hover:text-[#B49A68] transition-colors py-1.5 sm:py-0 inline-flex items-center min-h-[40px] sm:min-h-0"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B49A68] font-semibold">
              Core IP Disciplines
            </h4>
            <ul className="space-y-1 sm:space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => handleScrollTo(`service-${svc.id}`)}
                    className="text-[#FFFEFA]/75 hover:text-[#B49A68] transition-colors text-left py-1.5 sm:py-0 inline-flex items-center min-h-[40px] sm:min-h-0"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#B49A68] font-semibold">
              Registered Office
            </h4>
            
            <div className="space-y-3 text-sm text-[#FFFEFA]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B49A68] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-xs">
                  11/766, Thingal Villa, Vaduvanchal Road,<br />
                  Andoor, Wayanad, Kerala – 673581, India.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B49A68] shrink-0" />
                <a
                  href="tel:+919632910080"
                  className="text-xs hover:text-[#B49A68] transition-colors tabular-nums py-1.5 sm:py-0 inline-flex items-center min-h-[36px] sm:min-h-0"
                >
                  +91 96329 10080
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B49A68] shrink-0" />
                <a
                  href="mailto:info@pianoip.com"
                  className="text-xs hover:text-[#B49A68] transition-colors py-1.5 sm:py-0 inline-flex items-center min-h-[36px] sm:min-h-0"
                >
                  info@pianoip.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs text-[#FFFEFA]/60 text-center sm:text-left">
          <p>
            © {currentYear} pianoIP. All rights reserved. Intellectual Property Advisory.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>Patents · Trademarks · Copyrights · Industrial Designs · Analytics</span>
            <span className="hidden sm:inline text-[#FFFEFA]/30" aria-hidden="true">·</span>
            <span className="text-[#FFFEFA]/75">design and developed by DigitalFace</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
