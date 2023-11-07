export type ProductTypes = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export type shoppingCartTypes = {
  items: itemsTypes[];
};

export type itemsTypes = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export interface ShopProps {
  children: React.ReactNode;
}

export interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
}

export interface CartContextProps {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  addItemToCart: (id: string) => void;
  updateCartItems: (id: string, amount: number) => void;
}

// export interface CartProps {
//   onUpdateItemQuantity: (productId: string, amount: number) => void;
// }

export type modaRefProps = {
  open: () => void;
};

// type handleUpdateCartItemQuantity = (id: string, quantity: number) => void;
export interface CartModalProps {
  // onUpdateCartItemQuantity: handleUpdateCartItemQuantity;
  title: string;
  actions: React.ReactNode;
}

// export interface HeaderProps {
//   cart: shoppingCartTypes;
//   onUpdateCartItemQuantity: handleUpdateCartItemQuantity;
// }
