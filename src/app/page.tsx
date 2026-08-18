import { About } from "@/components/about/about";
import { BlogList } from "@/components/blog/blog-list";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Footer } from "@/components/footer/footer";
import { GitHubSection } from "@/components/github/github-section";
import { DeveloperTerminal } from "@/components/terminal/developer-terminal";
import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import { Projects } from "@/components/projects/projects";
import { Skills } from "@/components/skills/skills";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <GitHubSection />

      <DeveloperTerminal />

      <BlogList />

      <Contact />

      <Footer />
    </main>
  );
}