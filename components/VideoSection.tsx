'use client';

import { useEffect, useState } from 'react';

export default function VideoSection() {
  const [embedSrc, setEmbedSrc] = useState('');

  useEffect(() => {
    const origin = encodeURIComponent(window.location.origin);
    setEmbedSrc(
      `https://www.youtube-nocookie.com/embed/erOtCcNPTeg?autoplay=0&mute=0&rel=0&origin=${origin}`
    );
  }, []);

  return (
    <section className="relative py-14 md:py-20 lg:py-28 bg-[#F0EFED] overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex flex-col items-center mb-8 md:mb-10">
          {/* <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.45em] font-bold text-[#D4A044] mb-3">
            Minds Boutique Hotel
          </span> */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#001F3D] text-center leading-snug px-2">
            Sinhala &amp; Tamil New Year Celebration
          </h2>
          {/* Gold rule */}
          <div className="mt-4 flex items-center gap-3">
            <span className="block w-10 sm:w-12 h-px bg-[#D4A044]" />
            <span className="block w-2 h-2 rounded-full bg-[#D4A044]" />
            <span className="block w-10 sm:w-12 h-px bg-[#D4A044]" />
          </div>
        </div>

        {/* Outer decorative frame */}
        <div
          className="relative p-[3px] rounded-xl sm:rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #D4A044 0%, #001F3D 50%, #D4A044 100%)',
          }}
        >
          {/* Inner frame */}
          <div className="relative bg-[#001F3D] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl">

            {/* Corner ornaments */}
            <span className="absolute top-2 left-2 block w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-[#D4A044]" />
            <span className="absolute top-2 right-2 block w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-[#D4A044]" />
            <span className="absolute bottom-2 left-2 block w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-[#D4A044]" />
            <span className="absolute bottom-2 right-2 block w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-[#D4A044]" />

            {/* 16:9 video wrapper */}
            <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              {embedSrc && (
                <iframe
                  src={embedSrc}
                  title="Sinhala and Tamil New Year Celebration"
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
