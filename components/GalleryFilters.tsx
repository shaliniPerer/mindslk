'use client';

import { motion } from 'motion/react';

interface GalleryFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  counts: {
    all: number;
    exterior: number;
    interior: number;
  };
}

export default function GalleryFilters({ activeFilter, setActiveFilter, counts }: GalleryFiltersProps) {
  return (
    <section className="bg-[#FAF9F6] py-6 md:py-12 px-4 flex flex-col items-center gap-6 md:gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <button 
          onClick={() => setActiveFilter('all')}
          className={`px-4 md:px-8 py-3 md:py-4 rounded-full text-xs font-bold tracking-widest transition-all border ${activeFilter === 'all' ? 'bg-[#1B4F8A] text-white shadow-xl scale-105 border-[#1B4F8A]' : 'bg-white text-[#001F3D]/60 border-gray-100 hover:bg-white/90'}`}
        >
          All Photos ({counts.all})
        </button>
        <button 
          onClick={() => setActiveFilter('exterior')}
          className={`px-4 md:px-8 py-3 md:py-4 rounded-full text-xs font-bold tracking-widest transition-all border ${activeFilter === 'exterior' ? 'bg-[#1B4F8A] text-white shadow-xl scale-105 border-[#1B4F8A]' : 'bg-white text-[#001F3D]/60 border-gray-100 hover:bg-white/90'}`}
        >
          Exterior & Grounds ({counts.exterior})
        </button>
        <button 
          onClick={() => setActiveFilter('interior')}
          className={`px-4 md:px-8 py-3 md:py-4 rounded-full text-xs font-bold tracking-widest transition-all border ${activeFilter === 'interior' ? 'bg-[#1B4F8A] text-white shadow-xl scale-105 border-[#1B4F8A]' : 'bg-white text-[#001F3D]/60 border-gray-100 hover:bg-white/90'}`}
        >
          Interior & Rooms ({counts.interior})
        </button>
      </motion.div>

      <div className="text-center">
        <p className="text-gray-400 text-sm font-sans tracking-wide">Showing {Math.min(24, counts.all)} of {counts.all} photos</p>
      </div>
    </section>
  );
}
