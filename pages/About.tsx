
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4">
        <div className="relative z-10 max-w-5xl mx-auto pb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("About Us", "À Propos de Nous")}
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
            {t("Building Senegal Through Excellence and Innovation.", "Construire le Sénégal par l'Excellence et l'Innovation.")}
          </p>
        </div>
        
        {/* Buttons at Bottom */}
        <div className="absolute bottom-12 w-full flex flex-col md:flex-row gap-4 justify-center items-center z-20 px-4">
          <Link to={PageRoutes.HOME} className="w-full md:w-auto">
             <Button fullWidth variant="outline" className="text-white border-white hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
              {t("Home", "Accueil")}
            </Button>
          </Link>
          <Link to={PageRoutes.CONTACT} className="w-full md:w-auto">
             <Button fullWidth className="bg-construction text-navy hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
              {t("Contact", "Contact")}
            </Button>
          </Link>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeader title={t("Who We Are", "Qui Nous Sommes")} subtitle={t("A Multidisciplinary Group Serving Senegal’s Development", "Un Groupe Multidisciplinaire au Service du Développement du Sénégal")} center />
          <p className="text-xl md:text-2xl text-gray-600 mt-12 leading-relaxed font-light">
            "{t(
              "SOCABEG contributes to the development of Africa, particularly Senegal, through ambitious and sustainable projects in construction, real estate, and mining.",
              "SOCABEG contribue au développement de l'Afrique, en particulier du Sénégal, à travers des projets ambitieux et durables dans la construction, l'immobilier et les mines."
            )}"
          </p>
        </div>
      </section>

      {/* 3. VISION & MISSION (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 w-full items-center">
          <div>
             <SectionHeader title={t("Our Purpose", "Notre But")} subtitle={t("Vision & Mission", "Vision & Mission")} />
          </div>
          <div className="space-y-8">
             <div className="bg-white p-10 border-l-8 border-construction shadow-sm">
                <h3 className="text-2xl font-bold text-navy mb-4 uppercase">{t("Vision", "Vision")}</h3>
                <p className="text-gray-600 text-lg">{t("To be the leading infrastructure partner in West Africa.", "Être le partenaire d'infrastructure leader en Afrique de l'Ouest.")}</p>
             </div>
             <div className="bg-white p-10 border-l-8 border-navy shadow-sm">
                <h3 className="text-2xl font-bold text-navy mb-4 uppercase">{t("Mission", "Mission")}</h3>
                <p className="text-gray-600 text-lg">{t("Delivering sustainable projects that empower communities.", "Livrer des projets durables qui autonomisent les communautés.")}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. VALUES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4">
         <div className="max-w-7xl mx-auto w-full text-center">
            <SectionHeader title={t("Our Values", "Nos Valeurs")} subtitle={t("The Foundation of Our Work", "La Fondation de Notre Travail")} light center />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-16">
               {["Excellence", "Safety", "Integrity", "Responsibility", "Innovation"].map((val, i) => (
                 <div key={i} className="p-8 border border-white/20 hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center">
                    <span className="font-bold text-xl uppercase tracking-widest">{t(val, val)}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. MILESTONES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Milestones", "Jalons")} subtitle={t("Our Journey", "Notre Parcours")} center />
            <div className="mt-16 relative border-l-4 border-gray-200 ml-6 md:ml-1/2 space-y-12">
               {/* Simplified Timeline */}
               <TimelineItem year="2000" title={t("Foundation", "Fondation")} />
               <TimelineItem year="2010" title={t("Expansion into Mining", "Expansion vers les Mines")} />
               <TimelineItem year="2020" title={t("Major Infrastructure Projects", "Projets d'Infrastructure Majeurs")} />
            </div>
         </div>
      </section>

      {/* 6. PARTNERS (Fullscreen) */}
       <section className="min-h-screen flex flex-col justify-center bg-gray-light py-20 px-4">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Our Partners", "Nos Partenaires")} subtitle={t("Trusted by Leaders Across Senegal", "Reconnu par les Leaders au Sénégal")} center />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 opacity-50">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-white flex items-center justify-center text-gray-400 font-bold text-xl rounded border border-gray-200">
                PARTNER {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-construction text-navy text-center px-4">
          <h2 className="text-xl md:text-3xl font-bold mb-8">{t("Let’s Work Together", "Travaillons Ensemble")}</h2>
          <p className="text-2xl mb-12 opacity-80 font-bold uppercase tracking-widest">{t("Contact Our Team Today", "Contactez Notre Équipe Aujourd'hui")}</p>
          <Link to={PageRoutes.CONTACT}>
             <Button className="bg-navy text-white hover:bg-white hover:text-navy px-12 py-5 text-xl">
               {t("Contact Us", "Contactez-nous")}
             </Button>
          </Link>
      </section>
    </div>
  );
};

const TimelineItem = ({year, title}: any) => (
  <div className="ml-8 relative">
     <div className="absolute -left-[42px] top-1 w-6 h-6 bg-construction rounded-full border-4 border-white"></div>
     <h3 className="text-4xl font-bold text-navy">{year}</h3>
     <p className="text-xl text-gray-500">{title}</p>
  </div>
);

export default About;
