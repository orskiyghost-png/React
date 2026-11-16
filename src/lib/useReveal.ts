import { useEffect } from "react";

/**
 * Лёгкий reveal-слой на IntersectionObserver.
 * Позже заменяется на GSAP ScrollTrigger без изменения разметки:
 * компоненты уже помечают цели атрибутом data-reveal.
 */
export function useReveal() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (targets.length === 0) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      targets.forEach((target) => target.classList.add("is-revealed"));
      return;
    }

    // Лёгкая очередь внутри группы: 0, 60, 120, 180 мс.
    const groupIndex = new Map<Element, number>();
    for (const target of targets) {
      const siblings = target.parentElement
        ? Array.from(target.parentElement.children).filter((node) =>
            targets.includes(node as HTMLElement),
          )
        : [target];
      groupIndex.set(target, Math.min(siblings.indexOf(target), 3));
    }

    for (const target of targets) {
      target.style.setProperty("--reveal-delay", `${(groupIndex.get(target) ?? 0) * 60}ms`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    for (const target of targets) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);
}
