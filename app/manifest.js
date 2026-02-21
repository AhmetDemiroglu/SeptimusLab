export default function manifest() {
  return {
    name: "SeptimusLab - Mobil İnovasyon Stüdyosu",
    short_name: "SeptimusLab",
    description:
      "İzmir merkezli mobil yazılım stüdyosu. AI destekli Android uygulamalar: PureScan ve Fintel.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F7F4",
    theme_color: "#F8F7F4",
    lang: "tr",
    dir: "ltr",
    categories: ["business", "developer tools", "productivity"],
    icons: [
      {
        src: "/assets/favicon.ico",
        sizes: "48x48 32x32 16x16",
        type: "image/x-icon",
      },
      {
        src: "/assets/septimuslab.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
