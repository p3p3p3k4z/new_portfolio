/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aquí puedes volver a agregar la configuración de imágenes si la necesitas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;