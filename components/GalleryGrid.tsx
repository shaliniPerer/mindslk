'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryGridProps {
  activeFilter: string;
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
}

const BASE = '/MInds Photos/MINDS to send';

const images = [
  // Exterior (X1–X46)
  ...Array.from({ length: 46 }, (_, i) => ({
    id: i + 1,
    category: 'exterior',
    src: `${BASE}/X${i + 1}.jpg`,
  })),
  // Interior (Y.jpg, Y1–Y67)
  { id: 47, category: 'interior', src: `${BASE}/Y.jpg` },
  ...Array.from({ length: 67 }, (_, i) => ({
    id: 48 + i,
    category: 'interior',
    src: `${BASE}/Y${i + 1}.jpg`,
  })),
];

const IMAGES_PER_PAGE = 24;

export default function GalleryGrid({ activeFilter, currentPage, setCurrentPage }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'all') return images;
    return images.filter(img => img.category === activeFilter);
  }, [activeFilter]);

  const totalPages = Math.ceil(filteredImages.length / IMAGES_PER_PAGE);
  const currentImages = filteredImages.slice((currentPage - 1) * IMAGES_PER_PAGE, currentPage * IMAGES_PER_PAGE);

  // All filtered images for lightbox navigation (across pages)
  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex(i => i !== null ? (i - 1 + filteredImages.length) % filteredImages.length : null), [filteredImages.length]);
  const nextImage = useCallback(() => setLightboxIndex(i => i !== null ? (i + 1) % filteredImages.length : null), [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  return (
    <>
      <section className="pb-16 md:pb-32 bg-[#FAF9F6] px-3 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 w-full">
          <AnimatePresence mode="popLayout">
            {currentImages.map((img) => (
              <motion.div 
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-square rounded-xl md:rounded-[2.5rem] overflow-hidden shadow-sm group cursor-pointer"
                onClick={() => {
                  const globalIndex = filteredImages.findIndex(f => f.id === img.id);
                  openLightbox(globalIndex);
                }}
              >
                <Image 
                  src={img.src} 
                  alt={`Gallery ${img.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Improved Pagination to match screenshot */}
        {totalPages > 1 && (
          <div className="flex items-center gap-3 md:gap-6 mt-10 md:mt-16">
            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#001F3D]/40 hover:text-[#001F3D] hover:border-[#001F3D] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <div className="flex items-center gap-3 md:gap-6">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`relative w-9 h-9 flex items-center justify-center text-sm font-bold transition-all ${
                    currentPage === i + 1 
                      ? 'text-white' 
                      : 'text-[#001F3D]/50 hover:text-[#001F3D]'
                  }`}
                >
                  {currentPage === i + 1 && (
                    <motion.div 
                      layoutId="activePage"
                      className="absolute inset-0 bg-[#1B4F8A] rounded-full shadow-lg"
                    />
                  )}
                  <span className="relative z-10">{i + 1}</span>
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#001F3D]/40 hover:text-[#001F3D] hover:border-[#001F3D] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>

    {/* Lightbox */}
    <AnimatePresence>
      {lightboxIndex !== null && (
        <>
          {/* Backdrop */}
          <motion.div
            key="lb-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[998] bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          {/* Image container */}
          <motion.div
            key="lb-modal"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-10 pointer-events-none"
          >
            <div className="relative w-full max-w-5xl max-h-[90vh] pointer-events-auto">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={`Gallery image ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-gray-100 transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-[#001F3D]" />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Next */}
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white text-xs font-bold tracking-widest px-4 py-1.5 rounded-full">
                {lightboxIndex + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
    </>
  );
}
