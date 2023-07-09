import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <div className="w-32 h-auto">
            <Link href="/">
                <a>
                    <Image
                        className="justify-center"
                        src="/logo.svg"
                        alt="Picture of the author"
                        width={220}
                        height={50}
                        layout="responsive"
                    />
                </a>
            </Link>
        </div>
    );
};

export default Logo;