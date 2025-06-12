import '../styles/globals.css';
import '../styles/tailwind.css';

import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ✅ Format metadata khusus App Router
export const metadata = {
  title: "Koding Next - Sekolah Coding & Teknologi",
  description: "Belajar coding, teknologi, dan inovasi untuk anak dan remaja. Program belajar interaktif di Asia Tenggara.",
  metadataBase: new URL("https://next-zttx.vercel.app"),
  openGraph: {
    title: "Koding Next - Sekolah Coding & Teknologi",
    description: "Program coding kreatif untuk anak dan remaja di Asia Tenggara.",
    type: "website",
    locale: "id_ID",
    url: "https://next-zttx.vercel.app",
    siteName: "Koding Next",
    images: [
      {
        url: "https://next-zttx.vercel.app/images/hero-banner.jpg",
        width: 120,
        height: 63,
        alt: "Koding Next - Sekolah Coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koding Next - Sekolah Coding & Teknologi",
    description: "Program coding kreatif untuk anak dan remaja di Asia Tenggara.",
    images: ["https://next-zttx.vercel.app/images/hero-banner.jpg"],
  },
};

// ✅ FORMAT BENAR untuk App Router
export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <LanguageToggle />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
