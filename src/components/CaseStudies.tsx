'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, CheckCircle } from 'lucide-react';

interface CaseStudiesProps {
  onOpenApplication: (preselectedTier?: string) => void;
}

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
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'stay-strange-mural',
    title: 'Stay Strange Flagship Mural',
    client: 'Cardiff Creative Quarter',
    category: 'Murals',
    image: '/images/work-1-mural.png',
    tagline: 'Large-scale hand-painted brick mural celebrating counter-culture and creative resilience.',
    description: 'Commissioned to transform a blank industrial brick wall into a vibrant landmark for the Cardiff creative district. Painted entirely freehand with high-durability weather-resistant acrylics.',
    deliverables: ['12m x 5m Exterior Mural', 'Behind-The-Scenes Video', 'Limited Screenprint Run'],
    impact: '+250k organic social impressions, official tourist photography landmark'
  },
  {
    id: 'doodle-bottle',
    title: 'Repeating Character Bottle',
    client: 'Alternative Aesthetics Shop',
    category: '2D',
    image: '/images/work-2-bottle.png',
    tagline: '360° seamless monster doodle pattern wrapped around matte-black insulated stainless steel.',
    description: 'Engineered a seamless repeating pattern of Colin Kersley’s signature dungeon characters, vectorised and laser-etched directly onto high-performance drinkware.',
    deliverables: ['Seamless 360° Pattern Vector', 'Packaging Box Design', 'Product Mockup Photography'],
    impact: 'Sold out 3 limited batches in under 48 hours'
  },
  {
    id: 'look-up-campaign',
    title: 'LOOK UP — Hygiene Poverty',
    client: 'National Hygiene Week',
    category: '2D',
    image: '/images/work-3-lookup.png',
    tagline: 'High-impact awareness campaign poster blending raw kinetic lettering with purposeful messaging.',
    description: 'Created an eye-catching campaign key visual combining bespoke bubble lettering with hand-drawn daily hygiene item icons to encourage donations across universities and public centers.',
    deliverables: ['National A1 Poster Series', 'Social Media Asset Pack', 'Bus Stop Outdoor Billboards'],
    impact: 'Raised £45,000+ in corporate hygiene supplies'
  },
  {
    id: 'nice-character',
    title: 'NICE! Laptop Tech Mascot',
    client: 'Game On Digital',
    category: 'Animation',
    image: '/images/work-4-character.png',
    tagline: 'Animated mischievous retro game console character built for digital dev agency branding.',
    description: 'Designed a lively brand mascot with expressive rubber-hose limbs, holding an 8-bit laptop while accidentally spilling coffee. Rigged for 2D animated stickers and onboarding states.',
    deliverables: ['Character Model Sheets', 'Lottie UI Animations', 'Slack & Discord Sticker Pack'],
    impact: '+64% user onboarding completion for partner dev-tool'
  },
  {
    id: 'where-you-to-cymru',
    title: 'Where You To? (Cymru)',
    client: 'Welsh Cultural Council',
    category: '2D',
    image: '/images/work-5-cymru.png',
    tagline: 'Iconic Welsh phrase translated into a skate-punk character wearing a dragon helmet and flat cap.',
    description: 'A celebration of modern Welsh street culture and colloquial tongue. Blends Cardiff streetwear sensibilities with classic cartoon illustration.',
    deliverables: ['Screenprinted T-Shirts & Hoodies', 'Skate Deck Graphic', 'Risograph Prints'],
    impact: 'Featured in Welsh National Gallery store'
  },
  {
    id: 'snoopy-sculpture',
    title: 'A Dog’s Trail Snoopy Sculpture',
    client: 'Dogs Trust UK & Peanuts',
    category: '3D',
    image: '/images/work-6-snoopy.png',
    tagline: 'Life-sized custom Snoopy sculpture painted with gold lightning bolts and intricate black lineart.',
    description: 'Selected as one of the featured UK artists to paint a life-size fiberglass Snoopy statue displayed prominently on Cardiff High Street. Featured a black-and-gold lightning mask with hidden doodle creatures.',
    deliverables: ['Custom Hand-Painted Fiberglass Sculpture', 'Charity Auction Piece', 'Public Trail Map Art'],
    impact: 'Auctioned for £12,500 with 100% of proceeds to rescue dogs'
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
    impact: 'Key visual driver for venue opening weekend'
  },
  {
    id: 'black-screen-records',
    title: 'Black Screen Records Packaging',
    client: 'Black Screen Records (Germany)',
    category: '2D',
    image: '/images/work-8-records.png',
    tagline: 'Limited edition illustrated mailer boxes, enamel pins, slipmats, and vinyl art sleeves.',
    description: 'Created a full merchandise and shipping unboxing experience for one of Europe’s premier video game vinyl soundtrack labels, covered in video game doodling Easter eggs.',
    deliverables: ['Custom Kraft Mailer Box Art', 'Enamel Pin Sets', 'Collectible Holographic Stickers'],
    impact: 'Over 50,000 collectors received the custom unboxing experience'
  }
];

export default function CaseStudies({ onOpenApplication }: CaseStudiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = ['All', '2D', '3D', 'Animation', 'Murals'];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="work" className="w-full bg-white pt-12 pb-24 border-t border-black/10">
      {/* Category Tabs with Crossed Pencils */}
      <div className="flex flex-col items-center justify-center mb-12 px-4">
        {/* Crossed Pencils Icon */}
        <div className="relative w-12 h-12 mb-4">
          <Image
            src="/images/crossed-pencils.png"
            alt="Crossed Pencils"
            fill
            className="object-contain"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-6 sm:gap-10 font-sans text-sm sm:text-base font-medium">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'text-black font-bold underline underline-offset-8 decoration-2'
                  : 'text-black/50 hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Seamless Edge-to-Edge Bento Grid */}
      <div className="w-full max-w-[1440px] mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-square bg-[#f5f5f5] overflow-hidden cursor-pointer rounded-sm border border-black/10 hover:border-black transition-all"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#bcbcbc]">
                    {item.client}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white text-black text-[11px] font-bold">
                    {item.category}
                  </span>
                </div>

                <div>
                  <h4 className="font-display text-xl text-white mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#bcbcbc] line-clamp-2 leading-relaxed font-light mb-4">
                    {item.tagline}
                  </p>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-white underline underline-offset-4">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-white border-2 border-black rounded-[8px] p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000000] z-10 my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 p-2 rounded-[8px] border-2 border-black bg-white hover:bg-[#f5f5f5] text-black shadow-[2px_2px_0px_0px_#000000]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block border-2 border-black rounded-[8px] px-3 py-1 text-xs font-bold bg-[#f5f5f5] mb-4">
                {activeItem.client} • {activeItem.category}
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-black mb-3">
                {activeItem.title}
              </h3>

              {/* Image Preview */}
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

              {/* Shipped deliverables */}
              <div className="mb-6">
                <div className="font-bold text-xs uppercase tracking-wider text-black mb-2">
                  Scope of Delivery:
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

              {/* Impact callout */}
              <div className="p-4 rounded-[8px] bg-[#f5f5f5] border-2 border-black mb-6">
                <div className="text-[11px] font-mono font-bold uppercase text-[#7f7f7f]">Verified Outcome</div>
                <div className="text-sm font-bold text-black mt-1">{activeItem.impact}</div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t-2 border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-[#7f7f7f]">Commission a similar engagement</span>
                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenApplication();
                  }}
                  className="bg-black text-white px-6 py-2.5 rounded-[8px] font-bold text-xs uppercase tracking-wider -rotate-1 hover:rotate-0 transition-transform shadow-[3px_3px_0px_0px_#424242]"
                >
                  Let&apos;s Play!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
