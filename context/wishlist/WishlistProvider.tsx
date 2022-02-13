import { FC, useEffect, useReducer } from "react";
import Cookie from "js-cookie";

import wishlistReducer from "./wishlistReducer";
import WishlistContext from "./WishlistContext";
import {
  ADD_TO_WISHLIST,
  DELETE_WISHLIST_ITEM,
  CLEAR_WISHLIST,
  itemType,
  wishlistType,
} from "./wishlist-type";

type WishlistProviderType = {
  iniState: string;
  children: any;
};

const CartProvider: FC<WishlistProviderType> = ({ iniState, children }) => {
  const initPersistState: wishlistType = JSON.parse(iniState);
  const [state, dispatch] = useReducer(wishlistReducer, initPersistState);

  // Persist State with Cookies
  useEffect(() => {
    Cookie.set("wishlistState", JSON.stringify(state));
  }, [state]);

  const addToWishlist = (item: itemType) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: item,
    });
  };

  const deleteWishlistItem = (item: itemType) => {
    dispatch({
      type: DELETE_WISHLIST_ITEM,
      payload: item,
    });
  };

  const clearWishlist = () => {
    dispatch({
      type: CLEAR_WISHLIST,
    });
  };

  const value: wishlistType = {
    wishlist: state.wishlist,
    addToWishlist,
    deleteWishlistItem,
    clearWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default CartProvider;
