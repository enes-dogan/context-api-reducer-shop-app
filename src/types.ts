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
  updateItemQuantity: (id: string, amount: number) => void;
}

export type modaRefProps = {
  open: () => void;
};

export interface CartModalProps {
  title: string;
  actions: React.ReactNode;
}
