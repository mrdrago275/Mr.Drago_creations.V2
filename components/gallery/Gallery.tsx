'use client';
import { useEffect, useMemo, useState, useRef, useCallback } from 'react';
import type { Wallpaper } from '../../data/wallpapers';
import {
  FEATURED,
  TRENDING,
  NEW_WALLPAPERS,
} from '../../data/wallpapers';
import MasonryGrid from './MasonryGrid';
import PreviewModal from './PreviewModal';
import { useLocalStorage } from '../../lib/hooks/useLocalStorage';
import downloadImage from '../../lib/utils/downloadImage';
import SearchBar from './SearchBar';

const BASE_SET = [...FEATURED, ...TRENDING, ...NEW_WALLPAPERS];

function makeBatch(batchIndex: number) {
  // Create a batch by mapping base set and giving unique ids
  return BASE_SET.map((item, idx) => ({
    ...item,
    id: `${item.id}-b${batchIndex}-${idx}`,
  }));
}

export default function Gallery() {
  const [items, setItems] = useState<Wallpaper[]>(() => makeBatch(0));
  const [batchIndex, setBatchIndex] = useState(1);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Wallpaper | null>(null);
  const [likes, setLikes] = useLocalStorage<Record<string, boolean>>('likes', {});
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);

  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        i.author.toLowerCase().includes(q) ||
        (i.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  }, [items, query]);

  const loadMore = useCallback(() => {
    if (loadingRef.current) return;
    loadingRef.current = true;
    // Simulate async fetch
    setTimeout(() => {
      const next = makeBatch(batchIndex);
      setItems((s) => [...s, ...next]);
      setBatchIndex((b) => b + 1);
      loadingRef.current = false;
    }, 600);
  }, [batchIndex]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) loadMore();
        });
      },
      { rootMargin: '400px' }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, [loadMore]);

  // Search resets scrollable view: optional — we don't reset items, only filter view
  useEffect(() => {
    // could scroll to top when search changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [query]);

  function toggleLike(id: string) {
    setLikes((prev) => {
      const next = { ...(prev || {}) };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  }

  async function handleDownload(w: Wallpaper) {
    try {
      await downloadImage(w.image, `${w.title.replace(/\s+/g, '_')}.jpg`);
    } catch (err) {
      console.error('Download failed', err);
      alert('Download failed. Please try opening the image and saving manually.');
    }
  }

  async function handleShare(w: Wallpaper) {
    const shareData = {
      title: w.title,
      text: `${w.title} — ${w.author}`,
      url: w.image,
    };
    if ((navigator as any).share) {
      try {
        await (navigator as any).share(shareData);
      } catch (e) {
        // user canceled or error
      }
    } else {
      // fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(w.image);
        alert('Image URL copied to clipboard');
      } catch {
        alert('Sharing not supported on this browser. URL copied to clipboard (if available).');
      }
    }
  }

  return (
    <div>
      <div className="mb-6">
        <SearchBar value={query} onChange={(v) => setQuery(v)} />
      </div>

      <MasonryGrid
        items={filtered}
        onOpen={(w) => setSelected(w)}
        onToggleLike={(id) => toggleLike(id)}
        likes={likes}
      />

      <div ref={sentinelRef} className="h-16" />

      <PreviewModal
        wallpaper={selected}
        onClose={() => setSelected(null)}
        onDownload={handleDownload}
        onShare={handleShare}
        onToggleLike={(id) => toggleLike(id)}
        liked={selected ? !!likes[selected.id] : false}
      />
    </div>
  );
      }
