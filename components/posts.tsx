import Link from 'next/link';
import { useState } from 'react';

interface Props {
  posts: Post[];
}

export type Post = {
  id: string;
  title: string;
  url: string;
  date: string;
};

export const Posts = ({ posts }: Props) => {
  const [expand, setExpand] = useState(3);

  return (
    <div className="posts" style={{ paddingTop: '3rem' }}>
      <ul style={{ paddingLeft: '0em' }}>
        {posts.slice(0, expand + 1).map((post) => (
          <li key={post.id}>
            <Link href={post.url}>
              <article className="postLi" style={{ marginTop: '1rem' }}>
                <span style={{ fontWeight: 'bold' }}>{post.title}</span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'grey',
                    marginLeft: '1rem',
                  }}
                >
                  {post.date}
                </span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
