import { createContext } from "react";
import { wishlistType } from "./wishlist-type";

export const initialContextValues: wishlistType = {
  wishlist: [],
};

const WishlistContext = createContext<wishlistType>(initialContextValues);

export default WishlistContext;
