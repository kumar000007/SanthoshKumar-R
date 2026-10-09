import React, { useState } from 'react';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, X } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#06080d]/50">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            06. Credentials & Badges
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
                Professional Certifications
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed mt-2">
                10 industry-recognized credentials verifying proficiency across AI engineering, full stack web development, and quantitative data science.
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 shrink-0">
              <span>10 Verified Credentials</span>
            </div>
          </div>
        </div>

        {/* Certificate Grid - 10 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-5 border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Header with Issuer badge and Icon */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                    {cert.date}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-300">
                    {cert.issuer}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-[11px] font-mono text-slate-500">
                  <span>ID: {cert.credentialId}</span>
                </div>

                {/* Covered Skills */}
                <div className="pt-2 border-t border-white/[0.04]">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400">
                    {cert.skills.map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span>{skill}</span>
                        {sIdx < cert.skills.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Details
                </button>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Details Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="w-full max-w-lg p-6 sm:p-8 rounded-2xl bg-[#090c13] border border-cyan-500/30 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Award className="w-6 h-6" />
              </div>
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Official Credential Record
              </span>
              <h4 className="text-xl font-bold text-white">{selectedCert.title}</h4>
              <p className="text-sm text-slate-300 font-semibold">{selectedCert.issuer}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.06] space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Credential Identifier:</span>
                <span className="text-white">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Verification Status:</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Authenticated
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Core Competencies Validated:</div>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skills.map((s, idx) => (
                  <span key={idx} className="text-xs px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60 text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.06]">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Close
              </button>
              <a
                href={selectedCert.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
              >
                <span>External Verification</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
