import AboutHero from "@/components/about-hero";
import { EDUCATION } from "@/data/education";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";

export default function About() {
  return (
    <>
      <AboutHero />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
