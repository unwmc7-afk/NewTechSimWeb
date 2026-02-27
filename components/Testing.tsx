import React from 'react';

interface TestingProps {
  onNavigate?: (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact') => void;
}

const Testing: React.FC<TestingProps> = ({ onNavigate }) => {
  const handleNavClick = (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact', e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center w-full">
      <div className="w-full relative overflow-hidden bg-[#0a192f] text-white">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl z-0"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-16 md:py-28 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm font-display">
              <span className="w-8 h-[2px] bg-primary"></span>
              Unified Solutions
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-display tracking-tight">
              Komplexní ekosystém <br/><span className="text-primary">Simcenter</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl font-body">
              Propojení špičkového hardwaru SCADAS a analytického softwaru Testlab. Jedno prostředí pro sběr, zpracování a analýzu vašich dat.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <button 
                className="flex items-center justify-center rounded-md h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold uppercase tracking-wide transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 font-display"
                onClick={(e) => handleNavClick('contact', e)}
              >
                Objevit řešení
              </button>
              <button className="flex items-center justify-center rounded-md h-12 px-8 bg-transparent hover:bg-white/5 border border-white/20 text-white text-base font-bold transition-all font-display">
                Katalog produktů
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative h-[450px] md:h-[550px]">
            <div className="absolute top-0 left-0 w-[65%] h-[65%] rounded-lg overflow-hidden shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] border border-white/10 z-10 transform transition-transform hover:scale-105 duration-500 bg-[#112240] group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6CssTinZ0kMsqlUkBEa66MYn4zauCe87_O43DDi-En4Fb9JxdhbjrQzt1_wmvkb8DA1K-GSHtAerJY-IHrBrLREc5yyFjsQyDaYUc7XmZZGCu_9r6-fM9QS4wHErgrnYX1SeTUKmIn4SqYhLj2DFHw--W5XfQXFoxTH0knG0vtR0_268m558dpU2dq5IXR6PEAR5kKNSDfXmOmmhBuogJYqLjgvFmLR9yurVvhApTbkFx77l4YA9fpjZB-OIDqPRFEojDWtJOKnc")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 inset-x-0 p-6">
                <span className="text-primary font-bold text-xs uppercase tracking-widest font-display mb-1 block">Hardware</span>
                <h3 className="text-white font-bold text-xl font-display">SCADAS Mobile</h3>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[65%] h-[65%] rounded-lg overflow-hidden shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] border border-white/10 z-20 transform transition-transform hover:scale-105 duration-500 bg-[#112240] group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzdKb7l2VIx7ZeHy40lnuFJ288Uoe4GAhpwKyUwTalQRUf32ElulJNN45Lup5PMjdzHiPQbtTjT2LLEzS7SmaM6INvZyPQ351XqYDspYvt-QYK4TCXGkfwAE2HTeEMM0r07dWywOTHgQgivWLI7ny8SL5yiqFDizdOYRVsUw8yc0QLr26HU0KZqu9jqHZ-I2CB5LSpqWkpcAGursDi2S_NWxmObWtHF7ujdsPzeySE4qYPsRdNWw7ayAP2PyJ4HO2686PkYplgiiY")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 inset-x-0 p-6 text-right">
                <span className="text-primary font-bold text-xs uppercase tracking-widest font-display mb-1 block">Software</span>
                <h3 className="text-white font-bold text-xl font-display">Simcenter Testlab</h3>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white dark:bg-[#0f213b] py-20 md:py-28 border-b border-gray-100 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block font-display">Workflow</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 font-display">Integrace Hardwaru a Softwaru</h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Od senzoru až po report. Zjednodušujeme proces měření do tří logických kroků.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-gray-100 via-primary/30 to-gray-100 dark:from-white/5 dark:to-white/5 z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="size-24 rounded-full bg-white dark:bg-[#112240] border border-gray-200 dark:border-gray-700 group-hover:border-primary transition-colors flex items-center justify-center mb-8 shadow-lg group-hover:shadow-primary/20 duration-300">
                <span className="material-symbols-outlined text-4xl text-primary">sensors</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white font-display">1. Sběr Dat</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Připojení senzorů k jednotkám Simcenter SCADAS. Podpora TEDS, ICP, tenzometrů a digitálních sběrnic.
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="size-24 rounded-full bg-white dark:bg-[#112240] border border-gray-200 dark:border-gray-700 group-hover:border-primary transition-colors flex items-center justify-center mb-8 shadow-lg group-hover:shadow-primary/20 duration-300">
                <span className="material-symbols-outlined text-4xl text-primary">memory</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white font-display">2. Zpracování</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Real-time náhled a validace dat přímo v softwaru Simcenter Testlab. Okamžitá zpětná vazba.
              </p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center group">
              <div className="size-24 rounded-full bg-white dark:bg-[#112240] border border-gray-200 dark:border-gray-700 group-hover:border-primary transition-colors flex items-center justify-center mb-8 shadow-lg group-hover:shadow-primary/20 duration-300">
                <span className="material-symbols-outlined text-4xl text-primary">query_stats</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white font-display">3. Analýza</h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed max-w-xs">
                Pokročilé post-processing nástroje. Modální analýza, akustika, order tracking a automatický reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gray-50 dark:bg-[#0a192f] py-20 md:py-28 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#112240]/50 to-transparent pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block font-display">Expertise</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white font-display">Měření na zakázku</h2>
            </div>
            <button 
              className="text-slate-900 dark:text-white font-bold hover:text-primary transition-colors flex items-center gap-2 group"
              onClick={(e) => handleNavClick('contact', e)}
            >
              <span className="font-display text-sm uppercase tracking-wide">Všechny služby</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative bg-white dark:bg-[#112240] p-8 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-gray-50 dark:bg-[#1c3050] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">vibration</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white font-display">Vibrační diagnostika</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Identifikace zdrojů vibrací, provozní tvary kmitů (ODS) a řešení rezonančních problémů.</p>
              <a className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 group/link" href="#" onClick={(e) => handleNavClick('contact', e)}>
                Více informací <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="group relative bg-white dark:bg-[#112240] p-8 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-gray-50 dark:bg-[#1c3050] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">graphic_eq</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white font-display">Akustická měření</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Měření hluku, akustický výkon, lokalizace zdrojů hluku pomocí akustické kamery.</p>
              <a className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 group/link" href="#" onClick={(e) => handleNavClick('contact', e)}>
                Více informací <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="group relative bg-white dark:bg-[#112240] p-8 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-gray-50 dark:bg-[#1c3050] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">architecture</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white font-display">Strukturální dynamika</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Experimentální modální analýza (EMA), GVT testy letadel a validace FEM modelů.</p>
              <a className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 group/link" href="#" onClick={(e) => handleNavClick('contact', e)}>
                Více informací <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="group relative bg-white dark:bg-[#112240] p-8 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-gray-50 dark:bg-[#1c3050] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">speed</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white font-display">Točivé stroje</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Analýza řádů, torzní vibrace a balancing rotorů přímo v provozu.</p>
              <a className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 group/link" href="#" onClick={(e) => handleNavClick('contact', e)}>
                Více informací <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="group relative bg-white dark:bg-[#112240] p-8 rounded-xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="w-14 h-14 bg-gray-50 dark:bg-[#1c3050] rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">straighten</span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 text-slate-900 dark:text-white font-display">Tenzometrie</h3>
              <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">Měření mechanického napětí a deformací. Instalace tenzometrů na klíč.</p>
              <a className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2 group/link" href="#" onClick={(e) => handleNavClick('contact', e)}>
                Více informací <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="relative overflow-hidden rounded-xl group cursor-pointer h-full min-h-[300px]">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAjIQRT4BoPsPWoqR3ajXKM0nsVZBDDtUQnhMBG6XCd60OBD_qwIJUZr5WrWkkmMHiiWrRsvsDWwGE_eQw_1ZMA1-2SciUnCOONveuU5LSmM_xbPf7NPgNsl5ae1mAGoFgY3zDMg3KR5VQXZYqz-Z-HlZJ-BsIHaxrOjZ4Ck9K2FTD6fyPytrObDmY-kfa1OMEZLHdxHt043-T8DpzMT9yAOUYBJq_CdsHzA3CWBlyLgyJNU2uxi_jn1kDLSHHVcuqIJLqTWF01Tqk")' }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-white text-2xl font-black mb-2 font-display">Konzultace na míru</h3>
                <p className="text-gray-300 text-sm mb-6 font-light">Nevíte si rady s měřením? Náš tým je tu pro vás.</p>
                <button 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg"
                  onClick={(e) => handleNavClick('contact', e)}
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-white dark:bg-gradient-to-b dark:from-[#0f213b] dark:to-[#0a192f] py-20 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 dark:border-white/5 pb-6">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block font-display">Pronájem a Prodej</span>
              <h2 className="text-3xl font-black leading-tight text-slate-900 dark:text-white font-display">Technické vybavení</h2>
            </div>
            <a className="text-slate-500 dark:text-gray-400 hover:text-primary transition-colors font-bold flex items-center gap-2 group text-sm uppercase tracking-wide" href="#">
              Zobrazit kompletní katalog
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_outward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#112240] hover:border-primary/50 transition-all cursor-pointer group hover:shadow-lg">
              <div className="size-12 rounded-full bg-gray-50 dark:bg-[#1c3050] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">hub</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">Měřicí systémy</h3>
                <p className="text-[0.65rem] font-bold text-slate-500 dark:text-gray-400 mt-1 uppercase tracking-wide">SCADAS a Micred T3STER</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#112240] hover:border-primary/50 transition-all cursor-pointer group hover:shadow-lg">
              <div className="size-12 rounded-full bg-gray-50 dark:bg-[#1c3050] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">Akcelerometry</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Vibrace & rázy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#112240] hover:border-primary/50 transition-all cursor-pointer group hover:shadow-lg">
              <div className="size-12 rounded-full bg-gray-50 dark:bg-[#1c3050] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">mic</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">Mikrofony</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Akustická měření</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#112240] hover:border-primary/50 transition-all cursor-pointer group hover:shadow-lg">
              <div className="size-12 rounded-full bg-gray-50 dark:bg-[#1c3050] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">straighten</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">Tenzometry</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Deformace & napětí</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full bg-gray-50 dark:bg-[#0a192f] py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-display">Aplikace a Obory</h2>
        </div>
        <div className="w-full overflow-x-auto no-scrollbar pb-8 px-4 md:px-10">
          <div className="flex gap-6 min-w-max">
            <div className="w-72 h-80 rounded-xl relative overflow-hidden group cursor-pointer border border-gray-200 dark:border-white/5">
              <div className="absolute inset-0 bg-[#112240] group-hover:bg-primary transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-6 transition-colors duration-300">directions_car</span>
                <h3 className="text-white text-xl font-bold transition-colors font-display">Automotive</h3>
                <p className="text-gray-400 group-hover:text-white/80 text-sm mt-3 transition-colors font-light">NVH, Dynamika vozidel, Testování komponent</p>
              </div>
            </div>
            <div className="w-72 h-80 rounded-xl relative overflow-hidden group cursor-pointer border border-gray-200 dark:border-white/5">
              <div className="absolute inset-0 bg-[#112240] group-hover:bg-primary transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-6 transition-colors duration-300">flight</span>
                <h3 className="text-white text-xl font-bold transition-colors font-display">Letectví</h3>
                <p className="text-gray-400 group-hover:text-white/80 text-sm mt-3 transition-colors font-light">GVT, Flutter testy, Testy motorů</p>
              </div>
            </div>
            <div className="w-72 h-80 rounded-xl relative overflow-hidden group cursor-pointer border border-gray-200 dark:border-white/5">
              <div className="absolute inset-0 bg-[#112240] group-hover:bg-primary transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-6 transition-colors duration-300">factory</span>
                <h3 className="text-white text-xl font-bold transition-colors font-display">Těžký průmysl</h3>
                <p className="text-gray-400 group-hover:text-white/80 text-sm mt-3 transition-colors font-light">Diagnostika ložisek, Prediktivní údržba</p>
              </div>
            </div>
            <div className="w-72 h-80 rounded-xl relative overflow-hidden group cursor-pointer border border-gray-200 dark:border-white/5">
              <div className="absolute inset-0 bg-[#112240] group-hover:bg-primary transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-6 transition-colors duration-300">bolt</span>
                <h3 className="text-white text-xl font-bold transition-colors font-display">Energetika</h3>
                <p className="text-gray-400 group-hover:text-white/80 text-sm mt-3 transition-colors font-light">Vibrace turbín, Monitoring větrných elektráren</p>
              </div>
            </div>
            <div className="w-72 h-80 rounded-xl relative overflow-hidden group cursor-pointer border border-gray-200 dark:border-white/5">
              <div className="absolute inset-0 bg-[#112240] group-hover:bg-primary transition-colors duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white mb-6 transition-colors duration-300">kitchen</span>
                <h3 className="text-white text-xl font-bold transition-colors font-display">Spotřebiče</h3>
                <p className="text-gray-400 group-hover:text-white/80 text-sm mt-3 transition-colors font-light">Akustický design, Snižování hlučnosti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 py-20 md:py-28">
        <div className="bg-gradient-to-br from-[#112240] to-[#0a192f] rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border border-white/5">
          <div className="lg:w-1/2 relative min-h-[400px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwflYWaCVWylVFjeiHWXa1ZGnD0j4qtGnLwSR8lx50wCqwGxHz32nLzVHbCH7cpwa6Hw9qQs7AAUufXUqBS6Ib5CnixS2iCiNpm9i-UOHpnui_rXM-zXm4LjYNU9_S7_Hh95IfOfQtn18RiMpQSu-Y3m5v3DTOgfWNs_DdaS1ELI1wONXDjy5kgdkpTU1kyM1RJY9FUujdUW77LZ5QcUH8gZziyhJnbd-Na6xYI4NFR6SRhq09eNrd6MknVN_WDuHBwbGVbBVhkEA")' }}>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a192f]"></div>
          </div>
          <div className="lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center text-white relative">
            <div className="absolute top-10 right-10 opacity-10 text-primary">
              <svg fill="currentColor" height="120" viewBox="0 0 100 100" width="120">
                <circle cx="10" cy="10" r="2"></circle> <circle cx="30" cy="10" r="2"></circle> <circle cx="50" cy="10" r="2"></circle> <circle cx="70" cy="10" r="2"></circle> <circle cx="90" cy="10" r="2"></circle>
                <circle cx="10" cy="30" r="2"></circle> <circle cx="30" cy="30" r="2"></circle> <circle cx="50" cy="30" r="2"></circle> <circle cx="70" cy="30" r="2"></circle> <circle cx="90" cy="30" r="2"></circle>
                <circle cx="10" cy="50" r="2"></circle> <circle cx="30" cy="50" r="2"></circle> <circle cx="50" cy="50" r="2"></circle> <circle cx="70" cy="50" r="2"></circle> <circle cx="90" cy="50" r="2"></circle>
                <circle cx="10" cy="70" r="2"></circle> <circle cx="30" cy="70" r="2"></circle> <circle cx="50" cy="70" r="2"></circle> <circle cx="70" cy="70" r="2"></circle> <circle cx="90" cy="70" r="2"></circle>
              </svg>
            </div>
            <div className="flex items-center gap-2 text-primary font-bold mb-4 uppercase tracking-wider text-sm font-display">
              <span className="material-symbols-outlined text-lg">support_agent</span>
              <span>Odborná konzultace</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight font-display">Potřebujete pomoci s měřením?</h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed font-light">
              Náš tým expertů je připraven navrhnout optimální řešení pro váš projekt. Nezávazně nás kontaktujte a probereme vaše technické požadavky.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1 font-display">Volejte kdykoliv</p>
                  <p className="font-bold text-lg font-display">+420 222 286 116</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/20 rounded-full text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1 font-display">Napište nám</p>
                  <p className="font-bold text-lg font-display">info@techsim.cz</p>
                </div>
              </div>
            </div>
            <button 
              className="w-full sm:w-auto self-start bg-primary hover:bg-primary/90 text-white font-black py-4 px-8 rounded-md shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3 uppercase tracking-wide font-display group"
              onClick={(e) => handleNavClick('contact', e)}
            >
              <span>Sjednat konzultaci zdarma</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;