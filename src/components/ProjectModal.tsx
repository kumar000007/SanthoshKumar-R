import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Database, Code2, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fadeIn"
    >
      <div
        className="relative w-full max-w-4xl bg-[#090c13] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-slate-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              {project.category === 'data-science' ? 'Data Science Case Study' : 'Full Stack Architecture'}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs text-slate-400 font-mono">Santhoshkumar R</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Hero Banner Image */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 border border-white/[0.06]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090c13] via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Title & Short Description */}
          <div className="space-y-3">
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-slate-900/80 border border-white/[0.06]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col space-y-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{m.label}</span>
                <span className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">{m.value}</span>
              </div>
            ))}
          </div>

          {/* Problem Statement & Key Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/40 border border-white/[0.05] space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>The Problem Challenge</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/40 border border-white/[0.05] space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Methodology & Key Approach</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.keyApproach}
              </p>
            </div>
          </div>

          {/* Quantitative Impact */}
          <div className="p-6 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
            <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Result & Technical Impact</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.resultImpact}
            </p>
          </div>

          {/* Architecture Breakdown if present */}
          {project.architecture && (
            <div className="p-6 rounded-xl bg-slate-900/40 border border-white/[0.05] space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>System Architecture</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.architecture}
              </p>

              {(project.frontendTech || project.backendTech || project.database) && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs">
                  {project.frontendTech && (
                    <div className="space-y-1">
                      <span className="font-mono text-slate-400 uppercase">Frontend:</span>
                      <div className="text-slate-200">{project.frontendTech.join(', ')}</div>
                    </div>
                  )}
                  {project.backendTech && (
                    <div className="space-y-1">
                      <span className="font-mono text-slate-400 uppercase">Backend:</span>
                      <div className="text-slate-200">{project.backendTech.join(', ')}</div>
                    </div>
                  )}
                  {project.database && (
                    <div className="space-y-1">
                      <span className="font-mono text-slate-400 uppercase">Database:</span>
                      <div className="text-slate-200">{project.database.join(', ')}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Technologies Used (Zero-pill text separators) */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400">Technology Stack</span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 font-mono">
              {project.technologies.map((t, idx) => (
                <React.Fragment key={idx}>
                  <span>{t}</span>
                  {idx < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/[0.08] bg-slate-900/60 flex flex-wrap items-center justify-between gap-4 sticky bottom-0 z-10 backdrop-blur-md">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close Overview
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-cyan-400" />
              <span>Source Repository</span>
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                <span>Live Showcase</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
