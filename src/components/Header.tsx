"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const socialLinks = [
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: <span style={{ fontSize: "1.3em" }}>💼</span>,
  },
  {
    href: "https://github.com",
    label: "GitHub",
    icon: <span style={{ fontSize: "1.3em" }}>💻</span>,
  },
  {
    href: "https://t.me",
    label: "Telegram",
    icon: <span style={{ fontSize: "1.3em" }}>📱</span>,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <span style={{ fontSize: "1.3em" }}>📸</span>,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "خانه" },
    { href: "#about", label: "درباره من" },
    { href: "#resume", label: "رزومه" },
    { href: "#skills", label: "مهارت‌ها" },
    { href: "#contact", label: "تماس" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg bg-white/90 backdrop-blur-md" : "bg-white/70"
      }`}
      dir="rtl"
      style={{
        fontFamily: "Vazir, Arial, sans-serif",
        borderBottom: "1.5px solid #e2e8f0",
      }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Right: Logo/Name */}
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-extrabold text-primary hover:scale-105 transition-transform duration-300"
          style={{ letterSpacing: "-1px" }}
        >
          <span style={{ fontSize: "1.5em" }}>📝</span>
          <span>
            مهدی <span style={{ color: "#3b82f6" }}>رضایی</span>
          </span>
        </a>

        {/* Center: Navigation (desktop) */}
        <nav className="hidden md:flex items-center gap-2 mx-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-base font-semibold text-gray-700 hover:text-secondary transition-colors duration-200 group"
              style={{ borderRadius: "8px" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Left: Social icons (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-50 transition-colors duration-200"
              style={{ fontSize: "1.2em" }}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          aria-label="باز کردن منو"
        >
          <Bars3Icon className="w-7 h-7 text-primary" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex flex-col"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div
            className="bg-white shadow-lg rounded-b-2xl p-6 pt-4 flex flex-col gap-6 animate-fade-in-up"
            style={{ maxWidth: 340, margin: "0 auto", marginTop: 32 }}
          >
            <div className="flex items-center justify-between mb-2">
              <a
                href="#home"
                className="flex items-center gap-2 text-xl font-extrabold text-primary"
                onClick={() => setMenuOpen(false)}
              >
                <span style={{ fontSize: "1.3em" }}>📝</span>
                <span>
                  مهدی <span style={{ color: "#3b82f6" }}>رضایی</span>
                </span>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="بستن منو"
              >
                <XMarkIcon className="w-7 h-7 text-primary" />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-base font-semibold text-gray-700 hover:text-secondary hover:bg-blue-50 rounded-lg transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 justify-center mt-2">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-blue-50 transition-colors duration-200"
                  style={{ fontSize: "1.2em" }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)}></div>
        </div>
      )}
    </header>
  );
}
