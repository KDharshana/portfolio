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
  title: 'Dharshana | 3rd Year Computer Science Student & Software Engineer',
  description: 'Personal portfolio of Dharshana. 3rd year Computer Science undergraduate specialising in Distributed Systems, Full-Stack Web, and AI Engineering. Seeking SWE internships.',
  keywords: ['Dharshana', 'Computer Science Student', 'Software Engineering Intern', 'Full Stack Developer', 'Distributed Systems', 'Next.js', 'Go', 'Cardiff University'],
  openGraph: {
    title: 'Dharshana | 3rd Year Computer Science Student & Software Engineer',
    description: 'High-performance distributed systems, creative frontend applications, and AI pipelines. Bold code that works on your behalf.',
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
