export type TPost = {
  id: string;
  title: string;
  description: string;
  body: string;
  slug: string;
  createdAt: string;
};

const isPost = (arg: unknown): arg is TPost => {
  const data = arg as TPost;

  return (
    typeof data?.id === 'string' &&
    typeof data?.title === 'string' &&
    typeof data?.description === 'string' &&
    typeof data?.body === 'string' &&
    typeof data?.slug === 'string' &&
    typeof data?.createdAt === 'string'
  );
};

const isPosts = (args: unknown[]): args is TPost[] =>
  !args.some((arg) => !isPost(arg));

export { isPost, isPosts };
