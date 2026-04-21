'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

const heroImages = [
  "/MInds Photos/MINDS to send/X1.jpg",
  "/MInds Photos/MINDS to send/X25.jpg",
  "/MInds Photos/MINDS to send/X26.jpg",
  "/MInds Photos/MINDS to send/X45.jpg",
  "/MInds Photos/MINDS to send/X3.jpg",
  "/MInds Photos/MINDS to send/Y14.jpg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center text-white px-4">
      {/* Background Images - all preloaded simultaneously for instant transitions */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 z-0"
          style={{
            opacity: i === currentImage ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <Image
            src={src}
            alt={`Luxury Resort ${i + 1}`}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/75 via-black/30 to-black/65 pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-[#D4A044]" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-[#D4A044]">Welcome To</span>
            <div className="h-[1px] w-12 bg-[#D4A044]" />
          </div>

          <p className="text-sm md:text-base font-serif text-[#D4A044]/90 tracking-widest uppercase">
            Minds Boutique Hotel &amp; Wellness Resort
          </p>

          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight">
            Minds
          </h1>
          
          <p className="text-base md:text-2xl font-serif text-white/90 max-w-2xl leading-relaxed">
            Where Timeless Elegance Meets Modern Luxury
          </p>
          
          <p className="text-xs md:text-sm font-sans font-normal text-white/70 max-w-xl mx-auto leading-relaxed text-center">
            Experience the perfect blend of traditional craftsmanship and contemporary comfort in our stunning heritage property
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8 w-full sm:w-auto">
            <button className="bg-[#D4A044] text-white px-8 md:px-14 py-4 md:py-5 rounded-full text-sm md:text-base font-semibold hover:bg-[#B38536] transition-all shadow-xl active:scale-95">
              Explore Rooms
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 md:px-14 py-4 md:py-5 rounded-full text-sm md:text-base font-semibold border border-white/30 hover:bg-white/20 transition-all active:scale-95">
              Book Your Stay
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative scroll indicator - Bottom right */}
      <div className="absolute bottom-16 right-8 flex flex-col items-center gap-2">
        <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-white [writing-mode:vertical-lr]">Scroll</span>
        <div className="w-[1px] h-16" style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), #D4A044)'}} />
      </div>

      {/* Carousel Dots - Centered bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {heroImages.map((_, i) => (
          <div 
            key={i} 
            onClick={() => setCurrentImage(i)}
            className={`cursor-pointer transition-all duration-300 rounded-full h-2 ${
              i === currentImage ? 'bg-[#D4A044] w-8' : 'bg-white/30 w-2 hover:bg-white/50'
            }`} 
          />
        ))}
      </div>
    </section>
  );
}
