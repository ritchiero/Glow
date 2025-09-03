import React from 'react';
import SparkleIcon from './SparkleIcon';

const GlowingOrb: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* Container for ROTATING elements */}
      <div className="absolute inset-0 [animation:spin-slow_4s_ease-in-out_infinite]">
        {/* Outer Neon Glow - using exact hex codes */}
        <div className="absolute inset-[-5px] bg-gradient-to-br from-[#EA12F4] to-[#1BD7F7] rounded-full blur-3xl opacity-90"></div>
        {/* Sharp Gradient Ring Base - using exact hex codes */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#EA12F4] to-[#1BD7F7]"></div>
      </div>

      {/* Container for STATIC elements */}
      {/* This sits on top of the rotating gradients, inset by 6px to create a thicker ring effect */}
      <div className="absolute inset-[6px] rounded-full bg-gradient-to-b from-[#093FC3] to-[#020617] overflow-hidden [box-shadow:inset_0_4px_10px_2px_rgba(0,0,0,0.7),0_10px_20px_rgba(107,21,242,0.4)]">
        
        {/* Glossy Highlight - refined for glassy/bubble effect */}
        <div 
          className="absolute top-[5%] left-[10%] w-[80%] h-[45%] bg-gradient-radial from-white/25 to-transparent rounded-[50%] blur-lg transform -rotate-20"
        ></div>

        {/* Centered Icon */}
        <div className="relative w-full h-full flex items-center justify-center">
          <SparkleIcon className="w-1/3 h-1/3 text-white/95 [filter:drop-shadow(0_2px_4px_rgba(0,0,0,0.5))]" />
        </div>
      </div>
    </div>
  );
};

export default GlowingOrb;