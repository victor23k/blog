import Link from 'next/link';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header>
      <nav>
        <Link href="/">victor</Link>

        <a
          className="src"
          target="_blank"
          href="https://github.com/victor23k/blog"
        >
          source
        </a>
      </nav>
      <button onClick={toggleTheme}>{theme === 'dark' ? '🌝' : '🌚'}</button>
    </header>
  );
};

export default Header;
