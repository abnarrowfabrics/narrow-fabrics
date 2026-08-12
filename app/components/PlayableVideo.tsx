"use client";
import { useRef, useState } from "react";

// preload="metadata" + the #t fragment fetches only the header and first frame (a light download
// on slow connections) so the browser shows that frame as a thumbnail before the user hits play.
export default function PlayableVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-[10px] border border-black/8 bg-gray-200 ${className ?? ""}`}>
      <video
        ref={ref}
        src={`${src}#t=0.1`}
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onPlay={() => setPlaying(true)}
      />
      {!playing && (
        <button
          type="button"
          onClick={() => ref.current?.play()}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-[#1E3A8A]">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
