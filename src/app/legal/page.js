"use client";

<<<<<<< HEAD
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// CERTIFICATE DATA WITH DEEP SEO DESCRIPTIONS
// ==========================================
const certificates = [
  {
    title: "ISO 9001:2015 Certification",
    img: "/images/iso.png",
    alt: "ISO 9001:2015 Quality Management Certificate RareTech Ludhiana",
    badge: "Global Quality Standard",
    desc: "This internationally recognized certification guarantees that our educational curriculum, management processes, and student services meet strict global quality standards. It ensures that the training you receive is consistent, professional, and continuously improving."
  },
  {
    title: "Udyam Registration (Govt. of India)",
    img: "/images/udyam1.jpeg",
    alt: "MSME Udyam Certificate Page 1 RareTech Institute",
    badge: "Government Approved",
    desc: "Officially registered under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India. This validates RareTech Institute as a legally recognized entity, adding immense value and government-backed credibility to the certificates we issue to our students."
  },
  {
    title: "Udyam Annexure & Details",
    img: "/images/udyam2.jpeg",
    alt: "MSME Udyam Certificate Page 2 RareTech Institute",
    badge: "Official Legal Entity",
    desc: "The detailed annexure of our MSME Udyam registration, outlining our authorized business activities in the field of educational training, IT skill development, and professional computer courses in Ludhiana."
  }
];

export default function LegalCertificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* ================= SCHEMA MARKUP (SEO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "RareTech Institute Of Information Technology",
            "url": "https://raretechinstitute.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ludhiana",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "award": [
              "ISO 9001:2015 Certified IT Institute",
              "MSME Udyam Registered Educational Institute"
            ],
            "description": "A fully recognized and government-approved IT training institute in Ludhiana, holding ISO 9001:2015 and MSME Udyam certifications."
          })
        }}
      />

      <main className="w-full bg-gray-50 text-gray-800 font-sans selection:bg-[#FF7A00] selection:text-white pb-20 min-h-screen">
        
        {/* ================= 1. HERO HEADER ================= */}
        <section className="relative bg-[#1F3E8A] text-white pt-20 pb-24 px-6 overflow-hidden">
          {/* Abstract background patterns */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex justify-center text-sm text-blue-200 font-medium mt-7 mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><span className="text-blue-400">/</span></li>
                <li aria-current="page" className="text-[#FF7A00] font-bold">Certificates & Approvals</li>
              </ol>
            </nav>

            <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-white font-bold text-sm tracking-widest uppercase mb-6 border border-white/20 backdrop-blur-sm">
              100% Verified & Authentic
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Our Legal <span className="text-[#FF7A00]">Certificates</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
              RareTech Institute is a fully recognized, ISO-certified, and Government-approved educational organization. Your future is secure with our legally validated training programs.
            </p>
          </div>
        </section>

        {/* ================= 2. CERTIFICATES GRID (WITH LIGHTBOX) ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {certificates.map((item, index) => (
              <article 
                key={index}
                className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div 
                  className="relative w-full h-72 bg-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item.img)}
                  title="Click to view full size"
                >
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1F3E8A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-[#1F3E8A] p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow">
                  <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-[#FF7A00] font-bold text-xs tracking-wider uppercase mb-4 border border-orange-100 w-max">
                    {item.badge}
                  </span>
                  <h2 className="text-2xl font-extrabold text-[#1F3E8A] mb-4 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= 3. TRUST & AUTHORITY CONTENT ================= */}
        <section className="max-w-5xl mx-auto px-6 py-20 mt-10">
          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 relative">
                  {/* Decorative Trust Badge */}
                  <div className="absolute inset-0 bg-blue-50 rounded-full animate-pulse"></div>
                  <div className="absolute inset-2 bg-[#1F3E8A] rounded-full flex items-center justify-center shadow-inner">
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-[#FF7A00]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-extrabold text-[#1F3E8A] mb-4">
                  Why Government & ISO Certifications Matter?
                </h2>
                <div className="w-16 h-1.5 bg-[#FF7A00] rounded-full mb-6"></div>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    In today's competitive job market, the credibility of your educational institution is just as important as the skills you learn. An unverified certificate holds no value during corporate HR rounds or government job applications.
                  </p>
                  <p>
                    Because <strong>RareTech Institute</strong> is an ISO 9001:2015 certified and MSME registered organization, the diploma and certification you receive upon completing your course are <strong>legally valid, globally recognized, and highly respected</strong> by top IT companies and digital agencies across India.
                  </p>
                </div>
                <ul className="mt-6 space-y-3 font-semibold text-[#1F3E8A]">
                  <li className="flex items-center gap-3">
                    <span className="bg-[#FF7A00] text-white rounded-full p-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                    Valid for Private IT Sector Jobs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-[#FF7A00] text-white rounded-full p-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                    Valid for Freelance Marketplace Verifications
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-[#FF7A00] text-white rounded-full p-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></span>
                    Guarantees Standardized Quality Education
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. BOTTOM CTA ================= */}
        <section className="text-center max-w-3xl mx-auto px-4 mt-10 mb-10">
          <h2 className="text-3xl font-extrabold text-[#1F3E8A] mb-4">Secure your career with a trusted institute.</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join the hundreds of students who have built successful careers through our verified training programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/courses"
              className="bg-[#FF7A00] hover:bg-[#e66a00] transition-colors text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg flex items-center justify-center gap-2"
            >
              Explore Our Courses
            </Link>
          </div>
        </section>

      </main>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-[#FF7A00] transition-colors bg-white/10 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          
          <div className="relative w-full max-w-4xl h-[80vh] bg-transparent" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full screen certificate view"
              fill
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-10 text-white/70 text-sm">Click anywhere outside to close</p>
        </div>
      )}

      {/* Custom Keyframes for Lightbox */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
=======
import Image from "next/image";

export default function LegalCertificates() {
  const certificates = [
    {
      title: "ISO 9001:2015 Certificate",
      img: "/images/iso.png",
      alt: "ISO Certificate",
    },
    {
      title: "Udyam Certificate (Page 1)",
      img: "/images/udyam1.jpeg",
      alt: "Udyam Page 1",
    },
    {
      title: "Udyam Certificate (Page 2)",
      img: "/images/udyam2.jpeg",
      alt: "Udyam Page 2",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24 pb-20 px-6 md:px-10">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our Legal Certificates
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Raretech Institute of Information Technology – Government certified institute.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-5 bg-white hover:shadow-xl transition-all hover:-translate-y-2 duration-300 animate-fadeIn"
          >
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-contain hover:scale-105 transition duration-300"
              />
            </div>
            <h3 className="text-center mt-5 text-lg font-semibold text-slate-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
>>>>>>> d2fd4b9a6a0e5e4baf52d5fd8b55af162adad2dd
