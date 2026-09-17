'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { X, ArrowRight, ArrowUpRight, CheckCircle, Sparkles } from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: '2D' | '3D' | 'Animation' | 'Murals';
  image: string;
  tagline: string;
  description: string;
  deliverables: string[];
  impact: string;
  year: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'stay-strange-mural',
    title: 'Stay Strange Flagship Mural',
    client: 'Cardiff Creative Quarter',
    category: 'Murals',
    image: '/images/work-1-mural.png',
    tagline: 'Large-scale hand-painted brick mural celebrating counter-culture and creative resilience.',
    description: 'I was commissioned to transform a blank industrial brick wall into a vibrant landmark for the Cardiff creative district. Painted entirely freehand on scaffolding with high-durability weather-resistant acrylics.',
    deliverables: ['12m x 5m Exterior Mural', 'Behind-The-Scenes Film', 'Limited Signed Screenprint Edition'],
    impact: '+250k organic social impressions, official tourist photography landmark',
    year: '2025'
  },
  {
    id: 'doodle-bottle',
    title: 'Repeating Character Bottle',
    client: 'Dharshana Shop',
    category: '2D',
    image: '/images/work-2-bottle.png',
    tagline: '360° seamless monster doodle pattern wrapped around matte-black insulated stainless steel.',
    description: 'I illustrated a seamless repeating pattern of mischievous dungeon characters, vectorised and laser-etched directly onto high-performance drinkware.',
    deliverables: ['Seamless 360° Vector Pattern', 'Packaging Box Design', 'Product Mockup Photography'],
    impact: 'Sold out 3 limited batches in under 48 hours',
    year: '2025'
  },
  {
    id: 'look-up-campaign',
    title: 'LOOK UP — Hygiene Poverty',
    client: 'National Hygiene Week',
    category: '2D',
    image: '/images/work-3-lookup.png',
    tagline: 'High-impact awareness campaign poster blending raw kinetic lettering with purposeful messaging.',
    description: 'I created an eye-catching campaign key visual combining bespoke bubble lettering with hand-drawn daily hygiene item icons to encourage donations across universities and public centers.',
    deliverables: ['National A1 Poster Series', 'Social Media Asset Pack', 'Bus Stop Outdoor Billboards'],
    impact: 'Raised £45,000+ in corporate hygiene supplies',
    year: '2024'
  },
  {
    id: 'nice-character',
    title: 'NICE! Laptop Tech Mascot',
    client: 'Game On Digital',
    category: 'Animation',
    image: '/images/work-4-character.png',
    tagline: 'Animated mischievous retro game console character built for digital dev agency branding.',
    description: 'I designed a lively brand mascot with expressive rubber-hose limbs, holding an 8-bit laptop while accidentally spilling coffee. Rigged for 2D animated stickers and onboarding states.',
    deliverables: ['Character Model Sheets', 'Lottie UI Animations', 'Slack & Discord Sticker Pack'],
    impact: '+64% user onboarding completion for partner dev-tool',
    year: '2024'
  },
  {
    id: 'where-you-to-cymru',
    title: 'Where You To? (Cymru)',
    client: 'Welsh Cultural Council',
    category: '2D',
    image: '/images/work-5-cymru.png',
    tagline: 'Iconic Welsh phrase translated into a skate-punk character wearing a dragon helmet and flat cap.',
    description: 'A personal celebration of modern Welsh street culture and colloquial tongue. Blends Cardiff streetwear sensibilities with classic cartoon illustration.',
    deliverables: ['Screenprinted T-Shirts & Hoodies', 'Skate Deck Graphic', 'Risograph Prints'],
    impact: 'Featured in Welsh National Gallery store',
    year: '2024'
  },
  {
    id: 'snoopy-sculpture',
    title: 'A Dog’s Trail Snoopy Sculpture',
    client: 'Dogs Trust UK & Peanuts',
    category: '3D',
    image: '/images/work-6-snoopy.png',
    tagline: 'Life-sized custom Snoopy sculpture painted with gold lightning bolts and intricate black lineart.',
    description: 'I was selected as one of the featured UK artists to paint a life-size fiberglass Snoopy statue displayed on Cardiff High Street. Featured a black-and-gold lightning mask with hidden doodle creatures.',
    deliverables: ['Custom Hand-Painted Fiberglass Sculpture', 'Charity Auction Piece', 'Public Trail Map Art'],
    impact: 'Auctioned for £12,500 with 100% of proceeds to rescue dogs',
    year: '2023'
  },
  {
    id: 'winner-takes-all',
    title: 'WINNER TAKES ALL! Arcade Installation',
    client: 'Kong Arcade & Bar',
    category: 'Murals',
    image: '/images/work-7-arcade.png',
    tagline: 'Immersive arcade room graphics featuring hand-drawn brush lettering and ultraviolet reactive lineart.',
    description: 'Hand-lettered bold typographic phrases combined with illustrated bone and arcade silhouettes, illuminated by UV and warm neon lighting.',
    deliverables: ['Interior UV Murals', 'Menu Board Lettering', 'VIP Token Coin Designs'],
    impact: 'Key visual driver for venue opening weekend',
    year: '2024'
  },
  {
    id: 'black-screen-records',
    title: 'Black Screen Records Packaging',
    client: 'Black Screen Records (Germany)',
    category: '2D',
    image: '/images/work-8-records.png',
    tagline: 'Limited edition illustrated mailer boxes, enamel pins, slipmats, and vinyl art sleeves.',
    description: 'I created a full merchandise and shipping unboxing experience for one of Europe’s premier video game vinyl soundtrack labels, covered in video game doodling Easter eggs.',
    deliverables: ['Custom Kraft Mailer Box Art', 'Enamel Pin Sets', 'Collectible Holographic Stickers'],
    impact: 'Over 50,000 collectors received the custom unboxing experience',
    year: '2024'
  }
];

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', '2D', '3D', 'Animation', 'Murals'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navigation />

      {/* Header Section */}
      <section className="w-full pt-16 pb-16 px-4 sm:px-6 max-w-[1224px] mx-auto border-b border-black/10">
        <div className="inline-flex items-center gap-2 border-2 border-black rounded-[8px] px-3.5 py-1.5 bg-[#f5f5f5] text-black text-xs font-bold uppercase tracking-wider mb-6 shadow-[2px_2px_0px_0px_#000000]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>03 // Selected Works &amp; Commissions</span>
        </div>

        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl text-black leading-[1.1] mb-6 max-w-4xl">
          Portfolio &amp; Case Studies.
        </h1>

        <p className="text-lg sm:text-xl text-[#424242] font-light leading-relaxed max-w-3xl mb-8">
          A comprehensive archive of commercial murals, packaging universes, character mascots, and high-impact visual campaigns created by Dharshana.
        </p>

        {/* Category Tabs with Crossed Pencils */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <Image
              src="/images/crossed-pencils.png"
              alt="Crossed Pencils"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-[8px] font-sans font-bold text-xs uppercase tracking-wider transition-all border-2 border-black cursor-pointer ${
                    isActive
                      ? 'bg-black text-white shadow-[2px_2px_0px_0px_#424242]'
                      : 'bg-white text-black hover:bg-[#f5f5f5] shadow-[2px_2px_0px_0px_#000000]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="w-full py-16 bg-[#fafafa] border-b border-black/10">
        <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group bg-white border-2 border-black rounded-[8px] overflow-hidden shadow-[5px_5px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Image Container */}
                <div className="relative w-full h-64 sm:h-72 bg-[#f0f0f0] border-b-2 border-black overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white border-2 border-black rounded-[6px] px-2.5 py-1 text-[11px] font-bold text-black shadow-[2px_2px_0px_0px_#000000]">
                    {item.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-black text-white border-2 border-black rounded-[6px] px-2.5 py-1 text-[11px] font-mono font-bold">
                    {item.year}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-xs font-mono font-bold text-[#7f7f7f] uppercase tracking-wider mb-2">
                      Client: {item.client}
                    </div>
                    <h3 className="font-display text-2xl text-black mb-3 leading-snug group-hover:underline">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#424242] leading-relaxed font-light mb-6">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-black/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-black font-semibold">
                      {item.impact}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-black uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>View Deep Dive</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Drawer Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white border-2 border-black rounded-[8px] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000000] z-10 my-8 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 p-2 border-2 border-black rounded-[8px] bg-white hover:bg-[#f5f5f5] text-black shadow-[2px_2px_0px_0px_#000000] cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-4">
                {activeItem.client} • {activeItem.category} • {activeItem.year}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-black mb-3">
                {activeItem.title}
              </h3>

              <div className="relative w-full h-64 sm:h-80 rounded-[8px] border-2 border-black overflow-hidden mb-6 bg-[#f0f0f0]">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-[#424242] leading-relaxed mb-6 font-light">
                {activeItem.description}
              </p>

              <div className="mb-6">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-2">
                  Delivered by Dharshana:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeItem.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-black bg-[#fafafa] p-2 rounded-[6px] border border-black/10">
                      <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-[8px] bg-[#f5f5f5] border-2 border-black mb-6">
                <div className="text-[11px] font-mono font-bold uppercase text-[#7f7f7f]">Project Outcome</div>
                <div className="text-sm font-bold text-black mt-1">{activeItem.impact}</div>
              </div>

              <div className="pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#7f7f7f]">Want to commission a similar project?</span>
                <Link
                  href="/contact"
                  className="bg-black text-white px-6 py-2.5 rounded-[8px] font-bold text-xs uppercase tracking-wider -rotate-1 hover:rotate-0 transition-transform shadow-[3px_3px_0px_0px_#424242]"
                >
                  Commission Dharshana
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Bottom Commission Banner */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1224px] mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-[8px] bg-black text-white border-2 border-black shadow-[6px_6px_0px_0px_#424242] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl mb-3">
                Have a project or wall waiting for art?
              </h2>
              <p className="text-sm sm:text-base text-[#bcbcbc] font-light max-w-xl">
                I take on 2 to 3 select commissions per quarter for commercial murals, brand mascots, and limited packaging runs.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-[8px] hover:bg-[#f5f5f5] transition-all shrink-0 cursor-pointer shadow-[2px_2px_0px_0px_#000000]"
            >
              Start Commission Inquiry
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
