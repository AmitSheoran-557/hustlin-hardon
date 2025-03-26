"use client";
import React, { useState, useEffect } from 'react';
import CustomHeading from './common/CustomHeading';
import Description from './common/Description';
import Image from 'next/image';
import { MINTING_ITEMS_DATA } from '@/utils/helper';

const Minting = () => {
    const [timeRemaining, setTimeRemaining] = useState(40 * 3600 + 15 * 60 + 12 * 1 + 10);
    const [counter, setCounter] = useState(0);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secondsLeft = seconds % 60;
        const milliseconds = 10;  
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    };

    useEffect(() => {
        if (timeRemaining <= 0) return;

        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining]);

    const incrementCounter = () => {
        setCounter((prevCount) => prevCount + 1);
    };

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter((prevCount) => prevCount - 1);
        }
    };

    return (
        <>
            <div className="max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] px-4 mx-auto">
                <CustomHeading customClass='text-start !leading-[104%] xl:pb-[89px] lg:pb-14 md:pb-8 pb-6 xl:pt-[89px] lg:pt-16 md:pt-14 pt-12' title='Minting' />
            </div>
            <div className='flex flex-col w-full justify-center items-center xl:pb-[89px] lg:pb-14 pb-12'>
                <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
                <div className="max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] px-4 mx-auto">
                    <div className="flex flex-wrap justify-center items-center lg:border-black lg:border-l-2">
                        <div className="lg:w-6/12 w-full lg:pt-0 pt-6 lg:pe-4">
                            <div className="lg:max-w-[438px] w-full xl:ms-10 lg:ms-7 flex flex-col max-lg:items-center">
                                <Description customClass='lg:mb-4 mb-3 !text-left max-lg:mx-auto !leading-[140%] max-lg:!text-center' title='Most of the Hustlin’ Hardos first experienced NFTs via other successful projects like NBA TopShot, where revealing your newly minted item invoked the same emotions as opening up that first pack of baseball cards. NFTs have allowed us to enjoy those feelings once again while also empowering communities through shared ownership. The space has seen incredible growth over the past year, and it is our belief that we are in the very early innings of the paradigm shift that will be powered by web3.' />
                                <div className="flex lg:mb-9 md:mb-7 mb-6 items-center lg:gap-6 gap-4 max-w-max border-2 border-black">
                                    <button onClick={decrementCounter} className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold lg:px-6 cursor-pointer px-4 py-[5px] border-r-2 border-black hover:bg-black hover:text-white transition-all ease-linear duration-300">-</button>
                                    <span className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold">{counter}</span>
                                    <button onClick={incrementCounter} className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold lg:px-6 cursor-pointer px-4 py-[5px] border-l-2 border-black hover:bg-black hover:text-white transition-all ease-linear duration-300">+</button>
                                </div>
                                <button className='text-black font-semibold lg:text-sm teat-xs uppercase cursor-pointer hover:!bg-black hover:text-white transition-all duration-300 ease-linear lg:px-[15px] px-3 lg:py-2.5 py-2 bg-yellow border-[2px] max-w-max xl:Mb-9 lg:mb-8 mb-6'>Mint NOW</button>
                                <p className='text-green lg:text-lg text-sm !leading-[100%] font-semibold'>
                                    Time Left
                                </p>
                                <span className='text-red-2 xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold'> {formatTime(timeRemaining)} </span>
                            </div>
                        </div>
                        <div className="lg:w-6/12 w-full flex justify-center lg:pt-0 pt-6">
                            <Image className='xl:max-w-[570px] xl:h-[567px] lg:max-w-lg max-w-md w-full lg:border-black lg:border-l-2 lg:border-r-2' src='/assets/images/webp/breaking-news-man-img.webp' width={570} height={572} alt='breaking-news' />
                        </div>
                    </div>
                </div>
                <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
                <div className="flex flex-wrap xl:gap-[116px] lg:gap-20 md:gap-16 gap-10 justify-center px-7 lg:py-[21px] py-4">
                    {MINTING_ITEMS_DATA.map((item, index) => (
                        <div key={index}>
                            <p className="lg:text-2xl text-lg">{item.text}</p>
                            <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold">{item.number}</p>
                        </div>
                    ))}
                </div>
                <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
            </div>
        </>
    );
};

export default Minting;
