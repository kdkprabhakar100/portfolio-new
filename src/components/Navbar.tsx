"use client";

import { Menu } from "lucide-react";

const items = ["Home", "About", "Projects", "Skills", "Experience", "Contact"];

export function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Prabhakar home">
        <span className="brand-mark">&lt;/&gt;</span>
        <span>PK</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {items.map((item, index) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            <span>{String(index + 1).padStart(2, "0")}.</span> {item}
          </a>
        ))}
      </nav>

      <button className="menu-button" type="button" aria-label="Open menu">
        <span>Menu</span>
        <Menu size={18} />
      </button>
    </header>
  );
}
