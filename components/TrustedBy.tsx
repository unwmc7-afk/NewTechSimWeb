import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  { 
    name: 'Škoda Auto', 
    logo: 'https://cdn.skoda-storyboard.com/2022/12/logo_Skoda_2022_01_a4c16197.png', 
    url: 'https://www.skoda-auto.cz/' 
  },
  { 
    name: 'SOR Libchavy', 
    logo: 'https://www.sor.cz/wp-content/uploads/2022/02/Logo-SOR-mal%C3%A9-344x200.png', 
    url: 'https://www.sor.cz/' 
  },
  { 
    name: 'Ammann', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ammann_Group_logo.svg/3840px-Ammann_Group_logo.svg.png', 
    url: 'https://www.ammann.com/' 
  },
  { 
    name: 'Siemens', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg', 
    url: 'https://www.siemens.com/' 
  },
  { 
    name: 'PBS Group', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Logo_PBS_2019.jpg', 
    url: 'https://www.pbs.cz/' 
  },
  { 
    name: 'Doosan Škoda Power', 
    logo: 'https://www.doosanskodapower.com/download/ci/bm_dspw_logo_1_0_cmyk_horizontal_dark_blue.jpg', 
    url: 'https://www.doosanskodapower.com/' 
  },
  { 
    name: 'Foxconn', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Foxconn_logo.svg/3840px-Foxconn_logo.svg.png', 
    url: 'https://www.foxconn.com/' 
  },
  { 
    name: 'Semikron Danfoss', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHTPRmdobCAEX8Ul4eNXEW2G8o0aIHsOFcA&s', 
    url: 'https://www.semikron-danfoss.com/' 
  },
];

const TrustedBy: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="py-10 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest">{t.trustedBy.label}</p>
      </div>
      
      <div className="relative w-full overflow-hidden group">
        {/* Gradient masks for smooth fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-surface-dark to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-surface-dark to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling Container */}
        <div className="flex w-max animate-marquee hover:pause items-center">
          {/* First set of logos */}
          <div className="flex shrink-0 items-center">
            {partners.map((partner, index) => (
              <a 
                key={`p1-${index}`} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 md:px-16 block transition-all duration-300 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 filter"
                title={partner.name}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-8 md:h-12 w-auto max-w-[150px] object-contain"
                  onError={(e) => {
                    // Fallback if image fails
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      target.style.display = 'none';
                      parent.innerText = partner.name;
                      parent.classList.add('font-bold', 'text-slate-500', 'text-xl', 'whitespace-nowrap');
                      parent.classList.remove('grayscale');
                    }
                  }}
                />
              </a>
            ))}
          </div>

          {/* Second set of logos (duplicate for seamless loop) */}
          <div className="flex shrink-0 items-center">
            {partners.map((partner, index) => (
              <a 
                key={`p2-${index}`} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-8 md:px-16 block transition-all duration-300 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 filter"
                title={partner.name}
              >
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className="h-8 md:h-12 w-auto max-w-[150px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      target.style.display = 'none';
                      parent.innerText = partner.name;
                      parent.classList.add('font-bold', 'text-slate-500', 'text-xl', 'whitespace-nowrap');
                      parent.classList.remove('grayscale');
                    }
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;