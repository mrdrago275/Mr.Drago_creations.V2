'use client';
import { useEffect, useRef, useState } from 'react';
import type { Wallpaper } from '../../data/wallpapers';
import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

export default function WallpaperItem({
  wallpaper,
  onOpen,
  onToggleLike,
  liked,
}: {
  wallpaper: Wallpaper;
  onOpen: () => void;
  onToggleLike: () => void;
  liked: boolean;
}) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article className="relative rounded-xl overflow-hidden group">
      <button
        onClick={onOpen}
        className="block w-full text-left"
        aria-label={`Open ${wallpaper.title}`}
      >
        <div className="relative">
          <img
            ref={imgRef}
            src={visible ? wallpaper.image : undefined}
            alt={wallpaper.title}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-b from-white/3 to-white/2 animate-pulse" />
          )}

          <div className="absolute left-3 top-3 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleLike();
              }}
              aria-label="Like"
              className="p-2 bg-white/6 rounded-md backdrop-blur-sm hover:bg-white/10 transition"
            >
              {liked ? (
                <HeartSolid className="h-5 w-5 text-pinterest-500" />
              ) : (
                <HeartOutline className="h-5 w-5 text-silver-100" />
              )}
            </button>
          </div>

          <div className="absolute left-3 right-3 bottom-3 glass px-3 py-2 rounded-md flex items-center justify-between border border-white/8">
            <div className="truncate">
              <div className="text-sm font-semibold">{wallpaper.title}</div>
              <div className="text-xs text-silver-300">{wallpaper.author}</div>
            </div>
            <div className="text-xs px-2 py-1 rounded bg-white/6 text-silver-100">
              {wallpaper.resolution}
            </div>
          </div>
        </div>
      </button>
    </article>
  );
}

