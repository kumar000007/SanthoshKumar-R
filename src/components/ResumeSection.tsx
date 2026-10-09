import React, { useState } from 'react';
import {
  FileDown,
  Printer,
  Check,
  Copy,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Globe,
  Github,
  Code2,
  Database,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadResumeFile, openResumePrintWindow } from '../utils/resumeGenerator';

interface ResumeSectionProps {
  onPrint?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = () => {
  const [activeResumeTab, setActiveResumeTab] = useState<'data-science' | 'full-stack'>('data-science');
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (type: 'data-science' | 'full-stack') => {
    downloadResumeFile(type);
    setDownloadSuccess(type === 'data-science' ? 'Data Scientist' : 'AI Full Stack');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handlePrint = (type: 'data-science' | 'full-stack') => {
    openResumePrintWindow(type);
  };

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-[#06080d]/60">
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/5 blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col space-y-2 mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
            08. Executive Dossiers &amp; Downloads
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
                Professional Resumes &amp; Dossiers
              </h2>
              <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed mt-2">
                Fully analyzed and uploaded dual resumes reflecting Santhoshkumar&apos;s specialized competencies. Download each ATS-compliant resume instantly or generate printable PDF copies.
              </p>
            </div>

            {/* Quick Direct Download Action Cluster */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => handleDownload('data-science')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-300 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-cyan-500/20 whitespace-nowrap"
              >
                <FileDown className="w-4 h-4" />
                <span>Download DS Resume</span>
              </button>

              <button
                type="button"
                onClick={() => handleDownload('full-stack')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Full Stack Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Download Success Banner */}
        {downloadSuccess && (
          <div className="mb-6 p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs text-cyan-300 animate-fadeIn">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span><strong>{downloadSuccess} Resume</strong> download started! Ready for offline viewing &amp; printing.</span>
            </span>
            <button
              type="button"
              onClick={() => setDownloadSuccess(null)}
              className="text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        )}

        {/* Dual Resume Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Data Scientist Resume */}
          <div
            className={`p-6 sm:p-8 rounded-2xl glass-panel transition-all duration-300 flex flex-col justify-between space-y-6 ${
              activeResumeTab === 'data-science'
                ? 'border-cyan-500/40 shadow-xl shadow-cyan-950/20 bg-slate-900/80'
                : 'border-white/[0.06] hover:border-slate-700'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-cyan-300 px-2.5 py-0.5 rounded bg-cyan-950/50 border border-cyan-500/30">
                  6-Mo Internship · 5+ ML Projects
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">Data Scientist Resume</h3>
                <p className="text-xs text-slate-300">
                  Specialized in Python, SQL, Machine Learning, Predictive Analytics, EDA, XGBoost, and Tableau.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-400 border-t border-white/[0.05] pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span><strong>Experience:</strong> Unified Mentor (6-Month Internship)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span><strong>Featured Projects:</strong> Mercedes-Benz Greener Mfg, Crime Data Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span><strong>Education:</strong> MCA (2025 – 2027, Pursuing) · BA English (CGPA 8.6)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleDownload('data-science')}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveResumeTab('data-science');
                  handlePrint('data-science');
                }}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setActiveResumeTab('data-science')}
                className={`px-3 py-2.5 text-xs font-medium rounded-lg transition-colors ${
                  activeResumeTab === 'data-science' ? 'text-cyan-400 bg-slate-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                Preview
              </button>
            </div>
          </div>

          {/* Card 2: AI Full Stack Developer Resume */}
          <div
            className={`p-6 sm:p-8 rounded-2xl glass-panel transition-all duration-300 flex flex-col justify-between space-y-6 ${
              activeResumeTab === 'full-stack'
                ? 'border-indigo-500/40 shadow-xl shadow-indigo-950/20 bg-slate-900/80'
                : 'border-white/[0.06] hover:border-slate-700'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-950/60 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-indigo-300 px-2.5 py-0.5 rounded bg-indigo-950/50 border border-indigo-500/30">
                  15+ Practical Web Projects
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">AI Full Stack Developer Resume</h3>
                <p className="text-xs text-slate-300">
                  Specialized in React.js, Node.js, Express.js, MongoDB, REST APIs, Python, Flask, and Cloud Deployment.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-400 border-t border-white/[0.05] pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span><strong>Projects:</strong> E-Commerce App, Social Media Platform, CMS, Food Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span><strong>Certifications:</strong> AI Full Stack Developer (Entri), IBM Data Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span><strong>GitHub:</strong> <a href="https://github.com/kumar000007" target="_blank" rel="noreferrer" className="text-cyan-400 underline">github.com/kumar000007</a></span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleDownload('full-stack')}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-900 bg-gradient-to-r from-sky-400 to-indigo-300 hover:brightness-110 rounded-lg transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveResumeTab('full-stack');
                  handlePrint('full-stack');
                }}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setActiveResumeTab('full-stack')}
                className={`px-3 py-2.5 text-xs font-medium rounded-lg transition-colors ${
                  activeResumeTab === 'full-stack' ? 'text-indigo-400 bg-slate-800' : 'text-slate-400 hover:text-white'
                }`}
              >
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Dual Mode Switcher Tabs for Resume Preview */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveResumeTab('data-science')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeResumeTab === 'data-science'
                  ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700/60'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Data Scientist Resume View
            </button>
            <button
              type="button"
              onClick={() => setActiveResumeTab('full-stack')}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                activeResumeTab === 'full-stack'
                  ? 'bg-slate-800 text-indigo-300 shadow-sm border border-slate-700/60'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Full Stack Developer Resume View
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <button
              type="button"
              onClick={() => handlePrint(activeResumeTab)}
              className="text-slate-300 hover:text-cyan-400 inline-flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print Preview</span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Email Copied' : 'Copy Email'}</span>
            </button>
          </div>
        </div>

        {/* Realistic Printable Resume Preview Card (Matches Attached PDFs Exactly) */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0b0e17] border border-white/10 shadow-2xl space-y-10 relative overflow-hidden text-left">
          {/* Top Header of Document */}
          <div className="border-b border-white/10 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  SANTHOSHKUMAR R
                </h3>
                <div className="text-sm sm:text-base font-semibold text-cyan-400 mt-1">
                  {activeResumeTab === 'data-science' ? 'Data Scientist' : 'AI Full Stack Developer'}
                </div>
              </div>

              {/* Contact meta strip with Verified GitHub Link */}
              <div className="text-xs font-mono text-slate-300 space-y-1 sm:text-right">
                <div>+91 9786529522 &nbsp;|&nbsp; <a href={`mailto:${PERSONAL_INFO.altEmail}`} className="text-cyan-300 hover:underline">{PERSONAL_INFO.altEmail}</a></div>
                <div><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400">{PERSONAL_INFO.linkedinHandle}</a></div>
                <div><a href="https://github.com/kumar000007" target="_blank" rel="noreferrer" className="text-cyan-400 font-bold hover:underline">github.com/kumar000007</a></div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">Professional Summary</span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
                {activeResumeTab === 'data-science'
                  ? 'Data Science professional with 1 year of practical project experience and 6 months of internship experience at Unified Mentor. Skilled in Python, SQL, Machine Learning, Data Analysis, Predictive Modeling, EDA, Statistical Analysis, Feature Engineering, and Data Visualization. Experienced with Pandas, NumPy, Scikit-learn, XGBoost, TensorFlow, Tableau, and Power BI, with a focus on developing ML models and generating actionable insights.'
                  : 'Full Stack Developer with internship experience and hands-on development across 15+ practical web projects using React.js, Node.js, Express.js, Python, Flask, SQL, and MongoDB. Proficient in frontend and backend development, REST API integration, CRUD operations, authentication, database management, API testing, Git, GitHub, and web application deployment. Experienced in transforming requirements into responsive, functional, and database-driven applications through practical full-stack development.'}
              </p>
            </div>
          </div>

          {/* Section: Achievements & Career Goals (Data Science Specific) */}
          {activeResumeTab === 'data-science' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm border-b border-white/10 pb-8">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Achievements</span>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-2 leading-relaxed">
                  <li>Completed a 6-month Data Science internship at Unified Mentor, gaining hands-on exposure to Python, SQL, Data Analysis, Machine Learning, EDA, Data Preprocessing, and Data Visualization. Applied feature engineering, predictive modeling, statistical analysis, and model evaluation across practical Data Science projects to transform structured datasets into actionable insights.</li>
                  <li>Built 5+ end-to-end Data Science projects using Pandas, NumPy, Scikit-learn, XGBoost, TensorFlow, and Tableau, strengthening practical skills in Machine Learning and Predictive Analytics.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Career Goals</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To build a career in Data Science by applying Machine Learning, Predictive Analytics, Statistical Analysis, and Data Visualization to solve complex business problems. Focused on developing scalable, data-driven solutions that improve decision-making while continuously advancing expertise in Artificial Intelligence, Machine Learning, and advanced analytics.
                </p>
              </div>
            </div>
          )}

          {/* Projects Section (Matches Both Resumes Verbatim) */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              {activeResumeTab === 'data-science' ? 'Data Science Projects' : 'Full Stack Projects'}
            </span>

            {activeResumeTab === 'data-science' ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="text-sm font-bold text-white">Mercedes-Benz Greener Manufacturing</span>
                    <span className="text-xs font-mono text-cyan-300">Python, Feature Engineering, Prediction, EDA, ML Model</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                    <li>Analyzed high-dimensional manufacturing data using Python and Pandas to identify factors affecting production testing time.</li>
                    <li>Performed data preprocessing, Exploratory Data Analysis (EDA), and feature engineering to prepare data for Machine Learning.</li>
                    <li>Interpreted model outputs to derive data-driven insights for potential manufacturing process optimization.</li>
                  </ul>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="text-sm font-bold text-white">Crime Data Analysis</span>
                    <span className="text-xs font-mono text-cyan-300">Data Cleaning, Visualization, Insights, Python</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                    <li>Cleaned and analyzed structured crime datasets to identify patterns, trends, and relationships.</li>
                    <li>Performed Exploratory Data Analysis and statistical analysis to understand crime distribution and key factors.</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="text-sm font-bold text-white">E-Commerce Web Application</span>
                    <span className="text-xs font-mono text-indigo-300">React.js, Node.js, Express, MongoDB</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                    <li>Developed responsive UI using reusable React.js components, cart, and checkout workflows.</li>
                    <li>Implemented RESTful APIs using Node.js &amp; Express.js with CRUD operations and authentication.</li>
                    <li>Integrated MongoDB for dynamic product and user data management.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="text-sm font-bold text-white">Social Media Platform</span>
                    <span className="text-xs font-mono text-indigo-300">React.js, Node.js, Express, MongoDB</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                    <li>Developed responsive React.js UI with interactive navigation, profiles, posts, and user interactions.</li>
                    <li>Implemented RESTful APIs using Node.js &amp; Express.js with authentication and CRUD.</li>
                    <li>Integrated MongoDB for database management and dynamic data.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="text-sm font-bold text-white">Content Management System</span>
                    <span className="text-xs font-mono text-indigo-300">React.js, Node.js, Express, MongoDB</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                    <li>Developed a full-stack CMS for creating, updating, managing, and organizing digital content.</li>
                    <li>Implemented RESTful APIs with authentication and CRUD for efficient application data management.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="text-sm font-bold text-white">Food Delivery Application</span>
                    <span className="text-xs font-mono text-indigo-300">React.js, Node.js, Express, MongoDB</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 leading-relaxed">
                    <li>Designed responsive UI components using React.js with intuitive navigation and user-focused interfaces.</li>
                    <li>Implemented RESTful APIs, CRUD operations, and authentication using Node.js and Express.js.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Education & Certifications Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            {/* Education Box */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-cyan-500/30 pl-4 space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-white">MCA in Master of Computer Application (Pursuing)</span>
                    <span className="text-xs font-mono text-cyan-400 font-bold">2025 – 2027</span>
                  </div>
                  <div className="text-xs text-slate-400">Sikkim Manipal University (Currently Enrolled)</div>
                </div>
                <div className="border-l-2 border-cyan-500/30 pl-4 space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-white">BA in Bachelor of Arts in English</span>
                    <span className="text-xs font-mono text-cyan-400 font-bold">CGPA 8.6</span>
                  </div>
                  <div className="text-xs text-slate-400">Thiruvalluvar University</div>
                </div>
              </div>
            </div>

            {/* Certifications Box */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certifications</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>IBM Data Science Professional Certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Internship For Data Science – Unified Mentor</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span>AI Full Stack Developer Certification – Entri</span>
                </div>
                <div className="pt-2 text-xs text-slate-400">
                  <strong>Languages:</strong> English &nbsp;|&nbsp; Tamil
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills Inventory */}
          <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
            <span className="font-mono uppercase text-slate-400 font-semibold">Technical Skills Inventory</span>
            {activeResumeTab === 'data-science' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-300 font-mono">
                <div className="space-y-1">
                  <span className="text-slate-500 block">Programming:</span>
                  <div>Python, SQL, R-Programming</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Libraries:</span>
                  <div>Pandas, NumPy, Scikit-learn, TensorFlow</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Machine Learning:</span>
                  <div>Regression, Classification, Random Forest, Decision Tree, Logistic Regression, XGBoost</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Visualization &amp; Tools:</span>
                  <div>Tableau, Power BI, SQL, Git, GitHub, VS Code</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-slate-300 font-mono">
                <div className="space-y-1">
                  <span className="text-slate-500 block">Frontend:</span>
                  <div>HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Backend &amp; DB:</span>
                  <div>Node.js, Express.js, Python, Flask, MySQL, MongoDB</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">APIs &amp; Testing:</span>
                  <div>REST APIs, Axios, JSON, Postman, API Testing, Debugging</div>
                </div>
                <div className="space-y-1">
                  <span className="text-slate-500 block">Deployment:</span>
                  <div>Netlify, Vercel, Render, GitHub Pages, Git, GitHub (<a href="https://github.com/kumar000007" target="_blank" rel="noreferrer" className="text-cyan-400 underline">kumar000007</a>)</div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Footer inside Resume preview */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-mono">
              Ready for immediate recruiter submission &amp; offline evaluation
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleDownload(activeResumeTab)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all"
              >
                <FileDown className="w-4 h-4" />
                <span>Download This Resume ({activeResumeTab === 'data-science' ? 'DS' : 'Full Stack'})</span>
              </button>

              <button
                type="button"
                onClick={() => handlePrint(activeResumeTab)}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print to PDF</span>
              </button>
            </div>
          </div>

          {/* Strong Final CTA Card */}
          <div className="p-8 rounded-xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                &ldquo;Let&apos;s build something intelligent and impactful.&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Available for Data Science, Machine Learning, and Full Stack engineering positions worldwide.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kumar000007"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all whitespace-nowrap"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>github.com/kumar000007</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold text-slate-900 bg-cyan-400 rounded-lg hover:bg-cyan-300 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
