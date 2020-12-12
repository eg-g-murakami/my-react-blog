import clientApi from 'client';
import { EntryCollection } from 'contentful';

export type TPost = {
  title: string;
  body: string;
  slug: string;
};

export const getEntries = async (): Promise<TPost[]> => {
  const client = clientApi();
  const error = [{ title: 'Sorry, something went wrong.', body: '', slug: '' }];

  const posts = await client
    ?.getEntries<TPost>()
    .then((response: EntryCollection<TPost>) => {
      return response.items.map((item) => item.fields);
    })
    .catch(() => error);

  return posts ?? error;
};

export const getEntry = (): string => {
  return 'comming soon';
};
