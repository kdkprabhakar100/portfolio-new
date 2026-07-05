"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Cpu, Network, ShieldCheck } from "lucide-react";
import { education, site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const focus = [
  { icon: Cpu, label: "Software", value: "Web products and application systems" },
  { icon: Network, label: "Infrastructure", value: "Networks, systems and optimization" },
  { icon: ShieldCheck, label: "Security", value: "Security-aware technical thinking" },
];

export function AboutJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 46,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      gsap.fromTo(
        ".journey-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".journey-list",
            start: "top 75%",
            end: "bottom 65%",
            scrub: 1,
          },
        },
      );

      gsap.from(".journey-item", {
        opacity: 0,
        x: 45,
        stagger: 0.16,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".journey-list",
          start: "top 72%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="about-section section-shell">
      <div className="section-grid-bg" />
      <header className="section-intro about-reveal">
        <p className="section-kicker">02. ABOUT / JOURNEY</p>
        <h2>Engineering logic.<br />Creative execution.</h2>
        <p>
          I&apos;m an IT engineer and full-stack developer who enjoys turning complicated ideas into digital systems that feel clear, useful and visually considered.
        </p>
      </header>

      <div className="about-layout">
        <div className="about-portrait-column about-reveal">
          <div className="portrait-frame">
            <img src="/assets/portrait.png" alt="Portrait of Prabhakar Khadka" />
            <span className="portrait-scan" />
            <div className="portrait-corner portrait-corner-one" />
            <div className="portrait-corner portrait-corner-two" />
            <div className="portrait-status">
              <span /> SYSTEM STATUS: BUILDING
            </div>
          </div>

          <div className="about-identity">
            <span>BASED IN</span>
            <strong>{site.location}</strong>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn profile <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="about-story">
          <div className="about-statement about-reveal">
            <p>
              My work sits at the intersection of <strong>software development</strong>, <strong>IT systems</strong> and <strong>interactive design</strong>. I care about how a product works, how it performs and how it feels to use.
            </p>
          </div>

          <div className="focus-grid about-reveal">
            {focus.map(({ icon: Icon, label, value }) => (
              <article key={label}>
                <Icon size={19} />
                <span>{label}</span>
                <p>{value}</p>
              </article>
            ))}
          </div>

          <div className="journey-list">
            <span className="journey-line"><i className="journey-line-fill" /></span>
            {education.map((item) => (
              <article className="journey-item" key={item.marker}>
                <span className="journey-marker">{item.marker}</span>
                <div>
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  <strong>{item.place}</strong>
                  <span>{item.body}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
