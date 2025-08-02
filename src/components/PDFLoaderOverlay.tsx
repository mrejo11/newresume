// components/PDFLoaderOverlay.tsx
'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

const PDFLoaderOverlay = ({ isVisible }: { isVisible: boolean }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isVisible) return null;

  return createPortal(
    <div
      id="pdf-loading-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(255, 255, 255, 0.85)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .spinner {
          width: 2rem;
          height: 2rem;
          border: 4px solid #3b82f6;
          border-top: 4px solid #fff;
          border-radius: 50%;
          display: inline-block;
          animation: spin 1s linear infinite;
        }
      `}</style>
      <div
        style={{
          fontSize: '1.5rem',
          color: '#3b82f6',
          fontFamily: 'sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span className="spinner"></span>
        در حال تولید PDF...
      </div>
    </div>,
    document.body
  );
};

export default PDFLoaderOverlay;