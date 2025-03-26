"use client";
import React from 'react';
import CommonSlider from './common/CommonSlider';
import { TEAM_CARDS_DATA_LIST } from '@/utils/helper';
import CustomHeading from './common/CustomHeading';
import Image from 'next/image';

const Team = () => {
    return (
        <div className='xl:py-[89px] lg:py-14 py-12'>
            <div className="max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] px-4 mx-auto">
                <CustomHeading customClass='xl:pb-[89px] lg:pb-14 md:pb-8 pb-6 !leading-[104%]' title='Team' />
            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
            <div className="mx-auto max-w-[1172px] w-full">
                <CommonSlider slidesPerView={2} cardData={TEAM_CARDS_DATA_LIST} profileImgClass={"!block lg:mb-4 mb-3"} titleCustomClass="lg:!mb-4 text-brown !mb-1" readButton="!hidden" customContent='!text-center !max-w-[407px]' customClass="!max-w-[570px] !items-center lg:!h-[326px] !h-[280px] bg-[url(/assets/images/webp/team-card-bg-img.webp)] bg-cover bg-no-repeat" />
            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
        </div>
    );
};

export default Team;
