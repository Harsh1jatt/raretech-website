"use client";

import { useState } from "react";
import axios from "axios";
import { Loader2, FileDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function CertificatePage() {
  const [roll, setRoll] = useState("");
  const [files, setFiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchCertificate = async () => {
    if (!roll.trim()) {
      setError("Please enter a roll number");
      return;
    }

    setError("");
    setLoading(true);
    setSearching(true);

    try {
      const res = await axios.get(
        `https://iems.onrender.com/institute/certificate/${roll}`
      );

      const getUrl = (file) =>
        typeof file === "string" ? file : file?.fileUrl;

      const fetchedFiles = [
        { name: "Certificate", url: getUrl(res.data.certificate) },
        { name: "Marksheet", url: getUrl(res.data.marksheet) },
      ];

      setFiles(fetchedFiles);
      setCurrentIndex(0);
    } catch (err) {
      setFiles([]);
      setError(err.response?.data?.error || "No certificate found");
    } finally {
      setLoading(false);
      setSearching(false);
    }
  };

  const nextFile = () =>
    setCurrentIndex((prev) => (prev + 1) % files.length);

  const prevFile = () =>
    setCurrentIndex((prev) => (prev - 1 + files.length) % files.length);

  return (
    <div className="min-h-screen bg-white pt-20 pb-24 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Certificate Verification
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Enter your roll number to view or download your certificate.
        </p>
      </div>

      {/* Search Box */}
      <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Enter Roll Number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />

        <button
          onClick={fetchCertificate}
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold shadow-md flex items-center gap-2 transition-all hover:scale-105 disabled:opacity-40"
        >
          {loading && <Loader2 className="animate-spin w-5 h-5" />}
          {loading ? "Searching..." : "Verify"}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-center mt-6 text-red-600 font-medium animate-fadeIn">
          {error}
        </p>
      )}

      {/* Loading Indicator */}
      {searching && !error && (
        <p className="text-center mt-6 text-slate-700 animate-fadeIn">
          Fetching certificate...
        </p>
      )}

      {/* Certificate Preview */}
      {files.length > 0 && !searching && (
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-center text-2xl font-bold text-slate-900 mb-6 animate-fadeIn">
            {files[currentIndex].name}
          </h3>

          <div className="relative">
            <img
              src={files[currentIndex].url}
              alt="Document Preview"
              className="w-full rounded-xl shadow-lg animate-scaleIn"
            />

            {/* Navigation Buttons */}
            {files.length > 1 && (
              <>
                <button
                  onClick={prevFile}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextFile}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-8">
            <a
              href={files[currentIndex].url}
              download
              className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all hover:scale-105"
            >
              <FileDown className="w-5 h-5" /> Download
            </a>
          </div>
        </div>
      )}

      {/* Custom Animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.35s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.94);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
