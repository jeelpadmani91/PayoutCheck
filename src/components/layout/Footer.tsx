import React from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import { getWhatsAppUrl, siteConfig, disclaimer } from '@/config/site.config';

interface FooterProps {
  locale: 'en' | 'ar';
}

export default function Footer({ locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const links = {
    en: [
      { href: '/en/how-it-works', label: 'How it Works' },
      { href: '/en/pricing', label: 'Pricing' },
      { href: '/en/faq', label: 'FAQ' },
      { href: '/en/privacy', label: 'Privacy Policy' },
      { href: '/en/terms', label: 'Terms of Service' },
    ],
    ar: [
      { href: '/ar/how-it-works', label: 'كيف يعمل' },
      { href: '/ar/pricing', label: 'الأسعار' },
      { href: '/ar/faq', label: 'الأسئلة الشائعة' },
      { href: '/ar/privacy', label: 'سياسة الخصوصية' },
      { href: '/ar/terms', label: 'شروط الخدمة' },
    ]
  };

  const navLinks = links[locale];
  const tagline = locale === 'en' 
    ? 'Talabat settlement review for Kuwait restaurants' 
    : 'مراجعة تسويات طلبات لمطاعم الكويت';
    
  return (
    <footer className="bg-dark-navy text-white/80 py-12 px-4 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="bg-white inline-block p-1 rounded mb-4">
              <Logo showText={false} width={40} height={40} />
            </div>
            <p className="text-xl font-bold text-white mb-2">PayoutCheck</p>
            <p className="text-white/60 mb-6 max-w-xs">{tagline}</p>
            <p className="text-sm text-white/50">{locale === 'ar' ? disclaimer.ar : disclaimer.en}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              {locale === 'en' ? 'Quick Links' : 'روابط سريعة'}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-emerald transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              {locale === 'en' ? 'Contact' : 'تواصل معنا'}
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href={getWhatsAppUrl(locale)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald transition-colors"
                >
                  <WhatsAppIcon size={18} />
                  <span dir="auto">{locale === 'en' ? 'WhatsApp Support' : 'دعم واتساب'}</span>
                </a>
              </li>
              {siteConfig?.salesEmail && (
                <li>
                  <a href={`mailto:${siteConfig.salesEmail}`} className="hover:text-emerald transition-colors">
                    {siteConfig.salesEmail}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {currentYear} PayoutCheck. {locale === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
        </div>
      </div>
    </footer>
  );
}
