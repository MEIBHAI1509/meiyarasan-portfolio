export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  year: string;

  featured: boolean;

  technologies: string[];

  githubUrl?: string;
  liveUrl?: string;

  image?: string;

  features: string[];
  challenges: string[];
};

export const projects: Project[] = [
  // ============================================================
  // VAMBU
  // ============================================================

  {
    id: "vambu",

    title: "Vambu",

    shortDescription:
      "A modern full-stack communication platform built with Next.js, TypeScript, and Supabase, featuring secure authentication, profiles, storage, and a scalable real-time architecture.",

    description:
      "Vambu is a modern full-stack communication platform designed for individuals and communities that need a centralized way to communicate and manage their profiles securely. I designed and developed the application architecture and implemented the frontend, authentication flows, Supabase integration, database structure, profile management, OAuth integration, protected routes, and storage functionality. The architecture is designed to support real-time communication capabilities as the product evolves.",

    category: "Personal Project",

    year: "2026",

    featured: true,

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Storage",
      "Supabase SSR",
      "Google OAuth",
      "Resend",
      "Git",
      "GitHub",
    ],

    githubUrl: undefined,

    liveUrl:
      "https://vambu-omega.vercel.app/",

    image: undefined,

    features: [
      "Email and password authentication",
      "Google OAuth authentication",
      "Email verification",
      "Protected application routes",
      "User profile management",
      "Avatar uploads",
      "Username and profile information",
      "PostgreSQL data persistence",
      "Row Level Security",
      "Supabase Storage integration",
      "Session management",
      "Server-side authentication with Supabase SSR",
      "Responsive application interface",
    ],

    challenges: [
      "Integrating Supabase authentication with the Next.js App Router and server-side rendering",
      "Handling authentication cookies and protected routes through middleware",
      "Implementing Google OAuth callback and authentication flows",
      "Synchronizing authentication users with application profile data",
      "Designing secure PostgreSQL Row Level Security policies",
      "Implementing email verification and authentication email flows",
      "Securely handling avatar uploads through Supabase Storage",
      "Structuring the application so it can support real-time communication as the product evolves",
    ],
  },

  // ============================================================
  // SELAVU KAAVALAN
  // ============================================================

  {
    id: "selavu-kaavalan",

    title: "Selavu Kaavalan",

    shortDescription:
      "A full-stack personal finance management application for tracking income, expenses, wallets, budgets, savings goals, and recurring transactions.",

    description:
      "Selavu Kaavalan is a full-stack personal finance management application designed to help individuals track, manage, and understand their finances in one place. I designed and developed the application architecture and implemented major frontend and backend functionality including authentication, financial management modules, analytics, notifications, profile and settings, responsive UI, and production-oriented database operations.",

    category: "Personal Project",

    year: "2026",

    featured: true,

    technologies: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide React",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Supabase",
      "PostgreSQL",
      "Supabase Auth",
      "Supabase Realtime",
      "Resend",
      "React Email",
      "Vercel",
    ],

    githubUrl: undefined,

    liveUrl: "https://selavu-kaavalan.vercel.app/",

    image: undefined,

    features: [
      "Email and password authentication",
      "Google OAuth authentication",
      "Email verification",
      "Forgot and reset password flows",
      "Protected application routes",
      "Profile management",
      "Wallet management",
      "Income tracking",
      "Expense tracking",
      "Category management",
      "Monthly budgets",
      "Savings goals",
      "Recurring income and expenses",
      "Financial analytics and charts",
      "Real-time notifications",
      "Notification center",
      "Dark and light theme",
      "Responsive design",
      "Dashboard financial summaries",
      "Automatic wallet balance updates",
      "Email notifications",
      "Search and filtering",
      "Server-side financial operations",
    ],

    challenges: [
      "Designing a scalable database structure and relationships for multiple financial modules",
      "Implementing PostgreSQL RPC functions for transactional financial operations",
      "Maintaining accurate wallet balances when financial transactions are created, updated, or deleted",
      "Implementing Row Level Security so users can access only their own financial data",
      "Integrating Google OAuth and email/password authentication",
      "Handling email verification and password reset flows",
      "Implementing real-time notifications using Supabase Realtime",
      "Integrating Resend while keeping service credentials and API keys server-side",
      "Building reusable frontend components, forms, and validation systems",
      "Creating responsive layouts that work across desktop and mobile devices",
      "Working with the Next.js App Router and server/client component architecture",
      "Configuring production environment variables and authentication redirects",
    ],
  },

  // ============================================================
  // PROFESSIONAL EXPERIENCE — ARETEDGE
  // ============================================================

  {
    id: "tournament-challenge-platform",

    title: "Tournament & Challenge Platform",

    shortDescription:
      "A production-grade tournament and challenge platform featuring tournament brackets, team tournaments, challenges, casual games, and leaderboard experiences.",

    description:
      "Professional work completed during my time as an Associate Software Developer at Aretedge Innovations Private Limited. I worked on production-grade web applications using React.js and Next.js, building responsive frontend experiences for tournaments, challenges, casual games, and leaderboard systems. I developed reusable UI architecture, integrated GraphQL and REST APIs, optimized frontend performance, and contributed to white-label implementations with customized branding and functionality for multiple clients.",

    category: "Professional Experience",

    year: "2024 — 2026",

    featured: true,

    technologies: [
      "React.js",
      "Next.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "GraphQL",
      "REST APIs",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
      "Git",
      "GitHub",
    ],

    githubUrl: undefined,

    liveUrl: undefined,

    image: undefined,

    features: [
      "Tournament management",
      "Tournament bracket systems",
      "Team tournament experiences",
      "Challenge management",
      "Casual game experiences",
      "Leaderboard systems",
      "Responsive web interfaces",
      "Reusable UI component architecture",
      "GraphQL API integration",
      "REST API integration",
      "White-label client experiences",
      "Customized branding and functionality",
      "Production frontend optimization",
    ],

    challenges: [
      "Building scalable and reusable frontend architecture for production applications",
      "Developing responsive tournament and leaderboard experiences across devices",
      "Implementing tournament bracket experiences from scratch",
      "Supporting team tournament workflows",
      "Integrating GraphQL and REST APIs with frontend applications",
      "Supporting multiple white-label implementations with customized branding and functionality",
      "Maintaining frontend performance and user experience across production applications",
      "Collaborating with backend and design teams to deliver production-ready features",
      "Supporting critical production issues when required",
    ],
  },
];