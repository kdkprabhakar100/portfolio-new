"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { site } from "@/data/site";

const GlobeScene = dynamic(() => import("./GlobeScene"), {
  ssr: false,
  loading: () => <div className="globe-placeholder" />,
});

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 2.45 })
        .from(".hero-eyebrow", { opacity: 0, y: 18, duration: 0.55 })
        .from(
          ".hero-title-line span",
          { yPercent: 110, stagger: 0.08, duration: 0.9 },
          "-=0.25",
        )
        .from(
          ".hero-role, .hero-description, .hero-actions, .hero-scroll",
          {
            opacity: 0,
            y: 20,
            stagger: 0.11,
            duration: 0.6,
          },
          "-=0.45",
        )
        .from(
          ".hero-visual",
          { opacity: 0, scale: 0.78, duration: 1.1 },
          "-=0.9",
        )
        .from(
          ".social-rail a",
          { opacity: 0, x: 15, stagger: 0.1, duration: 0.42 },
          "-=0.6",
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="hero">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="hero-grid" />

      <div className="availability">
        <span className="availability-line" />
        Available for freelance work
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">HELLO, I&apos;M</p>

        <h1 className="hero-title" aria-label="Prabhakar Khadka">
          <span className="hero-title-line">
            <span>PRABHAKAR</span>
          </span>
          <span className="hero-title-line">
            <span>KHADKA</span>
          </span>
        </h1>

        <p className="hero-role">FULL-STACK DEVELOPER &amp; IT ENGINEER</p>

        <p className="hero-description">
          I build exceptional digital experiences that are fast, accessible,
          visually compelling, and engineered with clean code.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="text-link" href="#contact">
            Let&apos;s talk
          </a>
        </div>

        <a className="hero-scroll" href="#about">
          <span className="scroll-icon">
            <ArrowDown size={15} />
          </span>
          Scroll to discover
        </a>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <GlobeScene />
        <div className="globe-core-glow" />
        <span className="coordinate coordinate-one">27.7172° N</span>
        <span className="coordinate coordinate-two">85.3240° E</span>
      </div>

      <aside className="social-rail" aria-label="Social links">
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={19} />
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn size={19} />
        </a>
        <a href={`mailto:${site.email}`} aria-label="Email">
          <Mail size={19} />
        </a>
        <span className="social-line" />
      </aside>

      <div className="hero-index">01 / 06</div>
    </section>
  );
}
