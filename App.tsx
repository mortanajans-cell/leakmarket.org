import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DataCatalog from './components/DataCatalog';
import WholesaleInfo from './components/WholesaleInfo';
import Gallery from './components/Gallery';
import References from './components/References';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { dir } = useLanguage();

  return (
    <div dir={dir} className="min-h-screen bg-dark-bg text-gray-100 selection:bg-cyber-green selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DataCatalog />
        <WholesaleInfo />
        <Gallery />
        <References />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;