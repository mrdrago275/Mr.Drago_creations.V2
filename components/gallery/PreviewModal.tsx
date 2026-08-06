'use client';
import { useEffect } from 'react';
import type { Wallpaper } from '../../data/wallpapers';
import downloadImage from '../../lib/utils/downloadImage';

export default function PreviewModal({
  wallpaper,
  onClose,
  onDownload,
  onShare,
  onToggleLike,
  liked,
}: {
  wallpaper: Wallpaper | null;
  onClose: () => void;
  onDownload: (w: Wallpaper) => Promise<void> | void;
  onShare: (w: Wallpaper) => Promise<void> | void;
  onToggleLike: (id: string) => void;
  liked: boolean;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (wallpaper) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [wallpaper, onClose]);

  if (!wallpaper) return null;

  return (
    <div
      role="dialog"
      aria-modal
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative max-w-[1200px] w-full max-h-[90vh] rounded-xl overflow-hidden soft-shadow">
        <div className="bg-gradient-to-b from-black/60 to-black/40 p-4 flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">{wallpaper.title}</div>
            <div className="text-sm text-silver-300">{wallpaper.author}</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onToggleLike(wallpaper.id);
              }}
              className="px-3 py-2 rounded-md bg-white/6"
              aria-label="Like"
            >
              {liked ? '♥ Liked' : '♡ Like'}
            </button>

            <button
              onClick={() => onDownload(wallpaper)}
              className="px-3 py-2 rounded-md bg-white/8"
            >
              Download
            </button>

            <button
              onClick={() => onShare(wallpaper)}
              className="px-3 py-2 rounded-md bg-white/8"
            >
              Share
            </button>

            <button onClick={onClose} className="px-3 py-2 rounded-md bg-white/6">
              Close
            </button>
          </div>
        </div>

        <div className="bg-black flex items-center justify-center">
          <img
            src={wallpaper.image}
            alt={wallpaper.title}
            className="max-h-[75vh] w-auto block object-contain"
          />
        </div>
      </div>
    </div>
  );
}
