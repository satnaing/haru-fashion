import React, {FC} from 'react';
import {useTranslations} from "next-intl";

type Props = {
  total:number
  isActive:boolean
  clickHandler:()=>void
}

const StickyPayment:FC<Props> = ({total,isActive,clickHandler}) => {
  const t = useTranslations("Product")
  return (
      <div className='fixed bottom-0 w-full bg-white border-t border-gray200 py-2 px-4'>
        <div className="flex items-stretch justify-between  ">
          <div className='flex flex-1 items-center justify-center'>
            <button onClick={clickHandler} className={`bg-gray500 text-white w-full h-full ${isActive ? "opacity-1 " : "opacity-30 pointer-events-none" }`}>
              {t("addToCart")}
            </button>
          </div>
          <div className="flex flex-col flex-1">
            <h4 className="text-gray400">{t("weight")}</h4>
            <div className='rtl'>{total} {t("gram")}  </div>
          </div>
        </div>
      </div>
  );
};

export default StickyPayment;
