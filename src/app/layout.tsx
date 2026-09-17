import type { Metadata } from 'next';
import { Titan_One, Heebo } from 'next/font/google';
import './globals.css';

const titanOne = Titan_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-titan',
  display: 'swap',
});

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dharshana Studio | Bold Digital Product, Illustration & Creative Engineering',
  description: 'Playful, bold, high-consequence digital products and illustrations. Built for founders and enterprises that refuse mediocrity.',
  keywords: ['Dharshana Studio', 'Creative Agency', 'Illustration', 'Digital Product', 'Bento Grid'],
  openGraph: {
    title: 'Dharshana Studio | Bold Digital Products & Creative Engineering',
    description: 'Playful pictures, bold code, and venture-scale systems engineered on your behalf.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${titanOne.variable} ${heebo.variable} scroll-smooth`}>
      <body className="bg-white text-black font-sans min-h-screen antialiased selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
