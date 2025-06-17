/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Отключает оптимизацию изображений
  },
  trailingSlash: true, // Добавляет слеши в URLs
}

module.exports = nextConfig