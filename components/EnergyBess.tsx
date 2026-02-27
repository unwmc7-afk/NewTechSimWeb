import React from 'react';

interface EnergyBessProps {
  onNavigate?: (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact') => void;
}

const EnergyBess: React.FC<EnergyBessProps> = ({ onNavigate }) => {
  const handleNavClick = (page: 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact', e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-body text-slate-800 dark:text-slate-200 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative bg-background-dark overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid)" height="100%" width="100%"></rect>
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-blue-900/40 via-transparent to-transparent mix-blend-overlay pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-t from-primary/20 to-transparent blur-3xl"></div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-tertiary/30 bg-tertiary/10 text-tertiary text-xs font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              Energy Storage Solutions
            </div>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight">
              Master the Complexity of Energy Storage with <span className="text-white">TechSim</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl">
              Optimize your BESS with simulations to ensure your customers only pay for what they truly need.
            </p>
            <div className="pt-4">
              <a 
                className="inline-flex items-center justify-center bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-DEFAULT font-bold text-center transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1" 
                href="#"
                onClick={(e) => handleNavClick('contact', e)}
              >
                Book a Technical Consultation
                <span className="material-symbols-outlined ml-2">calendar_month</span>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-tertiary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-400 font-mono">CELL_TEMP_MAX</span>
                    <span className="text-primary text-xs font-bold">CRITICAL</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 w-[85%]"></div>
                  </div>
                  <div className="mt-2 text-2xl font-mono font-bold text-white">42.5°C</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-400 font-mono">SOC_PREDICTION</span>
                    <span className="text-tertiary text-xs font-bold">OPTIMAL</span>
                  </div>
                  <div className="h-24 flex items-end gap-1 mt-2">
                    <div className="w-1/5 bg-secondary/40 h-[40%] rounded-t-sm"></div>
                    <div className="w-1/5 bg-secondary/60 h-[55%] rounded-t-sm"></div>
                    <div className="w-1/5 bg-secondary h-[75%] rounded-t-sm"></div>
                    <div className="w-1/5 bg-secondary/60 h-[60%] rounded-t-sm"></div>
                    <div className="w-1/5 bg-secondary/40 h-[45%] rounded-t-sm"></div>
                  </div>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden border border-slate-600 aspect-video group">
                <img 
                  alt="BESS System Container" 
                  className="object-cover w-full h-full opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" 
                  src="https://met.com/media/nllpbyff/bess-photo_educational-content.jpg?width=1920&v=1dbd157b4fb0030&rmode=min&format=webp&quality=100" 
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="bg-black/60 backdrop-blur-sm px-2 py-1 text-[10px] text-tertiary font-mono border border-tertiary/30">
                      THERMAL_ANALYSIS_V2.1
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-t from-black/80 to-transparent p-4 -mx-4 -mb-4">
                    <div className="text-xs font-mono text-slate-300">
                      &gt; DETECTING HOTSPOTS IN MODULE 4<br />
                      &gt; RECALIBRATING COOLING FLOW...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Simulate */}
      <section className="py-20 bg-white dark:bg-surface-dark relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Why Simulate?</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white">Precision Over Guesswork</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border-l-4 border-primary shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">block</span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">Stop Over-Engineering</h3>
              <p className="text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                Avoid costly safety margins. Design systems that are perfectly sized for the load profile without excess capacity that drains budgets.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border-l-4 border-secondary shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-secondary text-3xl">thermostat</span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">Thermal Management</h3>
              <p className="text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                Identify hotspots before they occur. Our thermal simulations ensure safety and extend the longevity of every battery module.
              </p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border-l-4 border-tertiary shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-tertiary text-3xl">trending_up</span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">ROI Guarantees</h3>
              <p className="text-slate-600 dark:text-slate-400 font-body leading-relaxed">
                Use predictive degradation models to forecast performance over 10-20 years, proving long-term value to stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-physics */}
      <section className="py-20 md:py-28 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white dark:bg-surface-dark p-2 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
                <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative">
                  <img 
                    alt="Battery Modules" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80" 
                    src="https://blog.sintef.com/wp-content/uploads/2021/09/shutterstock-288105113.jpg" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-6xl text-secondary opacity-50">hub</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 p-3 rounded shadow text-xs font-mono">
                    <div>Thermal <span className="text-green-500">✔</span></div>
                    <div>Structural <span className="text-green-500">✔</span></div>
                    <div>Electrical <span className="text-green-500">✔</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-secondary text-2xl">layers</span>
              </div>
              <h3 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white">Multi-physics Analysis</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Battery systems don't fail in isolation. We simulate the interplay between thermal, electrical, and structural stresses simultaneously. Understand how a thermal runaway event propagates or how structural vibrations affect electrical connections.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-sm">check_circle</span> Coupled thermal-electric solvers
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-sm">check_circle</span> Vibration &amp; shock impact analysis
                </li>
                <li className="flex items-center text-slate-700 dark:text-slate-300">
                  <span className="material-symbols-outlined text-primary mr-3 text-sm">check_circle</span> Cooling system fluid dynamics (CFD)
                </li>
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-2xl">timelapse</span>
              </div>
              <h3 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white">Real-time Degradation Models</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Don't just design for Day 1. Design for Year 20. Our advanced degradation algorithms predict capacity fade and resistance growth under real-world usage profiles, allowing you to right-size your initial investment.
              </p>
              <a className="inline-flex items-center text-primary font-bold hover:underline mt-2" href="#">
                View Sample Report <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a>
            </div>
            <div className="relative">
              <div className="bg-white dark:bg-surface-dark p-6 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
                <div className="space-y-4">
                  <div className="flex justify-between items-end border-b border-slate-100 dark:border-slate-700 pb-2">
                    <span className="text-sm font-bold text-slate-500">Capacity Retention</span>
                    <span className="text-xs font-mono text-tertiary">20 YEAR FORECAST</span>
                  </div>
                  
                  {/* Degradation Curve Graph */}
                  <div className="h-48 w-full p-2 relative">
                    <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                      {/* Grid Lines */}
                      <line x1="0" y1="0" x2="400" y2="0" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" className="dark:stroke-slate-700" />
                      <line x1="0" y1="50" x2="400" y2="50" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" opacity="0.5" className="dark:stroke-slate-700" />
                      <line x1="0" y1="100" x2="400" y2="100" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" opacity="0.5" className="dark:stroke-slate-700" />
                      <line x1="0" y1="150" x2="400" y2="150" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4" opacity="0.5" className="dark:stroke-slate-700" />
                      <line x1="0" y1="200" x2="400" y2="200" stroke="#cbd5e1" strokeWidth="1" className="dark:stroke-slate-600" />
                      
                      {/* Area Fill */}
                      <defs>
                        <linearGradient id="gradientCurve" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E04F39" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#E04F39" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path d="M0,10 C50,15 150,40 200,60 S350,90 400,120 V200 H0 Z" fill="url(#gradientCurve)" />
                      
                      {/* The Curve */}
                      <path d="M0,10 C50,15 150,40 200,60 S350,90 400,120" fill="none" stroke="#E04F39" strokeWidth="3" strokeLinecap="round" />
                      
                      {/* Data Points */}
                      <circle cx="0" cy="10" r="4" fill="#E04F39" />
                      <circle cx="200" cy="60" r="4" fill="#E04F39" className="animate-pulse" />
                      <circle cx="400" cy="120" r="4" fill="#E04F39" />
                      
                      {/* Labels */}
                      <text x="5" y="0" textAnchor="start" fontSize="10" fill="#94a3b8">100%</text>
                      <text x="395" y="110" textAnchor="end" fontSize="10" fill="#E04F39" fontWeight="bold">80% EOL</text>
                    </svg>
                  </div>

                  <div className="flex justify-between text-xs text-slate-400 font-mono pt-1">
                    <span>Year 0</span>
                    <span>Year 10</span>
                    <span>Year 20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white dark:bg-surface-dark p-2 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700">
                <img 
                  alt="High Voltage Cable Grid Integration" 
                  className="w-full h-auto rounded-lg object-cover" 
                  src="https://www.advancedsciencenews.com/wp-content/uploads/2018/10/cable-1868352_1280-e1538644733729.jpg" 
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="w-12 h-12 bg-tertiary/20 rounded-lg flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-tertiary text-2xl">grid_on</span>
              </div>
              <h3 className="font-display font-black text-3xl md:text-4xl text-slate-900 dark:text-white">Grid Integration</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Seamlessly connect your storage assets to the grid. We model power quality, harmonic distortion, and response times to ensure compliance with strict grid codes and utility requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-bottom-right"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-tertiary font-bold uppercase tracking-widest text-sm">Proven Results</span>
              <h2 className="font-display font-black text-4xl md:text-5xl">15-20% CAPEX Savings</h2>
              <p className="text-blue-100 text-lg max-w-lg leading-relaxed">
                See how TechSim optimization reduced initial capital expenditure for a leading renewable energy provider by rightsizing the battery bank and cooling infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a className="bg-primary hover:bg-red-600 text-white px-6 py-3 rounded-DEFAULT font-bold text-center transition-colors shadow-lg" href="#">
                  Read Full Case Study
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="font-display font-bold text-xl mb-6 text-center">Project: SolarFarm Storage Alpha</h3>
              <div className="flex items-end justify-center gap-8 h-64 pb-8 border-b border-white/10">
                <div className="w-32 flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="text-white/60 font-mono text-sm mb-1 group-hover:text-white transition-colors">Before</div>
                  <div className="w-full bg-slate-400/30 rounded-t-lg relative h-48 transition-all group-hover:bg-slate-400/40">
                    <div className="absolute top-4 w-full text-center font-bold text-white">$12.5M</div>
                  </div>
                  <div className="text-xs text-white/60">Initial Estimate</div>
                </div>
                <div className="w-32 flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="text-tertiary font-mono text-sm mb-1 font-bold">After TechSim</div>
                  <div className="w-full bg-primary rounded-t-lg relative h-36 transition-all group-hover:bg-red-500 shadow-[0_0_30px_rgba(224,79,57,0.4)]">
                    <div className="absolute top-4 w-full text-center font-bold text-white">$10.2M</div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                      -18.4% CAPEX
                    </div>
                  </div>
                  <div className="text-xs text-tertiary font-bold">Optimized Design</div>
                </div>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-black text-white">40%</div>
                  <div className="text-xs text-blue-200">Cooling Power Reduction</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">12%</div>
                  <div className="text-xs text-blue-200">Capacity Rightsizing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <div className="py-16 bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted by Energy Innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-4xl">bolt</span>
              <span className="font-display font-black text-xl tracking-tighter">VOLTGRID</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-4xl">wind_power</span>
              <span className="font-display font-black text-xl tracking-tighter">AEROSTREAM</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-4xl">battery_charging_full</span>
              <span className="font-display font-black text-xl tracking-tighter">IONWORKS</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-symbols-outlined text-4xl">solar_power</span>
              <span className="font-display font-black text-xl tracking-tighter">SOLARIS</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl text-slate-900 dark:text-white mb-6">Ready to energize your project?</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto mb-10">Schedule a free consultation with our BESS simulation experts to discuss your specific challenges and goals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              className="bg-primary hover:bg-red-600 text-white px-8 py-4 rounded-DEFAULT font-bold shadow-lg transition-transform hover:-translate-y-1" 
              href="#"
              onClick={(e) => handleNavClick('contact', e)}
            >
              Request Consultation
            </a>
            <a className="bg-white dark:bg-slate-700 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-slate-600 px-8 py-4 rounded-DEFAULT font-bold shadow-lg transition-transform hover:-translate-y-1 border border-slate-200 dark:border-slate-600" href="#">
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyBess;