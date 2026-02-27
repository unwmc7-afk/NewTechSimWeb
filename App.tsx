import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import DigitalThreadTemplate from './components/DigitalThreadTemplate';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import References from './components/References';
import TrustedBy from './components/TrustedBy';
import NewsInsights from './components/NewsInsights';
import Newsletter from './components/Newsletter';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Testing from './components/Testing';
import SeminarRegistration from './components/SeminarRegistration';
import EnergyBess from './components/EnergyBess';
import Sitemap from './components/Sitemap';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookieBanner from './components/CookieBanner';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import AiModemDigitwin from './components/AiModemDigitwin';
import CfdSimulation from './components/CfdSimulation';

type Page = 'home' | 'blog' | 'testing' | 'seminar' | 'energy' | 'sitemap' | 'privacy' | 'terms' | 'contact' | 'about' | 'digital-eda' | 'digital-simcenter' | 'digital-cam' | 'ai-modem' | 'cfd-simulation';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentPage as any} />
            <Stats />
            <Solutions />
            <References />
            <TrustedBy />
            <NewsInsights onNavigate={(page) => setCurrentPage(page as Page)} />
            <Newsletter />
            <PreFooter onNavigate={setCurrentPage as any} />
          </>
        );
      case 'digital-eda':
        return (
          <DigitalThreadTemplate
            title={t.digitalThreads?.eda?.title}
            painPoint={t.landingPages?.eda?.painPoint}
            solution={t.landingPages?.eda?.solution}
            benefitsManagement={t.landingPages?.eda?.benefitsManagement}
            benefitsEngineers={t.landingPages?.eda?.benefitsEngineers}
            software={["Xpedition", "PADS Professional", "Hyperlynx", "Valor"]}
            color="#FFAD00"
            onNavigate={setCurrentPage as any}
          />
        );
      case 'digital-simcenter':
        return (
          <DigitalThreadTemplate
            title={t.digitalThreads?.simcenter?.title}
            painPoint={t.landingPages?.simcenter?.painPoint}
            solution={t.landingPages?.simcenter?.solution}
            benefitsManagement={t.landingPages?.simcenter?.benefitsManagement}
            benefitsEngineers={t.landingPages?.simcenter?.benefitsEngineers}
            software={["Simcenter 3D", "Simcenter STAR-CCM+", "Simcenter Amesim", "Simcenter Testlab"]}
            color="#004C97"
            onNavigate={setCurrentPage as any}
          />
        );
      case 'digital-cam':
        return (
          <DigitalThreadTemplate
            title={t.digitalThreads?.cam?.title}
            painPoint={t.landingPages?.cam?.painPoint}
            solution={t.landingPages?.cam?.solution}
            benefitsManagement={t.landingPages?.cam?.benefitsManagement}
            benefitsEngineers={t.landingPages?.cam?.benefitsEngineers}
            software={["NX CAM", "Opcenter", "Tecnomatix"]}
            color="#E04F39"
            onNavigate={setCurrentPage as any}
          />
        );
      case 'blog':
        return <Blog />;
      case 'testing':
        return <Testing onNavigate={setCurrentPage as any} />;
      case 'seminar':
        return <SeminarRegistration />;
      case 'energy':
        return <EnergyBess onNavigate={setCurrentPage as any} />;
      case 'sitemap':
        return <Sitemap onNavigate={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      case 'contact':
        return <Contact />;
      case 'about':
        return <AboutUs />;
      case 'ai-modem':
        return <AiModemDigitwin />;
      case 'cfd-simulation':
        return <CfdSimulation />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={setCurrentPage as any} currentPage={currentPage as any} />
      <main className="flex-grow flex flex-col">
        {renderContent()}
      </main>
      <Footer onNavigate={setCurrentPage as any} />
      <CookieBanner />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;