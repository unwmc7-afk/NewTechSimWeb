import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-background-light dark:bg-background-dark py-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="font-display font-black text-4xl text-slate-900 dark:text-white mb-2">
          {language === 'cs' ? 'Podmínky služby' : 'Terms of Service'}
        </h1>
        <p className="text-slate-500 mb-10">
          {language === 'cs' ? 'Poslední aktualizace: 1. března 2025' : 'Last updated: March 1, 2025'}
        </p>

        <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-xl shadow-lg space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '1. Přijetí podmínek' : '1. Acceptance of Terms'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Přístupem na webové stránky TechSim Engineering ("Služba") a jejich používáním souhlasíte s těmito Podmínkami služby. Pokud s jakoukoli částí podmínek nesouhlasíte, nesmíte ke Službě přistupovat.'
                : 'By accessing or using the TechSim Engineering website ("Service"), you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '2. Použití licence' : '2. Use License'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Je povoleno dočasně stáhnout jednu kopii materiálů (informací nebo softwaru) na webových stránkách TechSim Engineering pouze pro osobní, nekomerční přechodné prohlížení. Toto je udělení licence, nikoli převod vlastnického práva.'
                : 'Permission is granted to temporarily download one copy of the materials (information or software) on TechSim Engineering\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '3. Odmítnutí odpovědnosti' : '3. Disclaimer'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Materiály na webových stránkách TechSim Engineering jsou poskytovány "tak, jak jsou". TechSim Engineering neposkytuje žádné záruky, vyjádřené nebo předpokládané, a tímto se zříká a popírá všechny ostatní záruky, včetně, bez omezení, předpokládaných záruk nebo podmínek obchodovatelnosti, vhodnosti pro konkrétní účel nebo neporušení duševního vlastnictví nebo jiného porušení práv.'
                : 'The materials on TechSim Engineering\'s website are provided on an "as is" basis. TechSim Engineering makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '4. Omezení' : '4. Limitations'}
            </h2>
            <p>
              {language === 'cs'
                ? 'V žádném případě nebude společnost TechSim Engineering ani její dodavatelé odpovědní za jakékoli škody (včetně, bez omezení, škod za ztrátu dat nebo zisku nebo v důsledku přerušení podnikání) vyplývající z použití nebo nemožnosti použití materiálů na webových stránkách TechSim Engineering.'
                : 'In no event shall TechSim Engineering or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TechSim Engineering\'s website.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '5. Rozhodné právo' : '5. Governing Law'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Tyto podmínky se řídí a vykládají v souladu se zákony České republiky a vy se neodvolatelně podřizujete výlučné jurisdikci soudů v tomto státě nebo místě.'
                : 'These terms and conditions are governed by and construed in accordance with the laws of the Czech Republic and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;