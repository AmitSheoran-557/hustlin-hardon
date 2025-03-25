import { HEADER_LINKS_DATA, HEADER_SOCIAL_DATA } from '@/utils/helper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
    const MARKET_DATA_LIST = [
        { name: 'S&P', change: '-1.01%', color: 'text-red' },
        { name: 'Shanghai', change: '+0.87%', color: 'text-yellow' },
        { name: 'FTSE 100', change: '+0.13%', color: 'text-yellow' },
        { name: 'ASD 100', change: '+0.13%', color: 'text-yellow' },
        { name: 'Brent Crude Oil', change: '-0.24%', color: 'text-red' },
        { name: 'DSC', change: '-0.24%', color: 'text-red' },
        { name: 'AXD 100', change: '+0.13%', color: 'text-yellow' },
        { name: 'Euro/Dollar', change: '+0.02%', color: 'text-yellow' },
    ];

    return (
        <>
            <div className="bg-black lg:py-4 md:py-3 py-2 flex items-center overflow-hidden max-w-[1920px] mx-auto">
                <div className="scrolling-content text-white flex animate-marquee whitespace-nowrap">
                    {MARKET_DATA_LIST.map((market, index) => (
                        <div key={index} className="flex items-center xl:mr-[62px] lg:mr-11 mr-7">
                            <span className={`lg:mr-2 uppercase !leading-[100%] mr-1 lg:text-base text-sm ${index === 5 ? 'lg:!mr-3' : ''}`}>{market.name}</span>
                            <div className={`flex items-center whitespace-nowrap bg-lightBrown text-white rounded-[73px]`}>
                                <span className={`lg:text-base text-sm border rounded-[5px] py-[3px] px-1 ${market.color}`}>{market.change}</span>
                            </div>
                        </div>
                    ))}
                    {MARKET_DATA_LIST.map((market, index) => (
                        <div key={index} className="flex items-center xl:mr-[62px] lg:mr-11 mr-7">
                            <span className={`lg:mr-2 uppercase !leading-[100%] mr-1 lg:text-base text-sm ${index === 5 ? 'lg:!mr-3' : ''}`}>{market.name}</span>
                            <div className={`flex items-center whitespace-nowrap bg-lightBrown text-white rounded-[73px]`}>
                                <span className={`lg:text-base text-sm border rounded-[5px] py-[3px] px-1 ${market.color}`}>{market.change}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] mx-auto lg:pt-2 pt-1.5 lg:pb-4 pb-3  flex justify-end">
                <div className="flex items-center overflow-hidden lg:max-w-[658px] w-full justify-between">
                    <div className="flex items-center">
                        <Link className='lg:text-2xl md:text-xl text-lg !leading-[100%] font-modernofb' href="/">Hustlin' Hardos</Link>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div className="flex xl:gap-[18px] lg:gap-4 gap-3">
                            {HEADER_SOCIAL_DATA.map((social, index) => (
                                <Link key={index} href={social.link}>
                                    <Image className='lg:max-w-6 max-w-5' src={social.iconImage} width={24} height={24} alt="social-icon" />
                                </Link>
                            ))}
                        </div>
                        <button className='lg:text-sm text-xs cursor-pointer hover:!bg-transparent transition-all ease-liner duration-300 lg:px-4 px-3 lg:py-3 py-2 bg-yellow font-semibold uppercase border-[2px] border-black'>Connect Wallet</button>
                    </div>
                </div>
            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
            <div className='flex justify-center items-center'>
                {HEADER_LINKS_DATA.map((link, index) => (
                    <Link className={`!leading-[100%] lg:text-base lg:h-[38px] md:h-8 h-7 flex items-center sm:text-sm text-xs uppercase lg:px-6 md:px-5 px-3 md:border-l-[2px] border-l-[1px] border-black ${index === 4 ? 'md:!border-r-[2px] !border-r-[1px] border-black' : ''}`} target='_blank' key={index} href={link.link}>{link.name}</Link>
                ))}
            </div>
            <div className="bg-black md:h-[2px] h-[1px] w-full"></div>
        </>
    );

}

export default Header

