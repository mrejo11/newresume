"use client";

import { HeartIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Reusing color definitions for consistency with Header
  const secondaryColor = "#3b82f6"; // blue-500
  const primaryTextColor = "#1e293b"; // gray-800 (used for dark text in Header)
  const lightBorderColor = "#e2e8f0"; // gray-200
  const whiteColor = "#ffffff";
  const mutedWhiteColor = "rgba(255, 255, 255, 0.7)"; // white/70
  const mutedWhiteColor80 = "rgba(255, 255, 255, 0.8)"; // white/80
  const mutedWhiteColor90 = "rgba(255, 255, 255, 0.9)"; // white/90

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "GitHub", icon: "💻", url: "https://github.com" },
    { name: "Telegram", icon: "📱", url: "https://t.me" },
    { name: "Instagram", icon: "📸", url: "https://instagram.com" },
  ];

  return (
    <footer
      dir="rtl"
      style={{
        // Using a similar gradient approach to Header, but for footer background
        background: `linear-gradient(to right, ${primaryTextColor}, ${secondaryColor})`, // from-primary to-secondary equivalent
        fontFamily: "Vazir, Arial, sans-serif", // Consistent font
        color: whiteColor, // text-white
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container mx-auto px-4 py-14 relative z-10"
        // Note: Cannot directly apply Tailwind classes like 'bg-gradient-to-r' when using inline styles
        // The inline style above handles the background
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="text-center md:text-right">
            <h3
              className="text-2xl font-bold mb-2"
              style={{
                // Simulating bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent
                // This is a simplified version, true gradient text might require more complex CSS
                color: whiteColor,
              }}
            >
              مهدی رضایی
            </h3>
            <p style={{ color: mutedWhiteColor90 }} className="mb-2">
              مهندس مکانیک و طراح سازه
            </p>
            <p
              className="text-sm"
              style={{ color: mutedWhiteColor }}
            >
              متخصص در طراحی سازه با Revit و علاقه‌مند به برنامه‌نویسی
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: whiteColor }}
            >
              دسترسی سریع
            </h4>
            <div className="flex flex-col gap-2 items-center">
              {[
                { name: "خانه", href: "#home" },
                { name: "درباره من", href: "#about" },
                { name: "رزومه", href: "#resume" },
                { name: "مهارت‌ها", href: "#skills" },
                { name: "تماس", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-200"
                  style={{ color: mutedWhiteColor80 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = whiteColor; // hover:text-white
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = mutedWhiteColor80;
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: whiteColor }}
            >
              اطلاعات تماس
            </h4>
            <div
              className="space-y-2"
              style={{ color: mutedWhiteColor90 }}
            >
              <p>📧 mehdireko74@gmail.com</p>
              <p>📱 09114940435</p>
              <p>📍 قائم‌شهر، مازندران</p>
            </div>
          </div>
        </div>

        {/* Social Links - Styled like Header social icons */}
        <div
          className="mt-10 pt-6"
          style={{ borderTop: `1px solid rgba(255, 255, 255, 0.2)` }} // border-t border-white/20
        >
          <div className="flex justify-center gap-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // bg-white/10
                  color: whiteColor,
                }}
                title={item.name}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = secondaryColor; // hover:bg-secondary
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright - Styled consistently */}
        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: `1px solid rgba(255, 255, 255, 0.2)` }} // border-t border-white/20
        >
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-2"
            style={{ color: mutedWhiteColor }} // text-white/70
          >
            <span>&copy; {currentYear} تمامی حقوق محفوظ است.</span>
            <span className="flex items-center gap-1">
              ساخته شده با
              <HeartIcon className="w-4 h-4 text-red-400 animate-pulse" />
              در ایران
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}