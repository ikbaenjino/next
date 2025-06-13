import '../styles/globals.css';
import '../styles/tailwind.css';

import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Navbar from '@/components/Navbar.client';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// ✅ Metadata tetap
export const metadata = {
  title: "Engineer - Sekolah Coding & Teknologi",
  description: "Belajar coding, teknologi, dan inovasi untuk anak dan remaja. Program belajar interaktif di Asia Tenggara.",
  metadataBase: new URL("https://next-zttx.vercel.app"),
  openGraph: {
    title: "Engineer - Sekolah Coding & Teknologi",
    description: "Program coding kreatif untuk anak dan remaja di Asia Tenggara.",
    type: "website",
    locale: "id_ID",
    url: "https://next-zttx.vercel.app",
    siteName: "Engineer",
    images: [
      {
        url: "https://res.cloudinary.com/dowrfl4lt/image/upload/v1749774491/hero-banner_ui0o1q.jpg",
        width: 1200,
        height: 630,
        alt: "Engineer - Sekolah Coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineer - Sekolah Coding & Teknologi",
    description: "Program coding kreatif untuk anak dan remaja di Asia Tenggara.",
    images: ["https://res.cloudinary.com/dowrfl4lt/image/upload/v1749774491/hero-banner_ui0o1q.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <LanguageToggle />
        
        {/* ✅ Tambahkan padding-top agar konten tidak tertutup navbar */}
        <main className="pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}