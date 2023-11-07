import { createContext } from 'react';

import { CartContextProps } from '../types';

export const CartContext = createContext<CartContextProps>({
  items: [],
  addItemToCart: () => { },
  updateItemQuantity: () => { },
});
