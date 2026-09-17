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
  title: 'Alternative Aesthetics | Bold Digital Product & AI Engineering Studio',
  description: 'Playful, bold, high-consequence digital products and autonomous AI systems. Built for founders and enterprises that refuse mediocrity.',
  keywords: ['Bespoke Agency', 'Alternative Aesthetics', 'AI Systems', 'Next.js', 'Bento Grid', 'Venture Products'],
  openGraph: {
    title: 'Alternative Aesthetics | Bold Digital Products & AI Systems',
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
