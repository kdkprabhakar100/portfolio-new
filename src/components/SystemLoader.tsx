"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const rows = [
  "Loading system configuration...",
  "Loading skills...",
  "Loading projects...",
  "Loading experiences...",
  "System ready.",
];

export function SystemLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("is-loading");

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          document.body.classList.remove("is-loading");
          setVisible(false);
        },
      });

      timeline
        .from(".loader-title", { opacity: 0, y: 16, duration: 0.45 })
        .from(
          ".loader-row",
          { opacity: 0, x: -18, stagger: 0.18, duration: 0.32 },
          "-=0.1",
        )
        .from(
          ".loader-progress-fill",
          { scaleX: 0, transformOrigin: "left", duration: 1.15 },
          "-=0.65",
        )
        .to(".loader-screen", {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.8,
          delay: 0.3,
          ease: "power4.inOut",
        });
    }, loaderRef);

    return () => {
      context.revert();
      document.body.classList.remove("is-loading");
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={loaderRef} className="loader-screen" aria-hidden="true">
      <div className="loader-panel">
        <p className="loader-title">INITIALIZING PRABHAKAR.OS</p>

        <div className="loader-list">
          {rows.map((row) => (
            <div className="loader-row" key={row}>
              <span>&gt; {row}</span>
              <span className="loader-ok">[ OK ]</span>
            </div>
          ))}
        </div>

        <div className="loader-progress">
          <span className="loader-progress-fill" />
        </div>
        <span className="loader-percent">100%</span>
      </div>
    </div>
  );
}
