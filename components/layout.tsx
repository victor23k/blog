import Head from "next/head";
import { FunctionComponent, ReactNode } from "react";
import Header from "./header";

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
      <div className="content">{children}</div>
    </>
  );
};

export default Layout;
