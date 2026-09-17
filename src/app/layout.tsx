import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aether Studio | Venture-Scale Digital Products & AI Systems',
  description: 'Aether is a selective digital product and AI engineering studio partnering with venture-backed founders and category leaders.',
  keywords: ['AI Studio', 'Digital Product Agency', 'Next.js Engineering', 'Autonomous AI Agents', 'Design Systems'],
  openGraph: {
    title: 'Aether Studio | Venture-Scale Digital Products & AI Systems',
    description: 'We engineer venture-scale digital products and autonomous AI systems for teams that refuse mediocrity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08090d] text-[#f4f4f6] min-h-screen antialiased selection:bg-[#d0ab86] selection:text-[#08090d]">
        {children}
      </body>
    </html>
  );
}
