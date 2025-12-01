
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import HeroBottomNav from '../components/HeroBottomNav';
import { PageRoutes } from '../types';
import { ArrowRight, HardHat, Building2, Pickaxe, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col bg-navy text-white overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
            alt="SOCABEG Construction" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent"></div>
        </div>
        
        {/* Content Area */}
        <div className="relative z-10 flex-grow flex flex-col justify-center items-center px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t("Your Trusted Partner for Senegal’s Development", "Votre Partenaire de Confiance pour le Développement du Sénégal")}
            </h1>
            <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto font-light">
              {t("Construction, Real Estate, and Mining for a Sustainable Future.", "Construction, Immobilier et Mines pour un Avenir Durable.")}
            </p>
          </div>
        </div>

        {/* Bottom Action Area */}
        <div className="relative z-10 w-full flex flex-col items-center gap-4 pb-4">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full px-4">
            <Link to={PageRoutes.CONSTRUCTION} className="w-full md:w-auto">
              <Button fullWidth className="bg-construction text-navy hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
                {t("Explore Our Services", "Découvrir Nos Services")}
              </Button>
            </Link>
            <Link to={PageRoutes.CONTACT} className="w-full md:w-auto">
                <Button fullWidth variant="outline" className="text-white border-white hover:bg-white hover:text-navy px-8 py-4 text-sm md:text-lg font-bold uppercase tracking-wider">
                {t("Contact Us", "Contactez-nous")}
              </Button>
            </Link>
          </div>
          <HeroBottomNav />
        </div>
      </section>

      {/* 2. ABOUT PREVIEW (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <SectionHeader 
              title={t("About SOCABEG", "À Propos de SOCABEG")} 
              subtitle={t("We Build, Develop, and Empower Senegal.", "Nous Construisons, Développons et Autonomisons le Sénégal.")}
            />
            <p className="text-gray-600 text-lg leading-relaxed mb-10 font-light">
              {t(
                "SOCABEG is a multidisciplinary company operating in construction, real estate, and mining. We are committed to developing modern infrastructure and contributing to Senegal’s economic and social progress.",
                "SOCABEG est une entreprise multidisciplinaire opérant dans la construction, l'immobilier et les mines. Nous nous engageons à développer des infrastructures modernes et à contribuer au progrès économique et social du Sénégal."
              )}
            </p>
            <Link to={PageRoutes.ABOUT}>
              <Button className="bg-navy text-white hover:bg-construction hover:text-navy px-8 py-3 uppercase tracking-widest text-sm">
                {t("Learn More About Us", "En Savoir Plus Sur Nous")}
              </Button>
            </Link>
          </div>
          <div className="relative h-96 w-full group">
            <div className="absolute top-4 -left-4 w-full h-full border-4 border-construction z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
              alt="About Socabeg" 
              className="w-full h-full object-cover relative z-10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader title={t("Our Services", "Nos Services")} subtitle={t("What We Deliver to Senegal", "Ce Que Nous Apportons au Sénégal")} className="mb-16" />
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<HardHat className="w-10 h-10" />}
              title={t("Construction", "Construction")}
              link={PageRoutes.CONSTRUCTION}
            />
            <ServiceCard 
              icon={<Building2 className="w-10 h-10" />}
              title={t("Real Estate", "Immobilier")}
              link={PageRoutes.REAL_ESTATE}
            />
             <ServiceCard 
              icon={<Pickaxe className="w-10 h-10" />}
              title={t("Mining", "Mines")}
              link={PageRoutes.MINES}
            />
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
           <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
               <SectionHeader 
                  title={t("Why Choose SOCABEG", "Pourquoi Choisir SOCABEG")} 
                  subtitle={t("A Reliable Partner for Long-Term Development", "Un Partenaire Fiable pour un Développement à Long Terme")} 
                  light 
                />
             </div>
             <div className="grid grid-cols-1 gap-6">
                {[
                  {en: "Expertise in 3 sectors", fr: "Expertise dans 3 secteurs"},
                  {en: "Commitment to quality & safety", fr: "Engagement envers la qualité et la sécurité"},
                  {en: "Experienced professional team", fr: "Équipe professionnelle expérimentée"},
                  {en: "Proven track record", fr: "Historique éprouvé"}
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white/5 hover:bg-white/10 transition-colors border-l-4 border-construction">
                    <CheckCircle2 className="w-8 h-8 text-construction flex-shrink-0" />
                    <span className="text-lg md:text-xl font-medium tracking-wide">{t(item.en, item.fr)}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <SectionHeader title={t("Our Projects", "Nos Projets")} subtitle={t("A Selection of Our Achievements", "Une Sélection de Nos Réalisations")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
             <div className="h-96 bg-gray-200 relative group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2067&auto=format&fit=crop" alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-2xl uppercase border-b-2 border-construction pb-2">Infrastructure Project</span>
                </div>
             </div>
             <div className="h-96 bg-gray-200 relative group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-2xl uppercase border-b-2 border-construction pb-2">Residential Complex</span>
                </div>
             </div>
          </div>
          <div className="mt-12 text-center">
            <Link to={PageRoutes.CONSTRUCTION}>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-12 uppercase tracking-widest">
                {t("See More Projects", "Voir Plus de Projets")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-light py-20 px-4">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Testimonials", "Témoignages")} subtitle={t("What Our Clients Say", "Ce Que Disent Nos Clients")} center />
          <div className="mt-16 max-w-4xl mx-auto">
             <div className="bg-white p-16 shadow-xl relative">
               <span className="text-9xl text-gray-100 absolute top-0 left-4 font-serif leading-none">"</span>
               <p className="text-2xl text-navy font-light leading-relaxed relative z-10 mb-8">
                 {t("Professional, timely, and excellent quality work. SOCABEG is the best partner we have worked with.", "Travail professionnel, ponctuel et d'excellente qualité. SOCABEG est le meilleur partenaire avec lequel nous avons travaillé.")}
               </p>
               <div className="w-12 h-1 bg-construction mx-auto mb-4"></div>
               <div className="font-bold text-navy uppercase tracking-widest text-sm">CEO, Leading Development Firm</div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Our Partners", "Nos Partenaires")} subtitle={t("Trusted by Leaders Across Senegal", "Reconnu par les Leaders au Sénégal")} center />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-32 bg-gray-50 flex items-center justify-center text-gray-300 font-bold text-2xl border border-gray-100 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                LOGO {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BIG CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4 relative">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
         <div className="relative z-10">
           <SectionHeader title={t("Ready to Work With Us?", "Prêt à Travailler Avec Nous ?")} subtitle={t("Let’s Build Senegal’s Future Together.", "Construisons Ensemble l'Avenir du Sénégal.")} light center />
           <Link to={PageRoutes.CONTACT} className="mt-12 inline-block">
              <Button className="bg-construction text-navy hover:bg-white hover:text-navy px-12 py-5 text-xl font-bold uppercase tracking-widest shadow-2xl transform hover:scale-105 transition-all">
                 {t("Contact Us Today", "Contactez-nous Aujourd'hui")}
              </Button>
           </Link>
         </div>
      </section>

    </div>
  );
};

const ServiceCard = ({ icon, title, link }: any) => (
  <div className="bg-white group p-12 shadow-lg hover:shadow-2xl border-b-8 border-transparent hover:border-construction transition-all duration-300 flex flex-col items-center text-center h-full justify-between">
    <div>
      <div className="mb-8 w-24 h-24 bg-gray-50 flex items-center justify-center rounded-full group-hover:bg-navy transition-colors text-navy group-hover:text-white mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-navy mb-4 uppercase tracking-wide">{title}</h3>
    </div>
    <Link to={link} className="mt-8 flex items-center text-construction font-bold uppercase text-sm tracking-widest hover:gap-2 transition-all">
      View Details <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  </div>
);

export default Home;
