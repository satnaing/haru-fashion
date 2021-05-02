import { createContext } from "react";

export type cartType = {
  cart: string[];
  addItem?: (item: any) => void;
};

export const initialContextValues: cartType = {
  cart: [],
};

const CartContext = createContext<cartType>(initialContextValues);

export default CartContext;
