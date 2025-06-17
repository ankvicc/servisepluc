"use client";
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

const privacyPolicySections = [
  {
    title: "1. Общие положения",
    content: (
      <>
        <p>1.1. Политика разработана в соответствии с Федеральным законом № 152-ФЗ «О персональных данных» от 27.07.2006 г. и другими действующими нормативно-правовыми актами РФ.</p>
        <p>1.2. Используя Сайт, Пользователь выражает согласие с условиями данной Политики.</p>
        <p>1.3. В случае несогласия с условиями Политики Пользователь должен прекратить использование Сайта.</p>
      </>
    )
  },
  {
    title: "2. Термины и определения",
    content: (
      <>
        <p><strong>Пользователь</strong> — физическое лицо, использующее Сайт.</p>
        <p><strong>Персональные данные</strong> — любая информация, относящаяся прямо или косвенно к определённому физическому лицу.</p>
        <p><strong>Обработка персональных данных</strong> — любое действие (операция), совершаемое с персональными данными, включая сбор, запись, хранение, уточнение, удаление и т.п.</p>
      </>
    )
  },
  {
    title: "3. Персональные данные, которые мы обрабатываем",
    content: (
      <>
        <p>3.1. Оператор может обрабатывать следующие данные:</p>
        <ul className="list-disc pl-5">
          <li>ФИО;</li>
          <li>Контактный телефон;</li>
          <li>Адрес электронной почты;</li>
          <li>Иные данные, добровольно предоставленные Пользователем через формы на Сайте.</li>
        </ul>
        <p>3.2. Также автоматически обрабатываются обезличенные технические данные:</p>
        <ul className="list-disc pl-5">
          <li>IP-адрес;</li>
          <li>Тип браузера и устройства;</li>
          <li>Время доступа;</li>
          <li>Источник перехода на Сайт и действия на нём;</li>
          <li>Геолокационные данные (при разрешении со стороны пользователя);</li>
          <li>Cookie-файлы и аналогичные технологии.</li>
        </ul>
      </>
    )
  },
  {
    title: "4. Цели обработки персональных данных",
    content: "Персональные данные обрабатываются исключительно для: предоставления и исполнения услуг; обратной связи с Пользователем; повышения качества работы Сайта; рассылки уведомлений и новостей (с возможностью отписки); соблюдения требований законодательства."
  },
  {
    title: "5. Правовые основания обработки",
    content: "Обработка персональных данных осуществляется на основании: ст. 6 и 9 Федерального закона № 152-ФЗ; согласия субъекта персональных данных; исполнения договора или предоставления услуги."
  },
  {
    title: "6. Условия обработки и хранения",
    content: (
      <>
        <p>6.1. Обработка осуществляется с соблюдением принципов законности, минимизации и целевого назначения.</p>
        <p>6.2. Доступ к данным имеют только уполномоченные сотрудники и сервисные партнёры, обязующиеся соблюдать конфиденциальность.</p>
        <p>6.3. Данные хранятся не дольше, чем это требуется для достижения целей обработки, либо до момента отзыва согласия.</p>
      </>
    )
  },
  {
    title: "7. Передача данных третьим лицам",
    content: (
      <>
        <p>7.1. Передача возможна только:</p>
        <ul className="list-disc pl-5">
          <li>в рамках законодательства РФ (например, по требованию госорганов);</li>
          <li>сервисным компаниям (например, хостинг-провайдерам), при условии заключения соглашения о конфиденциальности.</li>
        </ul>
      </>
    )
  },
  {
    title: "8. Защита персональных данных",
    content: "Оператор применяет необходимые технические и организационные меры для предотвращения несанкционированного доступа, утраты, изменения или распространения персональных данных."
  },
  {
    title: "9. Права пользователя",
    content: (
      <>
        <p>Пользователь вправе:</p>
        <ul className="list-disc pl-5">
          <li>запрашивать сведения о своих персональных данных;</li>
          <li>требовать их уточнения или удаления;</li>
          <li>отозвать согласие на обработку;</li>
          <li>направить жалобу в уполномоченный орган (Роскомнадзор) при нарушении прав.</li>
        </ul>
      </>
    )
  },
  {
    title: "10. Обработка cookies",
    content: "Сайт использует cookie-файлы для обеспечения работоспособности, а также для аналитических и маркетинговых целей. Пользователь может ограничить или отключить использование cookie через настройки браузера."
  },
  {
    title: "11. Обновление политики",
    content: "Мы вправе вносить изменения в настоящую Политику. Актуальная редакция всегда доступна по адресу: [указать ссылку на страницу]."
  }
];

const PrivacyItem = ({
  title,
  content,
  index
}: {
  title: string;
  content: React.ReactNode;
  index: number;
}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="flex flex-col gap-[20px] bg-white p-8 rounded-[20px] shadow-lg"
  >
    <h3 className="text-[24px] text-green-600 font-semibold leading-[150%] tracking-[-1.2px]">
      {title}
    </h3>
    <div className="text-[16px] text-black font-light leading-[175%] tracking-[-0.8px] space-y-3">
      {content}
    </div>
  </motion.div>
);

export default function PrivacyPage() {
  return (
    <main className="bg-[#F3F3F3] min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center text-center gap-[20px] px-[20px] pt-[100px] pb-[60px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[48px] text-black font-bold leading-[100%] tracking-[-2.4px] max-w-[950px] bg-white/70 p-4 rounded-xl"
        >
          Политика конфиденциальности
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[20px] text-black font-light leading-[150%] tracking-[-1px] max-w-[700px] bg-white/70 p-4 rounded-xl"
        >
          Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей веб-сайта
        </motion.p>
      </motion.section>

      {/* Privacy Policy Content */}
      <section className="flex flex-col items-center gap-[40px] px-[20px] py-[80px] max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full bg-white p-8 rounded-[20px] shadow-lg"
        >
          <p className="text-[18px] text-black font-light leading-[175%] tracking-[-0.9px] mb-4">
            Настоящая Политика конфиденциальности (далее — Политика) определяет порядок обработки и защиты персональных данных пользователей веб-сайта [указать доменное имя] (далее — Сайт), принадлежащего компании «СервисПлюс» (далее — Оператор).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-[40px] w-full">
          {privacyPolicySections.map((section, index) => (
            <PrivacyItem
              key={index}
              index={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full bg-white p-8 rounded-[20px] shadow-lg"
        >
          <h3 className="text-[24px] text-green-600 font-semibold leading-[150%] tracking-[-1.2px] mb-4">
            12. Контактная информация
          </h3>
          <div className="text-[16px] text-black font-light leading-[175%] tracking-[-0.8px] space-y-3">
            <p>Если у вас возникли вопросы по обработке персональных данных, пожалуйста, свяжитесь с нами:</p>
            <p>ООО «СервисПлюс»</p>
            <p>Адрес: г. Москва, ул. Примерная, д. 10</p>
            <p>Тел.: +7 (999) 123-45-67</p>
            <p>Email: info@serviceplus.ru</p>
            <p className="text-[14px] text-black/60 font-light leading-[175%] tracking-[-0.7px] mt-4">
              Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}