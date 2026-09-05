'use client';

import React from 'react';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { pricingTiers, disclaimer, getWhatsAppUrl } from '@/config/site.config';

interface PricingSectionProps {
  locale: 'en' | 'ar';
}

export default function PricingSection({ locale }: PricingSectionProps) {
  const isAr = locale === 'ar';

  return (
    <section id="pricing" className="py-20 bg-white">
      <Container>
        <SectionHeading
          title={isAr ? 'أسعار بسيطة وشفافة' : 'Simple, Transparent Pricing'}
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {pricingTiers.map((tier, idx) => (
            <Card 
              key={idx} 
              className={`flex flex-col h-full relative ${tier.highlight ? 'border-2 border-emerald shadow-lg' : ''}`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 start-1/2 -translate-x-1/2">
                  <Badge variant="emerald">
                    {isAr ? 'الأكثر شعبية' : 'Most Popular'}
                  </Badge>
                </div>
              )}
              
              
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold text-navy mb-2">{isAr ? tier.nameAr : tier.nameEn}</h3>
                <div className="text-3xl font-extrabold text-navy mb-2">
                  {isAr ? tier.priceAr : tier.priceEn}
                </div>
                <p className="text-slate text-sm">{isAr ? tier.descriptionAr : tier.descriptionEn}</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {(isAr ? tier.featuresAr : tier.featuresEn).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald mt-0.5">✓</span>
                    <span className="text-sm text-navy">{feat}</span>
                  </li>
                ))}
              </ul>
              
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center flex flex-col items-center">
          <Button variant="whatsapp" href={getWhatsAppUrl(locale)} className="mb-6">
            {isAr ? 'تواصل معي عبر واتساب للبدء' : 'Contact me on WhatsApp to start'}
          </Button>
          <p className="text-xs text-slate max-w-2xl">
            {isAr ? disclaimer.ar : disclaimer.en}
          </p>
        </div>
      </Container>
    </section>
  );
}
