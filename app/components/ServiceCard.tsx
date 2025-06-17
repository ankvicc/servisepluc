'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ServiceCard = ({ title, description }: { 
  title: string; 
  description: string;
}) => {
  const router = useRouter();

  const handleLearnMore = () => {
    // Плавный скролл к форме на главной странице
    router.push('/prices'); // Или ваш anchor-идентификатор формы
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            {/* Иконка может быть добавлена здесь */}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleLearnMore}
          className="text-green-600 hover:text-green-800 font-medium transition"
        >
          Подробнее →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;