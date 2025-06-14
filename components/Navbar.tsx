"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems } from "../data/navData";

export default function Navbar() {
  // State untuk mobile menu dan submenu
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Ref untuk menutup menu jika klik di luar
  const navRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-200 z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">LogoAnda</span>
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* ===== DESKTOP MENU (md+) ===== */}
        <ul className="hidden md:flex md:space-x-6">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group">
              <Link href={item.href}>
                <span className="px-4 py-2 block hover:text-blue-600 cursor-pointer">
                  {item.title}
                </span>
              </Link>

              {/* Dropdown desktop */}
              {item.hasDropdown && (
                <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[160px]">
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
          ))}
        </ul>

        {/* ===== MOBILE MENU (≤md) ===== */}
        {mobileOpen && (
          <ul className="flex flex-col md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-200 z-40">
            {navItems.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <li key={idx} className="border-b border-gray-200">
                  <div
                    className="flex justify-between items-center px-4 py-3 cursor-pointer"
                    onClick={() => {
                      if (item.hasDropdown) {
                        setOpenIndex(isOpen ? null : idx);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                  >
                    <Link href={item.href}>
                      <span>{item.title}</span>
                    </Link>
                    {item.hasDropdown && <span>{isOpen ? "▾" : "▸"}</span>}
                  </div>

                  {/* Dropdown mobile */}
                  {item.hasDropdown && isOpen && (
                    <ul className="bg-white">
                      {item.children.map((ch, cidx) => (
                        <li key={cidx} className="px-6 py-2 border-b border-gray-100">
                          <Link href={ch.href}>
                            <span onClick={() => setMobileOpen(false)} className="block">
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
        )}
      </div>
    </nav>
  );
}
