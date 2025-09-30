// components/skill.tsx
"use client";

import { CogIcon, ComputerDesktopIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Skills() {
  const skillCategories = [
    {
      icon: <CogIcon className="w-8 h-8 text-cyan-500" />,
      title: "نرم‌افزارهای مهندسی",
      skills: [
        "Revit",
        "AutoCAD", 
        "MSP",
      ],
    },
    {
      icon: <ComputerDesktopIcon className="w-8 h-8 text-blue-500" />,
      title: "نرم‌افزارهای عمومی",
      skills: [
        "Word",
        "Excel",
        "PowerPoint",
      ],
    },
    {
      icon: <CodeBracketIcon className="w-8 h-8 text-indigo-500" />,
      title: "برنامه‌نویسی",
      skills: [
        "JavaScript",
        "React",
      ],
    },
  ];

  const additionalSkills = [
    "BIM Modeling",
    "Structural Design",
    "MEP Design",
    "Project Management",
    "Team Collaboration",
    "Problem Solving",
    "Documentation",
    "Quality Control",
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
            مهارت‌ها
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            مهارت‌های تخصصی و نرم‌افزارهای مورد استفاده در پروژه‌های حرفه‌ای
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-7 rounded-2xl border border-slate-700/50 shadow-xl hover:border-cyan-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-700/50">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="py-3 px-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm p-7 rounded-2xl border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              سایر مهارت‌ها
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {additionalSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="py-3 px-4 text-center rounded-xl bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/30 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}