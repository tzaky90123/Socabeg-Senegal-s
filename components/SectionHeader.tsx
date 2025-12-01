
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
  center?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className = '', light = false, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'flex flex-col items-center text-center' : ''} ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <img src="https://socabeg.com/favicon.png" alt="icon" className="w-4 h-4 object-contain" />
        <h3 className={`text-[10px] font-bold uppercase tracking-[0.2em] ${light ? 'text-white/80' : 'text-navy/80'}`}>
          {title}
        </h3>
      </div>
      {subtitle && (
        <h2 className={`text-xl md:text-3xl font-bold ${light ? 'text-white' : 'text-navy'} max-w-4xl leading-tight`}>
          {subtitle}
        </h2>
      )}
      <div className={`h-1 w-20 bg-construction mt-8 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeader;
