import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient('https://dev.dynoptic.shop/api/graphql', {
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
