'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Maximize2, Users } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Rooms() {
  const rooms = [
    {
      title: "Deluxe Room",
      desc: "A multi-level living experience perfect for those who appreciate elevated views and...",
      price: "250",
      image: "/MInds Photos/MINDS to send/X44.jpg",
      size: "594 sqft",
      guests: "2-3 Adults",
      tags: ["Private Balcony", "Nature-Infused Bathroom", "Hand-carved timber"],
      href: "/accommodations/deluxe-room"
    },
    {
      title: "Deluxe Superior",
      desc: "An elegantly appointed room offering a refined blend of comfort and style, perfect for...",
      price: "275",
      image: "/MInds Photos/MINDS to send/X20.jpg",
      size: "480 sqft",
      guests: "2 Adults",
      tags: ["Private Balcony", "Nature-Infused Bathroom", "Hand-carved timber"],
      href: "/accommodations/deluxe-superior"
    },
    {
      title: "Suite Room",
      desc: "Our most inclusive and private offering, designed specifically to provide maximum...",
      price: "300",
      image: "/MInds Photos/MINDS to send/Y40.jpg",
      size: "756 sqft",
      guests: "2 Adults",
      tags: ["Private Balcony", "Nature-Infused Bathroom", "Hand-carved timber"],
      href: "/accommodations/suite-room"
    }
  ];

  return (
    <section id="rooms" className="relative py-16 md:py-24 px-4 md:px-6 bg-[#EEEEEE] overflow-hidden">

      {/* Lottie leaf - top left */}
      <div style={{
        position: 'absolute',
        top: '0px',
        left: '-10px',
        zIndex: 1,
        width: 'clamp(140px, 38vw, 420px)',
        height: 'auto',
        pointerEvents: 'none',
        transform: 'scaleX(-1)',
        opacity: 1,
      }}>
        <DotLottieReact
          src="https://lottie.host/7f39f48e-e7ca-469b-bf9f-acb02bbb9e37/ypkrKFLElh.lottie"
          autoplay
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Lottie leaf - top right */}
      <div style={{
        position: 'absolute',
        top: '0px',
        right: '-10px',
        zIndex: 1,
        width: 'clamp(140px, 38vw, 420px)',
        height: 'auto',
        pointerEvents: 'none',
        opacity: 1,
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
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4A044]">Accommodations</span>
            <div className="h-[1px] w-8 bg-[#D4A044]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#001F3D]">Rooms & Suites</h2>
          <p className="text-[#001F3D]/60 max-w-2xl text-sm md:text-base leading-relaxed font-sans mt-2">
            Choose from our carefully curated selection of rooms and suites, each designed to provide the ultimate in comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-8">
          {rooms.map((room, i) => (
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
                  src={room.image} 
                  alt={room.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-5 md:p-8 flex flex-col gap-5 md:gap-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-serif font-bold text-[#001F3D]">{room.title}</h3>
                  <p className="text-sm text-[#001F3D]/60 leading-relaxed">{room.desc}</p>
                </div>

                <div className="flex items-center gap-6 py-4 border-y border-gray-100">
                  <div className="flex items-center gap-2 text-[#001F3D]/60 text-xs uppercase tracking-widest">
                    <Maximize2 className="w-4 h-4 text-[#D4A044]" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#001F3D]/60 text-xs uppercase tracking-widest">
                    <Users className="w-4 h-4 text-[#D4A044]" />
                    <span>{room.guests}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {room.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-widest bg-[#FAF9F6] text-[#001F3D]/60 px-3 py-1.5 rounded-full border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={room.href} className="block w-full bg-[#1B4F8A] text-white py-4 rounded-full text-sm font-bold tracking-[0.2em] hover:bg-[#1B4F8A]/90 transition-all active:scale-[0.98] text-center whitespace-nowrap">
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/accommodations"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-[#1B4F8A] text-[#1B4F8A] text-sm font-bold tracking-widest hover:bg-[#1B4F8A] hover:text-white transition-all duration-300"
          >
            View All Accommodations / Packages <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
