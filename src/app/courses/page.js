"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  "/images/accounts.png",
  "/images/graphic.jpg",
  "/images/hardware.png",
  "/images/learn-video-editing.png",
  "/images/SEO.png",
  "/images/web.png",
];

const courses = [
  {
    image: "/images/webdesign.png",
    title: "Web Design & Development",
    para:
      "Master modern web design & development with HTML, CSS, JavaScript, React and live project training.",
  },
  {
    image: "/images/graphic.jpg",
    title: "Graphic Designing",
    para:
      "Learn Photoshop, CorelDRAW, Illustrator, 2D/3D basics, and professional design workflows.",
  },
  {
    image: "/images/tally-accounts.jpg",
    title: "Tally Accounting",
    para:
      "Hands-on Tally ERP training: GST, bookkeeping and real-world business accounting practices.",
  },
  {
    image: "/images/dca.png",
    title: "DCA (Diploma in Computer Applications)",
    para:
      "Foundation course covering computer basics, MS Office, internet, and digital literacy.",
  },
  {
    image: "/images/pda.png",
    title: "ADCA (Advanced DCA)",
    para:
      "Advanced office automation, Excel skills, and computerized accounting systems for careers.",
  },
  {
    image: "/images/msoffice.png",
    title: "MS Office",
    para:
      "Become proficient in Word, Excel, PowerPoint and Access for professional use.",
  },
  {
    image: "/images/python.png",
    title: "Python Programming",
    para:
      "Learn Python from basics to building real projects — automation, scripts and simple apps.",
  },
  {
    image: "/images/prog.png",
    title: "Programming Fundamentals",
    para:
      "Strong basics in C, C++ and Python — logic, data structures intro and practice problems.",
  },
  {
    image: "/images/learn-video-editing.png",
    title: "Video Editing & Mixing",
    para:
      "Professional video editing & sound mixing for YouTube, marketing and creative media.",
  },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const auto = setInterval(() => setSlide((p) => (p + 1) % heroImages.length), 3500);
    return () => clearInterval(auto);
  }, []);

  return (
    <main className="pt-24 bg-white text-gray-900">


      {/* COURSES SECTION (from Courses Page) */}
      <section id="courses" className="bg-gradient-to-b from-white via-slate-50 to-white py-20 px-6 md:px-16 font-sans">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Professional Courses
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Job-oriented computer & IT courses with practical training. Pick a course and start building real skills.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {courses.map((c, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col justify-between w-full max-w-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <a
                  href="/contact"
                  className="absolute left-1/2 -translate-x-1/2 bottom-4 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-400"
                >
                  <button className="bg-white/90 backdrop-blur-md text-slate-900 py-2 px-5 rounded-full text-sm font-medium shadow-md hover:scale-105 transition">
                    View Details
                  </button>
                </a>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between items-center">
                <div className="flex flex-col gap-3 items-center">
                  <h2 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-center">
                    {c.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed text-center">{c.para}</p>
                </div>
                <div className="mt-4 bg-slate-100 text-slate-800 px-4 py-1 rounded-full text-sm font-semibold">
                  Duration: 1–3 months
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-10 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-cyan-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            Enroll Now
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your IT Career in Ludhiana Today</h2>
        <p className="mb-6 text-lg md:text-xl max-w-xl mx-auto">
          Enroll now in our professional computer courses and transform your future with practical skills.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
        >
          Enroll Today
        </a>
      </section>
    </main>
  );
}
