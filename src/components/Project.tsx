import { IProject } from "../data/types";

export default function Project({
  project,
  setImage,
  setShow,
}: {
  project: IProject;
  setImage: (image: string) => void;
  setShow: (show: boolean) => void;
}) {
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
      </div>
    </div>
  );
}
