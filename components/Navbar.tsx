// components/Navbar.jsx
"use client";

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { navItems } from '../data/navData'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState(null)
  const navRef = useRef()

  // Close dropdown if clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav ref={navRef} className="navbar">
      <div className="container">
        <Link href="/"><a className="logo">LogoAnda</a></Link>
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`nav-menu ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className={`nav-item ${item.hasDropdown ? 'has-dropdown' : ''} ${openIndex === idx ? 'open' : ''}`}
              onClick={() => {
                // di desktop: klik toggles; di mobile sama
                if (item.hasDropdown) {
                  setOpenIndex(openIndex === idx ? null : idx)
                }
              }}
              onMouseEnter={() => {
                // hanya untuk desktop
                if (window.innerWidth >= 768 && item.hasDropdown) {
                  setOpenIndex(idx)
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768 && item.hasDropdown) {
                  setOpenIndex(null)
                }
              }}
            >
              <Link href={item.href}>
                <a className="nav-link">{item.title}</a>
              </Link>

              {item.hasDropdown && (
                <ul className="dropdown-menu">
                  {item.children.map((ch, cidx) => (
                    <li key={cidx}>
                      <Link href={ch.href}>
                        <a className="dropdown-link">{ch.title}</a>
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
  )
}
