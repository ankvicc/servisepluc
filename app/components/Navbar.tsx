'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import LoginForm from './LoginForm';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) => {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const navLinks = [
    { href: '/', label: 'Главная' },
    { href: '/services', label: 'Услуги' },
    { href: '/prices', label: 'Цены' },
    { href: '/about', label: 'О нас' },
    { href: '/contacts', label: 'Контакты' },
  ];

  const getUserInitial = () => {
    if (!user?.email) return '?';
    return user.email.charAt(0).toUpperCase();
  };

  const handleLoginSuccess = () => {
    setShowLoginModal(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-green-600">
          СервисПлюс
        </Link>

        <div className="flex items-center gap-6">
          {/* Десктопное меню */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 px-3 hover:text-green-600 transition-colors ${
                  pathname === link.href ? 'text-green-600 font-medium' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Кнопка авторизации/профиль */}
          <div className="hidden md:block">
            {user ? (
              <div className="flex items-center gap-3">
                <Link 
                  href="/profile" 
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600"
                >
                  <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    {getUserInitial()}
                  </span>
                  <span className="hidden lg:inline">
                    {user.email || 'Профиль'}
                  </span>
                </Link>
                <button 
                  onClick={logout}
                  className="text-sm text-gray-500 hover:text-red-500"
                >
                  Выйти
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Войти
              </button>
            )}
          </div>

          {/* Бургер-иконка для мобильных */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <div className="w-6 relative">
              <span className={`block absolute h-0.5 w-full bg-green-600 rounded-full transition-all ${
                isMobileMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
              }`}></span>
              <span className={`block absolute h-0.5 w-full bg-green-600 rounded-full top-1/2 -translate-y-1/2 transition-opacity ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block absolute h-0.5 w-full bg-green-600 rounded-full transition-all ${
                isMobileMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'top-full'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block py-3 px-4 my-1 rounded-md hover:bg-green-50 transition-colors ${
                    pathname === link.href ? 'bg-green-50 text-green-600 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-gray-100 mt-2 pt-2">
                {user ? (
                  <>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 py-3 px-4 my-1 rounded-md hover:bg-green-50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        {getUserInitial()}
                      </span>
                      Профиль
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left py-3 px-4 my-1 rounded-md hover:bg-red-50 text-red-500 transition-colors"
                    >
                      Выйти
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setShowLoginModal(true);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left py-3 px-4 my-1 rounded-md bg-green-600 text-white text-center hover:bg-green-700 transition-colors"
                  >
                    Войти
                  </button>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Модальное окно входа */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowLoginModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <LoginForm onSuccess={handleLoginSuccess} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;