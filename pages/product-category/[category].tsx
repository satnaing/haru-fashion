import { useCallback, useEffect, useState } from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { db } from "../../firebase/firebase";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Util/Pagination";
import useWindowSize from "../../components/Util/useWindowSize";
import { apiProductsType, itemType } from "../../context/cart/cart-types";
import axios from "axios";

type Props = {
  items: itemType[];
  page: number;
  numberOfProducts: number;
};

const ProductCategory: React.FC<Props> = ({
  items,
  page,
  numberOfProducts,
}) => {
  const [itemPerPage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewWidth] = useWindowSize();
  const t = useTranslations("Category");

  const router = useRouter();
  const { category } = router.query;
  const lastPage = Math.ceil(numberOfProducts / 10);

  const capitalizedCategory =
    category!.toString().charAt(0).toUpperCase() +
    category!.toString().slice(1);

  const firstIndex = page === 1 ? page : page * 10 - 9;
  const lastIndex = page * 10;

  return (
    <div>
      {/* ===== Head Section ===== */}
      <Header title={`${capitalizedCategory} - Haru Fashion`} />

      <main id="main-content">
        {/* ===== Breadcrumb Section ===== */}
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

        {/* ===== Heading & Filter Section ===== */}
        <div className="app-x-padding app-max-width w-full mt-8">
          <h3 className="text-4xl mb-2 capitalize">{t(category as string)}</h3>
          <div className="flex justify-between mt-6">
            <span>
              {t("showing_from_to", {
                from: firstIndex,
                to: numberOfProducts < lastIndex ? numberOfProducts : lastIndex,
                all: numberOfProducts,
              })}
            </span>
            <span>{t("sort_by")}: Price</span>
          </div>
        </div>

        {/* ===== Main Content Section ===== */}
        <div className="app-x-padding app-max-width mt-3 mb-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">
            {items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
          <Pagination currentPage={page} lastPage={lastPage} />
        </div>
      </main>

      {/* ===== Footer Section ===== */}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
  query: { page = 1 },
}) => {
  const paramCategory = params!.category as string;

  const start = +page === 1 ? 0 : (+page - 1) * 10;

  const numberOfProductsResponse = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products/count?category=${paramCategory}`
  );
  const numberOfProducts = +numberOfProductsResponse.data.count;

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/products?order_by=createdAt.desc&offset=${start}&limit=10&category=${paramCategory}`
  );
  const fetchedProducts = res.data.data.map((product: apiProductsType) => ({
    ...product,
    img1: product.image1,
    img2: product.image2,
  }));

  let items: apiProductsType[] = [];
  fetchedProducts.forEach((product: apiProductsType) => {
    items.push(product);
  });

  return {
    props: {
      messages: (await import(`../../messages/common/${locale}.json`)).default,
      items,
      numberOfProducts,
      page: +page,
    },
  };
};

export default ProductCategory;
