import IntroCard from "./IntroCard";
import ProjectsCard from "./ProjectsCard";
import AboutCard from "./AboutCard";
import SkillsCard from "./SkillsCard";
import ExperienceCard from "./ExperienceCard";
import ContactCard from "./ContactCard";
import GithubCard from "./GithubCard";
import LinkedinCard from "./LinkedinCard";
import LanguageCard from "./LanguageCard";
import ThemeCard from "./ThemeCard";

export default function PortfolioGrid() {
  return (
    <section
      className="
    max-w-6xl
    mx-auto
    grid
    grid-cols-2
    md:grid-cols-4
    auto-rows-[140px]
    md:auto-rows-[160px]
    gap-2
    "
    >
      <IntroCard />

      <LanguageCard />

      <LinkedinCard />

      <ProjectsCard />

      <AboutCard />

      <SkillsCard />

      <ExperienceCard />

      <ContactCard />

      <GithubCard />

      <ThemeCard />
    </section>
  );
}
