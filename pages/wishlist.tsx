import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Card5 from "../components/Card/Card5";
import { Menu } from "@headlessui/react";
import { useCallback, useContext, useEffect, useState } from "react";
import Pagination from "../components/Util/Pagination";
import Items from "../components/Util/Items";
import useWindowSize from "../components/Util/useWindowSize";
import Link from "next/link";
import LeftArrow from "../public/icons/LeftArrow";
import Button from "../components/Buttons/Button";
import CartContext from "../context/cart/CartContext";
import WishlistContext from "../context/wishlist/WishlistContext";
import GhostButton from "../components/Buttons/GhostButton";
import TextButton from "../components/Buttons/TextButton";

// let w = window.innerWidth;

const Wishlist = () => {
  const [deli, setDeli] = useState("Yangon");
  const { cart, addOne, removeItem, deleteItem, clearCart } =
    useContext(CartContext);
  const { wishlist, addToWishlist, deleteWishlistItem, clearWishlist } =
    useContext(WishlistContext);

  let subtotal = 0;

  return (
    <div>
      <Header />
      <div className="px-6 md:px-20 w-full border-t-2 border-gray100">
        <h1 className="text-2xl sm:text-4xl text-center sm:text-left mt-6 mb-2 animatee__animated animate__bounce">
          Wishlist
        </h1>
        <div className="mt-6 mb-3">
          <Link href="/">
            <a className="inline-block">
              <LeftArrow size="sm" extraClass="inline-block" /> Continue
              Shopping
            </a>
          </Link>
        </div>
      </div>
      <div className="px-6 md:px-20 mb-14 flex flex-col lg:flex-row">
        <div className="h-full w-full">
          <table className="w-full mb-6">
            <thead>
              <tr className="border-t-2 border-b-2 border-gray200">
                <th className="font-normal hidden md:table-cell text-left sm:text-center py-2 xl:w-72">
                  Product Image
                </th>
                <th className="font-normal hidden md:table-cell text-left sm:text-center py-2 xl:w-72">
                  Product Price
                </th>
                <th className="font-normal md:hidden text-left sm:text-center py-2 xl:w-72">
                  Product Details
                </th>
                <th
                  className={`font-normal py-2 ${
                    wishlist.length === 0 ? "text-center" : "text-right"
                  }`}
                >
                  Unit Price
                </th>
                <th className="font-normal hidden sm:table-cell py-2 max-w-xs">
                  Add
                </th>
                <th className="font-normal hidden sm:table-cell py-2 text-right w-10">
                  Remove
                </th>
                <th className="font-normal sm:hidden py-2 text-right w-10">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {wishlist.length === 0 ? (
                <tr className="w-full text-center h-60 border-b-2 border-gray200">
                  <td colSpan={5}>Wishlist is empty!</td>
                </tr>
              ) : (
                wishlist.map((item) => {
                  subtotal += item.price * item.qty;
                  return (
                    <tr className="border-b-2 border-gray200" key={item.id}>
                      <td className="my-3 flex justify-center flex-col items-start sm:items-center">
                        <img src={item.img1} alt="" className="h-32 xl:mr-4" />
                        <span className="md:hidden">{item.name}</span>
                      </td>
                      <td className="text-center hidden md:table-cell">
                        {item.name}
                      </td>
                      <td className="text-right text-gray400">
                        $ {item.price}
                      </td>
                      <td className="text-center hidden sm:table-cell max-w-xs text-gray400">
                        <Button
                          value="Add to cart"
                          extraClass="hidden sm:block m-auto"
                          onClick={() => addOne(item)}
                        />
                      </td>
                      <td
                        className="text-right pl-8"
                        style={{ minWidth: "3rem" }}
                      >
                        <Button
                          value="Add"
                          onClick={() => addOne(item)}
                          extraClass="sm:hidden mb-4"
                        />
                        <button
                          onClick={() => deleteWishlistItem(item)}
                          type="button"
                          className="outline-none text-gray300 hover:text-gray500 focus:outline-none text-4xl sm:text-2xl"
                        >
                          &#10005;
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div>
            <GhostButton
              onClick={clearWishlist}
              extraClass="hidden sm:inline-block"
              value="Clear Wishlist"
              size="lg"
            />
            {/* <TextButton value="Clear Cart" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wishlist;
