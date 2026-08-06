'use client';
import type { Wallpaper } from '../../data/wallpapers';
import WallpaperItem from './WallpaperItem';

export default function MasonryGrid({
  items,
  onOpen,
  onToggleLike,
  likes,
}: {
  items: Wallpaper[];
  onOpen: (w: Wallpaper) => void;
  onToggleLike: (id: string) => void;
  likes: Record<string, boolean> | null | undefined;
}) {
  return (
    <div className="masonry">
      {items.map((w) => (
        <div key={w.id} className="masonry-item">
          <WallpaperItem
            wallpaper={w}
            onOpen={() => onOpen(w)}
            onToggleLike={() => onToggleLike(w.id)}
            liked={!!(likes && likes[w.id])}
          />
        </div>
      ))}
    </div>
  );
}
