import { useContext, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

import CartContext from "../../context/cart/CartContext";
import WishlistContext from "../../context/wishlist/WishlistContext";
import { db } from "../../firebase/firebase";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card5 from "../../components/Card/Card5";
import Pagination from "../../components/Util/Pagination";
import useWindowSize from "../../components/Util/useWindowSize";
import { dbItemType, itemType } from "../../context/cart/cart-types";

type Props = {
  items: dbItemType[];
};

const ProductCategory: React.FC<Props> = ({ items }) => {
  const { addItem } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewWidth, setViewWidth] = useWindowSize();

  const router = useRouter();
  const { category } = router.query;

  // Change itemPerPage to 8 for good layout
  useEffect(() => {
    viewWidth <= 1280 ? setItemPerPage(8) : setItemPerPage(10);
  }, [viewWidth]);

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
      {/* {t("description")} */}
      <Header title={`${capitalizedCategory} - Haru Fashion`} />
      <div className="px-6 sm:px-12 md:px-20 bg-lightgreen h-16 w-full flex items-center">
        <div className="breadcrumb">
          <Link href="/">
            <a className="text-gray400">Home</a>
          </Link>{" "}
          / <span className="capitalize">{category}</span>
        </div>
      </div>
      <div className="px-6 sm:px-12 md:px-20 w-full mt-8">
        <h3 className="text-4xl mb-2 capitalize">{category}</h3>
        <div className="flex justify-between mt-6">
          <span>
            Showing {firstIndexItem + 1} ~ {lastIndexItem} of {totalItems}
          </span>
          <span>Filter by: Price</span>
        </div>
      </div>
      <div className="px-2 sm:px-8 md:px-16 mb-14">
        <div className="flex flex-wrap mb-8">
          {currentItems.map((item) => (
            <Card5
              key={item.name}
              imgSrc1={item.img1 as string}
              imgSrc2={item.img2 as string}
              itemName={item.name}
              itemPrice={item.price}
              onAddWishlist={() => addToWishlist!(item)}
              onClick={() => addItem!(item)}
              itemLink={`/products/${encodeURIComponent(item.id)}`}
            />
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
