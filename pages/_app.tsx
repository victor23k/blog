import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import a from "../components/mdx/a";
import Layout from "../components/layout";
import { ThemeProvider } from "../context/ThemeContext";

const components = {
  a: a as React.FC<JSX.IntrinsicElements["a"]>,
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
