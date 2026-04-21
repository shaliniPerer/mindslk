'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <section id="gallery" className="relative h-[280px] md:h-[600px] w-full overflow-hidden group">
      <Image 
        src="/MInds Photos/MINDS to send/X23.jpg" 
        alt="Visual Journey"
        fill
        className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30 bg-gradient-to-t from-black/60 to-transparent" />
      
      <div className="absolute inset-0 flex items-end justify-center md:justify-end pb-8 md:pb-16 px-6 md:pr-16">
        <div className="flex items-end gap-4 md:gap-8 w-full md:w-auto justify-between md:justify-end">
          <div className="flex flex-col items-start gap-1">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-white/70">Visual Journey</span>
            <h2 className="text-3xl md:text-6xl font-serif font-bold text-white tracking-tight">Gallery</h2>
          </div>

          <Link href="/gallery">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 md:px-8 md:py-4 border border-white/70 text-white font-bold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              EXPLORE
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
