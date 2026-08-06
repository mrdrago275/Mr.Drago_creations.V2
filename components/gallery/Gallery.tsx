'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import type { Wallpaper } from '../../data/wallpapers';

import {
  FEATURED,
  TRENDING,
  NEW_WALLPAPERS,
} from '../../data/wallpapers';

import MasonryGrid from './MasonryGrid';
import PreviewModal from './PreviewModal';
import SearchBar from './SearchBar';

import { useLocalStorage } from '../../lib/hooks/useLocalStorage';
import downloadImage from '../../lib/utils/downloadImage';


const BASE_SET = [
  ...FEATURED,
  ...TRENDING,
  ...NEW_WALLPAPERS,
];


function makeBatch(batchIndex: number): Wallpaper[] {
  return BASE_SET.map((item, index) => ({
    ...item,
    id: `${item.id}-b${batchIndex}-${index}`,
  }));
}



export default function Gallery() {

  const [items, setItems] = useState<Wallpaper[]>(
    () => makeBatch(0)
  );

  const [query, setQuery] = useState('');

  const [selected, setSelected] =
    useState<Wallpaper | null>(null);


  const [likes, setLikes] =
    useLocalStorage<Record<string, boolean>>(
      'mr-drago-liked-wallpapers',
      {}
    );


  const sentinelRef =
    useRef<HTMLDivElement | null>(null);

  const loadingRef =
    useRef(false);

  const batchRef =
    useRef(1);



  const filtered = useMemo(() => {

    if (!query.trim()) {
      return items;
    }


    const q =
      query.toLowerCase();


    return items.filter((item) =>

      item.title
        .toLowerCase()
        .includes(q)

      ||

      item.author
        .toLowerCase()
        .includes(q)

      ||

      (item.tags ?? [])
        .some(tag =>
          tag.toLowerCase().includes(q)
        )

    );

  }, [items, query]);





  const loadMore = useCallback(() => {

    if (loadingRef.current)
      return;


    loadingRef.current = true;


    setTimeout(() => {

      const next =
        makeBatch(
          batchRef.current
        );


      setItems((prev) => [
        ...prev,
        ...next,
      ]);


      batchRef.current += 1;


      loadingRef.current = false;


    }, 600);


  }, []);






  useEffect(() => {

    const sentinel =
      sentinelRef.current;


    if (!sentinel)
      return;



    const observer =
      new IntersectionObserver(

        (entries) => {

          if (
            entries[0].isIntersecting
          ) {

            loadMore();

          }

        },

        {
          rootMargin: '400px',
        }

      );



    observer.observe(sentinel);



    return () =>
      observer.disconnect();


  }, [loadMore]);







  useEffect(() => {

    if (query) {

      window.scrollTo({
        top: 0,
      });

    }

  }, [query]);







  function toggleLike(id: string) {

    setLikes((prev) => {

      const next = {
        ...prev,
      };


      if (next[id]) {

        delete next[id];

      } else {

        next[id] = true;

      }


      return next;

    });

  }







  async function handleDownload(
    wallpaper: Wallpaper
  ) {

    try {

      await downloadImage(
        wallpaper.image,
        `${wallpaper.title.replace(
          /\s+/g,
          '_'
        )}.jpg`
      );


    } catch (error) {

      console.error(
        'Download failed',
        error
      );


      alert(
        'Download failed'
      );

    }

  }







  async function handleShare(
    wallpaper: Wallpaper
  ) {


    const shareData = {

      title:
        wallpaper.title,

      text:
        `${wallpaper.title} — ${wallpaper.author}`,

      url:
        wallpaper.image,

    };




    if (
      navigator.share
    ) {

      try {

        await navigator.share(
          shareData
        );


      } catch {

        // user cancelled

      }



    } else {


      try {

        await navigator.clipboard
          .writeText(
            wallpaper.image
          );


        alert(
          'Image URL copied'
        );


      } catch {

        alert(
          'Sharing not supported'
        );

      }


    }

  }







  return (

    <div>

      <div className="mb-6">

        <SearchBar

          value={query}

          onChange={setQuery}

          resultCount={
            filtered.length
          }

        />

      </div>





      <MasonryGrid

        items={filtered}

        onOpen={(wallpaper) =>
          setSelected(wallpaper)
        }

        onToggleLike={
          toggleLike
        }

        likes={
          likes
        }

      />





      <div
        ref={sentinelRef}
        className="h-16"
      />





      <PreviewModal

        wallpaper={selected}

        onClose={() =>
          setSelected(null)
        }

        onDownload={
          handleDownload
        }

        onShare={
          handleShare
        }

        onToggleLike={
          toggleLike
        }

        liked={
          selected
            ? !!likes[selected.id]
            : false
        }

      />

    </div>

  );

}
