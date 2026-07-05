"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const items = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Prabhakar home" onClick={close}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>PK</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {items.map((item, index) => {
            const id = item.toLowerCase();
            return (
              <a key={item} href={`#${id}`} className={active === id ? "is-active" : ""}>
                <span>{String(index + 1).padStart(2, "0")}.</span> {item}
              </a>
            );
          })}
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu-grid" />
        <nav aria-label="Mobile navigation">
          {items.map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </a>
          ))}
        </nav>
        <p>FULL-STACK DEVELOPMENT / IT ENGINEERING / CREATIVE TECHNOLOGY</p>
      </div>
    </>
  );
}
