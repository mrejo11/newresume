// components/PortfolioGallery.tsx
import React, { useState, useEffect } from 'react';

interface RevitProject {
  id: number;
  title: string;
  description: string;
  sheetImages: string[];
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
}

const RevitPortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState<RevitProject | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomedImage, setZoomedImage] = useState<string>('');

  const projects: RevitProject[] = [
    {
      id: 1,
      title: 'جزئیات اتصال چهارراه ستون',
      description: 'جزئیات اجرایی اتصال چهارراه ستون در ساختمان اداری',
      sheetImages: ['/jl۴k.jpg', '/BADBAND.jpg', '/jlk.jpg', '/jhko.jpg'],
      projectType: 'جزئیات سازه',
      area: '-',
      floors: 10,
      software: ['Revit Structure', 'ETABS'],
      projectDetails: {
        client: '-',
        location: 'تهران',
        year: '1402',
        status: 'تکمیل شده'
      }
    },
    {
      id: 2,
      title: 'طرح تأسیسات مکانیکی ساختمان',
      description: 'مدل‌سازی و طراحی تأسیسات مکانیکی یک ساختمان اداری 8 طبقه',
      sheetImages: ['/mep1.jpg', '/mep2.jpg', '/mep3.jpg'],
      projectType: 'تاسیسات مکانیکی',
      area: '2500 مترمربع',
      floors: 8,
      software: ['Revit MEP', 'AutoCAD'],
      projectDetails: {
        client: 'شرکت پویا سازان',
        location: 'تهران',
        year: '1401',
        status: 'تکمیل شده'
      }
    },
    {
      id: 3,
      title: 'پارکینگ زیرزمینی',
      description: 'طراحی سازه پارکینگ 4 طبقه با سیستم قاب خمشی فولادی',
      sheetImages: ['/parking1.jpg', '/parking2.jpg'],
      projectType: 'پارکینگ',
      area: '3200 مترمربع',
      floors: 4,
      software: ['Revit Structure', 'ETABS', 'SAP2000'],
      projectDetails: {
        client: 'مجتمع مسکونی آرین',
        location: 'کرج',
        year: '1400',
        status: 'تکمیل شده'
      }
    }
  ];

  const projectTypes = ['all', 'جزئیات سازه', 'تاسیسات مکانیکی', 'پارکینگ'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.projectType === filter);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
    setZoomedImage('');
  };

  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
    setIsZoomed(true);
  };

  const downloadImage = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    if (selectedProject) {
      const imageUrl = selectedProject.sheetImages[0];
      const filename = imageUrl.split('/').pop() || 'download.jpg';
      downloadImage(imageUrl, filename);
    }
  };

  useEffect(() => {
    if (selectedProject) {
       setCurrentImageIndex(0);
       setIsZoomed(false);
       setZoomedImage('');
    }
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Close modal with Escape key
      if (event.key === 'Escape') {
        if (isZoomed) {
          setIsZoomed(false);
        } else if (selectedProject) {
          closeModal();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed, selectedProject]);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 mb-4">
            پروژه‌های نمونه
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            مجموعه‌ای از پروژه‌های طراحی سازه‌ای و مدل‌سازی BIM انجام شده با نرم‌افزارهای تخصصی
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === type
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-slate-700 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 hover:text-cyan-600'
              }`}
            >
              {type === 'all' ? 'همه پروژه‌ها' : type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-slate-100 group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.sheetImages[0]}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.projectType}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm">برای مشاهده جزئیات کلیک کنید</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 h-12">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-cyan-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500">متراژ</p>
                    <p className="font-semibold text-slate-800">{project.area}</p>
                  </div>
                  <div className="bg-cyan-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-500">تعداد طبقات</p>
                    <p className="font-semibold text-slate-800">{project.floors} طبقه</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.software.slice(0, 2).map((sw, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-md"
                    >
                      {sw}
                    </span>
                  ))}
                  {project.software.length > 2 && (
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                      +{project.software.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.projectDetails.status === 'تکمیل شده' 
                      ? 'bg-emerald-100 text-emerald-800' 
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {project.projectDetails.status}
                  </span>
                  <span className="text-slate-500 text-sm">
                    {project.projectDetails.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center rounded-t-3xl">
              <h3 className="text-2xl font-bold text-slate-800">
                {selectedProject.title}
              </h3>
              <button
                onClick={closeModal}
                className="bg-slate-100 rounded-full p-2 transition-colors hover:bg-red-700"
                aria-label="بستن"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="relative bg-slate-100 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={selectedProject.sheetImages[currentImageIndex]}
                      alt={`${selectedProject.title} - تصویر ${currentImageIndex + 1}`}
                      className="w-full h-auto object-contain cursor-pointer"
                      onClick={() => openZoomedImage(selectedProject.sheetImages[currentImageIndex])}
                    />
                    
                    {selectedProject.sheetImages.length > 1 && (
                      <>
                        {currentImageIndex > 0 && (
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(currentImageIndex - 1); }}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all"
                            aria-label="تصویر قبلی"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                        )}
                        
                        {currentImageIndex < selectedProject.sheetImages.length - 1 && (
                          <button
                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(currentImageIndex + 1); }}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition-all"
                            aria-label="تصویر بعدی"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                        
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {selectedProject.sheetImages.map((_, index) => (
                            <div
                              key={index}
                              className={`w-3 h-3 rounded-full cursor-pointer ${
                                index === currentImageIndex ? 'bg-cyan-500' : 'bg-white/50'
                              }`}
                              onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                              aria-label={`رفتن به تصویر ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.software.map((sw, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 rounded-full text-sm font-medium"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cyan-50 p-4 rounded-xl">
                        <p className="text-sm text-slate-500">نوع پروژه</p>
                        <p className="font-semibold">{selectedProject.projectType}</p>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-xl">
                        <p className="text-sm text-slate-500">متراژ</p>
                        <p className="font-semibold">{selectedProject.area}</p>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-xl">
                        <p className="text-sm text-slate-500">تعداد طبقات</p>
                        <p className="font-semibold">{selectedProject.floors} طبقه</p>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-xl">
                        <p className="text-sm text-slate-500">سال اجرا</p>
                        <p className="font-semibold">{selectedProject.projectDetails.year}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-cyan-50 p-4 rounded-xl">
                        <p className="text-sm text-slate-500">مشتری</p>
                        <p className="font-semibold">{selectedProject.projectDetails.client}</p>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-xl">
                        <p className="text-sm text-slate-500">محل پروژه</p>
                        <p className="font-semibold">{selectedProject.projectDetails.location}</p>
                      </div>
                    </div>
                    
                    <div className="bg-cyan-50 p-4 rounded-xl">
                      <p className="text-sm text-slate-500">وضعیت</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        selectedProject.projectDetails.status === 'تکمیل شده' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {selectedProject.projectDetails.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={handleDownload}
                      className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white py-3.5 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      دریافت نقشه‌ها (تصویر)
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white py-3.5 px-6 rounded-xl font-medium transition-all shadow-lg hover:shadow-slate-500/30">
                      تماس برای مشاوره
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 z-50 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
            aria-label="بستن بزرگ‌نمایی"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={zoomedImage}
            alt="بزرگ‌نمایی"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default RevitPortfolioGallery;