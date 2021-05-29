import addItemToCart from "../Util/addItemToCart";
import {
  ADD_ITEM,
  ADD_ONE,
  REMOVE_ITEM,
  DELETE_ITEM,
  cartType,
  itemType,
  CLEAR_CART,
} from "./cart-types";
import removeItemFromCart from "../Util/removeItemFromCart";

type actionType = {
  type: string;
  payload?: itemType;
};

const cartReducer = (state: cartType, action: actionType) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case ADD_ONE:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload, true),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
      };
    case DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
