import { itemType } from "../cart-types";

const addItemToCart = (cartItems: itemType[], item: itemType) => {
  const duplicate = cartItems.some((cartItem) => cartItem.id === item.id);
  if (duplicate) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, qty: cartItem.qty + 1 }
        : cartItem
    );
  }
  return [
    ...cartItems,
    {
      id: item.id,
      name: item.name,
      price: item.price,
      img1: item.img1,
      img2: item.img2,
      qty: 1,
    },
  ];
};

export default addItemToCart;
