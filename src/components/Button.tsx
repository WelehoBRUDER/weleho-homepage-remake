import { Link } from "react-router-dom";

interface buttonProps {
  link?: string;
  href?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  link,
  href,
  id,
  className = "primary-button",
  children,
  onClick,
}: buttonProps) {
  if (link) {
    return (
      <Link id={id} to={link} className={className}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a id={id} href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
