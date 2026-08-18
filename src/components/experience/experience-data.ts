export type Experience = {
  id: string;
  type: string;
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    id: "aretedge",
    type: "Full-Time",
    role: "Associate Software Developer",
    company:
      "Aretedge Innovations Private Limited",
    startDate: "Jul 2024",
    endDate: "May 2026",
    location: "Hyderabad, India",

    description:
      "Worked on scalable, responsive, and high-performance web applications using React, Next.js, and Angular. Focused on reusable UI architecture, GraphQL integrations, frontend performance, white-label client projects, and production-grade user experiences.",

    responsibilities: [
      "Developed scalable and responsive web applications using React.js, Next.js, and Angular.",
      "Built reusable UI components and frontend architecture focused on maintainability and consistency.",
      "Integrated GraphQL and REST APIs for efficient frontend data handling.",
      "Worked with Node.js and NestJS for backend services and application integrations.",
      "Developed white-label client projects with customized branding and functionality.",
      "Optimized frontend performance and improved user experience across production applications.",
      "Collaborated with backend and design teams to deliver scalable solutions.",
      "Supported production issue resolution, including critical fixes during off-hours when required.",
    ],

    technologies: [
      "React.js",
      "Next.js",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
      "GraphQL",
      "REST APIs",
      "Git",
      "GitHub",
    ],

    achievements: [
      "Received direct client appreciation for delivering high-quality frontend solutions.",
      "Recognized internally as Best Performer for September and October 2025.",
      "Actively supported production issue resolution, including critical fixes during late-night hours.",
      "Contributed to white-label applications delivered for multiple clients.",
    ],
  },

  {
    id: "provassure",
    type: "Internship",
    role: "React Developer Intern",
    company:
      "Provassure Software Technologies Private Limited",
    startDate: "Apr 2024",
    endDate: "Jun 2024",
    location:
      "Bhavani, Erode, Tamil Nadu, India",

    description:
      "Worked as a frontend developer, primarily using React to build UI components and integrate application APIs. Contributed to frontend development while working with backend services, storage, and database technologies.",

    responsibilities: [
      "Developed frontend interfaces using React.",
      "Built reusable UI components for application features.",
      "Integrated Redis APIs into the frontend application.",
      "Worked with Node.js-based application services.",
      "Worked with Amazon S3 for application storage requirements.",
      "Worked with MongoDB for application data.",
      "Collaborated with the team to implement assigned Jira tasks.",
    ],

    technologies: [
      "React",
      "Node.js",
      "Redis",
      "Amazon S3",
      "MongoDB",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],

    achievements: [
      "Completed assigned Jira tasks within the given timelines.",
      "Contributed to frontend development and reusable UI implementation.",
    ],
  },
];