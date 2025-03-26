"use client";
import React from 'react';
import CommonSlider from './common/CommonSlider';
import { LATEST_TWEETS_DATA_LIST } from '@/utils/helper';
import CustomHeading from './common/CustomHeading';

const LatestTweets = () => {
    return (
        <>
            <div className="max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] px-4 mx-auto relative">
                <CustomHeading customClass='xl:pt-[88px] lg:pt-14 pt-12 xl:pb-[97px] uppercase lg:pb-14 md:pb-8 pb-6 lg:!leading-[90%]' title='Latest Tweets' />
            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
            <div className="mx-auto max-[1600px]:max-w-[1920px] lg:max-w-[1172px] max-w-[768px] w-full">
                <CommonSlider slidesPerView={3} cardData={LATEST_TWEETS_DATA_LIST} />
            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
        </>
    );
};

export default LatestTweets;
