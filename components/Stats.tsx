import React from 'react';
import { Stat } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Stats: React.FC = () => {
  const { t } = useLanguage();

  const stats: Stat[] = [
    { value: '10+', label: t.stats.experience },
    { value: '500+', label: t.stats.projects },
    { value: '24/7', label: t.stats.support },
    { value: '100%', label: t.stats.satisfaction },
  ];

  return (
    <div className="bg-silver border-b border-slate-300">
      <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="font-display font-black text-3xl md:text-4xl text-slate-800 drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
            <div className="text-sm font-bold uppercase tracking-wider text-slate-700 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;