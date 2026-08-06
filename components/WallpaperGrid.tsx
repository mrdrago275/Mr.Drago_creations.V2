import type { Wallpaper } from "../data/wallpapers";
import WallpaperCard from "./WallpaperCard";

export default function WallpaperGrid({
  items,
}: {
  items: Wallpaper[];
}) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((w) => (
        <WallpaperCard key={w.id} wallpaper={w} />
      ))}
    </div>
  );
}
