'use client';

import { motion } from 'motion/react';
import { Waves, Flower2, Utensils, Trees, Plane, Wifi, ConciergeBell, Music } from 'lucide-react';

export default function Amenities() {
  const amenities = [
    { icon: <Waves className="w-6 h-6" />, title: "Infinity Pool", desc: "Crystal-clear waters in our stunning heritage-designed pool" },
    { icon: <Flower2 className="w-6 h-6" />, title: "Wellness Spa", desc: "Traditional treatments and modern wellness therapies" },
    { icon: <Utensils className="w-6 h-6" />, title: "Fine Dining", desc: "Exquisite cuisine featuring local and international flavors" },
    { icon: <Trees className="w-6 h-6" />, title: "Tropical Gardens", desc: "Lush landscaped gardens with exotic plants and flowers" },
    { icon: <Plane className="w-6 h-6" />, title: "Airport Transfer", desc: "Complimentary luxury transfers to and from the airport" },
    { icon: <Wifi className="w-6 h-6" />, title: "Free High-Speed WiFi", desc: "Stay connected with complimentary internet throughout" },
    { icon: <ConciergeBell className="w-6 h-6" />, title: "Concierge Service", desc: "24/7 personalized assistance for all your needs" },
    { icon: <Music className="w-6 h-6" />, title: "Cultural Experiences", desc: "Traditional music, dance, and local cultural tours" },
  ];

  return (
    <section id="amenities" className="relative py-16 md:py-24 px-4 md:px-6 bg-[#001F3D] text-white">
      {/* Plus/cross pattern overlay */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 8v24M8 20h24\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center relative z-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#D4A044]" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4A044]">Facilities</span>
            <div className="h-[1px] w-8 bg-[#D4A044]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold">Resort Amenities</h2>
          <p className="text-white/60 max-w-2xl text-sm md:text-base leading-relaxed">
            Discover the exceptional facilities and services that make your stay truly memorable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {amenities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/20 transition-all cursor-default group text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0A2D4A] flex items-center justify-center text-[#D4A044] group-hover:bg-[#D4A044] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-lg font-serif font-bold tracking-wide">{item.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
