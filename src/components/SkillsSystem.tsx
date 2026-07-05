"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function SkillsSystem() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(skillGroups[0].id);
  const active = skillGroups.find((group) => group.id === activeId) ?? skillGroups[0];

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".skills-heading > *", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.75,
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
      });
      gsap.from(".skill-tab", {
        opacity: 0,
        x: -35,
        stagger: 0.09,
        duration: 0.6,
        scrollTrigger: { trigger: ".skills-console", start: "top 75%" },
      });
      gsap.from(".skills-orbit", {
        opacity: 0,
        scale: 0.75,
        rotate: -12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".skills-console", start: "top 75%" },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  const select = (id: string) => {
    if (id === activeId) return;
    const panel = panelRef.current;
    if (!panel) {
      setActiveId(id);
      return;
    }
    gsap.to(panel, {
      opacity: 0,
      y: 12,
      duration: 0.18,
      onComplete: () => {
        setActiveId(id);
        gsap.fromTo(panel, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.35 });
      },
    });
  };

  return (
    <section ref={sectionRef} id="skills" className="skills-section section-shell">
      <div className="skills-heading section-intro">
        <p className="section-kicker">04. CAPABILITIES</p>
        <h2>A connected<br />technical system.</h2>
        <p>
          I don&apos;t treat design, frontend, backend and infrastructure as isolated layers. The strongest products connect them intentionally.
        </p>
      </div>

      <div className="skills-console">
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {skillGroups.map((group) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeId === group.id}
              className={`skill-tab ${activeId === group.id ? "is-active" : ""}`}
              key={group.id}
              onClick={() => select(group.id)}
            >
              <span>{group.index}</span>
              <strong>{group.title}</strong>
              <i />
            </button>
          ))}
        </div>

        <div ref={panelRef} className="skills-detail" role="tabpanel">
          <span className="console-label">ACTIVE MODULE / {active.index}</span>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <div className="skills-chip-grid">
            {active.skills.map((skill, index) => (
              <span key={skill} style={{ "--skill-index": index } as React.CSSProperties}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-orbit" aria-hidden="true">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-core">
            <span>PK</span>
            <small>ENGINEERING CORE</small>
          </div>
          {skillGroups.map((group, index) => (
            <span className={`orbit-node orbit-node-${index + 1}`} key={group.id}>
              {group.index}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
