import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Portfolio Generator',
  description: 'Crea tu portfolio personalizable',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}