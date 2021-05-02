import { useReducer } from "react";
import cartReducer from "./cartReducer";
import CartContext, { initialContextValues } from "./CartContext";
import { ADD_ITEM, itemType, cartType } from "./cart-types";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialContextValues);

  const addItem = (item: itemType) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };

  const value: cartType = { cart: state.cart, addItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
