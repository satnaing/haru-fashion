import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import {useRouter} from "next/router";
import CategoryItem from "../../components/Reusable/CategoryItem";
import {GetServerSideProps, GetStaticProps} from "next";

const CategoryPage = () => {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "",])
  const router = useRouter()
  const {category} = router.query
  useEffect(() => {
    category && console.log("AAA")
  }, [category])
  return (
      <>
        <Header/>
        <div className='grid grid-cols-4 gap-2 p-2'>
          {data.map((item, index) => {
            return (
                <div key={'CAT_PAGE_ITEM_' + index} className=' col-span-2 md:col-span-2'>
                  <CategoryItem title={"aaaa"} img={"img1"} name={"aaaaa"} link={"/"+category+"/"+"aaaa"}/>
                </div>
            )
          })}
        </div>
      </>
  );
};

export default CategoryPage;

export const etServerSideProps: GetServerSideProps = async ({locale}) => {
  return {
    props: {
      messages: {
        ...require(`../../messages/common/${locale}.json`),
      },
    },
  };
};