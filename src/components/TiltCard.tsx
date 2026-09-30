'use client';

import { useState, useRef, MouseEvent, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = '',
  onClick,
  maxTilt = 5,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top; // y position within element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const shadowX = Math.round(5 + tilt.y * 0.6);
  const shadowY = Math.round(5 - tilt.x * 0.6);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x.toFixed(2)}deg) rotateY(${tilt.y.toFixed(2)}deg) translateZ(8px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        boxShadow: isHovered
          ? `${shadowX}px ${shadowY}px 0px 0px #000000`
          : '5px 5px 0px 0px #000000',
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.1s ease-out'
          : 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
      }}
      className={`group bg-white border-2 border-black rounded-[8px] overflow-hidden flex flex-col justify-between cursor-pointer select-none active:translate-x-[2px] active:translate-y-[2px] ${className}`}
    >
      {children}
    </div>
  );
}
