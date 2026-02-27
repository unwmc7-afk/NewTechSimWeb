import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner: React.FC = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('techsim_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }

    // Listen for custom event to open settings
    const openSettingsHandler = () => setShowModal(true);
    window.addEventListener('open-cookie-settings', openSettingsHandler);

    return () => {
      window.removeEventListener('open-cookie-settings', openSettingsHandler);
    };
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('techsim_cookie_consent', 'all');
    setPreferences({ necessary: true, analytics: true, marketing: true });
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('techsim_cookie_consent', 'necessary');
    setPreferences({ necessary: true, analytics: false, marketing: false });
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('techsim_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowModal(false);
  };

  if (!isVisible && !showModal) return null;

  return (
    <>
      {/* Banner */}
      {isVisible && !showModal && (
        <div className="fixed bottom-0 left-0 w-full z-[60] p-4 bg-white dark:bg-slate-900 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] border-t border-slate-200 dark:border-slate-800 animate-fadeIn">
          <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                {t.cookies.banner.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {t.cookies.banner.text}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 whitespace-nowrap">
              <button 
                onClick={() => setShowModal(true)}
                className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                {t.cookies.banner.manage}
              </button>
              <button 
                onClick={handleDeclineAll}
                className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                {t.cookies.banner.decline}
              </button>
              <button 
                onClick={handleAcceptAll}
                className="px-6 py-2.5 rounded-lg bg-primary hover:bg-red-600 text-white font-bold shadow-lg transition-colors text-sm"
              >
                {t.cookies.banner.accept}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="bg-white dark:bg-surface-dark rounded-xl shadow-2xl w-full max-w-2xl relative z-10 max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center sticky top-0 bg-white dark:bg-surface-dark z-20">
              <h2 className="font-display font-black text-2xl text-slate-900 dark:text-white">
                {t.cookies.modal.title}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Necessary */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white">{t.cookies.modal.necessary.title}</h3>
                    <span className="text-[10px] font-bold uppercase bg-primary/10 text-primary px-2 py-0.5 rounded">Always On</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.cookies.modal.necessary.desc}
                  </p>
                </div>
                <div className="relative inline-flex items-center cursor-not-allowed opacity-50">
                  <input type="checkbox" checked disabled className="sr-only peer" />
                  <div className="w-11 h-6 bg-primary rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/30"></div>
                  <div className="absolute left-[2px] top-[2px] bg-white border border-gray-300 rounded-full h-5 w-5 transition-all peer-checked:translate-x-full peer-checked:border-white"></div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t.cookies.modal.analytics.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.cookies.modal.analytics.desc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/30 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>

              {/* Marketing */}
              <div className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 dark:border-slate-700">
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{t.cookies.modal.marketing.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {t.cookies.modal.marketing.desc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 rounded-full peer peer-focus:ring-4 peer-focus:ring-primary/30 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 font-bold text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 transition-colors"
              >
                {t.cookies.modal.close}
              </button>
              <button 
                onClick={handleSavePreferences}
                className="px-6 py-3 rounded-lg bg-primary hover:bg-red-600 text-white font-bold shadow-lg transition-colors"
              >
                {t.cookies.modal.save}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;