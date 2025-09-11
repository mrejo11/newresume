// components/hero.tsx
"use client";

import { useEffect, useState } from "react";
import {
  DocumentArrowDownIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir="rtl"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-blue-600/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/20 via-cyan-500/10 to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl animate-pulse delay-1500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative md:pt-20">
              <div className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                {/* Replace with your actual profile image */}
                <img
                  src="/mehdi.jpg"
                  alt="مهدی رضایی"
                  className="w-full h-full object-cover"
                />{" "}
              </div>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.25)]"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="block mb-2">سلام! من</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600">
              مهدی رضایی
            </span>
            <span className="block mt-2 text-slate-800">هستم</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-medium transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-slate-700 to-slate-500">
              مهندس مکانیک، مدلر BIM با تخصص در Revit MEP / Revit Structure
              و علاقه‌مند به برنامه‌نویسی و معماری مدرن
            </span>
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl bg-gradient-to-l from-cyan-600 to-blue-600 text-white shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <EnvelopeIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              تماس با من
            </a>

            <button
              id="downloadBtn"
              className="inline-flex items-center gap-3 px-8 py-4 text-lg font-bold rounded-2xl bg-white/90 backdrop-blur-lg text-slate-800 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 group"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("generatePDF"))
              }
            >
              <DocumentArrowDownIcon className="w-5 h-5 text-cyan-600 transition-transform group-hover:scale-110" />
              دانلود رزومه
            </button>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`flex flex-col items-center gap-3 absolute left-1/2 -translate-x-1/2 bottom-10 transition-all duration-1000 delay-500 cursor-pointer group ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            aria-hidden="true"
            onClick={scrollToContent}
          >
            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
              اسکرول کنید
            </span>
            <div className="flex flex-col items-center gap-1">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
