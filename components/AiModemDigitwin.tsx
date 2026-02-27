import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const AiModemDigitwin: React.FC = () => {
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
                <span className="material-symbols-outlined text-lg">wifi_tethering</span>
                {t.aiModem.hero.badge}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-black mb-6 leading-tight">
                {t.aiModem.hero.title}
              </h1>
              <p className="text-slate-400 text-sm max-w-xl border-l-4 border-primary pl-4 py-2 bg-white/5 rounded-r-lg">
                {t.aiModem.hero.funding}
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-video bg-slate-800 rounded-xl border border-slate-700 shadow-2xl flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:opacity-75 transition-opacity"></div>
                <span className="material-symbols-outlined text-9xl text-slate-600 group-hover:text-blue-500 transition-colors duration-500">router</span>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-slate-500">TechSim AI Modem</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white border-b-4 border-primary inline-block pb-2">
              {t.aiModem.why.title}
            </h2>
            <div className="grid gap-6">
              {t.aiModem.why.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border-l-4 border-red-500 shadow-sm">
                  <span className="material-symbols-outlined text-red-500 text-3xl flex-shrink-0">error</span>
                  <p className="text-lg text-slate-700 dark:text-slate-300 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Twin Section */}
      <section className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="material-symbols-outlined text-6xl text-blue-600 mb-4">psychology</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              {t.aiModem.digitalTwin.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {t.aiModem.digitalTwin.desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Health */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-red-500 text-center">
              <span className="material-symbols-outlined text-5xl text-red-500 mb-4">monitor_heart</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.aiModem.digitalTwin.features.health}</h3>
            </div>
            {/* Mechanics */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-blue-500 text-center">
              <span className="material-symbols-outlined text-5xl text-blue-500 mb-4">build</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.aiModem.digitalTwin.features.mechanics}</h3>
              <ul className="mt-4 text-left text-sm text-slate-600 dark:text-slate-400 space-y-2">
                {t.aiModem.mechanics.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Battery */}
            <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-green-500 text-center">
              <span className="material-symbols-outlined text-5xl text-green-500 mb-4">battery_charging_full</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.aiModem.digitalTwin.features.battery}</h3>
              <ul className="mt-4 text-left text-sm text-slate-600 dark:text-slate-400 space-y-2">
                {t.aiModem.battery.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900 dark:text-white">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Performance */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-amber-500">
                <span className="material-symbols-outlined text-3xl">memory</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t.aiModem.specs.performance.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {t.aiModem.specs.performance.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>

            {/* GNSS */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-blue-500">
                <span className="material-symbols-outlined text-3xl">satellite_alt</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t.aiModem.specs.gnss.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {t.aiModem.specs.gnss.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>

            {/* Durability */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-green-500">
                <span className="material-symbols-outlined text-3xl">shield</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t.aiModem.specs.durability.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {t.aiModem.specs.durability.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>

            {/* Connectivity */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4 text-purple-500">
                <span className="material-symbols-outlined text-3xl">hub</span>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{t.aiModem.specs.connectivity.title}</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                {t.aiModem.specs.connectivity.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 text-center">
              <span className="material-symbols-outlined text-9xl text-green-500 mb-6">lock_person</span>
              <h2 className="text-3xl font-bold mb-4">{t.aiModem.security.title}</h2>
            </div>
            <div className="lg:w-2/3">
              <div className="grid md:grid-cols-2 gap-4">
                {t.aiModem.security.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                    <span className="material-symbols-outlined text-green-400 text-xl mt-0.5">verified_user</span>
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Implementation */}
      <section className="py-20 bg-white dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-black mb-4 text-slate-900 dark:text-white">
              {t.aiModem.ai.title}
            </h2>
            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-8">
              {t.aiModem.ai.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {t.aiModem.ai.details.map((detail, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-bold text-slate-600 dark:text-slate-300">
                  {detail}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-6 font-bold text-xl">1</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t.aiModem.ai.phase1.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.aiModem.ai.phase1.desc}</p>
            </div>
            <div className="p-8 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-100 dark:border-green-800">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 font-bold text-xl">2</div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t.aiModem.ai.phase2.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{t.aiModem.ai.phase2.desc}</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block p-6 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl text-white shadow-xl">
              <span className="material-symbols-outlined text-4xl mb-2">savings</span>
              <p className="text-xl font-bold">{t.aiModem.ai.result}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiModemDigitwin;
