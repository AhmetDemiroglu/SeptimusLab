/** @type {import('next').NextConfig} */
// Site next/image kullanmiyor; gorseller public/ altindan oldugu gibi sunulur.
const nextConfig = {
  images: {
    unoptimized: true,
    deviceSizes: [640, 828, 1200, 2048],
    imageSizes: [64, 128, 256],
    remotePatterns: [],
  },
  // Siteden sunulan fontlar degismez; Google Fonts'taki gibi uzun onbellek. Font degisirse dosya adi degisir.
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

module.exports = nextConfig;
