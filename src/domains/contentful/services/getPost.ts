import { Entry } from 'contentful';
import clientApi from './client';
import { TPost } from '../models/post';

const getPost = async (id: string): Promise<TPost | undefined> => {
  const client = clientApi();

  const post = await client
    ?.getEntry<TPost>(id)
    .then((response: Entry<TPost>) => {
      return {
        ...response.fields,
        createdAt: response.sys.createdAt,
        id: response.sys.id,
      };
    });

  return post;
};

export default getPost;
