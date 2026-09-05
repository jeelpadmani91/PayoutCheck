'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { getWhatsAppUrl, getCalendarUrl } from '@/config/site.config';

interface FinalCTASectionProps {
  locale: 'en' | 'ar';
}

export default function FinalCTASection({ locale }: FinalCTASectionProps) {
  const isAr = locale === 'ar';

  return (
    <section className="py-24 bg-navy text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            {isAr ? 'تسويتك القادمة يجب أن تكون مفهومة.' : 'Your next payout should be understandable.'}
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button 
              variant="whatsapp" 
              href={getWhatsAppUrl(locale)}
              className="w-full sm:w-auto text-lg px-8 py-4"
            >
              {isAr ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
            </Button>
            <Button 
              variant="secondary" 
              href={getCalendarUrl()}
              className="w-full sm:w-auto text-lg px-8 py-4 !border-white !text-white hover:!bg-white/10"
            >
              {isAr ? 'احجز مكالمة مجانية' : 'Book a Free 15-Min Call'}
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-slate-300 opacity-80">
            {isAr 
              ? 'خدمة مستقلة. غير تابعة لطلبات. لا ضمان للاسترداد.' 
              : 'Independent service. No Talabat affiliation. No guarantee of recovery.'}
          </p>
        </div>
      </Container>
    </section>
  );
}
