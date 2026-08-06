import Hero from "../components/Hero";
import WallpaperGrid from "../components/WallpaperGrid";
import {
  FEATURED,
  TRENDING,
  NEW_WALLPAPERS,
} from "../data/wallpapers";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-silver mb-6">
          Featured Wallpapers
        </h2>
        <WallpaperGrid items={FEATURED} />
      </section>

      <section className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-silver mb-6">
          Trending Wallpapers
        </h2>
        <WallpaperGrid items={TRENDING} />
      </section>

      <section className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-silver mb-6">
          New Arrivals
        </h2>
        <WallpaperGrid items={NEW_WALLPAPERS} />
      </section>
    </>
  );
}
