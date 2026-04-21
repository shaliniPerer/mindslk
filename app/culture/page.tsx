'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CultureHero, { CultureIntroduction } from '@/components/CultureHero';
import CultureContent from '@/components/CultureContent';

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] relative overflow-hidden pb-24">
      <Navbar />
      <CultureHero />
      
      {/* Master Card Layout */}
      <div className="relative z-20 max-w-5xl mx-auto py-24 px-6 md:my-12">

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[40px] shadow-2xl p-10 md:p-20 flex flex-col gap-24 relative"
        >
          <CultureIntroduction />
          <CultureContent />
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
