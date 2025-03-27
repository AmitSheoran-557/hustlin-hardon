"use client";
import React, { useState } from 'react'
import { FAQS_LIST } from '@/utils/helper';

const Faqs = () => {
    const [active, setActive] = useState(0);
    const toggle = (index) => {
        setActive(active === index ? null : index);
    };
    return (
        <div id='faq' className='px-4'>
            <div className="container pt-[210px] max-xl:pt-[170px] max-lg:pt-14 max-md:pt-10">
                <div className="max-w-[1022px] mt-[60px] max-lg:mt-10 max-md:mt-7 flex flex-col gap-6 mx-auto">
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