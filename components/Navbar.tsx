"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navItems } from "../data/navData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  // Update screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menus if click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-200 z-50 relative">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">LogoAnda</span>
        </Link>

        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <ul
          className={`absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent transition-all z-40 ${
            mobileOpen ? "flex flex-col" : "hidden md:flex md:flex-row md:items-center md:space-x-6"
          }`}
        >
          {navItems.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <li
                key={idx}
                className={`relative ${item.hasDropdown ? "group" : ""}`}
              >
                <div
                  className="flex items-center justify-between px-4 py-2 md:px-0 md:py-0 cursor-pointer"
                  onClick={(e) => {
                    if (isMobile && item.hasDropdown) {
                      e.preventDefault();
                      setOpenIndex(isOpen ? null : idx);
                    }
                  }}
                >
                  <Link href={item.href}>
                    <span className="block">{item.title}</span>
                  </Link>
                  {item.hasDropdown && <span className="ml-2">▾</span>}
                </div>

                {item.hasDropdown && (
                  <ul
                    className={`${
                      isMobile
                        ? "relative w-full px-4 bg-white"
                        : "absolute left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md z-30 group-hover:block"
                    } ${isMobile ? (isOpen ? "block" : "hidden") : "hidden"}`}
                  >
                    {item.children.map((child, cidx) => (
                      <li key={cidx}>
                        <Link href={child.href}>
                          <span className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                            {child.title}
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
