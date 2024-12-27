import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useDarkMode } from '../hooks/useDarkMode';
import Logo from './Logo';
import NavLinks from './navigation/NavLinks';

const Header = () => {
  const [isDark, setIsDark] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pt-4">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;