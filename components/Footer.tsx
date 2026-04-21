'use client';

import { Facebook, Instagram, Linkedin, Music2, Youtube, MapPin, Phone, Mail, Map } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#001F3D] text-white pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-2 overflow-hidden">
                 <Image src="/Logoo.png" alt="Minds Logo" width={60} height={60} className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-wider">Minds</span>
                <span className="text-[8px] uppercase font-sans tracking-[0.2em] text-white/50">Boutique Hotel & Wellness Resort</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-sans max-w-xs">
              Where timeless elegance meets modern luxury. Experience the perfect blend of heritage architecture and contemporary comfort.
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, href: 'https://www.facebook.com/mindsboutiquehotel' },
                { Icon: Instagram, href: 'https://www.instagram.com/mindsboutiquehotel/' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/mindsboutiquehotel' },
                { Icon: Music2, href: 'https://www.tiktok.com/@mindsboutiquehotel' },
                { Icon: Youtube, href: 'https://www.linkedin.com/company/mindsboutiquehotel' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#D4A044] hover:border-[#D4A044] transition-all transform hover:-translate-y-1">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8 lg:pl-12">
            <h4 className="text-sm font-serif font-bold tracking-[0.2em] uppercase text-white">Quick Links</h4>
            <ul className="flex flex-col gap-5 font-sans text-sm text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#rooms" className="hover:text-white transition-colors">Rooms & Suites</Link></li>
              <li><Link href="/#amenities" className="hover:text-white transition-colors">Amenities</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-8">
            <h4 className="text-sm font-serif font-bold tracking-[0.2em] uppercase text-white">Our Services</h4>
            <ul className="flex flex-col gap-5 font-sans text-sm text-white/60">
              <li><Link href="/wellness-spa" className="hover:text-white transition-colors">Spa & Wellness</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Fine Dining</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Private Events</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Airport Transfer</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cultural Tours</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Wedding Packages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <h4 className="text-sm font-serif font-bold tracking-[0.2em] uppercase text-white">Contact Info</h4>
            <ul className="flex flex-col gap-6 font-sans text-[13px] text-white/60">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D4A044]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4A044]" />
                </div>
                <span>No. 109A, Wewa Ihala Road, Jamburaliya, Madapatha, Piliyandala, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D4A044]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#D4A044]" />
                </div>
                <span>+94 77 950 1000</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D4A044]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#D4A044]" />
                </div>
                <span>info@minds.lk</span>
              </li>
            </ul>
            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 px-6 py-3 rounded-full transition-all text-[10px] font-bold tracking-widest self-start uppercase">
              <Map className="w-3.5 h-3.5 text-[#D4A044]" />
              View on Google Maps
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-[10px] text-white/20 tracking-[0.1em] font-medium">
          <p>© 2026 Minds Boutique Hotel & Wellness Resort. Digital Solutions by Click Inmo Pvt Ltd.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
