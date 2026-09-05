'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/icons/Logo';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { trackEvent } from '@/lib/analytics';
import { getWhatsAppUrl } from '@/config/site.config';

interface HeaderProps {
  locale: 'en' | 'ar';
}

export default function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      href: `/${locale}/how-it-works`,
      label: locale === 'en' ? 'How it Works' : 'كيف يعمل',
    },
    {
      href: `/${locale}/pricing`,
      label: locale === 'en' ? 'Pricing' : 'الأسعار',
    },
    {
      href: `/${locale}/faq`,
      label: locale === 'en' ? 'FAQ' : 'الأسئلة الشائعة',
    },
  ];

  const handleLangSwitch = () => {
    trackEvent('language_switched', { from: locale, to: locale === 'en' ? 'ar' : 'en' });
  };

  const whatsappUrl = getWhatsAppUrl(locale);
  const otherLocale = locale === 'en' ? 'ar' : 'en';
  // Replacing the first occurrence of /locale with /otherLocale
  const switchUrl = pathname ? pathname.replace(`/${locale}`, `/${otherLocale}`) : `/${otherLocale}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href={`/${locale}`} className="flex items-center">
            <Logo showText />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-navy hover:text-emerald font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={switchUrl}
            onClick={handleLangSwitch}
            className="text-navy hover:text-emerald font-medium"
            dir="auto"
          >
            {locale === 'en' ? 'العربية' : 'English'}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_clicked', { location: 'header' })}
            className="flex items-center gap-2 bg-emerald hover:bg-emerald/90 text-white px-5 py-2 rounded-full font-medium transition-colors shadow-sm"
          >
            <WhatsAppIcon size={18} />
            <span dir="auto">{locale === 'en' ? 'Contact Us' : 'تواصل معنا'}</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_clicked', { location: 'header_mobile' })}
            className="text-emerald p-2"
          >
            <WhatsAppIcon size={24} />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-navy p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-border-light py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy block py-2 hover:text-emerald font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-border-light pt-4 mt-2">
            <Link
              href={switchUrl}
              onClick={handleLangSwitch}
              className="text-navy block py-2 hover:text-emerald font-medium"
              dir="auto"
            >
              {locale === 'en' ? 'Switch to العربية' : 'Switch to English'}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
