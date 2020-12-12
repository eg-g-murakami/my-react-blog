import { createClient, ContentfulClientApi } from 'contentful';

const spaceID = process?.env?.REACT_APP_CONTENTFUL_SPACE_ID ?? '';
const contentDeliveryApiKey =
  process?.env?.REACT_APP_CONTENTFUL_DELIVERY_API_TOKEN ?? '';

const clientApi = (): ContentfulClientApi | null => {
  return createClient({
    space: spaceID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: contentDeliveryApiKey,
  });
};

export default clientApi;
