'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export type GalleryVideo = {
  src: string;
  poster: string;
  title?: string;
};

type CaseVideoGalleryProps = {
  title?: string;
  videos: GalleryVideo[];
  aspectRatio?: string;
  itemWidth?: number;
};

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export default function CaseVideoGallery({ title = 'Video Highlights', videos, aspectRatio = '9 / 16', itemWidth = 240 }: CaseVideoGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.cs-gallery-item');
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex]);

  if (!videos.length) return null;

  const active = activeIndex !== null ? videos[activeIndex] : null;

  return (
    <section className="cs-gallery cs-video-gallery">
      <div className="cs-gallery-inner">
        <div className="cs-gallery-head">
          <h2 className="cs-gallery-title">{title}</h2>
          <div className="cs-gallery-nav">
            <button type="button" aria-label="Previous" onClick={() => scrollByCard(-1)} className="cs-gallery-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button type="button" aria-label="Next" onClick={() => scrollByCard(1)} className="cs-gallery-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>

        <div className="cs-gallery-track" ref={trackRef}>
          {videos.map((vid, i) => (
            <button
              type="button"
              key={vid.src}
              className="cs-gallery-item cs-video-item"
              onClick={() => openLightbox(i)}
              aria-label={`Play video ${i + 1} of ${videos.length}${vid.title ? `: ${vid.title}` : ''}`}
              style={{ width: itemWidth, aspectRatio }}
            >
              <Image src={vid.poster} alt={vid.title ?? `Video ${i + 1}`} fill sizes="(max-width: 768px) 55vw, 240px" className="cs-gallery-img" />
              <span className="cs-video-play">
                <PlayIcon />
              </span>
              {vid.title && <span className="cs-gallery-caption">{vid.title}</span>}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="cs-lightbox cs-video-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button type="button" className="cs-lightbox-close" aria-label="Close" onClick={closeLightbox}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
          </button>

          <div className="cs-lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <div className="cs-lightbox-media cs-video-media" style={{ aspectRatio }}>
              <video src={active.src} poster={active.poster} controls autoPlay playsInline className="cs-lightbox-video" />
            </div>
            {active.title && <p className="cs-lightbox-caption">{active.title}</p>}
            <p className="cs-lightbox-count">{(activeIndex ?? 0) + 1} / {videos.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
