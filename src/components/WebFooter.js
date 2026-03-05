<<<<<<< HEAD
"use client";

import Link from "next/link";
import {
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Building,
  ChevronRight,
  ExternalLink,
  Mail
} from "lucide-react";

export default function WebFooter() {
  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer
        role="contentinfo"
        className="relative overflow-hidden bg-[#1F3E8A] text-white pt-20 pb-8 mt-24 border-t-[6px] border-[#FF7A00] font-sans"
      >
        {/* Animated Glow Background */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at top right, #FF7A00 0%, transparent 40%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at bottom left, #ffffff 0%, transparent 50%)" }}
        />

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* ================= Institute Info (Spans 5 cols) ================= */}
          <section className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                RareTech <span className="text-[#FF7A00]">Institute</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-100 max-w-md font-medium">
                Ludhiana's premier computer training center. We provide 100% practical, job-oriented education in Full Stack Web Development, Advanced Digital Marketing, Graphic Designing, and Corporate Accounting.
              </p>
            </div>

            <address className="not-italic space-y-5 mt-6 text-sm">
              {/* MAIN BRANCH */}
              <div className="flex gap-4 items-start group">
                <div className="bg-white/10 p-2.5 rounded-xl text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                  <Building size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Main Campus</p>
                  <p className="text-blue-100 leading-relaxed mt-1">
                    Subhash Nagar Street No.10,<br />
                    Ludhiana, Punjab, India
                  </p>
                </div>
              </div>

              {/* TIKONI PARK */}
              <div className="flex gap-4 items-start group">
                <div className="bg-white/10 p-2.5 rounded-xl text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Tikoni Park Branch</p>
                  <p className="text-blue-100 leading-relaxed mt-1">
                    Tikoni Park Area,<br />
                    Ludhiana, Punjab, India
                  </p>
                </div>
              </div>

              {/* CONTACTS */}
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl mt-4 backdrop-blur-sm space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#FF7A00]" />
                  <a href="tel:+916280009096" className="font-semibold hover:text-[#FF7A00] transition-colors">
                    Mandeep Singh: +91 62800 09096
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#FF7A00]" />
                  <a href="tel:+917589434135" className="font-semibold hover:text-[#FF7A00] transition-colors">
                    Harshdeep: +91 75894 34135
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#FF7A00]" />
                  <a href="mailto:md331148@gmail.com" className="font-semibold hover:text-[#FF7A00] transition-colors">
                    md331148@gmail.com
                  </a>
                </div>
              </div>
            </address>
          </section>

          {/* ================= QUICK LINKS (Spans 3 cols) ================= */}
          <nav aria-label="Footer Navigation" className="lg:col-span-3 lg:ml-8">
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#FF7A00] inline-block pb-1">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Explore Courses", href: "/courses" },
                { name: "About RareTech", href: "/about" },
                { name: "Contact Institute", href: "/contact" },
                { name: "Legal Certificates", href: "/legal" },
                { name: "Verify Certificate", href: "/certificate" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-blue-100 hover:text-white font-medium transition-all"
                  >
                    <ChevronRight size={16} className="text-[#FF7A00] group-hover:translate-x-1 transition-transform" />
                    <span className="relative overflow-hidden">
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#FF7A00] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= STUDENT PORTAL (Spans 4 cols) ================= */}
          <section className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-6 text-white border-b-2 border-[#FF7A00] inline-block pb-1">
              Student & Admin Portals
            </h3>
            <ul className="space-y-4">
              {[
                {
                  name: "Admin Dashboard Panel",
                  href: "https://admin.raretech.co.in",
                  desc: "Management access only"
                },
                {
                  name: "Online Examination Portal",
                  href: "https://exam.raretech.co.in",
                  desc: "Take your live tests here"
                },
                {
                  name: "Master Typing Tutor",
                  href: "https://typing.raretech.co.in",
                  desc: "English & Punjabi typing practice"
                },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF7A00]/50 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white group-hover:text-[#FF7A00] transition-colors">
                        {item.name}
                      </span>
                      <ExternalLink size={16} className="text-blue-300 group-hover:text-[#FF7A00]" />
                    </div>
                    <p className="text-xs text-blue-200 mt-1">{item.desc}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="relative z-10 mt-16 border-t border-white/10 pt-8 pb-4 text-center">
          <p className="text-sm text-blue-200 font-medium px-4">
            © {new Date().getFullYear()} <strong className="text-white">RareTech Institute Of Information Technology</strong>. 
            <span className="hidden sm:inline"> | </span><br className="sm:hidden" />
            Designed & Developed in Ludhiana. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ================= FLOATING BUTTONS ================= */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        
        {/* Instagram */}
        <a
          href="https://www.instagram.com/mand.eep_singh1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="RareTech Instagram"
          className="group flex items-center justify-center w-14 h-14 rounded-full shadow-xl text-white bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:scale-110 transition-all duration-300 relative"
        >
          <Instagram size={24} className="group-hover:animate-bounce" />
          <span className="absolute right-full mr-4 bg-white text-gray-900 text-xs font-bold py-1 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Follow Us
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/916280009096?text=Hello%20RareTech%2C%20I%20want%20course%20details."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#20bd5a] text-white hover:scale-110 transition-all duration-300 relative"
        >
          <MessageCircle size={28} />
          {/* Pulse Ring */}
          <span className="absolute w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-50"></span>
          <span className="absolute right-full mr-4 bg-white text-gray-900 text-xs font-bold py-1 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Chat with us
          </span>
        </a>

      </div>
    </>
  );
}
=======
import Link from "next/link";
import { MessageCircle, Instagram } from "lucide-react";
export default function WebFooter() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">RareTech Institute</h2>
          <p>ISO-certified IT & Web Development Institute • Ludhiana, Punjab</p>
          <p className="mt-2">Tel: <a href="tel:+916280009096" className="underline">+91 62800 09096</a></p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Links For Institute</h3>
          <ul className="space-y-1">
            <li><Link href="https://admin.raretech.co.in" target="_blank">Admin Panel</Link></li>
            <li><Link href="https://exam.raretech.co.in" target="_blank">Exam Panel</Link></li>
            <li><Link href="https://typing.raretech.co.in" target="_blank">Typing Tutor</Link></li>

          </ul>
        </div>
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/916280009096?text=Hello%20RareTech%2C%20I%20want%20more%20information."
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-xl transition-all duration-300"
      >
        <MessageCircle size={26} />
      </Link>

      {/* Instagram Button */}
      <Link
        href="https://www.instagram.com/mand.eep_singh1/"
        target="_blank"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white p-3 rounded-full shadow-xl transition-all duration-300"
      >
        <Instagram size={26} />
      </Link>
    </div>
      </div>
      <p className="text-center mt-8 text-sm">&copy; {new Date().getFullYear()} RareTech Institute. All rights reserved.</p>
    </footer>
  );
}
>>>>>>> d2fd4b9a6a0e5e4baf52d5fd8b55af162adad2dd
