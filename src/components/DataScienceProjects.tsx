import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Database, BarChart3, ChevronRight } from 'lucide-react';
import { DATA_SCIENCE_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface DataScienceProjectsProps {
  onSelectProject: (p: Project) => void;
}

export const DataScienceProjects: React.FC<DataScienceProjectsProps> = ({ onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="data-science" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            03. Machine Learning Showcase
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
                Data Science & Machine Learning
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed mt-2">
                Real-world predictive models, feature reduction systems, and business intelligence pipelines engineered to transform high-dimensional data into operational foresight.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 shrink-0">
              <span>5 Curated Production Projects</span>
            </div>
          </div>
        </div>

        {/* 5 Project Grid - Bento / Masonry rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {DATA_SCIENCE_PROJECTS.map((project, idx) => {
            // First project gets spotlight wide container
            const isFeatured = idx === 0;
            const colSpan = isFeatured ? 'lg:col-span-12' : idx < 3 ? 'lg:col-span-6' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`${colSpan} group relative rounded-2xl glass-panel overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-950/30 flex flex-col justify-between`}
                style={{
                  transform: hoveredId === project.id ? 'translateY(-4px)' : 'none'
                }}
              >
                {/* Visual Image container with subtle zoom */}
                <div className={`relative w-full overflow-hidden bg-slate-900 ${isFeatured ? 'h-64 sm:h-80 md:h-96' : 'h-52 sm:h-64'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/40 to-transparent pointer-events-none" />

                  {/* Top floating metadata */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                      ML Model 0{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="px-3 py-1 rounded bg-black/60 backdrop-blur-md text-white hover:text-cyan-300 border border-white/10 flex items-center gap-1 transition-colors"
                    >
                      <span>Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3
                        onClick={() => onSelectProject(project)}
                        className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer tracking-tight"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Problem Statement snippet */}
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.04] space-y-1 text-xs">
                      <span className="font-mono text-cyan-400 font-semibold">CORE CHALLENGE:</span>
                      <p className="text-slate-400 line-clamp-2 leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>

                    {/* Key Metrics strip */}
                    <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/[0.05]">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="space-y-0.5">
                          <div className="text-[10px] font-mono uppercase text-slate-400 truncate">{m.label}</div>
                          <div className="text-sm sm:text-base font-bold font-mono text-cyan-400 tabular-nums truncate">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Unboxed tech metadata */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 font-mono pt-2">
                      {project.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="group-hover:text-slate-300 transition-colors">{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Technical Approach</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                        aria-label={`View ${project.title} source on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700/60"
                          aria-label={`View ${project.title} live preview`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
