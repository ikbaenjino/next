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

        {/* Toggle Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center">
          <Link href="/">Beranda</Link>

          {/* Dropdown: Program */}
          <div className="relative group">
            <div className="cursor-pointer flex items-center hover:text-pink-600">
              <span>Program</span>
              <span className="ml-1 text-xs">▼</span>
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md z-50 mt-2">
              <div className="flex flex-col text-sm text-gray-700 p-2 min-w-[180px]">
                <Link href="/program/little-koders" className="px-4 py-2 hover:text-pink-500">Little Koders</Link>
                <Link href="/program/junior-koders" className="px-4 py-2 hover:text-pink-500">Junior Koders</Link>
                <Link href="/program/holiday-camp" className="px-4 py-2 hover:text-pink-500">Holiday Camp</Link>
              </div>
            </div>
          </div>

          <Link href="/lokasi">Lokasi</Link>

          {/* Dropdown: Tentang Kami */}
          <div className="relative group">
            <div className="cursor-pointer flex items-center hover:text-pink-600">
              <span>Tentang Kami</span>
              <span className="ml-1 text-xs">▼</span>
            </div>
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md z-50 mt-2">
              <div className="flex flex-col text-sm text-gray-700 p-2 min-w-[180px]">
                <Link href="/tentang-kami" className="px-4 py-2 hover:text-pink-500">Cerita Kami</Link>
                <Link href="/karir" className="px-4 py-2 hover:text-pink-500">Karir</Link>
                <Link href="/blog" className="px-4 py-2 hover:text-pink-500">Blog</Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        } bg-white shadow-md`}
      >
        <div className="flex flex-col gap-4 px-6 text-sm font-medium text-gray-700">
          <Link href="/" onClick={handleLinkClick}>Beranda</Link>

          {/* Submenu Program */}
          <Link href="/program" onClick={handleLinkClick}>Program</Link>
          <Link href="/program/little-koders" onClick={handleLinkClick} className="pl-4 text-gray-500">- Little Koders</Link>
          <Link href="/program/junior-koders" onClick={handleLinkClick} className="pl-4 text-gray-500">- Junior Koders</Link>
          <Link href="/program/holiday-camp" onClick={handleLinkClick} className="pl-4 text-gray-500">- Holiday Camp</Link>

          <Link href="/lokasi" onClick={handleLinkClick}>Lokasi</Link>

          {/* Submenu Tentang Kami */}
          <Link href="/tentang-kami" onClick={handleLinkClick}>Tentang Kami</Link>
          <Link href="/karir" onClick={handleLinkClick} className="pl-4 text-gray-500">- Karir</Link>
          <Link href="/blog" onClick={handleLinkClick} className="pl-4 text-gray-500">- Blog</Link>
        </div>
      </div>
    </header>
  );
}
