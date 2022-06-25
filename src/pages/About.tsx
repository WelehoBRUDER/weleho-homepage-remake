import { useContext } from "react";
import Language from "../Language";
import Button from "../components/Button";

export default function About() {
  const language = useContext(Language);
  return (
    <div className="about-me" id="about">
      <h2 className="sub-title">{language.about.title}</h2>
      <section className="section-medium">
        <p>{language.about.section_1}</p>
        <p>{language.about.section_2}</p>
        <p>{language.about.section_3}</p>
        <p>
          {language.about.currentWork}{" "}
          <Button href="https://virittamohelsinki.fi/">
            {language.about.currentWorkplace}
          </Button>{" "}
          {language.about.currentWorkRole}
        </p>
      </section>
    </div>
  );
}
