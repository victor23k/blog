import Head from "next/head";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
