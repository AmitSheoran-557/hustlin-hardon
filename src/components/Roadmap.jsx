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
                <div className='max-w-[1140px] relative py-[99px] mx-auto border-r-2 border-l-2 pl-9 max-sm:pr-3 max-[1100px]:pl-20 max-[1100px]:gap-5 flex flex-col  border-black'>
                    <div className='w-0.5 h-[92%] absolute left-1/2 translate-x-[-50%] max-[1100px]:left-10 top-26 bg-black'>
                    
                    </div>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%]' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] top-93' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] top-144' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] top-212' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] top-273' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] top-322' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] top-367' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='max-[1100px]:hidden absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] top-416' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                    <Image className='absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%] max-[1100px]:top-459.5 top-427.5' width={10} height={20} src="/assets/images/webp/arrow.webp" alt='arrpw icon'/>
                    {ROADMAP_LIST.map((item, index) => {
                        let className = 'max-w-[495px] max-[1100px]:max-w-[800px]';

                        switch (index) {
                            case 0:
                                className += ' min-[1100px]:ml-auto';
                                break;
                            case 1:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[800px]';
                                break;
                            case 2:
                                className += ' min-[1100px]:ml-auto';
                                break;
                            case 3:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[800px]';
                                break;
                            case 4:
                                className += ' min-[1100px]:ml-auto';
                                break;
                            case 5:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[800px]';
                                break;
                            case 6:
                                className += ' min-[1100px]:ml-auto';
                                break;
                            case 7:
                                className += ' !max-w-[460px] max-[1100px]:!max-w-[800px]';
                                break;
                            default:
                                break;
                        }

                        return (
                            <div key={index} className={className}>
                                <Image className='min-[1100px]:hidden max-md:max-w-[40px] absolute left-1/2 max-[1100px]:left-10 translate-x-[-50%]' width={59} height={59} src="/assets/images/webp/faq-icon.webp" alt='faq icon'/>
                                <p className='text-sm'>{item.phase}</p>
                                <h2 className='text-4xl mt-[10px] max-md:text-3xl max-sm:text-2xl font-semibold'>{item.title}</h2>
                                <p className='mt-3'>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Roadmap
