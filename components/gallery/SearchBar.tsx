'use client';

export default function SearchBar({
  value,
  onChange,
  resultCount = 0,
}: {
  value: string;
  onChange: (v: string) => void;
  resultCount?: number;
}) {
  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="search">
        Search wallpapers
      </label>

      <div className="flex items-center gap-3">
        <div className="relative w-full">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-silver-300">
            🔍
          </span>

          <input
            id="search"
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search wallpapers, creators or tags..."
            className="
              w-full
              py-3
              pl-12
              pr-4
              rounded-xl
              bg-white/5
              backdrop-blur-md
              border
              border-white/10
              text-white
              placeholder:text-silver-300
              outline-none
              transition
              focus:border-red-500
              focus:ring-2
              focus:ring-red-500/30
            "
          />
        </div>

        <div className="hidden sm:flex items-center whitespace-nowrap text-sm text-silver-300">
          Results: 
          <span className="ml-1 text-white font-semibold">
            {resultCount}
          </span>
        </div>
      </div>
    </div>
  );
}
