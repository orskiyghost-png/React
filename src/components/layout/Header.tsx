import { useEffect, useState } from "react";
import { navItems, profile } from "../../data/site";
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

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
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
                <a className="header__link" href={item.href}>
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

      <div className="header__panel" id="mobile-menu" hidden={!open}>
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
        <a
          className="header__panel-mail"
          href={`mailto:${profile.email}`}
          onClick={close}
        >
          {profile.email}
        </a>
      </div>
    </header>
  );
}
