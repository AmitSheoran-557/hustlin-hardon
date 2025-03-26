"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TwitterIcon } from '@/utils/icons';
import Image from 'next/image';

const CommonSlider = ({ slidesPerView = 3, cardData, customClass, readButton,customContent,profileImgClass,titleCustomClass }) => {
    return (
        <div className="mx-auto px-4 max-w-[1172px] w-full">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: slidesPerView,
                    },
                    768: {
                        slidesPerView: Math.max(1, slidesPerView - 1),
                    },
                    640: {
                        slidesPerView: 1,
                    },
                }}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}>
                {cardData.map(({ id, date, title, content, twitterIcon }) => (
                    <SwiperSlide key={id}>
                        <div className={`max-w-[380px] w-full lg:h-[259px] h-56 flex flex-col justify-center border-l-2 border-r-2 px-[26px] ${customClass}`}>
                            <Image className={`hidden ${profileImgClass}`} src="/assets/images/webp/team-card-profile-img.webp" width={88} height={88} alt='profile-img' />
                            <h3 className={`${titleCustomClass} xl:text-4xl lg:text-3xl text-2xl font-semibold lg:mb-3 mb-2`}>{title}</h3>
                            <div className="flex lg:gap-3 gap-2 lg:mb-3 mb-2 items-center">
                                <span>{twitterIcon}</span>
                                <p>{date}</p>
                            </div>
                            <p className={`lg:text-base text-sm max-w-[327px] lg:mb-4 mb-3 ${customContent}`}>{content}</p>
                            <button className={`underline cursor-pointer text-black text-start lg:text-base teat-sm ${readButton}`}>Read More...</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CommonSlider;
