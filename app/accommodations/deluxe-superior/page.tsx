'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Home, Trees, Droplets, BedDouble, Sun, MapPin } from 'lucide-react';

const galleryImages = [
  '/MInds Photos/MINDS to send/Y20.jpg',
  '/MInds Photos/MINDS to send/Y21.jpg',
  '/MInds Photos/MINDS to send/Y22.jpg',
  '/MInds Photos/MINDS to send/Y23.jpg',
  '/MInds Photos/MINDS to send/Y24.jpg',
  '/MInds Photos/MINDS to send/Y25.jpg',
  '/MInds Photos/MINDS to send/Y26.jpg',
  '/MInds Photos/MINDS to send/Y27.jpg',
];

const features = [
  {
    icon: <Home className="w-5 h-5 text-[#001F3D]/50" />,
    title: 'Total Living Space',
    desc: 'A generous 480 sqft space thoughtfully designed for both relaxation and style.',
  },
  {
    icon: <Trees className="w-5 h-5 text-[#001F3D]/50" />,
    title: 'Pool View',
    desc: 'Enjoy stunning views of the resort pool and lush tropical surroundings from your room.',
  },
  {
    icon: <Droplets className="w-5 h-5 text-[#001F3D]/50" />,
    title: 'Outdoor Shower',
    desc: 'A private outdoor shower nestled amidst greenery for a refreshing nature-inspired experience.',
  },
  {
    icon: <BedDouble className="w-5 h-5 text-[#001F3D]/50" />,
    title: 'King Bed',
    desc: 'A plush king-size bed dressed in premium linens for an indulgent night\'s rest.',
  },
  {
    icon: <Sun className="w-5 h-5 text-[#001F3D]/50" />,
    title: 'Natural Light',
    desc: 'Floor-to-ceiling windows flood the space with warm natural light throughout the day.',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#001F3D]/50" />,
    title: 'Prime Location',
    desc: 'Situated for easy access to the pool deck, gardens, and resort facilities.',
  },
];

const amenities = [
  { label: 'Climate Control', desc: 'High-efficiency air-conditioning for a restful stay.' },
  { label: 'Connectivity', desc: 'Complimentary high-speed Wi-Fi throughout the resort.' },
  { label: 'Sustainable Design', desc: 'Passive cooling architecture through open courtyards and thermal mass materials.' },
  { label: 'Eco-Friendly Water', desc: 'Low-flow fixtures and water heated by our integrated solar energy system.' },
  { label: 'Safety', desc: '24/7 power backup provided by our onsite generator.' },
];

export default function DeluxeSuperiorPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/MInds Photos/MINDS to send/X20.jpg"
            alt="Deluxe Superior Room"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#001F3D]/65" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col items-center gap-4 text-center px-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-10 bg-[#D4A044]" />
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4A044]">The Elevated Pool-Side Retreat</span>
            <div className="h-[1px] w-10 bg-[#D4A044]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">Deluxe Superior</h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: Details */}
          <div className="lg:col-span-2 flex flex-col gap-12">

            {/* Room Description */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-serif font-bold text-[#001F3D]">Room Description</h2>
              <p className="text-[#001F3D]/70 text-sm leading-relaxed">
                The Deluxe Superior Room is an elegantly appointed space that offers a refined blend of comfort and contemporary style. Positioned to capture stunning views of the resort pool, this room provides a serene escape with thoughtful design elements that honour the natural beauty of the surroundings. A step above our Deluxe Room, it delivers a more spacious and luxurious experience for the discerning guest.
              </p>
            </div>

            {/* Room Features */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-serif font-bold text-[#001F3D]">Room Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F0F0F0] flex items-center justify-center shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#001F3D]">{f.title}</p>
                      <p className="text-xs text-[#001F3D]/60 leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-serif font-bold text-[#001F3D]">In-Room Facilities &amp; Amenities</h2>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4">
                {amenities.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#D4A044]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <p className="text-sm text-[#001F3D]/70">
                      <span className="font-bold text-[#001F3D]">{a.label}:</span> {a.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Reserve Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 sticky top-28 flex flex-col gap-6"
            >
              <div>
                <p className="text-lg font-serif font-bold text-[#001F3D]">Reserve Room</p>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-serif font-bold text-[#D4A044]">$275</span>
                  <span className="text-sm text-[#001F3D]/50 font-sans">/ FB</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#001F3D]/60">Max Guests:</span>
                  <span className="font-bold text-[#1B4F8A]">2 Adults</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#001F3D]/60">Size:</span>
                  <span className="font-bold text-[#001F3D]">480 sqft</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#001F3D]/60">View:</span>
                  <span className="font-bold text-[#1B4F8A]">Pool View</span>
                </div>
              </div>

              <a
                href="https://wa.me/94779501000"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#1B4F8A] text-white py-4 rounded-full text-sm font-bold tracking-[0.2em] hover:bg-[#1B4F8A]/90 transition-all text-center mt-2"
              >
                Book Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Room Gallery */}
      <section className="relative py-20 px-6 bg-white overflow-hidden">
        {/* DotLottie - top left */}
        <div style={{
          position: 'absolute', top: 0, left: '-10px', zIndex: 1,
          width: 'clamp(140px, 32vw, 380px)', height: 'auto',
          pointerEvents: 'none', transform: 'scaleX(-1)',
        }}>
          <DotLottieReact
            src="https://lottie.host/7f39f48e-e7ca-469b-bf9f-acb02bbb9e37/ypkrKFLElh.lottie"
            autoplay
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        {/* DotLottie - top right */}
        <div style={{
          position: 'absolute', top: 0, right: '-10px', zIndex: 1,
          width: 'clamp(140px, 32vw, 380px)', height: 'auto',
          pointerEvents: 'none',
        }}>
          <DotLottieReact
            src="https://lottie.host/7f39f48e-e7ca-469b-bf9f-acb02bbb9e37/ypkrKFLElh.lottie"
            autoplay
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Room Gallery</h2>
            <div className="w-12 h-[2px] bg-[#D4A044]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Deluxe Superior Gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Rooms */}
      <section className="py-20 px-6 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#D4A044]" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#D4A044]">Explore</span>
              <div className="h-[1px] w-8 bg-[#D4A044]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#001F3D]">Other Rooms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {[
              { title: 'Deluxe Room', image: '/MInds Photos/MINDS to send/X44.jpg', href: '/accommodations/deluxe-room' },
              { title: 'Suite Room', image: '/MInds Photos/MINDS to send/Y40.jpg', href: '/accommodations/suite-room' },
            ].map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image src={room.image} alt={room.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-xl font-serif font-bold text-[#001F3D]">{room.title}</h3>
                  <Link href={room.href} className="block w-full bg-[#1B4F8A] text-white py-3 rounded-full text-sm font-bold tracking-[0.2em] hover:bg-[#1B4F8A]/90 transition-all text-center whitespace-nowrap">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
