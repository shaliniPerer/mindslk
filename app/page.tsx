import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Venues from '@/components/Venues';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import VideoSection from '@/components/VideoSection';
import ComingSoonOverlay from '@/components/ComingSoonOverlay';

export default function Home() {
  const showComingSoon = true;

  return (
    <>
      {/* 🔵 BACKGROUND (BLURRED) */}
      <main
        className={`min-h-screen bg-[#FAF9F6] ${
          showComingSoon ? 'className="blur-[2px] pointer-events-none"' : ''
        }`}
      >
        <Navbar />
        <Hero />
        <VideoSection />
        <OurStory />
        <Rooms />
        <Venues />
        <Amenities />
        <Gallery />
        <BookingForm />
        <Footer />
      </main>

      {/* 🔴 POPUP */}
      {showComingSoon && <ComingSoonOverlay />}
    </>
  );
}