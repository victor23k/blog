import Link from "next/link";

const a: React.FC = ({ children, href }) => {
  if (!href.startsWith("/")) {
    return (
      <a href={href} target={href.startsWith("#") ? "" : "_blank"}>
        {children}
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
};

export default a;
