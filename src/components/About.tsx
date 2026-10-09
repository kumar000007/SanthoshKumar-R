import React, { useState } from 'react';
import {
  Brain,
  Layers,
  GraduationCap,
  Briefcase,
  Compass,
  CheckCircle2,
  Terminal,
  Cpu,
  Database,
  Code,
  Camera,
  Image as ImageIcon
} from 'lucide-react';
import { PERSONAL_INFO, PROFILE_PHOTOS } from '../data/portfolioData';
import { ProfilePickerModal } from './ProfilePickerModal';

export const About: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<string>(
    '/src/assets/images/santhosh_mustard_shirt_1791556209320.jpg'
  );
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const coreDisciplines = [
    {
      title: 'Data Science & Analytics',
      desc: 'Formulating end-to-end data pipelines, exploratory analytics, statistical distribution modeling, and actionable business intelligence.',
      icon: Database
    },
    {
      title: 'Machine Learning & AI',
      desc: 'Developing predictive algorithms, gradient boosted regressors, classification networks, and integrating models via low-latency inference APIs.',
      icon: Brain
    },
    {
      title: 'Full Stack Engineering',
      desc: 'Architecting modular MERN platforms, responsive React interfaces, secure RESTful APIs, and database-driven cloud applications.',
      icon: Layers
    },
    {
      title: 'Data Visualization & BI',
      desc: 'Designing interactive executive dashboards in Tableau & Power BI to translate complex multi-variable models into strategic decisions.',
      icon: Cpu
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            01. Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Bridging Mathematical Data Modeling with Full-Stack Scalability
          </h2>
          <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
            I specialize in the synergy between machine learning pipelines and production-ready web platforms, engineering solutions that turn raw data into actionable decision engines.
          </p>
        </div>

        {/* Split Layout: Portrait & Personal Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Portrait & Quick Credentials */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="relative group rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-cyan-500/30 via-slate-800 to-transparent shadow-2xl shadow-black/60">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-900">
                <img
                  src={profilePhoto}
                  alt="Santhoshkumar R - Data Scientist and Full Stack Developer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Profile Picker Trigger Button */}
                <div className="absolute top-4 right-4 z-10">
                  <button
                    type="button"
                    onClick={() => setIsPickerOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 backdrop-blur-md text-white border border-white/20 hover:border-cyan-400 text-xs font-medium transition-all shadow-lg active:scale-95"
                    title="Open Profile Photo Picker"
                  >
                    <Camera className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Photo Picker</span>
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-white">Santhoshkumar R</div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">Verified Photo</span>
                  </div>
                  <div className="text-xs text-slate-300 font-mono">Data Scientist · Full Stack Developer</div>
                </div>
              </div>
            </div>

            {/* Quick Profile Photo Switcher Pills */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono uppercase text-[11px]">Profile Photo Selection</span>
                <button
                  type="button"
                  onClick={() => setIsPickerOpen(true)}
                  className="text-cyan-400 hover:text-cyan-300 text-[11px] font-medium"
                >
                  Browse All / Upload
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setProfilePhoto('/src/assets/images/santhosh_mustard_shirt_1791556209320.jpg')}
                  className={`px-3 py-2 text-xs rounded-lg font-medium transition-all text-left truncate flex items-center gap-2 ${
                    profilePhoto.includes('mustard')
                      ? 'bg-cyan-950/70 border border-cyan-400/60 text-cyan-300 shadow-sm'
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-transparent'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span className="truncate">Mustard Shirt (Original)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProfilePhoto('/src/assets/images/santhoshkumar_profile_1791554982882.jpg')}
                  className={`px-3 py-2 text-xs rounded-lg font-medium transition-all text-left truncate flex items-center gap-2 ${
                    profilePhoto.includes('santhoshkumar_profile')
                      ? 'bg-cyan-950/70 border border-cyan-400/60 text-cyan-300 shadow-sm'
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-transparent'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                  <span className="truncate">Executive Blazer</span>
                </button>
              </div>
            </div>

            {/* Academic Pedigree Card */}
            <div className="p-6 rounded-2xl glass-panel space-y-4">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Foundation</span>
              </div>

              <div className="space-y-4">
                {PERSONAL_INFO.education.map((edu, idx) => (
                  <div key={idx} className="border-l border-cyan-500/30 pl-3.5 space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="text-sm font-semibold text-white">{edu.degree}</div>
                      <div className="text-xs font-mono font-bold text-cyan-400 tabular-nums">
                        {edu.cgpa.startsWith('Enrolled') ? edu.cgpa : `CGPA ${edu.cgpa}`}
                      </div>
                    </div>
                    <div className="text-xs text-slate-300">{edu.institution} · {edu.year}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{edu.details}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative, Career Focus & Disciplines */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-2xl glass-panel space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Architecting Intelligent Solutions from Core Algorithms to Client Interface
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  With dedicated hands-on project execution across both Data Science and Full Stack Web Development, I address engineering challenges from a dual perspective: building mathematical intelligence that models real-world uncertainties, and wrapping that intelligence in resilient, intuitive web applications.
                </p>
                <p>
                  During my 6-month Data Science internship at <strong className="text-white font-semibold">Unified Mentor</strong>, I engaged deeply in exploratory data analysis (EDA), automated feature engineering, and training supervised & unsupervised machine learning algorithms (Random Forest, XGBoost, K-Means) across complex tabular datasets.
                </p>
                <p>
                  Concurrently, having engineered <strong className="text-white font-semibold">15+ practical web projects</strong> using React.js, Node.js, Express, MongoDB, and Python, I bring strong capabilities in REST API design, state management, asynchronous data flows, and secure role-based workflows.
                </p>
              </div>

              {/* Career Goal Callout */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-300">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <span>Career Objective & Vision</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  To build a transformative career in Data Science and Full Stack Engineering by applying Machine Learning, Predictive Analytics, and modern distributed web architectures to solve high-impact business problems. Focused on engineering scalable, data-driven platforms that elevate decision intelligence while continuously advancing research in Artificial Intelligence.
                </p>
              </div>
            </div>

            {/* 4 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreDisciplines.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl glass-panel glass-panel-hover flex flex-col justify-between space-y-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlighted Animated Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl glass-panel glass-panel-hover text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tabular-nums">1+</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Year Practical DS Experience</div>
            <div className="text-xs text-slate-400">Model engineering & analysis</div>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tabular-nums">6+</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Months Industry Internship</div>
            <div className="text-xs text-slate-400">Unified Mentor apprenticeship</div>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tabular-nums">10+</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Professional Certifications</div>
            <div className="text-xs text-slate-400">IBM, Entri, DeepLearning.AI</div>
          </div>

          <div className="p-6 rounded-2xl glass-panel glass-panel-hover text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono tabular-nums">15+</div>
            <div className="text-xs sm:text-sm font-semibold text-white">Major Project Implementations</div>
            <div className="text-xs text-slate-400">Full-Stack & ML systems</div>
          </div>
        </div>
      </div>

      {/* Interactive Profile Photo Picker Modal */}
      <ProfilePickerModal
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        currentPhotoUrl={profilePhoto}
        onSelectPhoto={(url) => {
          setProfilePhoto(url);
        }}
      />
    </section>
  );
};
