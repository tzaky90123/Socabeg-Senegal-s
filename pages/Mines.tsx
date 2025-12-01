
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const Mines: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941344-00b4ec73303b?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
         <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            {t("Mining Operations", "Opérations Minières")}
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-12 max-w-3xl mx-auto">
            {t("Responsible Exploration for National Growth.", "Exploration Responsable pour la Croissance Nationale.")}
          </p>
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
               <div key={i} className="py-12 px-4 bg-gray-50 border-t-4 border-navy hover:bg-navy hover:text-white transition-all">
                 <h3 className="font-bold text-sm uppercase tracking-widest">{t(svc, svc)}</h3>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. RESPONSIBILITY (Fullscreen) */}
       <section className="min-h-screen flex flex-col justify-center bg-construction text-navy px-4 py-20">
        <div className="max-w-5xl mx-auto w-full text-center">
          <SectionHeader title={t("Responsibility", "Responsabilité")} subtitle={t("Sustainable & Ethical Mining", "Exploitation Minière Durable et Éthique")} center />
           <p className="text-xl md:text-2xl font-medium mt-12 leading-relaxed">
             {t(
               "Environmental commitment, safety standards, and sustainable practices.",
               "Engagement environnemental, normes de sécurité et pratiques durables."
             )}
           </p>
        </div>
      </section>

      {/* 4. PROJECTS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Projects", "Projets")} subtitle={t("Mining Achievements", "Réalisations Minières")} />
            <div className="h-[50vh] bg-gray-200 mt-12 w-full flex items-center justify-center text-gray-500 text-2xl font-bold">
               Map of Mining Sites
            </div>
         </div>
      </section>

      {/* 5. COMPLIANCE (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4 py-20">
          <div className="max-w-7xl mx-auto w-full text-center">
             <SectionHeader title={t("Compliance", "Conformité")} subtitle={t("Legal & Environmental Certifications", "Certifications Légales et Environnementales")} light center />
             <div className="grid md:grid-cols-3 gap-12 mt-16">
                <div className="h-32 bg-white/10 flex items-center justify-center">ISO 14001</div>
                <div className="h-32 bg-white/10 flex items-center justify-center">Safety First</div>
                <div className="h-32 bg-white/10 flex items-center justify-center">Eco Certified</div>
             </div>
          </div>
      </section>

      {/* 6. CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-navy text-center px-4">
          <SectionHeader title={t("Work With Our Mining Team", "Travailler Avec Notre Équipe Minière")} subtitle={t("Contact Us for More Information", "Contactez-nous pour Plus d'Informations")} center />
          <Link to={PageRoutes.CONTACT} className="mt-12">
            <Button className="bg-navy text-white px-12 py-5 text-xl font-bold uppercase tracking-widest">
               {t("Contact Us", "Contactez-nous")}
            </Button>
          </Link>
      </section>
    </div>
  );
};

export default Mines;
