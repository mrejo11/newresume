'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/hero';
import About from '../components/about';
import Resume from '../components/resume';
import Skills from '../components/skill';
import Contact from '../components/contact';
import Footer from '../components/footer';
import PDFContent from '../components/pdfcontent';
import PDFLoaderOverlay from '../components/PDFLoaderOverlay';
import { generatePDF } from '../lib/generatePDF';
import PortfolioGallery from '@/components/PortfolioGallery';
import RevitPortfolioGallery from '@/components/PortfolioGallery';

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleShowLoader = (e: Event) => {
      const customEvent = e as CustomEvent;
      setShowLoader(customEvent.detail?.show);
    };

    window.addEventListener('pdfLoading', handleShowLoader);
    return () => window.removeEventListener('pdfLoading', handleShowLoader);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.id === 'downloadBtn') {
        e.preventDefault();
        generatePDF();
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      {/* <About /> */}
      <Resume />
      <Skills />
      <RevitPortfolioGallery />
      <Contact />
      <Footer />
      <PDFContent />
      <PDFLoaderOverlay isVisible={showLoader} />
    </>
  );
}