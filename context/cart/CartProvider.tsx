import React, { useContext, useEffect, useReducer } from "react";
import cartReducer from "./cartReducer";
import CartContext from "./CartContext";
import { getCookie, setCookies } from "cookies-next";
import {
  ADD_ITEM,
  ADD_ONE,
  REMOVE_ITEM,
  DELETE_ITEM,
  itemType,
  cartType,
  CLEAR_CART,
  SET_CART,
} from "./cart-types";

export const ProvideCart = ({ children }: { children: React.ReactNode }) => {
  const value = useProvideCart();
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

const useProvideCart = () => {
  const initPersistState: cartType = { cart: [] };
  const [state, dispatch] = useReducer(cartReducer, initPersistState);

  useEffect(() => {
    const initialCart = getCookie("cart");
    if (initialCart) {
      const cartItems = JSON.parse(initialCart as string);
      dispatch({ type: SET_CART, payload: cartItems });
    }
  }, []);

  useEffect(() => {
    setCookies("cart", state.cart);
  }, [state.cart]);

  const addItem = (item: itemType) => {
    dispatch({
      type: ADD_ITEM,
      payload: item,
    });
  };

  const addOne = (item: itemType) => {
    dispatch({
      type: ADD_ONE,
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

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  const value: cartType = {
    cart: state.cart,
    addItem,
    addOne,
    removeItem,
    deleteItem,
    clearCart,
  };

  return value;
};
