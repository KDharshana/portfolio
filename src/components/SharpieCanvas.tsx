'use client';

import { useRef, useState, useEffect, MouseEvent, TouchEvent } from 'react';
import { RotateCcw, Download, Check, Sparkles, PenTool, Eraser } from 'lucide-react';

export default function SharpieCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(3.5);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isTagged, setIsTagged] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions based on display size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
  }, []);

  const startDrawing = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: MouseEvent<HTMLCanvasElement> | TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    setIsTagged(false);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'dharshana-desk-tag.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleTagDesk = () => {
    if (!hasDrawn) return;
    setIsTagged(true);
    setTimeout(() => {
      setIsTagged(false);
    }, 3500);
  };

  return (
    <div className="w-full bg-white border-2 border-black rounded-[8px] p-6 shadow-[5px_5px_0px_0px_#000000] relative">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b-2 border-black/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black">
            <PenTool className="w-3.5 h-3.5" />
            <span>Tag The Desk // Recruiter &amp; Visitor Sketchpad</span>
          </div>
          <p className="text-xs text-[#7f7f7f] mt-0.5 font-light">
            Grab a virtual Sharpie and leave a signature, doodle, or note on the desk.
          </p>
        </div>

        {/* Drawing Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setColor('#000000');
              setLineWidth(3.5);
            }}
            className={`px-2.5 py-1 text-xs font-bold rounded-[6px] border-2 border-black transition-all cursor-pointer ${
              color === '#000000' && lineWidth === 3.5
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-[#f5f5f5]'
            }`}
          >
            Sharpie
          </button>

          <button
            type="button"
            onClick={() => {
              setColor('#7f7f7f');
              setLineWidth(2);
            }}
            className={`px-2.5 py-1 text-xs font-bold rounded-[6px] border-2 border-black transition-all cursor-pointer ${
              color === '#7f7f7f'
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-[#f5f5f5]'
            }`}
          >
            Pencil
          </button>

          <button
            type="button"
            onClick={() => {
              setColor('#ffffff');
              setLineWidth(14);
            }}
            className={`px-2 py-1 text-xs font-bold rounded-[6px] border-2 border-black transition-all cursor-pointer flex items-center gap-1 ${
              color === '#ffffff'
                ? 'bg-black text-white'
                : 'bg-white text-black hover:bg-[#f5f5f5]'
            }`}
            title="Eraser"
          >
            <Eraser className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={clearCanvas}
            className="p-1 text-xs font-bold rounded-[6px] border-2 border-black bg-white hover:bg-[#f5f5f5] text-black cursor-pointer"
            title="Clear canvas"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Drawing Canvas */}
      <div className="relative w-full h-44 sm:h-52 bg-[#fafafa] border-2 border-dashed border-black/30 rounded-[6px] overflow-hidden cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full block touch-none"
        />

        {!hasDrawn && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-[#a0a0a0] select-none">
            <span className="font-display text-lg tracking-wider opacity-60">
              Draw here with your mouse or finger
            </span>
            <span className="text-xs font-mono mt-1 opacity-50">
              [ Sharpie ready • Scratch your tag ]
            </span>
          </div>
        )}

        {isTagged && (
          <div className="absolute inset-0 bg-black/85 flex flex-col items-center justify-center text-white p-4 text-center select-none animate-in fade-in duration-200">
            <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center mb-2 shadow-[2px_2px_0px_0px_#ffffff]">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg text-white">
              DESK TAGGED! 🛹
            </h4>
            <p className="text-xs text-[#d0d0d0] mt-1 font-light">
              Your sketch has been permanently inked into Dharshana&apos;s virtual studio notebook.
            </p>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="mt-3 flex items-center justify-between text-xs">
        <span className="font-mono text-[11px] text-[#7f7f7f]">
          {hasDrawn ? 'Ink applied' : 'Blank canvas'}
        </span>

        <div className="flex items-center gap-2">
          {hasDrawn && (
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-[6px] border border-black bg-white hover:bg-[#f5f5f5] text-black font-bold text-[11px] cursor-pointer"
            >
              <Download className="w-3 h-3" />
              <span>Save PNG</span>
            </button>
          )}

          <button
            type="button"
            disabled={!hasDrawn || isTagged}
            onClick={handleTagDesk}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-[6px] border-2 border-black font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
              hasDrawn && !isTagged
                ? 'bg-black text-white hover:bg-[#424242] shadow-[2px_2px_0px_0px_#424242]'
                : 'bg-[#e5e5e5] text-[#999999] border-black/30 cursor-not-allowed'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stamp On Desk</span>
          </button>
        </div>
      </div>
    </div>
  );
}
