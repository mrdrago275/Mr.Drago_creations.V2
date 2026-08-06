'use client';

import { useState } from 'react';
import Link from 'next/link';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Trending', href: '/trending' },
  { label: 'New Arrivals', href: '/new' },
  { label: 'Featured', href: '/featured' },
  { label: 'Wallpapers', href: '/wallpapers' },
  { label: 'Contact', href: '/contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-background/90 backdrop-blur-md border-b border-gray-800 py-4 px-6 sm:px-8 lg:px-12">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-glow">
            <span className="font-bold text-white">Dr</span>
          </div>

          <span className="text-lg font-semibold text-white">
            Mr. Drago Creations
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-secondary transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="mt-4 flex flex-col gap-2 rounded-xl bg-background p-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-secondary transition hover:bg-primary hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
