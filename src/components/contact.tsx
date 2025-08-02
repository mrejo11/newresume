// components/contact.tsx
"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            تماس با من
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            برای ارتباط و همکاری با من در تماس باشید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                اطلاعات تماس
              </h3>
              <div className="space-y-6">
                {[
                  { icon: MapPinIcon, text: "قائم‌شهر، مازندران", label: "آدرس" },
                  { icon: PhoneIcon, text: "09114940435", label: "تلفن" },
                  { icon: EnvelopeIcon, text: "mehdireko74@gmail.com", label: "ایمیل" },
                  { icon: GlobeAltIcon, text: "ایرانی", label: "ملیت" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-700/50 group-hover:bg-cyan-500/20 transition-colors">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-lg font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                شبکه‌های اجتماعی
              </h3>
              <div className="flex gap-4">
                {[
                  { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
                  { name: "GitHub", icon: "💻", url: "https://github.com" },
                  { name: "Telegram", icon: "📱", url: "https://t.me" },
                  { name: "Instagram", icon: "📸", url: "https://instagram.com" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-slate-700/50 hover:bg-cyan-500/20 text-2xl transition-all duration-300 hover:-translate-y-1"
                    title={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              ارسال پیام
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                    نام شما
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    placeholder="نام خود را وارد کنید"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                    ایمیل شما
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                    placeholder="ایمیل خود را وارد کنید"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-slate-300">
                  موضوع پیام
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all"
                  placeholder="موضوع پیام خود را وارد کنید"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                  پیام شما
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-4 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none"
                  placeholder="پیام خود را بنویسید..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 text-lg font-bold rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}