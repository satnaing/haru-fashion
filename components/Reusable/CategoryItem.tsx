import React, {FC} from 'react';
import OverlayContainer from "../OverlayContainer/OverlayContainer";
import LinkButton from "../Buttons/LinkButton";

type CatItemType = {
  title: string
  img: string
  name: string
  link: string
}
const CategoryItem: FC<CatItemType> = ({title, img, name, link}) => {
  return (
      <div className="w-full">
        <OverlayContainer
            imgSrc={img ?? "/images/img1.png"}
            imgSrc2={img ?? "/images/img1.png"}
            imgAlt={name}
        >
          <LinkButton
              href={link}
              extraClass="absolute bottom-10-per sm:right-10-per z-20 text-xs bg-opacity-80 font-bold"
          >
            {title}
          </LinkButton>
        </OverlayContainer>
      </div>
  );
};

export default CategoryItem;