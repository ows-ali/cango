"use client";

import { useState, useEffect } from "react";
import { getScenarioMedia } from "@/lib/scenario-media";

interface HeroMediaProps {
  slug?: string;
  mediaUrl?: string | null;
  videoUrl?: string | null;
  altText?: string;
  className?: string;
  aspectRatio?: string;
  enableSlideshow?: boolean;
  children?: React.ReactNode;
}

export function HeroMedia({
  slug,
  mediaUrl,
  videoUrl,
  altText = "Scenario header",
  className = "h-64 md:h-80 w-full",
  aspectRatio,
  enableSlideshow = true,
  children,
}: HeroMediaProps) {
  const mediaInfo = slug ? getScenarioMedia(slug) : null;
  
  // Build array of available images for slideshow/multi-photo feature
  const images: string[] = [];
  if (mediaUrl) images.push(mediaUrl);
  if (mediaInfo?.image && !images.includes(mediaInfo.image)) images.push(mediaInfo.image);
  if (mediaInfo?.altImages) {
    mediaInfo.altImages.forEach((img) => {
      if (!images.includes(img)) images.push(img);
    });
  }
  if (images.length === 0) {
    images.push("/images/onboarding-bg.jpg");
  }

  const video = videoUrl || mediaInfo?.video;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slideshow if enabled and multiple images exist
  useEffect(() => {
    if (!enableSlideshow || images.length <= 1 || !isPlaying || video) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length, enableSlideshow, isPlaying, video]);

  return (
    <div className={`relative overflow-hidden ${className} ${aspectRatio ? aspectRatio : ""}`}>
      {/* Background Video if provided */}
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        /* Image / Multi-Photo Slideshow with smooth cross-fade & Ken-Burns subtle zoom */
        <div className="absolute inset-0 w-full h-full bg-slate-900">
          {images.map((img, idx) => (
            <div
              key={img + idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={img}
                alt={`${altText} ${idx + 1}`}
                className={`w-full h-full object-cover object-center transition-transform duration-10000 ease-linear ${
                  idx === currentIndex ? "scale-110" : "scale-100"
                }`}
                onError={(e) => {
                  // Fallback if image fails
                  (e.currentTarget as HTMLImageElement).src = "/images/onboarding-bg.jpg";
                }}
              />
            </div>
          ))}
        </div>
      )}

      {/* High-quality cinematic vignette & gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 z-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-20 pointer-events-none" />

      {/* Multi-photo Slideshow indicators if >1 image */}
      {!video && images.length > 1 && (
        <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              title={`View photo ${idx + 1}`}
            />
          ))}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-1 text-white/80 hover:text-white transition-colors"
            title={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            <span className="material-symbols-outlined text-[14px]">
              {isPlaying ? "pause" : "play_arrow"}
            </span>
          </button>
        </div>
      )}

      {/* Foreground Content / Controls Passed in Children */}
      {children && <div className="relative z-30 h-full w-full">{children}</div>}
    </div>
  );
}
