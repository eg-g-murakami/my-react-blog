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
      <h1>my awesome blog</h1>
      <p>powerd by contentful</p>
      {posts.map((post) => (
        <article key={post.slug}>
          <Link to={`/post/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <p>{post.description}</p>
        </article>
      ))}
    </>
  );
};

export default HomeView;
