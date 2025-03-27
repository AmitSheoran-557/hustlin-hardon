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
        <div id='faq' className="">
            <div className='max-w-[1140px] px-4 mx-auto'>
                <CustomHeading customClass="xl:pb-[88px] lg:pb-14 md:pb-8 pb-6" title="Faqs" />
            </div>
            <div className='w-full border-t-2 border-b-2 border-black px-4'>
                <div className="faq-list max-w-[1140px] mx-auto border-l-2 border-r-2">
                    {FAQS_LIST.map((item, index) => (
                        <div key={index} className={`faq-item border-b-2 ${index === 6 ? '!border-b-0' : ''} border-black pl-[30px] pr-11 max-md:px-4 lg:py-8 md:py-5 py-3`}>
                            <div className="faq-header flex gap-5 justify-between cursor-pointer" onClick={() => toggleFAQ(index)}>
                                <h2 className="lg:text-2xl md:text-xl font-semibold">{item}</h2>
                                <span className='font-semibold lg:text-2xl text-xl'>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            <div className={`faq-answer overflow-hidden transition-all ease-linear duration-500`}
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '1px',
                                    paddingTop: openIndex === index ? '16px' : '1px',
                                    paddingBottom: openIndex === index ? '16px' : '1px',
                                }}>
                                {openIndex === index && (
                                    <p className="lg:mt-4 mt-3 lg:text-base text-sm">
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
