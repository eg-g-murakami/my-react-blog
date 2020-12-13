import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import PostView from '../../components/pages/PostView';
import useFetchPost from '../../hooks/useFetchPost';

const Post: FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, isLoading] = useFetchPost(postId);

  return <PostView {...{ post, isLoading }} />;
};

export default Post;
