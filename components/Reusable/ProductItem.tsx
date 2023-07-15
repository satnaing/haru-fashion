import React, {FC} from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";
import Link from "next/link"

type Props = {
  image: string,
  name: string
  weight: string
  wage: string,
  link: string
}
const ProductItem: FC<Props> = ({image, name, weight, wage, link}) => {
  const t = useTranslations("Product");
  return (
      <Link href={link}>
        <a>
          <div className='text-right'>
            <div><Image width={250} height={250} layout='responsive' src={image ?? '/images/img1.png'}/></div>
            <div className="my-2">{name}</div>
            <div className='flex gap-2 flex-row-reverse items-center'>
              <div className="text-xs text-gray400">{":" + t("weight")}</div>
              <div className='flex flex-row-reverse gap-1'>
                <span className='text-sm'>{weight}</span>
                <span className='text-xs text-gray400'>{t("gram")}</span>
              </div>
            </div>
            <div className='flex gap-2 flex-row-reverse items-center'>
              <div className="text-xs text-gray400">{":" + t("wage")}</div>
              <div className='flex flex-row-reverse gap-1'>
                <span className='text-sm'>{wage}</span>
                <span className='text-xs text-gray400'>{t("percent")}</span>
              </div>
            </div>
          </div>
        </a>
      </Link>

  );
};

export default ProductItem;