import React from 'react';
import Image from "next/image";
import ourShop from "../../../public/images/img1.png";

const AboutUsContainer = ({title,desc}:{title:string,desc:string}) => {
    return (
        <section className="app-max-width mt-16 mb-20 flex flex-col justify-center items-center text-center">
            <div className="textBox w-3/4 md:w-2/4 lg:w-2/5 mb-6">
                <h2 className="text-3xl mb-6">{title}</h2>
                <span className="w-full">{desc}</span>
            </div>
            <div className="w-full app-x-padding flex justify-center">
                <Image src={ourShop} alt="Our Shop"/>
            </div>
        </section>
    );
};

export default AboutUsContainer;