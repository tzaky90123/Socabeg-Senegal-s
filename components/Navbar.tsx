
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { PageRoutes } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 font-sans h-20 flex items-center">
        <div className="w-full px-6 flex justify-between items-center relative">
          
          {/* LEFT: Sidebar Toggle */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-navy"
          >
            <Menu className="w-8 h-8" />
          </button>

          {/* CENTER: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to={PageRoutes.HOME}>
              <img 
                src="https://socabeg.com/logo.png" 
                alt="SOCABEG" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* RIGHT: Language Switcher */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 text-sm font-bold text-navy hover:text-construction transition-colors border border-gray-200 px-3 py-1.5 rounded"
          >
            <Globe className="w-4 h-4" />
            <span className={language === 'en' ? 'text-construction' : 'text-gray-400'}>EN</span>
            <span className="text-gray-300">|</span>
            <span className={language === 'fr' ? 'text-construction' : 'text-gray-400'}>FR</span>
          </button>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-navy/50 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar Content */}
      <div 
        className={`fixed top-0 left-0 z-[70] h-full w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-100 h-20">
          <img src="https://socabeg.com/logo.png" alt="SOCABEG" className="h-8 w-auto" />
          <button onClick={closeSidebar} className="text-navy hover:text-construction">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="py-6 px-4 space-y-2 overflow-y-auto h-[calc(100%-80px)]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeSidebar}
              className={`flex items-center justify-between px-4 py-4 rounded-lg transition-all ${
                isActive(link.path) 
                  ? 'bg-navy text-white shadow-md' 
                  : 'text-navy hover:bg-gray-50'
              }`}
            >
              <span className="text-sm font-bold uppercase tracking-widest">{link.name}</span>
              {isActive(link.path) && <ChevronRight className="w-4 h-4 text-construction" />}
            </Link>
          ))}
          
          <div className="mt-8 pt-8 border-t border-gray-100 px-4">
             <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</div>
             <p className="text-sm text-navy mb-2">+221 33 800 00 00</p>
             <p className="text-sm text-navy">info@socabeg.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
