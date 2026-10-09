import React, { useState } from 'react';
import { Database, Code2, LineChart, Terminal, Layers, ShieldCheck, Cpu, GitBranch } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'data-science':
        return Database;
      case 'full-stack':
        return Code2;
      case 'data-viz':
        return LineChart;
      default:
        return Cpu;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#06080d]/60">
      {/* Background illumination */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-indigo-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            02. Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Specialized Tooling & Algorithmic Capabilities
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Categorized technical capabilities spanning mathematical machine learning frameworks, full-stack JavaScript architectures, and relational business intelligence.
          </p>
        </div>

        {/* Interactive Filter Segmented Control (Constitution Rule 1.A: Functional buttons allowed) */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl max-w-fit mb-12">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'all'
                ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Competencies
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('data-science')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'data-science'
                ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Data Science & ML
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('full-stack')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'full-stack'
                ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Full Stack Engineering
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('data-viz')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
              activeTab === 'data-viz'
                ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/60'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Data & Visualization
          </button>
        </div>

        {/* Skill Clusters */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => {
            const CatIcon = getCategoryIcon(cat.id);
            return (
              <div key={cat.id} className="p-8 rounded-2xl glass-panel space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.07] pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-400">{cat.subtitle}</p>
                    </div>
                  </div>

                  {/* Clean unboxed count */}
                  <div className="text-xs font-mono text-slate-500">
                    <span>{cat.skills.length} core technologies</span>
                  </div>
                </div>

                {/* Grid of skill cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-900/50 border border-white/[0.05] hover:border-cyan-500/30 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between space-y-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {skill.description}
                      </p>
                      <div className="pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 inline-block" />
                        <span>Production verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
