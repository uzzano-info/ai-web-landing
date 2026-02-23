import React from 'react';
import GNB from './components/GNB';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Comparison from './components/Comparison';
import TargetAudience from './components/TargetAudience';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden w-full">
      <GNB />
      <main className="w-full">
        <Hero />
        <PainPoints />
        <Solution />
        <Comparison />
        <TargetAudience />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
