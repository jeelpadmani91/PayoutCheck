'use client';

import React from 'react';
import { getWhatsAppUrl } from '@/config/site.config';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { trackEvent } from '@/lib/analytics';

interface MobileWhatsAppCTAProps {
  locale: 'en' | 'ar';
}

export default function MobileWhatsAppCTA({ locale }: MobileWhatsAppCTAProps) {
  const handleClick = () => {
    trackEvent('whatsapp_clicked', { location: 'mobile_bottom_cta' });
  };

  const text = locale === 'en' ? 'Message Me on WhatsApp' : 'تواصل عبر واتساب';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur border-t border-border-light shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-40 pb-safe">
      <a
        href={getWhatsAppUrl(locale)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b858] text-white py-3 px-6 rounded-lg font-bold text-lg transition-colors shadow-sm"
        dir="auto"
      >
        <WhatsAppIcon size={24} />
        <span>{text}</span>
      </a>
    </div>
  );
}
