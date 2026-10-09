import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Layers, Code2, Server, Database, ChevronRight } from 'lucide-react';
import { FULL_STACK_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface FullStackProjectsProps {
  onSelectProject: (p: Project) => void;
}

export const FullStackProjects: React.FC<FullStackProjectsProps> = ({ onSelectProject }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="full-stack" className="py-24 relative overflow-hidden bg-[#06080d]/40">
      {/* Background illumination */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            04. Distributed Web Engineering
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
                Full Stack Development Projects
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed mt-2">
                Production-grade MERN architectures, decoupled AI inference gateways, and database-driven web platforms built with rock-solid CRUD patterns and security standards.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 shrink-0">
              <span>5 Deployed Web Systems</span>
            </div>
          </div>
        </div>

        {/* 5 Full Stack Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {FULL_STACK_PROJECTS.map((project, idx) => {
            const isFeatured = idx === 0 || idx === 4; // CRM & AI-Powered are standout wide cards
            const colSpan = isFeatured ? 'lg:col-span-12' : 'lg:col-span-4';

            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`${colSpan} group relative rounded-2xl glass-panel overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-950/30 flex flex-col justify-between`}
                style={{
                  transform: hoveredId === project.id ? 'translateY(-4px)' : 'none'
                }}
              >
                {/* Visual Banner */}
                <div className={`relative w-full overflow-hidden bg-slate-900 ${isFeatured ? 'h-64 sm:h-80 md:h-96' : 'h-48 sm:h-56'}`}>
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
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-indigo-300 border border-white/10">
                      System 0{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="px-3 py-1 rounded bg-black/60 backdrop-blur-md text-white hover:text-indigo-300 border border-white/10 flex items-center gap-1 transition-colors"
                    >
                      <span>Architecture</span>
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
                        className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer tracking-tight"
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Architecture / Key Approach summary */}
                    {project.architecture && (
                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.04] text-xs space-y-1">
                        <span className="font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>ARCHITECTURE:</span>
                        </span>
                        <p className="text-slate-400 leading-relaxed">
                          {project.architecture}
                        </p>
                      </div>
                    )}

                    {/* Stack Matrix: Frontend / Backend / Database */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-1 text-xs">
                      {project.frontendTech && (
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono uppercase text-slate-500">Frontend</div>
                          <div className="text-slate-300 font-mono truncate">{project.frontendTech.slice(0, 2).join(', ')}</div>
                        </div>
                      )}
                      {project.backendTech && (
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono uppercase text-slate-500">Backend</div>
                          <div className="text-slate-300 font-mono truncate">{project.backendTech.slice(0, 2).join(', ')}</div>
                        </div>
                      )}
                      {project.database && (
                        <div className="space-y-0.5">
                          <div className="text-[10px] font-mono uppercase text-slate-500">Database</div>
                          <div className="text-slate-300 font-mono truncate">{project.database.join(', ')}</div>
                        </div>
                      )}
                    </div>

                    {/* Unboxed tech tags */}
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 font-mono pt-1">
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
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                    >
                      <span>Inspect System Specs</span>
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
                          aria-label={`View ${project.title} live demo`}
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
