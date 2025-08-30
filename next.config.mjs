/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    domains: [
      'images.unsplash.com',   // example
      'cdn.pixabay.com',       // example
      'yourdomain.com'         // add your own
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // ✅ allow all https external images (wildcard)
      },
    ],
  },
};

export default nextConfig;
