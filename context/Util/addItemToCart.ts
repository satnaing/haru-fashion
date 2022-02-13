import { itemType } from "../cart/cart-types";

const addItemToCart = (
  cartItems: itemType[],
  item: itemType,
  add_one = false
) => {
  const duplicate = cartItems.some((cartItem) => cartItem.id === item.id);

  if (duplicate) {
    return cartItems.map((cartItem) => {
      let itemQty = 0;
      !item.qty || add_one
        ? (itemQty = cartItem.qty! + 1)
        : (itemQty = item.qty);

      console.log(itemQty);
      return cartItem.id === item.id ? { ...cartItem, qty: itemQty } : cartItem;
    });
  }
  // console.log(itemQty);
  let itemQty = 0;
  !item.qty ? itemQty++ : (itemQty = item.qty);
  return [
    ...cartItems,
    {
      id: item.id,
      name: item.name,
      price: item.price,
      img1: item.img1,
      img2: item.img2,
      qty: itemQty,
    },
  ];
};

export default addItemToCart;
