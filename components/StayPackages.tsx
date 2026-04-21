'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Check, Clock, Coffee, MapPin, Plane, Bike, Landmark } from 'lucide-react';

export default function StayPackages() {
  const packages = [
    {
      title: "3 Nights Package",
      subtitle: "Starter Experience",
      duration: "3 Nights",
      board: "Full Board",
      desc: "Perfect introduction to Minds Boutique Hotel & Wellness Resort with essential comforts and airport convenience.",
      highlight: "Airport Pickup Included",
      icon: <Plane className="w-4 h-4" />,
      image: "/MInds Photos/MINDS to send/X44.jpg",
      inclusions: [
        "Full Board accommodation (Breakfast, Lunch & Dinner)",
        "Free airport pickup from Bandaranaike International Airport (CMB)"
      ]
    },
    {
      title: "4 Nights Package",
      subtitle: "Local Discovery",
      duration: "4 Nights",
      board: "Full Board",
      desc: "Explore local culture with a complimentary Tuk-Tuk tour through vibrant markets and scenic villages.",
      highlight: "Tuk-Tuk Tour Included",
      icon: <Bike className="w-4 h-4" />,
      image: "/MInds Photos/MINDS to send/X3.jpg",
      inclusions: [
        "Full Board accommodation (Breakfast, Lunch & Dinner)",
        "Free airport pickup from Bandaranaike International Airport (CMB)",
        "Complimentary Tuk-Tuk tour: Piliyandala Market visit",
        "Scenic ride through Jamburaliya village and surrounding areas"
      ]
    },
    {
      title: "5 Nights Package",
      subtitle: "City Explorer",
      duration: "5 Nights",
      board: "Full Board",
      desc: "Experience the best of Colombo with a city tour plus local village adventures.",
      highlight: "Colombo City Tour Included",
      icon: <MapPin className="w-4 h-4" />,
      image: "/MInds Photos/MINDS to send/X8.jpg",
      inclusions: [
        "Full Board accommodation (Breakfast, Lunch & Dinner)",
        "Free airport pickup from Bandaranaike International Airport (CMB)",
        "Complimentary Colombo City Tour",
        "Complimentary Tuk-Tuk tour: Piliyandala Market & Jamburaliya village",
        "Jamburaliya village and surrounding areas exploration"
      ]
    },
    {
      title: "7 Nights Package",
      subtitle: "Ultimate Sri Lanka",
      duration: "7 Nights",
      board: "Full Board",
      desc: "The complete experience with a full-day Galle heritage tour, city adventures, and cultural immersion.",
      highlight: "Galle Heritage Tour Included",
      icon: <Landmark className="w-4 h-4" />,
      image: "/MInds Photos/MINDS to send/X26.jpg",
      bestValue: true,
      inclusions: [
        "Full Board accommodation (Breakfast, Lunch & Dinner)",
        "Free airport pickup from Bandaranaike International Airport (CMB)",
        "Complimentary Colombo City Tour",
        "Complimentary Tuk-Tuk tour: Piliyandala Market & Jamburaliya village",
        "Complimentary full-day Galle tour (return trip included)"
      ]
    }
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 bg-[#FAF9F6] overflow-hidden">


      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#D4A044]" />
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#D4A044]">Full Board Packages</span>
            <div className="h-[1px] w-8 bg-[#D4A044]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#001F3D]">Stay Packages</h2>
          <p className="text-[#001F3D]/60 max-w-2xl text-sm md:text-base leading-relaxed">
            Choose from our carefully designed Full Board packages, each with exclusive complimentary experiences to enhance your stay at Minds Boutique Hotel & Wellness Resort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden shadow-2xl border ${pkg.bestValue ? 'border-[#D4A044]' : 'border-gray-50'} flex flex-col group relative`}
            >
              {pkg.bestValue && (
                 <div className="absolute top-6 right-6 z-20 bg-[#D4A044] text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg animate-pulse">
                   Best Value
                 </div>
              )}
              
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-6 left-8">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white/80 mb-1 block">{pkg.subtitle}</span>
                  <h3 className="text-3xl font-serif font-bold text-white">{pkg.title}</h3>
                </div>
              </div>

              <div className="p-5 md:p-8 flex flex-col gap-5 md:gap-6 flex-grow font-sans">
                <div className="flex items-center gap-4">
                  <div className="bg-[#D6E8F5] text-[#1B4F8A] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {pkg.duration}
                  </div>
                  <div className="bg-[#D6E8F5] text-[#1B4F8A] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    <Coffee className="w-3 h-3" />
                    {pkg.board}
                  </div>
                </div>

                <p className="text-sm text-[#001F3D]/60 leading-relaxed font-sans">{pkg.desc}</p>

                <div className="flex items-center gap-3 py-3 border-y border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#D4A044]/20 flex items-center justify-center text-[#D4A044]">
                    {pkg.icon}
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#D4A044]">{pkg.highlight}</span>
                </div>

                <div className="flex flex-col gap-4">
                   <h4 className="text-[10px] uppercase font-bold tracking-widest text-[#001F3D]/40">Package Inclusions</h4>
                   <ul className="flex flex-col gap-3">
                     {pkg.inclusions.map((item, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-[12px] text-[#001F3D]/70 leading-tight">
                         <Check className="w-4 h-4 text-[#001F3D]/40 shrink-0 mt-0.5" />
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="mt-auto pt-8 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
                       <Check className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest">No Extra Charges</span>
                  </div>
                  <button className="w-full py-4 rounded-full text-sm font-bold tracking-[0.2em] transition-all active:scale-[0.98] bg-[#1B4F8A] text-white hover:bg-[#1B4F8A]/90">
                    Inquire About This Package
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <p className="text-[#001F3D]/50 text-sm font-sans ">Need a custom package? We&apos;re happy to create one tailored to your needs.</p>
          <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#001F3D] text-[#001F3D] text-xs font-bold tracking-widest hover:bg-[#001F3D] hover:text-white transition-all uppercase">
            Contact Us for Custom Packages →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
