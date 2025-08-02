import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
             درباره من
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            مسیر حرفه‌ای من از تحصیل تا تجربه‌های عملی
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-0 md:right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 transform translate-x-1/2 md:translate-x-0"></div>
            
            {/* Education */}
            <div className="mb-12 flex flex-col md:flex-row-reverse items-center md:items-start">
              <div className="md:w-1/2 md:pr-12 pl-8 md:pl-0 md:text-right mb-6 md:mb-0">
                <div className="bg-slate-800/50 backdrop-blur-sm p-7 rounded-2xl border border-slate-700/50 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-medium mb-4">
                    تحصیلات
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">کارشناسی مهندسی مکانیک</h3>
                  <h4 className="text-lg text-cyan-300 mb-3">دانشگاه شهید چمران رشت</h4>
                  <p className="text-slate-300 mb-4">
                    پایان تحصیل در مقطع کارشناسی مهندسی مکانیک در دانشگاه شهید چمران
                    رشت در سال 1396.
                  </p>
                  <span className="inline-flex items-center text-slate-400">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full ml-2"></span>
                    بهمن 1396
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="mb-12 flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pl-12 pr-8 md:pr-0 md:text-left mb-6 md:mb-0">
                <div className="bg-slate-800/50 backdrop-blur-sm p-7 rounded-2xl border border-slate-700/50 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-medium mb-4">
                    تجربه کاری
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">طراح سازه و مدل‌ساز BIM</h3>
                  <h4 className="text-lg text-cyan-300 mb-3">شرکت رسام مدرن فرداد</h4>
                  <p className="text-slate-300 mb-4">
                    طراحی سازه‌های ساختمانی و انجام محاسبات سازه‌ای با استفاده از
                    نرم‌افزار Revit. مدل‌سازی BIM برای پروژه‌های ساختمانی.
                  </p>
                  <span className="inline-flex items-center text-slate-400">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full ml-2"></span>
                    کنونی
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12 flex flex-col md:flex-row-reverse items-center md:items-start">
              <div className="md:w-1/2 md:pr-12 pl-8 md:pl-0 md:text-right mb-6 md:mb-0">
                <div className="bg-slate-800/50 backdrop-blur-sm p-7 rounded-2xl border border-slate-700/50 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-medium mb-4">
                    گواهینامه‌ها
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">آموزش Revit Architecture/Structure</h3>
                      <h4 className="text-cyan-300 mb-2">مرکز BIM City</h4>
                      <p className="text-slate-300 text-sm">
                        دوره تخصصی طراحی معماری و سازه با نرم‌افزار Revit.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">آموزش Revit MEP</h3>
                      <h4 className="text-cyan-300 mb-2">مرکز Tehran BIM</h4>
                      <p className="text-slate-300 text-sm">
                        دوره تخصصی طراحی تاسیسات مکانیکی، با نرم‌افزار Revit.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Network+</h3>
                      <h4 className="text-cyan-300 mb-2">مجتمع فنی تهران</h4>
                      <p className="text-slate-300 text-sm">
                        گواهینامه حرفه‌ای شبکه‌های کامپیوتری.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="md:w-1/2 md:pl-12 pr-8 md:pr-0 md:text-left mb-6 md:mb-0">
                <div className="bg-slate-800/50 backdrop-blur-sm p-7 rounded-2xl border border-slate-700/50 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
                  <div className="inline-block px-4 py-1 bg-cyan-900/30 text-cyan-400 rounded-full text-sm font-medium mb-4">
                    زبان‌ها
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">انگلیسی</h3>
                      <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
                        <div className="bg-cyan-500 h-2.5 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <span className="text-cyan-300 text-sm">سطح B1</span>
                      <p className="text-slate-400 text-sm mt-2">
                        توانایی خوب در خواندن، نوشتن و مکالمه
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">آلمانی</h3>
                      <div className="w-full bg-slate-700 rounded-full h-2.5 mb-2">
                        <div className="bg-cyan-500 h-2.5 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-cyan-300 text-sm">سطح A1</span>
                      <p className="text-slate-400 text-sm mt-2">
                        آشنایی مقدماتی
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}