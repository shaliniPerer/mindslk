import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OurStory from '@/components/OurStory';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Venues from '@/components/Venues';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import WelcomeVideoPopup from '@/components/WelcomeVideoPopup';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#FAF9F6]">
      <WelcomeVideoPopup />
      <Navbar />
      <Hero />
      <OurStory />
      <Rooms />
      <Venues />
      <Amenities />
      <Gallery />
      <BookingForm />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94779501000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
        style={{ background: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.737 5.474 2.027 7.774L0 32l8.467-2.003A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.787-1.853l-.486-.29-5.027 1.188 1.217-4.898-.317-.502A13.28 13.28 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.987c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.899.2-.266.398-1.031 1.295-1.264 1.561-.232.266-.465.3-.863.1-.398-.2-1.681-.62-3.201-1.977-1.183-1.055-1.981-2.358-2.213-2.756-.232-.398-.025-.613.175-.811.18-.178.398-.465.598-.698.199-.232.265-.398.398-.664.133-.266.066-.499-.033-.698-.1-.2-.899-2.167-1.231-2.965-.325-.779-.655-.673-.9-.685l-.765-.013c-.266 0-.698.1-.1.065 1.063-.066 1.595 1.063 1.595 1.063s1.997 4.73 2.13 5.062c.133.332-.133 1.33-.133 1.33l-.133.664c-.033.199.033.398.232.531.2.133 2.888 1.794 4.782 2.527 1.895.733 1.895.488 2.238.455.343-.033 1.106-.453 1.263-.89.157-.436.157-.81.11-.89-.047-.08-.265-.18-.663-.38z"/>
        </svg>
      </a>
    </main>
  );
}
