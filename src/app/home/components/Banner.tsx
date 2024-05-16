'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Banner = () => {
    const [bannerIndex, setBannerIndex] = useState(0);
    const banners = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

    useEffect(() => {
        const interval = setInterval(() => {
            setBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <div className="relative w-screen h-[calc(100vh-4rem)] md:left-0 left-[calc(-50vw+50%)] md:w-full">
            <Image
                alt="banner"
                src={banners[bannerIndex]}
                layout="fill"
                objectFit="cover"
                className="md:rounded-[0.625rem]"
            />
        </div>
    );
};

export default Banner;
