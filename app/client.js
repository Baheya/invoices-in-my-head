import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(process.env.GRAPHCMS_API_ENDPOINT, {
  headers: { Authorization: `Bearer ${process.env.GRAPHCMS_API_TOKEN}` },
});
