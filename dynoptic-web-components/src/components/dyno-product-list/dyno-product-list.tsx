import { Component, h, Host, Prop, Watch } from '@stencil/core';
import request from 'graphql-request';
import { LIST_ASSORTMENTS } from '../../api/queries';

@Component({
  tag: 'dyno-product-list',
  styleUrl: './dyno-product-list.scss',
  scoped: true,
})
export class DynoProductList {
  @Prop() name: string;
  @Prop() query: any = LIST_ASSORTMENTS;
  @Prop({ mutable: true }) data: any;
  @Prop({ mutable: true, reflect: true }) tenant: string = 'dev';

  @Watch('tenant')
  async handleTentantChange(newValue: string) {
    const url = `https://${newValue}.dynoptic.shop/api/graphql`;

    try {
      await request(url, this.query)
        .then(res => res)
        .then(data => {
          this.data = data;
        });
    } catch (error) {
      console.error(JSON.stringify(error, undefined, 2));
    }
  }

  async componentWillLoad() {
    const url = `https://${this.tenant}.dynoptic.shop/api/graphql`;

    try {
      await request(url, this.query)
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
          {this.data.assortments.length > 0 ? (
            this.data.assortments.map(item => {
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
