"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="fixed top-0 left-0 z-50 w-full bg-white">
      <nav className="mx-auto max-w-7xl flex items-center justify-between h-20 px-6 lg:px-10">

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative font-medium text-gray-700 transition-colors duration-300 hover:text-pink-500 group"
            >
              {link.name}

              <span
                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-pink-500
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <Menu size={28} strokeWidth={2} />
          )}
        </button>

      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ease-in-out
          ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                block
                px-6
                py-4
                text-gray-700
                font-medium
                hover:bg-pink-50
                hover:text-pink-500
                transition-colors
              "
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>

    </header>
  );
}