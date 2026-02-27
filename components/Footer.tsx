import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate?: (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about' | 'digital-eda' | 'digital-simcenter' | 'digital-cam') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNavClick = (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about' | 'digital-eda' | 'digital-simcenter' | 'digital-cam', e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  const openCookies = (e: React.MouseEvent) => {
    e.preventDefault();
    // Dispatch custom event to open cookie modal without reloading
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 font-body">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-primary rounded-sm"></div>
                </div>
                <span className="font-display font-black text-2xl text-white">TechSim</span>
              </div>
              
              {/* Siemens Partner Logo */}
              <div className="flex items-center border-l border-slate-700 pl-6">
                <img 
                  src="https://www.ttl-solutions.com/wp-content/uploads/2025/08/DI_SW_Business_Partner_Emblem_SILVER_Sell-Service.png" 
                  alt="Siemens Software Partner Sell Silver" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {t.footer.desc}
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.linkedin.com/company/techsim-engineering/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#0A66C2] transition-colors text-white group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@techsimengineering" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-sm tracking-wider">{t.footer.titles.solutions}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.structural}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.cfd}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.electro}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.thermal}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.multi}</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-sm tracking-wider">{t.footer.titles.company}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" onClick={(e) => handleNavClick('about', e)} className="hover:text-primary transition-colors">{t.footer.links.about}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.careers}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.partners}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.links.cases}</a></li>
              <li><a href="#" onClick={(e) => handleNavClick('contact', e)} className="hover:text-primary transition-colors">{t.footer.links.contact}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-sm tracking-wider">{t.footer.titles.contact}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">location_on</span>
                <span>
                  {t.contactPage.info.address.split(', ').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < t.contactPage.info.address.split(', ').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">phone</span>
                <span>+420 222 286 116</span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-primary mr-3 text-lg">email</span>
                <span>info@techsim.cz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>{t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" onClick={(e) => handleNavClick('privacy', e)} className="hover:text-white transition-colors">{t.footer.links.privacy}</a>
            <a href="#" onClick={(e) => handleNavClick('terms', e)} className="hover:text-white transition-colors">{t.footer.links.terms}</a>
            <a href="#" onClick={openCookies} className="hover:text-white transition-colors">{t.footer.links.cookies}</a>
            <a 
              href="#" 
              onClick={(e) => handleNavClick('sitemap', e)} 
              className="hover:text-white transition-colors"
            >
              {t.footer.links.sitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;