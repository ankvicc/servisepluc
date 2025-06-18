import React from "react";
import Link from "next/link";

const Contacts = () => {
  return (
    <section className="bg-[#F3F3F3] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Наши контакты</h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом! <br />
            Мы всегда на связи и готовы ответить на ваши вопросы, помочь с оформлением заявки или проконсультировать по ремонту.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Левая часть — зеленый блок с контактной информацией */}
          <div className="bg-green-600 text-white rounded-[30px] p-8 sm:p-10 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
            <ul className="space-y-4 text-white text-base">
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>г. Батайск, ул. Северный массив, д. 8</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📞</span>
                <span>+7 (988) 566-36-35</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✉️</span>
                <span>info@serviceplus.ru</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">⏱️</span>
                <span>Ежедневно 8:00 – 22:00</span>
              </li>
            </ul>
          </div>

                 <div className="flex flex-col justify-center items-start bg-white rounded-[30px] p-8 sm:p-10 shadow-md">
            <h3 className="text-xl font-semibold text-black mb-6">Оставить заявку</h3>
            <p className="text-black/70 mb-4">
              Хотите вызвать мастера? Нажмите на кнопку ниже — вы будете перемещены к форме заявки.
            </p>
            <Link href="/#contact">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-2xl transition duration-200">
                Перейти к заявке
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;