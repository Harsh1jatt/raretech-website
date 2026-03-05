<<<<<<< HEAD
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Target, 
  Eye, 
  CheckCircle2, 
  MonitorPlay, 
  Clock, 
  BookOpen, 
  Wifi, 
  Award, 
  Users, 
  Briefcase,
  Quote,
  ShieldCheck,
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Code
} from "lucide-react";

// ==========================================
// SEO METADATA
// ==========================================
export const metadata = {
  title: "About Us | RareTech Institute of Information Technology Ludhiana",
  description: "Established in 2021 by Mandeep Singh, RareTech Institute is Ludhiana's leading computer training center specializing in Web Development, Digital Marketing, and IT skills.",
  keywords: "About RareTech Institute, Mandeep Singh Ludhiana, Computer Center in Ludhiana, Best IT Institute Punjab, RareTech history, practical IT training",
};

export default function AboutPage() {
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
            "foundingDate": "2021",
            "founder": {
              "@type": "Person",
              "name": "Mandeep Singh"
            },
            "url": "https://raretechinstitute.com",
            "logo": "https://raretechinstitute.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ludhiana",
              "addressRegion": "Punjab",
              "addressCountry": "IN"
            },
            "description": "Premium IT and Computer Training Institute in Ludhiana offering practical, job-oriented courses.",
            "sameAs": [
              "https://www.instagram.com/mand.eep_singh1/"
            ]
          })
        }}
      />

      <main className="w-full bg-[#f8f9fa] text-gray-800 font-sans selection:bg-[#FF7A00] selection:text-white pb-24">
           
        {/* ================= 1. ULTRA-MODERN HERO ================= */}
        <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-[#0A1128]">
          {/* Glowing Orbs for Modern Vibe */}
              {/* Breadcrumbs */}
            <nav className="flex justify-center text-sm text-blue-200 font-medium -mt-12 " aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><span className="text-blue-400">/</span></li>
                <li aria-current="page" className="text-[#FF7A00] font-bold">About Us</li>
              </ol>
            </nav>
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#1F3E8A] blur-[120px] opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-[#FF7A00] blur-[120px] opacity-40"></div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 mix-blend-overlay"></div>

          <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-white/80 font-medium text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse"></span>
                Est. 2021 • Ludhiana, Punjab
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
                Shaping the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#ff9e44]">Digital Future</span> <br />
                of Punjab.
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 leading-relaxed font-light max-w-xl">
                RareTech Institute bridges the gap between outdated academics and modern industry demands through 100% practical, career-driven IT education.
              </p>
            </div>

            {/* Hero Interactive Cards (Bento Style) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl transform hover:-translate-y-1 transition-all duration-300">
                <Award className="w-8 h-8 text-[#FF7A00] mb-4" />
                <h3 className="text-white font-bold text-xl">ISO 9001:2015 Certified</h3>
                <p className="text-blue-100/70 text-sm mt-2">Government-approved standards ensuring global recognition.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-4xl font-black text-white mb-1">100<span className="text-[#FF7A00]">%</span></h4>
                <p className="text-blue-100/70 text-xs uppercase tracking-wider font-bold">Practical</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-4xl font-black text-white mb-1">50<span className="text-[#FF7A00]">+</span></h4>
                <p className="text-blue-100/70 text-xs uppercase tracking-wider font-bold">Hiring Partners</p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 2. STICKY SCROLL STORY ================= */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 relative">
            
            {/* Sticky Left Column */}
            <div className="w-full md:w-5/12 md:sticky md:top-32 h-max">
              <span className="text-[#FF7A00] font-black tracking-widest uppercase text-sm mb-2 block">Our Genesis</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F3E8A] leading-tight mb-6">
                From a Vision to a Tech Revolution.
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                We didn't just build an institute; we built a launchpad for the next generation of developers, designers, and marketers.
              </p>
              <div className="mt-8">
                <Link href="/courses" className="group inline-flex items-center gap-3 font-bold text-[#1F3E8A] hover:text-[#FF7A00] transition-colors text-lg">
                  Explore our curriculum 
                  <ArrowUpRight className="w-5 h-5 bg-[#1F3E8A] text-white rounded-full p-1 group-hover:bg-[#FF7A00] transition-colors" />
                </Link>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="w-full md:w-7/12 space-y-10">
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-[#1F3E8A]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Founded in 2021</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  What started as a focused training center by visionary entrepreneur <strong>Mr. Mandeep Singh</strong> has rapidly evolved into Ludhiana's most trusted educational brand. The motive was clear: eradicate youth unemployment by replacing outdated theory with aggressive, practical skill-building.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#FF7A00]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering the Youth</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Under the leadership of Mandeep Singh, we have successfully transformed hundreds of absolute beginners into highly confident, hire-ready IT professionals. We measure our success not by enrollments, but by the offer letters our students secure.
                </p>
              </div>
              
              {/* Dynamic Image Break */}
              <div className="relative w-full h-80 rounded-[2rem] overflow-hidden shadow-lg">
                <Image 
                  src="/images/SEO.png" 
                  alt="RareTech Institute Campus" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1F3E8A]/20"></div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 3. MODERN FOUNDER SECTION ================= */}
        <section className="py-24 bg-white relative">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative bg-[#1F3E8A] rounded-[3rem] p-10 md:p-16 overflow-hidden">
              {/* Decorative Mesh */}
              <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.15)_0,transparent_100%)] pointer-events-none"></div>
              
              <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
                {/* Founder Profile */}
                <div className="md:col-span-5 relative">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl border-4 border-white/10">
                    <Image 
                      src="/images/hardware.png" // Replace with actual founder image
                      alt="Mandeep Singh - Founder" 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  {/* Floating Name Tag */}
                  <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl">
                    <h3 className="text-2xl font-extrabold text-[#1F3E8A]">Mandeep Singh</h3>
                    <p className="text-[#FF7A00] font-bold text-sm uppercase tracking-widest mt-1">Founder & Director</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="md:col-span-7 pl-0 md:pl-8 mt-10 md:mt-0">
                  <Quote className="w-16 h-16 text-[#FF7A00] opacity-50 mb-6" />
                  <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed mb-8">
                    "We don't teach from textbooks; we train students on live projects. Our ultimate goal is to mirror an actual IT company environment inside the classroom so our students walk out as experienced professionals, not just freshers."
                  </p>
                  <Link href="/contact" className="inline-block border-b-2 border-[#FF7A00] text-[#FF7A00] hover:text-white hover:border-white transition-colors pb-1 font-bold text-lg tracking-wide uppercase">
                    Connect with Leadership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. BENTO BOX: MISSION & VISION ================= */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F3E8A]">The Core of RareTech</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Vision - spans 2 columns on desktop */}
            <div className="md:col-span-2 bg-gradient-to-br from-white to-blue-50 p-10 rounded-[2.5rem] border border-blue-100 shadow-sm hover:shadow-xl transition-all group">
              <Eye className="w-10 h-10 text-[#FF7A00] mb-6" />
              <h3 className="text-3xl font-extrabold text-[#1F3E8A] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                To become India's most trusted educational technology institute. We envision a future where every youth is digitally literate, financially independent, and capable of driving digital transformation for businesses worldwide.
              </p>
            </div>

            {/* Values - 1 col */}
            <div className="bg-[#FF7A00] text-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute -right-4 -top-4 text-white/20"><ShieldCheck className="w-32 h-32" /></div>
              <h3 className="text-2xl font-extrabold mb-6 relative z-10">Our Values</h3>
              <ul className="space-y-4 font-medium text-lg relative z-10">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white/80" /> Integrity</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white/80" /> Practicality</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white/80" /> Innovation</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-white/80" /> Dedication</li>
              </ul>
            </div>

            {/* Mission - spans full width */}
            <div className="md:col-span-3 bg-white p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-10 hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="w-10 h-10 text-[#1F3E8A]" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#1F3E8A] mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  To deliver the highest quality, most affordable, and purely practical computer education in Punjab. We strive to deeply bridge the skill gap in the digital industry by producing highly competent, employable IT professionals and successful independent freelancers.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 5. THE ADVANTAGE (FACILITIES) ================= */}
        <section className="py-24 bg-[#0A1128] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Campus & Facilities</h2>
                <p className="text-blue-200 text-lg font-light">Experience a corporate-level environment built specifically to foster learning, creativity, and deep technical focus.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl">
                <MonitorPlay className="w-10 h-10 text-[#FF7A00] mb-6" />
                <h4 className="text-xl font-bold mb-3">Modern IT Labs</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">Air-conditioned labs with high-speed systems and dual-monitor setups optimized for heavy coding and design.</p>
              </div>
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl">
                <Clock className="w-10 h-10 text-[#FF7A00] mb-6" />
                <h4 className="text-xl font-bold mb-3">Flexible Batches</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">Morning, afternoon, and evening batches specifically tailored to accommodate students and working professionals.</p>
              </div>
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl">
                <Code className="w-10 h-10 text-[#FF7A00] mb-6" />
                <h4 className="text-xl font-bold mb-3">Updated Syllabus</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">Curriculum reviewed and updated annually to match strict global IT standards and current corporate tech stacks.</p>
              </div>
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors p-8 rounded-3xl">
                <Wifi className="w-10 h-10 text-[#FF7A00] mb-6" />
                <h4 className="text-xl font-bold mb-3">Free High-Speed Wi-Fi</h4>
                <p className="text-blue-100/70 text-sm leading-relaxed">Uninterrupted internet access across the campus for seamless research, downloading assets, and live deployments.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. DEEP SEO TEXT BLOCK ================= */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F3E8A] mb-10 text-center">
              Your Trusted Partner for Professional IT Education
            </h2>
            
            <div className="prose prose-lg md:prose-xl mx-auto text-gray-700 leading-relaxed font-medium space-y-8">
              <p>
                Finding the right educational platform is vital for career success. RareTech Institute of Information Technology is widely recognized as the <strong>best computer center in Ludhiana</strong>, offering deeply immersive and job-oriented training. As a premium <strong>IT training institute in Punjab</strong>, our mission goes far beyond basic education; we focus entirely on making our students employable from day one through our signature 100% practical approach.
              </p>
              <div className="pl-6 border-l-4 border-[#FF7A00] py-2 bg-orange-50/50 rounded-r-2xl">
                <p className="m-0">
                  Whether you are exploring a reliable <strong>computer course after 12th Punjab</strong> or looking to upgrade your professional skills, our diverse catalog covers everything.
                </p>
              </div>
              <p>
                We are highly reputed for our intensive <strong>web development courses</strong> (MERN stack), cutting-edge <strong>digital marketing</strong> strategies, creative <strong>graphic design</strong> modules, and advanced <strong>Tally GST</strong> accounting classes. Every syllabus is designed to mimic real corporate workflows, ensuring you possess the exact skills local and global companies are actively hiring for.
              </p>
              <p>
                Furthermore, RareTech Institute is a proud <strong>ISO 9001:2015 certified</strong> and <strong>MSME registered</strong> organization. This means every <strong>DCA, ADCA</strong>, or specialized diploma you earn from us holds immense legal and corporate value. Coupled with our dedicated placement cell and freelancing mentorship programs, we stand as the ultimate destination for youth looking to build secure, high-income careers in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 7. MASSIVE BOTTOM CTA ================= */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#1F3E8A] to-[#152a60] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF7A00] rounded-full filter blur-[80px] opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full filter blur-[80px] opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Ready to Accelerate Your <br className="hidden md:block"/>
                <span className="text-[#FF7A00]">IT Career?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
                Admissions are currently open. Join RareTech Institute today and let our expert faculty help you transform raw passion into highly lucrative tech skills.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <Link
                  href="/courses"
                  className="w-full sm:w-auto bg-[#FF7A00] hover:bg-[#e66a00] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(255,122,0,0.3)] flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
                >
                  Explore All Courses
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#1F3E8A] px-10 py-5 rounded-full font-bold text-lg shadow-xl flex items-center justify-center gap-2 transition-transform hover:-translate-y-1"
                >
                  <MapPin className="w-5 h-5 text-[#FF7A00]" />
                  Visit Our Campus
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
=======
"use client";

import { CheckCircle, Target, School, Laptop, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-slate-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About Raretech Institute Of Information Technology
          </h1>
          <p className="mt-4 text-lg opacity-90 max-w-3xl mx-auto">
            A trusted name in IT education & software development since 2005.
            Empowering students & businesses with advanced technical skills and
            digital transformation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto leading-relaxed text-lg">
        <p>
          Welcome to <b>Raretech Institute Of Information Technology</b> — a
          leading Software & Web Development Company and a premier IT training
          institute. Our mission is to bridge the gap between professionals and
          modern industry requirements.
        </p>

        <br />

        <p>
          Raretech began as <b>MuMMy Computer Centre</b> in 2005 from a small
          single-room setup in Jamalpur, Ludhiana. With dedication and
          excellence in training, we evolved into{" "}
          <b>Raretech Institute Of Information Technology</b> and now operate{" "}
          <b>4 branches in Ludhiana</b>.
        </p>

        <br />

        <h2 className="text-2xl font-bold mt-6">Why Choose Raretech?</h2>
        <div className="mt-6 space-y-4">
          <FeatureItem text="Affordable fees and multiple payment options." />
          <FeatureItem text="Highly experienced professional faculty." />
          <FeatureItem text="Latest infrastructure and modern teaching methods." />
          <FeatureItem text="Flexible batch timings: morning & evening." />
          <FeatureItem text="Daily practice and regular mock tests." />
        </div>

        <br />

        <p className="mt-6">
          Our motto is simple:{" "}
          <b>
            “One Satisfied Student Brings Five More” — and “Mouth Publicity Is
            The Best Publicity.”
          </b>
          We understand that your ultimate goal is a stable job, and our
          placement team ensures support even after training.
        </p>

        {/* Facilities */}
        <h2 className="text-2xl font-bold mt-10">
          Facilities at Raretech Training Centres
        </h2>

        <div className="mt-6 space-y-4">
          <FeatureItem text="Training on the latest and in-demand technologies." />
          <FeatureItem text="Updated course modules reviewed annually." />
          <FeatureItem text="Live projects taken directly from our development wing." />
          <FeatureItem text="Interview preparation with real questions & tips." />
        </div>

        {/* Mission & Vision */}
        <h2 className="text-3xl font-bold mt-12">Our Mission & Vision</h2>

        <div className="mt-4 space-y-4">
          <p>
            We aim to deliver the best and most affordable computer education to
            help students build successful careers. Our goal is to produce
            skilled, employable, and confident IT professionals for the
            ever-growing digital industry.
          </p>

          <p>
            Raretech believes in empowering youth and reducing unemployment by
            producing trained professionals and entrepreneurs in the IT field.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-100 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-slate-800">
          Ready to Begin Your IT Journey?
        </h3>
        <p className="mt-4 text-lg text-slate-600">
          Join Raretech today and gain skills that turn into career
          opportunities.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <p className="flex items-start gap-3 text-slate-700">
      <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
      {text}
    </p>
  );
}
>>>>>>> d2fd4b9a6a0e5e4baf52d5fd8b55af162adad2dd
