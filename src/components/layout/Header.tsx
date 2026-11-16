import { useEffect, useRef, useState } from "react";
import { navItems, profile, socials } from "../../data/site";
import "./header.css";

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
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    const main = document.getElementById("main");
    const footer = document.querySelector("footer");
    main?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");

    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${open ? " header--open" : ""}`}>
      <div className="shell header__bar">
        <a className="header__brand" href="#top" onClick={close}>
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

        <button
          ref={toggleRef}
          className="header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="header__toggle-line" />
          <span className="header__toggle-line" />
        </button>
      </div>

      <div className="header__panel" id="mobile-menu" hidden={!open} ref={panelRef}>
        <nav aria-label="Мобильная навигация">
          <ul className="header__panel-list">
            {navItems.map((item, index) => (
              <li key={item.href} className="header__panel-item">
                <span className="header__panel-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <a className="header__panel-link" href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__panel-foot">
          <a
            className="header__panel-mail"
            href={`mailto:${profile.email}`}
            onClick={close}
          >
            {profile.email}
          </a>

          <ul className="header__panel-socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="header__panel-social"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
