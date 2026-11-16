import { profile } from "../../data/site";
import { Button } from "../ui/Button";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero__meta">
          <p className="label">
            {profile.name} — {profile.role}
          </p>
          <p className="hero__status">
            <span className="hero__dot" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>

        <h1 className="hero__title" id="hero-title">
          {profile.headline}
        </h1>

        <div className="hero__foot">
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <Button href={`mailto:${profile.email}`}>Обсудить проект</Button>
            <Button href="#work" variant="minimal">
              Смотреть работы
            </Button>
          </div>

          <p className="hero__location label">{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
