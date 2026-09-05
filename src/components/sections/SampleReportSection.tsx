'use client';

import React, { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getWhatsAppUrl } from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

interface SampleReportSectionProps {
  locale: 'en' | 'ar';
}

const content = {
  en: {
    heading: 'What Your Report Looks Like',
    sampleWording: 'Sample wording only',
    header: 'PayoutCheck Review Report — SAMPLE',
    period: 'Review Period: June 1–15, 2025',
    total: 'Settlement Total: 12,450.00 KWD',
    records: 'Records Reviewed: 847 POS orders, 831 settlement entries',
    potential: 'Potential Items for Review: 16 items, estimated value 237.50 KWD',
    finding: 'Commission recorded at 30% against a supplied contract rate of 25% — requires confirmation',
    status: 'Pending restaurant confirmation',
    cta: 'Message me on WhatsApp'
  },
  ar: {
    heading: 'كيف يبدو تقريرك',
    sampleWording: 'نموذج توضيحي فقط',
    header: 'تقرير مراجعة PayoutCheck — عينة',
    period: 'فترة المراجعة: 1–15 يونيو 2025',
    total: 'إجمالي التسوية: 12,450.00 د.ك',
    records: 'السجلات التي تمت مراجعتها: 847 طلب نقاط بيع، 831 إدخال تسوية',
    potential: 'عناصر محتملة للمراجعة: 16 عنصر، القيمة التقديرية 237.50 د.ك',
    finding: 'العمولة المسجلة بنسبة 30% مقابل نسبة عقد مقدمة تبلغ 25% — يتطلب التأكيد',
    status: 'في انتظار تأكيد المطعم',
    cta: 'راسلني على واتساب'
  }
};

export default function SampleReportSection({ locale }: SampleReportSectionProps) {
  const t = content[locale];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          trackEvent('sample_report_viewed');
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsAppClick = () => {
    trackEvent('sample_report_whatsapp_click');
    window.open(getWhatsAppUrl(locale), '_blank');
  };

  return (
    <section ref={sectionRef} className="py-16 bg-off-white text-navy">
      <Container>
        <SectionHeading title={t.heading} align="center" className="mb-12" />
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl border border-border-light overflow-hidden relative">
            {/* Top decorative bar */}
            <div className="h-4 w-full bg-navy"></div>
            
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-8 border-b border-border-light pb-6">
                <div>
                  <h3 className="text-2xl font-bold text-dark-navy mb-2">{t.header}</h3>
                  <div className="inline-block bg-amber/20 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-amber/30">
                    {t.sampleWording}
                  </div>
                </div>
                <div className="text-sm text-slate-muted font-mono bg-off-white p-3 rounded-lg border border-border-light text-end">
                  <p>{t.period}</p>
                  <p className="font-semibold text-navy mt-1">{t.total}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 text-navy border-l-4 border-emerald ps-3 rtl:border-l-0 rtl:border-r-4 rtl:ps-0 rtl:pe-3">{t.records}</h4>
                <div className="bg-mint/30 border border-emerald/20 p-4 rounded-lg">
                  <p className="font-medium text-emerald mb-1">{t.potential}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm uppercase tracking-wider font-bold text-slate-muted mb-2">Example Finding Row</h4>
                
                <div className="border border-border-light rounded-lg p-5 bg-off-white relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber"></div>
                  
                  <p className="text-navy font-medium mb-3">
                    {t.finding}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-amber"></span>
                    <span className="text-slate-muted">{t.status}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border-t border-border-light p-4 text-center">
              <span className="text-xs text-slate-muted italic opacity-75">{t.sampleWording}</span>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick}>
              {t.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
