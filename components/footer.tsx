export default function Footer() {
  return (
    <footer className="border-t border-red-700/20 bg-black py-6">
      <div className="mx-auto max-w-7xl px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Mr. Drago Creations</p>
        <p className="mt-2 text-sm">
          Premium Wallpapers • AI Art • Creative Projects
        </p>
      </div>
    </footer>
  );
}
