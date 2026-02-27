import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onNavigate?: (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact') => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNavClick = (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact', e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-slate-900 pt-20 pb-10">
      {/* Background Gradient - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl w-full text-left md:text-center mb-8">
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/40 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
            {t.hero.badge}
          </div>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-tight text-white mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all shadow-lg hover:shadow-primary/25 transform hover:-translate-y-1">
              {t.hero.btnDiscover}
            </a>
            <a href="#" onClick={(e) => handleNavClick('contact', e)} className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition-all">
              {t.hero.btnCaseStudies}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;