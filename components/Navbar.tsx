"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">KodingNext</Link>
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

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-40">
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
