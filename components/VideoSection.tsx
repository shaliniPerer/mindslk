'use client';

import { useEffect, useState } from 'react';

export default function VideoSection() {
  const [embedSrc, setEmbedSrc] = useState('');

  useEffect(() => {
    const origin = encodeURIComponent(window.location.origin);
    setEmbedSrc(
      `https://www.youtube-nocookie.com/embed/erOtCcNPTeg?rel=0&origin=${origin}`
    );
  }, []);

  return (
    <section className="relative py-14 md:py-20 lg:py-28 bg-[#F0EFED] overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex flex-col items-center mb-8 md:mb-10">
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

        {/* 16:9 video wrapper */}
        <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
          {embedSrc && (
            <iframe
              src={embedSrc}
              title="Sinhala and Tamil New Year Celebration"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          )}
        </div>

      </div>
    </section>
  );
}
