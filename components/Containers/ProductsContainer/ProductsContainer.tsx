import React, {FC} from 'react';
import ProductItem from "../../Reusable/ProductItem";

type Props={
    title:string
    desc:string
    products:any[]|undefined
}
const ProductsContainer:FC<Props> = ({title,desc,products}) => {
    return (
        <section className="app-max-width w-full h-full flex flex-col justify-center mt-16 mb-20">
            <div className="flex justify-center">
                <div className="w-3/4 sm:w-1/2 md:w-1/3 text-center mb-8">
                    <h2 className="text-2xl mb-2">{title}</h2>
                    <span className='text-gray400'>{desc}</span>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-x-2 gap-y-6 px-4'>
                {products?.map((item,index)=>{
                  const weightText =item.minWeight===item.maxWeight ? item.minWeight  :item.minWeight+"-"+item.maxWeight

                  return(
                        <div  key={"PRODUCT_ITEM_"+index} className='col-span-2 lg:col-span-1'>
                        <ProductItem weight={weightText} name={item.title} link={"products/"+item.slug}
                                     image={item.thumbnail} wage={item.wage}/>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default ProductsContainer;