export default function manifest() {
  return {
    name: "SeptimusLab",
    short_name: "SeptimusLab",
    description:
      "İzmir merkezli mobil yazılım stüdyosu. AI destekli mobil uygulamalar geliştiriyoruz.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F7F4",
    theme_color: "#F8F7F4",
    icons: [
      {
        src: "/assets/favicon.ico",
        sizes: "48x48 32x32 16x16",
        type: "image/x-icon",
      },
    ],
  };
}
