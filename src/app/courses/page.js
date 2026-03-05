"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Briefcase, 
  Award, 
  Laptop, 
  ChevronDown,
  PlayCircle,
  TrendingUp,
  ShieldCheck,
  Star,
  PhoneCall 
} from "lucide-react";

// ==========================================
// FULL COURSE LIST DATA
// ==========================================
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

// ==========================================
// FAQ DATA
// ==========================================
const faqs = [
  {
    question: "Which course is best after 12th in Ludhiana?",
    answer: "For high-income careers immediately after 12th, our Website Development (MERN Stack), Advanced Digital Marketing, and Graphic Designing courses are top choices. For commerce students, Tally Prime + GST offers immediate accounting jobs."
  },
  {
    question: "Do you provide 100% practical training?",
    answer: "Yes, absolutely. We follow a strict 100% practical approach. Students work on live client projects, real campaigns, and corporate assignments instead of theoretical books to build professional portfolios."
  },
  {
    question: "Is there placement assistance?",
    answer: "Yes, we provide dedicated placement support including resume building, mock interviews, LinkedIn optimization, and direct referrals to IT companies, digital agencies, and accounting firms in Ludhiana and Punjab."
  },
  {
    question: "Are your certificates valid for government jobs?",
    answer: "Yes. As an ISO 9001:2015 certified and MSME registered institute, our DCA, ADCA, and CCC certificates are widely accepted for government job document verification across India."
  },
  {
    question: "Can I learn freelancing skills?",
    answer: "Absolutely. Freelancing mentorship is core to our professional courses. We teach Upwork/Fiverr profile creation, global bidding strategies, client communication, and international payment setups."
  },
  {
    question: "Are demo classes available?",
    answer: "Yes, we encourage all students to attend a Free Demo Class to experience our teaching methodology, meet faculty, and explore our modern IT labs before enrollment."
  }
];

export default function CoursesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* ================= SCHEMA MARKUP (SEO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          })
        }}
      />

      <main className="w-full bg-[#f4f7f9] text-gray-800 font-sans selection:bg-[#FF7A00] selection:text-white pb-20">
        
        {/* ================= 1. EXPANDED HERO SECTION ================= */}
        <section className="relative bg-[#1F3E8A] pt-32 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00] rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              <nav className="flex justify-center lg:justify-start text-sm text-blue-200 font-medium mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-2">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><span>/</span></li>
                  <li aria-current="page" className="text-[#FF7A00] font-bold">All Courses</li>
                </ol>
              </nav>

              <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 text-white font-bold text-xs tracking-widest uppercase mb-6 border border-white/20 backdrop-blur-sm">
                <Star className="w-4 h-4 text-[#FF7A00] fill-[#FF7A00]" /> 13+ Premium IT Programs
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Transform Your Skills into a <br className="hidden lg:block"/>
                <span className="text-[#FF7A00]">High-Paying Career.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 font-light leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
                Explore Ludhiana's most comprehensive catalog of practical computer courses. Whether you want to code, design, market, or manage accounts—our industry-aligned curriculum guarantees you become job-ready.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#course-list" className="bg-[#FF7A00] hover:bg-[#e66a00] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
                  Browse Courses <ChevronDown className="w-5 h-5" />
                </a>
                <Link href="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all backdrop-blur-sm">
                  <PhoneCall className="w-5 h-5" /> Talk to Counselor
                </Link>
              </div>
            </div>

            {/* Right Feature Grid */}
            <div className="w-full lg:w-2/5 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <Laptop className="w-10 h-10 text-[#FF7A00] mb-4" />
                <h3 className="text-white font-bold text-lg mb-1">100% Practical</h3>
                <p className="text-blue-200 text-sm">Focus strictly on live projects.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <Briefcase className="w-10 h-10 text-[#FF7A00] mb-4" />
                <h3 className="text-white font-bold text-lg mb-1">Job Ready</h3>
                <p className="text-blue-200 text-sm">Resume & interview preparation.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-10 h-10 text-[#FF7A00] mb-4" />
                <h3 className="text-white font-bold text-lg mb-1">ISO Certified</h3>
                <p className="text-blue-200 text-sm">Globally recognized credentials.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
                <TrendingUp className="w-10 h-10 text-[#FF7A00] mb-4" />
                <h3 className="text-white font-bold text-lg mb-1">Freelancing</h3>
                <p className="text-blue-200 text-sm">Learn to earn globally online.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 2. OUR TRAINING METHODOLOGY (CONTENT RICH) ================= */}
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#FF7A00] font-bold tracking-widest uppercase text-sm mb-2 block">How We Teach</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3E8A] mb-6">
                Our Proven 4-Step Success Framework
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We don't believe in rote memorization. Our entire curriculum is engineered to simulate a real-world corporate IT environment. Here is how we ensure you master your skills:
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 relative">
                  <BookOpen className="w-8 h-8 text-[#1F3E8A]" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7A00] text-white font-bold rounded-full flex items-center justify-center border-2 border-white">1</span>
                </div>
                <h4 className="font-bold text-xl text-[#1F3E8A] mb-3">Core Fundamentals</h4>
                <p className="text-gray-600 text-sm leading-relaxed">We start from absolute zero. Building a rock-solid foundation in logic, theory, and software understanding.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-orange-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 relative">
                  <Laptop className="w-8 h-8 text-[#FF7A00]" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#1F3E8A] text-white font-bold rounded-full flex items-center justify-center border-2 border-white">2</span>
                </div>
                <h4 className="font-bold text-xl text-[#1F3E8A] mb-3">Practical Labs</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Immediate implementation. You will practice what you learn daily on high-speed computers in our IT labs.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-green-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 relative">
                  <PlayCircle className="w-8 h-8 text-green-600" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF7A00] text-white font-bold rounded-full flex items-center justify-center border-2 border-white">3</span>
                </div>
                <h4 className="font-bold text-xl text-[#1F3E8A] mb-3">Live Projects</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Work on real client assignments, live campaigns, and actual datasets to build a powerful visual portfolio.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-purple-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg mb-6 relative">
                  <Award className="w-8 h-8 text-purple-600" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#1F3E8A] text-white font-bold rounded-full flex items-center justify-center border-2 border-white">4</span>
                </div>
                <h4 className="font-bold text-xl text-[#1F3E8A] mb-3">Career Launch</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Mock interviews, resume optimization, and direct referrals to our corporate hiring partners across Punjab.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3. THE COURSES DIRECTORY (LIST VIEW) ================= */}
        <section id="course-list" className="py-24 max-w-7xl mx-auto px-6">
          <div className="mb-12 border-b-2 border-gray-200 pb-4 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3E8A]">Available Training Programs</h2>
              <p className="text-gray-600 mt-2 font-medium">Select a course to view deep syllabus details and career outcomes.</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm font-bold text-[#FF7A00]">
              Total Courses: {courses.length}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <article 
                key={index} 
                className="flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#FF7A00]/50 transition-all duration-300 group"
              >
                {/* Left: Image Box */}
                <div className="w-full sm:w-2/5 relative min-h-[220px] sm:min-h-full overflow-hidden bg-gray-100">
                  <Image
                    src={course.image}
                    alt={`${course.title} Classes Ludhiana`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3E8A]/90 to-transparent flex items-end p-4">
                    <span className="bg-[#FF7A00] text-white text-xs font-black px-3 py-1.5 rounded-md uppercase tracking-wider shadow-md">
                      Admissions Open
                    </span>
                  </div>
                </div>

                {/* Right: Content Box */}
                <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#1F3E8A] mb-3 leading-tight group-hover:text-[#FF7A00] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                      {course.desc}
                    </p>
                    
                    <ul className="space-y-2 mb-8">
                      {course.benefits.slice(0, 3).map((benefit, idx) => ( // Show only top 3 benefits for neatness
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 font-bold">
                          <CheckCircle2 className="w-4 h-4 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <Link 
                      href={`/courses/${course.slug}`}
                      className="flex-1 text-center bg-[#1F3E8A] hover:bg-[#152a60] text-white py-3 rounded-xl font-bold text-sm transition-colors shadow-md"
                    >
                      View Details
                    </Link>
                    <Link 
                      href="/contact"
                      className="flex-1 text-center bg-orange-50 hover:bg-[#FF7A00] text-[#FF7A00] hover:text-white border border-orange-100 hover:border-[#FF7A00] py-3 rounded-xl font-bold text-sm transition-colors"
                    >
                      Book Demo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= 4. COMPREHENSIVE SEO ARTICLE BLOCK ================= */}
        <section className="bg-white py-24 border-y border-gray-200">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3E8A] leading-tight">
                Elevate Your Career with the Top <br className="hidden md:block"/>
                <span className="text-[#FF7A00]">Computer Institute in Ludhiana</span>
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed font-medium">
              <p>
                In today's rapidly evolving digital economy, standard college degrees are no longer enough to secure high-paying jobs. Employers are actively searching for candidates with hands-on, practical skills. This is exactly where <strong>RareTech Institute of Information Technology</strong> steps in. Recognized as the <strong>best IT training center Punjab</strong>, we have revolutionized computer education by abandoning outdated theory in favor of 100% project-based learning.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 my-10 not-prose">
                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                  <h4 className="font-extrabold text-[#1F3E8A] text-xl mb-2">Tech & Development</h4>
                  <p className="text-sm text-gray-600">Our flagship <strong>MERN stack course Ludhiana</strong> is designed to produce elite full-stack web developers. You learn to build robust web applications from scratch, handling both frontend UI and complex backend databases.</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-extrabold text-[#1F3E8A] text-xl mb-2">Marketing & Design</h4>
                  <p className="text-sm text-gray-600">Our intensive <strong>digital marketing training Ludhiana</strong> and premium <strong>graphic design classes Ludhiana</strong> empower students to dominate the digital branding space, running real ad campaigns and designing corporate identities.</p>
                </div>
              </div>

              <p>
                For commerce and business aspirants, mastering accounting software is mandatory. Our highly detailed <strong>tally prime GST course</strong> provides you with the exact corporate workflows required to manage massive business accounts, instantly qualifying you for senior accountant roles. Furthermore, if you are looking for a reliable <strong>computer course after 10th 12th Ludhiana</strong>, our DCA and ADCA programs lay the perfect foundation for both government and private sector jobs.
              </p>
              <p>
                What makes us truly unique is our commitment to your employment. All our programs are strictly <strong>job oriented courses Punjab</strong>. As an <strong>ISO certified computer institute</strong> and an <strong>MSME registered training center</strong>, the certifications you earn at RareTech carry immense legal and corporate weight, guaranteeing you stand out in every interview room.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 5. EXTENSIVE COURSE FAQS ================= */}
        <section className="py-24 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F3E8A]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600 text-lg font-medium">
              Clear your doubts regarding admissions, syllabus, and placements.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
                <button 
                  onClick={() => toggleFaq(index)} 
                  className="w-full text-left px-6 py-6 sm:px-8 flex justify-between items-center focus:outline-none group"
                  aria-expanded={activeFaq === index}
                >
                  <h3 className="text-lg font-bold text-[#1F3E8A] pr-4 group-hover:text-[#FF7A00] transition-colors">{faq.question}</h3>
                  <span className={`text-[#FF7A00] bg-orange-50 p-2 rounded-full transform transition-transform duration-300 ${activeFaq === index ? "rotate-180 bg-[#FF7A00] text-white" : ""}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div className={`px-6 sm:px-8 overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 ${activeFaq === index ? "max-h-[500px] py-6 opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 6. FINAL CTA ================= */}
        <section className="bg-gradient-to-br from-[#1F3E8A] via-[#1A367A] to-[#0A1A4A] py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "40px 40px" }}></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
              Take the First Step Towards a <br className="hidden md:block"/>
              <span className="text-[#FF7A00]">Brilliant Career Today.</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 font-medium max-w-2xl mx-auto">
              Don't wait for opportunities; create them. Enroll in Ludhiana's finest computer training institute and acquire skills that pay for a lifetime.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#e66a00] transition-all duration-300 text-white px-12 py-5 rounded-2xl font-extrabold text-xl shadow-[0_10px_30px_rgba(255,122,0,0.4)] flex items-center justify-center gap-3 hover:-translate-y-1 transform"
              >
                Book Your Free Demo
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <p className="mt-8 text-sm font-bold text-[#FF7A00] uppercase tracking-widest bg-white/10 inline-block px-5 py-2.5 rounded-full backdrop-blur-md border border-white/20">
              Limited seats available for upcoming fresh batches!
            </p>
          </div>
        </section>

      </main>
    </>
  );
}
