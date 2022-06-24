import { useContext, useState } from "react";

import { IProject } from "../data/types";
import Project from "../components/Project";
import FullSreenImage from "../components/FullScreenImage";
import ProjectsData from "../data/projects.json";
import Language from "../Language";

import "../style/projects.scss";

export default function Projects() {
  const language = useContext(Language);
  const [projects, setProjects] = useState(ProjectsData);
  const [image, setImage] = useState("");
  const [isImageOpen, setIsImageOpen] = useState(false);
  return (
    <div className="projects" id="projects">
      <h1 className="sub-title">{language.projects.title}</h1>
      <FullSreenImage
        image={image}
        show={isImageOpen}
        setShow={setIsImageOpen}
      />
      <section className="section-wide">
        <div className="projects-container">
          {projects.map((project: IProject) => (
            <Project
              key={project.name}
              project={project}
              setImage={setImage}
              setShow={setIsImageOpen}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
