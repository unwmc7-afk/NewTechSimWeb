import React from 'react';
import { Solution } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Solutions: React.FC = () => {
  const { t } = useLanguage();

  const solutions: Solution[] = [
    {
      icon: 'memory',
      title: t.solutions.software.title,
      description: t.solutions.software.desc,
      linkText: t.solutions.learnMore,
      borderColor: 'border-primary',
      iconBgColor: 'bg-primary/10 group-hover:bg-primary',
      iconColor: 'text-primary group-hover:text-white',
      hoverIconColor: '',
      linkHoverColor: 'hover:text-red-700',
    },
    {
      icon: 'engineering',
      title: t.solutions.consulting.title,
      description: t.solutions.consulting.desc,
      linkText: t.solutions.learnMore,
      borderColor: 'border-secondary',
      iconBgColor: 'bg-secondary/10 group-hover:bg-secondary',
      iconColor: 'text-secondary group-hover:text-white',
      hoverIconColor: '',
      linkHoverColor: 'hover:text-blue-700',
    },
    {
      icon: 'school',
      title: t.solutions.training.title,
      description: t.solutions.training.desc,
      linkText: t.solutions.learnMore,
      borderColor: 'border-tertiary',
      iconBgColor: 'bg-tertiary/20 group-hover:bg-tertiary',
      iconColor: 'text-tertiary group-hover:text-white',
      hoverIconColor: '',
      linkHoverColor: 'hover:text-teal-700',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white mb-4">{t.solutions.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            {t.solutions.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className={`bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 ${solution.borderColor} group`}>
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-colors ${solution.iconBgColor}`}>
                <span className={`material-symbols-outlined text-3xl transition-colors ${solution.iconColor}`}>
                  {solution.icon}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">{solution.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{solution.description}</p>
              <a href="#" className={`inline-flex items-center font-bold transition-colors ${solution.linkHoverColor} ${solution.iconColor.split(' ')[0]}`}>
                {solution.linkText} <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;