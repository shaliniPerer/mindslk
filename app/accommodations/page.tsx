'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccommodationsHero from '@/components/AccommodationsHero';
import Rooms from '@/components/Rooms';
import StayPackages from '@/components/StayPackages';
import HotelFacilities from '@/components/HotelFacilities';

export default function AccommodationsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <AccommodationsHero />
      <Rooms />
      <HotelFacilities />
      <StayPackages />
      <Footer />
    </main>
  );
}
