// File: src/data/navData.js
export const navItems = [
  { title: 'Beranda', href: '/' },
  {
    title: 'Program',
    href: '/program',
    hasDropdown: true,
    children: [
      { title: 'Detail Program', href: '/program/namaprogram' },
      { title: 'Blog', href: '/program/blog' },
      { title: 'Karir', href: '/program/karir' },
    ],
  },
  { title: 'Franchise', href: '/franchise' },
  {
    title: 'Tentang Kami',
    href: '/tentang-kami',
    hasDropdown: true,
    children: [
      { title: 'Sejarah', href: '/tentang-kami/sejarah' },
      { title: 'Visi & Misi', href: '/tentang-kami/visi-misi' },
    ],
  },
  { title: 'Lokasi', href: '/lokasi' },
];

// File: src/components/Navbar.jsx
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { navItems } from '../data/navData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-200 z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <a className="text-xl font-bold">LogoAnda</a>
        </Link>
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-full md:top-auto transition-transform md:transition-none ${
            mobileOpen ? 'block' : 'hidden md:block'
          }`}
        >
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => window.innerWidth >= 768 && item.hasDropdown && setOpenIndex(idx)}
              onMouseLeave={() => window.innerWidth >= 768 && item.hasDropdown && setOpenIndex(null)}
            >
              <div
                className="flex items-center justify-between cursor-pointer p-4 md:p-0"
                onClick={() => item.hasDropdown && setOpenIndex(openIndex === idx ? null : idx)}
              >
                <Link href={item.href}>
                  <a className="block md:inline-block">{item.title}</a>
                </Link>
                {item.hasDropdown && (
                  <span className="ml-2 md:ml-1">▾</span>
                )}
              </div>

              {item.hasDropdown && (
                <ul
                  className={`absolute md:absolute bg-white shadow-md rounded-md mt-0 md:mt-2 w-48 md:w-auto ${
                    openIndex === idx ? 'block' : 'hidden'
                  }`}
                >
                  {item.children.map((ch, cidx) => (
                    <li key={cidx}>
                      <Link href={ch.href}>
                        <a className="block px-4 py-2 hover:bg-gray-100">{ch.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/*
  Penempatan file:
  - Taruh "navData.js" di folder "src/data/navData.js" (atau di root/data/navData.js jika tidak menggunakan src).
  - Taruh "Navbar.jsx" di "src/components/Navbar.jsx".
  - Pastikan di "pages/_app.js" atau layout global Anda sudah mengimpor "global.css" dan "tailwind.css",
    serta menggunakan <Navbar /> di atas konten halaman.
*/
