"use client";

import { FormEvent, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { site } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 52,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      gsap.from(".contact-orbit", {
        opacity: 0,
        scale: 0.55,
        rotate: -25,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    }, sectionRef);
    return () => context.revert();
  }, []);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section ref={sectionRef} id="contact" className="contact-section section-shell">
      <div className="contact-grid" />
      <div className="contact-orbit" aria-hidden="true">
        <span className="contact-orbit-ring ring-a" />
        <span className="contact-orbit-ring ring-b" />
        <span className="contact-orbit-dot" />
      </div>

      <div className="contact-heading contact-reveal">
        <p className="section-kicker">06. START A CONVERSATION</p>
        <h2>Have a problem<br />worth solving?</h2>
        <p>
          Tell me what you&apos;re building, what is not working, or what kind of digital experience you want to create.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-details contact-reveal">
          <div className="availability-card">
            <span><i /> CURRENT STATUS</span>
            <strong>Open to collaborations and meaningful technical work.</strong>
          </div>

          <div className="email-block">
            <span>Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <button type="button" onClick={copyEmail}>
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Copied" : "Copy address"}
            </button>
          </div>

          <div className="contact-socials">
            <a href={site.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /> LinkedIn</a>
            <a href={site.website} target="_blank" rel="noreferrer"><ArrowUpRight /> Current site</a>
          </div>
        </div>

        <form className="contact-form contact-reveal" onSubmit={submit}>
          <label>
            <span>01 / Your name</span>
            <input name="name" type="text" placeholder="Enter your name" required />
          </label>
          <label>
            <span>02 / Email address</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>
          <label>
            <span>03 / Project details</span>
            <textarea name="message" rows={5} placeholder="Tell me about the idea, problem or opportunity..." required />
          </label>
          <button className="contact-submit" type="submit">
            Send inquiry <Mail size={17} />
          </button>
          <small>This opens your default email application. No information is stored by this website.</small>
        </form>
      </div>
    </section>
  );
}
