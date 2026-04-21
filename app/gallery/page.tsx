'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/GalleryHero';
import GalleryFilters from '@/components/GalleryFilters';
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  // These counts can be dynamic in a real app
  const counts = {
    all: 114,
    exterior: 46,
    interior: 68,
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <GalleryHero 
        activeFilter={activeFilter} 
        setActiveFilter={handleFilterChange} 
        counts={counts}
      />
      <GalleryFilters 
        activeFilter={activeFilter} 
        setActiveFilter={handleFilterChange} 
        counts={counts} 
      />
      <GalleryGrid 
        activeFilter={activeFilter} 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      <Footer />
    </main>
  );
}
