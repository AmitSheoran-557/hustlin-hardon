"use client";
import { FAQS_LIST } from '@/utils/helper';
import React, { useState } from 'react';
import CustomHeading from './common/CustomHeading';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="">
            <div className='max-w-[1140px] px-4 mx-auto'>
                <CustomHeading customClass="!py-[88px] max-lg:!py-15 max-sm:!py-10" title="Faqs" />
            </div>
            <div className='w-full border-t-2 border-b-2 border-black px-4'>
                <div className="faq-list max-w-[1140px] mx-auto border-l-2 border-r-2">
                    {FAQS_LIST.map((item, index) => (
                        <div key={index} className="faq-item border-b-2 border-black pl-[30px] pr-11 max-md:px-4 py-8 max-md:py-5">
                            <div
                                className="faq-header flex gap-5 justify-between cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h2 className="text-2xl max-md:text-xl font-medium">{item}</h2>
                                {openIndex === index ? '-' : '+'}
                            </div>
                            <div
                                className={`faq-answer overflow-hidden transition-all duration-1000 ease-linear
                                ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}
                            `}
                            >
                                {openIndex === index && (
                                    <p className="mt-4 text-gray-700">
                                        NFT stands for “Non-fungible token,” which means that it’s a unique, digital item with blockchain-managed ownership that users can buy, own, and trade. Some NFTs' fundamental function is to be digital art. But they can also offer additional benefits like exclusive access to websites, event tickets, game items, and ownership records for physical objects. Think of it as a unique piece of art that can also work as a “members-only” card. Hustlin' Hardos works like this.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
