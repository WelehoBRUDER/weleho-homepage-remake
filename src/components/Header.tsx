/* Main header component for the whole page */
import { useContext, useState } from "react";
import Language from "../Language";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";

import "../style/header.scss";

interface selectorLanguage {
  [value: string]: string;
  label: string;
}

export default function Header({
  lang,
  setLang,
  languages,
}: {
  lang: string;
  setLang: (lang: string) => void;
  languages: selectorLanguage[];
}) {
  const language = useContext(Language);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button className="burger" onClick={() => setIsOpen(!isOpen)}>
        <i className="material-icons-outlined">{isOpen ? "close" : "menu"}</i>
      </Button>
      <header
        className={`header ${
          isOpen ? "visible-on-mobile" : "hidden-on-mobile"
        }`}
      >
        <Button href="https://github.com/WelehoBRUDER">
          <img src={`${process.env.PUBLIC_URL}/images/svenko.png`} />
          <h2>{language.header.title}</h2>
        </Button>
        <nav>
          <ul>
            <li>
              <Button href="/#home">{language.header.home}</Button>
            </li>
            <li>
              <Button href="/#about">{language.header.about}</Button>
            </li>
            <li>
              <Button href="/#projects">{language.header.projects}</Button>
            </li>
          </ul>
          <LanguageSelector
            lang={lang}
            setLang={setLang}
            languages={languages}
          />
        </nav>
      </header>
    </>
  );
}
