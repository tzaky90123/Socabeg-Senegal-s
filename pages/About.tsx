
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import HeroBottomNav from '../components/HeroBottomNav';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
            alt="Corporate Meeting" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("About Us", "À Propos de Nous")}
          </h1>
          <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto font-light">
            {t("Building Senegal Through Excellence and Innovation.", "Construire le Sénégal par l'Excellence et l'Innovation.")}
          </p>
        </div>
        
        {/* Buttons */}
        <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-center items-center px-4">
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

        {/* Hero Nav */}
        <HeroBottomNav />
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
             <div className="bg-white p-12 border-l-8 border-construction shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest">{t("Vision", "Vision")}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{t("To be the leading infrastructure partner in West Africa.", "Être le partenaire d'infrastructure leader en Afrique de l'Ouest.")}</p>
             </div>
             <div className="bg-white p-12 border-l-8 border-navy shadow-sm hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-navy mb-4 uppercase tracking-widest">{t("Mission", "Mission")}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{t("Delivering sustainable projects that empower communities.", "Livrer des projets durables qui autonomisent les communautés.")}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. VALUES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4">
         <div className="max-w-7xl mx-auto w-full text-center">
            <SectionHeader title={t("Our Values", "Nos Valeurs")} subtitle={t("The Foundation of Our Work", "La Fondation de Notre Travail")} light center />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16">
               {["Excellence", "Safety", "Integrity", "Responsibility", "Innovation"].map((val, i) => (
                 <div key={i} className="aspect-square flex items-center justify-center border border-white/10 hover:bg-white hover:text-navy transition-all duration-300 group cursor-default">
                    <span className="font-bold text-lg md:text-xl uppercase tracking-widest group-hover:scale-110 transition-transform">{t(val, val)}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. MILESTONES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Milestones", "Jalons")} subtitle={t("Our Journey", "Notre Parcours")} center />
            <div className="mt-20 relative border-l-4 border-gray-100 ml-6 md:ml-1/2 space-y-20">
               <TimelineItem year="2000" title={t("Foundation of SOCABEG", "Fondation de SOCABEG")} />
               <TimelineItem year="2010" title={t("Expansion into Mining Sector", "Expansion vers le Secteur Minier")} />
               <TimelineItem year="2020" title={t("Major National Infrastructure Projects", "Projets d'Infrastructure Majeurs")} />
            </div>
         </div>
      </section>

      {/* 6. PARTNERS (Fullscreen) */}
       <section className="min-h-screen flex flex-col justify-center bg-gray-light py-20 px-4">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Our Partners", "Nos Partenaires")} subtitle={t("Trusted by Leaders Across Senegal", "Reconnu par les Leaders au Sénégal")} center />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-32 bg-white flex items-center justify-center text-gray-300 font-bold text-xl border border-gray-100">
                PARTNER {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-construction text-navy text-center px-4">
          <SectionHeader title={t("Let’s Work Together", "Travaillons Ensemble")} subtitle={t("Contact Our Team Today", "Contactez Notre Équipe Aujourd'hui")} center />
          <div className="mt-12">
            <Link to={PageRoutes.CONTACT}>
               <Button className="bg-navy text-white hover:bg-white hover:text-navy px-12 py-5 text-xl font-bold uppercase tracking-widest shadow-xl">
                 {t("Contact Us", "Contactez-nous")}
               </Button>
            </Link>
          </div>
      </section>
    </div>
  );
};

const TimelineItem = ({year, title}: any) => (
  <div className="ml-12 relative">
     <div className="absolute -left-[66px] top-1 w-8 h-8 bg-construction rounded-full border-4 border-white shadow-lg"></div>
     <h3 className="text-5xl font-bold text-gray-200 mb-2">{year}</h3>
     <p className="text-2xl text-navy font-bold">{title}</p>
  </div>
);

export default About;
