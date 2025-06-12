import '../styles/globals.css';
import '../styles/tailwind.css';

// Import font dari next/font
import { Inter } from 'next/font/google';

// Komponen UI
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

// Inisialisasi font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Metadata SEO
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
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Koding Next - Sekolah Coding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kodingnext",
    title: "Koding Next",
    description: "Belajar coding dan teknologi untuk masa depan.",
    images: ["/images/logo-kodingnext.svg"],
  },
};

// Root Layout
export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tags Tambahan */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Koding Next" />
        <meta name="keywords" content="coding, sekolah coding, pendidikan teknologi, Next.js, web development" />
      </head>
      <body className="font-sans">
        <Navbar />
        <LanguageToggle />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}