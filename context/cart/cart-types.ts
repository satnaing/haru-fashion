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

export interface dbItemType extends itemType {
  desc: string;
  category: "men" | "women" | "bags";
  details: string;
}

export type cartFuncType = (item: itemType) => void;

export type cartType = {
  cart: itemType[];
  addItem?: cartFuncType;
  addOne?: cartFuncType;
  removeItem?: cartFuncType;
  deleteItem?: cartFuncType;
  clearCart?: () => void;
};
