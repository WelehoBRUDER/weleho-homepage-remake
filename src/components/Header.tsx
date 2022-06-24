/* Main header component for the whole page */
import { useContext } from "react";
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
  return (
    <header className="header">
      <Button href="https://github.com/WelehoBRUDER">
        <h2>{language.header.title}</h2>
      </Button>
      <LanguageSelector lang={lang} setLang={setLang} languages={languages} />
    </header>
  );
}
