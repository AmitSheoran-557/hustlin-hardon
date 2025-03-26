"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';

const CommonSlider = ({ slidesPerView = 3, cardData, customClass, readButton, customContent, profileImgClass, titleCustomClass }) => {
    const swiperRef = useRef(null);

    return (
        <div className="mx-auto px-4 max-[1600px]:max-w-[1920px] lg:max-w-[1172px] max-lg:max-w-[768px] w-full relative">
            <Swiper
                ref={swiperRef}
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
                navigation={false} >
                {cardData.map(({ id, date, title, content, twitterIcon }) => (
                    <SwiperSlide key={id}>
                        <div className={`max-w-[380px] w-full lg:h-[259px] h-56 flex flex-col justify-center border-l-2 border-r-2 px-[25px] ${customClass}`}>
                            <Image className={`hidden ${profileImgClass}`} src="/assets/images/webp/team-card-profile-img.webp" width={88} height={88} alt='profile-img' />
                            <h3 className={`${titleCustomClass} xl:text-4xl lg:text-3xl text-2xl font-semibold lg:mb-3 mb-2`}>{title}</h3>
                            <div className="flex lg:gap-3 gap-2 lg:mb-3 mb-2 items-center">
                                <Link href="https://twitter.com/" target="_blank"> {twitterIcon}</Link>
                                <p>{date}</p>
                            </div>
                            <p className={`lg:text-base text-sm max-w-[327px] lg:mb-4 mb-3 ${customContent}`}>{content}</p>
                            <button className="relative cursor-pointer max-w-max text-black max-lg:text-center text-start lg:text-base text-sm">
                                Read More...
                                <span className="absolute lg:bottom-1 bottom-0.5 left-0 w-full h-[0.8px] bg-black"></span>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between lg:gap-14 md:gap-10 gap-7 absolute xl:-top-36 lg:-top-28 md:-top-20 -top-14 right-4">
                <button className="custom-prev-button cursor-pointer text-black" onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <Image className='lg:min-w-6 md:min-w-5 max-w-4' src="/assets/images/webp/prev-arrow-img.webp" width={24} height={36} alt='prev-arrow-img' />
                </button>
                <button className="custom-next-button cursor-pointer text-black" onClick={() => swiperRef.current.swiper.slideNext()}>
                    <Image className='lg:min-w-6 md:min-w-5 max-w-4' src="/assets/images/webp/next-arrow-img.webp" width={24} height={36} alt='prev-arrow-img' />
                </button>
            </div>
        </div>
    );
};

export default CommonSlider;
