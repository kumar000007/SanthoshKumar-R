/**
 * Generates and triggers clean, ATS-compliant, recruiter-ready formatted resume downloads
 * based on Santhoshkumar R's two professional resumes.
 */

export const generateResumeHtml = (type: 'data-science' | 'full-stack'): string => {
  const isDS = type === 'data-science';

  const title = isDS ? 'Data Scientist' : 'AI Full Stack Developer';
  const filename = isDS
    ? 'Santhoshkumar_R_Data_Scientist_Resume'
    : 'Santhoshkumar_R_AI_Full_Stack_Developer_Resume';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${filename}</title>
  <style>
    @page {
      size: A4;
      margin: 15mm 18mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      line-height: 1.45;
      font-size: 10.5pt;
      margin: 0;
      padding: 24px;
    }
    .header {
      text-align: center;
      margin-bottom: 16px;
      border-bottom: 2px solid #1f2937;
      padding-bottom: 12px;
    }
    .name {
      font-size: 22pt;
      font-weight: 800;
      letter-spacing: 0.5px;
      margin: 0;
      color: #111827;
    }
    .role-title {
      font-size: 13pt;
      font-weight: 600;
      color: #374151;
      margin: 4px 0 6px 0;
    }
    .contacts {
      font-size: 9.5pt;
      color: #4b5563;
    }
    .contacts a {
      color: #1d4ed8;
      text-decoration: none;
    }
    .section-title {
      font-size: 11pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #111827;
      border-bottom: 1px solid #d1d5db;
      padding-bottom: 3px;
      margin-top: 14px;
      margin-bottom: 8px;
    }
    .summary-text {
      font-size: 9.5pt;
      color: #374151;
      text-align: justify;
      margin-bottom: 8px;
    }
    .job-header, .edu-header, .proj-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-weight: 700;
      font-size: 10pt;
      color: #111827;
      margin-top: 6px;
      margin-bottom: 2px;
    }
    .job-sub, .edu-sub, .proj-sub {
      font-size: 9pt;
      font-style: italic;
      color: #4b5563;
      margin-bottom: 4px;
    }
    ul {
      margin: 2px 0 8px 18px;
      padding: 0;
    }
    li {
      font-size: 9.2pt;
      color: #374151;
      margin-bottom: 3px;
      line-height: 1.4;
    }
    .skills-grid {
      display: table;
      width: 100%;
      font-size: 9pt;
      border-collapse: collapse;
      margin-top: 4px;
    }
    .skills-row {
      display: table-row;
    }
    .skills-label {
      display: table-cell;
      font-weight: 700;
      width: 140px;
      padding: 2.5px 0;
      color: #1f2937;
    }
    .skills-val {
      display: table-cell;
      padding: 2.5px 0;
      color: #374151;
    }
    .cert-item {
      font-size: 9.2pt;
      margin-bottom: 3px;
      color: #374151;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none !important; }
    }
    .no-print-bar {
      background: #1e293b;
      color: #ffffff;
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      border-radius: 6px;
    }
    .no-print-btn {
      background: #0284c7;
      color: white;
      border: none;
      padding: 6px 14px;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 600;
      font-size: 9.5pt;
    }
  </style>
</head>
<body>
  <div class="no-print no-print-bar">
    <span>Recruiter Print & PDF View — <strong>${title} Resume</strong></span>
    <div>
      <button class="no-print-btn" onclick="window.print()">Print / Save as PDF</button>
    </div>
  </div>

  <div class="header">
    <h1 class="name">SANTHOSHKUMAR R</h1>
    <div class="role-title">${title}</div>
    <div class="contacts">
      +91 9786529522 &nbsp;|&nbsp; 
      <a href="mailto:kumarsanthosh22150@email.com">kumarsanthosh22150@email.com</a> &nbsp;|&nbsp; 
      <a href="https://linkedin.com/in/santhoshkumarweb2002" target="_blank">linkedin.com/in/santhoshkumarweb2002</a> &nbsp;|&nbsp; 
      <a href="https://github.com/kumar000007" target="_blank">github.com/kumar000007</a>
    </div>
  </div>

  <div class="section-title">Professional Summary</div>
  <div class="summary-text">
    ${
      isDS
        ? `Data Science professional with 1 year of practical project experience and 6 months of internship experience at Unified Mentor. Skilled in Python, SQL, Machine Learning, Data Analysis, Predictive Modeling, EDA, Statistical Analysis, Feature Engineering, and Data Visualization. Experienced with Pandas, NumPy, Scikit-learn, XGBoost, TensorFlow, Tableau, and Power BI, with a focus on developing ML models and generating actionable insights.`
        : `Full Stack Developer with internship experience and hands-on development across 15+ practical web projects using React.js, Node.js, Express.js, Python, Flask, SQL, and MongoDB. Proficient in frontend and backend development, REST API integration, CRUD operations, authentication, database management, API testing, Git, GitHub, and web application deployment. Experienced in transforming requirements into responsive, functional, and database-driven applications through practical full-stack development.`
    }
  </div>

  ${
    isDS
      ? `
  <div class="section-title">Achievements</div>
  <ul>
    <li>Completed a 6-month Data Science internship at Unified Mentor, gaining hands-on exposure to Python, SQL, Data Analysis, Machine Learning, EDA, Data Preprocessing, and Data Visualization. Applied feature engineering, predictive modeling, statistical analysis, and model evaluation across practical Data Science projects to transform structured datasets into actionable insights.</li>
    <li>Built 5+ end-to-end Data Science projects using Pandas, NumPy, Scikit-learn, XGBoost, TensorFlow, and Tableau, strengthening practical skills in Machine Learning and Predictive Analytics.</li>
  </ul>

  <div class="section-title">Career Goals</div>
  <div class="summary-text">
    To build a career in Data Science by applying Machine Learning, Predictive Analytics, Statistical Analysis, and Data Visualization to solve complex business problems. Focused on developing scalable, data-driven solutions that improve decision-making while continuously advancing expertise in Artificial Intelligence, Machine Learning, and advanced analytics.
  </div>
  `
      : ''
  }

  <div class="section-title">${isDS ? 'Key Projects' : 'Projects'}</div>
  ${
    isDS
      ? `
  <div>
    <div class="job-header">
      <span>Mercedes-Benz Greener Manufacturing</span>
      <span style="font-weight: 500; font-size: 8.5pt; color: #4b5563;">Python, Feature Engineering, Prediction, EDA, ML Model</span>
    </div>
    <ul>
      <li>Analyzed high-dimensional manufacturing data using Python and Pandas to identify factors affecting production testing time.</li>
      <li>Performed data preprocessing, Exploratory Data Analysis (EDA), and feature engineering to prepare data for Machine Learning.</li>
      <li>Interpreted model outputs to derive data-driven insights for potential manufacturing process optimization.</li>
    </ul>

    <div class="job-header">
      <span>Crime Data Analysis</span>
      <span style="font-weight: 500; font-size: 8.5pt; color: #4b5563;">Data Cleaning, Visualization, Insights, Python</span>
    </div>
    <ul>
      <li>Cleaned and analyzed structured crime datasets to identify patterns, trends, and relationships.</li>
      <li>Performed Exploratory Data Analysis and statistical analysis to understand crime distribution and key factors.</li>
    </ul>

    <div class="job-header">
      <span>Customer Churn &amp; Valuation Predictive Systems</span>
      <span style="font-weight: 500; font-size: 8.5pt; color: #4b5563;">Scikit-learn, Random Forest, XGBoost, Regression</span>
    </div>
    <ul>
      <li>Developed end-to-end churn classification models delivering 94.2% ROC-AUC score.</li>
      <li>Implemented multi-variable regression architectures for continuous valuation forecasts with cross-validation.</li>
    </ul>
  </div>
  `
      : `
  <div>
    <div class="job-header">
      <span>E-Commerce Web Application</span>
      <span style="font-weight: 500; font-size: 8.5pt; color: #4b5563;">React.js, Node.js, Express.js, MongoDB, REST API</span>
    </div>
    <ul>
      <li>Developed a responsive UI using reusable React.js components, intuitive navigation, and interactive interfaces for product browsing, authentication, cart, and checkout workflows.</li>
      <li>Implemented RESTful APIs using Node.js and Express.js with CRUD operations and authentication, enabling efficient data management and secure application workflows.</li>
      <li>Integrated MongoDB for dynamic product and user data management while maintaining responsive design and usability.</li>
    </ul>

    <div class="job-header">
      <span>Social Media Platform</span>
      <span style="font-weight: 500; font-size: 8.5pt; color: #4b5563;">React.js, Node.js, Express.js, MongoDB</span>
    </div>
    <ul>
      <li>Developed responsive React.js UI with interactive components, user-friendly navigation, profiles, posts, and user interactions.</li>
      <li>Implemented RESTful APIs using Node.js and Express.js with authentication and CRUD operations for efficient data management.</li>
      <li>Integrated MongoDB for database management and dynamic user, post, and application data.</li>
    </ul>

    <div class="job-header">
      <span>Content Management System</span>
      <span style="font-weight: 500; font-size: 8.5pt; color: #4b5563;">React.js, Node.js, Express.js, MongoDB</span>
    </div>
    <ul>
      <li>Developed a full-stack CMS for creating, updating, managing, and organizing digital content.</li>
      <li>Implemented RESTful APIs using Node.js and Express.js with authentication and CRUD operations for efficient application data management.</li>
      <li>Integrated MongoDB for database management and dynamic user, post, and application data.</li>
    </ul>

    <div class="job-header">
      <span>Food Delivery Application</span>
      <span style="font-weight: 500; font-size: 8.5pt; color: #4b5563;">React.js, Node.js, Express.js, MongoDB</span>
    </div>
    <ul>
      <li>Designed responsive UI components using React.js with intuitive navigation and user-focused interfaces for content administration.</li>
      <li>Implemented RESTful APIs, CRUD operations, and authentication using Node.js and Express.js for application functionality.</li>
      <li>Integrated MongoDB for dynamic data management and database operations while maintaining responsive design and user experience.</li>
    </ul>
  </div>
  `
  }

  <div class="section-title">Education</div>
  <div class="edu-header">
    <span>MCA in Master of Computer Application (Pursuing)</span>
    <span>2025 – 2027 (Currently Enrolled)</span>
  </div>
  <div class="edu-sub">Sikkim Manipal University</div>

  <div class="edu-header">
    <span>BA in Bachelor of Arts in English</span>
    <span>CGPA 8.6 (2019 – 2022)</span>
  </div>
  <div class="edu-sub">Thiruvalluvar University</div>

  <div class="section-title">Technical Skills</div>
  <div class="skills-grid">
    ${
      isDS
        ? `
    <div class="skills-row">
      <div class="skills-label">Programming:</div>
      <div class="skills-val">Python, SQL, R-Programming</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Data Science:</div>
      <div class="skills-val">Data Analysis, Machine Learning, Predictive Modeling, Exploratory Data Analysis (EDA), Statistical Analysis</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Libraries:</div>
      <div class="skills-val">Pandas, NumPy, Scikit-learn, TensorFlow</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Machine Learning:</div>
      <div class="skills-val">Regression, Classification, Random Forest, Decision Tree, Logistic Regression, XGBoost</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Databases:</div>
      <div class="skills-val">SQL, MySQL, MongoDB</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Visualization:</div>
      <div class="skills-val">Tableau, Power BI, Data Visualization</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Tools:</div>
      <div class="skills-val">Git, GitHub, VS Code</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Model Evaluation:</div>
      <div class="skills-val">Cross-Validation, Feature Selection, Supervised Learning, Unsupervised Learning</div>
    </div>
    `
        : `
    <div class="skills-row">
      <div class="skills-label">Frontend:</div>
      <div class="skills-val">HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Backend:</div>
      <div class="skills-val">Node.js, Express.js, Python, Flask</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Databases:</div>
      <div class="skills-val">MySQL, MongoDB</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">APIs:</div>
      <div class="skills-val">REST APIs, Axios, JSON</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Testing:</div>
      <div class="skills-val">Postman, API Testing, Debugging</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Deployment:</div>
      <div class="skills-val">Netlify, Web Application Deployment, Vercel, Render, GitHub Pages</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Programming:</div>
      <div class="skills-val">JavaScript, Python, SQL</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Tools:</div>
      <div class="skills-val">Git, GitHub (github.com/kumar000007), VS Code, Postman</div>
    </div>
    <div class="skills-row">
      <div class="skills-label">Other:</div>
      <div class="skills-val">Responsive Design, Authentication, CRUD Operations, API Integration</div>
    </div>
    `
    }
  </div>

  <div class="section-title">Certifications</div>
  ${
    isDS
      ? `
  <div class="cert-item">• IBM Data Science Professional Certification</div>
  <div class="cert-item">• Internship For Data Science – Unified Mentor</div>
  `
      : `
  <div class="cert-item">• AI Full Stack Developer Certification – Entri</div>
  <div class="cert-item">• IBM Data Science Professional Certification</div>
  <div class="cert-item">• Internship For Data Science – Unified Mentor</div>
  `
  }

  <div class="section-title">Languages</div>
  <div style="font-size: 9.5pt; color: #374151;">English &nbsp;|&nbsp; Tamil</div>

</body>
</html>`;
};

/**
 * Triggers instant browser download of the formatted resume
 */
export const downloadResumeFile = (type: 'data-science' | 'full-stack') => {
  const htmlContent = generateResumeHtml(type);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  const filename =
    type === 'data-science'
      ? 'Santhoshkumar_R_Data_Scientist_Resume.html'
      : 'Santhoshkumar_R_AI_Full_Stack_Developer_Resume.html';

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Opens a print-to-PDF window
 */
export const openResumePrintWindow = (type: 'data-science' | 'full-stack') => {
  const htmlContent = generateResumeHtml(type);
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  }
};
