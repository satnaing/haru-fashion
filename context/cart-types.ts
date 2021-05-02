export const ADD_ITEM = "ADD_ITEM";

export type itemType = {
  id: number;
  img1?: string;
  img2?: string;
  name: string;
  price: number;
  qty: number;
};

export type cartType = {
  cart: itemType[];
  addItem?: (item: itemType) => void;
};
