// app/layout.js

import { Inter } from 'next/font/google';
import Header from '@/components/Header'; // @/ adalah alias untuk root direktori
import Footer from '@/components/Footer';
import './globals.css'; // File CSS global

const inter = Inter({ subsets: ['latin'] });

// Metadata untuk SEO
export const metadata = {
  title: 'Koding Next - Lokasi Sekolah Coding',
  description: 'Temukan lokasi sekolah coding Koding Next terdekat di kota Anda. Kami hadir di Jakarta, Surabaya, dan kota-kota lainnya.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main>
          {children} {/* Konten halaman (misal: lokasi/page.js) akan dirender di sini */}
        </main>
        <Footer />
      </body>
    </html>
  );
}