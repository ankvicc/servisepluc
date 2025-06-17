import Link from 'next/link';

const Footer = () => {
  const footerLinks = [
    { href: '/about', text: 'О компании' },
    { href: '/contacts', text: 'Контакты' },
    { href: '/privacy', text: 'Политика конфиденциальности' }
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">СервисПлюс</h3>
            <p className="text-sm text-gray-400">
              Профессиональный ремонт и обслуживание техники с 2010 года
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <address className="text-sm text-gray-400 not-italic">
              г. Москва, ул. Примерная, д. 10<br />
              +7 (999) 123-45-67<br />
              info@serviceplus.ru
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} СервисПлюс. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;