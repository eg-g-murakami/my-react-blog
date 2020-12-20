import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { TPost } from '../../domains/contentful';

interface IProps {
  posts: TPost[];
  isLoading: boolean;
}

const HomeView: FC<IProps> = ({ posts, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      {posts.map((post) => (
        <article key={post.slug}>
          <Link to={`/post/${post.slug}`}>
            <h1>{post.title}</h1>
          </Link>
          <p>{post.description}</p>
        </article>
      ))}
    </>
  );
};

export default HomeView;
