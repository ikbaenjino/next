// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4 relative">
        <Link href="/">
          <Image src="/images/logo-kodingnext.svg" alt="Engineer Logo" width={150} height={40} />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-600">Beranda</Link>
          <Link href="/program" className="hover:text-blue-600">Program</Link>
          <Link href="/lokasi" className="text-blue-600 font-semibold">Lokasi</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <line x1="18" x2="6" y1="6" y2="18"></line>
              <line x1="6" x2="18" y1="6" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu dengan Transisi */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col absolute top-full left-0 w-full bg-white shadow-lg p-4 menu-transition`}>
          <Link href="/" className="block py-2 hover:text-blue-600">Beranda</Link>
          <Link href="/program" className="block py-2 hover:text-blue-600">Program</Link>
          <Link href="/lokasi" className="block py-2 text-blue-600 font-semibold">Lokasi</Link>
          <Link href="/blog" className="block py-2 hover:text-blue-600">Blog</Link>
        </div>
      </nav>
    </header>
  );
}