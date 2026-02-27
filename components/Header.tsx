import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onNavigate: (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about' | 'digital-eda' | 'digital-simcenter' | 'digital-cam') => void;
  currentPage: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about' | 'digital-eda' | 'digital-simcenter' | 'digital-cam';
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const { t, language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header if scrolling up or at the very top
      // Hide header if scrolling down and past the header height (approx 80px)
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about' | 'digital-eda' | 'digital-simcenter' | 'digital-cam', e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'cs' ? 'en' : 'cs');
  };

  return (
    <header 
      className={`bg-secondary text-white sticky top-0 z-50 shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center">
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick('home', e)} className="flex items-center space-x-2 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <div className="absolute inset-0 bg-primary transform group-hover:scale-110 transition-transform rounded-sm"></div>
          </div>
          <span className="font-display font-black text-2xl md:text-3xl tracking-tight">TechSim</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full space-x-1 font-medium text-sm ml-10">
          {/* Dropdown: Digital Solutions (New Mega Menu) */}
          <div className="group h-full flex items-center relative px-4">
            <button className="hover:text-primary transition-colors flex items-center gap-1 py-2 outline-none font-bold text-white">
              {t.nav.digitalSolutions}
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
            <div className="dropdown-menu absolute top-full left-0 w-[800px] bg-white dark:bg-surface-dark shadow-2xl rounded-b-xl border-t-4 border-primary p-6 z-50">
              <div className="grid grid-cols-3 gap-6">
                <a href="#" onClick={(e) => handleNavClick('digital-eda' as any, e)} className="group/item block p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center mb-2">
                    <span className="material-symbols-outlined text-2xl text-secondary group-hover/item:text-primary transition-colors mr-2">memory</span>
                    <h4 className="font-display font-bold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">{t.digitalThreadsLinks.eda}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.digitalThreads?.eda?.desc}</p>
                </a>
                <a href="#" onClick={(e) => handleNavClick('digital-simcenter' as any, e)} className="group/item block p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center mb-2">
                    <span className="material-symbols-outlined text-2xl text-secondary group-hover/item:text-primary transition-colors mr-2">hub</span>
                    <h4 className="font-display font-bold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">{t.digitalThreadsLinks.simcenter}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.digitalThreads?.simcenter?.desc}</p>
                </a>
                <a href="#" onClick={(e) => handleNavClick('digital-cam' as any, e)} className="group/item block p-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center mb-2">
                    <span className="material-symbols-outlined text-2xl text-secondary group-hover/item:text-primary transition-colors mr-2">precision_manufacturing</span>
                    <h4 className="font-display font-bold text-slate-800 dark:text-white group-hover/item:text-primary transition-colors">{t.digitalThreadsLinks.cam}</h4>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{t.digitalThreads?.cam?.desc}</p>
                </a>
              </div>
            </div>
          </div>

          {/* Dropdown: Produkty */}
          <div className="group h-full flex items-center relative px-4">
            <button className="hover:text-primary transition-colors flex items-center gap-1 py-2 outline-none">
              {t.nav.products}
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
            <div className="dropdown-menu absolute top-full left-0 w-[1200px] bg-white dark:bg-surface-dark shadow-2xl rounded-b-xl border-t-4 border-primary p-0 overflow-hidden z-50">
              <div className="grid grid-cols-4">
                {/* Column 1: TechSim Produkty */}
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50">
                  <h4 className="font-display font-bold text-secondary dark:text-white mb-4 uppercase text-xs tracking-wider">{t.nav.techsimProducts}</h4>
                  <ul className="space-y-3">
                    <li><a href="#" onClick={(e) => handleNavClick('ai-modem' as any, e)} className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">router</span> AI modem DIGITWIN</a></li>
                    <li><a href="#" className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">electric_bolt</span> ORC mikro-cogeneration unit</a></li>
                    <li><a href="#" className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">solar_power</span> 4FEM Optimalizace FVE/AKU</a></li>
                    <li><a href="#" className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">layers</span> FATAM & AM analýzy</a></li>
                  </ul>
                </div>

                {/* Column 2: Siemens Simulace & Testování */}
                <div className="p-6 bg-white dark:bg-surface-dark">
                  <h4 className="font-display font-bold text-secondary dark:text-white mb-4 uppercase text-xs tracking-wider">{t.nav.siemensSim}</h4>
                  <ul className="space-y-3 mb-4">
                    <li><a href="#" onClick={(e) => handleNavClick('cfd-simulation' as any, e)} className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">water</span> {t.nav.siemensSimItems.cfd}</a></li>
                    <li><a href="#" className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">hub</span> {t.nav.siemensSimItems.sysSim}</a></li>
                    <li><a href="#" className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">architecture</span> {t.nav.siemensSimItems.fem}</a></li>
                    <li>
                      <a href="#" onClick={(e) => handleNavClick('testing', e)} className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center">
                        <span className="material-symbols-outlined text-lg mr-2">speed</span> {t.nav.siemensSimItems.hardware}
                      </a>
                    </li>
                    <li><a href="#" className="block text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center"><span className="material-symbols-outlined text-lg mr-2">monitor_heart</span> {t.nav.siemensSimItems.testSoft}</a></li>
                  </ul>
                  <a href="#" className="inline-flex items-center text-xs font-bold text-primary hover:text-red-700 uppercase tracking-wide mt-2">
                    {t.nav.exploreSim} <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </a>
                </div>

                {/* Column 3: Siemens EDA */}
                <div className="p-6 bg-white dark:bg-surface-dark border-l border-slate-100 dark:border-slate-700">
                  <h4 className="font-display font-bold text-secondary dark:text-white mb-4 uppercase text-xs tracking-wider">{t.nav.siemensEDA}</h4>
                  <ul className="space-y-4 mb-4">
                    <li>
                      <a href="#" className="flex items-start group/item">
                        <span className="material-symbols-outlined text-lg mr-2 text-slate-400 group-hover/item:text-primary mt-0.5">developer_board</span>
                        <div>
                          <div className="font-bold text-slate-600 dark:text-slate-300 group-hover/item:text-primary transition-colors text-sm">{t.nav.eda.pcb}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{t.nav.eda.pcbKeywords}</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group/item">
                        <span className="material-symbols-outlined text-lg mr-2 text-slate-400 group-hover/item:text-primary mt-0.5">hub</span>
                        <div>
                          <div className="font-bold text-slate-600 dark:text-slate-300 group-hover/item:text-primary transition-colors text-sm">{t.nav.eda.sysSim}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{t.nav.eda.sysSimKeywords}</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group/item">
                        <span className="material-symbols-outlined text-lg mr-2 text-slate-400 group-hover/item:text-primary mt-0.5">memory</span>
                        <div>
                          <div className="font-bold text-slate-600 dark:text-slate-300 group-hover/item:text-primary transition-colors text-sm">{t.nav.eda.ic}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{t.nav.eda.icKeywords}</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-start group/item">
                        <span className="material-symbols-outlined text-lg mr-2 text-slate-400 group-hover/item:text-primary mt-0.5">code</span>
                        <div>
                          <div className="font-bold text-slate-600 dark:text-slate-300 group-hover/item:text-primary transition-colors text-sm">{t.nav.eda.fpga}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{t.nav.eda.fpgaKeywords}</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="inline-flex items-center text-xs font-bold text-primary hover:text-red-700 uppercase tracking-wide mt-2">
                    {t.nav.exploreEDA} <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </a>
                </div>

                {/* Column 4: Industries (Moved from separate dropdown) */}
                <div className="p-6 bg-slate-50 dark:bg-slate-800/50 border-l border-slate-100 dark:border-slate-700">
                  <h4 className="font-display font-bold text-secondary dark:text-white mb-4 uppercase text-xs tracking-wider">{t.nav.industries}</h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center p-2 rounded hover:bg-white dark:hover:bg-slate-700 transition-colors group/item">
                        <span className="material-symbols-outlined text-secondary mr-3 group-hover/item:text-primary transition-colors">shield</span>
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white text-sm">{t.nav.defence}</div>
                          <div className="text-xs text-slate-500">{t.nav.defenceDesc}</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={(e) => handleNavClick('energy', e)} className="flex items-center p-2 rounded hover:bg-white dark:hover:bg-slate-700 transition-colors group/item">
                        <span className="material-symbols-outlined text-secondary mr-3 group-hover/item:text-primary transition-colors">bolt</span>
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white text-sm">{t.nav.energy}</div>
                          <div className="text-xs text-slate-500">{t.nav.energyDesc}</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 rounded hover:bg-white dark:hover:bg-slate-700 transition-colors group/item">
                        <span className="material-symbols-outlined text-secondary mr-3 group-hover/item:text-primary transition-colors">flight</span>
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white text-sm">{t.nav.aerospace}</div>
                          <div className="text-xs text-slate-500">{t.nav.aerospaceDesc}</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center p-2 rounded hover:bg-white dark:hover:bg-slate-700 transition-colors group/item">
                        <span className="material-symbols-outlined text-secondary mr-3 group-hover/item:text-primary transition-colors">directions_car</span>
                        <div>
                          <div className="font-bold text-slate-800 dark:text-white text-sm">{t.nav.automotive}</div>
                          <div className="text-xs text-slate-500">{t.nav.automotiveDesc}</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown: Services */}
          <div className="group h-full flex items-center relative px-4">
            <button className="hover:text-primary transition-colors flex items-center gap-1 py-2 outline-none">
              {t.nav.services}
              <span className="material-symbols-outlined text-lg">expand_more</span>
            </button>
            <div className="dropdown-menu absolute top-full left-0 w-[500px] bg-white dark:bg-surface-dark shadow-2xl rounded-b-xl border-t-4 border-tertiary p-6 z-50">
              <div className="flex flex-col gap-y-4">
                <a href="#" className="flex items-center p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                  <span className="material-symbols-outlined text-secondary mr-3 group-hover/item:text-primary transition-colors">engineering</span>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white text-sm">{t.nav.servicesDropdown.engineering}</div>
                    <div className="text-xs text-slate-500">{t.nav.servicesDropdown.engineeringDesc}</div>
                  </div>
                </a>
                <a href="#" onClick={(e) => handleNavClick('testing', e)} className="flex items-center p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                  <span className="material-symbols-outlined text-secondary mr-3 group-hover/item:text-primary transition-colors">query_stats</span>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white text-sm">{t.nav.servicesDropdown.measurement}</div>
                    <div className="text-xs text-slate-500">{t.nav.servicesDropdown.measurementDesc}</div>
                  </div>
                </a>
                <a href="#" className="flex items-center p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item">
                  <span className="material-symbols-outlined text-secondary mr-3 group-hover/item:text-primary transition-colors">school</span>
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white text-sm">{t.nav.servicesDropdown.training}</div>
                    <div className="text-xs text-slate-500">{t.nav.servicesDropdown.trainingDesc}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="px-4 hover:text-primary transition-colors">{t.nav.research}</a>
          <a 
            href="#" 
            onClick={(e) => handleNavClick('blog', e)}
            className={`px-4 transition-colors ${currentPage === 'blog' ? 'text-tertiary font-bold' : 'hover:text-primary'}`}
          >
            {t.nav.blog}
          </a>
          <a 
            href="#" 
            onClick={(e) => handleNavClick('seminar', e)}
            className={`px-4 transition-colors ${currentPage === 'seminar' ? 'text-tertiary font-bold' : 'hover:text-primary'}`}
          >
            {t.nav.events}
          </a>
          <a 
            href="#" 
            onClick={(e) => handleNavClick('about', e)}
            className={`px-4 transition-colors ${currentPage === 'about' ? 'text-tertiary font-bold' : 'hover:text-primary'}`}
          >
            {t.nav.about}
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <button className="text-white hover:text-tertiary">
            <span className="material-symbols-outlined">search</span>
          </button>
          <a 
            href="#" 
            onClick={(e) => handleNavClick('contact', e)}
            className="bg-primary hover:bg-red-600 text-white px-5 py-2.5 rounded-DEFAULT font-bold transition-colors shadow-md whitespace-nowrap"
          >
            {t.nav.contact}
          </a>
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center w-8 h-8 rounded hover:bg-white/10 text-xs font-bold transition-colors border border-white/20"
            title="Switch Language"
          >
            {language === 'cs' ? 'EN' : 'CS'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface-dark border-t border-slate-700 shadow-xl p-4 flex flex-col space-y-4">
           {/* Mobile Lang Switch */}
           <div className="flex justify-end border-b border-slate-700 pb-2">
             <button onClick={toggleLanguage} className="font-bold text-white hover:text-primary">
               {language === 'cs' ? 'Switch to English' : 'Přepnout do Češtiny'}
             </button>
           </div>
           
           <div className="border-b border-slate-700 pb-2">
              <div className="text-primary font-bold mb-2">{t.nav.digitalSolutions}</div>
              <a href="#" onClick={(e) => handleNavClick('digital-eda' as any, e)} className="block text-white hover:text-primary pl-4 py-1 text-sm">EDA</a>
              <a href="#" onClick={(e) => handleNavClick('digital-simcenter' as any, e)} className="block text-white hover:text-primary pl-4 py-1 text-sm">Simcenter</a>
              <a href="#" onClick={(e) => handleNavClick('digital-cam' as any, e)} className="block text-white hover:text-primary pl-4 py-1 text-sm">CAM</a>
           </div>

           <div className="border-b border-slate-700 pb-2">
             <div className="text-white font-bold mb-2">{t.nav.products}</div>
             <div className="pl-4 space-y-2">
               <div className="text-xs text-slate-400 uppercase">{t.nav.techsimProducts}</div>
               <div className="text-xs text-slate-400 uppercase">{t.nav.siemensSim}</div>
               <div className="text-xs text-slate-400 uppercase">{t.nav.siemensEDA}</div>
               <div className="text-xs text-slate-400 uppercase">{t.nav.industries}</div>
             </div>
           </div>

           <div className="border-b border-slate-700 pb-2">
             <div className="text-white font-bold mb-2">{t.nav.services}</div>
             <div className="pl-4 space-y-2">
               <a href="#" className="block text-white hover:text-primary text-sm">{t.nav.servicesDropdown.engineering}</a>
               <a href="#" onClick={(e) => handleNavClick('testing', e)} className="block text-white hover:text-primary text-sm">{t.nav.servicesDropdown.measurement}</a>
               <a href="#" className="block text-white hover:text-primary text-sm">{t.nav.servicesDropdown.training}</a>
             </div>
           </div>

           <a href="#" className="text-white hover:text-primary">{t.nav.research}</a>
           <a 
             href="#" 
             onClick={(e) => handleNavClick('blog', e)}
             className={`block ${currentPage === 'blog' ? 'text-primary font-bold' : 'text-white hover:text-primary'}`}
           >
             {t.nav.blog}
           </a>
           <a 
             href="#" 
             onClick={(e) => handleNavClick('seminar', e)}
             className={`block ${currentPage === 'seminar' ? 'text-primary font-bold' : 'text-white hover:text-primary'}`}
           >
             {t.nav.events}
           </a>
           <a 
             href="#" 
             onClick={(e) => handleNavClick('about', e)}
             className={`block ${currentPage === 'about' ? 'text-primary font-bold' : 'text-white hover:text-primary'}`}
           >
             {t.nav.about}
           </a>
           <div className="pt-4 border-t border-slate-700">
             <a 
               href="#" 
               onClick={(e) => handleNavClick('contact', e)}
               className="block w-full bg-primary text-center text-white px-5 py-2.5 rounded-DEFAULT font-bold"
             >
               {t.nav.contact}
             </a>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;