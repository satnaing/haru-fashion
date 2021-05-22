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
import CartContext from "../context/CartContext";
import GhostButton from "../components/Buttons/GhostButton";
import TextButton from "../components/Buttons/TextButton";

// let w = window.innerWidth;

const ShoppingCart = () => {
  const { cart, addOne, removeItem, deleteItem, clearCart } =
    useContext(CartContext);

  let subtotal = 0;

  return (
    <div>
      <Header />
      <div className="px-20 w-full border-t-2 border-gray100">
        <h1 className="text-4xl mt-6 mb-2 animatee__animated animate__bounce">
          Shopping Cart
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
      <div className="px-20 mb-14 flex">
        <div className="h-full w-4/6 mr-4">
          <table className="w-full mb-6">
            <thead>
              <tr className="border-t-2 border-b-2 border-gray200">
                <th className="font-normal py-2 w-72">Product Details</th>
                <th
                  className={`font-normal py-2 ${
                    cart.length === 0 ? "text-center" : "text-right"
                  }`}
                >
                  Unit Price
                </th>
                <th className="font-normal py-2">Quantity</th>
                <th className="font-normal py-2 text-right">Amount</th>
                <th
                  className="font-normal py-2 text-right"
                  style={{ minWidth: "3rem" }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr className="w-full text-center h-60 border-b-2 border-gray200">
                  <td colSpan={5}>Cart is empty!</td>
                </tr>
              ) : (
                cart.map((item) => {
                  subtotal += item.price * item.qty;
                  return (
                    <tr className="border-b-2 border-gray200" key={item.id}>
                      <td className="my-3 flex items-center space-x-2">
                        <img src={item.img1} alt="" className="h-32 mr-4" />
                        <span>{item.name}</span>
                      </td>
                      <td className="text-right text-gray400">
                        $ {item.price}
                      </td>
                      <td>
                        <div className="w-2/6 mx-auto flex border border-gray300 divide-x-2 divide-gray300">
                          <div
                            onClick={() => removeItem(item)}
                            className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
                          >
                            -
                          </div>
                          <div className="h-full w-12 flex justify-center items-center pointer-events-none">
                            {item.qty}
                          </div>
                          <div
                            onClick={() => addOne(item)}
                            className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="text-right text-gray400">
                        $ {item.price * item.qty}
                      </td>
                      <td className="text-right" style={{ minWidth: "3rem" }}>
                        <button
                          onClick={() => deleteItem(item)}
                          type="button"
                          className="outline-none text-gray300 hover:text-gray500 focus:outline-none text-2xl"
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
            <GhostButton onClick={clearCart} value="Clear Cart" size="lg" />
            {/* <TextButton value="Clear Cart" /> */}
          </div>
        </div>
        <div className="h-full w-4/12">
          {/* Cart Totals */}
          <div className="border border-gray500 divide-y-2 divide-gray200 p-6">
            <h2 className="text-xl mb-3">Cart totals</h2>
            <div className="flex justify-between py-2">
              <span>SUBTOTAL</span>
              <span>$ {subtotal}</span>
            </div>
            <div className="py-3">
              <span>DELIVERY</span>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <input
                      type="radio"
                      name="deli"
                      value="Within Yangon"
                      id="ygn"
                      defaultChecked
                    />{" "}
                    <label htmlFor="ygn" className="cursor-pointer">
                      Within Yangon
                    </label>
                  </div>
                  <span>$ 2.00</span>
                </div>
                <div className="flex justify-between">
                  <div>
                    <input
                      type="radio"
                      name="deli"
                      value="Other Cities"
                      id="others"
                    />{" "}
                    <label htmlFor="others" className="cursor-pointer">
                      Other Cities
                    </label>
                  </div>
                  <span>$ 7.00</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between py-3">
              <span>TOTAL</span>
              <span>$ 230.00</span>
            </div>
            <Button value="Proceed to Checkout" size="xl" extraClass="w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
