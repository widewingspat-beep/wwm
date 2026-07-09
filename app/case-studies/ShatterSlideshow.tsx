'use client';

import { useEffect, useRef, useState } from 'react';

type ShatterSlideshowProps = {
  images: string[];
  alt?: string;
  interval?: number;
  shatterDuration?: number;
};

const COLS = 6;
const ROWS = 4;

type PieceOffset = { x: number; y: number; rot: number; delay: number };

function makeOffsets(): PieceOffset[] {
  const offsets: PieceOffset[] = [];
  for (let i = 0; i < COLS * ROWS; i++) {
    offsets.push({
      x: (Math.random() - 0.5) * 420,
      y: (Math.random() - 0.5) * 420,
      rot: (Math.random() - 0.5) * 200,
      delay: Math.random() * 220,
    });
  }
  return offsets;
}

export default function ShatterSlideshow({ images, alt = '', interval = 3200, shatterDuration = 650 }: ShatterSlideshowProps) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [piecesSrc, setPiecesSrc] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);
  const offsetsRef = useRef<PieceOffset[]>(makeOffsets());
  const displayIndexRef = useRef(0);

  useEffect(() => {
    displayIndexRef.current = displayIndex;
  }, [displayIndex]);

  useEffect(() => {
    if (images.length <= 1) return;

    const cycle = setInterval(() => {
      const currentSrc = images[displayIndexRef.current];
      const nextIndex = (displayIndexRef.current + 1) % images.length;

      offsetsRef.current = makeOffsets();
      setPiecesSrc(currentSrc);
      setAnimate(false);
      setDisplayIndex(nextIndex);

      setTimeout(() => setAnimate(true), 30);

      setTimeout(() => {
        setPiecesSrc(null);
        setAnimate(false);
      }, shatterDuration + 300);
    }, interval);

    return () => clearInterval(cycle);
  }, [images, interval, shatterDuration]);

  return (
    <div className="shatter-slideshow">
      <img src={images[displayIndex]} alt={alt} className="shatter-base" />

      {piecesSrc && (
        <div className="shatter-grid">
          {offsetsRef.current.map((p, i) => {
            const c = i % COLS;
            const r = Math.floor(i / COLS);
            return (
              <div
                key={i}
                className={`shatter-piece${animate ? ' shatter-piece-animate' : ''}`}
                style={{
                  left: `${(c / COLS) * 100}%`,
                  top: `${(r / ROWS) * 100}%`,
                  width: `${100 / COLS}%`,
                  height: `${100 / ROWS}%`,
                  backgroundImage: `url(${piecesSrc})`,
                  backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
                  backgroundPosition: `${(c / (COLS - 1)) * 100}% ${(r / (ROWS - 1)) * 100}%`,
                  transitionDelay: `${p.delay}ms`,
                  transitionDuration: `${shatterDuration}ms`,
                  ['--tx' as string]: `${p.x}px`,
                  ['--ty' as string]: `${p.y}px`,
                  ['--rot' as string]: `${p.rot}deg`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
