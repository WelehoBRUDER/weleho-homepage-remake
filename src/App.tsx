import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";
import "./style/app.scss";
import "./style/components.scss";
import "./style/mobile_layout.scss";
import Language from "./Language";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

import english from "./localisation/english.json";
import finnish from "./localisation/finnish.json";

interface localisation {
  [title: string]: any;
  header: any;
  home: any;
}

interface languages {
  [en: string]: localisation;
  fi: localisation;
}

interface selectorLanguage {
  [value: string]: string;
  label: string;
}

const languages: languages = {
  en: english,
  fi: finnish,
};

const languagesForSelector: selectorLanguage[] = [
  { value: "en", label: "English" },
  { value: "fi", label: "Suomi" },
];

export default function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const localLang = localStorage.getItem("lang");
    if (localLang) {
      setLang(localLang);
    }
  }, []);

  useEffect(() => {
    const language: localisation = languages[lang];
    if (language) {
      document.title = language.title;
    }
  }, [lang]);

  return (
    <Language.Provider value={languages[lang]}>
      <Header lang={lang} setLang={setLang} languages={languagesForSelector} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Language.Provider>
  );
}
