'use client';

import { motion } from 'motion/react';

export default function WellnessHero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full bg-[#001F3D] overflow-hidden flex items-center justify-center text-center text-white pt-24">
      <div className="absolute inset-0 opacity-20">
         {/* Subtle texture or radial gradient could go here */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#001F3D]/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl px-6 flex flex-col items-center gap-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="flex items-center gap-6"
        >
          <div className="h-[1px] w-12 bg-[#D4A044]" />
          <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#D4A044]">Boutique Ayurveda Retreat</span>
          <div className="h-[1px] w-12 bg-[#D4A044]" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-9xl font-serif font-bold tracking-tight"
        >
          Wellness & Spa
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-2xl font-sans text-white/80 max-w-3xl leading-relaxed"
        >
          Restore the body, calm the mind, and reconnect with nature through our curated Ayurvedic healing practices and yoga.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF9F6] to-transparent" />
    </section>
  );
}
