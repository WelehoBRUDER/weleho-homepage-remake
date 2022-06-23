import { Link } from "react-router-dom";

export default function Button({
  link,
  href,
  className = "primary-button",
  children,
  onClick,
}) {
  if (link) {
    return (
      <Link to={link} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
