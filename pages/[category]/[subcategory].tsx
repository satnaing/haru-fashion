import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import {useRouter} from "next/router";
import ProductItem from "../../components/Reusable/ProductItem";
import {GetServerSideProps, GetStaticProps} from "next";

const SubCategoryPage = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "",])
  const router = useRouter()
  const {subcategory} = router.query
  useEffect(() => {
    subcategory && console.log("AAA")
  }, [subcategory])
  return (
      <>
        <Header/>
        <div className='grid grid-cols-4 gap-2 p-2'>
          {data.map((item, index) => {
            return (
                <div key={'CAT_PAGE_ITEM_' + index} className=' col-span-2 md:col-span-2'>
                  <ProductItem image={"img1"} name={"name"} weight={"8-18"} wage={"40"} />
                </div>
            )
          })}
        </div>
      </>
  );
};

export default SubCategoryPage;

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
  return {
    props: {
      messages: {
        ...require(`../../messages/common/${locale}.json`),
      },
    },
  };
};
