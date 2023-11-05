import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';
import a from '../components/mdx/a';
import Layout from '../components/layout';
import { ThemeProvider } from '../context/ThemeContext';
import Code from '../components/mdx/code';

const components = {
  a: a as React.FC<JSX.IntrinsicElements['a']>,
  code: Code as React.FC<JSX.IntrinsicElements['code']>,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
