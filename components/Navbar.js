"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // pastikan: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Kontainer Utama */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          KodingNext
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Beranda</Link>
          <Link href="/program">Program</Link>
          <Link href="/lokasi">Lokasi</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        {/* Tombol Hamburger Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full z-40">
          <nav className="flex flex-col px-4 py-3 gap-3 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setIsOpen(false)}>Beranda</Link>
            <Link href="/program" onClick={() => setIsOpen(false)}>Program</Link>
            <Link href="/lokasi" onClick={() => setIsOpen(false)}>Lokasi</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
