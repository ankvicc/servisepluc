import React from "react";

const SalesPage: React.FC = () => {
  const sales = [
    {
      title: "Скидка 20% на первый заказ",
      description: "Если вы впервые обращаетесь в СервисПлюс — получите 20% скидку на любой ремонт.",
      image: "/images/air.png", // помести сюда иконку
    },
    {
      title: "Бесплатная диагностика",
      description: "При последующем ремонте — диагностика любой техники бесплатно.",
      image: "/images/air.png",
    },
    {
      title: "Приведи друга — получи бонус",
      description: "Рекомендовали нас другу? Получите 500 ₽ на следующий заказ.",
      image: "/images/air.png",
    },
    {
      title: "Сезонная акция на кондиционеры",
      description: "Чистка и заправка кондиционера по специальной цене — всего 990 ₽!",
      image: "/images/air.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши акции</h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {sales.map((sale, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-md flex flex-col items-start space-y-4"
            >
              <img
                src={sale.image}
                alt={`Акция: ${sale.title}`}
                className="w-12 h-12"
              />
              <h3 className="text-xl font-semibold">{sale.title}</h3>
              <p className="text-gray-700">{sale.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesPage;