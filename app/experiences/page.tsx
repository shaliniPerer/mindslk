'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Utensils, Car, Building2, Map, Palmtree, Camera, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const experiences = [
  {
    category: 'CULINARY DELIGHTS',
    title: 'Authentic Sri Lankan Cuisine',
    icon: Utensils,
    image: '/MInds Photos/MINDS to send/X3.jpg',
  },
  {
    category: 'LOCAL ADVENTURES',
    title: 'Tuk-Tuk Village Tours',
    icon: Car,
    image: '/MInds Photos/MINDS to send/X8.jpg',
  },
  {
    category: 'URBAN EXPLORATION',
    title: 'Colombo City Tour',
    icon: Building2,
    image: '/MInds Photos/MINDS to send/X26.jpg',
  },
  {
    category: 'FULL-DAY EXCURSION',
    title: 'Galle Heritage Tour',
    icon: Map,
    image: '/MInds Photos/MINDS to send/X17.jpg',
  },
  {
    category: 'WELLNESS & LEISURE',
    title: 'Poolside Relaxation',
    icon: Palmtree,
    image: '/MInds Photos/MINDS to send/X14.jpg',
  },
  {
    category: 'CAPTURE MEMORIES',
    title: 'Photography Walks',
    icon: Camera,
    image: '/MInds Photos/MINDS to send/X25.jpg',
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#D4A044]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4A044]">Discover</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#001F3D]">Curated Experiences</h1>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-square rounded-[32px] overflow-hidden group cursor-pointer"
              >
                <Image 
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-x-8 bottom-8 flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2">
                     <exp.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4A044]">{exp.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-white leading-tight">{exp.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto w-full"
          >
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Ready to Explore?</h2>
              <p className="text-gray-500 text-sm font-sans">Contact us to customize your experience</p>
            </div>
            <Link
              href="/#contact"
              className="bg-[#D4A044] text-[#001F3D] px-10 py-4 rounded-2xl font-bold text-sm tracking-widest hover:bg-[#B38536] transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              Plan Your Trip <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
