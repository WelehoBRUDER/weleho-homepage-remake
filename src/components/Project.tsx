import { useContext } from "react";
import { IProject } from "../data/types";
import Language from "../Language";

export default function Project({
  project,
  setImage,
  setShow,
}: {
  project: IProject;
  setImage: (image: string) => void;
  setShow: (show: boolean) => void;
}) {
  const language = useContext(Language);
  return (
    <div className="project-container">
      <div className="project-header">
        <h3>{project.name}</h3>
      </div>
      <div className="project-body">
        <div className="project-image">
          <img
            src={`${process.env.PUBLIC_URL}/images/${project.image}`}
            onClick={() => {
              setImage(project.image);
              setShow(true);
            }}
            alt={project.name}
          />
        </div>
        <div className="project-description">
          <p>
            {language.project?.[project.name.replaceAll(" ", "_").trim()]
              ?.shortDesc ?? "project.shortDesc"}
          </p>
        </div>
      </div>
    </div>
  );
}
