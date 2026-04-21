'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      <section className="relative h-screen w-full bg-[#001F3D] overflow-hidden flex items-center justify-center text-center text-white">
        {/* Background Image with heavy overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
           <Image 
             src="https://picsum.photos/seed/minds-facilities/1920/1080?blur=2" 
             alt="Facilities"
             fill
             className="object-cover"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-[#001F3D]/80" />
        </div>

        <div className="relative z-10 max-w-4xl px-6 flex flex-col items-center gap-8">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="flex items-center gap-6"
          >
            <div className="h-[1px] w-12 bg-[#D4A044]" />
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#D4A044]">Coming Soon</span>
            <div className="h-[1px] w-12 bg-[#D4A044]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif font-bold tracking-tight"
          >
            Facilities
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-sans text-white/80 max-w-2xl leading-relaxed font-medium"
          >
            From our infinity pool to exclusive lounges, explore what makes us unique.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A044]/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A044]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4A044]" />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/" className="px-10 py-4 rounded-full font-bold text-sm tracking-widest border border-white/20 hover:bg-white/10 transition-all">
                Return Home
              </Link>
              <Link href="/#contact" className="bg-[#D4A044] text-[#001F3D] px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#B38536] transition-all transform hover:scale-105 shadow-xl">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
