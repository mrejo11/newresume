'use client';

import { useEffect, useRef } from 'react';

export default function PDFContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  // بارگذاری فونت Vazir
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div
      ref={contentRef}
      id="pdf-content"
      style={{
        position: 'absolute',
        left: '-9999px',
        top: '-9999px',
        width: '210mm',
        minHeight: '297mm',
        padding: '18mm 15mm',
        fontSize: '11pt',
        lineHeight: '1.8',
        fontFamily: 'Vazir, Tahoma, sans-serif',
        direction: 'rtl',
        textAlign: 'right',
        backgroundColor: '#ffffff',
        color: '#333333', // رنگ اصلی متن
        zIndex: -9999,
        boxSizing: 'border-box',
        pageBreakInside: 'avoid',
      }}
    >
      {/* سربرگ */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ 
          margin: '0', 
          fontSize: '24px', 
          color: '#2c3e50', // رنگ اصلی (مشکی-نقره‌ای)
          fontWeight: 'bold' 
        }}>
          مهدی رضایی
        </h1>
        <h2 style={{ 
          margin: '8px 0 0', 
          fontSize: '16px', 
          color: '#3498db', // آبی روشن (رنگ ثانویه)
          fontWeight: 'normal' 
        }}>
          مهندس مکانیک | طراح سازه | مدل‌ساز BIM
        </h2>
        <hr style={{
          margin: '15px auto',
          width: '60%',
          border: '1px solid #eee',
          borderTop: '1px solid #3498db',
        }} />
      </div>

      {/* اطلاعات شخصی */}
      <section style={{ marginBottom: '18px', pageBreakInside: 'avoid' }}>
        <h3 style={{
          fontSize: '16px',
          color: '#2c3e50', // رنگ عنوان (همان رنگ اصلی)
          fontWeight: 'bold',
          borderBottom: '2px solid #3498db',
          paddingBottom: '5px',
          marginBottom: '15px',
          display: 'inline-block',
        }}>
          🔹 اطلاعات شخصی
        </h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            {[
              ['🏠 آدرس', 'استان مازندران، شهر قائم‌شهر، خیابان 16 متری، کوچه لاله 11'],
              ['📞 تلفن', '09114940435'],
              ['📧 ایمیل', 'mehdireko74@gmail.com'],
              ['📅 سال تولد', '1374'],
              ['🌍 ملیت', 'ایرانی'],
            ].map(([label, value], i) => (
              <tr key={i}>
                <td style={{
                  width: '30%',
                  padding: '6px 10px',
                  verticalAlign: 'top',
                  fontWeight: 'bold',
                  color: '#2c3e50', // برچسب‌ها: رنگ اصلی
                }}>
                  {label}
                </td>
                <td style={{
                  width: '70%',
                  padding: '6px 10px',
                  verticalAlign: 'top',
                  color: '#333333', // مقدارها: رنگ متن اصلی
                }}>
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr style={{ margin: '20px 0', border: '1px dashed #ddd' }} />

      {/* تحصیلات */}
      <section style={{ marginBottom: '18px', pageBreakInside: 'avoid' }}>
        <h3 style={{
          fontSize: '16px',
          color: '#2c3e50',
          fontWeight: 'bold',
          borderBottom: '2px solid #3498db',
          paddingBottom: '5px',
          marginBottom: '15px',
          display: 'inline-block',
        }}>
          📚 تحصیلات
        </h3>
        <div style={{ paddingRight: '10px' }}>
          <div style={{ marginBottom: '10px' }}>
            <h4 style={{ margin: '5px 0', color: '#3498db', fontSize: '14px' }}>
              کارشناسی مهندسی مکانیک
            </h4>
            <p style={{ margin: '5px 0', fontSize: '13px', color: '#2c3e50' }}>
              <strong>دانشگاه شهید چمران رشت</strong> — بهمن 1396
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#555' }}>
              پایان تحصیل در مقطع کارشناسی مهندسی مکانیک در دانشگاه شهید چمران رشت در سال 1396.
            </p>
          </div>
        </div>
      </section>

      {/* تجربه کاری */}
      <section style={{ marginBottom: '18px', pageBreakInside: 'avoid' }}>
        <h3 style={{
          fontSize: '16px',
          color: '#2c3e50',
          fontWeight: 'bold',
          borderBottom: '2px solid #3498db',
          paddingBottom: '5px',
          marginBottom: '15px',
          display: 'inline-block',
        }}>
          💼 تجربه کاری
        </h3>
        <div style={{ paddingRight: '10px' }}>
          <div style={{ marginBottom: '10px' }}>
            <h4 style={{ margin: '5px 0', color: '#3498db', fontSize: '14px' }}>
              {/* طراح سازه و مدل‌ساز BIM */}
              تکنسین تعمیر و نگهداری تاسیسات

            </h4>
            <p style={{ margin: '5px 0', fontSize: '13px', color: '#2c3e50' }}>
              <strong>شرکت رسام مدرن فرداد</strong>
            </p>
            <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#555' }}>
              {/* طراحی سازه‌های ساختمانی و انجام محاسبات سازه‌ای با استفاده از نرم‌افزار Revit. مدل‌سازی BIM برای پروژه‌های ساختمانی. */}
              تعمیر و نگهداری تاسیسات ساختمانی شامل سیستم‌های گرمایش و سرمایش.


            </p>
          </div>
        </div>
      </section>

      {/* دوره‌ها */}
      <section style={{ marginBottom: '18px', pageBreakInside: 'avoid' }}>
        <h3 style={{
          fontSize: '16px',
          color: '#2c3e50',
          fontWeight: 'bold',
          borderBottom: '2px solid #3498db',
          paddingBottom: '5px',
          marginBottom: '15px',
          display: 'inline-block',
        }}>
          🏅 دوره‌ها و گواهینامه‌ها
        </h3>
        <ul style={{ paddingRight: '20px', marginTop: '10px', fontSize: '12px', color: '#555' }}>
          <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>
            <strong style={{ color: '#2c3e50' }}>آموزش Revit Architecture/Structure</strong>
            <br />
            <span style={{ color: '#666' }}>مرکز BIM City - مدرس: مهندس بستگانی</span>
          </li>
          <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>
            <strong style={{ color: '#2c3e50' }}>آموزش Revit MEP</strong>
            <br />
            <span style={{ color: '#666' }}>مرکز Tehran BIM - مدرس: مهندس محمدی</span>
          </li>
          <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>
            <strong style={{ color: '#2c3e50' }}>Network+</strong>
            <br />
            <span style={{ color: '#666' }}>مجتمع فنی تهران</span>
          </li>
        </ul>
      </section>

      {/* زبان‌ها */}
      <section style={{ marginBottom: '18px', pageBreakInside: 'avoid' }}>
        <h3 style={{
          fontSize: '16px',
          color: '#2c3e50',
          fontWeight: 'bold',
          borderBottom: '2px solid #3498db',
          paddingBottom: '5px',
          marginBottom: '15px',
          display: 'inline-block',
        }}>
          🌍 زبان‌ها
        </h3>
        <ul style={{ paddingRight: '20px', marginTop: '10px', fontSize: '12px', color: '#555' }}>
          <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>
            <strong style={{ color: '#2c3e50' }}>انگلیسی:</strong> سطح B1 — توانایی خوب در خواندن، نوشتن و مکالمه
          </li>
          <li style={{ marginBottom: '8px', lineHeight: '1.6' }}>
            <strong style={{ color: '#2c3e50' }}>آلمانی:</strong> سطح A1 — آشنایی مقدماتی
          </li>
        </ul>
      </section>

      {/* مهارت‌ها */}
      <section style={{ pageBreakInside: 'avoid' }}>
        <h3 style={{
          fontSize: '16px',
          color: '#2c3e50',
          fontWeight: 'bold',
          borderBottom: '2px solid #3498db',
          paddingBottom: '5px',
          marginBottom: '15px',
          display: 'inline-block',
        }}>
          ⚙️ مهارت‌ها
        </h3>
        <div style={{ fontSize: '12px', color: '#555', lineHeight: '1.7' }}>
          <h4 style={{ margin: '8px 0 5px', color: '#3498db', fontSize: '14px' }}>
            🔧 نرم‌افزارهای مهندسی
          </h4>
          <ul style={{ paddingRight: '20px', margin: '5px 0' }}>
            <li style={{ color: '#333' }}>Revit (Architecture / Structure / MEP): بسیار خوب</li>
            <li style={{ color: '#333' }}>AutoCAD: بسیار خوب</li>
          </ul>

          <h4 style={{ margin: '12px 0 5px', color: '#3498db', fontSize: '14px' }}>
            📊 نرم‌افزارهای عمومی
          </h4>
          <ul style={{ paddingRight: '20px', margin: '5px 0' }}>
            <li style={{ color: '#333' }}>Microsoft Word: بسیار خوب</li>
            <li style={{ color: '#333' }}>Microsoft Excel: بسیار خوب</li>
            <li style={{ color: '#333' }}>Microsoft PowerPoint: بسیار خوب</li>
          </ul>

          <h4 style={{ margin: '12px 0 5px', color: '#3498db', fontSize: '14px' }}>
            💻 برنامه‌نویسی
          </h4>
          <ul style={{ paddingRight: '20px', margin: '5px 0' }}>
            <li style={{ color: '#333' }}>JavaScript: بسیار خوب</li>
            <li style={{ color: '#333' }}>React: بسیار خوب</li>
          </ul>
        </div>
      </section>

      {/* پاورقی */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        paddingTop: '10px',
        borderTop: '1px solid #eee',
        fontSize: '10px',
        color: '#888',
      }}>
        این رزومه با استفاده از Next.js و jspdf تولید شده است — {new Date().toLocaleDateString('fa-IR')}
      </div>
    </div>
  );
}