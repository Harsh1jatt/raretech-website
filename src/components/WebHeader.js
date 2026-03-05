"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function WebHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLink = ({ href, children }) => (
    <Link
      href={href}
      className="relative group py-2 text-gray-700 font-bold transition-colors duration-300 hover:text-[#1F3E8A]"
    >
      {children}
      {/* Accent Orange Underline animation */}
      <span className="absolute left-0 bottom-0 w-full h-[3px] rounded-t-full bg-[#FF7A00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
  );

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 z-50 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden">
            <Image
              src="/rare.png"
              alt="RareTech Institute Logo"
              fill
              className="object-contain transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl md:text-3xl tracking-tight text-[#1F3E8A] leading-none">
              RareTech
            </span>
            <span className="text-[10px] md:text-xs font-bold text-[#FF7A00] tracking-widest uppercase mt-0.5">
              Institute of Information Technology
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/legal">Certificates</NavLink>

          {/* CTA Button */}
          <Link
            href="/certificate"
            className="px-6 py-2.5 bg-[#FF7A00] hover:bg-[#e66a00] text-white rounded-full font-extrabold shadow-lg shadow-orange-500/20 transform transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            Verify Certificate
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[#1F3E8A] rounded-lg hover:bg-blue-50 transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 animate-slideDown">
          <div className="flex flex-col px-6 py-6 gap-2 h-[calc(100vh-80px)] overflow-y-auto">
            <Link 
              onClick={() => setMenuOpen(false)} 
              href="/" 
              className="py-3 px-4 text-lg font-bold text-gray-800 hover:bg-blue-50 hover:text-[#1F3E8A] rounded-xl transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)} 
              href="/courses" 
              className="py-3 px-4 text-lg font-bold text-gray-800 hover:bg-blue-50 hover:text-[#1F3E8A] rounded-xl transition-colors duration-200"
            >
              Courses
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)} 
              href="/about" 
              className="py-3 px-4 text-lg font-bold text-gray-800 hover:bg-blue-50 hover:text-[#1F3E8A] rounded-xl transition-colors duration-200"
            >
              About Us
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)} 
              href="/contact" 
              className="py-3 px-4 text-lg font-bold text-gray-800 hover:bg-blue-50 hover:text-[#1F3E8A] rounded-xl transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              onClick={() => setMenuOpen(false)} 
              href="/legal" 
              className="py-3 px-4 text-lg font-bold text-gray-800 hover:bg-blue-50 hover:text-[#1F3E8A] rounded-xl transition-colors duration-200"
            >
              Legal Certificates
            </Link>
            
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link 
                onClick={() => setMenuOpen(false)}
                href="/certificate"
                className="w-full py-4 text-lg font-extrabold bg-[#FF7A00] text-white rounded-xl shadow-lg hover:bg-[#e66a00] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Verify Certificate
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: top;
        }
        @keyframes slideDown {
          0% { 
            opacity: 0; 
            transform: scaleY(0.95);
          }
          100% { 
            opacity: 1; 
            transform: scaleY(1);
          }
        }
      `}</style>
    </header>
  );
}