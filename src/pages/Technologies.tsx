import { useContext } from "react";
import Language from "../Language";

export default function Technologies() {
  const language = useContext(Language);
  return (
    <div className="technologies">
      <h1 className="sub-title">Technologies</h1>
    </div>
  );
}
