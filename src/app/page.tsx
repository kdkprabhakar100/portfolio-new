import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectShowcase } from "@/components/ProjectShowcase" ;
import { SystemLoader } from "@/components/SystemLoader";

export default function Home() {
  return (
    <main>
      <SystemLoader />
      <Navbar />
      <Hero />
      <ProjectShowcase />
      <section id="about" className="next-section-placeholder">
        <p className="section-kicker">NEXT PHASE</p>
        <h2>The journey timeline starts here.</h2>
      </section>
    </main>
  );
}
