'use client';

import { useRef, useState } from 'react';

type CaseFeatureVideoProps = {
  src: string;
  poster: string;
  title?: string;
};

export default function CaseFeatureVideo({ src, poster, title }: CaseFeatureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.controls = true;
    video.muted = false;
    video.play();
    setPlaying(true);
  };

  return (
    <div className="cs-feature-video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="cs-feature-video-el"
      />
      {!playing && (
        <button type="button" className="cs-feature-video-play" onClick={handlePlay} aria-label={title ? `Play video: ${title}` : 'Play video'}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
        </button>
      )}
      {title && !playing && <span className="cs-feature-video-caption">{title}</span>}
    </div>
  );
}
