'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import { useRouter } from 'next/navigation';

const priceData = [
  {
    title: "Бытовая техника",
    icon: "🧊",
    items: [
      {
        subtitle: "Ремонт холодильников",
        services: [
          { name: "Заправка фреоном", price: "от 1500 ₽" },
          { name: "Замена термостата", price: "от 5000 ₽" },
          { name: "Устранение утечек", price: "от 2000 ₽" },
        ],
      },
      {
        subtitle: "Ремонт стиральных машин",
        services: [
          { name: "Замена ТЭНа", price: "от 2500 ₽" },
          { name: "Ремонт модуля управления", price: "от 7500 ₽" },
          { name: "Устранение протечек", price: "от 1500 ₽" },
        ],
      },
      {
        subtitle: "Ремонт посудомоек",
        services: [
          { name: "Замена фильтров", price: "от 1000 ₽" },
          { name: "Чистка насосов", price: "от 2000 ₽" },
          { name: "Устранение протечек", price: "от 1500 ₽" },
        ],
      },
    ],
  },
  {
    title: "Электроника",
    icon: "📱",
    items: [
      {
        subtitle: "Ремонт смартфонов",
        services: [
          { name: "Замена экрана", price: "от 2500 ₽" },
          { name: "Замена аккумулятора", price: "от 1500 ₽" },
          { name: "Ремонт разъёма", price: "от 1800 ₽" },
        ],
      },
      {
        subtitle: "Ремонт ноутбуков",
        services: [
          { name: "Чистка системы охлаждения", price: "от 1500 ₽" },
          { name: "Замена клавиатуры", price: "от 2000 ₽" },
          { name: "Замена матрицы", price: "от 3500 ₽" },
        ],
      },
    ],
  },
  {
    title: "Кондиционеры",
    icon: "❄️",
    items: [
      {
        subtitle: "Обслуживание",
        services: [
          { name: "Чистка внутреннего блока", price: "от 2000 ₽" },
          { name: "Заправка фреоном", price: "от 2500 ₽" },
        ],
      },
      {
        subtitle: "Ремонт",
        services: [
          { name: "Замена компрессора", price: "от 5000 ₽" },
          { name: "Ремонт платы управления", price: "от 3000 ₽" },
        ],
      },
    ],
  },
  {
    title: "Кухонная техника",
    icon: "🍳",
    items: [
      {
        subtitle: "Ремонт плит",
        services: [
          { name: "Замена конфорок", price: "от 1200 ₽" },
          { name: "Ремонт духовки", price: "от 2500 ₽" },
        ],
      },
      {
        subtitle: "Ремонт мелкой техники",
        services: [
          { name: "Чистка кофемашин", price: "от 1500 ₽" },
          { name: "Ремонт блендеров", price: "от 1000 ₽" },
        ],
      },
    ],
  },
];

const PriceCard = ({
  title,
  icon,
  items,
  index
}: {
  title: string;
  icon: string;
  items: { subtitle: string; services: {name: string; price: string}[] }[];
  index: number;
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.2, 0.75)}
    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
  >
    <div className="bg-green-600 p-4 flex items-center">
      <span className="text-2xl mr-3">{icon}</span>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    
    <div className="p-5 space-y-6">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">{item.subtitle}</h4>
          <ul className="space-y-2">
            {item.services.map((service, i) => (
              <li key={i} className="flex justify-between">
                <span className="text-gray-600">{service.name}</span>
                <span className="font-medium text-green-600">{service.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function PricesPage() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/#contact');
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Наши цены
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Прозрачное ценообразование без скрытых платежей
          </motion.p>
        </div>
      </section>

      {/* Prices Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Стоимость услуг</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Окончательная цена может отличаться в зависимости от модели устройства и сложности ремонта
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {priceData.map((category, index) => (
              <PriceCard
                key={index}
                index={index}
                title={category.title}
                icon={category.icon}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto cursor-pointer"
            onClick={handleContactClick}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Нужна консультация?</h3>
            <p className="text-gray-600 mb-6">
              Наши специалисты бесплатно проконсультируют вас и назовут точную стоимость ремонта
            </p>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition"
              onClick={(e) => {
                e.stopPropagation();
                handleContactClick();
              }}
            >
              Оставить заявку
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}