import { createContext } from "react";
import { cartType } from "./wishlist-type";

export const initialContextValues: cartType = {
  cart: [],
};

const CartContext = createContext<cartType>(initialContextValues);

export default CartContext;
