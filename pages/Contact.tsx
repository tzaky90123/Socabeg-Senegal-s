
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageRoutes } from '../types';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4">
         <div className="relative z-10 max-w-5xl mx-auto pb-20">
           <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
             {t("Contact Us", "Contactez-nous")}
           </h1>
           <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
             {t("We Are Ready to Support Your Projects.", "Nous Sommes Prêts à Soutenir Vos Projets.")}
           </p>
         </div>

         {/* Buttons at Bottom */}
        <div className="absolute bottom-12 w-full flex flex-col md:flex-row gap-4 justify-center items-center z-20 px-4">
          <button onClick={() => window.location.href = 'mailto:info@socabeg.com'} className="w-full md:w-auto">
             <Button fullWidth className="bg-construction text-navy hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
              {t("Email", "Email")}
            </Button>
          </button>
          <button onClick={() => window.location.href = 'tel:+221338000000'} className="w-full md:w-auto">
             <Button fullWidth variant="outline" className="text-white border-white hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
              {t("Call", "Appel")}
            </Button>
          </button>
        </div>
      </section>

      {/* 2. MAIN CONTACT FORM (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-4 py-20">
        <div className="max-w-4xl mx-auto w-full">
            <SectionHeader title={t("Send a Message", "Envoyer un Message")} subtitle={t("Fill Out the Form Below", "Remplissez le Formulaire Ci-dessous")} center />
            <form className="mt-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <input type="text" placeholder={t("Name", "Nom")} className="w-full p-5 bg-gray-50 border-b-2 border-gray-200 focus:border-construction outline-none transition-colors" />
                 <input type="text" placeholder={t("Phone", "Téléphone")} className="w-full p-5 bg-gray-50 border-b-2 border-gray-200 focus:border-construction outline-none transition-colors" />
              </div>
              <input type="email" placeholder={t("Email", "Email")} className="w-full p-5 bg-gray-50 border-b-2 border-gray-200 focus:border-construction outline-none transition-colors" />
              <textarea rows={5} placeholder={t("Message", "Message")} className="w-full p-5 bg-gray-50 border-b-2 border-gray-200 focus:border-construction outline-none transition-colors"></textarea>
              <div className="text-center pt-8">
                 <Button className="bg-navy text-white px-16 py-4 uppercase tracking-widest font-bold hover:bg-construction hover:text-navy">
                    {t("Send Message", "Envoyer le Message")}
                 </Button>
              </div>
            </form>
        </div>
      </section>

      {/* 3. COMPANY CONTACT INFO (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light px-4 py-20">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
           <div>
              <SectionHeader title={t("Company Details", "Détails de l'Entreprise")} subtitle={t("How to Reach Us", "Comment Nous Joindre")} />
           </div>
           <div className="space-y-8">
              <div className="bg-white p-8 flex items-start gap-6 shadow-md border-l-4 border-navy">
                 <MapPin className="w-8 h-8 text-construction" />
                 <div>
                    <h3 className="font-bold text-navy uppercase mb-2">{t("Address", "Adresse")}</h3>
                    <p className="text-gray-600">123 Avenue Leopold Sedar Senghor, Dakar</p>
                 </div>
              </div>
              <div className="bg-white p-8 flex items-start gap-6 shadow-md border-l-4 border-navy">
                 <Phone className="w-8 h-8 text-construction" />
                 <div>
                    <h3 className="font-bold text-navy uppercase mb-2">{t("Phone", "Téléphone")}</h3>
                    <p className="text-gray-600">+221 33 800 00 00</p>
                 </div>
              </div>
              <div className="bg-white p-8 flex items-start gap-6 shadow-md border-l-4 border-navy">
                 <Mail className="w-8 h-8 text-construction" />
                 <div>
                    <h3 className="font-bold text-navy uppercase mb-2">{t("Email", "Email")}</h3>
                    <p className="text-gray-600">info@socabeg.com</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. SECONDARY CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-construction text-navy text-center px-4">
         <SectionHeader title={t("Need Immediate Assistance?", "Besoin d'une Assistance Immédiate ?")} subtitle={t("Call or Email Us Now", "Appelez ou Envoyez-nous un Email Maintenant")} center />
         <div className="mt-12 flex flex-col md:flex-row gap-8">
            <Button className="bg-navy text-white px-12 py-5 text-xl font-bold uppercase tracking-widest">
               +221 33 800 00 00
            </Button>
            <Button className="bg-white text-navy px-12 py-5 text-xl font-bold uppercase tracking-widest hover:bg-navy hover:text-white">
               info@socabeg.com
            </Button>
         </div>
      </section>
    </div>
  );
};

export default Contact;
