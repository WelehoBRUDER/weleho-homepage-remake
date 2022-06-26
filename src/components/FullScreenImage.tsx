import { useEffect } from "react";

export default function FullSreenImage({
  image,
  show,
  setShow,
}: {
  image: string;
  show: boolean;
  setShow: (show: boolean) => void;
}) {
  useEffect(() => {
    if (show) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [show]);

  return (
    <div className={`full-screen-image-container ${show ? "show" : "hide"}`}>
      <div className="dim" onClick={() => setShow(false)} />
      <img src={`${process.env.PUBLIC_URL}/images/${image}`} alt={image} />
    </div>
  );
}
