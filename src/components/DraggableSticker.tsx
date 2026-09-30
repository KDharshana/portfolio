'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface DraggableStickerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  initialRotate?: number;
  badgeText?: string;
}

export default function DraggableSticker({
  src,
  alt,
  width,
  height,
  className = '',
  initialRotate = 0,
  badgeText,
}: DraggableStickerProps) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragElastic={0.2}
      whileHover={{ scale: 1.08, rotate: initialRotate - 3, cursor: 'grab' }}
      whileTap={{ scale: 0.95, cursor: 'grabbing' }}
      whileDrag={{ scale: 1.12, rotate: initialRotate + 5, zIndex: 50 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      initial={{ rotate: initialRotate }}
      className={`inline-block relative select-none touch-none ${className}`}
      title="Drag me around the page!"
    >
      <div
        className={`relative transition-all duration-150 ${
          isDragging ? 'drop-shadow-[8px_8px_0px_#000000]' : 'hover:drop-shadow-[4px_4px_0px_#000000]'
        }`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          draggable={false}
          className="pointer-events-none select-none object-contain"
        />
        {badgeText && (
          <span className="absolute -bottom-2 -right-2 bg-white border border-black rounded px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase shadow-[1px_1px_0px_0px_#000000] pointer-events-none">
            {badgeText}
          </span>
        )}
      </div>
    </motion.div>
  );
}
