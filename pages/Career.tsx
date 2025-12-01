
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import HeroBottomNav from '../components/HeroBottomNav';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const Career: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 overflow-hidden pb-20">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
         </div>

         <div className="relative z-10 max-w-5xl mx-auto mb-12">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             {t("Careers", "Carrières")}
           </h1>
           <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto font-light">
             {t("Join the SOCABEG Team.", "Rejoignez l'Équipe SOCABEG.")}
           </p>
         </div>

         {/* Buttons */}
        <div className="relative z-10 flex flex-col md:flex-row gap-4 justify-center items-center px-4">
          <Link to={PageRoutes.CAREER} className="w-full md:w-auto">
             <Button fullWidth className="bg-construction text-navy hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
              {t("Apply", "Postuler")}
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

      {/* 2. WHY WORK WITH US (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Why Work With Us", "Pourquoi Travailler Avec Nous")} subtitle={t("Build Your Future With Us", "Construisez Votre Avenir Avec Nous")} center />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
             <div className="p-10 shadow-xl border-t-8 border-construction bg-gray-50">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{t("Professional Growth", "Croissance Professionnelle")}</h3>
                <p className="text-gray-600 font-light">Continuous learning and development opportunities.</p>
             </div>
             <div className="p-10 shadow-xl border-t-8 border-construction bg-gray-50">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{t("Inclusive Culture", "Culture Inclusive")}</h3>
                <p className="text-gray-600 font-light">A diverse environment where every voice matters.</p>
             </div>
             <div className="p-10 shadow-xl border-t-8 border-construction bg-gray-50">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{t("Impactful Work", "Travail Impactant")}</h3>
                <p className="text-gray-600 font-light">Contribute to projects that shape the nation.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light px-4 py-20">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Open Positions", "Postes Ouverts")} subtitle={t("Apply to Join Our Team", "Postulez pour Rejoindre Notre Équipe")} />
            <div className="mt-16 bg-white p-16 text-center shadow-lg border border-gray-100">
               <p className="text-gray-500 text-xl font-light">{t("No specific openings right now. Please submit a spontaneous application.", "Aucun poste spécifique pour le moment. Veuillez soumettre une candidature spontanée.")}</p>
            </div>
         </div>
      </section>

      {/* 4. RECRUITMENT PROCESS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Recruitment", "Recrutement")} subtitle={t("How We Hire", "Comment Nous Recrutons")} light center />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-20">
             <Step title={t("Apply", "Postuler")} num="1" />
             <div className="w-1 h-12 md:w-16 md:h-1 bg-white/20"></div>
             <Step title={t("Screening", "Sélection")} num="2" />
             <div className="w-1 h-12 md:w-16 md:h-1 bg-white/20"></div>
             <Step title={t("Interview", "Entretien")} num="3" />
             <div className="w-1 h-12 md:w-16 md:h-1 bg-white/20"></div>
             <Step title={t("Decision", "Décision")} num="4" />
          </div>
        </div>
      </section>

      {/* 5. APPLY FORM (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
         <div className="max-w-4xl mx-auto w-full text-center">
            <SectionHeader title={t("Apply Now", "Postuler Maintenant")} subtitle={t("Submit Your Application", "Soumettez Votre Candidature")} center />
             <form className="mt-12 space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-6">
                   <input type="text" placeholder={t("Name", "Nom")} className="w-full p-5 bg-gray-50 border-b-2 border-gray-200 outline-none focus:border-construction transition-colors" />
                   <input type="email" placeholder={t("Email", "Email")} className="w-full p-5 bg-gray-50 border-b-2 border-gray-200 outline-none focus:border-construction transition-colors" />
                </div>
                <textarea rows={6} placeholder={t("Cover Letter / Message", "Lettre de Motivation / Message")} className="w-full p-5 bg-gray-50 border-b-2 border-gray-200 outline-none focus:border-construction transition-colors"></textarea>
                <div className="text-center pt-8">
                  <Button className="bg-navy text-white px-16 py-5 text-lg font-bold uppercase tracking-widest hover:bg-construction hover:text-navy">
                    {t("Submit Application", "Soumettre la Candidature")}
                  </Button>
                </div>
             </form>
         </div>
      </section>
    </div>
  );
};

const Step = ({title, num}: any) => (
   <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full border-2 border-construction flex items-center justify-center text-construction font-bold text-xl mb-4 bg-navy">
        {num}
      </div>
      <div className="text-lg font-bold uppercase tracking-wider">{title}</div>
   </div>
)

export default Career;
