import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface PreFooterProps {
  onNavigate?: (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact') => void;
}

const PreFooter: React.FC<PreFooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNavClick = (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact', e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary">
        <svg className="absolute right-0 top-0 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 100,100 0,100" fill="#000" />
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6">{t.preFooter.title}</h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
          {t.preFooter.desc}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#" 
            onClick={(e) => handleNavClick('contact', e)}
            className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-DEFAULT font-bold shadow-lg transition-transform hover:-translate-y-1"
          >
            {t.preFooter.btnConsult}
          </a>
          <a 
            href="#" 
            onClick={(e) => handleNavClick('contact', e)}
            className="bg-white text-secondary hover:bg-gray-100 px-8 py-4 rounded-DEFAULT font-bold shadow-lg transition-transform hover:-translate-y-1"
          >
            {t.preFooter.btnSales}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;