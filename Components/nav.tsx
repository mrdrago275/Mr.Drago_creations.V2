export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-red-700/20 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-red-600">
          Mr. Drago Creations
        </h1>

        <div className="hidden gap-6 md:flex">
          <a href="/" className="hover:text-red-500 transition">Home</a>
          <a href="/gallery" className="hover:text-red-500 transition">Gallery</a>
          <a href="/about" className="hover:text-red-500 transition">About</a>
          <a href="/contact" className="hover:text-red-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
