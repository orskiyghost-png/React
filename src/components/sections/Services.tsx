import { services, skills } from "../../data/site";
import { SectionHeading } from "../ui/SectionHeading";
import "./services.css";

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="shell">
        <SectionHeading
          index="04"
          title="Услуги и навыки"
          lede="Дизайн и сборка в одних руках: меньше согласований, больше цельности."
        />

        <div className="services__list">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <span className="service__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__desc">{service.description}</p>
              <ul className="service__items">
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="services__skills">
          <p className="label">Навыки</p>
          <ul className="services__tags">
            {skills.map((skill) => (
              <li className="services__tag" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
