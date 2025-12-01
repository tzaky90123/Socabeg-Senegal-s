
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import { PageRoutes } from '../types';
import { ArrowRight, HardHat, Building2, Pickaxe, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      
      {/* 1. HERO (Fullscreen) */}
      <section className="relative min-h-screen flex flex-col justify-center items-center bg-navy text-white overflow-hidden text-center px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="SOCABEG Construction" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto pb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("Your Trusted Partner for Senegal’s Development", "Votre Partenaire de Confiance pour le Développement du Sénégal")}
          </h1>
          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
            {t("Construction, Real Estate, and Mining for a Sustainable Future.", "Construction, Immobilier et Mines pour un Avenir Durable.")}
          </p>
        </div>

        {/* Buttons at Bottom of Hero */}
        <div className="absolute bottom-12 w-full flex flex-col md:flex-row gap-4 justify-center items-center z-20 px-4">
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
      </section>

      {/* 2. ABOUT PREVIEW (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
          <div>
            <SectionHeader 
              title={t("About SOCABEG", "À Propos de SOCABEG")} 
              subtitle={t("We Build, Develop, and Empower Senegal.", "Nous Construisons, Développons et Autonomisons le Sénégal.")}
            />
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              {t(
                "SOCABEG is a multidisciplinary company operating in construction, real estate, and mining. We are committed to developing modern infrastructure and contributing to Senegal’s economic and social progress.",
                "SOCABEG est une entreprise multidisciplinaire opérant dans la construction, l'immobilier et les mines. Nous nous engageons à développer des infrastructures modernes et à contribuer au progrès économique et social du Sénégal."
              )}
            </p>
            <Link to={PageRoutes.ABOUT}>
              <Button className="bg-navy text-white hover:bg-construction hover:text-navy px-8 py-3">
                {t("Learn More About Us", "En Savoir Plus Sur Nous")}
              </Button>
            </Link>
          </div>
          <div className="relative h-96 w-full">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop" 
              alt="About Socabeg" 
              className="w-full h-full object-cover rounded-sm shadow-2xl"
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
              desc={t(
                "Infrastructure and structural projects that shape communities.",
                "Projets d'infrastructure et structurels qui façonnent les communautés."
              )}
              link={PageRoutes.CONSTRUCTION}
            />
            <ServiceCard 
              icon={<Building2 className="w-10 h-10" />}
              title={t("Real Estate", "Immobilier")}
              desc={t(
                "Modern homes, properties, and investment opportunities.",
                "Maisons modernes, propriétés et opportunités d'investissement."
              )}
              link={PageRoutes.REAL_ESTATE}
            />
             <ServiceCard 
              icon={<Pickaxe className="w-10 h-10" />}
              title={t("Mining", "Mines")}
              desc={t(
                "Responsible extraction supporting national growth.",
                "Extraction responsable soutenant la croissance nationale."
              )}
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
             <div className="grid grid-cols-1 gap-8">
                {[
                  {en: "Expertise in 3 sectors", fr: "Expertise dans 3 secteurs"},
                  {en: "Commitment to quality & safety", fr: "Engagement envers la qualité et la sécurité"},
                  {en: "Experienced professional team", fr: "Équipe professionnelle expérimentée"},
                  {en: "Proven track record", fr: "Historique éprouvé"}
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-navy-light border-l-4 border-construction rounded-sm">
                    <CheckCircle2 className="w-8 h-8 text-construction flex-shrink-0" />
                    <span className="text-xl font-medium">{t(item.en, item.fr)}</span>
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
             <div className="h-80 bg-gray-200 relative group overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=2067&auto=format&fit=crop" alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xl">Project Alpha</div>
             </div>
             <div className="h-80 bg-gray-200 relative group overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xl">Project Beta</div>
             </div>
          </div>
          <div className="mt-12 text-center">
            <Link to={PageRoutes.CONSTRUCTION}>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8">
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
          <div className="mt-12 max-w-4xl mx-auto">
             <div className="bg-white p-12 shadow-lg border-t-8 border-construction relative">
               <span className="text-6xl text-gray-200 absolute top-4 left-4">"</span>
               <p className="text-2xl text-navy italic mb-8 relative z-10">
                 "{t("Professional, timely, and excellent quality work. SOCABEG is the best partner we have worked with.", "Travail professionnel, ponctuel et d'excellente qualité. SOCABEG est le meilleur partenaire avec lequel nous avons travaillé.")}"
               </p>
               <div className="font-bold text-construction uppercase tracking-widest">- Client Name</div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERS (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto w-full text-center">
          <SectionHeader title={t("Our Partners", "Nos Partenaires")} subtitle={t("Trusted by Leaders Across Senegal", "Reconnu par les Leaders au Sénégal")} center />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16 opacity-50">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-24 bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-xl rounded border border-gray-200">
                PARTNER {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BIG CTA (Fullscreen) */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-navy text-white text-center px-4">
         <SectionHeader title={t("Ready to Work With Us?", "Prêt à Travailler Avec Nous ?")} subtitle={t("Let’s Build Senegal’s Future Together.", "Construisons Ensemble l'Avenir du Sénégal.")} light center />
         <Link to={PageRoutes.CONTACT} className="mt-12">
            <Button className="bg-construction text-navy hover:bg-white hover:text-navy px-12 py-5 text-xl font-bold uppercase tracking-widest shadow-2xl transform hover:scale-105 transition-all">
               {t("Contact Us Today", "Contactez-nous Aujourd'hui")}
            </Button>
         </Link>
      </section>

    </div>
  );
};

const ServiceCard = ({ icon, title, desc, link }: any) => (
  <div className="bg-white group p-10 shadow-lg border-b-4 border-transparent hover:border-construction transition-all duration-300 flex flex-col items-center text-center">
    <div className="mb-8 w-20 h-20 bg-navy flex items-center justify-center rounded-full group-hover:bg-construction transition-colors text-white">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-navy mb-4 uppercase tracking-wide">{title}</h3>
    <p className="text-gray-600 mb-8 leading-relaxed">{desc}</p>
    <Link to={link} className="mt-auto flex items-center text-construction font-bold uppercase text-sm hover:gap-2 transition-all">
      View Service <ArrowRight className="w-4 h-4 ml-1" />
    </Link>
  </div>
);

export default Home;
