'use client';

import { motion } from 'motion/react';
import { Waves, Plane, Utensils, Wifi, Coffee, Wind, Trash2, Clock, Bell } from 'lucide-react';

export default function HotelFacilities() {
  const facilities = [
    { icon: <Waves className="w-6 h-6" />, title: "Outdoor Swimming Pool", desc: "Relax and unwind in our outdoor pool, thoughtfully positioned to offer peaceful views and a calming natural atmosphere." },
    { icon: <Plane className="w-6 h-6" />, title: "Airport Shuttle", desc: "Enjoy a smooth and hassle-free arrival and departure with our convenient airport shuttle service." },
    { icon: <Bell className="w-6 h-6" />, title: "Room Service", desc: "Dine in the comfort and privacy of your room with our attentive and timely room service." },
    { icon: <Wifi className="w-6 h-6" />, title: "Free Wi-Fi", desc: "Stay connected with complimentary high-speed Wi-Fi available throughout the property." },
    { icon: <Utensils className="w-6 h-6" />, title: "24/7 Restaurant", desc: "Savour freshly prepared Sri Lankan, European, and Indian cuisine in a relaxed dining setting." },
    { icon: <Coffee className="w-6 h-6" />, title: "Tea & Coffee Maker in All Rooms", desc: "Start your day or unwind at any time with complimentary tea and coffee facilities in every room." },
    { icon: <Wind className="w-6 h-6" />, title: "Air Conditioning", desc: "Enjoy a comfortable stay with individually controlled air conditioning in every room." },
    { icon: <Trash2 className="w-6 h-6" />, title: "Laundry Service", desc: "Keep your wardrobe fresh with our convenient professional laundry and dry cleaning services." },
    { icon: <Clock className="w-6 h-6" />, title: "Express Check-in & Check-out", desc: "Save time with our seamless and quick check-in and check-out process for a hassle-free experience." },
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-6 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#001F3D] text-center">Hotel Facilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {facilities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 md:p-10 rounded-[24px] md:rounded-[32px] transition-all hover:shadow-2xl hover:-translate-y-1 group flex flex-col items-center text-center gap-4 md:gap-6 border border-gray-50"
            >
              <div className="w-16 h-16 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#D4A044] transition-all transform group-hover:scale-110">
                {item.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-serif font-bold text-[#D4A044]">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-sans px-4">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
