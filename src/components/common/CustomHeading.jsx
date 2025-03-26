import React from 'react'

const CustomHeading = ({ title, customClass }) => {
    return (
        <h2 className={`xl:text-[80px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-3xl !leading-[104%] ${customClass}`}>{title}</h2>
    )
}

export default CustomHeading
