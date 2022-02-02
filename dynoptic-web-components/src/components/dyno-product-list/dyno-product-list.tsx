import { Component, Fragment, h, Prop } from '@stencil/core';
import { request, gql } from 'graphql-request';

const LIST_ALL_PRODUCTS_QUERY = gql`
  query ListAllProducts {
    listAllProducts {
      tenants {
        products {
          id
          specification {
            commerce {
              pricing {
                amount
              }
            }
          }
          media {
            id
            asset {
              id
              url
            }
            tags
          }
        }
      }
    }
  }
`;

@Component({
  tag: 'dyno-product-list',
  styleUrl: './dyno-product-list.css',
  scoped: true,
})
export class DynoProductList {
  @Prop() name: string;
  @Prop() products: any;
  @Prop() response: any;

  async componentWillLoad() {
    request('https://dev.dynoptic.shop/api/graphql', LIST_ALL_PRODUCTS_QUERY).then(data => {
      console.log(data);
    });
    // const url = process.env.API_URL;
    // const response = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     query: `
    //       query ListProducts {
    //         listAllProducts {
    //           tenants {
    //             products {
    //               id
    //               specification {
    //                 commerce {
    //                   pricing {
    //                     amount
    //                   }
    //                 }
    //               }
    //               media {
    //                 id
    //                 asset {
    //                   id
    //                   url
    //                 }
    //                 tags
    //               }
    //             }
    //           }
    //         }
    //       }
    //     `,
    //   }),
    // });
    // const data = await response.json();
    // return (this.products = data);
  }
  render() {
    return (
      <Fragment>
        <h2>{this.name}</h2>
        {this.products && (
          <ul>
            {this.products.data.products.map(product => {
              return <li>{product.texts.title}</li>;
            })}
          </ul>
        )}
      </Fragment>
    );
  }
}
