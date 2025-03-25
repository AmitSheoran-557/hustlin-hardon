import React from 'react'
import Header from './common/Header'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='overflow-hidden'>
            <Header />
            <div className="px-4 max-[1600px]:max-w-[1920px] lg:max-w-[1172px] md:max-w-[1024px] max-w-[768px] mx-auto">
                <h1 className='font-modernofb lg:pt-6 pt-5 xl:text-87px] lg:text-[100px] md:text-[80px] text-[60px] !leading-[100%]'>THE HUSTLIN’ HARDOS.</h1>
            </div>
            <Image className='mx-auto w-full max-h-[476px] object-cover' src='/assets/images/webp/hero-cabin-img.webp' width={1440} height={476} alt='hero-image' />
        </div>
    )
}

export default Hero
