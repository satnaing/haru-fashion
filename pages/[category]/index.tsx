import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import {useRouter} from "next/router";
import CategoryItem from "../../components/Reusable/CategoryItem";
import {GetServerSideProps, GetStaticProps} from "next";
import useFetch from "../../hooks/useFetch";
import {ApiRoutes} from "../../enums/ApiRoutes";
import {AxiosRequestConfig} from "axios";
import {CategoryType} from "../../types";


type fetchType = {
    request:(axiosParams: AxiosRequestConfig<any>) => void,
    data:CategoryType,
    error:any | null
    isLoaded:boolean
}
const CategoryPage = () => {

    const router = useRouter()
    const {category} = router.query
    const {request, data, error, isLoaded}:fetchType = useFetch()

    useEffect(() => {
        category &&
        request({url: ApiRoutes.CLIENT_CATEGORIES + "/" + category})
    }, [category])


    return (
        <>
            <Header/>
            {error && alert(error)}
            {
                isLoaded && data &&
                <div className='grid grid-cols-4 gap-2 p-2'>
                    {data.subCategories.map((item, index) => {
                        return (
                            <div key={'CAT_PAGE_ITEM_' + index} className=' col-span-2 md:col-span-2'>
                                <CategoryItem title={item.title} img={item.thumbnail} name={item.slug}
                                              link={"/" + category + "/" + item.slug}/>
                            </div>
                        )
                    })}
                </div>
            }
        </>
    );
};

export default CategoryPage;

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
    return {
        props: {
            messages: {
                ...require(`../../messages/common/${locale}.json`),
            },
        },
    };
};