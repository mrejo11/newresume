import React, { useState, useEffect } from 'react';
// تعریف نوع داده برای پروژه‌های Revit
interface RevitProject {
  id: number;
  title: string;
  description: string;
  sheetImages: string[]; // آرایه تصاویر
  projectType: string;
  area: string;
  floors: number;
  software: string[];
  projectDetails: {
    client: string;
    location: string;
    year: string;
    status: string;
  };
  // اختیاری: اگر فایل PDF جدا دارید
  // pdfUrl?: string; 
}

const RevitPortfolioGallery = () => {
  // استیت برای مدیریت پروژه انتخاب شده و فیلتر
  const [selectedProject, setSelectedProject] = useState<RevitProject | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // برای گالری تصاویر
  const [isZoomed, setIsZoomed] = useState<boolean>(false); // برای مدیریت حالت بزرگ‌نمایی
  const [zoomedImage, setZoomedImage] = useState<string>(''); // تصویر بزرگ‌شده

  // داده‌های پروژه‌های سازه
  const projects: RevitProject[] = [
    {
      id: 1,
      title: 'جزئیات اتصال چهارراه ستون',
      description: 'جزئیات اجرایی اتصال چهارراه ستون در ساختمان اداری',
      // توجه: عدد '۴' در '/jl۴k.jpg' فارسی هست. اگر نام واقعی فایل jl4k.jpg هست، باید اصلاح شود.
      sheetImages: ['/jl۴k.jpg', '/BADBAND.jpg', '/jlk.jpg', '/jhko.jpg'], // آرایه تصاویر
      projectType: 'جزئیات سازه',
      area: '-',
      floors: 10,
      software: ['Revit Structure', 'ETABS'],
      projectDetails: {
        client: '-', // تغییر داده شد
        location: 'تهران',
        year: '1402',
        status: 'تکمیل شده'
      }
    },
    // ... پروژه‌های دیگر
  ];

  // انواع پروژه‌ها برای فیلتر کردن
  const projectTypes = ['all', 'جزئیات سازه' /*, 'اداری', 'تجاری-مسکونی', 'پارکینگ' */];

  // فیلتر کردن پروژه‌ها بر اساس نوع انتخاب شده
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.projectType === filter);

  // تابع برای بستن مودال و ریست کردن ایندکس تصویر
  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsZoomed(false); // حالت زوم رو هم ریست می‌کنیم
    setZoomedImage('');
  };

  // تابع برای باز کردن تصویر در حالت بزرگ‌نمایی
  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
    setIsZoomed(true);
  };

  // تابع برای دانلود تصویر
  const downloadImage = (imageUrl: string, filename: string) => {
    // این روش ساده‌تر برای دانلود تصویر است.
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename; // نام فایل برای دانلود
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // تابع برای دانلود فایل (در اینجا تصویر اصلی اول)
  const handleDownload = () => {
    if (selectedProject) {
      const imageUrl = selectedProject.sheetImages[0]; // تصویر اول
      const filename = imageUrl.split('/').pop() || 'download.jpg'; // استخراج نام فایل
      downloadImage(imageUrl, filename);
    }
  };

  // به‌روزرسانی ایندکس تصویر وقتی پروژه جدید انتخاب می‌شه یا مودال بسته می‌شه
  useEffect(() => {
    if (selectedProject) {
       setCurrentImageIndex(0); // وقتی پروژه انتخاب می‌شه، به اولین تصویر برمی‌گرده
       setIsZoomed(false); // حالت زوم رو ریست می‌کنیم
       setZoomedImage('');
    }
  }, [selectedProject]);

  // useEffect برای مدیریت کلید Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isZoomed) {
        setIsZoomed(false);
      }
    };

    // اضافه کردن Event Listener
    window.addEventListener('keydown', handleKeyDown);

    // تابع Cleanup برای حذف Event Listener
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isZoomed]); // وابستگی به isZoomed

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* عنوان بخش */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
           پروژه های نمونه
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            مجموعه‌ای از پروژه‌های طراحی سازه‌ای انجام شده با نرم‌افزار Revit Structure
          </p>
        </div>
        {/* دکمه‌های فیلتر */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === type
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
              }`}
            >
              {type === 'all' ? 'همه پروژه‌ها' : type}
            </button>
          ))}
        </div>
        {/* گالری پروژه‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
              onClick={() => setSelectedProject(project)}
            >
              {/* تصویر شیت رویت - نمایش اولین تصویر */}
              <div className="relative overflow-hidden">
                <img
                  src={project.sheetImages[0]} // نمایش اولین تصویر
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.projectType}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm">برای مشاهده جزئیات کلیک کنید</p>
                  </div>
                </div>
              </div>
              {/* اطلاعات پروژه */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-12">
                  {project.description}
                </p>
                {/* اطلاعات فنی */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">متراژ</p>
                    <p className="font-semibold text-gray-800">{project.area}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">تعداد طبقات</p>
                    <p className="font-semibold text-gray-800">{project.floors} طبقه</p>
                  </div>
                </div>
                {/* نرم‌افزارها */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.software.slice(0, 2).map((sw, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                    >
                      {sw}
                    </span>
                  ))}
                  {project.software.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.software.length - 2}
                    </span>
                  )}
                </div>
                {/* وضعیت پروژه */}
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.projectDetails.status === 'تکمیل شده' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.projectDetails.status}
                  </span>
                  <span className="text-gray-500 text-sm">
                    {project.projectDetails.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* مودال نمایش جزئیات پروژه */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* هدر مودال */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedProject.title}
              </h3>
              <button
                onClick={closeModal}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                aria-label="بستن"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* محتوای مودال */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* بخش گالری تصاویر */}
                <div>
                  {/* تصویر اصلی بزرگ */}
                  <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <img
                      src={selectedProject.sheetImages[currentImageIndex]}
                      alt={`${selectedProject.title} - تصویر ${currentImageIndex + 1}`}
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => openZoomedImage(selectedProject.sheetImages[currentImageIndex])} // کلیک روی تصویر برای زوم
                    />
                    {/* دکمه‌های ناوبری تصاویر */}
                    {selectedProject.sheetImages.length > 1 && (
                      <>
                        {/* دکمه قبلی */}
                        {currentImageIndex > 0 && (
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(currentImageIndex - 1); }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                            aria-label="تصویر قبلی"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                        )}
                        {/* دکمه بعدی */}
                        {currentImageIndex < selectedProject.sheetImages.length - 1 && (
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(currentImageIndex + 1); }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                            aria-label="تصویر بعدی"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                        {/* ایندیکیتور تعداد تصاویر */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {selectedProject.sheetImages.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full cursor-pointer ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }} // کلیک روی دایره برای رفتن به تصویر
                              aria-label={`رفتن به تصویر ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  {/* نمایش نرم‌افزارها */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.software.map((sw, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
                {/* اطلاعات پروژه */}
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">نوع پروژه</p>
                        <p className="font-semibold">{selectedProject.projectType}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">متراژ</p>
                        <p className="font-semibold">{selectedProject.area}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">تعداد طبقات</p>
                        <p className="font-semibold">{selectedProject.floors} طبقه</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">سال اجرا</p>
                        <p className="font-semibold">{selectedProject.projectDetails.year}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">مشتری</p>
                        <p className="font-semibold">{selectedProject.projectDetails.client}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-500">محل پروژه</p>
                        <p className="font-semibold">{selectedProject.projectDetails.location}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500">وضعیت</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.projectDetails.status === 'تکمیل شده' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {selectedProject.projectDetails.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    {/* دکمه دانلود */}
                    <button 
                      onClick={handleDownload} // تابع دانلود
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      دریافت نقشه‌ها (تصویر)
                    </button>
                    <button className="flex-1 bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                      تماس برای مشاوره
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* مودال بزرگ‌نمایی تصویر */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 cursor-zoom-out"
          onClick={() => setIsZoomed(false)} // کلیک روی پس‌زمینه مودال زوم رو می‌بندد
        >
          <button
            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }} // جلوگیری از بسته شدن مودال با کلیک روی دکمه
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
            aria-label="بستن بزرگ‌نمایی"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={zoomedImage}
            alt="بزرگ‌نمایی"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن مودال با کلیک روی تصویر
          />
        </div>
      )}
    </section>
  );
};

export default RevitPortfolioGallery;