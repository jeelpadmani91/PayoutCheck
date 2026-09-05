'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';

interface WhatWeReviewSectionProps {
  locale: 'en' | 'ar';
}

const content = {
  en: {
    heading: 'What PayoutCheck Reviews',
    note: 'Not every difference is an error. Every flagged item is reviewed before it\'s included in a client report.',
    cards: [
      {
        title: 'Commission Rate Comparison',
        desc: 'Compares applied rates against contract terms',
      },
      {
        title: 'Cancelled Order Review',
        desc: 'Checks if cancelled-order adjustments match records',
      },
      {
        title: 'Refund Review',
        desc: 'Verifies refund deductions against actual refund records',
      },
      {
        title: 'Promotion & Marketing Review',
        desc: 'Reviews promo/marketing deductions for accuracy',
      },
      {
        title: 'Duplicate & Unusual Adjustments',
        desc: 'Flags duplicate charges or unexpected line items',
      },
      {
        title: 'Settlement-to-Bank Comparison',
        desc: 'Compares net settlement amount with bank deposit',
      },
    ]
  },
  ar: {
    heading: 'ما الذي يراجعه PayoutCheck',
    note: 'ليس كل اختلاف يعتبر خطأ. تتم مراجعة كل عنصر يتم التأشير عليه قبل تضمينه في تقرير العميل.',
    cards: [
      {
        title: 'مقارنة نسبة العمولة',
        desc: 'مقارنة النسب المطبقة مع شروط العقد',
      },
      {
        title: 'مراجعة الطلبات الملغاة',
        desc: 'التحقق مما إذا كانت تسويات الطلبات الملغاة تطابق السجلات',
      },
      {
        title: 'مراجعة الاستردادات',
        desc: 'التحقق من خصومات الاسترداد مقابل سجلات الاسترداد الفعلية',
      },
      {
        title: 'مراجعة العروض الترويجية والتسويق',
        desc: 'مراجعة دقة خصومات العروض الترويجية والتسويق',
      },
      {
        title: 'التسويات المكررة وغير المعتادة',
        desc: 'تحديد الرسوم المكررة أو العناصر غير المتوقعة',
      },
      {
        title: 'مقارنة التسوية مع البنك',
        desc: 'مقارنة صافي مبلغ التسوية مع الإيداع البنكي',
      },
    ]
  }
};

const icons = [
  <svg key="1" className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>,
  <svg key="2" className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
  <svg key="3" className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"></path></svg>,
  <svg key="4" className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>,
  <svg key="5" className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>,
  <svg key="6" className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>,
];

export default function WhatWeReviewSection({ locale }: WhatWeReviewSectionProps) {
  const t = content[locale];

  return (
    <section className="py-16 bg-off-white text-navy">
      <Container>
        <SectionHeading title={t.heading} align="center" className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.cards.map((card, idx) => (
            <Card key={idx} className="flex flex-col p-6 hover:shadow-md transition-shadow">
              <div className="bg-mint w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {icons[idx]}
              </div>
              <h3 className="text-xl font-bold mb-2 text-dark-navy">{card.title}</h3>
              <p className="text-slate-muted">{card.desc}</p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm italic text-slate-muted bg-white p-4 rounded-lg border border-border-light shadow-sm">
            {t.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
