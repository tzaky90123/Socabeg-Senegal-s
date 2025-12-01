
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
    <div className="w-full px-4 overflow-x-auto hide-scrollbar z-20">
      <div className="flex justify-center items-center gap-2 md:gap-4 min-w-max pb-4 md:pb-8">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                px-3 py-2 md:px-4 md:py-2 
                text-[10px] md:text-xs font-bold uppercase tracking-widest 
                border transition-all duration-300
                ${isActive 
                  ? 'border-construction text-construction bg-white/10' 
                  : 'border-white text-white bg-transparent hover:border-construction hover:text-construction'
                }
              `}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBottomNav;
