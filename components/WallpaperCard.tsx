import Link from "next/link";
import type { Wallpaper } from "../data/wallpapers";

export default function WallpaperCard({
  wallpaper,
}: {
  wallpaper: Wallpaper;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl">
      <Link href={`/wallpapers/${wallpaper.id}`} className="block">
        <div
          className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 sm:h-56"
          style={{ backgroundImage: `url('${wallpaper.image}')` }}
          aria-hidden
        />

        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-gray-700 bg-black/70 p-3 backdrop-blur-md">
          <div>
            <h3 className="font-semibold text-white">
              {wallpaper.title}
            </h3>

            <p className="text-sm text-secondary">
              {wallpaper.author}
            </p>
          </div>

          <span className="rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white">
            {wallpaper.resolution}
          </span>
        </div>
      </Link>
    </article>
  );
}
