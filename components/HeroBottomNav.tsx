
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageRoutes } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const HeroBottomNav: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const links = [
    { name: 'Home', path: PageRoutes.HOME },
    { name: t('About', 'À Propos'), path: PageRoutes.ABOUT },
    { name: t('Construction', 'Construction'), path: PageRoutes.CONSTRUCTION },
    { name: t('Real Estate', 'Immobilier'), path: PageRoutes.REAL_ESTATE },
    { name: t('Mines', 'Mines'), path: PageRoutes.MINES },
    { name: t('Careers', 'Carrières'), path: PageRoutes.CAREER },
    { name: t('Contact', 'Contact'), path: PageRoutes.CONTACT },
  ];

  return (
    <div className="absolute bottom-0 left-0 w-full z-30 bg-navy/90 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto hide-scrollbar">
        <div className="flex justify-between items-center h-16 md:h-20 min-w-max gap-4 md:gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-colors duration-300 px-2 ${
                  isActive ? 'text-construction' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroBottomNav;
