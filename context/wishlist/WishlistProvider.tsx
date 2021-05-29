import { FC, useEffect, useReducer } from "react";
import cartReducer from "./wishlistReducer";
import CartContext, { initialContextValues } from "./WishlistContext";
import Cookie from "js-cookie";
import {
  ADD_ITEM,
  ADD_ONE,
  REMOVE_ITEM,
  DELETE_ITEM,
  itemType,
  cartType,
  CLEAR_CART,
} from "./wishlist-type";

type CartProviderType = {
  iniState: string;
  children: any;
};

const CartProvider: FC<CartProviderType> = ({ iniState, children }) => {
  const initPersistState: cartType = JSON.parse(iniState);
  const [state, dispatch] = useReducer(cartReducer, initPersistState);

  // Persist State with Cookies
  useEffect(() => {
    Cookie.set("cartState", JSON.stringify(state));
  }, [state]);

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

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
