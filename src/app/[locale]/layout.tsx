import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site.config';
import { isValidLocale, locales } from '@/i18n/settings';
import { LocaleProvider } from '@/i18n/context';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileWhatsAppCTA from '@/components/layout/MobileWhatsAppCTA';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import '@/app/globals.css';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata(
  { params: { locale } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  if (!isValidLocale(locale)) return {};

  const baseUrl = 'https://payoutcheck.com'; // TODO: Update with real URL

  return {
    title: {
      template: '%s | PayoutCheck',
      default: locale === 'ar' ? siteConfig.seo.titleDefaultAr : siteConfig.seo.titleDefault,
    },
    description: locale === 'ar' ? siteConfig.seo.descriptionDefaultAr : siteConfig.seo.descriptionDefault,
    openGraph: {
      title: locale === 'ar' ? siteConfig.seo.titleDefaultAr : siteConfig.seo.titleDefault,
      description: locale === 'ar' ? siteConfig.seo.descriptionDefaultAr : siteConfig.seo.descriptionDefault,
      siteName: 'PayoutCheck',
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function LocaleLayout({ children, params: { locale } }: Props) {
  if (!isValidLocale(locale)) {
    notFound();
  }

  const isRtl = locale === 'ar';

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'}>
      <body className={`${isRtl ? 'font-arabic' : 'font-sans'} text-navy bg-off-white min-h-screen flex flex-col`}>
        <LocaleProvider locale={locale as any}>
          <AnnouncementBar locale={locale as any} />
          <Header locale={locale as any} />
          <main className="flex-grow has-sticky-cta">
            {children}
          </main>
          <Footer locale={locale as any} />
          <MobileWhatsAppCTA locale={locale as any} />
        </LocaleProvider>
      </body>
    </html>
  );
}
