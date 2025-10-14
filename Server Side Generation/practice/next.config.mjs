/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.pixel.com',
      },
      {
        protocol: 'https',
        hostname: '*.google.com'
      }
    ]
  }
};

export default nextConfig;
