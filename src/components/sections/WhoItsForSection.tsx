'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

interface WhoItsForSectionProps {
  locale: 'en' | 'ar';
}

const content = {
  en: {
    heading: 'Who PayoutCheck Is For',
    personas: [
      {
        title: 'Restaurant Owner',
        desc: 'You run the restaurant and don\'t have time to audit every settlement line.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        )
      },
      {
        title: 'General Manager',
        desc: 'You oversee daily operations and need clear financial data for the owner.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        )
      },
      {
        title: 'Accountant / Bookkeeper',
        desc: 'You need verified, organized settlement data for monthly reconciliation.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        )
      },
      {
        title: 'Small Restaurant Group (2-5 branches)',
        desc: 'You want consistent settlement review across all branches.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        )
      }
    ]
  },
  ar: {
    heading: 'لمن PayoutCheck',
    personas: [
      {
        title: 'مالك المطعم',
        desc: 'أنت تدير المطعم وليس لديك وقت لمراجعة كل سطر في التسوية.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        )
      },
      {
        title: 'المدير العام',
        desc: 'أنت تشرف على العمليات اليومية وتحتاج إلى بيانات مالية واضحة للمالك.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        )
      },
      {
        title: 'محاسب / ماسك الدفاتر',
        desc: 'تحتاج إلى بيانات تسوية تم التحقق منها ومنظمة للتسوية الشهرية.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
        )
      },
      {
        title: 'مجموعة مطاعم صغيرة (2-5 فروع)',
        desc: 'تريد مراجعة تسوية متسقة عبر جميع الفروع.',
        icon: (
          <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        )
      }
    ]
  }
};

export default function WhoItsForSection({ locale }: WhoItsForSectionProps) {
  const t = content[locale];

  return (
    <section className="py-16 bg-white text-navy">
      <Container>
        <SectionHeading title={t.heading} align="center" className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.personas.map((persona, idx) => (
            <Card key={idx} className="flex flex-col md:flex-row gap-6 p-6 md:p-8 hover:border-emerald/50 transition-colors">
              <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-off-white border border-border-light shadow-sm">
                {persona.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-dark-navy">{persona.title}</h3>
                <p className="text-slate-muted leading-relaxed">{persona.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
