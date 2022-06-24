import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { IProject } from "../data/types";
import Button from "../components/Button";

import "../style/project_page.scss";

export default function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(projects[0] as IProject);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const projectFind: IProject =
      projects.find((p: IProject) => p.name.replaceAll(" ", "_") === id) ??
      projects[0];
    setProject(projectFind);
  }, [id]);

  function cycleImages() {
    if (project.images.length - 1 > imageIndex) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  }

  function cycleImagesBackwards() {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(project.images.length - 1);
    }
  }

  return (
    <div className="project-page">
      <h1>{project.name}</h1>
      {project.link && (
        <Button href={project.link}>
          <h3>Play!</h3>
        </Button>
      )}
      <div className="project-images-showcase">
        <Button className="chevron" onClick={cycleImagesBackwards}>
          <i className="material-icons-outlined">chevron_left</i>
        </Button>
        <img
          key={imageIndex}
          className="show-case-image"
          src={`${process.env.PUBLIC_URL}/images/${project.images[imageIndex]}`}
          alt={project.images[imageIndex]}
        />
        <Button className="chevron" onClick={cycleImages}>
          <i className="material-icons-outlined">chevron_right</i>
        </Button>
      </div>
    </div>
  );
}
