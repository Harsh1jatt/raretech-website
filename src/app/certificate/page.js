"use client";

import React, { useState } from "react";
import axios from "axios";
import { Loader2, FileDown, ChevronLeft, ChevronRight, Search, Award, ShieldCheck, HelpCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CertificatePage() {
  const [roll, setRoll] = useState("");
  const [files, setFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchCertificate = async (e) => {
    if (e) e.preventDefault();
    
    if (!roll.trim()) {
      setError("Please enter a valid Roll Number or Registration ID.");
      setFiles([]);
      return;
    }

    setError("");
    setLoading(true);
    setSearching(true);

    try {
      const res = await axios.get(
        `https://iems.onrender.com/institute/certificate/${roll}`
      );

      const getUrl = (file) =>
        typeof file === "string" ? file : file?.fileUrl;

      const fetchedFiles = [
        { name: "Official Certificate", url: getUrl(res.data.certificate) },
        { name: "Detailed Marksheet", url: getUrl(res.data.marksheet) },
      ].filter(file => file.url); // Only keep files that actually have a URL

      if (fetchedFiles.length === 0) {
        setError("Documents not found for this Roll Number.");
      } else {
        setFiles(fetchedFiles);
        setCurrentIndex(0);
      }
    } catch (err) {
      setFiles([]);
      setError(err.response?.data?.error || "No records found. Please check your roll number and try again.");
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };

  const nextFile = () =>
    setCurrentIndex((prev) => (prev + 1) % files.length);

  const prevFile = () =>
    setCurrentIndex((prev) => (prev - 1 + files.length) % files.length);

  // SEO Rich FAQs Data
  const faqs = [
    {
      question: "Why do I need to verify my certificate online?",
      answer: "Online verification ensures absolute transparency and trust. Employers, digital agencies, and government departments can instantly cross-check your credentials to confirm you have successfully completed a legitimate training program from an ISO 9001:2015 certified institute."
    },
    {
      question: "What if my roll number shows 'No records found'?",
      answer: "First, ensure you have typed your exact Roll Number without any extra spaces. If the issue persists, your certificate might still be under processing by our examination branch. Please contact our administrative office at +91 79861-11400 for immediate assistance."
    },
    {
      question: "Are RareTech certificates valid for government jobs?",
      answer: "Yes. RareTech Institute is registered under MSME (Govt. of India) and is ISO 9001:2015 certified. Our diplomas and certificates (like DCA, ADCA, and CCC) are widely accepted for various state and central government document verifications."
    },
    {
      question: "Can I download a digital copy of my marksheet?",
      answer: "Absolutely. Once your verification is successful, you will see a 'Download' button below your certificate and marksheet. You can save these high-resolution digital copies to your phone or PC for future job applications."
    }
  ];

  return (
    <>
      {/* ================= SCHEMA MARKUP (SEO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Online Certificate Verification | RareTech Institute",
            "description": "Verify your computer course certificates and marksheets online. RareTech Institute provides 100% authentic, ISO-certified IT training credentials.",
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          })
        }}
      />

      <main className="w-full bg-gray-50 text-gray-800 font-sans selection:bg-[#FF7A00] selection:text-white pb-24 min-h-screen">
        
        {/* ================= 1. HERO HEADER ================= */}
        <section className="relative bg-[#1F3E8A] text-white pt-20 pb-32 px-6 overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex justify-center text-sm text-blue-200 font-medium mt-7 mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><span className="text-blue-400">/</span></li>
                <li aria-current="page" className="text-[#FF7A00] font-bold">Certificate Verification</li>
              </ol>
            </nav>

            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-green-500/20 text-green-300 font-bold text-sm tracking-widest uppercase mb-6 border border-green-500/30 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4" /> Official Portal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Digital Certificate <br className="hidden md:block"/> <span className="text-[#FF7A00]">Verification</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
              Employers and students can instantly verify the authenticity of diplomas and marksheets issued by RareTech Institute of Information Technology.
            </p>
          </div>
        </section>

        {/* ================= 2. VERIFICATION WIDGET ================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
            
            <form onSubmit={fetchCertificate} className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Award className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Enter Student Roll Number..."
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl pl-12 pr-4 py-4 text-lg text-gray-800 font-semibold focus:ring-0 focus:border-[#1F3E8A] focus:bg-white outline-none transition-all placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-[#FF7A00] hover:bg-[#e66a00] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-extrabold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 whitespace-nowrap"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-6 h-6" />
                    Searching
                  </>
                ) : (
                  <>
                    <Search className="w-6 h-6" />
                    Verify Now
                  </>
                )}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-fadeIn max-w-2xl mx-auto">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-red-800">Verification Failed</h4>
                  <p className="text-red-700 text-sm mt-1 font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Certificate Preview UI */}
            {files.length > 0 && !searching && (
              <div className="mt-12 pt-12 border-t border-gray-100 animate-fadeIn">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                  <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-bold text-xs tracking-wider uppercase mb-2">
                      Record Found & Verified
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#1F3E8A]">
                      {files[currentIndex].name}
                    </h3>
                  </div>
                  
                  {/* Download Button Desktop */}
                  <a
                    href={files[currentIndex].url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-2 bg-[#1F3E8A] hover:bg-[#152a60] text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all hover:scale-105"
                  >
                    <FileDown className="w-5 h-5" /> Download PDF
                  </a>
                </div>

                <div className="relative group max-w-3xl mx-auto rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.1)] border-8 border-gray-50 bg-gray-50">
                  <img
                    src={files[currentIndex].url}
                    alt={`${files[currentIndex].name} Preview`}
                    className="w-full h-auto object-contain animate-scaleIn"
                    style={{ maxHeight: '70vh' }}
                  />

                  {/* Navigation Buttons (Overlaid on image) */}
                  {files.length > 1 && (
                    <>
                      <button
                        onClick={prevFile}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#1F3E8A] p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#FF7A00] hover:text-white transition-all backdrop-blur opacity-70 group-hover:opacity-100"
                        aria-label="Previous Document"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>

                      <button
                        onClick={nextFile}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#1F3E8A] p-3 rounded-full shadow-lg hover:scale-110 hover:bg-[#FF7A00] hover:text-white transition-all backdrop-blur opacity-70 group-hover:opacity-100"
                        aria-label="Next Document"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>

                      {/* Pagination Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {files.map((_, idx) => (
                          <div 
                            key={idx} 
                            className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#FF7A00] scale-110' : 'bg-gray-300'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Download Button Mobile */}
                <div className="flex justify-center mt-8 sm:hidden">
                  <a
                    href={files[currentIndex].url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-[#1F3E8A] hover:bg-[#152a60] text-white px-6 py-4 rounded-xl font-bold shadow-md transition-all active:scale-95"
                  >
                    <FileDown className="w-5 h-5" /> Download Document
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ================= 3. SEO CONTENT & FAQS ================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#FF7A00] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3E8A]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Everything you need to know about our digital credential verification process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
                <summary className="w-full text-left px-8 py-6 flex justify-between items-center font-bold text-lg text-[#1F3E8A] select-none outline-none">
                  {faq.question}
                  <span className="text-[#FF7A00] text-2xl group-open:rotate-180 transition-transform duration-300">
                    ▾
                  </span>
                </summary>
                <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 font-medium">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ================= 4. SECURITY BADGE FOOTER ================= */}
        <section className="max-w-3xl mx-auto px-4 mt-20 text-center">
          <div className="inline-flex flex-col items-center justify-center p-6 bg-blue-50 border border-blue-100 rounded-3xl w-full">
            <ShieldCheck className="w-10 h-10 text-[#1F3E8A] mb-3" />
            <h3 className="text-lg font-extrabold text-[#1F3E8A]">Secure & Encrypted Verification</h3>
            <p className="text-sm text-gray-500 mt-2">
              This verification portal connects directly to the central database of RareTech Institute of Information Technology. All fetched documents are heavily encrypted and digitally signed to prevent forgery.
            </p>
          </div>
        </section>

      </main>

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}