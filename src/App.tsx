import { DUMMY_PRODUCTS } from './dummy-products.ts';

import CartContextProvider from './store/shopping-cart-context.tsx';

import Header from './components/Header.tsx';
import Shop from './components/Shop.tsx';
import Product from './components/Product.tsx';

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map(product => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
};

export default App;
