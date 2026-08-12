"use client";

import { useEffect } from "react";

// Next.js App Router doesn't scroll to a #hash when arriving from another
// route (the target isn't in the DOM at navigation time). Scroll on mount.
export default function HashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return null;
}
