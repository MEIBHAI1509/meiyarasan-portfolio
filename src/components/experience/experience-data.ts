export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "aretedge",
    company:
      "Aretedge Innovations Private Limited",
    role: "Associate Software Developer",
    location: "Hyderabad, India",
    startDate: "July 2024",
    endDate: "May 2026",
    type: "Full-time",

    description:
      "Worked on scalable, responsive, and high-performance web applications for production environments, with a strong focus on frontend architecture, reusable UI systems, API integration, performance optimization, and user experience.",

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
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
      "Git",
      "GitHub",
    ],

    responsibilities: [
      "Developed responsive production-grade web applications using React.js, Next.js, and Angular.",
      "Built reusable and scalable UI components to improve maintainability and consistency.",
      "Integrated GraphQL and REST APIs for efficient frontend data handling.",
      "Developed new features from scratch based on business and client requirements.",
      "Worked on white-label projects with customized branding and functionality for multiple clients.",
      "Optimized frontend performance and improved user experience across production applications.",
      "Collaborated with backend and design teams to deliver scalable solutions.",
      "Supported production issue resolution, including critical fixes during off-hours when required.",
    ],

    achievements: [
      "Received direct client appreciation for delivering high-quality frontend solutions.",
      "Recognized internally as Best Performer for September 2025.",
      "Recognized internally as Best Performer for October 2025.",
      "Developed tournament bracket experiences and contributed to team tournament functionality.",
      "Worked on tournament, challenge, casual game, and leaderboard experiences.",
    ],
  },

  {
    id: "provassure",
    company:
      "Provassure Software Technologies Private Limited",
    role: "React Developer Intern",
    location:
      "Bhavani, Erode, Tamil Nadu",
    startDate: "April 2024",
    endDate: "June 2024",
    type: "Internship",

    description:
      "Worked primarily on frontend development using React, building reusable UI components and integrating application APIs while gaining hands-on experience with production-oriented web development.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Amazon S3",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    responsibilities: [
      "Developed frontend interfaces using React.",
      "Built reusable UI components for application features.",
      "Integrated APIs with frontend applications.",
      "Worked with backend services built using Node.js.",
      "Worked with MongoDB for application data.",
      "Integrated Amazon S3 for application storage requirements.",
      "Collaborated with the development team to implement assigned Jira tasks.",
    ],

    achievements: [
      "Completed assigned Jira tasks within the given timelines.",
      "Gained practical experience building React-based production features.",
      "Developed hands-on experience with frontend and backend integration.",
    ],
  },
];