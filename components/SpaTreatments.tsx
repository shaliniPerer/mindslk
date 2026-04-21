'use client';

import { motion } from 'motion/react';
import { Clock, Plus, Check, Star } from 'lucide-react';

export default function SpaTreatments() {
  const massageTherapies = [
    "Full Body Relaxation Massage",
    "Ayurvedic Oil Massage",
    "Deep Tissue Massage",
    "Swedish Massage",
    "Hot Stone Massage",
    "Head, Neck & Shoulder Therapy",
    "Foot Reflexology"
  ];

  const healingBody = [
    "Herbal Steam Bath",
    "Body Scrub (Coconut / Herbal)",
    "Detox Therapy",
    "Stress Relief Therapy",
    "Traditional Ayurveda Treatments"
  ];

  const packages = [
    {
      icon: Check,
      title: 'Relaxation Spa Package',
      tag: 'Ideal after travel or sightseeing',
      includes: 'Full Body Massage (60 mins)',
      benefits: ['Relieves muscle tension', 'Improves blood circulation', 'Reduces fatigue & body pain']
    },
    {
      icon: Plus,
      title: 'Healing & Detox Spa Package',
      tag: 'Recommended for nature & adventure travellers',
      includes: ['Ayurvedic Massage', 'Herbal Steam Bath', 'Head & Shoulder Therapy'],
      benefits: ['Removes toxins', 'Boosts immunity', 'Improves skin & digestion', 'Relieves joint stiffness']
    },
    {
      icon: Star,
      title: 'Luxury Spa Wellness Package',
      tag: 'High value premium package',
      includes: ['Full Body Massage', 'Body Scrub', 'Steam Bath', 'Foot Reflexology'],
      benefits: ['Deep muscle recovery', 'Skin rejuvenation', 'Stress hormone reduction', 'Complete body relaxation']
    }
  ];

  return (
    <section className="bg-white py-24 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        
        {/* Left Side: Menus */}
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-6">
            <motion.h2 className="text-4xl font-serif font-bold text-[#001F3D]">Spa & Treatments</motion.h2>
            <p className="text-[#001F3D]/60 font-sans leading-relaxed max-w-lg">
              Inspired by traditional Sri Lankan healing practices, focusing on muscle relief, detoxification, circulation, and deep relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-serif font-bold text-[#D4A044] border-b border-gray-100 pb-4">Massage Therapies</h3>
              <ul className="flex flex-col gap-4">
                {massageTherapies.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#001F3D]/70 font-sans group cursor-default">
                    <span className="w-1 h-1 bg-[#D4A044] rounded-full group-hover:w-2 transition-all" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-serif font-bold text-[#D4A044] border-b border-gray-100 pb-4">Healing & Body</h3>
              <ul className="flex flex-col gap-4">
                {healingBody.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#001F3D]/70 font-sans group cursor-default">
                    <span className="w-1 h-1 bg-[#D4A044] rounded-full group-hover:w-2 transition-all" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Packages & Offer */}
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#001F3D]/5 rounded-2xl p-6 border border-[#001F3D]/10 flex items-start gap-4 mb-4"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6 text-[#D4A044]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#001F3D] mb-1">Special Offer</h4>
              <p className="text-xs text-[#001F3D]/50 leading-relaxed">Guests staying on Full Board enjoy exclusive package discounts on all Spa and Yoga packages.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
             {packages.map((pkg, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col gap-6 ${i === 2 ? 'md:col-span-2 max-w-md mx-auto w-full' : ''}`}
               >
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#FAF9F6] rounded-lg flex items-center justify-center">
                       <pkg.icon className="w-5 h-5 text-[#001F3D]" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg text-[#001F3D] leading-tight">{pkg.title}</h4>
                      <p className="text-[10px] text-[#D4A044] font-medium italic mt-1 font-sans">✓ {pkg.tag}</p>
                    </div>
                 </div>

                 <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] uppercase font-bold text-[#001F3D]/40 tracking-wider">Includes:</span>
                       <div className="text-xs text-[#001F3D]/70 font-sans leading-relaxed">
                          {Array.isArray(pkg.includes) ? pkg.includes.join(', ') : pkg.includes}
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                       <span className="text-[10px] uppercase font-bold text-[#001F3D]/40 tracking-wider">Body Benefits:</span>
                       <ul className="flex flex-col gap-1.5">
                          {pkg.benefits.map((benefit, j) => (
                            <li key={j} className="text-xs text-gray-500 font-sans flex items-center gap-2">
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

      </div>
    </section>
  );
}
