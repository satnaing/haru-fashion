const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
