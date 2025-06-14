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
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Beranda</Link>
          <Link href="/program">Program</Link>
          <Link href="/lokasi">Lokasi</Link>
          <Link href="/blog">Blog</Link>
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
          <Link href="/program" onClick={handleLinkClick}>Program</Link>
          <Link href="/lokasi" onClick={handleLinkClick}>Lokasi</Link>
          <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
        </div>
      </div>
    </header>
  );
}