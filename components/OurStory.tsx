'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Hotel, Zap, Heart } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function OurStory() {
  const features = [
    {
      icon: <Hotel className="w-5 h-5 text-[#4A7C99]" />,
      title: "Heritage Architecture",
      desc: "Authentic stone carvings and traditional craftsmanship dating back centuries"
    },
    {
      icon: <Zap className="w-5 h-5 text-[#4A7C99]" />,
      title: "Luxury Amenities",
      desc: "World-class spa, infinity pool, and fine dining experiences await you"
    },
    {
      icon: <Heart className="w-5 h-5 text-[#4A7C99]" />,
      title: "Personalized Service",
      desc: "Dedicated staff ensuring every moment of your stay is exceptional"
    }
  ];

  return (
    <section id="about" className="relative py-16 md:py-32 px-6 overflow-hidden bg-white ">
      {/* Lottie leaf - top left */}
      <div style={{
        position: 'absolute',
        top: '0px',
        left: '-10px',
        width: 'clamp(140px, 38vw, 500px)',
        height: 'auto',
        pointerEvents: 'none',
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

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Left side: Image with overlay card */}
        <div className="relative w-full lg:w-1/2 group">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <Image 
              src="/MInds Photos/MINDS to send/X43.jpg" 
              alt="Minds Heritage Building"
              
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 z-1"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl hidden md:block border border-[#FAF9F6] z-10"
          >
            <div className="flex items-center gap-4 ">
              <div className="w-16 h-16 bg-[#D4A044] rounded-full flex items-center justify-center font-serif text-3xl font-bold text-white">
                25+
              </div>
              <div className="flex flex-col ">
                <span className="font-serif font-bold text-lg text-[#001F3D]">Years of Excellence</span>
                <span className="text-xs text-[#001F3D]/50">Creating memories since 1999</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side: Text content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#D4A044]" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4A044]">Our Story</span>
              <div className="h-[1px] w-8 bg-[#D4A044]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-[#001F3D]">
              A Legacy of Luxury &<br />Heritage
            </h2>
          </div>

          <div className="flex flex-col gap-6 text-gray-500 leading-relaxed font-sans text-sm md:text-base">
            <p>
              Minds Boutique Hotel & Wellness Resort is an architectural meditation, where Sri Lanka&apos;s timeless heritage unfolds into spaces of rest, reflection, and renewal. Inspired by the sacred architecture of the Kandyan era—drawing from the Temple of the Tooth Relic, Embekka Devalaya, and Lankathilakaya—carved timber, stone plinths, and shaded verandahs create a quiet rhythm inviting guests to slow down and arrive emotionally.
            </p>
            <p>
              Designed by Archt. Kavindra Herath, MINDS reflects a thoughtful balance between tradition and contemporary life. More than a hotel, it is a sanctuary where architecture heals, culture speaks softly, and every detail nurtures the mind, body, and spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-4">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-[#F0F0F0] flex items-center justify-center shrink-0 group-hover:bg-[#E4E4E4] transition-colors">
                  {f.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-[#001F3D]">{f.title}</span>
                  <span className="text-xs text-gray-400">{f.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
