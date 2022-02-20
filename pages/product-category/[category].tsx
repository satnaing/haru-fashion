import { useCallback, useContext, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "next-intl";

import CartContext from "../../context/cart/CartContext";
import WishlistContext from "../../context/wishlist/WishlistContext";
import { db } from "../../firebase/firebase";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Util/Pagination";
import useWindowSize from "../../components/Util/useWindowSize";
import { dbItemType, itemType } from "../../context/cart/cart-types";

type Props = {
  items: dbItemType[];
};

const ProductCategory: React.FC<Props> = ({ items }) => {
  const { addItem } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [itemPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewWidth, setViewWidth] = useWindowSize();
  const t = useTranslations("Category");

  const router = useRouter();
  const { category } = router.query;

  // Change totalItems to 8 for good layout
  const changeTotalItems = useCallback(() => {
    if (viewWidth >= 992 || viewWidth < 576) {
      totalItems !== 10 && setItemPerPage(10);
    } else if (viewWidth >= 768) {
      totalItems !== 8 && setItemPerPage(8);
    } else {
      totalItems !== 9 && setItemPerPage(9);
    }
  }, [viewWidth]);

  useEffect(() => {
    changeTotalItems();
  }, [changeTotalItems]);

  const handlePage = (number: number) => {
    setCurrentPage(number);
  };

  let totalItems = items.length;
  let lastIndexItem = currentPage * itemPerPage;
  let firstIndexItem = lastIndexItem - itemPerPage;
  let currentItems = items.slice(firstIndexItem, lastIndexItem);

  const handleNext = (lastIndex: number) => {
    if (currentPage !== lastIndex) {
      setCurrentPage((prevState) => prevState + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const capitalizedCategory =
    category!.toString().charAt(0).toUpperCase() +
    category!.toString().slice(1);

  return (
    <div>
      <Header title={`${capitalizedCategory} - Haru Fashion`} />
      <div className="bg-lightgreen h-16 w-full flex items-center">
        <div className="app-x-padding app-max-width w-full">
          <div className="breadcrumb">
            <Link href="/">
              <a className="text-gray400">{t("home")}</a>
            </Link>{" "}
            / <span className="capitalize">{t(category as string)}</span>
          </div>
        </div>
      </div>
      <div className="app-x-padding app-max-width w-full mt-8">
        <h3 className="text-4xl mb-2 capitalize">{t(category as string)}</h3>
        <div className="flex justify-between mt-6">
          <span>
            {t("showing_from_to", {
              from: firstIndexItem + 1,
              to: totalItems < lastIndexItem ? totalItems : lastIndexItem,
              all: totalItems,
            })}
          </span>
          <span>{t("sort_by")}: Price</span>
        </div>
      </div>
      <div className="app-x-padding app-max-width mt-3 mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
          {currentItems.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
        <Pagination
          postPerPage={itemPerPage}
          totalPosts={totalItems}
          handlePage={handlePage}
          activePage={currentPage}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  // let products: dbItemType[] = [];
  // const querySnapshot = await db.collection("products").get();
  // querySnapshot.forEach((doc) => {
  //   products = [...products, doc.data() as dbItemType];
  // });

  // const paths = products.map((product) => ({
  //   params: { category: product.category },
  // }));

  // // console.log(paths);

  return {
    paths: [
      { params: { category: "men" }, locale: "en" },
      { params: { category: "men" }, locale: "my" },
      { params: { category: "women" }, locale: "en" },
      { params: { category: "women" }, locale: "my" },
      // { params: { category: "bag" }, locale: "en" },
      // { params: { category: "bag" }, locale: "my" },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const productRef = db.collection("products");
  const paramCategory = params!.category as string;
  const snapshot = await productRef
    .where("category", "==", paramCategory)
    .get();
  if (snapshot.empty) {
    return { props: { items: "Error" } };
  }

  let items: dbItemType[] = [];
  snapshot.forEach((doc) => {
    items = [...items, doc.data() as dbItemType];
  });

  return {
    props: {
      messages: (await import(`../../messages/common/${locale}.json`)).default,
      items,
    },
  };
};

export default ProductCategory;
