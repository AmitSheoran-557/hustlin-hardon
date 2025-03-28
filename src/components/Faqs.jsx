"use client";
import React, { useState } from 'react'
import { FAQS_LIST } from '@/utils/helper';
import CustomHeading from './common/CustomHeading';

const Faqs = () => {
    const [active, setActive] = useState(0);
    const toggle = (index) => {
        setActive(active === index ? null : index);
    };
    return (
        <div id='faq'>
            <div className='max-w-[1172px] px-4 mx-auto xl:pb-[89px] lg:pb-14 pb-12'>
                <CustomHeading title="Faqs" />
            </div>
            <div className="border-t-2 border-b-2 border-black">
                <div className='px-4'>
                    <div className="max-w-[1140px] flex flex-col border-r-2 border-l-2 border-black mx-auto">
                        {FAQS_LIST.map((item, index) => (
                            <div
                                key={index}
                                className={`pt-8 max-lg:py-7 max-md:py-6 max-sm:py-5 pb-[43px] pl-[30px] pr-11 max-lg:px-5 ${active === index ? '!pb-6 max-md:!pb-5' : ''} border-b-2 border-black ${index === 6 ? '!border-b-0' : ''}`}
                            >
                                <button onClick={() => toggle(index)} className='cursor-pointer flex w-full text-black justify-between max-sm:gap-4 bg-transparent text-left max-sm:text-base font-medium text-2xl max-md:text-lg' >
                                    {item}{" "}
                                    <span className='text-2xl font-semibold'>
                                        {active === index ? "-" : "+"}
                                    </span>
                                </button>
                                <p className={`text-black max-md:text-sm overflow-hidden max-[992px]:overflow-y-auto transition-all duration-300 max-w-[992px] ${active === index ? "max-h-32 max-sm:max-h-52 pt-4" : "max-h-0"}`} >
                                    NFT stands for “Non-fungible token,” which means that it’s a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFT’s fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a “members-only” card. Hustlin' Hardos works like this
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faqs