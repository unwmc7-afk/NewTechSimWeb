import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface DigitalThreadTemplateProps {
  title: string;
  painPoint: { title: string; desc: string };
  solution: { title: string; desc: string };
  benefitsManagement: { title: string; items: string[] };
  benefitsEngineers: { title: string; items: string[] };
  software: string[];
  color: string;
  onNavigate: (page: any) => void;
}

const DigitalThreadTemplate: React.FC<DigitalThreadTemplateProps> = ({
  title,
  painPoint,
  solution,
  benefitsManagement,
  benefitsEngineers,
  software,
  color,
  onNavigate
}) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section with Pain Point */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900 z-0">
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 text-white bg-white/10 border border-white/20">
              {t.digitalThreadTemplate.label}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-8 leading-tight">
              {title}
            </h1>
            
            {/* Pain Point Box */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm">
              <h2 className="text-red-400 font-bold uppercase tracking-wide text-sm mb-2">{t.digitalThreadTemplate.challenge}</h2>
              <h3 className="text-2xl font-bold text-white mb-3">{painPoint.title}</h3>
              <p className="text-slate-300 leading-relaxed">{painPoint.desc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Explanation */}
      <section className="py-20 bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">{solution.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
              {solution.desc}
            </p>
            
            {/* Interactive/Visual Element Placeholder */}
            <div className="relative h-64 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner">
              <div className="text-slate-400 font-mono text-sm">{t.digitalThreadTemplate.visualization}</div>
              <motion.div 
                className="absolute w-full h-1 bg-slate-300 dark:bg-slate-700"
                style={{ top: '50%' }}
              >
                <motion.div 
                  className="w-32 h-full rounded-full"
                  style={{ backgroundColor: color }}
                  animate={{ x: [-150, 800] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Split View */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Management Benefits */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border-t-4 border-blue-600"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 text-blue-600 dark:text-blue-400">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{benefitsManagement.title}</h3>
              </div>
              <ul className="space-y-4">
                {benefitsManagement.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-green-500 mr-3 mt-0.5">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Engineer Benefits */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border-t-4 border-amber-500"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mr-4 text-amber-600 dark:text-amber-400">
                  <span className="material-symbols-outlined text-2xl">engineering</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{benefitsEngineers.title}</h3>
              </div>
              <ul className="space-y-4">
                {benefitsEngineers.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 dark:text-slate-300">
                    <span className="material-symbols-outlined text-green-500 mr-3 mt-0.5">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Software Stack */}
      <section className="py-16 bg-white dark:bg-surface-dark border-y border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-bold mb-8 text-slate-500 uppercase tracking-widest">{t.digitalThreadTemplate.poweredBy}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {software.map((sw, index) => (
              <span key={index} className="px-6 py-3 bg-slate-50 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700 shadow-sm">
                {sw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-0"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">{t.digitalThreadTemplate.cta.title}</h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            {t.digitalThreadTemplate.cta.desc}
          </p>
          <button onClick={() => onNavigate('contact')} className="bg-primary hover:bg-red-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl hover:shadow-primary/25 transform hover:-translate-y-1">
            {t.digitalThreadTemplate.cta.btn}
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalThreadTemplate;
