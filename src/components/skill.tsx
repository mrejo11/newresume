"use client";

import {
  CogIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

export default function Skills() {
  // Reusing color definitions for consistency
  const secondaryColor = "#3b82f6"; // blue-500
  const accentColor = "#64748b"; // gray-500
  const primaryTextColor = "#1e293b"; // gray-800
  const mutedTextColor = "#64748b"; // gray-500
  const lightBorderColor = "#e2e8f0"; // gray-200
  const whiteColor = "#ffffff";
  const lightGrayColor = "#e5e7eb"; // gray-200 for progress bar background

  const skillCategories = [
    {
      icon: <CogIcon className="w-7 h-7" style={{ color: secondaryColor }} />,
      title: "نرم‌افزارهای مهندسی",
      skills: [
        { name: "Revit", level: 90 },
        { name: "AutoCAD", level: 95 },
      ],
    },
    {
      icon: <ComputerDesktopIcon className="w-7 h-7" style={{ color: accentColor }} />,
      title: "نرم‌افزارهای عمومی",
      skills: [
        { name: "Word", level: 90 },
        { name: "Excel", level: 85 },
        { name: "PowerPoint", level: 80 },
      ],
    },
    {
      icon: <CodeBracketIcon className="w-7 h-7" style={{ color: "#3b82f6" }} />, // blue-500
      title: "برنامه‌نویسی",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
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
            className="flex items-center justify-center gap-2 text-3xl font-extrabold"
            style={{ color: primaryTextColor }}
          >
            <CogIcon className="w-8 h-8" style={{ color: secondaryColor }} />
            مهارت‌ها
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
            مهارت‌های تخصصی و نرم‌افزارهای مورد استفاده
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-8 rounded-2xl transition-all duration-300 hover:shadow-xl flex flex-col gap-6"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)", // Card background
                backdropFilter: "blur(10px)",
                border: `1.5px solid ${lightBorderColor}`,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                {cat.icon}
                <h3
                  className="text-lg font-bold"
                  style={{ color: primaryTextColor }}
                >
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span
                        className="font-semibold"
                        style={{ color: primaryTextColor }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-sm font-bold"
                        style={{ color: secondaryColor }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar - Styled consistently */}
                    <div
                      className="w-full rounded-full h-3"
                      style={{ backgroundColor: lightGrayColor }}
                    >
                      <div
                        className="h-3 rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(to left, ${secondaryColor}, #60a5fa)`, // from-secondary to-blue-400
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          {/* Card - Styled like other cards */}
          <div
            className="p-8 rounded-2xl"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: `1.5px solid ${lightBorderColor}`,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h3
              className="text-xl font-bold mb-8 text-center"
              style={{ color: primaryTextColor }}
            >
              سایر مهارت‌ها
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "BIM Modeling",
                "Structural Design",
                "MEP Design",
                "Project Management",
                "Team Collaboration",
                "Problem Solving",
                "Documentation",
                "Quality Control",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(100, 116, 139, 0.05))`, // from-secondary/5 to-accent/5
                    border: `1px solid ${lightBorderColor}`, // border-border
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(100, 116, 139, 0.1))`; // hover:from-secondary/10 hover:to-accent/10
                    e.currentTarget.style.borderColor = `rgba(59, 130, 246, 0.3)`; // hover:border-secondary/30
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(100, 116, 139, 0.05))`;
                    e.currentTarget.style.borderColor = lightBorderColor;
                  }}
                >
                  <span
                    className="font-medium text-sm"
                    style={{ color: primaryTextColor }}
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}