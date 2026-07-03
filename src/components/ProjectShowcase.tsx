"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

function SalonVisual() {
  return (
    <div className="project-interface salon-interface">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <small>nirjara.beauty</small>
      </div>
      <div className="salon-layout">
        <div className="salon-copy">
          <span className="interface-label">BEAUTY / WELLNESS</span>
          <strong>Look good.<br />Feel unforgettable.</strong>
          <span className="interface-button">Book appointment</span>
        </div>
        <div className="salon-portrait">
          <span className="portrait-ring" />
          <span className="portrait-shape" />
        </div>
      </div>
      <div className="salon-services">
        <span>Hair</span><span>Skin</span><span>Makeup</span><span>Nails</span>
      </div>
    </div>
  );
}

function FitnessVisual() {
  return (
    <div className="project-interface fitness-interface">
      <div className="fitness-sidebar">
        <span className="fitness-logo">FG</span>
        {Array.from({ length: 5 }).map((_, index) => <i key={index} />)}
      </div>
      <div className="fitness-main">
        <div className="fitness-topbar">
          <div><small>GOOD MORNING</small><strong>Training overview</strong></div>
          <span className="fitness-avatar" />
        </div>
        <div className="fitness-stats">
          <div><small>ACTIVE TIME</small><strong>48m</strong></div>
          <div><small>CALORIES</small><strong>624</strong></div>
          <div><small>PROGRESS</small><strong>82%</strong></div>
        </div>
        <div className="fitness-chart">
          {[34, 52, 44, 78, 61, 89, 72, 96].map((value, index) => (
            <span key={index} style={{ height: `${value}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WasteVisual() {
  return (
    <div className="project-interface waste-interface">
      <div className="waste-map">
        <span className="map-road road-one" />
        <span className="map-road road-two" />
        <span className="map-road road-three" />
        <i className="map-pin pin-one" />
        <i className="map-pin pin-two" />
        <i className="map-pin pin-three" />
      </div>
      <div className="waste-panel">
        <small>LIVE COLLECTION STATUS</small>
        <strong>Operations<br />under control.</strong>
        <div className="waste-metric"><span>Routes complete</span><b>86%</b></div>
        <div className="waste-progress"><span /></div>
        <div className="waste-cards"><i /><i /><i /></div>
      </div>
    </div>
  );
}

function ProjectVisual({ visual }: { visual: "salon" | "fitness" | "waste" }) {
  if (visual === "fitness") return <FitnessVisual />;
  if (visual === "waste") return <WasteVisual />;
  return <SalonVisual />;
}

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
        const panels = gsap.utils.toArray<HTMLElement>(".project-panel");
        const dots = gsap.utils.toArray<HTMLElement>(".project-dot");

        gsap.set(panels.slice(1), { autoAlpha: 0, yPercent: 14, scale: 0.93 });
        gsap.set(dots[0], { scale: 1.65, backgroundColor: "#58f6ed" });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${panels.length * 1100}`,
            pin: stageRef.current,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        panels.forEach((panel, index) => {
          if (index === 0) {
            timeline.fromTo(
              panel.querySelector(".project-visual-frame"),
              { rotateY: -7, scale: 0.94 },
              { rotateY: 0, scale: 1, duration: 0.8 },
            );
            return;
          }

          const previous = panels[index - 1];
          timeline
            .to(previous, {
              autoAlpha: 0,
              yPercent: -13,
              scale: 0.93,
              duration: 0.65,
            })
            .to(
              dots[index - 1],
              { scale: 1, backgroundColor: "rgba(211,255,252,.22)", duration: 0.25 },
              "<",
            )
            .to(
              panel,
              { autoAlpha: 1, yPercent: 0, scale: 1, duration: 0.75 },
              "<0.12",
            )
            .to(
              dots[index],
              { scale: 1.65, backgroundColor: "#58f6ed", duration: 0.25 },
              "<",
            )
            .fromTo(
              panel.querySelectorAll(".project-copy > *"),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, stagger: 0.06, duration: 0.42 },
              "<0.1",
            );
        });
      });

      media.add("(max-width: 900px)", () => {
        gsap.from(".project-panel", {
          opacity: 0,
          y: 60,
          stagger: 0.12,
          duration: 0.75,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        });
      });
    }, sectionRef);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="projects-showcase">
      <div ref={stageRef} className="projects-stage">
        <header className="projects-heading">
          <p className="section-kicker">03. SELECTED WORK</p>
          <div className="project-pagination" aria-hidden="true">
            {projects.map((project) => (
              <span className="project-dot" key={project.number} />
            ))}
          </div>
        </header>

        <div className="project-panels">
          {projects.map((project) => (
            <article className="project-panel" key={project.title}>
              <div className="project-copy">
                <div className="project-count">
                  <span>{project.number}</span>
                  <i />
                  <span>{String(projects.length).padStart(2, "0")}</span>
                </div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h2>{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-result">
                  <span>Outcome</span>
                  <p>{project.result}</p>
                </div>
                <div className="project-tech">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub size={16} /> Source code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live project <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-visual-column">
                <div className="project-visual-frame">
                  <ProjectVisual visual={project.visual} />
                </div>
                <div className="project-visual-meta">
                  <span>PROJECT / {project.number}</span>
                  <span>SCROLL TO ADVANCE</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
