/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
       {
        protocol: 'https',
        hostname: 'media.tenor.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // GitHub suele redirigir aquí las imágenes raw
      },
      {
        protocol: 'https',
        hostname: 'f1oxyz.github.io', // Para tu imagen del proyecto Cozobi
      },
    ],
  },
};

export default nextConfig;