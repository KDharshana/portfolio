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
  description: 'Personal portfolio of Dharshana (KDharshana / Dharshan Balaji). 3rd year Computer Science undergraduate based in Salem, Tamil Nadu. Creator of Tonarc on F-Droid, full-stack Bun/React 19 engineer, and local GraphRAG AI developer.',
  keywords: ['Dharshana', 'KDharshana', 'Dharshan Balaji', 'Computer Science Student', 'Software Engineering Intern', 'Android Developer', 'Kotlin', 'Jetpack Compose', 'F-Droid', 'Bun', 'React 19', 'Next.js', 'Neo4j', 'Ollama', 'Salem Tamil Nadu'],
  openGraph: {
    title: 'Dharshana | 3rd Year Computer Science Student & Software Engineer',
    description: 'Modern Android apps on F-Droid, Bun 1.3 & React 19 full-stack platforms, and local GraphRAG AI agents.',
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
