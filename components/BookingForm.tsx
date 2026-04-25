'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function BookingForm() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left: Contact Info & Map */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#D4A044]" />
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-[#D4A044]">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#001F3D]">Book Your Stay</h2>
            <p className="text-[#001F3D]/60 max-w-md font-sans leading-relaxed text-sm md:text-base">
              Ready to experience the magic of Minds Boutique Hotel & Wellness Resort? Contact us to make a reservation or inquire about our exclusive packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 font-sans">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 border border-gray-100">
                <MapPin className="w-4 h-4 text-[#001F3D]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm tracking-widest text-[#001F3D] uppercase">Location</span>
                <p className="text-xs text-[#001F3D]/60 leading-relaxed">
                  No. 109A, Wewa Ihala Road, Jamburaliya, Madapatha, Piliyandala, Sri Lanka
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 border border-gray-100">
                <Phone className="w-4 h-4 text-[#001F3D]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm tracking-widest text-[#001F3D] uppercase">Phone</span>
                <p className="text-xs text-[#001F3D]/60">+94 77 950 1000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 border border-gray-100">
                <Mail className="w-4 h-4 text-[#001F3D]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm tracking-widest text-[#001F3D] uppercase">Email</span>
                <p className="text-xs text-[#001F3D]/60">info@minds.lk</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative w-full h-[300px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.109121932977!2d79.91632124564344!3d6.866164287953266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b002c914bf9%3A0xe5469446d3e75e14!2sMinds%20Boutique%20Hotel%20%26%20Wellness%20Resort!5e0!3m2!1sen!2slk!4v1713430000000!5m2!1sen!2slk"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right: Stay Inquiry Form */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-12 rounded-[28px] md:rounded-[40px] shadow-2xl border border-gray-50 font-sans"
          >
            <h3 className="text-3xl font-serif font-bold mb-8 text-[#001F3D]">Reservation Inquiry</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3D]/50">Full Name *</label>
                  <input type="text" placeholder=" " className="w-full px-5 py-4 bg-[#FAF9F6] rounded-xl border-none text-sm text-[#001F3D] placeholder-[#001F3D]/30 focus:ring-2 focus:ring-[#D4A044] transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3D]/50">Email Address *</label>
                  <input type="email" placeholder=" " className="w-full px-5 py-4 bg-[#FAF9F6] rounded-xl border-none text-sm text-[#001F3D] placeholder-[#001F3D]/30 focus:ring-2 focus:ring-[#D4A044] transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3D]/50">Phone Number</label>
                  <input type="tel" placeholder=" " className="w-full px-5 py-4 bg-[#FAF9F6] rounded-xl border-none text-sm text-[#001F3D] placeholder-[#001F3D]/30 focus:ring-2 focus:ring-[#D4A044] transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3D]/50">Number of Guests</label>
                  <select className="w-full px-5 py-4 bg-[#FAF9F6] rounded-xl border-none text-sm text-[#001F3D] focus:ring-2 focus:ring-[#D4A044] transition-all appearance-none cursor-pointer">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>Group (5+)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3D]/50">Check-in Date *</label>
                  <input type="date" className="w-full px-5 py-4 bg-[#FAF9F6] rounded-xl border-none text-sm text-[#001F3D] focus:ring-2 focus:ring-[#D4A044] transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3D]/50">Check-out Date *</label>
                  <input type="date" className="w-full px-5 py-4 bg-[#FAF9F6] rounded-xl border-none text-sm text-[#001F3D] focus:ring-2 focus:ring-[#D4A044] transition-all" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3D]/50">Special Requests</label>
                <textarea rows={4} placeholder="Any special requests or preferences..." className="w-full px-5 py-4 bg-[#FAF9F6] rounded-xl border-none text-sm text-[#001F3D] placeholder-[#001F3D]/30 focus:ring-2 focus:ring-[#D4A044] transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-[#1B4F8A] text-white py-5 rounded-full text-sm font-bold tracking-[0.3em] hover:bg-[#1B4F8A]/90 transition-all shadow-xl shadow-[#1B4F8A]/20 active:scale-[0.98] mt-4">
                SUBMIT INQUIRY
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
