'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { getWhatsAppUrl, getCalendarUrl } from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

interface HeroSectionProps {
  locale: 'en' | 'ar';
}

const content = {
  en: {
    headline: 'Know what your Talabat payout should be.',
    subtext: 'PayoutCheck helps Kuwait restaurants compare Talabat settlement files with available order and POS records, identify potential commission, refund, cancellation, promotion, and payout discrepancies, and prepare clear evidence for follow-up.',
    primaryCta: 'Message me on WhatsApp',
    secondaryCta: 'Book a Free 15-Min Call',
    microcopy: 'Message me directly — I personally review every file. No obligation, no file needed to start the conversation.',
    trustNote: 'Built for independent restaurants, cafés, cloud kitchens, and small chains in Kuwait.',
    illustrativeSample: 'ILLUSTRATIVE SAMPLE — NOT A CLIENT RESULT',
    header: 'Settlement Review — Sample',
    period: 'Settlement period: June 1–15, 2025',
    stats: 'POS Orders: 847 | Settlement Orders: 831 | Potential Items for Review: 16',
    commission: 'Commission - Expected (25%): 1,245.00 KWD | Charged: 1,482.50 KWD | Difference: 237.50 KWD',
    status: 'Human review required',
    tableHeaders: ['Order ID', 'Type', 'Amount', 'Status'],
    tableRows: [
      { id: 'TB-SAMPLE-20491', type: 'Commission', amount: '+2.50 KWD', status: 'Flagged' },
      { id: 'TB-SAMPLE-20507', type: 'Refund', amount: '-4.20 KWD', status: 'Flagged' },
    ]
  },
  ar: {
    headline: 'اعرف قيمة مستحقات مطعمك من طلبات التوصيل',
    subtext: 'نساعد المطاعم في الكويت على مراجعة ملفات تسويات طلبات، ومقارنة الخصومات بسجلات الطلبات، وتجهيز تقرير واضح للفروقات المحتملة.',
    primaryCta: 'راسلني على واتساب',
    secondaryCta: 'احجز مكالمة مجانية',
    microcopy: 'راسلني مباشرة — أراجع كل ملف شخصيًا. بدون التزام، ولا تحتاج لإرسال ملف لبدء المحادثة.',
    trustNote: 'مصمم للمطاعم المستقلة والمقاهي والمطابخ السحابية والسلاسل الصغيرة في الكويت.',
    illustrativeSample: 'عينة توضيحية — ليست نتيجة عميل',
    header: 'مراجعة التسوية — عينة',
    period: 'فترة التسوية: 1–15 يونيو 2025',
    stats: 'طلبات نقاط البيع: 847 | طلبات التسوية: 831 | عناصر محتملة للمراجعة: 16',
    commission: 'العمولة - المتوقعة (25%): 1,245.00 د.ك | المحتسبة: 1,482.50 د.ك | الفرق: 237.50 د.ك',
    status: 'مطلوب مراجعة بشرية',
    tableHeaders: ['رقم الطلب', 'النوع', 'المبلغ', 'الحالة'],
    tableRows: [
      { id: 'TB-SAMPLE-20491', type: 'عمولة', amount: '+2.50 د.ك', status: 'مؤشر عليها' },
      { id: 'TB-SAMPLE-20507', type: 'استرداد', amount: '-4.20 د.ك', status: 'مؤشر عليها' },
    ]
  }
};

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = content[locale];

  const handleWhatsAppClick = () => {
    trackEvent('hero_whatsapp_click');
    window.open(getWhatsAppUrl(locale), '_blank');
  };

  const handleCalendarClick = () => {
    trackEvent('hero_calendar_click');
    window.open(getCalendarUrl(), '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-off-white text-navy overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-dark-navy">
              {t.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-muted leading-relaxed">
              {t.subtext}
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto font-semibold"
              >
                {t.primaryCta}
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={handleCalendarClick}
                className="w-full sm:w-auto font-semibold"
              >
                {t.secondaryCta}
              </Button>
            </div>
            
            <p className="text-sm text-slate-muted italic">
              {t.microcopy}
            </p>
            
            <p className="text-sm font-medium text-emerald bg-mint inline-block px-3 py-1 rounded-full mt-4">
              ✓ {t.trustNote}
            </p>
          </div>

          {/* Illustrative Panel */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-navy rounded-xl shadow-2xl p-6 md:p-8 text-white border border-border-light/20 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber text-dark-navy text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                {t.illustrativeSample}
              </div>
              
              <div className="border-b border-slate-muted/30 pb-4 mb-4">
                <h3 className="text-xl font-semibold">{t.header}</h3>
                <p className="text-slate-muted text-sm mt-1">{t.period}</p>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="bg-dark-navy rounded-lg p-3 border border-border-light/10">
                  <p className="text-slate-muted">{t.stats}</p>
                </div>
                
                <div className="bg-dark-navy rounded-lg p-3 border border-border-light/10">
                  <p className="text-off-white">{t.commission}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber animate-pulse"></span>
                  <span className="text-amber font-medium">{t.status}</span>
                </div>
                
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-muted/30 text-slate-muted">
                        <th className="py-2 px-2 font-medium">{t.tableHeaders[0]}</th>
                        <th className="py-2 px-2 font-medium">{t.tableHeaders[1]}</th>
                        <th className="py-2 px-2 font-medium">{t.tableHeaders[2]}</th>
                        <th className="py-2 px-2 font-medium">{t.tableHeaders[3]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {t.tableRows.map((row, idx) => (
                        <tr key={idx} className="border-b border-slate-muted/10 last:border-0 text-off-white">
                          <td className="py-2 px-2 font-mono text-xs">{row.id}</td>
                          <td className="py-2 px-2">{row.type}</td>
                          <td className="py-2 px-2 text-error font-medium">{row.amount}</td>
                          <td className="py-2 px-2"><span className="bg-error/20 text-error px-2 py-0.5 rounded text-xs">{row.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
