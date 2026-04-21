'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function AccommodationsHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/MInds Photos/MINDS to send/X45.jpg" 
          alt="Accommodations"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#001F3D]/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-2 md:gap-4">
            <div className="h-[1px] w-6 md:w-12 bg-[#D4A044]" />
            <span className="text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold text-[#D4A044] text-center">Minds Boutique Hotel & Wellness Resort</span>
            <div className="h-[1px] w-6 md:w-12 bg-[#D4A044]" />
          </div>

          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
            Accommodations
          </h1>
          
          <p className="text-xs md:text-base font-sans text-white/90 max-w-2xl leading-relaxed font-bold uppercase tracking-[0.1em] md:tracking-widest px-4">
            Experience luxury and comfort in our carefully designed rooms and exclusive stay packages
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </section>
  );
}
