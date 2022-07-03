import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import titlePic from "../public/victor.png";
import postsData from "../posts.json";
import Link from "next/link";
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
        <div style={{ paddingTop: "4rem" }}>
          {posts.map((post) => (
            <Link key={post.id} href={post.url}>
              <article className="postLi">
                <span style={{ fontWeight: "bold" }}>{post.title}</span>
                <span style={{ fontSize: "0.7rem", color: "grey" }}>
                  {post.date}
                </span>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <footer>
        <span>github</span>
        <span>linkedin</span>
      </footer>
    </>
  );
};

export default Home;
