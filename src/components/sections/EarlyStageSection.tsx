'use client';

import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { getWhatsAppUrl, siteConfig } from '@/config/site.config';

interface EarlyStageSectionProps {
  locale: 'en' | 'ar';
}

export default function EarlyStageSection({ locale }: EarlyStageSectionProps) {
  const isAr = locale === 'ar';

  return (
    <section className="py-20 bg-off-white">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading
            title={isAr ? 'بناه مؤسس واحد، بشفافية كاملة.' : 'Built by one founder, with full transparency.'}
          />
          <p className="text-lg md:text-xl text-slate mt-6 mb-10 leading-relaxed">
            {isAr
              ? 'أعمل حاليًا مع عدد صغير من المطاعم في الكويت أثناء تطوير PayoutCheck. لا أنشر أسماء العملاء أو مبالغ الاسترداد أو الشهادات بدون إذن. أولويتي الآن هي إنتاج مراجعات دقيقة ومتأنية — وليس ادعاءات النمو.'
              : 'I\'m currently working with a small number of Kuwait restaurants as I build out PayoutCheck. I don\'t publish client names, recovery amounts, or testimonials without permission. My priority right now is producing careful, accurate reviews — not growth claims.'}
          </p>

          <div className="bg-white rounded-2xl shadow-sm border border-border-light p-6 md:p-10 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-left">
              <div className="relative w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-emerald/20 shadow-md">
                <Image
                  src="/founder/jeel-padmani.png"
                  alt="Jeel Padmani"
                  fill
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald mb-2">
                  {isAr ? 'المؤسس' : 'Founder'}
                </p>
                <h3 className="text-3xl font-bold text-dark-navy mb-3">{siteConfig.founder}</h3>
                <p className="text-base text-slate mb-6">
                  {isAr
                    ? 'إذا كنت بحاجة إلى أي معلومات، اسألني مباشرة.'
                    : 'If you need any information, ask me directly.'}
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-sm text-slate">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border-light bg-off-white px-4 py-3 hover:border-emerald hover:text-emerald transition-colors"
                  >
                    <span className="block text-xs uppercase tracking-wide text-slate/70">WhatsApp</span>
                    <span className="font-medium">+91 93137 28387</span>
                  </a>
                  <a
                    href={`mailto:${siteConfig.salesEmail}`}
                    className="rounded-xl border border-border-light bg-off-white px-4 py-3 hover:border-emerald hover:text-emerald transition-colors"
                  >
                    <span className="block text-xs uppercase tracking-wide text-slate/70">Email</span>
                    <span className="font-medium">{siteConfig.salesEmail}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            {[
              { en: 'Personal review of every file', ar: 'مراجعة شخصية لكل ملف' },
              { en: 'No hidden fees or upsells', ar: 'بدون رسوم مخفية' },
              { en: 'Clear about what I can and can\'t guarantee', ar: 'واضح بشأن ما يمكنني وما لا يمكنني ضمانه' },
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald/20 flex items-center justify-center text-emerald">
                  ✓
                </div>
                <span className="font-medium text-navy">{isAr ? point.ar : point.en}</span>
              </div>
            ))}
          </div>

          <Button variant="whatsapp" href={getWhatsAppUrl(locale)}>
            {isAr ? 'راسلني لتكون من المطاعم الأولى' : 'Message Me to Be an Early Restaurant'}
          </Button>
        </div>
      </Container>
    </section>
  );
}
