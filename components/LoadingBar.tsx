'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function LoadingBar() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) return;

    previousPath.current = pathname;

    const bar = progressRef.current;
    if (!bar) return;

    bar.style.opacity = '1';
    bar.style.width = '8%';

    const step1 = window.setTimeout(() => {
      bar.style.width = '80%';
    }, 100);

    const step2 = window.setTimeout(() => {
      bar.style.width = '100%';

      window.setTimeout(() => {
        bar.style.opacity = '0';
        bar.style.width = '0%';
      }, 250);
    }, 650);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
    };
  }, [pathname]);

  return <div id="route-progress" ref={progressRef} />;
}
