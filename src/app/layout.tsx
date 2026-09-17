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
  title: 'Dharshana | Commercial Illustrator, Muralist & Creative Technologist',
  description: 'Personal portfolio of Dharshana. Playful pictures, large-scale murals, brand mascots, vinyl packaging, and creative engineering for brands that refuse mediocrity.',
  keywords: ['Dharshana', 'Commercial Illustrator', 'Muralist', 'Creative Technologist', 'Personal Portfolio', 'Character Design', 'Cardiff Art', 'Bento Grid'],
  openGraph: {
    title: 'Dharshana | Commercial Illustrator, Muralist & Creative Technologist',
    description: 'Playful pictures, bold code, and category-defining visual worlds created on your behalf.',
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
