// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: "💼" },
  { href: "https://github.com", label: "GitHub", icon: "💻" },
  { href: "https://t.me", label: "Telegram", icon: "📱" },
  { href: "https://instagram.com", label: "Instagram", icon: "📸" },
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
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-white/90 backdrop-blur-xl shadow-xl" 
          : "py-5 bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-2xl font-bold group"
        >
          <span className="text-cyan-500 group-hover:text-blue-600 transition-colors">📝</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
            مهدی <span className="font-extrabold">رضایی</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-5 py-2.5 text-base font-medium text-slate-700 hover:text-cyan-600 transition-all duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500 group-hover:w-full group-hover:right-0"></span>
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title={item.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:shadow-cyan-500/20 text-lg transition-all duration-300 hover:-translate-y-1 hover:text-cyan-500"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2.5 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-cyan-500/30 transition-all"
          aria-label="باز کردن منو"
        >
          <Bars3Icon className="w-6 h-6 text-cyan-600" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-xl flex flex-col">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl rounded-b-3xl p-6 pt-4 animate-slide-down">
            <div className="flex items-center justify-between mb-8">
              <a
                href="#home"
                className="flex items-center gap-2 text-xl font-bold"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-cyan-400">📝</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                  مهدی <span className="font-extrabold">رضایی</span>
                </span>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 transition-colors"
                aria-label="بستن منو"
              >
                <XMarkIcon className="w-6 h-6 text-cyan-400" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-2 mb-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-5 py-4 text-lg font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-700/50 rounded-xl transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4 justify-center">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.label}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-700 hover:bg-cyan-500/20 text-xl transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}