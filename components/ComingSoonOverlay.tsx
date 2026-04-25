'use client';

import Image from 'next/image';
import BookingForm from '@/components/BookingForm';
import { Facebook, Instagram, Linkedin, Youtube, Music2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ComingSoonPopup() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-lg p-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-white"
      >

        {/* 🔥 IMAGE HEADER */}
        <div className="relative h-[260px] md:h-[360px] w-full overflow-hidden rounded-t-[32px]">
          <Image
            src="/01.png"
            alt="Coming Soon"
            fill
            className="object-cover scale-105"
          />

          {/* Gradient overlay (better than flat black) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold tracking-[0.35em] mb-3">
              COMING SOON
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl">
              Minds Boutique Hotel & Wellness Resort will be opening soon. Stay connected with us.
            </p>
          </div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="px-4 md:px-10 py-10 bg-[#FAF9F6]">

          {/* Booking Section */}
          <BookingForm />

          {/* Divider */}
          <div className="flex items-center justify-center my-8">
            <div className="h-[1px] w-20 bg-[#D4A044]" />
          </div>

          {/* 🔥 SOCIAL ICONS */}
          <div className="flex justify-center gap-6">
            {[
              { Icon: Facebook, href: 'https://www.facebook.com/mindsboutiquehotel' },
              { Icon: Instagram, href: 'https://www.instagram.com/mindsboutiquehotel/' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/company/mindsboutiquehotel' },
              { Icon: Music2, href: 'https://www.tiktok.com/@mindsboutiquehotel' },
              { Icon: Youtube, href: 'https://www.youtube.com' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
              >
                <Icon className="w-4 h-4 text-[#001F3D]" />
              </a>
            ))}
          </div>

        </div>
      </motion.div>
    </div>
  );
}