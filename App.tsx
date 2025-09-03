
import React from 'react';
import GlowingOrb from './components/GlowingOrb';

const App: React.FC = () => {
  return (
    <main className="relative w-screen h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#3E18EB]/20 via-slate-900 to-black"></div>
      <GlowingOrb />
    </main>
  );
};

export default App;
