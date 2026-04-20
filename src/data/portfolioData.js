// ── Portfolio Data ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const personalInfo = {
  name: 'Vaibhav Wable',
  title: 'Software Engineer',
  taglines: [
    'Cross-Platform App Developer',
    'React Native & Flutter Specialist',
    'Next.js Engineer',
    'AI-Assisted Workflow Advocate',
    'Performance Optimization Expert',
  ],
  about: `Software Engineer with experience building high-performance cross-platform applications using Flutter, React Native, and Next.js. I specialize in scalable architecture, performance optimization, and rapid development using AI-assisted workflows.

With a proven track record of improving application performance by ~20% and managing end-to-end CI/CD deployments, I focus on delivering production-grade solutions across Web, Android, and iOS while consistently leading code reviews and mentoring developers.`,
  location: 'Current: Pune, India',
  email: 'vaibhavswable@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vaibhavwable/',
  github: 'https://github.com/wablevaibhav',
  instagram: 'https://www.instagram.com/_vaibhav.wable/',
  portfolio: 'https://wablevaibhav.github.io',
  resumeUrl: 'https://drive.google.com/file/d/1g-ByJOlQpbyOyXkfXDYkHIjTGjKdpfc3/view?usp=sharing',
};

export const skills = {
  languages: [
    { name: 'Dart / Flutter', level: 95, icon: '🎯', color: '#54C5F8' },
    { name: 'React Native', level: 90, icon: '⚛️', color: '#61DAFB' },
    { name: 'TypeScript / JS', level: 88, icon: '⚡', color: '#3178C6' },
    { name: 'Kotlin / Java', level: 80, icon: '🤖', color: '#7F52FF' },
    { name: 'Node.js', level: 85, icon: '🟢', color: '#3C873A' },
    { name: 'C / C++', level: 75, icon: '⚙️', color: '#555555' },
    { name: 'HTML / CSS', level: 90, icon: '🌐', color: '#E34F26' },
  ],
  expertise: [
    {
      category: 'Frontend & Mobile',
      icon: '📱',
      color: '#60a5fa',
      skills: ['React Native', 'Flutter', 'Expo', 'Next.js', 'Material UI'],
    },
    {
      category: 'Backend Architecture',
      icon: '☁️',
      color: '#818cf8',
      skills: ['Node.js', 'Java', 'Kotlin', 'Dart', 'PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      category: 'Cloud & Infrastructure',
      icon: '⚡',
      color: '#2dd4bf',
      skills: ['AWS', 'Azure', 'Firebase', 'CI/CD Pipelines'],
    },
    {
      category: 'DevOps & Tools',
      icon: '🛠️',
      color: '#f472b6',
      skills: ['Git / GitHub', 'GitHub Actions', 'Jenkins', 'Codemagic', 'JIRA', 'Docker'],
    },
    {
      category: 'AI-Assisted Dev',
      icon: '🤖',
      color: '#fb923c',
      skills: ['ChatGPT', 'GitHub Copilot', 'Cursor', 'Claude Code', 'Rapid Prototyping'],
    },
  ],
};

export const experiences = [
  {
    id: 'centralogic',
    company: 'CentraLogic',
    role: 'Software Engineer',
    period: 'Jan 2024 – Present',
    duration: 'Current',
    type: 'Full-time',
    location: 'Pune, India',
    color: '#60a5fa',
    highlights: [
      'Developed and optimized cross-platform applications using Flutter and React Native, improving performance by ~20%.',
      'Managed end-to-end deployments across Web, Android, and iOS using CI/CD pipelines (GitHub Actions, Codemagic, Jenkins), reducing release time by 20%.',
      'Built modern web applications using Next.js and mobile apps using Expo.',
      'Designed reusable UI components and scalable architecture, reducing development effort and improving consistency across applications.',
      'Led PR reviews, mentored team members, and ensured code quality standards.',
      'Leveraged AI tools (ChatGPT, GitHub Copilot, Cursor, Claude Code) to accelerate development and debugging.',
    ],
    tech: ['Flutter', 'React Native', 'Next.js', 'Expo', 'CI/CD', 'GitHub Actions', 'Jenkins', 'AI Workflows'],
  },
  {
    id: 'rootkit',
    company: 'RootKit.exe MIT-WPU',
    role: 'Android Developer Intern',
    period: 'Jan 2023 – April 2023',
    duration: '4 months',
    type: 'Internship',
    location: 'Pune, India',
    color: '#818cf8',
    highlights: [
      'Improved application performance and resolved critical bugs, enhancing usability for MIT-WPU students.',
      'Developed features using Kotlin and XML for student engagement.',
    ],
    tech: ['Kotlin', 'Android SDK', 'XML', 'Mobile UX', 'Debugging'],
  },
];

export const projects = [
  {
    id: 'live-tracking',
    title: 'Real-Time Live Tracking System',
    category: 'Flutter · Firebase',
    description: 'Production-grade live tracking feature integrated into the CentraLogic platform. Supports real-time GPS location updates, route visualization, and delivery status management using Firebase and Google Maps SDK.',
    longDescription: 'Built the core real-time tracking module using Firebase Realtime Database for sub-second location updates. Implemented Kalman filter smoothing for GPS accuracy, geofencing for zone-based alerts, and a custom Google Maps layer for route playback.',
    tech: ['Flutter', 'Firebase Realtime DB', 'Google Maps SDK', 'Dart Isolates', 'Background Services'],
    features: ['Sub-second location updates', 'Route visualization & playback', 'Geofencing & zone alerts', 'Background GPS tracking', 'Battery-optimized polling'],
    color: '#fb923c',
    gradient: 'linear-gradient(135deg, #3a1f0d, #2d3a1a)',
    emoji: '📍',
    status: 'Shipped',
    links: { github: null, live: null },
  },
  {
    id: 'ai-tutor',
    title: 'AI Hybrid Tutoring System',
    category: 'AI Platform · In Progress',
    description: 'An AI-first educational platform combining a Flutter mobile app with an LLM-powered tutoring backend. Uses AI agent orchestration to generate personalized study plans, quizzes, and explain concepts adaptively.',
    longDescription: 'Architecture built around a multi-agent AI orchestrator that routes student queries to specialized sub-agents (concept explainer, quiz generator, progress tracker). The Flutter app communicates with a Node.js middleware layer that manages LLM calls, context windows, and response streaming.',
    tech: ['Flutter', 'Node.js', 'LLM APIs', 'AI Agents', 'PostgreSQL', 'Firebase', 'Python'],
    features: ['AI agent orchestration', 'Personalized study plans', 'Adaptive quiz generation', 'Concept explanation with visuals', 'Progress analytics'],
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #0d3a26, #1a3050)',
    emoji: '🤖',
    status: 'In Progress',
    links: { github: null, live: null },
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    category: 'Web · React',
    description: 'This very site — migrated from Flutter Web to React with modern design principles: glassmorphism, scroll-driven animations, micro-interactions, and a dark-first aesthetic.',
    longDescription: 'Architected to be a premium, cinematic viewing experience. Built upon a unified design system with customized tokens, utilizing React components and Framer Motion for high-fidelity animations.',
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS', 'React Icons'],
    features: ['Scroll-driven animations', 'Glassmorphism design', 'Interactive skill charts', 'GitHub integration', 'Mobile-first responsive'],
    color: '#f472b6',
    gradient: 'linear-gradient(135deg, #3a1029, #1a1640)',
    emoji: '✨',
    status: 'Live',
    links: { github: 'https://github.com/wablevaibhav', live: '#' },
  },
];

export const education = [
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Indira College of Commerce & Science',
    location: 'Pune, India',
    year: 'Sept 2022 – Sept 2023',
    icon: '🎓',
    color: '#60a5fa',
  },
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Modern College of Arts, Science & Commerce',
    location: 'Pune, India',
    year: 'Jun 2019 – Jul 2022',
    icon: '📚',
    color: '#818cf8',
  },
];

export const certifications = [
  {
    title: 'Google Cloud DevOps Engineer Preparation',
    issuer: 'Google Cloud',
    icon: '☁️',
    color: '#4285F4',
  },
  {
    title: 'Learning Django',
    issuer: 'LinkedIn Learning',
    icon: '🐍',
    color: '#0A66C2',
  },
  {
    title: 'Xamarin.Forms Essential Training',
    issuer: 'LinkedIn Learning',
    icon: '📱',
    color: '#3498DB',
  },
];
