import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-secondary opacity-90"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tertiary opacity-10 skew-x-12"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-tertiary font-bold uppercase tracking-widest text-sm mb-2 block">{t.aboutPage.title}</span>
            <h1 className="font-display font-black text-4xl md:text-6xl mb-6">{t.aboutPage.subtitle}</h1>
            <p className="text-xl text-blue-100 font-light leading-relaxed">
              {t.aboutPage.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                alt="TechSim Team Collaboration" 
                className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white relative inline-block">
                {t.aboutPage.story.title}
                <span className="absolute bottom-1 left-0 w-full h-3 bg-tertiary/30 -z-10"></span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {t.aboutPage.story.text1}
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                {t.aboutPage.story.text2}
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
                <div>
                  <div className="font-display font-black text-3xl text-secondary dark:text-tertiary">2010</div>
                  <div className="text-xs font-bold uppercase text-slate-500 mt-1">{t.aboutPage.stats.founded}</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl text-secondary dark:text-tertiary">50+</div>
                  <div className="text-xs font-bold uppercase text-slate-500 mt-1">{t.aboutPage.stats.experts}</div>
                </div>
                <div>
                  <div className="font-display font-black text-3xl text-secondary dark:text-tertiary">3</div>
                  <div className="text-xs font-bold uppercase text-slate-500 mt-1">{t.aboutPage.stats.countries}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">
              {t.aboutPage.values.title}
            </h2>
            <div className="h-1 w-20 bg-tertiary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-secondary group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
                {t.aboutPage.values.items[0].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t.aboutPage.values.items[0].desc}
              </p>
            </div>

            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-tertiary group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-tertiary/20 rounded-full flex items-center justify-center text-tertiary mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
                {t.aboutPage.values.items[1].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t.aboutPage.values.items[1].desc}
              </p>
            </div>

            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-primary group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">handshake</span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
                {t.aboutPage.values.items[2].title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t.aboutPage.values.items[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white mb-12 text-center">
            {t.aboutPage.team.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Person 1 */}
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-xl mb-6 mx-auto w-64 h-64 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
                  alt="CEO" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors"></div>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Ing. Petr Novák, Ph.D.</h3>
              <p className="text-tertiary font-bold text-sm uppercase tracking-wider mt-1">{t.aboutPage.team.ceo}</p>
            </div>

            {/* Person 2 */}
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-xl mb-6 mx-auto w-64 h-64 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                  alt="CTO" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Ing. Jana Svobodová</h3>
              <p className="text-tertiary font-bold text-sm uppercase tracking-wider mt-1">{t.aboutPage.team.cto}</p>
            </div>

            {/* Person 3 */}
            <div className="group text-center">
              <div className="relative overflow-hidden rounded-xl mb-6 mx-auto w-64 h-64 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" 
                  alt="Sales" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">Martin Dvořák</h3>
              <p className="text-tertiary font-bold text-sm uppercase tracking-wider mt-1">{t.aboutPage.team.sales}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;