"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

const BackToTop = () => {
    const [scrollTop, setScrollToTop] = useState(false);
    const scrollHandler = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const setShowButton = () => {
        setScrollToTop(window.scrollY > 500);
    };
    useEffect(() => {
        window.addEventListener("scroll", setShowButton);
    });

    return (
        <>
            {scrollTop && (
                <button onClick={scrollHandler}
                    className="fixed right-2.5 lg:bottom-2.5 bottom-2    animate-bounce z-40 cursor-pointer border-2 border-sky-blue bg-black rounded-full ">
                    <Image
                        className="lg:min-w-10 min-w-8 max-w-10  w-full pointer-events-none brightness-0 invert hover:invert-0"
                        src="/assets/images/webp/back-to-top.webp"
                        alt="back-to-top-img" width={24} height={24}
                    />
                </button>
            )}
        </>
    );
};
export default BackToTop;
