import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(6,6,6,0.65), rgba(6,6,6,0.8)), url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600&auto=format&fit=crop)",
        }}
      />

      <div className="relative mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-2 lg:px-12">
        {/* Left Content */}
        <div className="rounded-2xl border border-gray-800 bg-black/50 p-8 backdrop-blur-md shadow-glow">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Mr. Drago Creations
          </h1>

          <p className="mt-5 max-w-xl text-secondary text-lg">
            Premium Anime Wallpapers, AI Art, Pinterest Portfolio and Creative
            Digital Experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/featured"
              className="rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-105"
            >
              Explore Featured
            </Link>

            <Link
              href="/wallpapers"
              className="rounded-xl border border-primary px-6 py-3 text-white transition hover:bg-primary"
            >
              Browse All
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-primary px-4 py-2 text-sm text-secondary">
              Premium
            </span>

            <span className="rounded-full border border-primary px-4 py-2 text-sm text-secondary">
              4K Ready
            </span>

            <span className="rounded-full border border-primary px-4 py-2 text-sm text-secondary">
              Updated Weekly
            </span>
          </div>
        </div>

        {/* Right Preview */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          <div
            className="h-44 rounded-2xl bg-cover bg-center shadow-glow"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=800&auto=format&fit=crop)",
            }}
          />

          <div
            className="h-44 rounded-2xl bg-cover bg-center shadow-glow"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop)",
            }}
          />

          <div
            className="h-44 rounded-2xl bg-cover bg-center shadow-glow"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop)",
            }}
          />

          <div
            className="h-44 rounded-2xl bg-cover bg-center shadow-glow"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=800&auto=format&fit=crop)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
