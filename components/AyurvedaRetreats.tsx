'use client';

import { motion } from 'motion/react';

const retreats = [
  {
    duration: '2 Days / 1 Night',
    title: 'Urban Rejuvenation Retreat',
    pricing: { person: 'USD 290', couple: 'USD 520' },
    desc: 'A refined introduction to authentic Sri Lankan Ayurveda, this short retreat is designed for international travellers seeking relaxation after long-haul flights or busy schedules. Combining...',
    includes: [
      'Personal Ayurvedic consultation',
      'Full-body Abhyanga oil massage',
      'Herbal steam bath',
      'Evening guided meditation'
    ],
    plus: '2 more holistic inclusions'
  },
  {
    duration: '3 Days / 2 Nights',
    title: 'Stress Relief & Sleep Restoration Kur',
    pricing: { person: 'USD 590', couple: 'USD 1,080' },
    desc: 'Designed for travellers experiencing stress, jet lag, or sleep disturbances, this program harmonises the nervous system through Shirodhara therapy, therapeutic oil treatments, and calming yoga...',
    includes: [
      'Comprehensive Ayurvedic assessment',
      '2 x therapeutic oil treatments',
      '1 x Shirodhara therapy',
      'Daily yoga & breathwork'
    ],
    plus: '2 more holistic inclusions'
  },
  {
    duration: '5 Days / 4 Nights',
    title: 'Detox & Metabolic Reset Program',
    pricing: { person: 'USD 1,250' },
    desc: 'A carefully supervised Ayurvedic cleansing program inspired by Panchakarma principles. This retreat focuses on eliminating toxins (Ama), improving digestion, boosting metabolism, and...',
    includes: [
      'Full Ayurvedic diagnosis',
      'Personalised detox protocol',
      'Daily therapeutic treatments',
      'Herbal steam therapy'
    ],
    plus: '3 more holistic inclusions'
  },
  {
    duration: '7 Days / 6 Nights',
    title: 'Deep Healing Panchakarma Kur',
    pricing: { person: 'USD 2,200' },
    desc: 'A transformative healing journey rooted in traditional Ayurvedic Panchakarma therapy. Under the supervision of experienced Ayurvedic practitioners, this intensive program addresses...',
    includes: [
      'Arrival & departure doctor consultations',
      'Classical Panchakarma therapies',
      'Custom herbal formulations',
      'Daily specialised treatments'
    ],
    plus: '3 more holistic inclusions'
  },
  {
    duration: '3 Days / 2 Nights',
    title: 'Couples Wellness Escape',
    pricing: { couple: 'USD 1,050' },
    desc: 'An intimate wellness experience designed for couples who wish to reconnect while nurturing their health. Side-by-side Ayurvedic therapies, private meditation sessions, and nourishing cuisi...',
    includes: [
      'Couple Ayurvedic consultation',
      'Side-by-side oil massage',
      'Private herbal bath ritual',
      'Sunset meditation session'
    ],
    plus: '2 more holistic inclusions'
  }
];

export default function AyurvedaRetreats() {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center max-w-3xl flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#001F3D]"
          >
            Ayurveda Retreats
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#001F3D]/60 font-sans leading-relaxed"
          >
            Curated multi-day journeys designed to restore balance to your doshas, detoxify your system, and deeply rejuvenate your mind and body.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {retreats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 flex flex-col gap-8 hover:shadow-xl transition-all duration-500 group"
            >
              <div className="flex flex-col gap-4">
                 <span className="bg-[#001F3D]/5 text-[#001F3D]/60 text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full inline-block self-start">
                   {item.duration}
                 </span>
                 <h3 className="text-2xl font-serif font-bold text-[#001F3D] leading-tight group-hover:text-[#D4A044] transition-colors">{item.title}</h3>
                 
                 <div className="flex items-center gap-8 mt-2">
                    {/* {item.pricing.person && (
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-[#001F3D]/40 tracking-wider">Per Person</span>
                        <span className="text-lg font-bold text-[#D4A044]">{item.pricing.person}</span>
                      </div>
                    )}
                    {item.pricing.couple && (
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-bold text-[#001F3D]/40 tracking-wider">Per Couple</span>
                        <span className="text-lg font-bold text-[#D4A044]">{item.pricing.couple}</span>
                      </div>
                    )} */}
                 </div>
              </div>

              <p className="text-sm text-[#001F3D]/60 leading-relaxed font-sans">{item.desc}</p>

              <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                <span className="text-[10px] uppercase font-bold text-[#001F3D] tracking-[0.2em] mb-1 inline-block">Includes:</span>
                <ul className="flex flex-col gap-2">
                  {item.includes.map((inc, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#001F3D]/70">
                      <span className="text-[#D4A044]">✓</span> {inc}
                    </li>
                  ))}
                  <li className="text-[11px] italic text-[#D4A044] mt-1">+ {item.plus}</li>
                </ul>
              </div>

              <button className="mt-auto w-full bg-[#1B4F8A] text-white py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#1B4F8A]/90 transition-all transform group-hover:scale-[1.02]">
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
