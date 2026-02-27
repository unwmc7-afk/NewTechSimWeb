import React from 'react';
import { motion } from 'framer-motion';

const ProcessComparison: React.FC = () => {
  // Colors
  const colors = {
    old: '#64748b', // Slate 500 (Grey)
    new: '#FFAD00', // TechSim Amber (Yellow)
    text: '#ffffff',
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-12 mb-8 relative h-[300px] md:h-[400px]">
      <svg 
        className="w-full h-full overflow-visible" 
        viewBox="0 0 1000 400" 
        preserveAspectRatio="xMidYMid meet"
      >
        {/* --- DEFINITIONS --- */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- PATHS --- */}
        
        {/* TOP PATH (Outdated Process) - Arcs up and zigzags */}
        <g>
          {/* Visual Path */}
          <path
            d="M 50,200 Q 100,100 150,100 L 200,120 L 250,80 L 300,110 L 350,90 L 400,100 L 450,100 L 500,130 L 550,70 L 600,100 L 650,100 L 700,110 L 750,90 L 800,100 L 850,100 Q 900,100 950,200"
            fill="none"
            stroke={colors.old}
            strokeWidth="3"
            strokeDasharray="8, 4"
            className="opacity-60"
          />
          
          {/* Label */}
          <text x="500" y="50" textAnchor="middle" fill={colors.old} fontSize="18" className="uppercase tracking-widest font-bold font-sans">
            Zastaralý proces
          </text>

          {/* Particles - Slow, getting stuck */}
          {[0, 1, 2].map((i) => (
            <g key={`old-particle-${i}`}>
              {/* 
                CHANGE SHAPE HERE: 
                For square: <rect width="14" height="14" x="-7" y="-7" fill={colors.old} />
                For circle: <circle r="7" fill={colors.old} />
              */}
              <circle r="7" fill={colors.old} />
              <animateMotion
                dur="12s"
                repeatCount="indefinite"
                begin={`${i * 4}s`}
                path="M 50,200 Q 100,100 150,100 L 200,120 L 250,80 L 300,110 L 350,90 L 400,100 L 450,100 L 500,130 L 550,70 L 600,100 L 650,100 L 700,110 L 750,90 L 800,100 L 850,100 Q 900,100 950,200"
                // KeyTimes to simulate getting stuck at corners
                keyTimes="0; 0.1; 0.15; 0.2; 0.25; 0.3; 0.35; 0.4; 0.45; 0.5; 0.55; 0.6; 0.65; 0.7; 0.75; 0.8; 0.85; 0.9; 1"
                keyPoints="0; 0.1; 0.15; 0.2; 0.25; 0.3; 0.35; 0.4; 0.45; 0.5; 0.55; 0.6; 0.65; 0.7; 0.75; 0.8; 0.85; 0.9; 1"
                calcMode="linear"
              />
            </g>
          ))}
        </g>

        {/* BOTTOM PATH (TechSim Digital Thread) - Straight */}
        <g>
          {/* Visual Path */}
          <path
            d="M 50,200 L 950,200"
            fill="none"
            stroke={colors.new}
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Label */}
          <text x="500" y="250" textAnchor="middle" fill={colors.new} fontSize="18" className="uppercase tracking-widest font-bold font-sans">
            Digitální vlákno SIEMENS
          </text>

          {/* Particles - Fast, Smooth */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={`new-particle-${i}`}>
              {/* 
                CHANGE SHAPE HERE: 
                For square: <rect width="16" height="16" x="-8" y="-8" fill="white" />
                For circle: <circle r="8" fill="white" />
              */}
              <circle r="8" fill="white" />
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                begin={`${i * 0.6}s`}
                path="M 50,200 L 950,200"
                calcMode="linear"
              />
            </g>
          ))}
        </g>

        {/* --- NODES (Shared) --- */}
        {/* Start Node (Myšlenka) */}
        <g transform="translate(50, 200)">
          <circle r="25" fill="#0f172a" stroke="white" strokeWidth="3" />
          <text x="0" y="45" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="font-sans uppercase tracking-wide">Myšlenka</text>
        </g>

        {/* End Node (Produkt) */}
        <g transform="translate(950, 200)">
          <circle r="25" fill="#0f172a" stroke="white" strokeWidth="3" />
          <text x="0" y="45" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" className="font-sans uppercase tracking-wide">Produkt</text>
        </g>

      </svg>
    </div>
  );
};

export default ProcessComparison;
