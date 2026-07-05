"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { experience, site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".experience-card");
      cards.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          rotateX: 7,
          duration: 0.8,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 82%" },
        });
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="experience-section section-shell">
      <header className="experience-header">
        <div>
          <p className="section-kicker">05. EXPERIENCE / PRACTICE</p>
          <h2>How I approach<br />real problems.</h2>
        </div>
        <div className="experience-header-copy">
          <p>
            My background spans dynamic web applications, network thinking and technical systems. That range helps me see both the interface and the infrastructure behind it.
          </p>
          <a href={site.github} target="_blank" rel="noreferrer">
            Explore all repositories <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-card" key={item.number}>
            <span className="experience-number">{item.number}</span>
            <div className="experience-title">
              <p>{item.role}</p>
              <h3>{item.title}</h3>
            </div>
            <p className="experience-body">{item.body}</p>
            <div className="experience-tags">
              {item.capabilities.map((capability) => <span key={capability}>{capability}</span>)}
            </div>
            <span className="experience-arrow">↗</span>
          </article>
        ))}
      </div>

      <div className="experience-quote">
        <span>THE WORKING PRINCIPLE</span>
        <p>Make it useful. Make it understandable. Then make it unforgettable.</p>
      </div>
    </section>
  );
}
