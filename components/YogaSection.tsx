'use client';

import { motion } from 'motion/react';

export default function YogaSection() {
  const yogaMenu = [
    { title: 'Hatha Yoga', desc: 'Gentle, beginner-friendly' },
    { title: 'Vinyasa Flow', desc: 'Dynamic & energising' },
    { title: 'Ashtanga Yoga', desc: 'Strength & discipline' },
    { title: 'Yin Yoga', desc: 'Deep stretches & relaxation' },
    { title: 'Restorative Yoga', desc: 'Stress relief' },
    { title: 'Sunrise / Sunset Yoga', desc: 'Nature-based calm' },
    { title: 'Pranayama', desc: 'Breathing techniques' },
    { title: 'Guided Meditation', desc: 'Mindfulness & clarity' }
  ];

  const yogaPackages = [
    {
      category: 'YOGA PACKAGE',
      title: 'Daily Yoga Experience',
      tag: 'Ideal for beginners & short stays',
      includes: ['1 Yoga Session (Morning or Evening)'],
      benefits: ['Improves flexibility', 'Reduces stress & anxiety', 'Improves breathing & posture', 'Boosts energy levels']
    },
    {
      category: 'YOGA PACKAGE',
      title: 'Mind & Body Yoga Package',
      tag: 'Perfect for relaxation & mental clarity',
      includes: ['Daily Yoga Session', 'Pranayama & Guided Meditation'],
      benefits: ['Strengthens muscles & joints', 'Improves lung capacity', 'Enhances focus & sleep quality', 'Balances nervous system']
    },
    {
      category: 'WELLNESS COMBO',
      bestSeller: true,
      title: 'Relax & Rejuvenate Package',
      tag: 'Ideal for short stays (1–2 nights)',
      includes: ['1 Yoga Session (Morning or Evening)', '1 Full Body Massage (60 mins)', 'Herbal Tea & Steam Bath'],
      benefits: ['Deep muscle recovery', 'Complete mental clarity', 'Immune system boost']
    },
    {
      category: 'WELLNESS COMBO',
      title: 'Mind & Body Balance Package',
      tag: 'Perfect for couples & leisure travellers',
      includes: ['Daily Yoga Session', 'Guided Meditation', 'Ayurvedic Full Body Massage', 'Head & Shoulder Therapy'],
      benefits: ['Holistic stress reduction', 'Deep emotional balance', 'Toxin elimination']
    }
  ];

  return (
    <section className="bg-[#001F3D] text-white py-24 px-6 relative overflow-hidden">

      
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center max-w-3xl flex flex-col gap-6">
          <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="flex items-center justify-center gap-6"
          >
            <div className="h-[1px] w-12 bg-[#D4A044]" />
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#D4A044]">Holistic Journey</span>
            <div className="h-[1px] w-12 bg-[#D4A044]" />
          </motion.div>
          <motion.h2 className="text-4xl md:text-5xl font-serif font-bold">Yoga & Packages</motion.h2>
          <motion.p className="text-white/60 font-sans leading-relaxed">
            Our Yoga Experiences are designed to improve flexibility, strength, breathing, and mental clarity. Each session is guided by experienced instructors and adapted to all fitness levels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          {/* Yoga Menu */}
          <div className="lg:col-span-3 bg-white/5 border border-white/5 rounded-[40px] p-10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif font-bold mb-8">Yoga Menu</h3>
            <ul className="flex flex-col gap-6">
              {yogaMenu.map((item, i) => (
                <li key={i} className="flex flex-col gap-1 border-b border-white/5 pb-4 last:border-0 hover:translate-x-1 transition-transform cursor-default">
                  <span className="text-sm font-bold text-white/90">{item.title}</span>
                  <span className="text-[11px] text-[#D4A044]/80 italic">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Yoga Packages Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            {yogaPackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col gap-8 relative overflow-hidden group hover:border-[#D4A044]/30 transition-all duration-500"
              >
                {pkg.bestSeller && (
                  <div className="absolute top-6 right-6 bg-[#D4A044] text-[#001F3D] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    BEST SELLER
                  </div>
                )}
                
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4A044] uppercase">{pkg.category}</span>
                  <h4 className="text-2xl font-serif font-bold leading-tight group-hover:text-[#D4A044] transition-colors">{pkg.title}</h4>
                  <p className="text-xs text-white/40 italic font-sans">{pkg.tag}</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-wider">Includes</span>
                    <ul className="flex flex-col gap-2">
                      {pkg.includes.map((inc, j) => (
                        <li key={j} className="text-xs text-white/80 flex items-start gap-2">
                          <span className="text-[#D4A044] mt-0.5">•</span> {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-wider">Benefits</span>
                    <ul className="grid grid-cols-1 gap-2">
                       {pkg.benefits.map((benefit, j) => (
                         <li key={j} className="text-xs text-white/60 flex items-center gap-2">
                           <span className="text-[#D4A044]">✓</span> {benefit}
                         </li>
                       ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center justify-center gap-4 group hover:bg-white/10 transition-all"
        >
          <div className="w-8 h-8 rounded-full border border-[#D4A044]/30 flex items-center justify-center text-[#D4A044]">
            <span className="text-[10px] font-bold">$</span>
          </div>
          <p className="text-sm font-sans text-white/70">
            Guests staying on <span className="text-white font-bold">Full Board</span> enjoy a 10–15% discount on Wellness Packages.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
