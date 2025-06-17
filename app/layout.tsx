'use client';
import { AuthProvider } from './context/AuthContext';
import Header from './components/header';
import Footer from './components/footer';
import '../styles/globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <AuthProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}