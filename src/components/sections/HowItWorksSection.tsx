'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getWhatsAppUrl } from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

interface HowItWorksSectionProps {
  locale: 'en' | 'ar';
}

const content = {
  en: {
    heading: 'How It Works',
    steps: [
      {
        title: 'Message me on WhatsApp',
        desc: 'Send a quick message. No files needed to start.'
      },
      {
        title: 'I\'ll tell you what records to gather',
        desc: 'Usually your Talabat settlement file and POS export.'
      },
      {
        title: 'I compare the records',
        desc: 'Line-by-line comparison of settlement data against available records.'
      },
      {
        title: 'I personally review every flagged item',
        desc: 'No automated alerts without human verification.'
      },
      {
        title: 'You get a clear report',
        desc: 'A claim-ready document you can use with Talabat, or confirmation that your settlements look correct.'
      }
    ],
    cta: 'Message me on WhatsApp'
  },
  ar: {
    heading: 'كيف يعمل',
    steps: [
      {
        title: 'راسلني على واتساب',
        desc: 'أرسل رسالة سريعة. لا حاجة لملفات للبدء.'
      },
      {
        title: 'سأخبرك بالسجلات المطلوبة',
        desc: 'عادةً ما تكون ملف تسوية طلبات وتصدير بيانات نقاط البيع.'
      },
      {
        title: 'أقارن السجلات',
        desc: 'مقارنة سطر بسطر لبيانات التسوية مع السجلات المتاحة.'
      },
      {
        title: 'أراجع شخصيًا كل عنصر',
        desc: 'لا توجد تنبيهات آلية بدون تحقق بشري.'
      },
      {
        title: 'تحصل على تقرير واضح',
        desc: 'مستند جاهز للمطالبة يمكنك استخدامه مع طلبات، أو تأكيد بأن تسوياتك تبدو صحيحة.'
      }
    ],
    cta: 'راسلني على واتساب'
  }
};

export default function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  const t = content[locale];

  const handleWhatsAppClick = () => {
    trackEvent('how_it_works_whatsapp_click');
    window.open(getWhatsAppUrl(locale), '_blank');
  };

  return (
    <section id="how-it-works" className="py-16 bg-white text-navy scroll-mt-16">
      <Container>
        <SectionHeading title={t.heading} align="center" className="mb-16" />
        
        <div className="max-w-2xl mx-auto relative">
          {/* Vertical line connecting steps */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 w-0.5 bg-border-light -translate-x-1/2 rtl:translate-x-1/2 rtl:left-auto rtl:right-6 md:rtl:right-1/2"></div>
          
          <div className="space-y-12">
            {t.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Step Number Circle */}
                  <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-0 md:-translate-y-1/2 w-12 h-12 rounded-full bg-emerald text-white flex items-center justify-center font-bold text-xl z-10 shadow-md rtl:translate-x-1/2 rtl:left-auto rtl:right-6 md:rtl:right-1/2">
                    {idx + 1}
                  </div>
                  
                  {/* Content Desktop */}
                  <div className={`hidden md:block w-1/2 ${isEven ? 'pe-12 text-end' : 'ms-auto ps-12 text-start'}`}>
                    <h3 className="text-xl font-bold text-dark-navy mb-2">{step.title}</h3>
                    <p className="text-slate-muted">{step.desc}</p>
                  </div>
                  
                  {/* Content Mobile */}
                  <div className="md:hidden w-full ps-16 rtl:ps-0 rtl:pe-16 pt-2">
                    <h3 className="text-xl font-bold text-dark-navy mb-2">{step.title}</h3>
                    <p className="text-slate-muted">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button variant="whatsapp" size="lg" onClick={handleWhatsAppClick}>
              {t.cta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
