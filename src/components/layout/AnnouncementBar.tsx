'use client';

import React, { useState, useEffect } from 'react';

interface AnnouncementBarProps {
  locale: 'en' | 'ar';
}

export default function AnnouncementBar({ locale }: AnnouncementBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  const handleDismiss = () => {
    sessionStorage.setItem('announcement-dismissed', 'true');
    setIsVisible(false);
  };

  const text =
    locale === 'en'
      ? 'Kuwait restaurant owners: understand what your delivery payouts really contain.'
      : 'أصحاب المطاعم في الكويت: افهم ما تحتويه تسويات التوصيل الخاصة بك.';

  return (
    <div className="bg-navy text-white text-sm py-2 px-4 relative flex items-center justify-center">
      <p className="text-center flex-1 max-w-4xl px-8" dir="auto">{text}</p>
      <button
        onClick={handleDismiss}
        className="absolute end-4 top-1/2 -translate-y-1/2 p-1 hover:text-emerald focus:outline-none transition-colors"
        aria-label="Dismiss announcement"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
