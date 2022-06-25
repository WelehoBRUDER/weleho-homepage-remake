import { useContext } from "react";

import Language from "../Language";

import About from "./About";
import Projects from "./Projects";
import Technologies from "./Technologies";

export default function Home() {
  const language = useContext(Language);
  return (
    <main className="home" id="home">
      <div id="#top" />
      <h1>{language.home.title}</h1>

      <section className="section-medium">
        <h2>{language.home.welcome_1}</h2>
        <p>{language.home.welcome_2}</p>
        <p>{language.home.welcome_3}</p>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Technologies />
      </section>
    </main>
  );
}
