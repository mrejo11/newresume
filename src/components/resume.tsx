export default function Resume() {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">رزومه</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-secondary mb-4">تحصیلات</h3>
            <h4 className="text-lg text-primary">کارشناسی مهندسی مکانیک</h4>
            <span className="block text-accent font-bold mt-2">
              بهمن 1396 - دانشگاه شهید چمران رشت
            </span>
            <p className="mt-2">
              پایان تحصیل در مقطع کارشناسی مهندسی مکانیک در دانشگاه شهید چمران
              رشت در سال 1396.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-secondary mb-4">تجربه کاری</h3>
            <h4 className="text-lg text-primary">طراح سازه و مدل‌ساز BIM</h4>
            <span className="block text-accent font-bold mt-2">
              شرکت رسام مدرن فرداد
            </span>
            <p className="mt-2">
              طراحی سازه‌های ساختمانی و انجام محاسبات سازه‌ای با استفاده از
              نرم‌افزار Revit. مدل‌سازی BIM برای پروژه‌های ساختمانی.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-secondary mb-4">
              دوره‌ها و گواهینامه‌ها
            </h3>
            <h4 className="text-lg text-primary">
              آموزش Revit Architecture/Structure
            </h4>
            <span className="block text-accent font-bold mt-2">
              مرکز BIM City - مدرس: مهندس بستگانی
            </span>
            <p className="mt-2">
              دوره تخصصی طراحی معماری و سازه با نرم‌افزار Revit.
            </p>

            <h4 className="text-lg text-primary mt-4">آموزش Revit MEP</h4>
            <span className="block text-accent font-bold mt-2">
              مرکز Tehran BIM - مدرس: مهندس محمدی
            </span>
            <p className="mt-2">
              دوره تخصصی طراحی تاسیسات مکانیکی، با نرم‌افزار Revit.
            </p>

            <h4 className="text-lg text-primary mt-4">Network+</h4>
            <span className="block text-accent font-bold mt-2">
              مجتمع فنی تهران
            </span>
            <p className="mt-2">گواهینامه حرفه‌ای شبکه‌های کامپیوتری.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl text-secondary mb-4">زبان‌ها</h3>
            <h4 className="text-lg text-primary">انگلیسی</h4>
            <span className="block text-accent font-bold mt-2">سطح B1</span>
            <p className="mt-2">
              توانایی خوب در خواندن، نوشتن و مکالمه به زبان انگلیسی.
            </p>

            <h4 className="text-lg text-primary mt-4">آلمانی</h4>
            <span className="block text-accent font-bold mt-2">سطح A1</span>
            <p className="mt-2">آشنایی مقدماتی با زبان آلمانی.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
