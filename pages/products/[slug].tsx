import React, {useEffect, useState} from 'react';
import {GetServerSideProps} from "next";
import Header from "../../components/Header/Header";
import useFetch from "../../hooks/useFetch";
import {useRouter} from "next/router";
import {ApiRoutes} from "../../enums/ApiRoutes";
import InfoContaincer from "../../components/Product/InfoContaincer";
import Breadcrumb from "../../components/Product/Breadcrumb";
import FeatureContainer from "../../components/Product/FeatureContainer";
import {useTranslations} from "next-intl";
import CounterContainer from "../../components/Product/CounterContainer";
import StickyPament from "../../components/Product/StickyPament";
import {toast} from 'react-toastify';

const ProductPage = () => {
    const router = useRouter()
    const {slug} = router.query
    const t = useTranslations("Product");
    const [color, setColor] = useState({id: "", value: ""})
    const [size, setSize] = useState({id: "", value: ""})
    const [count, setCount] = useState(1)
    const {response,isLoaded,error, request} = useFetch()
    const {response: addResponse, request: addRequest} = useFetch()

    const addToCartHandler = async () => {
        await addRequest({
            url: ApiRoutes.CLIENT_CART + "/" + response._id + "/increment"
        }).then((res:any)=>{
            toast("با موفقیت افزوده شد",)
        })
    }

    useEffect(() => {
        slug &&
        request({
            url: ApiRoutes.CLIENT_PRODUCTS + "/" + slug
        })
    }, [slug])

    return (
        <>
            <Header/>
            {/*<Breadcrumb category={} name={} />*/}
            {
                isLoaded && response &&
                <div className='flex flex-col gap-4 text-right'>
                    <InfoContaincer name={response.title}
                                    images={[response.thumbnail, "/images/img1.png", "/images/img1.png", "/images/img1.png", "/images/img1.png"]}/>
                    <FeatureContainer title={t("size")} features={response.sizes}
                                      selectHandler={(data) => setSize(data)}
                                      selected={size.id}/>
                    <FeatureContainer title={t("color")} features={response.colors}
                                      selectHandler={(data) => setColor(data)}
                                      selected={color.id}/>

                    <CounterContainer clickHandler={(value => setCount(prev => prev + value))} currentValue={count}
                                      title={t("count")}/>
                    <br/>
                    <br/>
                    <StickyPament clickHandler={addToCartHandler} total={+size.value * count}
                                  isActive={!!size.id && !!count && !!color.id}/>
                </div>
            }
        </>
    );
};
export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({params, locale,}) => {
    return {
        props: {
            messages: (await import(`../../messages/common/${locale}.json`)).default,
        },
    };
}