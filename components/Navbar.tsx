
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { PageRoutes } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: 'Home', path: PageRoutes.HOME },
    { name: t('About', 'À Propos'), path: PageRoutes.ABOUT },
    { name: t('Construction', 'Construction'), path: PageRoutes.CONSTRUCTION },
    { name: t('Real Estate', 'Immobilier'), path: PageRoutes.REAL_ESTATE },
    { name: t('Mining', 'Mines'), path: PageRoutes.MINES },
    { name: t('Careers', 'Carrières'), path: PageRoutes.CAREER },
    { name: t('Contact', 'Contact'), path: PageRoutes.CONTACT },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100 font-sans h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to={PageRoutes.HOME} className="flex-shrink-0">
            <img 
              src="https://socabeg.com/logo.png" 
              alt="SOCABEG" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link.path) ? 'text-construction' : 'text-navy hover:text-construction'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <div className="flex items-center ml-6 border-l pl-6 border-gray-200 h-8">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-xs font-bold text-navy hover:text-construction transition-all"
              >
                <Globe className="w-3 h-3 mr-1" />
                <span className={language === 'en' ? 'text-construction' : 'text-gray-400'}>EN</span>
                <span className="text-gray-300 mx-1">|</span>
                <span className={language === 'fr' ? 'text-construction' : 'text-gray-400'}>FR</span>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
              onClick={toggleLang}
              className="flex items-center gap-1 px-2 py-1 rounded text-xs font-bold text-navy"
            >
              <span className={language === 'en' ? 'text-construction' : 'text-gray-400'}>EN</span>
              |
              <span className={language === 'fr' ? 'text-construction' : 'text-gray-400'}>FR</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-construction focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute top-20 left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 border-b border-gray-50 text-xs font-bold uppercase tracking-widest ${
                  isActive(link.path) 
                    ? 'text-construction' 
                    : 'text-navy hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
