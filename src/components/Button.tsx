import { Link } from "react-router-dom";

interface buttonProps {
  link?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  link,
  href,
  className = "primary-button",
  children,
  onClick,
}: buttonProps) {
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
