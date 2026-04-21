'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function CultureHero() {
  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/minds-culture-hero/1920/1080" 
          alt="Aluth Avurudda Culture"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#001F3D]/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center gap-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="flex items-center gap-6"
        >
          <div className="h-[1px] w-12 bg-[#D4A044]" />
          <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-[#D4A044]">Culture</span>
          <div className="h-[1px] w-12 bg-[#D4A044]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tight"
        >
          Aluth Avurudda
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-serif italic text-white/90 max-w-2xl leading-relaxed"
        >
          A Celebration of Culture, Unity, and Renewal
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </section>
  );
}

export function CultureIntroduction() {
  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <p className="text-xl md:text-2xl font-serif italic text-[#001F3D] leading-relaxed max-w-4xl">
        The Sinhala and Tamil New Year—known as Aluth Avurudda in Sinhala and Puthandu in Tamil—is one of the most culturally significant and widely celebrated festivals in Sri Lanka. More than just the beginning of a new year, it represents a rich blend of tradition, heritage, and shared identity among the island&apos;s communities.
      </p>
      
      <button className="bg-[#D4A044] hover:bg-[#B38536] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all shadow-lg hover:shadow-[#D4A044]/30 active:scale-95 text-xs font-bold tracking-widest uppercase">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Play className="w-4 h-4 fill-current" />
        </div>
        Watch the Sinhala and Tamil New Year Celebration
      </button>
    </div>
  );
}
