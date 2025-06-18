"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';
import Image from "next/image";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useRouter } from 'next/navigation'; // Добавлен импорт useRouter

const services = [
  {
    title: "Ремонт бытовой техники",
    description:
      "Мы починим вашу бытовую технику: стиральные машины, холодильники, посудомойки и другие устройства. Быстро и качественно.",
  },
  {
    title: "Обслуживание кондиционеров",
    description:
      "Чистка, дозаправка, диагностика и ремонт кондиционеров всех видов. Создайте комфортный климат в вашем доме или офисе.",
  },
  {
    title: "Монтаж и демонтаж техники",
    description:
      "Профессиональный монтаж и демонтаж бытовой техники. Надежно, быстро и аккуратно.",
  },
];

const features = [
  {
    image: "/images/gala.png",
    title: "Качество и гарантия",
    description:
      "Мы гарантируем высокое качество всех наших услуг. Наши мастера — профессионалы с большим опытом.",
  },
  {
    image: "/images/time.png",
    title: "Быстрое реагирование",
    description:
      "Мы ценим ваше время. Работаем оперативно, соблюдая все сроки.",
  },
  {
    image: "/images/money1.png",
    title: "Доступные цены",
    description:
      "Наши услуги — это идеальное сочетание качества и разумных цен. Мы не завышаем стоимость, но при этом не экономим на качестве.",
  },
];

const ServiceCard = ({
  title,
  description,
  index
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push('/prices');
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="bg-green-600 rounded-[50px] p-6 md:p-[40px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 lg:flex-col lg:gap-5"
    >
      <div className="flex flex-col gap-4 md:gap-5 w-full">
        <h3 className="text-2xl md:text-[36px] text-white font-semibold leading-tight md:leading-[175%] tracking-tight md:tracking-[-1.8px]">
          {title}
        </h3>
        <p className="text-sm md:text-[16px] text-white font-light leading-normal md:leading-[175%] tracking-tight md:tracking-[-0.8px]">
          {description}
        </p>
      </div>
      <button 
        onClick={handleDetailsClick}
        className="w-full md:w-auto text-sm md:text-[16px] text-green-600 font-semibold bg-white rounded-[50px] px-6 py-3 md:px-[40px] md:py-[16px] hover:bg-gray-100 transition whitespace-nowrap"
      >
        Подробнее
      </button>
    </motion.div>
  );
};

const FeatureItem = ({
  image,
  title,
  description,
  index
}: {
  image: string;
  title: string;
  description: string;
  index: number;
}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex flex-col items-center gap-[24px] text-center bg-green-600 p-8 rounded-[20px]"
  >
    <Image src={image} alt={title} width={60} height={60} />
    <h4 className="text-[24px] text-white font-semibold leading-[150%] tracking-[-1.2px]">
      {title}
    </h4>
    <p className="text-[16px] text-white font-light leading-[175%] tracking-[-0.8px] max-w-[290px]">
      {description}
    </p>
  </motion.div>
);

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = {
      name: formData.get("user_name") as string,
      email: formData.get("user_email") as string
    };

    emailjs
      .send(
        "service_0idem4c",
        "template_fhn77j8",
        data,
        "_PNWzYSP8p-Ek9cxf"
      )
      .then(
        (result) => {
          alert("Заявка успешно отправлена!");
          form.current?.reset();
        },
        (error) => {
          console.error("Ошибка отправки:", error);
          alert("Ошибка при отправке. Попробуйте позже.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="contact"
      className="flex flex-col items-center gap-[40px] px-[20px] py-[80px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <motion.h2
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-[48px] text-black font-bold leading-[100%] tracking-[-2.4px] text-center bg-white/70 p-4 rounded-xl"
      >
        Свяжитесь с нами
      </motion.h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-[600px] flex flex-col gap-[20px] bg-white/80 p-6 rounded-xl backdrop-blur text-black placeholder-black/50"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Ваше имя"
          className="w-full px-[20px] py-[16px] border border-black/20 rounded-[10px] placeholder-black/40"
          required
        />
        
        <input
          type="email"
          name="user_email"
          placeholder="Ваш email"
          className="w-full px-[20px] py-[16px] border border-black/20 rounded-[10px] placeholder-black/40"
          required
        />
        <input
          type="tel"
          name="user_phone"
          placeholder="Телефон (необязательно)"
          className="w-full px-[20px] py-[16px] border border-black/20 rounded-[10px] placeholder-black/40"
        />
        <textarea
          name="message"
          placeholder="Комментарий (необязательно)"
          className="w-full px-[20px] py-[16px] border border-black/20 rounded-[10px] placeholder-black/40"
          rows={5}
        />

        <button
          type="submit"
          className="bg-green-600 text-white font-semibold text-[18px] rounded-[50px] px-[40px] py-[16px] hover:bg-green-700 transition"
        >
          Отправить
        </button>
      </form>
    </motion.section>
  );
};

export default function Home() {
  return (
    <main>
      {/* Hero */}
<motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="flex flex-col justify-center items-center text-center gap-4 md:gap-5 px-4 md:px-6 pt-16 md:pt-[100px] pb-12 md:pb-[60px] bg-cover bg-center"
  style={{ backgroundImage: "url('/images/hero.jpg')" }}
>
  <motion.h1
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] text-black font-bold leading-tight tracking-tight md:tracking-[-1.5px] lg:tracking-[-2px] xl:tracking-[-3.2px] max-w-[90%] md:max-w-[80%] lg:max-w-[950px] bg-white/70 p-4 md:p-6 rounded-xl"
  >
    Сервисный центр по ремонту и обслуживанию техники
  </motion.h1>
  <motion.p
    initial={{ y: 50 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="text-sm sm:text-base md:text-lg lg:text-[20px] text-black font-light leading-normal tracking-tight md:tracking-[-0.5px] lg:tracking-[-1px] max-w-[90%] md:max-w-[70%] lg:max-w-[700px] bg-white/70 p-3 md:p-4 rounded-xl"
  >
    Надежный партнер для ремонта и обслуживания техники. Профессионально. Быстро. Качественно.
  </motion.p>
  <motion.a
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    href="#contact"
    className="text-sm sm:text-base md:text-lg lg:text-[20px] bg-green-600 text-white font-semibold rounded-[50px] px-6 py-3 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-[60px] lg:py-[20px] hover:bg-green-700 transition"
  >
    Оставить заявку
  </motion.a>
</motion.section>

      {/* Services */}
      <section className="flex flex-col items-center gap-[60px] px-[20px] py-[80px] bg-white">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[48px] text-black font-bold leading-[100%] tracking-[-2.4px] text-center"
        >
          Наши услуги
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-[40px]">
  {services.map((service, index) => (
    <ServiceCard
      key={index}
      index={index}
      title={service.title}
      description={service.description}
    />
  ))}
</div>
      </section>

      {/* Features */}
      <section className="flex flex-col items-center gap-[60px] px-[20px] py-[80px] bg-[#F3F3F3]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[48px] text-black font-bold leading-[100%] tracking-[-2.4px] text-center"
        >
          Почему выбирают нас
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />
    </main>
  );
}