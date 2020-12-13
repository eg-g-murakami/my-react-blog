import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { TPost } from '../../domains/contentful';

interface IProps {
  post: TPost;
  isLoading: boolean;
}

const HomeView: FC<IProps> = ({ post, isLoading }) => {
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <ReactMarkdown source={post.body} />
    </>
  );
};

export default HomeView;
