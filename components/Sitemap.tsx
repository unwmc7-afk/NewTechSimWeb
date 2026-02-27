import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SitemapProps {
  onNavigate: (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about') => void;
}

const Sitemap: React.FC<SitemapProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleLinkClick = (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen py-20 transition-colors duration-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">
            {t.footer.links.sitemap}
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Main Pages */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-primary">
            <h2 className="font-display font-bold text-2xl text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">home</span>
              Hlavní stránky
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="#" onClick={(e) => handleLinkClick('home', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> Úvod
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick('blog', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> {t.nav.blog}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick('seminar', e)} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> {t.nav.events}
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & Industries */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-secondary">
            <h2 className="font-display font-bold text-2xl text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">domain</span>
              Řešení a Odvětví
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="#" onClick={(e) => handleLinkClick('energy', e)} className="text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-tertiary transition-colors font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> {t.nav.energy}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick('testing', e)} className="text-slate-600 dark:text-slate-300 hover:text-secondary dark:hover:text-tertiary transition-colors font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> {t.nav.siemensSimItems.hardware}
                </a>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-500 font-medium flex items-center gap-2 pl-6">
                   {t.nav.automotive}
                </span>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-500 font-medium flex items-center gap-2 pl-6">
                   {t.nav.aerospace}
                </span>
              </li>
              <li>
                <span className="text-slate-400 dark:text-slate-500 font-medium flex items-center gap-2 pl-6">
                   {t.nav.defence}
                </span>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="bg-white dark:bg-surface-dark p-8 rounded-xl shadow-lg border-t-4 border-tertiary">
            <h2 className="font-display font-bold text-2xl text-slate-800 dark:text-white mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">info</span>
              Společnost
            </h2>
            <ul className="space-y-3">
              <li>
                <a href="#" onClick={(e) => handleLinkClick('about', e)} className="text-slate-600 dark:text-slate-300 hover:text-tertiary transition-colors font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick('contact', e)} className="text-slate-600 dark:text-slate-300 hover:text-tertiary transition-colors font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">chevron_right</span> {t.nav.contact}
                </a>
              </li>
              <li className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700">
                <a href="#" onClick={(e) => handleLinkClick('privacy', e)} className="text-slate-500 dark:text-slate-400 hover:text-tertiary transition-colors text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">policy</span> {t.footer.links.privacy}
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => handleLinkClick('terms', e)} className="text-slate-500 dark:text-slate-400 hover:text-tertiary transition-colors text-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">gavel</span> {t.footer.links.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;