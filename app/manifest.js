export default function manifest() {
  return {
    name: "SeptimusLab",
    short_name: "SeptimusLab",
    description:
      "Fikirden mağazaya, iOS ve Android için yapay zeka destekli mobil uygulamalar.",
    start_url: "/",
    display: "standalone",
    background_color: "#F2F5FA",
    theme_color: "#0E1A33",
    lang: "tr",
    dir: "ltr",
    categories: ["business", "developer tools", "productivity"],
    icons: [
      {
        src: "/assets/brand/favicon.ico",
        sizes: "48x48 32x32 16x16",
        type: "image/x-icon",
      },
      {
        src: "/assets/brand/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/assets/brand/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/brand/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
