import { useContext } from "react";

import Language from "../Language";

export default function Home() {
  const language = useContext(Language);
  return (
    <main className="home">
      <h1>{language.home.title}</h1>

      <section className="section-medium">
        <h2>{language.home.welcome_1}</h2>
        <p>{language.home.welcome_2}</p>
        <p>{language.home.welcome_3}</p>
      </section>
    </main>
  );
}
