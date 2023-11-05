import Head from 'next/head';
import { FunctionComponent, ReactNode } from 'react';
import Header from './header';

type Children = {
  children: ReactNode;
};

const Layout: FunctionComponent<Children> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <article>
          <div className="content">{children}</div>
        </article>
        <footer>
          <a
            className="src"
            target="_blank"
            href="https://github.com/victor23k"
          >
            github
          </a>
          <a
            className="src"
            target="_blank"
            href="https://linkedin.com/in/victorfdezfdez"
          >
            linkedin
          </a>
        </footer>
      </main>
    </>
  );
};

export default Layout;
