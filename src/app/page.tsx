import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectPreview } from "@/components/ProjectPreview";
import { SystemLoader } from "@/components/SystemLoader";

export default function Home() {
  return (
    <main>
      <SystemLoader />
      <Navbar />
      <Hero />
      <ProjectPreview />
    </main>
  );
}
