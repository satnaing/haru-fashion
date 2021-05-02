import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import BagIcon from "../../public/icons/BagIcon";
import Button from "../Buttons/Button";
import GhostButton from "../Buttons/GhostButton";
import Item from "./Item";

const items = [
  {
    id: 1,
    name: "Zipped Joggers",
    img: "/items/minimalist-img-6-364x492.jpg",
    price: 243,
    qty: 1,
  },
  {
    id: 2,
    name: "Washed Denim Shirt",
    img: "/items/minimalist-img-61-364x492.jpg",
    price: 135,
    qty: 2,
  },
];

export default function CartItem() {
  const [open, setOpen] = useState(false);
  const { cart } = useContext(CartContext);

  let noOfItems = 0;
  cart.forEach((item) => {
    noOfItems += item.qty;
  });

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <div className="relative">
        <button
          type="button"
          onClick={openModal}
          className="focus:outline-none"
        >
          <BagIcon />
          {/* {cart[1]} */}
          <span className="absolute text-xs -top-3 bg-gray500 text-gray100 py-1 px-2 rounded-full">
            {noOfItems}
          </span>
        </button>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen text-right">
            <Transition.Child
              as={Fragment}
              //   enter="ease-out duration-300"
              //   enterFrom="opacity-0"
              //   enterTo="opacity-100"
              //   leave="ease-in duration-200"
              //   leaveFrom="opacity-100"
              //   leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray500 opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            {/* <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span> */}
            <Transition.Child
              as={Fragment}
              enter="ease-linear duration-600"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="ease-linear duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                style={{ height: "100vh" }}
                className="relative inline-block dur h-screen w-full max-w-md overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
              >
                <div className="bg-lightgreen flex justify-between p-6">
                  <h3 className="text-xl">Cart (3)</h3>
                  <button
                    type="button"
                    className="outline-none focus:outline-none text-2xl"
                    onClick={closeModal}
                  >
                    &#10005;
                  </button>
                </div>

                <div className="h-full">
                  <div className="itemContainer px-4 h-2/3 w-full flex-grow flex-shrink overflow-y-auto">
                    {cart.map((item) => {
                      return (
                        <Item
                          key={item.id}
                          name={item.name}
                          price={item.price}
                          qty={item.qty}
                          img={item.img1}
                        />
                      );
                    })}
                  </div>
                  <div className="btnContainer mt-4 px-4 h-1/3 mb-20 w-full flex flex-col ">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$ 403</span>
                    </div>
                    <GhostButton
                      value="View Cart"
                      extraClass="text-center my-4"
                      size="lg"
                    />
                    <Button
                      value="Checkout"
                      extraClass="text-center"
                      size="lg"
                    />
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
