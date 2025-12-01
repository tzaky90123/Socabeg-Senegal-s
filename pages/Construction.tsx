
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';
import { ArrowRight } from 'lucide-react';

const Construction: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
         
         <div className="relative z-10 max-w-5xl mx-auto pb-20">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             {t("Construction Services", "Services de Construction")}
           </h1>
           <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
             {t("We Build the Infrastructure of Tomorrow.", "Nous Construisons l'Infrastructure de Demain.")}
           </p>
         </div>

         {/* Buttons at Bottom */}
        <div className="absolute bottom-12 w-full flex flex-col md:flex-row gap-4 justify-center items-center z-20 px-4">
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
      </section>

      {/* 2. SERVICES (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
           <SectionHeader title={t("Services", "Services")} subtitle={t("What We Deliver in Construction", "Ce Que Nous Livrons en Construction")} />
           <div className="grid md:grid-cols-4 gap-6 mt-16">
             {[
               "Structural Work", "Residential Construction", "Commercial Buildings", "Civil Engineering",
               "Infrastructure Development", "Renovation", "Roadworks", "Public Facilities"
             ].map((svc, i) => (
               <div key={i} className="p-8 bg-gray-50 hover:bg-navy hover:text-white transition-all duration-300 border-b-4 border-construction group">
                 <h3 className="font-bold text-lg uppercase leading-snug">{t(svc, svc)}</h3>
                 <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
            <div className="grid md:grid-cols-4 gap-8 mt-16 items-center">
               <ProcessStep number="01" title={t("Consultation", "Consultation")} />
               <div className="hidden md:block h-1 bg-gray-300 flex-grow"></div>
               <ProcessStep number="02" title={t("Planning", "Planification")} />
               <div className="hidden md:block h-1 bg-gray-300 flex-grow"></div>
               <ProcessStep number="03" title={t("Execution", "Exécution")} />
               <div className="hidden md:block h-1 bg-gray-300 flex-grow"></div>
               <ProcessStep number="04" title={t("Quality Assurance", "Assurance Qualité")} />
            </div>
         </div>
      </section>

      {/* 4. PORTFOLIO (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Projects", "Projets")} subtitle={t("Our Construction Achievements", "Nos Réalisations de Construction")} />
            <div className="grid md:grid-cols-2 gap-8 mt-16 h-[50vh]">
               <div className="h-full bg-gray-200 overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1541976594389-6e9a9e403980?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Project A"/>
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-2xl font-bold transition-opacity">
                     Tower A
                  </div>
               </div>
               <div className="h-full bg-gray-200 overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Project B"/>
                  <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-2xl font-bold transition-opacity">
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
            <div className="mt-12 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
               {t(
                  "We prioritize the safety of our workers and the integrity of our structures above all else. Our sites adhere to strict international safety protocols.",
                  "Nous priorisons la sécurité de nos travailleurs et l'intégrité de nos structures avant tout. Nos sites respectent des protocoles de sécurité internationaux stricts."
               )}
            </div>
         </div>
      </section>
      
      {/* 6. CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-construction text-navy text-center px-4">
         <h2 className="text-xl md:text-3xl font-bold mb-6">{t("Need a Construction Partner?", "Besoin d'un Partenaire de Construction ?")}</h2>
         <p className="text-2xl font-bold uppercase tracking-widest mb-12">{t("Let’s Build Together.", "Construisons Ensemble.")}</p>
         <Link to={PageRoutes.CONTACT}>
            <Button className="bg-navy text-white hover:bg-white hover:text-navy px-12 py-5 text-xl">
               {t("Discuss Your Project", "Discutez de Votre Projet")}
            </Button>
         </Link>
      </section>

    </div>
  );
};

const ProcessStep = ({number, title}: any) => (
  <div className="bg-white p-8 shadow-lg rounded-full w-48 h-48 flex flex-col items-center justify-center mx-auto border-4 border-navy z-10">
     <span className="text-3xl font-bold text-construction">{number}</span>
     <span className="text-sm font-bold text-navy uppercase mt-2">{title}</span>
  </div>
);

export default Construction;
