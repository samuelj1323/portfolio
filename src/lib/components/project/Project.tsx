import type { Project as ProjectData } from "$utils/types";

type ProjectProps = {
  project: ProjectData;
};

const Project = ({ project }: ProjectProps) => {
  return (
    <li>
      <h5>{project.title}</h5>
      <p>{project.description}</p>
      <small>
        {project.category} • {project.tech.slice(0, 4).join(" • ")}
      </small>
      {project.featured && <span> ★ featured</span>}
    </li>
  );
};

export default Project;
