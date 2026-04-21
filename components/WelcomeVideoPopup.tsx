'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function WelcomeVideoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl bg-[#001F3D] rounded-3xl overflow-hidden shadow-2xl">

              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4A044]">Minds Boutique Hotel</span>
                  <h2 className="text-lg md:text-xl font-serif font-bold text-white leading-tight">
                    Sinhala & Tamil New Year Celebration
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close video"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0 ml-4"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Video embed - 16:9 */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/erOtCcNPTeg?autoplay=1&mute=1&rel=0"
                  title="Sinhala and Tamil New Year Celebration"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
