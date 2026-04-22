'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const moreLinks = [
    { name: 'Halls', href: '/halls' },
    { name: 'Wellness/Spa', href: '/wellness-spa' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Offers', href: '/offers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Accommodations', href: '/accommodations' },
    // { name: 'Culture', href: '/culture' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav 
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl transition-all duration-300"
    >
      <div className={`transition-all duration-500 py-3 px-4 md:px-6 rounded-2xl flex items-center justify-between ${
        isScrolled
          ? 'bg-[#F8F3EA]/70 backdrop-blur-md shadow-lg border border-[#E8DCC8]/50 text-[#001F3D]'
          : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white'
      }`}>
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl border border-gray-200/60 flex items-center justify-center p-1.5 overflow-hidden shadow-sm">
             <Image src="/Logoo.png" alt="Minds Logo" width={44} height={44} className="object-contain" priority />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-sm md:text-base leading-tight tracking-wider transition-colors duration-300 ${isScrolled ? 'text-[#001F3D]' : 'text-white'}`}>Minds</span>
            <span className="text-[9px] tracking-[0.2em]  transition-colors duration-300 leading-[1.3] text-[var(--secondary-light)]">Boutique Hotel &<br />Wellness Resort</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#001F3D]' : 'text-white/90'} hover:text-[#D4A044]`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="relative">
            <button 
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#001F3D]' : 'text-white/90'} hover:text-[#D4A044] flex items-center gap-1 py-4`}
            >
              More <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  onMouseEnter={() => setIsMoreOpen(true)}
                  onMouseLeave={() => setIsMoreOpen(false)}
                  className="absolute top-full right-0 mt-1 w-64 bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden z-20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] flex-1 bg-white/10" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#D4A044]/80">Explore More</span>
                    <div className="h-[1px] flex-1 bg-white/10" />
                  </div>

                  <div className="flex flex-col gap-4">
                    {moreLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <span className={`text-lg font-thin select-none ${isScrolled ? 'text-gray-300' : 'text-white/40'}`}>|</span>

          <a
            href="https://wa.me/94779501000"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-2.5 rounded-full text-[13px] font-semibold tracking-wide transition-all shadow-md active:scale-95 whitespace-nowrap ${
              isScrolled
                ? 'bg-[#D4A044]/90 text-white hover:bg-[#B38536] backdrop-blur-sm'
                : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-[#001F3D]' : 'text-white'}`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 md:hidden z-50 p-8"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif font-bold text-[#001F3D] border-b border-gray-50 pb-2 flex justify-between items-center"
                  >
                    {link.name}
                    <div className="w-1.5 h-1.5 bg-[#D4A044] rounded-full" />
                  </Link>
                ))}
                
                <div className="py-4">
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#D4A044] block mb-4">Discover More</span>
                  <div className="grid grid-cols-2 gap-4">
                    {moreLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xs font-semibold text-[#001F3D]/60 hover:text-[#001F3D]"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <a
                  href="https://wa.me/94779501000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#D4A044] text-white py-4 rounded-2xl text-sm font-bold tracking-widest shadow-lg active:scale-95 transition-transform text-center block"
                >
                  BOOK YOUR STAY
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
