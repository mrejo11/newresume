"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Define reusable color styles based on your Header component
  const secondaryColor = "#3b82f6"; // blue-500
  const accentColor = "#64748b"; // gray-500 as a placeholder for 'accent'
  const primaryTextColor = "#1e293b"; // gray-800

  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        // Using a similar gradient approach, matching Header's color palette
        background: `linear-gradient(120deg, ${secondaryColor} 0%, ${primaryTextColor} 100%)`,
        fontFamily: "Vazir, Arial, sans-serif", // Consistent font
      }}
      dir="rtl" // Consistent direction
    >
      {/* Floating decorative elements - Styled to match Header's subtle accents */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute top-10 left-10 w-24 h-24 rounded-full blur-2xl animate-pulse"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }} // White with low opacity
        />
        <div
          className="absolute bottom-20 right-20 w-32 h-32 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ backgroundColor: `rgba(59, 130, 246, 0.2)` }} // secondary/20 equivalent
        />
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 rounded-full blur-xl animate-pulse delay-2000"
          style={{ backgroundColor: `rgba(100, 116, 139, 0.1)` }} // accent/10 equivalent
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Main heading - Styled like Header title */}
          <h1
            className={`text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ color: "white", letterSpacing: "-1px" }} // Explicit white for contrast
          >
            سلام! من{" "}
            <span style={{ color: secondaryColor }}>مهدی رضایی</span>
          </h1>
          {/* Subtitle - Styled like Header subtitle */}
          <p
            className={`text-lg md:text-2xl max-w-2xl mx-auto font-medium transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ color: "rgba(255, 255, 255, 0.9)" }} // white/90 equivalent
          >
            مهندس مکانیک، طراح سازه و مدل‌ساز BIM با تخصص در Revit و
            علاقه‌مند به برنامه‌نویسی و معماری مدرن
          </p>
          {/* Call to action buttons - Styled with Header's button/link principles */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Primary Button - Similar to Header's hover effects */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-lg shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none"
              style={{
                backgroundColor: secondaryColor, // bg-secondary
                color: "white",
                padding: "0.75rem 1.5rem", // py-3 px-6
                borderRadius: "0.5rem", // rounded-lg
                fontWeight: "600", // font-semibold
              }}
            >
              <EnvelopeIcon className="w-5 h-5" />
              تماس با من
            </a>
            {/* Secondary Button - Matching Header's social icon button style */}
            <button
              id="downloadBtn"
              className="inline-flex items-center gap-2 text-lg shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)", // bg-white/90 like Header
                color: primaryTextColor, // text-primary
                padding: "0.75rem 1.5rem", // py-3 px-6
                borderRadius: "0.5rem", // rounded-lg
                fontWeight: "600", // font-semibold
                border: `1px solid #e2e8f0`, // Subtle border like Header
                backdropFilter: "blur(10px)", // backdrop-blur like Header
              }}
              onClick={() =>
                window.dispatchEvent(new CustomEvent("generatePDF"))
              }
            >
              <DocumentArrowDownIcon
                className="w-5 h-5"
                style={{ color: secondaryColor }} // Icon color
              />
              دانلود رزومه
            </button>
          </div>
          {/* Scroll indicator - Styled consistently */}
          <div
            className={`flex flex-col items-center gap-1 absolute left-1/2 -translate-x-1/2 bottom-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            aria-hidden="true"
          >
            <span
              className="text-sm"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              اسکرول کنید
            </span>
            <ArrowDownIcon
              className="w-6 h-6 animate-bounce"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}