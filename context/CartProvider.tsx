import { useReducer } from "react";
import cartReducer from "./cartReducer";
import CartContext, { cartType, initialContextValues } from "./CartContext";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialContextValues);

  const addItem = (item) => {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  };

  const value: cartType = { cart: state.cart, addItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
