"use client";
import React, { useState } from 'react'
import { FAQS_LIST } from '@/utils/helper';

const Faqs = () => {
    const [active, setActive] = useState(0);
    const toggle = (index) => {
        setActive(active === index ? null : index);
    };
    return (
<<<<<<< HEAD
        <div id='faq' className="">
            <div className='max-w-[1140px] px-4 mx-auto'>
                <CustomHeading customClass="xl:pb-[88px] lg:pb-14 md:pb-8 pb-6" title="Faqs" />
            </div>
            <div className='w-full border-t-2 border-b-2 border-black px-4'>
                <div className="faq-list max-w-[1140px] mx-auto border-l-2 border-r-2">
=======
        <div id='faq' className='px-4'>
            <div className="container pt-[210px] max-xl:pt-[170px] max-lg:pt-14 max-md:pt-10">
                <div className="max-w-[1022px] mt-[60px] max-lg:mt-10 max-md:mt-7 flex flex-col gap-6 mx-auto">
>>>>>>> 710c744d09850e7986d843469e2e1579890f5d0f
                    {FAQS_LIST.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-xl p-6 border border-solid"
                        >
                            <button onClick={() => toggle(index)} className='flex w-full text-black justify-between max-sm:gap-4 bg-transparent items-center text-left max-sm:text-base font-medium text-2xl max-md:text-lg' >
                                {item}{" "}
                                <span>
                                    {active === index ? "+" : "-"}
                                </span>
                            </button>
                            <p className={`text-black max-md:text-sm overflow-hidden overflow-y-auto transition-all duration-300 ${active === index ? "max-h-32 max-sm:max-h-52 pt-4" : "max-h-0" }`} >
                                "hello"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faqs