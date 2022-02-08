import { Component, Host, h, Prop, Watch } from '@stencil/core';
import request from 'graphql-request';
import { GET_PRODUCT_BY_NAME } from '../../api/queries';

@Component({
  tag: 'dyno-product-list-by-name',
  styleUrl: 'dyno-product-list-by-name.scss',
  scoped: true,
})
export class DynoProductListById {
  @Prop() name: string;
  @Prop({ mutable: true }) data: any;
  @Prop({ mutable: true, reflect: true }) tenant: string = 'dev';
  @Prop({ mutable: true, reflect: true }) variables: any = {};

  @Watch('variables')
  async watchPropHandler(newValue: any) {
    if (!newValue) return;
    const url = `https://${this.tenant}.dynoptic.shop/api/graphql`;
    this.variables = newValue;

    try {
      await request(url, GET_PRODUCT_BY_NAME, newValue)
        .then(res => res)
        .then(data => {
          this.data = data;
        });
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2));
    }
  }

  async componentWillLoad() {
    try {
      const url = `https://${this.tenant}.dynoptic.shop/api/graphql`;
      await request(url, GET_PRODUCT_BY_NAME, this.variables)
        .then(res => res)
        .then(data => {
          this.data = data;
        });
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2));
    }
  }

  render() {
    if (!this.data) return <p>Loading...</p>;

    return (
      <Host>
        <h2>{this.name}</h2>
        <div class="product-list__list">
          {this.data.searchAssortments.assortments.length > 0 ? (
            this.data.searchAssortments.assortments.map(item => {
              return (
                <div class="product-list__item" key={item._id}>
                  <dyno-product-item slug={item.texts.slug} label={item.texts.title} />
                </div>
              );
            })
          ) : (
            <p>No products found</p>
          )}
        </div>
      </Host>
    );
  }
}
