import { useReducer } from "react";
import cartReducer from "./cartReducer";
import CartContext, { initialContextValues } from "./CartContext";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  DELETE_ITEM,
  itemType,
  cartType,
} from "./cart-types";

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialContextValues);

  const addItem = (item: itemType) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };

  const removeItem = (item: itemType) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: item,
    });
  };

  const deleteItem = (item: itemType) => {
    dispatch({
      type: DELETE_ITEM,
      payload: item,
    });
  };

  const value: cartType = { cart: state.cart, addItem, removeItem, deleteItem };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
