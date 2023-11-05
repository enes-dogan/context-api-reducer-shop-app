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
  onAddItemToCart: (id: string) => void;
}

export interface ProductProps {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
  onAddToCart: (id: string) => void;
}

export interface CartProps {
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  onUpdateItemQuantity: (productId: string, amount: number) => void;
}

export type modaRefProps = {
  open: () => void;
};

type handleUpdateCartItemQuantity = (id: string, quantity: number) => void;
export interface CartModalProps {
  cartItems: itemsTypes[];
  onUpdateCartItemQuantity: handleUpdateCartItemQuantity;
  title: string;
  actions: React.ReactNode;
}

export interface HeaderProps {
  cart: shoppingCartTypes;
  onUpdateCartItemQuantity: handleUpdateCartItemQuantity;
}
