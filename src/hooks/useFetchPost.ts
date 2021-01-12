import { useState, useEffect } from 'react';
import { TPost, getPost, isPost } from '../domains/contentful';

const useFetchPosts = (postId: string): [TPost, boolean] => {
  const initialPost = {
    id: '',
    title: '',
    description: '',
    body: '',
    slug: '',
    thumbnail: {
      fields: {
        file: {
          url: '',
        },
      },
    },
    createdAt: '',
  };
  const [post, setPost] = useState<TPost>(initialPost);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void (async () => {
      setIsLoading(true);
      const error = {
        id: '',
        title: 'Sorry, something went wrong.',
        description: '',
        body: '',
        slug: '',
        thumbnail: {
          fields: {
            file: {
              url: '',
            },
          },
        },
        createdAt: '',
      };
      try {
        const fetchedPost = await getPost(postId);
        setPost(isPost(fetchedPost) ? fetchedPost : error);
      } catch {
        setPost(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [postId]);

  return [post, isLoading];
};

export default useFetchPosts;
