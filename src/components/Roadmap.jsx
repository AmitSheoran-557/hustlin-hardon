import { ROADMAP_LIST } from '@/utils/helper'
import React from 'react'
import CustomHeading from './common/CustomHeading';
import Image from 'next/image';

const Roadmap = () => {
    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-4'>
                <CustomHeading title="RoadMap" customClass="!py-[88px] max-lg:!py-15 max-sm:!py-10" />
            </div>
            <div className='line w-full border-t-2 border-b-2 border-black px-4'>
                <div className='max-w-[1140px] relative py-[99px] max-lg:py-18 max-md:py-10 mx-auto border-r-2 border-l-2 pl-9 max-sm:pr-3 max-lg:pl-20 max-[1100px]:gap-5 flex flex-col  border-black'>
                    <div className='w-0.5 h-[90%] max-[1100px]:h-[88%] max-md:h-[92%] absolute left-1/2 translate-x-[-50%] max-lg:left-10 top-26 max-md:top-20  bg-black'>
                    <div className='line relative w-full h-full'></div>
                    </div>
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%]' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%] max-[1100px]:top-69 top-65' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%] max-[1100px]:top-120 top-115' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%] max-[1100px]:top-164 top-154' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%] max-[1100px]:top-233 top-217' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%] max-[1100px]:top-283 top-262' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%] max-[1100px]:top-327 top-307' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    <Image className='max-lg:hidden absolute left-1/2 max-lg:left-10 translate-x-[-50%] max-[1100px]:top-367 top-347' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                    {ROADMAP_LIST.map((item, index) => {
                        let className = 'max-w-[495px] max-[1100px]:max-w-[440px] max-lg:max-w-[800px]';

                        switch (index) {
                            case 0:
                                className += ' lg:ml-auto';
                                break;
                            case 1:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[420px] max-lg:!max-w-[800px]';
                                break;
                            case 2:
                                className += ' lg:ml-auto';
                                break;
                            case 3:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[420px] max-lg:!max-w-[800px]';
                                break;
                            case 4:
                                className += ' lg:ml-auto';
                                break;
                            case 5:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[420px] max-lg:!max-w-[800px]';
                                break;
                            case 6:
                                className += ' lg:ml-auto';
                                break;
                            case 7:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[420px] max-lg:!max-w-[800px]';
                                break;
                            default:
                                break;
                        }

                        return (
                            <div key={index} className={className}>
                                <div className={`${index===1 ?"lg:!-mt-29":index===3 ?"lg:!-mt-29":index===5 ?"lg:!-mt-5":index===7 ?"lg:!-mt-10":""}`}>
                                <Image className='lg:hidden max-[1100px]:max-w-12 max-md:max-w-[40px] absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%]' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon' />
                                <p className='text-sm'>{item.phase}</p>
                                <h2 className='text-4xl min-[1100px]:mt-[10px] max-md:text-3xl max-sm:text-xl font-semibold'>{item.title}</h2>
                                <p className='min-[1100px]:mt-3 max-sm:text-sm'>{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Roadmap
