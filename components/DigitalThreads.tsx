import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const DigitalThreads: React.FC<{ onNavigate: (page: any) => void }> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [hoveredThread, setHoveredThread] = useState<string | null>(null);

  // TechSim Colors
  const colors = {
    eda: '#FFAD00', // Amber (Tertiary)
    sim: '#004C97', // Blue (Secondary)
    cam: '#E04F39', // Red (Primary)
  };

  const threads = [
    {
      id: 'eda',
      color: colors.eda,
      title: t.digitalThreads?.eda?.title || "Smart Electronics Development",
      desc: t.digitalThreads?.eda?.desc || "From PCB design to system commissioning.",
      path: "M0,150 C300,150 400,300 600,300 C800,300 900,150 1200,150",
      node: { x: 300, y: 150, label: t.digitalThreads?.eda?.label || "Development" }
    },
    {
      id: 'sim',
      color: colors.sim,
      title: t.digitalThreads?.simcenter?.title || "Computer Simulation & Testing",
      desc: t.digitalThreads?.simcenter?.desc || "Replace expensive physical prototypes with virtual ones.",
      path: "M0,300 C300,300 400,300 600,300 C800,300 900,300 1200,300",
      node: { x: 900, y: 300, label: t.digitalThreads?.simcenter?.label || "Simulation" }
    },
    {
      id: 'cam',
      color: colors.cam,
      title: t.digitalThreads?.cam?.title || "Manufacturing Prep & CNC Machining",
      desc: t.digitalThreads?.cam?.desc || "Transfer 3D models directly to the machine.",
      path: "M0,450 C300,450 400,300 600,300 C800,300 900,450 1200,450",
      node: { x: 300, y: 450, label: t.digitalThreads?.cam?.label || "Manufacturing" }
    }
  ];

  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          {t.hero.title}
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          {t.hero.desc}
        </p>
      </div>

      <div className="relative h-[600px] w-full max-w-7xl mx-auto">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
          {/* Intersection Node (Digital Twin) */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <circle cx="600" cy="300" r="40" fill="white" fillOpacity="0.1" />
            <circle cx="600" cy="300" r="20" fill="white" />
            <text x="600" y="360" textAnchor="middle" fill="white" className="text-sm font-bold uppercase tracking-widest">Digital Twin</text>
          </motion.g>

          {threads.map((thread) => {
            const isHovered = hoveredThread === thread.id;
            const isDimmed = hoveredThread && hoveredThread !== thread.id;

            return (
              <g 
                key={thread.id}
                onMouseEnter={() => setHoveredThread(thread.id)}
                onMouseLeave={() => setHoveredThread(null)}
                onClick={() => onNavigate(`digital-${thread.id}`)}
                className="cursor-pointer transition-opacity duration-300"
                style={{ opacity: isDimmed ? 0.2 : 1 }}
              >
                {/* The Path */}
                <motion.path
                  d={thread.path}
                  fill="none"
                  stroke={thread.color}
                  strokeWidth={isHovered ? 12 : 6}
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Flowing Data Particles */}
                <circle r="6" fill="white">
                  <animateMotion 
                    dur="3s" 
                    repeatCount="indefinite" 
                    path={thread.path}
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.4 0 0.2 1"
                  />
                </circle>
                <circle r="4" fill="white" opacity="0.5">
                  <animateMotion 
                    dur="3s" 
                    begin="1.5s"
                    repeatCount="indefinite" 
                    path={thread.path}
                    calcMode="spline"
                    keyTimes="0;1"
                    keySplines="0.4 0 0.2 1"
                  />
                </circle>

                {/* Interactive Node */}
                <motion.rect
                  x={thread.node.x - 15}
                  y={thread.node.y - 15}
                  width="30"
                  height="30"
                  fill={thread.color}
                  whileHover={{ scale: 1.5, rotate: 45 }}
                  className="drop-shadow-lg"
                />
                
                {/* Node Label */}
                <text 
                  x={thread.node.x} 
                  y={thread.node.y + 35} 
                  textAnchor="middle" 
                  fill="white" 
                  className="text-xs font-bold uppercase tracking-wider opacity-80"
                >
                  {thread.node.label}
                </text>
                
                {/* Label on Hover */}
                {isHovered && (
                  <foreignObject x={thread.node.x + 30} y={thread.node.y - 40} width="250" height="150">
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-xl text-left">
                      <h3 className="text-white font-bold mb-1" style={{ color: thread.color }}>{thread.title}</h3>
                      <p className="text-slate-300 text-xs">{thread.desc}</p>
                      <div className="mt-2 text-xs font-bold text-white flex items-center">
                        Explore <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                      </div>
                    </div>
                  </foreignObject>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
};

export default DigitalThreads;
