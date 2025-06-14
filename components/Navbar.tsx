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

        {/* Tombol Toggle Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 items-center relative">
          <Link href="/">Beranda</Link>

          {/* MENU PROGRAM dengan Dropdown */}
          <div className="relative group">
            <Link href="/program" className="hover:text-pink-600 flex items-center gap-1">
              Program <span className="text-xs">▼</span>
            </Link>
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md rounded-md mt-2 z-50">
              <div className="flex flex-col p-4 min-w-[180px] text-sm text-gray-700">
                <Link href="/program/little-koders" className="hover:text-pink-500">Little Koders</Link>
                <Link href="/program/junior-koders" className="hover:text-pink-500">Junior Koders</Link>
                <Link href="/program/holiday-camp" className="hover:text-pink-500">Holiday Camp</Link>
              </div>
            </div>
          </div>

          <Link href="/lokasi">Lokasi</Link>
          <Link href="/blog">Blog</Link>
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

          {/* Expandable sub-menu di mobile (opsional bisa pakai accordion) */}
          <Link href="/program" onClick={handleLinkClick}>Program</Link>
          <Link href="/program/little-koders" onClick={handleLinkClick} className="pl-4 text-gray-500">- Little Koders</Link>
          <Link href="/program/junior-koders" onClick={handleLinkClick} className="pl-4 text-gray-500">- Junior Koders</Link>
          <Link href="/program/holiday-camp" onClick={handleLinkClick} className="pl-4 text-gray-500">- Holiday Camp</Link>

          <Link href="/lokasi" onClick={handleLinkClick}>Lokasi</Link>
          <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
        </div>
      </div>
    </header>
  );
}
