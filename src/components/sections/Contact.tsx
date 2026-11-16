import { profile, socials } from "../../data/site";
import "./contact.css";

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact__head">
          <p className="section__index">(05)</p>
          <h2 className="visually-hidden" id="contact-title">
            Контакты
          </h2>
          <p className="contact__kicker label">Есть проект или вопрос</p>
        </div>

        <a className="contact__mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact__grid">
          <p className="contact__lede">
            Напишите пару строк о задаче и сроках — отвечу в течение двух рабочих
            дней.
          </p>

          <ul className="contact__socials">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  className="contact__social"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <dl className="contact__meta">
            <div>
              <dt className="label">Локация</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt className="label">Статус</dt>
              <dd>{profile.availability}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
