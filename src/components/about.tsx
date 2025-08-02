"use client";

import {
  UserIcon,
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-gray-50 to-white"
      dir="rtl"
      style={{
        fontFamily: "Vazir, Arial, sans-serif",
      }}
    >
      <div className="container mx-auto px-4 ">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Using the same style pattern as the Header for titles */}
          <h2
            className="flex items-center justify-center gap-2 text-3xl font-extrabold py-5"
            style={{
              color: "#1e293b", // text-primary equivalent from Header context (gray-800/dark)
            }}
          >
            <UserIcon className="w-8 h-8" style={{ color: "#3b82f6" }} /> {/* text-secondary equivalent from Header (blue-500) */}
            درباره من
          </h2>
          {/* Recreating the divider style from Header if it exists, or using a simple one */}
          <div
            className="w-24 h-1 my-4 mx-auto rounded-full"
            style={{ backgroundColor: "#3b82f6" }} // text-secondary equivalent
          ></div>
          <p
            className="text-xl"
            style={{
              color: "#64748b", // text-muted-foreground equivalent (gray-500)
            }}
          >
            مهندس مکانیک، طراح سازه و مدل‌ساز BIM با رویکرد مدرن و عاشق یادگیری
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div
              className="p-8 rounded-2xl transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Similar to card bg in Header (bg-white/90)
                backdropFilter: "blur(10px)", // Similar to backdrop-blur in Header
                border: "1.5px solid #e2e8f0", // Similar border to Header
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Subtle shadow
              }}
            >
              <h3
                className="text-2xl font-bold mb-4 flex items-center gap-2"
                style={{
                  color: "#1e293b", // text-primary equivalent
                }}
              >
                <UserIcon className="w-6 h-6" style={{ color: "#3b82f6" }} /> {/* text-secondary */}
                سلام، من مهدی رضایی هستم
              </h3>
              <p
                className="leading-relaxed mb-4 text-justify"
                style={{
                  color: "#64748b", // text-muted-foreground
                }}
              >
                مهندس مکانیک با تخصص در طراحی تاسیسات مکانیکی ساختمانی و
                مدل‌سازی BIM. تجربه عملی با نرم‌افزارهای Revit و AutoCAD و
                علاقه‌مند به برنامه‌نویسی وب و معماری مدرن. در حال حاضر در شرکت
                رسام مدرن فرداد به عنوان طراح سازه و مدل‌ساز BIM فعالیت می‌کنم.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Info Items with consistent styling */}
                {[
                  { icon: CalendarIcon, text: "متولد ۱۳۷۴" },
                  { icon: MapPinIcon, text: "قائم‌شهر، مازندران" },
                  { icon: BriefcaseIcon, text: "طراح سازه و مدل‌ساز BIM" },
                  { icon: UserIcon, text: "ایمیل: mehdireko74@gmail.com" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 rounded-lg p-3 transition-colors duration-200"
                    style={{
                      backgroundColor: "#f8fafc", // Light background similar to hover:bg-gray-100 in Header
                      border: "1px solid #e2e8f0", // Subtle border
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: "#3b82f6" }} /> {/* text-secondary */}
                    <span
                      className="text-sm"
                      style={{
                        color: "#64748b", // text-muted-foreground
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/mehdi.jpg"
                alt="مهدی رضایی"
                className="w-64 h-64 object-cover rounded-2xl border-4 shadow-2xl"
                style={{
                  borderColor: "white",
                  boxShadow: "0 8px 32px 0 rgba(59,130,246,0.10)",
                }}
              />
              {/* Decorative blurred circles, matching Header's subtle accents */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-xl"
                style={{
                  backgroundColor: "rgba(59, 130, 246, 0.2)", // secondary/20
                }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full blur-xl"
                style={{
                  backgroundColor: "rgba(100, 116, 139, 0.2)", // A neutral accent color, adjust if you have a specific 'accent' color
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
