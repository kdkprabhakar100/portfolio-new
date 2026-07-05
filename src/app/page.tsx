import { AboutJourney } from "@/components/AboutJourney";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { Navbar } from "@/components/Navbar";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SkillsSystem } from "@/components/SkillsSystem";
import { SystemLoader } from "@/components/SystemLoader";

export default function Home() {
  return (
    <main>
      <SystemLoader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutJourney />
      <ProjectShowcase />
      <SkillsSystem />
      <MarqueeBand />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
