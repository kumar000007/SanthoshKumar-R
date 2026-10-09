import React from 'react';
import { Trophy, CheckCircle2, TrendingUp, Sparkles, GraduationCap } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16 text-left">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            07. Verified Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Key Professional Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Tangible benchmarks reflecting deep commitment to algorithmic accuracy, robust application deployment, and continuous academic excellence.
          </p>
        </div>

        {/* 3 Major Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle top corner ambient glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all pointer-events-none" />

              <div className="space-y-6">
                {/* Metric Display with Tabular Figures */}
                <div className="flex items-baseline justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black font-mono text-cyan-400 tabular-nums tracking-tight">
                      {item.metric}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {item.metricLabel}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Specific Highlights */}
              <div className="pt-4 border-t border-white/[0.05] space-y-2">
                <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">Key Highlights</span>
                <div className="space-y-1.5">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
