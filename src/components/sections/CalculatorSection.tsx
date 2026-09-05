'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getWhatsAppUrl, disclaimer } from '@/config/site.config';
import { trackEvent } from '@/lib/analytics';

const calculatorSchema = z.object({
  salesRange: z.string().min(1),
  commissionRate: z.number().min(1).max(50),
  months: z.string().min(1),
  branches: z.number().min(1).max(5),
  deliveryMethod: z.string().min(1),
});

type CalculatorValues = z.infer<typeof calculatorSchema>;

interface CalculatorSectionProps {
  locale: 'en' | 'ar';
}

const salesRanges = [
  { value: '3500', labelEn: '2,000-5,000 KWD', labelAr: '٢,٠٠٠-٥,٠٠٠ دينار' },
  { value: '7500', labelEn: '5,000-10,000 KWD', labelAr: '٥,٠٠٠-١٠,٠٠٠ دينار' },
  { value: '15000', labelEn: '10,000-20,000 KWD', labelAr: '١٠,٠٠٠-٢٠,٠٠٠ دينار' },
  { value: '25000', labelEn: '20,000-30,000 KWD', labelAr: '٢٠,٠٠٠-٣٠,٠٠٠ دينار' },
];

const monthsOptions = [
  { value: '1', labelEn: '1 Month', labelAr: 'شهر واحد' },
  { value: '2', labelEn: '2 Months', labelAr: 'شهران' },
  { value: '3', labelEn: '3 Months', labelAr: '٣ أشهر' },
  { value: '6', labelEn: '6 Months', labelAr: '٦ أشهر' },
  { value: '12', labelEn: '12 Months', labelAr: '١٢ شهر' },
];

const deliveryOptions = [
  { value: 'talabat', labelEn: 'Talabat delivery', labelAr: 'توصيل طلبات' },
  { value: 'own', labelEn: 'Own delivery', labelAr: 'توصيل خاص' },
  { value: 'both', labelEn: 'Both', labelAr: 'كلاهما' },
];

export default function CalculatorSection({ locale }: CalculatorSectionProps) {
  const [result, setResult] = useState<number | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<CalculatorValues>({
    resolver: zodResolver(calculatorSchema),
    mode: 'onBlur',
  });

  const isAr = locale === 'ar';

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (!hasStarted && type === 'change') {
        setHasStarted(true);
        trackEvent('calculator_started');
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, hasStarted]);

  const onSubmit = (data: CalculatorValues) => {
    const baseSales = parseFloat(data.salesRange);
    const commRate = data.commissionRate / 100;
    const months = parseInt(data.months, 10);
    const branches = data.branches;
    
    const estimatedCommission = baseSales * commRate * months * branches;
    setResult(estimatedCommission);
    trackEvent('calculator_completed');
  };

  const whatsappMessageEn = `Hi, I estimated ${result} KWD in commission over ${watch('months')} months. I'd like to discuss a review.`;
  const whatsappMessageAr = `مرحباً، لقد قدرت عمولتي بـ ${result} دينار على مدار ${watch('months')} أشهر. أود مناقشة مراجعة.`;

  return (
    <section id="calculator" className="py-20 bg-white">
      <Container>
        <SectionHeading
          title={isAr ? 'قدّر مراجعتك' : 'Estimate Your Review'}
        />
        
        <div className="max-w-2xl mx-auto mt-10 bg-off-white p-6 md:p-10 rounded-2xl shadow-sm border border-border-light">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy">
                {isAr ? 'نطاق مبيعات طلبات الشهرية' : 'Monthly Talabat Sales Range'}
              </label>
              <select
                {...register('salesRange')}
                className="w-full p-3 border border-border-light rounded-lg bg-white"
                dir={isAr ? 'rtl' : 'ltr'}
              >
                <option value="">{isAr ? 'اختر النطاق...' : 'Select range...'}</option>
                {salesRanges.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isAr ? opt.labelAr : opt.labelEn}
                  </option>
                ))}
              </select>
              {errors.salesRange && <p className="text-error text-sm">{isAr ? 'مطلوب' : 'Required'}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy">
                {isAr ? 'نسبة العمولة الحالية (%)' : 'Current Commission Rate (%)'}
              </label>
              <input
                type="number"
                step="0.5"
                {...register('commissionRate', { valueAsNumber: true })}
                className="w-full p-3 border border-border-light rounded-lg bg-white"
                placeholder="15"
                dir={isAr ? 'rtl' : 'ltr'}
              />
              {errors.commissionRate && <p className="text-error text-sm">{isAr ? 'يجب أن يكون بين ١ و ٥٠' : 'Must be between 1 and 50'}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy">
                {isAr ? 'الأشهر للمراجعة' : 'Months to Review'}
              </label>
              <select
                {...register('months')}
                className="w-full p-3 border border-border-light rounded-lg bg-white"
                dir={isAr ? 'rtl' : 'ltr'}
              >
                <option value="">{isAr ? 'اختر الأشهر...' : 'Select months...'}</option>
                {monthsOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isAr ? opt.labelAr : opt.labelEn}
                  </option>
                ))}
              </select>
              {errors.months && <p className="text-error text-sm">{isAr ? 'مطلوب' : 'Required'}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy">
                {isAr ? 'عدد الفروع' : 'Number of Branches'}
              </label>
              <input
                type="number"
                {...register('branches', { valueAsNumber: true })}
                className="w-full p-3 border border-border-light rounded-lg bg-white"
                placeholder="1"
                dir={isAr ? 'rtl' : 'ltr'}
              />
              {errors.branches && <p className="text-error text-sm">{isAr ? 'يجب أن يكون بين ١ و ٥' : 'Must be between 1 and 5'}</p>}
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-navy">
                {isAr ? 'طريقة التوصيل' : 'Delivery Method'}
              </label>
              <select
                {...register('deliveryMethod')}
                className="w-full p-3 border border-border-light rounded-lg bg-white"
                dir={isAr ? 'rtl' : 'ltr'}
              >
                <option value="">{isAr ? 'اختر طريقة...' : 'Select method...'}</option>
                {deliveryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {isAr ? opt.labelAr : opt.labelEn}
                  </option>
                ))}
              </select>
              {errors.deliveryMethod && <p className="text-error text-sm">{isAr ? 'مطلوب' : 'Required'}</p>}
            </div>

            <Button type="submit" variant="primary" className="w-full mt-4">
              {isAr ? 'احسب الآن' : 'Calculate Now'}
            </Button>
          </form>

          {result !== null && (
            <div className="mt-8 p-6 bg-mint/30 rounded-xl border border-emerald/20 text-center">
              <h3 className="text-xl font-bold text-navy mb-2">
                {isAr
                  ? `العمولة الأساسية المقدرة لهذه الفترة: ${result.toLocaleString()} دينار`
                  : `Estimated base commission for this period: ${result.toLocaleString()} KWD`}
              </h3>
              <p className="text-sm text-slate mb-6">
                {isAr
                  ? 'هذه هي العمولة المتوقعة بناءً على مدخلاتك — وليست توقعًا للتناقضات أو الخسائر.'
                  : 'This is the expected commission based on your inputs — not a prediction of discrepancies or losses.'}
              </p>
              <Button
                variant="whatsapp"
                href={getWhatsAppUrl(locale, isAr ? whatsappMessageAr : whatsappMessageEn)}
                className="w-full"
              >
                {isAr ? 'راسلني بخصوص أرقامي' : 'Message Me About My Numbers'}
              </Button>
            </div>
          )}

          <p className="text-xs text-slate mt-6 text-center">
            {isAr ? disclaimer.ar : disclaimer.en}
          </p>
        </div>
      </Container>
    </section>
  );
}
