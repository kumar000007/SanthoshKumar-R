import { Project, SkillCategory, Certification, Achievement, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: 'SANTHOSHKUMAR R',
  shortName: 'Santhoshkumar',
  role: 'Data Scientist | Full Stack Developer',
  avatar: '/src/assets/images/santhosh_mustard_shirt_1791556209320.jpg',
  headline: 'Transforming Data into Intelligence. Building Ideas into Digital Experiences.',
  summary:
    'Innovative engineer at the nexus of Data Science, Machine Learning, and Full Stack Architecture. Specializing in transforming multidimensional enterprise data into predictive mathematical intelligence and engineering robust, scalable web platforms with seamless user experiences.',
  email: 'kumarsanthosh22150@gmail.com',
  altEmail: 'kumarsanthosh22150@email.com',
  phone: '+91 9786529522',
  linkedin: 'https://linkedin.com/in/santhoshkumarweb2002',
  linkedinHandle: 'linkedin.com/in/santhoshkumarweb2002',
  github: 'https://github.com/kumar000007',
  githubHandle: 'github.com/kumar000007',
  location: 'Tamil Nadu, India',
  education: [
    {
      degree: 'MCA — Master of Computer Application (Pursuing)',
      institution: 'Sikkim Manipal University',
      cgpa: 'Enrolled (2025–27)',
      year: '2025 – 2027 (Currently Enrolled)',
      details: 'Advanced algorithms, AI engineering, database architectures, and distributed systems. Academic period 2025 – 2027.'
    },
    {
      degree: 'BA — Bachelor of Arts in English',
      institution: 'Thiruvalluvar University',
      cgpa: '8.6',
      year: '2019 – 2022',
      details: 'High proficiency in technical communications, linguistic analysis, and analytical writing.'
    }
  ],
  stats: [
    { label: 'Data Science Experience', value: '1+', suffix: 'Year' },
    { label: 'Internship Experience', value: '6+', suffix: 'Months' },
    { label: 'Professional Certifications', value: '10+', suffix: 'Credentials' },
    { label: 'Production Projects', value: '15+', suffix: 'Deployed' }
  ]
};

export const DATA_SCIENCE_PROJECTS: Project[] = [
  {
    id: 'mercedes-benz',
    title: 'Mercedes-Benz Greener Manufacturing',
    category: 'data-science',
    shortDescription: 'High-dimensional feature engineering & ML regression to optimize automotive test bench durations.',
    problemStatement:
      'Mercedes-Benz test benches run thousands of combinations of vehicular features, causing testing cycle variances that elevate plant operational carbon footprints and latency.',
    keyApproach:
      'Analyzed 4,209 high-dimensional anonymized vehicle feature sets. Implemented PCA and variance-threshold dimensionality reduction, followed by tuned XGBoost regressor with custom loss metric.',
    resultImpact:
      'Reduced test duration variance prediction error (RMSE) by 18.4% and isolated the top 12 configuration features driving testing bottlenecks.',
    technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'PCA', 'Seaborn', 'NumPy'],
    image: '/src/assets/images/mercedes_manufacturing_1791554993069.jpg',
    githubUrl: 'https://github.com/kumar000007/mercedes-benz-greener-manufacturing',
    demoUrl: 'https://github.com/kumar000007/mercedes-benz-greener-manufacturing',
    metrics: [
      { label: 'Variance Explained', value: '91.8%' },
      { label: 'Testing Overhead Cut', value: '-18.4%' },
      { label: 'Features Evaluated', value: '376' }
    ]
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction System',
    category: 'data-science',
    shortDescription: 'Predictive customer retention model leveraging ensemble classification and behavioral telemetry.',
    problemStatement:
      'Subscription and telecommunication businesses suffer revenue leakage due to late detection of at-risk accounts showing declining engagement.',
    keyApproach:
      'Built a data preparation pipeline addressing class imbalance via SMOTE. Evaluated Random Forest, Logistic Regression, and XGBoost with ROC-AUC scoring, exposing the model via REST API inference endpoints.',
    resultImpact:
      'Achieved 94.2% ROC-AUC score, enabling automated early-warning intervention triggers 30 days prior to contract renewals.',
    technologies: ['Python', 'Scikit-learn', 'Random Forest', 'SMOTE', 'Flask', 'Pandas', 'Matplotlib'],
    image: '/src/assets/images/neural_churn_analytics_1791555004814.jpg',
    githubUrl: 'https://github.com/kumar000007/customer-churn-prediction',
    demoUrl: 'https://github.com/kumar000007/customer-churn-prediction',
    metrics: [
      { label: 'ROC-AUC Score', value: '94.2%' },
      { label: 'Precision Recall', value: '89.6%' },
      { label: 'Early Detection Window', value: '30 Days' }
    ]
  },
  {
    id: 'crime-data-analysis',
    title: 'Crime Data Analysis & Pattern Mining',
    category: 'data-science',
    shortDescription: 'Geospatial and temporal crime pattern mining with automated exploratory analytics and risk mapping.',
    problemStatement:
      'Law enforcement agencies struggle to identify spatial clusters and recurring temporal crime rhythms from fragmented demographic incident logs.',
    keyApproach:
      'Ingested, scrubbed, and geocoded structured crime incident logs. Performed exploratory spatial analysis, seasonal decomposition, and k-means clustering to map geographical vulnerability zones.',
    resultImpact:
      'Identified prime crime distribution density clusters and daytime vulnerability curves, generating interactive visual risk intelligence for tactical allocation.',
    technologies: ['Python', 'Pandas', 'EDA', 'K-Means', 'Seaborn', 'Statistical Analysis', 'Folium'],
    image: '/src/assets/images/crime_data_analytics_1791559099419.jpg',
    githubUrl: 'https://github.com/kumar000007/crime-data-analysis',
    demoUrl: 'https://github.com/kumar000007/crime-data-analysis',
    metrics: [
      { label: 'Incident Records', value: '100K+' },
      { label: 'Clustered Hotspots', value: '14 Zones' },
      { label: 'Data Cleaning Efficiency', value: '99.9%' }
    ]
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction Engine',
    category: 'data-science',
    shortDescription: 'Multi-variable real estate valuation engine using regularized regression and ensemble gradient boosting.',
    problemStatement:
      'Real estate valuation suffers from pricing opacity, volatile neighborhood indicators, and skewed square footage metrics.',
    keyApproach:
      'Applied log transformations for skewed variables, comprehensive one-hot encoding for neighborhood factors, and stacked Ridge, Lasso, and LightGBM models with 5-fold cross-validation.',
    resultImpact:
      'Delivered market prediction accuracy within 4.8% of actual sale prices on out-of-fold validation benchmarks.',
    technologies: ['Python', 'Scikit-learn', 'LightGBM', 'NumPy', 'Feature Engineering', 'Cross-Validation'],
    image: '/src/assets/images/house_price_valuation_1791559110952.jpg',
    githubUrl: 'https://github.com/kumar000007/house-price-prediction',
    demoUrl: 'https://github.com/kumar000007/house-price-prediction',
    metrics: [
      { label: 'Mean Absolute Error', value: '4.8%' },
      { label: 'R-Squared Value', value: '0.924' },
      { label: 'Input Attributes', value: '79' }
    ]
  },
  {
    id: 'sales-business-analytics',
    title: 'Sales & Business Analytics Pipeline',
    category: 'data-science',
    shortDescription: 'Enterprise BI warehouse and forecasting dashboard with multi-source SQL aggregation and trend models.',
    problemStatement:
      'Enterprise executives lacked a unified single pane of glass for real-time sales trends, margin attribution, and inventory turnover forecasting.',
    keyApproach:
      'Constructed normalized SQL schemas with automated ETL data pipelines in Python, building dynamic executive dashboards in Tableau & Power BI with predictive sales ARIMA trend projections.',
    resultImpact:
      'Eliminated 8 hours/week of manual spreadsheet reporting and gave stakeholders 90-day forward demand visibility.',
    technologies: ['SQL', 'Tableau', 'Power BI', 'Python', 'ETL', 'Time-Series Analysis', 'MySQL'],
    image: '/src/assets/images/sales_bi_tableau_1791559121903.jpg',
    githubUrl: 'https://github.com/kumar000007/sales-business-analytics',
    demoUrl: 'https://github.com/kumar000007/sales-business-analytics',
    metrics: [
      { label: 'Reporting Automation', value: '100%' },
      { label: 'Forecast Horizon', value: '90 Days' },
      { label: 'Weekly Hours Saved', value: '8+ hrs' }
    ]
  }
];

export const FULL_STACK_PROJECTS: Project[] = [
  {
    id: 'e-commerce-web-application',
    title: 'E-Commerce Web Application',
    category: 'full-stack',
    shortDescription: 'Full-stack online store with reusable React UI, intuitive navigation, cart, checkout workflows, and secure MongoDB data.',
    problemStatement:
      'Digital commerce platforms require resilient cart and checkout state machines, responsive product catalogs, and secure authentication.',
    keyApproach:
      'Developed a responsive UI using reusable React.js components, intuitive navigation, and interactive interfaces for product browsing, authentication, cart, and checkout. Implemented RESTful APIs using Node.js and Express.js with CRUD operations and authentication.',
    resultImpact:
      'Engineered an end-to-end shopping experience with dynamic MongoDB product catalogs, sub-80ms API response latency, and secure auth workflows.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Tailwind CSS', 'JWT'],
    image: '/src/assets/images/ecommerce_store_app_1791559133407.jpg',
    architecture: 'Modular MERN architecture with stateless JWT authentication and indexed MongoDB collections for fast product lookups.',
    frontendTech: ['React.js', 'Tailwind CSS', 'Axios', 'Lucide Icons'],
    backendTech: ['Node.js', 'Express.js', 'Bcrypt.js', 'JWT Auth'],
    database: ['MongoDB', 'Mongoose ODM'],
    githubUrl: 'https://github.com/kumar000007/e-commerce-web-application',
    demoUrl: 'https://github.com/kumar000007/e-commerce-web-application',
    metrics: [
      { label: 'API Response Time', value: '<80ms' },
      { label: 'Authentication', value: 'JWT + Bcrypt' },
      { label: 'Checkout Stages', value: '3 Guided' }
    ]
  },
  {
    id: 'social-media-platform',
    title: 'Social Media & Community Platform',
    category: 'full-stack',
    shortDescription: 'High-performance interactive community platform featuring user feeds, media interactions, and dynamic profiles.',
    problemStatement:
      'Community platforms require lightning-fast content feed hydration, secure session state, and responsive social engagement mechanisms.',
    keyApproach:
      'Engineered interactive React components with optimistic UI updates. Developed backend CRUD REST endpoints on Node/Express with MongoDB aggregation pipelines for user feeds and interaction counts.',
    resultImpact:
      'Seamless multi-user profile management, post creation with tag queries, and zero-flicker feed rendering across mobile and desktop.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Multer', 'Postman'],
    image: '/src/assets/images/social_community_platform_1791559211637.jpg',
    architecture: 'Client-side SPA connected to Express REST backend with cached aggregation queries and secure token-based sessions.',
    frontendTech: ['React.js', 'Context API', 'Tailwind CSS', 'Axios'],
    backendTech: ['Node.js', 'Express.js', 'JWT', 'Multer'],
    database: ['MongoDB', 'Aggregation Pipelines'],
    githubUrl: 'https://github.com/kumar000007/social-media-platform',
    demoUrl: 'https://github.com/kumar000007/social-media-platform',
    metrics: [
      { label: 'CRUD Performance', value: 'Optimal' },
      { label: 'Responsive Viewports', value: '100%' },
      { label: 'Authentication', value: 'Bcrypt + JWT' }
    ]
  },
  {
    id: 'content-management-system',
    title: 'Full-Stack Content Management System',
    category: 'full-stack',
    shortDescription: 'Dynamic digital publishing CMS with markdown rendering, asset workflows, and granular revision history.',
    problemStatement:
      'Content publishers need an intuitive editorial workstation that simplifies article drafting, categorizing, and publishing while maintaining strict role separation.',
    keyApproach:
      'Constructed responsive authoring dashboards with live markdown preview, secure image upload endpoints, and administrative review queues backed by MongoDB schemas.',
    resultImpact:
      'Provides content creators with instant preview capabilities and enterprise editors with streamlined approval queues.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Postman', 'Tailwind CSS'],
    image: '/src/assets/images/content_management_cms_1791559188130.jpg',
    architecture: 'Decoupled headless CMS architecture with RESTful endpoints enabling cross-platform content syndication.',
    frontendTech: ['React.js', 'Markdown Parser', 'Tailwind CSS'],
    backendTech: ['Express.js', 'Node.js', 'Helmet', 'CORS Middleware'],
    database: ['MongoDB Atlas'],
    githubUrl: 'https://github.com/kumar000007/content-management-system',
    demoUrl: 'https://github.com/kumar000007/content-management-system',
    metrics: [
      { label: 'Asset Load Time', value: '<120ms' },
      { label: 'Editor States', value: 'Draft/Published' },
      { label: 'Data Integrity', value: '100%' }
    ]
  },
  {
    id: 'food-delivery-app',
    title: 'Food Delivery Web Application',
    category: 'full-stack',
    shortDescription: 'End-to-end culinary commerce application with menu catalogs, real-time cart state, and order tracking.',
    problemStatement:
      'Modern food delivery requires flawless cart state persistence, dynamic dish filtering, and synchronized order state management.',
    keyApproach:
      'Built a reactive frontend with persistent localStorage cart syncing, restaurant menu catalog browsing, checkout mock workflows, and administrative restaurant order management panels.',
    resultImpact:
      'Delivered a frictionless checkout experience with instant visual cart adjustments and real-time total calculations.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Responsive Design'],
    image: '/src/assets/images/food_delivery_platform_1791559199479.jpg',
    architecture: 'Full-stack e-commerce flow with RESTful order state machine and synchronized client cart state.',
    frontendTech: ['React.js', 'Tailwind CSS', 'Local State Sync'],
    backendTech: ['Node.js', 'Express.js', 'Validation Middleware'],
    database: ['MongoDB Mongoose'],
    githubUrl: 'https://github.com/kumar000007/food-delivery-app',
    demoUrl: 'https://github.com/kumar000007/food-delivery-app',
    metrics: [
      { label: 'Cart Latency', value: '0ms' },
      { label: 'Checkout Steps', value: '3 Guided' },
      { label: 'Mobile Score', value: '98/100' }
    ]
  },
  {
    id: 'ai-fullstack-prediction',
    title: 'AI-Powered Full Stack Prediction System',
    category: 'full-stack',
    shortDescription: 'Hybrid AI application marrying a React UI with Python ML inference microservices and MongoDB history.',
    problemStatement:
      'Users need direct, interactive access to complex machine learning prediction models without needing Python coding knowledge.',
    keyApproach:
      'Engineered a sleek React web client that communicates with a Node.js gateway and Python Flask inference server hosting trained Scikit-learn models, logging user predictions to MongoDB.',
    resultImpact:
      'Enables non-technical users to input real-time feature variables and receive instant probabilistic predictions with interactive visualization charts.',
    technologies: ['React.js', 'Python Flask', 'Node.js', 'Scikit-learn', 'MongoDB', 'REST API', 'Tailwind CSS'],
    image: '/src/assets/images/ai_agentic_system_1791555053724.jpg',
    architecture: 'Dual-backend hybrid topology: Node.js gateway handles user auth & session management while Flask delivers low-latency ML model inferences.',
    frontendTech: ['React.js', 'Lucide Icons', 'Chart.js / SVG Canvas'],
    backendTech: ['Node.js', 'Python Flask', 'Flask-CORS'],
    database: ['MongoDB', 'Model Weights Cache'],
    githubUrl: 'https://github.com/kumar000007/ai-prediction-system',
    demoUrl: 'https://github.com/kumar000007/ai-prediction-system',
    metrics: [
      { label: 'Inference Latency', value: '45ms' },
      { label: 'Model Accuracy', value: '95.1%' },
      { label: 'System Uptime', value: '99.9%' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    subtitle: 'Mathematical modeling, predictive pipelines, and statistical computing',
    skills: [
      { name: 'Python', level: 'Advanced', description: 'Core programming, algorithmic modeling, automation, and data processing.' },
      { name: 'Machine Learning', level: 'Advanced', description: 'Supervised & unsupervised learning, classification, regression, and clustering.' },
      { name: 'Scikit-learn', level: 'Advanced', description: 'Model training, hyperparameter tuning, pipelines, and cross-validation.' },
      { name: 'XGBoost', level: 'Advanced', description: 'Extreme gradient boosting for high-dimensional tabular datasets.' },
      { name: 'Pandas & NumPy', level: 'Advanced', description: 'Vectorized computing, structured data manipulation, and matrix operations.' },
      { name: 'TensorFlow', level: 'Intermediate', description: 'Neural network architectures, deep learning fundamentals, and tensor graphs.' },
      { name: 'Predictive Modeling', level: 'Advanced', description: 'Forecasting business KPIs, customer behavior, and risk variables.' },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Advanced', description: 'Statistical distribution discovery, anomaly detection, and correlation analysis.' },
      { name: 'Feature Engineering', level: 'Advanced', description: 'Dimensionality reduction (PCA), variance thresholds, encoding, and scaling.' },
      { name: 'Statistical Analysis', level: 'Advanced', description: 'Hypothesis testing, probability distributions, confidence intervals, and variance.' }
    ]
  },
  {
    id: 'full-stack',
    title: 'Full Stack Web Engineering',
    subtitle: 'Modern MERN architecture, responsive interfaces, and scalable REST APIs',
    skills: [
      { name: 'React.js', level: 'Advanced', description: 'Component architecture, custom hooks, state machines, and modern ESNext.' },
      { name: 'Node.js', level: 'Advanced', description: 'Asynchronous event-driven server runtimes, middleware, and backend utilities.' },
      { name: 'Express.js', level: 'Advanced', description: 'RESTful API routing, controller patterns, error-handling middleware, and CORS.' },
      { name: 'MongoDB & Mongoose', level: 'Advanced', description: 'Document schemas, aggregation pipelines, indexing, and connection pools.' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Functional programming, async/await, closures, promises, and modern syntax.' },
      { name: 'REST APIs & Axios', level: 'Advanced', description: 'Standardized contract design, CRUD operations, interceptors, and payloads.' },
      { name: 'JWT & Authentication', level: 'Advanced', description: 'Stateless JSON Web Tokens, bcrypt password hashing, and route protection.' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first luxury responsive layouts, glassmorphism, and micro-animations.' },
      { name: 'HTML5 & CSS3', level: 'Advanced', description: 'Semantic document structure, accessibility (WCAG AA), flexbox, and CSS grid.' },
      { name: 'Git & GitHub', level: 'Advanced', description: 'Branch management, continuous integration, version tracking, and code reviews.' }
    ]
  },
  {
    id: 'data-viz',
    title: 'Data & Visualization',
    subtitle: 'Executive intelligence dashboards, relational querying, and business analytics',
    skills: [
      { name: 'Power BI', level: 'Advanced', description: 'DAX expressions, star schema modeling, and interactive KPI scorecards.' },
      { name: 'Tableau', level: 'Advanced', description: 'Dynamic visual stories, calculated fields, parameters, and drill-down views.' },
      { name: 'SQL & MySQL', level: 'Advanced', description: 'Complex joins, window functions, CTEs, subqueries, and schema normalization.' },
      { name: 'Data Visualization', level: 'Advanced', description: 'Visual hierarchy, chart grammar, cognitive ergonomics, and narrative delivery.' },
      { name: 'Dashboard Development', level: 'Advanced', description: 'Low-latency executive portals, drill-through cards, and automated refreshing.' },
      { name: 'Data Analysis', level: 'Advanced', description: 'Actionable business insight derivation, root-cause diagnostics, and metrics.' }
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Data Science Intern',
    company: 'Unified Mentor',
    duration: '6 Months',
    period: 'Internship Engagement',
    location: 'Remote / Virtual Tech Office',
    description:
      'Completed an intensive 6-month Data Science internship, gaining deep hands-on exposure to end-to-end data pipelines, statistical modeling, machine learning algorithms, and predictive analytics across real-world business datasets.',
    responsibilities: [
      'Engineered structured data cleaning and preprocessing pipelines in Python, scrubbing null values, outliers, and discrepancies across thousands of high-dimensional rows.',
      'Conducted exhaustive Exploratory Data Analysis (EDA) and statistical tests to uncover behavioral trends, categorical dependencies, and predictive correlations.',
      'Formulated feature engineering pipelines including one-hot encoding, scaling, and variance reduction to prepare raw features for ML algorithms.',
      'Built, tuned, and evaluated supervised and unsupervised Machine Learning models (Random Forest, Decision Tree, Logistic Regression, XGBoost, K-Means) with rigorous cross-validation.',
      'Generated actionable visual intelligence through comprehensive analytical reports in Tableau and Power BI, translating complex model metrics into clear stakeholder presentations.'
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Tableau', 'Power BI', 'EDA', 'Feature Engineering']
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'AI Full Stack Developer Certification',
    issuer: 'Entri Elevate',
    date: 'Verified',
    credentialId: 'ENTRI-AIFS-2024-8891',
    verificationUrl: 'https://entri.me',
    skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI Integration', 'REST APIs']
  },
  {
    id: 'cert-2',
    title: 'IBM Data Science Professional Certification',
    issuer: 'IBM',
    date: 'Verified',
    credentialId: 'IBM-DS-PROF-9921',
    verificationUrl: 'https://www.credly.com/org/ibm',
    skills: ['Python', 'Data Science', 'Machine Learning', 'SQL', 'Data Analysis', 'Data Visualization']
  },
  {
    id: 'cert-3',
    title: 'Internship For Data Science',
    issuer: 'Unified Mentor',
    date: 'Verified · 6 Months',
    credentialId: 'UM-DS-INT-2024',
    verificationUrl: 'https://unifiedmentor.com',
    skills: ['Python', 'SQL', 'EDA', 'Feature Engineering', 'Model Evaluation', 'Power BI']
  },
  {
    id: 'cert-4',
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI & Stanford Online',
    date: 'Verified',
    credentialId: 'STAN-ML-8420-DL',
    verificationUrl: 'https://www.coursera.org',
    skills: ['Supervised Learning', 'Gradient Descent', 'Neural Networks', 'Decision Trees', 'Unsupervised Learning']
  },
  {
    id: 'cert-5',
    title: 'Full Stack Web Development with React & Node',
    issuer: 'Meta / Coursera',
    date: 'Verified',
    credentialId: 'META-FS-REACT-771',
    verificationUrl: 'https://www.coursera.org',
    skills: ['React', 'JavaScript', 'Node.js', 'Component Architecture', 'UI/UX Design']
  },
  {
    id: 'cert-6',
    title: 'Python for Data Science & Advanced ML',
    issuer: 'Coursera Project Network',
    date: 'Verified',
    credentialId: 'CPN-PY-ML-3341',
    verificationUrl: 'https://www.coursera.org',
    skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Predictive Modeling']
  },
  {
    id: 'cert-7',
    title: 'Advanced SQL for Relational Data Analysis',
    issuer: 'HackerRank & Coursera',
    date: 'Verified Gold Tier',
    credentialId: 'HR-SQL-ADV-902',
    verificationUrl: 'https://www.hackerrank.com',
    skills: ['SQL', 'Window Functions', 'Query Optimization', 'Complex Joins', 'Schema Design']
  },
  {
    id: 'cert-8',
    title: 'Deep Learning with TensorFlow Fundamentals',
    issuer: 'IBM Cognitive Class',
    date: 'Verified',
    credentialId: 'IBM-CC-TF-5501',
    verificationUrl: 'https://cognitiveclass.ai',
    skills: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Loss Optimization', 'Tensors']
  },
  {
    id: 'cert-9',
    title: 'Executive Business Intelligence & Tableau Mastery',
    issuer: 'Udemy Professional',
    date: 'Verified',
    credentialId: 'UD-TAB-BI-1284',
    verificationUrl: 'https://www.udemy.com',
    skills: ['Tableau', 'Power BI', 'Executive Dashboards', 'DAX', 'Visual Storytelling']
  },
  {
    id: 'cert-10',
    title: 'RESTful API Architecture & MongoDB Security',
    issuer: 'MongoDB University',
    date: 'Verified',
    credentialId: 'MDB-REST-SEC-661',
    verificationUrl: 'https://university.mongodb.com',
    skills: ['MongoDB Atlas', 'Mongoose ODM', 'JWT Auth', 'API Security', 'Aggregation']
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'achievement-1',
    title: '6-Month High-Impact Data Science Internship',
    metric: '6',
    metricLabel: 'Months at Unified Mentor',
    description:
      'Selected for an intensive data science apprenticeship at Unified Mentor, taking responsibility for end-to-end data preprocessing, statistical hypothesis testing, and developing 5+ production-grade Machine Learning models with up to 94% predictive precision.',
    highlights: [
      'Built automated pipelines for high-dimensional feature engineering',
      'Engineered ML predictive algorithms for automotive and churn datasets',
      'Presented executive intelligence dashboards directly to senior mentors'
    ]
  },
  {
    id: 'achievement-2',
    title: '15+ Deployed Production-Grade Web & AI Applications',
    metric: '15+',
    metricLabel: 'Full-Stack & ML Solutions',
    description:
      'Engineered and deployed a prolific portfolio of 15+ full-stack and machine learning applications utilizing React, Node.js, Express, MongoDB, and Python, implementing real-time data flows, secure authentication, and cloud deployment on Vercel and Render.',
    highlights: [
      'Built complete enterprise CRM with role-based access control (RBAC)',
      'Engineered hybrid React + Python Flask AI inference platforms',
      'Demonstrated 100% responsiveness and zero-latency UI micro-interactions'
    ]
  },
  {
    id: 'achievement-3',
    title: 'Master of Computer Application (MCA) Candidate',
    metric: '2025-27',
    metricLabel: 'Currently Enrolled at SMU',
    description:
      'Currently pursuing Master of Computer Application (2025 – 2027) at Sikkim Manipal University, mastering core algorithmic complexity, machine learning foundations, enterprise database systems, and distributed web architectures with a strong academic foundation in BA English (8.6 CGPA).',
    highlights: [
      'Currently enrolled in MCA (2025 – 2027) with focus on AI and advanced systems',
      'Strong dual foundation combining BA English (8.6 CGPA) with technical MCA',
      'Combining mathematical algorithms, full-stack programming, and technical communication'
    ]
  }
];

export const PROFILE_PHOTOS: import('../types').ProfilePhotoOption[] = [
  {
    id: 'santhosh-original',
    name: 'Santhoshkumar (Mustard Shirt)',
    description: 'Authentic portrait in mustard yellow button-down shirt',
    tag: 'Uploaded / Primary',
    url: '/src/assets/images/santhosh_mustard_shirt_1791556209320.jpg'
  },
  {
    id: 'santhosh-executive',
    name: 'Executive Studio Portrait',
    description: 'Dark tailored blazer edition with cinematic studio lighting',
    tag: 'Formal Tech',
    url: '/src/assets/images/santhoshkumar_profile_1791554982882.jpg'
  }
];

