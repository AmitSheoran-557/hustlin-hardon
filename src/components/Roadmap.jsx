import { ROADMAP_LIST } from '@/utils/helper'
import React from 'react'
import CustomHeading from './common/CustomHeading';

const Roadmap = () => {
    return (
        <div className='bg-[#F8F3E4]'>
            <div className='max-w-[1140px] mx-auto'>

                <CustomHeading title="RoadMap" customClass="!py-[88px]" />
            </div>
            <div className='w-full border-t-2 border-b-2 border-black px-4'>
                <div className='max-w-[1140px] relative py-[99px] mx-auto border-r-2 border-l-2 pl-9 border-black'>
                    <div className='w-0.5 h-[92%] absolute left-1/2 top-20 bg-black'></div>
                    {ROADMAP_LIST.map((item, index) => {
                        let className = 'max-w-[495px]';

                        switch (index) {
                            case 0:
                                className += ' ml-auto';
                                break;
                            case 1:
                                className += ' !max-w-[460px]';
                                break;
                            case 2:
                                className += ' ml-auto';
                                break;
                            case 3:
                                className += ' !max-w-[460px]';
                                break;
                            case 4:
                                className += ' ml-auto';
                                break;
                            case 5:
                                className += ' !max-w-[460px]';
                                break;
                            case 6:
                                className += ' ml-auto';
                                break;
                            case 7:
                                className += ' !max-w-[460px]';
                                break;
                            default:
                                break;
                        }

                        return (
                            <div key={index} className={className}>
                                <p className='text-sm'>{item.phase}</p>
                                <h2 className='text-4xl font-semibold'>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Roadmap
