"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          KodingNext
        </Link>

        {/* Toggle button for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center relative">

          <Link href="/">Beranda</Link>

          {/* PROGRAM DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center hover:text-pink-600">
              Program <span className="ml-1 text-xs">▼</span>
            </button>
            <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-md z-50 mt-2">
              <div className="flex flex-col text-sm text-gray-700 p-2 min-w-[180px] whitespace-nowrap">
                <Link href="/program/little-koders" className="px-4 py-2 hover:text-pink-500">Little Koders</Link>
                <Link href="/program/junior-koders" className="px-4 py-2 hover:text-pink-500">Junior Koders</Link>
                <Link href="/program/holiday-camp" className="px-4 py-2 hover:text-pink-500">Holiday Camp</Link>
              </div>
            </div>
          </div>

          <Link href="/lokasi">Lokasi</Link>

          {/* TENTANG KAMI DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center hover:text-pink-600">
              Tentang Kami <span className="ml-1 text-xs">▼</span>
            </button>
            <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-md z-50 mt-2">
              <div className="flex flex-col text-sm text-gray-700 p-2 min-w-[180px] whitespace-nowrap">
                <Link href="/tentang-kami" className="px-4 py-2 hover:text-pink-500">Cerita Kami</Link>
                <Link href="/karir" className="px-4 py-2 hover:text-pink-500">Karir</Link>
                <Link href="/blog" className="px-4 py-2 hover:text-pink-500">Blog</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        } bg-white shadow-md`}
      >
        <div className="flex flex-col gap-4 px-6 text-sm font-medium text-gray-700">
          <Link href="/" onClick={handleLinkClick}>Beranda</Link>

          {/* Program Mobile */}
          <Link href="/program" onClick={handleLinkClick}>Program</Link>
          <Link href="/program/little-koders" onClick={handleLinkClick} className="pl-4 text-gray-500">- Little Koders</Link>
          <Link href="/program/junior-koders" onClick={handleLinkClick} className="pl-4 text-gray-500">- Junior Koders</Link>
          <Link href="/program/holiday-camp" onClick={handleLinkClick} className="pl-4 text-gray-500">- Holiday Camp</Link>

          <Link href="/lokasi" onClick={handleLinkClick}>Lokasi</Link>

          {/* Tentang Kami Mobile */}
          <Link href="/tentang-kami" onClick={handleLinkClick}>Tentang Kami</Link>
          <Link href="/karir" onClick={handleLinkClick} className="pl-4 text-gray-500">- Karir</Link>
          <Link href="/blog" onClick={handleLinkClick} className="pl-4 text-gray-500">- Blog</Link>
        </div>
      </div>
    </header>
  );
}
