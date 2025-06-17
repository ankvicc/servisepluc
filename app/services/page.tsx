'use client';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: "Ремонт бытовой техники",
    description: "Мы починим вашу бытовую технику: стиральные машины, холодильники, посудомойки и другие устройства. Быстро и качественно."
    
  },
  {
    title: "Обслуживание кондиционеров",
    description: "Чистка, дозаправка, диагностика и ремонт кондиционеров всех видов. Создайте комфортный климат в вашем доме или офисе."
  },
  {
    title: "Ремонт электроники",
    description: "Восстановление работоспособности телевизоров, компьютеров, ноутбуков и другой электроники."
  }
];

const ServicesPage = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Качественный ремонт и обслуживание техники от профессиональных мастеров
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <ServiceCard 
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;