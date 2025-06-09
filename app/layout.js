import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LanguageToggle from "../components/LanguageToggle";


export const metadata = {
  title: 'Koding Next Clone',
  description: 'Sekolah Coding dan Teknologi Terbaik di Asia Tenggara',
}

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

