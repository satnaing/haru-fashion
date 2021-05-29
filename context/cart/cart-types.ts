export const ADD_ITEM = "ADD_ITEM";
export const ADD_ONE = "ADD_ONE";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export type itemType = {
  id: number;
  img1?: string;
  img2?: string;
  name: string;
  price: number;
  qty?: number;
};

export type cartType = {
  cart: itemType[];
  addItem?: (item: itemType) => void;
  addOne?: (item: itemType) => void;
  removeItem?: (item: itemType) => void;
  deleteItem?: (item: itemType) => void;
  clearCart?: () => void;
};
