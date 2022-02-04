import { gql } from 'graphql-request';

export const Assortments = gql`
  query Assortments {
    assortments {
      texts {
        title
        subtitle
        slug
      }
    }
  }
`;
