import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'dyno-product-item',
  styleUrl: './dyno-product-item.scss',
  shadow: true,
})
export class ProductItem {
  @Prop() href: string;
  @Prop() label: string;

  render() {
    return (
      <Host>
        <article class="product-item">
          <div class="img-holder">
            <img src="https://dev.dynoptic.shop/_next/image?url=%2Fstatic%2Fimg%2Fsun-glass-placeholder.jpeg&w=3840&q=100" alt="" width={200} height={120} />
          </div>
          <h3>
            <a href={this.href} class="link-mask">
              {this.label}
            </a>
          </h3>
        </article>
      </Host>
    );
  }
}
