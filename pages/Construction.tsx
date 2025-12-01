
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import HeroBottomNav from '../components/HeroBottomNav';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';
import { ArrowRight } from 'lucide-react';

const Construction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 overflow-hidden pb-20">
         <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
             alt="Construction Site" 
             className="w-full h-full object-cover opacity-30"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
         </div>
         
         <div className="relative z-10 max-w-5xl mx-auto mb-12">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             {t("Construction Services", "Services de Construction")}
           </h1>
           <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto font-light">
             {t("We Build the Infrastructure of Tomorrow.", "Nous Construisons l'Infrastructure de Demain.")}
           </p>
         </div>

         {/* Buttons */}
        <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-center items-center px-4">
          <Link to={PageRoutes.CONSTRUCTION} className="w-full md:w-auto">
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

        {/* Hero Nav */}
        <HeroBottomNav />
      </section>

      {/* 2. SERVICES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
           <SectionHeader title={t("Services", "Services")} subtitle={t("What We Deliver in Construction", "Ce Que Nous Livrons en Construction")} />
           <div className="grid md:grid-cols-4 gap-8 mt-16">
             {[
               "Structural Work", "Residential Construction", "Commercial Buildings", "Civil Engineering",
               "Infrastructure Development", "Renovation", "Roadworks", "Public Facilities"
             ].map((svc, i) => (
               <div key={i} className="p-10 bg-gray-50 hover:bg-navy hover:text-white transition-all duration-300 border-l-4 border-construction group h-full flex flex-col justify-between">
                 <h3 className="font-bold text-lg uppercase leading-snug tracking-wide">{t(svc, svc)}</h3>
                 <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-2 duration-300">
                    <ArrowRight className="w-6 h-6 text-construction" />
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 3. WORK PROCESS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light px-4 py-20">
         <div className="max-w-7xl mx-auto w-full text-center">
            <SectionHeader title={t("Process", "Processus")} subtitle={t("How We Work", "Comment Nous Travaillons")} center />
            <div className="grid md:grid-cols-4 gap-8 mt-20 items-center relative">
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 -z-0 transform -translate-y-1/2"></div>
               <ProcessStep number="01" title={t("Consultation", "Consultation")} />
               <ProcessStep number="02" title={t("Planning", "Planification")} />
               <ProcessStep number="03" title={t("Execution", "Exécution")} />
               <ProcessStep number="04" title={t("Quality Assurance", "Assurance Qualité")} />
            </div>
         </div>
      </section>

      {/* 4. PORTFOLIO (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Projects", "Projets")} subtitle={t("Our Construction Achievements", "Nos Réalisations de Construction")} />
            <div className="grid md:grid-cols-2 gap-8 mt-16 h-[60vh]">
               <div className="h-full bg-gray-200 overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1541976594389-6e9a9e403980?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Project A"/>
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-3xl font-bold transition-opacity uppercase tracking-widest border-8 border-transparent group-hover:border-white/20 bg-clip-border">
                     Tower A
                  </div>
               </div>
               <div className="h-full bg-gray-200 overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Project B"/>
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-3xl font-bold transition-opacity uppercase tracking-widest border-8 border-transparent group-hover:border-white/20 bg-clip-border">
                     Bridge B
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. SAFETY (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4 py-20">
         <div className="max-w-5xl mx-auto text-center">
            <SectionHeader title={t("Safety", "Sécurité")} subtitle={t("Our Commitment to Quality & Protection", "Notre Engagement envers la Qualité et la Protection")} light center />
            <div className="mt-16 bg-white/5 p-12 border border-white/10">
               <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
               "{t(
                  "We prioritize the safety of our workers and the integrity of our structures above all else. Our sites adhere to strict international safety protocols.",
                  "Nous priorisons la sécurité de nos travailleurs et l'intégrité de nos structures avant tout. Nos sites respectent des protocoles de sécurité internationaux stricts."
               )}"
               </p>
            </div>
         </div>
      </section>
      
      {/* 6. CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-construction text-navy text-center px-4">
         <SectionHeader title={t("Need a Construction Partner?", "Besoin d'un Partenaire de Construction ?")} subtitle={t("Let’s Build Together.", "Construisons Ensemble.")} center />
         <div className="mt-12">
            <Link to={PageRoutes.CONTACT}>
               <Button className="bg-navy text-white hover:bg-white hover:text-navy px-12 py-5 text-xl font-bold uppercase tracking-widest">
                  {t("Discuss Your Project", "Discutez de Votre Projet")}
               </Button>
            </Link>
         </div>
      </section>

    </div>
  );
};

const ProcessStep = ({number, title}: any) => (
  <div className="bg-white p-8 shadow-2xl rounded-sm w-56 h-56 flex flex-col items-center justify-center mx-auto border-t-8 border-construction z-10 hover:-translate-y-2 transition-transform duration-300">
     <span className="text-5xl font-bold text-gray-200 mb-4">{number}</span>
     <span className="text-sm font-bold text-navy uppercase tracking-widest text-center">{title}</span>
  </div>
);

export default Construction;
