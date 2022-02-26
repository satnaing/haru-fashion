export const ADD_ITEM = "ADD_ITEM";
export const ADD_ONE = "ADD_ONE";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const SET_CART = "SET_CART";
export const CLEAR_CART = "CLEAR_CART";

export type commonType = {
  id: number;
  name: string;
  price: number;
  qty?: number | undefined;
  discountPercent?: number;
  description?: string;
  detail?: string;
  categoryId?: number;
  stock?: number;
  createdAt?: string;
  updatedAt?: string | null;
  category?: {
    id?: number;
    name?: string;
    description?: string;
    thumbnailImage?: string;
    createdAt?: string;
    updatedAt?: string | null;
  };
};

export interface itemType extends commonType {
  img1?: string;
  img2?: string;
  categoryName?: string;
}

export interface apiProductsType extends commonType {
  image1?: string;
  image2?: string;
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
