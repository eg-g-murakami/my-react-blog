import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import PostView from '../../components/pages/PostView';
import useFetchPost from '../../hooks/useFetchPost';

const Post: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, isLoading] = useFetchPost(slug);

  return <PostView {...{ post, isLoading }} />;
};

export default Post;
