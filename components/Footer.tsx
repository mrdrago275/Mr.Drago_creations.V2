import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-800 bg-background">
      <div className="mx-auto max-w-screen-2xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-glow">
                <span className="font-bold text-white">Dr</span>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Mr. Drago Creations
                </h3>
                <p className="text-sm text-secondary">
                  Premium Wallpapers & AI Art
                </p>
              </div>
            </Link>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="mb-3 font-semibold text-white">Explore</h4>

              <ul className="space-y-2 text-secondary">
                <li>
                  <Link href="/featured" className="hover:text-primary">
                    Featured
                  </Link>
                </li>

                <li>
                  <Link href="/trending" className="hover:text-primary">
                    Trending
                  </Link>
                </li>

                <li>
                  <Link href="/new" className="hover:text-primary">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-white">Support</h4>

              <ul className="space-y-2 text-secondary">
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>

                <li>
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-secondary md:flex md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Mr. Drago Creations. All rights
            reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
