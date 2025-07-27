import React from 'react';
import { TemplateProps } from '@packages/types';

// Navbar Template 1 - Modern Dark
export function NavbarModernDark({ content, theme, className = '' }: TemplateProps) {
  const { logo = 'Portfolio', items = ['Home', 'Projects', 'About', 'Contact'] } = content || {};
  
  return (
    <nav className={`flex items-center justify-between p-6 bg-gray-900 text-white shadow-lg ${className}`}>
      <div className="text-2xl font-bold tracking-wide">
        {logo}
      </div>
      <ul className="flex space-x-8">
        {items.map((item: string, index: number) => (
          <li key={index} className="hover:text-blue-400 cursor-pointer transition-colors duration-200">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Navbar Template 2 - Clean Light
export function NavbarCleanLight({ content, theme, className = '' }: TemplateProps) {
  const { logo = 'Portfolio', items = ['Home', 'Projects', 'About', 'Contact'] } = content || {};
  
  return (
    <nav className={`flex items-center justify-between p-6 bg-white shadow-md border-b ${className}`}>
      <div className="text-2xl font-semibold text-gray-800">
        {logo}
      </div>
      <ul className="flex space-x-6">
        {items.map((item: string, index: number) => (
          <li key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Navbar Template 3 - Gradient
export function NavbarGradient({ content, theme, className = '' }: TemplateProps) {
  const { logo = 'Portfolio', items = ['Home', 'Projects', 'About', 'Contact'] } = content || {};
  
  return (
    <nav className={`flex items-center justify-between p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white ${className}`}>
      <div className="text-2xl font-bold">
        {logo}
      </div>
      <ul className="flex space-x-6">
        {items.map((item: string, index: number) => (
          <li key={index} className="hover:text-yellow-300 cursor-pointer transition-colors duration-200">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Navbar Template 4 - Minimalist
export function NavbarMinimalist({ content, theme, className = '' }: TemplateProps) {
  const { logo = 'Portfolio', items = ['Home', 'Projects', 'About', 'Contact'] } = content || {};
  
  return (
    <nav className={`flex items-center justify-between p-4 bg-transparent ${className}`}>
      <div className="text-xl font-light text-gray-800">
        {logo}
      </div>
      <ul className="flex space-x-4">
        {items.map((item: string, index: number) => (
          <li key={index} className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200 uppercase tracking-wide">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Navbar Template 5 - Mobile First
export function NavbarMobileFirst({ content, theme, className = '' }: TemplateProps) {
  const { logo = 'Portfolio', items = ['Home', 'Projects', 'About', 'Contact'] } = content || {};
  
  return (
    <nav className={`flex items-center justify-between p-4 bg-white shadow-sm ${className}`}>
      <div className="text-xl font-medium text-gray-800">
        {logo}
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6">
        {items.map((item: string, index: number) => (
          <li key={index} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors duration-200">
            {item}
          </li>
        ))}
      </ul>
      
      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-md hover:bg-gray-100">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
