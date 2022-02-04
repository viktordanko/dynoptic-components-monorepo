import { Component, h, Host, Prop } from '@stencil/core';
import { client } from '../../api/client';
import { Assortments } from '../../api/queries';

@Component({
  tag: 'dyno-product-list',
  styleUrl: './dyno-product-list.scss',
  scoped: true,
})
export class DynoProductList {
  @Prop() name: string;
  @Prop({ mutable: true }) products: any;

  componentWillLoad() {
    try {
      client.request(Assortments).then(data => {
        this.products = data.assortments || [];
      });
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
    return this.products;
  }

  render() {
    return (
      <Host>
        <h2>{this.name}</h2>
        {this.products ? (
          <div class="product-list__list">
            {this.products.map(product => {
              return (
                <div class="product-list__item">
                  <dyno-product-item href={product.texts.slug} label={product.texts.title} />
                </div>
              );
            })}
          </div>
        ) : null}
      </Host>
    );
  }
}
