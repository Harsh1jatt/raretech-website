"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // <- all modules here
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Lucide Icon
const BookOpen = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

// Hero images
const heroImages = [
  "/images/accounts.png",
  "/images/graphic.png",
  "/images/hardware.png",
  "/images/SEO.png",
];

const courses = [
  { image: "/images/webdesign.png", title: "Web Design & Development", text: "Java, PHP, MySQL & real industry projects." },
  { image: "/images/graphic.jpg", title: "Graphic Designing", text: "Photoshop, CorelDRAW, Animation, Video Editing." },
  { image: "/images/tally-accounts.jpg", title: "Accounts (Tally)", text: "Tally, Bookkeeping & Financial Accounting." },
  { image: "/images/dca.png", title: "DCA", text: "MS Office, Internet, Email & basics." },
  { image: "/images/pda.png", title: "ADCA", text: "Advanced MS Office & computerized accounting." },
  { image: "/images/msoffice.png", title: "MS Office", text: "Excel, Word, PowerPoint & Access." },
];

const testimonials = [
  { name: "Rohan Sharma", text: "This institute changed my career path. Highly recommended!", rating: 5 },
  { name: "Priya Verma", text: "The practical training in web development is outstanding.", rating: 4 },
  { name: "Amit Singh", text: "Faculty is very helpful and industry-experienced.", rating: 5 },
  { name: "Neha Gupta", text: "I learned so much in a short time. Excellent courses.", rating: 5 },
  { name: "Vikas Kumar", text: "Best IT institute in Ludhiana. Loved the experience.", rating: 4 },
];

// Star component
const Star = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`} viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.362 2.44a1 1 0 00-.364 1.118l1.286 3.947c.3.922-.755 1.688-1.54 1.118l-3.362-2.44a1 1 0 00-1.175 0l-3.362 2.44c-.784.57-1.838-.196-1.539-1.118l1.285-3.947a1 1 0 00-.364-1.118L2.027 9.373c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.946z" />
  </svg>
);

const CourseCard = ({ image, title, text }) => (
  <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
    <img src={image} alt={title} className="w-full h-52 object-cover" />
    <div className="p-6 flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <BookOpen className="text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600">{title}</h3>
      </div>
      <p className="text-gray-600">{text}</p>
      <span className="mt-auto text-sm font-semibold text-blue-800">Duration: 3 Months</span>
    </div>
  </div>
);

export default function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSlide((s) => (s + 1) % heroImages.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {heroImages.map((img, i) => (
          <img key={i} src={img} alt="Hero" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-30" : "opacity-0"}`} />
        ))}
        <div className="relative z-10 text-center bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-xl max-w-3xl animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 mb-4">Empower Your Career</h1>
          <p className="text-gray-800 text-lg md:text-xl mb-6">Hands-on training in Web Development, Graphic Design, Accounting, and Programming.</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">View Courses</a>
            <a href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full shadow hover:bg-blue-50 transition">Book Demo</a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Learn job-oriented skills with hands-on practical training.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c, idx) => <CourseCard key={idx} {...c} />)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="p-6 border rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Learn from industry professionals with real experience.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">Hands-On Projects</h3>
              <p className="text-gray-600">Practical assignments and real-world projects for each course.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">Career Support</h3>
              <p className="text-gray-600">Get guidance on placements, internships, and resume building.</p>
            </div>
            <div className="p-6 border rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-bold text-lg mb-2">Certification</h3>
              <p className="text-gray-600">Earn recognized certifications to boost your career prospects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8">What Our Students Say</h2>
          <Swiper modules={[Navigation, Pagination, Autoplay]} navigation pagination={{ clickable: true }} autoplay={{ delay: 5000 }} loop>
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="p-8 bg-white rounded-xl shadow-lg mx-4">
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} filled={i < t.rating} />)}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
                  <h3 className="font-bold text-blue-600">{t.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Boost Your Career?</h2>
        <p className="mb-8 text-lg">Contact us today and get started with your dream course!</p>
        <a href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow hover:bg-gray-100 transition">Get in Touch</a>
      </section>
    </main>
  );
}
