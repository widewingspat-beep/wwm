'use client';

import { useRef, useState } from 'react';

type CaseFeatureVideoProps = {
  src: string;
  poster: string;
  title?: string;
};

export default function CaseFeatureVideo({ src, poster, title }: CaseFeatureVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [unmuted, setUnmuted] = useState(false);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.controls = true;
    video.muted = false;
    video.play();
    setUnmuted(true);
  };

  return (
    <div className="cs-feature-video">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="cs-feature-video-el"
      />
      {!unmuted && (
        <button type="button" className="cs-feature-video-play cs-feature-video-unmute" onClick={handleUnmute} aria-label={title ? `Unmute video: ${title}` : 'Unmute video'}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        </button>
      )}
      {title && !unmuted && <span className="cs-feature-video-caption">{title}</span>}
    </div>
  );
}
