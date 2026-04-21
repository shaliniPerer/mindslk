import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Minds Boutique Hotel & Wellness Resort',
  description: 'Exquisite hospitality experience in Sri Lanka',
  icons: {
    icon: '/Favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="bg-[#FAF9F6] text-[#1A1A1A] font-sans">
        {children}
      </body>
    </html>
  );
}
