import { useContext } from "react";
import Language from "../Language";
import Button from "../components/Button";
import techsData from "../data/technologies.json";

export default function Technologies() {
  const language = useContext(Language);
  return (
    <div className="technologies" id="skills">
      <h1 className="sub-title">{language.technologies.title}</h1>
      <p className="tech-desc">{language.technologies.text}</p>
      <section className="section-wide">
        {techsData.map((tech) => (
          <div className="tech-container" key={tech.name}>
            <Button href={tech.link} className="tech-image">
              <img src={tech.icon} alt={tech.name} />
            </Button>
          </div>
        ))}
      </section>
    </div>
  );
}
