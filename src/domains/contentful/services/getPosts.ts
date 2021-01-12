import { EntryCollection } from 'contentful';
import clientApi from './client';
import { TPost } from '../models/post';

const getPosts = async (): Promise<TPost[] | undefined> => {
  const client = clientApi();

  const posts = await client
    ?.getEntries<TPost>()
    .then((response: EntryCollection<TPost>) => {
      return response.items.map((item) => {
        return {
          ...item.fields,
          createdAt: item.sys.createdAt.substr(0, 10),
          id: item.sys.id,
        };
      });
    });

  return posts;
};

export default getPosts;
