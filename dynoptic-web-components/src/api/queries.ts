import { gql } from 'graphql-request';

export const LIST_ASSORTMENTS = gql`
  query GetAssortments {
    assortments {
      _id
      texts {
        title
        subtitle
        slug
      }
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query SearchProducts($assortmentId: ID) {
    searchProducts(assortmentId: $assortmentId) {
      products {
        texts {
          title
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_NAME = gql`
  query SearchAssortments($queryString: String) {
    searchAssortments(queryString: $queryString) {
      assortments {
        texts {
          title
        }
      }
    }
  }
`;
