import React from 'react';
import { ArrowDown, FileDown, Sparkles, ExternalLink, Code2, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Hero3DCanvas } from './Hero3DCanvas';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Split Screen Hero: 2-Column Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-6 lg:pt-0">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
            {/* Clean unboxed editorial kicker (zero pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block mr-1 opacity-75" />
              <span>DATA SCIENCE ARCHITECT</span>
              <span className="text-slate-600" aria-hidden="true">/</span>
              <span>FULL STACK ENGINEER</span>
            </div>

            {/* Primary Name & Role Display */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                SANTHOSHKUMAR <span className="text-gradient-cyan">R</span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-slate-300 tracking-tight">
                Data Scientist <span className="text-cyan-400 font-normal">|</span> Full Stack Developer
              </p>
            </div>

            {/* Short Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-100 leading-snug tracking-tight text-balance">
              &ldquo;Transforming Data into Intelligence. Building Ideas into Digital Experiences.&rdquo;
            </h2>

            {/* Professional Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              I combine Data Science, Machine Learning, AI architectures, and Full Stack Development to engineer intelligent, scalable digital solutions. From training predictive machine learning models to orchestrating robust cloud applications, I bridge mathematical algorithms with production-ready software systems.
            </p>

            {/* Dual Specialization Badges (Unboxed metadata style) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span>Python · Scikit-learn · XGBoost · SQL</span>
              </span>
              <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>React.js · Node.js · Express · MongoDB</span>
              </span>
              <span className="text-slate-700 hidden sm:inline" aria-hidden="true">|</span>
              <a
                href="https://github.com/kumar000007"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors underline"
              >
                <span>github.com/kumar000007</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Premium CTA Buttons with Quick Resume Menu */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#data-science"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 bg-slate-900/90 border border-slate-700/80 rounded-lg hover:bg-slate-800 hover:border-cyan-500/50 hover:text-white active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resumes (DS &amp; Full Stack)</span>
              </a>

              <a
                href="https://github.com/kumar000007"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 p-3.5 text-sm font-medium text-slate-300 bg-slate-900/60 border border-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-all"
                title="View Santhoshkumar on GitHub"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline text-xs font-mono">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Experience */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <Hero3DCanvas />
          </div>
        </div>

        {/* Full-width 4-column KPI strip below hero split (Constitution Rule 2.B & 13) */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono tracking-tight tabular-nums flex items-baseline gap-1">
                <span className="text-cyan-400">{stat.value}</span>
                <span className="text-xs sm:text-sm font-sans font-normal text-slate-400">{stat.suffix}</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="w-full flex justify-center pt-8 pointer-events-none">
        <a
          href="#about"
          className="pointer-events-auto flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-cyan-400/60 transition-colors">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
