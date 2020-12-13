import clientApi from 'client';
import { EntryCollection } from 'contentful';

export type TPost = {
  title: string;
  body: string;
  slug: string;
};

export const getEntries = async (): Promise<TPost[] | undefined> => {
  const client = clientApi();

  const posts = await client
    ?.getEntries<TPost>()
    .then((response: EntryCollection<TPost>) => {
      return response.items.map((item) => item.fields);
    });

  return posts;
};

export const getEntry = (): string => {
  return 'comming soon';
};
