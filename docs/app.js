// Central Content and Logic for Vaibhav Pandey Portfolio
// No frameworks, simple and vanilla for easy deployment to GitHub Pages.

const personalInfo = {
  name: 'Vaibhav Pandey',
  tagline: 'Software Engineer  ·  Full-Stack Developer  ·  AI/ML Developer',
  intro: 'Computer Science & Engineering student (CGPA 8.86) passionate about full-stack architectures, high-performance SDE systems and applied AI/ML applications. Committed to merging cutting-edge technology with high-impact software solutions.',
  email: 'vaibhav.pandey1661@gmail.com',
  phone: '+91 8683081192',
  linkedin: 'https://www.linkedin.com/in/vaibhav-pandey-7ba67033a/',
  github: 'https://github.com/mevaibhavpandey',
  leetcode: 'https://leetcode.com/u/mevaibhavpandey/',
  resumePdf: 'assets/pdfs/Resume.pdf' // Main resume PDF link
};

const aboutParagraphs = [
  'I am a B.E. student in Computer Science & Engineering at BMS Institute of Technology & Management, Bengaluru (2023\u20132027), maintaining a CGPA of 8.86. My academic journey is driven by a deep fascination with Software Engineering, Full-Stack web architectures and Applied Artificial Intelligence.',
  'My technical focus spans robust system design, database indexing, API development and machine learning pipelines. I have engineered real-time analytical dashboards that process 60+ GB of complex oceanographic datasets and track 20,000+ data nodes concurrently \u2014 bridging backend scalability with clean web interfaces.',
  'Beyond core coding, I am the Founder & President of the ASTRA Defence Tech Club at BMSIT&M, where I manage technical workshops, strategic engineering projects and budget distributions for a student body of 200+ members. I also bring the discipline of a national-level basketball gold medalist to my software engineering projects.',
  'My selections as All-India Rank 31 in NDA and All-India Rank 50 in TES demonstrate a proven track rate of high-pressure decision making, leadership resilience and mental resolve \u2014 vital qualities I bring to scaling software teams and systems.'
];

const skills = [
  {
    category: 'Full-Stack Development',
    icon: '\uD83C\uDF10',
    items: ['React.js', 'Node.js', 'Express', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3', 'RESTful APIs', 'PostgreSQL', 'MongoDB', 'SQL']
  },
  {
    category: 'Software Engineering (SDE)',
    icon: '\uD83D\uDCBB',
    items: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'System Design', 'Git / GitHub', 'Docker', 'Kubernetes', 'AWS', 'Linux Shell Scripting', 'CI/CD Pipelines']
  },
  {
    category: 'AI / ML & Intelligent Systems',
    icon: '\uD83E\uDDE0',
    items: ['Machine Learning', 'Large Language Models (LLMs)', 'RAG (Retrieval-Augmented Generation)', 'Vector Databases', 'TensorFlow', 'Scikit-Learn', 'Pandas / NumPy', 'Computer Vision', 'OpenCV', 'Neural Networks']
  },
  {
    category: 'Aerospace & Embedded Systems',
    icon: '\uD83D\uDEF8',
    items: ['ROS (Robot Operating System)', 'PX4 Autopilot', 'Gazebo Simulation', 'Sensor Fusion', 'Visual-Inertial Odometry (VIO)', 'Autonomous Path Planning', 'MATLAB']
  }
];

const projects = [
  {
    id: 1,
    title: 'AURA-X Autonomous UAV',
    subtitle: 'GPS-Denied Reconnaissance Drone',
    description: 'A low-cost autonomous UAV designed for reconnaissance in GPS-denied environments. Implements SLAM (ORB-SLAM3) and sensor fusion for navigation, with visual-inertial odometry enabling robust localization without external positioning signals.',
    tech: ['ROS', 'C++', 'Python', 'OpenCV', 'ORB-SLAM3', 'PX4', 'Gazebo', 'TensorFlow', 'MATLAB'],
    metrics: [
      { label: 'Cost Reduction', value: '~80%' },
      { label: 'Nav Accuracy', value: '88%' },
      { label: 'Environment', value: 'GPS-Denied' }
    ],
    bullets: [
      'Visual SLAM Integration: Leverages ORB-SLAM3 and sensor fusion (VIO) to estimate vehicle pose and map environments in real-time without GPS.',
      'Software-in-the-Loop (SITL): Built custom ROS package nodes that interface directly with PX4 flight stacks inside simulated Gazebo worlds.',
      'Autonomous Collision Avoidance: Incorporates obstacle avoidance and vector field histogram path planning to safely navigate cluttered indoor spaces.'
    ],
    color: '#10B981',
    icon: '\uD83D\uDE80',
    github: 'https://github.com/mevaibhavpandey/astra-uav'
  },
  {
    id: 2,
    title: 'Argo-Based FloatChat AI',
    subtitle: 'Oceanographic AI Platform',
    description: 'An AI-powered chatbot for analyzing massive ocean datasets. Capable of processing 60+ GB NetCDF files and generating rich summaries, visualizations and anomaly-based maritime threat identification \u2014 enabling real-time oceanographic intelligence.',
    tech: ['Python', 'Pandas', 'Xarray', 'PostgreSQL', 'NumPy', 'Scikit-Learn', 'Dask', 'Node.js', 'REST API'],
    metrics: [
      { label: 'Dataset Size', value: '60+ GB' },
      { label: 'Response Time', value: 'Sub-second' },
      { label: 'User Satisfaction', value: '95%+' }
    ],
    bullets: [
      'Big Data Parsing: Optimized data ingestion for 60+ GB global ocean NetCDF arrays using Xarray, Dask and multiprocessing structures.',
      'RAG Context Retrieval: Connects queries to a PostgreSQL database with metadata search to retrieve exact ocean profile coordinates.',
      'Automated Visualization: Automatically renders complex temperature and salinity depth contours using Matplotlib plotting hooks.'
    ],
    color: '#F97316',
    icon: '\uD83C\uDF0A',
    github: 'https://github.com/mevaibhavpandey/Argo-FloatChat'
  },
  {
    id: 3,
    title: 'NavSight Maritime Situational Awareness',
    subtitle: 'Real-Time Vessel Tracking & Intelligence',
    description: 'Advanced Maritime Situational Awareness Platform with vessel tracking, geospatial intelligence, OCR-based data ingestion and real-time alert generation. Integrates AIS data streams with ML-based anomaly detection.',
    tech: ['Python', 'React.js', 'Streamlit', 'Folium', 'Matplotlib', 'Pandas', 'NumPy', 'Geospatial ML'],
    metrics: [
      { label: 'Vessels Tracked', value: '20,000+' },
      { label: 'API Response', value: '8ms' },
      { label: 'Detection Accuracy', value: '98%' }
    ],
    bullets: [
      'Real-Time AIS Mapping: Plots current geographical locations and heading vectors for over 20,000 ships simultaneously using Folium map layers.',
      'OCR Manifest Processing: Parses unstructured shipping manifests and cargo reports using OCR engines for fast intelligence ingestion.',
      'Anomaly Detection: Employs statistical clustering models to detect shipping trajectory anomalies and alert command centers of potential dark vessels.'
    ],
    color: '#EAB308',
    icon: '\uD83D\uDEF3\uFE0F',
    github: 'https://github.com/mevaibhavpandey/navsight-ai-maritime-awareness',
    live: 'https://mevaibhavpandey.github.io/navsight-ai-maritime-awareness/'
  },
  {
    id: 4,
    title: 'AmbuAI Emergency Dispatch System',
    subtitle: 'Autonomous Medical Routing Engine',
    description: 'Interactive ambulance dispatch and optimization system. Employs real-time routing engines (TomTom Maps API) to compute optimal paths, handle multiple concurrent dispatches and dynamically re-route vehicles based on sudden traffic events.',
    tech: ['JavaScript', 'Node.js', 'REST APIs', 'TomTom Maps', 'Leaflet', 'Routing Optimization'],
    metrics: [
      { label: 'Response Time Reduction', value: '22%' },
      { label: 'Dispatch Latency', value: '1.2s' },
      { label: 'Re-routing Success', value: '99.4%' }
    ],
    bullets: [
      'Multi-Agent Road Routing: Uses the Open Source Routing Machine (OSRM) API to dynamically compute fastest routes along physical road layers.',
      'IndexedDB Offline Sync: Caches hospital positions and medical status updates locally on the device using Dexie.js for network resilience.',
      'AI Triage Classifier: Parses bystander emergency reports through symptom matrices to categorize incident priority states.'
    ],
    color: '#EF4444',
    icon: '\uD83D\uDE91',
    github: 'https://github.com/mevaibhavpandey/Ambulance-dispatch-system'
  },
  {
    id: 5,
    title: 'PLFM Phased Array RADAR System',
    subtitle: '10.5 GHz Microwave Hardware & Software',
    description: 'Open-source, low-cost 10.5 GHz frequency-modulated continuous-wave (FMCW) phased array RADAR system. Integrates raw microwave signal processing with visual range-doppler plot generation.',
    tech: ['C/C++', 'Arduino', 'MATLAB', 'Signal Processing', 'Phased Array Theory', 'DSP'],
    metrics: [
      { label: 'Operating Freq', value: '10.5 GHz' },
      { label: 'Resolution', value: '0.5m' },
      { label: 'Cost Reduction', value: '92%' }
    ],
    bullets: [
      '10.5 GHz FMCW Signal Capture: Captures analog microwave reflections using standard ADC channels on microcontroller units.',
      'Range-Doppler Processing: Implements Fast Fourier Transforms (FFT) in MATLAB to display target distances and relative velocities.',
      'Active Beam Steering: Controls phased array antenna array delays to steer radar waves without mechanical moving parts.'
    ],
    color: '#8B5CF6',
    icon: '\uD83D\uDCE1',
    github: 'https://github.com/mevaibhavpandey/PLFM_RADAR'
  },
  {
    id: 6,
    title: 'Proportional Missile Guidance & Radar Sim',
    subtitle: 'Kinematic Threat Interception Dashboard',
    description: 'A real-time, interactive simulation modeling missile proportional navigation against highly maneuverable aerial threats. Displays instant radar-like sweep indicators, missile-target vector paths and g-force load analytics.',
    tech: ['Python', 'Streamlit', 'Matplotlib', 'NumPy', 'Differential Equations'],
    metrics: [
      { label: 'Interception Rate', value: '94.2%' },
      { label: 'Target Count', value: 'Multi-threat' },
      { label: 'Sim Speed', value: '60 FPS' }
    ],
    bullets: [
      'Proportional Navigation Loops: Resolves differential intercept kinematic equations using Runge-Kutta numerical integration solvers.',
      'Radar Sweep Interface: Streamlit-based web dashboard animates threat coordinates, missile lead angles and tracking arcs.',
      'Flight Data Reporting: Automatically logs missile G-loads, acceleration vectors and final closest point of approach statistics.'
    ],
    color: '#EC4899',
    icon: '\uD83C\uDFAF',
    github: 'https://github.com/mevaibhavpandey/Radar-simulation',
    live: 'https://mevaibhavpandey.github.io/Radar-simulation/'
  },
  {
    id: 7,
    title: 'Indian Military Operations Timeline',
    subtitle: 'Tactical Campaign Geospatial HUD',
    description: 'Interactive map and history dashboard displaying key tactical campaigns and regional logistics. Uses custom map overlays and video integration to serve as an educational history timeline portal.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'Cyber HUD Styling', 'Media APIs'],
    metrics: [
      { label: 'Campaigns Covered', value: '25+' },
      { label: 'Map Engine', value: 'Leaflet' },
      { label: 'Aesthetic', value: 'Cyber HUD' }
    ],
    bullets: [
      'Geospatial Mapping: Places custom route paths, historical markers and movement indicators onto Leaflet map layers.',
      'Cyberpunk HUD Theme: Designed a customized glassmorphic heads-up display dashboard styling using native CSS selectors.',
      'Briefing Embeds: Integrates interactive multimedia players and briefing slides to display video historical segments.'
    ],
    color: '#059669',
    icon: '\uD83C\uDDEE\uD83C\uDDF3',
    github: 'https://github.com/mevaibhavpandey/indian-military-operations-timeline',
    live: 'https://mevaibhavpandey.github.io/indian-military-operations-timeline/'
  },
  {
    id: 8,
    title: 'Automated Quiz Engine',
    subtitle: 'TypeScript & Node.js Interactive testing suite',
    description: 'A robust, interactive quiz engine supporting multiple question categories, scoring dynamics and detailed performance reporting metrics.',
    tech: ['TypeScript', 'Node.js', 'Express', 'HTML5', 'CSS3'],
    metrics: [
      { label: 'Questions Supported', value: '100+' },
      { label: 'Response Latency', value: '<5ms' },
      { label: 'Type Safety', value: 'Strict' }
    ],
    bullets: [
      'Component Architecture: Designed using typed classes and object structures to manage state and session flows.',
      'Custom Scoring Engine: Features time-weighted difficulty bonuses and instant error analysis feedback reports.',
      'Responsive HUD UI: Uses clean CSS transitions and dark mode presets to present an immersive testing layout.'
    ],
    color: '#38BDF8',
    icon: '\u2753',
    github: 'https://github.com/mevaibhavpandey/Quiz-Application'
  }
];

const timelineEvents = [
  { date: 'Sep 2023', event: 'NDA-1 2023 | 31 SSB Jalandhar', detail: 'First SSB attempt at 31 Services Selection Board, Jalandhar. Cleared Stage 1 (OIR & PPDT) — Conferenced Out after completing the full five-day Stage 2 assessment covering psychological tests, Group Testing Officer tasks, and personal interview boards. A formative experience that laid the foundation.', status: 'progress' },
  { date: 'Nov 2023', event: 'TES-50 | 19 SSB Prayagraj', detail: 'Attended SSB for TES-50 at 19 Services Selection Board, Prayagraj. Cleared Stage 1 — Conferenced Out after the five-day board. Refined self-understanding of officer-like qualities and continued building mental resilience with each assessment.', status: 'progress' },
  { date: 'Jan 2024', event: 'NDA-2 2023 | 21 SSB Bhopal', detail: 'Attended SSB at 21 Services Selection Board, Bhopal. Cleared Stage 1 with strong OIR scores — Conferenced Out at the Conference round after completing Stage 2. Each attempt added sharpness to personality and leadership dimensions.', status: 'progress' },
  { date: 'Mar 2024', event: 'TES-51 | 17 SSB Bangalore', detail: 'Attended SSB for TES-51 at 17 Services Selection Board, Bangalore. Cleared Stage 1 — Conferenced Out after the five-day board. Continued to build command qualities, situational judgment and group leadership skills with steely determination.', status: 'progress' },
  { date: 'May 2024', event: 'NDA-153 (IAF) | 2 AFSB Mysore', detail: 'Attended SSB at 2 Air Force Selection Board, Mysore. Recommended by the board — AIR 31, Indian Air Force Flying Branch. Also cleared CPSS/PABT (Computerised Pilot Selection System / Pilot Aptitude Battery Test) — a once-in-a-lifetime DRDO-developed cockpit simulator assessment evaluating psychomotor skills, hand-eye-feet coordination, multitasking under pressure, and instrument comprehension for modern IAF fighter jet operations.', status: 'selected', rank: 'AIR 31' },
  { date: 'Nov 2024', event: 'TES-52 (Army) | 32 SSB Jalandhar', detail: 'Final SSB at 32 Services Selection Board, Jalandhar. Recommended by the board for TES-52 (Indian Army Technical Entry Scheme) — AIR 50. Official merit list published on the Join Indian Army portal confirming the selection. A testament to sustained effort, discipline and unwavering resolve across six SSB attempts.', status: 'selected', rank: 'AIR 50' }
];

const certifications = [
  {
    id: 1,
    title: 'Oracle AI Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    description: "Completed Oracle's AI Foundations Associate program covering AI/ML fundamentals, deep learning, neural networks and LLMs on Oracle Cloud Infrastructure (OCI).",
    file: 'assets/pdfs/Oracle Certificate.pdf',
    type: 'pdf',
    icon: '\uD83D\uDEDB\uFE0F'
  },
  {
    id: 2,
    title: 'Introduction to Advanced Robotics',
    issuer: 'NPTEL (IIT)',
    description: 'Completed NPTEL course on advanced robotics: manipulators, kinematics, dynamics, workspace analysis and motion planning.',
    file: 'assets/pdfs/NPTEL Robotics.pdf',
    type: 'pdf',
    icon: '\uD83E\uDD16'
  },
  {
    id: 3,
    title: 'Introduction to Large Language Models',
    issuer: 'NPTEL (IIT)',
    description: 'Completed NPTEL certification on LLMs covering transformer architecture, prompt engineering, fine-tuning and generative AI applications.',
    file: 'assets/pdfs/NPTEL LLM.pdf',
    type: 'pdf',
    icon: '\uD83E\uDDEC'
  },
  {
    id: 4,
    title: 'ICMOTA Participation Certificate',
    issuer: 'IIT BHU \u2014 International Conference on Mathematical Optimization Theory and Applications',
    description: 'Certificate of participation at ICMOTA (International Conference on Mathematical Optimization Theory and Applications) hosted at IIT Varanasi (BHU).',
    file: 'assets/images/certifications/ICMOTA Certificate.jpeg',
    type: 'image',
    icon: '\uD83C\uDF96\uFE0F'
  },
  {
    id: 5,
    title: 'Life Skills & Employability Certificate',
    issuer: 'Life Skills Program',
    description: 'Certificate from a comprehensive Life Skills and Employability Skills program covering workplace communication, professional ethics and teamwork.',
    file: 'assets/images/certifications/Life Skill Certificate.jpeg',
    type: 'image',
    icon: '\uD83C\uDF31'
  },
  {
    id: 6,
    title: 'Prepare Data for ML APIs on Google Cloud',
    issuer: 'Google Cloud \u2014 Smart Analytics Skill Badge',
    description: "Completed Google Cloud's Skill Badge for Smart Analytics: preparing data for ML APIs on Google Cloud, covering BigQuery, Cloud Storage and AI/ML API integrations (Introductory level).",
    file: null,
    link: 'https://www.cloudskillsboost.google/',
    type: 'external',
    icon: '\u2601\uFE0F'
  }
];

const achievements = [
  {
    id: 1,
    title: 'Founder & President \u2014 ASTRA Defence Tech Club',
    organization: 'BMS Institute of Technology & Management',
    description: 'Founded and lead the campus-wide ASTRA Defence Technology & Autonomous Systems club. Spearheaded UAV R&D labs, autonomous flight control system workshops, and defence engineering projects for over 200+ engineering students. Secured funding for drone components and test benches.',
    icon: '\uD83D\uDE80',
    color: '#F97316'
  },
  {
    id: 2,
    title: 'Track Prize Winner \u2014 ANVESHANA National Hackathon',
    org: 'BMSIT&M, Bengaluru',
    description: 'Secured a major track prize at the prestigious ANVESHANA National Hackathon, hosted by BMSIT&M. Designed and prototyped a real-world software system focused on embedded tracking and smart navigation.',
    icon: '\uD83E\uDD47',
    color: '#EAB308',
    images: [
      'assets/images/achievements/Anveshana Certificate.jpeg',
      'assets/images/achievements/Anveshana Prize distribution.jpeg'
    ]
  },
  {
    id: 3,
    title: '2nd Place \u2014 InCSEption Inter-College Hackathon',
    org: 'BMSIT&M Software Hackathon',
    description: 'Won 2nd place in a highly competitive inter-college software hackathon. Engineered a real-time data streaming pipeline with anomaly detection APIs, demonstrating high proficiency in system-level programming and rapid backend development.',
    icon: '\uD83E\uDD48',
    color: '#94A3B8',
    images: [
      'assets/images/achievements/Incsepetion Team certificate.jpeg',
      'assets/images/achievements/Incseption Personal Certificate.jpeg'
    ]
  },
  {
    id: 4,
    title: 'Research Presenter \u2014 ICMOTA (IIT Varanasi)',
    org: 'International Conference on Mathematical Optimization Theory and Applications',
    description: 'Invited to participate and present at ICMOTA hosted at IIT BHU. Engaged with optimization experts and software researchers to showcase research on autonomous navigation SLAM models and sensor fusion applications.',
    icon: '\uD83C\uDF96\uFE0F',
    color: '#A855F7'
  },
  {
    id: 5,
    title: 'AIR 31 \u2014 153rd NDA Course (IAF Flying Branch)',
    org: 'Union Public Service Commission (UPSC)',
    description: 'Achieved an outstanding All-India Rank of 31 in the NDA (I) 2024 recommended list, qualifying for the Indian Air Force Flying Branch based on aptitude, medical standards and officer personality traits.',
    icon: '\u2708\uFE0F',
    color: '#60A5FA'
  },
  {
    id: 6,
    title: 'AIR 50 \u2014 52nd TES Course (Indian Army)',
    org: 'Indian Army Technical Entry Scheme',
    description: 'Secured All-India Rank 50 in the Indian Army TES-52 course, verifying high technological aptitude, engineering mindset and leadership qualities.',
    icon: '\u2B50',
    color: '#10B981'
  },
  {
    id: 7,
    title: 'National-Level Basketball \u2014 Gold Medalist',
    org: 'Regional / College Athletics',
    description: 'Competed at national level in basketball and clinched a gold medal at the regional tournament, demonstrating team leadership and athletic excellence.',
    icon: '\uD83C\uDFC0',
    color: '#F97316'
  }
];

const galleryImages = [
  { src: 'assets/images/ssb/SSB-1.jpeg', alt: 'Vaibhav Pandey at SSB Interview (NDA-1 2023)', category: 'SSB / Defense' },
  { src: 'assets/images/ssb/SSB-2.jpeg', alt: 'Vaibhav Pandey at SSB Interview (NDA-1 2023)', category: 'SSB / Defense' },
  { src: 'assets/images/ssb/SSB-3.jpeg', alt: 'Group at SSB (NDA-2 2023 interview)', category: 'SSB / Defense' },
  { src: 'assets/images/ssb/SSb-4.jpeg', alt: 'Group at SSB (NDA-2 2023 interview)', category: 'SSB / Defense' },
  { src: 'assets/images/ssb/SSB-5.jpeg', alt: 'Vaibhav Pandey with peers at SSB (NDA-153, IAF)', category: 'SSB / Defense' },
  { src: 'assets/images/ssb/SSB-6.jpeg', alt: 'Vaibhav Pandey at SSB (TES-52, Indian Army)', category: 'SSB / Defense' },
  { src: 'assets/images/events/ICMOTA group photo.jpeg', alt: 'Group photo at ICMOTA conference (IIT BHU)', category: 'ICMOTA' },
  { src: 'assets/images/events/ICMOTA photo.jpeg', alt: 'Vaibhav at ICMOTA conference (IIT BHU)', category: 'ICMOTA' },
  { src: 'assets/images/events/Life Skill photo-1.jpeg', alt: 'Group photo from Life Skills workshop', category: 'Life Skills' },
  { src: 'assets/images/events/Life Skill photo-2.jpeg', alt: 'Activity photo from Life Skills training', category: 'Life Skills' },
  { src: 'assets/images/achievements/Anveshana Prize distribution.jpeg', alt: 'Prize distribution at ANVESHANA Hackathon', category: 'Achievements' },
  { src: 'assets/images/achievements/Incsepetion group photo.jpeg', alt: 'Team photo at InCSEption Hackathon', category: 'Achievements' },
  { src: 'assets/images/recommendations/Recommendation photo.jpeg', alt: 'Recommendation letter photo', category: 'Recommendations' },
  { src: 'assets/images/recommendations/Recommendation photo-2.jpeg', alt: 'Recommendation letter photo', category: 'Recommendations' },
  { src: 'assets/images/gallery/Photo Gallery-1.jpeg', alt: 'Event photo', category: 'General' },
  { src: 'assets/images/gallery/Photo Gallery-2.jpeg', alt: 'Event photo', category: 'General' },
  { src: 'assets/images/gallery/Photo Gallery-3.jpeg', alt: 'Event photo', category: 'General' },
  { src: 'assets/images/gallery/TES photo.jpeg', alt: 'Vaibhav Pandey at TES interview session', category: 'TES' }
];

const meritLinks = {
  nda: {
    title: 'NDA-153 (NDA-I 2024)',
    subtitle: 'Indian Air Force Flying Branch Â· AIR 31',
    description: 'Official UPSC / Defense recommended candidates list for the 153rd NDA Course (NDA-I 2024 examination). Vaibhav Pandey secured All-India Rank 31.',
    image: 'assets/images/merit/NDA merit list.jpeg',
    link: 'https://upsc.gov.in/sites/default/files/MksRcdCndts-NDA-I-24-Engl-051124.pdf',
    linkLabel: 'Verify NDA-153 Merit'
  },
  tes: {
    title: 'TES-52 (Indian Army)',
    subtitle: 'Indian Army Technical Entry Scheme Â· AIR 50',
    description: 'Official Indian Army merit list for the 52nd Technical Entry Scheme (TES-52) course. Vaibhav Pandey secured All-India Rank 50.',
    image: 'assets/images/merit/TES merit list.jpeg',
    link: 'https://www.joinindianarmy.nic.in/writereaddata/Portal/Images/pdf/MERIT_LIST_FOR_TES_52_COURSE.pdf',
    linkLabel: 'Verify TES-52 Merit'
  }
};

// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
// DOM RENDERING & INTERACTIONS
// â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile menu on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.querySelectorAll('span').forEach(s => s.style.transform = 'none');
      hamburger.querySelectorAll('span')[1].style.opacity = '1';
    });
  });

  // Navbar Scroll Accent
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Render About section paragraphs
  const aboutTextDiv = document.querySelector('.about-text');
  aboutParagraphs.forEach(p => {
    const para = document.createElement('p');
    para.textContent = p;
    aboutTextDiv.appendChild(para);
  });

  // Render Skills
  const skillsGrid = document.querySelector('.skills-grid');
  skills.forEach((skillCat, index) => {
    const card = document.createElement('div');
    card.className = `skill-card reveal-scale reveal-delay-${index + 1}`;
    card.innerHTML = `
      <div class="skill-icon">${skillCat.icon}</div>
      <div class="skill-cat">${skillCat.category}</div>
      <div class="skill-items">
        ${skillCat.items.map(item => `<span class="skill-item">${item}</span>`).join('')}
      </div>
    `;
    skillsGrid.appendChild(card);
  });

  // Get dynamic animated SVG visual for projects
  function getProjectVisualSVG(id, color) {
    switch(id) {
      case 1: // AURA-X UAV
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <circle cx="50" cy="50" r="16" fill="none" stroke="${color}" stroke-width="2"/>
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="${color}55" stroke-width="2"/>
            <circle cx="50" cy="10" r="5" fill="var(--gold)" class="rotor-spin-1" style="transform-origin: 50px 10px; animation: spin 0.8s linear infinite;"/>
            <circle cx="50" cy="90" r="5" fill="var(--gold)" class="rotor-spin-2" style="transform-origin: 50px 90px; animation: spin 0.8s linear infinite;"/>
            <circle cx="10" cy="50" r="5" fill="var(--gold)" class="rotor-spin-3" style="transform-origin: 10px 50px; animation: spin 0.8s linear infinite;"/>
            <circle cx="90" cy="50" r="5" fill="var(--gold)" class="rotor-spin-4" style="transform-origin: 90px 50px; animation: spin 0.8s linear infinite;"/>
          </svg>
        `;
      case 2: // Argo FloatChat AI
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <circle cx="50" cy="50" r="8" fill="${color}" class="pulse-node" style="transform-origin: 50px 50px; animation: pulse 2s ease-in-out infinite;"/>
            <line x1="50" y1="50" x2="20" y2="30" stroke="${color}44" stroke-width="1.5" stroke-dasharray="3 3"/>
            <line x1="50" y1="50" x2="80" y2="30" stroke="${color}44" stroke-width="1.5" stroke-dasharray="3 3"/>
            <line x1="50" y1="50" x2="50" y2="80" stroke="${color}44" stroke-width="1.5" stroke-dasharray="3 3"/>
            <circle cx="20" cy="30" r="5" fill="var(--gold)"/>
            <circle cx="80" cy="30" r="5" fill="var(--gold)"/>
            <circle cx="50" cy="80" r="5" fill="var(--gold)"/>
          </svg>
        `;
      case 3: // NavSight Maritime Situational Awareness
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <circle cx="50" cy="50" r="40" fill="none" stroke="${color}33" stroke-width="1.5"/>
            <circle cx="50" cy="50" r="22" fill="none" stroke="${color}22" stroke-width="1"/>
            <line x1="50" y1="10" x2="50" y2="90" stroke="${color}11" stroke-width="1"/>
            <line x1="10" y1="50" x2="90" y2="50" stroke="${color}11" stroke-width="1"/>
            <line x1="50" y1="50" x2="78" y2="22" stroke="${color}" stroke-width="2" class="radar-scan-line" style="transform-origin: 50px 50px; animation: spin 6s linear infinite;"/>
          </svg>
        `;
      case 4: // AmbuAI Emergency Dispatch
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <path d="M50 15 C35 15 25 27 25 43 C25 63 50 82 50 82 C50 82 75 63 75 43 C75 27 65 15 50 15 Z" fill="none" stroke="${color}" stroke-width="2" class="pulse-pin"/>
            <circle cx="50" cy="40" r="8" fill="var(--gold)" class="pulse-node" style="transform-origin: 50px 40px; animation: pulse 2s ease-in-out infinite;"/>
          </svg>
        `;
      case 5: // PLFM Phased Array RADAR
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <rect x="20" y="20" width="60" height="60" rx="6" fill="none" stroke="${color}44" stroke-width="2"/>
            <circle cx="35" cy="35" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate;"/>
            <circle cx="50" cy="35" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate; animation-delay: 0.2s;"/>
            <circle cx="65" cy="35" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate; animation-delay: 0.4s;"/>
            <circle cx="35" cy="50" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate; animation-delay: 0.6s;"/>
            <circle cx="50" cy="50" r="5" fill="var(--gold)"/>
            <circle cx="65" cy="50" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate; animation-delay: 0.8s;"/>
            <circle cx="35" cy="65" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate; animation-delay: 1s;"/>
            <circle cx="50" cy="65" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate; animation-delay: 1.2s;"/>
            <circle cx="65" cy="65" r="4" fill="${color}" style="animation: pulse 1.5s ease-in-out infinite alternate; animation-delay: 1.4s;"/>
          </svg>
        `;
      case 6: // Proportional Missile Guidance
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <path d="M15 85 Q50 85, 80 20" fill="none" stroke="${color}33" stroke-width="2"/>
            <circle cx="80" cy="20" r="5" fill="var(--gold)" class="pulse-node" style="transform-origin: 80px 20px; animation: pulse 1.5s ease-in-out infinite;"/>
            <line x1="15" y1="85" x2="48" y2="52" stroke="${color}" stroke-width="2" style="animation: guidanceLine 4s ease-in-out infinite;"/>
          </svg>
        `;
      case 7: // Indian Military Operations Timeline
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <circle cx="50" cy="50" r="35" fill="none" stroke="${color}44" stroke-width="2"/>
            <line x1="50" y1="15" x2="50" y2="85" stroke="${color}22" stroke-width="1.5"/>
            <line x1="15" y1="50" x2="85" y2="50" stroke="${color}22" stroke-width="1.5"/>
            <polygon points="50,18 45,50 55,50" fill="${color}" style="transform-origin: 50px 50px; animation: spin 8s ease-in-out infinite;"/>
            <polygon points="50,82 45,50 55,50" fill="var(--gold)" style="transform-origin: 50px 50px; animation: spin 8s ease-in-out infinite;"/>
          </svg>
        `;
      case 8: // Automated Quiz Engine
        return `
          <svg class="proj-svg" viewBox="0 0 100 100" style="width: 100px; height: 100px; margin: 0 auto 1rem;">
            <rect x="25" y="25" width="50" height="50" rx="8" fill="none" stroke="${color}" stroke-width="2" class="pulse-node" style="transform-origin: 50px 50px; animation: pulse 3s ease-in-out infinite;"/>
            <text x="50" y="58" font-family="'Space Grotesk', sans-serif" font-size="24" font-weight="900" fill="var(--gold)" text-anchor="middle">?</text>
          </svg>
        `;
      default:
        return `<div style="font-size: 3rem; text-align: center; margin-bottom: 0.5rem;">${color}</div>`;
    }
  }

  // Render Projects
  const projectsList = document.getElementById('projects-list-container');
  projects.forEach((p, index) => {
    const isEven = index % 2 === 0;
    const row = document.createElement('div');
    row.className = `proj-row reveal ${isEven ? '' : 'reverse'}`;
    row.innerHTML = `
      <div class="proj-details-column">
        <h3 style="color: ${p.color};">${p.title}</h3>
        <div class="proj-subtitle" style="color: ${p.color}; opacity: 0.85;">${p.subtitle}</div>
        <p class="proj-desc" style="color: var(--gray); font-size: 0.92rem; line-height: 1.7;">${p.description}</p>
        
        <div class="proj-bullets">
          ${p.bullets.map(b => `
            <div class="proj-bullet-item">
              <span class="bullet-icon">\u2726</span>
              <span>${b}</span>
            </div>
          `).join('')}
        </div>

        <div class="proj-tech" style="margin-bottom: 1.25rem;">
          ${p.tech.map(t => `<span class="chip chip-gray">${t}</span>`).join('')}
        </div>

        <div class="proj-links">
          ${p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live Demo</a>` : ''}
          <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="border-color: ${p.color}55; color: ${p.color};">Read Technical README</a>
        </div>
      </div>

      <div class="proj-visual-column" style="background: linear-gradient(135deg, ${p.color}0c, ${p.color}02);">
        <div class="proj-visual-card">
          ${getProjectVisualSVG(p.id, p.color)}
          <div class="proj-metrics">
            ${p.metrics.map(m => `
              <div class="metric-row" style="background: rgba(255,255,255,0.03);">
                <span class="metric-lbl">${m.label}</span>
                <span class="metric-val" style="color: ${p.color};">${m.value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    projectsList.appendChild(row);
  });

  // Render Timeline
  const timelineContainer = document.querySelector('.timeline-container');
  timelineEvents.forEach(e => {
    const item = document.createElement('div');
    item.className = 'tl-item reveal';
    item.innerHTML = `
      <div class="tl-dot ${e.status === 'selected' ? 'dot-sel' : 'dot-prog'}"></div>
      <div class="tl-date">${e.date}</div>
      <div class="tl-event">${e.event} ${e.rank ? `<span class="rank-badge">${e.rank}</span>` : ''}</div>
      <div class="tl-detail">${e.detail}</div>
    `;
    timelineContainer.appendChild(item);
  });

  // Render Merit Verification
  // Render Merit Verification
  const meritContainer = document.querySelector('.merit-grid');
  Object.keys(meritLinks).forEach((key, index) => {
    const m = meritLinks[key];
    const card = document.createElement('div');
    card.className = `merit-card reveal-left reveal-delay-${(index % 3) + 1}`;
    card.innerHTML = `
      <img src="${m.image}" alt="${m.title}" class="merit-img zoomable">
      <div class="merit-body">
        <div class="merit-title">${m.title}</div>
        <div class="merit-sub">${m.subtitle}</div>
        <p class="merit-desc">${m.description}</p>
        <div class="merit-btns">
          <a href="${m.link}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
            <svg style="width:14px;height:14px;fill:currentColor;" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
            ${m.linkLabel}
          </a>
          <button class="btn btn-secondary btn-sm preview-btn" data-file="${m.image}" data-title="${m.title}">Quick View</button>
        </div>
      </div>
    `;
    meritContainer.appendChild(card);
  });

  // Render Certifications
  const certsGrid = document.querySelector('.certs-grid');
  certifications.forEach((cert, index) => {
    const card = document.createElement('div');
    card.className = `cert-card reveal-scale reveal-delay-${(index % 4) + 1}`;
    card.innerHTML = `
      <div class="cert-icon">${cert.icon}</div>
      <div class="cert-title">${cert.title}</div>
      <div class="cert-issuer">${cert.issuer}</div>
      <p class="cert-desc">${cert.description}</p>
      <button class="btn btn-secondary btn-sm view-cert-btn" style="margin-top:auto;" 
              data-file="${cert.file || ''}" data-link="${cert.link || ''}" data-type="${cert.type}" data-title="${cert.title}">
        View Certificate
      </button>
    `;
    certsGrid.appendChild(card);
  });

  // Render Achievements
  const achGrid = document.querySelector('.ach-grid');
  achievements.forEach((ach, index) => {
    const card = document.createElement('div');
    card.className = `ach-card reveal-right reveal-delay-${(index % 3) + 1}`;
    card.style.borderColor = ach.color;
    card.innerHTML = `
      <div class="ach-emoji">${ach.icon}</div>
      <div class="ach-title">${ach.title}</div>
      <div class="ach-org" style="color: ${ach.color};">${ach.org}</div>
      <p class="ach-desc">${ach.description}</p>
      ${ach.images ? `
        <div class="ach-thumbs">
          ${ach.images.map(img => `<img src="${img}" alt="Achievement image" class="ach-thumb zoomable">`).join('')}
        </div>
      ` : ''}
    `;
    achGrid.appendChild(card);
  });

  // Render Gallery Marquee (doubled for infinite scroll loop)
  const galleryTrack = document.querySelector('.gallery-track');
  const allImages = [...galleryImages, ...galleryImages]; // Double to avoid seam
  allImages.forEach(img => {
    const item = document.createElement('div');
    item.className = 'gal-item';
    item.innerHTML = `
      <img src="${img.src}" alt="${img.alt}" loading="lazy">
      <div class="gal-overlay">
        <span class="gal-cap">${img.alt}</span>
      </div>
    `;
    galleryTrack.appendChild(item);
  });

  // Render Gallery Filters
  const uniqueCats = ['All', ...new Set(galleryImages.map(img => img.category))];
  const filterWrap = document.querySelector('.gal-cats');
  uniqueCats.forEach((cat, index) => {
    const btn = document.createElement('button');
    btn.className = `btn btn-secondary btn-sm ${index === 0 ? 'btn-primary' : ''}`;
    btn.style.margin = '0 0.25rem 0.5rem';
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      filterWrap.querySelectorAll('button').forEach(b => b.className = 'btn btn-secondary btn-sm');
      btn.className = 'btn btn-primary btn-sm';
      filterGallery(cat);
    });
    filterWrap.appendChild(btn);
  });

  function filterGallery(cat) {
    galleryTrack.innerHTML = '';
    const filtered = cat === 'All' ? galleryImages : galleryImages.filter(img => img.category === cat);
    // Double to ensure scroll keeps working
    const doubleFiltered = [...filtered, ...filtered];
    if (doubleFiltered.length === 0) return;
    doubleFiltered.forEach(img => {
      const item = document.createElement('div');
      item.className = 'gal-item';
      item.innerHTML = `
        <img src="${img.src}" alt="${img.alt}" loading="lazy">
        <div class="gal-overlay">
          <span class="gal-cap">${img.alt}</span>
        </div>
      `;
      galleryTrack.appendChild(item);
    });
  }

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // MODAL LIGHTBOX SYSTEM
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalBox = modalOverlay.querySelector('.modal-box');
  const modalClose = modalOverlay.querySelector('.modal-close');

  function openLightbox(contentHtml) {
    // remove existing content besides the close button
    const oldContent = modalBox.querySelector('.modal-content-inner');
    if (oldContent) oldContent.remove();

    const wrapper = document.createElement('div');
    wrapper.className = 'modal-content-inner';
    wrapper.innerHTML = contentHtml;
    modalBox.appendChild(wrapper);

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeLightbox);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeLightbox();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // Bind click for zoomable images
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('zoomable') || e.target.closest('.gal-item')) {
      const img = e.target.tagName === 'IMG' ? e.target : e.target.querySelector('img');
      if (img) {
        openLightbox(`
          <img src="${img.src}" class="modal-img" alt="${img.alt}">
          <div class="modal-cap">${img.alt}</div>
        `);
      }
    }
  });

  // Bind click for Quick View on merit links
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('preview-btn')) {
      const file = e.target.getAttribute('data-file');
      const title = e.target.getAttribute('data-title');
      openLightbox(`
        <img src="${file}" class="modal-img" alt="${title}">
        <div class="modal-cap">${title}</div>
      `);
    }
  });

  // Bind click for Certifications
  document.addEventListener('click', (e) => {
    const certBtn = e.target.closest('.view-cert-btn');
    if (certBtn) {
      const type = certBtn.getAttribute('data-type');
      const file = certBtn.getAttribute('data-file');
      const link = certBtn.getAttribute('data-link');
      const title = certBtn.getAttribute('data-title');

      if (type === 'external') {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else if (type === 'pdf') {
        openLightbox(`
          <iframe src="${file}" class="modal-embed" type="application/pdf"></iframe>
          <div class="modal-cap">${title}</div>
        `);
      } else {
        openLightbox(`
          <img src="${file}" class="modal-img" alt="${title}">
          <div class="modal-cap">${title}</div>
        `);
      }
    }
  });

  // Form submission handler
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;

    const mailtoUri = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoUri;
  });

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // SCROLL REVEAL INTERSECTION OBSERVER
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  const revealElements = document.querySelectorAll('.reveal');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Small delay to allow elements to be rendered before observing
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      revealObserver.observe(el);
    });
  }, 100);

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // INTERACTIVE CANVAS BACKGROUND SIMULATION
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  const canvas = document.getElementById('portfolio-canvas-bg');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 65;
    let mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 90, 31, 0.45)';
        ctx.fill();
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      // Connecting particles with proximity lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 90, 31, ${0.08 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Connecting particles to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        particles.forEach(p => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 90, 31, ${0.16 * (1 - dist / 180)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      }

      requestAnimationFrame(animate);
    };
    animate();
  }

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // 3D PARALLAX TILT EFFECT ON PROJECT CARDS
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  const tiltCards = document.querySelectorAll('.proj-visual-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 12; // 12 deg tilt
      const rotateY = ((centerX - x) / centerX) * 12;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });

  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  // PAGE INITIALIZATION LOADER (WITH COUNTER)
  // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
  const loader = document.getElementById('page-loader');
  const loaderStatus = document.querySelector('.loader-status');
  if (loader && loaderStatus) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 2;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          loader.classList.add('fade-out');
          setTimeout(() => {
            document.querySelectorAll('.hero .reveal').forEach(el => {
              el.classList.add('visible');
            });
          }, 450);
        }, 600);
      }
      loaderStatus.innerHTML = `INITIALIZING SYSTEM CONTROLS... <span style="color:var(--orange); font-weight:900;">${progress}%</span>`;
    }, 45);
  } else {
    // Fallback if elements not present
    window.addEventListener('load', () => {
      if (loader) loader.classList.add('fade-out');
    });
  }
});
// Trigger redeploy

