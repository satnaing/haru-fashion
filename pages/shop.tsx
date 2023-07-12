import React, {useEffect, useState} from "react";
import {GetStaticProps} from "next";
import axios from "axios";
import {useTranslations} from "next-intl";
import Header from "../components/Header/Header";
import Slideshow from "../components/HeroSection/Slideshow";
import {ApiRoutes} from "../enums/ApiRoutes";
import {getCookie} from "cookies-next";
import CategoryContainer from "../components/Containers/CategoryContainer/CategoryContainer";
import AboutUsContainer from "../components/Containers/AboutUsContainer/AboutUsContainer";
import ProductsContainer from "../components/Containers/ProductsContainer/ProductsContainer";

type CatItemsType = {
    images: string[],
    thumbnail: string,
    title: string
    slug: string,
    _id: string,
    isActive: boolean,
    products?: any[]
};

const config = {
    headers: {Authorization: `Bearer ${getCookie("user") && JSON.parse(getCookie("user") as string).token}`}
};

const Home = () => {
    const t = useTranslations("Index");
    const [data, setData] = useState<CatItemsType[]>([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(ApiRoutes.BASE_URL + ApiRoutes.CLIENT_CATEGORIES, config);
            const fetchedData = res.data;
            setData(fetchedData);
            setIsFetching(false);
        };
        fetchData();
    }, [isFetching, data.length]);


    return (
        <>
            <Header/>
            <main id="main-content">
                <Slideshow/>
                <CategoryContainer data={data.slice(0, 4)}/>
                <ProductsContainer title={t("best_selling")}
                                   desc={t("best_selling_desc")}
                                   products={data.slice(9, 10)[0]?.products}/>
                <CategoryContainer data={data.slice(4, 8)}/>
                <div className="border-gray100 border-b-2"></div>
                <AboutUsContainer title={t("about_us")}
                                  desc={t("about_us_desc")}/>
            </main>


        </>
    );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            messages: {
                ...require(`../messages/common/${locale}.json`),
            },
        },
    };
};

export default Home;


{/* ===== Featured Products Section ===== */
}
{/*<section className="app-max-width app-x-padding my-16 flex flex-col">*/
}
{/*    <div className="text-center mb-6">*/
}
{/*        <h2 className="text-3xl">{t("featured_products")}</h2>*/
}
{/*    </div>*/
}
{/*    <div*/
}
{/*        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10 sm:gap-y-6 mb-10">*/
}
{/*        /!*{currentItems.map((item) => (*!/*/
}
{/*        /!*  <Card key={item.id} item={item} />*!/*/
}
{/*        /!*))}*!/*/
}
{/*    </div>*/
}
{/*    <div className="flex justify-center">*/
}
{/*        <Button*/
}
{/*            value={!isFetching ? t("see_more") : t("loading")}*/
}
{/*            onClick={handleSeemore}*/
}
{/*        />*/
}
{/*    </div>*/
}
{/*</section>*/
}

{/*/!* ===== Testimonial Section ===== *!/*/
}
{/*<section className="w-full hidden h-full py-16 md:flex flex-col items-center bg-lightgreen">*/
}
{/*    <h2 className="text-3xl">{t("testimonial")}</h2>*/
}
{/*    <TestiSlider/>*/
}
{/*</section>*/
}

{/*/!* ===== Footer Section ===== *!/*/
}
{/*<Footer />*/
}

// const handleSeemore = async (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>
// ) => {
//     e.preventDefault();
//     setIsFetching(true);
// };

