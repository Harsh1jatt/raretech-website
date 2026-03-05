"use client";

<<<<<<< HEAD
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { MapPin, Phone, Building, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("submitting");
=======
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
>>>>>>> d2fd4b9a6a0e5e4baf52d5fd8b55af162adad2dd

    emailjs
      .sendForm(
        "service_dnlw2l5", // EmailJS Service ID
        "template_5lin8lv", // EmailJS Template ID
        formRef.current,
        "GihJAGVBYHxbNNHeV" // EmailJS Public Key
      )
      .then(
        () => {
<<<<<<< HEAD
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 5000); // Reset after 5 seconds
        },
        (err) => {
          setStatus("error");
          setErrorMessage("Failed to send the message. Please try again.");
=======
          setMessageSent(true);
          setError(null);
          formRef.current.reset();
        },
        (err) => {
          setError("Failed to send the message. Please try again.");
>>>>>>> d2fd4b9a6a0e5e4baf52d5fd8b55af162adad2dd
          console.error(err);
        }
      );
  };

  return (
<<<<<<< HEAD
    <>
      {/* ================= SCHEMA MARKUP (SEO) ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RareTech Institute Of Information Technology",
            "image": "https://raretechinstitute.com/logo.png",
            "telephone": ["+916280009096", "+917589434135"],
            "email": "md331148@gmail.com",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "Subhash Nagar Street No.10",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Tikoni Park Area",
                "addressLocality": "Ludhiana",
                "addressRegion": "Punjab",
                "addressCountry": "IN"
              }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            }
          })
        }}
      />

      <main className="w-full bg-gray-50 text-gray-800 font-sans selection:bg-[#FF7A00] selection:text-white pb-20">
        
        {/* ================= 1. HERO HEADER ================= */}
        <section className="relative bg-[#1F3E8A] text-white pt-20 pb-32 px-6 overflow-hidden">
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7A00] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/3"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Breadcrumbs */}
            <nav className="flex justify-center text-sm text-blue-200 font-medium mt-7 mb-8 " aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><span className="text-blue-400">/</span></li>
                <li aria-current="page" className="text-[#FF7A00] font-bold">Contact Us</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Get in Touch with <br className="hidden md:block"/> <span className="text-[#FF7A00]">RareTech Institute</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium">
              Have questions about our courses, fees, or admissions? Drop us a message, give us a call, or visit our campus in Ludhiana. We are here to help you start your IT career.
            </p>
          </div>
        </section>

        {/* ================= 2. CONTACT GRID SECTION ================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              
              {/* Info Card */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-extrabold text-[#1F3E8A] mb-2">Contact Details</h2>
                <p className="text-gray-500 text-sm mb-8">Reach out to us directly via phone, email, or visit our branches.</p>
                
                <div className="space-y-8">
                  {/* Main Branch */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-50 text-[#FF7A00] rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                      <Building size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Main Branch</h3>
                      <address className="text-gray-600 mt-1 not-italic leading-relaxed text-sm">
                        Subhash Nagar Street No.10, <br />
                        Ludhiana, Punjab, India
                      </address>
                    </div>
                  </div>

                  {/* Tikoni Park Branch */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-50 text-[#FF7A00] rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Tikoni Park Branch</h3>
                      <address className="text-gray-600 mt-1 not-italic leading-relaxed text-sm">
                        Tikoni Park Area, <br />
                        Ludhiana, Punjab, India
                      </address>
                    </div>
                  </div>

                  {/* Phone Contacts */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-50 text-[#FF7A00] rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Phone / WhatsApp</h3>
                      <div className="text-gray-600 mt-1 space-y-1.5 text-sm">
                        <p>
                          <span className="font-semibold text-gray-800">Mandeep Singh:</span> <br/>
                          <a href="tel:+916280009096" className="hover:text-[#FF7A00] transition-colors">+91 62800 09096</a>
                        </p>
                        <p>
                          <span className="font-semibold text-gray-800">Harshdeep:</span> <br/>
                          <a href="tel:+917589434135" className="hover:text-[#FF7A00] transition-colors">+91 75894 34135</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-50 text-[#FF7A00] rounded-full flex items-center justify-center flex-shrink-0 border border-blue-100 group-hover:bg-[#FF7A00] group-hover:text-white transition-colors duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Email Address</h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        <a href="mailto:md331148@gmail.com" className="hover:text-[#FF7A00] transition-colors">md331148@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-8 border-gray-100" />

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-100">
                      <Clock size={20} />
                    </div>
                  <div className="w-full">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Office Hours</h3>
                    <ul className="space-y-2 text-gray-600 text-sm w-full">
                      <li className="flex justify-between border-b border-gray-50 pb-1"><span>Monday - Saturday:</span> <span className="font-bold text-[#1F3E8A]">9:00 AM - 7:00 PM</span></li>
                      <li className="flex justify-between pt-1"><span>Sunday:</span> <span className="font-bold text-[#FF7A00]">Closed</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 h-64 md:h-80 overflow-hidden relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.832968393527!2d75.8569803!3d30.9026388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a82da1715694d%3A0x6b772bd9bd12d59!2sSubhash%20Nagar%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  className="w-full h-full rounded-2xl border-0 filter grayscale hover:grayscale-0 transition-all duration-500" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RareTech Institute Location Map"
                ></iframe>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg shadow-md text-xs font-bold text-[#1F3E8A] pointer-events-none group-hover:opacity-0 transition-opacity">
                  Ludhiana Campus
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 h-full">
                <div className="mb-8">
                  <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-[#FF7A00] font-bold text-xs tracking-wider uppercase mb-3 border border-orange-100">
                    Quick Response
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#1F3E8A]">Send Us a Message</h2>
                  <p className="text-gray-500 mt-2">Fill out the form below and our career counselors will get back to you within 24 hours.</p>
                </div>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Rahul Sharma"
                        required
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:bg-white transition-colors text-gray-800 placeholder-gray-400"
                      />
                    </div>
                    
                    {/* Phone Input */}
                    <div className="space-y-2">
                      <label htmlFor="contact" className="text-sm font-bold text-gray-700">Contact Number <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:bg-white transition-colors text-gray-800 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. rahul@example.com"
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:bg-white transition-colors text-gray-800 placeholder-gray-400"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-700">Your Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="I am interested in the Web Development course. Please provide more details about the fees and batch timings..."
                      rows="5"
                      required
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7A00] focus:bg-white transition-colors text-gray-800 placeholder-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit Button & Status Messages */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className={`w-full md:w-auto px-10 py-4 rounded-xl font-bold text-lg text-white transition-all transform flex items-center justify-center gap-2 ${
                        status === "submitting" 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-[#FF7A00] hover:bg-[#e66a00] hover:-translate-y-1 shadow-lg shadow-orange-500/30"
                      }`}
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </>
                      )}
                    </button>

                    {/* Status Alerts */}
                    {status === "success" && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-fade-in">
                        <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                          <h4 className="font-bold text-green-800">Message Sent Successfully!</h4>
                          <p className="text-green-700 text-sm mt-1">Thank you for reaching out. Our team will contact you shortly.</p>
                        </div>
                      </div>
                    )}

                    {status === "error" && (
                      <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-fade-in">
                        <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <div>
                          <h4 className="font-bold text-red-800">Oops! Something went wrong.</h4>
                          <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 3. FAQ / WHAT HAPPENS NEXT SECTION ================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-[#1F3E8A] mb-4">What happens after you contact us?</h2>
          <p className="text-gray-600 mb-10 text-lg">We value your time. Here is our simple 3-step admission process.</p>
          
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#FF7A00] text-white font-black text-xl flex items-center justify-center rounded-full shadow-lg border-4 border-white">1</span>
              <h4 className="font-bold text-[#1F3E8A] text-lg mb-2 mt-2">Counseling Call</h4>
              <p className="text-sm text-gray-600">Our expert will call you to understand your educational background and career goals.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-[#1F3E8A] text-white font-black text-xl flex items-center justify-center rounded-full shadow-lg border-4 border-white">2</span>
              <h4 className="font-bold text-[#1F3E8A] text-lg mb-2 mt-2">Free Demo Class</h4>
              <p className="text-sm text-gray-600">We invite you to our campus for a free live demo session to experience our teaching methodology.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 text-white font-black text-xl flex items-center justify-center rounded-full shadow-lg border-4 border-white">3</span>
              <h4 className="font-bold text-[#1F3E8A] text-lg mb-2 mt-2">Enrollment</h4>
              <p className="text-sm text-gray-600">Choose your preferred batch timing, complete the documentation, and start your IT journey!</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
=======
    <main className="min-h-screen bg-gray-50 py-16 px-4 md:px-12 lg:px-24 font-sans">
      {/* SEO Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Contact RareTech Institute
        </h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          We’re here to answer your questions about courses, admissions, or career guidance. Fill the form or use the contact info below.
        </p>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info Card */}
        <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-gray-900">Our Contact Details</h2>
          <p className="text-gray-600">
            RareTech Institute of Information Technology, Ludhiana – your trusted IT & Computer training institute.
          </p>
          <hr className="border-gray-200" />

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Near Tikoni Park, New Subhash Nagar, Ludhiana, Punjab</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+91 79861-11400, +91 62840-04413</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-blue-600 w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">md331148@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
            <input
              type="text"
              name="contact"
              placeholder="Contact Number / WhatsApp"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows="6"
              required
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-3 rounded-xl transition-transform transform hover:-translate-y-1"
            >
              Send Message
            </button>

            {messageSent && <p className="text-green-600 mt-2 font-medium">Message sent successfully!</p>}
            {error && <p className="text-red-600 mt-2 font-medium">{error}</p>}
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center mt-16">
        <p className="text-gray-700 mb-4 text-lg">
          Ready to start your IT career? Explore our courses and start learning today!
        </p>
        <a
          href="/courses"
          className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-10 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-transform transform hover:-translate-y-1"
        >
          Explore Courses
        </a>
      </section>
    </main>
  );
}
>>>>>>> d2fd4b9a6a0e5e4baf52d5fd8b55af162adad2dd
