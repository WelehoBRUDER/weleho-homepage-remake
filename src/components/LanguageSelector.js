// Component for selecting a language
import { useState } from "react";
import Button from "./Button";

export default function LanguageSelector({ lang, setLang, languages }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="language-selector">
      <Button
        className="language-selector-selected"
        onClick={() => setIsOpen(!isOpen)}
      >
        {lang.toUpperCase()}
        <i className="material-icons-outlined">
          {isOpen ? "expand_more" : "expand_less"}
        </i>
      </Button>
      <div className={`language-selector-list ${isOpen ? "" : "closed"}`}>
        {languages.map(({ value, label }) => (
          <Button
            key={value}
            className="language-selector-button"
            onClick={() => {
              setLang(value);
              setIsOpen(false);
              localStorage.setItem("lang", value);
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
