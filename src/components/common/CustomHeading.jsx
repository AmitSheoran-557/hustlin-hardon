import React from 'react'

const CustomHeading = ({ title, customClass }) => {
    return (
        <h2 className={`xl:text-[80px] lg:text-[60px] md:text-[50px] text-[40px] !leading-[104%]${customClass}`}>{title}</h2>
    )
}

export default CustomHeading
