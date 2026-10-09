// Next.js replaces (not merges) a parent's openGraph when a page sets its own,
// so every page spreads these shared fields into its openGraph.
export const sharedOpenGraph = {
  siteName: "AB Narrow Fabrics",
  locale: "en_IN",
  type: "website" as const,
  images: [
    {
      url: "/og.jpg",
      width: 1200,
      height: 630,
      alt: "AB Narrow Fabrics — narrow fabric lanyard manufacturer, Delhi",
    },
  ],
};
