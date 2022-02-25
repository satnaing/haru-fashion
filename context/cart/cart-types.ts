export const ADD_ITEM = "ADD_ITEM";
export const ADD_ONE = "ADD_ONE";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_CART = "SET_CART";
export const CLEAR_CART = "CLEAR_CART";

export type itemType = {
  id: number;
  img1?: string;
  img2?: string;
  name: string;
  price: number;
  qty?: number;
};

export type apiProductsType = {
  id: number;
  name: string;
  price: number;
  image1?: string | undefined;
  image?: string | undefined;
  qty?: number | undefined;
  discountPercent?: number;
  description?: string;
  detail?: string;
  categoryId?: number;
  stock?: number;
  createdAt?: string;
  updatedAt?: string | null;
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
