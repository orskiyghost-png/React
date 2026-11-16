import { useCallback, useEffect, useRef, useState } from "react";
import { navItems, profile, socials } from "../../data/site";
import { StaggeredMenu } from "../reactbits/StaggeredMenu";
import "./header.css";

const menuItems = navItems.map((item) => ({
  label: item.label,
  ariaLabel: item.label,
  link: item.href,
}));

const menuSocials = socials.map((social) => ({
  label: social.label,
  link: social.href,
}));

function LogoMark() {
  return (
    <svg
      className="header__mark"
      viewBox="0 0 64 64"
      width="40"
      height="40"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="32" cy="32" r="5" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="32" cy="32" rx="26" ry="10" />
        <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="26" ry="10" transform="rotate(120 32 32)" />
      </g>
    </svg>
  );
}

export function Header() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const stateRef = useRef({ open: false });

  useEffect(() => {
    const ids = navItems.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    for (const section of sections) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const lockPage = useCallback((open: boolean) => {
    stateRef.current.open = open;
    document.body.style.overflow = open ? "hidden" : "";
    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }
  }, []);

  const handleMenuOpen = useCallback(() => {
    lockPage(true);
    requestAnimationFrame(() => {
      document
        .querySelector<HTMLElement>(".site-menu .sm-panel-item")
        ?.focus();
    });
  }, [lockPage]);

  const handleMenuClose = useCallback(() => {
    lockPage(false);
    document
      .querySelector<HTMLElement>(".site-menu .sm-toggle")
      ?.focus({ preventScroll: true });
  }, [lockPage]);

  useEffect(() => {
    return () => lockPage(false);
  }, [lockPage]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const toggle = document.querySelector<HTMLElement>(".site-menu .sm-toggle");
      if (toggle?.getAttribute("aria-expanded") === "true") toggle.click();
    };

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (!event.target.closest(".site-menu .sm-panel-item")) return;
      const toggle = document.querySelector<HTMLElement>(".site-menu .sm-toggle");
      if (toggle?.getAttribute("aria-expanded") === "true") toggle.click();
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="shell header__bar">
          <a className="header__brand" href="#top">
            <LogoMark />
            <span className="header__wordmark">React</span>
          </a>

          <nav className="header__nav" aria-label="Основная навигация">
            <ul className="header__list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="header__link"
                    href={item.href}
                    aria-current={
                      activeId === item.href.replace("#", "") ? "location" : undefined
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="header__contact" href={`mailto:${profile.email}`}>
            Написать
          </a>
        </div>
      </header>

      <StaggeredMenu
        className="site-menu"
        isFixed
        position="right"
        items={menuItems}
        socialItems={menuSocials}
        colors={["#EF3347", "#C12836", "#8F1B29"]}
        accentColor="#EF3347"
        menuButtonColor="#EF3347"
        openMenuButtonColor="#FFF5F5"
        changeMenuColorOnOpen={true}
        displaySocials
        displayItemNumbering
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
      />
    </>
  );
}
