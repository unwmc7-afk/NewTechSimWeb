import React, { useState } from 'react';

const SeminarRegistration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

  const day1Schedule = [
    { time: "08:00 – 09:00", title: "Registrace účastníků konference", type: "common" },
    { time: "09:00 – 09:10", title: "Zahájení konference", type: "common" },
    { 
      time: "09:10 – 10:40", 
      title: "Hlavní přednášky", 
      desc: "Doc. Miroslav Španiel (ČVUT), Prof. Václav Uruba (ZČU), Doc. Miloslav Kepka (ZČU) a další.",
      type: "keynote" 
    },
    { time: "10:40 – 11:00", title: "Přestávka", type: "break" },
    { 
      time: "11:00 – 12:20", 
      title: "Sekce I: FEA simulace a experimentální mechanika", 
      desc: "Zdeněk Novotný (Amitia), Doc. Zdeněk Poruba (VŠB-TU), Alex Vermeulen (Siemens Digital Industries).",
      type: "session" 
    },
    { time: "12:20 – 13:20", title: "Oběd", type: "break" },
    { 
      time: "13:20 – 14:10", 
      title: "Sekce II: Úloha HW ve výpočetních simulacích a podpora AI", 
      desc: "Luboš Kolář (HPE), Jiří Stříž (HP Inc.), Juraj Čechovič (TechSim) - GPU vs CPU.",
      type: "session" 
    },
    { 
      time: "14:10 – 15:50", 
      title: "Sekce III: CFD simulace a metody validace", 
      desc: "Jiří Dražan (ZF), Robert Popela (VUT), Tomáš Romsy (ČVUT).",
      type: "session" 
    },
    { time: "15:10 – 15:30", title: "Přestávka", type: "break" },
    { 
      time: "15:50 – 17:20", 
      title: "Sekce IV: Autonomní systémy", 
      desc: "Prof. Tomáš Svoboda (ČVUT FEL), Jan Pícha (Tatra Trucks), Doc. Jan Mazal (Univerzita obrany).",
      type: "session" 
    },
    { 
      time: "17:20 – 18:00", 
      title: "Sekce V: Využití AI při výpočetních simulacích", 
      desc: "Ondřej Švanda (TechSim), Matěj Sulitka (ČVUT).",
      type: "session" 
    },
    { time: "od 18:30", title: "Společenská událost", type: "event" },
  ];

  const day2Schedule = [
    { time: "09:00 – 09:30", title: "Po náročném dni na odlehčení duševní rozcvička", desc: "Lehké logické rébusy, zábava a odměna.", type: "common" },
    { 
      time: "09:30 – 09:50", 
      title: "Inovativní strojírenství (Simcenter Amesim)", 
      desc: "Ukázka učebních plánů pro bakalářské a magisterské studium.",
      type: "session" 
    },
    { 
      time: "09:50 – 10:30", 
      title: "Aditivní výroba a design výrobků", 
      desc: "Náhrada kovových konstrukcí vysokopevnostními plasty.",
      type: "session" 
    },
    { time: "10:30 – 10:50", title: "Přestávka", type: "break" },
    { 
      time: "10:50 – 11:10", 
      title: "Dimenzování pohonů autonomních prostředků", 
      desc: "UAV, UGV a USV a výběr vhodných komponent v Amesim.",
      type: "session" 
    },
    { 
      time: "11:10 – 11:40", 
      title: "Výpočty teplotního zatížení PCB (Simcenter FloEFD)", 
      desc: "Identifikace kritických tepelných bodů a optimalizace chlazení.",
      type: "session" 
    },
    { 
      time: "11:40 – 12:00", 
      title: "Využití redukovaných modelů (FMI/FMU)", 
      desc: "Ukázka vytváření a využití v real-time aplikacích.",
      type: "session" 
    },
    { 
      time: "12:00 – 12:30", 
      title: "Bateriová úložiště (BESS) a thermal runaway", 
      desc: "Pohledem CFD a systémových simulací.",
      type: "session" 
    },
    { time: "12:30 – 12:40", title: "Diskuze – ukončení konference", type: "common" },
    { time: "12:40 – 13:40", title: "Oběd", type: "break" },
  ];

  const upcomingEvents = [
    { date: "12. 06.", title: "Webinář: Pokročilé CFD analýzy", type: "Online" },
    { date: "24. 09.", title: "TechSim Workshop 2025", type: "Brno" },
    { date: "15. 10.", title: "Simcenter User Group Meeting", type: "Ostrava" },
    { date: "08. 11.", title: "Školení: STAR-CCM+ Basic", type: "Praha" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200 font-sans">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-secondary to-[#003366] py-20">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="container mx-auto px-4 md:px-10 relative z-10">
          <div className="flex flex-col gap-6 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              9. ročník odborné konference
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-display font-black leading-tight">
              CAE FORUM 2025
            </h1>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light">
              Moderní trendy ve vývoji chytrých výrobků, AI v simulacích a digitální dvojčata.
            </p>
            <div className="flex flex-wrap gap-6 text-white pt-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">calendar_today</span>
                <span className="text-base font-bold">29. – 30. 5. 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">location_on</span>
                <span className="text-base font-bold">Park Holiday Congress & Wellness Hotel, Praha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-secondary">
                 <h3 className="font-display font-bold text-lg text-secondary dark:text-white mb-2">AI v simulacích</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Neuronové sítě, redukované modely a predikce spolehlivosti.</p>
               </div>
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-tertiary">
                 <h3 className="font-display font-bold text-lg text-secondary dark:text-white mb-2">Digitální dvojče</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Reálná data v reálném čase pro vyšší spolehlivost.</p>
               </div>
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-secondary">
                 <h3 className="font-display font-bold text-lg text-secondary dark:text-white mb-2">Vývoj autonomních systémů</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">RBD, MBS a systémové simulace.</p>
               </div>
               <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-tertiary">
                 <h3 className="font-display font-bold text-lg text-secondary dark:text-white mb-2">Multifyzikální výpočty</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">Efektivní řešení složitých problémů.</p>
               </div>
            </div>

            {/* Program Tabs */}
            <div>
              <h2 className="text-3xl font-display font-black mb-8 text-slate-900 dark:text-white">
                Program konference
              </h2>
              
              <div className="flex gap-4 mb-8 border-b border-slate-200 dark:border-slate-700">
                <button 
                  onClick={() => setActiveTab('day1')}
                  className={`pb-4 px-4 font-bold text-lg transition-all relative ${
                    activeTab === 'day1' 
                      ? 'text-secondary dark:text-tertiary border-b-4 border-secondary dark:border-tertiary' 
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  Čtvrtek 29. 5.
                </button>
                <button 
                  onClick={() => setActiveTab('day2')}
                  className={`pb-4 px-4 font-bold text-lg transition-all relative ${
                    activeTab === 'day2' 
                      ? 'text-secondary dark:text-tertiary border-b-4 border-secondary dark:border-tertiary' 
                      : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  Pátek 30. 5.
                </button>
              </div>

              <div className="space-y-6 animate-fadeIn">
                {(activeTab === 'day1' ? day1Schedule : day2Schedule).map((item, index) => (
                  <div key={index} className="group flex gap-4 md:gap-8">
                    <div className="w-32 flex-shrink-0 pt-1">
                      <span className="font-display font-bold text-secondary dark:text-tertiary block">{item.time}</span>
                    </div>
                    <div className="flex-grow pb-6 border-b border-slate-100 dark:border-slate-800 group-last:border-0 relative">
                       {/* Timeline dot */}
                       <div className="absolute left-[-2rem] md:left-[-2.5rem] top-2 w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-secondary transition-colors"></div>
                       
                       <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-secondary transition-colors">
                         {item.title}
                       </h4>
                       {item.type === 'keynote' && (
                         <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded mb-2">Hlavní přednáška</span>
                       )}
                       {item.type === 'session' && (
                        <span className="inline-block bg-secondary/10 text-secondary dark:text-blue-300 text-xs font-bold px-2 py-0.5 rounded mb-2">Odborná sekce</span>
                      )}
                       {item.desc && (
                         <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                           {item.desc}
                         </p>
                       )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transport and Location Section */}
            <div className="mt-8 pt-10 border-t border-slate-200 dark:border-slate-700">
               <h2 className="text-3xl font-display font-black mb-8 text-slate-900 dark:text-white">
                 Místo konání a doprava
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Info */}
                  <div className="space-y-8">
                    <div className="flex gap-4">
                       <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">location_on</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Adresa</h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Park Holiday Congress & Wellness Hotel<br/>
                            Květnového povstání 194<br/>
                            103 00 Praha 10-Benice
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">directions_bus</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Jak se k nám dostat MHD</h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Ze stanice metra <strong>Depo Hostivař (Linka A)</strong> autobusem č. 229 do zastávky <strong>Benice</strong>. Hotel se nachází cca 3 minuty chůze od zastávky.
                          </p>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <span className="material-symbols-outlined">directions_car</span>
                       </div>
                       <div>
                          <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Autem a parkování</h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Příjezd z dálnice D1, exit 6 (Průhonice/Uhříněves). V areálu hotelu je k dispozici <strong>velkokapacitní parkoviště</strong> pro účastníky konference zdarma.
                          </p>
                       </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Map */}
                  <div className="h-80 md:h-auto min-h-[300px] rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-slate-100">
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.656540788737!2d14.588804976856565!3d49.99182371775143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8df053086161%3A0x633a28c29252c84!2sPark%20Holiday%20Congress%20%26%20Wellness%20Hotel!5e0!3m2!1scs!2scz!4v1709214582658!5m2!1scs!2scz" 
                       width="100%" 
                       height="100%" 
                       style={{ border: 0 }} 
                       allowFullScreen 
                       loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Mapa místa konání"
                     ></iframe>
                  </div>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* Registration Box */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="bg-secondary p-6 text-white">
                  <h3 className="font-display font-bold text-xl">Registrace</h3>
                  <p className="text-blue-100 text-sm mt-1">Zajistěte si své místo na konferenci.</p>
                </div>
                <form className="p-6 flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Jméno a příjmení</label>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" placeholder="Jan Novák" type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Společnost</label>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" placeholder="Firma s.r.o." type="text" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1">E-mail</label>
                    <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none" placeholder="jan@firma.cz" type="email" />
                  </div>
                  <button className="w-full bg-primary hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg transition-all mt-2" type="submit">
                    Odeslat registraci
                  </button>
                </form>
              </div>

              {/* Upcoming Events Calendar (New) */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden">
                <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50">
                  <span className="material-symbols-outlined text-tertiary">event_note</span>
                  <h3 className="font-display font-bold text-slate-900 dark:text-white">Další akce v roce 2025</h3>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-700">
                  {upcomingEvents.map((event, idx) => (
                    <div key={idx} className="p-4 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors flex gap-3 group cursor-pointer">
                      <div className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 rounded-lg w-12 h-12 flex-shrink-0 border border-slate-200 dark:border-slate-700 group-hover:border-primary/50 transition-colors">
                        <span className="text-[10px] text-slate-500 uppercase font-bold">{event.date.split('.')[1].trim() + '.'}</span>
                        <span className="text-lg font-bold text-secondary font-display">{event.date.split('.')[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 leading-tight group-hover:text-primary transition-colors">{event.title}</h4>
                        <span className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                          <span className="material-symbols-outlined text-[10px]">location_on</span> {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="p-3 text-center">
                    <a href="#" className="text-xs font-bold uppercase tracking-wider text-primary hover:underline">Zobrazit kalendář</a>
                  </div>
                </div>
              </div>

              {/* Sponsors */}
              <div className="text-center pt-4">
                 <p className="text-xs font-bold uppercase text-slate-400 mb-4">Sponzoři akce</p>
                 <div className="flex justify-center items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all">
                    {/* Placeholder for Siemens logo from PDF */}
                    <div className="h-8 font-bold text-2xl text-slate-600 dark:text-slate-300">SIEMENS</div>
                    <div className="h-8 w-px bg-slate-300"></div>
                    <div className="h-8 font-bold text-xl text-slate-600 dark:text-slate-300">Hewlett Packard<br/><span className="text-xs font-normal">Enterprise</span></div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeminarRegistration;