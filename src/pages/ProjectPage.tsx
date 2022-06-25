import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import { IProject } from "../data/types";
import Button from "../components/Button";
import Language from "../Language";

import "../style/project_page.scss";

export default function ProjectPage() {
  const { id } = useParams();
  const [project, setProject] = useState(projects[0] as IProject);
  const [imageIndex, setImageIndex] = useState(0);
  const language = useContext(Language);

  useEffect(() => {
    const projectFind: IProject =
      projects.find((p: IProject) => p.name.replaceAll(" ", "_") === id) ??
      projects[0];
    setProject(projectFind);
  }, [id]);

  // scroll to top when entering page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <main className="project-page section-wide">
      <div className="project-header" id="project-top">
        <h1>{project.name}</h1>
      </div>
      <section className="project-links">
        {project.link && (
          <Button href={project.link}>
            <h3>{language.projects.link}</h3>
          </Button>
        )}
        {project.repo && (
          <Button href={project.repo}>
            <h3>{language.projects.repo}</h3>
          </Button>
        )}
      </section>
      <section className="project-page-desc">
        <p>
          {language.project[project.name.replaceAll(" ", "_")].longDesc ??
            "project.longDesc"}
        </p>
      </section>
      <section className="project-misc-info">
        {project.misc?.map(({ key, value }) => {
          return (
            <p key={key}>
              <strong>{language.projects[key]}:</strong> {value}
            </p>
          );
        })}
      </section>
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
    </main>
  );
}
