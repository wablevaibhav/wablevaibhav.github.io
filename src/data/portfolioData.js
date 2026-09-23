// ── Portfolio Data ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const personalInfo = {
  name: "Vaibhav Wable",
  title: "Software Engineer",
  availability: "Open to freelance & contract work",
  taglines: [
    "Backend & API Developer",
    "Cross-Platform App Developer",
    "React Native & Flutter Specialist",
    "Next.js Engineer",
    "AI-Assisted Workflow Advocate",
    "Performance Optimization Expert",
  ],
  about: `Software Engineer with 3+ years of experience building backend services, REST APIs, and cross-platform mobile & web products. I currently work at CentraLogic, developing secure Node.js APIs on AWS, leading Flutter development, and shipping Android & iOS apps that consume those APIs end-to-end.

I own the full backend lifecycle — authentication, CRUD design, database schema, and validation — demonstrated in production work with Node.js and in TaskFlow, a PHP + MySQL REST API I built with token-based auth and per-user data scoping. I also take freelance and contract work — Flutter / React Native apps, web apps, API integrations, and end-to-end Play Store & App Store delivery. I use AI tools like Cursor and Claude to move faster on features, migrations, and code quality.`,
  location: "Pune, India",
  email: "vaibhavswable@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaibhavwable/",
  github: "https://github.com/wablevaibhav",
  instagram: "https://www.instagram.com/thevaibhavbuilds",
  portfolio: "https://wablevaibhav.github.io",
  resumeUrl:
    "https://drive.google.com/file/d/1dcaNvdKNDh39fw061Og-cTyAl7pvIg40/view?usp=sharing",
};

export const skills = {
  languages: [
    { name: "Dart / Flutter", level: 95, icon: "🎯", color: "#54C5F8" },
    { name: "React Native", level: 90, icon: "⚛️", color: "#61DAFB" },
    { name: "TypeScript / JS", level: 88, icon: "⚡", color: "#3178C6" },
    { name: "Node.js", level: 85, icon: "🟢", color: "#3C873A" },
    { name: "PHP", level: 80, icon: "🐘", color: "#777BB4" },
    { name: "Kotlin / Java", level: 80, icon: "🤖", color: "#7F52FF" },
    { name: "C / C++", level: 75, icon: "⚙️", color: "#555555" },
    { name: "HTML / CSS", level: 90, icon: "🌐", color: "#E34F26" },
  ],
  expertise: [
    {
      category: "Frontend & Mobile",
      icon: "📱",
      color: "#60a5fa",
      skills: ["React Native", "Flutter", "Expo", "Next.js", "Material UI"],
    },
    {
      category: "Backend Architecture",
      icon: "☁️",
      color: "#818cf8",
      skills: [
        "Node.js",
        "PHP",
        "REST API Design",
        "JWT / HMAC Auth",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      icon: "⚡",
      color: "#3b82f6",
      skills: ["AWS", "Azure", "Firebase", "CI/CD Pipelines"],
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      color: "#f472b6",
      skills: [
        "Git / GitHub",
        "GitHub Actions",
        "Jenkins",
        "Codemagic",
        "JIRA",
        "Docker",
      ],
    },
    {
      category: "AI-Assisted Dev",
      icon: "🤖",
      color: "#fb923c",
      skills: [
        "ChatGPT",
        "GitHub Copilot",
        "Cursor",
        "Claude Code",
        "Rapid Prototyping",
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
      "Develop secure backend services and REST APIs using Node.js on AWS (including AWS Lambda), designing endpoints, data models, and integrations that power core product features.",
      "Developed and optimized cross-platform applications using Flutter and React Native that consume these backend APIs in production, improving performance by ~20%.",
      "Build CI/CD pipelines with Amplify and CodeMagic that cut deployment time by 20%; introduced AI-assisted workflows (Claude, Cursor, GitHub Copilot) that cut dev time by 30%.",
      "Built modern web applications using Next.js and mobile apps using Expo.",
      "Manage the App Store and Play Store deployment lifecycle end-to-end and own production issues.",
      "Designed reusable UI components and scalable architecture; led PR reviews and mentored teammates.",
    ],
    tech: [
      "Node.js",
      "AWS Lambda",
      "REST APIs",
      "Flutter",
      "React Native",
      "Next.js",
      "CI/CD",
      "AI Workflows",
    ],
  },
  {
    id: "freelance",
    company: "Freelance",
    role: "Mobile Application Developer",
    period: "Aug 2021 – Dec 2023",
    duration: "2+ years",
    type: "Freelance",
    location: "Remote / Pune, India",
    color: "#3b82f6",
    highlights: [
      "Delivered client apps end-to-end: requirements → UI → APIs → deployment → support.",
      "Built cross-platform mobile experiences with Flutter and native Android where needed.",
      "Integrated backends and third-party services; handled Play Store release support.",
    ],
    tech: ["Flutter", "Android", "APIs", "Firebase", "Client Delivery"],
  },
  {
    id: "rootkit",
    company: "RootKit.exe MIT-WPU",
    role: "Android Developer Intern",
    period: "Jan 2023 – April 2023",
    duration: "4 months",
    type: "Internship",
    location: "Pune, India",
    color: "#818cf8",
    highlights: [
      "Improved application performance and resolved critical bugs for MIT-WPU students.",
      "Developed features using Kotlin and XML for student engagement.",
    ],
    tech: ["Kotlin", "Android SDK", "XML", "Mobile UX", "Debugging"],
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
      "A Flutter mobile app for personal finance management that uses generative AI to automatically categorize expenses and surface spending insights, reducing manual entry and helping users understand spending patterns at a glance.",
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
    links: { github: null, live: null },
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
    degree: "M.Sc. in Computer Science",
    institution: "Indira College of Commerce & Science",
    location: "Pune, India",
    year: "Sept 2022 – Sept 2023",
    icon: "🎓",
    color: "#60a5fa",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Modern College of Arts, Science & Commerce",
    location: "Pune, India",
    year: "Jun 2019 – Jul 2022",
    icon: "📚",
    color: "#818cf8",
  },
];

export const certifications = [
  {
    title: "Google Cloud DevOps Engineer Preparation",
    issuer: "Google Cloud",
    icon: "☁️",
    color: "#4285F4",
  },
  {
    title: "Learning Django",
    issuer: "LinkedIn Learning",
    icon: "🐍",
    color: "#0A66C2",
  },
  {
    title: "Xamarin.Forms Essential Training",
    issuer: "LinkedIn Learning",
    icon: "📱",
    color: "#3498DB",
  },
];
