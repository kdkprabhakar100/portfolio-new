"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrame = 0;

    const move = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      animationFrame = window.requestAnimationFrame(render);
    };

    const setActive = (active: boolean) => {
      ringRef.current?.classList.toggle("is-active", active);
    };

    const interactive = document.querySelectorAll("a, button, input, textarea, .skill-tab");
    interactive.forEach((element) => {
      element.addEventListener("mouseenter", () => setActive(true));
      element.addEventListener("mouseleave", () => setActive(false));
    });

    window.addEventListener("pointermove", move, { passive: true });
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
