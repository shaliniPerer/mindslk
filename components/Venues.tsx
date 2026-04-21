'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Users, LayoutGrid } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Venues() {
  const venues = [
    {
      title: "Banquet Hall 1",
      desc: "An elegant space perfect for weddings, galas, and grand celebrations with stunning wooden ceiling and panoramic views",
      capacity: "150 Guests",
      size: "1466 sqft",
      image: "/MInds Photos/MINDS to send/X17.jpg",
      tags: ["Stage & Sound System", "Dance Floor", "Bridal Suite", "Valet Parking"]
    },
    {
      title: "Banquet Hall 2",
      desc: "A versatile venue with heritage architecture, equipped with modern amenities for corporate events and seminars",
      capacity: "150 Guests",
      size: "1109 sqft",
      image: "/MInds Photos/MINDS to send/X18.jpg",
      tags: ["Projector & Screen", "Video Conferencing", "High-Speed WiFi", "Catering Service"]
    }
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-[#FAF9F6] overflow-hidden">
      {/* Lottie leaf - top right */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '-10px',
        width: 'clamp(140px, 38vw, 400px)',
        height: 'auto',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 1,
        transition: 'opacity 0.5s ease-out'
      }}>
        <DotLottieReact
          src="https://lottie.host/7f39f48e-e7ca-469b-bf9f-acb02bbb9e37/ypkrKFLElh.lottie"
          autoplay
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      {/* Lottie leaf - bottom left */}
      <div style={{
        position: 'absolute',
        bottom: '0px',
        left: '-10px',
        width: 'clamp(140px, 38vw, 500px)',
        height: 'auto',
        pointerEvents: 'none',
        zIndex: 1,
        transform: 'scaleX(-1)',
        opacity: 1,
        transition: 'opacity 0.5s ease-out'
      }}>
        <DotLottieReact
          src="https://lottie.host/7f39f48e-e7ca-469b-bf9f-acb02bbb9e37/ypkrKFLElh.lottie"
          autoplay
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#D4A044]" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4A044]">Event Spaces</span>
            <div className="h-[1px] w-8 bg-[#D4A044]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#001F3D]">Halls & Venues</h2>
          <p className="text-[#001F3D]/60 max-w-2xl text-sm md:text-base leading-relaxed font-sans mt-2">
            Host unforgettable events in our stunning venues, designed to accommodate everything from intimate gatherings to grand celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-8">
          {venues.map((venue, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-72 md:h-80 w-full overflow-hidden">
                <Image 
                  src={venue.image} 
                  alt={venue.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">{venue.title}</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-widest font-bold">
                      <Users className="w-4 h-4 text-white" />
                      <span>{venue.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-widest font-bold">
                      <LayoutGrid className="w-4 h-4 text-white" />
                      <span>{venue.size}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-8 flex flex-col gap-5 md:gap-6 font-sans">
                <p className="text-sm text-[#001F3D]/60 leading-relaxed font-sans">{venue.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {venue.tags.map(tag => (
                    <span key={tag} className="text-[9px] uppercase font-bold tracking-wide bg-[#D6E8F5] text-[#1B4F8A] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-[#1B4F8A] text-white py-4 rounded-full text-sm font-bold tracking-[0.2em] hover:bg-[#1B4F8A]/90 transition-all active:scale-[0.98]">
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
