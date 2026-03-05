"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import {
  Laptop,
  Briefcase,
  Trophy,
  ChevronDown,
  Award,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  PhoneCall,
  GraduationCap,
  MonitorPlay,
  Users
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/* ================= DATA: COURSES ================= */
const courses = [
  {
    title: "Website Development (MERN Stack)",
    slug: "web-development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    desc: "Become a professional full stack developer using HTML, CSS, JavaScript, React.js, Node.js and MongoDB. Learn freelancing, hosting deployment and real client workflow.",
    benefits: [
      "Frontend + Backend Development",
      "Live Projects",
      "Freelancing Training",
      "Portfolio Website Creation"
    ]
  },
  {
    title: "Graphic Designing & Digital Designing",
    slug: "graphic-designing",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d",
    desc: "Master creative digital designing using Photoshop, Illustrator, CorelDRAW and Canva. Learn logo designing, banner creation and branding kits.",
    benefits: [
      "Logo Design",
      "Social Media Creatives",
      "Branding Kit Creation",
      "Print Media Design"
    ]
  },
  {
    title: "Advanced Digital Marketing",
    slug: "digital-marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    desc: "Learn SEO, Google Ads, Facebook Ads, Local SEO and lead generation techniques with real campaigns.",
    benefits: [
      "SEO + Google Ads",
      "Social Media Marketing",
      "Client Projects",
      "Freelancing Setup"
    ]
  },
  {
    title: "Accounts + Tally Prime + GST",
    slug: "tally-accounts",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    desc: "Professional accounting course covering Tally Prime, GST billing, taxation, payroll and inventory management.",
    benefits: [
      "Real GST Filing",
      "Corporate Accounting",
      "Tally Prime Latest Version",
      "Job Ready Training"
    ]
  },
  {
    title: "DCA & ADCA Certification",
    slug: "dca-adca",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    desc: "Diploma computer course covering computer fundamentals, MS Office, internet usage and basic designing.",
    benefits: [
      "Govt Job Eligibility",
      "Computer Fundamentals",
      "Office Automation",
      "Data Entry Skills"
    ]
  },
  {
    title: "MS Office Advanced / MIS Reporting",
    slug: "ms-office",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    desc: "Learn advanced Excel formulas, dashboards, PowerPoint presentations and MIS reporting systems.",
    benefits: [
      "Advanced Excel",
      "Data Analysis",
      "Corporate Reporting",
      "Office Productivity"
    ]
  },
  {
    title: "CCC (Course on Computer Concepts)",
    slug: "ccc-course",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    desc: "Government recognized basic computer literacy program covering Windows, Word, Excel, PowerPoint and Internet usage.",
    benefits: [
      "Govt Job Valid Certificate",
      "MS Office Training",
      "Internet & Email Skills",
      "Digital Financial Services"
    ]
  },
  {
    title: "Desktop Publishing (DTP) & Printing Design",
    slug: "dtp-designing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    desc: "Learn professional printing design using CorelDRAW, Photoshop and Page Layout designing.",
    benefits: [
      "Flex & Banner Design",
      "Wedding Cards",
      "Printing Layouts",
      "Photo Editing"
    ]
  },
  {
    title: "AI Tools & ChatGPT Training",
    slug: "ai-tools-training",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    desc: "Learn practical AI tools like ChatGPT, Gemini, Canva AI, Midjourney and automation workflows for freelancing and business growth.",
    benefits: [
      "AI Content Creation",
      "Automation Workflows",
      "Business Productivity",
      "Freelancing Skills"
    ]
  },
  {
    title: "Stock Market & Trading Course",
    slug: "stock-market",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    desc: "Understand share market basics, technical analysis, trading psychology and live market strategies.",
    benefits: [
      "Candlestick Analysis",
      "Intraday Trading",
      "Risk Management",
      "Portfolio Building"
    ]
  },
  {
    title: "Computer Typing & Data Entry Operator",
    slug: "typing-data-entry",
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546",
    desc: "Improve English and Punjabi typing speed with real office documentation workflows.",
    benefits: [
      "Punjabi + English Typing",
      "Govt Exam Preparation",
      "Office Documentation",
      "Data Entry Jobs"
    ]
  },
  {
    title: "Computer Hardware & Laptop Repairing",
    slug: "hardware-repairing",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
    desc: "Learn assembling computers, troubleshooting hardware problems and laptop repairing techniques.",
    benefits: [
      "Hardware Assembly",
      "OS Installation",
      "Networking Basics",
      "Self Business Opportunity"
    ]
  },
  {
    title: "Office Automation Course",
    slug: "office-automation",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    desc: "Complete office job preparation course covering MS Office, internet operations and documentation workflows.",
    benefits: [
      "Office Job Skills",
      "Documentation Work",
      "Email Handling",
      "Basic Accounting"
    ]
  }
];

/* ================= DATA: HERO SLIDES ================= */
const heroSlides = [
  "/images/web.png",
  "/images/graphic.jpg",
  "/images/SEO.png",
  "/images/accounts.png"
];

/* ================= DATA: FAQS ================= */
const faqs = [
  {
    question: "Which computer course is best after 12th in Ludhiana?",
    answer: "For students looking to build a high-income career immediately after 12th, Website Development (MERN Stack), Advanced Digital Marketing, and Graphic Designing are top choices. If you prefer finance, our Tally Prime & GST course offers immediate accounting job opportunities in Punjab."
  },
  {
    question: "Does RareTech Institute provide practical project-based training?",
    answer: "Yes, absolutely. We strictly believe in 100% practical training. Instead of just theoretical books, our students work on live client projects, real-world case studies, and corporate-level assignments to build a strong professional portfolio."
  },
  {
    question: "Is there any placement assistance after completing the course?",
    answer: "Yes, RareTech Institute offers dedicated placement assistance. We help our students with resume building, technical interview preparation, and direct referrals to top IT companies and digital agencies in Ludhiana and across Punjab."
  },
  {
    question: "Can I learn how to earn through freelancing at your institute?",
    answer: "Freelancing mentorship is a core part of our professional courses. We teach you how to create winning profiles on Upwork and Fiverr, how to bid on global projects, client communication, and international payment setups."
  },
  {
    question: "What makes RareTech the best IT training institute in Punjab?",
    answer: "We combine industry-expert trainers, an updated 2026 curriculum, affordable fee structures, extremely modern computer labs, and a laser focus on making students 'Job and Freelance Ready' rather than just handing out certificates."
  },
  {
    question: "Are there any demo classes available before I enroll?",
    answer: "Yes, we encourage all prospective students to book a Free Demo Class. This allows you to interact with our expert faculty, experience our teaching methodology, and explore our high-tech campus in Ludhiana before making a decision."
  },
  {
    question: "Who can join the DCA and ADCA computer courses?",
    answer: "Our DCA (Diploma in Computer Application) and ADCA courses are perfect for beginners, school students, housewives, and job seekers who want to build a fundamental understanding of computers, typing, and the internet from scratch."
  },
  {
    question: "Do you teach advanced GST filing and Tally Prime?",
    answer: "Yes, our Accounts course covers the latest Tally Prime software along with real-world taxation workflows, including how to generate E-way bills, calculate TDS, and file GST returns accurately for businesses in Ludhiana."
  },
  {
    question: "What is the fee for computer courses in Ludhiana?",
    answer: "The fee structure at RareTech Institute is highly affordable and varies depending on the course duration and specialization. We offer flexible payment options and easy installments for all our job-oriented computer courses."
  },
  {
    question: "Is RareTech Institute recognized by the government?",
    answer: "Yes, RareTech Institute is fully recognized. We are an ISO 9001:2015 certified organization and officially registered under MSME, Government of India, making our certificates valid across private and public sectors."
  },
  {
    question: "Which course is best for getting a job quickly in Punjab?",
    answer: "For rapid employment, our MERN Stack Web Development, Advanced Digital Marketing, and Tally Prime GST courses are highly recommended, as they directly align with the massive current corporate demands across Punjab."
  },
  {
    question: "Does RareTech provide a certificate after course completion?",
    answer: "Absolutely. Upon successful completion of your training and practical project submissions, you will receive an ISO-certified, globally recognized digital and physical certificate that can be easily verified on our official website."
  }
];

/* ================= REUSABLE COMPONENTS ================= */

// Animated Counter for Stats
const AnimatedCounter = ({ end, suffix = "", title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-4" aria-label={`${end}${suffix} ${title}`}>
      <span className="text-4xl md:text-5xl font-extrabold text-[#FF7A00] drop-shadow-md" aria-hidden="true">
        {count}{suffix}
      </span>
      <span className="text-blue-100 font-semibold mt-2 text-sm md:text-base uppercase tracking-wider text-center" aria-hidden="true">
        {title}
      </span>
    </div>
  );
};

// FAQ Accordion
const FaqItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const faqId = `faq-answer-${index}`;

  return (
    <div className="border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-6 sm:px-8 flex justify-between items-center focus:outline-none group bg-white"
        aria-expanded={isOpen}
        aria-controls={faqId}
      >
        <h3 className="text-lg font-bold text-[#1F3E8A] pr-4 group-hover:text-[#FF7A00] transition-colors">
          {faq.question}
        </h3>
        <div className={`text-[#FF7A00] bg-orange-50 p-2 rounded-full flex-shrink-0 transform transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#FF7A00] text-white" : ""}`}>
          <ChevronDown size={20} aria-hidden="true" />
        </div>
      </button>
      <div
        id={faqId}
        role="region"
        className={`grid transition-all duration-300 ease-in-out bg-gray-50 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 sm:px-8 pb-6 pt-2 text-gray-700 font-medium leading-relaxed border-t border-gray-100">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE COMPONENT ================= */
export default function Home() {
  return (
    <>
      {/* ================= SCHEMA MARKUP (SEO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://raretechinstitute.com/#organization",
              "name": "RareTech Institute Of Information Technology",
              "url": "https://raretechinstitute.com",
              "logo": "https://raretechinstitute.com/logo.png",
              "telephone": "+916280009096",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ludhiana",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "description": "Best Computer Training Institute in Ludhiana, Punjab. Specializing in Website Development, MERN Stack, Digital Marketing, Graphic Designing, and Tally Accounts with guaranteed practical training and placement assistance."
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RareTech Institute Of Information Technology",
              "image": "https://raretechinstitute.com/logo.png",
              "telephone": "+916280009096",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ludhiana",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "30.900965",
                "longitude": "75.857277"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": courses.map((course, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Course",
                  "url": `https://raretechinstitute.com/courses/${course.slug}`,
                  "name": course.title,
                  "description": course.desc,
                  "provider": {
                    "@type": "EducationalOrganization",
                    "name": "RareTech Institute Of Information Technology",
                    "sameAs": "https://raretechinstitute.com"
                  }
                }
              }))
            }
          ])
        }}
      />

      <main className="w-full overflow-x-hidden bg-white text-gray-800 font-sans selection:bg-[#FF7A00] selection:text-white">

        {/* ================= 1. HERO SECTION ================= */}
        <section aria-label="Hero Section" className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 pt-20">
          {/* Swiper Background Slider */}
          <div className="absolute inset-0 z-0" aria-hidden="true">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet bg-white opacity-40 w-3 h-3 mx-2 rounded-full inline-block cursor-pointer`,
                bulletActiveClass: `swiper-pagination-bullet-active bg-[#FF7A00] opacity-100 scale-125 transition-all`
              }}
              loop
              className="w-full h-full"
            >
              {heroSlides.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <Image
                      src={img}
                      fill
                      priority={i === 0}
                      alt={`Computer Course Training in Ludhiana Punjab - Hero Background ${i + 1}`}
                      className="object-cover opacity-40 mix-blend-overlay"
                      sizes="100vw"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-[#1F3E8A] z-10 pointer-events-none"></div>
          </div>

          {/* Hero Content Card */}
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pb-10 md:pb-0">
            <div className="bg-white/95 backdrop-blur-md rounded-[2rem] shadow-2xl max-w-5xl p-8 md:p-14 border-t-[6px] border-[#FF7A00] mt-10 md:mt-0 transition-transform duration-700 translate-y-0">

              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50 text-[#1F3E8A] font-extrabold text-xs sm:text-sm tracking-wider uppercase border border-blue-100">
                  <ShieldCheck className="w-4 h-4 text-[#FF7A00]" aria-hidden="true" /> ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-orange-50 text-[#FF7A00] font-extrabold text-xs sm:text-sm tracking-wider uppercase border border-orange-100">
                  <Award className="w-4 h-4 text-[#1F3E8A]" aria-hidden="true" /> MSME Registered
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1F3E8A] leading-tight tracking-tight mb-6">
                Best Computer Institute in Ludhiana for <br className="hidden lg:block" />
                <span className="text-[#FF7A00]">Job-Oriented Computer Courses & Practical Training</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
                Transform your future with <strong className="text-[#1F3E8A]">RareTech Institute</strong>. We masterclass students in Website Development, Digital Marketing, Graphic Design, and Accounting through 100% live projects designed for immediate job placements and global freelancing in Punjab.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5">
                <Link
                  href="/courses"
                  title="Explore all computer courses in Ludhiana"
                  aria-label="Explore all computer courses in Ludhiana"
                  className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#e66a00] text-white px-10 py-4 md:py-5 rounded-2xl font-extrabold text-lg shadow-xl shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Explore All Courses
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  title="Book a Free Demo Class at RareTech"
                  aria-label="Book a Free Demo Class at RareTech"
                  className="w-full sm:w-auto bg-transparent border-2 border-[#1F3E8A] text-[#1F3E8A] hover:bg-[#1F3E8A] hover:text-white px-10 py-4 md:py-5 rounded-2xl font-extrabold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Book Free Demo Class
                </Link>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-widest">
                <span>13+ Courses</span> • <span>100% Practical</span> • <span>Live Projects</span> • <span>Est. 2021</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. FLOATING STATS BAR ================= */}
        <section aria-label="Institute Statistics" className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 -mt-12 md:-mt-20">
          <div className="bg-[#1F3E8A] rounded-[2rem] shadow-2xl border border-blue-800 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-blue-800/50">
              <AnimatedCounter end={13} suffix="+" title="Premium Courses" />
              <AnimatedCounter end={100} suffix="%" title="Practical Training" />
              <AnimatedCounter end={500} suffix="+" title="Live Projects" />
              <AnimatedCounter end={100} suffix="%" title="Placement Help" />
            </div>
          </div>
        </section>

        {/* ================= 3. ABOUT / AUTHORITY CONTENT ================= */}
        <section aria-labelledby="about-raretech" className="py-20 md:py-32 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            <div className="w-full lg:w-1/2">
              <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm mb-3 block">Why Choose RareTech</span>
              <h2 id="about-raretech" className="text-3xl md:text-5xl font-extrabold text-[#1F3E8A] leading-tight mb-6">
                Computer Courses in Ludhiana Designed for the Modern Industry
              </h2>
              <div className="w-20 h-1.5 bg-[#FF7A00] rounded-full mb-8" aria-hidden="true"></div>

              <div className="prose prose-lg text-gray-700 font-medium">
                <p className="mb-6 leading-relaxed">
                  Welcome to RareTech Institute Of Information Technology, your trusted partner for career growth. If you are looking for the best <strong>computer institute near me Ludhiana</strong>, you have arrived at the perfect place. We specialize in providing 100% practical, hands-on training designed to strictly bridge the gap between academic knowledge and actual corporate IT requirements.
                </p>
                <p className="mb-8 leading-relaxed">
                  Whether you are seeking a comprehensive <strong>computer course after 12th Punjab</strong> to kickstart your journey, or looking for professional upskilling, we have tailored modules for everyone. Our expert-led <strong>MERN stack training Ludhiana</strong> equips you with advanced full-stack development skills, while our intensive <strong>digital marketing course Ludhiana</strong> ensures you master SEO and high-ROI performance marketing. For commerce aspirants, our deeply structured <strong>tally GST course Ludhiana</strong> prepares you for immediate accounting roles, and creative minds can explore our premium <strong>graphic design institute Ludhiana</strong> curriculum to build stunning visual portfolios.
                </p>
              </div>

              <ul className="space-y-4 font-bold text-[#1F3E8A] text-lg">
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="text-[#FF7A00] w-6 h-6 flex-shrink-0" aria-hidden="true" /> Focus strictly on practical Live Projects
                </li>
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="text-[#FF7A00] w-6 h-6 flex-shrink-0" aria-hidden="true" /> Global Freelancing & Client Mentorship
                </li>
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="text-[#FF7A00] w-6 h-6 flex-shrink-0" aria-hidden="true" /> Dedicated placement assistance & resume building
                </li>
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="text-[#FF7A00] w-6 h-6 flex-shrink-0" aria-hidden="true" /> Highly experienced industry-expert trainers
                </li>
                <li className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <CheckCircle className="text-[#FF7A00] w-6 h-6 flex-shrink-0" aria-hidden="true" /> Affordable fee structure with easy installments
                </li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 relative mt-10 lg:mt-0">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#FF7A00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0" aria-hidden="true"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#1F3E8A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0" aria-hidden="true"></div>

              <div className="relative z-10 aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/learn-video-editing.png"
                  fill
                  alt="Students learning practically at IT Training Institute in Punjab - RareTech Ludhiana"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-gray-100">
                  <p className="text-[#1F3E8A] font-extrabold text-lg flex items-center gap-3">
                    <Trophy className="text-[#FF7A00] w-6 h-6" aria-hidden="true" /> Empowering Punjab's Youth
                  </p>
                  <p className="text-gray-600 text-sm mt-2 font-medium">Generating employable IT professionals since 2021.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 4. ALL COURSES GRID ================= */}
        <section aria-labelledby="all-courses-heading" className="bg-[#1F3E8A] py-20 md:py-32 relative overflow-hidden">
          {/* Dot Pattern Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }} aria-hidden="true"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm bg-white/10 px-5 py-2 rounded-full inline-block mb-4 backdrop-blur-sm border border-white/10">
                Explore Our Programs
              </span>
              <h2 id="all-courses-heading" className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Job-Oriented Computer Courses in Punjab
              </h2>
              <p className="mt-6 text-blue-100 text-lg md:text-xl font-medium">
                Our exhaustive curriculum is tailored for beginners, graduates, and business owners. Select a course below and start building high-income tech skills today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {courses.map((course, index) => (
                <article key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group border border-transparent hover:border-[#FF7A00]/30">

                  <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={course.image}
                      fill
                      alt={`${course.title} Course Training in Ludhiana Punjab`}
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F3E8A]/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="absolute top-4 right-4 bg-[#FF7A00] text-white text-xs font-black px-4 py-2 rounded-full shadow-lg tracking-wider uppercase">
                      100% Practical
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-extrabold text-2xl text-[#1F3E8A] mb-4 leading-tight group-hover:text-[#FF7A00] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed font-medium">
                      {course.desc}
                    </p>

                    <div className="mb-8 bg-blue-50/50 p-4 rounded-xl border border-blue-50">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Key Learnings</p>
                      <ul className="space-y-2.5">
                        {course.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2 font-semibold">
                            <CheckCircle className="text-[#FF7A00] w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="leading-tight">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/courses/${course.slug}`}
                      title={`View syllabus for ${course.title} in Ludhiana`}
                      aria-label={`View syllabus details for ${course.title}`}
                      className="mt-auto flex items-center justify-center gap-2 text-center bg-white border-2 border-[#1F3E8A] text-[#1F3E8A] group-hover:bg-[#1F3E8A] group-hover:text-white font-extrabold py-4 rounded-xl transition-all duration-300 w-full"
                    >
                      View Syllabus Details <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        {/* ================= 5. WHY CHOOSE RARETECH (6 CARDS) ================= */}
        <section aria-labelledby="why-choose-heading" className="py-20 md:py-32 max-w-7xl mx-auto px-6 bg-gray-50">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 id="why-choose-heading" className="text-4xl md:text-5xl font-extrabold text-[#1F3E8A]">
              Why Students Prefer RareTech Institute in Ludhiana?
            </h2>
            <p className="mt-6 text-lg text-gray-600 font-medium">
              We don't just distribute basic certificates. We actively engineer highly profitable careers. Here is what sets us apart from regular training centers in Punjab.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-t-[6px] border-[#FF7A00] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-50 text-[#FF7A00] rounded-2xl flex items-center justify-center mb-6">
                <MonitorPlay size={32} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F3E8A] mb-4">Project-Based Learning</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Step away from outdated textbooks. You will build actual live websites, execute real ad budget campaigns, and file real GST returns during your training.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-t-[6px] border-[#1F3E8A] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 text-[#1F3E8A] rounded-2xl flex items-center justify-center mb-6">
                <Laptop size={32} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F3E8A] mb-4">Freelancing Mentorship</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Learn how to monetize your tech skills globally. We guide you on setting up Fiverr/Upwork profiles, client acquisition, and pricing your services.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-t-[6px] border-[#FF7A00] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-50 text-[#FF7A00] rounded-2xl flex items-center justify-center mb-6">
                <Briefcase size={32} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F3E8A] mb-4">Job & Interview Ready</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                We conduct intensive mock interviews, optimize your LinkedIn profile, and help you craft a professional ATS-friendly resume to clear HR rounds easily.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-t-[6px] border-[#1F3E8A] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 text-[#1F3E8A] rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F3E8A] mb-4">Personalized Attention</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                We maintain small batch sizes ensuring every student receives 1-on-1 doubt clearing sessions directly from our expert industry trainers.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-t-[6px] border-[#FF7A00] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-50 text-[#FF7A00] rounded-2xl flex items-center justify-center mb-6">
                <Award size={32} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F3E8A] mb-4">Valid Certification</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Receive an ISO 9001:2015 and MSME registered certificate upon completion. Highly recognized for private sector corporate jobs and government verifications.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] border-t-[6px] border-[#1F3E8A] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 text-[#1F3E8A] rounded-2xl flex items-center justify-center mb-6">
                <MonitorPlay size={32} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-[#1F3E8A] mb-4">Modern IT Labs</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Practice your skills in our fully equipped, high-speed computer labs. Experience an actual corporate working environment right inside the classroom.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 6. PLACEMENT & CAREER ================= */}
        <section aria-labelledby="placement-heading" className="py-20 md:py-32 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Decoration */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1F3E8A] via-[#FF7A00] to-[#1F3E8A]" aria-hidden="true"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply opacity-60 -translate-y-1/2 translate-x-1/3" aria-hidden="true"></div>

            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">

              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-gray-50">
                  <Image
                    src="/images/accounts.png"
                    fill
                    alt="Placement Assistance for Computer Students in Ludhiana Punjab"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3E8A]/90 to-transparent flex flex-col justify-end p-8">
                    <p className="text-[#FF7A00] font-black text-4xl mb-1" aria-hidden="true">100%</p>
                    <p className="text-white text-xl font-bold">Dedicated Placement Support</p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h2 id="placement-heading" className="text-3xl md:text-5xl font-extrabold text-[#1F3E8A] mb-6 leading-tight">
                  Placement Assistance in <span className="text-[#FF7A00]">Ludhiana Punjab</span>
                </h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
                  The tech and finance industries are booming. Companies in Ludhiana, Mohali, Chandigarh, and globally are actively hunting for talented Web Developers, SEO Experts, UI/UX Designers, and Tally Accountants. We bridge this talent gap by directly preparing you for these high-paying roles.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                    <Briefcase className="w-8 h-8 text-[#1F3E8A] mx-auto mb-3" aria-hidden="true" />
                    <p className="font-extrabold text-gray-900">Corporate Tie-ups</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 text-center">
                    <GraduationCap className="w-8 h-8 text-[#FF7A00] mx-auto mb-3" aria-hidden="true" />
                    <p className="font-extrabold text-gray-900">Real Portfolio</p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 text-center">
                    <ShieldCheck className="w-8 h-8 text-gray-600 mx-auto mb-3" aria-hidden="true" />
                    <p className="font-extrabold text-gray-900">ISO Certified</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center">
                    <Trophy className="w-8 h-8 text-green-600 mx-auto mb-3" aria-hidden="true" />
                    <p className="font-extrabold text-gray-900">Est. 2021</p>
                  </div>
                </div>

                <Link
                  href="/certificate"
                  title="Verify your RareTech digital certificate online"
                  aria-label="Verify your RareTech digital certificate online"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#1F3E8A] hover:bg-[#152a60] text-white px-8 py-5 rounded-2xl font-extrabold text-lg shadow-xl transition-all hover:-translate-y-1"
                >
                  <ShieldCheck className="w-6 h-6" aria-hidden="true" /> Verify Digital Certificates
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 7. SEO RICH TEXT BLOCK ================= */}
        <section aria-labelledby="seo-text-heading" className="bg-gray-50 py-20 md:py-32 border-y border-gray-200">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 id="seo-text-heading" className="text-3xl md:text-5xl font-extrabold text-[#1F3E8A] mb-10">
              About RareTech Computer Institute Ludhiana
            </h2>

            <div className="prose prose-lg md:prose-xl mx-auto text-gray-700 text-left md:text-justify leading-relaxed font-medium space-y-6">
              <p>
                When searching for a highly reputable <strong>computer institute in Ludhiana</strong>, students and working professionals alike seek quality education, practical industry exposure, and strong placement assurance. RareTech Institute Of Information Technology stands out as the <strong>best IT training center Punjab</strong>, offering a diverse range of technical programs that guarantee real-world skills. We heavily believe that modern education must go beyond theoretical textbooks. This is why our curriculum is heavily centered on practical assignments and live projects that simulate actual corporate environments.
              </p>
              <p>
                Our flagship <strong>MERN stack course Ludhiana</strong> is meticulously designed to create expert web developers capable of building scalable applications. Simultaneously, our <strong>digital marketing training Ludhiana</strong> empowers individuals to master search engine optimization, social media marketing, and lead generation. We also provide a deeply structured <strong>tally prime GST course</strong> for accounting professionals, and creative <strong>graphic design classes Ludhiana</strong> for aspiring visual artists. Every module is crafted by industry experts to ensure you receive the most relevant and updated knowledge available in the tech space today.
              </p>
              <p>
                Choosing the right <strong>computer course after 10th 12th Ludhiana</strong> is a crucial career decision. We offer specialized <strong>job oriented courses Punjab</strong> that provide immediate employment opportunities and highly lucrative freelancing potential. As an <strong>ISO certified computer institute</strong> and an <strong>MSME registered training center</strong>, RareTech guarantees that your certification holds immense value in the corporate world. From rigorous interview preparation to resume building and direct placement assistance, we are deeply committed to guiding you every step of the way toward a highly successful digital career.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 8. FAQ SECTION ================= */}
        <section aria-labelledby="faq-heading" className="py-20 md:py-32 bg-white max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm mb-3 block">Got Questions?</span>
            <h2 id="faq-heading" className="text-4xl md:text-5xl font-extrabold text-[#1F3E8A]">
              Frequently Asked Questions about Computer Courses in Ludhiana
            </h2>
            <p className="mt-6 text-gray-600 text-lg font-medium">
              Everything you need to know about admissions, course fees, and training methodology in Ludhiana.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </section>

        {/* ================= 9. FINAL CTA ================= */}
        <section aria-label="Call to Action" className="bg-gradient-to-br from-[#1F3E8A] via-[#1A367A] to-[#0A1A4A] text-white py-24 md:py-32 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "40px 40px" }} aria-hidden="true"></div>

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block py-2 px-6 rounded-full bg-white/10 text-white font-black text-sm tracking-widest uppercase mb-8 border border-white/20 backdrop-blur-md">
              <span className="text-[#FF7A00]">●</span> Limited Seats Available
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg">
              Ready To Start Your <span className="text-[#FF7A00]">IT Career Journey in Punjab?</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 font-medium max-w-3xl mx-auto">
              Join thousands of successful students. Visit our campus in Ludhiana, explore our modern IT labs, and take the first step towards a highly profitable technical career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/contact"
                title="Book a Free IT Course Demo Today"
                aria-label="Book a Free IT Course Demo Today"
                className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#e66a00] text-white px-10 py-5 rounded-2xl font-extrabold text-xl shadow-[0_10px_30px_rgba(255,122,0,0.4)] flex items-center justify-center gap-3 transition-transform hover:-translate-y-1"
              >
                Book Free Demo Today
                <ArrowRight className="w-6 h-6" aria-hidden="true" />
              </Link>
              <a
                href="tel:+916280009096"
                title="Call RareTech Institute Ludhiana"
                aria-label="Call RareTech Institute at +91 62800-09096"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 border-2 border-white/30 backdrop-blur text-white px-10 py-5 rounded-2xl font-extrabold text-xl flex items-center justify-center gap-3 transition-transform hover:-translate-y-1"
              >
                <PhoneCall className="w-6 h-6" aria-hidden="true" />
                Call +91 62800-09096
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}