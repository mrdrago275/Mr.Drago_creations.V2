export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold text-primary drop-shadow-lg">
        Mr. Drago Creations
      </h1>

      <p className="mt-6 max-w-2xl text-center text-secondary text-lg md:text-xl">
        Premium Anime Wallpapers • AI Art • Pinterest Portfolio • Creative
        Digital Experiences
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-2xl bg-primary px-8 py-3 text-white shadow-glow transition hover:scale-105 hover:animate-glow">
          Explore
        </button>

        <button className="rounded-2xl border border-primary px-8 py-3 transition hover:bg-primary hover:text-white">
          Contact
        </button>
      </div>
    </main>
  );
}
