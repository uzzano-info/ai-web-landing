import React from 'react';
import GNB from './components/GNB';
import Hero from './components/Hero';
import Reframing from './components/Reframing';
import DigitalAsset from './components/DigitalAsset';
import Comparison from './components/Comparison';
import SalesCTA from './components/SalesCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-indigo-500/30 font-sans">
      <GNB />
      <Hero />
      <Reframing />
      <DigitalAsset />
      <Comparison />
      <SalesCTA />
      <Footer />
    </div>
  );
}

export default App;
