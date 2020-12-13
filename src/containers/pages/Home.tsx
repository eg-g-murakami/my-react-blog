import React, { FC } from 'react';
import useFetchPosts from '../../hooks/useFetchPosts';
import HomeView from '../../components/pages/HomeView';

const Home: FC = () => {
  const [posts, isLoading] = useFetchPosts();

  return <HomeView {...{ posts, isLoading }} />;
};

export default Home;
