
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import HeroBottomNav from '../components/HeroBottomNav';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const Mines: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col bg-navy text-white text-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1516937941344-00b4ec73303b?q=80&w=2069&auto=format&fit=crop" 
              alt="Mining Excavator" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
         </div>
         
         {/* Content Area */}
         <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4">
           <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("Mining Operations", "Opérations Minières")}
            </h1>
            <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto font-light">
              {t("Responsible Exploration for National Growth.", "Exploration Responsable pour la Croissance Nationale.")}
            </p>
           </div>
        </div>

        {/* Bottom Action Area */}
        <div className="relative z-10 w-full flex flex-col items-center gap-4 pb-4">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4 w-full">
              <Link to={PageRoutes.MINES} className="w-full md:w-auto">
                 <Button fullWidth className="bg-construction text-navy hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
                  {t("Projects", "Projets")}
                </Button>
              </Link>
              <Link to={PageRoutes.CONTACT} className="w-full md:w-auto">
                 <Button fullWidth variant="outline" className="text-white border-white hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
                  {t("Contact", "Contact")}
                </Button>
              </Link>
            </div>
            <HeroBottomNav />
        </div>
      </section>

      {/* 2. SERVICES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
           <SectionHeader title={t("Services", "Services")} subtitle={t("What We Do in Mining", "Ce Que Nous Faisons dans les Mines")} />
           <div className="grid md:grid-cols-5 gap-6 mt-16 text-center">
             {[
               "Exploration", "Extraction", "Mineral Processing", "Logistics", "Mine Management"
             ].map((svc, i) => (
               <div key={i} className="py-16 px-6 bg-gray-50 border-t-8 border-navy hover:bg-navy hover:text-white transition-all duration-300 group">
                 <h3 className="font-bold text-sm md:text-base uppercase tracking-widest leading-relaxed">{t(svc, svc)}</h3>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. RESPONSIBILITY (Fullscreen) */}
       <section className="min-h-screen flex flex-col justify-center bg-construction text-navy px-4 py-20">
        <div className="max-w-5xl mx-auto w-full text-center">
          <SectionHeader title={t("Responsibility", "Responsabilité")} subtitle={t("Sustainable & Ethical Mining", "Exploitation Minière Durable et Éthique")} center />
           <p className="text-xl md:text-3xl font-medium mt-12 leading-relaxed max-w-4xl mx-auto">
             "{t(
               "Environmental commitment, safety standards, and sustainable practices are at the core of our operations.",
               "L'engagement environnemental, les normes de sécurité et les pratiques durables sont au cœur de nos opérations."
             )}"
           </p>
        </div>
      </section>

      {/* 4. PROJECTS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Projects", "Projets")} subtitle={t("Mining Achievements", "Réalisations Minières")} />
            <div className="h-[60vh] bg-navy mt-12 w-full flex flex-col items-center justify-center text-gray-500 rounded-sm relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=2070&auto=format&fit=crop" alt="Map" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"/>
               <div className="relative z-10 p-12 bg-white/10 backdrop-blur-md border border-white/20">
                  <h3 className="text-white text-3xl font-bold uppercase tracking-widest">Active Sites Map</h3>
               </div>
            </div>
         </div>
      </section>

      {/* 5. COMPLIANCE (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4 py-20">
          <div className="max-w-7xl mx-auto w-full text-center">
             <SectionHeader title={t("Compliance", "Conformité")} subtitle={t("Legal & Environmental Certifications", "Certifications Légales et Environnementales")} light center />
             <div className="grid md:grid-cols-3 gap-12 mt-20">
                <div className="h-48 bg-white/5 flex flex-col items-center justify-center border border-white/10">
                   <span className="text-4xl font-bold text-construction mb-2">ISO</span>
                   <span className="text-xl">14001</span>
                </div>
                <div className="h-48 bg-white/5 flex flex-col items-center justify-center border border-white/10">
                   <span className="text-4xl font-bold text-construction mb-2">HSE</span>
                   <span className="text-xl">Standards</span>
                </div>
                <div className="h-48 bg-white/5 flex flex-col items-center justify-center border border-white/10">
                   <span className="text-4xl font-bold text-construction mb-2">CSR</span>
                   <span className="text-xl">Commitment</span>
                </div>
             </div>
          </div>
      </section>

      {/* 6. CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-navy text-center px-4">
          <SectionHeader title={t("Work With Our Mining Team", "Travailler Avec Notre Équipe Minière")} subtitle={t("Contact Us for More Information", "Contactez-nous pour Plus d'Informations")} center />
          <div className="mt-12">
            <Link to={PageRoutes.CONTACT}>
                <Button className="bg-navy text-white px-12 py-5 text-xl font-bold uppercase tracking-widest shadow-xl hover:bg-construction hover:text-navy">
                  {t("Contact Us", "Contactez-nous")}
                </Button>
            </Link>
          </div>
      </section>
    </div>
  );
};

export default Mines;
