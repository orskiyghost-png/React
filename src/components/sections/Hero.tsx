import type { CSSProperties } from "react";
import { profile } from "../../data/site";
import { Button } from "../ui/Button";
import "./hero.css";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero__meta" data-enter style={{ "--enter-delay": "0ms" } as CSSProperties}>
          <p className="label">
            {profile.name} — {profile.role}
          </p>
          <p className="hero__status">
            <span className="hero__dot" aria-hidden="true" />
            {profile.availability}
          </p>
        </div>

        <h1 className="hero__title" id="hero-title" data-enter style={{ "--enter-delay": "70ms" } as CSSProperties}>
          {profile.headline}
        </h1>

        <div className="hero__foot" data-enter style={{ "--enter-delay": "150ms" } as CSSProperties}>
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
