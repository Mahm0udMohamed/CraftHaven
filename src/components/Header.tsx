import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '../lib/utils';

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Shop', href: '#' },
    { label: 'Artisans', href: '#' },
    { label: 'Stories', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-craft-dark-bg border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="font-display text-2xl font-bold text-primary-600 dark:text-primary-400">
              CraftHaven
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggle={toggleDarkMode} />
            
            <button className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-primary-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>

            <a
              href="#"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors"
            >
              Login
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden',
            'transition-all duration-200 ease-in-out',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          )}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="block px-4 py-2 text-center text-white bg-primary-500 hover:bg-primary-600 rounded-md"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}