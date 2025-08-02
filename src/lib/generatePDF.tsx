// lib/generatePDF.ts
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

let isGenerating = false; // جلوگیری از کلیک چندباره

export const generatePDF = async () => {
  if (isGenerating) return;
  isGenerating = true;

  const downloadBtn = document.getElementById('downloadBtn');
  const pdfContent = document.getElementById('pdf-content');

  if (!pdfContent) {
    alert('محتوای PDF پیدا نشد!');
    isGenerating = false;
    return;
  }

  // نمایش overlay از طریق React (در صفحه اصلی مدیریت می‌شود)
  window.dispatchEvent(new CustomEvent('pdfLoading', { detail: { show: true } }));

  const originalStyle = pdfContent.getAttribute('style') || '';
  const originalBtnText = downloadBtn?.textContent || '';

  // تنظیم استایل موقت برای PDF
  pdfContent.setAttribute(
    'style',
    `
    position: fixed !important;
    left: 0 !important;
    top: 0 !important;
    z-index: 9999 !important;
    opacity: 1 !important;
    visibility: visible !important;
    display: block !important;
    background: #fff !important;
    width: 210mm !important;
    min-height: 297mm !important;
    box-shadow: none !important;
    margin: 0 !important;
    padding: 0 !important;
  `
  );

  if (downloadBtn) {
    downloadBtn.textContent = 'در حال تولید PDF...';
    (downloadBtn as HTMLButtonElement).disabled = true;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const canvas = await html2canvas(pdfContent, {
      scale: 2.5,
      useCORS: true,
      backgroundColor: '#fff',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('fa-IR').replace(/\//g, '-');
    const filename = `رزومه-مهدی-رضایی-${dateStr}.pdf`;
    pdf.save(filename);

    if (downloadBtn) {
      downloadBtn.textContent = 'PDF با موفقیت دانلود شد!';
      setTimeout(() => {
        if (downloadBtn) {
          downloadBtn.textContent = originalBtnText;
          (downloadBtn as HTMLButtonElement).disabled = false;
        }
      }, 2000);
    }
  } catch (error) {
    console.error('PDF generation error:', error);
    alert('خطا در تولید PDF! لطفاً دوباره تلاش کنید.');
    if (downloadBtn) {
      downloadBtn.textContent = 'خطا در تولید PDF';
      setTimeout(() => {
        if (downloadBtn) {
          downloadBtn.textContent = originalBtnText;
          (downloadBtn as HTMLButtonElement).disabled = false;
        }
      }, 2000);
    }
  } finally {
    // بازگرداندن استایل
    pdfContent.setAttribute('style', originalStyle);
    // پنهان کردن overlay
    window.dispatchEvent(new CustomEvent('pdfLoading', { detail: { show: false } }));
    isGenerating = false;
  }
};