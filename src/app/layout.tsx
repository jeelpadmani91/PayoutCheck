import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PayoutCheck',
  description: 'Talabat Settlement Review for Kuwait Restaurants',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
