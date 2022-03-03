import { useState } from "react";
import { useTranslations } from "next-intl";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Button from "../components/Buttons/Button";
import { GetStaticProps } from "next";
import { roundDecimal } from "../components/Util/utilFunc";
import { useCart } from "../context/cart/CartProvider";
import Input from "../components/Input/Input";
import { itemType } from "../context/wishlist/wishlist-type";
import { useAuth } from "../context/AuthContext";

// let w = window.innerWidth;

const ShoppingCart = () => {
  const t = useTranslations("CartWishlist");
  const { cart } = useCart();
  const auth = useAuth();
  const [deli, setDeli] = useState("Pickup");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Form Fields
  const [name, setName] = useState(auth.user?.fullname || "");
  const [email, setEmail] = useState(auth.user?.email || "");
  const [phone, setPhone] = useState(auth.user?.phone || "");
  const [address, setAddress] = useState(auth.user?.shippingAddress || "");

  let disableOrder = true;

  if (name !== "" && email !== "" && phone !== "" && address !== "") {
    disableOrder = false;
  }

  let subtotal: number | string = 0;

  subtotal = roundDecimal(
    cart.reduce(
      (accumulator: number, currentItem: itemType) =>
        accumulator + currentItem.price * currentItem!.qty!,
      0
    )
  );

  let deliFee = 0;
  if (deli === "Yangon") {
    deliFee = 2.0;
  } else if (deli === "Others") {
    deliFee = 7.0;
  }

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`Shopping Cart - Haru Fashion`} />

      <main id="main-content">
        {/* ===== Heading & Continue Shopping */}
        <div className="app-max-width px-4 sm:px-8 md:px-20 w-full border-t-2 border-gray100">
          <h1 className="text-2xl sm:text-4xl text-center sm:text-left mt-6 mb-2 animatee__animated animate__bounce">
            {t("checkout")}
          </h1>
        </div>

        {/* ===== Cart Table Section ===== */}
        <div className="app-max-width px-4 sm:px-8 md:px-20 mb-14 flex flex-col lg:flex-row">
          <div className="h-full w-full lg:w-7/12 mr-8">
            <div className="my-4">
              <label htmlFor="name" className="text-lg">
                {t("name")}
              </label>
              <Input
                name="name"
                type="text"
                extraClass="w-full"
                border="border-2 border-gray400"
                value={name}
                onChange={(e) => setName((e.target as HTMLInputElement).value)}
                required
              />
            </div>

            <div className="my-4">
              <label htmlFor="email" className="text-lg">
                {t("email_address")}
              </label>
              <Input
                name="email"
                type="email"
                extraClass="w-full"
                border="border-2 border-gray400"
                value={email}
                onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                required
              />
            </div>

            <div className="my-4">
              <label htmlFor="phone" className="text-lg">
                {t("phone")}
              </label>
              <Input
                name="phone"
                type="text"
                extraClass="w-full"
                border="border-2 border-gray400"
                value={phone}
                onChange={(e) => setPhone((e.target as HTMLInputElement).value)}
                required
              />
            </div>

            <div className="my-4">
              <label htmlFor="address" className="text-lg">
                {t("shipping_address")}
              </label>
              <textarea
                aria-label="Shipping Address"
                className="w-full border-2 border-gray400 p-4 outline-none"
                rows={4}
                value={address}
                onChange={(e) =>
                  setAddress((e.target as HTMLTextAreaElement).value)
                }
              />
            </div>
          </div>
          <div className="h-full w-full lg:w-5/12 mt-10 lg:mt-4">
            {/* Cart Totals */}
            {/* divide-y-2 divide-gray200 */}
            <div className="border border-gray500 p-6 divide-y-2 divide-gray200">
              <div className="flex justify-between">
                <span className="text-base uppercase mb-3">{t("product")}</span>
                <span className="text-base uppercase mb-3">
                  {t("subtotal")}
                </span>
              </div>

              <div className="pt-2">
                {cart.map((item) => (
                  <div className="flex justify-between mb-2" key={item.id}>
                    <span className="text-base font-medium">
                      {item.name}{" "}
                      <span className="text-gray400">x {item.qty}</span>
                    </span>
                    <span className="text-base">
                      $ {roundDecimal(item.price * item!.qty!)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="py-3 flex justify-between">
                <span className="uppercase">{t("subtotal")}</span>
                <span>$ {subtotal}</span>
              </div>

              <div className="py-3">
                <span className="uppercase">{t("delivery")}</span>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between">
                    <div>
                      <input
                        type="radio"
                        name="deli"
                        value="Pickup"
                        id="pickup"
                        checked={deli === "Pickup"}
                        onChange={() => setDeli("Pickup")}
                      />{" "}
                      <label htmlFor="pickup" className="cursor-pointer">
                        {t("store_pickup")}
                      </label>
                    </div>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <input
                        type="radio"
                        name="deli"
                        value="Yangon"
                        id="ygn"
                        checked={deli === "Yangon"}
                        onChange={() => setDeli("Yangon")}
                        // defaultChecked
                      />{" "}
                      <label htmlFor="ygn" className="cursor-pointer">
                        {t("within_yangon")}
                      </label>
                    </div>
                    <span>$ 2.00</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <input
                        type="radio"
                        name="deli"
                        value="Others"
                        id="others"
                        checked={deli === "Others"}
                        onChange={() => setDeli("Others")}
                      />{" "}
                      <label htmlFor="others" className="cursor-pointer">
                        {t("other_cities")}
                      </label>
                    </div>
                    <span>$ 7.00</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between py-3">
                  <span>{t("grand_total")}</span>
                  <span>$ {roundDecimal(+subtotal + deliFee)}</span>
                </div>

                <div className="grid gap-4 mt-2 mb-4">
                  <label
                    htmlFor="plan-cash"
                    className="relative flex flex-col bg-white p-5 rounded-lg shadow-md border border-gray300 cursor-pointer"
                  >
                    <span className="font-semibold text-gray-500 text-base leading-tight capitalize">
                      {t("cash_on_delivery")}
                    </span>
                    <input
                      type="radio"
                      name="plan"
                      id="plan-cash"
                      value="cash"
                      className="absolute h-0 w-0 appearance-none"
                      onChange={() => setPaymentMethod("cash")}
                    />
                    <span
                      aria-hidden="true"
                      className={`${
                        paymentMethod === "cash" ? "block" : "hidden"
                      } absolute inset-0 border-2 border-gray500 bg-opacity-10 rounded-lg`}
                    >
                      <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-gray100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5 text-green-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </label>
                  <label
                    htmlFor="plan-bank"
                    className="relative flex flex-col bg-white p-5 rounded-lg shadow-md border border-gray300 cursor-pointer"
                  >
                    <span className="font-semibold text-gray-500 leading-tight capitalize">
                      {t("bank_transfer")}
                    </span>
                    <span className="text-gray400 text-sm mt-1">
                      {t("bank_transfer_desc")}
                    </span>
                    <input
                      type="radio"
                      name="plan"
                      id="plan-bank"
                      value="bank"
                      className="absolute h-0 w-0 appearance-none"
                      onChange={() => setPaymentMethod("bank")}
                    />
                    <span
                      aria-hidden="true"
                      className={`${
                        paymentMethod === "bank" ? "block" : "hidden"
                      } absolute inset-0 border-2 border-gray500 bg-opacity-10 rounded-lg`}
                    >
                      <span className="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-gray100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5 text-green-600"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              <Button
                value={t("place_order")}
                size="xl"
                extraClass={`w-full`}
                disabled={disableOrder}
              />
            </div>
          </div>
        </div>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../messages/common/${locale}.json`)).default,
    },
  };
};

export default ShoppingCart;
