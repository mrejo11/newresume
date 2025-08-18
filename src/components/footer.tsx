"use client";

import { HeartIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer dir="rtl" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-700/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Personal Info */}
          <div className="text-center md:text-right">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              مهدی رضایی
            </h3>
            <p className="text-cyan-100 mb-4 text-lg">
            مهندس مکانیک   
            </p>
            <p className="text-cyan-200/80">
              متخصص در  مدلسازی با Revit و علاقه‌مند به برنامه‌نویسی
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              دسترسی سریع
            </h4>
            <div className="flex flex-col gap-3 items-center">
              {[
                { name: "خانه", href: "#home" },
                { name: "درباره من", href: "#about" },
                { name: "رزومه", href: "#resume" },
                { name: "مهارت‌ها", href: "#skills" },
                { name: "پروژه‌ها", href: "#portfolio" },
                { name: "تماس", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cyan-100 hover:text-white transition-colors duration-300 hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
              اطلاعات تماس
            </h4>
            <div className="space-y-3 text-cyan-100">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <EnvelopeIcon className="w-5 h-5 text-cyan-300" />
                mehdireko74@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <PhoneIcon className="w-5 h-5 text-cyan-300" />
                09114940435
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPinIcon className="w-5 h-5 text-cyan-300" />
                قائم‌شهر، مازندران
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-cyan-500/20">
          <div className="flex justify-center gap-5">
            {[
              { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
              { name: "GitHub", icon: "💻", url: "https://github.com" },
              { name: "Telegram", icon: "📱", url: "https://t.me" },
              { name: "Instagram", icon: "📸", url: "https://instagram.com" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.url}
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-cyan-900/30 hover:bg-cyan-700/50 text-cyan-300 hover:text-white transition-all duration-300 hover:-translate-y-1"
                title={item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 text-center border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-cyan-200/80">
            <span>&copy; {currentYear} تمامی حقوق محفوظ است.</span>
            <span className="hidden md:block">|</span>
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