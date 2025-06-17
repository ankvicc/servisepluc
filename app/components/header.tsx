'use client';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoginForm from './LoginForm';
import Modal from './Modal';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: '/services', text: 'Услуги' },
    { href: '/prices', text: 'Цены' },
    { href: '/sales', text: 'Акции' },
    { href: '/contacts', text: 'Контакты' },
    { href: '/about', text: 'О компании' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between relative">
        <Link href="/" className="text-[20px] font-semibold text-gray-800 hover:text-green-700 transition">
          Сервис<span className="text-green-700">Плюс</span>
        </Link>

        <nav className="absolute left-1/2 transform -translate-x-1/2 space-x-6 text-[17px] text-gray-800 hidden md:flex">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href}
              className="hover:text-blue-600 transition"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link href="/profile" className="text-gray-800 hover:text-blue-600 transition">
                Профиль
              </Link>
              <button 
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
              >
                Выйти
              </button>
            </>
          ) : (
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition"
            >
              Войти
            </button>
          )}
        </div>
      </div>

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm onSuccess={() => setIsLoginOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;