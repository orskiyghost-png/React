import { profile, socials } from "../../data/site";
import "./footer.css";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__row">
          <p className="footer__name">
            {profile.name}
            <span className="footer__role">{profile.role}</span>
          </p>

          <ul className="footer__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="footer__social"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="footer__top" href="#top">
            Наверх
          </a>
        </div>

        <div className="footer__row footer__row--meta">
          <span>
            © {year} {profile.name}
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
