import { DUMMY_PRODUCTS } from './dummy-products';

import CartContextProvider from './store/shopping-cart-context';

import Header from './components/Header';
import Shop from './components/Shop';
import Product from './components/Product';

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
}

export default App;
