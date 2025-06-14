"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { navItems } from '../data/navData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-200 z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">LogoAnda</span>
        </Link>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul
          className={`md:flex md:items-center md:space-x-6 hidden md:static md:flex-row absolute bg-white w-full md:w-auto left-0 top-full transition-all ${
            mobileOpen ? 'flex flex-col' : ''
          }`}
        >
          {navItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => {
                  if (!isMobile && item.hasDropdown) setOpenIndex(idx);
                }}
                onMouseLeave={() => {
                  if (!isMobile && item.hasDropdown) setOpenIndex(null);
                }}
              >
                <div
                  className="flex items-center justify-between cursor-pointer px-4 py-2 md:px-0 md:py-0"
                  onClick={(e) => {
                    if (item.hasDropdown && isMobile) {
                      e.preventDefault(); // cegah navigasi ke /tentang-kami
                      setOpenIndex(isOpen ? null : idx);
                    }
                  }}
                >
                  <Link href={item.href}>
                    <span className="block md:inline-block cursor-pointer">{item.title}</span>
                  </Link>
                  {item.hasDropdown && <span className="ml-2 md:ml-1">▾</span>}
                </div>

                {item.hasDropdown && (
                  <ul
                    className={`absolute md:absolute z-10 bg-white shadow-md rounded-md mt-2 w-48 ${
                      isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    {item.children.map((ch, cidx) => (
                      <li key={cidx}>
                        <Link href={ch.href}>
                          <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {ch.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
