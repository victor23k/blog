import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import titlePic from "../public/victor.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Víctor's Blog</title>
        <meta name="description" content="Blog where Víctor writes stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image
          src={titlePic}
          width={200}
          height={200}
          alt="Sunset at sea"
          style={{ borderRadius: "50%" }}
        ></Image>
        <h1>Víctor</h1>

        <p>Here you'll find things I learn and want to share 😄</p>
      </main>
    </div>
  );
};

export default Home;
