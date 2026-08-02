// ── Portfolio Data ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

export const personalInfo = {
  name: "Vaibhav Wable",
  title: "Software Engineer",
  availability: "Open to freelance & contract work",
  taglines: [
    "Cross-Platform App Developer",
    "React Native & Flutter Specialist",
    "Next.js Engineer",
    "AI-Assisted Workflow Advocate",
    "Performance Optimization Expert",
  ],
  about: `Software Engineer with 3+ years of experience building cross-platform mobile and web products. I currently work at CentraLogic, leading Flutter development, shipping Android & iOS apps, and integrating backends with Node.js, AWS, and Firebase.

I also take freelance and contract work — Flutter / React Native apps, web apps, API integrations, and end-to-end Play Store & App Store delivery. I use AI tools like Cursor and Claude to move faster on features, migrations, and code quality.`,
  location: "Pune, India",
  email: "vaibhavswable@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaibhavwable/",
  github: "https://github.com/wablevaibhav",
  instagram: "https://www.instagram.com/_vaibhav.wable/",
  portfolio: "https://wablevaibhav.github.io",
  resumeUrl:
    "https://drive.google.com/file/d/1G5uB7ISBS2VRscJ2eWWXBAxMFwdl2rVO/view?usp=sharing",
};

export const dualPath = {
  fullTime: {
    id: "full-time",
    eyebrow: "Full-time",
    title: "CentraLogic",
    subtitle: "Software Engineer",
    period: "Jan 2024 – Present",
    summary:
      "Leading Flutter & React Native production apps, store releases, and Node.js / AWS / Firebase integrations.",
    highlights: [
      "Ship cross-platform apps to Android & iOS with CI/CD",
      "Reusable UI systems and Clean Architecture / BLoC patterns",
      "PR reviews, mentoring, and team leadership",
      "AI-assisted workflows with Cursor, Claude, and Copilot",
    ],
    tech: ["Flutter", "React Native", "Next.js", "Node.js", "AWS", "Firebase"],
    accent: "#60a5fa",
    cta: { label: "View experience", href: "#experience" },
  },
  freelance: {
    id: "freelance",
    eyebrow: "Freelance",
    title: "Open for work",
    subtitle: "Mobile Application Developer",
    period: "Active · Freelanced 2021–2023",
    summary:
      "End-to-end client delivery — requirements, UI, APIs, store releases, and post-launch support.",
    highlights: [
      "Flutter / React Native apps for Android + iOS",
      "Feature work, bug fixes, performance, and store releases",
      "Firebase / REST integrations and Node.js backends",
      "Short-term contracts or ongoing product collaboration",
    ],
    tech: ["Flutter", "React Native", "Firebase", "Node.js", "CI/CD"],
    accent: "#2dd4bf",
    cta: { label: "Let's talk", href: "#contact" },
  },
};

export const skills = {
  languages: [
    { name: "Dart / Flutter", level: 95, icon: "🎯", color: "#54C5F8" },
    { name: "React Native", level: 90, icon: "⚛️", color: "#61DAFB" },
    { name: "TypeScript / JS", level: 88, icon: "⚡", color: "#3178C6" },
    { name: "Kotlin / Java", level: 80, icon: "🤖", color: "#7F52FF" },
    { name: "Node.js", level: 85, icon: "🟢", color: "#3C873A" },
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
        "Java",
        "Kotlin",
        "Dart",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      icon: "⚡",
      color: "#2dd4bf",
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
      "Developed and optimized cross-platform applications using Flutter and React Native, improving performance by ~20%.",
      "Managed end-to-end deployments across Web, Android, and iOS using CI/CD (GitHub Actions, Codemagic, Jenkins).",
      "Built modern web applications using Next.js and mobile apps using Expo.",
      "Designed reusable UI components and scalable architecture; led PR reviews and mentored teammates.",
      "Leveraged AI tools (ChatGPT, GitHub Copilot, Cursor, Claude) to accelerate development and debugging.",
    ],
    tech: [
      "Flutter",
      "React Native",
      "Next.js",
      "Expo",
      "CI/CD",
      "GitHub Actions",
      "Jenkins",
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
    color: "#2dd4bf",
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
    color: "#34d399",
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
    color: "#10b981",
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
