'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type CaseGalleryProps = {
  title?: string;
  images: GalleryImage[];
  aspectRatio?: string;
  itemWidth?: number;
};

export default function CaseGallery({ title = 'Campaign Gallery', images, aspectRatio = '4 / 5', itemWidth = 300 }: CaseGalleryProps) {
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
  const showPrev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex]);

  if (!images.length) return null;

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <section className="cs-gallery">
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
          {images.map((img, i) => (
            <button
              type="button"
              key={img.src}
              className="cs-gallery-item"
              onClick={() => openLightbox(i)}
              aria-label={`Open image ${i + 1} of ${images.length}`}
              style={{ width: itemWidth, aspectRatio }}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 70vw, 320px" className="cs-gallery-img" />
              {img.caption && <span className="cs-gallery-caption">{img.caption}</span>}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="cs-lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button type="button" className="cs-lightbox-close" aria-label="Close" onClick={closeLightbox}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></svg>
          </button>

          <button
            type="button"
            className="cs-lightbox-arrow cs-lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <div className="cs-lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <div className="cs-lightbox-media" style={{ aspectRatio }}>
              <Image src={active.src} alt={active.alt} fill sizes="90vw" className="cs-lightbox-img" />
            </div>
            {active.caption && <p className="cs-lightbox-caption">{active.caption}</p>}
            <p className="cs-lightbox-count">{(activeIndex ?? 0) + 1} / {images.length}</p>
          </div>

          <button
            type="button"
            className="cs-lightbox-arrow cs-lightbox-next"
            aria-label="Next image"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      )}
    </section>
  );
}
