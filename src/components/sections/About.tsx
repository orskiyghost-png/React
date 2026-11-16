import { about, profile } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import "./about.css";

export function About() {
  return (
    <section className="section about" id="about">
      <div className="shell">
        <SectionHeading
          index="03"
          title="Обо мне"
          lede="Коротко о подходе к работе и о том, что важно в каждом проекте."
        />

        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="about__signature">{profile.name}</p>
          </div>

          <dl className="about__facts">
            {about.facts.map((fact) => (
              <div className="about__fact" key={fact.term}>
                <dt className="label">{fact.term}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
