import { projects } from "../../data/site";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectTile } from "../work/ProjectTile";
import "./work.css";

const variants = ["featured", "half", "half", "wide"] as const;

export function SelectedWork() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <SectionHeading
          index="02"
          title="Избранные работы"
          lede="Четыре проекта, которые показывают подход: структура, типографика, аккуратный код."
        />

        <div className="work__grid">
          {projects.map((project, index) => (
            <ProjectTile
              key={project.id}
              project={project}
              variant={variants[index] ?? "half"}
            />
          ))}
        </div>

        <div className="work__foot">
          <p className="work__note">
            Полный список проектов и детали — по запросу.
          </p>
          <Button href="#contact" variant="secondary">
            Запросить портфолио
          </Button>
        </div>
      </div>
    </section>
  );
}
