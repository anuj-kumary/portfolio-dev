import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Achievements } from "@/components/sections/Achievements";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { GitHubSection } from "@/components/sections/GitHub";
import { Contact } from "@/components/sections/Contact";
import { getPublicRepos, getGitHubUser } from "@/lib/github";

export default async function Home() {
  const [repos, user] = await Promise.all([getPublicRepos(), getGitHubUser()]);

  return (
    <>
      <Hero />
      <About />
      <Achievements />
      <Experience />
      <FeaturedProject />
      <Projects repos={repos} />
      <TechStack />
      <GitHubSection user={user} />
      <Contact />
    </>
  );
}
