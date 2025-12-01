
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const Career: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4">
         <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
           {t("Careers", "Carrières")}
         </h1>
         <p className="text-sm md:text-base text-gray-300 mb-12 max-w-3xl mx-auto">
           {t("Join the SOCABEG Team.", "Rejoignez l'Équipe SOCABEG.")}
         </p>
      </section>

      {/* 2. WHY WORK WITH US (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Why Work With Us", "Pourquoi Travailler Avec Nous")} subtitle={t("Build Your Future With Us", "Construisez Votre Avenir Avec Nous")} center />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
             <div className="p-8 shadow-lg border-t-4 border-construction">
                <h3 className="text-xl font-bold mb-4">{t("Professional Growth", "Croissance Professionnelle")}</h3>
             </div>
             <div className="p-8 shadow-lg border-t-4 border-construction">
                <h3 className="text-xl font-bold mb-4">{t("Inclusive Culture", "Culture Inclusive")}</h3>
             </div>
             <div className="p-8 shadow-lg border-t-4 border-construction">
                <h3 className="text-xl font-bold mb-4">{t("Impactful Work", "Travail Impactant")}</h3>
             </div>
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light px-4 py-20">
         <div className="max-w-7xl mx-auto w-full">
            <SectionHeader title={t("Open Positions", "Postes Ouverts")} subtitle={t("Apply to Join Our Team", "Postulez pour Rejoindre Notre Équipe")} />
            <div className="mt-16 bg-white p-12 text-center shadow-sm">
               <p className="text-gray-500 mb-8">{t("No specific openings right now.", "Aucun poste spécifique pour le moment.")}</p>
            </div>
         </div>
      </section>

      {/* 4. RECRUITMENT PROCESS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white px-4 py-20">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Recruitment", "Recrutement")} subtitle={t("How We Hire", "Comment Nous Recrutons")} light center />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-16">
             <Step title={t("Apply", "Postuler")} />
             <span className="text-construction text-3xl">→</span>
             <Step title={t("Screening", "Sélection")} />
             <span className="text-construction text-3xl">→</span>
             <Step title={t("Interview", "Entretien")} />
             <span className="text-construction text-3xl">→</span>
             <Step title={t("Decision", "Décision")} />
          </div>
        </div>
      </section>

      {/* 5. APPLY FORM (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
         <div className="max-w-4xl mx-auto w-full text-center">
            <SectionHeader title={t("Apply Now", "Postuler Maintenant")} subtitle={t("Submit Your Application", "Soumettez Votre Candidature")} center />
             <form className="mt-12 space-y-6 text-left">
                <div className="grid md:grid-cols-2 gap-6">
                   <input type="text" placeholder={t("Name", "Nom")} className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-construction" />
                   <input type="email" placeholder={t("Email", "Email")} className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-construction" />
                </div>
                <textarea rows={6} placeholder={t("Cover Letter", "Lettre de Motivation")} className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-construction"></textarea>
                <div className="text-center">
                  <Button className="bg-navy text-white px-12 py-4">{t("Submit Application", "Soumettre la Candidature")}</Button>
                </div>
             </form>
         </div>
      </section>
    </div>
  );
};

const Step = ({title}: any) => (
   <div className="bg-white/10 px-8 py-4 rounded-full font-bold uppercase tracking-wider">{title}</div>
)

export default Career;
