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
  // TODO: verify the YouTube URL (@codewithwable).
  youtube: "https://www.youtube.com/@codewithwable",
  // TODO: verify the blog URL (codewithwable.blogspot.com).
  blog: "https://codewithwable.blogspot.com",
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

// Display order matters. featured: true → rendered as a larger card (top 3).
export const projects = [
  {
    id: "codemind",
    featured: true,
    // TODO: add screenshot at public/projects/codemind.webp (1200×750) and set image to "/projects/codemind.webp".
    image: null,
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
    links: {
      repos: [{ label: "Repository", url: "https://github.com/wablevaibhav/CodeMind" }],
      live: null,
    },
  },
  {
    id: "gitmcp",
    featured: true,
    // TODO: add screenshot at public/projects/gitmcp.webp (1200×750) and set image to "/projects/gitmcp.webp".
    image: null,
    title: "GitMCP: GitHub MCP Server",
    category: "Python · MCP · Pydantic",
    description:
      "Open-source MCP server that lets Claude and other MCP clients read GitHub repos, issues, PRs and commits through 18 validated tools, with writes off by default.",
    longDescription:
      "A Python MCP server that adapts the GitHub REST API into 18 tools an AI assistant can discover and call: 14 read-only tools plus 4 opt-in write tools, each with a strict Pydantic input schema. Transient failures (429, 5xx, timeouts) are retried within a hard budget while auth, permission and 404 errors never are. Safe by default: writes off, token never logged or returned, response sizes capped. Works with Claude Code and Claude Desktop over stdio, public repos need no token, and it is listed on mcpservers.org.",
    tech: ["Python", "MCP Python SDK", "Pydantic", "GitHub REST API", "pytest", "Ruff", "mypy"],
    features: [
      "14 read-only + 4 opt-in write tools",
      "Strict Pydantic input schemas on every tool",
      "Bounded retries for 429 / 5xx / timeouts",
      "Safe defaults: writes off, token never logged",
      "Claude Code & Claude Desktop over stdio",
      "112 tests; ruff and mypy --strict clean",
      "Listed on mcpservers.org",
    ],
    color: "#a78bfa",
    gradient: "linear-gradient(135deg, #1f1640, #0d2a3a)",
    emoji: "🔌",
    status: "Open Source",
    links: {
      repos: [{ label: "Repository", url: "https://github.com/wablevaibhav/gitmcp" }],
      listing: { label: "mcpservers.org", url: "https://mcpservers.org/servers/wablevaibhav/gitmcp" },
      live: null,
    },
  },
  {
    id: "expense-tracker",
    featured: true,
    // TODO: add screenshot at public/projects/expense-tracker.webp (1200×750) and set image to "/projects/expense-tracker.webp".
    image: null,
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
    links: {
      // TODO: add the Expense Tracker GitHub repo URL (or leave empty if private).
      repos: [],
      live: "https://expense-tracker-wablevaibhav.netlify.app/",
    },
  },
  {
    id: "child-tracker",
    // TODO: add screenshot at public/projects/child-tracker.webp (1200×750) and set image to "/projects/child-tracker.webp".
    image: null,
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
    links: {
      // TODO: add the Child Tracker GitHub repo and/or a live / Play Store link.
      repos: [],
      live: null,
    },
  },
  {
    id: "job-tracker",
    // TODO: add screenshot at public/projects/job-tracker.webp (1200×750) and set image to "/projects/job-tracker.webp".
    image: null,
    title: "Job Application Tracker (API + UI)",
    category: "Spring Boot · React · TypeScript",
    description:
      "Full-stack job tracker: a Java 21 / Spring Boot 3 REST API with JWT auth on PostgreSQL, plus a React + TypeScript dashboard with filtering and live stats.",
    longDescription:
      "A full-stack app for tracking job applications. The API is built on Java 21 and Spring Boot 3 with Spring Security JWT authentication, Hibernate/JPA data access on PostgreSQL, pagination and filtering endpoints, JUnit/MockMvc test coverage, OpenAPI documentation and a Docker Compose setup for local development. The UI is a React 18 + TypeScript (Vite) dashboard with authenticated login, status-based filtering, inline application status updates and live stats.",
    tech: ["Java 21", "Spring Boot 3", "Spring Security", "Hibernate/JPA", "PostgreSQL", "React 18", "TypeScript", "Vite", "JUnit", "OpenAPI", "Docker Compose"],
    features: [
      "JWT authentication (Spring Security)",
      "Hibernate/JPA on PostgreSQL",
      "Pagination and filtering",
      "React + TypeScript dashboard with live stats",
      "Inline status updates",
      "JUnit/MockMvc tests, OpenAPI docs & Docker Compose",
    ],
    color: "#ED8B00",
    gradient: "linear-gradient(135deg, #3a2a0d, #241a3a)",
    emoji: "🧾",
    status: "Shipped",
    links: {
      repos: [
        { label: "API repo", url: "https://github.com/wablevaibhav/job-tracker-api" },
        { label: "UI repo", url: "https://github.com/wablevaibhav/job-tracker-ui" },
      ],
      live: null,
    },
  },
  {
    id: "order-platform",
    // TODO: add screenshot at public/projects/order-platform.webp (1200×750) and set image to "/projects/order-platform.webp".
    image: null,
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
    links: {
      repos: [{ label: "Repository", url: "https://github.com/wablevaibhav/order-platform" }],
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

// ── Services (for freelance clients) — no pricing on purpose ──────────────────
export const services = [
  {
    id: "mobile",
    title: "Mobile Apps",
    icon: "mobile",
    desc: "Cross-platform apps in Flutter or React Native, taken all the way through Play Store and App Store delivery.",
    tags: ["Flutter", "React Native", "Play Store", "App Store"],
  },
  {
    id: "web",
    title: "Web Apps",
    icon: "web",
    desc: "Fast, SEO-friendly web apps and dashboards built with Next.js and React.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: "backend",
    desc: "Secure REST APIs in Node.js, deployed on AWS, ready for your mobile and web clients.",
    tags: ["Node.js", "Express", "AWS"],
  },
  {
    id: "ai",
    title: "AI Features",
    icon: "ai",
    desc: "LLM features (OpenAI, Claude) added to the apps you already have, with validated, structured outputs.",
    tags: ["OpenAI", "Claude", "LLM integration"],
  },
];

export const processSteps = ["Discuss", "Scope & Quote", "Build with Weekly Demos", "Launch & Support"];

// ── Testimonials ──────────────────────────────────────────────────────────────
// The section only renders when this array is non-empty. Real quotes only.
// Shape: { quote: "", name: "", role: "", company: "", link: "" }
// TODO: add real testimonials from clients or colleagues (with their permission).
export const testimonials = [];

