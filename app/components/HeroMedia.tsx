"use client";
import { useEffect, useRef, useState } from "react";

export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState<0 | 1>(0);

  useEffect(() => {
    if (active === 1) {
      const timer = setTimeout(() => setActive(0), 5000);
      return () => clearTimeout(timer);
    }
    videoRef.current?.play();
  }, [active]);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      <div
        className="flex h-full w-[200%] transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(${active === 0 ? "0%" : "-50%"})` }}
      >
        <video
          ref={videoRef}
          className="h-full w-1/2 object-cover"
          src="/bgvideo-herosection.mp4"
          autoPlay
          muted
          playsInline
          onEnded={() => setActive(1)}
        />
        <img
          src="/hero-image.jpeg"
          alt=""
          className="h-full w-1/2 object-cover"
        />
      </div>
    </div>
  );
}
