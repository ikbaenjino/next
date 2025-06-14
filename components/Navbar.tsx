"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems } from "../data/navData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Deteksi mobile vs desktop
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Tutup menu jika klik di luar
  useEffect(() => {
    const handler = (e: MouseEvent) =>
      navRef.current && !navRef.current.contains(e.target as Node)
        ? (setMobileOpen(false), setOpenIndex(null))
        : null;
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-200 z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">LogoAnda</span>
        </Link>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`absolute top-full left-0 w-full bg-white md:static md:w-auto md:flex md:space-x-6 transition-all z-40 ${
            mobileOpen ? "block" : "hidden md:block"
          }`}
        >
          {navItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => !isMobile && item.hasDropdown && setOpenIndex(idx)}
                onMouseLeave={() => !isMobile && item.hasDropdown && setOpenIndex(null)}
              >
                <div
                  className="flex justify-between items-center px-4 py-2 md:px-0 md:py-0 cursor-pointer"
                  onClick={() => {
                    if (isMobile && item.hasDropdown) {
                      setOpenIndex(isOpen ? null : idx);
                    }
                  }}
                >
                  <Link href={item.href}>
                    <span>{item.title}</span>
                  </Link>
                  {item.hasDropdown && <span className="ml-2">{isMobile ? (isOpen ? "▾" : "▸") : "▾"}</span>}
                </div>

                {/* Submenu */}
                {item.hasDropdown && isOpen && (
                  <ul
                    className={`bg-white ${
                      isMobile
                        ? "pl-6"
                        : "absolute left-0 top-full mt-1 shadow-lg rounded-md min-w-[160px]"
                    }`}
                  >
                    {item.children.map((ch, cidx) => (
                      <li key={cidx}>
                        <Link href={ch.href}>
                          <span
                            onClick={() => isMobile && setMobileOpen(false)}
                            className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
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
