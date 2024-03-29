import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import titlePic from '../public/victor.png';
import { Posts, Post } from '../components/posts';

import postsData from '../posts.json';
const { posts } = postsData;

interface Props {
  posts: Post[];
}

export function getStaticProps() {
  return {
    props: {
      posts: posts.map(
        (post) =>
          ({
            ...post,
            url: `${new Date(post.date).getFullYear()}/${post.id}`,
          }) as Post
      ),
    },
  };
}

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <>
      <Head>
        <title>Víctor&apos;s Blog</title>
        <meta name="description" content="Blog where Víctor writes stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mainpage">
        <Image
          src={titlePic}
          width={200}
          height={200}
          alt="Sunset at sea"
          style={{ borderRadius: '50%' }}
        ></Image>
        <h1>Víctor</h1>

        <p>Here you&apos;ll find things I learn and want to share 😄</p>
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
