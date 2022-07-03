import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>victor</a>
        </Link>

        <a
          className="src"
          target="_blank"
          href="https://github.com/victor23k/blog"
        >
          source
        </a>
      </nav>
    </header>
  );
};

export default Header;
