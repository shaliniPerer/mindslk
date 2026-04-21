'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

interface GalleryHeroProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  counts: {
    all: number;
    exterior: number;
    interior: number;
  };
}

export default function GalleryHero({ activeFilter, setActiveFilter, counts }: GalleryHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/MInds Photos/MINDS to send/X26.jpg" 
          alt="Photo Gallery"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#001F3D]/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center gap-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="flex items-center gap-6"
        >
          <div className="h-[1px] w-8 bg-[#D4A044]" />
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#D4A044]">Visual Journey</span>
          <div className="h-[1px] w-8 bg-[#D4A044]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight"
        >
          Photo Gallery
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-xl font-sans text-white/90 max-w-2xl leading-relaxed font-medium"
        >
          Discover the beauty of our heritage property through {counts.all} captivating images
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </section>
  );
}
