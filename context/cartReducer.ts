import { ADD_ITEM, cartType, itemType } from "./cart-types";
import addItemToCart from "./Util/addItemToCart";

type actionType = {
  type: string;
  payload: itemType;
};

const cartReducer = (state: cartType, action: actionType) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
