import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import titlePic from "../public/victor.png";
import Posts from "../components/posts";

import postsData from "../posts.json";
const { posts } = postsData;

export function getStaticProps() {
  return {
    props: {
      posts: posts.map((post) => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`,
      })),
    },
  };
}

const Home: NextPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Víctor&apos;s Blog</title>
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

        <p>Here you&apos;ll find things I learn and want to share 😄</p>
        <Posts posts={posts} />
      </main>

      <footer>
        <a className="src" target="_blank" href="https://github.com/victor23k">
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
    </>
  );
};

export default Home;
