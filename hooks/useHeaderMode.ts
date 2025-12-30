"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether the header should use its compact style based on a sentinel element.
 * Returns the sentinel ref to attach and a boolean flag.
 */
export function useHeaderMode() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Compact once the sentinel leaves the viewport (i.e., hero scrolled past)
        setIsCompact(!entry.isIntersecting);
      },
      {
        rootMargin: "-80px 0px 0px 0px",
        threshold: 0,
      },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return { sentinelRef, isCompact };
}
