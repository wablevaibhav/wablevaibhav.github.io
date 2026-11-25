// ── Portfolio Data ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.

// ── Experience duration (computed, never hardcoded) ───────────────────────────
// CentraLogic start date. Everything that mentions "years of experience" derives
// from this so the site never goes out of date.
export const CAREER_START = { year: 2024, month: 1 }; // Jan 2024

export function monthsSince({ year, month }, now = new Date()) {
  return Math.max(0, (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month));
}

export function formatDuration(totalMonths) {
  const y = Math.floor(totalMonths / 12);
  const m = totalMonths % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo${m > 1 ? "s" : ""}`);
  return parts.join(" ") || "< 1 mo";
}

export const centraLogicMonths = monthsSince(CAREER_START);
export const centraLogicYears = Math.floor(centraLogicMonths / 12);

// The one framing used everywhere on the site.
export const experienceSummary = `${centraLogicYears}+ years at CentraLogic (since Jan 2024) + Android internship (2023)`;

export const personalInfo = {
  name: "Vaibhav Wable",
  title: "Mobile & Full-Stack Engineer",
  availability: "Open to full-time roles & freelance work · Pune / Remote",
  taglines: [
    "Flutter & React Native Engineer",
    "Next.js + Node.js Full-Stack",
    "Shipping LLM features in real apps",
  ],
  about: `Mobile and full-stack engineer working across Flutter, React Native, Next.js and Node.js, with a focus on shipping LLM features in real apps. ${experienceSummary}. At CentraLogic I profile and optimize React Native and Flutter apps in production, set up CI/CD pipelines on AWS Amplify and Codemagic, and ship LLM features (OpenAI, Claude) alongside secure Node.js/Express REST APIs on AWS.

Outside work I build AI developer tooling: CodeMind, an open-source local AI coding assistant (Python, FastAPI, Ollama, Pydantic) with 111 tests, and GitMCP, an open-source GitHub MCP server listed on mcpservers.org. I also build Flutter apps like an AI-assisted expense tracker and a child safety tracker, a Job Application Tracker (API + UI), and a Spring Boot and Kafka order platform. Based in Pune and open to on-site, hybrid or remote roles.`,
  location: "Pune, India",
  email: "vaibhavswable@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaibhavwable/",
  github: "https://github.com/wablevaibhav",
  instagram: "https://www.instagram.com/thevaibhavbuilds",
  portfolio: "https://wablevaibhav.github.io",
  // TODO: replace public/resume.pdf with the Mobile / Full-Stack resume (keep the same path).
  resumeUrl: "/resume.pdf",
};

// Quick stats shown in the About section.
export const stats = [
  { value: `${centraLogicYears}+`, label: "Years" },
  // TODO: confirm "10+ shipped" is accurate (carried over from the previous site).
  { value: "10+", label: "Shipped" },
  { value: "M.Sc.", label: "CS" },
];

// Grouped skill chips, in display order. No proficiency percentages.
// TODO: Kubernetes, Jenkins, Azure and GraphQL were removed because no project on
// the site demonstrates them. Confirm, or add a project that shows them and re-add.
export const skillGroups = [
  {
    category: "Mobile",
    icon: "mobile",
    color: "#60a5fa",
    skills: ["Flutter", "Dart", "React Native", "Kotlin", "Android SDK", "Firebase", "Google Maps API", "Play Store & App Store delivery"],
  },
  {
    category: "Web",
    icon: "web",
    color: "#38bdf8",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "backend",
    color: "#818cf8",
    skills: ["Node.js", "Express.js", "REST APIs", "FastAPI", "PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL"],
  },
  {
    category: "AI / LLM",
    icon: "ai",
    color: "#fb923c",
    skills: [
      "LLM API Integration (OpenAI, Claude, Gemini)",
      "MCP Servers",
      "Prompt Engineering",
      "Local LLMs (Ollama)",
      "Pydantic / JSON Schema validation",
      "Python",
      "Agentic AI Workflows",
      "Claude Code",
      "Cursor",
    ],
  },
  {
    category: "Cloud / DevOps",
    icon: "cloud",
    color: "#3b82f6",
    skills: ["AWS (Lambda, Amplify)", "Codemagic", "CI/CD", "GitHub Actions", "Docker"],
  },
  {
    category: "Java",
    icon: "java",
    color: "#ED8B00",
    skills: ["Java 17/21", "Spring Boot", "Spring Data JPA", "Hibernate", "Spring Security (JWT)", "Apache Kafka", "JUnit 5 / Mockito"],
  },
];

export const experiences = [
  {
    id: "centralogic",
    company: "CentraLogic",
    role: "Software Engineer",
    period: "Jan 2024 – Present",
    duration: formatDuration(centraLogicMonths),
    type: "Full-time",
    location: "Pune, India · On-site",
    color: "#60a5fa",
    highlights: [
      "Flutter and React Native engineer on production mobile apps and Node.js/AWS backends.",
      "Profiled and optimized React Native and Flutter apps in production.",
      "Set up CI/CD pipelines on AWS Amplify and Codemagic.",
      "Shipped LLM features (OpenAI, Claude) into product flows and built secure Node.js/Express REST APIs on AWS.",
    ],
    tech: [
      "React Native",
      "Flutter",
      "Node.js",
      "Express.js",
      "AWS Lambda",
      "AWS Amplify",
      "Codemagic",
      "LLM APIs",
    ],
  },
  {
    id: "rootkit",
    company: "RootKit Consultancy Services",
    role: "Android Developer (Internship)",
    period: "Jan 2023 – Apr 2023",
    duration: "4 months",
    type: "Internship",
    location: "Pune, India · Remote",
    color: "#818cf8",
    highlights: [
      "Worked on Android application development using Java/Kotlin.",
      "Gained experience in debugging, backend integration, and performance optimization.",
      "Assisted in improving application stability and resolving technical issues.",
    ],
    tech: ["Java", "Kotlin", "Android SDK", "Debugging", "WordPress"],
  },
];

export const projects = [
  {
    id: "codemind",
    title: "CodeMind — Local AI Coding Assistant",
    category: "Python · FastAPI · Ollama",
    description:
      "Privacy-first, open-source AI coding assistant running open-source LLMs locally via Ollama, with Pydantic-validated responses and 111 tests.",
    longDescription:
      "A privacy-first AI coding assistant that runs open-source LLMs entirely on your own machine via Ollama: no cloud APIs, no API keys, and code never leaves the device. ChatGPT-style web UI with streaming responses, conversation history and six modes (Ask, Debug, Explain, Generate, Review, Learn). Every answer is validated against a Pydantic/JSON Schema contract, with automatic retry and schema-guided repair when the model returns malformed JSON. Four local models were benchmarked on a 4 GB laptop GPU; the default 3B model answers in about 2–6 s.",
    tech: ["Python", "FastAPI", "Pydantic v2", "Ollama", "httpx", "pytest", "Ruff", "Vanilla JS"],
    features: [
      "Six modes: Ask, Debug, Explain, Generate, Review, Learn",
      "Pydantic / JSON Schema response validation",
      "Automatic retry and schema-guided repair of malformed JSON",
      "Streaming responses & conversation history",
      "Benchmarked 4 local models; ~2–6 s on a 4 GB GPU",
      "FastAPI backend with OpenAPI docs, CLI and structured logging",
      "111 automated tests (Ollama mocked)",
    ],
    color: "#10b981",
    gradient: "linear-gradient(135deg, #0d3a2a, #1a2040)",
    emoji: "🧠",
    status: "Open Source",
    links: { github: "https://github.com/wablevaibhav/CodeMind", live: null },
  },
  {
    id: "job-tracker-api",
    title: "Job Application Tracker API",
    category: "Java · Spring Boot · PostgreSQL",
    description:
      "Java 21 / Spring Boot 3 REST API with JWT authentication, Hibernate/JPA on PostgreSQL, pagination and filtering, and full test coverage.",
    longDescription:
      "A production-style REST API for tracking job applications, built on Java 21 and Spring Boot 3 with Spring Security JWT authentication, Hibernate/JPA data access on PostgreSQL, pagination and filtering endpoints, JUnit/MockMvc test coverage, OpenAPI documentation, and a Docker Compose setup for local development.",
    tech: ["Java 21", "Spring Boot 3", "Spring Security", "Hibernate/JPA", "PostgreSQL", "JUnit", "OpenAPI", "Docker Compose"],
    features: [
      "JWT authentication (Spring Security)",
      "Hibernate/JPA on PostgreSQL",
      "Pagination and filtering",
      "JUnit/MockMvc tests",
      "OpenAPI docs & Docker Compose",
    ],
    color: "#ED8B00",
    gradient: "linear-gradient(135deg, #3a2a0d, #241a3a)",
    emoji: "🧾",
    status: "Shipped",
    links: { github: "https://github.com/wablevaibhav/job-tracker-api", live: null },
  },
  {
    id: "job-tracker-ui",
    title: "Job Tracker UI",
    category: "React · TypeScript · Vite",
    description:
      "React 18 + TypeScript (Vite) dashboard for the Job Application Tracker API, with login, status filtering, inline updates, and live stats.",
    longDescription:
      "The frontend dashboard for the Job Application Tracker API — built with React 18, TypeScript, and Vite. Supports authenticated login, status-based filtering, inline application status updates, and live stats on the dashboard.",
    tech: ["React 18", "TypeScript", "Vite"],
    features: [
      "Authenticated login flow",
      "Status filtering",
      "Inline status updates",
      "Live stats dashboard",
    ],
    color: "#61DAFB",
    gradient: "linear-gradient(135deg, #0d2a3a, #1a2040)",
    emoji: "📊",
    status: "Shipped",
    links: { github: "https://github.com/wablevaibhav/job-tracker-ui", live: null },
  },
  {
    id: "order-platform",
    title: "Order Platform",
    category: "Java · Spring Boot · Kafka",
    description:
      "Two Spring Boot microservices connected through Apache Kafka with an idempotent consumer and keyed partitions.",
    longDescription:
      "A microservices demo built around order processing — two independent Spring Boot services communicating through Apache Kafka, with an idempotent consumer, keyed partitions for ordering guarantees, PostgreSQL persistence, Docker Compose orchestration, and Mockito/JUnit test coverage.",
    tech: ["Java", "Spring Boot", "Apache Kafka", "PostgreSQL", "Docker Compose", "Mockito", "JUnit"],
    features: [
      "Two Spring Boot microservices",
      "Apache Kafka event-driven messaging",
      "Idempotent consumer & keyed partitions",
      "PostgreSQL persistence",
      "Mockito/JUnit test coverage",
    ],
    color: "#818cf8",
    gradient: "linear-gradient(135deg, #1a0d3a, #0d2a3a)",
    emoji: "📦",
    status: "Shipped",
    links: { github: "https://github.com/wablevaibhav/order-platform", live: null },
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker — Smart Finance App",
    category: "Flutter · Generative AI",
    description:
      "Personal finance and expense-tracking mobile app with AI-assisted categorization and spending insights.",
    longDescription:
      "A Flutter mobile app that helps users log, categorize and analyze daily spending. An LLM-based feature classifies expenses from short text descriptions, with interactive daily/weekly/monthly dashboards, budget alerts, and Firebase cloud sync that works offline and across devices.",
    tech: ["Flutter", "Dart", "Firebase", "REST APIs", "LLM/AI Integration", "Data Visualization", "Clean Architecture"],
    features: [
      "LLM-based smart expense categorization",
      "Interactive charts with category-wise breakdowns",
      "Budget-setting with real-time alerts",
      "Firebase cloud sync, offline-first",
      "Multiple accounts, income & expenses",
    ],
    color: "#22c55e",
    gradient: "linear-gradient(135deg, #0d3a1f, #1a2d1a)",
    emoji: "💰",
    status: "Shipped",
    links: { github: null, live: "https://expense-tracker-wablevaibhav.netlify.app/" },
  },
  {
    id: "child-tracker",
    title: "Child Tracker — Family Safety App",
    category: "Flutter · Firebase · Google Maps",
    description:
      "Cross-platform child safety app with real-time location tracking, geofenced safe zones, SOS alerts and secure parent-child pairing.",
    longDescription:
      "A Flutter app that lets parents monitor a child's real-time location on a live Google Maps view, set geofenced safe zones (home, school) that trigger instant push notifications, and receive SOS/panic alerts. Parent-child pairing uses Firebase Auth with role-based access, Firestore and Cloud Messaging provide real-time sync, and background location tracking is optimized for battery efficiency, built with Clean Architecture.",
    tech: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Cloud Messaging", "Google Maps API", "Clean Architecture"],
    features: [
      "Real-time background GPS tracking & live map",
      "Geofenced safe zones with push alerts",
      "Secure parent-child pairing (role-based access)",
      "SOS / panic button",
      "Battery-optimized location updates",
    ],
    color: "#38bdf8",
    gradient: "linear-gradient(135deg, #0d2a3a, #0d3a26)",
    emoji: "🛡️",
    status: "Shipped",
    links: { github: null, live: null },
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
    institution: "Modern College of Arts, Science and Commerce, Shivajinagar, Pune",
    location: "Pune, India",
    year: "2022 — 76%, First Class with Distinction",
    icon: "📚",
    color: "#818cf8",
  },
];

// featured: true → shown as one of the 6 compact badges; the rest sit behind "Show all".
export const certifications = [
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    icon: "🤝",
    color: "#D97757",
  },
  {
    title: "Claude Code 101",
    featured: true,
    issuer: "Anthropic",
    icon: "💻",
    color: "#D97757",
  },
  {
    title: "AI Fluency Framework & Foundations",
    featured: true,
    issuer: "Anthropic",
    icon: "🧠",
    color: "#D97757",
  },
  {
    title: "AI Agents Made Simple",
    issuer: "LinkedIn",
    icon: "🛠️",
    color: "#0A66C2",
  },
  {
    title: "Building with the Claude API",
    featured: true,
    issuer: "Anthropic",
    icon: "🤖",
    color: "#D97757",
  },
  {
    title: "Claude Code in Action",
    featured: true,
    issuer: "Anthropic",
    icon: "⚡",
    color: "#D97757",
  },
  {
    title: "AWS Cloud Technical Essentials",
    featured: true,
    issuer: "AWS",
    icon: "☁️",
    color: "#FF9900",
  },
  {
    title: "React Basics",
    featured: true,
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
