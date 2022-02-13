import { itemType } from "../wishlist/wishlist-type";

const addWishlist = (wishlistItems: itemType[], item: itemType) => {
  const duplicate = wishlistItems.some(
    (wishlistItem) => wishlistItem.id === item!.id
  );

  if (!duplicate) {
    return [...wishlistItems, { ...item }];
  } else {
    return [...wishlistItems];
  }
};

export default addWishlist;
