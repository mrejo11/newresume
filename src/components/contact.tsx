"use client";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  // Reusing color definitions for consistency
  const secondaryColor = "#3b82f6"; // blue-500
  const primaryTextColor = "#1e293b"; // gray-800
  const mutedTextColor = "#64748b"; // gray-500
  const lightBorderColor = "#e2e8f0"; // gray-200
  const whiteColor = "#ffffff";
  const inputFocusRingColor = "#3b82f6"; // focus:ring-secondary

  return (
    <section
      id="contact"
      className="section-padding"
      dir="rtl"
      style={{
        background: "linear-gradient(to bottom right, #f8fafc, #ffffff)", // from-gray-50 to-white
        fontFamily: "Vazir, Arial, sans-serif", // Consistent font
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header - Styled like other sections */}
        <div className="text-center mb-16">
          <h2
            className="flex items-center justify-center gap-2 text-3xl font-extrabold py-5"
            style={{ color: primaryTextColor }}
          >
            <EnvelopeIcon className="w-8 h-8" style={{ color: secondaryColor }} />
            تماس با من
          </h2>
          {/* Divider */}
          <div
            className="w-24 h-1 my-4 mx-auto rounded-full"
            style={{ backgroundColor: secondaryColor }}
          ></div>
          <p
            className="text-xl font-medium"
            style={{ color: mutedTextColor }}
          >
            برای ارتباط و همکاری با من در تماس باشید
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Card - Styled like other cards */}
            <div
              className="p-8 rounded-2xl shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: `1.5px solid ${lightBorderColor}`,
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: primaryTextColor }}
              >
                اطلاعات تماس
              </h3>
              <div className="space-y-5">
                {[
                  { icon: MapPinIcon, text: "قائم‌شهر، مازندران" },
                  { icon: PhoneIcon, text: "09114940435" },
                  { icon: EnvelopeIcon, text: "mehdireko74@gmail.com" },
                  { icon: GlobeAltIcon, text: "ایرانی" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <item.icon className="w-6 h-6" style={{ color: secondaryColor }} />
                    <span style={{ color: primaryTextColor }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className="p-8 rounded-2xl shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: `1.5px solid ${lightBorderColor}`,
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: primaryTextColor }}
              >
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
                    className="w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200"
                    style={{
                      backgroundColor: whiteColor,
                      border: `1px solid ${lightBorderColor}`, // border-border
                      fontSize: "1.25rem", // text-xl
                    }}
                    title={item.name}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#eff6ff"; // hover:bg-blue-50
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = whiteColor;
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="p-8 rounded-2xl shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: `1.5px solid ${lightBorderColor}`,
            }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ color: primaryTextColor }}
            >
              ارسال پیام
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                    style={{ color: primaryTextColor }}
                  >
                    نام شما
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-4 rounded-xl transition-colors duration-200"
                    style={{
                      border: `1px solid ${lightBorderColor}`, // border-border
                      backgroundColor: whiteColor,
                    }}
                    placeholder="نام خود را وارد کنید"
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = inputFocusRingColor; // focus:border-secondary
                      e.target.style.boxShadow = `0 0 0 3px rgba(59, 130, 246, 0.2)`; // focus:ring-2 focus:ring-secondary
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = lightBorderColor;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: primaryTextColor }}
                  >
                    ایمیل شما
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-4 rounded-xl transition-colors duration-200"
                    style={{
                      border: `1px solid ${lightBorderColor}`,
                      backgroundColor: whiteColor,
                    }}
                    placeholder="ایمیل خود را وارد کنید"
                    required
                    onFocus={(e) => {
                      e.target.style.borderColor = inputFocusRingColor;
                      e.target.style.boxShadow = `0 0 0 3px rgba(59, 130, 246, 0.2)`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = lightBorderColor;
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                  style={{ color: primaryTextColor }}
                >
                  موضوع پیام
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full p-4 rounded-xl transition-colors duration-200"
                  style={{
                    border: `1px solid ${lightBorderColor}`,
                    backgroundColor: whiteColor,
                  }}
                  placeholder="موضوع پیام خود را وارد کنید"
                  onFocus={(e) => {
                    e.target.style.borderColor = inputFocusRingColor;
                    e.target.style.boxShadow = `0 0 0 3px rgba(59, 130, 246, 0.2)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = lightBorderColor;
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: primaryTextColor }}
                >
                  پیام شما
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-4 rounded-xl transition-colors duration-200 resize-none"
                  style={{
                    border: `1px solid ${lightBorderColor}`,
                    backgroundColor: whiteColor,
                  }}
                  placeholder="پیام خود را بنویسید..."
                  required
                  onFocus={(e) => {
                    e.target.style.borderColor = inputFocusRingColor;
                    e.target.style.boxShadow = `0 0 0 3px rgba(59, 130, 246, 0.2)`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = lightBorderColor;
                    e.target.style.boxShadow = "none";
                  }}
                ></textarea>
              </div>
              {/* Submit Button - Styled like Hero button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 text-lg transition-transform duration-300 hover:scale-105 focus:outline-none"
                style={{
                  backgroundColor: secondaryColor, // bg-secondary
                  color: whiteColor,
                  padding: "0.75rem 1.5rem", // py-3 px-6 equivalent
                  borderRadius: "0.5rem", // rounded-lg
                  fontWeight: "600", // font-semibold
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // shadow-md
                }}
              >
                <PaperAirplaneIcon className="w-5 h-5" />
                ارسال پیام
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}