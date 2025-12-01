
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const RealEstate: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
         <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {t("Real Estate", "Immobilier")}
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-12 max-w-3xl mx-auto">
            {t("Developing Modern Living & Investment Opportunities.", "Développer des Espaces de Vie Modernes et des Opportunités d'Investissement.")}
          </p>
        </div>
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
               <div key={i} className="p-8 border border-gray-200 hover:border-construction hover:shadow-lg transition-all">
                 <h3 className="text-xl font-bold text-navy uppercase">{t(svc, svc)}</h3>
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
               <div className="bg-white p-6 shadow-xl">
                  <div className="h-64 bg-gray-200 mb-6"><img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Prop 1"/></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Luxury Apartments Dakar</h3>
                  <p className="text-gray-600">Premium living in the heart of the city.</p>
               </div>
               <div className="bg-white p-6 shadow-xl">
                  <div className="h-64 bg-gray-200 mb-6"><img src="https://images.unsplash.com/photo-1460317442991-0ec2aaefcb88?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Prop 2"/></div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Commercial Complex Zone B</h3>
                  <p className="text-gray-600">Modern office spaces for businesses.</p>
               </div>
            </div>
         </div>
      </section>

      {/* 4. WHY CHOOSE US (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4 py-20">
         <div className="max-w-7xl mx-auto w-full text-center">
             <SectionHeader title={t("Why Choose Our Real Estate Services", "Pourquoi Choisir Nos Services Immobiliers")} subtitle={t("Reliable, Legal, and High ROI", "Fiable, Légal et Haut Retour sur Investissement")} light center />
             <div className="grid md:grid-cols-3 gap-12 mt-16">
                <div className="p-8 border border-white/20"><h3 className="text-2xl font-bold text-construction">Reliable</h3></div>
                <div className="p-8 border border-white/20"><h3 className="text-2xl font-bold text-construction">Legal</h3></div>
                <div className="p-8 border border-white/20"><h3 className="text-2xl font-bold text-construction">High ROI</h3></div>
             </div>
         </div>
      </section>

      {/* 5. CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-navy text-center px-4">
         <h2 className="text-xl md:text-3xl font-bold mb-6">{t("Ready to Invest?", "Prêt à Investir ?")}</h2>
         <p className="text-xl text-gray-500 mb-12 uppercase tracking-widest">{t("Request Real Estate Consultation", "Demander une Consultation Immobilière")}</p>
         <Link to={PageRoutes.CONTACT}>
            <Button className="bg-navy text-white hover:bg-construction hover:text-navy px-12 py-5 text-xl">
               {t("Contact Us", "Contactez-nous")}
            </Button>
         </Link>
      </section>

    </div>
  );
};

export default RealEstate;
