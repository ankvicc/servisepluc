'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

interface User {
  id: string;
  email?: string;
  name?: string;
  phone?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
  updateUser: (newUserData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt.decode(token) as { userId: string };
        if (decoded) {
          // Здесь можно добавить загрузку полных данных пользователя
          setUser({ id: decoded.userId });
        }
      } catch {
        logout();
      }
    }
  }, []);

  const login = (token: string) => {
    const decoded = jwt.decode(token) as { userId: string };
    localStorage.setItem('token', token);
    setUser({ id: decoded.userId });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };
  
  const updateUser = (newUserData: Partial<User>) => {
    setUser(prev => prev ? { ...prev, ...newUserData } : null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated: !!user,
        user,
        login, 
        logout,
        updateUser 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};