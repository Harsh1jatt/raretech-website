"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dnlw2l5", // EmailJS Service ID
        "template_5lin8lv", // EmailJS Template ID
        formRef.current,
        "GihJAGVBYHxbNNHeV" // EmailJS Public Key
      )
      .then(
        () => {
          setMessageSent(true);
          setError(null);
          formRef.current.reset();
        },
        (err) => {
          setError("Failed to send the message. Please try again.");
          console.error(err);
        }
      );
  };

  return (
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
