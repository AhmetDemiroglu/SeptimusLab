/** @type {import('next').NextConfig} */
// Site next/image kullanmiyor; gorseller public/ altindan oldugu gibi sunulur.
const nextConfig = {
  images: {
    unoptimized: true,
    deviceSizes: [640, 828, 1200, 2048],
    imageSizes: [64, 128, 256],
    remotePatterns: [],
  },
};

module.exports = nextConfig;
