'use client';
import { motion } from 'framer-motion';
import TeamMember from '../components/TeamMember';
import { fadeIn } from '@/utils/motion';

const AboutPage = () => {
  const team = [
    {
      name: "Андрей Смирнов",
      position: "Главный мастер",
      bio: "Специалист с 10-летним опытом ремонта бытовой техники. Эксперт по холодильникам и стиральным машинам.",
      image: "/images/andr.jpeg"
    },
    {
      name: "Елена Ковалева",
      position: "Мастер по мелкой бытовой технике",
      bio: "Профессионально ремонтирует микроволновые печи, кофеварки и другую мелкую технику. Опыт работы 7 лет.",
      image: "/images/elena.jpeg"
    },
    {
      name: "Дмитрий Петров",
      position: "Инженер по ремонту телевизоров",
      bio: "Специализируется на ремонте ЖК и OLED телевизоров. Работает с 2012 года.",
      image: "/images/dima.jpeg"
    },
    {
      name: "Иван Сидоров",
      position: "Электронщик",
      bio: "Диагностирует и устраняет сложные электронные неисправности. Мастер по пайке микросхем.",
      image: "/images/ivan.jpeg"
    },
    {
      name: "Ольга Николаева",
      position: "Мастер по посудомоечным машинам",
      bio: "Знает все о ремонте посудомоечных машин любого бренда. Опыт 8 лет.",
      image: "/images/olga.jpeg"
    },
    {
      name: "Сергей Волков",
      position: "Универсальный мастер",
      bio: "Ремонтирует всю технику от пылесосов до кондиционеров. Быстро находит неисправности.",
      image: "/images/serg.jpeg"
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <motion.div
          variants={fadeIn('up', 'spring', 0, 0.5)}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">О компании</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы - команда профессионалов, работающая с 2010 года и предоставляющая качественные услуги по ремонту техники
          </p>
        </motion.div>

        {/* Блок "Наша миссия" */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.2, 0.5)}
          initial="hidden"
          animate="show"
          className="bg-green-600 rounded-xl shadow-md p-8 mb-12 text-center text-white" // Изменено на green-600 и добавлен text-center
        >
          <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
          <div className="max-w-2xl mx-auto"> {/* Центрирование текста */}
            <p className="mb-4">
              Мы стремимся сделать ремонт техники простым, быстрым и доступным для каждого клиента.
            </p>
            <p>
              Наши мастера проходят регулярное обучение и используют только оригинальные запчасти для ремонта.
            </p>
          </div>
        </motion.div>

        {/* Блок "Наши преимущества" */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.4, 0.5)}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-green-600 p-6 rounded-xl shadow-md text-white" // Изменено на green-600
            >
              <h3 className="text-xl font-medium mb-3">Опытные мастера</h3>
              <p>Все специалисты с опытом работы от 5 лет</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-green-600 p-6 rounded-xl shadow-md text-white" // Изменено на green-600
            >
              <h3 className="text-xl font-medium mb-3">Гарантия 1 год</h3>
              <p>Даем гарантию на все виды ремонтных работ</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-green-600 p-6 rounded-xl shadow-md text-white" // Изменено на green-600
            >
              <h3 className="text-xl font-medium mb-3">Выезд в день обращения</h3>
              <p>Принимаем заявки круглосуточно</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Команда */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className="h-100 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;