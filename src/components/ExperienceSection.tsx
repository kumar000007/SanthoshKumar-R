import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            05. Professional Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Industry Experience & Practical Tenures
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Hands-on professional immersion applying rigorous statistical modeling, data preprocessing, and production machine learning workflows.
          </p>
        </div>

        {/* Futuristic Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-indigo-500 before:to-slate-800">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline glowing node */}
              <div className="absolute -left-6 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-cyan-500/50">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
              </div>

              {/* Experience Card */}
              <div className="p-8 rounded-2xl glass-panel group-hover:border-cyan-500/30 transition-all duration-300 space-y-6">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.06] pb-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-cyan-300 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-slate-300">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Summary narrative */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Core Key Deliverables */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Deliverables & Responsibilities
                  </span>
                  <div className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlighted Tooling and Skills (Zero-pill text separators) */}
                <div className="pt-4 border-t border-white/[0.06] space-y-2">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    Applied Methodologies & Stack
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-cyan-300">
                    {exp.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span>{tech}</span>
                        {tIdx < exp.technologies.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Academic Milestone item in timeline */}
          <div className="relative group">
            <div className="absolute -left-6 sm:-left-10 top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
            </div>

            <div className="p-8 rounded-2xl glass-panel space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    MCA — Master of Computer Application (Pursuing)
                  </h3>
                  <div className="text-sm text-slate-300">Sikkim Manipal University</div>
                </div>
                <div className="text-xs font-mono text-slate-400">2025 – 2027 · Currently Enrolled</div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Currently pursuing Master of Computer Application (2025 – 2027), specializing in core algorithmic complexity, machine learning foundations, enterprise database systems, and distributed web architectures with a strong undergraduate foundation in BA English (8.6 CGPA).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
