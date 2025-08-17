// components/about.tsx
import React from 'react';
import { UserIcon, AcademicCapIcon, BriefcaseIcon, TrophyIcon, LanguageIcon } from '@heroicons/react/24/outline';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
            درباره من
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            مهندس مکانیک با تخصص در طراحی سازه و مدل‌سازی BIM
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-0 md:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 transform translate-x-1/2 md:translate-x-0"></div>
            
            {/* Personal Info */}
            <div className="mb-12 flex flex-col md:flex-row-reverse items-center md:items-start">
              <div className="md:w-1/2 md:pr-12 pl-8 md:pl-0 md:text-right mb-6 md:mb-0">
                <div className="bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-slate-200/50 shadow-xl hover:border-cyan-300/50 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                    اطلاعات شخصی
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">مهندس مکانیک</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    متخصص در بیم مدلر  با Revit MEP و علاقه‌مند به برنامه‌نویسی. با تجربه در مدل‌سازی BIM برای پروژه‌های ساختمانی و دارای گواهینامه‌های معتبر در زمینه نرم‌افزارهای تخصصی.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-cyan-50 p-4 rounded-xl">
                      <p className="text-sm text-slate-500">محل سکونت</p>
                      <p className="font-semibold text-slate-800">قائم‌شهر، مازندران</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-xl">
                      <p className="text-sm text-slate-500">سال تولد</p>
                      <p className="font-semibold text-slate-800">1374</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <UserIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12 flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pl-12 pr-8 md:pr-0 md:text-left mb-6 md:mb-0">
                <div className="bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-slate-200/50 shadow-xl hover:border-cyan-300/50 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                    تحصیلات
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">کارشناسی مهندسی مکانیک</h3>
                  <h4 className="text-lg text-cyan-600 mb-3">دانشگاه شهید چمران رشت</h4>
                  <p className="text-slate-600 mb-4">
                    پایان تحصیل در مقطع کارشناسی مهندسی مکانیک در دانشگاه شهید چمران
                    رشت در سال 1396.
                  </p>
                  <span className="inline-flex items-center text-slate-500">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full ml-2"></span>
                    بهمن 1396
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <AcademicCapIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-12 flex flex-col md:flex-row-reverse items-center md:items-start">
              <div className="md:w-1/2 md:pr-12 pl-8 md:pl-0 md:text-right mb-6 md:mb-0">
                <div className="bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-slate-200/50 shadow-xl hover:border-cyan-300/50 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                    تجربه کاری
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">طراح سازه و مدل‌ساز BIM</h3>
                  <h4 className="text-lg text-cyan-600 mb-3">شرکت رسام مدرن فرداد</h4>
                  <p className="text-slate-600 mb-4">
                    طراحی سازه‌های ساختمانی و انجام محاسبات سازه‌ای با استفاده از
                    نرم‌افزار Revit. مدل‌سازی BIM برای پروژه‌های ساختمانی.
                  </p>
                  <span className="inline-flex items-center text-slate-500">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full ml-2"></span>
                    کنونی
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <BriefcaseIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12 flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pl-12 pr-8 md:pr-0 md:text-left mb-6 md:mb-0">
                <div className="bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-slate-200/50 shadow-xl hover:border-cyan-300/50 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                    گواهینامه‌ها
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">آموزش Revit Architecture/Structure</h3>
                      <h4 className="text-cyan-600 mb-2">مرکز BIM City</h4>
                      <p className="text-slate-600 text-sm">
                        دوره تخصصی طراحی معماری و سازه با نرم‌افزار Revit.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">آموزش Revit MEP</h3>
                      <h4 className="text-cyan-600 mb-2">مرکز Tehran BIM</h4>
                      <p className="text-slate-600 text-sm">
                        دوره تخصصی طراحی تاسیسات مکانیکی، با نرم‌افزار Revit.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">Network+</h3>
                      <h4 className="text-cyan-600 mb-2">مجتمع فنی تهران</h4>
                      <p className="text-slate-600 text-sm">
                        گواهینامه حرفه‌ای شبکه‌های کامپیوتری.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <TrophyIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
              <div className="md:w-1/2 md:pr-12 pl-8 md:pl-0 md:text-right mb-6 md:mb-0">
                <div className="bg-white/70 backdrop-blur-sm p-7 rounded-2xl border border-slate-200/50 shadow-xl hover:border-cyan-300/50 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                    زبان‌ها
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">انگلیسی</h3>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <span className="text-cyan-600 text-sm">سطح B1</span>
                      <p className="text-slate-500 text-sm mt-2">
                        توانایی خوب در خواندن، نوشتن و مکالمه
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">آلمانی</h3>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 mb-2">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-cyan-600 text-sm">سطح A1</span>
                      <p className="text-slate-500 text-sm mt-2">
                        آشنایی مقدماتی
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <LanguageIcon className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}