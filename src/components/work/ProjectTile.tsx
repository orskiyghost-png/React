import type { Project } from "../../data/site";
import "./project-tile.css";

type ProjectTileProps = {
  project: Project;
  variant: "featured" | "half" | "wide";
};

export function ProjectTile({ project, variant }: ProjectTileProps) {
  return (
    <a className={`tile tile--${variant}`} href={project.href} data-reveal>
      <figure className="tile__media">
        <img
          src={project.image}
          alt={project.alt}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div className="tile__body">
        <div className="tile__meta">
          <span className="tile__index">{project.index}</span>
          <span>
            {project.category} · {project.year}
          </span>
        </div>

        <h3 className="tile__title">{project.title}</h3>
        <p className="tile__desc">{project.description}</p>

        <span className="tile__cta" aria-hidden="true">
          Смотреть проект
        </span>
      </div>
    </a>
  );
}
