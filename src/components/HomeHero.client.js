"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/accounts.png",
  "/images/graphic.png",
  "/images/hardware.png",
  "/images/learn-video-editing.png",
  "/images/SEO.png",
  "/images/web.png",
];

export default function HomeHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="hero relative overflow-hidden">
      <div className="hero-image w-full h-[60vh] relative">
        <Image
          src={images[index]}
          alt={`Hero ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-5xl mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Empowering Careers with Technology
            </h1>
            <p className="mt-4 text-lg">
              Learn from professionals. Build real-world skills. Get placed.
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <Link href="/courses" className="btn-primary">Explore Courses</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* simple nav */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <button aria-label="Previous" onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}>
          &#10094;
        </button>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2">
        <button aria-label="Next" onClick={() => setIndex((i) => (i + 1) % images.length)}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
