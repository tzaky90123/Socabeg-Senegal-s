import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { PageRoutes } from '../types';
import { Home, Hammer, Zap, Users } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* SECTION 1: HERO FULLSCREEN */}
      <section className="min-h-screen flex items-center justify-center bg-navy text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#F1B233_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Layanan Profesional Sesuai Kebutuhan Anda
          </h1>
        </div>
      </section>

      {/* SECTION 2: SERVICE LIST FULLSCREEN GRID */}
      <section className="min-h-screen flex flex-col justify-center bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceBigCard 
              icon={<Home className="w-12 h-12" />}
              title="Home Cleaning"
              desc="Membersihkan rumah dengan detail dan cepat."
            />
            <ServiceBigCard 
              icon={<Hammer className="w-12 h-12" />}
              title="Construction Helper"
              desc="Tenaga tambahan untuk proyek bangunan."
            />
            <ServiceBigCard 
              icon={<Zap className="w-12 h-12" />}
              title="Repair & Maintenance"
              desc="Perbaikan rumah yang aman dan profesional."
            />
            <ServiceBigCard 
              icon={<Zap className="w-12 h-12" />}
              title="Electrical Work"
              desc="Instalasi dan perbaikan listrik."
            />
            <ServiceBigCard 
              icon={<Users className="w-12 h-12" />}
              title="Daily Helper"
              desc="Asisten harian untuk berbagai pekerjaan."
            />
            
            {/* CTA Card in Grid */}
            <div className="bg-construction rounded-xl shadow-lg p-10 flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold text-navy mb-6">Butuh Layanan Lain?</h3>
              <Link to={PageRoutes.ORDER}>
                <Button variant="secondary" className="px-8 w-full">Order Sekarang</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

const ServiceBigCard: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({ icon, title, desc }) => (
  <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-start border-l-8 border-navy hover:border-construction transition-colors duration-300 h-full">
    <div className="text-navy mb-6 bg-gray-100 p-4 rounded-lg">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-navy mb-4">{title}</h3>
    <p className="text-gray-600 text-lg">{desc}</p>
  </div>
);

export default Services;