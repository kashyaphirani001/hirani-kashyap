import { Code2, Database, Palette, Bot, Gauge } from "lucide-react";

export const profile = {
  name: "Kashyap Hirani",
  roles: [
    "Frontend Developer",
    "React.js Engineer",
    "AI Chatbot Builder",
    "Responsive UI Design",
  ],
  tagline:
    "Software Engineer with 3.5+ years of experience building responsive, user-friendly web applications with React, TypeScript and modern tooling.",
  about: [
    "I'm a frontend developer at Brainvire Infotech who loves turning complex requirements into fast, reusable and pixel-perfect interfaces. I build scalable component systems, manage state with Zustand and Redux, and integrate REST APIs with Axios and React Query. I also have experience in client visits and direct client interactions, understanding business requirements, discussing project needs, and collaborating with stakeholders to deliver effective solutions.",
    "Recently I engineered an AI-powered chatbot with LLM integration and real-time SSE streaming, delivering a smooth, low-latency conversational experience. I also use AI tools every day to boost productivity and automate repetitive work.",
  ],
  email: "hiranikashyap637@gmail.com",
  phone: "+91 7359187170",
  location: "Ahmedabad, India",
  resume: "/resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/kashyap-hirani-053059247/",
  },
};

export const stats = [
  { value: 3.5, decimals: 1, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Major Client Projects" },
  { value: 14, suffix: "", label: "Core Technologies" },
  { value: 1, suffix: "st", label: "Prize · Hackathon 2023" },
];

export const techMarquee = [
  "React.js",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript ES6+",
  "Redux",
  "Zustand",
  "React Query",
  "Axios",
  "Tailwind CSS",
  "SCSS",
  "Bootstrap",
  "HTML5",
  "CSS3",
  "IndexedDB",
  "LLM Integration",
  "SSE Streaming",
];

export const skillGroups = [
  {
    title: "Frontend Core",
    icon: Code2,
    skills: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "State & Data",
    icon: Database,
    skills: ["Redux", "Zustand", "React Query", "Axios", "REST APIs", "IndexedDB"],
  },
    {
  title: "Client & Team Management",
  icon: Code2,
  skills: [
    "Client Visits",
    "Client Communication",
    "Requirement Gathering",
    "Team Coordination",
    "Junior Developer Mentoring",
  ],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    skills: ["Tailwind CSS", "SCSS", "Bootstrap", "Responsive Web Design", "Reusable Components"],
  },
  {
    title: "AI & Streaming",
    icon: Bot,
    skills: ["LLM Integration", "SSE Streaming", "Chatbot UX", "AI-assisted Development"],
  },
  {
    title: "Quality & Performance",
    icon: Gauge,
    skills: ["Cross-Browser Compatibility", "Performance Optimization", "Offline Storage", "Scalable Architecture"],
  },
];

export const projects = [
  {
    title: "Pidilite (Fevicol)",
    company: "Brainvire Infotech",
    description:
      "Responsive React.js web app built from reusable hook-based components. Implemented multi-persona, role-based access control for a hierarchy of contractor users, with role-specific screens, actions and data. Used IndexedDB for offline storage and faster performance.",
    tags: ["React.js", "Redux", "Zustand", "IndexedDB", "RBAC"],
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    title: "MPower CC 2.0",
    company: "Brainvire Infotech",
    description:
      "React.js application built with modular, reusable components and lightweight Zustand state management. Focused on performance optimization, API integration and delivering responsive, user-friendly interfaces.",
    tags: ["React.js", "Zustand", "REST APIs", "Performance"],
    accent: "from-cyan-500/30 to-blue-500/10",
  },
  {
    title: "Yokohama",
    company: "Brainvire Infotech",
    description:
      "Responsive UI for multiple devices and screen sizes, built as an Angular single-page application using components, services and dependency injection for a robust, scalable structure.",
    tags: ["Angular", "TypeScript", "SPA", "Responsive"],
    accent: "from-pink-500/30 to-orange-500/10",
  },
  {
    title: "AI-Powered Chatbot",
    company: "Brainvire Infotech",
    description:
      "Chatbot with LLM integration and real-time SSE streaming. Consumes server-sent, chunk-by-chunk data streams to render answers as they are generated, for a smooth, low-latency conversational UX.",
    tags: ["LLM", "SSE Streaming", "React.js", "Tailwind CSS"],
    accent: "from-emerald-500/30 to-teal-500/10",
  },
];

/** type: "work" | "award" | "education" */
export const timeline = [
  {
    type: "work",
    title: "Frontend Developer",
    org: "Brainvire Infotech · Ahmedabad",
    period: "Jan 2023 — Present",
    points: [
      "Build dynamic, interactive web apps in React with reusable components for consistency and scalability.",
      "Develop responsive designs that adapt to all devices and screen sizes.",
      "Integrate RESTful APIs via Axios and React Query; architect scalable state with Zustand; style with Tailwind CSS.",
      "Engineered an AI chatbot with LLM integration and real-time SSE streaming responses.",
      "Use AI tools to improve development productivity and automate repetitive tasks.",
    ],
    tags: ["React", "Zustand", "React Query", "Tailwind"],
  },
  {
    type: "award",
    title: "First Prize — Brainathon 2023",
    org: "Brainvire Infotech",
    period: "2023",
    points: [
      "Won first place in a competitive hackathon by delivering an innovative solution within a limited timeframe.",
    ],
    tags: ["Hackathon", "Innovation"],
  },
  {
    type: "education",
    title: "B.E. in Information Technology",
    org: "Shantilal Shah Engineering College, Bhavnagar",
    period: "2019 — 2023",
    points: [],
    tags: [],
  },
  {
    type: "education",
    title: "H.S.C. (Science)",
    org: "D A Vidhya Mandir, Dhandhuka",
    period: "2017 — 2019",
    points: [],
    tags: [],
  },
];
