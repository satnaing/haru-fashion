import React, {FC} from 'react';
import Image from "next/image";
import {useTranslations} from "next-intl";

type Props = {
    image:string,
    name:string
    weight:string
    wage:string
}
const ProductItem:FC<Props> = ({image,name,weight,wage}) => {
    const t = useTranslations("Product");
    return (
        <div className='text-right'>
            <div><Image width={250} height={250} layout='responsive' src='/images/img1.png' /></div>
            <div className="my-2">{name}</div>
            <div className='flex gap-2 flex-row-reverse items-center'>
                <div className="text-xs text-gray400">{":"+t("weight")}</div>
                <div className='flex flex-row-reverse gap-1'>
                    <span className='text-sm'>{weight}</span>
                    <span className='text-xs text-gray400'>{t("gram")}</span>
                </div>
            </div>
            <div className='flex gap-2 flex-row-reverse items-center'>
                <div className="text-xs text-gray400">{":"+t("wage")}</div>
                <div className='flex flex-row-reverse gap-1'>
                    <span className='text-sm'>{wage}</span>
                    <span className='text-xs text-gray400'>{t("gram")}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;