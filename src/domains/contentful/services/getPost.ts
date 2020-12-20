import { EntryCollection } from 'contentful';
import clientApi from './client';
import { TPost } from '../models/post';

const getPost = async (slug: string): Promise<TPost | undefined> => {
  const client = clientApi();

  const post = await client
    ?.getEntries<TPost>({
      content_type: 'post',
      'fields.slug': slug,
      limit: 1,
    })
    .then((response: EntryCollection<TPost>) => {
      return response.items.map((item) => {
        return {
          ...item.fields,
          createdAt: item.sys.createdAt,
          id: item.sys.id,
        };
      });
    });

  return post?.[0];
};

export default getPost;
