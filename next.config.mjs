/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern WebP format with JPEG/PNG fallback handled automatically
    formats: ['image/webp'],
    // Optimised device widths matching our breakpoint strategy
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1440, 1920],
    // Smaller sizes for thumbnails / avatar images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimised images for 60 days (default is 60s)
    minimumCacheTTL: 60 * 60 * 24 * 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  // Enable gzip compression (Next.js enables brotli/gzip by default, this ensures it)
  compress: true,
};

export default nextConfig;
