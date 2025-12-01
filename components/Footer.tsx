import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t-4 border-construction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <img src="https://socabeg.com/logo.png" alt="SOCABEG" className="h-10 brightness-0 invert opacity-90" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {t(
                "Building the future of Senegal through infrastructure, real estate, and mining excellence.",
                "Construire l'avenir du Sénégal grâce à l'excellence dans l'infrastructure, l'immobilier et les mines."
              )}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 inline-block">{t('Company', 'Entreprise')}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to={PageRoutes.HOME} className="hover:text-construction transition-colors">Home</Link></li>
              <li><Link to={PageRoutes.ABOUT} className="hover:text-construction transition-colors">{t('About Us', 'À Propos')}</Link></li>
              <li><Link to={PageRoutes.CAREER} className="hover:text-construction transition-colors">{t('Careers', 'Carrières')}</Link></li>
              <li><Link to={PageRoutes.CONTACT} className="hover:text-construction transition-colors">{t('Contact', 'Contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
             <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 inline-block">{t('Sectors', 'Secteurs')}</h3>
             <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to={PageRoutes.CONSTRUCTION} className="hover:text-construction transition-colors">{t('Construction', 'Construction')}</Link></li>
              <li><Link to={PageRoutes.REAL_ESTATE} className="hover:text-construction transition-colors">{t('Real Estate', 'Immobilier')}</Link></li>
              <li><Link to={PageRoutes.MINES} className="hover:text-construction transition-colors">{t('Mines', 'Mines')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 inline-block">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-construction mt-1" />
                <span>123 Avenue Leopold Sedar Senghor, Dakar</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-construction" />
                <span>+221 33 800 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-construction" />
                <span>info@socabeg.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} SOCABEG Group. {t('All rights reserved.', 'Tous droits réservés.')}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
             <span>Privacy Policy</span>
             <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;