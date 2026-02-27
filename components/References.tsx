import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const References: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-900/20 skew-x-12 transform origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-tertiary font-bold uppercase tracking-widest text-sm mb-3 block flex items-center">
              <span className="w-8 h-0.5 bg-tertiary mr-3"></span> {t.references.label}
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white">
              {t.references.title}
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center font-bold text-white border border-white/30 hover:bg-white hover:text-secondary px-6 py-3 rounded transition-all mt-6 md:mt-0">
            {t.references.viewAll} <span className="material-symbols-outlined ml-2">arrow_right_alt</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[300px] lg:auto-rows-[400px]">
          {/* Main Large Item */}
          <div className="lg:col-span-8 relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNtfYWq06zwQ4UI76iIXjPUDxAbPiSIW8Z3HubciHqUVEihaGjTf_XIsC37ZhSnofGcwkHH2YW8YN4vWgXTakB5VloN5KqMwvqITbuFYB1Yo9ig_KzOY1sgQN8z6MllTZeeudAlFV-qk1by0ZGHoFQ_JjP2Oa7J_Q85-_cT0P01yOaLirS5er5g1cHTqWlg3o3ZlooSaYJMSvKVlO1h7XGLOXUa38cXyW7lendZJAT826if61e3l56rbyya0Q-A7Lwt5MhAJtlyvQ" 
              alt="Aerospace engineering simulation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg uppercase tracking-wider">{t.references.aerospace.tag}</span>
            </div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full z-20">
              <h3 className="font-display font-black text-2xl md:text-4xl text-white mb-3">{t.references.aerospace.title}</h3>
              <p className="text-slate-300 mb-6 text-lg max-w-2xl hidden md:block">
                {t.references.aerospace.desc}
              </p>
              <a href="#" className="inline-flex items-center text-white font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors group-hover:border-white">
                {t.references.readStory} <span className="material-symbols-outlined text-sm ml-2">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Side Item 1 */}
          <div className="lg:col-span-4 relative group rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk9QEAs0jgROcPp7En6YPMtDRnMCy4dwPkjHrQYIN_ymP_RonVjo1zv_T7NZC7g9khbB5Vh7bAsm0cCHCRXa6hgqpRBRKBXoWkhPI7PFaB1sAoRrSrV4DAY4SnmYi3bo43dELkJPfhL1p753pBndzIM4vYTtmJcvnv3ZCZcVBJ5zf1Q7wjVV44Qqmz02ImHu6BvQurK1aqhvnFIAbWJAJ5KF6vFaXjjIMdvDGtNUkaHradbEeb43NjzHPcuQvJo0nehEm2D9rEoKU" 
              alt="Automotive crash test simulation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-tertiary text-secondary text-xs font-bold px-3 py-1.5 rounded shadow-lg uppercase tracking-wider">{t.references.automotive.tag}</span>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 leading-tight">{t.references.automotive.title}</h3>
              <p className="text-slate-300 text-sm mb-4 line-clamp-2">{t.references.automotive.desc}</p>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-secondary flex items-center justify-center transition-colors border border-white/30">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Side Item 2 */}
          <div className="lg:col-span-4 relative group rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4YQH3EaiCU3YFONLdA0Xtw837xU9_omXnfLqx3w2NdXtSmZRg6x-sad4jRwHqfKyvyZOO0wNWK6O2V3VOMbymZu62tTES2v3Xb_KPKuQFuY8yndGw1DkXtCJ7TwQk_1xp0E-rzZNOtV5DSrUX4A223DTFXNC48osXnr7svbtnrJgHgbl6lnPAgwaFT_C13gr6MeqWS5fHd_yTGGst6dkh4_AFVinQo1xLGWf3OPbI-QCAOtjLyIeYsp17gj5b645RUm6ELmXmEaY" 
              alt="Robotics arm simulation" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded shadow-lg uppercase tracking-wider">{t.references.robotics.tag}</span>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 leading-tight">{t.references.robotics.title}</h3>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-secondary flex items-center justify-center transition-colors border border-white/30 mt-3">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Testimonial */}
          <div className="lg:col-span-8 bg-gradient-to-r from-primary to-red-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 max-w-xl">
              <div className="text-white/80 font-mono text-xs mb-2">{t.references.testimonial.label}</div>
              <blockquote className="font-display font-bold text-xl md:text-3xl text-white leading-snug">
                {t.references.testimonial.quote}
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-bold mr-3">JD</div>
                <div className="text-sm">
                  <div className="font-bold text-white">Jan Dvořák</div>
                  <div className="text-white/70">{t.references.testimonial.authorRole}</div>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-8 md:mt-0">
              <a href="#" className="bg-white text-primary px-8 py-3 rounded font-bold shadow-lg hover:bg-slate-100 transition-colors inline-block">
                {t.references.testimonial.btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;