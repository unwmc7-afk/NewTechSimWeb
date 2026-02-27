import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Newsletter: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-tertiary text-slate-900 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined">mail_outline</span>
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-secondary">{t.newsletter.title}</h2>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              {t.newsletter.desc}
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-1 px-5 py-4 rounded-lg border-2 border-slate-200 focus:border-secondary focus:ring-0 text-slate-800 placeholder-slate-500 shadow-inner bg-slate-50" 
                placeholder={t.newsletter.placeholder} 
                required 
                type="email" 
              />
              <button className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1" type="submit">
                {t.newsletter.btn}
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-3 text-center sm:text-left">
              {t.newsletter.privacy}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;