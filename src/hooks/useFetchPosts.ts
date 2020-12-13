import { useState, useEffect } from 'react';
import { TPost, getPosts, isPost } from '../domains/contentful';

const useFetchPosts = (): [TPost[], boolean] => {
  const initialPost = {
    id: '',
    title: '',
    description: '',
    body: '',
    slug: '',
    createdAt: '',
  };
  const [posts, setPosts] = useState<TPost[]>([initialPost]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);
      const error = [
        {
          id: '',
          title: 'Sorry, something went wrong.',
          description: '',
          body: '',
          slug: '',
          createdAt: '',
        },
      ];
      try {
        const fetchedPosts = await getPosts();
        const formattedPosts = fetchedPosts
          ? fetchedPosts
              .filter((post) => isPost(post))
              .sort(
                (prev, next) =>
                  Date.parse(prev.createdAt) - Date.parse(next.createdAt),
              )
          : error;
        setPosts(formattedPosts);
      } catch {
        setPosts(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return [posts, isLoading];
};

export default useFetchPosts;
