"use client";

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
