import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Brain states images
import brainPerfect from '@/assets/883c1495c4447175ee609438939ec32446c745e2.png';
import brainHealthy from '@/assets/41fce5169a983d7686f607809c9999931e464d15.png';
import brainNormal from '@/assets/85620262cc2facbdccacb8b61e5bf108129c0703.png';
import brainTired from '@/assets/ff41882cf6bf817e72536feb0b740d353997550d.png';
import brainDanger from '@/assets/e83a8078c8bb878f2645cab1e9b20e2158cec459.png';
import brainCollapsed from '@/assets/a593e26e1aebbb006db24a5daf023d9e7915f46b.png';

interface BrainStateDisplayProps {
  brainHealth: number;
  onHealthChange: (value: number) => void;
}

export function BrainStateDisplay({ brainHealth, onHealthChange }: BrainStateDisplayProps) {
  // Get current brain state
  const getBrainImage = () => {
    if (brainHealth >= 85) return brainPerfect;
    if (brainHealth >= 68) return brainHealthy;
    if (brainHealth >= 51) return brainNormal;
    if (brainHealth >= 34) return brainTired;
    if (brainHealth >= 17) return brainDanger;
    return brainCollapsed;
  };

  const getStateName = () => {
    if (brainHealth >= 85) return '完美状态';
    if (brainHealth >= 68) return '健康状态';
    if (brainHealth >= 51) return '普通状态';
    if (brainHealth >= 34) return '疲劳状态';
    if (brainHealth >= 17) return '危险状态';
    return '崩溃状态';
  };

  const getBarColor = () => {
    if (brainHealth >= 85) return '#10b981';
    if (brainHealth >= 68) return '#22c55e';
    if (brainHealth >= 51) return '#d97706';
    if (brainHealth >= 34) return '#eab308';
    if (brainHealth >= 17) return '#f97316';
    return '#ef4444';
  };

  return (
    <div className="relative w-full max-w-lg mx-auto py-12">
      
      <div className="relative">
        
        {/* Brain Image - Large with Floating Animation */}
        <motion.div 
          className="relative w-72 h-72 mx-auto mb-8"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={getBrainImage()}
              src={getBrainImage()}
              alt={getStateName()}
              className="w-full h-full object-contain drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0
              }}
              exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
            />
          </AnimatePresence>
        </motion.div>

        {/* Minimal Card */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-slate-100/50">
          
          {/* Health Display - Side by Side Layout */}
          <div className="flex items-center justify-between mb-3">
            
            {/* Left: Percentage */}
            <motion.div
              key={brainHealth}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-baseline gap-2"
            >
              <span 
                className="text-4xl font-black tracking-tight"
                style={{ color: getBarColor() }}
              >
                {brainHealth}%
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                {getStateName()}
              </span>
            </motion.div>

            {/* Right: 0% and 100% */}
            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
              <span>0%</span>
              <span className="text-slate-300">|</span>
              <span>100%</span>
            </div>
          </div>

          {/* Progress Bar - Clean & Simple */}
          <div className="relative">
            <div className="relative h-2.5 bg-slate-100/80 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: getBarColor() }}
                animate={{ width: `${brainHealth}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            
            {/* Invisible Slider Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={brainHealth}
              onChange={(e) => onHealthChange(Number(e.target.value))}
              className="absolute inset-0 w-full h-2.5 rounded-full appearance-none cursor-pointer bg-transparent minimal-slider-overlay"
            />
          </div>

          {/* Hint */}
          <div className="text-center mt-3">
            <p className="text-[10px] text-slate-400 font-medium">
              拖动进度条调节健康度
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
