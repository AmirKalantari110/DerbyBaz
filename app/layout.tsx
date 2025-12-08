import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'دربی‌باز - مسابقه پیش‌بینی فوتبال',
  description: 'جایزه ۱ میلیون تومان برای بهترین پیش‌بینی دربی!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
