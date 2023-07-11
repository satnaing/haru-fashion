import React, {FC} from 'react';
import OverlayContainer from "../OverlayContainer/OverlayContainer";
import LinkButton from "../Buttons/LinkButton";

type CatItemType = {
    title:string
    img:string
    name:string
}
const CategoryItem:FC<CatItemType> = ({title,img,name}) => {
    return (
        <div className="w-full">
            <OverlayContainer
                imgSrc={"/images/"+img+".png"}
                imgSrc2={"/images/"+img+".png"}
                imgAlt={name}
            >
                <LinkButton
                    href={`/product-category/${name}`}
                    extraClass="absolute bottom-10-per sm:right-10-per z-20 text-xs bg-opacity-80 font-bold"
                >
                    {title}
                </LinkButton>
            </OverlayContainer>
        </div>
    );
};

export default CategoryItem;