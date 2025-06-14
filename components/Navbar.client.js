// components/Navbar.client.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          KodingNext
        </Link>

        {/* Hamburger Button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Beranda</Link>
          <Link href="/program">Program</Link>
          <Link href="/lokasi">Lokasi</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>

      {/* Mobile Menu dengan animasi slide-in */}
      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 transform transition-all duration-300 ease-in-out"
        >
          <nav className="flex flex-col px-4 py-3 gap-3 text-base font-medium text-gray-700">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              Beranda
            </Link>
            <Link
              href="/program"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              Program
            </Link>
            <Link
              href="/lokasi"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              Lokasi
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded hover:bg-gray-100 transition"
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}