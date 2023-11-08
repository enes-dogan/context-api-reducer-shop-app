import { childrenProp } from '../types';

const Shop = ({ children }: childrenProp) => {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}

export default Shop;
