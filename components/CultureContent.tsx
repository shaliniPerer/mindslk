'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function CultureContent() {
  const rituals = [
    { title: "Nonagathaya", desc: "This \"neutral period\" marks the transition between years, where people avoid work and dedicate time to religious activities." },
    { title: "Lighting the Hearth", sub: "(Lipa Gini Molaveema)", desc: "This ritual symbolizes the official beginning of the New Year. The first meal prepared is kiribath (milk rice), representing prosperity and good fortune." },
    { title: "First Meal", sub: "(Ahara Anubawa)", desc: "Families gather to share their first meal together, facing a specific direction. Popular foods include:", list: ["Kiribath (milk rice)", "Kavum", "Kokis", "Aluwa"] },
    { title: "Transactions & Respect", desc: "Ganu Denu: Exchanging money or gifts symbolizes financial prosperity and goodwill. Wandana: Younger members show respect to elders by offering betel leaves." },
    { title: "Oil Anointing", sub: "(Hisa Thel Gema)", desc: "Herbal oil is applied to the head as a traditional practice for health, protection, and well-being." },
  ];

  const games = [
    { name: "Kotta Pora", info: "(pillow fighting)" },
    { name: "Kana Mutti Bindeema", info: "(breaking the pot blindfolded)" },
    { name: "Lissana Gaha Nagima", info: "(climbing the greasy pole)" },
    { name: "Olinda Keliya", info: "(traditional board game)" },
    { name: "Pancha Keliya", info: "" },
    { name: "Raban playing", info: "(drumming and singing)" },
  ];

  const values = [
    "Unity and Reconciliation: Bringing families and communities together across ethnic boundaries.",
    "Respect for Elders: Honoring traditions of gratitude and respect.",
    "Renewal and Fresh Beginnings: Letting go of the past and embracing positivity.",
    "Generosity and Sharing: Spreading joy through food, gifts, and kindness.",
    "Balance Between Spiritual and Material Life: Combining religious devotion with celebration.",
  ];

  return (
    <div className="flex flex-col gap-24 font-sans max-w-4xl mx-auto">
      
      {/* Section 1 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#D4A044]" />
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Historical Background and Astronomical Significance</h2>
          </div>
          <div className="flex flex-col gap-6 text-gray-500 leading-relaxed text-sm">
            <p>Unlike the Gregorian calendar, the Sinhala and Tamil New Year is based on ancient solar calculations. It marks the transition of the sun from Pisces (Meena Rashiya) to Aries (Mesha Rashiya), a moment of great astrological importance.</p>
            <p>This festival dates back over 2,000 years, deeply rooted in Sri Lanka&apos;s agrarian civilization. It is closely linked to the harvest season, symbolizing prosperity, gratitude, and the rewards of hard work. Influenced by ancient Indian and South Asian traditions, both Sinhalese and Tamil communities adopted similar solar calendars, resulting in shared cultural practices.</p>
          </div>
          <div className="bg-[#FAF9F6] p-10 rounded-[32px] border border-[#001F3D]/5 text-center italic text-[#001F3D] font-serif">
            A unique aspect of the New Year is the Nonagathaya—a neutral period between the old and new year. During this time, people refrain from worldly activities and focus on religious observances and spiritual reflection.
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#D4A044]" />
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Cultural and Religious Importance</h2>
          </div>
          <div className="flex flex-col gap-6 text-gray-500 leading-relaxed text-sm">
            <p>Although celebrated by different ethnic and religious groups, the Sinhala and Tamil New Year promotes unity and harmony across communities.</p>
            <p>For Sinhalese Buddhists, the festival includes temple visits, merit-making, almsgiving, and spiritual purification.</p>
            <p>For Tamil Hindus, celebrations involve rituals rooted in Hindu traditions, including decorating homes and temples and making offerings to deities for blessings and prosperity.</p>
          </div>
          <div className="bg-[#D4A044]/5 p-6 rounded-xl border-l-4 border-[#D4A044] text-[#001F3D] font-serif text-sm">
            Despite religious differences, many customs, foods, and rituals overlap—highlighting a strong sense of cultural unity and shared heritage.
          </div>
        </motion.div>

        {/* Rituals Grid */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#D4A044]" />
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Key Rituals and Traditions</h2>
          </div>
          <p className="text-sm text-[#001F3D]/60">The New Year is guided by auspicious times (nekath) determined by astrologers, ensuring that each activity is performed at the most favorable moment.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {rituals.map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A044]" />
                      <h3 className="text-lg font-serif font-bold text-[#001F3D]">{r.title}</h3>
                    </div>
                    {r.sub && <span className="text-[10px] italic text-[#001F3D]/40 font-serif ml-3.5">{r.sub}</span>}
                  </div>
                </div>
                <p className="text-xs text-[#001F3D]/60 leading-relaxed">{r.desc}</p>
                {r.list && (
                  <ul className="grid grid-cols-2 gap-2 mt-2">
                    {r.list.map((li, idx) => (
                      <li key={idx} className="text-[11px] text-[#D4A044] flex items-center gap-2">
                         <div className="w-1 h-1 rounded-full bg-current" />
                         {li}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 4 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#D4A044]" />
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Traditional Games and Festivities</h2>
          </div>
          <p className="text-sm text-[#001F3D]/60">A joyful highlight of the New Year is the revival of traditional games, bringing communities together in celebration. Popular games include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {games.map((g, i) => (
               <div key={i} className="bg-white px-6 py-4 rounded-xl border border-gray-100 flex items-center justify-between group hover:border-[#D4A044]/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#D4A044]" />
                    <span className="text-sm font-bold text-[#001F3D] font-serif">{g.name}</span>
                  </div>
                  <span className="text-[10px] text-[#001F3D]/40 font-sans italic">{g.info}</span>
               </div>
            ))}
          </div>
          <p className="text-xs text-[#001F3D]/40 text-center italic">These activities strengthen social bonds, encourage teamwork, and preserve indigenous traditions.</p>
        </motion.div>

        {/* Section 5 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col gap-10">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#D4A044]" />
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Core Values and Social Meaning</h2>
          </div>
          <p className="text-sm text-gray-500">The Sinhala and Tamil New Year is more than a festival—it is a reflection of deeply rooted cultural values:</p>
          <div className="flex flex-col gap-6">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-4">
                <Star className="w-4 h-4 text-[#D4A044] shrink-0 mt-0.5" />
                <p className="text-sm text-[#001F3D] font-serif">
                   <span className="font-bold underline decoration-[#D4A044]/30 underline-offset-4">{v.split(':')[0]}:</span> {v.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section 6 */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 bg-[#D4A044]" />
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Modern Relevance</h2>
          </div>
          <div className="border-t border-gray-200 pt-8 mt-4">
            <p className="text-base md:text-lg font-sans italic text-[#001F3D]/70 leading-relaxed text-center px-6">
              &quot;In contemporary Sri Lanka, the Sinhala and Tamil New Year continues to serve as a powerful cultural anchor. It promotes inter-ethnic harmony in a diverse society and remains meaningful even in urban and diaspora communities, who adapt traditions to modern lifestyles while preserving their essence.&quot;
            </p>
          </div>
        </motion.div>

    </div>
  );
}
