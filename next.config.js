module.exports = { reactStrictMode: true };

const nextConfig = {
  output: "export",  // Генерирует статические файлы
  images: {
    unoptimized: true,  // Отключает оптимизацию изображений (иначе ошибки)
  },
};

module.exports = nextConfig;