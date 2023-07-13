import React, {FC} from 'react';
import Link from "next/link";


type Props = {
  category: { title:string,url:string },
  name:string
}
const Breadcrumb:FC<Props> = ({category,name}) => {
  return (
      <div className="bg-lightgreen h-16 w-full flex items-center border-t-2 border-gray200">
        <div className="app-x-padding app-max-width w-full">
          <div className="breadcrumb">
            <Link href="/">
              <a className="text-gray400">{t("home")}</a>
            </Link>{" "}
            /{" "}
            <Link href={`/product-category/${category}`}>
              <a className="text-gray400 capitalize">
                {t(product.categoryName as string)}
              </a>
            </Link>{" "}
            / <span>{product.name}</span>
          </div>
        </div>
      </div>
  );
};

export default Breadcrumb;
