export type TerminalResult = {
    type: "output" | "link";
    content: string;
    href?: string;
  };
  
  export const terminalCommands: Record<
    string,
    () => TerminalResult[]
  > = {
    help: () => [
      {
        type: "output",
        content:
          "Available commands: about, skills, projects, github, contact, clear",
      },
    ],
  
    about: () => [
      {
        type: "output",
        content:
          "Meiyarasan P — Frontend Developer, Full Stack Developer, and MERN Developer.",
      },
    ],
  
    skills: () => [
      {
        type: "output",
        content:
          "React · Next.js · TypeScript · JavaScript · Tailwind CSS · Node.js · Express · MongoDB",
      },
    ],
  
    projects: () => [
      {
        type: "output",
        content:
          "Featured projects: Vambu · Selavu Kaavalan",
      },
    ],
  
    github: () => [
      {
        type: "link",
        content: "github.com/MEIBHAI1509",
        href: "https://github.com/MEIBHAI1509",
      },
    ],
  
    contact: () => [
      {
        type: "link",
        content: "meiyarasan1509@gmail.com",
        href: "mailto:meiyarasan1509@gmail.com",
      },
    ],
  };