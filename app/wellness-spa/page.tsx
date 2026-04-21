'use client';

import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WellnessHero from '@/components/WellnessHero';
import AyurvedaRetreats from '@/components/AyurvedaRetreats';
import SpaTreatments from '@/components/SpaTreatments';
import YogaSection from '@/components/YogaSection';

export default function WellnessSpaPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <WellnessHero />
      <AyurvedaRetreats />
      <SpaTreatments />
      <YogaSection />
      <Footer />
    </main>
  );
}
