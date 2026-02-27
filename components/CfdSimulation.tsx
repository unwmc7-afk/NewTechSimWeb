import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const CfdSimulation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/20"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-sm mb-6">
                <span className="material-symbols-outlined text-lg">water</span>
                {t.cfd.hero.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
                {t.cfd.hero.title}
              </h1>
              <p className="text-xl text-slate-300 mb-8 font-light">
                {t.cfd.hero.subtitle}
              </p>
              <p className="text-slate-400 text-sm max-w-xl border-l-4 border-primary pl-4 py-2 bg-white/5 rounded-r-lg">
                {t.cfd.hero.desc}
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-video bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:opacity-75 transition-opacity"></div>
                <span className="material-symbols-outlined text-9xl text-slate-600 group-hover:text-blue-500 transition-colors duration-500">air</span>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-500">Simcenter STAR-CCM+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">
            {t.cfd.features.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Multiphysics */}
            <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors group">
              <span className="material-symbols-outlined text-5xl text-blue-500 mb-6 group-hover:scale-110 transition-transform">hub</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.cfd.features.multiphysics.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t.cfd.features.multiphysics.desc}</p>
            </div>
            {/* Geometry */}
            <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-green-500 transition-colors group">
              <span className="material-symbols-outlined text-5xl text-green-500 mb-6 group-hover:scale-110 transition-transform">shape_line</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.cfd.features.geometry.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t.cfd.features.geometry.desc}</p>
            </div>
            {/* Design */}
            <div className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500 transition-colors group">
              <span className="material-symbols-outlined text-5xl text-purple-500 mb-6 group-hover:scale-110 transition-transform">tune</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t.cfd.features.design.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{t.cfd.features.design.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                {t.cfd.benefits.title}
              </h2>
              <ul className="space-y-4">
                {t.cfd.benefits.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5">check_circle</span>
                    <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <div className="relative w-full max-w-md aspect-square bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl border-8 border-slate-200 dark:border-slate-700">
                  <span className="material-symbols-outlined text-9xl text-primary opacity-20">rocket_launch</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t.cfd.industries.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">directions_car</span>
              <h3 className="font-bold text-lg mb-2">{t.nav.automotive}</h3>
              <p className="text-sm text-slate-400">{t.cfd.industries.auto}</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">flight</span>
              <h3 className="font-bold text-lg mb-2">{t.nav.aerospace}</h3>
              <p className="text-sm text-slate-400">{t.cfd.industries.aero}</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">bolt</span>
              <h3 className="font-bold text-lg mb-2">{t.nav.energy}</h3>
              <p className="text-sm text-slate-400">{t.cfd.industries.energy}</p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl text-blue-400 mb-4">science</span>
              <h3 className="font-bold text-lg mb-2">Process Industry</h3>
              <p className="text-sm text-slate-400">{t.cfd.industries.process}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CfdSimulation;
