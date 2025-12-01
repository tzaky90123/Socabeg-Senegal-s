
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import HeroBottomNav from '../components/HeroBottomNav';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const RealEstate: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 overflow-hidden pb-20">
         <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
             alt="Modern Architecture" 
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
         </div>
         
         <div className="relative z-10 max-w-5xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("Real Estate", "Immobilier")}
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto font-light">
            {t("Developing Modern Living & Investment Opportunities.", "Développer des Espaces de Vie Modernes et des Opportunités d'Investissement.")}
          </p>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-center items-center px-4">
          <Link to={PageRoutes.REAL_ESTATE} className="w-full md:w-auto">
             <Button fullWidth className="bg-construction text-navy hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
              {t("Properties", "Propriétés")}
            </Button>
          </Link>
          <Link to={PageRoutes.CONTACT} className="w-full md:w-auto">
             <Button fullWidth variant="outline" className="text-white border-white hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
              {t("Contact", "Contact")}
            </Button>
          </Link>
        </div>

        {/* Hero Nav */}
        <HeroBottomNav />
      </section>

      {/* 2. SERVICES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
           <SectionHeader title={t("Services", "Services")} subtitle={t("What We Offer in Real Estate", "Ce Que Nous Offrons en Immobilier")} />
           <div className="grid md:grid-cols-3 gap-8 mt-16">
             {[
               "Property Development", "Land Acquisition", "Investment Advisory",
               "Commercial Projects", "Housing & Apartments", "Land Sales", "Project Management"
             ].map((svc, i) => (
               <div key={i} className="p-10 border border-gray-100 hover:border-construction hover:shadow-xl transition-all bg-white">
                 <h3 className="text-xl font-bold text-navy uppercase tracking-wide">{t(svc, svc)}</h3>
                 <div className="h-1 w-10 bg-construction mt-4"></div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light px-4 py-20">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Properties", "Propriétés")} subtitle={t("Featured Developments", "Développements en Vedette")} />
            <div className="grid md:grid-cols-2 gap-12 mt-16">
               <div className="bg-white p-0 shadow-xl group cursor-pointer">
                  <div className="h-80 bg-gray-200 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Prop 1"/>
                    <div className="absolute top-4 right-4 bg-construction text-navy font-bold px-4 py-2 text-sm uppercase">For Sale</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-construction transition-colors">Luxury Apartments Dakar</h3>
                    <p className="text-gray-600 font-light">Premium living in the heart of the city with ocean views.</p>
                  </div>
               </div>
               <div className="bg-white p-0 shadow-xl group cursor-pointer">
                  <div className="h-80 bg-gray-200 overflow-hidden relative">
                    <img src="https://images.unsplash.com/photo-1460317442991-0ec2aaefcb88?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Prop 2"/>
                    <div className="absolute top-4 right-4 bg-navy text-white font-bold px-4 py-2 text-sm uppercase">Commercial</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-construction transition-colors">Commercial Complex Zone B</h3>
                    <p className="text-gray-600 font-light">Modern office spaces designed for growing businesses.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. WHY CHOOSE US (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4 py-20">
         <div className="max-w-7xl mx-auto w-full text-center">
             <SectionHeader title={t("Why Choose Our Real Estate Services", "Pourquoi Choisir Nos Services Immobiliers")} subtitle={t("Reliable, Legal, and High ROI", "Fiable, Légal et Haut Retour sur Investissement")} light center />
             <div className="grid md:grid-cols-3 gap-12 mt-20">
                <div className="p-12 border border-white/10 hover:bg-white/5 transition-colors">
                  <h3 className="text-3xl font-bold text-construction mb-4">Reliable</h3>
                  <p className="text-gray-400">Trusted by hundreds of investors.</p>
                </div>
                <div className="p-12 border border-white/10 hover:bg-white/5 transition-colors">
                  <h3 className="text-3xl font-bold text-construction mb-4">Legal</h3>
                  <p className="text-gray-400">Full compliance with Senegalese law.</p>
                </div>
                <div className="p-12 border border-white/10 hover:bg-white/5 transition-colors">
                  <h3 className="text-3xl font-bold text-construction mb-4">High ROI</h3>
                  <p className="text-gray-400">Strategic locations for maximum growth.</p>
                </div>
             </div>
         </div>
      </section>

      {/* 5. CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-navy text-center px-4">
         <SectionHeader title={t("Ready to Invest?", "Prêt à Investir ?")} subtitle={t("Request Real Estate Consultation", "Demander une Consultation Immobilière")} center />
         <div className="mt-12">
            <Link to={PageRoutes.CONTACT}>
                <Button className="bg-navy text-white hover:bg-construction hover:text-navy px-12 py-5 text-xl font-bold uppercase tracking-widest">
                  {t("Contact Us", "Contactez-nous")}
                </Button>
            </Link>
         </div>
      </section>

    </div>
  );
};

export default RealEstate;
