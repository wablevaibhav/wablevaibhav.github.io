// ── Portfolio Data ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const personalInfo = {
  name: "Vaibhav Wable",
  title: "Full Stack Developer",
  availability: "Open to full-time roles & freelance work",
  taglines: [
    "Flutter & React Native Developer",
    "AI-Integrated Product Builder",
    "MERN Stack Developer",
    "LLM API Integration (OpenAI, Claude, Gemini)",
    "Next.js Engineer",
    "Performance Optimization Expert",
  ],
  about: `Flutter & React Native developer with 3+ years of experience building and shipping cross-platform mobile apps in production and freelance work, now building AI-integrated products using LLM APIs (OpenAI, Claude, Gemini). I currently work at CentraLogic, developing secure Node.js and Express.js backend services on AWS (including Lambda) with PostgreSQL and REST APIs — powering features like real-time driver tracking with the Google Maps API — while leading Flutter and React Native development end-to-end.

I'm also experienced as a MERN Stack / JavaScript developer, and bring hands-on experience in LLM API integration, prompt engineering, and agentic AI workflows (Claude, Cursor, GitHub Copilot). I've delivered 20%+ performance gains, built CI/CD pipelines that cut deployment time by 20%, and introduced AI-assisted development workflows that cut dev time by 30%. I'm currently open to full-time roles, and also take on freelance and contract work — Flutter / React Native apps, Next.js web apps, API integrations, and end-to-end Play Store & App Store delivery.`,
  location: "Pune, India",
  email: "vaibhavswable@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaibhavwable/",
  github: "https://github.com/wablevaibhav",
  instagram: "https://www.instagram.com/thevaibhavbuilds",
  portfolio: "https://wablevaibhav.github.io",
  resumeUrl:
    "https://drive.google.com/file/d/1TAnrlHXeZAtv5paL6gHNlQy-rFcymD1C/view?usp=sharing",
};

export const skills = {
  languages: [
    { name: "Dart / Flutter", level: 95, icon: "🎯", color: "#54C5F8" },
    { name: "React Native", level: 90, icon: "⚛️", color: "#61DAFB" },
    { name: "TypeScript / JS", level: 88, icon: "⚡", color: "#3178C6" },
    { name: "Node.js", level: 85, icon: "🟢", color: "#3C873A" },
    { name: "Kotlin / Java", level: 80, icon: "🤖", color: "#7F52FF" },
    { name: "PHP", level: 78, icon: "🐘", color: "#777BB4" },
    { name: "HTML / CSS", level: 90, icon: "🌐", color: "#E34F26" },
  ],
  expertise: [
    {
      category: "Mobile & Web",
      icon: "📱",
      color: "#60a5fa",
      skills: ["Flutter", "React Native", "Expo", "ReactJS", "Next.js", "Kotlin / Java"],
    },
    {
      category: "AI & LLM",
      icon: "🤖",
      color: "#fb923c",
      skills: [
        "LLM API Integration (OpenAI, Claude, Gemini)",
        "Prompt Engineering",
        "Agentic AI Workflows",
        "GitHub Copilot",
        "Cursor",
      ],
    },
    {
      category: "Backend & Data",
      icon: "☁️",
      color: "#818cf8",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Google Maps API",
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "⚡",
      color: "#3b82f6",
      skills: ["AWS (Lambda)", "Docker", "CI/CD", "GitHub Actions", "AWS Amplify", "CodeMagic"],
    },
    {
      category: "Practices",
      icon: "🛠️",
      color: "#f472b6",
      skills: [
        "Clean Architecture",
        "Agile / Scrum",
        "Code Reviews",
        "App Store & Play Store Deployment",
        "Git Workflows",
      ],
    },
  ],
};

export const experiences = [
  {
    id: "centralogic",
    company: "CentraLogic",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    duration: "Current",
    type: "Full-time",
    location: "Pune, India",
    color: "#60a5fa",
    highlights: [
      "Promoted from Software Engineer Trainee (Jan–Jun 2024) to Software Engineer (Jun 2024 – Present).",
      "Develop and maintain cross-platform mobile applications using Flutter and React Native in production, integrating LLM APIs (OpenAI, Claude, Gemini) into product features; delivered 20%+ performance gains.",
      "Build secure Node.js and Express.js backend services on AWS (including AWS Lambda) with PostgreSQL and REST APIs, powering critical features such as real-time driver tracking with the Google Maps API.",
      "Designed a modular architecture with reusable Flutter widget libraries to improve code reuse and speed up feature development.",
      "Built CI/CD pipelines with AWS Amplify and CodeMagic that cut deployment time by 20%; introduced AI-assisted development workflows (Claude, Cursor, GitHub Copilot) that cut development time by 30%.",
      "Own the App Store and Play Store lifecycle (signing, builds, release management, submissions, version upgrades) and resolve production issues end-to-end.",
      "Conduct peer code reviews and mentor junior engineers in Agile/Scrum practices.",
    ],
    tech: [
      "Flutter",
      "React Native",
      "Node.js",
      "Express.js",
      "AWS Lambda",
      "PostgreSQL",
      "LLM APIs",
      "CI/CD",
    ],
  },
  {
    id: "freelance",
    company: "Self-employed",
    role: "Freelance Software Developer",
    period: "Aug 2021 – Dec 2023",
    duration: "2+ years, part-time/contract",
    type: "Freelance",
    location: "Remote / Pune, India",
    color: "#3b82f6",
    highlights: [
      "Developed and deployed Flutter and React Native applications tailored to client requirements, integrating REST APIs and Firebase.",
      "Built responsive web apps with Next.js and React, independently resolving production issues.",
      "Delivered client apps end-to-end: requirements → UI → APIs → deployment → support.",
    ],
    tech: ["Flutter", "React Native", "Next.js", "Firebase", "REST APIs"],
  },
  {
    id: "rootkit",
    company: "RootKit Consultancy Services",
    role: "Android Developer (Internship)",
    period: "Jan 2023 – Apr 2023",
    duration: "4 months",
    type: "Internship",
    location: "Pune, India",
    color: "#818cf8",
    highlights: [
      "Worked on Android application development using Java/Kotlin.",
      "Gained experience in debugging, backend integration, and performance optimization.",
    ],
    tech: ["Java", "Kotlin", "Android SDK", "Debugging"],
  },
];

export const projects = [
  {
    id: "taskflow",
    title: "TaskFlow — PHP REST API",
    category: "PHP · MySQL · REST API",
    description:
      "Task-management REST API built in PHP 8 with PDO, featuring token-based auth (HMAC-signed), full CRUD with per-user scoping, and input validation with proper HTTP status codes.",
    longDescription:
      "A backend-first project demonstrating the full REST API lifecycle in PHP: HMAC-signed token authentication, per-user data scoping on every CRUD operation, and structured input validation with correct HTTP status codes throughout. Runs on SQLite for local development and MySQL in production via environment-based config, showing a clean separation between app logic and data layer.",
    tech: ["PHP 8", "PDO", "MySQL", "SQLite", "REST API", "HMAC Auth"],
    features: [
      "HMAC-signed token authentication",
      "Full CRUD with per-user scoping",
      "Input validation with proper HTTP status codes",
      "SQLite for local dev, MySQL in production",
      "Environment-based config",
    ],
    color: "#777BB4",
    gradient: "linear-gradient(135deg, #241a3a, #1a2040)",
    emoji: "🗂️",
    status: "Shipped",
    links: { github: null, live: null },
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker — Smart Finance App",
    category: "Flutter · Generative AI",
    description:
      "Personal finance and expense-tracking mobile app with AI-assisted categorization and spending insights.",
    longDescription:
      "A Flutter mobile app for personal finance management that uses generative AI to automatically categorize expenses and surface spending insights, reducing manual entry and helping users understand spending patterns at a glance. In active development.",
    tech: ["Flutter", "Generative AI", "Dart", "Mobile UX"],
    features: [
      "AI-assisted expense categorization",
      "Spending insights & trends",
      "Clean transaction entry flow",
      "Cross-platform (Android & iOS)",
    ],
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #0d3a1f, #1a2d1a)",
    emoji: "💰",
    status: "In Progress",
    links: { github: null, live: "https://expense-tracker-wablevaibhav.netlify.app/" },
  },
  {
    id: "hrms",
    title: "HRMS — Human Resource Management System",
    category: "Flutter · Node.js",
    description:
      "HRMS mobile app covering onboarding, attendance, and leave management for small teams.",
    longDescription:
      "A Flutter mobile app backed by a Node.js API, built to handle the essentials of small-team HR operations — employee onboarding flows, attendance tracking, and leave request/approval management.",
    tech: ["Flutter", "Node.js", "REST API", "MongoDB"],
    features: [
      "Employee onboarding flow",
      "Attendance tracking",
      "Leave request & approval management",
      "Node.js backend API",
    ],
    color: "#f59e0b",
    gradient: "linear-gradient(135deg, #3a2a0d, #2d1a1a)",
    emoji: "🧑‍💼",
    status: "Shipped",
    links: { github: null, live: null },
  },
  {
    id: "live-tracking",
    title: "Real-Time Live Tracking System",
    category: "Flutter · Firebase",
    description:
      "Production-grade live tracking feature integrated into the CentraLogic platform. Supports real-time GPS location updates, route visualization, and delivery status management using Firebase and Google Maps SDK.",
    longDescription:
      "Built the core real-time tracking module using Firebase Realtime Database for sub-second location updates. Implemented Kalman filter smoothing for GPS accuracy, geofencing for zone-based alerts, and a custom Google Maps layer for route playback.",
    tech: [
      "Flutter",
      "Firebase Realtime DB",
      "Google Maps SDK",
      "Dart Isolates",
      "Background Services",
    ],
    features: [
      "Sub-second location updates",
      "Route visualization & playback",
      "Geofencing & zone alerts",
      "Background GPS tracking",
      "Battery-optimized polling",
    ],
    color: "#fb923c",
    gradient: "linear-gradient(135deg, #3a1f0d, #2d3a1a)",
    emoji: "📍",
    status: "Shipped",
    links: { github: null, live: null },
  },
  {
    id: "ai-tutor",
    title: "AI Hybrid Tutoring System",
    category: "AI Platform · In Progress",
    description:
      "An AI-first educational platform combining a Flutter mobile app with an LLM-powered tutoring backend. Uses AI agent orchestration to generate personalized study plans, quizzes, and explain concepts adaptively.",
    longDescription:
      "Architecture built around a multi-agent AI orchestrator that routes student queries to specialized sub-agents (concept explainer, quiz generator, progress tracker). The Flutter app communicates with a Node.js middleware layer that manages LLM calls, context windows, and response streaming.",
    tech: [
      "Flutter",
      "Node.js",
      "LLM APIs",
      "AI Agents",
      "PostgreSQL",
      "Firebase",
      "Python",
    ],
    features: [
      "AI agent orchestration",
      "Personalized study plans",
      "Adaptive quiz generation",
      "Concept explanation with visuals",
      "Progress analytics",
    ],
    color: "#60a5fa",
    gradient: "linear-gradient(135deg, #0d3a26, #1a3050)",
    emoji: "🤖",
    status: "In Progress",
    links: { github: null, live: null },
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    category: "Web · React",
    description:
      "This very site — migrated from Flutter Web to React with modern design principles: glassmorphism, scroll-driven animations, micro-interactions, and a dark-first aesthetic.",
    longDescription:
      "Architected to be a premium, cinematic viewing experience. Built upon a unified design system with customized tokens, utilizing React components and Framer Motion for high-fidelity animations.",
    tech: ["React", "Vite", "Framer Motion", "Tailwind CSS", "React Icons"],
    features: [
      "Scroll-driven animations",
      "Glassmorphism design",
      "Interactive skill charts",
      "GitHub integration",
      "Mobile-first responsive",
    ],
    color: "#f472b6",
    gradient: "linear-gradient(135deg, #3a1029, #1a1640)",
    emoji: "✨",
    status: "Live",
    links: {
      github: "https://github.com/wablevaibhav/wablevaibhav.github.io",
      live: "https://wablevaibhav.github.io",
    },
  },
  {
    id: "linkedin-clone",
    title: "LinkedIn Clone",
    category: "Android · Kotlin",
    description: "LinkedIn-inspired Android app built with Kotlin.",
    longDescription:
      "A feature-rich LinkedIn clone showcasing native Android development — profile views, feed interactions, and Material Design UI patterns built entirely in Kotlin.",
    tech: ["Kotlin", "Android SDK", "XML", "Material Design"],
    features: [
      "Profile & feed screens",
      "LinkedIn-inspired UI",
      "Native Android architecture",
      "Material Design components",
    ],
    color: "#0A66C2",
    gradient: "linear-gradient(135deg, #0d1a3a, #1a1640)",
    emoji: "💼",
    status: "Open Source",
    links: { github: "https://github.com/wablevaibhav/LinkedIn", live: null },
  },
  {
    id: "foodrunner",
    title: "FoodRunner",
    category: "Android · Kotlin",
    description: "Food delivery app built for an Internshala assignment.",
    longDescription:
      "A Kotlin Android app demonstrating food ordering workflows — menu browsing, cart management, and order placement with a clean mobile UX.",
    tech: ["Kotlin", "Android SDK", "XML", "REST APIs"],
    features: [
      "Menu browsing & search",
      "Cart & checkout flow",
      "Order tracking UI",
      "Responsive mobile layout",
    ],
    color: "#f97316",
    gradient: "linear-gradient(135deg, #3a1f0d, #2d1a0d)",
    emoji: "🍔",
    status: "Open Source",
    links: { github: "https://github.com/wablevaibhav/FoodRunner", live: null },
  },
  {
    id: "resume-builder",
    title: "Resume Builder",
    category: "Web · Django",
    description: "Resume builder web app using the Django framework.",
    longDescription:
      "A Django-powered resume builder that lets users create, edit, and export professional resumes through a structured web form with template rendering.",
    tech: ["Python", "Django", "HTML", "CSS", "SQLite"],
    features: [
      "Multi-section resume forms",
      "Template-based PDF export",
      "User session management",
      "CRUD resume operations",
    ],
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #0d3a26, #1a3050)",
    emoji: "📄",
    status: "Open Source",
    links: {
      github: "https://github.com/wablevaibhav/resume_builder",
      live: null,
    },
  },
  {
    id: "folkchat",
    title: "FolkChat",
    category: "Android · Java",
    description: "Folk messaging app for real-time chat.",
    longDescription:
      "An Android messaging application built in Java — user authentication, chat threads, and real-time message delivery for peer-to-peer communication.",
    tech: ["Java", "Android SDK", "Firebase", "XML"],
    features: [
      "User registration & login",
      "Real-time messaging",
      "Chat thread management",
      "Push notification support",
    ],
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #1a0d3a, #2d1a40)",
    emoji: "💬",
    status: "Open Source",
    links: { github: "https://github.com/wablevaibhav/FolkChat", live: null },
  },
  {
    id: "claryft-components",
    title: "Claryft Components",
    category: "Flutter · Dart",
    description: "Custom reusable Flutter component library for Claryft.",
    longDescription:
      "A Dart/Flutter package of custom UI components — buttons, cards, inputs, and layout widgets designed for consistent branding across Claryft mobile apps.",
    tech: ["Dart", "Flutter", "Widget Library", "Material Design"],
    features: [
      "Reusable UI widgets",
      "Consistent design tokens",
      "Composable component API",
      "Cross-app theming support",
    ],
    color: "#54C5F8",
    gradient: "linear-gradient(135deg, #0d2a3a, #1a2040)",
    emoji: "🧩",
    status: "Open Source",
    links: {
      github: "https://github.com/wablevaibhav/claryft_components",
      live: null,
    },
  },
];

export const education = [
  {
    degree: "M.Sc. (Computers)",
    institution: "Indira College of Commerce and Science, Pune",
    location: "Pune, India",
    year: "2024 — 80%",
    icon: "🎓",
    color: "#60a5fa",
  },
  {
    degree: "B.Sc., Computer Science and Technology",
    institution: "Pune University",
    location: "Pune, India",
    year: "2022 — 76%",
    icon: "📚",
    color: "#818cf8",
  },
];

export const certifications = [
  {
    title: "Building with the Claude API",
    issuer: "Anthropic",
    icon: "🤖",
    color: "#D97757",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    icon: "⚡",
    color: "#D97757",
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "AWS",
    icon: "☁️",
    color: "#FF9900",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    icon: "⚛️",
    color: "#0A66C2",
  },
  {
    title: "Advanced Programming in Kotlin",
    issuer: "Meta",
    icon: "🤖",
    color: "#0A66C2",
  },
  {
    title: "Agile Project Management",
    issuer: "Google",
    icon: "📋",
    color: "#4285F4",
  },
];
