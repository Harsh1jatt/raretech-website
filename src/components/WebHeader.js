"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function WebHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className="relative group py-2 text-gray-700 font-medium transition-colors duration-300 hover:text-blue-700"
    >
      {children}
      {/* Underline animation */}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/rare.png"
            alt="RareTech Logo"
            width={60}
            height={60}
            className="transition-transform duration-300 hover:scale-110"
            priority
          />
          <span className="font-extrabold text-2xl tracking-tight text-blue-700 transition-colors duration-300 group-hover:text-blue-800">
            RareTech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/legal">Legal Certificates</NavLink>

          {/* CTA Button */}
          <Link
            href="/certificate"
            className="px-4 py-2 bg-blue-700 text-white rounded-full shadow-lg font-semibold transform transition duration-300 hover:scale-105 hover:bg-blue-800"
          >
            Verify Certificate
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-800 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl py-4 border-t border-gray-100 animate-slideDown">
          <div className="flex flex-col gap-4 text-center px-4">
            <Link onClick={() => setMenuOpen(false)} href="/" className="py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition duration-200">Home</Link>
            <Link onClick={() => setMenuOpen(false)} href="/courses" className="py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition duration-200">Courses</Link>
            <Link onClick={() => setMenuOpen(false)} href="/about" className="py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition duration-200">About</Link>
            <Link onClick={() => setMenuOpen(false)} href="/contact" className="py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition duration-200">Contact</Link>
            <Link onClick={() => setMenuOpen(false)} href="/legal" className="py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition duration-200">Legal Certificates</Link>
            <Link 
              onClick={() => setMenuOpen(false)}
              href="/certificate"
              className="mt-2 w-full py-3 text-sm font-bold bg-blue-700 text-white rounded-lg shadow-md hover:bg-blue-800 hover:scale-105 transition transform duration-300"
            >
              Verify Certificate
            </Link>
          </div>
          
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.35s ease-out forwards;
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
