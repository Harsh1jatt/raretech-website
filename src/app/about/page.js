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
