import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-background-light dark:bg-background-dark py-20 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="font-display font-black text-4xl text-slate-900 dark:text-white mb-2">
          {language === 'cs' ? 'Zásady ochrany osobních údajů' : 'Privacy Policy'}
        </h1>
        <p className="text-slate-500 mb-10">
          {language === 'cs' ? 'Poslední aktualizace: 1. března 2025' : 'Last updated: March 1, 2025'}
        </p>

        <div className="bg-white dark:bg-surface-dark p-8 md:p-12 rounded-xl shadow-lg space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '1. Úvod' : '1. Introduction'}
            </h2>
            <p>
              {language === 'cs' 
                ? 'Společnost TechSim Engineering (dále jen "my", "nás" nebo "naše") provozuje webové stránky techsim.cz. Tato stránka vás informuje o našich zásadách týkajících se shromažďování, používání a zveřejňování osobních údajů, které získáváme od uživatelů webových stránek.'
                : 'TechSim Engineering ("us", "we", or "our") operates the techsim.cz website. This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '2. Shromažďování a použití dat' : '2. Information Collection and Use'}
            </h2>
            <p className="mb-4">
              {language === 'cs'
                ? 'Při používání našich stránek vás můžeme požádat o poskytnutí určitých osobně identifikovatelných informací, které lze použít k tomu, abychom vás kontaktovali nebo identifikovali. Osobně identifikovatelné informace mohou zahrnovat, ale nejsou omezeny na:'
                : 'While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:'}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>{language === 'cs' ? 'Jméno a příjmení' : 'Name'}</li>
              <li>{language === 'cs' ? 'E-mailová adresa' : 'Email address'}</li>
              <li>{language === 'cs' ? 'Telefonní číslo' : 'Phone number'}</li>
              <li>{language === 'cs' ? 'Název společnosti' : 'Company name'}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '3. Logovací údaje' : '3. Log Data'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Stejně jako mnoho jiných provozovatelů webových stránek shromažďujeme informace, které váš prohlížeč odesílá při každé návštěvě našich stránek ("Log Data"). Tato Log Data mohou zahrnovat informace, jako je adresa internetového protokolu ("IP") vašeho počítače, typ prohlížeče, verze prohlížeče, stránky našeho webu, které navštívíte, čas a datum vaší návštěvy, čas strávený na těchto stránkách a další statistiky.'
                : 'Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer\'s Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '4. Cookies' : '4. Cookies'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Soubory cookie jsou soubory s malým množstvím dat, které mohou obsahovat anonymní jedinečný identifikátor. Soubory cookie jsou odesílány do vašeho prohlížeče z webové stránky a uloženy na pevném disku vašeho počítače. Používáme "cookies" ke shromažďování informací. Ve svém prohlížeči můžete nastavit, aby odmítal všechny soubory cookie nebo aby vás informoval o odeslání souboru cookie. Pokud však soubory cookie nepřijmete, možná nebudete moci používat některé části našich stránek.'
                : 'Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer\'s hard drive. We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '5. Zabezpečení' : '5. Security'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Bezpečnost vašich osobních údajů je pro nás důležitá, ale pamatujte, že žádný způsob přenosu přes internet nebo způsob elektronického ukládání není 100% bezpečný. Přestože se snažíme používat komerčně přijatelné prostředky k ochraně vašich osobních údajů, nemůžeme zaručit jejich absolutní bezpečnost.'
                : 'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.'}
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              {language === 'cs' ? '6. Kontaktujte nás' : '6. Contact Us'}
            </h2>
            <p>
              {language === 'cs'
                ? 'Máte-li jakékoli dotazy týkající se těchto Zásad ochrany osobních údajů, kontaktujte nás na adrese info@techsim.cz.'
                : 'If you have any questions about this Privacy Policy, please contact us at info@techsim.cz.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;