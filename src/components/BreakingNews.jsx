import React from 'react'
import CustomHeading from './common/CustomHeading'
import Description from './common/Description'
import Image from 'next/image'

const BreakingNews = () => {
    return (
        <div className='flex flex-col w-full justify-center items-center xl:pt-[67px] lg:pt-14 pt-12'>
            <div className="max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] px-4 mx-auto">
                <CustomHeading customClass='text-start max-lg:text-center font-medium xl:!text-[72px] !leading-[140%] xl:pb-16 lg:pb-10 md:pb-8 pb-6' title='“BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT project of 2022"' />

            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
            <div className="max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] px-4 mx-auto">

                <div className="flex flex-wrap justify-center items-center lg:border-black lg:border-l-2">
                    <div className="lg:w-6/12 w-full lg:pt-0 pt-6 lg:pe-4">
                        <div className="lg:max-w-[475px] w-full xl:ms-10 lg:ms-7 flex flex-col">
                            <Description customClass='lg:mb-4 mb-3 !text-left max-lg:mx-auto' title='March 1, 2022 by Editor Hardo' />
                            <Description customClass='lg:mb-4 mb-3 lg:!text-lg !leading-[150%] max-w-3xl max-lg:text-center max-lg:mx-auto' title={`Hustlin' Hardos is a collection of 9,999 NFT characters on the Ethereum Blockchain, inspired by the business/ finance world, hustler culture and web3 aesthetics. Each Hustlin' Hardo is a completely original and unique combination of hundreds of potential attributes such as luxury watches, clothing, or accessories - all with provable degrees of rarity. The collection features truly unique and powerful artwork, while offering its holders first-of-its-kind utility. Your Huslin’ Hardo NFT is your gateway to The Boardroom, one of the most rewarding and engaging online communities`} />
                            <button className="relative max-lg:mx-auto cursor-pointer max-w-max text-black max-lg:text-center text-start lg:text-base text-sm">
                                Read More...
                                <span className="absolute lg:bottom-1 bottom-0.5 left-0 w-full h-[0.8px] bg-black"></span>
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-6/12 w-full flex justify-center lg:pt-0 pt-6">
                        <Image className='xl:max-w-[570px] xl:h-[572px] lg:max-w-lg max-w-md w-full lg:border-black lg:border-l-2 lg:border-r-2' src='/assets/images/webp/breaking-news-man-img.webp' width={570} height={572} alt='breaking-news' />
                    </div>
                </div>
            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>

        </div>
    )
}

export default BreakingNews
